import * as Xa from "vue";
import { h as Jt, defineComponent as P, reactive as sn, inject as Zt, computed as V, unref as l, getCurrentInstance as ea, watchEffect as ha, createBlock as A, openBlock as m, mergeProps as j, withCtx as h, renderSlot as L, watch as Re, getCurrentScope as Il, hasInjectionContext as ms, toValue as we, isRef as Da, onMounted as Gt, nextTick as ba, readonly as ps, toRef as Ml, ref as le, customRef as Rl, toRefs as ln, shallowRef as yt, createVNode as x, createElementVNode as q, createElementBlock as R, normalizeClass as te, normalizeStyle as Ia, createTextVNode as de, withDirectives as gs, vModelText as Bl, normalizeProps as Mt, guardReactiveProps as ta, Fragment as me, toDisplayString as J, resolveDynamicComponent as Ke, createCommentVNode as ee, renderList as Ee, onUnmounted as _n, useTemplateRef as Fl, Text as Vl, mergeModels as Ce, useModel as ve, resolveDirective as Ul, createSlots as da, resolveComponent as zl, triggerRef as wn, useSlots as Gl, withModifiers as vs, onBeforeUnmount as Wl, withKeys as jl } from "vue";
import { useForwardPropsEmits as Ne, CollapsibleRoot as Hl, CollapsibleContent as Yl, CollapsibleTrigger as Kl, DialogRoot as xn, DialogOverlay as En, DialogPortal as kn, DialogContent as Cn, DialogClose as hs, DialogDescription as Sn, DialogTitle as On, createContext as Tn, Primitive as ya, TooltipRoot as Xl, TooltipPortal as ql, TooltipContent as Jl, TooltipArrow as Zl, TooltipTrigger as Ql, TooltipProvider as er, PaginationRoot as tr, PaginationList as ar, useForwardProps as Je, PaginationFirst as nr, PaginationLast as or, PaginationNext as sr, PaginationPrev as lr, SelectRoot as rr, SelectPortal as ir, SelectContent as ur, SelectViewport as cr, SelectItem as dr, SelectItemIndicator as fr, SelectItemText as mr, SelectScrollDownButton as pr, SelectScrollUpButton as gr, SelectValue as vr, DropdownMenuSeparator as hr, SelectTrigger as br, CheckboxRoot as yr, CheckboxIndicator as _r, DropdownMenuRoot as wr, DropdownMenuCheckboxItem as xr, DropdownMenuItemIndicator as Er, DropdownMenuPortal as kr, DropdownMenuContent as Cr, DropdownMenuItem as Sr, DropdownMenuLabel as Or, DropdownMenuTrigger as Tr, useFilter as Nr, ListboxRoot as Ar, ListboxFilter as Pr, ListboxContent as $r, ListboxItem as Dr, ListboxItemIndicator as Lr, AlertDialogRoot as Ir, AlertDialogAction as Mr, AlertDialogCancel as Rr, AlertDialogPortal as Br, AlertDialogOverlay as Fr, AlertDialogContent as Vr, AlertDialogDescription as Ur, AlertDialogTitle as zr, PopoverRoot as Gr, PopoverPortal as Wr, PopoverContent as jr, PopoverTrigger as Hr } from "reka-ui";
const oo = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Yr = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, a, n) => n ? n.toUpperCase() : a.toLowerCase()
), Kr = (e) => {
  const t = Yr(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Xr = (...e) => e.filter((t, a, n) => !!t && t.trim() !== "" && n.indexOf(t) === a).join(" ").trim(), so = (e) => e === "";
var ra = {
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
const qr = ({
  name: e,
  iconNode: t,
  absoluteStrokeWidth: a,
  "absolute-stroke-width": n,
  strokeWidth: o,
  "stroke-width": s,
  size: r = ra.width,
  color: i = ra.stroke,
  ...u
}, { slots: c }) => Jt(
  "svg",
  {
    ...ra,
    ...u,
    width: r,
    height: r,
    stroke: i,
    "stroke-width": so(a) || so(n) || a === !0 || n === !0 ? Number(o || s || ra["stroke-width"]) * 24 / Number(r) : o || s || ra["stroke-width"],
    class: Xr(
      "lucide",
      u.class,
      ...e ? [`lucide-${oo(Kr(e))}-icon`, `lucide-${oo(e)}`] : ["lucide-icon"]
    )
  },
  [...t.map((g) => Jt(...g)), ...c.default ? [c.default()] : []]
);
const Pe = (e, t) => (a, { slots: n, attrs: o }) => Jt(
  qr,
  {
    ...o,
    ...a,
    iconNode: t,
    name: e
  },
  n
);
const lo = Pe("arrow-down", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
const Jr = Pe("arrow-up-down", [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
]);
const ro = Pe("arrow-up", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
const Ga = Pe("check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
const aa = Pe("chevron-down", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
const bs = Pe("chevron-left", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
const Wt = Pe("chevron-right", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
const Zr = Pe("chevron-up", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]);
const ys = Pe("chevrons-left", [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
]);
const _s = Pe("chevrons-right", [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
]);
const Qr = Pe("chevrons-up-down", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]);
const ei = Pe("eye-off", [
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
const ws = Pe("frown", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M16 16s-1.5-2-4-2-4 2-4 2", key: "epbg0q" }],
  ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
  ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }]
]);
const ti = Pe("loader-circle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
const Nn = Pe("plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
const ai = Pe("rotate-ccw", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
]);
const ni = Pe("search", [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
]);
const oi = Pe("settings-2", [
  ["path", { d: "M14 17H5", key: "gfn3mx" }],
  ["path", { d: "M19 7h-9", key: "6i9tg" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
]);
const si = Pe("trash-2", [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
]);
const _a = Pe("x", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
const li = typeof document < "u", ri = () => {
}, Ma = Array.isArray;
function io(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
function uo(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function ii(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (var a in e) if (!ui(e[a], t[a])) return !1;
  return !0;
}
function ui(e, t) {
  return Ma(e) ? co(e, t) : Ma(t) ? co(t, e) : e?.valueOf() === t?.valueOf();
}
function co(e, t) {
  return Ma(t) ? e.length === t.length && e.every((a, n) => a === t[n]) : e.length === 1 && e[0] === t;
}
function fo(e) {
  return typeof e == "string" || e && typeof e == "object";
}
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
const xs = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "router" : ""), ci = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
process.env.NODE_ENV;
function mo(e) {
  const t = Zt(xs), a = Zt(ci);
  let n = !1, o = null;
  const s = V(() => {
    const g = l(e.to);
    return process.env.NODE_ENV !== "production" && (!n || g !== o) && (fo(g) || (n ? io(`Invalid value for prop "to" in useLink()
- to:`, g, `
- previous to:`, o, `
- props:`, e) : io(`Invalid value for prop "to" in useLink()
- to:`, g, `
- props:`, e)), o = g, n = !0), t.resolve(g);
  }), r = V(() => {
    const { matched: g } = s.value, { length: p } = g, f = g[p - 1], S = a.matched;
    if (!f || !S.length) return -1;
    const M = S.findIndex(uo.bind(null, f));
    if (M > -1) return M;
    const E = po(g[p - 2]);
    return p > 1 && po(f) === E && S[S.length - 1].path !== E ? S.findIndex(uo.bind(null, g[p - 2])) : M;
  }), i = V(() => r.value > -1 && pi(a.params, s.value.params)), u = V(() => r.value > -1 && r.value === a.matched.length - 1 && ii(a.params, s.value.params));
  function c(g = {}) {
    if (mi(g)) {
      const p = t[l(e.replace) ? "replace" : "push"](l(e.to)).catch(ri);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => p), p;
    }
    return Promise.resolve();
  }
  if (process.env.NODE_ENV !== "production" && li) {
    const g = ea();
    if (g) {
      const p = {
        route: s.value,
        isActive: i.value,
        isExactActive: u.value,
        error: null
      };
      g.__vrl_devtools = g.__vrl_devtools || [], g.__vrl_devtools.push(p), ha(() => {
        p.route = s.value, p.isActive = i.value, p.isExactActive = u.value, p.error = fo(l(e.to)) ? null : 'Invalid "to" value';
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
function di(e) {
  return e.length === 1 ? e[0] : e;
}
const fi = /* @__PURE__ */ P({
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
  useLink: mo,
  setup(e, { slots: t }) {
    const a = sn(mo(e)), { options: n } = Zt(xs), o = V(() => ({
      [go(e.activeClass, n.linkActiveClass, "router-link-active")]: a.isActive,
      [go(e.exactActiveClass, n.linkExactActiveClass, "router-link-exact-active")]: a.isExactActive
    }));
    return () => {
      const s = t.default && di(t.default(a));
      return e.custom ? s : Jt("a", {
        "aria-current": a.isExactActive ? e.ariaCurrentValue : null,
        href: a.href,
        onClick: a.navigate,
        class: o.value
      }, s);
    };
  }
}), qa = fi;
function mi(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function pi(e, t) {
  for (const a in t) {
    const n = t[a], o = e[a];
    if (typeof n == "string") {
      if (n !== o) return !1;
    } else if (!Ma(o) || o.length !== n.length || n.some((s, r) => s.valueOf() !== o[r].valueOf())) return !1;
  }
  return !0;
}
function po(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const go = (e, t, a) => e ?? t ?? a, gi = /* @__PURE__ */ P({
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
    return (s, r) => (m(), A(l(Hl), j({ "data-slot": "collapsible" }, l(o)), {
      default: h(({ open: i }) => [
        L(s.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), vi = /* @__PURE__ */ P({
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), A(l(Yl), j({ "data-slot": "collapsible-content" }, t), {
      default: h(() => [
        L(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hi = /* @__PURE__ */ P({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), A(l(Kl), j({ "data-slot": "collapsible-trigger" }, t), {
      default: h(() => [
        L(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Es(e) {
  var t, a, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (a = Es(e[t])) && (n && (n += " "), n += a);
  } else for (a in e) e[a] && (n && (n += " "), n += a);
  return n;
}
function ks() {
  for (var e, t, a = 0, n = "", o = arguments.length; a < o; a++) (e = arguments[a]) && (t = Es(e)) && (n && (n += " "), n += t);
  return n;
}
const vo = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, ho = ks, jt = (e, t) => (a) => {
  var n;
  if (t?.variants == null) return ho(e, a?.class, a?.className);
  const { variants: o, defaultVariants: s } = t, r = Object.keys(o).map((c) => {
    const g = a?.[c], p = s?.[c];
    if (g === null) return null;
    const f = vo(g) || vo(p);
    return o[c][f];
  }), i = a && Object.entries(a).reduce((c, g) => {
    let [p, f] = g;
    return f === void 0 || (c[p] = f), c;
  }, {}), u = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((c, g) => {
    let { class: p, className: f, ...S } = g;
    return Object.entries(S).every((M) => {
      let [E, D] = M;
      return Array.isArray(D) ? D.includes({
        ...s,
        ...i
      }[E]) : {
        ...s,
        ...i
      }[E] === D;
    }) ? [
      ...c,
      p,
      f
    ] : c;
  }, []);
  return ho(e, r, u, a?.class, a?.className);
}, bi = (e, t) => {
  const a = new Array(e.length + t.length);
  for (let n = 0; n < e.length; n++)
    a[n] = e[n];
  for (let n = 0; n < t.length; n++)
    a[e.length + n] = t[n];
  return a;
}, yi = (e, t) => ({
  classGroupId: e,
  validator: t
}), Cs = (e = /* @__PURE__ */ new Map(), t = null, a) => ({
  nextPart: e,
  validators: t,
  classGroupId: a
}), Ra = "-", bo = [], _i = "arbitrary..", wi = (e) => {
  const t = Ei(e), {
    conflictingClassGroups: a,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (r) => {
      if (r.startsWith("[") && r.endsWith("]"))
        return xi(r);
      const i = r.split(Ra), u = i[0] === "" && i.length > 1 ? 1 : 0;
      return Ss(i, u, t);
    },
    getConflictingClassGroupIds: (r, i) => {
      if (i) {
        const u = n[r], c = a[r];
        return u ? c ? bi(c, u) : u : c || bo;
      }
      return a[r] || bo;
    }
  };
}, Ss = (e, t, a) => {
  if (e.length - t === 0)
    return a.classGroupId;
  const o = e[t], s = a.nextPart.get(o);
  if (s) {
    const c = Ss(e, t + 1, s);
    if (c) return c;
  }
  const r = a.validators;
  if (r === null)
    return;
  const i = t === 0 ? e.join(Ra) : e.slice(t).join(Ra), u = r.length;
  for (let c = 0; c < u; c++) {
    const g = r[c];
    if (g.validator(i))
      return g.classGroupId;
  }
}, xi = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), a = t.indexOf(":"), n = t.slice(0, a);
  return n ? _i + n : void 0;
})(), Ei = (e) => {
  const {
    theme: t,
    classGroups: a
  } = e;
  return ki(a, t);
}, ki = (e, t) => {
  const a = Cs();
  for (const n in e) {
    const o = e[n];
    An(o, a, n, t);
  }
  return a;
}, An = (e, t, a, n) => {
  const o = e.length;
  for (let s = 0; s < o; s++) {
    const r = e[s];
    Ci(r, t, a, n);
  }
}, Ci = (e, t, a, n) => {
  if (typeof e == "string") {
    Si(e, t, a);
    return;
  }
  if (typeof e == "function") {
    Oi(e, t, a, n);
    return;
  }
  Ti(e, t, a, n);
}, Si = (e, t, a) => {
  const n = e === "" ? t : Os(t, e);
  n.classGroupId = a;
}, Oi = (e, t, a, n) => {
  if (Ni(e)) {
    An(e(n), t, a, n);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(yi(a, e));
}, Ti = (e, t, a, n) => {
  const o = Object.entries(e), s = o.length;
  for (let r = 0; r < s; r++) {
    const [i, u] = o[r];
    An(u, Os(t, i), a, n);
  }
}, Os = (e, t) => {
  let a = e;
  const n = t.split(Ra), o = n.length;
  for (let s = 0; s < o; s++) {
    const r = n[s];
    let i = a.nextPart.get(r);
    i || (i = Cs(), a.nextPart.set(r, i)), a = i;
  }
  return a;
}, Ni = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, Ai = (e) => {
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
}, rn = "!", yo = ":", Pi = [], _o = (e, t, a, n, o) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: a,
  maybePostfixModifierPosition: n,
  isExternal: o
}), $i = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: a
  } = e;
  let n = (o) => {
    const s = [];
    let r = 0, i = 0, u = 0, c;
    const g = o.length;
    for (let E = 0; E < g; E++) {
      const D = o[E];
      if (r === 0 && i === 0) {
        if (D === yo) {
          s.push(o.slice(u, E)), u = E + 1;
          continue;
        }
        if (D === "/") {
          c = E;
          continue;
        }
      }
      D === "[" ? r++ : D === "]" ? r-- : D === "(" ? i++ : D === ")" && i--;
    }
    const p = s.length === 0 ? o : o.slice(u);
    let f = p, S = !1;
    p.endsWith(rn) ? (f = p.slice(0, -1), S = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      p.startsWith(rn) && (f = p.slice(1), S = !0)
    );
    const M = c && c > u ? c - u : void 0;
    return _o(s, S, f, M);
  };
  if (t) {
    const o = t + yo, s = n;
    n = (r) => r.startsWith(o) ? s(r.slice(o.length)) : _o(Pi, !1, r, void 0, !0);
  }
  if (a) {
    const o = n;
    n = (s) => a({
      className: s,
      parseClassName: o
    });
  }
  return n;
}, Di = (e) => {
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
}, Li = (e) => ({
  cache: Ai(e.cacheSize),
  parseClassName: $i(e),
  sortModifiers: Di(e),
  ...wi(e)
}), Ii = /\s+/, Mi = (e, t) => {
  const {
    parseClassName: a,
    getClassGroupId: n,
    getConflictingClassGroupIds: o,
    sortModifiers: s
  } = t, r = [], i = e.trim().split(Ii);
  let u = "";
  for (let c = i.length - 1; c >= 0; c -= 1) {
    const g = i[c], {
      isExternal: p,
      modifiers: f,
      hasImportantModifier: S,
      baseClassName: M,
      maybePostfixModifierPosition: E
    } = a(g);
    if (p) {
      u = g + (u.length > 0 ? " " + u : u);
      continue;
    }
    let D = !!E, y = n(D ? M.substring(0, E) : M);
    if (!y) {
      if (!D) {
        u = g + (u.length > 0 ? " " + u : u);
        continue;
      }
      if (y = n(M), !y) {
        u = g + (u.length > 0 ? " " + u : u);
        continue;
      }
      D = !1;
    }
    const b = f.length === 0 ? "" : f.length === 1 ? f[0] : s(f).join(":"), _ = S ? b + rn : b, w = _ + y;
    if (r.indexOf(w) > -1)
      continue;
    r.push(w);
    const N = o(y, D);
    for (let I = 0; I < N.length; ++I) {
      const k = N[I];
      r.push(_ + k);
    }
    u = g + (u.length > 0 ? " " + u : u);
  }
  return u;
}, Ri = (...e) => {
  let t = 0, a, n, o = "";
  for (; t < e.length; )
    (a = e[t++]) && (n = Ts(a)) && (o && (o += " "), o += n);
  return o;
}, Ts = (e) => {
  if (typeof e == "string")
    return e;
  let t, a = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Ts(e[n])) && (a && (a += " "), a += t);
  return a;
}, Bi = (e, ...t) => {
  let a, n, o, s;
  const r = (u) => {
    const c = t.reduce((g, p) => p(g), e());
    return a = Li(c), n = a.cache.get, o = a.cache.set, s = i, i(u);
  }, i = (u) => {
    const c = n(u);
    if (c)
      return c;
    const g = Mi(u, a);
    return o(u, g), g;
  };
  return s = r, (...u) => s(Ri(...u));
}, Fi = [], De = (e) => {
  const t = (a) => a[e] || Fi;
  return t.isThemeGetter = !0, t;
}, Ns = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, As = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Vi = /^\d+\/\d+$/, Ui = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, zi = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Gi = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Wi = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ji = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Kt = (e) => Vi.test(e), re = (e) => !!e && !Number.isNaN(Number(e)), xt = (e) => !!e && Number.isInteger(Number(e)), Ja = (e) => e.endsWith("%") && re(e.slice(0, -1)), vt = (e) => Ui.test(e), Hi = () => !0, Yi = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  zi.test(e) && !Gi.test(e)
), Ps = () => !1, Ki = (e) => Wi.test(e), Xi = (e) => ji.test(e), qi = (e) => !K(e) && !X(e), Ji = (e) => na(e, Ls, Ps), K = (e) => Ns.test(e), Pt = (e) => na(e, Is, Yi), Za = (e) => na(e, au, re), wo = (e) => na(e, $s, Ps), Zi = (e) => na(e, Ds, Xi), Ea = (e) => na(e, Ms, Ki), X = (e) => As.test(e), ia = (e) => oa(e, Is), Qi = (e) => oa(e, nu), xo = (e) => oa(e, $s), eu = (e) => oa(e, Ls), tu = (e) => oa(e, Ds), ka = (e) => oa(e, Ms, !0), na = (e, t, a) => {
  const n = Ns.exec(e);
  return n ? n[1] ? t(n[1]) : a(n[2]) : !1;
}, oa = (e, t, a = !1) => {
  const n = As.exec(e);
  return n ? n[1] ? t(n[1]) : a : !1;
}, $s = (e) => e === "position" || e === "percentage", Ds = (e) => e === "image" || e === "url", Ls = (e) => e === "length" || e === "size" || e === "bg-size", Is = (e) => e === "length", au = (e) => e === "number", nu = (e) => e === "family-name", Ms = (e) => e === "shadow", ou = () => {
  const e = De("color"), t = De("font"), a = De("text"), n = De("font-weight"), o = De("tracking"), s = De("leading"), r = De("breakpoint"), i = De("container"), u = De("spacing"), c = De("radius"), g = De("shadow"), p = De("inset-shadow"), f = De("text-shadow"), S = De("drop-shadow"), M = De("blur"), E = De("perspective"), D = De("aspect"), y = De("ease"), b = De("animate"), _ = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], w = () => [
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
  ], N = () => [...w(), X, K], I = () => ["auto", "hidden", "clip", "visible", "scroll"], k = () => ["auto", "contain", "none"], B = () => [X, K, u], Q = () => [Kt, "full", "auto", ...B()], Z = () => [xt, "none", "subgrid", X, K], oe = () => ["auto", {
    span: ["full", xt, X, K]
  }, xt, X, K], H = () => [xt, "auto", X, K], be = () => ["auto", "min", "max", "fr", X, K], C = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], U = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], O = () => ["auto", ...B()], ge = () => [Kt, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...B()], W = () => [e, X, K], Fe = () => [...w(), xo, wo, {
    position: [X, K]
  }], Ve = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], Ze = () => ["auto", "cover", "contain", eu, Ji, {
    size: [X, K]
  }], mt = () => [Ja, ia, Pt], Se = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    c,
    X,
    K
  ], $e = () => ["", re, ia, Pt], Qe = () => ["solid", "dashed", "dotted", "double"], Ot = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ye = () => [re, Ja, xo, wo], Xe = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    M,
    X,
    K
  ], et = () => ["none", re, X, K], tt = () => ["none", re, X, K], pt = () => [re, X, K], at = () => [Kt, "full", ...B()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [vt],
      breakpoint: [vt],
      color: [Hi],
      container: [vt],
      "drop-shadow": [vt],
      ease: ["in", "out", "in-out"],
      font: [qi],
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
        aspect: ["auto", "square", Kt, K, X, D]
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
        "break-after": _()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": _()
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
        overflow: I()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": I()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": I()
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
        col: oe()
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
        row: oe()
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
        content: ["normal", ...C()]
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
        "place-content": C()
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
        m: O()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: O()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: O()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: O()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: O()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: O()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: O()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: O()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: O()
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
        text: ["base", a, ia, Pt]
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
        font: [n, X, Za]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Ja, K]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Qi, K, t]
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
        "line-clamp": [re, "none", X, Za]
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
        bg: Fe()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: Ve()
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
        }, tu, Zi]
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
        from: mt()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: mt()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: mt()
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
        outline: ["", re, ia, Pt]
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
          ka,
          Ea
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
        "inset-shadow": ["none", p, ka, Ea]
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
        "text-shadow": ["none", f, ka, Ea]
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
        "mask-radial-at": w()
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
        mask: Fe()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: Ve()
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
          ka,
          Ea
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
        animate: ["none", b, X, K]
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
        perspective: [E, X, K]
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
        transform: [X, K, "", "none", "gpu", "cpu"]
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
        stroke: [re, ia, Pt, Za]
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
}, su = /* @__PURE__ */ Bi(ou);
function G(...e) {
  return su(ks(e));
}
const lu = /* @__PURE__ */ P({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = Ne(e, t);
    return (s, r) => (m(), A(l(xn), j({ "data-slot": "sheet" }, l(o)), {
      default: h(() => [
        L(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qa = /* @__PURE__ */ new WeakMap(), ru = /* @__NO_SIDE_EFFECTS__ */ (...e) => {
  var t;
  const a = e[0], n = (t = ea()) === null || t === void 0 ? void 0 : t.proxy, o = n ?? Il();
  if (o == null && !ms()) throw new Error("injectLocal must be called in setup");
  return o && Qa.has(o) && a in Qa.get(o) ? Qa.get(o)[a] : Zt(...e);
}, Rs = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const iu = (e) => typeof e < "u", uu = Object.prototype.toString, cu = (e) => uu.call(e) === "[object Object]", du = () => {
};
function fu(...e) {
  if (e.length !== 1) return Ml(...e);
  const t = e[0];
  return typeof t == "function" ? ps(Rl(() => ({
    get: t,
    set: du
  }))) : le(t);
}
function mu(e, t) {
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
const Bs = (e) => e();
function pu(e = Bs, t = {}) {
  const { initialState: a = "active" } = t, n = fu(a === "active");
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
    isActive: ps(n),
    pause: o,
    resume: s,
    eventFilter: r
  };
}
function Eo(e) {
  return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function en(e) {
  return Array.isArray(e) ? e : [e];
}
function gu(e) {
  return ea();
}
function vu(e) {
  return Da(e) ? sn(new Proxy({}, {
    get(t, a, n) {
      return l(Reflect.get(e.value, a, n));
    },
    set(t, a, n) {
      return Da(e.value[a]) && !Da(n) ? e.value[a].value = n : e.value[a] = n, !0;
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
  })) : sn(e);
}
function hu(e) {
  return vu(V(e));
}
function ce(e, ...t) {
  const a = t.flat(), n = a[0];
  return hu(() => Object.fromEntries(typeof n == "function" ? Object.entries(ln(e)).filter(([o, s]) => !n(we(s), o)) : Object.entries(ln(e)).filter((o) => !a.includes(o[0]))));
}
function bu(e, t, a = {}) {
  const { eventFilter: n = Bs, ...o } = a;
  return Re(e, mu(n, t), o);
}
function yu(e, t, a = {}) {
  const { eventFilter: n, initialState: o = "active", ...s } = a, { eventFilter: r, pause: i, resume: u, isActive: c } = pu(n, { initialState: o });
  return {
    stop: bu(e, t, {
      ...s,
      eventFilter: r
    }),
    pause: i,
    resume: u,
    isActive: c
  };
}
const _u = yu;
function wu(e, t = !0, a) {
  gu() ? Gt(e, a) : t ? e() : ba(e);
}
const xu = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[T\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/i, Eu = /[YMDHhms]o|\[([^\]]+)\]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|z{1,4}|SSS/g;
function ku(e, t, a, n) {
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
function Cu(e, t, a = {}) {
  var n;
  const o = e.getFullYear(), s = e.getMonth(), r = e.getDate(), i = e.getHours(), u = e.getMinutes(), c = e.getSeconds(), g = e.getMilliseconds(), p = e.getDay(), f = (n = a.customMeridiem) !== null && n !== void 0 ? n : ku, S = (E) => {
    var D;
    return (D = E.split(" ")[1]) !== null && D !== void 0 ? D : "";
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
    d: () => p,
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
  return t.replace(Eu, (E, D) => {
    var y, b;
    return (y = D ?? ((b = M[E]) === null || b === void 0 ? void 0 : b.call(M))) !== null && y !== void 0 ? y : E;
  });
}
function Su(e) {
  if (e === null) return /* @__PURE__ */ new Date(NaN);
  if (e === void 0) return /* @__PURE__ */ new Date();
  if (e instanceof Date) return new Date(e);
  if (typeof e == "string" && !/Z$/i.test(e)) {
    const t = e.match(xu);
    if (t) {
      const a = t[2] - 1 || 0, n = (t[7] || "0").substring(0, 3);
      return new Date(t[1], a, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, n);
    }
  }
  return new Date(e);
}
// @__NO_SIDE_EFFECTS__
function Ou(e, t = "HH:mm:ss", a = {}) {
  return V(() => Cu(Su(we(e)), we(t), a));
}
function Tu(e, t, a) {
  return Re(e, t, {
    ...a,
    immediate: !0
  });
}
const Dt = Rs ? window : void 0, Fs = Rs ? window.document : void 0;
function Nu(e) {
  var t;
  const a = we(e);
  return (t = a?.$el) !== null && t !== void 0 ? t : a;
}
function Rt(...e) {
  const t = (n, o, s, r) => (n.addEventListener(o, s, r), () => n.removeEventListener(o, s, r)), a = V(() => {
    const n = en(we(e[0])).filter((o) => o != null);
    return n.every((o) => typeof o != "string") ? n : void 0;
  });
  return Tu(() => {
    var n, o;
    return [
      (n = (o = a.value) === null || o === void 0 ? void 0 : o.map((s) => Nu(s))) !== null && n !== void 0 ? n : [Dt].filter((s) => s != null),
      en(we(a.value ? e[1] : e[0])),
      en(l(a.value ? e[2] : e[1])),
      we(a.value ? e[3] : e[2])
    ];
  }, ([n, o, s, r], i, u) => {
    if (!n?.length || !o?.length || !s?.length) return;
    const c = cu(r) ? { ...r } : r, g = n.flatMap((p) => o.flatMap((f) => s.map((S) => t(p, f, S, c))));
    u(() => {
      g.forEach((p) => p());
    });
  }, { flush: "post" });
}
// @__NO_SIDE_EFFECTS__
function Au() {
  const e = yt(!1), t = ea();
  return t && Gt(() => {
    e.value = !0;
  }, t), e;
}
// @__NO_SIDE_EFFECTS__
function Pu(e) {
  const t = /* @__PURE__ */ Au();
  return V(() => (t.value, !!e()));
}
const $u = /* @__PURE__ */ Symbol("vueuse-ssr-width");
// @__NO_SIDE_EFFECTS__
function Du() {
  const e = ms() ? /* @__PURE__ */ ru($u, null) : null;
  return typeof e == "number" ? e : void 0;
}
function Lu(e, t = {}) {
  const { window: a = Dt, ssrWidth: n = /* @__PURE__ */ Du() } = t, o = /* @__PURE__ */ Pu(() => a && "matchMedia" in a && typeof a.matchMedia == "function"), s = yt(typeof n == "number"), r = yt(), i = yt(!1), u = (c) => {
    i.value = c.matches;
  };
  return ha(() => {
    if (s.value) {
      s.value = !o.value, i.value = we(e).split(",").some((c) => {
        const g = c.includes("not all"), p = c.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), f = c.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let S = !!(p || f);
        return p && S && (S = n >= Eo(p[1])), f && S && (S = n <= Eo(f[1])), g ? !S : S;
      });
      return;
    }
    o.value && (r.value = a.matchMedia(we(e)), i.value = r.value.matches);
  }), Rt(r, "change", u, { passive: !0 }), V(() => i.value);
}
function Iu(e) {
  return JSON.parse(JSON.stringify(e));
}
const Ca = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Sa = "__vueuse_ssr_handlers__", Mu = /* @__PURE__ */ Ru();
function Ru() {
  return Sa in Ca || (Ca[Sa] = Ca[Sa] || {}), Ca[Sa];
}
function Bu(e, t) {
  return Mu[e] || t;
}
function Fu(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const Vu = {
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
}, ko = "vueuse-storage";
function Uu(e, t, a, n = {}) {
  var o;
  const { flush: s = "pre", deep: r = !0, listenToStorageChanges: i = !0, writeDefaults: u = !0, mergeDefaults: c = !1, shallow: g, window: p = Dt, eventFilter: f, onError: S = (C) => {
    console.error(C);
  }, initOnMounted: M } = n, E = (g ? yt : le)(typeof t == "function" ? t() : t), D = V(() => we(e));
  if (!a) try {
    a = Bu("getDefaultStorage", () => Dt?.localStorage)();
  } catch (C) {
    S(C);
  }
  if (!a) return E;
  const y = we(t), b = Fu(y), _ = (o = n.serializer) !== null && o !== void 0 ? o : Vu[b], { pause: w, resume: N } = _u(E, (C) => Z(C), {
    flush: s,
    deep: r,
    eventFilter: f
  });
  Re(D, () => H(), { flush: s });
  let I = !1;
  const k = (C) => {
    M && !I || H(C);
  }, B = (C) => {
    M && !I || be(C);
  };
  p && i && (a instanceof Storage ? Rt(p, "storage", k, { passive: !0 }) : Rt(p, ko, B)), M ? wu(() => {
    I = !0, H();
  }) : H();
  function Q(C, U) {
    if (p) {
      const O = {
        key: D.value,
        oldValue: C,
        newValue: U,
        storageArea: a
      };
      p.dispatchEvent(a instanceof Storage ? new StorageEvent("storage", O) : new CustomEvent(ko, { detail: O }));
    }
  }
  function Z(C) {
    try {
      const U = a.getItem(D.value);
      if (C == null)
        Q(U, null), a.removeItem(D.value);
      else {
        const O = _.write(C);
        U !== O && (a.setItem(D.value, O), Q(U, O));
      }
    } catch (U) {
      S(U);
    }
  }
  function oe(C) {
    const U = C ? C.newValue : a.getItem(D.value);
    if (U == null)
      return u && y != null && a.setItem(D.value, _.write(y)), y;
    if (!C && c) {
      const O = _.read(U);
      return typeof c == "function" ? c(O, y) : b === "object" && !Array.isArray(O) ? {
        ...y,
        ...O
      } : O;
    } else return typeof U != "string" ? U : _.read(U);
  }
  function H(C) {
    if (!(C && C.storageArea !== a)) {
      if (C && C.key == null) {
        E.value = y;
        return;
      }
      if (!(C && C.key !== D.value)) {
        w();
        try {
          const U = _.write(E.value);
          (C === void 0 || C?.newValue !== U) && (E.value = oe(C));
        } catch (U) {
          S(U);
        } finally {
          C ? ba(N) : N();
        }
      }
    }
  }
  function be(C) {
    H(C.detail);
  }
  return E;
}
const zu = [
  "mousedown",
  "mouseup",
  "keydown",
  "keyup"
];
// @__NO_SIDE_EFFECTS__
function Gu(e, t = {}) {
  const { events: a = zu, document: n = Fs, initial: o = null } = t, s = yt(o);
  return n && a.forEach((r) => {
    Rt(n, r, (i) => {
      typeof i.getModifierState == "function" && (s.value = i.getModifierState(e));
    }, { passive: !0 });
  }), s;
}
function Vs(e, t, a = {}) {
  const { window: n = Dt } = a;
  return Uu(e, t, n?.sessionStorage, a);
}
// @__NO_SIDE_EFFECTS__
function Us(e, t, a, n = {}) {
  var o, s;
  const { clone: r = !1, passive: i = !1, eventName: u, deep: c = !1, defaultValue: g, shouldEmit: p } = n, f = ea(), S = a || f?.emit || (f == null || (o = f.$emit) === null || o === void 0 ? void 0 : o.bind(f)) || (f == null || (s = f.proxy) === null || s === void 0 || (s = s.$emit) === null || s === void 0 ? void 0 : s.bind(f?.proxy));
  let M = u;
  t || (t = "modelValue"), M = M || `update:${t.toString()}`;
  const E = (b) => r ? typeof r == "function" ? r(b) : Iu(b) : b, D = () => iu(e[t]) ? E(e[t]) : g, y = (b) => {
    p ? p(b) && S(M, b) : S(M, b);
  };
  if (i) {
    const b = le(D());
    let _ = !1;
    return Re(() => e[t], (w) => {
      _ || (_ = !0, b.value = E(w), ba(() => _ = !1));
    }), Re(b, (w) => {
      !_ && (w !== e[t] || c) && y(w);
    }, { deep: c }), b;
  } else return V({
    get() {
      return D();
    },
    set(b) {
      y(b);
    }
  });
}
const Wu = /* @__PURE__ */ P({
  __name: "SheetOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ce(t, "class");
    return (n, o) => (m(), A(l(En), j({
      "data-slot": "sheet-overlay",
      class: l(G)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80", t.class)
    }, l(a)), {
      default: h(() => [
        L(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ju = /* @__PURE__ */ P({
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
    return (r, i) => (m(), A(l(kn), null, {
      default: h(() => [
        x(Wu),
        x(l(Cn), j({
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
            x(l(hs), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
              default: h(() => [
                x(l(_a), { class: "size-4" }),
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
}), Hu = /* @__PURE__ */ P({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ce(t, "class");
    return (n, o) => (m(), A(l(Sn), j({
      "data-slot": "sheet-description",
      class: l(G)("text-muted-foreground text-sm", t.class)
    }, l(a)), {
      default: h(() => [
        L(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Yu = /* @__PURE__ */ P({
  __name: "SheetHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), R("div", {
      "data-slot": "sheet-header",
      class: te(l(G)("flex flex-col gap-1.5 p-4", t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), Ku = /* @__PURE__ */ P({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ce(t, "class");
    return (n, o) => (m(), A(l(On), j({
      "data-slot": "sheet-title",
      class: l(G)("text-foreground font-semibold", t.class)
    }, l(a)), {
      default: h(() => [
        L(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Co = "sidebar_state", Xu = 3600 * 24 * 7, qu = "16rem", Ju = "18rem", Zu = "3rem", Qu = "b", [Pn, ec] = Tn("Sidebar"), tc = { class: "flex h-full w-full flex-col" }, ac = ["data-state", "data-collapsible", "data-variant", "data-side"], nc = {
  "data-sidebar": "sidebar",
  class: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, oc = /* @__PURE__ */ P({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: {}
  },
  setup(e) {
    const t = e, { isMobile: a, state: n, openMobile: o, setOpenMobile: s } = Pn();
    return (r, i) => e.collapsible === "none" ? (m(), R("div", j({
      key: 0,
      "data-slot": "sidebar",
      class: l(G)("bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col", t.class)
    }, r.$attrs), [
      L(r.$slots, "default")
    ], 16)) : l(a) ? (m(), A(l(lu), j({
      key: 1,
      open: l(o)
    }, r.$attrs, { "onUpdate:open": l(s) }), {
      default: h(() => [
        x(l(ju), {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar",
          "data-mobile": "true",
          side: e.side,
          class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
          style: Ia({
            "--sidebar-width": l(Ju)
          })
        }, {
          default: h(() => [
            x(Yu, { class: "sr-only" }, {
              default: h(() => [
                x(Ku, null, {
                  default: h(() => [...i[0] || (i[0] = [
                    de("Sidebar", -1)
                  ])]),
                  _: 1
                }),
                x(Hu, null, {
                  default: h(() => [...i[1] || (i[1] = [
                    de("Displays the mobile sidebar.", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            q("div", tc, [
              L(r.$slots, "default")
            ])
          ]),
          _: 3
        }, 8, ["side", "style"])
      ]),
      _: 3
    }, 16, ["open", "onUpdate:open"])) : (m(), R("div", {
      key: 2,
      class: "group peer text-sidebar-foreground hidden md:block",
      "data-slot": "sidebar",
      "data-state": l(n),
      "data-collapsible": l(n) === "collapsed" ? e.collapsible : "",
      "data-variant": e.variant,
      "data-side": e.side
    }, [
      q("div", {
        class: te(l(G)(
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
        q("div", nc, [
          L(r.$slots, "default")
        ])
      ], 16)
    ], 8, ac));
  }
}), sc = /* @__PURE__ */ P({
  __name: "SidebarContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), R("div", {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      class: te(l(G)("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), lc = /* @__PURE__ */ P({
  __name: "SidebarFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), R("div", {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      class: te(l(G)("flex flex-col gap-2 p-2", t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), rc = /* @__PURE__ */ P({
  __name: "SidebarGroup",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), R("div", {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      class: te(l(G)("relative flex w-full min-w-0 flex-col p-2", t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), ic = /* @__PURE__ */ P({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), A(l(ya), {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      as: e.as,
      "as-child": e.asChild,
      class: te(l(G)(
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
}), uc = /* @__PURE__ */ P({
  __name: "SidebarHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), R("div", {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      class: te(l(G)("flex flex-col gap-2 p-2", t.class))
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
    const a = e, o = /* @__PURE__ */ Us(a, "modelValue", t, {
      passive: !0,
      defaultValue: a.defaultValue
    });
    return (s, r) => gs((m(), R("input", {
      "onUpdate:modelValue": r[0] || (r[0] = (i) => Da(o) ? o.value = i : null),
      "data-slot": "input",
      class: te(l(G)(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        a.class
      ))
    }, null, 2)), [
      [Bl, l(o)]
    ]);
  }
}), cc = /* @__PURE__ */ P({
  __name: "SidebarMenu",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), R("ul", {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      class: te(l(G)("flex w-full min-w-0 flex-col gap-1", t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), dc = /* @__PURE__ */ P({
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
    return (s, r) => (m(), A(l(Xl), j({ "data-slot": "tooltip" }, l(o)), {
      default: h(() => [
        L(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fc = /* @__PURE__ */ P({
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
    return (r, i) => (m(), A(l(ql), null, {
      default: h(() => [
        x(l(Jl), j({ "data-slot": "tooltip-content" }, { ...l(s), ...r.$attrs }, {
          class: l(G)("bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance", a.class)
        }), {
          default: h(() => [
            L(r.$slots, "default"),
            x(l(Zl), { class: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), mc = /* @__PURE__ */ P({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), A(l(Ql), j({ "data-slot": "tooltip-trigger" }, t), {
      default: h(() => [
        L(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), So = /* @__PURE__ */ P({
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
    return (a, n) => (m(), A(l(ya), j({
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": e.size,
      "data-active": e.isActive,
      class: l(G)(l(bc)({ variant: e.variant, size: e.size }), t.class),
      as: e.as,
      "as-child": e.asChild
    }, a.$attrs), {
      default: h(() => [
        L(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), Oo = /* @__PURE__ */ P({
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
    const t = e, { isMobile: a, state: n } = Pn(), o = ce(t, "tooltip");
    return (s, r) => e.tooltip ? (m(), A(l(dc), { key: 1 }, {
      default: h(() => [
        x(l(mc), { "as-child": "" }, {
          default: h(() => [
            x(So, Mt(ta({ ...l(o), ...s.$attrs })), {
              default: h(() => [
                L(s.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        x(l(fc), {
          side: "right",
          align: "center",
          hidden: l(n) !== "collapsed" || l(a)
        }, {
          default: h(() => [
            typeof e.tooltip == "string" ? (m(), R(me, { key: 0 }, [
              de(J(e.tooltip), 1)
            ], 64)) : (m(), A(Ke(e.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (m(), A(So, Mt(j({ key: 0 }, { ...l(o), ...s.$attrs })), {
      default: h(() => [
        L(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), To = /* @__PURE__ */ P({
  __name: "SidebarMenuItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), R("li", {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      class: te(l(G)("group/menu-item relative", t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), pc = /* @__PURE__ */ P({
  __name: "SidebarMenuSub",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), R("ul", {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-badge",
      class: te(l(G)(
        "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        t.class
      ))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), gc = /* @__PURE__ */ P({
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
    return (a, n) => (m(), A(l(ya), {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      as: e.as,
      "as-child": e.asChild,
      "data-size": e.size,
      "data-active": e.isActive,
      class: te(l(G)(
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
}), vc = /* @__PURE__ */ P({
  __name: "SidebarMenuSubItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), R("li", {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      class: te(l(G)("group/menu-sub-item relative", t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
});
Fs?.cookie.includes(`${Co}=false`);
const hc = /* @__PURE__ */ P({
  __name: "SidebarRail",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { toggleSidebar: a } = Pn();
    return (n, o) => (m(), R("button", {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabindex: -1,
      title: "Toggle Sidebar",
      class: te(l(G)(
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
}), Ge = /* @__PURE__ */ P({
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
    return (a, n) => (m(), A(l(ya), {
      "data-slot": "button",
      as: e.as,
      "as-child": e.asChild,
      class: te(l(G)(l(Et)({ variant: e.variant, size: e.size }), t.class))
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
), bc = jt(
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
), yc = {
  key: 0,
  class: "font-semibold text-sm mt-4 ml-2 truncate"
}, _c = { key: 1 }, Ag = /* @__PURE__ */ P({
  __name: "AppSidebar",
  props: {
    config: {},
    currentPath: { default: "" }
  },
  setup(e) {
    function t(a, n) {
      return !!(a.url === n || a.items?.some((o) => o.url === n));
    }
    return (a, n) => (m(), A(l(oc), {
      collapsible: e.config.collapsible || "icon"
    }, {
      default: h(() => [
        x(l(uc), null, {
          default: h(() => [
            L(a.$slots, "header", {}, () => [
              e.config.title ? (m(), R("div", yc, J(e.config.title), 1)) : ee("", !0)
            ])
          ]),
          _: 3
        }),
        x(l(sc), null, {
          default: h(() => [
            x(l(cc), null, {
              default: h(() => [
                (m(!0), R(me, null, Ee(e.config.menuGroups, (o, s) => (m(), A(l(rc), {
                  key: s,
                  class: "!pb-0"
                }, {
                  default: h(() => [
                    o.title ? (m(), A(l(ic), { key: 0 }, {
                      default: h(() => [
                        de(J(o.title), 1)
                      ]),
                      _: 2
                    }, 1024)) : ee("", !0),
                    (m(!0), R(me, null, Ee(o.items, (r) => (m(), R(me, {
                      key: r.title
                    }, [
                      r.items?.length ? (m(), A(l(gi), {
                        key: 0,
                        "as-child": "",
                        "default-open": t(r, e.currentPath),
                        class: "group/collapsible"
                      }, {
                        default: h(() => [
                          x(l(To), null, {
                            default: h(() => [
                              x(l(hi), { "as-child": "" }, {
                                default: h(() => [
                                  x(l(Oo), {
                                    tooltip: r.title,
                                    disabled: r.disabled
                                  }, {
                                    default: h(() => [
                                      r.icon ? (m(), A(Ke(r.icon), { key: 0 })) : ee("", !0),
                                      r.url ? (m(), A(l(qa), {
                                        key: 2,
                                        to: r.url
                                      }, {
                                        default: h(() => [
                                          q("span", null, J(r.title), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["to"])) : (m(), R("span", _c, J(r.title), 1)),
                                      x(l(Wt), { class: "ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" })
                                    ]),
                                    _: 2
                                  }, 1032, ["tooltip", "disabled"])
                                ]),
                                _: 2
                              }, 1024),
                              x(l(vi), null, {
                                default: h(() => [
                                  x(l(pc), null, {
                                    default: h(() => [
                                      (m(!0), R(me, null, Ee(r.items, (i) => (m(), A(l(vc), {
                                        key: i.title
                                      }, {
                                        default: h(() => [
                                          x(l(gc), {
                                            "as-child": "",
                                            "is-active": e.currentPath === i.url,
                                            disabled: i.disabled
                                          }, {
                                            default: h(() => [
                                              x(l(qa), {
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
                      }, 1032, ["default-open"])) : (m(), A(l(To), { key: 1 }, {
                        default: h(() => [
                          x(l(Oo), {
                            "as-child": "",
                            "is-active": e.currentPath === r.url,
                            disabled: r.disabled
                          }, {
                            default: h(() => [
                              x(l(qa), {
                                to: r.url
                              }, {
                                default: h(() => [
                                  r.icon ? (m(), A(Ke(r.icon), { key: 0 })) : ee("", !0),
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
        x(l(lc), null, {
          default: h(() => [
            L(a.$slots, "footer")
          ]),
          _: 3
        }),
        x(l(hc))
      ]),
      _: 3
    }, 8, ["collapsible"]));
  }
}), wc = { class: "flex-1 flex gap-2 items-center [&_[data-placeholder]]:text-muted-foreground [&_[data-placeholder]]:truncate min-w-0" }, zs = /* @__PURE__ */ P({
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
    return (a, n) => (m(), A(l(ya), {
      as: e.as,
      class: te(l(G)(l(Et)({ variant: e.variant, size: e.size }), t.class))
    }, {
      default: h(() => [
        q("span", wc, [
          L(a.$slots, "default")
        ]),
        x(l(aa), { class: "!size-3 !-mx-1" })
      ]),
      _: 3
    }, 8, ["as", "class"]));
  }
}), Ft = (e, t, a = (n) => n) => e.reduce((n, o) => (n[t(o)] = a(o), n), {}), xc = (e, t) => {
  const a = e.reduce((n, o) => {
    const s = o;
    return n[s] || (n[s] = o), n;
  }, {});
  return Object.values(a);
}, Ec = (e, t, a, n) => {
  if (!e && !t)
    return [];
  if (!e)
    return [t];
  if (!t)
    return [...e];
  const o = (r) => r === t;
  return e.find(o) ? e.filter((r, i) => !o(r)) : [...e, t];
}, No = (e, t, a = (n) => n) => {
  if (!e?.length && !t?.length)
    return [];
  if (e?.length === void 0)
    return [...t];
  if (!t?.length)
    return [...e];
  const n = t.reduce((o, s) => (o[a(s)] = !0, o), {});
  return e.filter((o) => !n[a(o)]);
}, kc = (e) => {
  if (!e || e.length === 0)
    return "";
  const t = e.toLowerCase();
  return t.substring(0, 1).toUpperCase() + t.substring(1, t.length);
}, Cc = (e) => e ? e.split(/(?=[A-Z])|[\.\-\s_]/).map((t) => t.trim()).filter((t) => !!t).map((t) => kc(t.toLowerCase())).join(" ") : "", It = yt([]), $n = (e, t) => It.value.push({ callback: e, id: t });
function Dn(e) {
  It.value = typeof e == "string" ? It.value.filter(({ id: t }) => t !== e) : It.value.filter(({ callback: t }) => t !== e);
}
const Ln = (e) => {
  const t = e !== void 0 ? e : It.value.length - 1;
  return t >= 0 && !It.value[t].callback() && Ln(t - 1);
};
document.body.addEventListener("keydown", (e) => {
  e.key === "Escape" && It.value.length > 0 && (e.stopPropagation(), !e.target || !["INPUT"].includes(e.target?.tagName) ? Ln() : e.target.blur());
});
const Gs = { add: $n, remove: Dn, invokeLatest: Ln };
function Pg(e) {
  Gt(() => $n(e)), _n(() => Dn(e));
}
function In(e, t) {
  Re(t, (a) => a ? $n(e) : Dn(e), { immediate: !0 });
}
function Ao(e, t, a, n = !1, o) {
  Rt(e, "keydown", (s) => {
    ["Space", "Enter"].includes(s.code) && document.activeElement?.matches(t) && (s.preventDefault(), a(document.activeElement, s));
  }), Rt(e, "click", (s) => {
    const r = s.target.closest(t);
    r && (n && (s.stopPropagation(), s.stopImmediatePropagation()), s.preventDefault(), a(r, s));
  });
}
function Sc(e, t, a, n, o) {
  const s = e.includes(a), r = t.indexOf(a), i = t.indexOf(n), u = r < i ? t.slice(r, i + 1) : t.slice(i, r);
  return s ? xc([...e, ...u]) : e.filter((c) => !u.includes(c));
}
function Mn(e, t, a) {
  let n = null;
  const o = /* @__PURE__ */ Gu("Shift");
  Re(
    () => e.value,
    (s, r) => {
      const i = s.length > r.length ? No(s, r, a) : No(r, s, a);
      if (i.length === 1) {
        const u = i[0];
        o.value && n && (e.value = Sc(e.value, t.value, n, u)), n = u;
      }
    }
  );
}
const Oc = { class: "[&_[data-state=selected]]:bg-muted/50" }, Rn = /* @__PURE__ */ P({
  __name: "DataTableBody",
  setup(e) {
    return (t, a) => (m(), R("tbody", Oc, [
      L(t.$slots, "default")
    ]));
  }
}), [Ht, Bn] = Tn("DataTable"), Fn = /* @__PURE__ */ P({
  __name: "DataTableContainer",
  setup(e) {
    const t = Ht(), a = Fl("container");
    Ao(a, "[data-col-id]", (o) => {
      const s = o.getAttribute("data-col-id"), r = o.closest("tr")?.getAttribute("data-row-id");
      s && r && t.onClickColumn(s, r);
    }), Ao(a, "[data-row-id]", (o) => {
      const s = o.getAttribute("data-row-id");
      s && t.onClickRow(s);
    });
    const n = V(() => ({
      "[&_td:first-child]:!w-0 [&_th:first-child]:!w-0": t.selectMode === "multiselect",
      "[&_td:last-child]:!w-0 [&_th:last-child]:!w-0": t.hasActionsColumn
    }));
    return (o, s) => (m(), R("div", {
      ref: "container",
      class: te(["min-w-0 min-h-0 relative flex-1 flex flex-col", n.value])
    }, [
      L(o.$slots, "default")
    ], 2));
  }
}), Tc = /* @__PURE__ */ P({
  __name: "Empty",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), R("div", {
      "data-slot": "empty",
      class: te(l(G)(
        "flex min-w-0 flex-1 flex-col items-center justify-center gap-6 text-balance rounded-lg border-dashed p-6 text-center md:p-12",
        t.class
      ))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), Nc = /* @__PURE__ */ P({
  __name: "EmptyContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), R("div", {
      "data-slot": "empty-content",
      class: te(l(G)(
        "flex w-full min-w-0 max-w-sm flex-col items-center gap-4 text-balance text-sm",
        t.class
      ))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), Ac = /* @__PURE__ */ P({
  __name: "EmptyDescription",
  props: {
    class: {}
  },
  setup(e) {
    return (t, a) => (m(), R("p", {
      "data-slot": "empty-description",
      class: te(l(G)(
        "text-muted-foreground [&>a:hover]:text-primary text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4",
        t.$attrs.class ?? ""
      ))
    }, [
      L(t.$slots, "default")
    ], 2));
  }
}), Pc = /* @__PURE__ */ P({
  __name: "EmptyHeader",
  props: {
    class: {}
  },
  setup(e) {
    return (t, a) => (m(), R("div", {
      "data-slot": "empty-header",
      class: te(l(G)(
        "flex max-w-sm flex-col items-center gap-2 text-center",
        t.$attrs.class ?? ""
      ))
    }, [
      L(t.$slots, "default")
    ], 2));
  }
}), $c = ["data-variant"], Dc = /* @__PURE__ */ P({
  __name: "EmptyMedia",
  props: {
    class: {},
    variant: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), R("div", {
      "data-slot": "empty-icon",
      "data-variant": e.variant,
      class: te(l(G)(l(Ws)({ variant: e.variant }), t.class))
    }, [
      L(a.$slots, "default")
    ], 10, $c));
  }
}), Lc = ["data-variant"], Ic = /* @__PURE__ */ P({
  __name: "EmptyTitle",
  props: {
    class: {},
    variant: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), R("div", {
      "data-slot": "empty-icon",
      "data-variant": e.variant,
      class: te(l(G)(l(Ws)({ variant: e.variant }), t.class))
    }, [
      L(a.$slots, "default")
    ], 10, Lc));
  }
}), Ws = jt(
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
);
function ft(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Po = {};
function Mc(e) {
  Po[e] || (Po[e] = !0, ft(e));
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
const Rc = /\{([0-9a-zA-Z]+)\}/g;
function Wa(e, ...t) {
  return t.length === 1 && pe(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(Rc, (a, n) => t.hasOwnProperty(n) ? t[n] : "");
}
const wt = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), Bc = (e, t, a) => Fc({ l: e, k: t, s: a }), Fc = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Ie = (e) => typeof e == "number" && isFinite(e), Vc = (e) => Vn(e) === "[object Date]", Ba = (e) => Vn(e) === "[object RegExp]", ja = (e) => fe(e) && Object.keys(e).length === 0, Me = Object.assign, Uc = Object.create, he = (e = null) => Uc(e);
let $o;
const Lt = () => $o || ($o = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : he());
function Do(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function Lo(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function zc(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (n, o, s) => `${o}="${Lo(s)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (n, o, s) => `${o}='${Lo(s)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (process.env.NODE_ENV !== "production" && ft("Potentially dangerous event handlers detected in translation. Consider removing onclick, onerror, etc. from your translation messages."), e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((n) => {
    e = e.replace(n, "$1javascript&#58;");
  }), e;
}
const Gc = Object.prototype.hasOwnProperty;
function st(e, t) {
  return Gc.call(e, t);
}
const Te = Array.isArray, xe = (e) => typeof e == "function", Y = (e) => typeof e == "string", Oe = (e) => typeof e == "boolean", pe = (e) => e !== null && typeof e == "object", Wc = (e) => pe(e) && xe(e.then) && xe(e.catch), js = Object.prototype.toString, Vn = (e) => js.call(e), fe = (e) => Vn(e) === "[object Object]", jc = (e) => e == null ? "" : Te(e) || fe(e) && e.toString === js ? JSON.stringify(e, null, 2) : String(e);
function Un(e, t = "") {
  return e.reduce((a, n, o) => o === 0 ? a + n : a + t + n, "");
}
const Io = 2;
function Hc(e, t = 0, a = e.length) {
  const n = e.split(/\r?\n/);
  let o = 0;
  const s = [];
  for (let r = 0; r < n.length; r++)
    if (o += n[r].length + 1, o >= t) {
      for (let i = r - Io; i <= r + Io || a > o; i++) {
        if (i < 0 || i >= n.length)
          continue;
        const u = i + 1;
        s.push(`${u}${" ".repeat(3 - String(u).length)}|  ${n[i]}`);
        const c = n[i].length;
        if (i === r) {
          const g = t - (o - c) + 1, p = Math.max(1, a > o ? c - g : a - t);
          s.push("   |  " + " ".repeat(g) + "^".repeat(p));
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
function Yc() {
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
const Oa = (e) => !pe(e) || Te(e);
function La(e, t) {
  if (Oa(e) || Oa(t))
    throw new Error("Invalid value");
  const a = [{ src: e, des: t }];
  for (; a.length; ) {
    const { src: n, des: o } = a.pop();
    Object.keys(n).forEach((s) => {
      s !== "__proto__" && (pe(n[s]) && !pe(o[s]) && (o[s] = Array.isArray(n[s]) ? [] : he()), Oa(o[s]) || Oa(n[s]) ? o[s] = n[s] : a.push({ src: n[s], des: o[s] }));
    });
  }
}
function Kc(e, t, a) {
  return { line: e, column: t, offset: a };
}
function un(e, t, a) {
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
}, Xc = 17, qc = {
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
function sa(e, t, a = {}) {
  const { domain: n, messages: o, args: s } = a, r = process.env.NODE_ENV !== "production" ? Wa((o || qc)[e] || "", ...s || []) : e, i = new SyntaxError(String(r));
  return i.code = e, t && (i.location = t), i.domain = n, i;
}
function Jc(e) {
  throw e;
}
const Zc = /<\/?[\w\s="/.':;#-\/]+>/, Qc = (e) => Zc.test(e), ut = " ", ed = "\r", Ue = `
`, td = "\u2028", ad = "\u2029";
function nd(e) {
  const t = e;
  let a = 0, n = 1, o = 1, s = 0;
  const r = (k) => t[k] === ed && t[k + 1] === Ue, i = (k) => t[k] === Ue, u = (k) => t[k] === ad, c = (k) => t[k] === td, g = (k) => r(k) || i(k) || u(k) || c(k), p = () => a, f = () => n, S = () => o, M = () => s, E = (k) => r(k) || u(k) || c(k) ? Ue : t[k], D = () => E(a), y = () => E(a + s);
  function b() {
    return s = 0, g(a) && (n++, o = 0), r(a) && a++, a++, o++, t[a];
  }
  function _() {
    return r(a + s) && s++, s++, t[a + s];
  }
  function w() {
    a = 0, n = 1, o = 1, s = 0;
  }
  function N(k = 0) {
    s = k;
  }
  function I() {
    const k = a + s;
    for (; k !== a; )
      b();
    s = 0;
  }
  return {
    index: p,
    line: f,
    column: S,
    peekOffset: M,
    charAt: E,
    currentChar: D,
    currentPeek: y,
    next: b,
    peek: _,
    reset: w,
    resetPeek: N,
    skipToPeek: I
  };
}
const ht = void 0, od = ".", Mo = "'", sd = "tokenizer";
function ld(e, t = {}) {
  const a = t.location !== !1, n = nd(e), o = () => n.index(), s = () => Kc(n.line(), n.column(), n.index()), r = s(), i = o(), u = {
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
  function p(d, v, $, ...z) {
    const se = c();
    if (v.column += $, v.offset += $, g) {
      const ie = a ? un(se.startLoc, v) : null, ne = sa(d, ie, {
        domain: sd,
        args: z
      });
      g(ne);
    }
  }
  function f(d, v, $) {
    d.endLoc = s(), d.currentType = v;
    const z = { type: v };
    return a && (z.loc = un(d.startLoc, d.endLoc)), $ != null && (z.value = $), z;
  }
  const S = (d) => f(
    d,
    13
    /* TokenTypes.EOF */
  );
  function M(d, v) {
    return d.currentChar() === v ? (d.next(), v) : (p(ae.EXPECTED_TOKEN, s(), 0, v), "");
  }
  function E(d) {
    let v = "";
    for (; d.currentPeek() === ut || d.currentPeek() === Ue; )
      v += d.currentPeek(), d.peek();
    return v;
  }
  function D(d) {
    const v = E(d);
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
  function b(d) {
    if (d === ht)
      return !1;
    const v = d.charCodeAt(0);
    return v >= 48 && v <= 57;
  }
  function _(d, v) {
    const { currentType: $ } = v;
    if ($ !== 2)
      return !1;
    E(d);
    const z = y(d.currentPeek());
    return d.resetPeek(), z;
  }
  function w(d, v) {
    const { currentType: $ } = v;
    if ($ !== 2)
      return !1;
    E(d);
    const z = d.currentPeek() === "-" ? d.peek() : d.currentPeek(), se = b(z);
    return d.resetPeek(), se;
  }
  function N(d, v) {
    const { currentType: $ } = v;
    if ($ !== 2)
      return !1;
    E(d);
    const z = d.currentPeek() === Mo;
    return d.resetPeek(), z;
  }
  function I(d, v) {
    const { currentType: $ } = v;
    if ($ !== 7)
      return !1;
    E(d);
    const z = d.currentPeek() === ".";
    return d.resetPeek(), z;
  }
  function k(d, v) {
    const { currentType: $ } = v;
    if ($ !== 8)
      return !1;
    E(d);
    const z = y(d.currentPeek());
    return d.resetPeek(), z;
  }
  function B(d, v) {
    const { currentType: $ } = v;
    if (!($ === 7 || $ === 11))
      return !1;
    E(d);
    const z = d.currentPeek() === ":";
    return d.resetPeek(), z;
  }
  function Q(d, v) {
    const { currentType: $ } = v;
    if ($ !== 9)
      return !1;
    const z = () => {
      const ie = d.currentPeek();
      return ie === "{" ? y(d.peek()) : ie === "@" || ie === "|" || ie === ":" || ie === "." || ie === ut || !ie ? !1 : ie === Ue ? (d.peek(), z()) : oe(d, !1);
    }, se = z();
    return d.resetPeek(), se;
  }
  function Z(d) {
    E(d);
    const v = d.currentPeek() === "|";
    return d.resetPeek(), v;
  }
  function oe(d, v = !0) {
    const $ = (se = !1, ie = "") => {
      const ne = d.currentPeek();
      return ne === "{" || ne === "@" || !ne ? se : ne === "|" ? !(ie === ut || ie === Ue) : ne === ut ? (d.peek(), $(!0, ut)) : ne === Ue ? (d.peek(), $(!0, Ue)) : !0;
    }, z = $();
    return v && d.resetPeek(), z;
  }
  function H(d, v) {
    const $ = d.currentChar();
    return $ === ht ? ht : v($) ? (d.next(), $) : null;
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
  function U(d) {
    const v = d.charCodeAt(0);
    return v >= 97 && v <= 122 || // a-z
    v >= 65 && v <= 90 || // A-Z
    v >= 48 && v <= 57 || // 0-9
    v === 95 || // _
    v === 36 || // $
    v === 45;
  }
  function O(d) {
    return H(d, U);
  }
  function ge(d) {
    const v = d.charCodeAt(0);
    return v >= 48 && v <= 57;
  }
  function W(d) {
    return H(d, ge);
  }
  function Fe(d) {
    const v = d.charCodeAt(0);
    return v >= 48 && v <= 57 || // 0-9
    v >= 65 && v <= 70 || // A-F
    v >= 97 && v <= 102;
  }
  function Ve(d) {
    return H(d, Fe);
  }
  function Ze(d) {
    let v = "", $ = "";
    for (; v = W(d); )
      $ += v;
    return $;
  }
  function mt(d) {
    let v = "";
    for (; ; ) {
      const $ = d.currentChar();
      if ($ === "{" || $ === "}" || $ === "@" || $ === "|" || !$)
        break;
      if ($ === ut || $ === Ue)
        if (oe(d))
          v += $, d.next();
        else {
          if (Z(d))
            break;
          v += $, d.next();
        }
      else
        v += $, d.next();
    }
    return v;
  }
  function Se(d) {
    D(d);
    let v = "", $ = "";
    for (; v = O(d); )
      $ += v;
    const z = d.currentChar();
    if (z && z !== "}" && z !== ht && z !== ut && z !== Ue && z !== "　") {
      const se = tt(d);
      return p(ae.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, $ + se), $ + se;
    }
    return d.currentChar() === ht && p(ae.UNTERMINATED_CLOSING_BRACE, s(), 0), $;
  }
  function $e(d) {
    D(d);
    let v = "";
    return d.currentChar() === "-" ? (d.next(), v += `-${Ze(d)}`) : v += Ze(d), d.currentChar() === ht && p(ae.UNTERMINATED_CLOSING_BRACE, s(), 0), v;
  }
  function Qe(d) {
    return d !== Mo && d !== Ue;
  }
  function Ot(d) {
    D(d), M(d, "'");
    let v = "", $ = "";
    for (; v = H(d, Qe); )
      v === "\\" ? $ += ye(d) : $ += v;
    const z = d.currentChar();
    return z === Ue || z === ht ? (p(ae.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, s(), 0), z === Ue && (d.next(), M(d, "'")), $) : (M(d, "'"), $);
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
        return p(ae.UNKNOWN_ESCAPE_SEQUENCE, s(), 0, v), "";
    }
  }
  function Xe(d, v, $) {
    M(d, v);
    let z = "";
    for (let se = 0; se < $; se++) {
      const ie = Ve(d);
      if (!ie) {
        p(ae.INVALID_UNICODE_ESCAPE_SEQUENCE, s(), 0, `\\${v}${z}${d.currentChar()}`);
        break;
      }
      z += ie;
    }
    return `\\${v}${z}`;
  }
  function et(d) {
    return d !== "{" && d !== "}" && d !== ut && d !== Ue;
  }
  function tt(d) {
    D(d);
    let v = "", $ = "";
    for (; v = H(d, et); )
      $ += v;
    return $;
  }
  function pt(d) {
    let v = "", $ = "";
    for (; v = C(d); )
      $ += v;
    return $;
  }
  function at(d) {
    const v = ($) => {
      const z = d.currentChar();
      return z === "{" || z === "@" || z === "|" || z === "(" || z === ")" || !z || z === ut ? $ : ($ += z, d.next(), v($));
    };
    return v("");
  }
  function nt(d) {
    D(d);
    const v = M(
      d,
      "|"
      /* TokenChars.Pipe */
    );
    return D(d), v;
  }
  function Tt(d, v) {
    let $ = null;
    switch (d.currentChar()) {
      case "{":
        return v.braceNest >= 1 && p(ae.NOT_ALLOW_NEST_PLACEHOLDER, s(), 0), d.next(), $ = f(
          v,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), D(d), v.braceNest++, $;
      case "}":
        return v.braceNest > 0 && v.currentType === 2 && p(ae.EMPTY_PLACEHOLDER, s(), 0), d.next(), $ = f(
          v,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), v.braceNest--, v.braceNest > 0 && D(d), v.inLinked && v.braceNest === 0 && (v.inLinked = !1), $;
      case "@":
        return v.braceNest > 0 && p(ae.UNTERMINATED_CLOSING_BRACE, s(), 0), $ = gt(d, v) || S(v), v.braceNest = 0, $;
      default: {
        let se = !0, ie = !0, ne = !0;
        if (Z(d))
          return v.braceNest > 0 && p(ae.UNTERMINATED_CLOSING_BRACE, s(), 0), $ = f(v, 1, nt(d)), v.braceNest = 0, v.inLinked = !1, $;
        if (v.braceNest > 0 && (v.currentType === 4 || v.currentType === 5 || v.currentType === 6))
          return p(ae.UNTERMINATED_CLOSING_BRACE, s(), 0), v.braceNest = 0, Nt(d, v);
        if (se = _(d, v))
          return $ = f(v, 4, Se(d)), D(d), $;
        if (ie = w(d, v))
          return $ = f(v, 5, $e(d)), D(d), $;
        if (ne = N(d, v))
          return $ = f(v, 6, Ot(d)), D(d), $;
        if (!se && !ie && !ne)
          return $ = f(v, 12, tt(d)), p(ae.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, $.value), D(d), $;
        break;
      }
    }
    return $;
  }
  function gt(d, v) {
    const { currentType: $ } = v;
    let z = null;
    const se = d.currentChar();
    switch (($ === 7 || $ === 8 || $ === 11 || $ === 9) && (se === Ue || se === ut) && p(ae.INVALID_LINKED_FORMAT, s(), 0), se) {
      case "@":
        return d.next(), z = f(
          v,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), v.inLinked = !0, z;
      case ".":
        return D(d), d.next(), f(
          v,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return D(d), d.next(), f(
          v,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return Z(d) ? (z = f(v, 1, nt(d)), v.braceNest = 0, v.inLinked = !1, z) : I(d, v) || B(d, v) ? (D(d), gt(d, v)) : k(d, v) ? (D(d), f(v, 11, pt(d))) : Q(d, v) ? (D(d), se === "{" ? Tt(d, v) || z : f(v, 10, at(d))) : ($ === 7 && p(ae.INVALID_LINKED_FORMAT, s(), 0), v.braceNest = 0, v.inLinked = !1, Nt(d, v));
    }
  }
  function Nt(d, v) {
    let $ = {
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
        return p(ae.UNBALANCED_CLOSING_BRACE, s(), 0), d.next(), f(
          v,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return gt(d, v) || S(v);
      default: {
        if (Z(d))
          return $ = f(v, 1, nt(d)), v.braceNest = 0, v.inLinked = !1, $;
        if (oe(d))
          return f(v, 0, mt(d));
        break;
      }
    }
    return $;
  }
  function la() {
    const { currentType: d, offset: v, startLoc: $, endLoc: z } = u;
    return u.lastType = d, u.lastOffset = v, u.lastStartLoc = $, u.lastEndLoc = z, u.offset = o(), u.startLoc = s(), n.currentChar() === ht ? f(
      u,
      13
      /* TokenTypes.EOF */
    ) : Nt(n, u);
  }
  return {
    nextToken: la,
    currentOffset: o,
    currentPosition: s,
    context: c
  };
}
const rd = "parser", id = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function ud(e, t, a) {
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
function cd(e = {}) {
  const t = e.location !== !1, { onError: a } = e;
  function n(y, b, _, w, ...N) {
    const I = y.currentPosition();
    if (I.offset += w, I.column += w, a) {
      const k = t ? un(_, I) : null, B = sa(b, k, {
        domain: rd,
        args: N
      });
      a(B);
    }
  }
  function o(y, b, _) {
    const w = { type: y };
    return t && (w.start = b, w.end = b, w.loc = { start: _, end: _ }), w;
  }
  function s(y, b, _, w) {
    t && (y.end = b, y.loc && (y.loc.end = _));
  }
  function r(y, b) {
    const _ = y.context(), w = o(3, _.offset, _.startLoc);
    return w.value = b, s(w, y.currentOffset(), y.currentPosition()), w;
  }
  function i(y, b) {
    const _ = y.context(), { lastOffset: w, lastStartLoc: N } = _, I = o(5, w, N);
    return I.index = parseInt(b, 10), y.nextToken(), s(I, y.currentOffset(), y.currentPosition()), I;
  }
  function u(y, b) {
    const _ = y.context(), { lastOffset: w, lastStartLoc: N } = _, I = o(4, w, N);
    return I.key = b, y.nextToken(), s(I, y.currentOffset(), y.currentPosition()), I;
  }
  function c(y, b) {
    const _ = y.context(), { lastOffset: w, lastStartLoc: N } = _, I = o(9, w, N);
    return I.value = b.replace(id, ud), y.nextToken(), s(I, y.currentOffset(), y.currentPosition()), I;
  }
  function g(y) {
    const b = y.nextToken(), _ = y.context(), { lastOffset: w, lastStartLoc: N } = _, I = o(8, w, N);
    return b.type !== 11 ? (n(y, ae.UNEXPECTED_EMPTY_LINKED_MODIFIER, _.lastStartLoc, 0), I.value = "", s(I, w, N), {
      nextConsumeToken: b,
      node: I
    }) : (b.value == null && n(y, ae.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, ct(b)), I.value = b.value || "", s(I, y.currentOffset(), y.currentPosition()), {
      node: I
    });
  }
  function p(y, b) {
    const _ = y.context(), w = o(7, _.offset, _.startLoc);
    return w.value = b, s(w, y.currentOffset(), y.currentPosition()), w;
  }
  function f(y) {
    const b = y.context(), _ = o(6, b.offset, b.startLoc);
    let w = y.nextToken();
    if (w.type === 8) {
      const N = g(y);
      _.modifier = N.node, w = N.nextConsumeToken || y.nextToken();
    }
    switch (w.type !== 9 && n(y, ae.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, ct(w)), w = y.nextToken(), w.type === 2 && (w = y.nextToken()), w.type) {
      case 10:
        w.value == null && n(y, ae.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, ct(w)), _.key = p(y, w.value || "");
        break;
      case 4:
        w.value == null && n(y, ae.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, ct(w)), _.key = u(y, w.value || "");
        break;
      case 5:
        w.value == null && n(y, ae.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, ct(w)), _.key = i(y, w.value || "");
        break;
      case 6:
        w.value == null && n(y, ae.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, ct(w)), _.key = c(y, w.value || "");
        break;
      default: {
        n(y, ae.UNEXPECTED_EMPTY_LINKED_KEY, b.lastStartLoc, 0);
        const N = y.context(), I = o(7, N.offset, N.startLoc);
        return I.value = "", s(I, N.offset, N.startLoc), _.key = I, s(_, N.offset, N.startLoc), {
          nextConsumeToken: w,
          node: _
        };
      }
    }
    return s(_, y.currentOffset(), y.currentPosition()), {
      node: _
    };
  }
  function S(y) {
    const b = y.context(), _ = b.currentType === 1 ? y.currentOffset() : b.offset, w = b.currentType === 1 ? b.endLoc : b.startLoc, N = o(2, _, w);
    N.items = [];
    let I = null;
    do {
      const Q = I || y.nextToken();
      switch (I = null, Q.type) {
        case 0:
          Q.value == null && n(y, ae.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, ct(Q)), N.items.push(r(y, Q.value || ""));
          break;
        case 5:
          Q.value == null && n(y, ae.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, ct(Q)), N.items.push(i(y, Q.value || ""));
          break;
        case 4:
          Q.value == null && n(y, ae.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, ct(Q)), N.items.push(u(y, Q.value || ""));
          break;
        case 6:
          Q.value == null && n(y, ae.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, ct(Q)), N.items.push(c(y, Q.value || ""));
          break;
        case 7: {
          const Z = f(y);
          N.items.push(Z.node), I = Z.nextConsumeToken || null;
          break;
        }
      }
    } while (b.currentType !== 13 && b.currentType !== 1);
    const k = b.currentType === 1 ? b.lastOffset : y.currentOffset(), B = b.currentType === 1 ? b.lastEndLoc : y.currentPosition();
    return s(N, k, B), N;
  }
  function M(y, b, _, w) {
    const N = y.context();
    let I = w.items.length === 0;
    const k = o(1, b, _);
    k.cases = [], k.cases.push(w);
    do {
      const B = S(y);
      I || (I = B.items.length === 0), k.cases.push(B);
    } while (N.currentType !== 13);
    return I && n(y, ae.MUST_HAVE_MESSAGES_IN_PLURAL, _, 0), s(k, y.currentOffset(), y.currentPosition()), k;
  }
  function E(y) {
    const b = y.context(), { offset: _, startLoc: w } = b, N = S(y);
    return b.currentType === 13 ? N : M(y, _, w, N);
  }
  function D(y) {
    const b = ld(y, Me({}, e)), _ = b.context(), w = o(0, _.offset, _.startLoc);
    return t && w.loc && (w.loc.source = y), w.body = E(b), e.onCacheKey && (w.cacheKey = e.onCacheKey(y)), _.currentType !== 13 && n(b, ae.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, y[_.offset] || ""), s(w, b.currentOffset(), b.currentPosition()), w;
  }
  return { parse: D };
}
function ct(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function dd(e, t = {}) {
  const a = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => a, helper: (s) => (a.helpers.add(s), s) };
}
function Ro(e, t) {
  for (let a = 0; a < e.length; a++)
    zn(e[a], t);
}
function zn(e, t) {
  switch (e.type) {
    case 1:
      Ro(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      Ro(e.items, t);
      break;
    case 6: {
      zn(e.key, t), t.helper(
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
function fd(e, t = {}) {
  const a = dd(e);
  a.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && zn(e.body, a);
  const n = a.context();
  e.helpers = Array.from(n.helpers);
}
function md(e) {
  const t = e.body;
  return t.type === 2 ? Bo(t) : t.cases.forEach((a) => Bo(a)), e;
}
function Bo(e) {
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
      e.static = Un(t);
      for (let a = 0; a < e.items.length; a++) {
        const n = e.items[a];
        (n.type === 3 || n.type === 9) && delete n.value;
      }
    }
  }
}
const pd = "minifier";
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
        throw sa(ae.UNHANDLED_MINIFIER_NODE_TYPE, null, {
          domain: pd,
          args: [e.type]
        });
  }
  delete e.type;
}
const gd = "parser";
function vd(e, t) {
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
  function u(E, D) {
    r.code += E;
  }
  function c(E, D = !0) {
    const y = D ? n : "";
    u(o ? y + "  ".repeat(E) : y);
  }
  function g(E = !0) {
    const D = ++r.indentLevel;
    E && c(D);
  }
  function p(E = !0) {
    const D = --r.indentLevel;
    E && c(D);
  }
  function f() {
    c(r.indentLevel);
  }
  return {
    context: i,
    push: u,
    indent: g,
    deindent: p,
    newline: f,
    helper: (E) => `_${E}`,
    needIndent: () => r.needIndent
  };
}
function hd(e, t) {
  const { helper: a } = e;
  e.push(`${a(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), Qt(e, t.key), t.modifier ? (e.push(", "), Qt(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function bd(e, t) {
  const { helper: a, needIndent: n } = e;
  e.push(`${a(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(n());
  const o = t.items.length;
  for (let s = 0; s < o && (Qt(e, t.items[s]), s !== o - 1); s++)
    e.push(", ");
  e.deindent(n()), e.push("])");
}
function yd(e, t) {
  const { helper: a, needIndent: n } = e;
  if (t.cases.length > 1) {
    e.push(`${a(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(n());
    const o = t.cases.length;
    for (let s = 0; s < o && (Qt(e, t.cases[s]), s !== o - 1); s++)
      e.push(", ");
    e.deindent(n()), e.push("])");
  }
}
function _d(e, t) {
  t.body ? Qt(e, t.body) : e.push("null");
}
function Qt(e, t) {
  const { helper: a } = e;
  switch (t.type) {
    case 0:
      _d(e, t);
      break;
    case 1:
      yd(e, t);
      break;
    case 2:
      bd(e, t);
      break;
    case 6:
      hd(e, t);
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
        throw sa(ae.UNHANDLED_CODEGEN_NODE_TYPE, null, {
          domain: gd,
          args: [t.type]
        });
  }
}
const wd = (e, t = {}) => {
  const a = Y(t.mode) ? t.mode : "normal", n = Y(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const o = t.breakLineCode != null ? t.breakLineCode : a === "arrow" ? ";" : `
`, s = t.needIndent ? t.needIndent : a !== "arrow", r = e.helpers || [], i = vd(e, {
    filename: n,
    breakLineCode: o,
    needIndent: s
  });
  i.push(a === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), i.indent(s), r.length > 0 && (i.push(`const { ${Un(r.map((g) => `${g}: _${g}`), ", ")} } = ctx`), i.newline()), i.push("return "), Qt(i, e), i.deindent(s), i.push("}"), delete e.helpers;
  const { code: u, map: c } = i.context();
  return {
    ast: e,
    code: u,
    map: c ? c.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function xd(e, t = {}) {
  const a = Me({}, t), n = !!a.jit, o = !!a.minify, s = a.optimize == null ? !0 : a.optimize, i = cd(a).parse(e);
  return n ? (s && md(i), o && Xt(i), { ast: i, code: "" }) : (fd(i, a), wd(i, a));
}
function Ed() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Lt().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Lt().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function lt(e) {
  return pe(e) && Gn(e) === 0 && (st(e, "b") || st(e, "body"));
}
const Hs = ["b", "body"];
function kd(e) {
  return kt(e, Hs);
}
const Ys = ["c", "cases"];
function Cd(e) {
  return kt(e, Ys, []);
}
const Ks = ["s", "static"];
function Sd(e) {
  return kt(e, Ks);
}
const Xs = ["i", "items"];
function Od(e) {
  return kt(e, Xs, []);
}
const qs = ["t", "type"];
function Gn(e) {
  return kt(e, qs);
}
const Js = ["v", "value"];
function Ta(e, t) {
  const a = kt(e, Js);
  if (a != null)
    return a;
  throw fa(t);
}
const Zs = ["m", "modifier"];
function Td(e) {
  return kt(e, Zs);
}
const Qs = ["k", "key"];
function Nd(e) {
  const t = kt(e, Qs);
  if (t)
    return t;
  throw fa(
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
const el = [
  ...Hs,
  ...Ys,
  ...Ks,
  ...Xs,
  ...Qs,
  ...Zs,
  ...Js,
  ...qs
];
function fa(e) {
  return new Error(`unhandled node type: ${e}`);
}
function tn(e) {
  return (a) => Ad(a, e);
}
function Ad(e, t) {
  const a = kd(t);
  if (a == null)
    throw fa(
      0
      /* NodeTypes.Resource */
    );
  if (Gn(a) === 1) {
    const s = Cd(a);
    return e.plural(s.reduce((r, i) => [
      ...r,
      Fo(e, i)
    ], []));
  } else
    return Fo(e, a);
}
function Fo(e, t) {
  const a = Sd(t);
  if (a != null)
    return e.type === "text" ? a : e.normalize([a]);
  {
    const n = Od(t).reduce((o, s) => [...o, cn(e, s)], []);
    return e.normalize(n);
  }
}
function cn(e, t) {
  const a = Gn(t);
  switch (a) {
    case 3:
      return Ta(t, a);
    case 9:
      return Ta(t, a);
    case 4: {
      const n = t;
      if (st(n, "k") && n.k)
        return e.interpolate(e.named(n.k));
      if (st(n, "key") && n.key)
        return e.interpolate(e.named(n.key));
      throw fa(a);
    }
    case 5: {
      const n = t;
      if (st(n, "i") && Ie(n.i))
        return e.interpolate(e.list(n.i));
      if (st(n, "index") && Ie(n.index))
        return e.interpolate(e.list(n.index));
      throw fa(a);
    }
    case 6: {
      const n = t, o = Td(n), s = Nd(n);
      return e.linked(cn(e, s), o ? cn(e, o) : void 0, e.type);
    }
    case 7:
      return Ta(t, a);
    case 8:
      return Ta(t, a);
    default:
      throw new Error(`unhandled node on format message part: ${a}`);
  }
}
const Pd = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function $d(e, t) {
  t && Qc(e) && ft(Wa(Pd, { source: e }));
}
const Dd = (e) => e;
let Na = he();
function Ld(e, t = {}) {
  let a = !1;
  const n = t.onError || Jc;
  return t.onError = (o) => {
    a = !0, n(o);
  }, { ...xd(e, t), detectError: a };
}
// @__NO_SIDE_EFFECTS__
function Id(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && Y(e)) {
    const a = Oe(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && $d(e, a);
    const o = (t.onCacheKey || Dd)(e), s = Na[o];
    if (s)
      return s;
    const { ast: r, detectError: i } = Ld(e, {
      ...t,
      location: process.env.NODE_ENV !== "production",
      jit: !0
    }), u = tn(r);
    return i ? u : Na[o] = u;
  } else {
    if (process.env.NODE_ENV !== "production" && !lt(e))
      return ft(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), (() => e);
    const a = e.cacheKey;
    if (a) {
      const n = Na[a];
      return n || (Na[a] = tn(e));
    } else
      return tn(e);
  }
}
let ma = null;
function Md(e) {
  ma = e;
}
function Rd(e, t, a) {
  ma && ma.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: a
  });
}
const Bd = /* @__PURE__ */ Fd("function:translate");
function Fd(e) {
  return (t) => ma && ma.emit(e, t);
}
const ze = {
  INVALID_ARGUMENT: Xc,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_NON_STRING_MESSAGE: 20,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, Vd = 24;
function bt(e) {
  return sa(e, null, process.env.NODE_ENV !== "production" ? { messages: Ud } : void 0);
}
const Ud = {
  [ze.INVALID_ARGUMENT]: "Invalid arguments",
  [ze.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [ze.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [ze.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
  [ze.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
  [ze.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
  [ze.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function Wn(e, t) {
  return t.locale != null ? Vo(t.locale) : Vo(e.locale);
}
let an;
function Vo(e) {
  if (Y(e))
    return e;
  if (xe(e)) {
    if (e.resolvedOnce && an != null)
      return an;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Wc(t))
        throw bt(ze.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return an = t;
    } else
      throw bt(ze.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw bt(ze.NOT_SUPPORT_LOCALE_TYPE);
}
function zd(e, t, a) {
  return [.../* @__PURE__ */ new Set([
    a,
    ...Te(t) ? t : pe(t) ? Object.keys(t) : Y(t) ? [t] : [a]
  ])];
}
function tl(e, t, a) {
  const n = Y(a) ? a : Fa, o = e;
  o.__localeChainCache || (o.__localeChainCache = /* @__PURE__ */ new Map());
  let s = o.__localeChainCache.get(n);
  if (!s) {
    s = [];
    let r = [a];
    for (; Te(r); )
      r = Uo(s, r, t);
    const i = Te(t) || !fe(t) ? t : t.default ? t.default : null;
    r = Y(i) ? [i] : i, Te(r) && Uo(s, r, !1), o.__localeChainCache.set(n, s);
  }
  return s;
}
function Uo(e, t, a) {
  let n = !0;
  for (let o = 0; o < t.length && Oe(n); o++) {
    const s = t[o];
    Y(s) && (n = Gd(e, t[o], a));
  }
  return n;
}
function Gd(e, t, a) {
  let n;
  const o = t.split("-");
  do {
    const s = o.join("-");
    n = Wd(e, s, a), o.splice(-1, 1);
  } while (o.length && n === !0);
  return n;
}
function Wd(e, t, a) {
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
const jd = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Hd(e) {
  return jd.test(e);
}
function Yd(e) {
  const t = e.charCodeAt(0), a = e.charCodeAt(e.length - 1);
  return t === a && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Kd(e) {
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
function Xd(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Hd(t) ? Yd(t) : "*" + t;
}
function qd(e) {
  const t = [];
  let a = -1, n = 0, o = 0, s, r, i, u, c, g, p;
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
      if (o = 0, r === void 0 || (r = Xd(r), r === !1))
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
      if (u = Kd(s), p = Ct[n], c = p[u] || p.l || 8, c === 8 || (n = c[0], c[1] !== void 0 && (g = f[c[1]], g && (i = s, g() === !1))))
        return;
      if (n === 7)
        return t;
    }
}
const zo = /* @__PURE__ */ new Map();
function Jd(e, t) {
  return pe(e) ? e[t] : null;
}
function Zd(e, t) {
  if (!pe(e))
    return null;
  let a = zo.get(t);
  if (a || (a = qd(t), a && zo.set(t, a)), !a)
    return null;
  const n = a.length;
  let o = e, s = 0;
  for (; s < n; ) {
    const r = a[s];
    if (el.includes(r) && lt(o))
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
}, Qd = 8, ef = {
  [He.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [He.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [He.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [He.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [He.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [He.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [He.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function Ut(e, ...t) {
  return Wa(ef[e], ...t);
}
const tf = "11.2.8", Ha = -1, Fa = "en-US", Va = "", Go = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function af() {
  return {
    upper: (e, t) => t === "text" && Y(e) ? e.toUpperCase() : t === "vnode" && pe(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && Y(e) ? e.toLowerCase() : t === "vnode" && pe(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && Y(e) ? Go(e) : t === "vnode" && pe(e) && "__v_isVNode" in e ? Go(e.children) : e
  };
}
let al;
function nf(e) {
  al = e;
}
let nl;
function of(e) {
  nl = e;
}
let ol;
function sf(e) {
  ol = e;
}
let sl = null;
const lf = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  sl = e;
}, rf = /* @__NO_SIDE_EFFECTS__ */ () => sl;
let ll = null;
const Wo = (e) => {
  ll = e;
}, uf = () => ll;
let jo = 0;
function cf(e = {}) {
  const t = xe(e.onWarn) ? e.onWarn : ft, a = Y(e.version) ? e.version : tf, n = Y(e.locale) || xe(e.locale) ? e.locale : Fa, o = xe(n) ? Fa : n, s = Te(e.fallbackLocale) || fe(e.fallbackLocale) || Y(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o, r = fe(e.messages) ? e.messages : nn(o), i = fe(e.datetimeFormats) ? e.datetimeFormats : nn(o), u = fe(e.numberFormats) ? e.numberFormats : nn(o), c = Me(he(), e.modifiers, af()), g = e.pluralRules || he(), p = xe(e.missing) ? e.missing : null, f = Oe(e.missingWarn) || Ba(e.missingWarn) ? e.missingWarn : !0, S = Oe(e.fallbackWarn) || Ba(e.fallbackWarn) ? e.fallbackWarn : !0, M = !!e.fallbackFormat, E = !!e.unresolving, D = xe(e.postTranslation) ? e.postTranslation : null, y = fe(e.processor) ? e.processor : null, b = Oe(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, _ = !!e.escapeParameter, w = xe(e.messageCompiler) ? e.messageCompiler : al;
  process.env.NODE_ENV !== "production" && xe(e.messageCompiler) && Mc(Ut(He.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const N = xe(e.messageResolver) ? e.messageResolver : nl || Jd, I = xe(e.localeFallbacker) ? e.localeFallbacker : ol || zd, k = pe(e.fallbackContext) ? e.fallbackContext : void 0, B = e, Q = pe(B.__datetimeFormatters) ? B.__datetimeFormatters : /* @__PURE__ */ new Map(), Z = pe(B.__numberFormatters) ? B.__numberFormatters : /* @__PURE__ */ new Map(), oe = pe(B.__meta) ? B.__meta : {};
  jo++;
  const H = {
    version: a,
    cid: jo,
    locale: n,
    fallbackLocale: s,
    messages: r,
    modifiers: c,
    pluralRules: g,
    missing: p,
    missingWarn: f,
    fallbackWarn: S,
    fallbackFormat: M,
    unresolving: E,
    postTranslation: D,
    processor: y,
    warnHtmlMessage: b,
    escapeParameter: _,
    messageCompiler: w,
    messageResolver: N,
    localeFallbacker: I,
    fallbackContext: k,
    onWarn: t,
    __meta: oe
  };
  return H.datetimeFormats = i, H.numberFormats = u, H.__datetimeFormatters = Q, H.__numberFormatters = Z, process.env.NODE_ENV !== "production" && (H.__v_emitter = B.__v_emitter != null ? B.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && Rd(H, a, oe), H;
}
const nn = (e) => ({ [e]: he() });
function Ya(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function rl(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function jn(e, t, a, n, o) {
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
    return process.env.NODE_ENV !== "production" && rl(n, t) && r(Ut(He.NOT_FOUND_KEY, { key: t, locale: a })), t;
}
function ua(e, t, a) {
  const n = e;
  n.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, a, t);
}
function il(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function df(e, t) {
  const a = t.indexOf(e);
  if (a === -1)
    return !1;
  for (let n = a + 1; n < t.length; n++)
    if (il(e, t[n]))
      return !0;
  return !1;
}
const Ho = typeof Intl < "u", ul = {
  dateTimeFormat: Ho && typeof Intl.DateTimeFormat < "u",
  numberFormat: Ho && typeof Intl.NumberFormat < "u"
};
function Yo(e, ...t) {
  const { datetimeFormats: a, unresolving: n, fallbackLocale: o, onWarn: s, localeFallbacker: r } = e, { __datetimeFormatters: i } = e;
  if (process.env.NODE_ENV !== "production" && !ul.dateTimeFormat)
    return s(Ut(He.CANNOT_FORMAT_DATE)), Va;
  const [u, c, g, p] = dn(...t), f = Oe(g.missingWarn) ? g.missingWarn : e.missingWarn, S = Oe(g.fallbackWarn) ? g.fallbackWarn : e.fallbackWarn, M = !!g.part, E = Wn(e, g), D = r(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    E
  );
  if (!Y(u) || u === "")
    return new Intl.DateTimeFormat(E, p).format(c);
  let y = {}, b, _ = null, w = E, N = null;
  const I = "datetime format";
  for (let Q = 0; Q < D.length; Q++) {
    if (b = N = D[Q], process.env.NODE_ENV !== "production" && E !== b && Ya(S, u) && s(Ut(He.FALLBACK_TO_DATE_FORMAT, {
      key: u,
      target: b
    })), process.env.NODE_ENV !== "production" && E !== b) {
      const Z = e.__v_emitter;
      Z && Z.emit("fallback", {
        type: I,
        key: u,
        from: w,
        to: N,
        groupId: `${I}:${u}`
      });
    }
    if (y = a[b] || {}, _ = y[u], fe(_))
      break;
    jn(e, u, b, f, I), w = N;
  }
  if (!fe(_) || !Y(b))
    return n ? Ha : u;
  let k = `${b}__${u}`;
  ja(p) || (k = `${k}__${JSON.stringify(p)}`);
  let B = i.get(k);
  return B || (B = new Intl.DateTimeFormat(b, Me({}, _, p)), i.set(k, B)), M ? B.formatToParts(c) : B.format(c);
}
const cl = [
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
function dn(...e) {
  const [t, a, n, o] = e, s = he();
  let r = he(), i;
  if (Y(t)) {
    const u = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!u)
      throw bt(ze.INVALID_ISO_DATE_ARGUMENT);
    const c = u[3] ? u[3].trim().startsWith("T") ? `${u[1].trim()}${u[3].trim()}` : `${u[1].trim()}T${u[3].trim()}` : u[1].trim();
    i = new Date(c);
    try {
      i.toISOString();
    } catch {
      throw bt(ze.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Vc(t)) {
    if (isNaN(t.getTime()))
      throw bt(ze.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (Ie(t))
    i = t;
  else
    throw bt(ze.INVALID_ARGUMENT);
  return Y(a) ? s.key = a : fe(a) && Object.keys(a).forEach((u) => {
    cl.includes(u) ? r[u] = a[u] : s[u] = a[u];
  }), Y(n) ? s.locale = n : fe(n) && (r = n), fe(o) && (r = o), [s.key || "", i, s, r];
}
function Ko(e, t, a) {
  const n = e;
  for (const o in a) {
    const s = `${t}__${o}`;
    n.__datetimeFormatters.has(s) && n.__datetimeFormatters.delete(s);
  }
}
function Xo(e, ...t) {
  const { numberFormats: a, unresolving: n, fallbackLocale: o, onWarn: s, localeFallbacker: r } = e, { __numberFormatters: i } = e;
  if (process.env.NODE_ENV !== "production" && !ul.numberFormat)
    return s(Ut(He.CANNOT_FORMAT_NUMBER)), Va;
  const [u, c, g, p] = fn(...t), f = Oe(g.missingWarn) ? g.missingWarn : e.missingWarn, S = Oe(g.fallbackWarn) ? g.fallbackWarn : e.fallbackWarn, M = !!g.part, E = Wn(e, g), D = r(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    E
  );
  if (!Y(u) || u === "")
    return new Intl.NumberFormat(E, p).format(c);
  let y = {}, b, _ = null, w = E, N = null;
  const I = "number format";
  for (let Q = 0; Q < D.length; Q++) {
    if (b = N = D[Q], process.env.NODE_ENV !== "production" && E !== b && Ya(S, u) && s(Ut(He.FALLBACK_TO_NUMBER_FORMAT, {
      key: u,
      target: b
    })), process.env.NODE_ENV !== "production" && E !== b) {
      const Z = e.__v_emitter;
      Z && Z.emit("fallback", {
        type: I,
        key: u,
        from: w,
        to: N,
        groupId: `${I}:${u}`
      });
    }
    if (y = a[b] || {}, _ = y[u], fe(_))
      break;
    jn(e, u, b, f, I), w = N;
  }
  if (!fe(_) || !Y(b))
    return n ? Ha : u;
  let k = `${b}__${u}`;
  ja(p) || (k = `${k}__${JSON.stringify(p)}`);
  let B = i.get(k);
  return B || (B = new Intl.NumberFormat(b, Me({}, _, p)), i.set(k, B)), M ? B.formatToParts(c) : B.format(c);
}
const dl = [
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
function fn(...e) {
  const [t, a, n, o] = e, s = he();
  let r = he();
  if (!Ie(t))
    throw bt(ze.INVALID_ARGUMENT);
  const i = t;
  return Y(a) ? s.key = a : fe(a) && Object.keys(a).forEach((u) => {
    dl.includes(u) ? r[u] = a[u] : s[u] = a[u];
  }), Y(n) ? s.locale = n : fe(n) && (r = n), fe(o) && (r = o), [s.key || "", i, s, r];
}
function qo(e, t, a) {
  const n = e;
  for (const o in a) {
    const s = `${t}__${o}`;
    n.__numberFormatters.has(s) && n.__numberFormatters.delete(s);
  }
}
const ff = (e) => e, mf = (e) => "", pf = "text", gf = (e) => e.length === 0 ? "" : Un(e), vf = jc;
function Jo(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function hf(e) {
  const t = Ie(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Ie(e.named.count) || Ie(e.named.n)) ? Ie(e.named.count) ? e.named.count : Ie(e.named.n) ? e.named.n : t : t;
}
function bf(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function yf(e = {}) {
  const t = e.locale, a = hf(e), n = pe(e.pluralRules) && Y(t) && xe(e.pluralRules[t]) ? e.pluralRules[t] : Jo, o = pe(e.pluralRules) && Y(t) && xe(e.pluralRules[t]) ? Jo : void 0, s = (y) => y[n(a, y.length, o)], r = e.list || [], i = (y) => r[y], u = e.named || he();
  Ie(e.pluralIndex) && bf(a, u);
  const c = (y) => u[y];
  function g(y, b) {
    const _ = xe(e.messages) ? e.messages(y, !!b) : pe(e.messages) ? e.messages[y] : !1;
    return _ || (e.parent ? e.parent.message(y) : mf);
  }
  const p = (y) => e.modifiers ? e.modifiers[y] : ff, f = fe(e.processor) && xe(e.processor.normalize) ? e.processor.normalize : gf, S = fe(e.processor) && xe(e.processor.interpolate) ? e.processor.interpolate : vf, M = fe(e.processor) && Y(e.processor.type) ? e.processor.type : pf, D = {
    list: i,
    named: c,
    plural: s,
    linked: (y, ...b) => {
      const [_, w] = b;
      let N = "text", I = "";
      b.length === 1 ? pe(_) ? (I = _.modifier || I, N = _.type || N) : Y(_) && (I = _ || I) : b.length === 2 && (Y(_) && (I = _ || I), Y(w) && (N = w || N));
      const k = g(y, !0)(D), B = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        N === "vnode" && Te(k) && I ? k[0] : k
      );
      return I ? p(I)(B, N) : B;
    },
    message: g,
    type: M,
    interpolate: S,
    normalize: f,
    values: Me(he(), r, u)
  };
  return D;
}
const Zo = () => "", qe = (e) => xe(e);
function Qo(e, ...t) {
  const { fallbackFormat: a, postTranslation: n, unresolving: o, messageCompiler: s, fallbackLocale: r, messages: i } = e, [u, c] = mn(...t), g = Oe(c.missingWarn) ? c.missingWarn : e.missingWarn, p = Oe(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, f = Oe(c.escapeParameter) ? c.escapeParameter : e.escapeParameter, S = !!c.resolvedMessage, M = Y(c.default) || Oe(c.default) ? Oe(c.default) ? s ? u : () => u : c.default : a ? s ? u : () => u : null, E = a || M != null && (Y(M) || xe(M)), D = Wn(e, c);
  f && _f(c);
  let [y, b, _] = S ? [
    u,
    D,
    i[D] || he()
  ] : fl(e, u, D, r, p, g), w = y, N = u;
  if (!S && !(Y(w) || lt(w) || qe(w)) && E && (w = M, N = w), !S && (!(Y(w) || lt(w) || qe(w)) || !Y(b)))
    return o ? Ha : u;
  if (process.env.NODE_ENV !== "production" && Y(w) && e.messageCompiler == null)
    return ft(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${u}'.`), u;
  let I = !1;
  const k = () => {
    I = !0;
  }, B = qe(w) ? w : ml(e, u, b, w, N, k);
  if (I)
    return w;
  const Q = kf(e, b, _, c), Z = yf(Q), oe = wf(e, B, Z);
  let H = n ? n(oe, u) : oe;
  if (f && Y(H) && (H = zc(H)), process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const be = {
      timestamp: Date.now(),
      key: Y(u) ? u : qe(w) ? w.key : "",
      locale: b || (qe(w) ? w.locale : ""),
      format: Y(w) ? w : qe(w) ? w.source : "",
      message: H
    };
    be.meta = Me({}, e.__meta, /* @__PURE__ */ rf() || {}), Bd(be);
  }
  return H;
}
function _f(e) {
  Te(e.list) ? e.list = e.list.map((t) => Y(t) ? Do(t) : t) : pe(e.named) && Object.keys(e.named).forEach((t) => {
    Y(e.named[t]) && (e.named[t] = Do(e.named[t]));
  });
}
function fl(e, t, a, n, o, s) {
  const { messages: r, onWarn: i, messageResolver: u, localeFallbacker: c } = e, g = c(e, n, a);
  let p = he(), f, S = null, M = a, E = null;
  const D = "translate";
  for (let y = 0; y < g.length; y++) {
    if (f = E = g[y], process.env.NODE_ENV !== "production" && a !== f && !il(a, f) && Ya(o, t) && i(Ut(He.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: f
    })), process.env.NODE_ENV !== "production" && a !== f) {
      const N = e.__v_emitter;
      N && N.emit("fallback", {
        type: D,
        key: t,
        from: M,
        to: E,
        groupId: `${D}:${t}`
      });
    }
    p = r[f] || he();
    let b = null, _, w;
    if (process.env.NODE_ENV !== "production" && _t && (b = window.performance.now(), _ = "intlify-message-resolve-start", w = "intlify-message-resolve-end", Ye && Ye(_)), (S = u(p, t)) === null && (S = p[t]), process.env.NODE_ENV !== "production" && _t) {
      const N = window.performance.now(), I = e.__v_emitter;
      I && b && S && I.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: S,
        time: N - b,
        groupId: `${D}:${t}`
      }), _ && w && Ye && Vt && (Ye(w), Vt("intlify message resolve", _, w));
    }
    if (Y(S) || lt(S) || qe(S))
      break;
    if (!df(f, g)) {
      const N = jn(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        f,
        s,
        D
      );
      N !== t && (S = N);
    }
    M = E;
  }
  return [S, f, p];
}
function ml(e, t, a, n, o, s) {
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
  const p = r(n, xf(e, a, o, n, i, s));
  if (process.env.NODE_ENV !== "production" && _t) {
    const f = window.performance.now(), S = e.__v_emitter;
    S && u && S.emit("message-compilation", {
      type: "message-compilation",
      message: n,
      time: f - u,
      groupId: `translate:${t}`
    }), c && g && Ye && Vt && (Ye(g), Vt("intlify message compilation", c, g));
  }
  return p.locale = a, p.key = t, p.source = n, p;
}
function wf(e, t, a) {
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
function mn(...e) {
  const [t, a, n] = e, o = he();
  if (!Y(t) && !Ie(t) && !qe(t) && !lt(t))
    throw bt(ze.INVALID_ARGUMENT);
  const s = Ie(t) ? String(t) : (qe(t), t);
  return Ie(a) ? o.plural = a : Y(a) ? o.default = a : fe(a) && !ja(a) ? o.named = a : Te(a) && (o.list = a), Ie(n) ? o.plural = n : Y(n) ? o.default = n : fe(n) && Me(o, n), [s, o];
}
function xf(e, t, a, n, o, s) {
  return {
    locale: t,
    key: a,
    warnHtmlMessage: o,
    onError: (r) => {
      if (s && s(r), process.env.NODE_ENV !== "production") {
        const i = Ef(n), u = `Message compilation error: ${r.message}`, c = r.location && i && Hc(i, r.location.start.offset, r.location.end.offset), g = e.__v_emitter;
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
    onCacheKey: (r) => Bc(t, a, r)
  };
}
function Ef(e) {
  if (Y(e))
    return e;
  if (e.loc && e.loc.source)
    return e.loc.source;
}
function kf(e, t, a, n) {
  const { modifiers: o, pluralRules: s, messageResolver: r, fallbackLocale: i, fallbackWarn: u, missingWarn: c, fallbackContext: g } = e, f = {
    locale: t,
    modifiers: o,
    pluralRules: s,
    messages: (S, M) => {
      let E = r(a, S);
      if (E == null && (g || M)) {
        const [, , D] = fl(
          g || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          S,
          t,
          i,
          u,
          c
        );
        E = r(D, S);
      }
      if (Y(E) || lt(E)) {
        let D = !1;
        const b = ml(e, S, t, E, S, () => {
          D = !0;
        });
        return D ? Zo : b;
      } else return qe(E) ? E : Zo;
    }
  };
  return e.processor && (f.processor = e.processor), n.list && (f.list = n.list), n.named && (f.named = n.named), Ie(n.plural) && (f.pluralIndex = n.plural), f;
}
Ed();
const Cf = "11.2.8";
function Sf() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Lt().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Lt().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Lt().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Lt().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const Be = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Vd,
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
function pa(e, ...t) {
  return sa(e, null, process.env.NODE_ENV !== "production" ? { messages: Of, args: t } : void 0);
}
const Of = {
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
}, pn = /* @__PURE__ */ wt("__translateVNode"), gn = /* @__PURE__ */ wt("__datetimeParts"), vn = /* @__PURE__ */ wt("__numberParts"), hn = /* @__PURE__ */ wt("__enableEmitter"), bn = /* @__PURE__ */ wt("__disableEmitter"), Tf = wt("__setPluralRules"), pl = /* @__PURE__ */ wt("__injectWithOption"), yn = /* @__PURE__ */ wt("__dispose"), dt = {
  FALLBACK_TO_ROOT: Qd,
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
}, Nf = {
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
function Ua(e, ...t) {
  return Wa(Nf[e], ...t);
}
function ga(e) {
  if (!pe(e) || lt(e))
    return e;
  for (const t in e)
    if (st(e, t))
      if (!t.includes("."))
        pe(e[t]) && ga(e[t]);
      else {
        const a = t.split("."), n = a.length - 1;
        let o = e, s = !1;
        for (let r = 0; r < n; r++) {
          if (a[r] === "__proto__")
            throw new Error(`unsafe key: ${a[r]}`);
          if (a[r] in o || (o[a[r]] = he()), !pe(o[a[r]])) {
            process.env.NODE_ENV !== "production" && ft(Ua(dt.IGNORE_OBJ_FLATTEN, {
              key: a[r]
            })), s = !0;
            break;
          }
          o = o[a[r]];
        }
        if (s || (lt(o) ? el.includes(a[n]) || delete e[t] : (o[a[n]] = e[t], delete e[t])), !lt(o)) {
          const r = o[a[n]];
          pe(r) && ga(r);
        }
      }
  return e;
}
function gl(e, t) {
  const { messages: a, __i18n: n, messageResolver: o, flatJson: s } = t, r = fe(a) ? a : Te(n) ? he() : { [e]: he() };
  if (Te(n) && n.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: u, resource: c } = i;
      u ? (r[u] = r[u] || he(), La(c, r[u])) : La(c, r);
    } else
      Y(i) && La(JSON.parse(i), r);
  }), o == null && s)
    for (const i in r)
      st(r, i) && ga(r[i]);
  return r;
}
function vl(e) {
  return e.type;
}
function Af(e, t, a) {
  let n = pe(t.messages) ? t.messages : he();
  "__i18nGlobal" in a && (n = gl(e.locale.value, {
    messages: n,
    __i18n: a.__i18nGlobal
  }));
  const o = Object.keys(n);
  o.length && o.forEach((s) => {
    e.mergeLocaleMessage(s, n[s]);
  });
  {
    if (pe(t.datetimeFormats)) {
      const s = Object.keys(t.datetimeFormats);
      s.length && s.forEach((r) => {
        e.mergeDateTimeFormat(r, t.datetimeFormats[r]);
      });
    }
    if (pe(t.numberFormats)) {
      const s = Object.keys(t.numberFormats);
      s.length && s.forEach((r) => {
        e.mergeNumberFormat(r, t.numberFormats[r]);
      });
    }
  }
}
function es(e) {
  return x(Vl, null, e, 0);
}
function Hn() {
  const e = "currentInstance";
  return e in Xa ? Xa[e] : Xa.getCurrentInstance();
}
const ts = "__INTLIFY_META__", as = () => [], Pf = () => !1;
let ns = 0;
function os(e) {
  return ((t, a, n, o) => e(a, n, Hn() || void 0, o));
}
const $f = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = Hn();
  let t = null;
  return e && (t = vl(e)[ts]) ? { [ts]: t } : null;
};
function Df(e = {}) {
  const { __root: t, __injectWithOption: a } = e, n = t === void 0, o = e.flatJson, s = _t ? le : yt;
  let r = Oe(e.inheritLocale) ? e.inheritLocale : !0;
  const i = s(
    // prettier-ignore
    t && r ? t.locale.value : Y(e.locale) ? e.locale : Fa
  ), u = s(
    // prettier-ignore
    t && r ? t.fallbackLocale.value : Y(e.fallbackLocale) || Te(e.fallbackLocale) || fe(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i.value
  ), c = s(gl(i.value, e)), g = s(fe(e.datetimeFormats) ? e.datetimeFormats : { [i.value]: {} }), p = s(fe(e.numberFormats) ? e.numberFormats : { [i.value]: {} });
  let f = t ? t.missingWarn : Oe(e.missingWarn) || Ba(e.missingWarn) ? e.missingWarn : !0, S = t ? t.fallbackWarn : Oe(e.fallbackWarn) || Ba(e.fallbackWarn) ? e.fallbackWarn : !0, M = t ? t.fallbackRoot : Oe(e.fallbackRoot) ? e.fallbackRoot : !0, E = !!e.fallbackFormat, D = xe(e.missing) ? e.missing : null, y = xe(e.missing) ? os(e.missing) : null, b = xe(e.postTranslation) ? e.postTranslation : null, _ = t ? t.warnHtmlMessage : Oe(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, w = !!e.escapeParameter;
  const N = t ? t.modifiers : fe(e.modifiers) ? e.modifiers : {};
  let I = e.pluralRules || t && t.pluralRules, k;
  k = (() => {
    n && Wo(null);
    const T = {
      version: Cf,
      locale: i.value,
      fallbackLocale: u.value,
      messages: c.value,
      modifiers: N,
      pluralRules: I,
      missing: y === null ? void 0 : y,
      missingWarn: f,
      fallbackWarn: S,
      fallbackFormat: E,
      unresolving: !0,
      postTranslation: b === null ? void 0 : b,
      warnHtmlMessage: _,
      escapeParameter: w,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    T.datetimeFormats = g.value, T.numberFormats = p.value, T.__datetimeFormatters = fe(k) ? k.__datetimeFormatters : void 0, T.__numberFormatters = fe(k) ? k.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (T.__v_emitter = fe(k) ? k.__v_emitter : void 0);
    const F = cf(T);
    return n && Wo(F), F;
  })(), ua(k, i.value, u.value);
  function Q() {
    return [
      i.value,
      u.value,
      c.value,
      g.value,
      p.value
    ];
  }
  const Z = V({
    get: () => i.value,
    set: (T) => {
      k.locale = T, i.value = T;
    }
  }), oe = V({
    get: () => u.value,
    set: (T) => {
      k.fallbackLocale = T, u.value = T, ua(k, i.value, T);
    }
  }), H = V(() => c.value), be = /* @__PURE__ */ V(() => g.value), C = /* @__PURE__ */ V(() => p.value);
  function U() {
    return xe(b) ? b : null;
  }
  function O(T) {
    b = T, k.postTranslation = T;
  }
  function ge() {
    return D;
  }
  function W(T) {
    T !== null && (y = os(T)), D = T, k.missing = y;
  }
  function Fe(T, F) {
    return T !== "translate" || !F.resolvedMessage;
  }
  const Ve = (T, F, ue, _e, ot, At) => {
    Q();
    let je;
    try {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, n || (k.fallbackContext = t ? uf() : void 0), je = T(k);
    } finally {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, n || (k.fallbackContext = void 0);
    }
    if (ue !== "translate exists" && // for not `te` (e.g `t`)
    Ie(je) && je === Ha || ue === "translate exists" && !je) {
      const [rt, Ka] = F();
      if (process.env.NODE_ENV !== "production" && t && Y(rt) && Fe(ue, Ka) && (M && (Ya(S, rt) || rl(f, rt)) && ft(Ua(dt.FALLBACK_TO_ROOT, {
        key: rt,
        type: ue
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: it } = k;
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
      throw pa(Be.UNEXPECTED_RETURN_TYPE);
    }
  };
  function Ze(...T) {
    return Ve((F) => Reflect.apply(Qo, null, [F, ...T]), () => mn(...T), "translate", (F) => Reflect.apply(F.t, F, [...T]), (F) => F, (F) => Y(F));
  }
  function mt(...T) {
    const [F, ue, _e] = T;
    if (_e && !pe(_e))
      throw pa(Be.INVALID_ARGUMENT);
    return Ze(F, ue, Me({ resolvedMessage: !0 }, _e || {}));
  }
  function Se(...T) {
    return Ve((F) => Reflect.apply(Yo, null, [F, ...T]), () => dn(...T), "datetime format", (F) => Reflect.apply(F.d, F, [...T]), () => Va, (F) => Y(F) || Te(F));
  }
  function $e(...T) {
    return Ve((F) => Reflect.apply(Xo, null, [F, ...T]), () => fn(...T), "number format", (F) => Reflect.apply(F.n, F, [...T]), () => Va, (F) => Y(F) || Te(F));
  }
  function Qe(T) {
    return T.map((F) => Y(F) || Ie(F) || Oe(F) ? es(String(F)) : F);
  }
  const ye = {
    normalize: Qe,
    interpolate: (T) => T,
    type: "vnode"
  };
  function Xe(...T) {
    return Ve((F) => {
      let ue;
      const _e = F;
      try {
        _e.processor = ye, ue = Reflect.apply(Qo, null, [_e, ...T]);
      } finally {
        _e.processor = null;
      }
      return ue;
    }, () => mn(...T), "translate", (F) => F[pn](...T), (F) => [es(F)], (F) => Te(F));
  }
  function et(...T) {
    return Ve((F) => Reflect.apply(Xo, null, [F, ...T]), () => fn(...T), "number format", (F) => F[vn](...T), as, (F) => Y(F) || Te(F));
  }
  function tt(...T) {
    return Ve((F) => Reflect.apply(Yo, null, [F, ...T]), () => dn(...T), "datetime format", (F) => F[gn](...T), as, (F) => Y(F) || Te(F));
  }
  function pt(T) {
    I = T, k.pluralRules = I;
  }
  function at(T, F) {
    return Ve(() => {
      if (!T)
        return !1;
      const ue = Y(F) ? F : i.value, _e = gt(ue), ot = k.messageResolver(_e, T);
      return lt(ot) || qe(ot) || Y(ot);
    }, () => [T], "translate exists", (ue) => Reflect.apply(ue.te, ue, [T, F]), Pf, (ue) => Oe(ue));
  }
  function nt(T) {
    let F = null;
    const ue = tl(k, u.value, i.value);
    for (let _e = 0; _e < ue.length; _e++) {
      const ot = c.value[ue[_e]] || {}, At = k.messageResolver(ot, T);
      if (At != null) {
        F = At;
        break;
      }
    }
    return F;
  }
  function Tt(T) {
    const F = nt(T);
    return F ?? (t ? t.tm(T) || {} : {});
  }
  function gt(T) {
    return c.value[T] || {};
  }
  function Nt(T, F) {
    if (o) {
      const ue = { [T]: F };
      for (const _e in ue)
        st(ue, _e) && ga(ue[_e]);
      F = ue[T];
    }
    c.value[T] = F, k.messages = c.value;
  }
  function la(T, F) {
    c.value[T] = c.value[T] || {};
    const ue = { [T]: F };
    if (o)
      for (const _e in ue)
        st(ue, _e) && ga(ue[_e]);
    F = ue[T], La(F, c.value[T]), k.messages = c.value;
  }
  function d(T) {
    return g.value[T] || {};
  }
  function v(T, F) {
    g.value[T] = F, k.datetimeFormats = g.value, Ko(k, T, F);
  }
  function $(T, F) {
    g.value[T] = Me(g.value[T] || {}, F), k.datetimeFormats = g.value, Ko(k, T, F);
  }
  function z(T) {
    return p.value[T] || {};
  }
  function se(T, F) {
    p.value[T] = F, k.numberFormats = p.value, qo(k, T, F);
  }
  function ie(T, F) {
    p.value[T] = Me(p.value[T] || {}, F), k.numberFormats = p.value, qo(k, T, F);
  }
  ns++, t && _t && (Re(t.locale, (T) => {
    r && (i.value = T, k.locale = T, ua(k, i.value, u.value));
  }), Re(t.fallbackLocale, (T) => {
    r && (u.value = T, k.fallbackLocale = T, ua(k, i.value, u.value));
  }));
  const ne = {
    id: ns,
    locale: Z,
    fallbackLocale: oe,
    get inheritLocale() {
      return r;
    },
    set inheritLocale(T) {
      r = T, T && t && (i.value = t.locale.value, u.value = t.fallbackLocale.value, ua(k, i.value, u.value));
    },
    get availableLocales() {
      return Object.keys(c.value).sort();
    },
    messages: H,
    get modifiers() {
      return N;
    },
    get pluralRules() {
      return I || {};
    },
    get isGlobal() {
      return n;
    },
    get missingWarn() {
      return f;
    },
    set missingWarn(T) {
      f = T, k.missingWarn = f;
    },
    get fallbackWarn() {
      return S;
    },
    set fallbackWarn(T) {
      S = T, k.fallbackWarn = S;
    },
    get fallbackRoot() {
      return M;
    },
    set fallbackRoot(T) {
      M = T;
    },
    get fallbackFormat() {
      return E;
    },
    set fallbackFormat(T) {
      E = T, k.fallbackFormat = E;
    },
    get warnHtmlMessage() {
      return _;
    },
    set warnHtmlMessage(T) {
      _ = T, k.warnHtmlMessage = T;
    },
    get escapeParameter() {
      return w;
    },
    set escapeParameter(T) {
      w = T, k.escapeParameter = T;
    },
    t: Ze,
    getLocaleMessage: gt,
    setLocaleMessage: Nt,
    mergeLocaleMessage: la,
    getPostTranslationHandler: U,
    setPostTranslationHandler: O,
    getMissingHandler: ge,
    setMissingHandler: W,
    [Tf]: pt
  };
  return ne.datetimeFormats = be, ne.numberFormats = C, ne.rt = mt, ne.te = at, ne.tm = Tt, ne.d = Se, ne.n = $e, ne.getDateTimeFormat = d, ne.setDateTimeFormat = v, ne.mergeDateTimeFormat = $, ne.getNumberFormat = z, ne.setNumberFormat = se, ne.mergeNumberFormat = ie, ne[pl] = a, ne[pn] = Xe, ne[gn] = tt, ne[vn] = et, process.env.NODE_ENV !== "production" && (ne[hn] = (T) => {
    k.__v_emitter = T;
  }, ne[bn] = () => {
    k.__v_emitter = void 0;
  }), ne;
}
function ss(e, t) {
}
const Yn = {
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
function Lf({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((n, o) => [
    ...n,
    // prettier-ignore
    ...o.type === me ? o.children : [o]
  ], []) : t.reduce((a, n) => {
    const o = e[n];
    return o && (a[n] = o()), a;
  }, he());
}
function hl() {
  return me;
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
}, Yn);
function If(e) {
  return Te(e) && !Y(e[0]);
}
function bl(e, t, a, n) {
  const { slots: o, attrs: s } = t;
  return () => {
    const r = { part: !0 };
    let i = he();
    e.locale && (r.locale = e.locale), Y(e.format) ? r.key = e.format : pe(e.format) && (Y(e.format.key) && (r.key = e.format.key), i = Object.keys(e.format).reduce((f, S) => a.includes(S) ? Me(he(), f, { [S]: e.format[S] }) : f, he()));
    const u = n(e.value, r, i);
    let c = [r.key];
    Te(u) ? c = u.map((f, S) => {
      const M = o[f.type], E = M ? M({ [f.type]: f.value, index: S, parts: u }) : [f.value];
      return If(E) && (E[0].key = `${f.type}-${S}`), E;
    }) : Y(u) && (c = [u]);
    const g = Me(he(), s), p = Y(e.tag) || pe(e.tag) ? e.tag : hl();
    return Jt(p, g, c);
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
}, Yn);
const Mf = /* @__PURE__ */ wt("global-vue-i18n");
function St(e = {}) {
  const t = Hn();
  if (t == null)
    throw pa(Be.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw pa(Be.NOT_INSTALLED);
  const a = Rf(t), n = Ff(a), o = vl(t), s = Bf(e, o);
  if (s === "global")
    return Af(n, e, o), n;
  if (s === "parent") {
    let u = Vf(a, t, e.__useComponent);
    return u == null && (process.env.NODE_ENV !== "production" && ft(Ua(dt.NOT_FOUND_PARENT_SCOPE)), u = n), u;
  }
  const r = a;
  let i = r.__getInstance(t);
  if (i == null) {
    const u = Me({}, e);
    "__i18n" in o && (u.__i18n = o.__i18n), n && (u.__root = n), i = Df(u), r.__composerExtend && (i[yn] = r.__composerExtend(i)), zf(r, t, i), r.__setInstance(t, i);
  } else
    process.env.NODE_ENV !== "production" && s === "local" && ft(Ua(dt.DUPLICATE_USE_I18N_CALLING));
  return i;
}
function Rf(e) {
  const t = Zt(e.isCE ? Mf : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw pa(e.isCE ? Be.NOT_INSTALLED_WITH_PROVIDE : Be.UNEXPECTED_ERROR);
  return t;
}
function Bf(e, t) {
  return ja(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Ff(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function Vf(e, t, a = !1) {
  let n = null;
  const o = t.root;
  let s = Uf(t, a);
  for (; s != null; ) {
    const r = e;
    if (e.mode === "composition")
      n = r.__getInstance(s);
    else if (__VUE_I18N_LEGACY_API__) {
      const i = r.__getInstance(s);
      i != null && (n = i.__composer, a && n && !n[pl] && (n = null));
    }
    if (n != null || o === s)
      break;
    s = s.parent;
  }
  return n;
}
function Uf(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function zf(e, t, a) {
  let n = null;
  Gt(() => {
    if (process.env.NODE_ENV !== "production") {
      t.__VUE_I18N__ = a, n = Yc();
      const o = a;
      o[hn] && o[hn](n), n.on("*", ss);
    }
  }, t), _n(() => {
    const o = a;
    process.env.NODE_ENV !== "production" && (n && n.off("*", ss), o[bn] && o[bn](), delete t.__VUE_I18N__), e.__deleteInstance(t);
    const s = o[yn];
    s && (s(), delete o[yn]);
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
}, Yn);
Sf();
nf(Id);
of(Zd);
sf(tl);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = Lt();
  e.__INTLIFY__ = !0, Md(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
const Gf = ["colspan"], Kn = /* @__PURE__ */ P({
  __name: "DataTableEmpty",
  setup(e) {
    const t = Ht(), { t: a } = St();
    return (n, o) => (m(), R("tr", null, [
      q("td", {
        colspan: l(t).colNum.value
      }, [
        x(l(Tc), null, {
          default: h(() => [
            x(l(Pc), null, {
              default: h(() => [
                x(l(Dc), { variant: "icon" }, {
                  default: h(() => [
                    x(l(ws))
                  ]),
                  _: 1
                }),
                x(l(Ic), null, {
                  default: h(() => [
                    de(J(l(a)("dataTable.noEntriesFound")), 1)
                  ]),
                  _: 1
                }),
                x(l(Ac), null, {
                  default: h(() => [
                    de(J(l(a)("dataTable.noEntriesFoundDescription")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            x(l(Nc), null, {
              default: h(() => [
                L(n.$slots, "default")
              ]),
              _: 3
            })
          ]),
          _: 3
        })
      ], 8, Gf)
    ]));
  }
}), Wf = /* @__PURE__ */ P({
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
    return (r, i) => (m(), A(l(tr), j({ "data-slot": "pagination" }, l(s), {
      class: l(G)("mx-auto flex w-full justify-center", a.class)
    }), {
      default: h((u) => [
        L(r.$slots, "default", Mt(ta(u)))
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), jf = /* @__PURE__ */ P({
  __name: "PaginationContent",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ce(t, "class");
    return (n, o) => (m(), A(l(ar), j({ "data-slot": "pagination-content" }, l(a), {
      class: l(G)("flex flex-row items-center gap-1", t.class)
    }), {
      default: h((s) => [
        L(n.$slots, "default", Mt(ta(s)))
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Hf = (e, t) => t, Yf = /* @__PURE__ */ Symbol("brink-component-translation");
function We() {
  return Zt(Yf, null) ?? Hf;
}
const Kf = { class: "hidden sm:block" }, Xf = /* @__PURE__ */ P({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, a = ce(t, "class", "size"), n = Je(a), o = We();
    return (s, r) => (m(), A(l(nr), j({
      "data-slot": "pagination-first",
      class: l(G)(l(Et)({ variant: "outline", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, l(n)), {
      default: h(() => [
        L(s.$slots, "default", {}, () => [
          x(l(ys), { class: "size-4" }),
          q("span", Kf, J(l(o)("pagination.first", "First")), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), qf = { class: "hidden sm:block" }, Jf = /* @__PURE__ */ P({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, a = ce(t, "class", "size"), n = Je(a), o = We();
    return (s, r) => (m(), A(l(or), j({
      "data-slot": "pagination-last",
      class: l(G)(l(Et)({ variant: "outline", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, l(n)), {
      default: h(() => [
        L(s.$slots, "default", {}, () => [
          q("span", qf, J(l(o)("pagination.last", "Last")), 1),
          x(l(_s), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Zf = { class: "hidden sm:block" }, Qf = /* @__PURE__ */ P({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, a = ce(t, "class", "size"), n = Je(a), o = We();
    return (s, r) => (m(), A(l(sr), j({
      "data-slot": "pagination-next",
      class: l(G)(l(Et)({ variant: "outline", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, l(n)), {
      default: h(() => [
        L(s.$slots, "default", {}, () => [
          q("span", Zf, J(l(o)("pagination.next", "Next")), 1),
          x(l(Wt))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), em = { class: "hidden sm:block" }, tm = /* @__PURE__ */ P({
  __name: "PaginationPrevious",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, a = ce(t, "class", "size"), n = Je(a), o = We();
    return (s, r) => (m(), A(l(lr), j({
      "data-slot": "pagination-previous",
      class: l(G)(l(Et)({ variant: "outline", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, l(n)), {
      default: h(() => [
        L(s.$slots, "default", {}, () => [
          x(l(bs)),
          q("span", em, J(l(o)("pagination.previous", "Previous")), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), am = /* @__PURE__ */ P({
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
    return (s, r) => (m(), A(l(rr), j({ "data-slot": "select" }, l(o)), {
      default: h(() => [
        L(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), nm = /* @__PURE__ */ P({
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
    return (r, i) => (m(), A(l(ir), null, {
      default: h(() => [
        x(l(ur), j({ "data-slot": "select-content" }, { ...l(s), ...r.$attrs }, {
          class: l(G)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--reka-select-content-available-height) min-w-[8rem] overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
            e.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            a.class
          )
        }), {
          default: h(() => [
            x(l(rm)),
            x(l(cr), {
              class: te(l(G)("p-1", e.position === "popper" && "h-[var(--reka-select-trigger-height)] w-full min-w-[var(--reka-select-trigger-width)] scroll-my-1"))
            }, {
              default: h(() => [
                L(r.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            x(l(lm))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), om = { class: "absolute right-2 flex size-3.5 items-center justify-center" }, sm = /* @__PURE__ */ P({
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
    return (o, s) => (m(), A(l(dr), j({ "data-slot": "select-item" }, l(n), {
      class: l(G)(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        t.class
      )
    }), {
      default: h(() => [
        q("span", om, [
          x(l(fr), null, {
            default: h(() => [
              x(l(Ga), { class: "size-4" })
            ]),
            _: 1
          })
        ]),
        x(l(mr), null, {
          default: h(() => [
            L(o.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), lm = /* @__PURE__ */ P({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ce(t, "class"), n = Je(a);
    return (o, s) => (m(), A(l(pr), j({ "data-slot": "select-scroll-down-button" }, l(n), {
      class: l(G)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: h(() => [
        L(o.$slots, "default", {}, () => [
          x(l(aa), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), rm = /* @__PURE__ */ P({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ce(t, "class"), n = Je(a);
    return (o, s) => (m(), A(l(gr), j({ "data-slot": "select-scroll-up-button" }, l(n), {
      class: l(G)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: h(() => [
        L(o.$slots, "default", {}, () => [
          x(l(Zr), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), im = /* @__PURE__ */ P({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), A(l(vr), j({ "data-slot": "select-value" }, t), {
      default: h(() => [
        L(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Xn = /* @__PURE__ */ P({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ce(t, "class");
    return (n, o) => (m(), A(l(hr), j({ "data-slot": "dropdown-menu-separator" }, l(a), {
      class: l(G)("bg-border -mx-1 my-1 h-px", t.class)
    }), null, 16, ["class"]));
  }
}), um = {
  key: 0,
  class: "text-xs font-semibold px-2 py-2"
}, cm = { key: 1 }, dm = {
  key: 0,
  class: "-mt-2"
}, qn = /* @__PURE__ */ P({
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
    const t = e, a = We(), n = ve(e, "modelValue"), o = V(() => Object.fromEntries(we(t.options).map((u) => [u.value, u]))), s = V(() => n.value ? t.multiple ? Array.isArray(n.value) ? n.value.map((u) => o.value[u]).filter(Boolean) : [] : o.value[n.value] ? [o.value[n.value]] : [] : []);
    function r() {
      n.value = t.initialValues ?? (t.multiple ? [] : void 0);
    }
    const i = V(
      () => t.initialValues === void 0 ? n.value !== void 0 : JSON.stringify(t.initialValues) !== JSON.stringify(n.value)
    );
    return (u, c) => (m(), R(me, null, [
      x(l(am), {
        modelValue: n.value,
        "onUpdate:modelValue": c[1] || (c[1] = (g) => n.value = g),
        multiple: e.multiple,
        disabled: e.disabled
      }, {
        default: h(() => [
          x(l(br), j({
            class: l(G)(
              "w-full data-[placeholder]:text-muted-foreground ",
              t.class
            )
          }, u.$attrs, {
            disabled: e.disabled,
            "as-child": ""
          }), {
            default: h(() => [
              x(zs, { variant: "outline" }, {
                default: h(() => [
                  L(u.$slots, "default", { selectedOptions: s.value }, () => [
                    x(l(im), {
                      placeholder: e.placeholder || l(a)("common.select", "Select"),
                      class: "flex-wrap"
                    }, {
                      default: h(() => [
                        e.customValueComponent && s.value.length > 0 ? (m(!0), R(me, { key: 0 }, Ee(s.value, (g) => (m(), A(Ke(e.customValueComponent), j({
                          key: g.value,
                          option: g,
                          "selected-options": s.value
                        }, { ref_for: !0 }, e.customValueProps), null, 16, ["option", "selected-options"]))), 128)) : ee("", !0)
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
          x(l(nm), null, {
            default: h(() => [
              e.label ? (m(), R("div", um, J(e.label), 1)) : ee("", !0),
              (m(!0), R(me, null, Ee(we(e.options), (g) => (m(), A(l(sm), {
                key: String(g.value),
                value: g.value,
                disabled: e.disabled
              }, {
                default: h(() => [
                  de(J(g.label), 1)
                ]),
                _: 2
              }, 1032, ["value", "disabled"]))), 128)),
              e.showResetButton && i.value ? (m(), R("div", cm, [
                x(Xn),
                x(Ge, {
                  class: "w-full",
                  variant: "ghost",
                  size: "sm",
                  disabled: e.disabled,
                  onClick: c[0] || (c[0] = (g) => r())
                }, {
                  default: h(() => [
                    x(l(ai)),
                    de(" " + J(l(a)("common.reset", "Reset")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ])) : ee("", !0)
            ]),
            _: 1
          })
        ]),
        _: 3
      }, 8, ["modelValue", "multiple", "disabled"]),
      e.showAddItemButton ? (m(), R("div", dm, [
        x(Ge, {
          size: "sm",
          class: "sticky bottom-0",
          variant: "ghost",
          disabled: e.disabled,
          onClick: c[2] || (c[2] = (g) => u.$emit("onAddItem"))
        }, {
          default: h(() => [
            x(l(Nn)),
            de(" " + J(l(a)("common.addItem", "Add Item")), 1)
          ]),
          _: 1
        }, 8, ["disabled"])
      ])) : ee("", !0)
    ], 64));
  }
}), fm = {
  key: 0,
  class: "flex items-center gap-2 min-w-0"
}, mm = { class: "text-sm text-muted-foreground hidden truncate @xl:block" }, pm = { class: "text-sm truncate min-w-0 mr-2 text-muted-foreground" }, gm = { class: "hidden @2xl:block" }, vm = { class: "@2xl:hidden" }, hm = /* @__PURE__ */ P({
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
    return (u, c) => (m(), R("div", null, [
      x(l(Wf), j(l(s), { class: "flex items-center gap-4 @xl:gap-8 @4xl:gap-12" }), {
        default: h(({ page: g, pageCount: p }) => [
          e.hideItemsPerPage ? ee("", !0) : (m(), R("div", fm, [
            q("span", mm, J(l(i)("dataTable.rowsPerPage")), 1),
            x(qn, {
              class: "!w-auto",
              options: e.pageSizeOptions.map((f) => ({ value: f, label: `${f}` })),
              "model-value": r.value,
              "onUpdate:modelValue": c[0] || (c[0] = (f) => r.value = f)
            }, null, 8, ["options", "model-value"])
          ])),
          x(l(jf), null, {
            default: h(() => [
              q("div", pm, [
                q("span", gm, J(l(i)("dataTable.pageOf", { page: g, pageCount: p })), 1),
                q("span", vm, J(g) + " / " + J(p), 1)
              ]),
              x(l(Xf), null, {
                default: h(() => [
                  x(l(ys), { class: "size-4" })
                ]),
                _: 1
              }),
              x(l(tm), null, {
                default: h(() => [
                  x(l(bs))
                ]),
                _: 1
              }),
              x(l(Qf), { variant: "outline" }, {
                default: h(() => [
                  x(l(Wt))
                ]),
                _: 1
              }),
              x(l(Jf), { variant: "outline" }, {
                default: h(() => [
                  x(l(_s), { class: "size-4" })
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
}), bm = { key: 0 }, ym = { class: "flex gap-2 items-center min-w-0" }, _m = { class: "text-sm mr-2 line-clamp-1 min-w-0 text-muted-foreground" }, wm = { key: 1 }, xm = { class: "text-sm line-clamp-1 text-muted-foreground" }, Em = {
  key: 2,
  class: "flex flex-1 justify-end items-center gap-4"
}, yl = /* @__PURE__ */ P({
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
    return (s, r) => l(n).hasItems.value ? (m(), R("div", {
      key: 0,
      class: te(["@container sticky bottom-0 right-0 w-full gap-2 flex items-center bg-background px-0 py-3 z-10 transition-[left] duration-200 ease-linear", { "!px-6": !e.bordered }])
    }, [
      l(n).selectMode === "multiselect" && l(n).selected.value.length > 0 ? (m(), R("div", bm, [
        q("div", ym, [
          q("span", _m, J(l(o)("dataTable.elementsSelected", { count: l(n).selected.value.length, total: l(n).items.length })), 1),
          l(n).selected.value.length > 0 ? L(s.$slots, "bulk", {
            key: 0,
            selected: l(n).selected.value
          }) : ee("", !0)
        ])
      ])) : l(n).selected.value.length === 0 && e.total !== void 0 ? (m(), R("div", wm, [
        q("span", xm, J(l(o)("dataTable.totalElements", { total: e.total })), 1)
      ])) : ee("", !0),
      e.total !== void 0 ? (m(), R("div", Em, [
        a.value ? (m(), A(hm, {
          key: 0,
          page: t.value,
          "onUpdate:page": r[0] || (r[0] = (i) => t.value = i),
          "items-per-page": a.value,
          "onUpdate:itemsPerPage": r[1] || (r[1] = (i) => a.value = i),
          "page-size-options": e.pageSizeOptions || [],
          "hide-items-per-page": l(n).selected.value.length > 0 || e.pageSizeOptions && e.pageSizeOptions.length < 2,
          total: e.total,
          disabled: l(n).isPending
        }, null, 8, ["page", "items-per-page", "page-size-options", "hide-items-per-page", "total", "disabled"])) : ee("", !0)
      ])) : ee("", !0)
    ], 2)) : ee("", !0);
  }
}), va = /* @__PURE__ */ P({
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
    return (r, i) => (m(), A(l(yr), j(l(s), {
      class: l(G)(
        "grid place-content-center peer h-4.5 w-4.5 shrink-0 rounded-sm border-input border  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        a.class
      )
    }), {
      default: h(() => [
        x(l(_r), { class: "grid place-content-center text-current" }, {
          default: h(() => [
            L(r.$slots, "default", {}, () => [
              x(l(Ga), {
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
}), _l = /* @__PURE__ */ P({
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
    return (s, r) => (m(), A(l(wr), j({ "data-slot": "dropdown-menu" }, l(o)), {
      default: h(() => [
        L(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), km = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, Cm = /* @__PURE__ */ P({
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
    return (r, i) => (m(), A(l(xr), j({ "data-slot": "dropdown-menu-checkbox-item" }, l(s), {
      class: l(G)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: h(() => [
        q("span", km, [
          x(l(Er), null, {
            default: h(() => [
              x(l(Ga), { class: "size-4" })
            ]),
            _: 1
          })
        ]),
        L(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), wl = /* @__PURE__ */ P({
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
    return (r, i) => (m(), A(l(kr), null, {
      default: h(() => [
        x(l(Cr), j({ "data-slot": "dropdown-menu-content" }, l(s), {
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
}), Aa = /* @__PURE__ */ P({
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
    return (o, s) => (m(), A(l(Sr), j({
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
}), Sm = /* @__PURE__ */ P({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(e) {
    const t = e, a = ce(t, "class", "inset"), n = Je(a);
    return (o, s) => (m(), A(l(Or), j({
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
}), xl = /* @__PURE__ */ P({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const a = Je(e);
    return (n, o) => (m(), A(l(Tr), j({ "data-slot": "dropdown-menu-trigger" }, l(a)), {
      default: h(() => [
        L(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Om = /* @__PURE__ */ P({
  __name: "DataTableColumnHeader",
  props: {
    title: {},
    sortable: { type: Boolean, default: !1 },
    sortOrder: {},
    hideable: { type: Boolean, default: !0 }
  },
  emits: ["sort", "hide"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = We(), s = V(() => a.sortOrder ? a.sortOrder === "asc" ? ro : lo : Qr);
    function r(u) {
      n("sort", u);
    }
    function i() {
      n("hide");
    }
    return (u, c) => !e.sortable && !e.hideable ? (m(), R("div", {
      key: 0,
      class: te(l(G)("flex items-center font-normal text-xs space-x-2"))
    }, [
      q("span", null, J(e.title), 1)
    ], 2)) : (m(), R("div", {
      key: 1,
      class: te(l(G)("flex items-center space-x-2"))
    }, [
      x(l(_l), null, {
        default: h(() => [
          x(l(xl), { "as-child": "" }, {
            default: h(() => [
              x(l(Ge), {
                variant: "ghost",
                size: "sm",
                class: "-ml-3 h-8 data-[state=open]:bg-accent text-muted-foreground text-xs font-normal"
              }, {
                default: h(() => [
                  q("span", null, J(e.title), 1),
                  e.sortable ? (m(), A(Ke(s.value), {
                    key: 0,
                    class: "ml-2 !h-3.5 !w-3.5"
                  })) : ee("", !0)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          x(l(wl), { align: "start" }, {
            default: h(() => [
              e.sortable ? (m(), R(me, { key: 0 }, [
                x(l(Aa), {
                  onClick: c[0] || (c[0] = (g) => r("asc"))
                }, {
                  default: h(() => [
                    x(l(ro), { class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                    de(" " + J(l(o)("datatable.sort.asc", "Asc")), 1)
                  ]),
                  _: 1
                }),
                x(l(Aa), {
                  onClick: c[1] || (c[1] = (g) => r("desc"))
                }, {
                  default: h(() => [
                    x(l(lo), { class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                    de(" " + J(l(o)("datatable.sort.desc", "Desc")), 1)
                  ]),
                  _: 1
                }),
                e.sortOrder ? (m(), A(l(Aa), {
                  key: 0,
                  onClick: c[2] || (c[2] = (g) => r(void 0))
                }, {
                  default: h(() => [
                    x(l(Jr), { class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                    de(" " + J(l(o)("datatable.sort.clear", "Clear sort")), 1)
                  ]),
                  _: 1
                })) : ee("", !0)
              ], 64)) : ee("", !0),
              e.sortable && e.hideable ? (m(), A(l(Xn), { key: 1 })) : ee("", !0),
              e.hideable ? (m(), A(l(Aa), {
                key: 2,
                onClick: i
              }, {
                default: h(() => [
                  x(l(ei), { class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                  de(" " + J(l(o)("datatable.hide", "Hide")), 1)
                ]),
                _: 1
              })) : ee("", !0)
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ], 2));
  }
}), Tm = { class: "text-left" }, Nm = {
  key: 0,
  class: "!w-6 !pr-0"
}, Am = {
  key: 1,
  class: "!w-6"
}, Pm = { key: 2 }, Jn = /* @__PURE__ */ P({
  __name: "DataTableHeader",
  props: {
    visibleColumns: {}
  },
  emits: ["update:visibleColumns"],
  setup(e, { emit: t }) {
    const a = t, n = Ht();
    return (o, s) => {
      const r = Ul("tooltip");
      return m(), R("thead", Tm, [
        q("tr", null, [
          l(n).expandable ? (m(), R("th", Nm, [
            gs((m(), A(Ge, {
              type: "button",
              size: "sm",
              variant: "ghost",
              class: "h-6 w-6 p-0 -mr-1 [&:not(:hover)]:opacity-0",
              onClick: s[0] || (s[0] = (i) => l(n).toggleExpandAll())
            }, {
              default: h(() => [
                (m(), A(Ke(l(n).allExpandedState.value ? l(aa) : l(Wt))))
              ]),
              _: 1
            })), [
              [r, "Toggle collapse"]
            ])
          ])) : ee("", !0),
          l(n).selectMode === "multiselect" ? (m(), R("th", Am, [
            x(l(va), {
              "model-value": l(n).allSelectedState.value,
              "onUpdate:modelValue": s[1] || (s[1] = () => l(n).toggleAllSelected())
            }, null, 8, ["model-value"])
          ])) : ee("", !0),
          (m(!0), R(me, null, Ee(l(n).filteredColumns.value, (i) => (m(), R("th", {
            key: i.id
          }, [
            x(Om, {
              title: i.title ?? l(Cc)(i.id),
              sortable: l(n).sortable && i.sortable,
              "sort-order": l(n).sortBy?.value?.key === i.id ? l(n).sortBy.value.order : void 0,
              hideable: i.hideable ?? !0,
              onSort: (u) => u ? l(n).updateSort(i.id) : l(n).sortBy.value = void 0,
              onHide: () => a("update:visibleColumns", e.visibleColumns?.filter((u) => u !== i.id) || [])
            }, null, 8, ["title", "sortable", "sort-order", "hideable", "onSort", "onHide"])
          ]))), 128)),
          l(n).hasActionsColumn ? (m(), R("th", Pm)) : ee("", !0)
        ])
      ]);
    };
  }
}), El = /* @__PURE__ */ P({
  __name: "Spinner",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), A(l(ti), {
      role: "status",
      "aria-label": "Loading",
      class: te(l(G)("size-4 animate-spin", t.class))
    }, null, 8, ["class"]));
  }
}), $m = { class: "absolute inset-0 bg-background/80 z-10 flex items-center justify-center rounded-md" }, Dm = { class: "flex flex-col items-center gap-2" }, Lm = { class: "text-sm text-muted-foreground" }, Zn = /* @__PURE__ */ P({
  __name: "DataTableLoadingOverlay",
  setup(e) {
    const { t } = St();
    return (a, n) => (m(), R("div", $m, [
      q("div", Dm, [
        x(El, {
          size: 30,
          class: "size-8"
        }),
        q("span", Lm, J(l(t)("dataTable.loading") || "Loading..."), 1)
      ])
    ]));
  }
}), Im = ["data-state", "data-row-id"], Mm = {
  key: 0,
  class: "!w-6 !pr-0"
}, Rm = {
  key: 1,
  class: "!w-6 !pr-0"
}, Bm = ["data-col-id", "tabindex"], Fm = { key: 2 }, Vm = { class: "flex items-center gap-0.5" }, kl = /* @__PURE__ */ P({
  __name: "DataTableRow",
  props: {
    item: {}
  },
  setup(e) {
    const t = e, a = Ht(), n = V(() => a.selectedMap.value[t.item[a.idcol]]), o = V(() => a.highlightedRow === t.item[a.idcol]), s = V(() => a.expandedMap.value[t.item[a.idcol]]), r = V(() => a.isRowExpandableFn(t.item));
    return (i, u) => (m(), R("tr", {
      "data-state": (n.value || o.value) && "selected",
      "data-row-id": e.item[l(a).idcol]
    }, [
      l(a).expandable ? (m(), R("td", Mm, [
        r.value ? (m(), A(Ge, {
          key: 0,
          size: "sm",
          variant: "ghost",
          class: "h-6 w-6 p-0 -mr-1",
          onClick: u[0] || (u[0] = (c) => l(a).toggleExpand(e.item[l(a).idcol]))
        }, {
          default: h(() => [
            (m(), A(Ke(s.value ? l(aa) : l(Wt)), { class: "h-4 w-4" }))
          ]),
          _: 1
        })) : ee("", !0)
      ])) : ee("", !0),
      l(a).selectMode === "multiselect" ? (m(), R("td", Rm, [
        x(l(va), {
          "model-value": l(a).selected.value.includes(e.item[l(a).idcol]),
          "onUpdate:modelValue": u[1] || (u[1] = (c) => l(a).toggleSelected(e.item[l(a).idcol]))
        }, null, 8, ["model-value"])
      ])) : ee("", !0),
      (m(!0), R(me, null, Ee(l(a).filteredColumns.value, (c) => (m(), R("td", {
        key: c.id,
        "data-col-id": c.id,
        tabindex: c.onClick ? 0 : -1,
        class: te(c.cssClass)
      }, [
        L(i.$slots, `cell:${String(c.id)}`, {
          item: e.item,
          value: e.item[c.id],
          expanded: s.value
        }, () => [
          de(J(e.item[c.id]), 1)
        ])
      ], 10, Bm))), 128)),
      l(a).hasActionsColumn ? (m(), R("td", Fm, [
        q("div", Vm, [
          L(i.$slots, "cell:actions", { item: e.item })
        ])
      ])) : ee("", !0)
    ], 8, Im));
  }
}), Um = /* @__PURE__ */ P({
  __name: "DataTableViewOptions",
  props: {
    columns: {},
    visibleColumns: {}
  },
  emits: ["update:visibleColumns"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = We(), s = V(() => a.columns.filter((c) => c.title && c.hideable !== !1)), r = V(() => !a.visibleColumns || a.visibleColumns.length === 0 ? a.columns.map((c) => c.id) : a.visibleColumns);
    function i(c) {
      return r.value.includes(c);
    }
    function u(c, g) {
      const p = r.value;
      (typeof g == "boolean" ? g : !1) ? p.includes(c) || n("update:visibleColumns", [...p, c]) : n(
        "update:visibleColumns",
        p.filter((S) => S !== c)
      );
    }
    return (c, g) => (m(), A(l(_l), null, {
      default: h(() => [
        x(l(xl), { "as-child": "" }, {
          default: h(() => [
            x(l(Ge), {
              variant: "outline",
              size: "sm",
              class: "ml-auto h-8"
            }, {
              default: h(() => [
                x(l(oi), { class: "mr-2 h-4 w-4" }),
                de(" " + J(l(o)("datatable.view", "View")), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        x(l(wl), {
          align: "end",
          class: "w-[150px]"
        }, {
          default: h(() => [
            x(l(Sm), null, {
              default: h(() => [
                de(J(l(o)("datatable.toggleColumns", "Toggle columns")), 1)
              ]),
              _: 1
            }),
            x(l(Xn)),
            (m(!0), R(me, null, Ee(s.value, (p) => (m(), A(l(Cm), {
              key: p.id,
              "model-value": i(p.id),
              "onUpdate:modelValue": (f) => u(p.id, f)
            }, {
              default: h(() => [
                de(J(p.title), 1)
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
}), zm = { class: "flex items-center justify-end py-2" }, Qn = /* @__PURE__ */ P({
  __name: "DataTableToolbar",
  props: {
    visibleColumns: {}
  },
  emits: ["update:visibleColumns"],
  setup(e, { emit: t }) {
    const a = t, n = Ht();
    return (o, s) => (m(), R("div", zm, [
      L(o.$slots, "default"),
      x(Um, {
        columns: l(n).columns,
        "visible-columns": e.visibleColumns,
        "onUpdate:visibleColumns": s[0] || (s[0] = (r) => a("update:visibleColumns", r))
      }, null, 8, ["columns", "visible-columns"])
    ]));
  }
}), Gm = { class: "flex flex-col flex-1 min-w-0 min-h-0 relative" }, Wm = { class: "hover:!bg-transparent" }, jm = ["colspan"], $g = /* @__PURE__ */ P({
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
    const n = a, o = ve(e, "visibleColumns"), s = ve(e, "itemsPerPage"), r = ve(e, "page"), i = ve(e, "sortBy"), u = ve(e, "selected"), c = V(() => Ft(e.columns, (Z) => Z.id)), g = V(() => Ft(e.items, (Z) => Z[e.idcol])), p = V(() => e.items && e.items.length > 0), f = V(
      () => o.value ? e.columns.filter((Z) => o.value?.includes(Z.id)) : e.columns
    ), S = V(
      () => f.value.length + (e.selectMode === "multiselect" ? 1 : 0) + (e.hasActionsColumn ? 1 : 0) + (e.expandable ? 1 : 0)
    );
    Re(s, () => {
      r.value && r.value > 1 && (r.value = 1);
    });
    function M(Z) {
      !i.value || i.value.key !== Z ? i.value = { key: Z, order: "asc" } : i.value.key === Z && (i.value.order === "asc" ? i.value = { key: Z, order: "desc" } : i.value = void 0);
    }
    const E = V(() => e.items), {
      stateMap: D,
      toggle: y,
      toggleAll: b,
      allToggledState: _,
      clear: w
    } = za(E, e.idcol, e.storagekey, u);
    Mn(
      u,
      V(() => e.items.map((Z) => Z[e.idcol]))
    ), In(
      () => (w(), !0),
      V(() => u.value.length > 0)
    );
    const {
      stateMap: N,
      toggle: I,
      allToggledState: k,
      toggleAll: B
    } = za(E, e.idcol, e.storagekey), Q = (Z) => e.isRowExpandable ? e.isRowExpandable(Z) : !0;
    return Bn({
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
      hasItems: p,
      selected: u,
      selectedMap: D,
      expandedMap: N,
      sortBy: i,
      toggleSelected: y,
      toggleAllSelected: b,
      allSelectedState: _,
      clearSelected: w,
      toggleExpand: I,
      toggleExpandAll: B,
      allExpandedState: k,
      updateSort: M,
      isRowExpandableFn: Q,
      onClickRow: (Z) => n("clickRow", Z),
      onClickColumn: (Z, oe) => {
        const H = c.value[Z], be = g.value[oe];
        H && be && H.onClick?.(be);
      }
    }), t({ selected: u, clearSelected: w }), (Z, oe) => (m(), R("div", Gm, [
      e.showOptions ? (m(), A(Qn, {
        key: 0,
        "visible-columns": o.value,
        "onUpdate:visibleColumns": oe[0] || (oe[0] = (H) => o.value = H)
      }, {
        default: h(() => [
          L(Z.$slots, "header")
        ]),
        _: 3
      }, 8, ["visible-columns"])) : ee("", !0),
      x(Fn, null, {
        default: h(() => [
          e.isPending ? (m(), A(Zn, { key: 0 })) : ee("", !0),
          q("div", {
            class: te(["flex-1 flex flex-col min-h-0", { "!rounded-md border": e.bordered }])
          }, [
            q("table", {
              class: te(["[&>tbody>tr:hover]:bg-zinc-100/50 dark:[&>tbody>tr:hover]:bg-zinc-900/50 h-1 [&_tr]:border-b [&_th,&_td]:px-2 [&_th,&_td]:py-1 min-h-0 w-full [&_th]:!text-sm [&_tr>*:first-child]:pl-6 [&_tr>*:last-child]:pr-6", { "[&_tbody_tr:last-child]:border-b-0": e.bordered }])
            }, [
              x(Jn, {
                "visible-columns": o.value,
                "onUpdate:visibleColumns": oe[1] || (oe[1] = (H) => o.value = H)
              }, null, 8, ["visible-columns"]),
              x(Rn, null, {
                default: h(() => [
                  p.value ? (m(!0), R(me, { key: 0 }, Ee(e.items, (H) => (m(), R(me, {
                    key: H[e.idcol]
                  }, [
                    x(kl, { item: H }, da({ _: 2 }, [
                      Ee(Z.$slots, (be, C) => ({
                        name: C,
                        fn: h((U) => [
                          L(Z.$slots, C, j({ ref_for: !0 }, U))
                        ])
                      }))
                    ]), 1032, ["item"]),
                    e.expandable && l(N)[H[e.idcol]] && Q(H) ? L(Z.$slots, "expanded-row-raw", {
                      key: 0,
                      item: H,
                      colNum: S.value
                    }, () => [
                      q("tr", Wm, [
                        q("td", {
                          colspan: S.value,
                          class: "bg-muted/30 p-0 [&_thead>tr:hover]:bg-transparent [&_th]:h-7"
                        }, [
                          L(Z.$slots, "expanded-row", { item: H })
                        ], 8, jm)
                      ])
                    ]) : ee("", !0)
                  ], 64))), 128)) : (m(), A(Kn, { key: 1 }))
                ]),
                _: 3
              })
            ], 2)
          ], 2)
        ]),
        _: 3
      }),
      x(yl, {
        page: r.value,
        "onUpdate:page": oe[2] || (oe[2] = (H) => r.value = H),
        "items-per-page": s.value,
        "onUpdate:itemsPerPage": oe[3] || (oe[3] = (H) => s.value = H),
        total: e.total,
        "page-size-options": e.pageSizeOptions,
        bordered: e.bordered
      }, {
        bulk: h((H) => [
          L(Z.$slots, "bulk", Mt(ta(H)))
        ]),
        _: 3
      }, 8, ["page", "items-per-page", "total", "page-size-options", "bordered"])
    ]));
  }
}), Cl = /* @__PURE__ */ P({
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
    return (n, o) => (m(), R("div", {
      class: te(l(G)(l(t)({ variant: a.variant }), a.class))
    }, [
      L(n.$slots, "default")
    ], 2));
  }
}), Hm = { class: "flex flex-col flex-1 min-w-0 min-h-0 relative" }, Ym = ["data-group-id"], Km = { class: "!w-6 !pr-0" }, Xm = {
  key: 0,
  class: "!w-6"
}, qm = ["colspan"], Jm = { class: "flex items-center gap-2" }, Zm = { class: "text-sm" }, Dg = /* @__PURE__ */ P({
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
    const n = a, o = V(() => e.groups.flatMap((C) => C.items)), s = ve(e, "visibleColumns"), r = ve(e, "itemsPerPage"), i = ve(e, "page"), u = ve(e, "sortBy"), c = ve(e, "selected"), g = V(() => Ft(e.columns, (C) => C.id)), p = V(() => Ft(o.value, (C) => C.id)), f = V(() => o.value && o.value.length > 0), S = V(() => e.groups.length > 0), M = V(
      () => s.value ? e.columns.filter((C) => s.value?.includes(C.id)) : e.columns
    ), E = V(
      () => M.value.length + (e.selectMode === "multiselect" ? 1 : 0) + (e.hasActionsColumn ? 1 : 0) + 1
    );
    Re(r, () => {
      i.value && i.value > 1 && (i.value = 1);
    });
    function D(C) {
      !u.value || u.value.key !== C ? u.value = { key: C, order: "asc" } : u.value.key === C && (u.value.order === "asc" ? u.value = { key: C, order: "desc" } : u.value = void 0);
    }
    const y = V(() => o.value), {
      stateMap: b,
      toggle: _,
      toggleAll: w,
      allToggledState: N,
      clear: I
    } = za(y, "id", e.storagekey, c);
    Mn(
      c,
      V(() => o.value.map((C) => C.id))
    ), In(
      () => (I(), !0),
      V(() => c.value.length > 0)
    ), Re(i, () => I());
    const k = le({});
    function B(C) {
      k.value[C] = k.value[C] === void 0 ? !1 : !k.value[C];
    }
    function Q() {
      const C = e.groups.map((O) => O.key);
      C.every((O) => k.value[O] !== !1) ? C.forEach((O) => {
        k.value[O] = !1;
      }) : C.forEach((O) => {
        k.value[O] = !0;
      });
    }
    const Z = V(() => {
      const C = e.groups.map((O) => O.key), U = C.filter((O) => k.value[O] !== !1).length;
      return U === 0 ? !1 : U === C.length ? !0 : "indeterminate";
    });
    function oe(C) {
      return C.every((U) => c.value.includes(U.id));
    }
    function H(C) {
      const U = C.filter((O) => c.value.includes(O.id));
      return U.length > 0 && U.length < C.length;
    }
    function be(C) {
      if (oe(C))
        c.value = c.value.filter((O) => !C.some((ge) => ge.id === O));
      else {
        const O = C.map((ge) => ge.id);
        c.value = [.../* @__PURE__ */ new Set([...c.value, ...O])];
      }
    }
    return Bn({
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
      itemsMap: p,
      colNum: E,
      hasItems: f,
      selected: c,
      selectedMap: b,
      expandedMap: V(() => ({})),
      sortBy: u,
      toggleSelected: _,
      toggleAllSelected: w,
      allSelectedState: N,
      clearSelected: I,
      toggleExpand: () => {
      },
      toggleExpandAll: Q,
      allExpandedState: Z,
      updateSort: D,
      isRowExpandableFn: () => !1,
      onClickRow: (C) => n("clickRow", C),
      onClickColumn: (C, U) => {
        const O = g.value[C], ge = p.value[U];
        O && ge && O.onClick?.(ge);
      }
    }), t({ selected: c, clearSelected: I }), (C, U) => (m(), R("div", Hm, [
      e.showOptions ? (m(), A(Qn, {
        key: 0,
        "visible-columns": s.value,
        "onUpdate:visibleColumns": U[0] || (U[0] = (O) => s.value = O)
      }, {
        default: h(() => [
          L(C.$slots, "header")
        ]),
        _: 3
      }, 8, ["visible-columns"])) : ee("", !0),
      x(Fn, null, {
        default: h(() => [
          e.isPending ? (m(), A(Zn, { key: 0 })) : ee("", !0),
          q("div", {
            class: te(["flex-1 flex flex-col min-h-0", { "!rounded-md border": e.bordered }])
          }, [
            q("table", {
              class: te(["[&>tbody>tr:hover]:bg-zinc-100/50 dark:[&>tbody>tr:hover]:bg-zinc-900/50 h-1 [&_tr]:border-b [&_th,&_td]:px-2 [&_th,&_td]:py-1 min-h-0 w-full [&_th]:!text-sm [&_tr>*:first-child]:pl-6 [&_tr>*:last-child]:pr-6", { "[&_tbody_tr:last-child]:border-b-0": e.bordered }])
            }, [
              x(Jn, {
                "visible-columns": s.value,
                "onUpdate:visibleColumns": U[1] || (U[1] = (O) => s.value = O)
              }, null, 8, ["visible-columns"]),
              x(Rn, null, {
                default: h(() => [
                  S.value ? (m(!0), R(me, { key: 0 }, Ee(e.groups, (O) => (m(), R(me, {
                    key: O.key
                  }, [
                    q("tr", {
                      class: "",
                      "data-group-id": O.key
                    }, [
                      q("td", Km, [
                        x(Ge, {
                          size: "sm",
                          variant: "ghost",
                          class: "h-6 w-6 p-0",
                          disabled: O.items.length === 0,
                          onClick: (ge) => B(O.key)
                        }, {
                          default: h(() => [
                            (m(), A(Ke(k.value[O.key] ? l(aa) : l(Wt)), { class: "h-4 w-4" }))
                          ]),
                          _: 2
                        }, 1032, ["disabled", "onClick"])
                      ]),
                      e.selectMode === "multiselect" ? (m(), R("td", Xm, [
                        x(l(va), {
                          "model-value": O.items.length === 0 ? !1 : oe(O.items) ? !0 : H(O.items) ? "indeterminate" : !1,
                          disabled: O.items.length === 0,
                          "onUpdate:modelValue": (ge) => be(O.items)
                        }, null, 8, ["model-value", "disabled", "onUpdate:modelValue"])
                      ])) : ee("", !0),
                      q("td", {
                        colspan: E.value - 1 - (e.selectMode === "multiselect" ? 1 : 0),
                        class: "font-medium"
                      }, [
                        L(C.$slots, "group-header", {
                          groupKey: O.key,
                          items: O.items,
                          count: O.items.length,
                          isExpanded: k.value[O.key],
                          isSelected: oe(O.items)
                        }, () => [
                          q("div", Jm, [
                            q("span", Zm, J(O.key || "(No value)"), 1),
                            x(l(Cl), {
                              variant: "secondary",
                              class: "ml-2"
                            }, {
                              default: h(() => [
                                de(J(O.items.length), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ])
                        ])
                      ], 8, qm)
                    ], 8, Ym),
                    k.value[O.key] !== !1 ? (m(!0), R(me, { key: 0 }, Ee(O.items, (ge) => (m(), A(kl, {
                      key: ge.id,
                      item: ge
                    }, da({ _: 2 }, [
                      Ee(C.$slots, (W, Fe) => ({
                        name: Fe,
                        fn: h((Ve) => [
                          Fe !== "group-header" ? L(C.$slots, Fe, j({
                            key: 0,
                            ref_for: !0
                          }, Ve)) : ee("", !0)
                        ])
                      }))
                    ]), 1032, ["item"]))), 128)) : ee("", !0)
                  ], 64))), 128)) : (m(), A(Kn, { key: 1 }))
                ]),
                _: 3
              })
            ], 2)
          ], 2)
        ]),
        _: 3
      }),
      x(yl, {
        page: i.value,
        "onUpdate:page": U[2] || (U[2] = (O) => i.value = O),
        "items-per-page": r.value,
        "onUpdate:itemsPerPage": U[3] || (U[3] = (O) => r.value = O),
        total: e.total,
        "page-size-options": e.pageSizeOptions,
        bordered: e.bordered
      }, {
        bulk: h((O) => [
          L(C.$slots, "bulk", Mt(ta(O)))
        ]),
        _: 3
      }, 8, ["page", "items-per-page", "total", "page-size-options", "bordered"])
    ]));
  }
}), Qm = ["data-group-id"], ep = { class: "text-sm font-medium" }, tp = { key: 0 }, ap = { class: "flex items-center gap-0.5" }, np = ["data-row-id", "data-state"], op = ["data-col-id", "tabindex"], sp = { key: 0 }, lp = { class: "flex items-center gap-0.5" }, ls = 20, rs = /* @__PURE__ */ P({
  __name: "DataTableGroupNode",
  props: {
    group: {},
    depth: {},
    hideHeader: { type: Boolean },
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
    const t = e, a = Ht(), n = a.filteredColumns, o = a.selectedMap, s = a.selected, r = a.columnsMap, { hasActionsColumn: i, idcol: u, highlightedRow: c } = a, g = V(() => t.getAllGroupItems(t.group)), p = V(() => t.expandedMap[t.group.key] !== !1), f = V(() => (t.group.children?.length ?? 0) === 0), S = V(() => g.value.length === 0 ? !1 : t.isGroupSelected(g.value) ? !0 : t.isGroupPartiallySelected(g.value) ? "indeterminate" : !1);
    function M(E) {
      return o.value[E.id] || c === E[u];
    }
    return (E, D) => {
      const y = zl("DataTableGroupNode", !0);
      return m(), R(me, null, [
        e.hideHeader ? ee("", !0) : (m(), R("tr", {
          key: 0,
          "data-group-id": e.group.key
        }, [
          (m(!0), R(me, null, Ee(l(n), (b) => (m(), R("td", {
            key: String(b.id),
            class: te(b.cssClass)
          }, [
            String(b.id) === e.treeColumn ? (m(), R("div", {
              key: 0,
              class: "flex items-center gap-2",
              style: Ia({ paddingLeft: `${e.depth * ls}px` })
            }, [
              x(Ge, {
                size: "sm",
                variant: "ghost",
                class: "h-6 w-6 p-0 shrink-0",
                disabled: f.value,
                onClick: D[0] || (D[0] = (_) => e.toggleExpand(e.group.key))
              }, {
                default: h(() => [
                  (m(), A(Ke(p.value ? l(aa) : l(Wt)), { class: "h-4 w-4 text-muted-foreground" }))
                ]),
                _: 1
              }, 8, ["disabled"]),
              e.selectMode === "multiselect" ? (m(), A(l(va), {
                key: 0,
                class: "shrink-0",
                "model-value": S.value,
                disabled: g.value.length === 0,
                "onUpdate:modelValue": D[1] || (D[1] = (_) => e.toggleGroupSelection(g.value))
              }, null, 8, ["model-value", "disabled"])) : ee("", !0),
              L(E.$slots, `cell-group:${String(b.id)}`, {
                group: e.group,
                items: g.value
              }, () => [
                q("span", ep, J((e.group.label ?? e.group.key) || "(No value)"), 1),
                x(l(Cl), {
                  variant: "secondary",
                  class: "ml-1 shrink-0"
                }, {
                  default: h(() => [
                    de(J(g.value.length), 1)
                  ]),
                  _: 1
                })
              ])
            ], 4)) : L(E.$slots, `cell-group:${String(b.id)}`, {
              key: 1,
              group: e.group,
              items: g.value
            })
          ], 2))), 128)),
          l(i) ? (m(), R("td", tp, [
            q("div", ap, [
              L(E.$slots, "cell-group:actions", {
                group: e.group,
                items: g.value
              })
            ])
          ])) : ee("", !0)
        ], 8, Qm)),
        e.hideHeader || p.value ? (m(!0), R(me, { key: 1 }, Ee(e.group.children, (b) => (m(), R(me, {
          key: l(qt)(b) ? b.key : b[l(u)]
        }, [
          l(qt)(b) ? (m(), A(y, {
            key: 0,
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
          }, da({ _: 2 }, [
            Ee(E.$slots, (_, w) => ({
              name: w,
              fn: h((N) => [
                L(E.$slots, w, j({ ref_for: !0 }, N))
              ])
            }))
          ]), 1032, ["group", "depth", "tree-column", "select-mode", "expanded-map", "toggle-expand", "get-all-group-items", "is-group-selected", "is-group-partially-selected", "toggle-group-selection"])) : (m(), R("tr", {
            key: 1,
            "data-row-id": b[l(u)],
            "data-state": M(b) && "selected"
          }, [
            (m(!0), R(me, null, Ee(l(n), (_) => (m(), R("td", {
              key: String(_.id),
              "data-col-id": String(_.id),
              tabindex: l(r)[String(_.id)]?.onClick ? 0 : -1,
              class: te(_.cssClass)
            }, [
              String(_.id) === e.treeColumn ? (m(), R("div", {
                key: 0,
                class: "flex items-center gap-2",
                style: Ia({ paddingLeft: `${(e.depth + 1) * ls}px` })
              }, [
                D[2] || (D[2] = q("span", { class: "w-6 h-6 shrink-0" }, null, -1)),
                e.selectMode === "multiselect" ? (m(), A(l(va), {
                  key: 0,
                  class: "shrink-0",
                  "model-value": l(s).includes(b[l(u)]),
                  "onUpdate:modelValue": (w) => l(a).toggleSelected(b[l(u)])
                }, null, 8, ["model-value", "onUpdate:modelValue"])) : ee("", !0),
                L(E.$slots, `cell:${String(_.id)}`, {
                  item: b,
                  value: b[_.id]
                }, () => [
                  de(J(b[_.id]), 1)
                ])
              ], 4)) : L(E.$slots, `cell:${String(_.id)}`, {
                key: 1,
                item: b,
                value: b[_.id]
              }, () => [
                de(J(b[_.id]), 1)
              ])
            ], 10, op))), 128)),
            l(i) ? (m(), R("td", sp, [
              q("div", lp, [
                L(E.$slots, "cell:actions", {
                  item: b
                })
              ])
            ])) : ee("", !0)
          ], 8, np))
        ], 64))), 128)) : ee("", !0)
      ], 64);
    };
  }
}), rp = { class: "flex flex-col flex-1 min-w-0 min-h-0 relative" }, Lg = /* @__PURE__ */ P({
  __name: "DataTableTree",
  props: /* @__PURE__ */ Ce({
    items: {},
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
      return qt(C) ? (C.children ?? []).flatMap(o) : [C];
    }
    function s(C) {
      return C.flatMap((U) => qt(U) ? [U.key, ...s(U.children ?? [])] : []);
    }
    const r = V(() => e.items.flatMap(o)), i = ve(e, "visibleColumns"), u = ve(e, "sortBy"), c = ve(e, "selected"), g = V(() => Ft(e.columns, (C) => C.id)), p = V(() => Ft(r.value, (C) => C.id)), f = V(() => r.value.length > 0), S = V(() => e.items.length > 0), M = V(
      () => i.value ? e.columns.filter((C) => i.value?.includes(C.id)) : e.columns
    ), E = V(() => M.value.length + (e.hasActionsColumn ? 1 : 0));
    function D(C) {
      !u.value || u.value.key !== C ? u.value = { key: C, order: "asc" } : u.value.key === C && (u.value.order === "asc" ? u.value = { key: C, order: "desc" } : u.value = void 0);
    }
    const y = V(() => r.value), {
      stateMap: b,
      toggle: _,
      toggleAll: w,
      allToggledState: N,
      clear: I
    } = za(y, "id", e.storagekey, c);
    Mn(
      c,
      V(() => r.value.map((C) => C.id))
    ), In(
      () => (I(), !0),
      V(() => c.value.length > 0)
    );
    const k = e.storagekey ? Vs(`${e.storagekey}-expanded`, {}) : le({});
    function B(C) {
      k.value[C] = k.value[C] === void 0 ? !1 : !k.value[C];
    }
    function Q() {
      const C = s(e.items), U = C.every((O) => k.value[O] !== !1);
      C.forEach((O) => {
        k.value[O] = !U;
      });
    }
    const Z = V(() => {
      const C = s(e.items), U = C.filter((O) => k.value[O] !== !1).length;
      return U === 0 ? !1 : U === C.length ? !0 : "indeterminate";
    });
    function oe(C) {
      return C.length > 0 && C.every((U) => c.value.includes(U.id));
    }
    function H(C) {
      const U = C.filter((O) => c.value.includes(O.id)).length;
      return U > 0 && U < C.length;
    }
    function be(C) {
      oe(C) ? c.value = c.value.filter((U) => !C.some((O) => O.id === U)) : c.value = [.../* @__PURE__ */ new Set([...c.value, ...C.map((U) => U.id)])];
    }
    return Bn({
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
      itemsMap: p,
      colNum: E,
      hasItems: f,
      selected: c,
      selectedMap: b,
      expandedMap: V(() => ({})),
      sortBy: u,
      toggleSelected: _,
      toggleAllSelected: w,
      allSelectedState: N,
      clearSelected: I,
      toggleExpand: () => {
      },
      toggleExpandAll: Q,
      allExpandedState: Z,
      updateSort: D,
      isRowExpandableFn: () => !1,
      onClickRow: (C) => n("clickRow", C),
      onClickColumn: (C, U) => {
        const O = g.value[C], ge = p.value[U];
        O && ge && O.onClick?.(ge);
      }
    }), t({ selected: c, clearSelected: I }), (C, U) => (m(), R("div", rp, [
      e.showOptions ? (m(), A(Qn, {
        key: 0,
        "visible-columns": i.value,
        "onUpdate:visibleColumns": U[0] || (U[0] = (O) => i.value = O)
      }, {
        default: h(() => [
          L(C.$slots, "header")
        ]),
        _: 3
      }, 8, ["visible-columns"])) : ee("", !0),
      x(Fn, null, {
        default: h(() => [
          e.isPending ? (m(), A(Zn, { key: 0 })) : ee("", !0),
          q("div", {
            class: te(["flex-1 flex flex-col min-h-0", { "!rounded-md border": e.bordered }])
          }, [
            q("table", {
              class: te(["[&>tbody>tr:hover]:bg-zinc-100/50 dark:[&>tbody>tr:hover]:bg-zinc-900/50 h-1 [&_tr]:border-b [&_th,&_td]:px-2 [&_th,&_td]:py-1 min-h-0 w-full [&_th]:!text-sm [&_tr>*:first-child]:pl-6 [&_tr>*:last-child]:pr-6", { "[&_tbody_tr:last-child]:border-b-0": e.bordered }])
            }, [
              x(Jn, {
                "visible-columns": i.value,
                "onUpdate:visibleColumns": U[1] || (U[1] = (O) => i.value = O)
              }, null, 8, ["visible-columns"]),
              x(Rn, null, {
                default: h(() => [
                  S.value ? (m(!0), R(me, { key: 0 }, Ee(e.items, (O) => (m(), R(me, {
                    key: l(qt)(O) ? O.key : O[e.idcol]
                  }, [
                    l(qt)(O) ? (m(), A(rs, {
                      key: 0,
                      group: O,
                      depth: 0,
                      "tree-column": e.treeColumn,
                      "select-mode": e.selectMode,
                      "expanded-map": l(k),
                      "toggle-expand": B,
                      "get-all-group-items": o,
                      "is-group-selected": oe,
                      "is-group-partially-selected": H,
                      "toggle-group-selection": be
                    }, da({ _: 2 }, [
                      Ee(C.$slots, (ge, W) => ({
                        name: W,
                        fn: h((Fe) => [
                          L(C.$slots, W, j({ ref_for: !0 }, Fe))
                        ])
                      }))
                    ]), 1032, ["group", "tree-column", "select-mode", "expanded-map"])) : (m(), A(rs, {
                      key: 1,
                      group: { key: `__item__${O[e.idcol]}`, children: [O] },
                      depth: -1,
                      "hide-header": !0,
                      "tree-column": e.treeColumn,
                      "select-mode": e.selectMode,
                      "expanded-map": l(k),
                      "toggle-expand": B,
                      "get-all-group-items": o,
                      "is-group-selected": oe,
                      "is-group-partially-selected": H,
                      "toggle-group-selection": be
                    }, da({ _: 2 }, [
                      Ee(C.$slots, (ge, W) => ({
                        name: W,
                        fn: h((Fe) => [
                          L(C.$slots, W, j({ ref_for: !0 }, Fe))
                        ])
                      }))
                    ]), 1032, ["group", "tree-column", "select-mode", "expanded-map"]))
                  ], 64))), 128)) : (m(), A(Kn, { key: 1 }))
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
function qt(e) {
  return typeof e == "object" && e !== null && "key" in e;
}
function za(e, t, a, n) {
  const o = n || (a ? Vs(a, []) : le([])), s = V(() => Object.fromEntries(o.value.map((p) => [p, !0]))), r = (p) => {
    o.value = Ec(o.value, p);
  }, i = V(
    () => o.value.length > 0 ? o.value?.length === e.value.length ? !0 : "indeterminate" : !1
  );
  function u() {
    o.value = [];
  }
  function c() {
    o.value = e.value.map((p) => p[t]);
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
const ip = ["datetime", "title"], Ig = /* @__PURE__ */ P({
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
      return c && Object.entries(c).forEach(([p, f]) => {
        g = g.replace(`{${p}}`, String(f));
      }), g;
    }
    const o = V(() => t.date instanceof Date ? t.date : typeof t.date == "string" || typeof t.date == "number" ? new Date(t.date) : /* @__PURE__ */ new Date()), s = /* @__PURE__ */ Ou(o, t.format, {
      locales: t.locale
    }), r = V(() => {
      if (!t.relative) return null;
      const c = (/* @__PURE__ */ new Date()).getTime() - o.value.getTime(), g = Math.floor(c / 1e3), p = Math.floor(g / 60), f = Math.floor(p / 60), S = Math.floor(f / 24);
      return S > 0 ? n("date.daysAgo", { count: S }) : f > 0 ? n("date.hoursAgo", { count: f }) : p > 0 ? n("date.minutesAgo", { count: p }) : n("date.justNow");
    }), i = V(() => t.relative ? r.value : s.value);
    return (u, c) => (m(), R("time", {
      datetime: o.value.toISOString(),
      title: t.relative ? l(s) : void 0,
      class: "whitespace-nowrap"
    }, J(i.value), 9, ip));
  }
}), up = { class: "min-w-0 line-clamp-1 break-spaces text-left whitespace-normal space-x-1" }, cp = { class: "text-muted-foreground" }, dp = { class: "font-semibold" }, fp = {
  key: 1,
  class: "text-muted-foreground"
}, is = /* @__PURE__ */ P({
  __name: "DisplayGraduated",
  props: {
    value: {}
  },
  setup(e) {
    const t = We();
    return (a, n) => (m(), R("div", up, [
      e.value?.length ? (m(!0), R(me, { key: 0 }, Ee(e.value, (o, s) => (m(), R("span", {
        key: s,
        class: "bg-muted text-xs px-1 py-0.5 rounded"
      }, [
        q("span", cp, " ≥" + J(`${o.from}:`), 1),
        n[0] || (n[0] = de()),
        q("span", dp, J(o.value), 1)
      ]))), 128)) : (m(), R("span", fp, J(l(t)("common.novalue", "No value")), 1))
    ]));
  }
}), zt = yt([]), Sl = V(() => Ft(zt.value, (e) => e.key)), eo = le({});
function Ol(e) {
  const t = zt.value.findIndex((a) => a.key === e);
  t !== -1 && zt.value.splice(t, 1), Gs.remove(e);
}
const Tl = (e) => {
  eo.value[e] = !1, Sl.value[e]?.onClose?.(), setTimeout(() => Ol(e), 600);
}, mp = (e) => {
  const t = e.key ?? `${Math.random()}`;
  return e.key = t, zt.value.push(e), wn(zt), eo.value[t] = !0, Gs.add(() => (Tl(t), !0), t), t;
}, pp = (e, t) => {
  const a = Sl.value[e];
  a && (Object.assign(a, t), wn(zt));
}, gp = { close: Tl, visible: eo, open: mp, update: pp, instances: zt, removeInstance: Ol }, Nl = () => gp, Mg = /* @__PURE__ */ P({
  __name: "DynamicComponentProvider",
  setup(e) {
    const { close: t, visible: a, instances: n } = Nl();
    return (o, s) => (m(!0), R(me, null, Ee(l(n), (r) => (m(), A(Ke(r.component), j({
      key: r.key,
      open: l(a)[r.key]
    }, { ref_for: !0 }, r.componentProps || {}, {
      "onUpdate:open": (i) => !i && l(t)(r.key)
    }), null, 16, ["open", "onUpdate:open"]))), 128));
  }
}), vp = { class: "text-muted-foreground py-4 flex gap-2 items-center text-sm" }, hp = /* @__PURE__ */ P({
  __name: "EmptyMini",
  setup(e) {
    const t = We();
    return (a, n) => (m(), R("div", vp, [
      x(l(ws), { size: 16 }),
      q("span", null, [
        L(a.$slots, "default", {}, () => [
          de(J(l(t)("common.noValues", "No values")), 1)
        ])
      ])
    ]));
  }
}), bp = { class: "flex-1" }, yp = { class: "flex gap-1 items-center" }, _p = {
  key: 0,
  class: "flex-1"
}, wp = {
  key: 1,
  class: "text-muted-foreground text-sm px-2"
}, xp = /* @__PURE__ */ P({
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
    const t = e, a = ve(e, "modelValue"), n = We(), o = le(""), { startsWith: s } = Nr({ sensitivity: "base" }), r = V(
      () => we(t.options).filter((g) => s(g.label, o.value))
    ), i = V(() => !!we(t.options).length), u = V(() => t.placeholder ?? n("input.filter.placeholder", "Filter..")), c = V(() => t.addItemButtonLabel ?? n("common.addItem", "Add Item"));
    return (g, p) => (m(), R(me, null, [
      x(l(Ar), {
        modelValue: a.value,
        "onUpdate:modelValue": p[1] || (p[1] = (f) => a.value = f),
        multiple: e.multiple,
        disabled: t.disabled
      }, {
        default: h(() => [
          x(l(Pr), {
            modelValue: o.value,
            "onUpdate:modelValue": p[0] || (p[0] = (f) => o.value = f),
            autofocus: "",
            disabled: !i.value || t.disabled,
            placeholder: u.value,
            class: te(l(G)(
              "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
              "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
            ))
          }, null, 8, ["modelValue", "disabled", "placeholder", "class"]),
          r.value.length ? ee("", !0) : (m(), A(hp, { key: 0 })),
          x(l($r), { class: "max-h-[400px] overflow-auto py-1" }, {
            default: h(() => [
              (m(!0), R(me, null, Ee(r.value, (f) => (m(), A(l(Dr), {
                key: String(f.value),
                value: f.value,
                disabled: t.disabled,
                class: "focus:bg-accent focus:text-accent-foreground data-[highlighted]:bg-accent [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2"
              }, {
                default: h(() => [
                  q("div", bp, [
                    L(g.$slots, "option", { option: f }, () => [
                      de(J(f.label), 1)
                    ])
                  ]),
                  x(l(Lr), null, {
                    default: h(() => [
                      x(l(Ga), { size: 12 })
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
      q("div", yp, [
        t.showAddItemButton ? (m(), R("div", _p, [
          x(Ge, {
            size: "sm",
            class: "sticky bottom-0",
            variant: "ghost",
            type: "button",
            disabled: t.disabled,
            onClick: p[2] || (p[2] = (f) => g.$emit("onAddItem"))
          }, {
            default: h(() => [
              x(l(Nn)),
              de(" " + J(c.value), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ])) : ee("", !0),
        i.value && t.multiple ? (m(), R("div", wp, J(l(n)("common.elementCountSelected", "{count} selected").replace("{count}", String(a.value.length))), 1)) : ee("", !0)
      ])
    ], 64));
  }
}), Ep = /* @__PURE__ */ P({
  __name: "AlertDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = Ne(e, t);
    return (s, r) => (m(), A(l(Ir), j({ "data-slot": "alert-dialog" }, l(o)), {
      default: h(() => [
        L(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), kp = /* @__PURE__ */ P({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ce(t, "class");
    return (n, o) => (m(), A(l(Mr), j(l(a), {
      class: l(G)(l(Et)(), t.class)
    }), {
      default: h(() => [
        L(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Cp = /* @__PURE__ */ P({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ce(t, "class");
    return (n, o) => (m(), A(l(Rr), j(l(a), {
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
}), Sp = /* @__PURE__ */ P({
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
    return (r, i) => (m(), A(l(Br), null, {
      default: h(() => [
        x(l(Fr), {
          "data-slot": "alert-dialog-overlay",
          class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80"
        }),
        x(l(Vr), j({ "data-slot": "alert-dialog-content" }, l(s), {
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
}), Op = /* @__PURE__ */ P({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ce(t, "class");
    return (n, o) => (m(), A(l(Ur), j({ "data-slot": "alert-dialog-description" }, l(a), {
      class: l(G)("text-muted-foreground text-sm", t.class)
    }), {
      default: h(() => [
        L(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Tp = /* @__PURE__ */ P({
  __name: "AlertDialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), R("div", {
      "data-slot": "alert-dialog-footer",
      class: te(
        l(G)(
          "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
          t.class
        )
      )
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), Np = /* @__PURE__ */ P({
  __name: "AlertDialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), R("div", {
      "data-slot": "alert-dialog-header",
      class: te(l(G)("flex flex-col gap-2 text-center sm:text-left", t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), Ap = /* @__PURE__ */ P({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ce(t, "class");
    return (n, o) => (m(), A(l(zr), j({ "data-slot": "alert-dialog-title" }, l(a), {
      class: l(G)("text-lg font-semibold", t.class)
    }), {
      default: h(() => [
        L(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Pp = /* @__PURE__ */ P({
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
    const t = e, a = ve(e, "open"), n = le(!1), o = le();
    async function s() {
      n.value = !0;
      const u = t.onOk ? await t.onOk().catch((c) => c) : void 0;
      u === !0 || u === void 0 ? close() : ao(u) && (o.value = u), n.value = !1;
    }
    function r() {
      a.value = !1;
    }
    const { t: i } = St();
    return (u, c) => (m(), A(l(Ep), {
      open: a.value,
      "onUpdate:open": c[2] || (c[2] = (g) => a.value = g)
    }, {
      default: h(() => [
        x(l(Sp), null, {
          default: h(() => [
            x(l(Np), null, {
              default: h(() => [
                x(l(Ap), null, {
                  default: h(() => [
                    de(J(e.title || l(i)("dialog.alert.defaultTitle")), 1)
                  ]),
                  _: 1
                }),
                x(l(Op), null, {
                  default: h(() => [
                    de(J(e.description || l(i)("dialog.alert.defaultDescription")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            x(l(Tp), null, {
              default: h(() => [
                x(l(Cp), {
                  disabled: n.value,
                  onClick: c[0] || (c[0] = (g) => r())
                }, {
                  default: h(() => [
                    de(J(l(i)("common.cancel")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                x(l(kp), {
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
}), $p = /* @__PURE__ */ P({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = Ne(e, t);
    return (s, r) => (m(), A(l(xn), j({ "data-slot": "dialog" }, l(o)), {
      default: h((i) => [
        L(s.$slots, "default", Mt(ta(i)))
      ]),
      _: 3
    }, 16));
  }
}), Dp = /* @__PURE__ */ P({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ce(t, "class"), n = Je(a);
    return (o, s) => (m(), A(l(Sn), j({ "data-slot": "dialog-description" }, l(n), {
      class: l(G)("text-muted-foreground text-sm", t.class)
    }), {
      default: h(() => [
        L(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Lp = /* @__PURE__ */ P({
  __name: "DialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), R("div", {
      "data-slot": "dialog-header",
      class: te(l(G)("flex flex-col gap-2 text-center sm:text-left", t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), Ip = /* @__PURE__ */ P({
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
    return (r, i) => (m(), A(l(kn), null, {
      default: h(() => [
        x(l(En), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: h(() => [
            x(l(Cn), j({
              class: l(G)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                a.class
              )
            }, { ...r.$attrs, ...l(s) }, {
              onPointerDownOutside: i[0] || (i[0] = (u) => u.preventDefault()),
              onInteractOutside: i[1] || (i[1] = (u) => u.preventDefault())
            }), {
              default: h(() => [
                L(r.$slots, "default"),
                x(l(hs), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                  default: h(() => [
                    x(l(_a), { class: "w-4 h-4" }),
                    i[2] || (i[2] = q("span", { class: "sr-only" }, "Close", -1))
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
}), Mp = /* @__PURE__ */ P({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ce(t, "class"), n = Je(a);
    return (o, s) => (m(), A(l(On), j({ "data-slot": "dialog-title" }, l(n), {
      class: l(G)("text-lg leading-none font-semibold", t.class)
    }), {
      default: h(() => [
        L(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Rp = ["innerHTML"], Al = /* @__PURE__ */ P({
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
    return (a, n) => (m(), A(l($p), {
      open: t.value,
      "onUpdate:open": n[0] || (n[0] = (o) => t.value = o)
    }, {
      default: h(() => [
        x(l(Ip), { class: "!max-w-max min-w-[435px]" }, {
          default: h(() => [
            x(l(Lp), null, {
              default: h(() => [
                x(l(Mp), null, {
                  default: h(() => [
                    q("div", {
                      class: "[&>em]:font-normal [&>em]:!not-italic line-clamp-1",
                      innerHTML: e.title
                    }, null, 8, Rp)
                  ]),
                  _: 1
                }),
                e.description ? (m(), A(l(Dp), { key: 0 }, {
                  default: h(() => [
                    de(J(e.description), 1)
                  ]),
                  _: 1
                })) : ee("", !0)
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
const Bp = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Fp = (e) => typeof e < "u";
function Vp(e) {
  return JSON.parse(JSON.stringify(e));
}
function us(e, t, a, n = {}) {
  var o, s, r;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: c,
    deep: g = !1,
    defaultValue: p,
    shouldEmit: f
  } = n, S = ea(), M = a || S?.emit || ((o = S?.$emit) == null ? void 0 : o.bind(S)) || ((r = (s = S?.proxy) == null ? void 0 : s.$emit) == null ? void 0 : r.bind(S?.proxy));
  let E = c;
  t || (t = "modelValue"), E = E || `update:${t.toString()}`;
  const D = (_) => i ? typeof i == "function" ? i(_) : Vp(_) : _, y = () => Fp(e[t]) ? D(e[t]) : p, b = (_) => {
    f ? f(_) && M(E, _) : M(E, _);
  };
  if (u) {
    const _ = y(), w = le(_);
    let N = !1;
    return Re(
      () => e[t],
      (I) => {
        N || (N = !0, w.value = D(I), ba(() => N = !1));
      }
    ), Re(
      w,
      (I) => {
        !N && (I !== e[t] || g) && b(I);
      },
      { deep: g }
    ), w;
  } else
    return V({
      get() {
        return y();
      },
      set(_) {
        b(_);
      }
    });
}
const [to, Up] = Tn("DrawerRoot"), Pl = /* @__PURE__ */ new WeakMap();
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
  }), !a && Pl.set(e, n);
}
function zp(e, t) {
  if (!e || !(e instanceof HTMLElement))
    return;
  const a = Pl.get(e);
  a && Object.entries(a).forEach(([n, o]) => {
    e.style[n] = o;
  });
}
function Pa(e, t) {
  const a = window.getComputedStyle(e), n = a.transform || a.webkitTransform || a.mozTransform;
  let o = n.match(/^matrix3d\((.+)\)$/);
  return o ? Number.parseFloat(o[1].split(", ")[Ae(t) ? 13 : 12]) : (o = n.match(/^matrix\((.+)\)$/), o ? Number.parseFloat(o[1].split(", ")[Ae(t) ? 5 : 4]) : null);
}
function Gp(e) {
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
function on(e, t) {
  if (!e)
    return () => {
    };
  const a = e.style.cssText;
  return Object.assign(e.style, t), () => {
    e.style.cssText = a;
  };
}
function Wp(...e) {
  return (...t) => {
    for (const a of e)
      typeof a == "function" && a(...t);
  };
}
const ke = {
  DURATION: 0.5,
  EASE: [0.32, 0.72, 0, 1]
}, $l = 0.4, jp = 0.25, Hp = 100, Dl = 8, $a = 16, Ll = 26, cs = "vaul-dragging";
function Yp({
  activeSnapPoint: e,
  snapPoints: t,
  drawerRef: a,
  overlayRef: n,
  fadeFromIndex: o,
  onSnapPointChange: s,
  direction: r
}) {
  const i = le(typeof window < "u" ? {
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
  }), Wl(() => {
    typeof window < "u" && window.removeEventListener("resize", u);
  });
  const c = V(
    () => (t.value && e.value === t.value[t.value.length - 1]) ?? null
  ), g = V(
    () => t.value && t.value.length > 0 && (o?.value || o?.value === 0) && !Number.isNaN(o?.value) && t.value[o?.value ?? -1] === e.value || !t.value
  ), p = V(
    () => {
      var b;
      return ((b = t.value) == null ? void 0 : b.findIndex((_) => _ === e.value)) ?? null;
    }
  ), f = V(
    () => {
      var b;
      return ((b = t.value) == null ? void 0 : b.map((_) => {
        const w = typeof _ == "string";
        let N = 0;
        if (w && (N = Number.parseInt(_, 10)), Ae(r.value)) {
          const k = w ? N : i.value ? _ * i.value.innerHeight : 0;
          return i.value ? r.value === "bottom" ? i.value.innerHeight - k : -i.value.innerHeight + k : k;
        }
        const I = w ? N : i.value ? _ * i.value.innerWidth : 0;
        return i.value ? r.value === "right" ? i.value.innerWidth - I : -i.value.innerWidth + I : I;
      })) ?? [];
    }
  ), S = V(
    () => {
      var b;
      return p.value !== null ? (b = f.value) == null ? void 0 : b[p.value] : null;
    }
  ), M = (b) => {
    var _, w, N, I;
    const k = ((_ = f.value) == null ? void 0 : _.findIndex((B) => B === b)) ?? null;
    ba(() => {
      var B;
      s(k, f.value), Le((B = a.value) == null ? void 0 : B.$el, {
        transition: `transform ${ke.DURATION}s cubic-bezier(${ke.EASE.join(",")})`,
        transform: Ae(r.value) ? `translate3d(0, ${b}px, 0)` : `translate3d(${b}px, 0, 0)`
      });
    }), f.value && k !== f.value.length - 1 && k !== o?.value ? Le((w = n.value) == null ? void 0 : w.$el, {
      transition: `opacity ${ke.DURATION}s cubic-bezier(${ke.EASE.join(",")})`,
      opacity: "0"
    }) : Le((N = n.value) == null ? void 0 : N.$el, {
      transition: `opacity ${ke.DURATION}s cubic-bezier(${ke.EASE.join(",")})`,
      opacity: "1"
    }), e.value = k !== null ? ((I = t.value) == null ? void 0 : I[k]) ?? null : null;
  };
  Re(
    [e, f, t],
    () => {
      var b;
      if (e.value) {
        const _ = ((b = t.value) == null ? void 0 : b.findIndex((w) => w === e.value)) ?? -1;
        f.value && _ !== -1 && typeof f.value[_] == "number" && M(f.value[_]);
      }
    },
    {
      immediate: !0
      // if you want to run the effect immediately as well
    }
  );
  function E({
    draggedDistance: b,
    closeDrawer: _,
    velocity: w,
    dismissible: N
  }) {
    var I, k, B;
    if (o.value === void 0)
      return;
    const Q = r.value === "bottom" || r.value === "right" ? (S.value ?? 0) - b : (S.value ?? 0) + b, Z = p.value === o.value - 1, oe = p.value === 0, H = b > 0;
    if (Z && Le((I = n.value) == null ? void 0 : I.$el, {
      transition: `opacity ${ke.DURATION}s cubic-bezier(${ke.EASE.join(",")})`
    }), w > 2 && !H) {
      N ? _() : M(f.value[0]);
      return;
    }
    if (w > 2 && H && f && t.value) {
      M(f.value[t.value.length - 1]);
      return;
    }
    const be = (k = f.value) == null ? void 0 : k.reduce((U, O) => typeof U != "number" || typeof O != "number" ? U : Math.abs(O - Q) < Math.abs(U - Q) ? O : U), C = Ae(r.value) ? window.innerHeight : window.innerWidth;
    if (w > $l && Math.abs(b) < C * 0.4) {
      const U = H ? 1 : -1;
      if (U > 0 && c) {
        M(f.value[(((B = t.value) == null ? void 0 : B.length) ?? 0) - 1]);
        return;
      }
      if (oe && U < 0 && N && _(), p.value === null)
        return;
      M(f.value[p.value + U]);
      return;
    }
    M(be);
  }
  function D({ draggedDistance: b }) {
    var _;
    if (S.value === null)
      return;
    const w = r.value === "bottom" || r.value === "right" ? S.value - b : S.value + b;
    (r.value === "bottom" || r.value === "right") && w < f.value[f.value.length - 1] || (r.value === "top" || r.value === "left") && w > f.value[f.value.length - 1] || Le((_ = a.value) == null ? void 0 : _.$el, {
      transform: Ae(r.value) ? `translate3d(0, ${w}px, 0)` : `translate3d(${w}px, 0, 0)`
    });
  }
  function y(b, _) {
    if (!t.value || typeof p.value != "number" || !f.value || o.value === void 0)
      return null;
    const w = p.value === o.value - 1;
    if (p.value >= o.value && _)
      return 0;
    if (w && !_)
      return 1;
    if (!g.value && !w)
      return null;
    const N = w ? p.value + 1 : p.value - 1, I = w ? f.value[N] - f.value[N - 1] : f.value[N + 1] - f.value[N], k = b / Math.abs(I);
    return w ? 1 - k : k;
  }
  return {
    isLastSnapPoint: c,
    shouldFade: g,
    getPercentageDragged: y,
    activeSnapPointIndex: p,
    onRelease: E,
    onDrag: D,
    snapPointsOffset: f
  };
}
function ds() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
let ca = null;
function Kp(e) {
  const { isOpen: t, modal: a, nested: n, hasBeenOpened: o, preventScrollRestoration: s, noBodyStyles: r } = e, i = le(typeof window < "u" ? window.location.href : ""), u = le(0);
  function c() {
    if (ds() && ca === null && t.value && !r.value) {
      ca = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left,
        height: document.body.style.height
      };
      const { scrollX: p, innerHeight: f } = window;
      document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, {
        top: `${-u.value}px`,
        left: `${-p}px`,
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
    if (ds() && ca !== null && !r.value) {
      const p = -Number.parseInt(document.body.style.top, 10), f = -Number.parseInt(document.body.style.left, 10);
      Object.assign(document.body.style, ca), window.requestAnimationFrame(() => {
        if (s.value && i.value !== window.location.href) {
          i.value = window.location.href;
          return;
        }
        window.scrollTo(f, p);
      }), ca = null;
    }
  }
  return Gt(() => {
    function p() {
      u.value = window.scrollY;
    }
    p(), window.addEventListener("scroll", p), _n(() => {
      window.removeEventListener("scroll", p);
    });
  }), Re([t, o, i], () => {
    n.value || !o.value || (t.value ? (window.matchMedia("(display-mode: standalone)").matches || c(), a.value || setTimeout(() => {
      g();
    }, 500)) : g());
  }), { restorePositionSetting: g };
}
function Xp(e, t) {
  return e && e.value ? e : t;
}
function qp(e) {
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
    scrollLockTimeout: p,
    closeThreshold: f,
    activeSnapPoint: S,
    fadeFromIndex: M,
    direction: E,
    noBodyStyles: D,
    handleOnly: y,
    preventScrollRestoration: b
  } = e, _ = le(s.value ?? !1), w = le(!1), N = le(!1), I = le(!1), k = le(null), B = le(null), Q = le(null), Z = le(null), oe = le(null), H = le(!1), be = le(null), C = le(0), U = le(!1);
  le(0);
  const O = le(null);
  le(0);
  const ge = V(() => {
    var d;
    return ((d = O.value) == null ? void 0 : d.$el.getBoundingClientRect().height) || 0;
  }), W = Xp(
    e.snapPoints,
    le(void 0)
  ), Fe = V(() => {
    var d;
    return W && (((d = W.value) == null ? void 0 : d.length) ?? 0) > 0;
  }), Ve = le(null), {
    activeSnapPointIndex: Ze,
    onRelease: mt,
    snapPointsOffset: Se,
    onDrag: $e,
    shouldFade: Qe,
    getPercentageDragged: Ot
  } = Yp({
    snapPoints: W,
    activeSnapPoint: S,
    drawerRef: O,
    fadeFromIndex: M,
    overlayRef: k,
    onSnapPointChange: ye,
    direction: E
  });
  function ye(d, v) {
    W.value && d === v.length - 1 && (B.value = /* @__PURE__ */ new Date());
  }
  Kp({
    isOpen: _,
    modal: u,
    nested: i,
    hasBeenOpened: w,
    noBodyStyles: D,
    preventScrollRestoration: b
  });
  function Xe() {
    return (window.innerWidth - Ll) / window.innerWidth;
  }
  function et(d, v) {
    var $;
    if (!d)
      return !1;
    let z = d;
    const se = ($ = window.getSelection()) == null ? void 0 : $.toString(), ie = O.value ? Pa(O.value.$el, E.value) : null, ne = /* @__PURE__ */ new Date();
    if (z.hasAttribute("data-vaul-no-drag") || z.closest("[data-vaul-no-drag]"))
      return !1;
    if (E.value === "right" || E.value === "left")
      return !0;
    if (B.value && ne.getTime() - B.value.getTime() < 500)
      return !1;
    if (ie !== null && (E.value === "bottom" ? ie > 0 : ie < 0))
      return !0;
    if (se && se.length > 0)
      return !1;
    if (oe.value && ne.getTime() - oe.value.getTime() < p.value && ie === 0 || v)
      return oe.value = ne, !1;
    for (; z; ) {
      if (z.scrollHeight > z.clientHeight) {
        if (z.scrollTop !== 0)
          return oe.value = /* @__PURE__ */ new Date(), !1;
        if (z.getAttribute("role") === "dialog")
          return !0;
      }
      z = z.parentNode;
    }
    return !0;
  }
  function tt(d) {
    !r.value && !W.value || O.value && !O.value.$el.contains(d.target) || (N.value = !0, Q.value = /* @__PURE__ */ new Date(), d.target.setPointerCapture(d.pointerId), C.value = Ae(E.value) ? d.clientY : d.clientX);
  }
  function pt(d) {
    var v, $, z, se, ie, ne;
    if (O.value && N.value) {
      const T = E.value === "bottom" || E.value === "right" ? 1 : -1, F = (C.value - (Ae(E.value) ? d.clientY : d.clientX)) * T, ue = F > 0, _e = W.value && !r.value && !ue;
      if (_e && Ze.value === 0)
        return;
      const ot = Math.abs(F), At = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      let je = ot / ge.value;
      const rt = Ot(ot, ue);
      if (rt !== null && (je = rt), _e && je >= 1 || !H.value && !et(d.target, ue))
        return;
      if ((v = O?.value) == null || v.$el.classList.add(cs), H.value = !0, Le(($ = O.value) == null ? void 0 : $.$el, {
        transition: "none"
      }), Le((z = k.value) == null ? void 0 : z.$el, {
        transition: "none"
      }), W.value && $e({ draggedDistance: F }), ue && !W.value) {
        const it = Gp(F), xa = Math.min(it * -1, 0) * T;
        Le((se = O.value) == null ? void 0 : se.$el, {
          transform: Ae(E.value) ? `translate3d(0, ${xa}px, 0)` : `translate3d(${xa}px, 0, 0)`
        });
        return;
      }
      const Ka = 1 - je;
      if ((Qe.value || M.value && Ze.value === M.value - 1) && (t(je), Le(
        (ie = k.value) == null ? void 0 : ie.$el,
        {
          opacity: `${Ka}`,
          transition: "none"
        },
        !0
      )), At && k.value && c.value) {
        const it = Math.min(Xe() + je * (1 - Xe()), 1), xa = 8 - je * 8, no = Math.max(0, 14 - je * 14);
        Le(
          At,
          {
            borderRadius: `${xa}px`,
            transform: Ae(E.value) ? `scale(${it}) translate3d(0, ${no}px, 0)` : `scale(${it}) translate3d(${no}px, 0, 0)`,
            transition: "none"
          },
          !0
        );
      }
      if (!W.value) {
        const it = ot * T;
        Le((ne = O.value) == null ? void 0 : ne.$el, {
          transform: Ae(E.value) ? `translate3d(0, ${it}px, 0)` : `translate3d(${it}px, 0, 0)`
        });
      }
    }
  }
  function at() {
    var d;
    if (!O.value)
      return;
    const v = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]"), $ = Pa(O.value.$el, E.value);
    Le(O.value.$el, {
      transform: "translate3d(0, 0, 0)",
      transition: `transform ${ke.DURATION}s cubic-bezier(${ke.EASE.join(",")})`
    }), Le((d = k.value) == null ? void 0 : d.$el, {
      transition: `opacity ${ke.DURATION}s cubic-bezier(${ke.EASE.join(",")})`,
      opacity: "1"
    }), c.value && $ && $ > 0 && _.value && Le(
      v,
      {
        borderRadius: `${Dl}px`,
        overflow: "hidden",
        ...Ae(E.value) ? {
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
    O.value && (n(), d || (_.value = !1), window.setTimeout(() => {
      W.value && (S.value = W.value[0]);
    }, ke.DURATION * 1e3));
  }
  ha(() => {
    if (!_.value && c.value && Bp) {
      const d = setTimeout(() => {
        zp(document.body);
      }, 200);
      return () => clearTimeout(d);
    }
  }), Re(s, () => {
    _.value = s.value, s.value || nt();
  });
  function Tt(d) {
    if (!N.value || !O.value)
      return;
    O.value.$el.classList.remove(cs), H.value = !1, N.value = !1, Z.value = /* @__PURE__ */ new Date();
    const v = Pa(O.value.$el, E.value);
    if (!et(d.target, !1) || !v || Number.isNaN(v) || Q.value === null)
      return;
    const $ = Z.value.getTime() - Q.value.getTime(), z = C.value - (Ae(E.value) ? d.clientY : d.clientX), se = Math.abs(z) / $;
    if (se > 0.05 && (I.value = !0, window.setTimeout(() => {
      I.value = !1;
    }, 200)), W.value) {
      const ne = E.value === "bottom" || E.value === "right" ? 1 : -1;
      mt({
        draggedDistance: z * ne,
        closeDrawer: nt,
        velocity: se,
        dismissible: r.value
      }), a(!0);
      return;
    }
    if (E.value === "bottom" || E.value === "right" ? z > 0 : z < 0) {
      at(), a(!0);
      return;
    }
    if (se > $l) {
      nt(), a(!1);
      return;
    }
    const ie = Math.min(
      O.value.$el.getBoundingClientRect().height ?? 0,
      window.innerHeight
    );
    if (v >= ie * f.value) {
      nt(), a(!1);
      return;
    }
    a(!0), at();
  }
  Re(_, (d) => {
    d && (B.value = /* @__PURE__ */ new Date()), o(d);
  }, { immediate: !0 });
  function gt(d) {
    var v, $;
    const z = d ? (window.innerWidth - $a) / window.innerWidth : 1, se = d ? -16 : 0;
    be.value && window.clearTimeout(be.value), Le((v = O.value) == null ? void 0 : v.$el, {
      transition: `transform ${ke.DURATION}s cubic-bezier(${ke.EASE.join(",")})`,
      transform: `scale(${z}) translate3d(0, ${se}px, 0)`
    }), !d && ($ = O.value) != null && $.$el && (be.value = window.setTimeout(() => {
      var ie, ne;
      const T = Pa((ie = O.value) == null ? void 0 : ie.$el, E.value);
      Le((ne = O.value) == null ? void 0 : ne.$el, {
        transition: "none",
        transform: Ae(E.value) ? `translate3d(0, ${T}px, 0)` : `translate3d(${T}px, 0, 0)`
      });
    }, 500));
  }
  function Nt(d) {
    var v;
    if (d < 0)
      return;
    const $ = Ae(E.value) ? window.innerHeight : window.innerWidth, z = ($ - $a) / $, se = z + d * (1 - z), ie = -16 + d * $a;
    Le((v = O.value) == null ? void 0 : v.$el, {
      transform: Ae(E.value) ? `scale(${se}) translate3d(0, ${ie}px, 0)` : `scale(${se}) translate3d(${ie}px, 0, 0)`,
      transition: "none"
    });
  }
  function la(d) {
    var v;
    const $ = Ae(E.value) ? window.innerHeight : window.innerWidth, z = d ? ($ - $a) / $ : 1, se = d ? -16 : 0;
    d && Le((v = O.value) == null ? void 0 : v.$el, {
      transition: `transform ${ke.DURATION}s cubic-bezier(${ke.EASE.join(",")})`,
      transform: Ae(E.value) ? `scale(${z}) translate3d(0, ${se}px, 0)` : `scale(${z}) translate3d(${se}px, 0, 0)`
    });
  }
  return {
    open: s,
    isOpen: _,
    modal: u,
    keyboardIsOpen: U,
    hasBeenOpened: w,
    drawerRef: O,
    drawerHeightRef: ge,
    overlayRef: k,
    handleRef: Ve,
    isDragging: N,
    dragStartTime: Q,
    isAllowedToDrag: H,
    snapPoints: W,
    activeSnapPoint: S,
    hasSnapPoints: Fe,
    pointerStart: C,
    dismissible: r,
    snapPointsOffset: Se,
    direction: E,
    shouldFade: Qe,
    fadeFromIndex: M,
    shouldScaleBackground: c,
    setBackgroundColorOnScale: g,
    onPress: tt,
    onDrag: pt,
    onRelease: Tt,
    closeDrawer: nt,
    onNestedDrag: Nt,
    onNestedRelease: la,
    onNestedOpenChange: gt,
    emitClose: n,
    emitDrag: t,
    emitRelease: a,
    emitOpenChange: o,
    nested: i,
    handleOnly: y,
    noBodyStyles: D
  };
}
const Jp = /* @__PURE__ */ P({
  __name: "DrawerRoot",
  props: {
    activeSnapPoint: { default: void 0 },
    closeThreshold: { default: jp },
    shouldScaleBackground: { type: Boolean, default: void 0 },
    setBackgroundColorOnScale: { type: Boolean, default: !0 },
    scrollLockTimeout: { default: Hp },
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
    Gl();
    const s = V(() => n.fadeFromIndex ?? (n.snapPoints && n.snapPoints.length - 1)), r = us(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), i = us(n, "activeSnapPoint", o, {
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
    }, { closeDrawer: c, hasBeenOpened: g, modal: p, isOpen: f } = Up(
      qp({
        ...u,
        ...ln(n),
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
    }), (M, E) => (m(), A(l(xn), {
      open: l(f),
      modal: l(p),
      "onUpdate:open": S
    }, {
      default: h(() => [
        L(M.$slots, "default", { open: l(f) })
      ]),
      _: 3
    }, 8, ["open", "modal"]));
  }
}), Zp = /* @__PURE__ */ P({
  __name: "DrawerOverlay",
  setup(e) {
    const { overlayRef: t, hasSnapPoints: a, isOpen: n, shouldFade: o } = to();
    return (s, r) => (m(), A(l(En), {
      ref_key: "overlayRef",
      ref: t,
      "data-vaul-overlay": "",
      "data-vaul-snap-points": l(n) && l(a) ? "true" : "false",
      "data-vaul-snap-points-overlay": l(n) && l(o) ? "true" : "false"
    }, null, 8, ["data-vaul-snap-points", "data-vaul-snap-points-overlay"]));
  }
}), Qp = () => () => {
};
function eg() {
  const { direction: e, isOpen: t, shouldScaleBackground: a, setBackgroundColorOnScale: n, noBodyStyles: o } = to(), s = le(null), r = le(document.body.style.backgroundColor);
  function i() {
    return (window.innerWidth - Ll) / window.innerWidth;
  }
  ha((u) => {
    if (t.value && a.value) {
      s.value && clearTimeout(s.value);
      const c = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      if (!c)
        return;
      Wp(
        n.value && !o.value ? on(document.body, { background: "black" }) : Qp,
        on(c, {
          transformOrigin: Ae(e.value) ? "top" : "left",
          transitionProperty: "transform, border-radius",
          transitionDuration: `${ke.DURATION}s`,
          transitionTimingFunction: `cubic-bezier(${ke.EASE.join(",")})`
        })
      );
      const g = on(c, {
        borderRadius: `${Dl}px`,
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
const tg = /* @__PURE__ */ P({
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
      dismissible: p,
      keyboardIsOpen: f,
      closeDrawer: S,
      direction: M,
      handleOnly: E
    } = to();
    eg();
    const D = le(!1), y = V(() => n.value && n.value.length > 0 ? `${n.value[0]}px` : "0");
    function b(N) {
      if (!c.value || N.defaultPrevented) {
        N.preventDefault();
        return;
      }
      f.value && (f.value = !1), p.value ? g(!1) : N.preventDefault();
    }
    function _(N) {
      E.value || r(N);
    }
    function w(N) {
      E.value || i(N);
    }
    return ha(() => {
      o.value && window.requestAnimationFrame(() => {
        D.value = !0;
      });
    }), (N, I) => (m(), A(l(Cn), {
      ref_key: "drawerRef",
      ref: s,
      "data-vaul-drawer": "",
      "data-vaul-drawer-direction": l(M),
      "data-vaul-delayed-snap-points": D.value ? "true" : "false",
      "data-vaul-snap-points": l(a) && l(o) ? "true" : "false",
      style: Ia({ "--snap-point-height": y.value }),
      onPointerdown: _,
      onPointermove: w,
      onPointerup: l(u),
      onPointerDownOutside: b,
      onOpenAutoFocus: I[0] || (I[0] = vs(() => {
      }, ["prevent"])),
      onEscapeKeyDown: I[1] || (I[1] = (k) => {
        l(p) || k.preventDefault();
      })
    }, {
      default: h(() => [
        L(N.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-vaul-drawer-direction", "data-vaul-delayed-snap-points", "data-vaul-snap-points", "style", "onPointerup"]));
  }
}), ag = /* @__PURE__ */ P({
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
    return (s, r) => (m(), A(l(Jp), j({ "data-slot": "drawer" }, l(o)), {
      default: h(() => [
        L(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ng = /* @__PURE__ */ P({
  __name: "DrawerOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ce(t, "class");
    return (n, o) => (m(), A(l(Zp), j({ "data-slot": "drawer-overlay" }, l(a), {
      class: l(G)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80", t.class)
    }), null, 16, ["class"]));
  }
}), og = /* @__PURE__ */ P({
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
    return (s, r) => (m(), A(l(kn), null, {
      default: h(() => [
        x(ng),
        x(l(tg), j({ "data-slot": "drawer-content" }, l(o), {
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
}), sg = /* @__PURE__ */ P({
  __name: "DrawerDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ce(t, "class");
    return (n, o) => (m(), A(l(Sn), j({ "data-slot": "drawer-description" }, l(a), {
      class: l(G)("text-muted-foreground text-sm", t.class)
    }), {
      default: h(() => [
        L(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), lg = /* @__PURE__ */ P({
  __name: "DrawerHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), R("div", {
      "data-slot": "drawer-header",
      class: te(l(G)("flex flex-col gap-1.5 p-4", t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), rg = /* @__PURE__ */ P({
  __name: "DrawerTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = ce(t, "class");
    return (n, o) => (m(), A(l(On), j({ "data-slot": "drawer-title" }, l(a), {
      class: l(G)("text-foreground font-semibold", t.class)
    }), {
      default: h(() => [
        L(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ig = ["innerHTML"], ug = { class: "px-4 flex-1 overflow-auto select-text" }, cg = /* @__PURE__ */ P({
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
    return (a, n) => (m(), A(l(ag), {
      open: t.value,
      "onUpdate:open": n[1] || (n[1] = (o) => t.value = o),
      "handle-only": "",
      direction: "right",
      dismissible: !0,
      "should-scale-background": ""
    }, {
      default: h(() => [
        x(l(og), { class: "!max-w-[800px]" }, {
          default: h(() => [
            x(l(lg), { class: "!pb-0" }, {
              default: h(() => [
                x(l(rg), { class: "flex items-center gap-2" }, {
                  default: h(() => [
                    q("div", {
                      class: "[&>em]:font-normal [&>em]:!not-italic line-clamp-1 flex-1",
                      innerHTML: e.title
                    }, null, 8, ig),
                    x(Ge, {
                      variant: "ghost",
                      onClick: n[0] || (n[0] = (o) => t.value = !1)
                    }, {
                      default: h(() => [
                        x(l(_a))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                e.description ? (m(), A(l(sg), { key: 0 }, {
                  default: h(() => [
                    de(J(e.description), 1)
                  ]),
                  _: 1
                })) : ee("", !0)
              ]),
              _: 1
            }),
            q("div", ug, [
              L(a.$slots, "default")
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), dg = /* @__PURE__ */ P({
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
    const t = ve(e, "open"), a = le(!1), n = le();
    async function o(r) {
      a.value = !0;
      const i = e.dialogConfig.onOk ? await e.dialogConfig.onOk(r).catch((u) => u) : void 0;
      i === !0 || i === void 0 ? t.value = !1 : ao(i) && (n.value = i), a.value = !1;
    }
    const s = () => {
      t.value = !1;
    };
    return (r, i) => (m(), A(Ke(e.type === "drawer" ? cg : Al), j(e.dialogConfig, {
      open: t.value,
      "onUpdate:open": i[0] || (i[0] = (u) => t.value = u)
    }), {
      default: h(() => [
        (m(), A(Ke(e.componentConfig.component), j(e.componentConfig.componentProps, {
          errors: n.value,
          onSubmitSuccess: o,
          onClose: s
        }), null, 16, ["errors"]))
      ]),
      _: 1
    }, 16, ["open"]));
  }
}), fg = { class: "pt-3 flex gap-2 justify-end" }, wa = /* @__PURE__ */ P({
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
    const t = e, a = ve(e, "open"), n = We(), o = le(t.initialValue), s = le(!1), r = V(() => t.dialogConfig.cancelButtonText ?? n("common.cancel", "Cancel")), i = V(() => t.dialogConfig.okButtonText ?? n("common.ok", "Ok"));
    function u() {
      a.value = !1;
    }
    const c = le();
    async function g() {
      s.value = !0;
      const p = t.dialogConfig.onOk ? await t.dialogConfig.onOk(o.value).catch((f) => f) : void 0;
      p === !0 || p === void 0 ? a.value = !1 : ao(p) && (c.value = p), s.value = !1;
    }
    return (p, f) => (m(), A(Al, j(t.dialogConfig, {
      open: a.value,
      "onUpdate:open": f[3] || (f[3] = (S) => a.value = S)
    }), {
      default: h(() => [
        q("form", {
          onSubmit: f[2] || (f[2] = vs((S) => g(), ["prevent"])),
          class: "flex flex-col"
        }, [
          (m(), A(Ke(t.componentConfig.component), j(t.componentConfig.componentProps, {
            modelValue: o.value,
            "onUpdate:modelValue": f[0] || (f[0] = (S) => o.value = S),
            errors: c.value
          }), null, 16, ["modelValue", "errors"])),
          q("div", fg, [
            x(Ge, {
              type: "button",
              variant: "secondary",
              onClick: f[1] || (f[1] = (S) => u())
            }, {
              default: h(() => [
                de(J(r.value), 1)
              ]),
              _: 1
            }),
            x(Ge, {
              type: "submit",
              disabled: s.value
            }, {
              default: h(() => [
                q("span", null, J(i.value), 1),
                s.value ? (m(), A(El, { key: 0 })) : ee("", !0)
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
function ao(e) {
  return typeof e != "object" || e === null || Array.isArray(e) ? !1 : Object.values(e).every((t) => Array.isArray(t) && t.every((a) => typeof a == "string"));
}
const Yt = Nl();
function Rg(e, t, a = "dialog") {
  return Yt.open({
    component: dg,
    componentProps: {
      componentConfig: t,
      dialogConfig: typeof e == "string" ? { title: e } : e,
      type: a
    }
  });
}
function Bg(e, t = "Achtung", a = "Sind Sie sicher?", n) {
  return Yt.open({
    component: Pp,
    componentProps: {
      title: t,
      description: a,
      onOk: e
    },
    onClose: n
  });
}
function Fg({
  dialogConfig: e,
  initialValue: t,
  onOk: a,
  component: n,
  componentProps: o,
  onClose: s
}) {
  return Yt.open({
    component: wa,
    componentProps: {
      componentConfig: { component: n, componentProps: o },
      initialValue: t,
      dialogConfig: { ...typeof e == "string" ? { title: e } : e, onOk: a }
    },
    onClose: s
  });
}
function mg(e, t, a, n, o, s) {
  return Yt.open({
    component: wa,
    componentProps: {
      componentConfig: { component: qn, componentProps: { multiple: !0, options: t, ...o } },
      initialValue: a,
      dialogConfig: { ...typeof e == "string" ? { title: e } : e, onOk: n }
    },
    onClose: s
  });
}
function Vg(e, t, a, n, o, s) {
  return Yt.open({
    component: wa,
    componentProps: {
      componentConfig: { component: xp, componentProps: { multiple: !0, options: t, ...o } },
      initialValue: a,
      dialogConfig: { ...typeof e == "string" ? { title: e } : e, onOk: n }
    },
    onClose: s
  });
}
function Ug(e, t, a, n, o) {
  return Yt.open({
    component: wa,
    componentProps: {
      componentConfig: { component: Bt, componentProps: { type: "text", ...n } },
      initialValue: t,
      dialogConfig: { ...typeof e == "string" ? { title: e } : e, onOk: a }
    },
    onClose: o
  });
}
function zg(e, t, a, n, o) {
  return Yt.open({
    component: wa,
    componentProps: {
      componentConfig: { component: Bt, componentProps: { type: "number", ...n } },
      initialValue: t,
      dialogConfig: { ...typeof e == "string" ? { title: e } : e, onOk: a }
    },
    onClose: o
  });
}
function Gg(e, t, a, n, o, s) {
  const r = [
    { value: !0, label: n?.trueLabel || "Yes" },
    { value: !1, label: n?.falseLabel || "No" }
  ];
  return mg(
    e,
    r,
    t,
    a,
    { ...o, multiple: !1 },
    s
  );
}
const Wg = /* @__PURE__ */ P({
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
    const t = e, a = ve(e, "modelValue"), n = We(), o = V(() => [
      { value: !0, label: n("common.true", "True") },
      { value: !1, label: n("common.false", "False") }
    ]);
    return (s, r) => (m(), A(qn, {
      modelValue: a.value,
      "onUpdate:modelValue": r[0] || (r[0] = (i) => a.value = i),
      class: te(t.class),
      options: o.value
    }, null, 8, ["modelValue", "class", "options"]));
  }
}), pg = /* @__PURE__ */ P({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = Ne(e, t);
    return (s, r) => (m(), A(l(Gr), j({ "data-slot": "popover" }, l(o)), {
      default: h(() => [
        L(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gg = /* @__PURE__ */ P({
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
    return (r, i) => (m(), A(l(Wr), null, {
      default: h(() => [
        x(l(jr), j({ "data-slot": "popover-content" }, { ...l(s), ...r.$attrs }, {
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
}), vg = /* @__PURE__ */ P({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), A(l(Hr), j({ "data-slot": "popover-trigger" }, t), {
      default: h(() => [
        L(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hg = { key: 0 }, bg = { class: "text-xs" }, yg = { class: "text-xs" }, _g = { class: "flex gap-2" }, jg = /* @__PURE__ */ P({
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
    const t = e, a = We(), n = (u) => typeof u == "string", o = ve(e, "modelValue"), s = () => o.value?.push({ from: 0, value: 0 }), r = (u) => o.value.splice(u, 1), i = () => {
      o.value = [];
    };
    return (u, c) => (m(), A(l(pg), null, {
      default: h(() => [
        x(l(vg), { "as-child": "" }, {
          default: h(() => [
            x(zs, {
              class: te(t.class),
              variant: "outline"
            }, {
              default: h(() => [
                o.value.length ? (m(), A(is, {
                  key: 0,
                  value: o.value
                }, null, 8, ["value"])) : e.placeholder ? (m(), R(me, { key: 1 }, [
                  n(e.placeholder) ? (m(), R("span", hg)) : (m(), A(is, {
                    key: 1,
                    value: e.placeholder,
                    class: "text-muted-foreground"
                  }, null, 8, ["value"]))
                ], 64)) : ee("", !0)
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          _: 1
        }),
        x(l(gg), {
          class: "w-80 flex flex-col gap-2 min-w-[var(--reka-popper-anchor-width)]",
          align: "end"
        }, {
          default: h(() => [
            (m(!0), R(me, null, Ee(o.value, (g, p) => (m(), R("div", {
              key: p,
              class: "flex gap-2 items-center"
            }, [
              q("label", bg, J(l(a)("common.from", "From")) + ":", 1),
              x(Bt, {
                modelValue: o.value[p].from,
                "onUpdate:modelValue": (f) => o.value[p].from = f,
                type: "number"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              q("label", yg, J(l(a)("common.value", "Value")) + ":", 1),
              x(Bt, {
                modelValue: o.value[p].value,
                "onUpdate:modelValue": (f) => o.value[p].value = f,
                type: "number"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              x(Ge, {
                variant: "ghost",
                size: "sm",
                class: "px-1",
                onClick: (f) => r(p)
              }, {
                default: h(() => [
                  x(l(_a))
                ]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128)),
            q("div", _g, [
              x(Ge, {
                size: "sm",
                variant: "ghost",
                class: "!justify-start -mx-2 flex-1",
                onClick: c[0] || (c[0] = (g) => s())
              }, {
                default: h(() => [
                  x(l(Nn)),
                  de(" " + J(l(a)("common.add", "Add")), 1)
                ]),
                _: 1
              }),
              o.value.length > 0 ? (m(), A(Ge, {
                key: 0,
                size: "sm",
                variant: "ghost",
                class: "!justify-start -mx-2",
                onClick: c[1] || (c[1] = (g) => i())
              }, {
                default: h(() => [
                  x(l(si)),
                  de(" " + J(l(a)("common.clear", "Clear All")), 1)
                ]),
                _: 1
              })) : ee("", !0)
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Hg = /* @__PURE__ */ P({
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
    const t = e, a = ve(e, "modelValue"), n = We(), o = V(() => t.placeholder?.[0] ?? n("input.range.min", "Min")), s = V(() => t.placeholder?.[1] ?? n("input.range.max", "Max"));
    function r(i, u) {
      a.value || (a.value = [void 0, void 0]), a.value[i] = u, wn(a);
    }
    return (i, u) => (m(), R("div", {
      class: te(l(G)("flex items-center gap-0", t.class))
    }, [
      x(l(Bt), {
        "model-value": a.value?.[0],
        placeholder: o.value,
        disabled: e.disabled,
        type: "number",
        class: "flex-1 rounded-r-none pr-1",
        "onUpdate:modelValue": u[0] || (u[0] = (c) => r(0, c))
      }, null, 8, ["model-value", "placeholder", "disabled"]),
      x(l(Bt), {
        "model-value": a.value?.[1],
        placeholder: s.value,
        disabled: e.disabled,
        type: "number",
        class: "flex-1 rounded-l-none pr-1",
        "onUpdate:modelValue": u[1] || (u[1] = (c) => r(1, c))
      }, null, 8, ["model-value", "placeholder", "disabled"])
    ], 2));
  }
}), wg = /* @__PURE__ */ P({
  __name: "InputGroup",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), R("div", {
      "data-slot": "input-group",
      role: "group",
      class: te(l(G)(
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
}), xg = ["data-align"], fs = /* @__PURE__ */ P({
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
    return (n, o) => (m(), R("div", {
      role: "group",
      "data-slot": "input-group-addon",
      "data-align": t.align,
      class: te(l(G)(l(Cg)({ align: t.align }), t.class)),
      onClick: a
    }, [
      L(n.$slots, "default")
    ], 10, xg));
  }
}), Eg = /* @__PURE__ */ P({
  __name: "InputGroupButton",
  props: {
    variant: { default: "ghost" },
    size: { default: "xs" },
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), A(l(Ge), {
      "data-size": t.size,
      variant: t.variant,
      class: te(l(G)(l(Sg)({ size: t.size }), t.class))
    }, {
      default: h(() => [
        L(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-size", "variant", "class"]));
  }
}), kg = /* @__PURE__ */ P({
  __name: "InputGroupInput",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), A(l(Bt), {
      "data-slot": "input-group-control",
      class: te(l(G)(
        "flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent",
        t.class
      ))
    }, null, 8, ["class"]));
  }
}), Cg = jt(
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
), Sg = jt(
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
), Yg = /* @__PURE__ */ P({
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
    const a = e, n = t, o = We(), s = V(() => a.placeholder ?? o("input.search.placeholder", "Search...")), r = ve(e, "modelSubmit"), i = ve(e, ""), u = V(() => !!i.value && i.value.length > 0);
    Gt(() => {
      r.value && (i.value = r.value);
    });
    function c() {
      r.value = i.value || "", n("onSubmit", i.value || "");
    }
    function g() {
      r.value = "", i.value = "", n("onClear", "");
    }
    return (p, f) => (m(), A(l(wg), null, {
      default: h(() => [
        x(l(fs), { align: "inline-start" }, {
          default: h(() => [
            x(l(ni))
          ]),
          _: 1
        }),
        x(l(kg), j({
          modelValue: i.value,
          "onUpdate:modelValue": f[0] || (f[0] = (S) => i.value = S),
          type: "text",
          placeholder: s.value
        }, p.$attrs, {
          onKeydown: jl(c, ["enter"])
        }), null, 16, ["modelValue", "placeholder"]),
        u.value && e.showClearButton ? (m(), A(l(fs), {
          key: 0,
          align: "inline-end"
        }, {
          default: h(() => [
            x(l(Eg), {
              variant: "ghost",
              size: "icon-xs",
              onClick: g
            }, {
              default: h(() => [
                x(l(_a))
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : ee("", !0)
      ]),
      _: 1
    }));
  }
}), Kg = /* @__PURE__ */ P({
  __name: "Tag",
  props: {
    variant: {},
    class: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (m(), R("span", {
      class: te(l(G)(l(Og)({ variant: e.variant }), t.class))
    }, [
      L(a.$slots, "default")
    ], 2));
  }
}), Og = jt(
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
  Ag as AppSidebar,
  Ge as Button,
  zs as ButtonSelect,
  va as Checkbox,
  $g as DataTable,
  Om as DataTableColumnHeader,
  Dg as DataTableGrouped,
  Lg as DataTableTree,
  Um as DataTableViewOptions,
  Ig as DateFormat,
  is as DisplayGraduated,
  Pp as DynamicAlertDialog,
  dg as DynamicComponentDialog,
  Mg as DynamicComponentProvider,
  wa as DynamicConfirmComponentDialog,
  Al as DynamicDialog,
  cg as DynamicDrawer,
  hp as EmptyMini,
  Wg as InputBoolean,
  jg as InputGraduated,
  Hg as InputRange,
  Yg as InputSearch,
  hm as PaginationCustom,
  xp as SelectListOptions,
  qn as SelectOptions,
  Kg as Tag,
  Yf as TranslationKey,
  Bg as alert,
  Gg as confirmBoolean,
  Fg as confirmGeneric,
  zg as confirmNumber,
  mg as confirmSelect,
  Vg as confirmSelectList,
  Ug as confirmText,
  gp as dynamicComponent,
  Gs as escapeKey,
  Rg as openDynamicDialogComponent,
  We as useComponentTranslation,
  Nl as useDynamicComponent,
  Pg as useEscapeKey,
  In as useEscapeKeyWhile,
  za as useToggleState
};
