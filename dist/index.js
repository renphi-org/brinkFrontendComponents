import * as Ka from "vue";
import { h as qt, defineComponent as P, reactive as on, inject as Jt, computed as V, unref as l, getCurrentInstance as Qt, watchEffect as ga, createBlock as A, openBlock as p, mergeProps as j, withCtx as h, renderSlot as L, watch as Re, getCurrentScope as $l, hasInjectionContext as ds, toValue as we, isRef as Pa, onMounted as Gt, nextTick as va, readonly as fs, toRef as Dl, ref as se, customRef as Ll, toRefs as sn, shallowRef as yt, createVNode as w, createElementVNode as q, createElementBlock as R, normalizeClass as ee, normalizeStyle as Da, createTextVNode as de, withDirectives as ps, vModelText as Il, normalizeProps as Mt, guardReactiveProps as ea, Fragment as pe, toDisplayString as J, resolveDynamicComponent as Ke, createCommentVNode as te, renderList as Ee, onUnmounted as yn, useTemplateRef as Ml, Text as Rl, mergeModels as Ce, useModel as ve, resolveDirective as Bl, createSlots as Ua, resolveComponent as Fl, triggerRef as _n, useSlots as Vl, withModifiers as ms, onBeforeUnmount as Ul, withKeys as zl } from "vue";
import { useForwardPropsEmits as Ne, CollapsibleRoot as Gl, CollapsibleContent as Wl, CollapsibleTrigger as jl, DialogRoot as wn, DialogOverlay as xn, DialogPortal as En, DialogContent as kn, DialogClose as gs, DialogDescription as Cn, DialogTitle as Sn, createContext as On, Primitive as ha, TooltipRoot as Hl, TooltipPortal as Yl, TooltipContent as Kl, TooltipArrow as Xl, TooltipTrigger as ql, TooltipProvider as Jl, PaginationRoot as Zl, PaginationList as Ql, useForwardProps as Je, PaginationFirst as er, PaginationLast as tr, PaginationNext as ar, PaginationPrev as nr, SelectRoot as or, SelectPortal as sr, SelectContent as lr, SelectViewport as rr, SelectItem as ir, SelectItemIndicator as ur, SelectItemText as cr, SelectScrollDownButton as dr, SelectScrollUpButton as fr, SelectValue as pr, DropdownMenuSeparator as mr, SelectTrigger as gr, CheckboxRoot as vr, CheckboxIndicator as hr, DropdownMenuRoot as br, DropdownMenuCheckboxItem as yr, DropdownMenuItemIndicator as _r, DropdownMenuPortal as wr, DropdownMenuContent as xr, DropdownMenuItem as Er, DropdownMenuLabel as kr, DropdownMenuTrigger as Cr, useFilter as Sr, ListboxRoot as Or, ListboxFilter as Tr, ListboxContent as Nr, ListboxItem as Ar, ListboxItemIndicator as Pr, AlertDialogRoot as $r, AlertDialogAction as Dr, AlertDialogCancel as Lr, AlertDialogPortal as Ir, AlertDialogOverlay as Mr, AlertDialogContent as Rr, AlertDialogDescription as Br, AlertDialogTitle as Fr, PopoverRoot as Vr, PopoverPortal as Ur, PopoverContent as zr, PopoverTrigger as Gr } from "reka-ui";
const no = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Wr = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, a, n) => n ? n.toUpperCase() : a.toLowerCase()
), jr = (e) => {
  const t = Wr(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Hr = (...e) => e.filter((t, a, n) => !!t && t.trim() !== "" && n.indexOf(t) === a).join(" ").trim(), oo = (e) => e === "";
var la = {
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
const Yr = ({
  name: e,
  iconNode: t,
  absoluteStrokeWidth: a,
  "absolute-stroke-width": n,
  strokeWidth: o,
  "stroke-width": s,
  size: r = la.width,
  color: i = la.stroke,
  ...u
}, { slots: c }) => qt(
  "svg",
  {
    ...la,
    ...u,
    width: r,
    height: r,
    stroke: i,
    "stroke-width": oo(a) || oo(n) || a === !0 || n === !0 ? Number(o || s || la["stroke-width"]) * 24 / Number(r) : o || s || la["stroke-width"],
    class: Hr(
      "lucide",
      u.class,
      ...e ? [`lucide-${no(jr(e))}-icon`, `lucide-${no(e)}`] : ["lucide-icon"]
    )
  },
  [...t.map((g) => qt(...g)), ...c.default ? [c.default()] : []]
);
const Pe = (e, t) => (a, { slots: n, attrs: o }) => qt(
  Yr,
  {
    ...o,
    ...a,
    iconNode: t,
    name: e
  },
  n
);
const so = Pe("arrow-down", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
const Kr = Pe("arrow-up-down", [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
]);
const lo = Pe("arrow-up", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
const za = Pe("check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
const ta = Pe("chevron-down", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
const vs = Pe("chevron-left", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
const Wt = Pe("chevron-right", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
const Xr = Pe("chevron-up", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]);
const hs = Pe("chevrons-left", [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
]);
const bs = Pe("chevrons-right", [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
]);
const qr = Pe("chevrons-up-down", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]);
const Jr = Pe("eye-off", [
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
const ys = Pe("frown", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M16 16s-1.5-2-4-2-4 2-4 2", key: "epbg0q" }],
  ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
  ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }]
]);
const Zr = Pe("loader-circle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
const Tn = Pe("plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
const Qr = Pe("rotate-ccw", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
]);
const ei = Pe("search", [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
]);
const ti = Pe("settings-2", [
  ["path", { d: "M14 17H5", key: "gfn3mx" }],
  ["path", { d: "M19 7h-9", key: "6i9tg" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
]);
const ai = Pe("trash-2", [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
]);
const ba = Pe("x", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
const ni = typeof document < "u", oi = () => {
}, La = Array.isArray;
function ro(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
function io(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function si(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (var a in e) if (!li(e[a], t[a])) return !1;
  return !0;
}
function li(e, t) {
  return La(e) ? uo(e, t) : La(t) ? uo(t, e) : e?.valueOf() === t?.valueOf();
}
function uo(e, t) {
  return La(t) ? e.length === t.length && e.every((a, n) => a === t[n]) : e.length === 1 && e[0] === t;
}
function co(e) {
  return typeof e == "string" || e && typeof e == "object";
}
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
const _s = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "router" : ""), ri = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
process.env.NODE_ENV;
function fo(e) {
  const t = Jt(_s), a = Jt(ri);
  let n = !1, o = null;
  const s = V(() => {
    const g = l(e.to);
    return process.env.NODE_ENV !== "production" && (!n || g !== o) && (co(g) || (n ? ro(`Invalid value for prop "to" in useLink()
- to:`, g, `
- previous to:`, o, `
- props:`, e) : ro(`Invalid value for prop "to" in useLink()
- to:`, g, `
- props:`, e)), o = g, n = !0), t.resolve(g);
  }), r = V(() => {
    const { matched: g } = s.value, { length: m } = g, f = g[m - 1], S = a.matched;
    if (!f || !S.length) return -1;
    const M = S.findIndex(io.bind(null, f));
    if (M > -1) return M;
    const k = po(g[m - 2]);
    return m > 1 && po(f) === k && S[S.length - 1].path !== k ? S.findIndex(io.bind(null, g[m - 2])) : M;
  }), i = V(() => r.value > -1 && di(a.params, s.value.params)), u = V(() => r.value > -1 && r.value === a.matched.length - 1 && si(a.params, s.value.params));
  function c(g = {}) {
    if (ci(g)) {
      const m = t[l(e.replace) ? "replace" : "push"](l(e.to)).catch(oi);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => m), m;
    }
    return Promise.resolve();
  }
  if (process.env.NODE_ENV !== "production" && ni) {
    const g = Qt();
    if (g) {
      const m = {
        route: s.value,
        isActive: i.value,
        isExactActive: u.value,
        error: null
      };
      g.__vrl_devtools = g.__vrl_devtools || [], g.__vrl_devtools.push(m), ga(() => {
        m.route = s.value, m.isActive = i.value, m.isExactActive = u.value, m.error = co(l(e.to)) ? null : 'Invalid "to" value';
      }, { flush: "post" });
    }
  }
  return {
    route: s,
    href: V(() => s.value.href),
    isActive: i,
    isExactActive: u,
    navigate: c
  };
}
function ii(e) {
  return e.length === 1 ? e[0] : e;
}
const ui = /* @__PURE__ */ P({
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
  useLink: fo,
  setup(e, { slots: t }) {
    const a = on(fo(e)), { options: n } = Jt(_s), o = V(() => ({
      [mo(e.activeClass, n.linkActiveClass, "router-link-active")]: a.isActive,
      [mo(e.exactActiveClass, n.linkExactActiveClass, "router-link-exact-active")]: a.isExactActive
    }));
    return () => {
      const s = t.default && ii(t.default(a));
      return e.custom ? s : qt("a", {
        "aria-current": a.isExactActive ? e.ariaCurrentValue : null,
        href: a.href,
        onClick: a.navigate,
        class: o.value
      }, s);
    };
  }
}), Xa = ui;
function ci(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function di(e, t) {
  for (const a in t) {
    const n = t[a], o = e[a];
    if (typeof n == "string") {
      if (n !== o) return !1;
    } else if (!La(o) || o.length !== n.length || n.some((s, r) => s.valueOf() !== o[r].valueOf())) return !1;
  }
  return !0;
}
function po(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const mo = (e, t, a) => e ?? t ?? a, fi = /* @__PURE__ */ P({
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
    return (s, r) => (p(), A(l(Gl), j({ "data-slot": "collapsible" }, l(o)), {
      default: h(({ open: i }) => [
        L(s.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), pi = /* @__PURE__ */ P({
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (p(), A(l(Wl), j({ "data-slot": "collapsible-content" }, t), {
      default: h(() => [
        L(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), mi = /* @__PURE__ */ P({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (p(), A(l(jl), j({ "data-slot": "collapsible-trigger" }, t), {
      default: h(() => [
        L(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function ws(e) {
  var t, a, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (a = ws(e[t])) && (n && (n += " "), n += a);
  } else for (a in e) e[a] && (n && (n += " "), n += a);
  return n;
}
function xs() {
  for (var e, t, a = 0, n = "", o = arguments.length; a < o; a++) (e = arguments[a]) && (t = ws(e)) && (n && (n += " "), n += t);
  return n;
}
const go = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, vo = xs, jt = (e, t) => (a) => {
  var n;
  if (t?.variants == null) return vo(e, a?.class, a?.className);
  const { variants: o, defaultVariants: s } = t, r = Object.keys(o).map((c) => {
    const g = a?.[c], m = s?.[c];
    if (g === null) return null;
    const f = go(g) || go(m);
    return o[c][f];
  }), i = a && Object.entries(a).reduce((c, g) => {
    let [m, f] = g;
    return f === void 0 || (c[m] = f), c;
  }, {}), u = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((c, g) => {
    let { class: m, className: f, ...S } = g;
    return Object.entries(S).every((M) => {
      let [k, I] = M;
      return Array.isArray(I) ? I.includes({
        ...s,
        ...i
      }[k]) : {
        ...s,
        ...i
      }[k] === I;
    }) ? [
      ...c,
      m,
      f
    ] : c;
  }, []);
  return vo(e, r, u, a?.class, a?.className);
}, gi = (e, t) => {
  const a = new Array(e.length + t.length);
  for (let n = 0; n < e.length; n++)
    a[n] = e[n];
  for (let n = 0; n < t.length; n++)
    a[e.length + n] = t[n];
  return a;
}, vi = (e, t) => ({
  classGroupId: e,
  validator: t
}), Es = (e = /* @__PURE__ */ new Map(), t = null, a) => ({
  nextPart: e,
  validators: t,
  classGroupId: a
}), Ia = "-", ho = [], hi = "arbitrary..", bi = (e) => {
  const t = _i(e), {
    conflictingClassGroups: a,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (r) => {
      if (r.startsWith("[") && r.endsWith("]"))
        return yi(r);
      const i = r.split(Ia), u = i[0] === "" && i.length > 1 ? 1 : 0;
      return ks(i, u, t);
    },
    getConflictingClassGroupIds: (r, i) => {
      if (i) {
        const u = n[r], c = a[r];
        return u ? c ? gi(c, u) : u : c || ho;
      }
      return a[r] || ho;
    }
  };
}, ks = (e, t, a) => {
  if (e.length - t === 0)
    return a.classGroupId;
  const o = e[t], s = a.nextPart.get(o);
  if (s) {
    const c = ks(e, t + 1, s);
    if (c) return c;
  }
  const r = a.validators;
  if (r === null)
    return;
  const i = t === 0 ? e.join(Ia) : e.slice(t).join(Ia), u = r.length;
  for (let c = 0; c < u; c++) {
    const g = r[c];
    if (g.validator(i))
      return g.classGroupId;
  }
}, yi = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), a = t.indexOf(":"), n = t.slice(0, a);
  return n ? hi + n : void 0;
})(), _i = (e) => {
  const {
    theme: t,
    classGroups: a
  } = e;
  return wi(a, t);
}, wi = (e, t) => {
  const a = Es();
  for (const n in e) {
    const o = e[n];
    Nn(o, a, n, t);
  }
  return a;
}, Nn = (e, t, a, n) => {
  const o = e.length;
  for (let s = 0; s < o; s++) {
    const r = e[s];
    xi(r, t, a, n);
  }
}, xi = (e, t, a, n) => {
  if (typeof e == "string") {
    Ei(e, t, a);
    return;
  }
  if (typeof e == "function") {
    ki(e, t, a, n);
    return;
  }
  Ci(e, t, a, n);
}, Ei = (e, t, a) => {
  const n = e === "" ? t : Cs(t, e);
  n.classGroupId = a;
}, ki = (e, t, a, n) => {
  if (Si(e)) {
    Nn(e(n), t, a, n);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(vi(a, e));
}, Ci = (e, t, a, n) => {
  const o = Object.entries(e), s = o.length;
  for (let r = 0; r < s; r++) {
    const [i, u] = o[r];
    Nn(u, Cs(t, i), a, n);
  }
}, Cs = (e, t) => {
  let a = e;
  const n = t.split(Ia), o = n.length;
  for (let s = 0; s < o; s++) {
    const r = n[s];
    let i = a.nextPart.get(r);
    i || (i = Es(), a.nextPart.set(r, i)), a = i;
  }
  return a;
}, Si = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, Oi = (e) => {
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
}, ln = "!", bo = ":", Ti = [], yo = (e, t, a, n, o) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: a,
  maybePostfixModifierPosition: n,
  isExternal: o
}), Ni = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: a
  } = e;
  let n = (o) => {
    const s = [];
    let r = 0, i = 0, u = 0, c;
    const g = o.length;
    for (let k = 0; k < g; k++) {
      const I = o[k];
      if (r === 0 && i === 0) {
        if (I === bo) {
          s.push(o.slice(u, k)), u = k + 1;
          continue;
        }
        if (I === "/") {
          c = k;
          continue;
        }
      }
      I === "[" ? r++ : I === "]" ? r-- : I === "(" ? i++ : I === ")" && i--;
    }
    const m = s.length === 0 ? o : o.slice(u);
    let f = m, S = !1;
    m.endsWith(ln) ? (f = m.slice(0, -1), S = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      m.startsWith(ln) && (f = m.slice(1), S = !0)
    );
    const M = c && c > u ? c - u : void 0;
    return yo(s, S, f, M);
  };
  if (t) {
    const o = t + bo, s = n;
    n = (r) => r.startsWith(o) ? s(r.slice(o.length)) : yo(Ti, !1, r, void 0, !0);
  }
  if (a) {
    const o = n;
    n = (s) => a({
      className: s,
      parseClassName: o
    });
  }
  return n;
}, Ai = (e) => {
  const t = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((a, n) => {
    t.set(a, 1e6 + n);
  }), (a) => {
    const n = [];
    let o = [];
    for (let s = 0; s < a.length; s++) {
      const r = a[s], i = r[0] === "[", u = t.has(r);
      i || u ? (o.length > 0 && (o.sort(), n.push(...o), o = []), n.push(r)) : o.push(r);
    }
    return o.length > 0 && (o.sort(), n.push(...o)), n;
  };
}, Pi = (e) => ({
  cache: Oi(e.cacheSize),
  parseClassName: Ni(e),
  sortModifiers: Ai(e),
  ...bi(e)
}), $i = /\s+/, Di = (e, t) => {
  const {
    parseClassName: a,
    getClassGroupId: n,
    getConflictingClassGroupIds: o,
    sortModifiers: s
  } = t, r = [], i = e.trim().split($i);
  let u = "";
  for (let c = i.length - 1; c >= 0; c -= 1) {
    const g = i[c], {
      isExternal: m,
      modifiers: f,
      hasImportantModifier: S,
      baseClassName: M,
      maybePostfixModifierPosition: k
    } = a(g);
    if (m) {
      u = g + (u.length > 0 ? " " + u : u);
      continue;
    }
    let I = !!k, y = n(I ? M.substring(0, k) : M);
    if (!y) {
      if (!I) {
        u = g + (u.length > 0 ? " " + u : u);
        continue;
      }
      if (y = n(M), !y) {
        u = g + (u.length > 0 ? " " + u : u);
        continue;
      }
      I = !1;
    }
    const _ = f.length === 0 ? "" : f.length === 1 ? f[0] : s(f).join(":"), x = S ? _ + ln : _, b = x + y;
    if (r.indexOf(b) > -1)
      continue;
    r.push(b);
    const O = o(y, I);
    for (let $ = 0; $ < O.length; ++$) {
      const E = O[$];
      r.push(x + E);
    }
    u = g + (u.length > 0 ? " " + u : u);
  }
  return u;
}, Li = (...e) => {
  let t = 0, a, n, o = "";
  for (; t < e.length; )
    (a = e[t++]) && (n = Ss(a)) && (o && (o += " "), o += n);
  return o;
}, Ss = (e) => {
  if (typeof e == "string")
    return e;
  let t, a = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Ss(e[n])) && (a && (a += " "), a += t);
  return a;
}, Ii = (e, ...t) => {
  let a, n, o, s;
  const r = (u) => {
    const c = t.reduce((g, m) => m(g), e());
    return a = Pi(c), n = a.cache.get, o = a.cache.set, s = i, i(u);
  }, i = (u) => {
    const c = n(u);
    if (c)
      return c;
    const g = Di(u, a);
    return o(u, g), g;
  };
  return s = r, (...u) => s(Li(...u));
}, Mi = [], De = (e) => {
  const t = (a) => a[e] || Mi;
  return t.isThemeGetter = !0, t;
}, Os = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Ts = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Ri = /^\d+\/\d+$/, Bi = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Fi = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Vi = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Ui = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, zi = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Kt = (e) => Ri.test(e), re = (e) => !!e && !Number.isNaN(Number(e)), xt = (e) => !!e && Number.isInteger(Number(e)), qa = (e) => e.endsWith("%") && re(e.slice(0, -1)), vt = (e) => Bi.test(e), Gi = () => !0, Wi = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Fi.test(e) && !Vi.test(e)
), Ns = () => !1, ji = (e) => Ui.test(e), Hi = (e) => zi.test(e), Yi = (e) => !K(e) && !X(e), Ki = (e) => aa(e, $s, Ns), K = (e) => Os.test(e), Pt = (e) => aa(e, Ds, Wi), Ja = (e) => aa(e, Qi, re), _o = (e) => aa(e, As, Ns), Xi = (e) => aa(e, Ps, Hi), wa = (e) => aa(e, Ls, ji), X = (e) => Ts.test(e), ra = (e) => na(e, Ds), qi = (e) => na(e, eu), wo = (e) => na(e, As), Ji = (e) => na(e, $s), Zi = (e) => na(e, Ps), xa = (e) => na(e, Ls, !0), aa = (e, t, a) => {
  const n = Os.exec(e);
  return n ? n[1] ? t(n[1]) : a(n[2]) : !1;
}, na = (e, t, a = !1) => {
  const n = Ts.exec(e);
  return n ? n[1] ? t(n[1]) : a : !1;
}, As = (e) => e === "position" || e === "percentage", Ps = (e) => e === "image" || e === "url", $s = (e) => e === "length" || e === "size" || e === "bg-size", Ds = (e) => e === "length", Qi = (e) => e === "number", eu = (e) => e === "family-name", Ls = (e) => e === "shadow", tu = () => {
  const e = De("color"), t = De("font"), a = De("text"), n = De("font-weight"), o = De("tracking"), s = De("leading"), r = De("breakpoint"), i = De("container"), u = De("spacing"), c = De("radius"), g = De("shadow"), m = De("inset-shadow"), f = De("text-shadow"), S = De("drop-shadow"), M = De("blur"), k = De("perspective"), I = De("aspect"), y = De("ease"), _ = De("animate"), x = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], b = () => [
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
  ], O = () => [...b(), X, K], $ = () => ["auto", "hidden", "clip", "visible", "scroll"], E = () => ["auto", "contain", "none"], B = () => [X, K, u], Q = () => [Kt, "full", "auto", ...B()], Z = () => [xt, "none", "subgrid", X, K], le = () => ["auto", {
    span: ["full", xt, X, K]
  }, xt, X, K], H = () => [xt, "auto", X, K], be = () => ["auto", "min", "max", "fr", X, K], C = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], z = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], T = () => ["auto", ...B()], ge = () => [Kt, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...B()], W = () => [e, X, K], We = () => [...b(), wo, _o, {
    position: [X, K]
  }], Fe = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], Ze = () => ["auto", "cover", "contain", Ji, Ki, {
    size: [X, K]
  }], pt = () => [qa, ra, Pt], Se = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    c,
    X,
    K
  ], $e = () => ["", re, ra, Pt], Qe = () => ["solid", "dashed", "dotted", "double"], Ot = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ye = () => [re, qa, wo, _o], Xe = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    M,
    X,
    K
  ], et = () => ["none", re, X, K], tt = () => ["none", re, X, K], mt = () => [re, X, K], at = () => [Kt, "full", ...B()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [vt],
      breakpoint: [vt],
      color: [Gi],
      container: [vt],
      "drop-shadow": [vt],
      ease: ["in", "out", "in-out"],
      font: [Yi],
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
        aspect: ["auto", "square", Kt, K, X, I]
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
        columns: [re, K, X, i]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": x()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": x()
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
        object: O()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: $()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": $()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": $()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: E()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": E()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": E()
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
        z: [xt, "auto", X, K]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Kt, "full", "auto", i, ...B()]
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
        flex: [re, Kt, "auto", "initial", "none", K]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", re, X, K]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", re, X, K]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [xt, "first", "last", "none", X, K]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": Z()
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
        "grid-rows": Z()
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
        "auto-cols": be()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": be()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: B()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": B()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": B()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...C(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...z(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...z()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...C()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...z(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...z(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": C()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...z(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...z()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: B()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: B()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: B()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: B()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: B()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: B()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: B()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: B()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: B()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: T()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: T()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: T()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: T()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: T()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: T()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: T()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: T()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: T()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": B()
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
        "space-y": B()
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
        size: ge()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [i, "screen", ...ge()]
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
          ...ge()
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
          ...ge()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...ge()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...ge()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...ge()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", a, ra, Pt]
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
        font: [n, X, Ja]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", qa, K]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [qi, K, t]
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
        tracking: [o, X, K]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [re, "none", X, Ja]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          s,
          ...B()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", X, K]
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
        list: ["disc", "decimal", "none", X, K]
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
        decoration: [...Qe(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [re, "from-font", "auto", X, Pt]
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
        "underline-offset": [re, "auto", X, K]
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
        indent: B()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", X, K]
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
        content: ["none", X, K]
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
        bg: We()
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
        bg: Ze()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, xt, X, K],
          radial: ["", X, K],
          conic: [xt, X, K]
        }, Zi, Xi]
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
        rounded: Se()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": Se()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": Se()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": Se()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": Se()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": Se()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": Se()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": Se()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": Se()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": Se()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": Se()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": Se()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": Se()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": Se()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": Se()
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
        border: [...Qe(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...Qe(), "hidden", "none"]
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
        outline: [...Qe(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [re, X, K]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", re, ra, Pt]
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
          g,
          xa,
          wa
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
        "inset-shadow": ["none", m, xa, wa]
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
        "ring-offset": [re, Pt]
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
        "text-shadow": ["none", f, xa, wa]
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
        opacity: [re, X, K]
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
        "mask-linear-from": ye()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": ye()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": W()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": W()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": ye()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": ye()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": W()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": W()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": ye()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": ye()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": W()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": W()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": ye()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": ye()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": W()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": W()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": ye()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": ye()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": W()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": W()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": ye()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": ye()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": W()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": W()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": ye()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": ye()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": W()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": W()
      }],
      "mask-image-radial": [{
        "mask-radial": [X, K]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": ye()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": ye()
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
        "mask-radial-at": b()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [re]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": ye()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": ye()
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
        mask: We()
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
        mask: Ze()
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
        mask: ["none", X, K]
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
          X,
          K
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: Xe()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [re, X, K]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [re, X, K]
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
          S,
          xa,
          wa
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
        grayscale: ["", re, X, K]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [re, X, K]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", re, X, K]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [re, X, K]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", re, X, K]
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
          X,
          K
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": Xe()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [re, X, K]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [re, X, K]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", re, X, K]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [re, X, K]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", re, X, K]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [re, X, K]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [re, X, K]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", re, X, K]
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
        "border-spacing": B()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": B()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": B()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", X, K]
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
        duration: [re, "initial", X, K]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", y, X, K]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [re, X, K]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", _, X, K]
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
        perspective: [k, X, K]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": O()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: et()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": et()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": et()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": et()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: tt()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": tt()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": tt()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": tt()
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
        transform: [X, K, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: O()
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
        translate: at()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": at()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": at()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": at()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", X, K]
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
        "scroll-m": B()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": B()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": B()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": B()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": B()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": B()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": B()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": B()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": B()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": B()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": B()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": B()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": B()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": B()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": B()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": B()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": B()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": B()
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
        "will-change": ["auto", "scroll", "contents", "transform", X, K]
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
        stroke: [re, ra, Pt, Ja]
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
}, au = /* @__PURE__ */ Ii(tu);
function G(...e) {
  return au(xs(e));
}
const nu = /* @__PURE__ */ P({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = Ne(e, t);
    return (s, r) => (p(), A(l(wn), j({ "data-slot": "sheet" }, l(o)), {
      default: h(() => [
        L(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Za = /* @__PURE__ */ new WeakMap(), ou = /* @__NO_SIDE_EFFECTS__ */ (...e) => {
  var t;
  const a = e[0], n = (t = Qt()) === null || t === void 0 ? void 0 : t.proxy, o = n ?? $l();
  if (o == null && !ds()) throw new Error("injectLocal must be called in setup");
  return o && Za.has(o) && a in Za.get(o) ? Za.get(o)[a] : Jt(...e);
}, Is = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const su = (e) => typeof e < "u", lu = Object.prototype.toString, ru = (e) => lu.call(e) === "[object Object]", iu = () => {
};
function uu(...e) {
  if (e.length !== 1) return Dl(...e);
  const t = e[0];
  return typeof t == "function" ? fs(Ll(() => ({
    get: t,
    set: iu
  }))) : se(t);
}
function cu(e, t) {
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
const Ms = (e) => e();
function du(e = Ms, t = {}) {
  const { initialState: a = "active" } = t, n = uu(a === "active");
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
    isActive: fs(n),
    pause: o,
    resume: s,
    eventFilter: r
  };
}
function xo(e) {
  return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function Qa(e) {
  return Array.isArray(e) ? e : [e];
}
function fu(e) {
  return Qt();
}
function pu(e) {
  return Pa(e) ? on(new Proxy({}, {
    get(t, a, n) {
      return l(Reflect.get(e.value, a, n));
    },
    set(t, a, n) {
      return Pa(e.value[a]) && !Pa(n) ? e.value[a].value = n : e.value[a] = n, !0;
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
  })) : on(e);
}
function mu(e) {
  return pu(V(e));
}
function ce(e, ...t) {
  const a = t.flat(), n = a[0];
  return mu(() => Object.fromEntries(typeof n == "function" ? Object.entries(sn(e)).filter(([o, s]) => !n(we(s), o)) : Object.entries(sn(e)).filter((o) => !a.includes(o[0]))));
}
function gu(e, t, a = {}) {
  const { eventFilter: n = Ms, ...o } = a;
  return Re(e, cu(n, t), o);
}
function vu(e, t, a = {}) {
  const { eventFilter: n, initialState: o = "active", ...s } = a, { eventFilter: r, pause: i, resume: u, isActive: c } = du(n, { initialState: o });
  return {
    stop: gu(e, t, {
      ...s,
      eventFilter: r
    }),
    pause: i,
    resume: u,
    isActive: c
  };
}
const hu = vu;
function bu(e, t = !0, a) {
  fu() ? Gt(e, a) : t ? e() : va(e);
}
const yu = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[T\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/i, _u = /[YMDHhms]o|\[([^\]]+)\]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|z{1,4}|SSS/g;
function wu(e, t, a, n) {
  let o = e < 12 ? "AM" : "PM";
  return n && (o = o.split("").reduce((s, r) => s += `${r}.`, "")), a ? o.toLowerCase() : o;
}
function $t(e) {
  const t = [
    "th",
    "st",
    "nd",
    "rd"
  ], a = e % 100;
  return e + (t[(a - 20) % 10] || t[a] || t[0]);
}
function xu(e, t, a = {}) {
  var n;
  const o = e.getFullYear(), s = e.getMonth(), r = e.getDate(), i = e.getHours(), u = e.getMinutes(), c = e.getSeconds(), g = e.getMilliseconds(), m = e.getDay(), f = (n = a.customMeridiem) !== null && n !== void 0 ? n : wu, S = (k) => {
    var I;
    return (I = k.split(" ")[1]) !== null && I !== void 0 ? I : "";
  }, M = {
    Yo: () => $t(o),
    YY: () => String(o).slice(-2),
    YYYY: () => o,
    M: () => s + 1,
    Mo: () => $t(s + 1),
    MM: () => `${s + 1}`.padStart(2, "0"),
    MMM: () => e.toLocaleDateString(we(a.locales), { month: "short" }),
    MMMM: () => e.toLocaleDateString(we(a.locales), { month: "long" }),
    D: () => String(r),
    Do: () => $t(r),
    DD: () => `${r}`.padStart(2, "0"),
    H: () => String(i),
    Ho: () => $t(i),
    HH: () => `${i}`.padStart(2, "0"),
    h: () => `${i % 12 || 12}`.padStart(1, "0"),
    ho: () => $t(i % 12 || 12),
    hh: () => `${i % 12 || 12}`.padStart(2, "0"),
    m: () => String(u),
    mo: () => $t(u),
    mm: () => `${u}`.padStart(2, "0"),
    s: () => String(c),
    so: () => $t(c),
    ss: () => `${c}`.padStart(2, "0"),
    SSS: () => `${g}`.padStart(3, "0"),
    d: () => m,
    dd: () => e.toLocaleDateString(we(a.locales), { weekday: "narrow" }),
    ddd: () => e.toLocaleDateString(we(a.locales), { weekday: "short" }),
    dddd: () => e.toLocaleDateString(we(a.locales), { weekday: "long" }),
    A: () => f(i, u),
    AA: () => f(i, u, !1, !0),
    a: () => f(i, u, !0),
    aa: () => f(i, u, !0, !0),
    z: () => S(e.toLocaleDateString(we(a.locales), { timeZoneName: "shortOffset" })),
    zz: () => S(e.toLocaleDateString(we(a.locales), { timeZoneName: "shortOffset" })),
    zzz: () => S(e.toLocaleDateString(we(a.locales), { timeZoneName: "shortOffset" })),
    zzzz: () => S(e.toLocaleDateString(we(a.locales), { timeZoneName: "longOffset" }))
  };
  return t.replace(_u, (k, I) => {
    var y, _;
    return (y = I ?? ((_ = M[k]) === null || _ === void 0 ? void 0 : _.call(M))) !== null && y !== void 0 ? y : k;
  });
}
function Eu(e) {
  if (e === null) return /* @__PURE__ */ new Date(NaN);
  if (e === void 0) return /* @__PURE__ */ new Date();
  if (e instanceof Date) return new Date(e);
  if (typeof e == "string" && !/Z$/i.test(e)) {
    const t = e.match(yu);
    if (t) {
      const a = t[2] - 1 || 0, n = (t[7] || "0").substring(0, 3);
      return new Date(t[1], a, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, n);
    }
  }
  return new Date(e);
}
// @__NO_SIDE_EFFECTS__
function ku(e, t = "HH:mm:ss", a = {}) {
  return V(() => xu(Eu(we(e)), we(t), a));
}
function Cu(e, t, a) {
  return Re(e, t, {
    ...a,
    immediate: !0
  });
}
const Dt = Is ? window : void 0, Rs = Is ? window.document : void 0;
function Su(e) {
  var t;
  const a = we(e);
  return (t = a?.$el) !== null && t !== void 0 ? t : a;
}
function Rt(...e) {
  const t = (n, o, s, r) => (n.addEventListener(o, s, r), () => n.removeEventListener(o, s, r)), a = V(() => {
    const n = Qa(we(e[0])).filter((o) => o != null);
    return n.every((o) => typeof o != "string") ? n : void 0;
  });
  return Cu(() => {
    var n, o;
    return [
      (n = (o = a.value) === null || o === void 0 ? void 0 : o.map((s) => Su(s))) !== null && n !== void 0 ? n : [Dt].filter((s) => s != null),
      Qa(we(a.value ? e[1] : e[0])),
      Qa(l(a.value ? e[2] : e[1])),
      we(a.value ? e[3] : e[2])
    ];
  }, ([n, o, s, r], i, u) => {
    if (!n?.length || !o?.length || !s?.length) return;
    const c = ru(r) ? { ...r } : r, g = n.flatMap((m) => o.flatMap((f) => s.map((S) => t(m, f, S, c))));
    u(() => {
      g.forEach((m) => m());
    });
  }, { flush: "post" });
}
// @__NO_SIDE_EFFECTS__
function Ou() {
  const e = yt(!1), t = Qt();
  return t && Gt(() => {
    e.value = !0;
  }, t), e;
}
// @__NO_SIDE_EFFECTS__
function Tu(e) {
  const t = /* @__PURE__ */ Ou();
  return V(() => (t.value, !!e()));
}
const Nu = /* @__PURE__ */ Symbol("vueuse-ssr-width");
// @__NO_SIDE_EFFECTS__
function Au() {
  const e = ds() ? /* @__PURE__ */ ou(Nu, null) : null;
  return typeof e == "number" ? e : void 0;
}
function Pu(e, t = {}) {
  const { window: a = Dt, ssrWidth: n = /* @__PURE__ */ Au() } = t, o = /* @__PURE__ */ Tu(() => a && "matchMedia" in a && typeof a.matchMedia == "function"), s = yt(typeof n == "number"), r = yt(), i = yt(!1), u = (c) => {
    i.value = c.matches;
  };
  return ga(() => {
    if (s.value) {
      s.value = !o.value, i.value = we(e).split(",").some((c) => {
        const g = c.includes("not all"), m = c.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), f = c.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let S = !!(m || f);
        return m && S && (S = n >= xo(m[1])), f && S && (S = n <= xo(f[1])), g ? !S : S;
      });
      return;
    }
    o.value && (r.value = a.matchMedia(we(e)), i.value = r.value.matches);
  }), Rt(r, "change", u, { passive: !0 }), V(() => i.value);
}
function $u(e) {
  return JSON.parse(JSON.stringify(e));
}
const Ea = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ka = "__vueuse_ssr_handlers__", Du = /* @__PURE__ */ Lu();
function Lu() {
  return ka in Ea || (Ea[ka] = Ea[ka] || {}), Ea[ka];
}
function Iu(e, t) {
  return Du[e] || t;
}
function Mu(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const Ru = {
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
}, Eo = "vueuse-storage";
function Bu(e, t, a, n = {}) {
  var o;
  const { flush: s = "pre", deep: r = !0, listenToStorageChanges: i = !0, writeDefaults: u = !0, mergeDefaults: c = !1, shallow: g, window: m = Dt, eventFilter: f, onError: S = (C) => {
    console.error(C);
  }, initOnMounted: M } = n, k = (g ? yt : se)(typeof t == "function" ? t() : t), I = V(() => we(e));
  if (!a) try {
    a = Iu("getDefaultStorage", () => Dt?.localStorage)();
  } catch (C) {
    S(C);
  }
  if (!a) return k;
  const y = we(t), _ = Mu(y), x = (o = n.serializer) !== null && o !== void 0 ? o : Ru[_], { pause: b, resume: O } = hu(k, (C) => Z(C), {
    flush: s,
    deep: r,
    eventFilter: f
  });
  Re(I, () => H(), { flush: s });
  let $ = !1;
  const E = (C) => {
    M && !$ || H(C);
  }, B = (C) => {
    M && !$ || be(C);
  };
  m && i && (a instanceof Storage ? Rt(m, "storage", E, { passive: !0 }) : Rt(m, Eo, B)), M ? bu(() => {
    $ = !0, H();
  }) : H();
  function Q(C, z) {
    if (m) {
      const T = {
        key: I.value,
        oldValue: C,
        newValue: z,
        storageArea: a
      };
      m.dispatchEvent(a instanceof Storage ? new StorageEvent("storage", T) : new CustomEvent(Eo, { detail: T }));
    }
  }
  function Z(C) {
    try {
      const z = a.getItem(I.value);
      if (C == null)
        Q(z, null), a.removeItem(I.value);
      else {
        const T = x.write(C);
        z !== T && (a.setItem(I.value, T), Q(z, T));
      }
    } catch (z) {
      S(z);
    }
  }
  function le(C) {
    const z = C ? C.newValue : a.getItem(I.value);
    if (z == null)
      return u && y != null && a.setItem(I.value, x.write(y)), y;
    if (!C && c) {
      const T = x.read(z);
      return typeof c == "function" ? c(T, y) : _ === "object" && !Array.isArray(T) ? {
        ...y,
        ...T
      } : T;
    } else return typeof z != "string" ? z : x.read(z);
  }
  function H(C) {
    if (!(C && C.storageArea !== a)) {
      if (C && C.key == null) {
        k.value = y;
        return;
      }
      if (!(C && C.key !== I.value)) {
        b();
        try {
          const z = x.write(k.value);
          (C === void 0 || C?.newValue !== z) && (k.value = le(C));
        } catch (z) {
          S(z);
        } finally {
          C ? va(O) : O();
        }
      }
    }
  }
  function be(C) {
    H(C.detail);
  }
  return k;
}
const Fu = [
  "mousedown",
  "mouseup",
  "keydown",
  "keyup"
];
// @__NO_SIDE_EFFECTS__
function Vu(e, t = {}) {
  const { events: a = Fu, document: n = Rs, initial: o = null } = t, s = yt(o);
  return n && a.forEach((r) => {
    Rt(n, r, (i) => {
      typeof i.getModifierState == "function" && (s.value = i.getModifierState(e));
    }, { passive: !0 });
  }), s;
}
function Uu(e, t, a = {}) {
  const { window: n = Dt } = a;
  return Bu(e, t, n?.sessionStorage, a);
}
// @__NO_SIDE_EFFECTS__
function Bs(e, t, a, n = {}) {
  var o, s;
  const { clone: r = !1, passive: i = !1, eventName: u, deep: c = !1, defaultValue: g, shouldEmit: m } = n, f = Qt(), S = a || f?.emit || (f == null || (o = f.$emit) === null || o === void 0 ? void 0 : o.bind(f)) || (f == null || (s = f.proxy) === null || s === void 0 || (s = s.$emit) === null || s === void 0 ? void 0 : s.bind(f?.proxy));
  let M = u;
  t || (t = "modelValue"), M = M || `update:${t.toString()}`;
  const k = (_) => r ? typeof r == "function" ? r(_) : $u(_) : _, I = () => su(e[t]) ? k(e[t]) : g, y = (_) => {
    m ? m(_) && S(M, _) : S(M, _);
  };
  if (i) {
    const _ = se(I());
    let x = !1;
    return Re(() => e[t], (b) => {
      x || (x = !0, _.value = k(b), va(() => x = !1));
    }), Re(_, (b) => {
      !x && (b !== e[t] || c) && y(b);
    }, { deep: c }), _;
  } else return V({
    get() {
      return I();
    },
    set(_) {
      y(_);
    }
  });
}
const zu = /* @__PURE__ */ P({
  __name: "SheetOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ce(t, "class");
    return (n, o) => (p(), A(l(xn), j({
      "data-slot": "sheet-overlay",
      class: l(G)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80", t.class)
    }, l(a)), {
      default: h(() => [
        L(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Gu = /* @__PURE__ */ P({
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
    const a = e, n = t, o = ce(a, "class", "side"), s = Ne(o, n);
    return (r, i) => (p(), A(l(En), null, {
      default: h(() => [
        w(zu),
        w(l(kn), j({
          "data-slot": "sheet-content",
          class: l(G)(
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
            w(l(gs), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
              default: h(() => [
                w(l(ba), { class: "size-4" }),
                i[0] || (i[0] = q("span", { class: "sr-only" }, "Close", -1))
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
}), Wu = /* @__PURE__ */ P({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ce(t, "class");
    return (n, o) => (p(), A(l(Cn), j({
      "data-slot": "sheet-description",
      class: l(G)("text-muted-foreground text-sm", t.class)
    }, l(a)), {
      default: h(() => [
        L(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ju = /* @__PURE__ */ P({
  __name: "SheetHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (p(), R("div", {
      "data-slot": "sheet-header",
      class: ee(l(G)("flex flex-col gap-1.5 p-4", t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), Hu = /* @__PURE__ */ P({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ce(t, "class");
    return (n, o) => (p(), A(l(Sn), j({
      "data-slot": "sheet-title",
      class: l(G)("text-foreground font-semibold", t.class)
    }, l(a)), {
      default: h(() => [
        L(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ko = "sidebar_state", Yu = 3600 * 24 * 7, Ku = "16rem", Xu = "18rem", qu = "3rem", Ju = "b", [An, Zu] = On("Sidebar"), Qu = { class: "flex h-full w-full flex-col" }, ec = ["data-state", "data-collapsible", "data-variant", "data-side"], tc = {
  "data-sidebar": "sidebar",
  class: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, ac = /* @__PURE__ */ P({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: {}
  },
  setup(e) {
    const t = e, { isMobile: a, state: n, openMobile: o, setOpenMobile: s } = An();
    return (r, i) => e.collapsible === "none" ? (p(), R("div", j({
      key: 0,
      "data-slot": "sidebar",
      class: l(G)("bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col", t.class)
    }, r.$attrs), [
      L(r.$slots, "default")
    ], 16)) : l(a) ? (p(), A(l(nu), j({
      key: 1,
      open: l(o)
    }, r.$attrs, { "onUpdate:open": l(s) }), {
      default: h(() => [
        w(l(Gu), {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar",
          "data-mobile": "true",
          side: e.side,
          class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
          style: Da({
            "--sidebar-width": l(Xu)
          })
        }, {
          default: h(() => [
            w(ju, { class: "sr-only" }, {
              default: h(() => [
                w(Hu, null, {
                  default: h(() => [...i[0] || (i[0] = [
                    de("Sidebar", -1)
                  ])]),
                  _: 1
                }),
                w(Wu, null, {
                  default: h(() => [...i[1] || (i[1] = [
                    de("Displays the mobile sidebar.", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            q("div", Qu, [
              L(r.$slots, "default")
            ])
          ]),
          _: 3
        }, 8, ["side", "style"])
      ]),
      _: 3
    }, 16, ["open", "onUpdate:open"])) : (p(), R("div", {
      key: 2,
      class: "group peer text-sidebar-foreground hidden md:block",
      "data-slot": "sidebar",
      "data-state": l(n),
      "data-collapsible": l(n) === "collapsed" ? e.collapsible : "",
      "data-variant": e.variant,
      "data-side": e.side
    }, [
      q("div", {
        class: ee(l(G)(
          "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
          "group-data-[collapsible=offcanvas]:w-0",
          "group-data-[side=right]:rotate-180",
          e.variant === "floating" || e.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
        ))
      }, null, 2),
      q("div", j({
        class: l(G)(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          e.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          e.variant === "floating" || e.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          t.class
        )
      }, r.$attrs), [
        q("div", tc, [
          L(r.$slots, "default")
        ])
      ], 16)
    ], 8, ec));
  }
}), nc = /* @__PURE__ */ P({
  __name: "SidebarContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (p(), R("div", {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      class: ee(l(G)("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), oc = /* @__PURE__ */ P({
  __name: "SidebarFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (p(), R("div", {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      class: ee(l(G)("flex flex-col gap-2 p-2", t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), sc = /* @__PURE__ */ P({
  __name: "SidebarGroup",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (p(), R("div", {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      class: ee(l(G)("relative flex w-full min-w-0 flex-col p-2", t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), lc = /* @__PURE__ */ P({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (p(), A(l(ha), {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      as: e.as,
      "as-child": e.asChild,
      class: ee(l(G)(
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
}), rc = /* @__PURE__ */ P({
  __name: "SidebarHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (p(), R("div", {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      class: ee(l(G)("flex flex-col gap-2 p-2", t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), Bt = /* @__PURE__ */ P({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, o = /* @__PURE__ */ Bs(a, "modelValue", t, {
      passive: !0,
      defaultValue: a.defaultValue
    });
    return (s, r) => ps((p(), R("input", {
      "onUpdate:modelValue": r[0] || (r[0] = (i) => Pa(o) ? o.value = i : null),
      "data-slot": "input",
      class: ee(l(G)(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        a.class
      ))
    }, null, 2)), [
      [Il, l(o)]
    ]);
  }
}), ic = /* @__PURE__ */ P({
  __name: "SidebarMenu",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (p(), R("ul", {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      class: ee(l(G)("flex w-full min-w-0 flex-col gap-1", t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), uc = /* @__PURE__ */ P({
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
    return (s, r) => (p(), A(l(Hl), j({ "data-slot": "tooltip" }, l(o)), {
      default: h(() => [
        L(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cc = /* @__PURE__ */ P({
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
    const a = e, n = t, o = ce(a, "class"), s = Ne(o, n);
    return (r, i) => (p(), A(l(Yl), null, {
      default: h(() => [
        w(l(Kl), j({ "data-slot": "tooltip-content" }, { ...l(s), ...r.$attrs }, {
          class: l(G)("bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance", a.class)
        }), {
          default: h(() => [
            L(r.$slots, "default"),
            w(l(Xl), { class: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), dc = /* @__PURE__ */ P({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (p(), A(l(ql), j({ "data-slot": "tooltip-trigger" }, t), {
      default: h(() => [
        L(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Co = /* @__PURE__ */ P({
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
    return (a, n) => (p(), A(l(ha), j({
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": e.size,
      "data-active": e.isActive,
      class: l(G)(l(vc)({ variant: e.variant, size: e.size }), t.class),
      as: e.as,
      "as-child": e.asChild
    }, a.$attrs), {
      default: h(() => [
        L(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), So = /* @__PURE__ */ P({
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
    const t = e, { isMobile: a, state: n } = An(), o = ce(t, "tooltip");
    return (s, r) => e.tooltip ? (p(), A(l(uc), { key: 1 }, {
      default: h(() => [
        w(l(dc), { "as-child": "" }, {
          default: h(() => [
            w(Co, Mt(ea({ ...l(o), ...s.$attrs })), {
              default: h(() => [
                L(s.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        w(l(cc), {
          side: "right",
          align: "center",
          hidden: l(n) !== "collapsed" || l(a)
        }, {
          default: h(() => [
            typeof e.tooltip == "string" ? (p(), R(pe, { key: 0 }, [
              de(J(e.tooltip), 1)
            ], 64)) : (p(), A(Ke(e.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (p(), A(Co, Mt(j({ key: 0 }, { ...l(o), ...s.$attrs })), {
      default: h(() => [
        L(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Oo = /* @__PURE__ */ P({
  __name: "SidebarMenuItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (p(), R("li", {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      class: ee(l(G)("group/menu-item relative", t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), fc = /* @__PURE__ */ P({
  __name: "SidebarMenuSub",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (p(), R("ul", {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-badge",
      class: ee(l(G)(
        "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        t.class
      ))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), pc = /* @__PURE__ */ P({
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
    return (a, n) => (p(), A(l(ha), {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      as: e.as,
      "as-child": e.asChild,
      "data-size": e.size,
      "data-active": e.isActive,
      class: ee(l(G)(
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
}), mc = /* @__PURE__ */ P({
  __name: "SidebarMenuSubItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (p(), R("li", {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      class: ee(l(G)("group/menu-sub-item relative", t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
});
Rs?.cookie.includes(`${ko}=false`);
const gc = /* @__PURE__ */ P({
  __name: "SidebarRail",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { toggleSidebar: a } = An();
    return (n, o) => (p(), R("button", {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabindex: -1,
      title: "Toggle Sidebar",
      class: ee(l(G)(
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
}), ze = /* @__PURE__ */ P({
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
    return (a, n) => (p(), A(l(ha), {
      "data-slot": "button",
      as: e.as,
      "as-child": e.asChild,
      class: ee(l(G)(l(Et)({ variant: e.variant, size: e.size }), t.class))
    }, {
      default: h(() => [
        L(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), Et = jt(
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
), vc = jt(
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
), hc = {
  key: 0,
  class: "font-semibold text-sm mt-4 ml-2 truncate"
}, bc = { key: 1 }, Tg = /* @__PURE__ */ P({
  __name: "AppSidebar",
  props: {
    config: {},
    currentPath: { default: "" }
  },
  setup(e) {
    function t(a, n) {
      return !!(a.url === n || a.items?.some((o) => o.url === n));
    }
    return (a, n) => (p(), A(l(ac), {
      collapsible: e.config.collapsible || "icon"
    }, {
      default: h(() => [
        w(l(rc), null, {
          default: h(() => [
            L(a.$slots, "header", {}, () => [
              e.config.title ? (p(), R("div", hc, J(e.config.title), 1)) : te("", !0)
            ])
          ]),
          _: 3
        }),
        w(l(nc), null, {
          default: h(() => [
            w(l(ic), null, {
              default: h(() => [
                (p(!0), R(pe, null, Ee(e.config.menuGroups, (o, s) => (p(), A(l(sc), {
                  key: s,
                  class: "!pb-0"
                }, {
                  default: h(() => [
                    o.title ? (p(), A(l(lc), { key: 0 }, {
                      default: h(() => [
                        de(J(o.title), 1)
                      ]),
                      _: 2
                    }, 1024)) : te("", !0),
                    (p(!0), R(pe, null, Ee(o.items, (r) => (p(), R(pe, {
                      key: r.title
                    }, [
                      r.items?.length ? (p(), A(l(fi), {
                        key: 0,
                        "as-child": "",
                        "default-open": t(r, e.currentPath),
                        class: "group/collapsible"
                      }, {
                        default: h(() => [
                          w(l(Oo), null, {
                            default: h(() => [
                              w(l(mi), { "as-child": "" }, {
                                default: h(() => [
                                  w(l(So), {
                                    tooltip: r.title,
                                    disabled: r.disabled
                                  }, {
                                    default: h(() => [
                                      r.icon ? (p(), A(Ke(r.icon), { key: 0 })) : te("", !0),
                                      r.url ? (p(), A(l(Xa), {
                                        key: 2,
                                        to: r.url
                                      }, {
                                        default: h(() => [
                                          q("span", null, J(r.title), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["to"])) : (p(), R("span", bc, J(r.title), 1)),
                                      w(l(Wt), { class: "ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" })
                                    ]),
                                    _: 2
                                  }, 1032, ["tooltip", "disabled"])
                                ]),
                                _: 2
                              }, 1024),
                              w(l(pi), null, {
                                default: h(() => [
                                  w(l(fc), null, {
                                    default: h(() => [
                                      (p(!0), R(pe, null, Ee(r.items, (i) => (p(), A(l(mc), {
                                        key: i.title
                                      }, {
                                        default: h(() => [
                                          w(l(pc), {
                                            "as-child": "",
                                            "is-active": e.currentPath === i.url,
                                            disabled: i.disabled
                                          }, {
                                            default: h(() => [
                                              w(l(Xa), {
                                                to: i.url
                                              }, {
                                                default: h(() => [
                                                  q("span", null, J(i.title), 1)
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
                      }, 1032, ["default-open"])) : (p(), A(l(Oo), { key: 1 }, {
                        default: h(() => [
                          w(l(So), {
                            "as-child": "",
                            "is-active": e.currentPath === r.url,
                            disabled: r.disabled
                          }, {
                            default: h(() => [
                              w(l(Xa), {
                                to: r.url
                              }, {
                                default: h(() => [
                                  r.icon ? (p(), A(Ke(r.icon), { key: 0 })) : te("", !0),
                                  q("span", null, J(r.title), 1)
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
        w(l(oc), null, {
          default: h(() => [
            L(a.$slots, "footer")
          ]),
          _: 3
        }),
        w(l(gc))
      ]),
      _: 3
    }, 8, ["collapsible"]));
  }
}), yc = { class: "flex-1 flex gap-2 items-center [&_[data-placeholder]]:text-muted-foreground [&_[data-placeholder]]:truncate min-w-0" }, Fs = /* @__PURE__ */ P({
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
    return (a, n) => (p(), A(l(ha), {
      as: e.as,
      class: ee(l(G)(l(Et)({ variant: e.variant, size: e.size }), t.class))
    }, {
      default: h(() => [
        q("span", yc, [
          L(a.$slots, "default")
        ]),
        w(l(ta), { class: "!size-3 !-mx-1" })
      ]),
      _: 3
    }, 8, ["as", "class"]));
  }
}), Ft = (e, t, a = (n) => n) => e.reduce((n, o) => (n[t(o)] = a(o), n), {}), _c = (e, t) => {
  const a = e.reduce((n, o) => {
    const s = o;
    return n[s] || (n[s] = o), n;
  }, {});
  return Object.values(a);
}, wc = (e, t, a, n) => {
  if (!e && !t)
    return [];
  if (!e)
    return [t];
  if (!t)
    return [...e];
  const o = (r) => r === t;
  return e.find(o) ? e.filter((r, i) => !o(r)) : [...e, t];
}, To = (e, t, a = (n) => n) => {
  if (!e?.length && !t?.length)
    return [];
  if (e?.length === void 0)
    return [...t];
  if (!t?.length)
    return [...e];
  const n = t.reduce((o, s) => (o[a(s)] = !0, o), {});
  return e.filter((o) => !n[a(o)]);
}, xc = (e) => {
  if (!e || e.length === 0)
    return "";
  const t = e.toLowerCase();
  return t.substring(0, 1).toUpperCase() + t.substring(1, t.length);
}, Ec = (e) => e ? e.split(/(?=[A-Z])|[\.\-\s_]/).map((t) => t.trim()).filter((t) => !!t).map((t) => xc(t.toLowerCase())).join(" ") : "", It = yt([]), Pn = (e, t) => It.value.push({ callback: e, id: t });
function $n(e) {
  return It.value = typeof e == "string" ? It.value.filter(({ id: t }) => t !== e) : It.value.filter(({ callback: t }) => t !== e);
}
const Dn = (e) => {
  const t = e !== void 0 ? e : It.value.length - 1;
  return t >= 0 && !It.value[t].callback() && Dn(t - 1);
};
document.body.addEventListener("keydown", (e) => {
  e.key === "Escape" && It.value.length > 0 && (e.stopPropagation(), !e.target || !["INPUT"].includes(e.target?.tagName) ? Dn() : e.target.blur());
});
const Vs = { add: Pn, remove: $n, invokeLatest: Dn };
function Ng(e) {
  Gt(() => Pn(e)), yn(() => $n(e));
}
function Ln(e, t) {
  Re(t, (a) => a ? Pn(e) : $n(e), { immediate: !0 });
}
function No(e, t, a, n = !1, o) {
  Rt(e, "keydown", (s) => {
    ["Space", "Enter"].includes(s.code) && document.activeElement?.matches(t) && (s.preventDefault(), a(document.activeElement, s));
  }), Rt(e, "click", (s) => {
    const r = s.target.closest(
      t
    );
    r && (n && (s.stopPropagation(), s.stopImmediatePropagation()), s.preventDefault(), a(r, s));
  });
}
function kc(e, t, a, n, o) {
  const s = e.includes(a), r = t.indexOf(a), i = t.indexOf(n), u = r < i ? t.slice(r, i + 1) : t.slice(i, r);
  return s ? _c([...e, ...u]) : e.filter((c) => !u.includes(c));
}
function In(e, t, a) {
  let n = null;
  const o = /* @__PURE__ */ Vu("Shift");
  Re(
    () => e.value,
    (s, r) => {
      const i = s.length > r.length ? To(s, r, a) : To(r, s, a);
      if (i.length === 1) {
        const u = i[0];
        o.value && n && (e.value = kc(
          e.value,
          t.value,
          n,
          u
        )), n = u;
      }
    }
  );
}
const Cc = { class: "[&_[data-state=selected]]:bg-muted/50" }, Mn = /* @__PURE__ */ P({
  __name: "DataTableBody",
  setup(e) {
    return (t, a) => (p(), R("tbody", Cc, [
      L(t.$slots, "default")
    ]));
  }
}), [Ht, Rn] = On("DataTable"), Bn = /* @__PURE__ */ P({
  __name: "DataTableContainer",
  setup(e) {
    const t = Ht(), a = Ml("container");
    No(a, "[data-col-id]", (o) => {
      const s = o.getAttribute("data-col-id"), r = o.closest("tr")?.getAttribute("data-row-id");
      s && r && t.onClickColumn(s, r);
    }), No(a, "[data-row-id]", (o) => {
      const s = o.getAttribute("data-row-id");
      s && t.onClickRow(s);
    });
    const n = V(() => ({
      "[&_td:first-child]:!w-0 [&_th:first-child]:!w-0": t.selectMode === "multiselect",
      "[&_td:last-child]:!w-0 [&_th:last-child]:!w-0": t.hasActionsColumn
    }));
    return (o, s) => (p(), R("div", {
      ref: "container",
      class: ee(["min-w-0 min-h-0 relative flex-1 flex flex-col", n.value])
    }, [
      L(o.$slots, "default")
    ], 2));
  }
});
function ft(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Ao = {};
function Sc(e) {
  Ao[e] || (Ao[e] = !0, ft(e));
}
const _t = typeof window < "u";
let Ye, Vt;
if (process.env.NODE_ENV !== "production") {
  const e = _t && window.performance;
  e && e.mark && e.measure && e.clearMarks && // @ts-ignore browser compat
  e.clearMeasures && (Ye = (t) => {
    e.mark(t);
  }, Vt = (t, a, n) => {
    e.measure(t, a, n), e.clearMarks(a), e.clearMarks(n);
  });
}
const Oc = /\{([0-9a-zA-Z]+)\}/g;
function Ga(e, ...t) {
  return t.length === 1 && me(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(Oc, (a, n) => t.hasOwnProperty(n) ? t[n] : "");
}
const wt = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), Tc = (e, t, a) => Nc({ l: e, k: t, s: a }), Nc = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Ie = (e) => typeof e == "number" && isFinite(e), Ac = (e) => Fn(e) === "[object Date]", Ma = (e) => Fn(e) === "[object RegExp]", Wa = (e) => fe(e) && Object.keys(e).length === 0, Me = Object.assign, Pc = Object.create, he = (e = null) => Pc(e);
let Po;
const Lt = () => Po || (Po = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : he());
function $o(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function Do(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function $c(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (n, o, s) => `${o}="${Do(s)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (n, o, s) => `${o}='${Do(s)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (process.env.NODE_ENV !== "production" && ft("Potentially dangerous event handlers detected in translation. Consider removing onclick, onerror, etc. from your translation messages."), e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((n) => {
    e = e.replace(n, "$1javascript&#58;");
  }), e;
}
const Dc = Object.prototype.hasOwnProperty;
function st(e, t) {
  return Dc.call(e, t);
}
const Te = Array.isArray, xe = (e) => typeof e == "function", Y = (e) => typeof e == "string", Oe = (e) => typeof e == "boolean", me = (e) => e !== null && typeof e == "object", Lc = (e) => me(e) && xe(e.then) && xe(e.catch), Us = Object.prototype.toString, Fn = (e) => Us.call(e), fe = (e) => Fn(e) === "[object Object]", Ic = (e) => e == null ? "" : Te(e) || fe(e) && e.toString === Us ? JSON.stringify(e, null, 2) : String(e);
function Vn(e, t = "") {
  return e.reduce((a, n, o) => o === 0 ? a + n : a + t + n, "");
}
const Lo = 2;
function Mc(e, t = 0, a = e.length) {
  const n = e.split(/\r?\n/);
  let o = 0;
  const s = [];
  for (let r = 0; r < n.length; r++)
    if (o += n[r].length + 1, o >= t) {
      for (let i = r - Lo; i <= r + Lo || a > o; i++) {
        if (i < 0 || i >= n.length)
          continue;
        const u = i + 1;
        s.push(`${u}${" ".repeat(3 - String(u).length)}|  ${n[i]}`);
        const c = n[i].length;
        if (i === r) {
          const g = t - (o - c) + 1, m = Math.max(1, a > o ? c - g : a - t);
          s.push("   |  " + " ".repeat(g) + "^".repeat(m));
        } else if (i > r) {
          if (a > o) {
            const g = Math.max(Math.min(a - o, c), 1);
            s.push("   |  " + "^".repeat(g));
          }
          o += c + 1;
        }
      }
      break;
    }
  return s.join(`
`);
}
function Rc() {
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
const Ca = (e) => !me(e) || Te(e);
function $a(e, t) {
  if (Ca(e) || Ca(t))
    throw new Error("Invalid value");
  const a = [{ src: e, des: t }];
  for (; a.length; ) {
    const { src: n, des: o } = a.pop();
    Object.keys(n).forEach((s) => {
      s !== "__proto__" && (me(n[s]) && !me(o[s]) && (o[s] = Array.isArray(n[s]) ? [] : he()), Ca(o[s]) || Ca(n[s]) ? o[s] = n[s] : a.push({ src: n[s], des: o[s] }));
    });
  }
}
function Bc(e, t, a) {
  return { line: e, column: t, offset: a };
}
function rn(e, t, a) {
  return { start: e, end: t };
}
const ae = {
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
}, Fc = 17, Vc = {
  // tokenizer error messages
  [ae.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [ae.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [ae.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [ae.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [ae.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [ae.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [ae.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [ae.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [ae.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [ae.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [ae.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [ae.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [ae.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [ae.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
  // generator error messages
  [ae.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
  // minimizer error messages
  [ae.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function oa(e, t, a = {}) {
  const { domain: n, messages: o, args: s } = a, r = process.env.NODE_ENV !== "production" ? Ga((o || Vc)[e] || "", ...s || []) : e, i = new SyntaxError(String(r));
  return i.code = e, t && (i.location = t), i.domain = n, i;
}
function Uc(e) {
  throw e;
}
const zc = /<\/?[\w\s="/.':;#-\/]+>/, Gc = (e) => zc.test(e), ut = " ", Wc = "\r", Ve = `
`, jc = "\u2028", Hc = "\u2029";
function Yc(e) {
  const t = e;
  let a = 0, n = 1, o = 1, s = 0;
  const r = (E) => t[E] === Wc && t[E + 1] === Ve, i = (E) => t[E] === Ve, u = (E) => t[E] === Hc, c = (E) => t[E] === jc, g = (E) => r(E) || i(E) || u(E) || c(E), m = () => a, f = () => n, S = () => o, M = () => s, k = (E) => r(E) || u(E) || c(E) ? Ve : t[E], I = () => k(a), y = () => k(a + s);
  function _() {
    return s = 0, g(a) && (n++, o = 0), r(a) && a++, a++, o++, t[a];
  }
  function x() {
    return r(a + s) && s++, s++, t[a + s];
  }
  function b() {
    a = 0, n = 1, o = 1, s = 0;
  }
  function O(E = 0) {
    s = E;
  }
  function $() {
    const E = a + s;
    for (; E !== a; )
      _();
    s = 0;
  }
  return {
    index: m,
    line: f,
    column: S,
    peekOffset: M,
    charAt: k,
    currentChar: I,
    currentPeek: y,
    next: _,
    peek: x,
    reset: b,
    resetPeek: O,
    skipToPeek: $
  };
}
const ht = void 0, Kc = ".", Io = "'", Xc = "tokenizer";
function qc(e, t = {}) {
  const a = t.location !== !1, n = Yc(e), o = () => n.index(), s = () => Bc(n.line(), n.column(), n.index()), r = s(), i = o(), u = {
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
  }, c = () => u, { onError: g } = t;
  function m(d, v, D, ...U) {
    const oe = c();
    if (v.column += D, v.offset += D, g) {
      const ie = a ? rn(oe.startLoc, v) : null, ne = oa(d, ie, {
        domain: Xc,
        args: U
      });
      g(ne);
    }
  }
  function f(d, v, D) {
    d.endLoc = s(), d.currentType = v;
    const U = { type: v };
    return a && (U.loc = rn(d.startLoc, d.endLoc)), D != null && (U.value = D), U;
  }
  const S = (d) => f(
    d,
    13
    /* TokenTypes.EOF */
  );
  function M(d, v) {
    return d.currentChar() === v ? (d.next(), v) : (m(ae.EXPECTED_TOKEN, s(), 0, v), "");
  }
  function k(d) {
    let v = "";
    for (; d.currentPeek() === ut || d.currentPeek() === Ve; )
      v += d.currentPeek(), d.peek();
    return v;
  }
  function I(d) {
    const v = k(d);
    return d.skipToPeek(), v;
  }
  function y(d) {
    if (d === ht)
      return !1;
    const v = d.charCodeAt(0);
    return v >= 97 && v <= 122 || // a-z
    v >= 65 && v <= 90 || // A-Z
    v === 95;
  }
  function _(d) {
    if (d === ht)
      return !1;
    const v = d.charCodeAt(0);
    return v >= 48 && v <= 57;
  }
  function x(d, v) {
    const { currentType: D } = v;
    if (D !== 2)
      return !1;
    k(d);
    const U = y(d.currentPeek());
    return d.resetPeek(), U;
  }
  function b(d, v) {
    const { currentType: D } = v;
    if (D !== 2)
      return !1;
    k(d);
    const U = d.currentPeek() === "-" ? d.peek() : d.currentPeek(), oe = _(U);
    return d.resetPeek(), oe;
  }
  function O(d, v) {
    const { currentType: D } = v;
    if (D !== 2)
      return !1;
    k(d);
    const U = d.currentPeek() === Io;
    return d.resetPeek(), U;
  }
  function $(d, v) {
    const { currentType: D } = v;
    if (D !== 7)
      return !1;
    k(d);
    const U = d.currentPeek() === ".";
    return d.resetPeek(), U;
  }
  function E(d, v) {
    const { currentType: D } = v;
    if (D !== 8)
      return !1;
    k(d);
    const U = y(d.currentPeek());
    return d.resetPeek(), U;
  }
  function B(d, v) {
    const { currentType: D } = v;
    if (!(D === 7 || D === 11))
      return !1;
    k(d);
    const U = d.currentPeek() === ":";
    return d.resetPeek(), U;
  }
  function Q(d, v) {
    const { currentType: D } = v;
    if (D !== 9)
      return !1;
    const U = () => {
      const ie = d.currentPeek();
      return ie === "{" ? y(d.peek()) : ie === "@" || ie === "|" || ie === ":" || ie === "." || ie === ut || !ie ? !1 : ie === Ve ? (d.peek(), U()) : le(d, !1);
    }, oe = U();
    return d.resetPeek(), oe;
  }
  function Z(d) {
    k(d);
    const v = d.currentPeek() === "|";
    return d.resetPeek(), v;
  }
  function le(d, v = !0) {
    const D = (oe = !1, ie = "") => {
      const ne = d.currentPeek();
      return ne === "{" || ne === "@" || !ne ? oe : ne === "|" ? !(ie === ut || ie === Ve) : ne === ut ? (d.peek(), D(!0, ut)) : ne === Ve ? (d.peek(), D(!0, Ve)) : !0;
    }, U = D();
    return v && d.resetPeek(), U;
  }
  function H(d, v) {
    const D = d.currentChar();
    return D === ht ? ht : v(D) ? (d.next(), D) : null;
  }
  function be(d) {
    const v = d.charCodeAt(0);
    return v >= 97 && v <= 122 || // a-z
    v >= 65 && v <= 90 || // A-Z
    v >= 48 && v <= 57 || // 0-9
    v === 95 || // _
    v === 36;
  }
  function C(d) {
    return H(d, be);
  }
  function z(d) {
    const v = d.charCodeAt(0);
    return v >= 97 && v <= 122 || // a-z
    v >= 65 && v <= 90 || // A-Z
    v >= 48 && v <= 57 || // 0-9
    v === 95 || // _
    v === 36 || // $
    v === 45;
  }
  function T(d) {
    return H(d, z);
  }
  function ge(d) {
    const v = d.charCodeAt(0);
    return v >= 48 && v <= 57;
  }
  function W(d) {
    return H(d, ge);
  }
  function We(d) {
    const v = d.charCodeAt(0);
    return v >= 48 && v <= 57 || // 0-9
    v >= 65 && v <= 70 || // A-F
    v >= 97 && v <= 102;
  }
  function Fe(d) {
    return H(d, We);
  }
  function Ze(d) {
    let v = "", D = "";
    for (; v = W(d); )
      D += v;
    return D;
  }
  function pt(d) {
    let v = "";
    for (; ; ) {
      const D = d.currentChar();
      if (D === "{" || D === "}" || D === "@" || D === "|" || !D)
        break;
      if (D === ut || D === Ve)
        if (le(d))
          v += D, d.next();
        else {
          if (Z(d))
            break;
          v += D, d.next();
        }
      else
        v += D, d.next();
    }
    return v;
  }
  function Se(d) {
    I(d);
    let v = "", D = "";
    for (; v = T(d); )
      D += v;
    const U = d.currentChar();
    if (U && U !== "}" && U !== ht && U !== ut && U !== Ve && U !== "　") {
      const oe = tt(d);
      return m(ae.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, D + oe), D + oe;
    }
    return d.currentChar() === ht && m(ae.UNTERMINATED_CLOSING_BRACE, s(), 0), D;
  }
  function $e(d) {
    I(d);
    let v = "";
    return d.currentChar() === "-" ? (d.next(), v += `-${Ze(d)}`) : v += Ze(d), d.currentChar() === ht && m(ae.UNTERMINATED_CLOSING_BRACE, s(), 0), v;
  }
  function Qe(d) {
    return d !== Io && d !== Ve;
  }
  function Ot(d) {
    I(d), M(d, "'");
    let v = "", D = "";
    for (; v = H(d, Qe); )
      v === "\\" ? D += ye(d) : D += v;
    const U = d.currentChar();
    return U === Ve || U === ht ? (m(ae.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, s(), 0), U === Ve && (d.next(), M(d, "'")), D) : (M(d, "'"), D);
  }
  function ye(d) {
    const v = d.currentChar();
    switch (v) {
      case "\\":
      case "'":
        return d.next(), `\\${v}`;
      case "u":
        return Xe(d, v, 4);
      case "U":
        return Xe(d, v, 6);
      default:
        return m(ae.UNKNOWN_ESCAPE_SEQUENCE, s(), 0, v), "";
    }
  }
  function Xe(d, v, D) {
    M(d, v);
    let U = "";
    for (let oe = 0; oe < D; oe++) {
      const ie = Fe(d);
      if (!ie) {
        m(ae.INVALID_UNICODE_ESCAPE_SEQUENCE, s(), 0, `\\${v}${U}${d.currentChar()}`);
        break;
      }
      U += ie;
    }
    return `\\${v}${U}`;
  }
  function et(d) {
    return d !== "{" && d !== "}" && d !== ut && d !== Ve;
  }
  function tt(d) {
    I(d);
    let v = "", D = "";
    for (; v = H(d, et); )
      D += v;
    return D;
  }
  function mt(d) {
    let v = "", D = "";
    for (; v = C(d); )
      D += v;
    return D;
  }
  function at(d) {
    const v = (D) => {
      const U = d.currentChar();
      return U === "{" || U === "@" || U === "|" || U === "(" || U === ")" || !U || U === ut ? D : (D += U, d.next(), v(D));
    };
    return v("");
  }
  function nt(d) {
    I(d);
    const v = M(
      d,
      "|"
      /* TokenChars.Pipe */
    );
    return I(d), v;
  }
  function Tt(d, v) {
    let D = null;
    switch (d.currentChar()) {
      case "{":
        return v.braceNest >= 1 && m(ae.NOT_ALLOW_NEST_PLACEHOLDER, s(), 0), d.next(), D = f(
          v,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), I(d), v.braceNest++, D;
      case "}":
        return v.braceNest > 0 && v.currentType === 2 && m(ae.EMPTY_PLACEHOLDER, s(), 0), d.next(), D = f(
          v,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), v.braceNest--, v.braceNest > 0 && I(d), v.inLinked && v.braceNest === 0 && (v.inLinked = !1), D;
      case "@":
        return v.braceNest > 0 && m(ae.UNTERMINATED_CLOSING_BRACE, s(), 0), D = gt(d, v) || S(v), v.braceNest = 0, D;
      default: {
        let oe = !0, ie = !0, ne = !0;
        if (Z(d))
          return v.braceNest > 0 && m(ae.UNTERMINATED_CLOSING_BRACE, s(), 0), D = f(v, 1, nt(d)), v.braceNest = 0, v.inLinked = !1, D;
        if (v.braceNest > 0 && (v.currentType === 4 || v.currentType === 5 || v.currentType === 6))
          return m(ae.UNTERMINATED_CLOSING_BRACE, s(), 0), v.braceNest = 0, Nt(d, v);
        if (oe = x(d, v))
          return D = f(v, 4, Se(d)), I(d), D;
        if (ie = b(d, v))
          return D = f(v, 5, $e(d)), I(d), D;
        if (ne = O(d, v))
          return D = f(v, 6, Ot(d)), I(d), D;
        if (!oe && !ie && !ne)
          return D = f(v, 12, tt(d)), m(ae.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, D.value), I(d), D;
        break;
      }
    }
    return D;
  }
  function gt(d, v) {
    const { currentType: D } = v;
    let U = null;
    const oe = d.currentChar();
    switch ((D === 7 || D === 8 || D === 11 || D === 9) && (oe === Ve || oe === ut) && m(ae.INVALID_LINKED_FORMAT, s(), 0), oe) {
      case "@":
        return d.next(), U = f(
          v,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), v.inLinked = !0, U;
      case ".":
        return I(d), d.next(), f(
          v,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return I(d), d.next(), f(
          v,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return Z(d) ? (U = f(v, 1, nt(d)), v.braceNest = 0, v.inLinked = !1, U) : $(d, v) || B(d, v) ? (I(d), gt(d, v)) : E(d, v) ? (I(d), f(v, 11, mt(d))) : Q(d, v) ? (I(d), oe === "{" ? Tt(d, v) || U : f(v, 10, at(d))) : (D === 7 && m(ae.INVALID_LINKED_FORMAT, s(), 0), v.braceNest = 0, v.inLinked = !1, Nt(d, v));
    }
  }
  function Nt(d, v) {
    let D = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (v.braceNest > 0)
      return Tt(d, v) || S(v);
    if (v.inLinked)
      return gt(d, v) || S(v);
    switch (d.currentChar()) {
      case "{":
        return Tt(d, v) || S(v);
      case "}":
        return m(ae.UNBALANCED_CLOSING_BRACE, s(), 0), d.next(), f(
          v,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return gt(d, v) || S(v);
      default: {
        if (Z(d))
          return D = f(v, 1, nt(d)), v.braceNest = 0, v.inLinked = !1, D;
        if (le(d))
          return f(v, 0, pt(d));
        break;
      }
    }
    return D;
  }
  function sa() {
    const { currentType: d, offset: v, startLoc: D, endLoc: U } = u;
    return u.lastType = d, u.lastOffset = v, u.lastStartLoc = D, u.lastEndLoc = U, u.offset = o(), u.startLoc = s(), n.currentChar() === ht ? f(
      u,
      13
      /* TokenTypes.EOF */
    ) : Nt(n, u);
  }
  return {
    nextToken: sa,
    currentOffset: o,
    currentPosition: s,
    context: c
  };
}
const Jc = "parser", Zc = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Qc(e, t, a) {
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
function ed(e = {}) {
  const t = e.location !== !1, { onError: a } = e;
  function n(y, _, x, b, ...O) {
    const $ = y.currentPosition();
    if ($.offset += b, $.column += b, a) {
      const E = t ? rn(x, $) : null, B = oa(_, E, {
        domain: Jc,
        args: O
      });
      a(B);
    }
  }
  function o(y, _, x) {
    const b = { type: y };
    return t && (b.start = _, b.end = _, b.loc = { start: x, end: x }), b;
  }
  function s(y, _, x, b) {
    t && (y.end = _, y.loc && (y.loc.end = x));
  }
  function r(y, _) {
    const x = y.context(), b = o(3, x.offset, x.startLoc);
    return b.value = _, s(b, y.currentOffset(), y.currentPosition()), b;
  }
  function i(y, _) {
    const x = y.context(), { lastOffset: b, lastStartLoc: O } = x, $ = o(5, b, O);
    return $.index = parseInt(_, 10), y.nextToken(), s($, y.currentOffset(), y.currentPosition()), $;
  }
  function u(y, _) {
    const x = y.context(), { lastOffset: b, lastStartLoc: O } = x, $ = o(4, b, O);
    return $.key = _, y.nextToken(), s($, y.currentOffset(), y.currentPosition()), $;
  }
  function c(y, _) {
    const x = y.context(), { lastOffset: b, lastStartLoc: O } = x, $ = o(9, b, O);
    return $.value = _.replace(Zc, Qc), y.nextToken(), s($, y.currentOffset(), y.currentPosition()), $;
  }
  function g(y) {
    const _ = y.nextToken(), x = y.context(), { lastOffset: b, lastStartLoc: O } = x, $ = o(8, b, O);
    return _.type !== 11 ? (n(y, ae.UNEXPECTED_EMPTY_LINKED_MODIFIER, x.lastStartLoc, 0), $.value = "", s($, b, O), {
      nextConsumeToken: _,
      node: $
    }) : (_.value == null && n(y, ae.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, ct(_)), $.value = _.value || "", s($, y.currentOffset(), y.currentPosition()), {
      node: $
    });
  }
  function m(y, _) {
    const x = y.context(), b = o(7, x.offset, x.startLoc);
    return b.value = _, s(b, y.currentOffset(), y.currentPosition()), b;
  }
  function f(y) {
    const _ = y.context(), x = o(6, _.offset, _.startLoc);
    let b = y.nextToken();
    if (b.type === 8) {
      const O = g(y);
      x.modifier = O.node, b = O.nextConsumeToken || y.nextToken();
    }
    switch (b.type !== 9 && n(y, ae.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, ct(b)), b = y.nextToken(), b.type === 2 && (b = y.nextToken()), b.type) {
      case 10:
        b.value == null && n(y, ae.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, ct(b)), x.key = m(y, b.value || "");
        break;
      case 4:
        b.value == null && n(y, ae.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, ct(b)), x.key = u(y, b.value || "");
        break;
      case 5:
        b.value == null && n(y, ae.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, ct(b)), x.key = i(y, b.value || "");
        break;
      case 6:
        b.value == null && n(y, ae.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, ct(b)), x.key = c(y, b.value || "");
        break;
      default: {
        n(y, ae.UNEXPECTED_EMPTY_LINKED_KEY, _.lastStartLoc, 0);
        const O = y.context(), $ = o(7, O.offset, O.startLoc);
        return $.value = "", s($, O.offset, O.startLoc), x.key = $, s(x, O.offset, O.startLoc), {
          nextConsumeToken: b,
          node: x
        };
      }
    }
    return s(x, y.currentOffset(), y.currentPosition()), {
      node: x
    };
  }
  function S(y) {
    const _ = y.context(), x = _.currentType === 1 ? y.currentOffset() : _.offset, b = _.currentType === 1 ? _.endLoc : _.startLoc, O = o(2, x, b);
    O.items = [];
    let $ = null;
    do {
      const Q = $ || y.nextToken();
      switch ($ = null, Q.type) {
        case 0:
          Q.value == null && n(y, ae.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, ct(Q)), O.items.push(r(y, Q.value || ""));
          break;
        case 5:
          Q.value == null && n(y, ae.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, ct(Q)), O.items.push(i(y, Q.value || ""));
          break;
        case 4:
          Q.value == null && n(y, ae.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, ct(Q)), O.items.push(u(y, Q.value || ""));
          break;
        case 6:
          Q.value == null && n(y, ae.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, ct(Q)), O.items.push(c(y, Q.value || ""));
          break;
        case 7: {
          const Z = f(y);
          O.items.push(Z.node), $ = Z.nextConsumeToken || null;
          break;
        }
      }
    } while (_.currentType !== 13 && _.currentType !== 1);
    const E = _.currentType === 1 ? _.lastOffset : y.currentOffset(), B = _.currentType === 1 ? _.lastEndLoc : y.currentPosition();
    return s(O, E, B), O;
  }
  function M(y, _, x, b) {
    const O = y.context();
    let $ = b.items.length === 0;
    const E = o(1, _, x);
    E.cases = [], E.cases.push(b);
    do {
      const B = S(y);
      $ || ($ = B.items.length === 0), E.cases.push(B);
    } while (O.currentType !== 13);
    return $ && n(y, ae.MUST_HAVE_MESSAGES_IN_PLURAL, x, 0), s(E, y.currentOffset(), y.currentPosition()), E;
  }
  function k(y) {
    const _ = y.context(), { offset: x, startLoc: b } = _, O = S(y);
    return _.currentType === 13 ? O : M(y, x, b, O);
  }
  function I(y) {
    const _ = qc(y, Me({}, e)), x = _.context(), b = o(0, x.offset, x.startLoc);
    return t && b.loc && (b.loc.source = y), b.body = k(_), e.onCacheKey && (b.cacheKey = e.onCacheKey(y)), x.currentType !== 13 && n(_, ae.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, y[x.offset] || ""), s(b, _.currentOffset(), _.currentPosition()), b;
  }
  return { parse: I };
}
function ct(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function td(e, t = {}) {
  const a = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => a, helper: (s) => (a.helpers.add(s), s) };
}
function Mo(e, t) {
  for (let a = 0; a < e.length; a++)
    Un(e[a], t);
}
function Un(e, t) {
  switch (e.type) {
    case 1:
      Mo(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      Mo(e.items, t);
      break;
    case 6: {
      Un(e.key, t), t.helper(
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
function ad(e, t = {}) {
  const a = td(e);
  a.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && Un(e.body, a);
  const n = a.context();
  e.helpers = Array.from(n.helpers);
}
function nd(e) {
  const t = e.body;
  return t.type === 2 ? Ro(t) : t.cases.forEach((a) => Ro(a)), e;
}
function Ro(e) {
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
      e.static = Vn(t);
      for (let a = 0; a < e.items.length; a++) {
        const n = e.items[a];
        (n.type === 3 || n.type === 9) && delete n.value;
      }
    }
  }
}
const od = "minifier";
function Xt(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      Xt(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, a = t.cases;
      for (let n = 0; n < a.length; n++)
        Xt(a[n]);
      t.c = a, delete t.cases;
      break;
    }
    case 2: {
      const t = e, a = t.items;
      for (let n = 0; n < a.length; n++)
        Xt(a[n]);
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
      Xt(t.key), t.k = t.key, delete t.key, t.modifier && (Xt(t.modifier), t.m = t.modifier, delete t.modifier);
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
        throw oa(ae.UNHANDLED_MINIFIER_NODE_TYPE, null, {
          domain: od,
          args: [e.type]
        });
  }
  delete e.type;
}
const sd = "parser";
function ld(e, t) {
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
  function u(k, I) {
    r.code += k;
  }
  function c(k, I = !0) {
    const y = I ? n : "";
    u(o ? y + "  ".repeat(k) : y);
  }
  function g(k = !0) {
    const I = ++r.indentLevel;
    k && c(I);
  }
  function m(k = !0) {
    const I = --r.indentLevel;
    k && c(I);
  }
  function f() {
    c(r.indentLevel);
  }
  return {
    context: i,
    push: u,
    indent: g,
    deindent: m,
    newline: f,
    helper: (k) => `_${k}`,
    needIndent: () => r.needIndent
  };
}
function rd(e, t) {
  const { helper: a } = e;
  e.push(`${a(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), Zt(e, t.key), t.modifier ? (e.push(", "), Zt(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function id(e, t) {
  const { helper: a, needIndent: n } = e;
  e.push(`${a(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(n());
  const o = t.items.length;
  for (let s = 0; s < o && (Zt(e, t.items[s]), s !== o - 1); s++)
    e.push(", ");
  e.deindent(n()), e.push("])");
}
function ud(e, t) {
  const { helper: a, needIndent: n } = e;
  if (t.cases.length > 1) {
    e.push(`${a(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(n());
    const o = t.cases.length;
    for (let s = 0; s < o && (Zt(e, t.cases[s]), s !== o - 1); s++)
      e.push(", ");
    e.deindent(n()), e.push("])");
  }
}
function cd(e, t) {
  t.body ? Zt(e, t.body) : e.push("null");
}
function Zt(e, t) {
  const { helper: a } = e;
  switch (t.type) {
    case 0:
      cd(e, t);
      break;
    case 1:
      ud(e, t);
      break;
    case 2:
      id(e, t);
      break;
    case 6:
      rd(e, t);
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
        throw oa(ae.UNHANDLED_CODEGEN_NODE_TYPE, null, {
          domain: sd,
          args: [t.type]
        });
  }
}
const dd = (e, t = {}) => {
  const a = Y(t.mode) ? t.mode : "normal", n = Y(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const o = t.breakLineCode != null ? t.breakLineCode : a === "arrow" ? ";" : `
`, s = t.needIndent ? t.needIndent : a !== "arrow", r = e.helpers || [], i = ld(e, {
    filename: n,
    breakLineCode: o,
    needIndent: s
  });
  i.push(a === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), i.indent(s), r.length > 0 && (i.push(`const { ${Vn(r.map((g) => `${g}: _${g}`), ", ")} } = ctx`), i.newline()), i.push("return "), Zt(i, e), i.deindent(s), i.push("}"), delete e.helpers;
  const { code: u, map: c } = i.context();
  return {
    ast: e,
    code: u,
    map: c ? c.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function fd(e, t = {}) {
  const a = Me({}, t), n = !!a.jit, o = !!a.minify, s = a.optimize == null ? !0 : a.optimize, i = ed(a).parse(e);
  return n ? (s && nd(i), o && Xt(i), { ast: i, code: "" }) : (ad(i, a), dd(i, a));
}
function pd() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Lt().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Lt().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function lt(e) {
  return me(e) && zn(e) === 0 && (st(e, "b") || st(e, "body"));
}
const zs = ["b", "body"];
function md(e) {
  return kt(e, zs);
}
const Gs = ["c", "cases"];
function gd(e) {
  return kt(e, Gs, []);
}
const Ws = ["s", "static"];
function vd(e) {
  return kt(e, Ws);
}
const js = ["i", "items"];
function hd(e) {
  return kt(e, js, []);
}
const Hs = ["t", "type"];
function zn(e) {
  return kt(e, Hs);
}
const Ys = ["v", "value"];
function Sa(e, t) {
  const a = kt(e, Ys);
  if (a != null)
    return a;
  throw ca(t);
}
const Ks = ["m", "modifier"];
function bd(e) {
  return kt(e, Ks);
}
const Xs = ["k", "key"];
function yd(e) {
  const t = kt(e, Xs);
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
    if (st(e, o) && e[o] != null)
      return e[o];
  }
  return a;
}
const qs = [
  ...zs,
  ...Gs,
  ...Ws,
  ...js,
  ...Xs,
  ...Ks,
  ...Ys,
  ...Hs
];
function ca(e) {
  return new Error(`unhandled node type: ${e}`);
}
function en(e) {
  return (a) => _d(a, e);
}
function _d(e, t) {
  const a = md(t);
  if (a == null)
    throw ca(
      0
      /* NodeTypes.Resource */
    );
  if (zn(a) === 1) {
    const s = gd(a);
    return e.plural(s.reduce((r, i) => [
      ...r,
      Bo(e, i)
    ], []));
  } else
    return Bo(e, a);
}
function Bo(e, t) {
  const a = vd(t);
  if (a != null)
    return e.type === "text" ? a : e.normalize([a]);
  {
    const n = hd(t).reduce((o, s) => [...o, un(e, s)], []);
    return e.normalize(n);
  }
}
function un(e, t) {
  const a = zn(t);
  switch (a) {
    case 3:
      return Sa(t, a);
    case 9:
      return Sa(t, a);
    case 4: {
      const n = t;
      if (st(n, "k") && n.k)
        return e.interpolate(e.named(n.k));
      if (st(n, "key") && n.key)
        return e.interpolate(e.named(n.key));
      throw ca(a);
    }
    case 5: {
      const n = t;
      if (st(n, "i") && Ie(n.i))
        return e.interpolate(e.list(n.i));
      if (st(n, "index") && Ie(n.index))
        return e.interpolate(e.list(n.index));
      throw ca(a);
    }
    case 6: {
      const n = t, o = bd(n), s = yd(n);
      return e.linked(un(e, s), o ? un(e, o) : void 0, e.type);
    }
    case 7:
      return Sa(t, a);
    case 8:
      return Sa(t, a);
    default:
      throw new Error(`unhandled node on format message part: ${a}`);
  }
}
const wd = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function xd(e, t) {
  t && Gc(e) && ft(Ga(wd, { source: e }));
}
const Ed = (e) => e;
let Oa = he();
function kd(e, t = {}) {
  let a = !1;
  const n = t.onError || Uc;
  return t.onError = (o) => {
    a = !0, n(o);
  }, { ...fd(e, t), detectError: a };
}
// @__NO_SIDE_EFFECTS__
function Cd(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && Y(e)) {
    const a = Oe(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && xd(e, a);
    const o = (t.onCacheKey || Ed)(e), s = Oa[o];
    if (s)
      return s;
    const { ast: r, detectError: i } = kd(e, {
      ...t,
      location: process.env.NODE_ENV !== "production",
      jit: !0
    }), u = en(r);
    return i ? u : Oa[o] = u;
  } else {
    if (process.env.NODE_ENV !== "production" && !lt(e))
      return ft(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), (() => e);
    const a = e.cacheKey;
    if (a) {
      const n = Oa[a];
      return n || (Oa[a] = en(e));
    } else
      return en(e);
  }
}
let da = null;
function Sd(e) {
  da = e;
}
function Od(e, t, a) {
  da && da.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: a
  });
}
const Td = /* @__PURE__ */ Nd("function:translate");
function Nd(e) {
  return (t) => da && da.emit(e, t);
}
const Ue = {
  INVALID_ARGUMENT: Fc,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_NON_STRING_MESSAGE: 20,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, Ad = 24;
function bt(e) {
  return oa(e, null, process.env.NODE_ENV !== "production" ? { messages: Pd } : void 0);
}
const Pd = {
  [Ue.INVALID_ARGUMENT]: "Invalid arguments",
  [Ue.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [Ue.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [Ue.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
  [Ue.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
  [Ue.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
  [Ue.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function Gn(e, t) {
  return t.locale != null ? Fo(t.locale) : Fo(e.locale);
}
let tn;
function Fo(e) {
  if (Y(e))
    return e;
  if (xe(e)) {
    if (e.resolvedOnce && tn != null)
      return tn;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Lc(t))
        throw bt(Ue.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return tn = t;
    } else
      throw bt(Ue.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw bt(Ue.NOT_SUPPORT_LOCALE_TYPE);
}
function $d(e, t, a) {
  return [.../* @__PURE__ */ new Set([
    a,
    ...Te(t) ? t : me(t) ? Object.keys(t) : Y(t) ? [t] : [a]
  ])];
}
function Js(e, t, a) {
  const n = Y(a) ? a : Ra, o = e;
  o.__localeChainCache || (o.__localeChainCache = /* @__PURE__ */ new Map());
  let s = o.__localeChainCache.get(n);
  if (!s) {
    s = [];
    let r = [a];
    for (; Te(r); )
      r = Vo(s, r, t);
    const i = Te(t) || !fe(t) ? t : t.default ? t.default : null;
    r = Y(i) ? [i] : i, Te(r) && Vo(s, r, !1), o.__localeChainCache.set(n, s);
  }
  return s;
}
function Vo(e, t, a) {
  let n = !0;
  for (let o = 0; o < t.length && Oe(n); o++) {
    const s = t[o];
    Y(s) && (n = Dd(e, t[o], a));
  }
  return n;
}
function Dd(e, t, a) {
  let n;
  const o = t.split("-");
  do {
    const s = o.join("-");
    n = Ld(e, s, a), o.splice(-1, 1);
  } while (o.length && n === !0);
  return n;
}
function Ld(e, t, a) {
  let n = !1;
  if (!e.includes(t) && (n = !0, t)) {
    n = t[t.length - 1] !== "!";
    const o = t.replace(/!/g, "");
    e.push(o), (Te(a) || fe(a)) && a[o] && (n = a[o]);
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
const Id = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Md(e) {
  return Id.test(e);
}
function Rd(e) {
  const t = e.charCodeAt(0), a = e.charCodeAt(e.length - 1);
  return t === a && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Bd(e) {
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
function Fd(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Md(t) ? Rd(t) : "*" + t;
}
function Vd(e) {
  const t = [];
  let a = -1, n = 0, o = 0, s, r, i, u, c, g, m;
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
      if (o = 0, r === void 0 || (r = Fd(r), r === !1))
        return !1;
      f[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function S() {
    const M = e[a + 1];
    if (n === 5 && M === "'" || n === 6 && M === '"')
      return a++, i = "\\" + M, f[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; n !== null; )
    if (a++, s = e[a], !(s === "\\" && S())) {
      if (u = Bd(s), m = Ct[n], c = m[u] || m.l || 8, c === 8 || (n = c[0], c[1] !== void 0 && (g = f[c[1]], g && (i = s, g() === !1))))
        return;
      if (n === 7)
        return t;
    }
}
const Uo = /* @__PURE__ */ new Map();
function Ud(e, t) {
  return me(e) ? e[t] : null;
}
function zd(e, t) {
  if (!me(e))
    return null;
  let a = Uo.get(t);
  if (a || (a = Vd(t), a && Uo.set(t, a)), !a)
    return null;
  const n = a.length;
  let o = e, s = 0;
  for (; s < n; ) {
    const r = a[s];
    if (qs.includes(r) && lt(o))
      return null;
    const i = o[r];
    if (i === void 0 || xe(o))
      return null;
    o = i, s++;
  }
  return o;
}
const He = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7
}, Gd = 8, Wd = {
  [He.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [He.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [He.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [He.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [He.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [He.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [He.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function Ut(e, ...t) {
  return Ga(Wd[e], ...t);
}
const jd = "11.2.8", ja = -1, Ra = "en-US", Ba = "", zo = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Hd() {
  return {
    upper: (e, t) => t === "text" && Y(e) ? e.toUpperCase() : t === "vnode" && me(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && Y(e) ? e.toLowerCase() : t === "vnode" && me(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && Y(e) ? zo(e) : t === "vnode" && me(e) && "__v_isVNode" in e ? zo(e.children) : e
  };
}
let Zs;
function Yd(e) {
  Zs = e;
}
let Qs;
function Kd(e) {
  Qs = e;
}
let el;
function Xd(e) {
  el = e;
}
let tl = null;
const qd = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  tl = e;
}, Jd = /* @__NO_SIDE_EFFECTS__ */ () => tl;
let al = null;
const Go = (e) => {
  al = e;
}, Zd = () => al;
let Wo = 0;
function Qd(e = {}) {
  const t = xe(e.onWarn) ? e.onWarn : ft, a = Y(e.version) ? e.version : jd, n = Y(e.locale) || xe(e.locale) ? e.locale : Ra, o = xe(n) ? Ra : n, s = Te(e.fallbackLocale) || fe(e.fallbackLocale) || Y(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o, r = fe(e.messages) ? e.messages : an(o), i = fe(e.datetimeFormats) ? e.datetimeFormats : an(o), u = fe(e.numberFormats) ? e.numberFormats : an(o), c = Me(he(), e.modifiers, Hd()), g = e.pluralRules || he(), m = xe(e.missing) ? e.missing : null, f = Oe(e.missingWarn) || Ma(e.missingWarn) ? e.missingWarn : !0, S = Oe(e.fallbackWarn) || Ma(e.fallbackWarn) ? e.fallbackWarn : !0, M = !!e.fallbackFormat, k = !!e.unresolving, I = xe(e.postTranslation) ? e.postTranslation : null, y = fe(e.processor) ? e.processor : null, _ = Oe(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, x = !!e.escapeParameter, b = xe(e.messageCompiler) ? e.messageCompiler : Zs;
  process.env.NODE_ENV !== "production" && xe(e.messageCompiler) && Sc(Ut(He.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const O = xe(e.messageResolver) ? e.messageResolver : Qs || Ud, $ = xe(e.localeFallbacker) ? e.localeFallbacker : el || $d, E = me(e.fallbackContext) ? e.fallbackContext : void 0, B = e, Q = me(B.__datetimeFormatters) ? B.__datetimeFormatters : /* @__PURE__ */ new Map(), Z = me(B.__numberFormatters) ? B.__numberFormatters : /* @__PURE__ */ new Map(), le = me(B.__meta) ? B.__meta : {};
  Wo++;
  const H = {
    version: a,
    cid: Wo,
    locale: n,
    fallbackLocale: s,
    messages: r,
    modifiers: c,
    pluralRules: g,
    missing: m,
    missingWarn: f,
    fallbackWarn: S,
    fallbackFormat: M,
    unresolving: k,
    postTranslation: I,
    processor: y,
    warnHtmlMessage: _,
    escapeParameter: x,
    messageCompiler: b,
    messageResolver: O,
    localeFallbacker: $,
    fallbackContext: E,
    onWarn: t,
    __meta: le
  };
  return H.datetimeFormats = i, H.numberFormats = u, H.__datetimeFormatters = Q, H.__numberFormatters = Z, process.env.NODE_ENV !== "production" && (H.__v_emitter = B.__v_emitter != null ? B.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && Od(H, a, le), H;
}
const an = (e) => ({ [e]: he() });
function Ha(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function nl(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function Wn(e, t, a, n, o) {
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
    return Y(i) ? i : t;
  } else
    return process.env.NODE_ENV !== "production" && nl(n, t) && r(Ut(He.NOT_FOUND_KEY, { key: t, locale: a })), t;
}
function ia(e, t, a) {
  const n = e;
  n.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, a, t);
}
function ol(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function ef(e, t) {
  const a = t.indexOf(e);
  if (a === -1)
    return !1;
  for (let n = a + 1; n < t.length; n++)
    if (ol(e, t[n]))
      return !0;
  return !1;
}
const jo = typeof Intl < "u", sl = {
  dateTimeFormat: jo && typeof Intl.DateTimeFormat < "u",
  numberFormat: jo && typeof Intl.NumberFormat < "u"
};
function Ho(e, ...t) {
  const { datetimeFormats: a, unresolving: n, fallbackLocale: o, onWarn: s, localeFallbacker: r } = e, { __datetimeFormatters: i } = e;
  if (process.env.NODE_ENV !== "production" && !sl.dateTimeFormat)
    return s(Ut(He.CANNOT_FORMAT_DATE)), Ba;
  const [u, c, g, m] = cn(...t), f = Oe(g.missingWarn) ? g.missingWarn : e.missingWarn, S = Oe(g.fallbackWarn) ? g.fallbackWarn : e.fallbackWarn, M = !!g.part, k = Gn(e, g), I = r(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    k
  );
  if (!Y(u) || u === "")
    return new Intl.DateTimeFormat(k, m).format(c);
  let y = {}, _, x = null, b = k, O = null;
  const $ = "datetime format";
  for (let Q = 0; Q < I.length; Q++) {
    if (_ = O = I[Q], process.env.NODE_ENV !== "production" && k !== _ && Ha(S, u) && s(Ut(He.FALLBACK_TO_DATE_FORMAT, {
      key: u,
      target: _
    })), process.env.NODE_ENV !== "production" && k !== _) {
      const Z = e.__v_emitter;
      Z && Z.emit("fallback", {
        type: $,
        key: u,
        from: b,
        to: O,
        groupId: `${$}:${u}`
      });
    }
    if (y = a[_] || {}, x = y[u], fe(x))
      break;
    Wn(e, u, _, f, $), b = O;
  }
  if (!fe(x) || !Y(_))
    return n ? ja : u;
  let E = `${_}__${u}`;
  Wa(m) || (E = `${E}__${JSON.stringify(m)}`);
  let B = i.get(E);
  return B || (B = new Intl.DateTimeFormat(_, Me({}, x, m)), i.set(E, B)), M ? B.formatToParts(c) : B.format(c);
}
const ll = [
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
function cn(...e) {
  const [t, a, n, o] = e, s = he();
  let r = he(), i;
  if (Y(t)) {
    const u = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!u)
      throw bt(Ue.INVALID_ISO_DATE_ARGUMENT);
    const c = u[3] ? u[3].trim().startsWith("T") ? `${u[1].trim()}${u[3].trim()}` : `${u[1].trim()}T${u[3].trim()}` : u[1].trim();
    i = new Date(c);
    try {
      i.toISOString();
    } catch {
      throw bt(Ue.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Ac(t)) {
    if (isNaN(t.getTime()))
      throw bt(Ue.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (Ie(t))
    i = t;
  else
    throw bt(Ue.INVALID_ARGUMENT);
  return Y(a) ? s.key = a : fe(a) && Object.keys(a).forEach((u) => {
    ll.includes(u) ? r[u] = a[u] : s[u] = a[u];
  }), Y(n) ? s.locale = n : fe(n) && (r = n), fe(o) && (r = o), [s.key || "", i, s, r];
}
function Yo(e, t, a) {
  const n = e;
  for (const o in a) {
    const s = `${t}__${o}`;
    n.__datetimeFormatters.has(s) && n.__datetimeFormatters.delete(s);
  }
}
function Ko(e, ...t) {
  const { numberFormats: a, unresolving: n, fallbackLocale: o, onWarn: s, localeFallbacker: r } = e, { __numberFormatters: i } = e;
  if (process.env.NODE_ENV !== "production" && !sl.numberFormat)
    return s(Ut(He.CANNOT_FORMAT_NUMBER)), Ba;
  const [u, c, g, m] = dn(...t), f = Oe(g.missingWarn) ? g.missingWarn : e.missingWarn, S = Oe(g.fallbackWarn) ? g.fallbackWarn : e.fallbackWarn, M = !!g.part, k = Gn(e, g), I = r(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    k
  );
  if (!Y(u) || u === "")
    return new Intl.NumberFormat(k, m).format(c);
  let y = {}, _, x = null, b = k, O = null;
  const $ = "number format";
  for (let Q = 0; Q < I.length; Q++) {
    if (_ = O = I[Q], process.env.NODE_ENV !== "production" && k !== _ && Ha(S, u) && s(Ut(He.FALLBACK_TO_NUMBER_FORMAT, {
      key: u,
      target: _
    })), process.env.NODE_ENV !== "production" && k !== _) {
      const Z = e.__v_emitter;
      Z && Z.emit("fallback", {
        type: $,
        key: u,
        from: b,
        to: O,
        groupId: `${$}:${u}`
      });
    }
    if (y = a[_] || {}, x = y[u], fe(x))
      break;
    Wn(e, u, _, f, $), b = O;
  }
  if (!fe(x) || !Y(_))
    return n ? ja : u;
  let E = `${_}__${u}`;
  Wa(m) || (E = `${E}__${JSON.stringify(m)}`);
  let B = i.get(E);
  return B || (B = new Intl.NumberFormat(_, Me({}, x, m)), i.set(E, B)), M ? B.formatToParts(c) : B.format(c);
}
const rl = [
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
function dn(...e) {
  const [t, a, n, o] = e, s = he();
  let r = he();
  if (!Ie(t))
    throw bt(Ue.INVALID_ARGUMENT);
  const i = t;
  return Y(a) ? s.key = a : fe(a) && Object.keys(a).forEach((u) => {
    rl.includes(u) ? r[u] = a[u] : s[u] = a[u];
  }), Y(n) ? s.locale = n : fe(n) && (r = n), fe(o) && (r = o), [s.key || "", i, s, r];
}
function Xo(e, t, a) {
  const n = e;
  for (const o in a) {
    const s = `${t}__${o}`;
    n.__numberFormatters.has(s) && n.__numberFormatters.delete(s);
  }
}
const tf = (e) => e, af = (e) => "", nf = "text", of = (e) => e.length === 0 ? "" : Vn(e), sf = Ic;
function qo(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function lf(e) {
  const t = Ie(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Ie(e.named.count) || Ie(e.named.n)) ? Ie(e.named.count) ? e.named.count : Ie(e.named.n) ? e.named.n : t : t;
}
function rf(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function uf(e = {}) {
  const t = e.locale, a = lf(e), n = me(e.pluralRules) && Y(t) && xe(e.pluralRules[t]) ? e.pluralRules[t] : qo, o = me(e.pluralRules) && Y(t) && xe(e.pluralRules[t]) ? qo : void 0, s = (y) => y[n(a, y.length, o)], r = e.list || [], i = (y) => r[y], u = e.named || he();
  Ie(e.pluralIndex) && rf(a, u);
  const c = (y) => u[y];
  function g(y, _) {
    const x = xe(e.messages) ? e.messages(y, !!_) : me(e.messages) ? e.messages[y] : !1;
    return x || (e.parent ? e.parent.message(y) : af);
  }
  const m = (y) => e.modifiers ? e.modifiers[y] : tf, f = fe(e.processor) && xe(e.processor.normalize) ? e.processor.normalize : of, S = fe(e.processor) && xe(e.processor.interpolate) ? e.processor.interpolate : sf, M = fe(e.processor) && Y(e.processor.type) ? e.processor.type : nf, I = {
    list: i,
    named: c,
    plural: s,
    linked: (y, ..._) => {
      const [x, b] = _;
      let O = "text", $ = "";
      _.length === 1 ? me(x) ? ($ = x.modifier || $, O = x.type || O) : Y(x) && ($ = x || $) : _.length === 2 && (Y(x) && ($ = x || $), Y(b) && (O = b || O));
      const E = g(y, !0)(I), B = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        O === "vnode" && Te(E) && $ ? E[0] : E
      );
      return $ ? m($)(B, O) : B;
    },
    message: g,
    type: M,
    interpolate: S,
    normalize: f,
    values: Me(he(), r, u)
  };
  return I;
}
const Jo = () => "", qe = (e) => xe(e);
function Zo(e, ...t) {
  const { fallbackFormat: a, postTranslation: n, unresolving: o, messageCompiler: s, fallbackLocale: r, messages: i } = e, [u, c] = fn(...t), g = Oe(c.missingWarn) ? c.missingWarn : e.missingWarn, m = Oe(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, f = Oe(c.escapeParameter) ? c.escapeParameter : e.escapeParameter, S = !!c.resolvedMessage, M = Y(c.default) || Oe(c.default) ? Oe(c.default) ? s ? u : () => u : c.default : a ? s ? u : () => u : null, k = a || M != null && (Y(M) || xe(M)), I = Gn(e, c);
  f && cf(c);
  let [y, _, x] = S ? [
    u,
    I,
    i[I] || he()
  ] : il(e, u, I, r, m, g), b = y, O = u;
  if (!S && !(Y(b) || lt(b) || qe(b)) && k && (b = M, O = b), !S && (!(Y(b) || lt(b) || qe(b)) || !Y(_)))
    return o ? ja : u;
  if (process.env.NODE_ENV !== "production" && Y(b) && e.messageCompiler == null)
    return ft(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${u}'.`), u;
  let $ = !1;
  const E = () => {
    $ = !0;
  }, B = qe(b) ? b : ul(e, u, _, b, O, E);
  if ($)
    return b;
  const Q = mf(e, _, x, c), Z = uf(Q), le = df(e, B, Z);
  let H = n ? n(le, u) : le;
  if (f && Y(H) && (H = $c(H)), process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const be = {
      timestamp: Date.now(),
      key: Y(u) ? u : qe(b) ? b.key : "",
      locale: _ || (qe(b) ? b.locale : ""),
      format: Y(b) ? b : qe(b) ? b.source : "",
      message: H
    };
    be.meta = Me({}, e.__meta, /* @__PURE__ */ Jd() || {}), Td(be);
  }
  return H;
}
function cf(e) {
  Te(e.list) ? e.list = e.list.map((t) => Y(t) ? $o(t) : t) : me(e.named) && Object.keys(e.named).forEach((t) => {
    Y(e.named[t]) && (e.named[t] = $o(e.named[t]));
  });
}
function il(e, t, a, n, o, s) {
  const { messages: r, onWarn: i, messageResolver: u, localeFallbacker: c } = e, g = c(e, n, a);
  let m = he(), f, S = null, M = a, k = null;
  const I = "translate";
  for (let y = 0; y < g.length; y++) {
    if (f = k = g[y], process.env.NODE_ENV !== "production" && a !== f && !ol(a, f) && Ha(o, t) && i(Ut(He.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: f
    })), process.env.NODE_ENV !== "production" && a !== f) {
      const O = e.__v_emitter;
      O && O.emit("fallback", {
        type: I,
        key: t,
        from: M,
        to: k,
        groupId: `${I}:${t}`
      });
    }
    m = r[f] || he();
    let _ = null, x, b;
    if (process.env.NODE_ENV !== "production" && _t && (_ = window.performance.now(), x = "intlify-message-resolve-start", b = "intlify-message-resolve-end", Ye && Ye(x)), (S = u(m, t)) === null && (S = m[t]), process.env.NODE_ENV !== "production" && _t) {
      const O = window.performance.now(), $ = e.__v_emitter;
      $ && _ && S && $.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: S,
        time: O - _,
        groupId: `${I}:${t}`
      }), x && b && Ye && Vt && (Ye(b), Vt("intlify message resolve", x, b));
    }
    if (Y(S) || lt(S) || qe(S))
      break;
    if (!ef(f, g)) {
      const O = Wn(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        f,
        s,
        I
      );
      O !== t && (S = O);
    }
    M = k;
  }
  return [S, f, m];
}
function ul(e, t, a, n, o, s) {
  const { messageCompiler: r, warnHtmlMessage: i } = e;
  if (qe(n)) {
    const f = n;
    return f.locale = f.locale || a, f.key = f.key || t, f;
  }
  if (r == null) {
    const f = (() => n);
    return f.locale = a, f.key = t, f;
  }
  let u = null, c, g;
  process.env.NODE_ENV !== "production" && _t && (u = window.performance.now(), c = "intlify-message-compilation-start", g = "intlify-message-compilation-end", Ye && Ye(c));
  const m = r(n, ff(e, a, o, n, i, s));
  if (process.env.NODE_ENV !== "production" && _t) {
    const f = window.performance.now(), S = e.__v_emitter;
    S && u && S.emit("message-compilation", {
      type: "message-compilation",
      message: n,
      time: f - u,
      groupId: `translate:${t}`
    }), c && g && Ye && Vt && (Ye(g), Vt("intlify message compilation", c, g));
  }
  return m.locale = a, m.key = t, m.source = n, m;
}
function df(e, t, a) {
  let n = null, o, s;
  process.env.NODE_ENV !== "production" && _t && (n = window.performance.now(), o = "intlify-message-evaluation-start", s = "intlify-message-evaluation-end", Ye && Ye(o));
  const r = t(a);
  if (process.env.NODE_ENV !== "production" && _t) {
    const i = window.performance.now(), u = e.__v_emitter;
    u && n && u.emit("message-evaluation", {
      type: "message-evaluation",
      value: r,
      time: i - n,
      groupId: `translate:${t.key}`
    }), o && s && Ye && Vt && (Ye(s), Vt("intlify message evaluation", o, s));
  }
  return r;
}
function fn(...e) {
  const [t, a, n] = e, o = he();
  if (!Y(t) && !Ie(t) && !qe(t) && !lt(t))
    throw bt(Ue.INVALID_ARGUMENT);
  const s = Ie(t) ? String(t) : (qe(t), t);
  return Ie(a) ? o.plural = a : Y(a) ? o.default = a : fe(a) && !Wa(a) ? o.named = a : Te(a) && (o.list = a), Ie(n) ? o.plural = n : Y(n) ? o.default = n : fe(n) && Me(o, n), [s, o];
}
function ff(e, t, a, n, o, s) {
  return {
    locale: t,
    key: a,
    warnHtmlMessage: o,
    onError: (r) => {
      if (s && s(r), process.env.NODE_ENV !== "production") {
        const i = pf(n), u = `Message compilation error: ${r.message}`, c = r.location && i && Mc(i, r.location.start.offset, r.location.end.offset), g = e.__v_emitter;
        g && i && g.emit("compile-error", {
          message: i,
          error: r.message,
          start: r.location && r.location.start.offset,
          end: r.location && r.location.end.offset,
          groupId: `translate:${a}`
        }), console.error(c ? `${u}
${c}` : u);
      } else
        throw r;
    },
    onCacheKey: (r) => Tc(t, a, r)
  };
}
function pf(e) {
  if (Y(e))
    return e;
  if (e.loc && e.loc.source)
    return e.loc.source;
}
function mf(e, t, a, n) {
  const { modifiers: o, pluralRules: s, messageResolver: r, fallbackLocale: i, fallbackWarn: u, missingWarn: c, fallbackContext: g } = e, f = {
    locale: t,
    modifiers: o,
    pluralRules: s,
    messages: (S, M) => {
      let k = r(a, S);
      if (k == null && (g || M)) {
        const [, , I] = il(
          g || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          S,
          t,
          i,
          u,
          c
        );
        k = r(I, S);
      }
      if (Y(k) || lt(k)) {
        let I = !1;
        const _ = ul(e, S, t, k, S, () => {
          I = !0;
        });
        return I ? Jo : _;
      } else return qe(k) ? k : Jo;
    }
  };
  return e.processor && (f.processor = e.processor), n.list && (f.list = n.list), n.named && (f.named = n.named), Ie(n.plural) && (f.pluralIndex = n.plural), f;
}
pd();
const gf = "11.2.8";
function vf() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Lt().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Lt().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Lt().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Lt().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const Be = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Ad,
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
function fa(e, ...t) {
  return oa(e, null, process.env.NODE_ENV !== "production" ? { messages: hf, args: t } : void 0);
}
const hf = {
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
}, pn = /* @__PURE__ */ wt("__translateVNode"), mn = /* @__PURE__ */ wt("__datetimeParts"), gn = /* @__PURE__ */ wt("__numberParts"), vn = /* @__PURE__ */ wt("__enableEmitter"), hn = /* @__PURE__ */ wt("__disableEmitter"), bf = wt("__setPluralRules"), cl = /* @__PURE__ */ wt("__injectWithOption"), bn = /* @__PURE__ */ wt("__dispose"), dt = {
  FALLBACK_TO_ROOT: Gd,
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
}, yf = {
  [dt.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
  [dt.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
  [dt.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
  /**
   * @deprecated will be removed at vue-i18n v12
   */
  [dt.DEPRECATE_LEGACY_MODE]: `Legacy API mode has been deprecated in v11. Use Composition API mode instead.
About how to use the Composition API mode, see https://vue-i18n.intlify.dev/guide/advanced/composition.html`,
  /**
   * @deprecated will be removed at vue-i18n v12
   */
  [dt.DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE]: "'v-t' has been deprecated in v11. Use translate APIs ('t' or '$t') instead.",
  [dt.DUPLICATE_USE_I18N_CALLING]: "Duplicate `useI18n` calling by local scope. Please don't call it on local scope, due to it does not work properly in component."
};
function Fa(e, ...t) {
  return Ga(yf[e], ...t);
}
function pa(e) {
  if (!me(e) || lt(e))
    return e;
  for (const t in e)
    if (st(e, t))
      if (!t.includes("."))
        me(e[t]) && pa(e[t]);
      else {
        const a = t.split("."), n = a.length - 1;
        let o = e, s = !1;
        for (let r = 0; r < n; r++) {
          if (a[r] === "__proto__")
            throw new Error(`unsafe key: ${a[r]}`);
          if (a[r] in o || (o[a[r]] = he()), !me(o[a[r]])) {
            process.env.NODE_ENV !== "production" && ft(Fa(dt.IGNORE_OBJ_FLATTEN, {
              key: a[r]
            })), s = !0;
            break;
          }
          o = o[a[r]];
        }
        if (s || (lt(o) ? qs.includes(a[n]) || delete e[t] : (o[a[n]] = e[t], delete e[t])), !lt(o)) {
          const r = o[a[n]];
          me(r) && pa(r);
        }
      }
  return e;
}
function dl(e, t) {
  const { messages: a, __i18n: n, messageResolver: o, flatJson: s } = t, r = fe(a) ? a : Te(n) ? he() : { [e]: he() };
  if (Te(n) && n.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: u, resource: c } = i;
      u ? (r[u] = r[u] || he(), $a(c, r[u])) : $a(c, r);
    } else
      Y(i) && $a(JSON.parse(i), r);
  }), o == null && s)
    for (const i in r)
      st(r, i) && pa(r[i]);
  return r;
}
function fl(e) {
  return e.type;
}
function _f(e, t, a) {
  let n = me(t.messages) ? t.messages : he();
  "__i18nGlobal" in a && (n = dl(e.locale.value, {
    messages: n,
    __i18n: a.__i18nGlobal
  }));
  const o = Object.keys(n);
  o.length && o.forEach((s) => {
    e.mergeLocaleMessage(s, n[s]);
  });
  {
    if (me(t.datetimeFormats)) {
      const s = Object.keys(t.datetimeFormats);
      s.length && s.forEach((r) => {
        e.mergeDateTimeFormat(r, t.datetimeFormats[r]);
      });
    }
    if (me(t.numberFormats)) {
      const s = Object.keys(t.numberFormats);
      s.length && s.forEach((r) => {
        e.mergeNumberFormat(r, t.numberFormats[r]);
      });
    }
  }
}
function Qo(e) {
  return w(Rl, null, e, 0);
}
function jn() {
  const e = "currentInstance";
  return e in Ka ? Ka[e] : Ka.getCurrentInstance();
}
const es = "__INTLIFY_META__", ts = () => [], wf = () => !1;
let as = 0;
function ns(e) {
  return ((t, a, n, o) => e(a, n, jn() || void 0, o));
}
const xf = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = jn();
  let t = null;
  return e && (t = fl(e)[es]) ? { [es]: t } : null;
};
function Ef(e = {}) {
  const { __root: t, __injectWithOption: a } = e, n = t === void 0, o = e.flatJson, s = _t ? se : yt;
  let r = Oe(e.inheritLocale) ? e.inheritLocale : !0;
  const i = s(
    // prettier-ignore
    t && r ? t.locale.value : Y(e.locale) ? e.locale : Ra
  ), u = s(
    // prettier-ignore
    t && r ? t.fallbackLocale.value : Y(e.fallbackLocale) || Te(e.fallbackLocale) || fe(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i.value
  ), c = s(dl(i.value, e)), g = s(fe(e.datetimeFormats) ? e.datetimeFormats : { [i.value]: {} }), m = s(fe(e.numberFormats) ? e.numberFormats : { [i.value]: {} });
  let f = t ? t.missingWarn : Oe(e.missingWarn) || Ma(e.missingWarn) ? e.missingWarn : !0, S = t ? t.fallbackWarn : Oe(e.fallbackWarn) || Ma(e.fallbackWarn) ? e.fallbackWarn : !0, M = t ? t.fallbackRoot : Oe(e.fallbackRoot) ? e.fallbackRoot : !0, k = !!e.fallbackFormat, I = xe(e.missing) ? e.missing : null, y = xe(e.missing) ? ns(e.missing) : null, _ = xe(e.postTranslation) ? e.postTranslation : null, x = t ? t.warnHtmlMessage : Oe(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, b = !!e.escapeParameter;
  const O = t ? t.modifiers : fe(e.modifiers) ? e.modifiers : {};
  let $ = e.pluralRules || t && t.pluralRules, E;
  E = (() => {
    n && Go(null);
    const N = {
      version: gf,
      locale: i.value,
      fallbackLocale: u.value,
      messages: c.value,
      modifiers: O,
      pluralRules: $,
      missing: y === null ? void 0 : y,
      missingWarn: f,
      fallbackWarn: S,
      fallbackFormat: k,
      unresolving: !0,
      postTranslation: _ === null ? void 0 : _,
      warnHtmlMessage: x,
      escapeParameter: b,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    N.datetimeFormats = g.value, N.numberFormats = m.value, N.__datetimeFormatters = fe(E) ? E.__datetimeFormatters : void 0, N.__numberFormatters = fe(E) ? E.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (N.__v_emitter = fe(E) ? E.__v_emitter : void 0);
    const F = Qd(N);
    return n && Go(F), F;
  })(), ia(E, i.value, u.value);
  function Q() {
    return [
      i.value,
      u.value,
      c.value,
      g.value,
      m.value
    ];
  }
  const Z = V({
    get: () => i.value,
    set: (N) => {
      E.locale = N, i.value = N;
    }
  }), le = V({
    get: () => u.value,
    set: (N) => {
      E.fallbackLocale = N, u.value = N, ia(E, i.value, N);
    }
  }), H = V(() => c.value), be = /* @__PURE__ */ V(() => g.value), C = /* @__PURE__ */ V(() => m.value);
  function z() {
    return xe(_) ? _ : null;
  }
  function T(N) {
    _ = N, E.postTranslation = N;
  }
  function ge() {
    return I;
  }
  function W(N) {
    N !== null && (y = ns(N)), I = N, E.missing = y;
  }
  function We(N, F) {
    return N !== "translate" || !F.resolvedMessage;
  }
  const Fe = (N, F, ue, _e, ot, At) => {
    Q();
    let je;
    try {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, n || (E.fallbackContext = t ? Zd() : void 0), je = N(E);
    } finally {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, n || (E.fallbackContext = void 0);
    }
    if (ue !== "translate exists" && // for not `te` (e.g `t`)
    Ie(je) && je === ja || ue === "translate exists" && !je) {
      const [rt, Ya] = F();
      if (process.env.NODE_ENV !== "production" && t && Y(rt) && We(ue, Ya) && (M && (Ha(S, rt) || nl(f, rt)) && ft(Fa(dt.FALLBACK_TO_ROOT, {
        key: rt,
        type: ue
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: it } = E;
        it && M && it.emit("fallback", {
          type: ue,
          key: rt,
          to: "global",
          groupId: `${ue}:${rt}`
        });
      }
      return t && M ? _e(t) : ot(rt);
    } else {
      if (At(je))
        return je;
      throw fa(Be.UNEXPECTED_RETURN_TYPE);
    }
  };
  function Ze(...N) {
    return Fe((F) => Reflect.apply(Zo, null, [F, ...N]), () => fn(...N), "translate", (F) => Reflect.apply(F.t, F, [...N]), (F) => F, (F) => Y(F));
  }
  function pt(...N) {
    const [F, ue, _e] = N;
    if (_e && !me(_e))
      throw fa(Be.INVALID_ARGUMENT);
    return Ze(F, ue, Me({ resolvedMessage: !0 }, _e || {}));
  }
  function Se(...N) {
    return Fe((F) => Reflect.apply(Ho, null, [F, ...N]), () => cn(...N), "datetime format", (F) => Reflect.apply(F.d, F, [...N]), () => Ba, (F) => Y(F) || Te(F));
  }
  function $e(...N) {
    return Fe((F) => Reflect.apply(Ko, null, [F, ...N]), () => dn(...N), "number format", (F) => Reflect.apply(F.n, F, [...N]), () => Ba, (F) => Y(F) || Te(F));
  }
  function Qe(N) {
    return N.map((F) => Y(F) || Ie(F) || Oe(F) ? Qo(String(F)) : F);
  }
  const ye = {
    normalize: Qe,
    interpolate: (N) => N,
    type: "vnode"
  };
  function Xe(...N) {
    return Fe((F) => {
      let ue;
      const _e = F;
      try {
        _e.processor = ye, ue = Reflect.apply(Zo, null, [_e, ...N]);
      } finally {
        _e.processor = null;
      }
      return ue;
    }, () => fn(...N), "translate", (F) => F[pn](...N), (F) => [Qo(F)], (F) => Te(F));
  }
  function et(...N) {
    return Fe((F) => Reflect.apply(Ko, null, [F, ...N]), () => dn(...N), "number format", (F) => F[gn](...N), ts, (F) => Y(F) || Te(F));
  }
  function tt(...N) {
    return Fe((F) => Reflect.apply(Ho, null, [F, ...N]), () => cn(...N), "datetime format", (F) => F[mn](...N), ts, (F) => Y(F) || Te(F));
  }
  function mt(N) {
    $ = N, E.pluralRules = $;
  }
  function at(N, F) {
    return Fe(() => {
      if (!N)
        return !1;
      const ue = Y(F) ? F : i.value, _e = gt(ue), ot = E.messageResolver(_e, N);
      return lt(ot) || qe(ot) || Y(ot);
    }, () => [N], "translate exists", (ue) => Reflect.apply(ue.te, ue, [N, F]), wf, (ue) => Oe(ue));
  }
  function nt(N) {
    let F = null;
    const ue = Js(E, u.value, i.value);
    for (let _e = 0; _e < ue.length; _e++) {
      const ot = c.value[ue[_e]] || {}, At = E.messageResolver(ot, N);
      if (At != null) {
        F = At;
        break;
      }
    }
    return F;
  }
  function Tt(N) {
    const F = nt(N);
    return F ?? (t ? t.tm(N) || {} : {});
  }
  function gt(N) {
    return c.value[N] || {};
  }
  function Nt(N, F) {
    if (o) {
      const ue = { [N]: F };
      for (const _e in ue)
        st(ue, _e) && pa(ue[_e]);
      F = ue[N];
    }
    c.value[N] = F, E.messages = c.value;
  }
  function sa(N, F) {
    c.value[N] = c.value[N] || {};
    const ue = { [N]: F };
    if (o)
      for (const _e in ue)
        st(ue, _e) && pa(ue[_e]);
    F = ue[N], $a(F, c.value[N]), E.messages = c.value;
  }
  function d(N) {
    return g.value[N] || {};
  }
  function v(N, F) {
    g.value[N] = F, E.datetimeFormats = g.value, Yo(E, N, F);
  }
  function D(N, F) {
    g.value[N] = Me(g.value[N] || {}, F), E.datetimeFormats = g.value, Yo(E, N, F);
  }
  function U(N) {
    return m.value[N] || {};
  }
  function oe(N, F) {
    m.value[N] = F, E.numberFormats = m.value, Xo(E, N, F);
  }
  function ie(N, F) {
    m.value[N] = Me(m.value[N] || {}, F), E.numberFormats = m.value, Xo(E, N, F);
  }
  as++, t && _t && (Re(t.locale, (N) => {
    r && (i.value = N, E.locale = N, ia(E, i.value, u.value));
  }), Re(t.fallbackLocale, (N) => {
    r && (u.value = N, E.fallbackLocale = N, ia(E, i.value, u.value));
  }));
  const ne = {
    id: as,
    locale: Z,
    fallbackLocale: le,
    get inheritLocale() {
      return r;
    },
    set inheritLocale(N) {
      r = N, N && t && (i.value = t.locale.value, u.value = t.fallbackLocale.value, ia(E, i.value, u.value));
    },
    get availableLocales() {
      return Object.keys(c.value).sort();
    },
    messages: H,
    get modifiers() {
      return O;
    },
    get pluralRules() {
      return $ || {};
    },
    get isGlobal() {
      return n;
    },
    get missingWarn() {
      return f;
    },
    set missingWarn(N) {
      f = N, E.missingWarn = f;
    },
    get fallbackWarn() {
      return S;
    },
    set fallbackWarn(N) {
      S = N, E.fallbackWarn = S;
    },
    get fallbackRoot() {
      return M;
    },
    set fallbackRoot(N) {
      M = N;
    },
    get fallbackFormat() {
      return k;
    },
    set fallbackFormat(N) {
      k = N, E.fallbackFormat = k;
    },
    get warnHtmlMessage() {
      return x;
    },
    set warnHtmlMessage(N) {
      x = N, E.warnHtmlMessage = N;
    },
    get escapeParameter() {
      return b;
    },
    set escapeParameter(N) {
      b = N, E.escapeParameter = N;
    },
    t: Ze,
    getLocaleMessage: gt,
    setLocaleMessage: Nt,
    mergeLocaleMessage: sa,
    getPostTranslationHandler: z,
    setPostTranslationHandler: T,
    getMissingHandler: ge,
    setMissingHandler: W,
    [bf]: mt
  };
  return ne.datetimeFormats = be, ne.numberFormats = C, ne.rt = pt, ne.te = at, ne.tm = Tt, ne.d = Se, ne.n = $e, ne.getDateTimeFormat = d, ne.setDateTimeFormat = v, ne.mergeDateTimeFormat = D, ne.getNumberFormat = U, ne.setNumberFormat = oe, ne.mergeNumberFormat = ie, ne[cl] = a, ne[pn] = Xe, ne[mn] = tt, ne[gn] = et, process.env.NODE_ENV !== "production" && (ne[vn] = (N) => {
    E.__v_emitter = N;
  }, ne[hn] = () => {
    E.__v_emitter = void 0;
  }), ne;
}
function os(e, t) {
}
const Hn = {
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
function kf({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((n, o) => [
    ...n,
    // prettier-ignore
    ...o.type === pe ? o.children : [o]
  ], []) : t.reduce((a, n) => {
    const o = e[n];
    return o && (a[n] = o()), a;
  }, he());
}
function pl() {
  return pe;
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
}, Hn);
function Cf(e) {
  return Te(e) && !Y(e[0]);
}
function ml(e, t, a, n) {
  const { slots: o, attrs: s } = t;
  return () => {
    const r = { part: !0 };
    let i = he();
    e.locale && (r.locale = e.locale), Y(e.format) ? r.key = e.format : me(e.format) && (Y(e.format.key) && (r.key = e.format.key), i = Object.keys(e.format).reduce((f, S) => a.includes(S) ? Me(he(), f, { [S]: e.format[S] }) : f, he()));
    const u = n(e.value, r, i);
    let c = [r.key];
    Te(u) ? c = u.map((f, S) => {
      const M = o[f.type], k = M ? M({ [f.type]: f.value, index: S, parts: u }) : [f.value];
      return Cf(k) && (k[0].key = `${f.type}-${S}`), k;
    }) : Y(u) && (c = [u]);
    const g = Me(he(), s), m = Y(e.tag) || me(e.tag) ? e.tag : pl();
    return qt(m, g, c);
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
}, Hn);
const Sf = /* @__PURE__ */ wt("global-vue-i18n");
function St(e = {}) {
  const t = jn();
  if (t == null)
    throw fa(Be.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw fa(Be.NOT_INSTALLED);
  const a = Of(t), n = Nf(a), o = fl(t), s = Tf(e, o);
  if (s === "global")
    return _f(n, e, o), n;
  if (s === "parent") {
    let u = Af(a, t, e.__useComponent);
    return u == null && (process.env.NODE_ENV !== "production" && ft(Fa(dt.NOT_FOUND_PARENT_SCOPE)), u = n), u;
  }
  const r = a;
  let i = r.__getInstance(t);
  if (i == null) {
    const u = Me({}, e);
    "__i18n" in o && (u.__i18n = o.__i18n), n && (u.__root = n), i = Ef(u), r.__composerExtend && (i[bn] = r.__composerExtend(i)), $f(r, t, i), r.__setInstance(t, i);
  } else
    process.env.NODE_ENV !== "production" && s === "local" && ft(Fa(dt.DUPLICATE_USE_I18N_CALLING));
  return i;
}
function Of(e) {
  const t = Jt(e.isCE ? Sf : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw fa(e.isCE ? Be.NOT_INSTALLED_WITH_PROVIDE : Be.UNEXPECTED_ERROR);
  return t;
}
function Tf(e, t) {
  return Wa(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Nf(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function Af(e, t, a = !1) {
  let n = null;
  const o = t.root;
  let s = Pf(t, a);
  for (; s != null; ) {
    const r = e;
    if (e.mode === "composition")
      n = r.__getInstance(s);
    else if (__VUE_I18N_LEGACY_API__) {
      const i = r.__getInstance(s);
      i != null && (n = i.__composer, a && n && !n[cl] && (n = null));
    }
    if (n != null || o === s)
      break;
    s = s.parent;
  }
  return n;
}
function Pf(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function $f(e, t, a) {
  let n = null;
  Gt(() => {
    if (process.env.NODE_ENV !== "production") {
      t.__VUE_I18N__ = a, n = Rc();
      const o = a;
      o[vn] && o[vn](n), n.on("*", os);
    }
  }, t), yn(() => {
    const o = a;
    process.env.NODE_ENV !== "production" && (n && n.off("*", os), o[hn] && o[hn](), delete t.__VUE_I18N__), e.__deleteInstance(t);
    const s = o[bn];
    s && (s(), delete o[bn]);
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
}, Hn);
vf();
Yd(Cd);
Kd(zd);
Xd(Js);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = Lt();
  e.__INTLIFY__ = !0, Sd(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
const Df = /* @__PURE__ */ P({
  __name: "Empty",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (p(), R("div", {
      "data-slot": "empty",
      class: ee(l(G)(
        "flex min-w-0 flex-1 flex-col items-center justify-center gap-6 text-balance rounded-lg border-dashed p-6 text-center md:p-12",
        t.class
      ))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), Lf = /* @__PURE__ */ P({
  __name: "EmptyContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (p(), R("div", {
      "data-slot": "empty-content",
      class: ee(l(G)(
        "flex w-full min-w-0 max-w-sm flex-col items-center gap-4 text-balance text-sm",
        t.class
      ))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), If = /* @__PURE__ */ P({
  __name: "EmptyDescription",
  props: {
    class: {}
  },
  setup(e) {
    return (t, a) => (p(), R("p", {
      "data-slot": "empty-description",
      class: ee(l(G)(
        "text-muted-foreground [&>a:hover]:text-primary text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4",
        t.$attrs.class ?? ""
      ))
    }, [
      L(t.$slots, "default")
    ], 2));
  }
}), Mf = /* @__PURE__ */ P({
  __name: "EmptyHeader",
  props: {
    class: {}
  },
  setup(e) {
    return (t, a) => (p(), R("div", {
      "data-slot": "empty-header",
      class: ee(l(G)(
        "flex max-w-sm flex-col items-center gap-2 text-center",
        t.$attrs.class ?? ""
      ))
    }, [
      L(t.$slots, "default")
    ], 2));
  }
}), Rf = ["data-variant"], Bf = /* @__PURE__ */ P({
  __name: "EmptyMedia",
  props: {
    class: {},
    variant: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (p(), R("div", {
      "data-slot": "empty-icon",
      "data-variant": e.variant,
      class: ee(l(G)(l(gl)({ variant: e.variant }), t.class))
    }, [
      L(a.$slots, "default")
    ], 10, Rf));
  }
}), Ff = ["data-variant"], Vf = /* @__PURE__ */ P({
  __name: "EmptyTitle",
  props: {
    class: {},
    variant: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (p(), R("div", {
      "data-slot": "empty-icon",
      "data-variant": e.variant,
      class: ee(l(G)(l(gl)({ variant: e.variant }), t.class))
    }, [
      L(a.$slots, "default")
    ], 10, Ff));
  }
}), gl = jt(
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
), Uf = ["colspan"], Yn = /* @__PURE__ */ P({
  __name: "DataTableEmpty",
  setup(e) {
    const t = Ht(), { t: a } = St();
    return (n, o) => (p(), R("tr", null, [
      q("td", {
        colspan: l(t).colNum.value
      }, [
        w(l(Df), null, {
          default: h(() => [
            w(l(Mf), null, {
              default: h(() => [
                w(l(Bf), { variant: "icon" }, {
                  default: h(() => [
                    w(l(ys))
                  ]),
                  _: 1
                }),
                w(l(Vf), null, {
                  default: h(() => [
                    de(J(l(a)("dataTable.noEntriesFound")), 1)
                  ]),
                  _: 1
                }),
                w(l(If), null, {
                  default: h(() => [
                    de(J(l(a)("dataTable.noEntriesFoundDescription")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            w(l(Lf), null, {
              default: h(() => [
                L(n.$slots, "default")
              ]),
              _: 3
            })
          ]),
          _: 3
        })
      ], 8, Uf)
    ]));
  }
}), zf = /* @__PURE__ */ P({
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
    const a = e, n = t, o = ce(a, "class"), s = Ne(o, n);
    return (r, i) => (p(), A(l(Zl), j({ "data-slot": "pagination" }, l(s), {
      class: l(G)("mx-auto flex w-full justify-center", a.class)
    }), {
      default: h((u) => [
        L(r.$slots, "default", Mt(ea(u)))
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Gf = /* @__PURE__ */ P({
  __name: "PaginationContent",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ce(t, "class");
    return (n, o) => (p(), A(l(Ql), j({ "data-slot": "pagination-content" }, l(a), {
      class: l(G)("flex flex-row items-center gap-1", t.class)
    }), {
      default: h((s) => [
        L(n.$slots, "default", Mt(ea(s)))
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Wf = (e, t) => t, jf = /* @__PURE__ */ Symbol("brink-component-translation");
function Ge() {
  return Jt(jf, null) ?? Wf;
}
const Hf = { class: "hidden sm:block" }, Yf = /* @__PURE__ */ P({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, a = ce(t, "class", "size"), n = Je(a), o = Ge();
    return (s, r) => (p(), A(l(er), j({
      "data-slot": "pagination-first",
      class: l(G)(l(Et)({ variant: "outline", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, l(n)), {
      default: h(() => [
        L(s.$slots, "default", {}, () => [
          w(l(hs), { class: "size-4" }),
          q("span", Hf, J(l(o)("pagination.first", "First")), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Kf = { class: "hidden sm:block" }, Xf = /* @__PURE__ */ P({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, a = ce(t, "class", "size"), n = Je(a), o = Ge();
    return (s, r) => (p(), A(l(tr), j({
      "data-slot": "pagination-last",
      class: l(G)(l(Et)({ variant: "outline", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, l(n)), {
      default: h(() => [
        L(s.$slots, "default", {}, () => [
          q("span", Kf, J(l(o)("pagination.last", "Last")), 1),
          w(l(bs), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), qf = { class: "hidden sm:block" }, Jf = /* @__PURE__ */ P({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, a = ce(t, "class", "size"), n = Je(a), o = Ge();
    return (s, r) => (p(), A(l(ar), j({
      "data-slot": "pagination-next",
      class: l(G)(l(Et)({ variant: "outline", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, l(n)), {
      default: h(() => [
        L(s.$slots, "default", {}, () => [
          q("span", qf, J(l(o)("pagination.next", "Next")), 1),
          w(l(Wt))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Zf = { class: "hidden sm:block" }, Qf = /* @__PURE__ */ P({
  __name: "PaginationPrevious",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, a = ce(t, "class", "size"), n = Je(a), o = Ge();
    return (s, r) => (p(), A(l(nr), j({
      "data-slot": "pagination-previous",
      class: l(G)(l(Et)({ variant: "outline", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, l(n)), {
      default: h(() => [
        L(s.$slots, "default", {}, () => [
          w(l(vs)),
          q("span", Zf, J(l(o)("pagination.previous", "Previous")), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ep = /* @__PURE__ */ P({
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
    return (s, r) => (p(), A(l(or), j({ "data-slot": "select" }, l(o)), {
      default: h(() => [
        L(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), tp = /* @__PURE__ */ P({
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
    const a = e, n = t, o = ce(a, "class"), s = Ne(o, n);
    return (r, i) => (p(), A(l(sr), null, {
      default: h(() => [
        w(l(lr), j({ "data-slot": "select-content" }, { ...l(s), ...r.$attrs }, {
          class: l(G)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--reka-select-content-available-height) min-w-[8rem] overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
            e.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            a.class
          )
        }), {
          default: h(() => [
            w(l(sp)),
            w(l(rr), {
              class: ee(l(G)("p-1", e.position === "popper" && "h-[var(--reka-select-trigger-height)] w-full min-w-[var(--reka-select-trigger-width)] scroll-my-1"))
            }, {
              default: h(() => [
                L(r.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            w(l(op))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), ap = { class: "absolute right-2 flex size-3.5 items-center justify-center" }, np = /* @__PURE__ */ P({
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
    const t = e, a = ce(t, "class"), n = Je(a);
    return (o, s) => (p(), A(l(ir), j({ "data-slot": "select-item" }, l(n), {
      class: l(G)(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        t.class
      )
    }), {
      default: h(() => [
        q("span", ap, [
          w(l(ur), null, {
            default: h(() => [
              w(l(za), { class: "size-4" })
            ]),
            _: 1
          })
        ]),
        w(l(cr), null, {
          default: h(() => [
            L(o.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), op = /* @__PURE__ */ P({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ce(t, "class"), n = Je(a);
    return (o, s) => (p(), A(l(dr), j({ "data-slot": "select-scroll-down-button" }, l(n), {
      class: l(G)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: h(() => [
        L(o.$slots, "default", {}, () => [
          w(l(ta), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), sp = /* @__PURE__ */ P({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ce(t, "class"), n = Je(a);
    return (o, s) => (p(), A(l(fr), j({ "data-slot": "select-scroll-up-button" }, l(n), {
      class: l(G)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: h(() => [
        L(o.$slots, "default", {}, () => [
          w(l(Xr), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), lp = /* @__PURE__ */ P({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (p(), A(l(pr), j({ "data-slot": "select-value" }, t), {
      default: h(() => [
        L(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Kn = /* @__PURE__ */ P({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ce(t, "class");
    return (n, o) => (p(), A(l(mr), j({ "data-slot": "dropdown-menu-separator" }, l(a), {
      class: l(G)("bg-border -mx-1 my-1 h-px", t.class)
    }), null, 16, ["class"]));
  }
}), rp = {
  key: 0,
  class: "text-xs font-semibold px-2 py-2"
}, ip = { key: 1 }, up = {
  key: 0,
  class: "-mt-2"
}, Xn = /* @__PURE__ */ P({
  inheritAttrs: !1,
  __name: "SelectOptions",
  props: /* @__PURE__ */ Ce({
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
  emits: /* @__PURE__ */ Ce(["onAddItem"], ["update:modelValue"]),
  setup(e) {
    const t = e, a = Ge(), n = ve(e, "modelValue"), o = V(() => Object.fromEntries(we(t.options).map((u) => [u.value, u]))), s = V(() => n.value ? t.multiple ? Array.isArray(n.value) ? n.value.map((u) => o.value[u]).filter(Boolean) : [] : o.value[n.value] ? [o.value[n.value]] : [] : []);
    function r() {
      n.value = t.initialValues ?? (t.multiple ? [] : void 0);
    }
    const i = V(() => t.initialValues === void 0 ? n.value !== void 0 : JSON.stringify(t.initialValues) !== JSON.stringify(n.value));
    return (u, c) => (p(), R(pe, null, [
      w(l(ep), {
        modelValue: n.value,
        "onUpdate:modelValue": c[1] || (c[1] = (g) => n.value = g),
        multiple: e.multiple,
        disabled: e.disabled
      }, {
        default: h(() => [
          w(l(gr), j({
            class: l(G)(
              "w-full data-[placeholder]:text-muted-foreground ",
              t.class
            )
          }, u.$attrs, {
            disabled: e.disabled,
            "as-child": ""
          }), {
            default: h(() => [
              w(Fs, { variant: "outline" }, {
                default: h(() => [
                  L(u.$slots, "default", { selectedOptions: s.value }, () => [
                    w(l(lp), {
                      placeholder: e.placeholder || l(a)("common.select", "Select"),
                      class: "flex-wrap"
                    }, {
                      default: h(() => [
                        e.customValueComponent && s.value.length > 0 ? (p(!0), R(pe, { key: 0 }, Ee(s.value, (g) => (p(), A(Ke(e.customValueComponent), j({
                          key: g.value,
                          option: g,
                          "selected-options": s.value
                        }, { ref_for: !0 }, e.customValueProps), null, 16, ["option", "selected-options"]))), 128)) : te("", !0)
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
          w(l(tp), null, {
            default: h(() => [
              e.label ? (p(), R("div", rp, J(e.label), 1)) : te("", !0),
              (p(!0), R(pe, null, Ee(we(e.options), (g) => (p(), A(l(np), {
                key: String(g.value),
                value: g.value,
                disabled: e.disabled
              }, {
                default: h(() => [
                  de(J(g.label), 1)
                ]),
                _: 2
              }, 1032, ["value", "disabled"]))), 128)),
              e.showResetButton && i.value ? (p(), R("div", ip, [
                w(Kn),
                w(ze, {
                  class: "w-full",
                  variant: "ghost",
                  size: "sm",
                  disabled: e.disabled,
                  onClick: c[0] || (c[0] = (g) => r())
                }, {
                  default: h(() => [
                    w(l(Qr)),
                    de(" " + J(l(a)("common.reset", "Reset")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ])) : te("", !0)
            ]),
            _: 1
          })
        ]),
        _: 3
      }, 8, ["modelValue", "multiple", "disabled"]),
      e.showAddItemButton ? (p(), R("div", up, [
        w(ze, {
          size: "sm",
          class: "sticky bottom-0",
          variant: "ghost",
          disabled: e.disabled,
          onClick: c[2] || (c[2] = (g) => u.$emit("onAddItem"))
        }, {
          default: h(() => [
            w(l(Tn)),
            de(" " + J(l(a)("common.addItem", "Add Item")), 1)
          ]),
          _: 1
        }, 8, ["disabled"])
      ])) : te("", !0)
    ], 64));
  }
}), cp = {
  key: 0,
  class: "flex items-center gap-2 min-w-0"
}, dp = { class: "text-sm text-muted-foreground hidden truncate @xl:block" }, fp = { class: "text-sm truncate min-w-0 mr-2 text-muted-foreground" }, pp = { class: "hidden @2xl:block" }, mp = { class: "@2xl:hidden" }, gp = /* @__PURE__ */ P({
  __name: "PaginationCustom",
  props: /* @__PURE__ */ Ce({
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
  emits: /* @__PURE__ */ Ce(["update:page"], ["update:itemsPerPage"]),
  setup(e, { emit: t }) {
    const a = e, n = t, o = ce(a, "class"), s = Ne(o, n), r = ve(e, "itemsPerPage"), { t: i } = St();
    return (u, c) => (p(), R("div", null, [
      w(l(zf), j(l(s), { class: "flex items-center gap-4 @xl:gap-8 @4xl:gap-12" }), {
        default: h(({ page: g, pageCount: m }) => [
          e.hideItemsPerPage ? te("", !0) : (p(), R("div", cp, [
            q("span", dp, J(l(i)("dataTable.rowsPerPage")), 1),
            w(Xn, {
              class: "!w-auto",
              options: e.pageSizeOptions.map((f) => ({ value: f, label: `${f}` })),
              "model-value": r.value,
              "onUpdate:modelValue": c[0] || (c[0] = (f) => r.value = f)
            }, null, 8, ["options", "model-value"])
          ])),
          w(l(Gf), null, {
            default: h(() => [
              q("div", fp, [
                q("span", pp, J(l(i)("dataTable.pageOf", { page: g, pageCount: m })), 1),
                q("span", mp, J(g) + " / " + J(m), 1)
              ]),
              w(l(Yf), null, {
                default: h(() => [
                  w(l(hs), { class: "size-4" })
                ]),
                _: 1
              }),
              w(l(Qf), null, {
                default: h(() => [
                  w(l(vs))
                ]),
                _: 1
              }),
              w(l(Jf), { variant: "outline" }, {
                default: h(() => [
                  w(l(Wt))
                ]),
                _: 1
              }),
              w(l(Xf), { variant: "outline" }, {
                default: h(() => [
                  w(l(bs), { class: "size-4" })
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
}), vp = { key: 0 }, hp = { class: "flex gap-2 items-center min-w-0" }, bp = { class: "text-sm mr-2 line-clamp-1 min-w-0 text-muted-foreground" }, yp = { key: 1 }, _p = { class: "text-sm line-clamp-1 text-muted-foreground" }, wp = {
  key: 2,
  class: "flex flex-1 justify-end items-center gap-4"
}, vl = /* @__PURE__ */ P({
  __name: "DataTableFooter",
  props: /* @__PURE__ */ Ce({
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
    const t = ve(e, "page"), a = ve(e, "itemsPerPage"), n = Ht(), { t: o } = St();
    return (s, r) => l(n).hasItems.value ? (p(), R("div", {
      key: 0,
      class: ee(["@container sticky bottom-0 right-0 w-full gap-2 flex items-center bg-background px-0 py-3 z-10 transition-[left] duration-200 ease-linear", { "!px-6": !e.bordered }])
    }, [
      l(n).selectMode === "multiselect" && l(n).selected.value.length > 0 ? (p(), R("div", vp, [
        q("div", hp, [
          q("span", bp, J(l(o)("dataTable.elementsSelected", { count: l(n).selected.value.length, total: l(n).items.length })), 1),
          l(n).selected.value.length > 0 ? L(s.$slots, "bulk", {
            key: 0,
            selected: l(n).selected.value
          }) : te("", !0)
        ])
      ])) : l(n).selected.value.length === 0 && e.total !== void 0 ? (p(), R("div", yp, [
        q("span", _p, J(l(o)("dataTable.totalElements", { total: e.total })), 1)
      ])) : te("", !0),
      e.total !== void 0 ? (p(), R("div", wp, [
        a.value ? (p(), A(gp, {
          key: 0,
          page: t.value,
          "onUpdate:page": r[0] || (r[0] = (i) => t.value = i),
          "items-per-page": a.value,
          "onUpdate:itemsPerPage": r[1] || (r[1] = (i) => a.value = i),
          "page-size-options": e.pageSizeOptions || [],
          "hide-items-per-page": l(n).selected.value.length > 0 || e.pageSizeOptions && e.pageSizeOptions.length < 2,
          total: e.total,
          disabled: l(n).isPending
        }, null, 8, ["page", "items-per-page", "page-size-options", "hide-items-per-page", "total", "disabled"])) : te("", !0)
      ])) : te("", !0)
    ], 2)) : te("", !0);
  }
}), ma = /* @__PURE__ */ P({
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
    const a = e, n = t, o = ce(a, "class"), s = Ne(o, n);
    return (r, i) => (p(), A(l(vr), j(l(s), {
      class: l(G)(
        "grid place-content-center peer h-4.5 w-4.5 shrink-0 rounded-sm border-input border  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        a.class
      )
    }), {
      default: h(() => [
        w(l(hr), { class: "grid place-content-center text-current" }, {
          default: h(() => [
            L(r.$slots, "default", {}, () => [
              w(l(za), {
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
}), hl = /* @__PURE__ */ P({
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
    return (s, r) => (p(), A(l(br), j({ "data-slot": "dropdown-menu" }, l(o)), {
      default: h(() => [
        L(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xp = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, Ep = /* @__PURE__ */ P({
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
    const a = e, n = t, o = ce(a, "class"), s = Ne(o, n);
    return (r, i) => (p(), A(l(yr), j({ "data-slot": "dropdown-menu-checkbox-item" }, l(s), {
      class: l(G)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: h(() => [
        q("span", xp, [
          w(l(_r), null, {
            default: h(() => [
              w(l(za), { class: "size-4" })
            ]),
            _: 1
          })
        ]),
        L(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), bl = /* @__PURE__ */ P({
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
    const a = e, n = t, o = ce(a, "class"), s = Ne(o, n);
    return (r, i) => (p(), A(l(wr), null, {
      default: h(() => [
        w(l(xr), j({ "data-slot": "dropdown-menu-content" }, l(s), {
          class: l(G)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--reka-dropdown-menu-content-available-height) min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", a.class)
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
}), Ta = /* @__PURE__ */ P({
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
    const t = e, a = ce(t, "inset", "variant", "class"), n = Je(a);
    return (o, s) => (p(), A(l(Er), j({
      "data-slot": "dropdown-menu-item",
      "data-inset": e.inset ? "" : void 0,
      "data-variant": e.variant
    }, l(n), {
      class: l(G)("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive-foreground data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/40 data-[variant=destructive]:focus:text-destructive-foreground data-[variant=destructive]:*:[svg]:!text-destructive-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", t.class)
    }), {
      default: h(() => [
        L(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "data-variant", "class"]));
  }
}), kp = /* @__PURE__ */ P({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(e) {
    const t = e, a = ce(t, "class", "inset"), n = Je(a);
    return (o, s) => (p(), A(l(kr), j({
      "data-slot": "dropdown-menu-label",
      "data-inset": e.inset ? "" : void 0
    }, l(n), {
      class: l(G)("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", t.class)
    }), {
      default: h(() => [
        L(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), yl = /* @__PURE__ */ P({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const a = Je(e);
    return (n, o) => (p(), A(l(Cr), j({ "data-slot": "dropdown-menu-trigger" }, l(a)), {
      default: h(() => [
        L(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Cp = /* @__PURE__ */ P({
  __name: "DataTableColumnHeader",
  props: {
    title: {},
    sortable: { type: Boolean, default: !1 },
    sortOrder: {},
    hideable: { type: Boolean, default: !0 }
  },
  emits: ["sort", "hide"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = Ge(), s = V(() => a.sortOrder ? a.sortOrder === "asc" ? lo : so : qr);
    function r(u) {
      n("sort", u);
    }
    function i() {
      n("hide");
    }
    return (u, c) => !e.sortable && !e.hideable ? (p(), R("div", {
      key: 0,
      class: ee(l(G)("flex items-center font-normal text-xs space-x-2"))
    }, [
      q("span", null, J(e.title), 1)
    ], 2)) : (p(), R("div", {
      key: 1,
      class: ee(l(G)("flex items-center space-x-2"))
    }, [
      w(l(hl), null, {
        default: h(() => [
          w(l(yl), { "as-child": "" }, {
            default: h(() => [
              w(l(ze), {
                variant: "ghost",
                size: "sm",
                class: "-ml-3 h-8 data-[state=open]:bg-accent text-muted-foreground text-xs font-normal"
              }, {
                default: h(() => [
                  q("span", null, J(e.title), 1),
                  e.sortable ? (p(), A(Ke(s.value), {
                    key: 0,
                    class: "ml-2 !h-3.5 !w-3.5"
                  })) : te("", !0)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          w(l(bl), { align: "start" }, {
            default: h(() => [
              e.sortable ? (p(), R(pe, { key: 0 }, [
                w(l(Ta), {
                  onClick: c[0] || (c[0] = (g) => r("asc"))
                }, {
                  default: h(() => [
                    w(l(lo), { class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                    de(" " + J(l(o)("datatable.sort.asc", "Asc")), 1)
                  ]),
                  _: 1
                }),
                w(l(Ta), {
                  onClick: c[1] || (c[1] = (g) => r("desc"))
                }, {
                  default: h(() => [
                    w(l(so), { class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                    de(" " + J(l(o)("datatable.sort.desc", "Desc")), 1)
                  ]),
                  _: 1
                }),
                e.sortOrder ? (p(), A(l(Ta), {
                  key: 0,
                  onClick: c[2] || (c[2] = (g) => r(void 0))
                }, {
                  default: h(() => [
                    w(l(Kr), { class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                    de(" " + J(l(o)("datatable.sort.clear", "Clear sort")), 1)
                  ]),
                  _: 1
                })) : te("", !0)
              ], 64)) : te("", !0),
              e.sortable && e.hideable ? (p(), A(l(Kn), { key: 1 })) : te("", !0),
              e.hideable ? (p(), A(l(Ta), {
                key: 2,
                onClick: i
              }, {
                default: h(() => [
                  w(l(Jr), { class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                  de(" " + J(l(o)("datatable.hide", "Hide")), 1)
                ]),
                _: 1
              })) : te("", !0)
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ], 2));
  }
}), Sp = { class: "text-left" }, Op = {
  key: 0,
  class: "!w-6 !pr-0"
}, Tp = {
  key: 1,
  class: "!w-6"
}, Np = { key: 2 }, qn = /* @__PURE__ */ P({
  __name: "DataTableHeader",
  props: {
    visibleColumns: {}
  },
  emits: ["update:visibleColumns"],
  setup(e, { emit: t }) {
    const a = t, n = Ht();
    return (o, s) => {
      const r = Bl("tooltip");
      return p(), R("thead", Sp, [
        q("tr", null, [
          l(n).expandable ? (p(), R("th", Op, [
            ps((p(), A(ze, {
              type: "button",
              size: "sm",
              variant: "ghost",
              class: "h-6 w-6 p-0 -mr-1 [&:not(:hover)]:opacity-0",
              onClick: s[0] || (s[0] = (i) => l(n).toggleExpandAll())
            }, {
              default: h(() => [
                (p(), A(Ke(l(n).allExpandedState.value ? l(ta) : l(Wt))))
              ]),
              _: 1
            })), [
              [r, "Toggle collapse"]
            ])
          ])) : te("", !0),
          l(n).selectMode === "multiselect" ? (p(), R("th", Tp, [
            w(l(ma), {
              "model-value": l(n).allSelectedState.value,
              "onUpdate:modelValue": s[1] || (s[1] = () => l(n).toggleAllSelected())
            }, null, 8, ["model-value"])
          ])) : te("", !0),
          (p(!0), R(pe, null, Ee(l(n).filteredColumns.value, (i) => (p(), R("th", {
            key: i.id
          }, [
            w(Cp, {
              title: i.title ?? l(Ec)(i.id),
              sortable: l(n).sortable && i.sortable,
              "sort-order": l(n).sortBy?.value?.key === i.id ? l(n).sortBy.value.order : void 0,
              hideable: i.hideable ?? !0,
              onSort: (u) => u ? l(n).updateSort(i.id) : l(n).sortBy.value = void 0,
              onHide: () => a("update:visibleColumns", e.visibleColumns?.filter((u) => u !== i.id) || [])
            }, null, 8, ["title", "sortable", "sort-order", "hideable", "onSort", "onHide"])
          ]))), 128)),
          l(n).hasActionsColumn ? (p(), R("th", Np)) : te("", !0)
        ])
      ]);
    };
  }
}), _l = /* @__PURE__ */ P({
  __name: "Spinner",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (p(), A(l(Zr), {
      role: "status",
      "aria-label": "Loading",
      class: ee(l(G)("size-4 animate-spin", t.class))
    }, null, 8, ["class"]));
  }
}), Ap = { class: "absolute inset-0 bg-background/80 z-10 flex items-center justify-center rounded-md" }, Pp = { class: "flex flex-col items-center gap-2" }, $p = { class: "text-sm text-muted-foreground" }, Jn = /* @__PURE__ */ P({
  __name: "DataTableLoadingOverlay",
  setup(e) {
    const { t } = St();
    return (a, n) => (p(), R("div", Ap, [
      q("div", Pp, [
        w(_l, {
          size: 30,
          class: "size-8"
        }),
        q("span", $p, J(l(t)("dataTable.loading") || "Loading..."), 1)
      ])
    ]));
  }
}), Dp = ["data-state", "data-row-id"], Lp = {
  key: 0,
  class: "!w-6 !pr-0"
}, Ip = {
  key: 1,
  class: "!w-6 !pr-0"
}, Mp = ["data-col-id", "tabindex"], Rp = { key: 2 }, Bp = { class: "flex items-center gap-0.5" }, wl = /* @__PURE__ */ P({
  __name: "DataTableRow",
  props: {
    item: {}
  },
  setup(e) {
    const t = e, a = Ht(), n = V(() => a.selectedMap.value[t.item.id]), o = V(() => a.highlightedRow === t.item[a.idcol]), s = V(() => a.expandedMap.value[t.item[a.idcol]]), r = V(() => a.isRowExpandableFn(t.item));
    return (i, u) => (p(), R("tr", {
      "data-state": (n.value || o.value) && "selected",
      "data-row-id": e.item.id
    }, [
      l(a).expandable ? (p(), R("td", Lp, [
        r.value ? (p(), A(ze, {
          key: 0,
          size: "sm",
          variant: "ghost",
          class: "h-6 w-6 p-0 -mr-1",
          onClick: u[0] || (u[0] = (c) => l(a).toggleExpand(e.item[l(a).idcol]))
        }, {
          default: h(() => [
            (p(), A(Ke(s.value ? l(ta) : l(Wt)), { class: "h-4 w-4" }))
          ]),
          _: 1
        })) : te("", !0)
      ])) : te("", !0),
      l(a).selectMode === "multiselect" ? (p(), R("td", Ip, [
        w(l(ma), {
          "model-value": l(a).selected.value.includes(e.item.id),
          "onUpdate:modelValue": u[1] || (u[1] = (c) => l(a).toggleSelected(e.item.id))
        }, null, 8, ["model-value"])
      ])) : te("", !0),
      (p(!0), R(pe, null, Ee(l(a).filteredColumns.value, (c) => (p(), R("td", {
        key: c.id,
        "data-col-id": c.id,
        tabindex: c.onClick ? 0 : -1,
        class: ee(c.cssClass)
      }, [
        L(i.$slots, `cell:${String(c.id)}`, {
          item: e.item,
          value: e.item[c.id],
          expanded: s.value
        }, () => [
          de(J(e.item[c.id]), 1)
        ])
      ], 10, Mp))), 128)),
      l(a).hasActionsColumn ? (p(), R("td", Rp, [
        q("div", Bp, [
          L(i.$slots, "cell:actions", { item: e.item })
        ])
      ])) : te("", !0)
    ], 8, Dp));
  }
}), Fp = /* @__PURE__ */ P({
  __name: "DataTableViewOptions",
  props: {
    columns: {},
    visibleColumns: {}
  },
  emits: ["update:visibleColumns"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = Ge(), s = V(
      () => a.columns.filter((c) => c.title && c.hideable !== !1)
    ), r = V(() => !a.visibleColumns || a.visibleColumns.length === 0 ? a.columns.map((c) => c.id) : a.visibleColumns);
    function i(c) {
      return r.value.includes(c);
    }
    function u(c, g) {
      const m = r.value;
      (typeof g == "boolean" ? g : !1) ? m.includes(c) || n("update:visibleColumns", [...m, c]) : n("update:visibleColumns", m.filter((S) => S !== c));
    }
    return (c, g) => (p(), A(l(hl), null, {
      default: h(() => [
        w(l(yl), { "as-child": "" }, {
          default: h(() => [
            w(l(ze), {
              variant: "outline",
              size: "sm",
              class: "ml-auto h-8"
            }, {
              default: h(() => [
                w(l(ti), { class: "mr-2 h-4 w-4" }),
                de(" " + J(l(o)("datatable.view", "View")), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        w(l(bl), {
          align: "end",
          class: "w-[150px]"
        }, {
          default: h(() => [
            w(l(kp), null, {
              default: h(() => [
                de(J(l(o)("datatable.toggleColumns", "Toggle columns")), 1)
              ]),
              _: 1
            }),
            w(l(Kn)),
            (p(!0), R(pe, null, Ee(s.value, (m) => (p(), A(l(Ep), {
              key: m.id,
              "model-value": i(m.id),
              "onUpdate:modelValue": (f) => u(m.id, f)
            }, {
              default: h(() => [
                de(J(m.title), 1)
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
}), Vp = { class: "flex items-center justify-end py-2" }, Zn = /* @__PURE__ */ P({
  __name: "DataTableToolbar",
  props: {
    visibleColumns: {}
  },
  emits: ["update:visibleColumns"],
  setup(e, { emit: t }) {
    const a = t, n = Ht();
    return (o, s) => (p(), R("div", Vp, [
      L(o.$slots, "default"),
      w(Fp, {
        columns: l(n).columns,
        "visible-columns": e.visibleColumns,
        "onUpdate:visibleColumns": s[0] || (s[0] = (r) => a("update:visibleColumns", r))
      }, null, 8, ["columns", "visible-columns"])
    ]));
  }
}), Up = { class: "flex flex-col flex-1 min-w-0 min-h-0 relative" }, zp = { class: "hover:!bg-transparent" }, Gp = ["colspan"], Ag = /* @__PURE__ */ P({
  __name: "DataTable",
  props: /* @__PURE__ */ Ce({
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
  emits: /* @__PURE__ */ Ce(["clickRow"], ["update:visibleColumns", "update:itemsPerPage", "update:page", "update:sortBy", "update:selected"]),
  setup(e, { expose: t, emit: a }) {
    const n = a, o = ve(e, "visibleColumns"), s = ve(e, "itemsPerPage"), r = ve(e, "page"), i = ve(e, "sortBy"), u = ve(e, "selected"), c = V(() => Ft(e.columns, (Z) => Z.id)), g = V(() => Ft(e.items, (Z) => Z.id)), m = V(() => e.items && e.items.length > 0), f = V(() => o.value ? e.columns.filter((Z) => o.value?.includes(Z.id)) : e.columns), S = V(() => f.value.length + (e.selectMode === "multiselect" ? 1 : 0) + (e.hasActionsColumn ? 1 : 0) + (e.expandable ? 1 : 0));
    Re(s, () => {
      r.value && r.value > 1 && (r.value = 1);
    });
    function M(Z) {
      !i.value || i.value.key !== Z ? i.value = { key: Z, order: "asc" } : i.value.key === Z && (i.value.order === "asc" ? i.value = { key: Z, order: "desc" } : i.value = void 0);
    }
    const k = V(() => e.items), { stateMap: I, toggle: y, toggleAll: _, allToggledState: x, clear: b } = Va(k, "id", e.storagekey, u);
    In(
      u,
      V(() => e.items.map((Z) => Z.id))
    ), Ln(() => (b(), !0), V(() => u.value.length > 0));
    const { stateMap: O, toggle: $, allToggledState: E, toggleAll: B } = Va(k, "id", e.storagekey), Q = (Z) => e.isRowExpandable ? e.isRowExpandable(Z) : !0;
    return Rn({
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
      columnsMap: c,
      itemsMap: g,
      colNum: S,
      hasItems: m,
      selected: u,
      selectedMap: I,
      expandedMap: O,
      sortBy: i,
      toggleSelected: y,
      toggleAllSelected: _,
      allSelectedState: x,
      clearSelected: b,
      toggleExpand: $,
      toggleExpandAll: B,
      allExpandedState: E,
      updateSort: M,
      isRowExpandableFn: Q,
      onClickRow: (Z) => n("clickRow", Z),
      onClickColumn: (Z, le) => {
        const H = c.value[Z], be = g.value[le];
        H && be && H.onClick?.(be);
      }
    }), t({ selected: u, clearSelected: b }), (Z, le) => (p(), R("div", Up, [
      e.showOptions ? (p(), A(Zn, {
        key: 0,
        "visible-columns": o.value,
        "onUpdate:visibleColumns": le[0] || (le[0] = (H) => o.value = H)
      }, {
        default: h(() => [
          L(Z.$slots, "header")
        ]),
        _: 3
      }, 8, ["visible-columns"])) : te("", !0),
      w(Bn, null, {
        default: h(() => [
          e.isPending ? (p(), A(Jn, { key: 0 })) : te("", !0),
          q("div", {
            class: ee(["flex-1 flex flex-col min-h-0", { "!rounded-md border": e.bordered }])
          }, [
            q("table", {
              class: ee(["[&>tbody>tr:hover]:bg-zinc-100/50 dark:[&>tbody>tr:hover]:bg-zinc-900/50 h-1 [&_tr]:border-b [&_th,&_td]:px-2 [&_th,&_td]:py-1 min-h-0 w-full [&_th]:!text-sm [&_tr>*:first-child]:pl-6 [&_tr>*:last-child]:pr-6", { "[&_tbody_tr:last-child]:border-b-0": e.bordered }])
            }, [
              w(qn, {
                "visible-columns": o.value,
                "onUpdate:visibleColumns": le[1] || (le[1] = (H) => o.value = H)
              }, null, 8, ["visible-columns"]),
              w(Mn, null, {
                default: h(() => [
                  m.value ? (p(!0), R(pe, { key: 0 }, Ee(e.items, (H) => (p(), R(pe, {
                    key: H.id
                  }, [
                    w(wl, { item: H }, Ua({ _: 2 }, [
                      Ee(Z.$slots, (be, C) => ({
                        name: C,
                        fn: h((z) => [
                          L(Z.$slots, C, j({ ref_for: !0 }, z))
                        ])
                      }))
                    ]), 1032, ["item"]),
                    e.expandable && l(O)[H[e.idcol]] && Q(H) ? L(Z.$slots, "expanded-row-raw", {
                      key: 0,
                      item: H,
                      colNum: S.value
                    }, () => [
                      q("tr", zp, [
                        q("td", {
                          colspan: S.value,
                          class: "bg-muted/30 p-0 [&_thead>tr:hover]:bg-transparent [&_th]:h-7"
                        }, [
                          L(Z.$slots, "expanded-row", { item: H })
                        ], 8, Gp)
                      ])
                    ]) : te("", !0)
                  ], 64))), 128)) : (p(), A(Yn, { key: 1 }))
                ]),
                _: 3
              })
            ], 2)
          ], 2)
        ]),
        _: 3
      }),
      w(vl, {
        page: r.value,
        "onUpdate:page": le[2] || (le[2] = (H) => r.value = H),
        "items-per-page": s.value,
        "onUpdate:itemsPerPage": le[3] || (le[3] = (H) => s.value = H),
        total: e.total,
        "page-size-options": e.pageSizeOptions,
        bordered: e.bordered
      }, {
        bulk: h((H) => [
          L(Z.$slots, "bulk", Mt(ea(H)))
        ]),
        _: 3
      }, 8, ["page", "items-per-page", "total", "page-size-options", "bordered"])
    ]));
  }
}), xl = /* @__PURE__ */ P({
  __name: "Badge",
  props: {
    variant: {},
    class: {}
  },
  setup(e) {
    const t = jt(
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
    return (n, o) => (p(), R("div", {
      class: ee(l(G)(l(t)({ variant: a.variant }), a.class))
    }, [
      L(n.$slots, "default")
    ], 2));
  }
}), Wp = { class: "flex flex-col flex-1 min-w-0 min-h-0 relative" }, jp = ["data-group-id"], Hp = { class: "!w-6 !pr-0" }, Yp = {
  key: 0,
  class: "!w-6"
}, Kp = ["colspan"], Xp = { class: "flex items-center gap-2" }, qp = { class: "text-sm" }, Pg = /* @__PURE__ */ P({
  __name: "DataTableGrouped",
  props: /* @__PURE__ */ Ce({
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
  emits: /* @__PURE__ */ Ce(["clickRow"], ["update:visibleColumns", "update:itemsPerPage", "update:page", "update:sortBy", "update:selected"]),
  setup(e, { expose: t, emit: a }) {
    const n = a, o = V(() => e.groups.flatMap((C) => C.items)), s = ve(e, "visibleColumns"), r = ve(e, "itemsPerPage"), i = ve(e, "page"), u = ve(e, "sortBy"), c = ve(e, "selected"), g = V(() => Ft(e.columns, (C) => C.id)), m = V(() => Ft(o.value, (C) => C.id)), f = V(() => o.value && o.value.length > 0), S = V(() => e.groups.length > 0), M = V(
      () => s.value ? e.columns.filter((C) => s.value?.includes(C.id)) : e.columns
    ), k = V(
      () => M.value.length + (e.selectMode === "multiselect" ? 1 : 0) + (e.hasActionsColumn ? 1 : 0) + 1
    );
    Re(r, () => {
      i.value && i.value > 1 && (i.value = 1);
    });
    function I(C) {
      !u.value || u.value.key !== C ? u.value = { key: C, order: "asc" } : u.value.key === C && (u.value.order === "asc" ? u.value = { key: C, order: "desc" } : u.value = void 0);
    }
    const y = V(() => o.value), {
      stateMap: _,
      toggle: x,
      toggleAll: b,
      allToggledState: O,
      clear: $
    } = Va(y, "id", e.storagekey, c);
    In(
      c,
      V(() => o.value.map((C) => C.id))
    ), Ln(
      () => ($(), !0),
      V(() => c.value.length > 0)
    ), Re(i, () => $());
    const E = se({});
    function B(C) {
      E.value[C] = E.value[C] === void 0 ? !1 : !E.value[C];
    }
    function Q() {
      const C = e.groups.map((T) => T.key);
      C.every((T) => E.value[T] !== !1) ? C.forEach((T) => {
        E.value[T] = !1;
      }) : C.forEach((T) => {
        E.value[T] = !0;
      });
    }
    const Z = V(() => {
      const C = e.groups.map((T) => T.key), z = C.filter((T) => E.value[T] !== !1).length;
      return z === 0 ? !1 : z === C.length ? !0 : "indeterminate";
    });
    function le(C) {
      return C.every((z) => c.value.includes(z.id));
    }
    function H(C) {
      const z = C.filter((T) => c.value.includes(T.id));
      return z.length > 0 && z.length < C.length;
    }
    function be(C) {
      if (le(C))
        c.value = c.value.filter((T) => !C.some((ge) => ge.id === T));
      else {
        const T = C.map((ge) => ge.id);
        c.value = [.../* @__PURE__ */ new Set([...c.value, ...T])];
      }
    }
    return Rn({
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
      filteredColumns: M,
      columnsMap: g,
      itemsMap: m,
      colNum: k,
      hasItems: f,
      selected: c,
      selectedMap: _,
      expandedMap: V(() => ({})),
      sortBy: u,
      toggleSelected: x,
      toggleAllSelected: b,
      allSelectedState: O,
      clearSelected: $,
      toggleExpand: () => {
      },
      toggleExpandAll: Q,
      allExpandedState: Z,
      updateSort: I,
      isRowExpandableFn: () => !1,
      onClickRow: (C) => n("clickRow", C),
      onClickColumn: (C, z) => {
        const T = g.value[C], ge = m.value[z];
        T && ge && T.onClick?.(ge);
      }
    }), t({ selected: c, clearSelected: $ }), (C, z) => (p(), R("div", Wp, [
      e.showOptions ? (p(), A(Zn, {
        key: 0,
        "visible-columns": s.value,
        "onUpdate:visibleColumns": z[0] || (z[0] = (T) => s.value = T)
      }, {
        default: h(() => [
          L(C.$slots, "header")
        ]),
        _: 3
      }, 8, ["visible-columns"])) : te("", !0),
      w(Bn, null, {
        default: h(() => [
          e.isPending ? (p(), A(Jn, { key: 0 })) : te("", !0),
          q("div", {
            class: ee(["flex-1 flex flex-col min-h-0", { "!rounded-md border": e.bordered }])
          }, [
            q("table", {
              class: ee(["[&>tbody>tr:hover]:bg-zinc-100/50 dark:[&>tbody>tr:hover]:bg-zinc-900/50 h-1 [&_tr]:border-b [&_th,&_td]:px-2 [&_th,&_td]:py-1 min-h-0 w-full [&_th]:!text-sm [&_tr>*:first-child]:pl-6 [&_tr>*:last-child]:pr-6", { "[&_tbody_tr:last-child]:border-b-0": e.bordered }])
            }, [
              w(qn, {
                "visible-columns": s.value,
                "onUpdate:visibleColumns": z[1] || (z[1] = (T) => s.value = T)
              }, null, 8, ["visible-columns"]),
              w(Mn, null, {
                default: h(() => [
                  S.value ? (p(!0), R(pe, { key: 0 }, Ee(e.groups, (T) => (p(), R(pe, {
                    key: T.key
                  }, [
                    q("tr", {
                      class: "",
                      "data-group-id": T.key
                    }, [
                      q("td", Hp, [
                        w(ze, {
                          size: "sm",
                          variant: "ghost",
                          class: "h-6 w-6 p-0",
                          disabled: T.items.length === 0,
                          onClick: (ge) => B(T.key)
                        }, {
                          default: h(() => [
                            (p(), A(Ke(E.value[T.key] ? l(ta) : l(Wt)), { class: "h-4 w-4" }))
                          ]),
                          _: 2
                        }, 1032, ["disabled", "onClick"])
                      ]),
                      e.selectMode === "multiselect" ? (p(), R("td", Yp, [
                        w(l(ma), {
                          "model-value": T.items.length === 0 ? !1 : le(T.items) ? !0 : H(T.items) ? "indeterminate" : !1,
                          disabled: T.items.length === 0,
                          "onUpdate:modelValue": (ge) => be(T.items)
                        }, null, 8, ["model-value", "disabled", "onUpdate:modelValue"])
                      ])) : te("", !0),
                      q("td", {
                        colspan: k.value - 1 - (e.selectMode === "multiselect" ? 1 : 0),
                        class: "font-medium"
                      }, [
                        L(C.$slots, "group-header", {
                          groupKey: T.key,
                          items: T.items,
                          count: T.items.length,
                          isExpanded: E.value[T.key],
                          isSelected: le(T.items)
                        }, () => [
                          q("div", Xp, [
                            q("span", qp, J(T.key || "(No value)"), 1),
                            w(l(xl), {
                              variant: "secondary",
                              class: "ml-2"
                            }, {
                              default: h(() => [
                                de(J(T.items.length), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ])
                        ])
                      ], 8, Kp)
                    ], 8, jp),
                    E.value[T.key] !== !1 ? (p(!0), R(pe, { key: 0 }, Ee(T.items, (ge) => (p(), A(wl, {
                      key: ge.id,
                      item: ge
                    }, Ua({ _: 2 }, [
                      Ee(C.$slots, (W, We) => ({
                        name: We,
                        fn: h((Fe) => [
                          We !== "group-header" ? L(C.$slots, We, j({
                            key: 0,
                            ref_for: !0
                          }, Fe)) : te("", !0)
                        ])
                      }))
                    ]), 1032, ["item"]))), 128)) : te("", !0)
                  ], 64))), 128)) : (p(), A(Yn, { key: 1 }))
                ]),
                _: 3
              })
            ], 2)
          ], 2)
        ]),
        _: 3
      }),
      w(vl, {
        page: i.value,
        "onUpdate:page": z[2] || (z[2] = (T) => i.value = T),
        "items-per-page": r.value,
        "onUpdate:itemsPerPage": z[3] || (z[3] = (T) => r.value = T),
        total: e.total,
        "page-size-options": e.pageSizeOptions,
        bordered: e.bordered
      }, {
        bulk: h((T) => [
          L(C.$slots, "bulk", Mt(ea(T)))
        ]),
        _: 3
      }, 8, ["page", "items-per-page", "total", "page-size-options", "bordered"])
    ]));
  }
}), Jp = ["data-group-id"], Zp = { class: "text-sm font-medium" }, Qp = { key: 0 }, em = ["data-row-id", "data-state"], tm = ["data-col-id", "tabindex"], am = { key: 0 }, nm = { class: "flex items-center gap-0.5" }, ss = 20, om = /* @__PURE__ */ P({
  __name: "DataTableGroupNode",
  props: {
    group: {},
    depth: {},
    treeColumn: {},
    selectMode: {},
    expandedMap: {},
    toggleExpand: { type: Function },
    getAllGroupItems: { type: Function },
    isGroupSelected: { type: Function },
    isGroupPartiallySelected: { type: Function },
    toggleGroupSelection: { type: Function }
  },
  setup(e) {
    const t = e, a = Ht(), n = a.filteredColumns, o = a.selectedMap, s = a.selected, r = a.columnsMap, { hasActionsColumn: i, idcol: u, highlightedRow: c } = a, g = V(() => t.getAllGroupItems(t.group)), m = V(() => t.expandedMap[t.group.key] !== !1), f = V(() => (t.group.children?.length ?? 0) > 0), S = V(() => (t.group.items?.length ?? 0) > 0), M = V(() => !f.value && !S.value), k = V(() => g.value.length === 0 ? !1 : t.isGroupSelected(g.value) ? !0 : t.isGroupPartiallySelected(g.value) ? "indeterminate" : !1);
    function I(y) {
      return o.value[y.id] || c === y[u];
    }
    return (y, _) => {
      const x = Fl("DataTableGroupNode", !0);
      return p(), R(pe, null, [
        q("tr", {
          "data-group-id": e.group.key
        }, [
          (p(!0), R(pe, null, Ee(l(n), (b) => (p(), R("td", {
            key: String(b.id),
            class: ee(b.cssClass)
          }, [
            String(b.id) === e.treeColumn ? (p(), R("div", {
              key: 0,
              class: "flex items-center gap-2",
              style: Da({ paddingLeft: `${e.depth * ss}px` })
            }, [
              w(ze, {
                size: "sm",
                variant: "ghost",
                class: "h-6 w-6 p-0 shrink-0",
                disabled: M.value,
                onClick: _[0] || (_[0] = (O) => e.toggleExpand(e.group.key))
              }, {
                default: h(() => [
                  (p(), A(Ke(m.value ? l(ta) : l(Wt)), { class: "h-4 w-4 text-muted-foreground" }))
                ]),
                _: 1
              }, 8, ["disabled"]),
              e.selectMode === "multiselect" ? (p(), A(l(ma), {
                key: 0,
                class: "shrink-0",
                "model-value": k.value,
                disabled: g.value.length === 0,
                "onUpdate:modelValue": _[1] || (_[1] = (O) => e.toggleGroupSelection(g.value))
              }, null, 8, ["model-value", "disabled"])) : te("", !0),
              L(y.$slots, `cell-group:${String(b.id)}`, {
                group: e.group,
                items: g.value
              }, () => [
                q("span", Zp, J((e.group.label ?? e.group.key) || "(No value)"), 1),
                w(l(xl), {
                  variant: "secondary",
                  class: "ml-1 shrink-0"
                }, {
                  default: h(() => [
                    de(J(g.value.length), 1)
                  ]),
                  _: 1
                })
              ])
            ], 4)) : L(y.$slots, `cell-group:${String(b.id)}`, {
              key: 1,
              group: e.group,
              items: g.value
            })
          ], 2))), 128)),
          l(i) ? (p(), R("td", Qp)) : te("", !0)
        ], 8, Jp),
        m.value ? (p(), R(pe, { key: 0 }, [
          (p(!0), R(pe, null, Ee(e.group.children, (b) => (p(), A(x, {
            key: b.key,
            group: b,
            depth: e.depth + 1,
            "tree-column": e.treeColumn,
            "select-mode": e.selectMode,
            "expanded-map": e.expandedMap,
            "toggle-expand": e.toggleExpand,
            "get-all-group-items": e.getAllGroupItems,
            "is-group-selected": e.isGroupSelected,
            "is-group-partially-selected": e.isGroupPartiallySelected,
            "toggle-group-selection": e.toggleGroupSelection
          }, Ua({ _: 2 }, [
            Ee(y.$slots, (O, $) => ({
              name: $,
              fn: h((E) => [
                L(y.$slots, $, j({ ref_for: !0 }, E))
              ])
            }))
          ]), 1032, ["group", "depth", "tree-column", "select-mode", "expanded-map", "toggle-expand", "get-all-group-items", "is-group-selected", "is-group-partially-selected", "toggle-group-selection"]))), 128)),
          (p(!0), R(pe, null, Ee(e.group.items, (b) => (p(), R("tr", {
            key: b.id,
            "data-row-id": b.id,
            "data-state": I(b) && "selected"
          }, [
            (p(!0), R(pe, null, Ee(l(n), (O) => (p(), R("td", {
              key: String(O.id),
              "data-col-id": String(O.id),
              tabindex: l(r)[String(O.id)]?.onClick ? 0 : -1,
              class: ee(O.cssClass)
            }, [
              String(O.id) === e.treeColumn ? (p(), R("div", {
                key: 0,
                class: "flex items-center gap-2",
                style: Da({ paddingLeft: `${(e.depth + 1) * ss}px` })
              }, [
                _[2] || (_[2] = q("span", { class: "w-6 h-6 shrink-0" }, null, -1)),
                e.selectMode === "multiselect" ? (p(), A(l(ma), {
                  key: 0,
                  class: "shrink-0",
                  "model-value": l(s).includes(b.id),
                  "onUpdate:modelValue": ($) => l(a).toggleSelected(b.id)
                }, null, 8, ["model-value", "onUpdate:modelValue"])) : te("", !0),
                L(y.$slots, `cell:${String(O.id)}`, {
                  item: b,
                  value: b[O.id]
                }, () => [
                  de(J(b[O.id]), 1)
                ])
              ], 4)) : L(y.$slots, `cell:${String(O.id)}`, {
                key: 1,
                item: b,
                value: b[O.id]
              }, () => [
                de(J(b[O.id]), 1)
              ])
            ], 10, tm))), 128)),
            l(i) ? (p(), R("td", am, [
              q("div", nm, [
                L(y.$slots, "cell:actions", { item: b })
              ])
            ])) : te("", !0)
          ], 8, em))), 128))
        ], 64)) : te("", !0)
      ], 64);
    };
  }
}), sm = { class: "flex flex-col flex-1 min-w-0 min-h-0 relative" }, $g = /* @__PURE__ */ P({
  __name: "DataTableTree",
  props: /* @__PURE__ */ Ce({
    groups: {},
    treeColumn: {},
    columns: {},
    selectMode: {},
    storagekey: {},
    hasActionsColumn: { type: Boolean, default: !0 },
    idcol: { default: "id" },
    isPending: { type: Boolean },
    showOptions: { type: Boolean, default: !0 },
    sortable: { type: Boolean, default: !0 },
    bordered: { type: Boolean, default: !0 },
    translatableConfig: {},
    highlightedRow: {}
  }, {
    visibleColumns: {},
    visibleColumnsModifiers: {},
    sortBy: {},
    sortByModifiers: {},
    selected: { default: () => [] },
    selectedModifiers: {}
  }),
  emits: /* @__PURE__ */ Ce(["clickRow"], ["update:visibleColumns", "update:sortBy", "update:selected"]),
  setup(e, { expose: t, emit: a }) {
    const n = a;
    function o(C) {
      return [...C.items ?? [], ...(C.children ?? []).flatMap(o)];
    }
    function s(C) {
      return C.flatMap((z) => [z.key, ...s(z.children ?? [])]);
    }
    const r = V(() => e.groups.flatMap((C) => o(C))), i = ve(e, "visibleColumns"), u = ve(e, "sortBy"), c = ve(e, "selected"), g = V(() => Ft(e.columns, (C) => C.id)), m = V(() => Ft(r.value, (C) => C.id)), f = V(() => r.value.length > 0), S = V(() => e.groups.length > 0), M = V(
      () => i.value ? e.columns.filter((C) => i.value?.includes(C.id)) : e.columns
    ), k = V(() => M.value.length + (e.hasActionsColumn ? 1 : 0));
    function I(C) {
      !u.value || u.value.key !== C ? u.value = { key: C, order: "asc" } : u.value.key === C && (u.value.order === "asc" ? u.value = { key: C, order: "desc" } : u.value = void 0);
    }
    const y = V(() => r.value), {
      stateMap: _,
      toggle: x,
      toggleAll: b,
      allToggledState: O,
      clear: $
    } = Va(y, "id", e.storagekey, c);
    In(
      c,
      V(() => r.value.map((C) => C.id))
    ), Ln(
      () => ($(), !0),
      V(() => c.value.length > 0)
    );
    const E = se({});
    function B(C) {
      E.value[C] = E.value[C] === void 0 ? !1 : !E.value[C];
    }
    function Q() {
      const C = s(e.groups), z = C.every((T) => E.value[T] !== !1);
      C.forEach((T) => E.value[T] = !z);
    }
    const Z = V(() => {
      const C = s(e.groups), z = C.filter((T) => E.value[T] !== !1).length;
      return z === 0 ? !1 : z === C.length ? !0 : "indeterminate";
    });
    function le(C) {
      return C.length > 0 && C.every((z) => c.value.includes(z.id));
    }
    function H(C) {
      const z = C.filter((T) => c.value.includes(T.id)).length;
      return z > 0 && z < C.length;
    }
    function be(C) {
      le(C) ? c.value = c.value.filter((z) => !C.some((T) => T.id === z)) : c.value = [.../* @__PURE__ */ new Set([...c.value, ...C.map((z) => z.id)])];
    }
    return Rn({
      items: r.value,
      columns: e.columns,
      selectMode: void 0,
      hasActionsColumn: e.hasActionsColumn,
      idcol: e.idcol,
      expandable: !1,
      isRowExpandable: () => !1,
      sortable: e.sortable,
      bordered: e.bordered,
      highlightedRow: e.highlightedRow,
      isPending: e.isPending,
      filteredColumns: M,
      columnsMap: g,
      itemsMap: m,
      colNum: k,
      hasItems: f,
      selected: c,
      selectedMap: _,
      expandedMap: V(() => ({})),
      sortBy: u,
      toggleSelected: x,
      toggleAllSelected: b,
      allSelectedState: O,
      clearSelected: $,
      toggleExpand: () => {
      },
      toggleExpandAll: Q,
      allExpandedState: Z,
      updateSort: I,
      isRowExpandableFn: () => !1,
      onClickRow: (C) => n("clickRow", C),
      onClickColumn: (C, z) => {
        const T = g.value[C], ge = m.value[z];
        T && ge && T.onClick?.(ge);
      }
    }), t({ selected: c, clearSelected: $ }), (C, z) => (p(), R("div", sm, [
      e.showOptions ? (p(), A(Zn, {
        key: 0,
        "visible-columns": i.value,
        "onUpdate:visibleColumns": z[0] || (z[0] = (T) => i.value = T)
      }, {
        default: h(() => [
          L(C.$slots, "header")
        ]),
        _: 3
      }, 8, ["visible-columns"])) : te("", !0),
      w(Bn, null, {
        default: h(() => [
          e.isPending ? (p(), A(Jn, { key: 0 })) : te("", !0),
          q("div", {
            class: ee(["flex-1 flex flex-col min-h-0", { "!rounded-md border": e.bordered }])
          }, [
            q("table", {
              class: ee(["[&>tbody>tr:hover]:bg-zinc-100/50 dark:[&>tbody>tr:hover]:bg-zinc-900/50 h-1 [&_tr]:border-b [&_th,&_td]:px-2 [&_th,&_td]:py-1 min-h-0 w-full [&_th]:!text-sm [&_tr>*:first-child]:pl-6 [&_tr>*:last-child]:pr-6", { "[&_tbody_tr:last-child]:border-b-0": e.bordered }])
            }, [
              w(qn, {
                "visible-columns": i.value,
                "onUpdate:visibleColumns": z[1] || (z[1] = (T) => i.value = T)
              }, null, 8, ["visible-columns"]),
              w(Mn, null, {
                default: h(() => [
                  S.value ? (p(!0), R(pe, { key: 0 }, Ee(e.groups, (T) => (p(), A(om, {
                    key: T.key,
                    group: T,
                    depth: 0,
                    "tree-column": e.treeColumn,
                    "select-mode": e.selectMode,
                    "expanded-map": E.value,
                    "toggle-expand": B,
                    "get-all-group-items": o,
                    "is-group-selected": le,
                    "is-group-partially-selected": H,
                    "toggle-group-selection": be
                  }, Ua({ _: 2 }, [
                    Ee(C.$slots, (ge, W) => ({
                      name: W,
                      fn: h((We) => [
                        L(C.$slots, W, j({ ref_for: !0 }, We))
                      ])
                    }))
                  ]), 1032, ["group", "tree-column", "select-mode", "expanded-map"]))), 128)) : (p(), A(Yn, { key: 1 }))
                ]),
                _: 3
              })
            ], 2)
          ], 2)
        ]),
        _: 3
      })
    ]));
  }
});
function Va(e, t, a, n) {
  const o = n || (a ? Uu(a, []) : se([])), s = V(() => Object.fromEntries(o.value.map((m) => [m, !0]))), r = (m) => o.value = wc(o.value, m), i = V(
    () => o.value.length > 0 ? o.value?.length === e.value.length ? !0 : "indeterminate" : !1
  );
  function u() {
    o.value = [];
  }
  function c() {
    o.value = e.value.map((m) => m[t]);
  }
  return {
    state: o,
    stateMap: s,
    toggle: r,
    allToggledState: i,
    toggleAll: () => i.value === !1 || i.value === "indeterminate" ? c() : u(),
    clear: u
  };
}
const lm = ["datetime", "title"], Dg = /* @__PURE__ */ P({
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
    function n(u, c) {
      let g = a[u] || u;
      return c && Object.entries(c).forEach(([m, f]) => {
        g = g.replace(`{${m}}`, String(f));
      }), g;
    }
    const o = V(() => t.date instanceof Date ? t.date : typeof t.date == "string" || typeof t.date == "number" ? new Date(t.date) : /* @__PURE__ */ new Date()), s = /* @__PURE__ */ ku(o, t.format, {
      locales: t.locale
    }), r = V(() => {
      if (!t.relative)
        return null;
      const c = (/* @__PURE__ */ new Date()).getTime() - o.value.getTime(), g = Math.floor(c / 1e3), m = Math.floor(g / 60), f = Math.floor(m / 60), S = Math.floor(f / 24);
      return S > 0 ? n("date.daysAgo", { count: S }) : f > 0 ? n("date.hoursAgo", { count: f }) : m > 0 ? n("date.minutesAgo", { count: m }) : n("date.justNow");
    }), i = V(() => t.relative ? r.value : s.value);
    return (u, c) => (p(), R("time", {
      datetime: o.value.toISOString(),
      title: t.relative ? l(s) : void 0,
      class: "whitespace-nowrap"
    }, J(i.value), 9, lm));
  }
}), rm = { class: "min-w-0 line-clamp-1 break-spaces text-left whitespace-normal space-x-1" }, im = { class: "text-muted-foreground" }, um = { class: "font-semibold" }, cm = {
  key: 1,
  class: "text-muted-foreground"
}, ls = /* @__PURE__ */ P({
  __name: "DisplayGraduated",
  props: {
    value: {}
  },
  setup(e) {
    const t = Ge();
    return (a, n) => (p(), R("div", rm, [
      e.value?.length ? (p(!0), R(pe, { key: 0 }, Ee(e.value, (o, s) => (p(), R("span", {
        key: s,
        class: "bg-muted text-xs px-1 py-0.5 rounded"
      }, [
        q("span", im, " ≥" + J(`${o.from}:`), 1),
        n[0] || (n[0] = de()),
        q("span", um, J(o.value), 1)
      ]))), 128)) : (p(), R("span", cm, J(l(t)("common.novalue", "No value")), 1))
    ]));
  }
}), zt = yt([]), El = V(() => Ft(zt.value, (e) => e.key)), Qn = se({});
function kl(e) {
  const t = zt.value.findIndex((a) => a.key === e);
  t !== -1 && zt.value.splice(t, 1), Vs.remove(e);
}
const Cl = (e) => {
  Qn.value[e] = !1, El.value[e]?.onClose?.(), setTimeout(() => kl(e), 600);
}, dm = (e) => (e.key = e.key ?? `${Math.random()}`, zt.value.push(e), _n(zt), Qn.value[e.key] = !0, Vs.add(() => (Cl(e.key), !0), e.key), e.key), fm = (e, t) => {
  const a = El.value[e];
  a && (Object.assign(a, t), _n(zt));
}, pm = { close: Cl, visible: Qn, open: dm, update: fm, instances: zt, removeInstance: kl }, Sl = () => pm, Lg = /* @__PURE__ */ P({
  __name: "DynamicComponentProvider",
  setup(e) {
    const { close: t, visible: a, instances: n } = Sl();
    return (o, s) => (p(!0), R(pe, null, Ee(l(n), (r) => (p(), A(Ke(r.component), j({
      key: r.key,
      open: l(a)[r.key]
    }, { ref_for: !0 }, r.componentProps || {}, {
      "onUpdate:open": (i) => !i && l(t)(r.key)
    }), null, 16, ["open", "onUpdate:open"]))), 128));
  }
}), mm = { class: "text-muted-foreground py-4 flex gap-2 items-center text-sm" }, gm = /* @__PURE__ */ P({
  __name: "EmptyMini",
  setup(e) {
    const t = Ge();
    return (a, n) => (p(), R("div", mm, [
      w(l(ys), { size: 16 }),
      q("span", null, [
        L(a.$slots, "default", {}, () => [
          de(J(l(t)("common.noValues", "No values")), 1)
        ])
      ])
    ]));
  }
}), vm = { class: "flex-1" }, hm = { class: "flex gap-1 items-center" }, bm = {
  key: 0,
  class: "flex-1"
}, ym = {
  key: 1,
  class: "text-muted-foreground text-sm px-2"
}, _m = /* @__PURE__ */ P({
  inheritAttrs: !1,
  __name: "SelectListOptions",
  props: /* @__PURE__ */ Ce({
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
  emits: /* @__PURE__ */ Ce(["onAddItem"], ["update:modelValue"]),
  setup(e) {
    const t = e, a = ve(e, "modelValue"), n = Ge(), o = se(""), { startsWith: s } = Sr({ sensitivity: "base" }), r = V(() => we(t.options).filter((g) => s(g.label, o.value))), i = V(() => !!we(t.options).length), u = V(() => t.placeholder ?? n("input.filter.placeholder", "Filter..")), c = V(() => t.addItemButtonLabel ?? n("common.addItem", "Add Item"));
    return (g, m) => (p(), R(pe, null, [
      w(l(Or), {
        modelValue: a.value,
        "onUpdate:modelValue": m[1] || (m[1] = (f) => a.value = f),
        multiple: e.multiple,
        disabled: t.disabled
      }, {
        default: h(() => [
          w(l(Tr), {
            modelValue: o.value,
            "onUpdate:modelValue": m[0] || (m[0] = (f) => o.value = f),
            autofocus: "",
            disabled: !i.value || t.disabled,
            placeholder: u.value,
            class: ee(l(G)(
              "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
              "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
            ))
          }, null, 8, ["modelValue", "disabled", "placeholder", "class"]),
          r.value.length ? te("", !0) : (p(), A(gm, { key: 0 })),
          w(l(Nr), { class: "max-h-[400px] overflow-auto py-1" }, {
            default: h(() => [
              (p(!0), R(pe, null, Ee(r.value, (f) => (p(), A(l(Ar), {
                key: String(f.value),
                value: f.value,
                disabled: t.disabled,
                class: "focus:bg-accent focus:text-accent-foreground data-[highlighted]:bg-accent [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2"
              }, {
                default: h(() => [
                  q("div", vm, [
                    L(g.$slots, "option", { option: f }, () => [
                      de(J(f.label), 1)
                    ])
                  ]),
                  w(l(Pr), null, {
                    default: h(() => [
                      w(l(za), { size: 12 })
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
      q("div", hm, [
        t.showAddItemButton ? (p(), R("div", bm, [
          w(ze, {
            size: "sm",
            class: "sticky bottom-0",
            variant: "ghost",
            type: "button",
            disabled: t.disabled,
            onClick: m[2] || (m[2] = (f) => g.$emit("onAddItem"))
          }, {
            default: h(() => [
              w(l(Tn)),
              de(" " + J(c.value), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ])) : te("", !0),
        i.value && t.multiple ? (p(), R("div", ym, J(l(n)("common.elementCountSelected", "{count} selected").replace("{count}", String(a.value.length))), 1)) : te("", !0)
      ])
    ], 64));
  }
}), wm = /* @__PURE__ */ P({
  __name: "AlertDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = Ne(e, t);
    return (s, r) => (p(), A(l($r), j({ "data-slot": "alert-dialog" }, l(o)), {
      default: h(() => [
        L(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xm = /* @__PURE__ */ P({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ce(t, "class");
    return (n, o) => (p(), A(l(Dr), j(l(a), {
      class: l(G)(l(Et)(), t.class)
    }), {
      default: h(() => [
        L(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Em = /* @__PURE__ */ P({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ce(t, "class");
    return (n, o) => (p(), A(l(Lr), j(l(a), {
      class: l(G)(
        l(Et)({ variant: "outline" }),
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
}), km = /* @__PURE__ */ P({
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
    const a = e, n = t, o = ce(a, "class"), s = Ne(o, n);
    return (r, i) => (p(), A(l(Ir), null, {
      default: h(() => [
        w(l(Mr), {
          "data-slot": "alert-dialog-overlay",
          class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80"
        }),
        w(l(Rr), j({ "data-slot": "alert-dialog-content" }, l(s), {
          class: l(G)(
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
}), Cm = /* @__PURE__ */ P({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ce(t, "class");
    return (n, o) => (p(), A(l(Br), j({ "data-slot": "alert-dialog-description" }, l(a), {
      class: l(G)("text-muted-foreground text-sm", t.class)
    }), {
      default: h(() => [
        L(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Sm = /* @__PURE__ */ P({
  __name: "AlertDialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (p(), R("div", {
      "data-slot": "alert-dialog-footer",
      class: ee(
        l(G)(
          "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
          t.class
        )
      )
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), Om = /* @__PURE__ */ P({
  __name: "AlertDialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (p(), R("div", {
      "data-slot": "alert-dialog-header",
      class: ee(l(G)("flex flex-col gap-2 text-center sm:text-left", t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), Tm = /* @__PURE__ */ P({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ce(t, "class");
    return (n, o) => (p(), A(l(Fr), j({ "data-slot": "alert-dialog-title" }, l(a), {
      class: l(G)("text-lg font-semibold", t.class)
    }), {
      default: h(() => [
        L(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Nm = /* @__PURE__ */ P({
  __name: "DynamicAlertDialog",
  props: /* @__PURE__ */ Ce({
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
      const u = t.onOk ? await t.onOk().catch((c) => c) : void 0;
      u === !0 || u === void 0 ? close() : to(u) && (o.value = u), n.value = !1;
    }
    function r() {
      a.value = !1;
    }
    const { t: i } = St();
    return (u, c) => (p(), A(l(wm), {
      open: a.value,
      "onUpdate:open": c[2] || (c[2] = (g) => a.value = g)
    }, {
      default: h(() => [
        w(l(km), null, {
          default: h(() => [
            w(l(Om), null, {
              default: h(() => [
                w(l(Tm), null, {
                  default: h(() => [
                    de(J(e.title || l(i)("dialog.alert.defaultTitle")), 1)
                  ]),
                  _: 1
                }),
                w(l(Cm), null, {
                  default: h(() => [
                    de(J(e.description || l(i)("dialog.alert.defaultDescription")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            w(l(Sm), null, {
              default: h(() => [
                w(l(Em), {
                  disabled: n.value,
                  onClick: c[0] || (c[0] = (g) => r())
                }, {
                  default: h(() => [
                    de(J(l(i)("common.cancel")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                w(l(xm), {
                  loading: n.value,
                  onClick: c[1] || (c[1] = (g) => s())
                }, {
                  default: h(() => [
                    de(J(l(i)("common.continue")), 1)
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
}), Am = /* @__PURE__ */ P({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = Ne(e, t);
    return (s, r) => (p(), A(l(wn), j({ "data-slot": "dialog" }, l(o)), {
      default: h((i) => [
        L(s.$slots, "default", Mt(ea(i)))
      ]),
      _: 3
    }, 16));
  }
}), Pm = /* @__PURE__ */ P({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ce(t, "class"), n = Je(a);
    return (o, s) => (p(), A(l(Cn), j({ "data-slot": "dialog-description" }, l(n), {
      class: l(G)("text-muted-foreground text-sm", t.class)
    }), {
      default: h(() => [
        L(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), $m = /* @__PURE__ */ P({
  __name: "DialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (p(), R("div", {
      "data-slot": "dialog-header",
      class: ee(l(G)("flex flex-col gap-2 text-center sm:text-left", t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), Dm = /* @__PURE__ */ P({
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
    const a = e, n = t, o = ce(a, "class"), s = Ne(o, n);
    return (r, i) => (p(), A(l(En), null, {
      default: h(() => [
        w(l(xn), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: h(() => [
            w(l(kn), j({
              class: l(G)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                a.class
              )
            }, { ...r.$attrs, ...l(s) }, {
              onPointerDownOutside: i[0] || (i[0] = (u) => {
                const c = u.detail.originalEvent, g = c.target;
                (c.offsetX > g.clientWidth || c.offsetY > g.clientHeight) && u.preventDefault();
              })
            }), {
              default: h(() => [
                L(r.$slots, "default"),
                w(l(gs), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                  default: h(() => [
                    w(l(ba), { class: "w-4 h-4" }),
                    i[1] || (i[1] = q("span", { class: "sr-only" }, "Close", -1))
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
}), Lm = /* @__PURE__ */ P({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ce(t, "class"), n = Je(a);
    return (o, s) => (p(), A(l(Sn), j({ "data-slot": "dialog-title" }, l(n), {
      class: l(G)("text-lg leading-none font-semibold", t.class)
    }), {
      default: h(() => [
        L(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Im = ["innerHTML"], Ol = /* @__PURE__ */ P({
  __name: "DynamicDialog",
  props: /* @__PURE__ */ Ce({
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
    return (a, n) => (p(), A(l(Am), {
      open: t.value,
      "onUpdate:open": n[0] || (n[0] = (o) => t.value = o)
    }, {
      default: h(() => [
        w(l(Dm), { class: "!max-w-max min-w-[435px]" }, {
          default: h(() => [
            w(l($m), null, {
              default: h(() => [
                w(l(Lm), null, {
                  default: h(() => [
                    q("div", {
                      class: "[&>em]:font-normal [&>em]:!not-italic line-clamp-1",
                      innerHTML: e.title
                    }, null, 8, Im)
                  ]),
                  _: 1
                }),
                e.description ? (p(), A(l(Pm), { key: 0 }, {
                  default: h(() => [
                    de(J(e.description), 1)
                  ]),
                  _: 1
                })) : te("", !0)
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
const Mm = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Rm = (e) => typeof e < "u";
function Bm(e) {
  return JSON.parse(JSON.stringify(e));
}
function rs(e, t, a, n = {}) {
  var o, s, r;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: c,
    deep: g = !1,
    defaultValue: m,
    shouldEmit: f
  } = n, S = Qt(), M = a || S?.emit || ((o = S?.$emit) == null ? void 0 : o.bind(S)) || ((r = (s = S?.proxy) == null ? void 0 : s.$emit) == null ? void 0 : r.bind(S?.proxy));
  let k = c;
  t || (t = "modelValue"), k = k || `update:${t.toString()}`;
  const I = (x) => i ? typeof i == "function" ? i(x) : Bm(x) : x, y = () => Rm(e[t]) ? I(e[t]) : m, _ = (x) => {
    f ? f(x) && M(k, x) : M(k, x);
  };
  if (u) {
    const x = y(), b = se(x);
    let O = !1;
    return Re(
      () => e[t],
      ($) => {
        O || (O = !0, b.value = I($), va(() => O = !1));
      }
    ), Re(
      b,
      ($) => {
        !O && ($ !== e[t] || g) && _($);
      },
      { deep: g }
    ), b;
  } else
    return V({
      get() {
        return y();
      },
      set(x) {
        _(x);
      }
    });
}
const [eo, Fm] = On("DrawerRoot"), Tl = /* @__PURE__ */ new WeakMap();
function Le(e, t, a = !1) {
  if (!e || !(e instanceof HTMLElement) || !t)
    return;
  const n = {};
  Object.entries(t).forEach(([o, s]) => {
    if (o.startsWith("--")) {
      e.style.setProperty(o, s);
      return;
    }
    n[o] = e.style[o], e.style[o] = s;
  }), !a && Tl.set(e, n);
}
function Vm(e, t) {
  if (!e || !(e instanceof HTMLElement))
    return;
  const a = Tl.get(e);
  a && Object.entries(a).forEach(([n, o]) => {
    e.style[n] = o;
  });
}
function Na(e, t) {
  const a = window.getComputedStyle(e), n = a.transform || a.webkitTransform || a.mozTransform;
  let o = n.match(/^matrix3d\((.+)\)$/);
  return o ? Number.parseFloat(o[1].split(", ")[Ae(t) ? 13 : 12]) : (o = n.match(/^matrix\((.+)\)$/), o ? Number.parseFloat(o[1].split(", ")[Ae(t) ? 5 : 4]) : null);
}
function Um(e) {
  return 8 * (Math.log(e + 1) - 2);
}
function Ae(e) {
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
function nn(e, t) {
  if (!e)
    return () => {
    };
  const a = e.style.cssText;
  return Object.assign(e.style, t), () => {
    e.style.cssText = a;
  };
}
function zm(...e) {
  return (...t) => {
    for (const a of e)
      typeof a == "function" && a(...t);
  };
}
const ke = {
  DURATION: 0.5,
  EASE: [0.32, 0.72, 0, 1]
}, Nl = 0.4, Gm = 0.25, Wm = 100, Al = 8, Aa = 16, Pl = 26, is = "vaul-dragging";
function jm({
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
  function u() {
    i.value = {
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight
    };
  }
  Gt(() => {
    typeof window < "u" && window.addEventListener("resize", u);
  }), Ul(() => {
    typeof window < "u" && window.removeEventListener("resize", u);
  });
  const c = V(
    () => (t.value && e.value === t.value[t.value.length - 1]) ?? null
  ), g = V(
    () => t.value && t.value.length > 0 && (o?.value || o?.value === 0) && !Number.isNaN(o?.value) && t.value[o?.value ?? -1] === e.value || !t.value
  ), m = V(
    () => {
      var _;
      return ((_ = t.value) == null ? void 0 : _.findIndex((x) => x === e.value)) ?? null;
    }
  ), f = V(
    () => {
      var _;
      return ((_ = t.value) == null ? void 0 : _.map((x) => {
        const b = typeof x == "string";
        let O = 0;
        if (b && (O = Number.parseInt(x, 10)), Ae(r.value)) {
          const E = b ? O : i.value ? x * i.value.innerHeight : 0;
          return i.value ? r.value === "bottom" ? i.value.innerHeight - E : -i.value.innerHeight + E : E;
        }
        const $ = b ? O : i.value ? x * i.value.innerWidth : 0;
        return i.value ? r.value === "right" ? i.value.innerWidth - $ : -i.value.innerWidth + $ : $;
      })) ?? [];
    }
  ), S = V(
    () => {
      var _;
      return m.value !== null ? (_ = f.value) == null ? void 0 : _[m.value] : null;
    }
  ), M = (_) => {
    var x, b, O, $;
    const E = ((x = f.value) == null ? void 0 : x.findIndex((B) => B === _)) ?? null;
    va(() => {
      var B;
      s(E, f.value), Le((B = a.value) == null ? void 0 : B.$el, {
        transition: `transform ${ke.DURATION}s cubic-bezier(${ke.EASE.join(",")})`,
        transform: Ae(r.value) ? `translate3d(0, ${_}px, 0)` : `translate3d(${_}px, 0, 0)`
      });
    }), f.value && E !== f.value.length - 1 && E !== o?.value ? Le((b = n.value) == null ? void 0 : b.$el, {
      transition: `opacity ${ke.DURATION}s cubic-bezier(${ke.EASE.join(",")})`,
      opacity: "0"
    }) : Le((O = n.value) == null ? void 0 : O.$el, {
      transition: `opacity ${ke.DURATION}s cubic-bezier(${ke.EASE.join(",")})`,
      opacity: "1"
    }), e.value = E !== null ? (($ = t.value) == null ? void 0 : $[E]) ?? null : null;
  };
  Re(
    [e, f, t],
    () => {
      var _;
      if (e.value) {
        const x = ((_ = t.value) == null ? void 0 : _.findIndex((b) => b === e.value)) ?? -1;
        f.value && x !== -1 && typeof f.value[x] == "number" && M(f.value[x]);
      }
    },
    {
      immediate: !0
      // if you want to run the effect immediately as well
    }
  );
  function k({
    draggedDistance: _,
    closeDrawer: x,
    velocity: b,
    dismissible: O
  }) {
    var $, E, B;
    if (o.value === void 0)
      return;
    const Q = r.value === "bottom" || r.value === "right" ? (S.value ?? 0) - _ : (S.value ?? 0) + _, Z = m.value === o.value - 1, le = m.value === 0, H = _ > 0;
    if (Z && Le(($ = n.value) == null ? void 0 : $.$el, {
      transition: `opacity ${ke.DURATION}s cubic-bezier(${ke.EASE.join(",")})`
    }), b > 2 && !H) {
      O ? x() : M(f.value[0]);
      return;
    }
    if (b > 2 && H && f && t.value) {
      M(f.value[t.value.length - 1]);
      return;
    }
    const be = (E = f.value) == null ? void 0 : E.reduce((z, T) => typeof z != "number" || typeof T != "number" ? z : Math.abs(T - Q) < Math.abs(z - Q) ? T : z), C = Ae(r.value) ? window.innerHeight : window.innerWidth;
    if (b > Nl && Math.abs(_) < C * 0.4) {
      const z = H ? 1 : -1;
      if (z > 0 && c) {
        M(f.value[(((B = t.value) == null ? void 0 : B.length) ?? 0) - 1]);
        return;
      }
      if (le && z < 0 && O && x(), m.value === null)
        return;
      M(f.value[m.value + z]);
      return;
    }
    M(be);
  }
  function I({ draggedDistance: _ }) {
    var x;
    if (S.value === null)
      return;
    const b = r.value === "bottom" || r.value === "right" ? S.value - _ : S.value + _;
    (r.value === "bottom" || r.value === "right") && b < f.value[f.value.length - 1] || (r.value === "top" || r.value === "left") && b > f.value[f.value.length - 1] || Le((x = a.value) == null ? void 0 : x.$el, {
      transform: Ae(r.value) ? `translate3d(0, ${b}px, 0)` : `translate3d(${b}px, 0, 0)`
    });
  }
  function y(_, x) {
    if (!t.value || typeof m.value != "number" || !f.value || o.value === void 0)
      return null;
    const b = m.value === o.value - 1;
    if (m.value >= o.value && x)
      return 0;
    if (b && !x)
      return 1;
    if (!g.value && !b)
      return null;
    const O = b ? m.value + 1 : m.value - 1, $ = b ? f.value[O] - f.value[O - 1] : f.value[O + 1] - f.value[O], E = _ / Math.abs($);
    return b ? 1 - E : E;
  }
  return {
    isLastSnapPoint: c,
    shouldFade: g,
    getPercentageDragged: y,
    activeSnapPointIndex: m,
    onRelease: k,
    onDrag: I,
    snapPointsOffset: f
  };
}
function us() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
let ua = null;
function Hm(e) {
  const { isOpen: t, modal: a, nested: n, hasBeenOpened: o, preventScrollRestoration: s, noBodyStyles: r } = e, i = se(typeof window < "u" ? window.location.href : ""), u = se(0);
  function c() {
    if (us() && ua === null && t.value && !r.value) {
      ua = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left,
        height: document.body.style.height
      };
      const { scrollX: m, innerHeight: f } = window;
      document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, {
        top: `${-u.value}px`,
        left: `${-m}px`,
        right: "0px",
        height: "auto"
      }), setTimeout(() => {
        requestAnimationFrame(() => {
          const S = f - window.innerHeight;
          S && u.value >= f && (document.body.style.top = `-${u.value + S}px`);
        });
      }, 300);
    }
  }
  function g() {
    if (us() && ua !== null && !r.value) {
      const m = -Number.parseInt(document.body.style.top, 10), f = -Number.parseInt(document.body.style.left, 10);
      Object.assign(document.body.style, ua), window.requestAnimationFrame(() => {
        if (s.value && i.value !== window.location.href) {
          i.value = window.location.href;
          return;
        }
        window.scrollTo(f, m);
      }), ua = null;
    }
  }
  return Gt(() => {
    function m() {
      u.value = window.scrollY;
    }
    m(), window.addEventListener("scroll", m), yn(() => {
      window.removeEventListener("scroll", m);
    });
  }), Re([t, o, i], () => {
    n.value || !o.value || (t.value ? (window.matchMedia("(display-mode: standalone)").matches || c(), a.value || setTimeout(() => {
      g();
    }, 500)) : g());
  }), { restorePositionSetting: g };
}
function Ym(e, t) {
  return e && e.value ? e : t;
}
function Km(e) {
  const {
    emitDrag: t,
    emitRelease: a,
    emitClose: n,
    emitOpenChange: o,
    open: s,
    dismissible: r,
    nested: i,
    modal: u,
    shouldScaleBackground: c,
    setBackgroundColorOnScale: g,
    scrollLockTimeout: m,
    closeThreshold: f,
    activeSnapPoint: S,
    fadeFromIndex: M,
    direction: k,
    noBodyStyles: I,
    handleOnly: y,
    preventScrollRestoration: _
  } = e, x = se(s.value ?? !1), b = se(!1), O = se(!1), $ = se(!1), E = se(null), B = se(null), Q = se(null), Z = se(null), le = se(null), H = se(!1), be = se(null), C = se(0), z = se(!1);
  se(0);
  const T = se(null);
  se(0);
  const ge = V(() => {
    var d;
    return ((d = T.value) == null ? void 0 : d.$el.getBoundingClientRect().height) || 0;
  }), W = Ym(
    e.snapPoints,
    se(void 0)
  ), We = V(() => {
    var d;
    return W && (((d = W.value) == null ? void 0 : d.length) ?? 0) > 0;
  }), Fe = se(null), {
    activeSnapPointIndex: Ze,
    onRelease: pt,
    snapPointsOffset: Se,
    onDrag: $e,
    shouldFade: Qe,
    getPercentageDragged: Ot
  } = jm({
    snapPoints: W,
    activeSnapPoint: S,
    drawerRef: T,
    fadeFromIndex: M,
    overlayRef: E,
    onSnapPointChange: ye,
    direction: k
  });
  function ye(d, v) {
    W.value && d === v.length - 1 && (B.value = /* @__PURE__ */ new Date());
  }
  Hm({
    isOpen: x,
    modal: u,
    nested: i,
    hasBeenOpened: b,
    noBodyStyles: I,
    preventScrollRestoration: _
  });
  function Xe() {
    return (window.innerWidth - Pl) / window.innerWidth;
  }
  function et(d, v) {
    var D;
    if (!d)
      return !1;
    let U = d;
    const oe = (D = window.getSelection()) == null ? void 0 : D.toString(), ie = T.value ? Na(T.value.$el, k.value) : null, ne = /* @__PURE__ */ new Date();
    if (U.hasAttribute("data-vaul-no-drag") || U.closest("[data-vaul-no-drag]"))
      return !1;
    if (k.value === "right" || k.value === "left")
      return !0;
    if (B.value && ne.getTime() - B.value.getTime() < 500)
      return !1;
    if (ie !== null && (k.value === "bottom" ? ie > 0 : ie < 0))
      return !0;
    if (oe && oe.length > 0)
      return !1;
    if (le.value && ne.getTime() - le.value.getTime() < m.value && ie === 0 || v)
      return le.value = ne, !1;
    for (; U; ) {
      if (U.scrollHeight > U.clientHeight) {
        if (U.scrollTop !== 0)
          return le.value = /* @__PURE__ */ new Date(), !1;
        if (U.getAttribute("role") === "dialog")
          return !0;
      }
      U = U.parentNode;
    }
    return !0;
  }
  function tt(d) {
    !r.value && !W.value || T.value && !T.value.$el.contains(d.target) || (O.value = !0, Q.value = /* @__PURE__ */ new Date(), d.target.setPointerCapture(d.pointerId), C.value = Ae(k.value) ? d.clientY : d.clientX);
  }
  function mt(d) {
    var v, D, U, oe, ie, ne;
    if (T.value && O.value) {
      const N = k.value === "bottom" || k.value === "right" ? 1 : -1, F = (C.value - (Ae(k.value) ? d.clientY : d.clientX)) * N, ue = F > 0, _e = W.value && !r.value && !ue;
      if (_e && Ze.value === 0)
        return;
      const ot = Math.abs(F), At = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      let je = ot / ge.value;
      const rt = Ot(ot, ue);
      if (rt !== null && (je = rt), _e && je >= 1 || !H.value && !et(d.target, ue))
        return;
      if ((v = T?.value) == null || v.$el.classList.add(is), H.value = !0, Le((D = T.value) == null ? void 0 : D.$el, {
        transition: "none"
      }), Le((U = E.value) == null ? void 0 : U.$el, {
        transition: "none"
      }), W.value && $e({ draggedDistance: F }), ue && !W.value) {
        const it = Um(F), _a = Math.min(it * -1, 0) * N;
        Le((oe = T.value) == null ? void 0 : oe.$el, {
          transform: Ae(k.value) ? `translate3d(0, ${_a}px, 0)` : `translate3d(${_a}px, 0, 0)`
        });
        return;
      }
      const Ya = 1 - je;
      if ((Qe.value || M.value && Ze.value === M.value - 1) && (t(je), Le(
        (ie = E.value) == null ? void 0 : ie.$el,
        {
          opacity: `${Ya}`,
          transition: "none"
        },
        !0
      )), At && E.value && c.value) {
        const it = Math.min(Xe() + je * (1 - Xe()), 1), _a = 8 - je * 8, ao = Math.max(0, 14 - je * 14);
        Le(
          At,
          {
            borderRadius: `${_a}px`,
            transform: Ae(k.value) ? `scale(${it}) translate3d(0, ${ao}px, 0)` : `scale(${it}) translate3d(${ao}px, 0, 0)`,
            transition: "none"
          },
          !0
        );
      }
      if (!W.value) {
        const it = ot * N;
        Le((ne = T.value) == null ? void 0 : ne.$el, {
          transform: Ae(k.value) ? `translate3d(0, ${it}px, 0)` : `translate3d(${it}px, 0, 0)`
        });
      }
    }
  }
  function at() {
    var d;
    if (!T.value)
      return;
    const v = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]"), D = Na(T.value.$el, k.value);
    Le(T.value.$el, {
      transform: "translate3d(0, 0, 0)",
      transition: `transform ${ke.DURATION}s cubic-bezier(${ke.EASE.join(",")})`
    }), Le((d = E.value) == null ? void 0 : d.$el, {
      transition: `opacity ${ke.DURATION}s cubic-bezier(${ke.EASE.join(",")})`,
      opacity: "1"
    }), c.value && D && D > 0 && x.value && Le(
      v,
      {
        borderRadius: `${Al}px`,
        overflow: "hidden",
        ...Ae(k.value) ? {
          transform: `scale(${Xe()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
          transformOrigin: "top"
        } : {
          transform: `scale(${Xe()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
          transformOrigin: "left"
        },
        transitionProperty: "transform, border-radius",
        transitionDuration: `${ke.DURATION}s`,
        transitionTimingFunction: `cubic-bezier(${ke.EASE.join(",")})`
      },
      !0
    );
  }
  function nt(d) {
    T.value && (n(), d || (x.value = !1), window.setTimeout(() => {
      W.value && (S.value = W.value[0]);
    }, ke.DURATION * 1e3));
  }
  ga(() => {
    if (!x.value && c.value && Mm) {
      const d = setTimeout(() => {
        Vm(document.body);
      }, 200);
      return () => clearTimeout(d);
    }
  }), Re(s, () => {
    x.value = s.value, s.value || nt();
  });
  function Tt(d) {
    if (!O.value || !T.value)
      return;
    T.value.$el.classList.remove(is), H.value = !1, O.value = !1, Z.value = /* @__PURE__ */ new Date();
    const v = Na(T.value.$el, k.value);
    if (!et(d.target, !1) || !v || Number.isNaN(v) || Q.value === null)
      return;
    const D = Z.value.getTime() - Q.value.getTime(), U = C.value - (Ae(k.value) ? d.clientY : d.clientX), oe = Math.abs(U) / D;
    if (oe > 0.05 && ($.value = !0, window.setTimeout(() => {
      $.value = !1;
    }, 200)), W.value) {
      const ne = k.value === "bottom" || k.value === "right" ? 1 : -1;
      pt({
        draggedDistance: U * ne,
        closeDrawer: nt,
        velocity: oe,
        dismissible: r.value
      }), a(!0);
      return;
    }
    if (k.value === "bottom" || k.value === "right" ? U > 0 : U < 0) {
      at(), a(!0);
      return;
    }
    if (oe > Nl) {
      nt(), a(!1);
      return;
    }
    const ie = Math.min(
      T.value.$el.getBoundingClientRect().height ?? 0,
      window.innerHeight
    );
    if (v >= ie * f.value) {
      nt(), a(!1);
      return;
    }
    a(!0), at();
  }
  Re(x, (d) => {
    d && (B.value = /* @__PURE__ */ new Date()), o(d);
  }, { immediate: !0 });
  function gt(d) {
    var v, D;
    const U = d ? (window.innerWidth - Aa) / window.innerWidth : 1, oe = d ? -16 : 0;
    be.value && window.clearTimeout(be.value), Le((v = T.value) == null ? void 0 : v.$el, {
      transition: `transform ${ke.DURATION}s cubic-bezier(${ke.EASE.join(",")})`,
      transform: `scale(${U}) translate3d(0, ${oe}px, 0)`
    }), !d && (D = T.value) != null && D.$el && (be.value = window.setTimeout(() => {
      var ie, ne;
      const N = Na((ie = T.value) == null ? void 0 : ie.$el, k.value);
      Le((ne = T.value) == null ? void 0 : ne.$el, {
        transition: "none",
        transform: Ae(k.value) ? `translate3d(0, ${N}px, 0)` : `translate3d(${N}px, 0, 0)`
      });
    }, 500));
  }
  function Nt(d) {
    var v;
    if (d < 0)
      return;
    const D = Ae(k.value) ? window.innerHeight : window.innerWidth, U = (D - Aa) / D, oe = U + d * (1 - U), ie = -16 + d * Aa;
    Le((v = T.value) == null ? void 0 : v.$el, {
      transform: Ae(k.value) ? `scale(${oe}) translate3d(0, ${ie}px, 0)` : `scale(${oe}) translate3d(${ie}px, 0, 0)`,
      transition: "none"
    });
  }
  function sa(d) {
    var v;
    const D = Ae(k.value) ? window.innerHeight : window.innerWidth, U = d ? (D - Aa) / D : 1, oe = d ? -16 : 0;
    d && Le((v = T.value) == null ? void 0 : v.$el, {
      transition: `transform ${ke.DURATION}s cubic-bezier(${ke.EASE.join(",")})`,
      transform: Ae(k.value) ? `scale(${U}) translate3d(0, ${oe}px, 0)` : `scale(${U}) translate3d(${oe}px, 0, 0)`
    });
  }
  return {
    open: s,
    isOpen: x,
    modal: u,
    keyboardIsOpen: z,
    hasBeenOpened: b,
    drawerRef: T,
    drawerHeightRef: ge,
    overlayRef: E,
    handleRef: Fe,
    isDragging: O,
    dragStartTime: Q,
    isAllowedToDrag: H,
    snapPoints: W,
    activeSnapPoint: S,
    hasSnapPoints: We,
    pointerStart: C,
    dismissible: r,
    snapPointsOffset: Se,
    direction: k,
    shouldFade: Qe,
    fadeFromIndex: M,
    shouldScaleBackground: c,
    setBackgroundColorOnScale: g,
    onPress: tt,
    onDrag: mt,
    onRelease: Tt,
    closeDrawer: nt,
    onNestedDrag: Nt,
    onNestedRelease: sa,
    onNestedOpenChange: gt,
    emitClose: n,
    emitDrag: t,
    emitRelease: a,
    emitOpenChange: o,
    nested: i,
    handleOnly: y,
    noBodyStyles: I
  };
}
const Xm = /* @__PURE__ */ P({
  __name: "DrawerRoot",
  props: {
    activeSnapPoint: { default: void 0 },
    closeThreshold: { default: Gm },
    shouldScaleBackground: { type: Boolean, default: void 0 },
    setBackgroundColorOnScale: { type: Boolean, default: !0 },
    scrollLockTimeout: { default: Wm },
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
    Vl();
    const s = V(() => n.fadeFromIndex ?? (n.snapPoints && n.snapPoints.length - 1)), r = rs(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), i = rs(n, "activeSnapPoint", o, {
      passive: n.activeSnapPoint === void 0
    }), u = {
      emitDrag: (M) => o("drag", M),
      emitRelease: (M) => o("release", M),
      emitClose: () => o("close"),
      emitOpenChange: (M) => {
        o("update:open", M), setTimeout(() => {
          o("animationEnd", M);
        }, ke.DURATION * 1e3);
      }
    }, { closeDrawer: c, hasBeenOpened: g, modal: m, isOpen: f } = Fm(
      Km({
        ...u,
        ...sn(n),
        activeSnapPoint: i,
        fadeFromIndex: s,
        open: r
      })
    );
    function S(M) {
      if (r.value !== void 0) {
        u.emitOpenChange(M);
        return;
      }
      f.value = M, M ? g.value = !0 : c();
    }
    return t({
      open: f
    }), (M, k) => (p(), A(l(wn), {
      open: l(f),
      modal: l(m),
      "onUpdate:open": S
    }, {
      default: h(() => [
        L(M.$slots, "default", { open: l(f) })
      ]),
      _: 3
    }, 8, ["open", "modal"]));
  }
}), qm = /* @__PURE__ */ P({
  __name: "DrawerOverlay",
  setup(e) {
    const { overlayRef: t, hasSnapPoints: a, isOpen: n, shouldFade: o } = eo();
    return (s, r) => (p(), A(l(xn), {
      ref_key: "overlayRef",
      ref: t,
      "data-vaul-overlay": "",
      "data-vaul-snap-points": l(n) && l(a) ? "true" : "false",
      "data-vaul-snap-points-overlay": l(n) && l(o) ? "true" : "false"
    }, null, 8, ["data-vaul-snap-points", "data-vaul-snap-points-overlay"]));
  }
}), Jm = () => () => {
};
function Zm() {
  const { direction: e, isOpen: t, shouldScaleBackground: a, setBackgroundColorOnScale: n, noBodyStyles: o } = eo(), s = se(null), r = se(document.body.style.backgroundColor);
  function i() {
    return (window.innerWidth - Pl) / window.innerWidth;
  }
  ga((u) => {
    if (t.value && a.value) {
      s.value && clearTimeout(s.value);
      const c = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      if (!c)
        return;
      zm(
        n.value && !o.value ? nn(document.body, { background: "black" }) : Jm,
        nn(c, {
          transformOrigin: Ae(e.value) ? "top" : "left",
          transitionProperty: "transform, border-radius",
          transitionDuration: `${ke.DURATION}s`,
          transitionTimingFunction: `cubic-bezier(${ke.EASE.join(",")})`
        })
      );
      const g = nn(c, {
        borderRadius: `${Al}px`,
        overflow: "hidden",
        ...Ae(e.value) ? {
          transform: `scale(${i()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`
        } : {
          transform: `scale(${i()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`
        }
      });
      u(() => {
        g(), s.value = window.setTimeout(() => {
          r.value ? document.body.style.background = r.value : document.body.style.removeProperty("background");
        }, ke.DURATION * 1e3);
      });
    }
  }, { flush: "pre" });
}
const Qm = /* @__PURE__ */ P({
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
      onRelease: u,
      modal: c,
      emitOpenChange: g,
      dismissible: m,
      keyboardIsOpen: f,
      closeDrawer: S,
      direction: M,
      handleOnly: k
    } = eo();
    Zm();
    const I = se(!1), y = V(() => n.value && n.value.length > 0 ? `${n.value[0]}px` : "0");
    function _(O) {
      if (!c.value || O.defaultPrevented) {
        O.preventDefault();
        return;
      }
      f.value && (f.value = !1), m.value ? g(!1) : O.preventDefault();
    }
    function x(O) {
      k.value || r(O);
    }
    function b(O) {
      k.value || i(O);
    }
    return ga(() => {
      o.value && window.requestAnimationFrame(() => {
        I.value = !0;
      });
    }), (O, $) => (p(), A(l(kn), {
      ref_key: "drawerRef",
      ref: s,
      "data-vaul-drawer": "",
      "data-vaul-drawer-direction": l(M),
      "data-vaul-delayed-snap-points": I.value ? "true" : "false",
      "data-vaul-snap-points": l(a) && l(o) ? "true" : "false",
      style: Da({ "--snap-point-height": y.value }),
      onPointerdown: x,
      onPointermove: b,
      onPointerup: l(u),
      onPointerDownOutside: _,
      onOpenAutoFocus: $[0] || ($[0] = ms(() => {
      }, ["prevent"])),
      onEscapeKeyDown: $[1] || ($[1] = (E) => {
        l(m) || E.preventDefault();
      })
    }, {
      default: h(() => [
        L(O.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-vaul-drawer-direction", "data-vaul-delayed-snap-points", "data-vaul-snap-points", "style", "onPointerup"]));
  }
}), eg = /* @__PURE__ */ P({
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
    return (s, r) => (p(), A(l(Xm), j({ "data-slot": "drawer" }, l(o)), {
      default: h(() => [
        L(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), tg = /* @__PURE__ */ P({
  __name: "DrawerOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ce(t, "class");
    return (n, o) => (p(), A(l(qm), j({ "data-slot": "drawer-overlay" }, l(a), {
      class: l(G)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80", t.class)
    }), null, 16, ["class"]));
  }
}), ag = /* @__PURE__ */ P({
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
    return (s, r) => (p(), A(l(En), null, {
      default: h(() => [
        w(tg),
        w(l(Qm), j({ "data-slot": "drawer-content" }, l(o), {
          class: l(G)(
            "group/drawer-content bg-background fixed z-50 flex h-auto flex-col",
            "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg",
            "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg",
            "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:sm:max-w-sm",
            "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:sm:max-w-sm",
            a.class
          )
        }), {
          default: h(() => [
            r[0] || (r[0] = q("div", { class: "bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }, null, -1)),
            L(s.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), ng = /* @__PURE__ */ P({
  __name: "DrawerDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ce(t, "class");
    return (n, o) => (p(), A(l(Cn), j({ "data-slot": "drawer-description" }, l(a), {
      class: l(G)("text-muted-foreground text-sm", t.class)
    }), {
      default: h(() => [
        L(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), og = /* @__PURE__ */ P({
  __name: "DrawerHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (p(), R("div", {
      "data-slot": "drawer-header",
      class: ee(l(G)("flex flex-col gap-1.5 p-4", t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), sg = /* @__PURE__ */ P({
  __name: "DrawerTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ce(t, "class");
    return (n, o) => (p(), A(l(Sn), j({ "data-slot": "drawer-title" }, l(a), {
      class: l(G)("text-foreground font-semibold", t.class)
    }), {
      default: h(() => [
        L(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), lg = ["innerHTML"], rg = { class: "px-4 flex-1 overflow-auto select-text" }, ig = /* @__PURE__ */ P({
  __name: "DynamicDrawer",
  props: /* @__PURE__ */ Ce({
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
    return (a, n) => (p(), A(l(eg), {
      open: t.value,
      "onUpdate:open": n[1] || (n[1] = (o) => t.value = o),
      "handle-only": "",
      direction: "right",
      dismissible: !0,
      "should-scale-background": ""
    }, {
      default: h(() => [
        w(l(ag), { class: "!max-w-[800px]" }, {
          default: h(() => [
            w(l(og), { class: "!pb-0" }, {
              default: h(() => [
                w(l(sg), { class: "flex items-center gap-2" }, {
                  default: h(() => [
                    q("div", {
                      class: "[&>em]:font-normal [&>em]:!not-italic line-clamp-1 flex-1",
                      innerHTML: e.title
                    }, null, 8, lg),
                    w(ze, {
                      variant: "ghost",
                      onClick: n[0] || (n[0] = (o) => t.value = !1)
                    }, {
                      default: h(() => [
                        w(l(ba))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                e.description ? (p(), A(l(ng), { key: 0 }, {
                  default: h(() => [
                    de(J(e.description), 1)
                  ]),
                  _: 1
                })) : te("", !0)
              ]),
              _: 1
            }),
            q("div", rg, [
              L(a.$slots, "default")
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), ug = /* @__PURE__ */ P({
  __name: "DynamicComponentDialog",
  props: /* @__PURE__ */ Ce({
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
    async function o(r) {
      a.value = !0;
      const i = e.dialogConfig.onOk ? await e.dialogConfig.onOk(r).catch((u) => u) : void 0;
      i === !0 || i === void 0 ? t.value = !1 : to(i) && (n.value = i), a.value = !1;
    }
    const s = () => t.value = !1;
    return (r, i) => (p(), A(Ke(e.type === "drawer" ? ig : Ol), j(e.dialogConfig, {
      open: t.value,
      "onUpdate:open": i[0] || (i[0] = (u) => t.value = u)
    }), {
      default: h(() => [
        (p(), A(Ke(e.componentConfig.component), j(e.componentConfig.componentProps, {
          errors: n.value,
          onSubmitSuccess: o,
          onClose: s
        }), null, 16, ["errors"]))
      ]),
      _: 1
    }, 16, ["open"]));
  }
}), cg = { class: "pt-3 flex gap-2 justify-end" }, ya = /* @__PURE__ */ P({
  __name: "DynamicConfirmComponentDialog",
  props: /* @__PURE__ */ Ce({
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
    const t = e, a = ve(e, "open"), n = Ge(), o = se(t.initialValue), s = se(!1), r = V(() => t.dialogConfig.cancelButtonText ?? n("common.cancel", "Cancel")), i = V(() => t.dialogConfig.okButtonText ?? n("common.ok", "Ok"));
    function u() {
      a.value = !1;
    }
    const c = se();
    async function g() {
      s.value = !0;
      const m = t.dialogConfig.onOk ? await t.dialogConfig.onOk(o.value).catch((f) => f) : void 0;
      m === !0 || m === void 0 ? a.value = !1 : to(m) && (c.value = m), s.value = !1;
    }
    return (m, f) => (p(), A(Ol, j(t.dialogConfig, {
      open: a.value,
      "onUpdate:open": f[3] || (f[3] = (S) => a.value = S)
    }), {
      default: h(() => [
        q("form", {
          onSubmit: f[2] || (f[2] = ms((S) => g(), ["prevent"]))
        }, [
          (p(), A(Ke(t.componentConfig.component), j(t.componentConfig.componentProps, {
            modelValue: o.value,
            "onUpdate:modelValue": f[0] || (f[0] = (S) => o.value = S),
            errors: c.value
          }), null, 16, ["modelValue", "errors"])),
          q("div", cg, [
            w(ze, {
              type: "button",
              variant: "secondary",
              onClick: f[1] || (f[1] = (S) => u())
            }, {
              default: h(() => [
                de(J(r.value), 1)
              ]),
              _: 1
            }),
            w(ze, {
              type: "submit",
              disabled: s.value
            }, {
              default: h(() => [
                q("span", null, J(i.value), 1),
                s.value ? (p(), A(_l, { key: 0 })) : te("", !0)
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
function to(e) {
  return typeof e != "object" || e === null || Array.isArray(e) ? !1 : Object.values(e).every(
    (t) => Array.isArray(t) && t.every((a) => typeof a == "string")
  );
}
const Yt = Sl();
function Ig(e, t, a = "dialog") {
  return Yt.open({
    component: ug,
    componentProps: {
      componentConfig: t,
      dialogConfig: typeof e == "string" ? { title: e } : e,
      type: a
    }
  });
}
function Mg(e, t = "Achtung", a = "Sind Sie sicher?", n) {
  return Yt.open({
    component: Nm,
    componentProps: {
      title: t,
      description: a,
      onOk: e
    },
    onClose: n
  });
}
function Rg({ dialogConfig: e, initialValue: t, onOk: a, component: n, componentProps: o, onClose: s }) {
  return Yt.open({
    component: ya,
    componentProps: {
      componentConfig: { component: n, componentProps: o },
      initialValue: t,
      dialogConfig: { ...typeof e == "string" ? { title: e } : e, onOk: a }
    },
    onClose: s
  });
}
function dg(e, t, a, n, o, s) {
  return Yt.open({
    component: ya,
    componentProps: {
      componentConfig: { component: Xn, componentProps: { multiple: !0, options: t, ...o } },
      initialValue: a,
      dialogConfig: { ...typeof e == "string" ? { title: e } : e, onOk: n }
    },
    onClose: s
  });
}
function Bg(e, t, a, n, o, s) {
  return Yt.open({
    component: ya,
    componentProps: {
      componentConfig: { component: _m, componentProps: { multiple: !0, options: t, ...o } },
      initialValue: a,
      dialogConfig: { ...typeof e == "string" ? { title: e } : e, onOk: n }
    },
    onClose: s
  });
}
function Fg(e, t, a, n, o) {
  return Yt.open({
    component: ya,
    componentProps: {
      componentConfig: { component: Bt, componentProps: { type: "text", ...n } },
      initialValue: t,
      dialogConfig: { ...typeof e == "string" ? { title: e } : e, onOk: a }
    },
    onClose: o
  });
}
function Vg(e, t, a, n, o) {
  return Yt.open({
    component: ya,
    componentProps: {
      componentConfig: { component: Bt, componentProps: { type: "number", ...n } },
      initialValue: t,
      dialogConfig: { ...typeof e == "string" ? { title: e } : e, onOk: a }
    },
    onClose: o
  });
}
function Ug(e, t, a, n, o, s) {
  const r = [
    { value: !0, label: n?.trueLabel || "Yes" },
    { value: !1, label: n?.falseLabel || "No" }
  ];
  return dg(
    e,
    r,
    t,
    a,
    { ...o, multiple: !1 },
    s
  );
}
const zg = /* @__PURE__ */ P({
  inheritAttrs: !1,
  __name: "InputBoolean",
  props: /* @__PURE__ */ Ce({
    class: {},
    readonly: { type: Boolean }
  }, {
    modelValue: { type: Boolean },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, a = ve(e, "modelValue"), n = Ge(), o = V(() => [
      { value: !0, label: n("common.true", "True") },
      { value: !1, label: n("common.false", "False") }
    ]);
    return (s, r) => (p(), A(Xn, {
      modelValue: a.value,
      "onUpdate:modelValue": r[0] || (r[0] = (i) => a.value = i),
      class: ee(t.class),
      options: o.value
    }, null, 8, ["modelValue", "class", "options"]));
  }
}), fg = /* @__PURE__ */ P({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = Ne(e, t);
    return (s, r) => (p(), A(l(Vr), j({ "data-slot": "popover" }, l(o)), {
      default: h(() => [
        L(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pg = /* @__PURE__ */ P({
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
    const a = e, n = t, o = ce(a, "class"), s = Ne(o, n);
    return (r, i) => (p(), A(l(Ur), null, {
      default: h(() => [
        w(l(zr), j({ "data-slot": "popover-content" }, { ...l(s), ...r.$attrs }, {
          class: l(G)(
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
}), mg = /* @__PURE__ */ P({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (p(), A(l(Gr), j({ "data-slot": "popover-trigger" }, t), {
      default: h(() => [
        L(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gg = { key: 0 }, vg = { class: "text-xs" }, hg = { class: "text-xs" }, bg = { class: "flex gap-2" }, Gg = /* @__PURE__ */ P({
  __name: "InputGraduated",
  props: /* @__PURE__ */ Ce({
    class: {},
    placeholder: {}
  }, {
    modelValue: { default: () => [] },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, a = Ge(), n = (u) => typeof u == "string", o = ve(e, "modelValue"), s = () => o.value?.push({ from: 0, value: 0 }), r = (u) => o.value.splice(u, 1), i = () => o.value = [];
    return (u, c) => (p(), A(l(fg), null, {
      default: h(() => [
        w(l(mg), { "as-child": "" }, {
          default: h(() => [
            w(Fs, {
              class: ee(t.class),
              variant: "outline"
            }, {
              default: h(() => [
                o.value.length ? (p(), A(ls, {
                  key: 0,
                  value: o.value
                }, null, 8, ["value"])) : e.placeholder ? (p(), R(pe, { key: 1 }, [
                  n(e.placeholder) ? (p(), R("span", gg)) : (p(), A(ls, {
                    key: 1,
                    value: e.placeholder,
                    class: "text-muted-foreground"
                  }, null, 8, ["value"]))
                ], 64)) : te("", !0)
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          _: 1
        }),
        w(l(pg), {
          class: "w-80 flex flex-col gap-2 min-w-[var(--reka-popper-anchor-width)]",
          align: "end"
        }, {
          default: h(() => [
            (p(!0), R(pe, null, Ee(o.value, (g, m) => (p(), R("div", {
              key: m,
              class: "flex gap-2 items-center"
            }, [
              q("label", vg, J(l(a)("common.from", "From")) + ":", 1),
              w(Bt, {
                modelValue: o.value[m].from,
                "onUpdate:modelValue": (f) => o.value[m].from = f,
                type: "number"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              q("label", hg, J(l(a)("common.value", "Value")) + ":", 1),
              w(Bt, {
                modelValue: o.value[m].value,
                "onUpdate:modelValue": (f) => o.value[m].value = f,
                type: "number"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              w(ze, {
                variant: "ghost",
                size: "sm",
                class: "px-1",
                onClick: (f) => r(m)
              }, {
                default: h(() => [
                  w(l(ba))
                ]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128)),
            q("div", bg, [
              w(ze, {
                size: "sm",
                variant: "ghost",
                class: "!justify-start -mx-2 flex-1",
                onClick: c[0] || (c[0] = (g) => s())
              }, {
                default: h(() => [
                  w(l(Tn)),
                  de(" " + J(l(a)("common.add", "Add")), 1)
                ]),
                _: 1
              }),
              o.value.length > 0 ? (p(), A(ze, {
                key: 0,
                size: "sm",
                variant: "ghost",
                class: "!justify-start -mx-2",
                onClick: c[1] || (c[1] = (g) => i())
              }, {
                default: h(() => [
                  w(l(ai)),
                  de(" " + J(l(a)("common.clear", "Clear All")), 1)
                ]),
                _: 1
              })) : te("", !0)
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Wg = /* @__PURE__ */ P({
  __name: "InputRange",
  props: /* @__PURE__ */ Ce({
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
    const t = e, a = ve(e, "modelValue"), n = Ge(), o = V(() => t.placeholder?.[0] ?? n("input.range.min", "Min")), s = V(() => t.placeholder?.[1] ?? n("input.range.max", "Max"));
    function r(i, u) {
      a.value || (a.value = [void 0, void 0]), a.value[i] = u, _n(a);
    }
    return (i, u) => (p(), R("div", {
      class: ee(l(G)("flex items-center gap-0", t.class))
    }, [
      w(l(Bt), {
        "model-value": a.value?.[0],
        placeholder: o.value,
        disabled: e.disabled,
        type: "number",
        class: "flex-1 rounded-r-none pr-1",
        "onUpdate:modelValue": u[0] || (u[0] = (c) => r(0, c))
      }, null, 8, ["model-value", "placeholder", "disabled"]),
      w(l(Bt), {
        "model-value": a.value?.[1],
        placeholder: s.value,
        disabled: e.disabled,
        type: "number",
        class: "flex-1 rounded-l-none pr-1",
        "onUpdate:modelValue": u[1] || (u[1] = (c) => r(1, c))
      }, null, 8, ["model-value", "placeholder", "disabled"])
    ], 2));
  }
}), yg = /* @__PURE__ */ P({
  __name: "InputGroup",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (p(), R("div", {
      "data-slot": "input-group",
      role: "group",
      class: ee(l(G)(
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
}), _g = ["data-align"], cs = /* @__PURE__ */ P({
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
    return (n, o) => (p(), R("div", {
      role: "group",
      "data-slot": "input-group-addon",
      "data-align": t.align,
      class: ee(l(G)(l(Eg)({ align: t.align }), t.class)),
      onClick: a
    }, [
      L(n.$slots, "default")
    ], 10, _g));
  }
}), wg = /* @__PURE__ */ P({
  __name: "InputGroupButton",
  props: {
    variant: { default: "ghost" },
    size: { default: "xs" },
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (p(), A(l(ze), {
      "data-size": t.size,
      variant: t.variant,
      class: ee(l(G)(l(kg)({ size: t.size }), t.class))
    }, {
      default: h(() => [
        L(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-size", "variant", "class"]));
  }
}), xg = /* @__PURE__ */ P({
  __name: "InputGroupInput",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (p(), A(l(Bt), {
      "data-slot": "input-group-control",
      class: ee(l(G)(
        "flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent",
        t.class
      ))
    }, null, 8, ["class"]));
  }
}), Eg = jt(
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
), kg = jt(
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
), jg = /* @__PURE__ */ P({
  inheritAttrs: !1,
  __name: "InputSearch",
  props: /* @__PURE__ */ Ce({
    showClearButton: { type: Boolean, default: !0 },
    placeholder: {}
  }, {
    modelSubmit: { default: "" },
    modelSubmitModifiers: {},
    "": {},
    Modifiers: {}
  }),
  emits: /* @__PURE__ */ Ce(["onSubmit", "onClear"], ["update:modelSubmit", "update:"]),
  setup(e, { emit: t }) {
    const a = e, n = t, o = Ge(), s = V(() => a.placeholder ?? o("input.search.placeholder", "Search...")), r = ve(e, "modelSubmit"), i = ve(e, ""), u = V(() => !!i.value && i.value.length > 0);
    Gt(() => {
      r.value && (i.value = r.value);
    });
    function c() {
      r.value = i.value || "", n("onSubmit", i.value || "");
    }
    function g() {
      r.value = "", i.value = "", n("onClear", "");
    }
    return (m, f) => (p(), A(l(yg), null, {
      default: h(() => [
        w(l(cs), { align: "inline-start" }, {
          default: h(() => [
            w(l(ei))
          ]),
          _: 1
        }),
        w(l(xg), j({
          modelValue: i.value,
          "onUpdate:modelValue": f[0] || (f[0] = (S) => i.value = S),
          type: "text",
          placeholder: s.value
        }, m.$attrs, {
          onKeydown: zl(c, ["enter"])
        }), null, 16, ["modelValue", "placeholder"]),
        u.value && e.showClearButton ? (p(), A(l(cs), {
          key: 0,
          align: "inline-end"
        }, {
          default: h(() => [
            w(l(wg), {
              variant: "ghost",
              size: "icon-xs",
              onClick: g
            }, {
              default: h(() => [
                w(l(ba))
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : te("", !0)
      ]),
      _: 1
    }));
  }
}), Hg = /* @__PURE__ */ P({
  __name: "Tag",
  props: {
    variant: {},
    class: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (p(), R("span", {
      class: ee(l(G)(l(Cg)({ variant: e.variant }), t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), Cg = jt(
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
  Tg as AppSidebar,
  ze as Button,
  Fs as ButtonSelect,
  ma as Checkbox,
  Ag as DataTable,
  Cp as DataTableColumnHeader,
  Pg as DataTableGrouped,
  $g as DataTableTree,
  Fp as DataTableViewOptions,
  Dg as DateFormat,
  ls as DisplayGraduated,
  Nm as DynamicAlertDialog,
  ug as DynamicComponentDialog,
  Lg as DynamicComponentProvider,
  ya as DynamicConfirmComponentDialog,
  Ol as DynamicDialog,
  ig as DynamicDrawer,
  gm as EmptyMini,
  zg as InputBoolean,
  Gg as InputGraduated,
  Wg as InputRange,
  jg as InputSearch,
  gp as PaginationCustom,
  _m as SelectListOptions,
  Xn as SelectOptions,
  Hg as Tag,
  jf as TranslationKey,
  Mg as alert,
  Ug as confirmBoolean,
  Rg as confirmGeneric,
  Vg as confirmNumber,
  dg as confirmSelect,
  Bg as confirmSelectList,
  Fg as confirmText,
  pm as dynamicComponent,
  Vs as escapeKey,
  Ig as openDynamicDialogComponent,
  Ge as useComponentTranslation,
  Sl as useDynamicComponent,
  Ng as useEscapeKey,
  Ln as useEscapeKeyWhile,
  Va as useToggleState
};
