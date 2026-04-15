import * as Xa from "vue";
import { h as Qt, defineComponent as P, reactive as sn, inject as ea, computed as V, unref as l, getCurrentInstance as na, watchEffect as ha, createBlock as N, openBlock as f, mergeProps as Y, withCtx as b, renderSlot as D, watch as Re, getCurrentScope as Bl, hasInjectionContext as ps, toValue as ke, isRef as Da, onMounted as jt, nextTick as ba, readonly as gs, toRef as Vl, ref as ne, customRef as Fl, toRefs as ln, shallowRef as _t, createVNode as w, createElementVNode as q, createElementBlock as M, normalizeClass as te, normalizeStyle as Ia, createTextVNode as de, withDirectives as vs, vModelText as Ul, normalizeProps as mt, guardReactiveProps as wt, Fragment as me, toDisplayString as X, resolveDynamicComponent as Ke, createCommentVNode as Q, renderList as ye, onUnmounted as _n, useTemplateRef as zl, Text as Gl, mergeModels as Se, useModel as he, withModifiers as wn, resolveDirective as Wl, createSlots as Ct, resolveComponent as jl, triggerRef as xn, useSlots as Hl, onBeforeUnmount as Yl, withKeys as Kl } from "vue";
import { useForwardPropsEmits as $e, CollapsibleRoot as Xl, CollapsibleContent as ql, CollapsibleTrigger as Jl, DialogRoot as kn, DialogOverlay as En, DialogPortal as Cn, DialogContent as Sn, DialogClose as hs, DialogDescription as On, DialogTitle as Tn, createContext as Nn, Primitive as ya, TooltipRoot as Zl, TooltipPortal as Ql, TooltipContent as er, TooltipArrow as tr, TooltipTrigger as ar, TooltipProvider as nr, PaginationRoot as or, PaginationList as sr, useForwardProps as Ze, PaginationFirst as lr, PaginationLast as rr, PaginationNext as ir, PaginationPrev as ur, SelectRoot as cr, SelectPortal as dr, SelectContent as fr, SelectViewport as mr, SelectItem as pr, SelectItemIndicator as gr, SelectItemText as vr, SelectScrollDownButton as hr, SelectScrollUpButton as br, SelectValue as yr, DropdownMenuSeparator as _r, SelectTrigger as wr, CheckboxRoot as xr, CheckboxIndicator as kr, DropdownMenuRoot as Er, DropdownMenuCheckboxItem as Cr, DropdownMenuItemIndicator as Sr, DropdownMenuPortal as Or, DropdownMenuContent as Tr, DropdownMenuItem as Nr, DropdownMenuLabel as Ar, DropdownMenuTrigger as $r, PopoverRoot as Pr, PopoverPortal as Dr, PopoverContent as Lr, PopoverTrigger as Ir, useFilter as Mr, ListboxRoot as Rr, ListboxFilter as Br, ListboxContent as Vr, ListboxItem as Fr, ListboxItemIndicator as Ur, AlertDialogRoot as zr, AlertDialogAction as Gr, AlertDialogCancel as Wr, AlertDialogPortal as jr, AlertDialogOverlay as Hr, AlertDialogContent as Yr, AlertDialogDescription as Kr, AlertDialogTitle as Xr } from "reka-ui";
const so = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), qr = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, a, n) => n ? n.toUpperCase() : a.toLowerCase()
), Jr = (e) => {
  const t = qr(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Zr = (...e) => e.filter((t, a, n) => !!t && t.trim() !== "" && n.indexOf(t) === a).join(" ").trim(), lo = (e) => e === "";
var ua = {
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
const Qr = ({
  name: e,
  iconNode: t,
  absoluteStrokeWidth: a,
  "absolute-stroke-width": n,
  strokeWidth: o,
  "stroke-width": s,
  size: r = ua.width,
  color: i = ua.stroke,
  ...u
}, { slots: c }) => Qt(
  "svg",
  {
    ...ua,
    ...u,
    width: r,
    height: r,
    stroke: i,
    "stroke-width": lo(a) || lo(n) || a === !0 || n === !0 ? Number(o || s || ua["stroke-width"]) * 24 / Number(r) : o || s || ua["stroke-width"],
    class: Zr(
      "lucide",
      u.class,
      ...e ? [`lucide-${so(Jr(e))}-icon`, `lucide-${so(e)}`] : ["lucide-icon"]
    )
  },
  [...t.map((p) => Qt(...p)), ...c.default ? [c.default()] : []]
);
const Pe = (e, t) => (a, { slots: n, attrs: o }) => Qt(
  Qr,
  {
    ...o,
    ...a,
    iconNode: t,
    name: e
  },
  n
);
const ro = Pe("arrow-down", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
const ei = Pe("arrow-up-down", [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
]);
const io = Pe("arrow-up", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
const Ga = Pe("check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
const oa = Pe("chevron-down", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
const bs = Pe("chevron-left", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
const Ht = Pe("chevron-right", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
const ti = Pe("chevron-up", [
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
const ai = Pe("chevrons-up-down", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]);
const ni = Pe("eye-off", [
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
const oi = Pe("list-filter", [
  ["path", { d: "M2 5h20", key: "1fs1ex" }],
  ["path", { d: "M6 12h12", key: "8npq4p" }],
  ["path", { d: "M9 19h6", key: "456am0" }]
]);
const si = Pe("loader-circle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
const An = Pe("plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
const li = Pe("rotate-ccw", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
]);
const ri = Pe("search", [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
]);
const ii = Pe("settings-2", [
  ["path", { d: "M14 17H5", key: "gfn3mx" }],
  ["path", { d: "M19 7h-9", key: "6i9tg" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
]);
const ui = Pe("trash-2", [
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
const ci = typeof document < "u", di = () => {
}, Ma = Array.isArray;
function uo(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
function co(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function fi(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (var a in e) if (!mi(e[a], t[a])) return !1;
  return !0;
}
function mi(e, t) {
  return Ma(e) ? fo(e, t) : Ma(t) ? fo(t, e) : e?.valueOf() === t?.valueOf();
}
function fo(e, t) {
  return Ma(t) ? e.length === t.length && e.every((a, n) => a === t[n]) : e.length === 1 && e[0] === t;
}
function mo(e) {
  return typeof e == "string" || e && typeof e == "object";
}
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
const xs = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "router" : ""), pi = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
process.env.NODE_ENV;
function po(e) {
  const t = ea(xs), a = ea(pi);
  let n = !1, o = null;
  const s = V(() => {
    const p = l(e.to);
    return process.env.NODE_ENV !== "production" && (!n || p !== o) && (mo(p) || (n ? uo(`Invalid value for prop "to" in useLink()
- to:`, p, `
- previous to:`, o, `
- props:`, e) : uo(`Invalid value for prop "to" in useLink()
- to:`, p, `
- props:`, e)), o = p, n = !0), t.resolve(p);
  }), r = V(() => {
    const { matched: p } = s.value, { length: g } = p, m = p[g - 1], S = a.matched;
    if (!m || !S.length) return -1;
    const R = S.findIndex(co.bind(null, m));
    if (R > -1) return R;
    const E = go(p[g - 2]);
    return g > 1 && go(m) === E && S[S.length - 1].path !== E ? S.findIndex(co.bind(null, p[g - 2])) : R;
  }), i = V(() => r.value > -1 && bi(a.params, s.value.params)), u = V(() => r.value > -1 && r.value === a.matched.length - 1 && fi(a.params, s.value.params));
  function c(p = {}) {
    if (hi(p)) {
      const g = t[l(e.replace) ? "replace" : "push"](l(e.to)).catch(di);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => g), g;
    }
    return Promise.resolve();
  }
  if (process.env.NODE_ENV !== "production" && ci) {
    const p = na();
    if (p) {
      const g = {
        route: s.value,
        isActive: i.value,
        isExactActive: u.value,
        error: null
      };
      p.__vrl_devtools = p.__vrl_devtools || [], p.__vrl_devtools.push(g), ha(() => {
        g.route = s.value, g.isActive = i.value, g.isExactActive = u.value, g.error = mo(l(e.to)) ? null : 'Invalid "to" value';
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
function gi(e) {
  return e.length === 1 ? e[0] : e;
}
const vi = /* @__PURE__ */ P({
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
  useLink: po,
  setup(e, { slots: t }) {
    const a = sn(po(e)), { options: n } = ea(xs), o = V(() => ({
      [vo(e.activeClass, n.linkActiveClass, "router-link-active")]: a.isActive,
      [vo(e.exactActiveClass, n.linkExactActiveClass, "router-link-exact-active")]: a.isExactActive
    }));
    return () => {
      const s = t.default && gi(t.default(a));
      return e.custom ? s : Qt("a", {
        "aria-current": a.isExactActive ? e.ariaCurrentValue : null,
        href: a.href,
        onClick: a.navigate,
        class: o.value
      }, s);
    };
  }
}), qa = vi;
function hi(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function bi(e, t) {
  for (const a in t) {
    const n = t[a], o = e[a];
    if (typeof n == "string") {
      if (n !== o) return !1;
    } else if (!Ma(o) || o.length !== n.length || n.some((s, r) => s.valueOf() !== o[r].valueOf())) return !1;
  }
  return !0;
}
function go(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const vo = (e, t, a) => e ?? t ?? a, yi = /* @__PURE__ */ P({
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
    const o = $e(e, t);
    return (s, r) => (f(), N(l(Xl), Y({ "data-slot": "collapsible" }, l(o)), {
      default: b(({ open: i }) => [
        D(s.$slots, "default", { open: i })
      ]),
      _: 3
    }, 16));
  }
}), _i = /* @__PURE__ */ P({
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), N(l(ql), Y({ "data-slot": "collapsible-content" }, t), {
      default: b(() => [
        D(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wi = /* @__PURE__ */ P({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), N(l(Jl), Y({ "data-slot": "collapsible-trigger" }, t), {
      default: b(() => [
        D(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function ks(e) {
  var t, a, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (a = ks(e[t])) && (n && (n += " "), n += a);
  } else for (a in e) e[a] && (n && (n += " "), n += a);
  return n;
}
function Es() {
  for (var e, t, a = 0, n = "", o = arguments.length; a < o; a++) (e = arguments[a]) && (t = ks(e)) && (n && (n += " "), n += t);
  return n;
}
const ho = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, bo = Es, Yt = (e, t) => (a) => {
  var n;
  if (t?.variants == null) return bo(e, a?.class, a?.className);
  const { variants: o, defaultVariants: s } = t, r = Object.keys(o).map((c) => {
    const p = a?.[c], g = s?.[c];
    if (p === null) return null;
    const m = ho(p) || ho(g);
    return o[c][m];
  }), i = a && Object.entries(a).reduce((c, p) => {
    let [g, m] = p;
    return m === void 0 || (c[g] = m), c;
  }, {}), u = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((c, p) => {
    let { class: g, className: m, ...S } = p;
    return Object.entries(S).every((R) => {
      let [E, A] = R;
      return Array.isArray(A) ? A.includes({
        ...s,
        ...i
      }[E]) : {
        ...s,
        ...i
      }[E] === A;
    }) ? [
      ...c,
      g,
      m
    ] : c;
  }, []);
  return bo(e, r, u, a?.class, a?.className);
}, xi = (e, t) => {
  const a = new Array(e.length + t.length);
  for (let n = 0; n < e.length; n++)
    a[n] = e[n];
  for (let n = 0; n < t.length; n++)
    a[e.length + n] = t[n];
  return a;
}, ki = (e, t) => ({
  classGroupId: e,
  validator: t
}), Cs = (e = /* @__PURE__ */ new Map(), t = null, a) => ({
  nextPart: e,
  validators: t,
  classGroupId: a
}), Ra = "-", yo = [], Ei = "arbitrary..", Ci = (e) => {
  const t = Oi(e), {
    conflictingClassGroups: a,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (r) => {
      if (r.startsWith("[") && r.endsWith("]"))
        return Si(r);
      const i = r.split(Ra), u = i[0] === "" && i.length > 1 ? 1 : 0;
      return Ss(i, u, t);
    },
    getConflictingClassGroupIds: (r, i) => {
      if (i) {
        const u = n[r], c = a[r];
        return u ? c ? xi(c, u) : u : c || yo;
      }
      return a[r] || yo;
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
    const p = r[c];
    if (p.validator(i))
      return p.classGroupId;
  }
}, Si = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), a = t.indexOf(":"), n = t.slice(0, a);
  return n ? Ei + n : void 0;
})(), Oi = (e) => {
  const {
    theme: t,
    classGroups: a
  } = e;
  return Ti(a, t);
}, Ti = (e, t) => {
  const a = Cs();
  for (const n in e) {
    const o = e[n];
    $n(o, a, n, t);
  }
  return a;
}, $n = (e, t, a, n) => {
  const o = e.length;
  for (let s = 0; s < o; s++) {
    const r = e[s];
    Ni(r, t, a, n);
  }
}, Ni = (e, t, a, n) => {
  if (typeof e == "string") {
    Ai(e, t, a);
    return;
  }
  if (typeof e == "function") {
    $i(e, t, a, n);
    return;
  }
  Pi(e, t, a, n);
}, Ai = (e, t, a) => {
  const n = e === "" ? t : Os(t, e);
  n.classGroupId = a;
}, $i = (e, t, a, n) => {
  if (Di(e)) {
    $n(e(n), t, a, n);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(ki(a, e));
}, Pi = (e, t, a, n) => {
  const o = Object.entries(e), s = o.length;
  for (let r = 0; r < s; r++) {
    const [i, u] = o[r];
    $n(u, Os(t, i), a, n);
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
}, Di = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, Li = (e) => {
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
}, rn = "!", _o = ":", Ii = [], wo = (e, t, a, n, o) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: a,
  maybePostfixModifierPosition: n,
  isExternal: o
}), Mi = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: a
  } = e;
  let n = (o) => {
    const s = [];
    let r = 0, i = 0, u = 0, c;
    const p = o.length;
    for (let E = 0; E < p; E++) {
      const A = o[E];
      if (r === 0 && i === 0) {
        if (A === _o) {
          s.push(o.slice(u, E)), u = E + 1;
          continue;
        }
        if (A === "/") {
          c = E;
          continue;
        }
      }
      A === "[" ? r++ : A === "]" ? r-- : A === "(" ? i++ : A === ")" && i--;
    }
    const g = s.length === 0 ? o : o.slice(u);
    let m = g, S = !1;
    g.endsWith(rn) ? (m = g.slice(0, -1), S = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      g.startsWith(rn) && (m = g.slice(1), S = !0)
    );
    const R = c && c > u ? c - u : void 0;
    return wo(s, S, m, R);
  };
  if (t) {
    const o = t + _o, s = n;
    n = (r) => r.startsWith(o) ? s(r.slice(o.length)) : wo(Ii, !1, r, void 0, !0);
  }
  if (a) {
    const o = n;
    n = (s) => a({
      className: s,
      parseClassName: o
    });
  }
  return n;
}, Ri = (e) => {
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
}, Bi = (e) => ({
  cache: Li(e.cacheSize),
  parseClassName: Mi(e),
  sortModifiers: Ri(e),
  ...Ci(e)
}), Vi = /\s+/, Fi = (e, t) => {
  const {
    parseClassName: a,
    getClassGroupId: n,
    getConflictingClassGroupIds: o,
    sortModifiers: s
  } = t, r = [], i = e.trim().split(Vi);
  let u = "";
  for (let c = i.length - 1; c >= 0; c -= 1) {
    const p = i[c], {
      isExternal: g,
      modifiers: m,
      hasImportantModifier: S,
      baseClassName: R,
      maybePostfixModifierPosition: E
    } = a(p);
    if (g) {
      u = p + (u.length > 0 ? " " + u : u);
      continue;
    }
    let A = !!E, y = n(A ? R.substring(0, E) : R);
    if (!y) {
      if (!A) {
        u = p + (u.length > 0 ? " " + u : u);
        continue;
      }
      if (y = n(R), !y) {
        u = p + (u.length > 0 ? " " + u : u);
        continue;
      }
      A = !1;
    }
    const v = m.length === 0 ? "" : m.length === 1 ? m[0] : s(m).join(":"), _ = S ? v + rn : v, x = _ + y;
    if (r.indexOf(x) > -1)
      continue;
    r.push(x);
    const $ = o(y, A);
    for (let I = 0; I < $.length; ++I) {
      const O = $[I];
      r.push(_ + O);
    }
    u = p + (u.length > 0 ? " " + u : u);
  }
  return u;
}, Ui = (...e) => {
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
}, zi = (e, ...t) => {
  let a, n, o, s;
  const r = (u) => {
    const c = t.reduce((p, g) => g(p), e());
    return a = Bi(c), n = a.cache.get, o = a.cache.set, s = i, i(u);
  }, i = (u) => {
    const c = n(u);
    if (c)
      return c;
    const p = Fi(u, a);
    return o(u, p), p;
  };
  return s = r, (...u) => s(Ui(...u));
}, Gi = [], Me = (e) => {
  const t = (a) => a[e] || Gi;
  return t.isThemeGetter = !0, t;
}, Ns = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, As = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Wi = /^\d+\/\d+$/, ji = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Hi = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Yi = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Ki = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Xi = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, qt = (e) => Wi.test(e), re = (e) => !!e && !Number.isNaN(Number(e)), Et = (e) => !!e && Number.isInteger(Number(e)), Ja = (e) => e.endsWith("%") && re(e.slice(0, -1)), ht = (e) => ji.test(e), qi = () => !0, Ji = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Hi.test(e) && !Yi.test(e)
), $s = () => !1, Zi = (e) => Ki.test(e), Qi = (e) => Xi.test(e), eu = (e) => !J(e) && !Z(e), tu = (e) => sa(e, Ls, $s), J = (e) => Ns.test(e), It = (e) => sa(e, Is, Ji), Za = (e) => sa(e, lu, re), xo = (e) => sa(e, Ps, $s), au = (e) => sa(e, Ds, Qi), ka = (e) => sa(e, Ms, Zi), Z = (e) => As.test(e), ca = (e) => la(e, Is), nu = (e) => la(e, ru), ko = (e) => la(e, Ps), ou = (e) => la(e, Ls), su = (e) => la(e, Ds), Ea = (e) => la(e, Ms, !0), sa = (e, t, a) => {
  const n = Ns.exec(e);
  return n ? n[1] ? t(n[1]) : a(n[2]) : !1;
}, la = (e, t, a = !1) => {
  const n = As.exec(e);
  return n ? n[1] ? t(n[1]) : a : !1;
}, Ps = (e) => e === "position" || e === "percentage", Ds = (e) => e === "image" || e === "url", Ls = (e) => e === "length" || e === "size" || e === "bg-size", Is = (e) => e === "length", lu = (e) => e === "number", ru = (e) => e === "family-name", Ms = (e) => e === "shadow", iu = () => {
  const e = Me("color"), t = Me("font"), a = Me("text"), n = Me("font-weight"), o = Me("tracking"), s = Me("leading"), r = Me("breakpoint"), i = Me("container"), u = Me("spacing"), c = Me("radius"), p = Me("shadow"), g = Me("inset-shadow"), m = Me("text-shadow"), S = Me("drop-shadow"), R = Me("blur"), E = Me("perspective"), A = Me("aspect"), y = Me("ease"), v = Me("animate"), _ = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], x = () => [
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
  ], $ = () => [...x(), Z, J], I = () => ["auto", "hidden", "clip", "visible", "scroll"], O = () => ["auto", "contain", "none"], B = () => [Z, J, u], j = () => [qt, "full", "auto", ...B()], ue = () => [Et, "none", "subgrid", Z, J], be = () => ["auto", {
    span: ["full", Et, Z, J]
  }, Et, Z, J], W = () => [Et, "auto", Z, J], le = () => ["auto", "min", "max", "fr", Z, J], z = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], ee = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], k = () => ["auto", ...B()], H = () => [qt, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...B()], C = () => [e, Z, J], pe = () => [...x(), ko, xo, {
    position: [Z, J]
  }], Oe = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], Le = () => ["auto", "cover", "contain", ou, tu, {
    size: [Z, J]
  }], Qe = () => [Ja, ca, It], Te = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    c,
    Z,
    J
  ], Ie = () => ["", re, ca, It], et = () => ["solid", "dashed", "dotted", "double"], $t = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], we = () => [re, Ja, ko, xo], qe = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    R,
    Z,
    J
  ], tt = () => ["none", re, Z, J], at = () => ["none", re, Z, J], gt = () => [re, Z, J], nt = () => [qt, "full", ...B()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [ht],
      breakpoint: [ht],
      color: [qi],
      container: [ht],
      "drop-shadow": [ht],
      ease: ["in", "out", "in-out"],
      font: [eu],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [ht],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [ht],
      shadow: [ht],
      spacing: ["px", re],
      text: [ht],
      "text-shadow": [ht],
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
        aspect: ["auto", "square", qt, J, Z, A]
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
        columns: [re, J, Z, i]
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
        object: $()
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
        overscroll: O()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": O()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": O()
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
        inset: j()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": j()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": j()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: j()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: j()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: j()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: j()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: j()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: j()
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
        z: [Et, "auto", Z, J]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [qt, "full", "auto", i, ...B()]
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
        flex: [re, qt, "auto", "initial", "none", J]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", re, Z, J]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", re, Z, J]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Et, "first", "last", "none", Z, J]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": ue()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: be()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": W()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": W()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": ue()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: be()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": W()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": W()
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
        "auto-cols": le()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": le()
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
        justify: [...z(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...ee(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...ee()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...z()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...ee(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...ee(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": z()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...ee(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...ee()]
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
        m: k()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: k()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: k()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: k()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: k()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: k()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: k()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: k()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: k()
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
        size: H()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [i, "screen", ...H()]
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
          ...H()
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
          ...H()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...H()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...H()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...H()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", a, ca, It]
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
        font: [n, Z, Za]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Ja, J]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [nu, J, t]
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
        tracking: [o, Z, J]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [re, "none", Z, Za]
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
        "list-image": ["none", Z, J]
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
        list: ["disc", "decimal", "none", Z, J]
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
        placeholder: C()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: C()
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
        decoration: [...et(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [re, "from-font", "auto", Z, It]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: C()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [re, "auto", Z, J]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Z, J]
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
        content: ["none", Z, J]
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
        bg: pe()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: Oe()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: Le()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Et, Z, J],
          radial: ["", Z, J],
          conic: [Et, Z, J]
        }, su, au]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: C()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: Qe()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: Qe()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: Qe()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: C()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: C()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: C()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: Te()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": Te()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": Te()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": Te()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": Te()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": Te()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": Te()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": Te()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": Te()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": Te()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": Te()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": Te()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": Te()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": Te()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": Te()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: Ie()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": Ie()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": Ie()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": Ie()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": Ie()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": Ie()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": Ie()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": Ie()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": Ie()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": Ie()
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
        "divide-y": Ie()
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
        border: [...et(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...et(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: C()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": C()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": C()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": C()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": C()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": C()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": C()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": C()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": C()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: C()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...et(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [re, Z, J]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", re, ca, It]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: C()
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
          p,
          Ea,
          ka
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: C()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", g, Ea, ka]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": C()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: Ie()
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
        ring: C()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [re, It]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": C()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": Ie()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": C()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", m, Ea, ka]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": C()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [re, Z, J]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...$t(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": $t()
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
        "mask-linear-from": we()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": we()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": C()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": C()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": we()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": we()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": C()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": C()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": we()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": we()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": C()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": C()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": we()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": we()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": C()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": C()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": we()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": we()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": C()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": C()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": we()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": we()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": C()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": C()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": we()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": we()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": C()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": C()
      }],
      "mask-image-radial": [{
        "mask-radial": [Z, J]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": we()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": we()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": C()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": C()
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
        "mask-conic": [re]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": we()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": we()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": C()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": C()
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
        mask: pe()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: Oe()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: Le()
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
        mask: ["none", Z, J]
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
          Z,
          J
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: qe()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [re, Z, J]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [re, Z, J]
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
          Ea,
          ka
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": C()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", re, Z, J]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [re, Z, J]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", re, Z, J]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [re, Z, J]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", re, Z, J]
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
          Z,
          J
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": qe()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [re, Z, J]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [re, Z, J]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", re, Z, J]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [re, Z, J]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", re, Z, J]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [re, Z, J]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [re, Z, J]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", re, Z, J]
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", Z, J]
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
        duration: [re, "initial", Z, J]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", y, Z, J]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [re, Z, J]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", v, Z, J]
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
        perspective: [E, Z, J]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": $()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: tt()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": tt()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": tt()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": tt()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: at()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": at()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": at()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": at()
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
        skew: gt()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": gt()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": gt()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [Z, J, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: $()
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
        translate: nt()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": nt()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": nt()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": nt()
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
        accent: C()
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
        caret: C()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Z, J]
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
        "will-change": ["auto", "scroll", "contents", "transform", Z, J]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...C()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [re, ca, It, Za]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...C()]
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
}, uu = /* @__PURE__ */ zi(iu);
function G(...e) {
  return uu(Es(e));
}
const cu = /* @__PURE__ */ P({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = $e(e, t);
    return (s, r) => (f(), N(l(kn), Y({ "data-slot": "sheet" }, l(o)), {
      default: b(() => [
        D(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qa = /* @__PURE__ */ new WeakMap(), du = /* @__NO_SIDE_EFFECTS__ */ (...e) => {
  var t;
  const a = e[0], n = (t = na()) === null || t === void 0 ? void 0 : t.proxy, o = n ?? Bl();
  if (o == null && !ps()) throw new Error("injectLocal must be called in setup");
  return o && Qa.has(o) && a in Qa.get(o) ? Qa.get(o)[a] : ea(...e);
}, Rs = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const fu = (e) => typeof e < "u", mu = Object.prototype.toString, pu = (e) => mu.call(e) === "[object Object]", gu = () => {
};
function vu(...e) {
  if (e.length !== 1) return Vl(...e);
  const t = e[0];
  return typeof t == "function" ? gs(Fl(() => ({
    get: t,
    set: gu
  }))) : ne(t);
}
function hu(e, t) {
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
function bu(e = Bs, t = {}) {
  const { initialState: a = "active" } = t, n = vu(a === "active");
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
    isActive: gs(n),
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
function yu(e) {
  return na();
}
function _u(e) {
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
function wu(e) {
  return _u(V(e));
}
function fe(e, ...t) {
  const a = t.flat(), n = a[0];
  return wu(() => Object.fromEntries(typeof n == "function" ? Object.entries(ln(e)).filter(([o, s]) => !n(ke(s), o)) : Object.entries(ln(e)).filter((o) => !a.includes(o[0]))));
}
function xu(e, t, a = {}) {
  const { eventFilter: n = Bs, ...o } = a;
  return Re(e, hu(n, t), o);
}
function ku(e, t, a = {}) {
  const { eventFilter: n, initialState: o = "active", ...s } = a, { eventFilter: r, pause: i, resume: u, isActive: c } = bu(n, { initialState: o });
  return {
    stop: xu(e, t, {
      ...s,
      eventFilter: r
    }),
    pause: i,
    resume: u,
    isActive: c
  };
}
const Eu = ku;
function Cu(e, t = !0, a) {
  yu() ? jt(e, a) : t ? e() : ba(e);
}
const Su = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[T\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/i, Ou = /[YMDHhms]o|\[([^\]]+)\]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|z{1,4}|SSS/g;
function Tu(e, t, a, n) {
  let o = e < 12 ? "AM" : "PM";
  return n && (o = o.split("").reduce((s, r) => s += `${r}.`, "")), a ? o.toLowerCase() : o;
}
function Mt(e) {
  const t = [
    "th",
    "st",
    "nd",
    "rd"
  ], a = e % 100;
  return e + (t[(a - 20) % 10] || t[a] || t[0]);
}
function Nu(e, t, a = {}) {
  var n;
  const o = e.getFullYear(), s = e.getMonth(), r = e.getDate(), i = e.getHours(), u = e.getMinutes(), c = e.getSeconds(), p = e.getMilliseconds(), g = e.getDay(), m = (n = a.customMeridiem) !== null && n !== void 0 ? n : Tu, S = (E) => {
    var A;
    return (A = E.split(" ")[1]) !== null && A !== void 0 ? A : "";
  }, R = {
    Yo: () => Mt(o),
    YY: () => String(o).slice(-2),
    YYYY: () => o,
    M: () => s + 1,
    Mo: () => Mt(s + 1),
    MM: () => `${s + 1}`.padStart(2, "0"),
    MMM: () => e.toLocaleDateString(ke(a.locales), { month: "short" }),
    MMMM: () => e.toLocaleDateString(ke(a.locales), { month: "long" }),
    D: () => String(r),
    Do: () => Mt(r),
    DD: () => `${r}`.padStart(2, "0"),
    H: () => String(i),
    Ho: () => Mt(i),
    HH: () => `${i}`.padStart(2, "0"),
    h: () => `${i % 12 || 12}`.padStart(1, "0"),
    ho: () => Mt(i % 12 || 12),
    hh: () => `${i % 12 || 12}`.padStart(2, "0"),
    m: () => String(u),
    mo: () => Mt(u),
    mm: () => `${u}`.padStart(2, "0"),
    s: () => String(c),
    so: () => Mt(c),
    ss: () => `${c}`.padStart(2, "0"),
    SSS: () => `${p}`.padStart(3, "0"),
    d: () => g,
    dd: () => e.toLocaleDateString(ke(a.locales), { weekday: "narrow" }),
    ddd: () => e.toLocaleDateString(ke(a.locales), { weekday: "short" }),
    dddd: () => e.toLocaleDateString(ke(a.locales), { weekday: "long" }),
    A: () => m(i, u),
    AA: () => m(i, u, !1, !0),
    a: () => m(i, u, !0),
    aa: () => m(i, u, !0, !0),
    z: () => S(e.toLocaleDateString(ke(a.locales), { timeZoneName: "shortOffset" })),
    zz: () => S(e.toLocaleDateString(ke(a.locales), { timeZoneName: "shortOffset" })),
    zzz: () => S(e.toLocaleDateString(ke(a.locales), { timeZoneName: "shortOffset" })),
    zzzz: () => S(e.toLocaleDateString(ke(a.locales), { timeZoneName: "longOffset" }))
  };
  return t.replace(Ou, (E, A) => {
    var y, v;
    return (y = A ?? ((v = R[E]) === null || v === void 0 ? void 0 : v.call(R))) !== null && y !== void 0 ? y : E;
  });
}
function Au(e) {
  if (e === null) return /* @__PURE__ */ new Date(NaN);
  if (e === void 0) return /* @__PURE__ */ new Date();
  if (e instanceof Date) return new Date(e);
  if (typeof e == "string" && !/Z$/i.test(e)) {
    const t = e.match(Su);
    if (t) {
      const a = t[2] - 1 || 0, n = (t[7] || "0").substring(0, 3);
      return new Date(t[1], a, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, n);
    }
  }
  return new Date(e);
}
// @__NO_SIDE_EFFECTS__
function $u(e, t = "HH:mm:ss", a = {}) {
  return V(() => Nu(Au(ke(e)), ke(t), a));
}
function Pu(e, t, a) {
  return Re(e, t, {
    ...a,
    immediate: !0
  });
}
const Rt = Rs ? window : void 0, Vs = Rs ? window.document : void 0;
function Du(e) {
  var t;
  const a = ke(e);
  return (t = a?.$el) !== null && t !== void 0 ? t : a;
}
function Ft(...e) {
  const t = (n, o, s, r) => (n.addEventListener(o, s, r), () => n.removeEventListener(o, s, r)), a = V(() => {
    const n = en(ke(e[0])).filter((o) => o != null);
    return n.every((o) => typeof o != "string") ? n : void 0;
  });
  return Pu(() => {
    var n, o;
    return [
      (n = (o = a.value) === null || o === void 0 ? void 0 : o.map((s) => Du(s))) !== null && n !== void 0 ? n : [Rt].filter((s) => s != null),
      en(ke(a.value ? e[1] : e[0])),
      en(l(a.value ? e[2] : e[1])),
      ke(a.value ? e[3] : e[2])
    ];
  }, ([n, o, s, r], i, u) => {
    if (!n?.length || !o?.length || !s?.length) return;
    const c = pu(r) ? { ...r } : r, p = n.flatMap((g) => o.flatMap((m) => s.map((S) => t(g, m, S, c))));
    u(() => {
      p.forEach((g) => g());
    });
  }, { flush: "post" });
}
// @__NO_SIDE_EFFECTS__
function Lu() {
  const e = _t(!1), t = na();
  return t && jt(() => {
    e.value = !0;
  }, t), e;
}
// @__NO_SIDE_EFFECTS__
function Iu(e) {
  const t = /* @__PURE__ */ Lu();
  return V(() => (t.value, !!e()));
}
const Mu = /* @__PURE__ */ Symbol("vueuse-ssr-width");
// @__NO_SIDE_EFFECTS__
function Ru() {
  const e = ps() ? /* @__PURE__ */ du(Mu, null) : null;
  return typeof e == "number" ? e : void 0;
}
function Bu(e, t = {}) {
  const { window: a = Rt, ssrWidth: n = /* @__PURE__ */ Ru() } = t, o = /* @__PURE__ */ Iu(() => a && "matchMedia" in a && typeof a.matchMedia == "function"), s = _t(typeof n == "number"), r = _t(), i = _t(!1), u = (c) => {
    i.value = c.matches;
  };
  return ha(() => {
    if (s.value) {
      s.value = !o.value, i.value = ke(e).split(",").some((c) => {
        const p = c.includes("not all"), g = c.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), m = c.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let S = !!(g || m);
        return g && S && (S = n >= Eo(g[1])), m && S && (S = n <= Eo(m[1])), p ? !S : S;
      });
      return;
    }
    o.value && (r.value = a.matchMedia(ke(e)), i.value = r.value.matches);
  }), Ft(r, "change", u, { passive: !0 }), V(() => i.value);
}
function Vu(e) {
  return JSON.parse(JSON.stringify(e));
}
const Ca = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Sa = "__vueuse_ssr_handlers__", Fu = /* @__PURE__ */ Uu();
function Uu() {
  return Sa in Ca || (Ca[Sa] = Ca[Sa] || {}), Ca[Sa];
}
function zu(e, t) {
  return Fu[e] || t;
}
function Gu(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const Wu = {
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
}, Co = "vueuse-storage";
function ju(e, t, a, n = {}) {
  var o;
  const { flush: s = "pre", deep: r = !0, listenToStorageChanges: i = !0, writeDefaults: u = !0, mergeDefaults: c = !1, shallow: p, window: g = Rt, eventFilter: m, onError: S = (z) => {
    console.error(z);
  }, initOnMounted: R } = n, E = (p ? _t : ne)(typeof t == "function" ? t() : t), A = V(() => ke(e));
  if (!a) try {
    a = zu("getDefaultStorage", () => Rt?.localStorage)();
  } catch (z) {
    S(z);
  }
  if (!a) return E;
  const y = ke(t), v = Gu(y), _ = (o = n.serializer) !== null && o !== void 0 ? o : Wu[v], { pause: x, resume: $ } = Eu(E, (z) => ue(z), {
    flush: s,
    deep: r,
    eventFilter: m
  });
  Re(A, () => W(), { flush: s });
  let I = !1;
  const O = (z) => {
    R && !I || W(z);
  }, B = (z) => {
    R && !I || le(z);
  };
  g && i && (a instanceof Storage ? Ft(g, "storage", O, { passive: !0 }) : Ft(g, Co, B)), R ? Cu(() => {
    I = !0, W();
  }) : W();
  function j(z, ee) {
    if (g) {
      const k = {
        key: A.value,
        oldValue: z,
        newValue: ee,
        storageArea: a
      };
      g.dispatchEvent(a instanceof Storage ? new StorageEvent("storage", k) : new CustomEvent(Co, { detail: k }));
    }
  }
  function ue(z) {
    try {
      const ee = a.getItem(A.value);
      if (z == null)
        j(ee, null), a.removeItem(A.value);
      else {
        const k = _.write(z);
        ee !== k && (a.setItem(A.value, k), j(ee, k));
      }
    } catch (ee) {
      S(ee);
    }
  }
  function be(z) {
    const ee = z ? z.newValue : a.getItem(A.value);
    if (ee == null)
      return u && y != null && a.setItem(A.value, _.write(y)), y;
    if (!z && c) {
      const k = _.read(ee);
      return typeof c == "function" ? c(k, y) : v === "object" && !Array.isArray(k) ? {
        ...y,
        ...k
      } : k;
    } else return typeof ee != "string" ? ee : _.read(ee);
  }
  function W(z) {
    if (!(z && z.storageArea !== a)) {
      if (z && z.key == null) {
        E.value = y;
        return;
      }
      if (!(z && z.key !== A.value)) {
        x();
        try {
          const ee = _.write(E.value);
          (z === void 0 || z?.newValue !== ee) && (E.value = be(z));
        } catch (ee) {
          S(ee);
        } finally {
          z ? ba($) : $();
        }
      }
    }
  }
  function le(z) {
    W(z.detail);
  }
  return E;
}
const Hu = [
  "mousedown",
  "mouseup",
  "keydown",
  "keyup"
];
// @__NO_SIDE_EFFECTS__
function Yu(e, t = {}) {
  const { events: a = Hu, document: n = Vs, initial: o = null } = t, s = _t(o);
  return n && a.forEach((r) => {
    Ft(n, r, (i) => {
      typeof i.getModifierState == "function" && (s.value = i.getModifierState(e));
    }, { passive: !0 });
  }), s;
}
function Fs(e, t, a = {}) {
  const { window: n = Rt } = a;
  return ju(e, t, n?.sessionStorage, a);
}
// @__NO_SIDE_EFFECTS__
function Us(e, t, a, n = {}) {
  var o, s;
  const { clone: r = !1, passive: i = !1, eventName: u, deep: c = !1, defaultValue: p, shouldEmit: g } = n, m = na(), S = a || m?.emit || (m == null || (o = m.$emit) === null || o === void 0 ? void 0 : o.bind(m)) || (m == null || (s = m.proxy) === null || s === void 0 || (s = s.$emit) === null || s === void 0 ? void 0 : s.bind(m?.proxy));
  let R = u;
  t || (t = "modelValue"), R = R || `update:${t.toString()}`;
  const E = (v) => r ? typeof r == "function" ? r(v) : Vu(v) : v, A = () => fu(e[t]) ? E(e[t]) : p, y = (v) => {
    g ? g(v) && S(R, v) : S(R, v);
  };
  if (i) {
    const v = ne(A());
    let _ = !1;
    return Re(() => e[t], (x) => {
      _ || (_ = !0, v.value = E(x), ba(() => _ = !1));
    }), Re(v, (x) => {
      !_ && (x !== e[t] || c) && y(x);
    }, { deep: c }), v;
  } else return V({
    get() {
      return A();
    },
    set(v) {
      y(v);
    }
  });
}
const Ku = /* @__PURE__ */ P({
  __name: "SheetOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = fe(t, "class");
    return (n, o) => (f(), N(l(En), Y({
      "data-slot": "sheet-overlay",
      class: l(G)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80", t.class)
    }, l(a)), {
      default: b(() => [
        D(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Xu = /* @__PURE__ */ P({
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
    const a = e, n = t, o = fe(a, "class", "side"), s = $e(o, n);
    return (r, i) => (f(), N(l(Cn), null, {
      default: b(() => [
        w(Ku),
        w(l(Sn), Y({
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
          default: b(() => [
            D(r.$slots, "default"),
            w(l(hs), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
              default: b(() => [
                w(l(_a), { class: "size-4" }),
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
}), qu = /* @__PURE__ */ P({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = fe(t, "class");
    return (n, o) => (f(), N(l(On), Y({
      "data-slot": "sheet-description",
      class: l(G)("text-muted-foreground text-sm", t.class)
    }, l(a)), {
      default: b(() => [
        D(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Ju = /* @__PURE__ */ P({
  __name: "SheetHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), M("div", {
      "data-slot": "sheet-header",
      class: te(l(G)("flex flex-col gap-1.5 p-4", t.class))
    }, [
      D(a.$slots, "default")
    ], 2));
  }
}), Zu = /* @__PURE__ */ P({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = fe(t, "class");
    return (n, o) => (f(), N(l(Tn), Y({
      "data-slot": "sheet-title",
      class: l(G)("text-foreground font-semibold", t.class)
    }, l(a)), {
      default: b(() => [
        D(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), So = "sidebar_state", Qu = 3600 * 24 * 7, ec = "16rem", tc = "18rem", ac = "3rem", nc = "b", [Pn, oc] = Nn("Sidebar"), sc = { class: "flex h-full w-full flex-col" }, lc = ["data-state", "data-collapsible", "data-variant", "data-side"], rc = {
  "data-sidebar": "sidebar",
  class: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, ic = /* @__PURE__ */ P({
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
    return (r, i) => e.collapsible === "none" ? (f(), M("div", Y({
      key: 0,
      "data-slot": "sidebar",
      class: l(G)("bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col", t.class)
    }, r.$attrs), [
      D(r.$slots, "default")
    ], 16)) : l(a) ? (f(), N(l(cu), Y({
      key: 1,
      open: l(o)
    }, r.$attrs, { "onUpdate:open": l(s) }), {
      default: b(() => [
        w(l(Xu), {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar",
          "data-mobile": "true",
          side: e.side,
          class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
          style: Ia({
            "--sidebar-width": l(tc)
          })
        }, {
          default: b(() => [
            w(Ju, { class: "sr-only" }, {
              default: b(() => [
                w(Zu, null, {
                  default: b(() => [...i[0] || (i[0] = [
                    de("Sidebar", -1)
                  ])]),
                  _: 1
                }),
                w(qu, null, {
                  default: b(() => [...i[1] || (i[1] = [
                    de("Displays the mobile sidebar.", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            q("div", sc, [
              D(r.$slots, "default")
            ])
          ]),
          _: 3
        }, 8, ["side", "style"])
      ]),
      _: 3
    }, 16, ["open", "onUpdate:open"])) : (f(), M("div", {
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
      q("div", Y({
        class: l(G)(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          e.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          e.variant === "floating" || e.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          t.class
        )
      }, r.$attrs), [
        q("div", rc, [
          D(r.$slots, "default")
        ])
      ], 16)
    ], 8, lc));
  }
}), uc = /* @__PURE__ */ P({
  __name: "SidebarContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), M("div", {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      class: te(l(G)("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", t.class))
    }, [
      D(a.$slots, "default")
    ], 2));
  }
}), cc = /* @__PURE__ */ P({
  __name: "SidebarFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), M("div", {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      class: te(l(G)("flex flex-col gap-2 p-2", t.class))
    }, [
      D(a.$slots, "default")
    ], 2));
  }
}), dc = /* @__PURE__ */ P({
  __name: "SidebarGroup",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), M("div", {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      class: te(l(G)("relative flex w-full min-w-0 flex-col p-2", t.class))
    }, [
      D(a.$slots, "default")
    ], 2));
  }
}), fc = /* @__PURE__ */ P({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), N(l(ya), {
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
      default: b(() => [
        D(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), mc = /* @__PURE__ */ P({
  __name: "SidebarHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), M("div", {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      class: te(l(G)("flex flex-col gap-2 p-2", t.class))
    }, [
      D(a.$slots, "default")
    ], 2));
  }
}), St = /* @__PURE__ */ P({
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
    return (s, r) => vs((f(), M("input", {
      "onUpdate:modelValue": r[0] || (r[0] = (i) => Da(o) ? o.value = i : null),
      "data-slot": "input",
      class: te(l(G)(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        a.class
      ))
    }, null, 2)), [
      [Ul, l(o)]
    ]);
  }
}), pc = /* @__PURE__ */ P({
  __name: "SidebarMenu",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), M("ul", {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      class: te(l(G)("flex w-full min-w-0 flex-col gap-1", t.class))
    }, [
      D(a.$slots, "default")
    ], 2));
  }
}), gc = /* @__PURE__ */ P({
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
    const o = $e(e, t);
    return (s, r) => (f(), N(l(Zl), Y({ "data-slot": "tooltip" }, l(o)), {
      default: b(() => [
        D(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vc = /* @__PURE__ */ P({
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
    const a = e, n = t, o = fe(a, "class"), s = $e(o, n);
    return (r, i) => (f(), N(l(Ql), null, {
      default: b(() => [
        w(l(er), Y({ "data-slot": "tooltip-content" }, { ...l(s), ...r.$attrs }, {
          class: l(G)("bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance", a.class)
        }), {
          default: b(() => [
            D(r.$slots, "default"),
            w(l(tr), { class: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), hc = /* @__PURE__ */ P({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), N(l(ar), Y({ "data-slot": "tooltip-trigger" }, t), {
      default: b(() => [
        D(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Oo = /* @__PURE__ */ P({
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
    return (a, n) => (f(), N(l(ya), Y({
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": e.size,
      "data-active": e.isActive,
      class: l(G)(l(xc)({ variant: e.variant, size: e.size }), t.class),
      as: e.as,
      "as-child": e.asChild
    }, a.$attrs), {
      default: b(() => [
        D(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), To = /* @__PURE__ */ P({
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
    const t = e, { isMobile: a, state: n } = Pn(), o = fe(t, "tooltip");
    return (s, r) => e.tooltip ? (f(), N(l(gc), { key: 1 }, {
      default: b(() => [
        w(l(hc), { "as-child": "" }, {
          default: b(() => [
            w(Oo, mt(wt({ ...l(o), ...s.$attrs })), {
              default: b(() => [
                D(s.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        w(l(vc), {
          side: "right",
          align: "center",
          hidden: l(n) !== "collapsed" || l(a)
        }, {
          default: b(() => [
            typeof e.tooltip == "string" ? (f(), M(me, { key: 0 }, [
              de(X(e.tooltip), 1)
            ], 64)) : (f(), N(Ke(e.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (f(), N(Oo, mt(Y({ key: 0 }, { ...l(o), ...s.$attrs })), {
      default: b(() => [
        D(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), No = /* @__PURE__ */ P({
  __name: "SidebarMenuItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), M("li", {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      class: te(l(G)("group/menu-item relative", t.class))
    }, [
      D(a.$slots, "default")
    ], 2));
  }
}), bc = /* @__PURE__ */ P({
  __name: "SidebarMenuSub",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), M("ul", {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-badge",
      class: te(l(G)(
        "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        t.class
      ))
    }, [
      D(a.$slots, "default")
    ], 2));
  }
}), yc = /* @__PURE__ */ P({
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
    return (a, n) => (f(), N(l(ya), {
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
      default: b(() => [
        D(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-size", "data-active", "class"]));
  }
}), _c = /* @__PURE__ */ P({
  __name: "SidebarMenuSubItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), M("li", {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      class: te(l(G)("group/menu-sub-item relative", t.class))
    }, [
      D(a.$slots, "default")
    ], 2));
  }
});
Vs?.cookie.includes(`${So}=false`);
const wc = /* @__PURE__ */ P({
  __name: "SidebarRail",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { toggleSidebar: a } = Pn();
    return (n, o) => (f(), M("button", {
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
      D(n.$slots, "default")
    ], 2));
  }
}), Fe = /* @__PURE__ */ P({
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
    return (a, n) => (f(), N(l(ya), {
      "data-slot": "button",
      as: e.as,
      "as-child": e.asChild,
      class: te(l(G)(l(Ot)({ variant: e.variant, size: e.size }), t.class))
    }, {
      default: b(() => [
        D(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), Ot = Yt(
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
), xc = Yt(
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
), kc = {
  key: 0,
  class: "font-semibold text-sm mt-4 ml-2 truncate"
}, Ec = { key: 1 }, Bg = /* @__PURE__ */ P({
  __name: "AppSidebar",
  props: {
    config: {},
    currentPath: { default: "" }
  },
  setup(e) {
    function t(a, n) {
      return !!(a.url === n || a.items?.some((o) => o.url === n));
    }
    return (a, n) => (f(), N(l(ic), {
      collapsible: e.config.collapsible || "icon"
    }, {
      default: b(() => [
        w(l(mc), null, {
          default: b(() => [
            D(a.$slots, "header", {}, () => [
              e.config.title ? (f(), M("div", kc, X(e.config.title), 1)) : Q("", !0)
            ])
          ]),
          _: 3
        }),
        w(l(uc), null, {
          default: b(() => [
            w(l(pc), null, {
              default: b(() => [
                (f(!0), M(me, null, ye(e.config.menuGroups, (o, s) => (f(), N(l(dc), {
                  key: s,
                  class: "!pb-0"
                }, {
                  default: b(() => [
                    o.title ? (f(), N(l(fc), { key: 0 }, {
                      default: b(() => [
                        de(X(o.title), 1)
                      ]),
                      _: 2
                    }, 1024)) : Q("", !0),
                    (f(!0), M(me, null, ye(o.items, (r) => (f(), M(me, {
                      key: r.title
                    }, [
                      r.items?.length ? (f(), N(l(yi), {
                        key: 0,
                        "as-child": "",
                        "default-open": t(r, e.currentPath),
                        class: "group/collapsible"
                      }, {
                        default: b(() => [
                          w(l(No), null, {
                            default: b(() => [
                              w(l(wi), { "as-child": "" }, {
                                default: b(() => [
                                  w(l(To), {
                                    tooltip: r.title,
                                    disabled: r.disabled
                                  }, {
                                    default: b(() => [
                                      r.icon ? (f(), N(Ke(r.icon), { key: 0 })) : Q("", !0),
                                      r.url ? (f(), N(l(qa), {
                                        key: 2,
                                        to: r.url
                                      }, {
                                        default: b(() => [
                                          q("span", null, X(r.title), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["to"])) : (f(), M("span", Ec, X(r.title), 1)),
                                      w(l(Ht), { class: "ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" })
                                    ]),
                                    _: 2
                                  }, 1032, ["tooltip", "disabled"])
                                ]),
                                _: 2
                              }, 1024),
                              w(l(_i), null, {
                                default: b(() => [
                                  w(l(bc), null, {
                                    default: b(() => [
                                      (f(!0), M(me, null, ye(r.items, (i) => (f(), N(l(_c), {
                                        key: i.title
                                      }, {
                                        default: b(() => [
                                          w(l(yc), {
                                            "as-child": "",
                                            "is-active": e.currentPath === i.url,
                                            disabled: i.disabled
                                          }, {
                                            default: b(() => [
                                              w(l(qa), {
                                                to: i.url
                                              }, {
                                                default: b(() => [
                                                  q("span", null, X(i.title), 1)
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
                      }, 1032, ["default-open"])) : (f(), N(l(No), { key: 1 }, {
                        default: b(() => [
                          w(l(To), {
                            "as-child": "",
                            "is-active": e.currentPath === r.url,
                            disabled: r.disabled
                          }, {
                            default: b(() => [
                              w(l(qa), {
                                to: r.url
                              }, {
                                default: b(() => [
                                  r.icon ? (f(), N(Ke(r.icon), { key: 0 })) : Q("", !0),
                                  q("span", null, X(r.title), 1)
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
        w(l(cc), null, {
          default: b(() => [
            D(a.$slots, "footer")
          ]),
          _: 3
        }),
        w(l(wc))
      ]),
      _: 3
    }, 8, ["collapsible"]));
  }
}), Cc = { class: "flex-1 flex gap-2 items-center [&_[data-placeholder]]:text-muted-foreground [&_[data-placeholder]]:truncate min-w-0" }, zs = /* @__PURE__ */ P({
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
    return (a, n) => (f(), N(l(ya), {
      as: e.as,
      class: te(l(G)(l(Ot)({ variant: e.variant, size: e.size }), t.class))
    }, {
      default: b(() => [
        q("span", Cc, [
          D(a.$slots, "default")
        ]),
        w(l(oa), { class: "!size-3 !-mx-1" })
      ]),
      _: 3
    }, 8, ["as", "class"]));
  }
}), Ut = (e, t, a = (n) => n) => e.reduce((n, o) => (n[t(o)] = a(o), n), {}), Sc = (e, t) => {
  const a = e.reduce((n, o) => {
    const s = o;
    return n[s] || (n[s] = o), n;
  }, {});
  return Object.values(a);
}, Oc = (e, t, a, n) => {
  if (!e && !t)
    return [];
  if (!e)
    return [t];
  if (!t)
    return [...e];
  const o = (r) => r === t;
  return e.find(o) ? e.filter((r, i) => !o(r)) : [...e, t];
}, Ao = (e, t, a = (n) => n) => {
  if (!e?.length && !t?.length)
    return [];
  if (e?.length === void 0)
    return [...t];
  if (!t?.length)
    return [...e];
  const n = t.reduce((o, s) => (o[a(s)] = !0, o), {});
  return e.filter((o) => !n[a(o)]);
}, Tc = (e) => {
  if (!e || e.length === 0)
    return "";
  const t = e.toLowerCase();
  return t.substring(0, 1).toUpperCase() + t.substring(1, t.length);
}, Nc = (e) => e ? e.split(/(?=[A-Z])|[\.\-\s_]/).map((t) => t.trim()).filter((t) => !!t).map((t) => Tc(t.toLowerCase())).join(" ") : "", Vt = _t([]), Dn = (e, t) => Vt.value.push({ callback: e, id: t });
function Ln(e) {
  Vt.value = typeof e == "string" ? Vt.value.filter(({ id: t }) => t !== e) : Vt.value.filter(({ callback: t }) => t !== e);
}
const In = (e) => {
  const t = e !== void 0 ? e : Vt.value.length - 1;
  return t >= 0 && !Vt.value[t].callback() && In(t - 1);
};
document.body.addEventListener("keydown", (e) => {
  e.key === "Escape" && Vt.value.length > 0 && (e.stopPropagation(), !e.target || !["INPUT"].includes(e.target?.tagName) ? In() : e.target.blur());
});
const Gs = { add: Dn, remove: Ln, invokeLatest: In };
function Vg(e) {
  jt(() => Dn(e)), _n(() => Ln(e));
}
function Mn(e, t) {
  Re(t, (a) => a ? Dn(e) : Ln(e), { immediate: !0 });
}
function $o(e, t, a, n = !1, o) {
  Ft(e, "keydown", (s) => {
    ["Space", "Enter"].includes(s.code) && document.activeElement?.matches(t) && (s.preventDefault(), a(document.activeElement, s));
  }), Ft(e, "click", (s) => {
    const r = s.target.closest(t);
    r && (n && (s.stopPropagation(), s.stopImmediatePropagation()), s.preventDefault(), a(r, s));
  });
}
function Ac(e, t, a, n, o) {
  const s = e.includes(a), r = t.indexOf(a), i = t.indexOf(n), u = r < i ? t.slice(r, i + 1) : t.slice(i, r);
  return s ? Sc([...e, ...u]) : e.filter((c) => !u.includes(c));
}
function Rn(e, t, a) {
  let n = null;
  const o = /* @__PURE__ */ Yu("Shift");
  Re(
    () => e.value,
    (s, r) => {
      const i = s.length > r.length ? Ao(s, r, a) : Ao(r, s, a);
      if (i.length === 1) {
        const u = i[0];
        o.value && n && (e.value = Ac(e.value, t.value, n, u)), n = u;
      }
    }
  );
}
const $c = { class: "[&_[data-state=selected]]:bg-muted/50" }, Bn = /* @__PURE__ */ P({
  __name: "DataTableBody",
  setup(e) {
    return (t, a) => (f(), M("tbody", $c, [
      D(t.$slots, "default")
    ]));
  }
}), [Kt, Vn] = Nn("DataTable"), Fn = /* @__PURE__ */ P({
  __name: "DataTableContainer",
  setup(e) {
    const t = Kt(), a = zl("container");
    $o(a, "[data-col-id]", (o) => {
      const s = o.getAttribute("data-col-id"), r = o.closest("tr")?.getAttribute("data-row-id");
      s && r && t.onClickColumn(s, r);
    }), $o(a, "[data-row-id]", (o) => {
      const s = o.getAttribute("data-row-id");
      s && t.onClickRow(s);
    });
    const n = V(() => ({
      "[&_td:first-child]:!w-0 [&_th:first-child]:!w-0": t.selectMode === "multiselect",
      "[&_td:last-child]:!w-0 [&_th:last-child]:!w-0": t.hasActionsColumn
    }));
    return (o, s) => (f(), M("div", {
      ref: "container",
      class: te(["min-w-0 min-h-0 relative flex-1 flex flex-col", n.value])
    }, [
      D(o.$slots, "default")
    ], 2));
  }
}), Pc = /* @__PURE__ */ P({
  __name: "Empty",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), M("div", {
      "data-slot": "empty",
      class: te(l(G)(
        "flex min-w-0 flex-1 flex-col items-center justify-center gap-6 text-balance rounded-lg border-dashed p-6 text-center md:p-12",
        t.class
      ))
    }, [
      D(a.$slots, "default")
    ], 2));
  }
}), Dc = /* @__PURE__ */ P({
  __name: "EmptyContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), M("div", {
      "data-slot": "empty-content",
      class: te(l(G)(
        "flex w-full min-w-0 max-w-sm flex-col items-center gap-4 text-balance text-sm",
        t.class
      ))
    }, [
      D(a.$slots, "default")
    ], 2));
  }
}), Lc = /* @__PURE__ */ P({
  __name: "EmptyDescription",
  props: {
    class: {}
  },
  setup(e) {
    return (t, a) => (f(), M("p", {
      "data-slot": "empty-description",
      class: te(l(G)(
        "text-muted-foreground [&>a:hover]:text-primary text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4",
        t.$attrs.class ?? ""
      ))
    }, [
      D(t.$slots, "default")
    ], 2));
  }
}), Ic = /* @__PURE__ */ P({
  __name: "EmptyHeader",
  props: {
    class: {}
  },
  setup(e) {
    return (t, a) => (f(), M("div", {
      "data-slot": "empty-header",
      class: te(l(G)(
        "flex max-w-sm flex-col items-center gap-2 text-center",
        t.$attrs.class ?? ""
      ))
    }, [
      D(t.$slots, "default")
    ], 2));
  }
}), Mc = ["data-variant"], Rc = /* @__PURE__ */ P({
  __name: "EmptyMedia",
  props: {
    class: {},
    variant: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), M("div", {
      "data-slot": "empty-icon",
      "data-variant": e.variant,
      class: te(l(G)(l(Ws)({ variant: e.variant }), t.class))
    }, [
      D(a.$slots, "default")
    ], 10, Mc));
  }
}), Bc = ["data-variant"], Vc = /* @__PURE__ */ P({
  __name: "EmptyTitle",
  props: {
    class: {},
    variant: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), M("div", {
      "data-slot": "empty-icon",
      "data-variant": e.variant,
      class: te(l(G)(l(Ws)({ variant: e.variant }), t.class))
    }, [
      D(a.$slots, "default")
    ], 10, Bc));
  }
}), Ws = Yt(
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
function pt(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Po = {};
function Fc(e) {
  Po[e] || (Po[e] = !0, pt(e));
}
const xt = typeof window < "u";
let Xe, zt;
if (process.env.NODE_ENV !== "production") {
  const e = xt && window.performance;
  e && e.mark && e.measure && e.clearMarks && // @ts-ignore browser compat
  e.clearMeasures && (Xe = (t) => {
    e.mark(t);
  }, zt = (t, a, n) => {
    e.measure(t, a, n), e.clearMarks(a), e.clearMarks(n);
  });
}
const Uc = /\{([0-9a-zA-Z]+)\}/g;
function Wa(e, ...t) {
  return t.length === 1 && ve(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(Uc, (a, n) => t.hasOwnProperty(n) ? t[n] : "");
}
const kt = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), zc = (e, t, a) => Gc({ l: e, k: t, s: a }), Gc = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Ve = (e) => typeof e == "number" && isFinite(e), Wc = (e) => Un(e) === "[object Date]", Ba = (e) => Un(e) === "[object RegExp]", ja = (e) => ge(e) && Object.keys(e).length === 0, Ue = Object.assign, jc = Object.create, _e = (e = null) => jc(e);
let Do;
const Bt = () => Do || (Do = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : _e());
function Lo(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function Io(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Hc(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (n, o, s) => `${o}="${Io(s)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (n, o, s) => `${o}='${Io(s)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (process.env.NODE_ENV !== "production" && pt("Potentially dangerous event handlers detected in translation. Consider removing onclick, onerror, etc. from your translation messages."), e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((n) => {
    e = e.replace(n, "$1javascript&#58;");
  }), e;
}
const Yc = Object.prototype.hasOwnProperty;
function lt(e, t) {
  return Yc.call(e, t);
}
const Ae = Array.isArray, Ee = (e) => typeof e == "function", K = (e) => typeof e == "string", Ne = (e) => typeof e == "boolean", ve = (e) => e !== null && typeof e == "object", Kc = (e) => ve(e) && Ee(e.then) && Ee(e.catch), js = Object.prototype.toString, Un = (e) => js.call(e), ge = (e) => Un(e) === "[object Object]", Xc = (e) => e == null ? "" : Ae(e) || ge(e) && e.toString === js ? JSON.stringify(e, null, 2) : String(e);
function zn(e, t = "") {
  return e.reduce((a, n, o) => o === 0 ? a + n : a + t + n, "");
}
const Mo = 2;
function qc(e, t = 0, a = e.length) {
  const n = e.split(/\r?\n/);
  let o = 0;
  const s = [];
  for (let r = 0; r < n.length; r++)
    if (o += n[r].length + 1, o >= t) {
      for (let i = r - Mo; i <= r + Mo || a > o; i++) {
        if (i < 0 || i >= n.length)
          continue;
        const u = i + 1;
        s.push(`${u}${" ".repeat(3 - String(u).length)}|  ${n[i]}`);
        const c = n[i].length;
        if (i === r) {
          const p = t - (o - c) + 1, g = Math.max(1, a > o ? c - p : a - t);
          s.push("   |  " + " ".repeat(p) + "^".repeat(g));
        } else if (i > r) {
          if (a > o) {
            const p = Math.max(Math.min(a - o, c), 1);
            s.push("   |  " + "^".repeat(p));
          }
          o += c + 1;
        }
      }
      break;
    }
  return s.join(`
`);
}
function Jc() {
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
const Oa = (e) => !ve(e) || Ae(e);
function La(e, t) {
  if (Oa(e) || Oa(t))
    throw new Error("Invalid value");
  const a = [{ src: e, des: t }];
  for (; a.length; ) {
    const { src: n, des: o } = a.pop();
    Object.keys(n).forEach((s) => {
      s !== "__proto__" && (ve(n[s]) && !ve(o[s]) && (o[s] = Array.isArray(n[s]) ? [] : _e()), Oa(o[s]) || Oa(n[s]) ? o[s] = n[s] : a.push({ src: n[s], des: o[s] }));
    });
  }
}
function Zc(e, t, a) {
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
}, Qc = 17, ed = {
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
function ra(e, t, a = {}) {
  const { domain: n, messages: o, args: s } = a, r = process.env.NODE_ENV !== "production" ? Wa((o || ed)[e] || "", ...s || []) : e, i = new SyntaxError(String(r));
  return i.code = e, t && (i.location = t), i.domain = n, i;
}
function td(e) {
  throw e;
}
const ad = /<\/?[\w\s="/.':;#-\/]+>/, nd = (e) => ad.test(e), ct = " ", od = "\r", Ge = `
`, sd = "\u2028", ld = "\u2029";
function rd(e) {
  const t = e;
  let a = 0, n = 1, o = 1, s = 0;
  const r = (O) => t[O] === od && t[O + 1] === Ge, i = (O) => t[O] === Ge, u = (O) => t[O] === ld, c = (O) => t[O] === sd, p = (O) => r(O) || i(O) || u(O) || c(O), g = () => a, m = () => n, S = () => o, R = () => s, E = (O) => r(O) || u(O) || c(O) ? Ge : t[O], A = () => E(a), y = () => E(a + s);
  function v() {
    return s = 0, p(a) && (n++, o = 0), r(a) && a++, a++, o++, t[a];
  }
  function _() {
    return r(a + s) && s++, s++, t[a + s];
  }
  function x() {
    a = 0, n = 1, o = 1, s = 0;
  }
  function $(O = 0) {
    s = O;
  }
  function I() {
    const O = a + s;
    for (; O !== a; )
      v();
    s = 0;
  }
  return {
    index: g,
    line: m,
    column: S,
    peekOffset: R,
    charAt: E,
    currentChar: A,
    currentPeek: y,
    next: v,
    peek: _,
    reset: x,
    resetPeek: $,
    skipToPeek: I
  };
}
const bt = void 0, id = ".", Ro = "'", ud = "tokenizer";
function cd(e, t = {}) {
  const a = t.location !== !1, n = rd(e), o = () => n.index(), s = () => Zc(n.line(), n.column(), n.index()), r = s(), i = o(), u = {
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
  }, c = () => u, { onError: p } = t;
  function g(d, h, L, ...U) {
    const se = c();
    if (h.column += L, h.offset += L, p) {
      const ie = a ? un(se.startLoc, h) : null, oe = ra(d, ie, {
        domain: ud,
        args: U
      });
      p(oe);
    }
  }
  function m(d, h, L) {
    d.endLoc = s(), d.currentType = h;
    const U = { type: h };
    return a && (U.loc = un(d.startLoc, d.endLoc)), L != null && (U.value = L), U;
  }
  const S = (d) => m(
    d,
    13
    /* TokenTypes.EOF */
  );
  function R(d, h) {
    return d.currentChar() === h ? (d.next(), h) : (g(ae.EXPECTED_TOKEN, s(), 0, h), "");
  }
  function E(d) {
    let h = "";
    for (; d.currentPeek() === ct || d.currentPeek() === Ge; )
      h += d.currentPeek(), d.peek();
    return h;
  }
  function A(d) {
    const h = E(d);
    return d.skipToPeek(), h;
  }
  function y(d) {
    if (d === bt)
      return !1;
    const h = d.charCodeAt(0);
    return h >= 97 && h <= 122 || // a-z
    h >= 65 && h <= 90 || // A-Z
    h === 95;
  }
  function v(d) {
    if (d === bt)
      return !1;
    const h = d.charCodeAt(0);
    return h >= 48 && h <= 57;
  }
  function _(d, h) {
    const { currentType: L } = h;
    if (L !== 2)
      return !1;
    E(d);
    const U = y(d.currentPeek());
    return d.resetPeek(), U;
  }
  function x(d, h) {
    const { currentType: L } = h;
    if (L !== 2)
      return !1;
    E(d);
    const U = d.currentPeek() === "-" ? d.peek() : d.currentPeek(), se = v(U);
    return d.resetPeek(), se;
  }
  function $(d, h) {
    const { currentType: L } = h;
    if (L !== 2)
      return !1;
    E(d);
    const U = d.currentPeek() === Ro;
    return d.resetPeek(), U;
  }
  function I(d, h) {
    const { currentType: L } = h;
    if (L !== 7)
      return !1;
    E(d);
    const U = d.currentPeek() === ".";
    return d.resetPeek(), U;
  }
  function O(d, h) {
    const { currentType: L } = h;
    if (L !== 8)
      return !1;
    E(d);
    const U = y(d.currentPeek());
    return d.resetPeek(), U;
  }
  function B(d, h) {
    const { currentType: L } = h;
    if (!(L === 7 || L === 11))
      return !1;
    E(d);
    const U = d.currentPeek() === ":";
    return d.resetPeek(), U;
  }
  function j(d, h) {
    const { currentType: L } = h;
    if (L !== 9)
      return !1;
    const U = () => {
      const ie = d.currentPeek();
      return ie === "{" ? y(d.peek()) : ie === "@" || ie === "|" || ie === ":" || ie === "." || ie === ct || !ie ? !1 : ie === Ge ? (d.peek(), U()) : be(d, !1);
    }, se = U();
    return d.resetPeek(), se;
  }
  function ue(d) {
    E(d);
    const h = d.currentPeek() === "|";
    return d.resetPeek(), h;
  }
  function be(d, h = !0) {
    const L = (se = !1, ie = "") => {
      const oe = d.currentPeek();
      return oe === "{" || oe === "@" || !oe ? se : oe === "|" ? !(ie === ct || ie === Ge) : oe === ct ? (d.peek(), L(!0, ct)) : oe === Ge ? (d.peek(), L(!0, Ge)) : !0;
    }, U = L();
    return h && d.resetPeek(), U;
  }
  function W(d, h) {
    const L = d.currentChar();
    return L === bt ? bt : h(L) ? (d.next(), L) : null;
  }
  function le(d) {
    const h = d.charCodeAt(0);
    return h >= 97 && h <= 122 || // a-z
    h >= 65 && h <= 90 || // A-Z
    h >= 48 && h <= 57 || // 0-9
    h === 95 || // _
    h === 36;
  }
  function z(d) {
    return W(d, le);
  }
  function ee(d) {
    const h = d.charCodeAt(0);
    return h >= 97 && h <= 122 || // a-z
    h >= 65 && h <= 90 || // A-Z
    h >= 48 && h <= 57 || // 0-9
    h === 95 || // _
    h === 36 || // $
    h === 45;
  }
  function k(d) {
    return W(d, ee);
  }
  function H(d) {
    const h = d.charCodeAt(0);
    return h >= 48 && h <= 57;
  }
  function C(d) {
    return W(d, H);
  }
  function pe(d) {
    const h = d.charCodeAt(0);
    return h >= 48 && h <= 57 || // 0-9
    h >= 65 && h <= 70 || // A-F
    h >= 97 && h <= 102;
  }
  function Oe(d) {
    return W(d, pe);
  }
  function Le(d) {
    let h = "", L = "";
    for (; h = C(d); )
      L += h;
    return L;
  }
  function Qe(d) {
    let h = "";
    for (; ; ) {
      const L = d.currentChar();
      if (L === "{" || L === "}" || L === "@" || L === "|" || !L)
        break;
      if (L === ct || L === Ge)
        if (be(d))
          h += L, d.next();
        else {
          if (ue(d))
            break;
          h += L, d.next();
        }
      else
        h += L, d.next();
    }
    return h;
  }
  function Te(d) {
    A(d);
    let h = "", L = "";
    for (; h = k(d); )
      L += h;
    const U = d.currentChar();
    if (U && U !== "}" && U !== bt && U !== ct && U !== Ge && U !== "　") {
      const se = at(d);
      return g(ae.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, L + se), L + se;
    }
    return d.currentChar() === bt && g(ae.UNTERMINATED_CLOSING_BRACE, s(), 0), L;
  }
  function Ie(d) {
    A(d);
    let h = "";
    return d.currentChar() === "-" ? (d.next(), h += `-${Le(d)}`) : h += Le(d), d.currentChar() === bt && g(ae.UNTERMINATED_CLOSING_BRACE, s(), 0), h;
  }
  function et(d) {
    return d !== Ro && d !== Ge;
  }
  function $t(d) {
    A(d), R(d, "'");
    let h = "", L = "";
    for (; h = W(d, et); )
      h === "\\" ? L += we(d) : L += h;
    const U = d.currentChar();
    return U === Ge || U === bt ? (g(ae.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, s(), 0), U === Ge && (d.next(), R(d, "'")), L) : (R(d, "'"), L);
  }
  function we(d) {
    const h = d.currentChar();
    switch (h) {
      case "\\":
      case "'":
        return d.next(), `\\${h}`;
      case "u":
        return qe(d, h, 4);
      case "U":
        return qe(d, h, 6);
      default:
        return g(ae.UNKNOWN_ESCAPE_SEQUENCE, s(), 0, h), "";
    }
  }
  function qe(d, h, L) {
    R(d, h);
    let U = "";
    for (let se = 0; se < L; se++) {
      const ie = Oe(d);
      if (!ie) {
        g(ae.INVALID_UNICODE_ESCAPE_SEQUENCE, s(), 0, `\\${h}${U}${d.currentChar()}`);
        break;
      }
      U += ie;
    }
    return `\\${h}${U}`;
  }
  function tt(d) {
    return d !== "{" && d !== "}" && d !== ct && d !== Ge;
  }
  function at(d) {
    A(d);
    let h = "", L = "";
    for (; h = W(d, tt); )
      L += h;
    return L;
  }
  function gt(d) {
    let h = "", L = "";
    for (; h = z(d); )
      L += h;
    return L;
  }
  function nt(d) {
    const h = (L) => {
      const U = d.currentChar();
      return U === "{" || U === "@" || U === "|" || U === "(" || U === ")" || !U || U === ct ? L : (L += U, d.next(), h(L));
    };
    return h("");
  }
  function ot(d) {
    A(d);
    const h = R(
      d,
      "|"
      /* TokenChars.Pipe */
    );
    return A(d), h;
  }
  function Pt(d, h) {
    let L = null;
    switch (d.currentChar()) {
      case "{":
        return h.braceNest >= 1 && g(ae.NOT_ALLOW_NEST_PLACEHOLDER, s(), 0), d.next(), L = m(
          h,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), A(d), h.braceNest++, L;
      case "}":
        return h.braceNest > 0 && h.currentType === 2 && g(ae.EMPTY_PLACEHOLDER, s(), 0), d.next(), L = m(
          h,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), h.braceNest--, h.braceNest > 0 && A(d), h.inLinked && h.braceNest === 0 && (h.inLinked = !1), L;
      case "@":
        return h.braceNest > 0 && g(ae.UNTERMINATED_CLOSING_BRACE, s(), 0), L = vt(d, h) || S(h), h.braceNest = 0, L;
      default: {
        let se = !0, ie = !0, oe = !0;
        if (ue(d))
          return h.braceNest > 0 && g(ae.UNTERMINATED_CLOSING_BRACE, s(), 0), L = m(h, 1, ot(d)), h.braceNest = 0, h.inLinked = !1, L;
        if (h.braceNest > 0 && (h.currentType === 4 || h.currentType === 5 || h.currentType === 6))
          return g(ae.UNTERMINATED_CLOSING_BRACE, s(), 0), h.braceNest = 0, Dt(d, h);
        if (se = _(d, h))
          return L = m(h, 4, Te(d)), A(d), L;
        if (ie = x(d, h))
          return L = m(h, 5, Ie(d)), A(d), L;
        if (oe = $(d, h))
          return L = m(h, 6, $t(d)), A(d), L;
        if (!se && !ie && !oe)
          return L = m(h, 12, at(d)), g(ae.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, L.value), A(d), L;
        break;
      }
    }
    return L;
  }
  function vt(d, h) {
    const { currentType: L } = h;
    let U = null;
    const se = d.currentChar();
    switch ((L === 7 || L === 8 || L === 11 || L === 9) && (se === Ge || se === ct) && g(ae.INVALID_LINKED_FORMAT, s(), 0), se) {
      case "@":
        return d.next(), U = m(
          h,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), h.inLinked = !0, U;
      case ".":
        return A(d), d.next(), m(
          h,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return A(d), d.next(), m(
          h,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return ue(d) ? (U = m(h, 1, ot(d)), h.braceNest = 0, h.inLinked = !1, U) : I(d, h) || B(d, h) ? (A(d), vt(d, h)) : O(d, h) ? (A(d), m(h, 11, gt(d))) : j(d, h) ? (A(d), se === "{" ? Pt(d, h) || U : m(h, 10, nt(d))) : (L === 7 && g(ae.INVALID_LINKED_FORMAT, s(), 0), h.braceNest = 0, h.inLinked = !1, Dt(d, h));
    }
  }
  function Dt(d, h) {
    let L = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (h.braceNest > 0)
      return Pt(d, h) || S(h);
    if (h.inLinked)
      return vt(d, h) || S(h);
    switch (d.currentChar()) {
      case "{":
        return Pt(d, h) || S(h);
      case "}":
        return g(ae.UNBALANCED_CLOSING_BRACE, s(), 0), d.next(), m(
          h,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return vt(d, h) || S(h);
      default: {
        if (ue(d))
          return L = m(h, 1, ot(d)), h.braceNest = 0, h.inLinked = !1, L;
        if (be(d))
          return m(h, 0, Qe(d));
        break;
      }
    }
    return L;
  }
  function ia() {
    const { currentType: d, offset: h, startLoc: L, endLoc: U } = u;
    return u.lastType = d, u.lastOffset = h, u.lastStartLoc = L, u.lastEndLoc = U, u.offset = o(), u.startLoc = s(), n.currentChar() === bt ? m(
      u,
      13
      /* TokenTypes.EOF */
    ) : Dt(n, u);
  }
  return {
    nextToken: ia,
    currentOffset: o,
    currentPosition: s,
    context: c
  };
}
const dd = "parser", fd = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function md(e, t, a) {
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
function pd(e = {}) {
  const t = e.location !== !1, { onError: a } = e;
  function n(y, v, _, x, ...$) {
    const I = y.currentPosition();
    if (I.offset += x, I.column += x, a) {
      const O = t ? un(_, I) : null, B = ra(v, O, {
        domain: dd,
        args: $
      });
      a(B);
    }
  }
  function o(y, v, _) {
    const x = { type: y };
    return t && (x.start = v, x.end = v, x.loc = { start: _, end: _ }), x;
  }
  function s(y, v, _, x) {
    t && (y.end = v, y.loc && (y.loc.end = _));
  }
  function r(y, v) {
    const _ = y.context(), x = o(3, _.offset, _.startLoc);
    return x.value = v, s(x, y.currentOffset(), y.currentPosition()), x;
  }
  function i(y, v) {
    const _ = y.context(), { lastOffset: x, lastStartLoc: $ } = _, I = o(5, x, $);
    return I.index = parseInt(v, 10), y.nextToken(), s(I, y.currentOffset(), y.currentPosition()), I;
  }
  function u(y, v) {
    const _ = y.context(), { lastOffset: x, lastStartLoc: $ } = _, I = o(4, x, $);
    return I.key = v, y.nextToken(), s(I, y.currentOffset(), y.currentPosition()), I;
  }
  function c(y, v) {
    const _ = y.context(), { lastOffset: x, lastStartLoc: $ } = _, I = o(9, x, $);
    return I.value = v.replace(fd, md), y.nextToken(), s(I, y.currentOffset(), y.currentPosition()), I;
  }
  function p(y) {
    const v = y.nextToken(), _ = y.context(), { lastOffset: x, lastStartLoc: $ } = _, I = o(8, x, $);
    return v.type !== 11 ? (n(y, ae.UNEXPECTED_EMPTY_LINKED_MODIFIER, _.lastStartLoc, 0), I.value = "", s(I, x, $), {
      nextConsumeToken: v,
      node: I
    }) : (v.value == null && n(y, ae.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, dt(v)), I.value = v.value || "", s(I, y.currentOffset(), y.currentPosition()), {
      node: I
    });
  }
  function g(y, v) {
    const _ = y.context(), x = o(7, _.offset, _.startLoc);
    return x.value = v, s(x, y.currentOffset(), y.currentPosition()), x;
  }
  function m(y) {
    const v = y.context(), _ = o(6, v.offset, v.startLoc);
    let x = y.nextToken();
    if (x.type === 8) {
      const $ = p(y);
      _.modifier = $.node, x = $.nextConsumeToken || y.nextToken();
    }
    switch (x.type !== 9 && n(y, ae.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, dt(x)), x = y.nextToken(), x.type === 2 && (x = y.nextToken()), x.type) {
      case 10:
        x.value == null && n(y, ae.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, dt(x)), _.key = g(y, x.value || "");
        break;
      case 4:
        x.value == null && n(y, ae.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, dt(x)), _.key = u(y, x.value || "");
        break;
      case 5:
        x.value == null && n(y, ae.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, dt(x)), _.key = i(y, x.value || "");
        break;
      case 6:
        x.value == null && n(y, ae.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, dt(x)), _.key = c(y, x.value || "");
        break;
      default: {
        n(y, ae.UNEXPECTED_EMPTY_LINKED_KEY, v.lastStartLoc, 0);
        const $ = y.context(), I = o(7, $.offset, $.startLoc);
        return I.value = "", s(I, $.offset, $.startLoc), _.key = I, s(_, $.offset, $.startLoc), {
          nextConsumeToken: x,
          node: _
        };
      }
    }
    return s(_, y.currentOffset(), y.currentPosition()), {
      node: _
    };
  }
  function S(y) {
    const v = y.context(), _ = v.currentType === 1 ? y.currentOffset() : v.offset, x = v.currentType === 1 ? v.endLoc : v.startLoc, $ = o(2, _, x);
    $.items = [];
    let I = null;
    do {
      const j = I || y.nextToken();
      switch (I = null, j.type) {
        case 0:
          j.value == null && n(y, ae.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, dt(j)), $.items.push(r(y, j.value || ""));
          break;
        case 5:
          j.value == null && n(y, ae.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, dt(j)), $.items.push(i(y, j.value || ""));
          break;
        case 4:
          j.value == null && n(y, ae.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, dt(j)), $.items.push(u(y, j.value || ""));
          break;
        case 6:
          j.value == null && n(y, ae.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, dt(j)), $.items.push(c(y, j.value || ""));
          break;
        case 7: {
          const ue = m(y);
          $.items.push(ue.node), I = ue.nextConsumeToken || null;
          break;
        }
      }
    } while (v.currentType !== 13 && v.currentType !== 1);
    const O = v.currentType === 1 ? v.lastOffset : y.currentOffset(), B = v.currentType === 1 ? v.lastEndLoc : y.currentPosition();
    return s($, O, B), $;
  }
  function R(y, v, _, x) {
    const $ = y.context();
    let I = x.items.length === 0;
    const O = o(1, v, _);
    O.cases = [], O.cases.push(x);
    do {
      const B = S(y);
      I || (I = B.items.length === 0), O.cases.push(B);
    } while ($.currentType !== 13);
    return I && n(y, ae.MUST_HAVE_MESSAGES_IN_PLURAL, _, 0), s(O, y.currentOffset(), y.currentPosition()), O;
  }
  function E(y) {
    const v = y.context(), { offset: _, startLoc: x } = v, $ = S(y);
    return v.currentType === 13 ? $ : R(y, _, x, $);
  }
  function A(y) {
    const v = cd(y, Ue({}, e)), _ = v.context(), x = o(0, _.offset, _.startLoc);
    return t && x.loc && (x.loc.source = y), x.body = E(v), e.onCacheKey && (x.cacheKey = e.onCacheKey(y)), _.currentType !== 13 && n(v, ae.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, y[_.offset] || ""), s(x, v.currentOffset(), v.currentPosition()), x;
  }
  return { parse: A };
}
function dt(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function gd(e, t = {}) {
  const a = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => a, helper: (s) => (a.helpers.add(s), s) };
}
function Bo(e, t) {
  for (let a = 0; a < e.length; a++)
    Gn(e[a], t);
}
function Gn(e, t) {
  switch (e.type) {
    case 1:
      Bo(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      Bo(e.items, t);
      break;
    case 6: {
      Gn(e.key, t), t.helper(
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
function vd(e, t = {}) {
  const a = gd(e);
  a.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && Gn(e.body, a);
  const n = a.context();
  e.helpers = Array.from(n.helpers);
}
function hd(e) {
  const t = e.body;
  return t.type === 2 ? Vo(t) : t.cases.forEach((a) => Vo(a)), e;
}
function Vo(e) {
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
      e.static = zn(t);
      for (let a = 0; a < e.items.length; a++) {
        const n = e.items[a];
        (n.type === 3 || n.type === 9) && delete n.value;
      }
    }
  }
}
const bd = "minifier";
function Jt(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      Jt(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, a = t.cases;
      for (let n = 0; n < a.length; n++)
        Jt(a[n]);
      t.c = a, delete t.cases;
      break;
    }
    case 2: {
      const t = e, a = t.items;
      for (let n = 0; n < a.length; n++)
        Jt(a[n]);
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
      Jt(t.key), t.k = t.key, delete t.key, t.modifier && (Jt(t.modifier), t.m = t.modifier, delete t.modifier);
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
        throw ra(ae.UNHANDLED_MINIFIER_NODE_TYPE, null, {
          domain: bd,
          args: [e.type]
        });
  }
  delete e.type;
}
const yd = "parser";
function _d(e, t) {
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
  function u(E, A) {
    r.code += E;
  }
  function c(E, A = !0) {
    const y = A ? n : "";
    u(o ? y + "  ".repeat(E) : y);
  }
  function p(E = !0) {
    const A = ++r.indentLevel;
    E && c(A);
  }
  function g(E = !0) {
    const A = --r.indentLevel;
    E && c(A);
  }
  function m() {
    c(r.indentLevel);
  }
  return {
    context: i,
    push: u,
    indent: p,
    deindent: g,
    newline: m,
    helper: (E) => `_${E}`,
    needIndent: () => r.needIndent
  };
}
function wd(e, t) {
  const { helper: a } = e;
  e.push(`${a(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), ta(e, t.key), t.modifier ? (e.push(", "), ta(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function xd(e, t) {
  const { helper: a, needIndent: n } = e;
  e.push(`${a(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(n());
  const o = t.items.length;
  for (let s = 0; s < o && (ta(e, t.items[s]), s !== o - 1); s++)
    e.push(", ");
  e.deindent(n()), e.push("])");
}
function kd(e, t) {
  const { helper: a, needIndent: n } = e;
  if (t.cases.length > 1) {
    e.push(`${a(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(n());
    const o = t.cases.length;
    for (let s = 0; s < o && (ta(e, t.cases[s]), s !== o - 1); s++)
      e.push(", ");
    e.deindent(n()), e.push("])");
  }
}
function Ed(e, t) {
  t.body ? ta(e, t.body) : e.push("null");
}
function ta(e, t) {
  const { helper: a } = e;
  switch (t.type) {
    case 0:
      Ed(e, t);
      break;
    case 1:
      kd(e, t);
      break;
    case 2:
      xd(e, t);
      break;
    case 6:
      wd(e, t);
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
        throw ra(ae.UNHANDLED_CODEGEN_NODE_TYPE, null, {
          domain: yd,
          args: [t.type]
        });
  }
}
const Cd = (e, t = {}) => {
  const a = K(t.mode) ? t.mode : "normal", n = K(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const o = t.breakLineCode != null ? t.breakLineCode : a === "arrow" ? ";" : `
`, s = t.needIndent ? t.needIndent : a !== "arrow", r = e.helpers || [], i = _d(e, {
    filename: n,
    breakLineCode: o,
    needIndent: s
  });
  i.push(a === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), i.indent(s), r.length > 0 && (i.push(`const { ${zn(r.map((p) => `${p}: _${p}`), ", ")} } = ctx`), i.newline()), i.push("return "), ta(i, e), i.deindent(s), i.push("}"), delete e.helpers;
  const { code: u, map: c } = i.context();
  return {
    ast: e,
    code: u,
    map: c ? c.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function Sd(e, t = {}) {
  const a = Ue({}, t), n = !!a.jit, o = !!a.minify, s = a.optimize == null ? !0 : a.optimize, i = pd(a).parse(e);
  return n ? (s && hd(i), o && Jt(i), { ast: i, code: "" }) : (vd(i, a), Cd(i, a));
}
function Od() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Bt().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Bt().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function rt(e) {
  return ve(e) && Wn(e) === 0 && (lt(e, "b") || lt(e, "body"));
}
const Hs = ["b", "body"];
function Td(e) {
  return Tt(e, Hs);
}
const Ys = ["c", "cases"];
function Nd(e) {
  return Tt(e, Ys, []);
}
const Ks = ["s", "static"];
function Ad(e) {
  return Tt(e, Ks);
}
const Xs = ["i", "items"];
function $d(e) {
  return Tt(e, Xs, []);
}
const qs = ["t", "type"];
function Wn(e) {
  return Tt(e, qs);
}
const Js = ["v", "value"];
function Ta(e, t) {
  const a = Tt(e, Js);
  if (a != null)
    return a;
  throw ma(t);
}
const Zs = ["m", "modifier"];
function Pd(e) {
  return Tt(e, Zs);
}
const Qs = ["k", "key"];
function Dd(e) {
  const t = Tt(e, Qs);
  if (t)
    return t;
  throw ma(
    6
    /* NodeTypes.Linked */
  );
}
function Tt(e, t, a) {
  for (let n = 0; n < t.length; n++) {
    const o = t[n];
    if (lt(e, o) && e[o] != null)
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
function ma(e) {
  return new Error(`unhandled node type: ${e}`);
}
function tn(e) {
  return (a) => Ld(a, e);
}
function Ld(e, t) {
  const a = Td(t);
  if (a == null)
    throw ma(
      0
      /* NodeTypes.Resource */
    );
  if (Wn(a) === 1) {
    const s = Nd(a);
    return e.plural(s.reduce((r, i) => [
      ...r,
      Fo(e, i)
    ], []));
  } else
    return Fo(e, a);
}
function Fo(e, t) {
  const a = Ad(t);
  if (a != null)
    return e.type === "text" ? a : e.normalize([a]);
  {
    const n = $d(t).reduce((o, s) => [...o, cn(e, s)], []);
    return e.normalize(n);
  }
}
function cn(e, t) {
  const a = Wn(t);
  switch (a) {
    case 3:
      return Ta(t, a);
    case 9:
      return Ta(t, a);
    case 4: {
      const n = t;
      if (lt(n, "k") && n.k)
        return e.interpolate(e.named(n.k));
      if (lt(n, "key") && n.key)
        return e.interpolate(e.named(n.key));
      throw ma(a);
    }
    case 5: {
      const n = t;
      if (lt(n, "i") && Ve(n.i))
        return e.interpolate(e.list(n.i));
      if (lt(n, "index") && Ve(n.index))
        return e.interpolate(e.list(n.index));
      throw ma(a);
    }
    case 6: {
      const n = t, o = Pd(n), s = Dd(n);
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
const Id = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function Md(e, t) {
  t && nd(e) && pt(Wa(Id, { source: e }));
}
const Rd = (e) => e;
let Na = _e();
function Bd(e, t = {}) {
  let a = !1;
  const n = t.onError || td;
  return t.onError = (o) => {
    a = !0, n(o);
  }, { ...Sd(e, t), detectError: a };
}
// @__NO_SIDE_EFFECTS__
function Vd(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && K(e)) {
    const a = Ne(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && Md(e, a);
    const o = (t.onCacheKey || Rd)(e), s = Na[o];
    if (s)
      return s;
    const { ast: r, detectError: i } = Bd(e, {
      ...t,
      location: process.env.NODE_ENV !== "production",
      jit: !0
    }), u = tn(r);
    return i ? u : Na[o] = u;
  } else {
    if (process.env.NODE_ENV !== "production" && !rt(e))
      return pt(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), (() => e);
    const a = e.cacheKey;
    if (a) {
      const n = Na[a];
      return n || (Na[a] = tn(e));
    } else
      return tn(e);
  }
}
let pa = null;
function Fd(e) {
  pa = e;
}
function Ud(e, t, a) {
  pa && pa.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: a
  });
}
const zd = /* @__PURE__ */ Gd("function:translate");
function Gd(e) {
  return (t) => pa && pa.emit(e, t);
}
const We = {
  INVALID_ARGUMENT: Qc,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_NON_STRING_MESSAGE: 20,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, Wd = 24;
function yt(e) {
  return ra(e, null, process.env.NODE_ENV !== "production" ? { messages: jd } : void 0);
}
const jd = {
  [We.INVALID_ARGUMENT]: "Invalid arguments",
  [We.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [We.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [We.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
  [We.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
  [We.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
  [We.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function jn(e, t) {
  return t.locale != null ? Uo(t.locale) : Uo(e.locale);
}
let an;
function Uo(e) {
  if (K(e))
    return e;
  if (Ee(e)) {
    if (e.resolvedOnce && an != null)
      return an;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Kc(t))
        throw yt(We.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return an = t;
    } else
      throw yt(We.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw yt(We.NOT_SUPPORT_LOCALE_TYPE);
}
function Hd(e, t, a) {
  return [.../* @__PURE__ */ new Set([
    a,
    ...Ae(t) ? t : ve(t) ? Object.keys(t) : K(t) ? [t] : [a]
  ])];
}
function tl(e, t, a) {
  const n = K(a) ? a : Va, o = e;
  o.__localeChainCache || (o.__localeChainCache = /* @__PURE__ */ new Map());
  let s = o.__localeChainCache.get(n);
  if (!s) {
    s = [];
    let r = [a];
    for (; Ae(r); )
      r = zo(s, r, t);
    const i = Ae(t) || !ge(t) ? t : t.default ? t.default : null;
    r = K(i) ? [i] : i, Ae(r) && zo(s, r, !1), o.__localeChainCache.set(n, s);
  }
  return s;
}
function zo(e, t, a) {
  let n = !0;
  for (let o = 0; o < t.length && Ne(n); o++) {
    const s = t[o];
    K(s) && (n = Yd(e, t[o], a));
  }
  return n;
}
function Yd(e, t, a) {
  let n;
  const o = t.split("-");
  do {
    const s = o.join("-");
    n = Kd(e, s, a), o.splice(-1, 1);
  } while (o.length && n === !0);
  return n;
}
function Kd(e, t, a) {
  let n = !1;
  if (!e.includes(t) && (n = !0, t)) {
    n = t[t.length - 1] !== "!";
    const o = t.replace(/!/g, "");
    e.push(o), (Ae(a) || ge(a)) && a[o] && (n = a[o]);
  }
  return n;
}
const Nt = [];
Nt[
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
Nt[
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
Nt[
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
Nt[
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
Nt[
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
Nt[
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
Nt[
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
const Xd = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function qd(e) {
  return Xd.test(e);
}
function Jd(e) {
  const t = e.charCodeAt(0), a = e.charCodeAt(e.length - 1);
  return t === a && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Zd(e) {
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
function Qd(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : qd(t) ? Jd(t) : "*" + t;
}
function ef(e) {
  const t = [];
  let a = -1, n = 0, o = 0, s, r, i, u, c, p, g;
  const m = [];
  m[
    0
    /* Actions.APPEND */
  ] = () => {
    r === void 0 ? r = i : r += i;
  }, m[
    1
    /* Actions.PUSH */
  ] = () => {
    r !== void 0 && (t.push(r), r = void 0);
  }, m[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    m[
      0
      /* Actions.APPEND */
    ](), o++;
  }, m[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (o > 0)
      o--, n = 4, m[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (o = 0, r === void 0 || (r = Qd(r), r === !1))
        return !1;
      m[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function S() {
    const R = e[a + 1];
    if (n === 5 && R === "'" || n === 6 && R === '"')
      return a++, i = "\\" + R, m[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; n !== null; )
    if (a++, s = e[a], !(s === "\\" && S())) {
      if (u = Zd(s), g = Nt[n], c = g[u] || g.l || 8, c === 8 || (n = c[0], c[1] !== void 0 && (p = m[c[1]], p && (i = s, p() === !1))))
        return;
      if (n === 7)
        return t;
    }
}
const Go = /* @__PURE__ */ new Map();
function tf(e, t) {
  return ve(e) ? e[t] : null;
}
function af(e, t) {
  if (!ve(e))
    return null;
  let a = Go.get(t);
  if (a || (a = ef(t), a && Go.set(t, a)), !a)
    return null;
  const n = a.length;
  let o = e, s = 0;
  for (; s < n; ) {
    const r = a[s];
    if (el.includes(r) && rt(o))
      return null;
    const i = o[r];
    if (i === void 0 || Ee(o))
      return null;
    o = i, s++;
  }
  return o;
}
const Ye = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7
}, nf = 8, of = {
  [Ye.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [Ye.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [Ye.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [Ye.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [Ye.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [Ye.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [Ye.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function Gt(e, ...t) {
  return Wa(of[e], ...t);
}
const sf = "11.2.8", Ha = -1, Va = "en-US", Fa = "", Wo = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function lf() {
  return {
    upper: (e, t) => t === "text" && K(e) ? e.toUpperCase() : t === "vnode" && ve(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && K(e) ? e.toLowerCase() : t === "vnode" && ve(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && K(e) ? Wo(e) : t === "vnode" && ve(e) && "__v_isVNode" in e ? Wo(e.children) : e
  };
}
let al;
function rf(e) {
  al = e;
}
let nl;
function uf(e) {
  nl = e;
}
let ol;
function cf(e) {
  ol = e;
}
let sl = null;
const df = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  sl = e;
}, ff = /* @__NO_SIDE_EFFECTS__ */ () => sl;
let ll = null;
const jo = (e) => {
  ll = e;
}, mf = () => ll;
let Ho = 0;
function pf(e = {}) {
  const t = Ee(e.onWarn) ? e.onWarn : pt, a = K(e.version) ? e.version : sf, n = K(e.locale) || Ee(e.locale) ? e.locale : Va, o = Ee(n) ? Va : n, s = Ae(e.fallbackLocale) || ge(e.fallbackLocale) || K(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o, r = ge(e.messages) ? e.messages : nn(o), i = ge(e.datetimeFormats) ? e.datetimeFormats : nn(o), u = ge(e.numberFormats) ? e.numberFormats : nn(o), c = Ue(_e(), e.modifiers, lf()), p = e.pluralRules || _e(), g = Ee(e.missing) ? e.missing : null, m = Ne(e.missingWarn) || Ba(e.missingWarn) ? e.missingWarn : !0, S = Ne(e.fallbackWarn) || Ba(e.fallbackWarn) ? e.fallbackWarn : !0, R = !!e.fallbackFormat, E = !!e.unresolving, A = Ee(e.postTranslation) ? e.postTranslation : null, y = ge(e.processor) ? e.processor : null, v = Ne(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, _ = !!e.escapeParameter, x = Ee(e.messageCompiler) ? e.messageCompiler : al;
  process.env.NODE_ENV !== "production" && Ee(e.messageCompiler) && Fc(Gt(Ye.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const $ = Ee(e.messageResolver) ? e.messageResolver : nl || tf, I = Ee(e.localeFallbacker) ? e.localeFallbacker : ol || Hd, O = ve(e.fallbackContext) ? e.fallbackContext : void 0, B = e, j = ve(B.__datetimeFormatters) ? B.__datetimeFormatters : /* @__PURE__ */ new Map(), ue = ve(B.__numberFormatters) ? B.__numberFormatters : /* @__PURE__ */ new Map(), be = ve(B.__meta) ? B.__meta : {};
  Ho++;
  const W = {
    version: a,
    cid: Ho,
    locale: n,
    fallbackLocale: s,
    messages: r,
    modifiers: c,
    pluralRules: p,
    missing: g,
    missingWarn: m,
    fallbackWarn: S,
    fallbackFormat: R,
    unresolving: E,
    postTranslation: A,
    processor: y,
    warnHtmlMessage: v,
    escapeParameter: _,
    messageCompiler: x,
    messageResolver: $,
    localeFallbacker: I,
    fallbackContext: O,
    onWarn: t,
    __meta: be
  };
  return W.datetimeFormats = i, W.numberFormats = u, W.__datetimeFormatters = j, W.__numberFormatters = ue, process.env.NODE_ENV !== "production" && (W.__v_emitter = B.__v_emitter != null ? B.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && Ud(W, a, be), W;
}
const nn = (e) => ({ [e]: _e() });
function Ya(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function rl(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function Hn(e, t, a, n, o) {
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
    return K(i) ? i : t;
  } else
    return process.env.NODE_ENV !== "production" && rl(n, t) && r(Gt(Ye.NOT_FOUND_KEY, { key: t, locale: a })), t;
}
function da(e, t, a) {
  const n = e;
  n.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, a, t);
}
function il(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function gf(e, t) {
  const a = t.indexOf(e);
  if (a === -1)
    return !1;
  for (let n = a + 1; n < t.length; n++)
    if (il(e, t[n]))
      return !0;
  return !1;
}
const Yo = typeof Intl < "u", ul = {
  dateTimeFormat: Yo && typeof Intl.DateTimeFormat < "u",
  numberFormat: Yo && typeof Intl.NumberFormat < "u"
};
function Ko(e, ...t) {
  const { datetimeFormats: a, unresolving: n, fallbackLocale: o, onWarn: s, localeFallbacker: r } = e, { __datetimeFormatters: i } = e;
  if (process.env.NODE_ENV !== "production" && !ul.dateTimeFormat)
    return s(Gt(Ye.CANNOT_FORMAT_DATE)), Fa;
  const [u, c, p, g] = dn(...t), m = Ne(p.missingWarn) ? p.missingWarn : e.missingWarn, S = Ne(p.fallbackWarn) ? p.fallbackWarn : e.fallbackWarn, R = !!p.part, E = jn(e, p), A = r(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    E
  );
  if (!K(u) || u === "")
    return new Intl.DateTimeFormat(E, g).format(c);
  let y = {}, v, _ = null, x = E, $ = null;
  const I = "datetime format";
  for (let j = 0; j < A.length; j++) {
    if (v = $ = A[j], process.env.NODE_ENV !== "production" && E !== v && Ya(S, u) && s(Gt(Ye.FALLBACK_TO_DATE_FORMAT, {
      key: u,
      target: v
    })), process.env.NODE_ENV !== "production" && E !== v) {
      const ue = e.__v_emitter;
      ue && ue.emit("fallback", {
        type: I,
        key: u,
        from: x,
        to: $,
        groupId: `${I}:${u}`
      });
    }
    if (y = a[v] || {}, _ = y[u], ge(_))
      break;
    Hn(e, u, v, m, I), x = $;
  }
  if (!ge(_) || !K(v))
    return n ? Ha : u;
  let O = `${v}__${u}`;
  ja(g) || (O = `${O}__${JSON.stringify(g)}`);
  let B = i.get(O);
  return B || (B = new Intl.DateTimeFormat(v, Ue({}, _, g)), i.set(O, B)), R ? B.formatToParts(c) : B.format(c);
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
  const [t, a, n, o] = e, s = _e();
  let r = _e(), i;
  if (K(t)) {
    const u = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!u)
      throw yt(We.INVALID_ISO_DATE_ARGUMENT);
    const c = u[3] ? u[3].trim().startsWith("T") ? `${u[1].trim()}${u[3].trim()}` : `${u[1].trim()}T${u[3].trim()}` : u[1].trim();
    i = new Date(c);
    try {
      i.toISOString();
    } catch {
      throw yt(We.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Wc(t)) {
    if (isNaN(t.getTime()))
      throw yt(We.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (Ve(t))
    i = t;
  else
    throw yt(We.INVALID_ARGUMENT);
  return K(a) ? s.key = a : ge(a) && Object.keys(a).forEach((u) => {
    cl.includes(u) ? r[u] = a[u] : s[u] = a[u];
  }), K(n) ? s.locale = n : ge(n) && (r = n), ge(o) && (r = o), [s.key || "", i, s, r];
}
function Xo(e, t, a) {
  const n = e;
  for (const o in a) {
    const s = `${t}__${o}`;
    n.__datetimeFormatters.has(s) && n.__datetimeFormatters.delete(s);
  }
}
function qo(e, ...t) {
  const { numberFormats: a, unresolving: n, fallbackLocale: o, onWarn: s, localeFallbacker: r } = e, { __numberFormatters: i } = e;
  if (process.env.NODE_ENV !== "production" && !ul.numberFormat)
    return s(Gt(Ye.CANNOT_FORMAT_NUMBER)), Fa;
  const [u, c, p, g] = fn(...t), m = Ne(p.missingWarn) ? p.missingWarn : e.missingWarn, S = Ne(p.fallbackWarn) ? p.fallbackWarn : e.fallbackWarn, R = !!p.part, E = jn(e, p), A = r(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    E
  );
  if (!K(u) || u === "")
    return new Intl.NumberFormat(E, g).format(c);
  let y = {}, v, _ = null, x = E, $ = null;
  const I = "number format";
  for (let j = 0; j < A.length; j++) {
    if (v = $ = A[j], process.env.NODE_ENV !== "production" && E !== v && Ya(S, u) && s(Gt(Ye.FALLBACK_TO_NUMBER_FORMAT, {
      key: u,
      target: v
    })), process.env.NODE_ENV !== "production" && E !== v) {
      const ue = e.__v_emitter;
      ue && ue.emit("fallback", {
        type: I,
        key: u,
        from: x,
        to: $,
        groupId: `${I}:${u}`
      });
    }
    if (y = a[v] || {}, _ = y[u], ge(_))
      break;
    Hn(e, u, v, m, I), x = $;
  }
  if (!ge(_) || !K(v))
    return n ? Ha : u;
  let O = `${v}__${u}`;
  ja(g) || (O = `${O}__${JSON.stringify(g)}`);
  let B = i.get(O);
  return B || (B = new Intl.NumberFormat(v, Ue({}, _, g)), i.set(O, B)), R ? B.formatToParts(c) : B.format(c);
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
  const [t, a, n, o] = e, s = _e();
  let r = _e();
  if (!Ve(t))
    throw yt(We.INVALID_ARGUMENT);
  const i = t;
  return K(a) ? s.key = a : ge(a) && Object.keys(a).forEach((u) => {
    dl.includes(u) ? r[u] = a[u] : s[u] = a[u];
  }), K(n) ? s.locale = n : ge(n) && (r = n), ge(o) && (r = o), [s.key || "", i, s, r];
}
function Jo(e, t, a) {
  const n = e;
  for (const o in a) {
    const s = `${t}__${o}`;
    n.__numberFormatters.has(s) && n.__numberFormatters.delete(s);
  }
}
const vf = (e) => e, hf = (e) => "", bf = "text", yf = (e) => e.length === 0 ? "" : zn(e), _f = Xc;
function Zo(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function wf(e) {
  const t = Ve(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Ve(e.named.count) || Ve(e.named.n)) ? Ve(e.named.count) ? e.named.count : Ve(e.named.n) ? e.named.n : t : t;
}
function xf(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function kf(e = {}) {
  const t = e.locale, a = wf(e), n = ve(e.pluralRules) && K(t) && Ee(e.pluralRules[t]) ? e.pluralRules[t] : Zo, o = ve(e.pluralRules) && K(t) && Ee(e.pluralRules[t]) ? Zo : void 0, s = (y) => y[n(a, y.length, o)], r = e.list || [], i = (y) => r[y], u = e.named || _e();
  Ve(e.pluralIndex) && xf(a, u);
  const c = (y) => u[y];
  function p(y, v) {
    const _ = Ee(e.messages) ? e.messages(y, !!v) : ve(e.messages) ? e.messages[y] : !1;
    return _ || (e.parent ? e.parent.message(y) : hf);
  }
  const g = (y) => e.modifiers ? e.modifiers[y] : vf, m = ge(e.processor) && Ee(e.processor.normalize) ? e.processor.normalize : yf, S = ge(e.processor) && Ee(e.processor.interpolate) ? e.processor.interpolate : _f, R = ge(e.processor) && K(e.processor.type) ? e.processor.type : bf, A = {
    list: i,
    named: c,
    plural: s,
    linked: (y, ...v) => {
      const [_, x] = v;
      let $ = "text", I = "";
      v.length === 1 ? ve(_) ? (I = _.modifier || I, $ = _.type || $) : K(_) && (I = _ || I) : v.length === 2 && (K(_) && (I = _ || I), K(x) && ($ = x || $));
      const O = p(y, !0)(A), B = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        $ === "vnode" && Ae(O) && I ? O[0] : O
      );
      return I ? g(I)(B, $) : B;
    },
    message: p,
    type: R,
    interpolate: S,
    normalize: m,
    values: Ue(_e(), r, u)
  };
  return A;
}
const Qo = () => "", Je = (e) => Ee(e);
function es(e, ...t) {
  const { fallbackFormat: a, postTranslation: n, unresolving: o, messageCompiler: s, fallbackLocale: r, messages: i } = e, [u, c] = mn(...t), p = Ne(c.missingWarn) ? c.missingWarn : e.missingWarn, g = Ne(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, m = Ne(c.escapeParameter) ? c.escapeParameter : e.escapeParameter, S = !!c.resolvedMessage, R = K(c.default) || Ne(c.default) ? Ne(c.default) ? s ? u : () => u : c.default : a ? s ? u : () => u : null, E = a || R != null && (K(R) || Ee(R)), A = jn(e, c);
  m && Ef(c);
  let [y, v, _] = S ? [
    u,
    A,
    i[A] || _e()
  ] : fl(e, u, A, r, g, p), x = y, $ = u;
  if (!S && !(K(x) || rt(x) || Je(x)) && E && (x = R, $ = x), !S && (!(K(x) || rt(x) || Je(x)) || !K(v)))
    return o ? Ha : u;
  if (process.env.NODE_ENV !== "production" && K(x) && e.messageCompiler == null)
    return pt(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${u}'.`), u;
  let I = !1;
  const O = () => {
    I = !0;
  }, B = Je(x) ? x : ml(e, u, v, x, $, O);
  if (I)
    return x;
  const j = Tf(e, v, _, c), ue = kf(j), be = Cf(e, B, ue);
  let W = n ? n(be, u) : be;
  if (m && K(W) && (W = Hc(W)), process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const le = {
      timestamp: Date.now(),
      key: K(u) ? u : Je(x) ? x.key : "",
      locale: v || (Je(x) ? x.locale : ""),
      format: K(x) ? x : Je(x) ? x.source : "",
      message: W
    };
    le.meta = Ue({}, e.__meta, /* @__PURE__ */ ff() || {}), zd(le);
  }
  return W;
}
function Ef(e) {
  Ae(e.list) ? e.list = e.list.map((t) => K(t) ? Lo(t) : t) : ve(e.named) && Object.keys(e.named).forEach((t) => {
    K(e.named[t]) && (e.named[t] = Lo(e.named[t]));
  });
}
function fl(e, t, a, n, o, s) {
  const { messages: r, onWarn: i, messageResolver: u, localeFallbacker: c } = e, p = c(e, n, a);
  let g = _e(), m, S = null, R = a, E = null;
  const A = "translate";
  for (let y = 0; y < p.length; y++) {
    if (m = E = p[y], process.env.NODE_ENV !== "production" && a !== m && !il(a, m) && Ya(o, t) && i(Gt(Ye.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: m
    })), process.env.NODE_ENV !== "production" && a !== m) {
      const $ = e.__v_emitter;
      $ && $.emit("fallback", {
        type: A,
        key: t,
        from: R,
        to: E,
        groupId: `${A}:${t}`
      });
    }
    g = r[m] || _e();
    let v = null, _, x;
    if (process.env.NODE_ENV !== "production" && xt && (v = window.performance.now(), _ = "intlify-message-resolve-start", x = "intlify-message-resolve-end", Xe && Xe(_)), (S = u(g, t)) === null && (S = g[t]), process.env.NODE_ENV !== "production" && xt) {
      const $ = window.performance.now(), I = e.__v_emitter;
      I && v && S && I.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: S,
        time: $ - v,
        groupId: `${A}:${t}`
      }), _ && x && Xe && zt && (Xe(x), zt("intlify message resolve", _, x));
    }
    if (K(S) || rt(S) || Je(S))
      break;
    if (!gf(m, p)) {
      const $ = Hn(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        m,
        s,
        A
      );
      $ !== t && (S = $);
    }
    R = E;
  }
  return [S, m, g];
}
function ml(e, t, a, n, o, s) {
  const { messageCompiler: r, warnHtmlMessage: i } = e;
  if (Je(n)) {
    const m = n;
    return m.locale = m.locale || a, m.key = m.key || t, m;
  }
  if (r == null) {
    const m = (() => n);
    return m.locale = a, m.key = t, m;
  }
  let u = null, c, p;
  process.env.NODE_ENV !== "production" && xt && (u = window.performance.now(), c = "intlify-message-compilation-start", p = "intlify-message-compilation-end", Xe && Xe(c));
  const g = r(n, Sf(e, a, o, n, i, s));
  if (process.env.NODE_ENV !== "production" && xt) {
    const m = window.performance.now(), S = e.__v_emitter;
    S && u && S.emit("message-compilation", {
      type: "message-compilation",
      message: n,
      time: m - u,
      groupId: `translate:${t}`
    }), c && p && Xe && zt && (Xe(p), zt("intlify message compilation", c, p));
  }
  return g.locale = a, g.key = t, g.source = n, g;
}
function Cf(e, t, a) {
  let n = null, o, s;
  process.env.NODE_ENV !== "production" && xt && (n = window.performance.now(), o = "intlify-message-evaluation-start", s = "intlify-message-evaluation-end", Xe && Xe(o));
  const r = t(a);
  if (process.env.NODE_ENV !== "production" && xt) {
    const i = window.performance.now(), u = e.__v_emitter;
    u && n && u.emit("message-evaluation", {
      type: "message-evaluation",
      value: r,
      time: i - n,
      groupId: `translate:${t.key}`
    }), o && s && Xe && zt && (Xe(s), zt("intlify message evaluation", o, s));
  }
  return r;
}
function mn(...e) {
  const [t, a, n] = e, o = _e();
  if (!K(t) && !Ve(t) && !Je(t) && !rt(t))
    throw yt(We.INVALID_ARGUMENT);
  const s = Ve(t) ? String(t) : (Je(t), t);
  return Ve(a) ? o.plural = a : K(a) ? o.default = a : ge(a) && !ja(a) ? o.named = a : Ae(a) && (o.list = a), Ve(n) ? o.plural = n : K(n) ? o.default = n : ge(n) && Ue(o, n), [s, o];
}
function Sf(e, t, a, n, o, s) {
  return {
    locale: t,
    key: a,
    warnHtmlMessage: o,
    onError: (r) => {
      if (s && s(r), process.env.NODE_ENV !== "production") {
        const i = Of(n), u = `Message compilation error: ${r.message}`, c = r.location && i && qc(i, r.location.start.offset, r.location.end.offset), p = e.__v_emitter;
        p && i && p.emit("compile-error", {
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
    onCacheKey: (r) => zc(t, a, r)
  };
}
function Of(e) {
  if (K(e))
    return e;
  if (e.loc && e.loc.source)
    return e.loc.source;
}
function Tf(e, t, a, n) {
  const { modifiers: o, pluralRules: s, messageResolver: r, fallbackLocale: i, fallbackWarn: u, missingWarn: c, fallbackContext: p } = e, m = {
    locale: t,
    modifiers: o,
    pluralRules: s,
    messages: (S, R) => {
      let E = r(a, S);
      if (E == null && (p || R)) {
        const [, , A] = fl(
          p || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          S,
          t,
          i,
          u,
          c
        );
        E = r(A, S);
      }
      if (K(E) || rt(E)) {
        let A = !1;
        const v = ml(e, S, t, E, S, () => {
          A = !0;
        });
        return A ? Qo : v;
      } else return Je(E) ? E : Qo;
    }
  };
  return e.processor && (m.processor = e.processor), n.list && (m.list = n.list), n.named && (m.named = n.named), Ve(n.plural) && (m.pluralIndex = n.plural), m;
}
Od();
const Nf = "11.2.8";
function Af() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Bt().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Bt().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Bt().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Bt().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const ze = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Wd,
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
function ga(e, ...t) {
  return ra(e, null, process.env.NODE_ENV !== "production" ? { messages: $f, args: t } : void 0);
}
const $f = {
  [ze.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
  [ze.INVALID_ARGUMENT]: "Invalid argument",
  [ze.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
  [ze.NOT_INSTALLED]: "Need to install with `app.use` function",
  [ze.UNEXPECTED_ERROR]: "Unexpected error",
  [ze.REQUIRED_VALUE]: "Required in value: {0}",
  [ze.INVALID_VALUE]: "Invalid value",
  [ze.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
  [ze.NOT_INSTALLED_WITH_PROVIDE]: "Need to install with `provide` function",
  [ze.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
  [ze.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}, pn = /* @__PURE__ */ kt("__translateVNode"), gn = /* @__PURE__ */ kt("__datetimeParts"), vn = /* @__PURE__ */ kt("__numberParts"), hn = /* @__PURE__ */ kt("__enableEmitter"), bn = /* @__PURE__ */ kt("__disableEmitter"), Pf = kt("__setPluralRules"), pl = /* @__PURE__ */ kt("__injectWithOption"), yn = /* @__PURE__ */ kt("__dispose"), ft = {
  FALLBACK_TO_ROOT: nf,
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
}, Df = {
  [ft.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
  [ft.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
  [ft.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
  /**
   * @deprecated will be removed at vue-i18n v12
   */
  [ft.DEPRECATE_LEGACY_MODE]: `Legacy API mode has been deprecated in v11. Use Composition API mode instead.
About how to use the Composition API mode, see https://vue-i18n.intlify.dev/guide/advanced/composition.html`,
  /**
   * @deprecated will be removed at vue-i18n v12
   */
  [ft.DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE]: "'v-t' has been deprecated in v11. Use translate APIs ('t' or '$t') instead.",
  [ft.DUPLICATE_USE_I18N_CALLING]: "Duplicate `useI18n` calling by local scope. Please don't call it on local scope, due to it does not work properly in component."
};
function Ua(e, ...t) {
  return Wa(Df[e], ...t);
}
function va(e) {
  if (!ve(e) || rt(e))
    return e;
  for (const t in e)
    if (lt(e, t))
      if (!t.includes("."))
        ve(e[t]) && va(e[t]);
      else {
        const a = t.split("."), n = a.length - 1;
        let o = e, s = !1;
        for (let r = 0; r < n; r++) {
          if (a[r] === "__proto__")
            throw new Error(`unsafe key: ${a[r]}`);
          if (a[r] in o || (o[a[r]] = _e()), !ve(o[a[r]])) {
            process.env.NODE_ENV !== "production" && pt(Ua(ft.IGNORE_OBJ_FLATTEN, {
              key: a[r]
            })), s = !0;
            break;
          }
          o = o[a[r]];
        }
        if (s || (rt(o) ? el.includes(a[n]) || delete e[t] : (o[a[n]] = e[t], delete e[t])), !rt(o)) {
          const r = o[a[n]];
          ve(r) && va(r);
        }
      }
  return e;
}
function gl(e, t) {
  const { messages: a, __i18n: n, messageResolver: o, flatJson: s } = t, r = ge(a) ? a : Ae(n) ? _e() : { [e]: _e() };
  if (Ae(n) && n.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: u, resource: c } = i;
      u ? (r[u] = r[u] || _e(), La(c, r[u])) : La(c, r);
    } else
      K(i) && La(JSON.parse(i), r);
  }), o == null && s)
    for (const i in r)
      lt(r, i) && va(r[i]);
  return r;
}
function vl(e) {
  return e.type;
}
function Lf(e, t, a) {
  let n = ve(t.messages) ? t.messages : _e();
  "__i18nGlobal" in a && (n = gl(e.locale.value, {
    messages: n,
    __i18n: a.__i18nGlobal
  }));
  const o = Object.keys(n);
  o.length && o.forEach((s) => {
    e.mergeLocaleMessage(s, n[s]);
  });
  {
    if (ve(t.datetimeFormats)) {
      const s = Object.keys(t.datetimeFormats);
      s.length && s.forEach((r) => {
        e.mergeDateTimeFormat(r, t.datetimeFormats[r]);
      });
    }
    if (ve(t.numberFormats)) {
      const s = Object.keys(t.numberFormats);
      s.length && s.forEach((r) => {
        e.mergeNumberFormat(r, t.numberFormats[r]);
      });
    }
  }
}
function ts(e) {
  return w(Gl, null, e, 0);
}
function Yn() {
  const e = "currentInstance";
  return e in Xa ? Xa[e] : Xa.getCurrentInstance();
}
const as = "__INTLIFY_META__", ns = () => [], If = () => !1;
let os = 0;
function ss(e) {
  return ((t, a, n, o) => e(a, n, Yn() || void 0, o));
}
const Mf = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = Yn();
  let t = null;
  return e && (t = vl(e)[as]) ? { [as]: t } : null;
};
function Rf(e = {}) {
  const { __root: t, __injectWithOption: a } = e, n = t === void 0, o = e.flatJson, s = xt ? ne : _t;
  let r = Ne(e.inheritLocale) ? e.inheritLocale : !0;
  const i = s(
    // prettier-ignore
    t && r ? t.locale.value : K(e.locale) ? e.locale : Va
  ), u = s(
    // prettier-ignore
    t && r ? t.fallbackLocale.value : K(e.fallbackLocale) || Ae(e.fallbackLocale) || ge(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i.value
  ), c = s(gl(i.value, e)), p = s(ge(e.datetimeFormats) ? e.datetimeFormats : { [i.value]: {} }), g = s(ge(e.numberFormats) ? e.numberFormats : { [i.value]: {} });
  let m = t ? t.missingWarn : Ne(e.missingWarn) || Ba(e.missingWarn) ? e.missingWarn : !0, S = t ? t.fallbackWarn : Ne(e.fallbackWarn) || Ba(e.fallbackWarn) ? e.fallbackWarn : !0, R = t ? t.fallbackRoot : Ne(e.fallbackRoot) ? e.fallbackRoot : !0, E = !!e.fallbackFormat, A = Ee(e.missing) ? e.missing : null, y = Ee(e.missing) ? ss(e.missing) : null, v = Ee(e.postTranslation) ? e.postTranslation : null, _ = t ? t.warnHtmlMessage : Ne(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, x = !!e.escapeParameter;
  const $ = t ? t.modifiers : ge(e.modifiers) ? e.modifiers : {};
  let I = e.pluralRules || t && t.pluralRules, O;
  O = (() => {
    n && jo(null);
    const T = {
      version: Nf,
      locale: i.value,
      fallbackLocale: u.value,
      messages: c.value,
      modifiers: $,
      pluralRules: I,
      missing: y === null ? void 0 : y,
      missingWarn: m,
      fallbackWarn: S,
      fallbackFormat: E,
      unresolving: !0,
      postTranslation: v === null ? void 0 : v,
      warnHtmlMessage: _,
      escapeParameter: x,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    T.datetimeFormats = p.value, T.numberFormats = g.value, T.__datetimeFormatters = ge(O) ? O.__datetimeFormatters : void 0, T.__numberFormatters = ge(O) ? O.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (T.__v_emitter = ge(O) ? O.__v_emitter : void 0);
    const F = pf(T);
    return n && jo(F), F;
  })(), da(O, i.value, u.value);
  function j() {
    return [
      i.value,
      u.value,
      c.value,
      p.value,
      g.value
    ];
  }
  const ue = V({
    get: () => i.value,
    set: (T) => {
      O.locale = T, i.value = T;
    }
  }), be = V({
    get: () => u.value,
    set: (T) => {
      O.fallbackLocale = T, u.value = T, da(O, i.value, T);
    }
  }), W = V(() => c.value), le = /* @__PURE__ */ V(() => p.value), z = /* @__PURE__ */ V(() => g.value);
  function ee() {
    return Ee(v) ? v : null;
  }
  function k(T) {
    v = T, O.postTranslation = T;
  }
  function H() {
    return A;
  }
  function C(T) {
    T !== null && (y = ss(T)), A = T, O.missing = y;
  }
  function pe(T, F) {
    return T !== "translate" || !F.resolvedMessage;
  }
  const Oe = (T, F, ce, xe, st, Lt) => {
    j();
    let He;
    try {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, n || (O.fallbackContext = t ? mf() : void 0), He = T(O);
    } finally {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, n || (O.fallbackContext = void 0);
    }
    if (ce !== "translate exists" && // for not `te` (e.g `t`)
    Ve(He) && He === Ha || ce === "translate exists" && !He) {
      const [it, Ka] = F();
      if (process.env.NODE_ENV !== "production" && t && K(it) && pe(ce, Ka) && (R && (Ya(S, it) || rl(m, it)) && pt(Ua(ft.FALLBACK_TO_ROOT, {
        key: it,
        type: ce
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: ut } = O;
        ut && R && ut.emit("fallback", {
          type: ce,
          key: it,
          to: "global",
          groupId: `${ce}:${it}`
        });
      }
      return t && R ? xe(t) : st(it);
    } else {
      if (Lt(He))
        return He;
      throw ga(ze.UNEXPECTED_RETURN_TYPE);
    }
  };
  function Le(...T) {
    return Oe((F) => Reflect.apply(es, null, [F, ...T]), () => mn(...T), "translate", (F) => Reflect.apply(F.t, F, [...T]), (F) => F, (F) => K(F));
  }
  function Qe(...T) {
    const [F, ce, xe] = T;
    if (xe && !ve(xe))
      throw ga(ze.INVALID_ARGUMENT);
    return Le(F, ce, Ue({ resolvedMessage: !0 }, xe || {}));
  }
  function Te(...T) {
    return Oe((F) => Reflect.apply(Ko, null, [F, ...T]), () => dn(...T), "datetime format", (F) => Reflect.apply(F.d, F, [...T]), () => Fa, (F) => K(F) || Ae(F));
  }
  function Ie(...T) {
    return Oe((F) => Reflect.apply(qo, null, [F, ...T]), () => fn(...T), "number format", (F) => Reflect.apply(F.n, F, [...T]), () => Fa, (F) => K(F) || Ae(F));
  }
  function et(T) {
    return T.map((F) => K(F) || Ve(F) || Ne(F) ? ts(String(F)) : F);
  }
  const we = {
    normalize: et,
    interpolate: (T) => T,
    type: "vnode"
  };
  function qe(...T) {
    return Oe((F) => {
      let ce;
      const xe = F;
      try {
        xe.processor = we, ce = Reflect.apply(es, null, [xe, ...T]);
      } finally {
        xe.processor = null;
      }
      return ce;
    }, () => mn(...T), "translate", (F) => F[pn](...T), (F) => [ts(F)], (F) => Ae(F));
  }
  function tt(...T) {
    return Oe((F) => Reflect.apply(qo, null, [F, ...T]), () => fn(...T), "number format", (F) => F[vn](...T), ns, (F) => K(F) || Ae(F));
  }
  function at(...T) {
    return Oe((F) => Reflect.apply(Ko, null, [F, ...T]), () => dn(...T), "datetime format", (F) => F[gn](...T), ns, (F) => K(F) || Ae(F));
  }
  function gt(T) {
    I = T, O.pluralRules = I;
  }
  function nt(T, F) {
    return Oe(() => {
      if (!T)
        return !1;
      const ce = K(F) ? F : i.value, xe = vt(ce), st = O.messageResolver(xe, T);
      return rt(st) || Je(st) || K(st);
    }, () => [T], "translate exists", (ce) => Reflect.apply(ce.te, ce, [T, F]), If, (ce) => Ne(ce));
  }
  function ot(T) {
    let F = null;
    const ce = tl(O, u.value, i.value);
    for (let xe = 0; xe < ce.length; xe++) {
      const st = c.value[ce[xe]] || {}, Lt = O.messageResolver(st, T);
      if (Lt != null) {
        F = Lt;
        break;
      }
    }
    return F;
  }
  function Pt(T) {
    const F = ot(T);
    return F ?? (t ? t.tm(T) || {} : {});
  }
  function vt(T) {
    return c.value[T] || {};
  }
  function Dt(T, F) {
    if (o) {
      const ce = { [T]: F };
      for (const xe in ce)
        lt(ce, xe) && va(ce[xe]);
      F = ce[T];
    }
    c.value[T] = F, O.messages = c.value;
  }
  function ia(T, F) {
    c.value[T] = c.value[T] || {};
    const ce = { [T]: F };
    if (o)
      for (const xe in ce)
        lt(ce, xe) && va(ce[xe]);
    F = ce[T], La(F, c.value[T]), O.messages = c.value;
  }
  function d(T) {
    return p.value[T] || {};
  }
  function h(T, F) {
    p.value[T] = F, O.datetimeFormats = p.value, Xo(O, T, F);
  }
  function L(T, F) {
    p.value[T] = Ue(p.value[T] || {}, F), O.datetimeFormats = p.value, Xo(O, T, F);
  }
  function U(T) {
    return g.value[T] || {};
  }
  function se(T, F) {
    g.value[T] = F, O.numberFormats = g.value, Jo(O, T, F);
  }
  function ie(T, F) {
    g.value[T] = Ue(g.value[T] || {}, F), O.numberFormats = g.value, Jo(O, T, F);
  }
  os++, t && xt && (Re(t.locale, (T) => {
    r && (i.value = T, O.locale = T, da(O, i.value, u.value));
  }), Re(t.fallbackLocale, (T) => {
    r && (u.value = T, O.fallbackLocale = T, da(O, i.value, u.value));
  }));
  const oe = {
    id: os,
    locale: ue,
    fallbackLocale: be,
    get inheritLocale() {
      return r;
    },
    set inheritLocale(T) {
      r = T, T && t && (i.value = t.locale.value, u.value = t.fallbackLocale.value, da(O, i.value, u.value));
    },
    get availableLocales() {
      return Object.keys(c.value).sort();
    },
    messages: W,
    get modifiers() {
      return $;
    },
    get pluralRules() {
      return I || {};
    },
    get isGlobal() {
      return n;
    },
    get missingWarn() {
      return m;
    },
    set missingWarn(T) {
      m = T, O.missingWarn = m;
    },
    get fallbackWarn() {
      return S;
    },
    set fallbackWarn(T) {
      S = T, O.fallbackWarn = S;
    },
    get fallbackRoot() {
      return R;
    },
    set fallbackRoot(T) {
      R = T;
    },
    get fallbackFormat() {
      return E;
    },
    set fallbackFormat(T) {
      E = T, O.fallbackFormat = E;
    },
    get warnHtmlMessage() {
      return _;
    },
    set warnHtmlMessage(T) {
      _ = T, O.warnHtmlMessage = T;
    },
    get escapeParameter() {
      return x;
    },
    set escapeParameter(T) {
      x = T, O.escapeParameter = T;
    },
    t: Le,
    getLocaleMessage: vt,
    setLocaleMessage: Dt,
    mergeLocaleMessage: ia,
    getPostTranslationHandler: ee,
    setPostTranslationHandler: k,
    getMissingHandler: H,
    setMissingHandler: C,
    [Pf]: gt
  };
  return oe.datetimeFormats = le, oe.numberFormats = z, oe.rt = Qe, oe.te = nt, oe.tm = Pt, oe.d = Te, oe.n = Ie, oe.getDateTimeFormat = d, oe.setDateTimeFormat = h, oe.mergeDateTimeFormat = L, oe.getNumberFormat = U, oe.setNumberFormat = se, oe.mergeNumberFormat = ie, oe[pl] = a, oe[pn] = qe, oe[gn] = at, oe[vn] = tt, process.env.NODE_ENV !== "production" && (oe[hn] = (T) => {
    O.__v_emitter = T;
  }, oe[bn] = () => {
    O.__v_emitter = void 0;
  }), oe;
}
function ls(e, t) {
}
const Kn = {
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
function Bf({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((n, o) => [
    ...n,
    // prettier-ignore
    ...o.type === me ? o.children : [o]
  ], []) : t.reduce((a, n) => {
    const o = e[n];
    return o && (a[n] = o()), a;
  }, _e());
}
function hl() {
  return me;
}
Ue({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => Ve(e) || !isNaN(e)
  }
}, Kn);
function Vf(e) {
  return Ae(e) && !K(e[0]);
}
function bl(e, t, a, n) {
  const { slots: o, attrs: s } = t;
  return () => {
    const r = { part: !0 };
    let i = _e();
    e.locale && (r.locale = e.locale), K(e.format) ? r.key = e.format : ve(e.format) && (K(e.format.key) && (r.key = e.format.key), i = Object.keys(e.format).reduce((m, S) => a.includes(S) ? Ue(_e(), m, { [S]: e.format[S] }) : m, _e()));
    const u = n(e.value, r, i);
    let c = [r.key];
    Ae(u) ? c = u.map((m, S) => {
      const R = o[m.type], E = R ? R({ [m.type]: m.value, index: S, parts: u }) : [m.value];
      return Vf(E) && (E[0].key = `${m.type}-${S}`), E;
    }) : K(u) && (c = [u]);
    const p = Ue(_e(), s), g = K(e.tag) || ve(e.tag) ? e.tag : hl();
    return Qt(g, p, c);
  };
}
Ue({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Kn);
const Ff = /* @__PURE__ */ kt("global-vue-i18n");
function At(e = {}) {
  const t = Yn();
  if (t == null)
    throw ga(ze.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw ga(ze.NOT_INSTALLED);
  const a = Uf(t), n = Gf(a), o = vl(t), s = zf(e, o);
  if (s === "global")
    return Lf(n, e, o), n;
  if (s === "parent") {
    let u = Wf(a, t, e.__useComponent);
    return u == null && (process.env.NODE_ENV !== "production" && pt(Ua(ft.NOT_FOUND_PARENT_SCOPE)), u = n), u;
  }
  const r = a;
  let i = r.__getInstance(t);
  if (i == null) {
    const u = Ue({}, e);
    "__i18n" in o && (u.__i18n = o.__i18n), n && (u.__root = n), i = Rf(u), r.__composerExtend && (i[yn] = r.__composerExtend(i)), Hf(r, t, i), r.__setInstance(t, i);
  } else
    process.env.NODE_ENV !== "production" && s === "local" && pt(Ua(ft.DUPLICATE_USE_I18N_CALLING));
  return i;
}
function Uf(e) {
  const t = ea(e.isCE ? Ff : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw ga(e.isCE ? ze.NOT_INSTALLED_WITH_PROVIDE : ze.UNEXPECTED_ERROR);
  return t;
}
function zf(e, t) {
  return ja(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Gf(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function Wf(e, t, a = !1) {
  let n = null;
  const o = t.root;
  let s = jf(t, a);
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
function jf(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function Hf(e, t, a) {
  let n = null;
  jt(() => {
    if (process.env.NODE_ENV !== "production") {
      t.__VUE_I18N__ = a, n = Jc();
      const o = a;
      o[hn] && o[hn](n), n.on("*", ls);
    }
  }, t), _n(() => {
    const o = a;
    process.env.NODE_ENV !== "production" && (n && n.off("*", ls), o[bn] && o[bn](), delete t.__VUE_I18N__), e.__deleteInstance(t);
    const s = o[yn];
    s && (s(), delete o[yn]);
  }, t);
}
Ue({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Kn);
Af();
rf(Vd);
uf(af);
cf(tl);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = Bt();
  e.__INTLIFY__ = !0, Fd(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
const Yf = ["colspan"], Xn = /* @__PURE__ */ P({
  __name: "DataTableEmpty",
  setup(e) {
    const t = Kt(), { t: a } = At();
    return (n, o) => (f(), M("tr", null, [
      q("td", {
        colspan: l(t).colNum.value
      }, [
        w(l(Pc), null, {
          default: b(() => [
            w(l(Ic), null, {
              default: b(() => [
                w(l(Rc), { variant: "icon" }, {
                  default: b(() => [
                    w(l(ws))
                  ]),
                  _: 1
                }),
                w(l(Vc), null, {
                  default: b(() => [
                    de(X(l(a)("dataTable.noEntriesFound")), 1)
                  ]),
                  _: 1
                }),
                w(l(Lc), null, {
                  default: b(() => [
                    de(X(l(a)("dataTable.noEntriesFoundDescription")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            w(l(Dc), null, {
              default: b(() => [
                D(n.$slots, "default")
              ]),
              _: 3
            })
          ]),
          _: 3
        })
      ], 8, Yf)
    ]));
  }
}), Kf = /* @__PURE__ */ P({
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
    const a = e, n = t, o = fe(a, "class"), s = $e(o, n);
    return (r, i) => (f(), N(l(or), Y({ "data-slot": "pagination" }, l(s), {
      class: l(G)("mx-auto flex w-full justify-center", a.class)
    }), {
      default: b((u) => [
        D(r.$slots, "default", mt(wt(u)))
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Xf = /* @__PURE__ */ P({
  __name: "PaginationContent",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = fe(t, "class");
    return (n, o) => (f(), N(l(sr), Y({ "data-slot": "pagination-content" }, l(a), {
      class: l(G)("flex flex-row items-center gap-1", t.class)
    }), {
      default: b((s) => [
        D(n.$slots, "default", mt(wt(s)))
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), qf = (e, t) => t, Jf = /* @__PURE__ */ Symbol("brink-component-translation");
function je() {
  return ea(Jf, null) ?? qf;
}
const Zf = { class: "hidden sm:block" }, Qf = /* @__PURE__ */ P({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, a = fe(t, "class", "size"), n = Ze(a), o = je();
    return (s, r) => (f(), N(l(lr), Y({
      "data-slot": "pagination-first",
      class: l(G)(l(Ot)({ variant: "outline", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, l(n)), {
      default: b(() => [
        D(s.$slots, "default", {}, () => [
          w(l(ys), { class: "size-4" }),
          q("span", Zf, X(l(o)("pagination.first", "First")), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), em = { class: "hidden sm:block" }, tm = /* @__PURE__ */ P({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, a = fe(t, "class", "size"), n = Ze(a), o = je();
    return (s, r) => (f(), N(l(rr), Y({
      "data-slot": "pagination-last",
      class: l(G)(l(Ot)({ variant: "outline", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, l(n)), {
      default: b(() => [
        D(s.$slots, "default", {}, () => [
          q("span", em, X(l(o)("pagination.last", "Last")), 1),
          w(l(_s), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), am = { class: "hidden sm:block" }, nm = /* @__PURE__ */ P({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, a = fe(t, "class", "size"), n = Ze(a), o = je();
    return (s, r) => (f(), N(l(ir), Y({
      "data-slot": "pagination-next",
      class: l(G)(l(Ot)({ variant: "outline", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, l(n)), {
      default: b(() => [
        D(s.$slots, "default", {}, () => [
          q("span", am, X(l(o)("pagination.next", "Next")), 1),
          w(l(Ht))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), om = { class: "hidden sm:block" }, sm = /* @__PURE__ */ P({
  __name: "PaginationPrevious",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, a = fe(t, "class", "size"), n = Ze(a), o = je();
    return (s, r) => (f(), N(l(ur), Y({
      "data-slot": "pagination-previous",
      class: l(G)(l(Ot)({ variant: "outline", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, l(n)), {
      default: b(() => [
        D(s.$slots, "default", {}, () => [
          w(l(bs)),
          q("span", om, X(l(o)("pagination.previous", "Previous")), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), lm = /* @__PURE__ */ P({
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
    const o = $e(e, t);
    return (s, r) => (f(), N(l(cr), Y({ "data-slot": "select" }, l(o)), {
      default: b(() => [
        D(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), rm = /* @__PURE__ */ P({
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
    const a = e, n = t, o = fe(a, "class"), s = $e(o, n);
    return (r, i) => (f(), N(l(dr), null, {
      default: b(() => [
        w(l(fr), Y({ "data-slot": "select-content" }, { ...l(s), ...r.$attrs }, {
          class: l(G)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--reka-select-content-available-height) min-w-[8rem] overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
            e.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            a.class
          )
        }), {
          default: b(() => [
            w(l(dm)),
            w(l(mr), {
              class: te(l(G)("p-1", e.position === "popper" && "h-[var(--reka-select-trigger-height)] w-full min-w-[var(--reka-select-trigger-width)] scroll-my-1"))
            }, {
              default: b(() => [
                D(r.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            w(l(cm))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), im = { class: "absolute right-2 flex size-3.5 items-center justify-center" }, um = /* @__PURE__ */ P({
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
    const t = e, a = fe(t, "class"), n = Ze(a);
    return (o, s) => (f(), N(l(pr), Y({ "data-slot": "select-item" }, l(n), {
      class: l(G)(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        t.class
      )
    }), {
      default: b(() => [
        q("span", im, [
          w(l(gr), null, {
            default: b(() => [
              w(l(Ga), { class: "size-4" })
            ]),
            _: 1
          })
        ]),
        w(l(vr), null, {
          default: b(() => [
            D(o.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), cm = /* @__PURE__ */ P({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = fe(t, "class"), n = Ze(a);
    return (o, s) => (f(), N(l(hr), Y({ "data-slot": "select-scroll-down-button" }, l(n), {
      class: l(G)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: b(() => [
        D(o.$slots, "default", {}, () => [
          w(l(oa), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), dm = /* @__PURE__ */ P({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = fe(t, "class"), n = Ze(a);
    return (o, s) => (f(), N(l(br), Y({ "data-slot": "select-scroll-up-button" }, l(n), {
      class: l(G)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: b(() => [
        D(o.$slots, "default", {}, () => [
          w(l(ti), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), fm = /* @__PURE__ */ P({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), N(l(yr), Y({ "data-slot": "select-value" }, t), {
      default: b(() => [
        D(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qn = /* @__PURE__ */ P({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = fe(t, "class");
    return (n, o) => (f(), N(l(_r), Y({ "data-slot": "dropdown-menu-separator" }, l(a), {
      class: l(G)("bg-border -mx-1 my-1 h-px", t.class)
    }), null, 16, ["class"]));
  }
}), mm = {
  key: 0,
  class: "text-xs font-semibold px-2 py-2"
}, pm = { key: 1 }, gm = {
  key: 0,
  class: "-mt-2"
}, Jn = /* @__PURE__ */ P({
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
    disabled: { type: Boolean },
    class: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Se(["onAddItem"], ["update:modelValue"]),
  setup(e) {
    const t = e, a = je(), n = he(e, "modelValue"), o = V(() => Object.fromEntries(ke(t.options).map((u) => [u.value, u]))), s = V(() => n.value ? t.multiple ? Array.isArray(n.value) ? n.value.map((u) => o.value[u]).filter(Boolean) : [] : o.value[n.value] ? [o.value[n.value]] : [] : []);
    function r() {
      n.value = t.initialValues ?? (t.multiple ? [] : void 0);
    }
    const i = V(
      () => t.initialValues === void 0 ? n.value !== void 0 : JSON.stringify(t.initialValues) !== JSON.stringify(n.value)
    );
    return (u, c) => (f(), M(me, null, [
      w(l(lm), {
        modelValue: n.value,
        "onUpdate:modelValue": c[1] || (c[1] = (p) => n.value = p),
        multiple: e.multiple,
        disabled: e.disabled
      }, {
        default: b(() => [
          w(l(wr), Y({
            class: l(G)(
              "w-full data-[placeholder]:text-muted-foreground ",
              t.class
            )
          }, u.$attrs, {
            disabled: e.disabled,
            "as-child": ""
          }), {
            default: b(() => [
              w(zs, { variant: "outline" }, {
                default: b(() => [
                  D(u.$slots, "default", { selectedOptions: s.value }, () => [
                    w(l(fm), {
                      placeholder: e.placeholder || l(a)("common.select", "Select"),
                      class: "flex-wrap"
                    }, {
                      default: b(() => [
                        e.customValueComponent && s.value.length > 0 ? (f(!0), M(me, { key: 0 }, ye(s.value, (p) => (f(), N(Ke(e.customValueComponent), Y({
                          key: p.value,
                          option: p,
                          "selected-options": s.value
                        }, { ref_for: !0 }, e.customValueProps), null, 16, ["option", "selected-options"]))), 128)) : Q("", !0)
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
          w(l(rm), null, {
            default: b(() => [
              e.label ? (f(), M("div", mm, X(e.label), 1)) : Q("", !0),
              (f(!0), M(me, null, ye(ke(e.options), (p) => (f(), N(l(um), {
                key: String(p.value),
                value: p.value,
                disabled: e.disabled
              }, {
                default: b(() => [
                  de(X(p.label), 1)
                ]),
                _: 2
              }, 1032, ["value", "disabled"]))), 128)),
              e.showResetButton && i.value ? (f(), M("div", pm, [
                w(qn),
                w(Fe, {
                  class: "w-full",
                  variant: "ghost",
                  size: "sm",
                  disabled: e.disabled,
                  onClick: c[0] || (c[0] = (p) => r())
                }, {
                  default: b(() => [
                    w(l(li)),
                    de(" " + X(l(a)("common.reset", "Reset")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ])) : Q("", !0)
            ]),
            _: 1
          })
        ]),
        _: 3
      }, 8, ["modelValue", "multiple", "disabled"]),
      e.showAddItemButton ? (f(), M("div", gm, [
        w(Fe, {
          size: "sm",
          class: "sticky bottom-0",
          variant: "ghost",
          disabled: e.disabled,
          onClick: c[2] || (c[2] = (p) => u.$emit("onAddItem"))
        }, {
          default: b(() => [
            w(l(An)),
            de(" " + X(l(a)("common.addItem", "Add Item")), 1)
          ]),
          _: 1
        }, 8, ["disabled"])
      ])) : Q("", !0)
    ], 64));
  }
}), vm = {
  key: 0,
  class: "flex items-center gap-2 min-w-0"
}, hm = { class: "text-sm text-muted-foreground hidden truncate @xl:block" }, bm = { class: "text-sm truncate min-w-0 mr-2 text-muted-foreground" }, ym = { class: "hidden @2xl:block" }, _m = { class: "@2xl:hidden" }, wm = /* @__PURE__ */ P({
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
    hideItemsPerPage: { type: Boolean },
    pageSizeOptions: {}
  }, {
    itemsPerPage: { default: 25 },
    itemsPerPageModifiers: {}
  }),
  emits: /* @__PURE__ */ Se(["update:page"], ["update:itemsPerPage"]),
  setup(e, { emit: t }) {
    const a = e, n = t, o = fe(a, "class"), s = $e(o, n), r = he(e, "itemsPerPage"), { t: i } = At();
    return (u, c) => (f(), M("div", null, [
      w(l(Kf), Y(l(s), { class: "flex items-center gap-4 @xl:gap-8 @4xl:gap-12" }), {
        default: b(({ page: p, pageCount: g }) => [
          e.hideItemsPerPage ? Q("", !0) : (f(), M("div", vm, [
            q("span", hm, X(l(i)("dataTable.rowsPerPage")), 1),
            w(Jn, {
              class: "!w-auto",
              options: e.pageSizeOptions.map((m) => ({ value: m, label: `${m}` })),
              "model-value": r.value,
              "onUpdate:modelValue": c[0] || (c[0] = (m) => r.value = m)
            }, null, 8, ["options", "model-value"])
          ])),
          w(l(Xf), null, {
            default: b(() => [
              q("div", bm, [
                q("span", ym, X(l(i)("dataTable.pageOf", { page: p, pageCount: g })), 1),
                q("span", _m, X(p) + " / " + X(g), 1)
              ]),
              w(l(Qf), null, {
                default: b(() => [
                  w(l(ys), { class: "size-4" })
                ]),
                _: 1
              }),
              w(l(sm), null, {
                default: b(() => [
                  w(l(bs))
                ]),
                _: 1
              }),
              w(l(nm), { variant: "outline" }, {
                default: b(() => [
                  w(l(Ht))
                ]),
                _: 1
              }),
              w(l(tm), { variant: "outline" }, {
                default: b(() => [
                  w(l(_s), { class: "size-4" })
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
}), xm = { key: 0 }, km = { class: "flex gap-2 items-center min-w-0" }, Em = { class: "text-sm mr-2 line-clamp-1 min-w-0 text-muted-foreground" }, Cm = { key: 1 }, Sm = { class: "text-sm line-clamp-1 text-muted-foreground" }, Om = {
  key: 2,
  class: "flex flex-1 justify-end items-center gap-4"
}, yl = /* @__PURE__ */ P({
  __name: "DataTableFooter",
  props: /* @__PURE__ */ Se({
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
    const t = he(e, "page"), a = he(e, "itemsPerPage"), n = Kt(), { t: o } = At();
    return (s, r) => l(n).hasItems.value ? (f(), M("div", {
      key: 0,
      class: te(["@container sticky bottom-0 right-0 w-full gap-2 flex items-center bg-background px-0 py-3 z-10 transition-[left] duration-200 ease-linear", { "!px-6": !e.bordered }])
    }, [
      l(n).selectMode === "multiselect" && l(n).selected.value.length > 0 ? (f(), M("div", xm, [
        q("div", km, [
          q("span", Em, X(l(o)("dataTable.elementsSelected", { count: l(n).selected.value.length, total: l(n).items.length })), 1),
          l(n).selected.value.length > 0 ? D(s.$slots, "bulk", {
            key: 0,
            selected: l(n).selected.value
          }) : Q("", !0)
        ])
      ])) : l(n).selected.value.length === 0 && e.total !== void 0 ? (f(), M("div", Cm, [
        q("span", Sm, X(l(o)("dataTable.totalElements", { total: e.total })), 1)
      ])) : Q("", !0),
      e.total !== void 0 ? (f(), M("div", Om, [
        a.value ? (f(), N(wm, {
          key: 0,
          page: t.value,
          "onUpdate:page": r[0] || (r[0] = (i) => t.value = i),
          "items-per-page": a.value,
          "onUpdate:itemsPerPage": r[1] || (r[1] = (i) => a.value = i),
          "page-size-options": e.pageSizeOptions || [],
          "hide-items-per-page": l(n).selected.value.length > 0 || e.pageSizeOptions && e.pageSizeOptions.length < 2,
          total: e.total,
          disabled: l(n).isPending
        }, null, 8, ["page", "items-per-page", "page-size-options", "hide-items-per-page", "total", "disabled"])) : Q("", !0)
      ])) : Q("", !0)
    ], 2)) : Q("", !0);
  }
}), aa = /* @__PURE__ */ P({
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
    const a = e, n = t, o = fe(a, "class"), s = $e(o, n);
    return (r, i) => (f(), N(l(xr), Y(l(s), {
      class: l(G)(
        "grid place-content-center peer h-4.5 w-4.5 shrink-0 rounded-sm border-input border  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        a.class
      )
    }), {
      default: b(() => [
        w(l(kr), { class: "grid place-content-center text-current" }, {
          default: b(() => [
            D(r.$slots, "default", {}, () => [
              w(l(Ga), {
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
    const o = $e(e, t);
    return (s, r) => (f(), N(l(Er), Y({ "data-slot": "dropdown-menu" }, l(o)), {
      default: b(() => [
        D(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Tm = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, Nm = /* @__PURE__ */ P({
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
    const a = e, n = t, o = fe(a, "class"), s = $e(o, n);
    return (r, i) => (f(), N(l(Cr), Y({ "data-slot": "dropdown-menu-checkbox-item" }, l(s), {
      class: l(G)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        a.class
      )
    }), {
      default: b(() => [
        q("span", Tm, [
          w(l(Sr), null, {
            default: b(() => [
              w(l(Ga), { class: "size-4" })
            ]),
            _: 1
          })
        ]),
        D(r.$slots, "default")
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
    const a = e, n = t, o = fe(a, "class"), s = $e(o, n);
    return (r, i) => (f(), N(l(Or), null, {
      default: b(() => [
        w(l(Tr), Y({ "data-slot": "dropdown-menu-content" }, l(s), {
          class: l(G)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--reka-dropdown-menu-content-available-height) min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", a.class)
        }), {
          default: b(() => [
            D(r.$slots, "default")
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
    const t = e, a = fe(t, "inset", "variant", "class"), n = Ze(a);
    return (o, s) => (f(), N(l(Nr), Y({
      "data-slot": "dropdown-menu-item",
      "data-inset": e.inset ? "" : void 0,
      "data-variant": e.variant
    }, l(n), {
      class: l(G)("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive-foreground data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/40 data-[variant=destructive]:focus:text-destructive-foreground data-[variant=destructive]:*:[svg]:!text-destructive-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", t.class)
    }), {
      default: b(() => [
        D(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "data-variant", "class"]));
  }
}), Am = /* @__PURE__ */ P({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(e) {
    const t = e, a = fe(t, "class", "inset"), n = Ze(a);
    return (o, s) => (f(), N(l(Ar), Y({
      "data-slot": "dropdown-menu-label",
      "data-inset": e.inset ? "" : void 0
    }, l(n), {
      class: l(G)("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", t.class)
    }), {
      default: b(() => [
        D(o.$slots, "default")
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
    const a = Ze(e);
    return (n, o) => (f(), N(l($r), Y({ "data-slot": "dropdown-menu-trigger" }, l(a)), {
      default: b(() => [
        D(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), kl = /* @__PURE__ */ P({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = $e(e, t);
    return (s, r) => (f(), N(l(Pr), Y({ "data-slot": "popover" }, l(o)), {
      default: b(() => [
        D(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), El = /* @__PURE__ */ P({
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
    const a = e, n = t, o = fe(a, "class"), s = $e(o, n);
    return (r, i) => (f(), N(l(Dr), null, {
      default: b(() => [
        w(l(Lr), Y({ "data-slot": "popover-content" }, { ...l(s), ...r.$attrs }, {
          class: l(G)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border p-4 shadow-md origin-(--reka-popover-content-transform-origin) outline-hidden",
            a.class
          )
        }), {
          default: b(() => [
            D(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Cl = /* @__PURE__ */ P({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), N(l(Ir), Y({ "data-slot": "popover-trigger" }, t), {
      default: b(() => [
        D(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $m = {
  key: 0,
  class: "ml-1 text-xs font-medium tabular-nums"
}, Pm = { class: "max-h-52 overflow-y-auto space-y-0.5" }, Dm = {
  key: 0,
  class: "text-center text-xs text-muted-foreground py-4"
}, Lm = ["onClick"], Im = { class: "text-sm" }, Mm = {
  key: 1,
  class: "text-center text-xs text-muted-foreground py-4"
}, Rm = {
  key: 0,
  class: "border-t mt-2 pt-2"
}, Bm = /* @__PURE__ */ P({
  __name: "DataTableColumnHeader",
  props: {
    title: {},
    sortable: { type: Boolean, default: !1 },
    sortOrder: {},
    hideable: { type: Boolean, default: !0 },
    filter: {},
    filterValue: {}
  },
  emits: ["sort", "hide", "update:filterValue"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = je(), s = V(() => a.sortOrder ? a.sortOrder === "asc" ? io : ro : ai);
    function r(y) {
      n("sort", y);
    }
    function i() {
      n("hide");
    }
    const u = ne(!1), c = ne([]), p = ne(""), g = ne(!1), m = V(
      () => a.filter && typeof a.filter == "function" && !("__vccOpts" in a.filter)
    ), S = V(
      () => p.value ? c.value.filter(
        (y) => String(y.label ?? y.value).toLowerCase().includes(p.value.toLowerCase())
      ) : c.value
    ), R = V({
      get: () => a.filterValue,
      set: (y) => n("update:filterValue", y)
    });
    Re(u, async (y) => {
      y && m.value && (g.value = !0, c.value = await a.filter(), g.value = !1);
    });
    function E(y) {
      const v = a.filterValue ?? [];
      v.includes(y) ? n(
        "update:filterValue",
        v.filter((_) => _ !== y)
      ) : n("update:filterValue", [...v, y]);
    }
    const A = V(() => {
      const y = a.filterValue;
      return y ? Array.isArray(y) ? y.length > 0 : !0 : !1;
    });
    return (y, v) => (f(), M("div", {
      class: te(l(G)("group/colheader flex items-center gap-0.5"))
    }, [
      !e.sortable && !e.hideable ? (f(), M("div", {
        key: 0,
        class: te(l(G)("flex items-center font-normal text-xs"))
      }, [
        q("span", null, X(e.title), 1)
      ], 2)) : (f(), N(l(_l), { key: 1 }, {
        default: b(() => [
          w(l(xl), { "as-child": "" }, {
            default: b(() => [
              w(l(Fe), {
                variant: "ghost",
                size: "sm",
                class: "-ml-3 h-8 data-[state=open]:bg-accent text-muted-foreground text-xs font-normal"
              }, {
                default: b(() => [
                  q("span", null, X(e.title), 1),
                  e.sortable ? (f(), N(Ke(s.value), {
                    key: 0,
                    class: "ml-2 h-3.5! w-3.5!"
                  })) : Q("", !0)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          w(l(wl), { align: "start" }, {
            default: b(() => [
              e.sortable ? (f(), M(me, { key: 0 }, [
                w(l(Aa), {
                  onClick: v[0] || (v[0] = (_) => r("asc"))
                }, {
                  default: b(() => [
                    w(l(io), { class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                    de(" " + X(l(o)("datatable.sort.asc", "Asc")), 1)
                  ]),
                  _: 1
                }),
                w(l(Aa), {
                  onClick: v[1] || (v[1] = (_) => r("desc"))
                }, {
                  default: b(() => [
                    w(l(ro), { class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                    de(" " + X(l(o)("datatable.sort.desc", "Desc")), 1)
                  ]),
                  _: 1
                }),
                e.sortOrder ? (f(), N(l(Aa), {
                  key: 0,
                  onClick: v[2] || (v[2] = (_) => r(void 0))
                }, {
                  default: b(() => [
                    w(l(ei), { class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                    de(" " + X(l(o)("datatable.sort.clear", "Clear sort")), 1)
                  ]),
                  _: 1
                })) : Q("", !0)
              ], 64)) : Q("", !0),
              e.sortable && e.hideable ? (f(), N(l(qn), { key: 1 })) : Q("", !0),
              e.hideable ? (f(), N(l(Aa), {
                key: 2,
                onClick: i
              }, {
                default: b(() => [
                  w(l(ni), { class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                  de(" " + X(l(o)("datatable.hide", "Hide")), 1)
                ]),
                _: 1
              })) : Q("", !0)
            ]),
            _: 1
          })
        ]),
        _: 1
      })),
      e.filter ? (f(), N(l(kl), {
        key: 2,
        open: u.value,
        "onUpdate:open": v[7] || (v[7] = (_) => u.value = _)
      }, {
        default: b(() => [
          w(l(Cl), { "as-child": "" }, {
            default: b(() => [
              w(l(Fe), {
                size: "sm",
                variant: "ghost",
                class: te(["relative h-7 p-0 shrink-0", [
                  A.value ? "w-auto px-1.5 text-primary" : "w-7 text-muted-foreground/40 opacity-0 group-hover/colheader:opacity-100"
                ]])
              }, {
                default: b(() => [
                  w(l(oi), { class: "h-3.5! w-3.5!" }),
                  A.value && Array.isArray(e.filterValue) && e.filterValue.length > 0 ? (f(), M("span", $m, X(e.filterValue.length), 1)) : Q("", !0)
                ]),
                _: 1
              }, 8, ["class"])
            ]),
            _: 1
          }),
          w(l(El), {
            class: "w-64 p-2",
            align: "start",
            onClick: v[6] || (v[6] = wn(() => {
            }, ["stop"]))
          }, {
            default: b(() => [
              m.value ? (f(), M(me, { key: 0 }, [
                w(l(St), {
                  modelValue: p.value,
                  "onUpdate:modelValue": v[3] || (v[3] = (_) => p.value = _),
                  placeholder: l(o)("datatable.filter.search", "Search..."),
                  class: "h-8 mb-2"
                }, null, 8, ["modelValue", "placeholder"]),
                q("div", Pm, [
                  g.value ? (f(), M("div", Dm, X(l(o)("datatable.filter.loading", "Loading...")), 1)) : Q("", !0),
                  (f(!0), M(me, null, ye(S.value, (_) => (f(), M("div", {
                    key: _.value,
                    class: "flex items-center gap-2 px-2 py-1.5 rounded cursor-pointer hover:bg-accent select-none",
                    onClick: (x) => E(_.value)
                  }, [
                    w(l(aa), {
                      "model-value": e.filterValue?.includes(_.value) ?? !1,
                      class: "pointer-events-none"
                    }, null, 8, ["model-value"]),
                    q("span", Im, X(_.label ?? _.value), 1)
                  ], 8, Lm))), 128)),
                  !g.value && S.value.length === 0 ? (f(), M("div", Mm, X(l(o)("datatable.filter.empty", "No options")), 1)) : Q("", !0)
                ]),
                A.value ? (f(), M("div", Rm, [
                  w(l(Fe), {
                    variant: "ghost",
                    size: "sm",
                    class: "h-7 w-full text-xs",
                    onClick: v[4] || (v[4] = (_) => n("update:filterValue", []))
                  }, {
                    default: b(() => [
                      de(X(l(o)("datatable.filter.clear", "Clear filter")), 1)
                    ]),
                    _: 1
                  })
                ])) : Q("", !0)
              ], 64)) : (f(), N(Ke(e.filter), {
                key: 1,
                modelValue: R.value,
                "onUpdate:modelValue": v[5] || (v[5] = (_) => R.value = _)
              }, null, 8, ["modelValue"]))
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["open"])) : Q("", !0)
    ], 2));
  }
}), Vm = { class: "text-left" }, Fm = {
  key: 0,
  class: "w-6! pr-0!"
}, Um = {
  key: 1,
  class: "w-6!"
}, zm = { key: 2 }, Zn = /* @__PURE__ */ P({
  __name: "DataTableHeader",
  props: {
    visibleColumns: {}
  },
  emits: ["update:visibleColumns"],
  setup(e, { emit: t }) {
    const a = t, n = Kt();
    return (o, s) => {
      const r = Wl("tooltip");
      return f(), M("thead", Vm, [
        q("tr", null, [
          l(n).expandable ? (f(), M("th", Fm, [
            vs((f(), N(Fe, {
              type: "button",
              size: "sm",
              variant: "ghost",
              class: "h-6 w-6 p-0 -mr-1 not-hover:opacity-0",
              onClick: s[0] || (s[0] = (i) => l(n).toggleExpandAll())
            }, {
              default: b(() => [
                (f(), N(Ke(l(n).allExpandedState.value ? l(oa) : l(Ht))))
              ]),
              _: 1
            })), [
              [r, "Toggle collapse"]
            ])
          ])) : Q("", !0),
          l(n).selectMode === "multiselect" ? (f(), M("th", Um, [
            w(l(aa), {
              "model-value": l(n).allSelectedState.value,
              "onUpdate:modelValue": s[1] || (s[1] = () => l(n).toggleAllSelected())
            }, null, 8, ["model-value"])
          ])) : Q("", !0),
          (f(!0), M(me, null, ye(l(n).filteredColumns.value, (i) => (f(), M("th", {
            key: i.id
          }, [
            D(o.$slots, `header:${i.id}`, { column: i }, () => [
              w(Bm, {
                title: i.title ?? l(Nc)(i.id),
                sortable: l(n).sortable && i.sortable,
                "sort-order": l(n).sortBy?.value?.key === i.id ? l(n).sortBy.value.order : void 0,
                hideable: i.hideable ?? !0,
                filter: i.filter,
                "filter-value": l(n).filterBy?.value?.[i.id],
                onSort: (u) => u ? l(n).updateSort(i.id) : l(n).sortBy.value = void 0,
                onHide: () => a("update:visibleColumns", e.visibleColumns?.filter((u) => u !== i.id) || []),
                "onUpdate:filterValue": (u) => l(n).updateFilter(i.id, u)
              }, null, 8, ["title", "sortable", "sort-order", "hideable", "filter", "filter-value", "onSort", "onHide", "onUpdate:filterValue"])
            ])
          ]))), 128)),
          l(n).hasActionsColumn ? (f(), M("th", zm)) : Q("", !0)
        ])
      ]);
    };
  }
}), Sl = /* @__PURE__ */ P({
  __name: "Spinner",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), N(l(si), {
      role: "status",
      "aria-label": "Loading",
      class: te(l(G)("size-4 animate-spin", t.class))
    }, null, 8, ["class"]));
  }
}), Gm = { class: "absolute inset-0 bg-background/80 z-10 flex items-center justify-center rounded-md" }, Wm = { class: "flex flex-col items-center gap-2" }, jm = { class: "text-sm text-muted-foreground" }, Qn = /* @__PURE__ */ P({
  __name: "DataTableLoadingOverlay",
  setup(e) {
    const { t } = At();
    return (a, n) => (f(), M("div", Gm, [
      q("div", Wm, [
        w(Sl, {
          size: 30,
          class: "size-8"
        }),
        q("span", jm, X(l(t)("dataTable.loading") || "Loading..."), 1)
      ])
    ]));
  }
}), Hm = ["data-state", "data-row-id"], Ym = {
  key: 0,
  class: "!w-6 !pr-0"
}, Km = {
  key: 1,
  class: "!w-6 !pr-0"
}, Xm = ["data-col-id", "tabindex"], qm = { key: 2 }, Jm = { class: "flex items-center gap-0.5" }, Ol = /* @__PURE__ */ P({
  __name: "DataTableRow",
  props: {
    item: {}
  },
  setup(e) {
    const t = e, a = Kt(), n = V(() => a.selectedMap.value[t.item[a.idcol]]), o = V(() => a.highlightedRow === t.item[a.idcol]), s = V(() => a.expandedMap.value[t.item[a.idcol]]), r = V(() => a.isRowExpandableFn(t.item));
    return (i, u) => (f(), M("tr", {
      "data-state": (n.value || o.value) && "selected",
      "data-row-id": e.item[l(a).idcol]
    }, [
      l(a).expandable ? (f(), M("td", Ym, [
        r.value ? (f(), N(Fe, {
          key: 0,
          size: "sm",
          variant: "ghost",
          class: "h-6 w-6 p-0 -mr-1",
          onClick: u[0] || (u[0] = (c) => l(a).toggleExpand(e.item[l(a).idcol]))
        }, {
          default: b(() => [
            (f(), N(Ke(s.value ? l(oa) : l(Ht)), { class: "h-4 w-4" }))
          ]),
          _: 1
        })) : Q("", !0)
      ])) : Q("", !0),
      l(a).selectMode === "multiselect" ? (f(), M("td", Km, [
        w(l(aa), {
          "model-value": l(a).selected.value.includes(e.item[l(a).idcol]),
          "onUpdate:modelValue": u[1] || (u[1] = (c) => l(a).toggleSelected(e.item[l(a).idcol]))
        }, null, 8, ["model-value"])
      ])) : Q("", !0),
      (f(!0), M(me, null, ye(l(a).filteredColumns.value, (c) => (f(), M("td", {
        key: c.id,
        "data-col-id": c.id,
        tabindex: c.onClick ? 0 : -1,
        class: te(c.cssClass)
      }, [
        D(i.$slots, `cell:${String(c.id)}`, {
          item: e.item,
          value: e.item[c.id],
          expanded: s.value
        }, () => [
          de(X(e.item[c.id]), 1)
        ])
      ], 10, Xm))), 128)),
      l(a).hasActionsColumn ? (f(), M("td", qm, [
        q("div", Jm, [
          D(i.$slots, "cell:actions", { item: e.item })
        ])
      ])) : Q("", !0)
    ], 8, Hm));
  }
}), Zm = /* @__PURE__ */ P({
  __name: "DataTableViewOptions",
  props: {
    columns: {},
    visibleColumns: {}
  },
  emits: ["update:visibleColumns"],
  setup(e, { emit: t }) {
    const a = e, n = t, o = je(), s = V(() => a.columns.filter((c) => c.title && c.hideable !== !1)), r = V(() => !a.visibleColumns || a.visibleColumns.length === 0 ? a.columns.map((c) => c.id) : a.visibleColumns);
    function i(c) {
      return r.value.includes(c);
    }
    function u(c, p) {
      const g = r.value;
      (typeof p == "boolean" ? p : !1) ? g.includes(c) || n("update:visibleColumns", [...g, c]) : n(
        "update:visibleColumns",
        g.filter((S) => S !== c)
      );
    }
    return (c, p) => (f(), N(l(_l), null, {
      default: b(() => [
        w(l(xl), { "as-child": "" }, {
          default: b(() => [
            w(l(Fe), {
              variant: "outline",
              size: "sm",
              class: "ml-auto h-8"
            }, {
              default: b(() => [
                w(l(ii), { class: "mr-2 h-4 w-4" }),
                de(" " + X(l(o)("datatable.view", "View")), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        w(l(wl), {
          align: "end",
          class: "w-[150px]"
        }, {
          default: b(() => [
            w(l(Am), null, {
              default: b(() => [
                de(X(l(o)("datatable.toggleColumns", "Toggle columns")), 1)
              ]),
              _: 1
            }),
            w(l(qn)),
            (f(!0), M(me, null, ye(s.value, (g) => (f(), N(l(Nm), {
              key: g.id,
              "model-value": i(g.id),
              "onUpdate:modelValue": (m) => u(g.id, m)
            }, {
              default: b(() => [
                de(X(g.title), 1)
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
}), Qm = { class: "flex items-center justify-end py-2" }, eo = /* @__PURE__ */ P({
  __name: "DataTableToolbar",
  props: {
    visibleColumns: {}
  },
  emits: ["update:visibleColumns"],
  setup(e, { emit: t }) {
    const a = t, n = Kt();
    return (o, s) => (f(), M("div", Qm, [
      D(o.$slots, "default"),
      w(Zm, {
        columns: l(n).columns,
        "visible-columns": e.visibleColumns,
        "onUpdate:visibleColumns": s[0] || (s[0] = (r) => a("update:visibleColumns", r))
      }, null, 8, ["columns", "visible-columns"])
    ]));
  }
}), ep = { class: "flex flex-col flex-1 min-w-0 min-h-0 relative" }, tp = { class: "hover:!bg-transparent" }, ap = ["colspan"], Fg = /* @__PURE__ */ P({
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
    filterBy: {},
    filterByModifiers: {},
    selected: { default: () => [] },
    selectedModifiers: {}
  }),
  emits: /* @__PURE__ */ Se(["clickRow"], ["update:visibleColumns", "update:itemsPerPage", "update:page", "update:sortBy", "update:filterBy", "update:selected"]),
  setup(e, { expose: t, emit: a }) {
    const n = a, o = he(e, "visibleColumns"), s = he(e, "itemsPerPage"), r = he(e, "page"), i = he(e, "sortBy"), u = he(e, "filterBy"), c = he(e, "selected"), p = V(() => Ut(e.columns, (W) => W.id)), g = V(() => Ut(e.items, (W) => W[e.idcol])), m = V(() => e.items && e.items.length > 0), S = V(
      () => o.value ? e.columns.filter((W) => o.value?.includes(W.id)) : e.columns
    ), R = V(
      () => S.value.length + (e.selectMode === "multiselect" ? 1 : 0) + (e.hasActionsColumn ? 1 : 0) + (e.expandable ? 1 : 0)
    );
    Re(s, () => {
      r.value && r.value > 1 && (r.value = 1);
    });
    function E(W, le) {
      if (u.value || (u.value = {}), le === void 0 || Array.isArray(le) && le.length === 0) {
        const { [W]: z, ...ee } = u.value;
        u.value = ee;
      } else
        u.value = { ...u.value, [W]: le };
    }
    function A(W) {
      !i.value || i.value.key !== W ? i.value = { key: W, order: "asc" } : i.value.key === W && (i.value.order === "asc" ? i.value = { key: W, order: "desc" } : i.value = void 0);
    }
    const y = V(() => e.items), {
      stateMap: v,
      toggle: _,
      toggleAll: x,
      allToggledState: $,
      clear: I
    } = za(y, e.idcol, e.storagekey, c);
    Rn(
      c,
      V(() => e.items.map((W) => W[e.idcol]))
    ), Mn(
      () => (I(), !0),
      V(() => c.value.length > 0)
    );
    const {
      stateMap: O,
      toggle: B,
      allToggledState: j,
      toggleAll: ue
    } = za(y, e.idcol, e.storagekey), be = (W) => e.isRowExpandable ? e.isRowExpandable(W) : !0;
    return Vn({
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
      filteredColumns: S,
      columnsMap: p,
      itemsMap: g,
      colNum: R,
      hasItems: m,
      selected: c,
      selectedMap: v,
      expandedMap: O,
      sortBy: i,
      filterBy: u,
      toggleSelected: _,
      toggleAllSelected: x,
      allSelectedState: $,
      clearSelected: I,
      toggleExpand: B,
      toggleExpandAll: ue,
      allExpandedState: j,
      updateSort: A,
      updateFilter: E,
      isRowExpandableFn: be,
      onClickRow: (W) => n("clickRow", W),
      onClickColumn: (W, le) => {
        const z = p.value[W], ee = g.value[le];
        z && ee && z.onClick?.(ee);
      }
    }), t({ selected: c, clearSelected: I }), (W, le) => (f(), M("div", ep, [
      e.showOptions ? (f(), N(eo, {
        key: 0,
        "visible-columns": o.value,
        "onUpdate:visibleColumns": le[0] || (le[0] = (z) => o.value = z)
      }, {
        default: b(() => [
          D(W.$slots, "header")
        ]),
        _: 3
      }, 8, ["visible-columns"])) : Q("", !0),
      w(Fn, null, {
        default: b(() => [
          e.isPending ? (f(), N(Qn, { key: 0 })) : Q("", !0),
          q("div", {
            class: te(["flex-1 flex flex-col min-h-0", { "!rounded-md border": e.bordered }])
          }, [
            q("table", {
              class: te(["[&>tbody>tr:hover]:bg-zinc-100/50 dark:[&>tbody>tr:hover]:bg-zinc-900/50 h-1 [&_tr]:border-b [&_th,&_td]:px-2 [&_th,&_td]:py-1 min-h-0 w-full [&_th]:!text-sm [&_tr>*:first-child]:pl-6 [&_tr>*:last-child]:pr-6", { "[&_tbody_tr:last-child]:border-b-0": e.bordered }])
            }, [
              w(Zn, {
                "visible-columns": o.value,
                "onUpdate:visibleColumns": le[1] || (le[1] = (z) => o.value = z)
              }, Ct({ _: 2 }, [
                ye(e.columns, (z) => ({
                  name: `header:${String(z.id)}`,
                  fn: b((ee) => [
                    D(W.$slots, `header:${String(z.id)}`, mt(wt(ee)))
                  ])
                }))
              ]), 1032, ["visible-columns"]),
              w(Bn, null, {
                default: b(() => [
                  m.value ? (f(!0), M(me, { key: 0 }, ye(e.items, (z) => (f(), M(me, {
                    key: z[e.idcol]
                  }, [
                    w(Ol, { item: z }, Ct({ _: 2 }, [
                      ye(W.$slots, (ee, k) => ({
                        name: k,
                        fn: b((H) => [
                          D(W.$slots, k, Y({ ref_for: !0 }, H))
                        ])
                      }))
                    ]), 1032, ["item"]),
                    e.expandable && l(O)[z[e.idcol]] && be(z) ? D(W.$slots, "expanded-row-raw", {
                      key: 0,
                      item: z,
                      colNum: R.value
                    }, () => [
                      q("tr", tp, [
                        q("td", {
                          colspan: R.value,
                          class: "bg-muted/30 p-0 [&_thead>tr:hover]:bg-transparent [&_th]:h-7"
                        }, [
                          D(W.$slots, "expanded-row", { item: z })
                        ], 8, ap)
                      ])
                    ]) : Q("", !0)
                  ], 64))), 128)) : (f(), N(Xn, { key: 1 }))
                ]),
                _: 3
              })
            ], 2)
          ], 2)
        ]),
        _: 3
      }),
      w(yl, {
        page: r.value,
        "onUpdate:page": le[2] || (le[2] = (z) => r.value = z),
        "items-per-page": s.value,
        "onUpdate:itemsPerPage": le[3] || (le[3] = (z) => s.value = z),
        total: e.total,
        "page-size-options": e.pageSizeOptions,
        bordered: e.bordered
      }, {
        bulk: b((z) => [
          D(W.$slots, "bulk", mt(wt(z)))
        ]),
        _: 3
      }, 8, ["page", "items-per-page", "total", "page-size-options", "bordered"])
    ]));
  }
}), Tl = /* @__PURE__ */ P({
  __name: "Badge",
  props: {
    variant: {},
    class: {}
  },
  setup(e) {
    const t = Yt(
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
    return (n, o) => (f(), M("div", {
      class: te(l(G)(l(t)({ variant: a.variant }), a.class))
    }, [
      D(n.$slots, "default")
    ], 2));
  }
}), np = { class: "flex flex-col flex-1 min-w-0 min-h-0 relative" }, op = ["data-group-id"], sp = { class: "!w-6 !pr-0" }, lp = {
  key: 0,
  class: "!w-6"
}, rp = ["colspan"], ip = { class: "flex items-center gap-2" }, up = { class: "text-sm" }, Ug = /* @__PURE__ */ P({
  __name: "DataTableGrouped",
  props: /* @__PURE__ */ Se({
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
    filterBy: {},
    filterByModifiers: {},
    selected: { default: () => [] },
    selectedModifiers: {}
  }),
  emits: /* @__PURE__ */ Se(["clickRow"], ["update:visibleColumns", "update:itemsPerPage", "update:page", "update:sortBy", "update:filterBy", "update:selected"]),
  setup(e, { expose: t, emit: a }) {
    const n = a, o = V(() => e.groups.flatMap((k) => k.items)), s = he(e, "visibleColumns"), r = he(e, "itemsPerPage"), i = he(e, "page"), u = he(e, "sortBy"), c = he(e, "filterBy"), p = he(e, "selected"), g = V(() => Ut(e.columns, (k) => k.id)), m = V(() => Ut(o.value, (k) => k.id)), S = V(() => o.value && o.value.length > 0), R = V(() => e.groups.length > 0), E = V(
      () => s.value ? e.columns.filter((k) => s.value?.includes(k.id)) : e.columns
    ), A = V(
      () => E.value.length + (e.selectMode === "multiselect" ? 1 : 0) + (e.hasActionsColumn ? 1 : 0) + 1
    );
    Re(r, () => {
      i.value && i.value > 1 && (i.value = 1);
    });
    function y(k, H) {
      if (c.value || (c.value = {}), H === void 0 || Array.isArray(H) && H.length === 0) {
        const { [k]: C, ...pe } = c.value;
        c.value = pe;
      } else
        c.value = { ...c.value, [k]: H };
    }
    function v(k) {
      !u.value || u.value.key !== k ? u.value = { key: k, order: "asc" } : u.value.key === k && (u.value.order === "asc" ? u.value = { key: k, order: "desc" } : u.value = void 0);
    }
    const _ = V(() => o.value), {
      stateMap: x,
      toggle: $,
      toggleAll: I,
      allToggledState: O,
      clear: B
    } = za(_, "id", e.storagekey, p);
    Rn(
      p,
      V(() => o.value.map((k) => k.id))
    ), Mn(
      () => (B(), !0),
      V(() => p.value.length > 0)
    ), Re(i, () => B());
    const j = ne({});
    function ue(k) {
      j.value[k] = j.value[k] === void 0 ? !1 : !j.value[k];
    }
    function be() {
      const k = e.groups.map((C) => C.key);
      k.every((C) => j.value[C] !== !1) ? k.forEach((C) => {
        j.value[C] = !1;
      }) : k.forEach((C) => {
        j.value[C] = !0;
      });
    }
    const W = V(() => {
      const k = e.groups.map((C) => C.key), H = k.filter((C) => j.value[C] !== !1).length;
      return H === 0 ? !1 : H === k.length ? !0 : "indeterminate";
    });
    function le(k) {
      return k.every((H) => p.value.includes(H.id));
    }
    function z(k) {
      const H = k.filter((C) => p.value.includes(C.id));
      return H.length > 0 && H.length < k.length;
    }
    function ee(k) {
      if (le(k))
        p.value = p.value.filter((C) => !k.some((pe) => pe.id === C));
      else {
        const C = k.map((pe) => pe.id);
        p.value = [.../* @__PURE__ */ new Set([...p.value, ...C])];
      }
    }
    return Vn({
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
      filteredColumns: E,
      columnsMap: g,
      itemsMap: m,
      colNum: A,
      hasItems: S,
      selected: p,
      selectedMap: x,
      expandedMap: V(() => ({})),
      sortBy: u,
      filterBy: c,
      toggleSelected: $,
      toggleAllSelected: I,
      allSelectedState: O,
      clearSelected: B,
      toggleExpand: () => {
      },
      toggleExpandAll: be,
      allExpandedState: W,
      updateSort: v,
      updateFilter: y,
      isRowExpandableFn: () => !1,
      onClickRow: (k) => n("clickRow", k),
      onClickColumn: (k, H) => {
        const C = g.value[k], pe = m.value[H];
        C && pe && C.onClick?.(pe);
      }
    }), t({ selected: p, clearSelected: B }), (k, H) => (f(), M("div", np, [
      e.showOptions ? (f(), N(eo, {
        key: 0,
        "visible-columns": s.value,
        "onUpdate:visibleColumns": H[0] || (H[0] = (C) => s.value = C)
      }, {
        default: b(() => [
          D(k.$slots, "header")
        ]),
        _: 3
      }, 8, ["visible-columns"])) : Q("", !0),
      w(Fn, null, {
        default: b(() => [
          e.isPending ? (f(), N(Qn, { key: 0 })) : Q("", !0),
          q("div", {
            class: te(["flex-1 flex flex-col min-h-0", { "!rounded-md border": e.bordered }])
          }, [
            q("table", {
              class: te(["[&>tbody>tr:hover]:bg-zinc-100/50 dark:[&>tbody>tr:hover]:bg-zinc-900/50 h-1 [&_tr]:border-b [&_th,&_td]:px-2 [&_th,&_td]:py-1 min-h-0 w-full [&_th]:!text-sm [&_tr>*:first-child]:pl-6 [&_tr>*:last-child]:pr-6", { "[&_tbody_tr:last-child]:border-b-0": e.bordered }])
            }, [
              w(Zn, {
                "visible-columns": s.value,
                "onUpdate:visibleColumns": H[1] || (H[1] = (C) => s.value = C)
              }, Ct({ _: 2 }, [
                ye(e.columns, (C) => ({
                  name: `header:${String(C.id)}`,
                  fn: b((pe) => [
                    D(k.$slots, `header:${String(C.id)}`, mt(wt(pe)))
                  ])
                }))
              ]), 1032, ["visible-columns"]),
              w(Bn, null, {
                default: b(() => [
                  R.value ? (f(!0), M(me, { key: 0 }, ye(e.groups, (C) => (f(), M(me, {
                    key: C.key
                  }, [
                    q("tr", {
                      class: "",
                      "data-group-id": C.key
                    }, [
                      q("td", sp, [
                        w(Fe, {
                          size: "sm",
                          variant: "ghost",
                          class: "h-6 w-6 p-0",
                          disabled: C.items.length === 0,
                          onClick: (pe) => ue(C.key)
                        }, {
                          default: b(() => [
                            (f(), N(Ke(j.value[C.key] ? l(oa) : l(Ht)), { class: "h-4 w-4" }))
                          ]),
                          _: 2
                        }, 1032, ["disabled", "onClick"])
                      ]),
                      e.selectMode === "multiselect" ? (f(), M("td", lp, [
                        w(l(aa), {
                          "model-value": C.items.length === 0 ? !1 : le(C.items) ? !0 : z(C.items) ? "indeterminate" : !1,
                          disabled: C.items.length === 0,
                          "onUpdate:modelValue": (pe) => ee(C.items)
                        }, null, 8, ["model-value", "disabled", "onUpdate:modelValue"])
                      ])) : Q("", !0),
                      q("td", {
                        colspan: A.value - 1 - (e.selectMode === "multiselect" ? 1 : 0),
                        class: "font-medium"
                      }, [
                        D(k.$slots, "group-header", {
                          groupKey: C.key,
                          items: C.items,
                          count: C.items.length,
                          isExpanded: j.value[C.key],
                          isSelected: le(C.items)
                        }, () => [
                          q("div", ip, [
                            q("span", up, X(C.key || "(No value)"), 1),
                            w(l(Tl), {
                              variant: "secondary",
                              class: "ml-2"
                            }, {
                              default: b(() => [
                                de(X(C.items.length), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ])
                        ])
                      ], 8, rp)
                    ], 8, op),
                    j.value[C.key] !== !1 ? (f(!0), M(me, { key: 0 }, ye(C.items, (pe) => (f(), N(Ol, {
                      key: pe.id,
                      item: pe
                    }, Ct({ _: 2 }, [
                      ye(k.$slots, (Oe, Le) => ({
                        name: Le,
                        fn: b((Qe) => [
                          Le !== "group-header" ? D(k.$slots, Le, Y({
                            key: 0,
                            ref_for: !0
                          }, Qe)) : Q("", !0)
                        ])
                      }))
                    ]), 1032, ["item"]))), 128)) : Q("", !0)
                  ], 64))), 128)) : (f(), N(Xn, { key: 1 }))
                ]),
                _: 3
              })
            ], 2)
          ], 2)
        ]),
        _: 3
      }),
      w(yl, {
        page: i.value,
        "onUpdate:page": H[2] || (H[2] = (C) => i.value = C),
        "items-per-page": r.value,
        "onUpdate:itemsPerPage": H[3] || (H[3] = (C) => r.value = C),
        total: e.total,
        "page-size-options": e.pageSizeOptions,
        bordered: e.bordered
      }, {
        bulk: b((C) => [
          D(k.$slots, "bulk", mt(wt(C)))
        ]),
        _: 3
      }, 8, ["page", "items-per-page", "total", "page-size-options", "bordered"])
    ]));
  }
}), cp = ["data-group-id"], dp = { class: "text-sm font-medium" }, fp = { key: 0 }, mp = { class: "flex items-center gap-0.5" }, pp = ["data-row-id", "data-state"], gp = ["data-col-id", "tabindex"], vp = { key: 0 }, hp = { class: "flex items-center gap-0.5" }, rs = 20, is = /* @__PURE__ */ P({
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
    const t = e, a = Kt(), n = a.filteredColumns, o = a.selectedMap, s = a.selected, r = a.columnsMap, { hasActionsColumn: i, idcol: u, highlightedRow: c } = a, p = V(() => t.getAllGroupItems(t.group)), g = V(() => t.expandedMap[t.group.key] !== !1), m = V(() => (t.group.children?.length ?? 0) === 0), S = V(() => p.value.length === 0 ? !1 : t.isGroupSelected(p.value) ? !0 : t.isGroupPartiallySelected(p.value) ? "indeterminate" : !1);
    function R(E) {
      return o.value[E.id] || c === E[u];
    }
    return (E, A) => {
      const y = jl("DataTableGroupNode", !0);
      return f(), M(me, null, [
        e.hideHeader ? Q("", !0) : (f(), M("tr", {
          key: 0,
          "data-group-id": e.group.key
        }, [
          (f(!0), M(me, null, ye(l(n), (v) => (f(), M("td", {
            key: String(v.id),
            class: te(v.cssClass)
          }, [
            String(v.id) === e.treeColumn ? (f(), M("div", {
              key: 0,
              class: "flex items-center gap-2",
              style: Ia({ paddingLeft: `${e.depth * rs}px` })
            }, [
              w(Fe, {
                size: "sm",
                variant: "ghost",
                class: "h-6 w-6 p-0 shrink-0",
                disabled: m.value,
                onClick: A[0] || (A[0] = (_) => e.toggleExpand(e.group.key))
              }, {
                default: b(() => [
                  (f(), N(Ke(g.value ? l(oa) : l(Ht)), { class: "h-4 w-4 text-muted-foreground" }))
                ]),
                _: 1
              }, 8, ["disabled"]),
              e.selectMode === "multiselect" ? (f(), N(l(aa), {
                key: 0,
                class: "shrink-0",
                "model-value": S.value,
                disabled: p.value.length === 0,
                "onUpdate:modelValue": A[1] || (A[1] = (_) => e.toggleGroupSelection(p.value))
              }, null, 8, ["model-value", "disabled"])) : Q("", !0),
              D(E.$slots, `cell-group:${String(v.id)}`, {
                group: e.group,
                items: p.value
              }, () => [
                q("span", dp, X((e.group.label ?? e.group.key) || "(No value)"), 1),
                w(l(Tl), {
                  variant: "secondary",
                  class: "ml-1 shrink-0"
                }, {
                  default: b(() => [
                    de(X(p.value.length), 1)
                  ]),
                  _: 1
                })
              ])
            ], 4)) : D(E.$slots, `cell-group:${String(v.id)}`, {
              key: 1,
              group: e.group,
              items: p.value
            })
          ], 2))), 128)),
          l(i) ? (f(), M("td", fp, [
            q("div", mp, [
              D(E.$slots, "cell-group:actions", {
                group: e.group,
                items: p.value
              })
            ])
          ])) : Q("", !0)
        ], 8, cp)),
        e.hideHeader || g.value ? (f(!0), M(me, { key: 1 }, ye(e.group.children, (v) => (f(), M(me, {
          key: l(Zt)(v) ? v.key : v[l(u)]
        }, [
          l(Zt)(v) ? (f(), N(y, {
            key: 0,
            group: v,
            depth: e.depth + 1,
            "tree-column": e.treeColumn,
            "select-mode": e.selectMode,
            "expanded-map": e.expandedMap,
            "toggle-expand": e.toggleExpand,
            "get-all-group-items": e.getAllGroupItems,
            "is-group-selected": e.isGroupSelected,
            "is-group-partially-selected": e.isGroupPartiallySelected,
            "toggle-group-selection": e.toggleGroupSelection
          }, Ct({ _: 2 }, [
            ye(E.$slots, (_, x) => ({
              name: x,
              fn: b(($) => [
                D(E.$slots, x, Y({ ref_for: !0 }, $))
              ])
            }))
          ]), 1032, ["group", "depth", "tree-column", "select-mode", "expanded-map", "toggle-expand", "get-all-group-items", "is-group-selected", "is-group-partially-selected", "toggle-group-selection"])) : (f(), M("tr", {
            key: 1,
            "data-row-id": v[l(u)],
            "data-state": R(v) && "selected"
          }, [
            (f(!0), M(me, null, ye(l(n), (_) => (f(), M("td", {
              key: String(_.id),
              "data-col-id": String(_.id),
              tabindex: l(r)[String(_.id)]?.onClick ? 0 : -1,
              class: te(_.cssClass)
            }, [
              String(_.id) === e.treeColumn ? (f(), M("div", {
                key: 0,
                class: "flex items-center gap-2",
                style: Ia({ paddingLeft: `${(e.depth + 1) * rs}px` })
              }, [
                A[2] || (A[2] = q("span", { class: "w-6 h-6 shrink-0" }, null, -1)),
                e.selectMode === "multiselect" ? (f(), N(l(aa), {
                  key: 0,
                  class: "shrink-0",
                  "model-value": l(s).includes(v[l(u)]),
                  "onUpdate:modelValue": (x) => l(a).toggleSelected(v[l(u)])
                }, null, 8, ["model-value", "onUpdate:modelValue"])) : Q("", !0),
                D(E.$slots, `cell:${String(_.id)}`, {
                  item: v,
                  value: v[_.id]
                }, () => [
                  de(X(v[_.id]), 1)
                ])
              ], 4)) : D(E.$slots, `cell:${String(_.id)}`, {
                key: 1,
                item: v,
                value: v[_.id]
              }, () => [
                de(X(v[_.id]), 1)
              ])
            ], 10, gp))), 128)),
            l(i) ? (f(), M("td", vp, [
              q("div", hp, [
                D(E.$slots, "cell:actions", {
                  item: v
                })
              ])
            ])) : Q("", !0)
          ], 8, pp))
        ], 64))), 128)) : Q("", !0)
      ], 64);
    };
  }
}), bp = { class: "flex flex-col flex-1 min-w-0 min-h-0 relative" }, zg = /* @__PURE__ */ P({
  __name: "DataTableTree",
  props: /* @__PURE__ */ Se({
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
    filterBy: {},
    filterByModifiers: {},
    selected: { default: () => [] },
    selectedModifiers: {}
  }),
  emits: /* @__PURE__ */ Se(["clickRow"], ["update:visibleColumns", "update:sortBy", "update:filterBy", "update:selected"]),
  setup(e, { expose: t, emit: a }) {
    const n = a;
    function o(k) {
      return Zt(k) ? (k.children ?? []).flatMap(o) : [k];
    }
    function s(k) {
      return k.flatMap((H) => Zt(H) ? [H.key, ...s(H.children ?? [])] : []);
    }
    const r = V(() => e.items.flatMap(o)), i = he(e, "visibleColumns"), u = he(e, "sortBy"), c = he(e, "filterBy"), p = he(e, "selected"), g = V(() => Ut(e.columns, (k) => k.id)), m = V(() => Ut(r.value, (k) => k.id)), S = V(() => r.value.length > 0), R = V(() => e.items.length > 0), E = V(
      () => i.value ? e.columns.filter((k) => i.value?.includes(k.id)) : e.columns
    ), A = V(() => E.value.length + (e.hasActionsColumn ? 1 : 0));
    function y(k, H) {
      if (c.value || (c.value = {}), H === void 0 || Array.isArray(H) && H.length === 0) {
        const { [k]: C, ...pe } = c.value;
        c.value = pe;
      } else
        c.value = { ...c.value, [k]: H };
    }
    function v(k) {
      !u.value || u.value.key !== k ? u.value = { key: k, order: "asc" } : u.value.key === k && (u.value.order === "asc" ? u.value = { key: k, order: "desc" } : u.value = void 0);
    }
    const _ = V(() => r.value), {
      stateMap: x,
      toggle: $,
      toggleAll: I,
      allToggledState: O,
      clear: B
    } = za(_, "id", e.storagekey, p);
    Rn(
      p,
      V(() => r.value.map((k) => k.id))
    ), Mn(
      () => (B(), !0),
      V(() => p.value.length > 0)
    );
    const j = e.storagekey ? Fs(`${e.storagekey}-expanded`, {}) : ne({});
    function ue(k) {
      j.value[k] = j.value[k] === void 0 ? !1 : !j.value[k];
    }
    function be() {
      const k = s(e.items), H = k.every((C) => j.value[C] !== !1);
      k.forEach((C) => {
        j.value[C] = !H;
      });
    }
    const W = V(() => {
      const k = s(e.items), H = k.filter((C) => j.value[C] !== !1).length;
      return H === 0 ? !1 : H === k.length ? !0 : "indeterminate";
    });
    function le(k) {
      return k.length > 0 && k.every((H) => p.value.includes(H.id));
    }
    function z(k) {
      const H = k.filter((C) => p.value.includes(C.id)).length;
      return H > 0 && H < k.length;
    }
    function ee(k) {
      le(k) ? p.value = p.value.filter((H) => !k.some((C) => C.id === H)) : p.value = [.../* @__PURE__ */ new Set([...p.value, ...k.map((H) => H.id)])];
    }
    return Vn({
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
      filteredColumns: E,
      columnsMap: g,
      itemsMap: m,
      colNum: A,
      hasItems: S,
      selected: p,
      selectedMap: x,
      expandedMap: V(() => ({})),
      sortBy: u,
      filterBy: c,
      toggleSelected: $,
      toggleAllSelected: I,
      allSelectedState: O,
      clearSelected: B,
      toggleExpand: () => {
      },
      toggleExpandAll: be,
      allExpandedState: W,
      updateSort: v,
      updateFilter: y,
      isRowExpandableFn: () => !1,
      onClickRow: (k) => n("clickRow", k),
      onClickColumn: (k, H) => {
        const C = g.value[k], pe = m.value[H];
        C && pe && C.onClick?.(pe);
      }
    }), t({ selected: p, clearSelected: B }), (k, H) => (f(), M("div", bp, [
      e.showOptions ? (f(), N(eo, {
        key: 0,
        "visible-columns": i.value,
        "onUpdate:visibleColumns": H[0] || (H[0] = (C) => i.value = C)
      }, {
        default: b(() => [
          D(k.$slots, "header")
        ]),
        _: 3
      }, 8, ["visible-columns"])) : Q("", !0),
      w(Fn, null, {
        default: b(() => [
          e.isPending ? (f(), N(Qn, { key: 0 })) : Q("", !0),
          q("div", {
            class: te(["flex-1 flex flex-col min-h-0", { "!rounded-md border": e.bordered }])
          }, [
            q("table", {
              class: te(["[&>tbody>tr:hover]:bg-zinc-100/50 dark:[&>tbody>tr:hover]:bg-zinc-900/50 h-1 [&_tr]:border-b [&_th,&_td]:px-2 [&_th,&_td]:py-1 min-h-0 w-full [&_th]:!text-sm [&_tr>*:first-child]:pl-6 [&_tr>*:last-child]:pr-6", { "[&_tbody_tr:last-child]:border-b-0": e.bordered }])
            }, [
              w(Zn, {
                "visible-columns": i.value,
                "onUpdate:visibleColumns": H[1] || (H[1] = (C) => i.value = C)
              }, Ct({ _: 2 }, [
                ye(e.columns, (C) => ({
                  name: `header:${String(C.id)}`,
                  fn: b((pe) => [
                    D(k.$slots, `header:${String(C.id)}`, mt(wt(pe)))
                  ])
                }))
              ]), 1032, ["visible-columns"]),
              w(Bn, null, {
                default: b(() => [
                  R.value ? (f(!0), M(me, { key: 0 }, ye(e.items, (C) => (f(), M(me, {
                    key: l(Zt)(C) ? C.key : C[e.idcol]
                  }, [
                    l(Zt)(C) ? (f(), N(is, {
                      key: 0,
                      group: C,
                      depth: 0,
                      "tree-column": e.treeColumn,
                      "select-mode": e.selectMode,
                      "expanded-map": l(j),
                      "toggle-expand": ue,
                      "get-all-group-items": o,
                      "is-group-selected": le,
                      "is-group-partially-selected": z,
                      "toggle-group-selection": ee
                    }, Ct({ _: 2 }, [
                      ye(k.$slots, (pe, Oe) => ({
                        name: Oe,
                        fn: b((Le) => [
                          D(k.$slots, Oe, Y({ ref_for: !0 }, Le))
                        ])
                      }))
                    ]), 1032, ["group", "tree-column", "select-mode", "expanded-map"])) : (f(), N(is, {
                      key: 1,
                      group: { key: `__item__${C[e.idcol]}`, children: [C] },
                      depth: -1,
                      "hide-header": !0,
                      "tree-column": e.treeColumn,
                      "select-mode": e.selectMode,
                      "expanded-map": l(j),
                      "toggle-expand": ue,
                      "get-all-group-items": o,
                      "is-group-selected": le,
                      "is-group-partially-selected": z,
                      "toggle-group-selection": ee
                    }, Ct({ _: 2 }, [
                      ye(k.$slots, (pe, Oe) => ({
                        name: Oe,
                        fn: b((Le) => [
                          D(k.$slots, Oe, Y({ ref_for: !0 }, Le))
                        ])
                      }))
                    ]), 1032, ["group", "tree-column", "select-mode", "expanded-map"]))
                  ], 64))), 128)) : (f(), N(Xn, { key: 1 }))
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
function Zt(e) {
  return typeof e == "object" && e !== null && "key" in e;
}
function za(e, t, a, n) {
  const o = n || (a ? Fs(a, []) : ne([])), s = V(() => Object.fromEntries(o.value.map((g) => [g, !0]))), r = (g) => {
    o.value = Oc(o.value, g);
  }, i = V(
    () => o.value.length > 0 ? o.value?.length === e.value.length ? !0 : "indeterminate" : !1
  );
  function u() {
    o.value = [];
  }
  function c() {
    o.value = e.value.map((g) => g[t]);
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
const yp = ["datetime", "title"], Gg = /* @__PURE__ */ P({
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
      let p = a[u] || u;
      return c && Object.entries(c).forEach(([g, m]) => {
        p = p.replace(`{${g}}`, String(m));
      }), p;
    }
    const o = V(() => t.date instanceof Date ? t.date : typeof t.date == "string" || typeof t.date == "number" ? new Date(t.date) : /* @__PURE__ */ new Date()), s = /* @__PURE__ */ $u(o, t.format, {
      locales: t.locale
    }), r = V(() => {
      if (!t.relative) return null;
      const c = (/* @__PURE__ */ new Date()).getTime() - o.value.getTime(), p = Math.floor(c / 1e3), g = Math.floor(p / 60), m = Math.floor(g / 60), S = Math.floor(m / 24);
      return S > 0 ? n("date.daysAgo", { count: S }) : m > 0 ? n("date.hoursAgo", { count: m }) : g > 0 ? n("date.minutesAgo", { count: g }) : n("date.justNow");
    }), i = V(() => t.relative ? r.value : s.value);
    return (u, c) => (f(), M("time", {
      datetime: o.value.toISOString(),
      title: t.relative ? l(s) : void 0,
      class: "whitespace-nowrap"
    }, X(i.value), 9, yp));
  }
}), _p = { class: "min-w-0 line-clamp-1 break-spaces text-left whitespace-normal space-x-1" }, wp = { class: "text-muted-foreground" }, xp = { class: "font-semibold" }, kp = {
  key: 1,
  class: "text-muted-foreground"
}, us = /* @__PURE__ */ P({
  __name: "DisplayGraduated",
  props: {
    value: {}
  },
  setup(e) {
    const t = je();
    return (a, n) => (f(), M("div", _p, [
      e.value?.length ? (f(!0), M(me, { key: 0 }, ye(e.value, (o, s) => (f(), M("span", {
        key: s,
        class: "bg-muted text-xs px-1 py-0.5 rounded"
      }, [
        q("span", wp, " ≥" + X(`${o.from}:`), 1),
        n[0] || (n[0] = de()),
        q("span", xp, X(o.value), 1)
      ]))), 128)) : (f(), M("span", kp, X(l(t)("common.novalue", "No value")), 1))
    ]));
  }
}), Wt = _t([]), Nl = V(() => Ut(Wt.value, (e) => e.key)), to = ne({});
function Al(e) {
  const t = Wt.value.findIndex((a) => a.key === e);
  t !== -1 && Wt.value.splice(t, 1), Gs.remove(e);
}
const $l = (e) => {
  to.value[e] = !1, Nl.value[e]?.onClose?.(), setTimeout(() => Al(e), 600);
}, Ep = (e) => {
  const t = e.key ?? `${Math.random()}`;
  return e.key = t, Wt.value.push(e), xn(Wt), to.value[t] = !0, Gs.add(() => ($l(t), !0), t), t;
}, Cp = (e, t) => {
  const a = Nl.value[e];
  a && (Object.assign(a, t), xn(Wt));
}, Sp = { close: $l, visible: to, open: Ep, update: Cp, instances: Wt, removeInstance: Al }, Pl = () => Sp, Wg = /* @__PURE__ */ P({
  __name: "DynamicComponentProvider",
  setup(e) {
    const { close: t, visible: a, instances: n } = Pl();
    return (o, s) => (f(!0), M(me, null, ye(l(n), (r) => (f(), N(Ke(r.component), Y({
      key: r.key,
      open: l(a)[r.key]
    }, { ref_for: !0 }, r.componentProps || {}, {
      "onUpdate:open": (i) => !i && l(t)(r.key)
    }), null, 16, ["open", "onUpdate:open"]))), 128));
  }
}), Op = { class: "text-muted-foreground py-4 flex gap-2 items-center text-sm" }, Tp = /* @__PURE__ */ P({
  __name: "EmptyMini",
  setup(e) {
    const t = je();
    return (a, n) => (f(), M("div", Op, [
      w(l(ws), { size: 16 }),
      q("span", null, [
        D(a.$slots, "default", {}, () => [
          de(X(l(t)("common.noValues", "No values")), 1)
        ])
      ])
    ]));
  }
}), Np = { class: "flex-1" }, Ap = { class: "flex gap-1 items-center" }, $p = {
  key: 0,
  class: "flex-1"
}, Pp = {
  key: 1,
  class: "text-muted-foreground text-sm px-2"
}, Dp = /* @__PURE__ */ P({
  inheritAttrs: !1,
  __name: "SelectListOptions",
  props: /* @__PURE__ */ Se({
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
  emits: /* @__PURE__ */ Se(["onAddItem"], ["update:modelValue"]),
  setup(e) {
    const t = e, a = he(e, "modelValue"), n = je(), o = ne(""), { startsWith: s } = Mr({ sensitivity: "base" }), r = V(
      () => ke(t.options).filter((p) => s(p.label, o.value))
    ), i = V(() => !!ke(t.options).length), u = V(() => t.placeholder ?? n("input.filter.placeholder", "Filter..")), c = V(() => t.addItemButtonLabel ?? n("common.addItem", "Add Item"));
    return (p, g) => (f(), M(me, null, [
      w(l(Rr), {
        modelValue: a.value,
        "onUpdate:modelValue": g[1] || (g[1] = (m) => a.value = m),
        multiple: e.multiple,
        disabled: t.disabled
      }, {
        default: b(() => [
          w(l(Br), {
            modelValue: o.value,
            "onUpdate:modelValue": g[0] || (g[0] = (m) => o.value = m),
            autofocus: "",
            disabled: !i.value || t.disabled,
            placeholder: u.value,
            class: te(l(G)(
              "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
              "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
            ))
          }, null, 8, ["modelValue", "disabled", "placeholder", "class"]),
          r.value.length ? Q("", !0) : (f(), N(Tp, { key: 0 })),
          w(l(Vr), { class: "max-h-[400px] overflow-auto py-1" }, {
            default: b(() => [
              (f(!0), M(me, null, ye(r.value, (m) => (f(), N(l(Fr), {
                key: String(m.value),
                value: m.value,
                disabled: t.disabled,
                class: "focus:bg-accent focus:text-accent-foreground data-[highlighted]:bg-accent [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2"
              }, {
                default: b(() => [
                  q("div", Np, [
                    D(p.$slots, "option", { option: m }, () => [
                      de(X(m.label), 1)
                    ])
                  ]),
                  w(l(Ur), null, {
                    default: b(() => [
                      w(l(Ga), { size: 12 })
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
      q("div", Ap, [
        t.showAddItemButton ? (f(), M("div", $p, [
          w(Fe, {
            size: "sm",
            class: "sticky bottom-0",
            variant: "ghost",
            type: "button",
            disabled: t.disabled,
            onClick: g[2] || (g[2] = (m) => p.$emit("onAddItem"))
          }, {
            default: b(() => [
              w(l(An)),
              de(" " + X(c.value), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ])) : Q("", !0),
        i.value && t.multiple ? (f(), M("div", Pp, X(l(n)("common.elementCountSelected", "{count} selected").replace("{count}", String(a.value.length))), 1)) : Q("", !0)
      ])
    ], 64));
  }
}), Lp = /* @__PURE__ */ P({
  __name: "AlertDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = $e(e, t);
    return (s, r) => (f(), N(l(zr), Y({ "data-slot": "alert-dialog" }, l(o)), {
      default: b(() => [
        D(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ip = /* @__PURE__ */ P({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = fe(t, "class");
    return (n, o) => (f(), N(l(Gr), Y(l(a), {
      class: l(G)(l(Ot)(), t.class)
    }), {
      default: b(() => [
        D(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Mp = /* @__PURE__ */ P({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = fe(t, "class");
    return (n, o) => (f(), N(l(Wr), Y(l(a), {
      class: l(G)(
        l(Ot)({ variant: "outline" }),
        "sm:mt-0",
        t.class
      )
    }), {
      default: b(() => [
        D(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Rp = /* @__PURE__ */ P({
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
    const a = e, n = t, o = fe(a, "class"), s = $e(o, n);
    return (r, i) => (f(), N(l(jr), null, {
      default: b(() => [
        w(l(Hr), {
          "data-slot": "alert-dialog-overlay",
          class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80"
        }),
        w(l(Yr), Y({ "data-slot": "alert-dialog-content" }, l(s), {
          class: l(G)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
            a.class
          )
        }), {
          default: b(() => [
            D(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Bp = /* @__PURE__ */ P({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = fe(t, "class");
    return (n, o) => (f(), N(l(Kr), Y({ "data-slot": "alert-dialog-description" }, l(a), {
      class: l(G)("text-muted-foreground text-sm", t.class)
    }), {
      default: b(() => [
        D(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Vp = /* @__PURE__ */ P({
  __name: "AlertDialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), M("div", {
      "data-slot": "alert-dialog-footer",
      class: te(
        l(G)(
          "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
          t.class
        )
      )
    }, [
      D(a.$slots, "default")
    ], 2));
  }
}), Fp = /* @__PURE__ */ P({
  __name: "AlertDialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), M("div", {
      "data-slot": "alert-dialog-header",
      class: te(l(G)("flex flex-col gap-2 text-center sm:text-left", t.class))
    }, [
      D(a.$slots, "default")
    ], 2));
  }
}), Up = /* @__PURE__ */ P({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = fe(t, "class");
    return (n, o) => (f(), N(l(Xr), Y({ "data-slot": "alert-dialog-title" }, l(a), {
      class: l(G)("text-lg font-semibold", t.class)
    }), {
      default: b(() => [
        D(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), zp = /* @__PURE__ */ P({
  __name: "DynamicAlertDialog",
  props: /* @__PURE__ */ Se({
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
    const t = e, a = he(e, "open"), n = ne(!1), o = ne();
    async function s() {
      n.value = !0;
      const u = t.onOk ? await t.onOk().catch((c) => c) : void 0;
      u === !0 || u === void 0 ? close() : no(u) && (o.value = u), n.value = !1;
    }
    function r() {
      a.value = !1;
    }
    const { t: i } = At();
    return (u, c) => (f(), N(l(Lp), {
      open: a.value,
      "onUpdate:open": c[2] || (c[2] = (p) => a.value = p)
    }, {
      default: b(() => [
        w(l(Rp), null, {
          default: b(() => [
            w(l(Fp), null, {
              default: b(() => [
                w(l(Up), null, {
                  default: b(() => [
                    de(X(e.title || l(i)("dialog.alert.defaultTitle")), 1)
                  ]),
                  _: 1
                }),
                w(l(Bp), null, {
                  default: b(() => [
                    de(X(e.description || l(i)("dialog.alert.defaultDescription")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            w(l(Vp), null, {
              default: b(() => [
                w(l(Mp), {
                  disabled: n.value,
                  onClick: c[0] || (c[0] = (p) => r())
                }, {
                  default: b(() => [
                    de(X(l(i)("common.cancel")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                w(l(Ip), {
                  loading: n.value,
                  onClick: c[1] || (c[1] = (p) => s())
                }, {
                  default: b(() => [
                    de(X(l(i)("common.continue")), 1)
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
}), Gp = /* @__PURE__ */ P({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = $e(e, t);
    return (s, r) => (f(), N(l(kn), Y({ "data-slot": "dialog" }, l(o)), {
      default: b((i) => [
        D(s.$slots, "default", mt(wt(i)))
      ]),
      _: 3
    }, 16));
  }
}), Wp = /* @__PURE__ */ P({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = fe(t, "class"), n = Ze(a);
    return (o, s) => (f(), N(l(On), Y({ "data-slot": "dialog-description" }, l(n), {
      class: l(G)("text-muted-foreground text-sm", t.class)
    }), {
      default: b(() => [
        D(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), jp = /* @__PURE__ */ P({
  __name: "DialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), M("div", {
      "data-slot": "dialog-header",
      class: te(l(G)("flex flex-col gap-2 text-center sm:text-left", t.class))
    }, [
      D(a.$slots, "default")
    ], 2));
  }
}), Hp = /* @__PURE__ */ P({
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
    const a = e, n = t, o = fe(a, "class"), s = $e(o, n);
    return (r, i) => (f(), N(l(Cn), null, {
      default: b(() => [
        w(l(En), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: b(() => [
            w(l(Sn), Y({
              class: l(G)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                a.class
              )
            }, { ...r.$attrs, ...l(s) }, {
              onPointerDownOutside: i[0] || (i[0] = (u) => u.preventDefault()),
              onInteractOutside: i[1] || (i[1] = (u) => u.preventDefault())
            }), {
              default: b(() => [
                D(r.$slots, "default"),
                w(l(hs), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                  default: b(() => [
                    w(l(_a), { class: "w-4 h-4" }),
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
}), Yp = /* @__PURE__ */ P({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = fe(t, "class"), n = Ze(a);
    return (o, s) => (f(), N(l(Tn), Y({ "data-slot": "dialog-title" }, l(n), {
      class: l(G)("text-lg leading-none font-semibold", t.class)
    }), {
      default: b(() => [
        D(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Kp = ["innerHTML"], Dl = /* @__PURE__ */ P({
  __name: "DynamicDialog",
  props: /* @__PURE__ */ Se({
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
    const t = he(e, "open");
    return (a, n) => (f(), N(l(Gp), {
      open: t.value,
      "onUpdate:open": n[0] || (n[0] = (o) => t.value = o)
    }, {
      default: b(() => [
        w(l(Hp), { class: "!max-w-max min-w-[435px]" }, {
          default: b(() => [
            w(l(jp), null, {
              default: b(() => [
                w(l(Yp), null, {
                  default: b(() => [
                    q("div", {
                      class: "[&>em]:font-normal [&>em]:!not-italic line-clamp-1",
                      innerHTML: e.title
                    }, null, 8, Kp)
                  ]),
                  _: 1
                }),
                e.description ? (f(), N(l(Wp), { key: 0 }, {
                  default: b(() => [
                    de(X(e.description), 1)
                  ]),
                  _: 1
                })) : Q("", !0)
              ]),
              _: 1
            }),
            D(a.$slots, "default")
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
const Xp = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const qp = (e) => typeof e < "u";
function Jp(e) {
  return JSON.parse(JSON.stringify(e));
}
function cs(e, t, a, n = {}) {
  var o, s, r;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: c,
    deep: p = !1,
    defaultValue: g,
    shouldEmit: m
  } = n, S = na(), R = a || S?.emit || ((o = S?.$emit) == null ? void 0 : o.bind(S)) || ((r = (s = S?.proxy) == null ? void 0 : s.$emit) == null ? void 0 : r.bind(S?.proxy));
  let E = c;
  t || (t = "modelValue"), E = E || `update:${t.toString()}`;
  const A = (_) => i ? typeof i == "function" ? i(_) : Jp(_) : _, y = () => qp(e[t]) ? A(e[t]) : g, v = (_) => {
    m ? m(_) && R(E, _) : R(E, _);
  };
  if (u) {
    const _ = y(), x = ne(_);
    let $ = !1;
    return Re(
      () => e[t],
      (I) => {
        $ || ($ = !0, x.value = A(I), ba(() => $ = !1));
      }
    ), Re(
      x,
      (I) => {
        !$ && (I !== e[t] || p) && v(I);
      },
      { deep: p }
    ), x;
  } else
    return V({
      get() {
        return y();
      },
      set(_) {
        v(_);
      }
    });
}
const [ao, Zp] = Nn("DrawerRoot"), Ll = /* @__PURE__ */ new WeakMap();
function Be(e, t, a = !1) {
  if (!e || !(e instanceof HTMLElement) || !t)
    return;
  const n = {};
  Object.entries(t).forEach(([o, s]) => {
    if (o.startsWith("--")) {
      e.style.setProperty(o, s);
      return;
    }
    n[o] = e.style[o], e.style[o] = s;
  }), !a && Ll.set(e, n);
}
function Qp(e, t) {
  if (!e || !(e instanceof HTMLElement))
    return;
  const a = Ll.get(e);
  a && Object.entries(a).forEach(([n, o]) => {
    e.style[n] = o;
  });
}
function $a(e, t) {
  const a = window.getComputedStyle(e), n = a.transform || a.webkitTransform || a.mozTransform;
  let o = n.match(/^matrix3d\((.+)\)$/);
  return o ? Number.parseFloat(o[1].split(", ")[De(t) ? 13 : 12]) : (o = n.match(/^matrix\((.+)\)$/), o ? Number.parseFloat(o[1].split(", ")[De(t) ? 5 : 4]) : null);
}
function eg(e) {
  return 8 * (Math.log(e + 1) - 2);
}
function De(e) {
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
function tg(...e) {
  return (...t) => {
    for (const a of e)
      typeof a == "function" && a(...t);
  };
}
const Ce = {
  DURATION: 0.5,
  EASE: [0.32, 0.72, 0, 1]
}, Il = 0.4, ag = 0.25, ng = 100, Ml = 8, Pa = 16, Rl = 26, ds = "vaul-dragging";
function og({
  activeSnapPoint: e,
  snapPoints: t,
  drawerRef: a,
  overlayRef: n,
  fadeFromIndex: o,
  onSnapPointChange: s,
  direction: r
}) {
  const i = ne(typeof window < "u" ? {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  } : void 0);
  function u() {
    i.value = {
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight
    };
  }
  jt(() => {
    typeof window < "u" && window.addEventListener("resize", u);
  }), Yl(() => {
    typeof window < "u" && window.removeEventListener("resize", u);
  });
  const c = V(
    () => (t.value && e.value === t.value[t.value.length - 1]) ?? null
  ), p = V(
    () => t.value && t.value.length > 0 && (o?.value || o?.value === 0) && !Number.isNaN(o?.value) && t.value[o?.value ?? -1] === e.value || !t.value
  ), g = V(
    () => {
      var v;
      return ((v = t.value) == null ? void 0 : v.findIndex((_) => _ === e.value)) ?? null;
    }
  ), m = V(
    () => {
      var v;
      return ((v = t.value) == null ? void 0 : v.map((_) => {
        const x = typeof _ == "string";
        let $ = 0;
        if (x && ($ = Number.parseInt(_, 10)), De(r.value)) {
          const O = x ? $ : i.value ? _ * i.value.innerHeight : 0;
          return i.value ? r.value === "bottom" ? i.value.innerHeight - O : -i.value.innerHeight + O : O;
        }
        const I = x ? $ : i.value ? _ * i.value.innerWidth : 0;
        return i.value ? r.value === "right" ? i.value.innerWidth - I : -i.value.innerWidth + I : I;
      })) ?? [];
    }
  ), S = V(
    () => {
      var v;
      return g.value !== null ? (v = m.value) == null ? void 0 : v[g.value] : null;
    }
  ), R = (v) => {
    var _, x, $, I;
    const O = ((_ = m.value) == null ? void 0 : _.findIndex((B) => B === v)) ?? null;
    ba(() => {
      var B;
      s(O, m.value), Be((B = a.value) == null ? void 0 : B.$el, {
        transition: `transform ${Ce.DURATION}s cubic-bezier(${Ce.EASE.join(",")})`,
        transform: De(r.value) ? `translate3d(0, ${v}px, 0)` : `translate3d(${v}px, 0, 0)`
      });
    }), m.value && O !== m.value.length - 1 && O !== o?.value ? Be((x = n.value) == null ? void 0 : x.$el, {
      transition: `opacity ${Ce.DURATION}s cubic-bezier(${Ce.EASE.join(",")})`,
      opacity: "0"
    }) : Be(($ = n.value) == null ? void 0 : $.$el, {
      transition: `opacity ${Ce.DURATION}s cubic-bezier(${Ce.EASE.join(",")})`,
      opacity: "1"
    }), e.value = O !== null ? ((I = t.value) == null ? void 0 : I[O]) ?? null : null;
  };
  Re(
    [e, m, t],
    () => {
      var v;
      if (e.value) {
        const _ = ((v = t.value) == null ? void 0 : v.findIndex((x) => x === e.value)) ?? -1;
        m.value && _ !== -1 && typeof m.value[_] == "number" && R(m.value[_]);
      }
    },
    {
      immediate: !0
      // if you want to run the effect immediately as well
    }
  );
  function E({
    draggedDistance: v,
    closeDrawer: _,
    velocity: x,
    dismissible: $
  }) {
    var I, O, B;
    if (o.value === void 0)
      return;
    const j = r.value === "bottom" || r.value === "right" ? (S.value ?? 0) - v : (S.value ?? 0) + v, ue = g.value === o.value - 1, be = g.value === 0, W = v > 0;
    if (ue && Be((I = n.value) == null ? void 0 : I.$el, {
      transition: `opacity ${Ce.DURATION}s cubic-bezier(${Ce.EASE.join(",")})`
    }), x > 2 && !W) {
      $ ? _() : R(m.value[0]);
      return;
    }
    if (x > 2 && W && m && t.value) {
      R(m.value[t.value.length - 1]);
      return;
    }
    const le = (O = m.value) == null ? void 0 : O.reduce((ee, k) => typeof ee != "number" || typeof k != "number" ? ee : Math.abs(k - j) < Math.abs(ee - j) ? k : ee), z = De(r.value) ? window.innerHeight : window.innerWidth;
    if (x > Il && Math.abs(v) < z * 0.4) {
      const ee = W ? 1 : -1;
      if (ee > 0 && c) {
        R(m.value[(((B = t.value) == null ? void 0 : B.length) ?? 0) - 1]);
        return;
      }
      if (be && ee < 0 && $ && _(), g.value === null)
        return;
      R(m.value[g.value + ee]);
      return;
    }
    R(le);
  }
  function A({ draggedDistance: v }) {
    var _;
    if (S.value === null)
      return;
    const x = r.value === "bottom" || r.value === "right" ? S.value - v : S.value + v;
    (r.value === "bottom" || r.value === "right") && x < m.value[m.value.length - 1] || (r.value === "top" || r.value === "left") && x > m.value[m.value.length - 1] || Be((_ = a.value) == null ? void 0 : _.$el, {
      transform: De(r.value) ? `translate3d(0, ${x}px, 0)` : `translate3d(${x}px, 0, 0)`
    });
  }
  function y(v, _) {
    if (!t.value || typeof g.value != "number" || !m.value || o.value === void 0)
      return null;
    const x = g.value === o.value - 1;
    if (g.value >= o.value && _)
      return 0;
    if (x && !_)
      return 1;
    if (!p.value && !x)
      return null;
    const $ = x ? g.value + 1 : g.value - 1, I = x ? m.value[$] - m.value[$ - 1] : m.value[$ + 1] - m.value[$], O = v / Math.abs(I);
    return x ? 1 - O : O;
  }
  return {
    isLastSnapPoint: c,
    shouldFade: p,
    getPercentageDragged: y,
    activeSnapPointIndex: g,
    onRelease: E,
    onDrag: A,
    snapPointsOffset: m
  };
}
function fs() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
let fa = null;
function sg(e) {
  const { isOpen: t, modal: a, nested: n, hasBeenOpened: o, preventScrollRestoration: s, noBodyStyles: r } = e, i = ne(typeof window < "u" ? window.location.href : ""), u = ne(0);
  function c() {
    if (fs() && fa === null && t.value && !r.value) {
      fa = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left,
        height: document.body.style.height
      };
      const { scrollX: g, innerHeight: m } = window;
      document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, {
        top: `${-u.value}px`,
        left: `${-g}px`,
        right: "0px",
        height: "auto"
      }), setTimeout(() => {
        requestAnimationFrame(() => {
          const S = m - window.innerHeight;
          S && u.value >= m && (document.body.style.top = `-${u.value + S}px`);
        });
      }, 300);
    }
  }
  function p() {
    if (fs() && fa !== null && !r.value) {
      const g = -Number.parseInt(document.body.style.top, 10), m = -Number.parseInt(document.body.style.left, 10);
      Object.assign(document.body.style, fa), window.requestAnimationFrame(() => {
        if (s.value && i.value !== window.location.href) {
          i.value = window.location.href;
          return;
        }
        window.scrollTo(m, g);
      }), fa = null;
    }
  }
  return jt(() => {
    function g() {
      u.value = window.scrollY;
    }
    g(), window.addEventListener("scroll", g), _n(() => {
      window.removeEventListener("scroll", g);
    });
  }), Re([t, o, i], () => {
    n.value || !o.value || (t.value ? (window.matchMedia("(display-mode: standalone)").matches || c(), a.value || setTimeout(() => {
      p();
    }, 500)) : p());
  }), { restorePositionSetting: p };
}
function lg(e, t) {
  return e && e.value ? e : t;
}
function rg(e) {
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
    setBackgroundColorOnScale: p,
    scrollLockTimeout: g,
    closeThreshold: m,
    activeSnapPoint: S,
    fadeFromIndex: R,
    direction: E,
    noBodyStyles: A,
    handleOnly: y,
    preventScrollRestoration: v
  } = e, _ = ne(s.value ?? !1), x = ne(!1), $ = ne(!1), I = ne(!1), O = ne(null), B = ne(null), j = ne(null), ue = ne(null), be = ne(null), W = ne(!1), le = ne(null), z = ne(0), ee = ne(!1);
  ne(0);
  const k = ne(null);
  ne(0);
  const H = V(() => {
    var d;
    return ((d = k.value) == null ? void 0 : d.$el.getBoundingClientRect().height) || 0;
  }), C = lg(
    e.snapPoints,
    ne(void 0)
  ), pe = V(() => {
    var d;
    return C && (((d = C.value) == null ? void 0 : d.length) ?? 0) > 0;
  }), Oe = ne(null), {
    activeSnapPointIndex: Le,
    onRelease: Qe,
    snapPointsOffset: Te,
    onDrag: Ie,
    shouldFade: et,
    getPercentageDragged: $t
  } = og({
    snapPoints: C,
    activeSnapPoint: S,
    drawerRef: k,
    fadeFromIndex: R,
    overlayRef: O,
    onSnapPointChange: we,
    direction: E
  });
  function we(d, h) {
    C.value && d === h.length - 1 && (B.value = /* @__PURE__ */ new Date());
  }
  sg({
    isOpen: _,
    modal: u,
    nested: i,
    hasBeenOpened: x,
    noBodyStyles: A,
    preventScrollRestoration: v
  });
  function qe() {
    return (window.innerWidth - Rl) / window.innerWidth;
  }
  function tt(d, h) {
    var L;
    if (!d)
      return !1;
    let U = d;
    const se = (L = window.getSelection()) == null ? void 0 : L.toString(), ie = k.value ? $a(k.value.$el, E.value) : null, oe = /* @__PURE__ */ new Date();
    if (U.hasAttribute("data-vaul-no-drag") || U.closest("[data-vaul-no-drag]"))
      return !1;
    if (E.value === "right" || E.value === "left")
      return !0;
    if (B.value && oe.getTime() - B.value.getTime() < 500)
      return !1;
    if (ie !== null && (E.value === "bottom" ? ie > 0 : ie < 0))
      return !0;
    if (se && se.length > 0)
      return !1;
    if (be.value && oe.getTime() - be.value.getTime() < g.value && ie === 0 || h)
      return be.value = oe, !1;
    for (; U; ) {
      if (U.scrollHeight > U.clientHeight) {
        if (U.scrollTop !== 0)
          return be.value = /* @__PURE__ */ new Date(), !1;
        if (U.getAttribute("role") === "dialog")
          return !0;
      }
      U = U.parentNode;
    }
    return !0;
  }
  function at(d) {
    !r.value && !C.value || k.value && !k.value.$el.contains(d.target) || ($.value = !0, j.value = /* @__PURE__ */ new Date(), d.target.setPointerCapture(d.pointerId), z.value = De(E.value) ? d.clientY : d.clientX);
  }
  function gt(d) {
    var h, L, U, se, ie, oe;
    if (k.value && $.value) {
      const T = E.value === "bottom" || E.value === "right" ? 1 : -1, F = (z.value - (De(E.value) ? d.clientY : d.clientX)) * T, ce = F > 0, xe = C.value && !r.value && !ce;
      if (xe && Le.value === 0)
        return;
      const st = Math.abs(F), Lt = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      let He = st / H.value;
      const it = $t(st, ce);
      if (it !== null && (He = it), xe && He >= 1 || !W.value && !tt(d.target, ce))
        return;
      if ((h = k?.value) == null || h.$el.classList.add(ds), W.value = !0, Be((L = k.value) == null ? void 0 : L.$el, {
        transition: "none"
      }), Be((U = O.value) == null ? void 0 : U.$el, {
        transition: "none"
      }), C.value && Ie({ draggedDistance: F }), ce && !C.value) {
        const ut = eg(F), xa = Math.min(ut * -1, 0) * T;
        Be((se = k.value) == null ? void 0 : se.$el, {
          transform: De(E.value) ? `translate3d(0, ${xa}px, 0)` : `translate3d(${xa}px, 0, 0)`
        });
        return;
      }
      const Ka = 1 - He;
      if ((et.value || R.value && Le.value === R.value - 1) && (t(He), Be(
        (ie = O.value) == null ? void 0 : ie.$el,
        {
          opacity: `${Ka}`,
          transition: "none"
        },
        !0
      )), Lt && O.value && c.value) {
        const ut = Math.min(qe() + He * (1 - qe()), 1), xa = 8 - He * 8, oo = Math.max(0, 14 - He * 14);
        Be(
          Lt,
          {
            borderRadius: `${xa}px`,
            transform: De(E.value) ? `scale(${ut}) translate3d(0, ${oo}px, 0)` : `scale(${ut}) translate3d(${oo}px, 0, 0)`,
            transition: "none"
          },
          !0
        );
      }
      if (!C.value) {
        const ut = st * T;
        Be((oe = k.value) == null ? void 0 : oe.$el, {
          transform: De(E.value) ? `translate3d(0, ${ut}px, 0)` : `translate3d(${ut}px, 0, 0)`
        });
      }
    }
  }
  function nt() {
    var d;
    if (!k.value)
      return;
    const h = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]"), L = $a(k.value.$el, E.value);
    Be(k.value.$el, {
      transform: "translate3d(0, 0, 0)",
      transition: `transform ${Ce.DURATION}s cubic-bezier(${Ce.EASE.join(",")})`
    }), Be((d = O.value) == null ? void 0 : d.$el, {
      transition: `opacity ${Ce.DURATION}s cubic-bezier(${Ce.EASE.join(",")})`,
      opacity: "1"
    }), c.value && L && L > 0 && _.value && Be(
      h,
      {
        borderRadius: `${Ml}px`,
        overflow: "hidden",
        ...De(E.value) ? {
          transform: `scale(${qe()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
          transformOrigin: "top"
        } : {
          transform: `scale(${qe()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
          transformOrigin: "left"
        },
        transitionProperty: "transform, border-radius",
        transitionDuration: `${Ce.DURATION}s`,
        transitionTimingFunction: `cubic-bezier(${Ce.EASE.join(",")})`
      },
      !0
    );
  }
  function ot(d) {
    k.value && (n(), d || (_.value = !1), window.setTimeout(() => {
      C.value && (S.value = C.value[0]);
    }, Ce.DURATION * 1e3));
  }
  ha(() => {
    if (!_.value && c.value && Xp) {
      const d = setTimeout(() => {
        Qp(document.body);
      }, 200);
      return () => clearTimeout(d);
    }
  }), Re(s, () => {
    _.value = s.value, s.value || ot();
  });
  function Pt(d) {
    if (!$.value || !k.value)
      return;
    k.value.$el.classList.remove(ds), W.value = !1, $.value = !1, ue.value = /* @__PURE__ */ new Date();
    const h = $a(k.value.$el, E.value);
    if (!tt(d.target, !1) || !h || Number.isNaN(h) || j.value === null)
      return;
    const L = ue.value.getTime() - j.value.getTime(), U = z.value - (De(E.value) ? d.clientY : d.clientX), se = Math.abs(U) / L;
    if (se > 0.05 && (I.value = !0, window.setTimeout(() => {
      I.value = !1;
    }, 200)), C.value) {
      const oe = E.value === "bottom" || E.value === "right" ? 1 : -1;
      Qe({
        draggedDistance: U * oe,
        closeDrawer: ot,
        velocity: se,
        dismissible: r.value
      }), a(!0);
      return;
    }
    if (E.value === "bottom" || E.value === "right" ? U > 0 : U < 0) {
      nt(), a(!0);
      return;
    }
    if (se > Il) {
      ot(), a(!1);
      return;
    }
    const ie = Math.min(
      k.value.$el.getBoundingClientRect().height ?? 0,
      window.innerHeight
    );
    if (h >= ie * m.value) {
      ot(), a(!1);
      return;
    }
    a(!0), nt();
  }
  Re(_, (d) => {
    d && (B.value = /* @__PURE__ */ new Date()), o(d);
  }, { immediate: !0 });
  function vt(d) {
    var h, L;
    const U = d ? (window.innerWidth - Pa) / window.innerWidth : 1, se = d ? -16 : 0;
    le.value && window.clearTimeout(le.value), Be((h = k.value) == null ? void 0 : h.$el, {
      transition: `transform ${Ce.DURATION}s cubic-bezier(${Ce.EASE.join(",")})`,
      transform: `scale(${U}) translate3d(0, ${se}px, 0)`
    }), !d && (L = k.value) != null && L.$el && (le.value = window.setTimeout(() => {
      var ie, oe;
      const T = $a((ie = k.value) == null ? void 0 : ie.$el, E.value);
      Be((oe = k.value) == null ? void 0 : oe.$el, {
        transition: "none",
        transform: De(E.value) ? `translate3d(0, ${T}px, 0)` : `translate3d(${T}px, 0, 0)`
      });
    }, 500));
  }
  function Dt(d) {
    var h;
    if (d < 0)
      return;
    const L = De(E.value) ? window.innerHeight : window.innerWidth, U = (L - Pa) / L, se = U + d * (1 - U), ie = -16 + d * Pa;
    Be((h = k.value) == null ? void 0 : h.$el, {
      transform: De(E.value) ? `scale(${se}) translate3d(0, ${ie}px, 0)` : `scale(${se}) translate3d(${ie}px, 0, 0)`,
      transition: "none"
    });
  }
  function ia(d) {
    var h;
    const L = De(E.value) ? window.innerHeight : window.innerWidth, U = d ? (L - Pa) / L : 1, se = d ? -16 : 0;
    d && Be((h = k.value) == null ? void 0 : h.$el, {
      transition: `transform ${Ce.DURATION}s cubic-bezier(${Ce.EASE.join(",")})`,
      transform: De(E.value) ? `scale(${U}) translate3d(0, ${se}px, 0)` : `scale(${U}) translate3d(${se}px, 0, 0)`
    });
  }
  return {
    open: s,
    isOpen: _,
    modal: u,
    keyboardIsOpen: ee,
    hasBeenOpened: x,
    drawerRef: k,
    drawerHeightRef: H,
    overlayRef: O,
    handleRef: Oe,
    isDragging: $,
    dragStartTime: j,
    isAllowedToDrag: W,
    snapPoints: C,
    activeSnapPoint: S,
    hasSnapPoints: pe,
    pointerStart: z,
    dismissible: r,
    snapPointsOffset: Te,
    direction: E,
    shouldFade: et,
    fadeFromIndex: R,
    shouldScaleBackground: c,
    setBackgroundColorOnScale: p,
    onPress: at,
    onDrag: gt,
    onRelease: Pt,
    closeDrawer: ot,
    onNestedDrag: Dt,
    onNestedRelease: ia,
    onNestedOpenChange: vt,
    emitClose: n,
    emitDrag: t,
    emitRelease: a,
    emitOpenChange: o,
    nested: i,
    handleOnly: y,
    noBodyStyles: A
  };
}
const ig = /* @__PURE__ */ P({
  __name: "DrawerRoot",
  props: {
    activeSnapPoint: { default: void 0 },
    closeThreshold: { default: ag },
    shouldScaleBackground: { type: Boolean, default: void 0 },
    setBackgroundColorOnScale: { type: Boolean, default: !0 },
    scrollLockTimeout: { default: ng },
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
    Hl();
    const s = V(() => n.fadeFromIndex ?? (n.snapPoints && n.snapPoints.length - 1)), r = cs(n, "open", o, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), i = cs(n, "activeSnapPoint", o, {
      passive: n.activeSnapPoint === void 0
    }), u = {
      emitDrag: (R) => o("drag", R),
      emitRelease: (R) => o("release", R),
      emitClose: () => o("close"),
      emitOpenChange: (R) => {
        o("update:open", R), setTimeout(() => {
          o("animationEnd", R);
        }, Ce.DURATION * 1e3);
      }
    }, { closeDrawer: c, hasBeenOpened: p, modal: g, isOpen: m } = Zp(
      rg({
        ...u,
        ...ln(n),
        activeSnapPoint: i,
        fadeFromIndex: s,
        open: r
      })
    );
    function S(R) {
      if (r.value !== void 0) {
        u.emitOpenChange(R);
        return;
      }
      m.value = R, R ? p.value = !0 : c();
    }
    return t({
      open: m
    }), (R, E) => (f(), N(l(kn), {
      open: l(m),
      modal: l(g),
      "onUpdate:open": S
    }, {
      default: b(() => [
        D(R.$slots, "default", { open: l(m) })
      ]),
      _: 3
    }, 8, ["open", "modal"]));
  }
}), ug = /* @__PURE__ */ P({
  __name: "DrawerOverlay",
  setup(e) {
    const { overlayRef: t, hasSnapPoints: a, isOpen: n, shouldFade: o } = ao();
    return (s, r) => (f(), N(l(En), {
      ref_key: "overlayRef",
      ref: t,
      "data-vaul-overlay": "",
      "data-vaul-snap-points": l(n) && l(a) ? "true" : "false",
      "data-vaul-snap-points-overlay": l(n) && l(o) ? "true" : "false"
    }, null, 8, ["data-vaul-snap-points", "data-vaul-snap-points-overlay"]));
  }
}), cg = () => () => {
};
function dg() {
  const { direction: e, isOpen: t, shouldScaleBackground: a, setBackgroundColorOnScale: n, noBodyStyles: o } = ao(), s = ne(null), r = ne(document.body.style.backgroundColor);
  function i() {
    return (window.innerWidth - Rl) / window.innerWidth;
  }
  ha((u) => {
    if (t.value && a.value) {
      s.value && clearTimeout(s.value);
      const c = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      if (!c)
        return;
      tg(
        n.value && !o.value ? on(document.body, { background: "black" }) : cg,
        on(c, {
          transformOrigin: De(e.value) ? "top" : "left",
          transitionProperty: "transform, border-radius",
          transitionDuration: `${Ce.DURATION}s`,
          transitionTimingFunction: `cubic-bezier(${Ce.EASE.join(",")})`
        })
      );
      const p = on(c, {
        borderRadius: `${Ml}px`,
        overflow: "hidden",
        ...De(e.value) ? {
          transform: `scale(${i()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`
        } : {
          transform: `scale(${i()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`
        }
      });
      u(() => {
        p(), s.value = window.setTimeout(() => {
          r.value ? document.body.style.background = r.value : document.body.style.removeProperty("background");
        }, Ce.DURATION * 1e3);
      });
    }
  }, { flush: "pre" });
}
const fg = /* @__PURE__ */ P({
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
      emitOpenChange: p,
      dismissible: g,
      keyboardIsOpen: m,
      closeDrawer: S,
      direction: R,
      handleOnly: E
    } = ao();
    dg();
    const A = ne(!1), y = V(() => n.value && n.value.length > 0 ? `${n.value[0]}px` : "0");
    function v($) {
      if (!c.value || $.defaultPrevented) {
        $.preventDefault();
        return;
      }
      m.value && (m.value = !1), g.value ? p(!1) : $.preventDefault();
    }
    function _($) {
      E.value || r($);
    }
    function x($) {
      E.value || i($);
    }
    return ha(() => {
      o.value && window.requestAnimationFrame(() => {
        A.value = !0;
      });
    }), ($, I) => (f(), N(l(Sn), {
      ref_key: "drawerRef",
      ref: s,
      "data-vaul-drawer": "",
      "data-vaul-drawer-direction": l(R),
      "data-vaul-delayed-snap-points": A.value ? "true" : "false",
      "data-vaul-snap-points": l(a) && l(o) ? "true" : "false",
      style: Ia({ "--snap-point-height": y.value }),
      onPointerdown: _,
      onPointermove: x,
      onPointerup: l(u),
      onPointerDownOutside: v,
      onOpenAutoFocus: I[0] || (I[0] = wn(() => {
      }, ["prevent"])),
      onEscapeKeyDown: I[1] || (I[1] = (O) => {
        l(g) || O.preventDefault();
      })
    }, {
      default: b(() => [
        D($.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-vaul-drawer-direction", "data-vaul-delayed-snap-points", "data-vaul-snap-points", "style", "onPointerup"]));
  }
}), mg = /* @__PURE__ */ P({
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
    const o = $e(e, t);
    return (s, r) => (f(), N(l(ig), Y({ "data-slot": "drawer" }, l(o)), {
      default: b(() => [
        D(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pg = /* @__PURE__ */ P({
  __name: "DrawerOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = fe(t, "class");
    return (n, o) => (f(), N(l(ug), Y({ "data-slot": "drawer-overlay" }, l(a), {
      class: l(G)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80", t.class)
    }), null, 16, ["class"]));
  }
}), gg = /* @__PURE__ */ P({
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
    const a = e, o = $e(a, t);
    return (s, r) => (f(), N(l(Cn), null, {
      default: b(() => [
        w(pg),
        w(l(fg), Y({ "data-slot": "drawer-content" }, l(o), {
          class: l(G)(
            "group/drawer-content bg-background fixed z-50 flex h-auto flex-col",
            "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg",
            "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg",
            "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:sm:max-w-sm",
            "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:sm:max-w-sm",
            a.class
          )
        }), {
          default: b(() => [
            r[0] || (r[0] = q("div", { class: "bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }, null, -1)),
            D(s.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), vg = /* @__PURE__ */ P({
  __name: "DrawerDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = fe(t, "class");
    return (n, o) => (f(), N(l(On), Y({ "data-slot": "drawer-description" }, l(a), {
      class: l(G)("text-muted-foreground text-sm", t.class)
    }), {
      default: b(() => [
        D(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), hg = /* @__PURE__ */ P({
  __name: "DrawerHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), M("div", {
      "data-slot": "drawer-header",
      class: te(l(G)("flex flex-col gap-1.5 p-4", t.class))
    }, [
      D(a.$slots, "default")
    ], 2));
  }
}), bg = /* @__PURE__ */ P({
  __name: "DrawerTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, a = fe(t, "class");
    return (n, o) => (f(), N(l(Tn), Y({ "data-slot": "drawer-title" }, l(a), {
      class: l(G)("text-foreground font-semibold", t.class)
    }), {
      default: b(() => [
        D(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), yg = ["innerHTML"], _g = { class: "px-4 flex-1 overflow-auto select-text" }, wg = /* @__PURE__ */ P({
  __name: "DynamicDrawer",
  props: /* @__PURE__ */ Se({
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
    const t = he(e, "open");
    return (a, n) => (f(), N(l(mg), {
      open: t.value,
      "onUpdate:open": n[1] || (n[1] = (o) => t.value = o),
      "handle-only": "",
      direction: "right",
      dismissible: !0,
      "should-scale-background": ""
    }, {
      default: b(() => [
        w(l(gg), { class: "!max-w-[800px]" }, {
          default: b(() => [
            w(l(hg), { class: "!pb-0" }, {
              default: b(() => [
                w(l(bg), { class: "flex items-center gap-2" }, {
                  default: b(() => [
                    q("div", {
                      class: "[&>em]:font-normal [&>em]:!not-italic line-clamp-1 flex-1",
                      innerHTML: e.title
                    }, null, 8, yg),
                    w(Fe, {
                      variant: "ghost",
                      onClick: n[0] || (n[0] = (o) => t.value = !1)
                    }, {
                      default: b(() => [
                        w(l(_a))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                e.description ? (f(), N(l(vg), { key: 0 }, {
                  default: b(() => [
                    de(X(e.description), 1)
                  ]),
                  _: 1
                })) : Q("", !0)
              ]),
              _: 1
            }),
            q("div", _g, [
              D(a.$slots, "default")
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), xg = /* @__PURE__ */ P({
  __name: "DynamicComponentDialog",
  props: /* @__PURE__ */ Se({
    dialogConfig: {},
    componentConfig: {},
    type: {}
  }, {
    open: { type: Boolean },
    openModifiers: {}
  }),
  emits: ["update:open"],
  setup(e) {
    const t = he(e, "open"), a = ne(!1), n = ne();
    async function o(r) {
      a.value = !0;
      const i = e.dialogConfig.onOk ? await e.dialogConfig.onOk(r).catch((u) => u) : void 0;
      i === !0 || i === void 0 ? t.value = !1 : no(i) && (n.value = i), a.value = !1;
    }
    const s = () => {
      t.value = !1;
    };
    return (r, i) => (f(), N(Ke(e.type === "drawer" ? wg : Dl), Y(e.dialogConfig, {
      open: t.value,
      "onUpdate:open": i[0] || (i[0] = (u) => t.value = u)
    }), {
      default: b(() => [
        (f(), N(Ke(e.componentConfig.component), Y(e.componentConfig.componentProps, {
          errors: n.value,
          onSubmitSuccess: o,
          onClose: s
        }), null, 16, ["errors"]))
      ]),
      _: 1
    }, 16, ["open"]));
  }
}), kg = { class: "pt-3 flex gap-2 justify-end" }, wa = /* @__PURE__ */ P({
  __name: "DynamicConfirmComponentDialog",
  props: /* @__PURE__ */ Se({
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
    const t = e, a = he(e, "open"), n = je(), o = ne(t.initialValue), s = ne(!1), r = V(() => t.dialogConfig.cancelButtonText ?? n("common.cancel", "Cancel")), i = V(() => t.dialogConfig.okButtonText ?? n("common.ok", "Ok"));
    function u() {
      a.value = !1;
    }
    const c = ne();
    async function p() {
      s.value = !0;
      const g = t.dialogConfig.onOk ? await t.dialogConfig.onOk(o.value).catch((m) => m) : void 0;
      g === !0 || g === void 0 ? a.value = !1 : no(g) && (c.value = g), s.value = !1;
    }
    return (g, m) => (f(), N(Dl, Y(t.dialogConfig, {
      open: a.value,
      "onUpdate:open": m[3] || (m[3] = (S) => a.value = S)
    }), {
      default: b(() => [
        q("form", {
          onSubmit: m[2] || (m[2] = wn((S) => p(), ["prevent"])),
          class: "flex flex-col"
        }, [
          (f(), N(Ke(t.componentConfig.component), Y(t.componentConfig.componentProps, {
            modelValue: o.value,
            "onUpdate:modelValue": m[0] || (m[0] = (S) => o.value = S),
            errors: c.value
          }), null, 16, ["modelValue", "errors"])),
          q("div", kg, [
            w(Fe, {
              type: "button",
              variant: "secondary",
              onClick: m[1] || (m[1] = (S) => u())
            }, {
              default: b(() => [
                de(X(r.value), 1)
              ]),
              _: 1
            }),
            w(Fe, {
              type: "submit",
              disabled: s.value
            }, {
              default: b(() => [
                q("span", null, X(i.value), 1),
                s.value ? (f(), N(Sl, { key: 0 })) : Q("", !0)
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
function no(e) {
  return typeof e != "object" || e === null || Array.isArray(e) ? !1 : Object.values(e).every((t) => Array.isArray(t) && t.every((a) => typeof a == "string"));
}
const Xt = Pl();
function jg(e, t, a = "dialog") {
  return Xt.open({
    component: xg,
    componentProps: {
      componentConfig: t,
      dialogConfig: typeof e == "string" ? { title: e } : e,
      type: a
    }
  });
}
function Hg(e, t = "Achtung", a = "Sind Sie sicher?", n) {
  return Xt.open({
    component: zp,
    componentProps: {
      title: t,
      description: a,
      onOk: e
    },
    onClose: n
  });
}
function Yg({
  dialogConfig: e,
  initialValue: t,
  onOk: a,
  component: n,
  componentProps: o,
  onClose: s
}) {
  return Xt.open({
    component: wa,
    componentProps: {
      componentConfig: { component: n, componentProps: o },
      initialValue: t,
      dialogConfig: { ...typeof e == "string" ? { title: e } : e, onOk: a }
    },
    onClose: s
  });
}
function Eg(e, t, a, n, o, s) {
  return Xt.open({
    component: wa,
    componentProps: {
      componentConfig: { component: Jn, componentProps: { multiple: !0, options: t, ...o } },
      initialValue: a,
      dialogConfig: { ...typeof e == "string" ? { title: e } : e, onOk: n }
    },
    onClose: s
  });
}
function Kg(e, t, a, n, o, s) {
  return Xt.open({
    component: wa,
    componentProps: {
      componentConfig: { component: Dp, componentProps: { multiple: !0, options: t, ...o } },
      initialValue: a,
      dialogConfig: { ...typeof e == "string" ? { title: e } : e, onOk: n }
    },
    onClose: s
  });
}
function Xg(e, t, a, n, o) {
  return Xt.open({
    component: wa,
    componentProps: {
      componentConfig: { component: St, componentProps: { type: "text", ...n } },
      initialValue: t,
      dialogConfig: { ...typeof e == "string" ? { title: e } : e, onOk: a }
    },
    onClose: o
  });
}
function qg(e, t, a, n, o) {
  return Xt.open({
    component: wa,
    componentProps: {
      componentConfig: { component: St, componentProps: { type: "number", ...n } },
      initialValue: t,
      dialogConfig: { ...typeof e == "string" ? { title: e } : e, onOk: a }
    },
    onClose: o
  });
}
function Jg(e, t, a, n, o, s) {
  const r = [
    { value: !0, label: n?.trueLabel || "Yes" },
    { value: !1, label: n?.falseLabel || "No" }
  ];
  return Eg(
    e,
    r,
    t,
    a,
    { ...o, multiple: !1 },
    s
  );
}
const Zg = /* @__PURE__ */ P({
  inheritAttrs: !1,
  __name: "InputBoolean",
  props: /* @__PURE__ */ Se({
    class: {},
    readonly: { type: Boolean }
  }, {
    modelValue: { type: Boolean },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, a = he(e, "modelValue"), n = je(), o = V(() => [
      { value: !0, label: n("common.true", "True") },
      { value: !1, label: n("common.false", "False") }
    ]);
    return (s, r) => (f(), N(Jn, {
      modelValue: a.value,
      "onUpdate:modelValue": r[0] || (r[0] = (i) => a.value = i),
      class: te(t.class),
      options: o.value
    }, null, 8, ["modelValue", "class", "options"]));
  }
}), Cg = { key: 0 }, Sg = { class: "text-xs" }, Og = { class: "text-xs" }, Tg = { class: "flex gap-2" }, Qg = /* @__PURE__ */ P({
  __name: "InputGraduated",
  props: /* @__PURE__ */ Se({
    class: {},
    placeholder: {}
  }, {
    modelValue: { default: () => [] },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, a = je(), n = (u) => typeof u == "string", o = he(e, "modelValue"), s = () => o.value?.push({ from: 0, value: 0 }), r = (u) => o.value.splice(u, 1), i = () => {
      o.value = [];
    };
    return (u, c) => (f(), N(l(kl), null, {
      default: b(() => [
        w(l(Cl), { "as-child": "" }, {
          default: b(() => [
            w(zs, {
              class: te(t.class),
              variant: "outline"
            }, {
              default: b(() => [
                o.value.length ? (f(), N(us, {
                  key: 0,
                  value: o.value
                }, null, 8, ["value"])) : e.placeholder ? (f(), M(me, { key: 1 }, [
                  n(e.placeholder) ? (f(), M("span", Cg)) : (f(), N(us, {
                    key: 1,
                    value: e.placeholder,
                    class: "text-muted-foreground"
                  }, null, 8, ["value"]))
                ], 64)) : Q("", !0)
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          _: 1
        }),
        w(l(El), {
          class: "w-80 flex flex-col gap-2 min-w-[var(--reka-popper-anchor-width)]",
          align: "end"
        }, {
          default: b(() => [
            (f(!0), M(me, null, ye(o.value, (p, g) => (f(), M("div", {
              key: g,
              class: "flex gap-2 items-center"
            }, [
              q("label", Sg, X(l(a)("common.from", "From")) + ":", 1),
              w(St, {
                modelValue: o.value[g].from,
                "onUpdate:modelValue": (m) => o.value[g].from = m,
                type: "number"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              q("label", Og, X(l(a)("common.value", "Value")) + ":", 1),
              w(St, {
                modelValue: o.value[g].value,
                "onUpdate:modelValue": (m) => o.value[g].value = m,
                type: "number"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              w(Fe, {
                variant: "ghost",
                size: "sm",
                class: "px-1",
                onClick: (m) => r(g)
              }, {
                default: b(() => [
                  w(l(_a))
                ]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128)),
            q("div", Tg, [
              w(Fe, {
                size: "sm",
                variant: "ghost",
                class: "!justify-start -mx-2 flex-1",
                onClick: c[0] || (c[0] = (p) => s())
              }, {
                default: b(() => [
                  w(l(An)),
                  de(" " + X(l(a)("common.add", "Add")), 1)
                ]),
                _: 1
              }),
              o.value.length > 0 ? (f(), N(Fe, {
                key: 0,
                size: "sm",
                variant: "ghost",
                class: "!justify-start -mx-2",
                onClick: c[1] || (c[1] = (p) => i())
              }, {
                default: b(() => [
                  w(l(ui)),
                  de(" " + X(l(a)("common.clear", "Clear All")), 1)
                ]),
                _: 1
              })) : Q("", !0)
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), ev = /* @__PURE__ */ P({
  __name: "InputRange",
  props: /* @__PURE__ */ Se({
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
    const t = e, a = he(e, "modelValue"), n = je(), o = V(() => t.placeholder?.[0] ?? n("input.range.min", "Min")), s = V(() => t.placeholder?.[1] ?? n("input.range.max", "Max"));
    function r(i, u) {
      a.value || (a.value = [void 0, void 0]), a.value[i] = u, xn(a);
    }
    return (i, u) => (f(), M("div", {
      class: te(l(G)("flex items-center gap-0", t.class))
    }, [
      w(l(St), {
        "model-value": a.value?.[0],
        placeholder: o.value,
        disabled: e.disabled,
        type: "number",
        class: "flex-1 rounded-r-none pr-1",
        "onUpdate:modelValue": u[0] || (u[0] = (c) => r(0, c))
      }, null, 8, ["model-value", "placeholder", "disabled"]),
      w(l(St), {
        "model-value": a.value?.[1],
        placeholder: s.value,
        disabled: e.disabled,
        type: "number",
        class: "flex-1 rounded-l-none pr-1",
        "onUpdate:modelValue": u[1] || (u[1] = (c) => r(1, c))
      }, null, 8, ["model-value", "placeholder", "disabled"])
    ], 2));
  }
}), Ng = /* @__PURE__ */ P({
  __name: "InputGroup",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), M("div", {
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
      D(a.$slots, "default")
    ], 2));
  }
}), Ag = ["data-align"], ms = /* @__PURE__ */ P({
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
    return (n, o) => (f(), M("div", {
      role: "group",
      "data-slot": "input-group-addon",
      "data-align": t.align,
      class: te(l(G)(l(Dg)({ align: t.align }), t.class)),
      onClick: a
    }, [
      D(n.$slots, "default")
    ], 10, Ag));
  }
}), $g = /* @__PURE__ */ P({
  __name: "InputGroupButton",
  props: {
    variant: { default: "ghost" },
    size: { default: "xs" },
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), N(l(Fe), {
      "data-size": t.size,
      variant: t.variant,
      class: te(l(G)(l(Lg)({ size: t.size }), t.class))
    }, {
      default: b(() => [
        D(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-size", "variant", "class"]));
  }
}), Pg = /* @__PURE__ */ P({
  __name: "InputGroupInput",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), N(l(St), {
      "data-slot": "input-group-control",
      class: te(l(G)(
        "flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent",
        t.class
      ))
    }, null, 8, ["class"]));
  }
}), Dg = Yt(
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
), Lg = Yt(
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
), tv = /* @__PURE__ */ P({
  inheritAttrs: !1,
  __name: "InputSearch",
  props: /* @__PURE__ */ Se({
    showClearButton: { type: Boolean, default: !0 },
    placeholder: {}
  }, {
    modelSubmit: { default: "" },
    modelSubmitModifiers: {},
    "": {},
    Modifiers: {}
  }),
  emits: /* @__PURE__ */ Se(["onSubmit", "onClear"], ["update:modelSubmit", "update:"]),
  setup(e, { emit: t }) {
    const a = e, n = t, o = je(), s = V(() => a.placeholder ?? o("input.search.placeholder", "Search...")), r = he(e, "modelSubmit"), i = he(e, ""), u = V(() => !!i.value && i.value.length > 0);
    jt(() => {
      r.value && (i.value = r.value);
    });
    function c() {
      r.value = i.value || "", n("onSubmit", i.value || "");
    }
    function p() {
      r.value = "", i.value = "", n("onClear", "");
    }
    return (g, m) => (f(), N(l(Ng), null, {
      default: b(() => [
        w(l(ms), { align: "inline-start" }, {
          default: b(() => [
            w(l(ri))
          ]),
          _: 1
        }),
        w(l(Pg), Y({
          modelValue: i.value,
          "onUpdate:modelValue": m[0] || (m[0] = (S) => i.value = S),
          type: "text",
          placeholder: s.value
        }, g.$attrs, {
          onKeydown: Kl(c, ["enter"])
        }), null, 16, ["modelValue", "placeholder"]),
        u.value && e.showClearButton ? (f(), N(l(ms), {
          key: 0,
          align: "inline-end"
        }, {
          default: b(() => [
            w(l($g), {
              variant: "ghost",
              size: "icon-xs",
              onClick: p
            }, {
              default: b(() => [
                w(l(_a))
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : Q("", !0)
      ]),
      _: 1
    }));
  }
}), av = /* @__PURE__ */ P({
  __name: "Tag",
  props: {
    variant: {},
    class: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (a, n) => (f(), M("span", {
      class: te(l(G)(l(Ig)({ variant: e.variant }), t.class))
    }, [
      D(a.$slots, "default")
    ], 2));
  }
}), Ig = Yt(
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
  Bg as AppSidebar,
  Fe as Button,
  zs as ButtonSelect,
  aa as Checkbox,
  Fg as DataTable,
  Bm as DataTableColumnHeader,
  Ug as DataTableGrouped,
  zg as DataTableTree,
  Zm as DataTableViewOptions,
  Gg as DateFormat,
  us as DisplayGraduated,
  zp as DynamicAlertDialog,
  xg as DynamicComponentDialog,
  Wg as DynamicComponentProvider,
  wa as DynamicConfirmComponentDialog,
  Dl as DynamicDialog,
  wg as DynamicDrawer,
  Tp as EmptyMini,
  Zg as InputBoolean,
  Qg as InputGraduated,
  ev as InputRange,
  tv as InputSearch,
  wm as PaginationCustom,
  Dp as SelectListOptions,
  Jn as SelectOptions,
  av as Tag,
  Jf as TranslationKey,
  Hg as alert,
  Jg as confirmBoolean,
  Yg as confirmGeneric,
  qg as confirmNumber,
  Eg as confirmSelect,
  Kg as confirmSelectList,
  Xg as confirmText,
  Sp as dynamicComponent,
  Gs as escapeKey,
  jg as openDynamicDialogComponent,
  je as useComponentTranslation,
  Pl as useDynamicComponent,
  Vg as useEscapeKey,
  Mn as useEscapeKeyWhile,
  za as useToggleState
};
