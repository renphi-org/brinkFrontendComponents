import * as Co from "vue";
import { h as mn, defineComponent as D, reactive as pn, inject as vn, computed as W, unref as s, getCurrentInstance as Bt, watchEffect as nr, createBlock as A, openBlock as g, mergeProps as K, withCtx as h, renderSlot as j, watch as Ue, getCurrentScope as jc, hasInjectionContext as Uc, toValue as M, isRef as dn, onMounted as An, nextTick as xt, onScopeDispose as Ih, readonly as yi, toRef as zn, ref as me, customRef as xh, toRefs as ja, shallowRef as Ut, createVNode as w, createElementVNode as ie, createElementBlock as F, normalizeClass as be, normalizeStyle as Lc, createTextVNode as he, withDirectives as $i, vModelText as Rc, normalizeProps as zt, guardReactiveProps as Lt, Fragment as je, toDisplayString as oe, resolveDynamicComponent as mt, createCommentVNode as pe, renderList as Ge, onUnmounted as ro, Text as Oh, mergeModels as vt, useModel as ft, useTemplateRef as Eh, resolveDirective as Nh, triggerRef as Vc, provide as cr, warn as Fc, onBeforeUnmount as wi, toRaw as zh, useSlots as Th, withModifiers as Ph, withKeys as Ah } from "vue";
import { useForwardPropsEmits as He, CollapsibleRoot as Dh, CollapsibleContent as Ch, CollapsibleTrigger as jh, DialogRoot as ki, DialogOverlay as Si, DialogPortal as Ii, DialogContent as xi, DialogClose as Mc, DialogDescription as Oi, DialogTitle as Ei, createContext as Ni, Primitive as Xr, TooltipRoot as Uh, TooltipPortal as Lh, TooltipContent as Rh, TooltipArrow as Vh, TooltipTrigger as Fh, TooltipProvider as Mh, Separator as Bh, PaginationRoot as Zh, PaginationList as Wh, useForwardProps as Qe, PaginationFirst as Gh, PaginationLast as Hh, PaginationNext as Kh, PaginationPrev as Jh, SelectRoot as Yh, SelectPortal as qh, SelectContent as Xh, SelectViewport as Qh, SelectItem as eb, SelectItemIndicator as tb, SelectItemText as nb, SelectScrollDownButton as rb, SelectScrollUpButton as ab, SelectTrigger as Bc, SelectIcon as ob, SelectValue as ib, DropdownMenuSeparator as lb, CheckboxRoot as sb, CheckboxIndicator as ub, DropdownMenuRoot as cb, DropdownMenuCheckboxItem as db, DropdownMenuItemIndicator as fb, DropdownMenuPortal as mb, DropdownMenuContent as pb, DropdownMenuItem as vb, DropdownMenuLabel as gb, DropdownMenuTrigger as hb, useFilter as bb, ListboxRoot as _b, ListboxFilter as yb, ListboxContent as $b, ListboxItem as wb, ListboxItemIndicator as kb, AlertDialogRoot as Sb, AlertDialogAction as Ib, AlertDialogCancel as xb, AlertDialogPortal as Ob, AlertDialogOverlay as Eb, AlertDialogContent as Nb, AlertDialogDescription as zb, AlertDialogTitle as Tb, Slot as Pb, useId as Ab, Label as Db, AccordionRoot as Cb, AccordionContent as jb, AccordionItem as Ub, AccordionHeader as Lb, AccordionTrigger as Rb, SwitchRoot as Vb, SwitchThumb as Fb, CalendarRoot as Mb, CalendarCell as Bb, CalendarCellTrigger as Zb, CalendarGrid as Wb, CalendarGridBody as Gb, CalendarGridHead as Hb, CalendarGridRow as Kb, CalendarHeadCell as Jb, CalendarHeader as Yb, CalendarHeading as qb, CalendarNext as Xb, CalendarPrev as Qb, PopoverRoot as e_, PopoverPortal as t_, PopoverContent as n_, PopoverTrigger as r_, RadioGroupRoot as a_, RadioGroupItem as o_, RadioGroupIndicator as i_ } from "reka-ui";
const Ms = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), l_ = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, r, a) => a ? a.toUpperCase() : r.toLowerCase()
), s_ = (e) => {
  const t = l_(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, u_ = (...e) => e.filter((t, r, a) => !!t && t.trim() !== "" && a.indexOf(t) === r).join(" ").trim(), Bs = (e) => e === "";
var zr = {
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
const c_ = ({
  name: e,
  iconNode: t,
  absoluteStrokeWidth: r,
  "absolute-stroke-width": a,
  strokeWidth: n,
  "stroke-width": o,
  size: i = zr.width,
  color: l = zr.stroke,
  ...u
}, { slots: c }) => mn(
  "svg",
  {
    ...zr,
    ...u,
    width: i,
    height: i,
    stroke: l,
    "stroke-width": Bs(r) || Bs(a) || r === !0 || a === !0 ? Number(n || o || zr["stroke-width"]) * 24 / Number(i) : n || o || zr["stroke-width"],
    class: u_(
      "lucide",
      u.class,
      ...e ? [`lucide-${Ms(s_(e))}-icon`, `lucide-${Ms(e)}`] : ["lucide-icon"]
    )
  },
  [...t.map((d) => mn(...d)), ...c.default ? [c.default()] : []]
);
const nt = (e, t) => (r, { slots: a, attrs: n }) => mn(
  c_,
  {
    ...n,
    ...r,
    iconNode: t,
    name: e
  },
  a
);
const Zs = nt("arrow-down", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
const d_ = nt("arrow-up-down", [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
]);
const Ws = nt("arrow-up", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
const f_ = nt("calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
]);
const ao = nt("check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
const Gn = nt("chevron-down", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
const zi = nt("chevron-left", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
const Hn = nt("chevron-right", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
const m_ = nt("chevron-up", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]);
const Zc = nt("chevrons-left", [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
]);
const Wc = nt("chevrons-right", [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
]);
const p_ = nt("chevrons-up-down", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]);
const v_ = nt("circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
const g_ = nt("eye-off", [
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
const Gc = nt("frown", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M16 16s-1.5-2-4-2-4 2-4 2", key: "epbg0q" }],
  ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
  ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }]
]);
const h_ = nt("loader-circle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
const oo = nt("plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
const b_ = nt("rotate-ccw", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
]);
const __ = nt("search", [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
]);
const y_ = nt("settings-2", [
  ["path", { d: "M14 17H5", key: "gfn3mx" }],
  ["path", { d: "M19 7h-9", key: "6i9tg" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
]);
const $_ = nt("trash-2", [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
]);
const Hc = nt("trash", [
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
]);
const Qr = nt("x", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
const w_ = typeof document < "u", k_ = () => {
}, Ua = Array.isArray;
function Gs(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
function Hs(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function S_(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const r in e) if (!I_(e[r], t[r])) return !1;
  return !0;
}
function I_(e, t) {
  return Ua(e) ? Ks(e, t) : Ua(t) ? Ks(t, e) : e === t;
}
function Ks(e, t) {
  return Ua(t) ? e.length === t.length && e.every((r, a) => r === t[a]) : e.length === 1 && e[0] === t;
}
function Js(e) {
  return typeof e == "string" || e && typeof e == "object";
}
Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : "");
const Kc = Symbol(process.env.NODE_ENV !== "production" ? "router" : ""), x_ = Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function Ys(e) {
  const t = vn(Kc), r = vn(x_);
  let a = !1, n = null;
  const o = W(() => {
    const d = s(e.to);
    return process.env.NODE_ENV !== "production" && (!a || d !== n) && (Js(d) || (a ? Gs(`Invalid value for prop "to" in useLink()
- to:`, d, `
- previous to:`, n, `
- props:`, e) : Gs(`Invalid value for prop "to" in useLink()
- to:`, d, `
- props:`, e)), n = d, a = !0), t.resolve(d);
  }), i = W(() => {
    const { matched: d } = o.value, { length: f } = d, m = d[f - 1], p = r.matched;
    if (!m || !p.length) return -1;
    const v = p.findIndex(Hs.bind(null, m));
    if (v > -1) return v;
    const _ = qs(d[f - 2]);
    return f > 1 && qs(m) === _ && p[p.length - 1].path !== _ ? p.findIndex(Hs.bind(null, d[f - 2])) : v;
  }), l = W(() => i.value > -1 && z_(r.params, o.value.params)), u = W(() => i.value > -1 && i.value === r.matched.length - 1 && S_(r.params, o.value.params));
  function c(d = {}) {
    if (N_(d)) {
      const f = t[s(e.replace) ? "replace" : "push"](s(e.to)).catch(k_);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => f), f;
    }
    return Promise.resolve();
  }
  if (process.env.NODE_ENV !== "production" && w_) {
    const d = Bt();
    if (d) {
      const f = {
        route: o.value,
        isActive: l.value,
        isExactActive: u.value,
        error: null
      };
      d.__vrl_devtools = d.__vrl_devtools || [], d.__vrl_devtools.push(f), nr(() => {
        f.route = o.value, f.isActive = l.value, f.isExactActive = u.value, f.error = Js(s(e.to)) ? null : 'Invalid "to" value';
      }, { flush: "post" });
    }
  }
  return {
    route: o,
    href: W(() => o.value.href),
    isActive: l,
    isExactActive: u,
    navigate: c
  };
}
function O_(e) {
  return e.length === 1 ? e[0] : e;
}
const E_ = /* @__PURE__ */ D({
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
  useLink: Ys,
  setup(e, { slots: t }) {
    const r = pn(Ys(e)), { options: a } = vn(Kc), n = W(() => ({
      [Xs(e.activeClass, a.linkActiveClass, "router-link-active")]: r.isActive,
      [Xs(e.exactActiveClass, a.linkExactActiveClass, "router-link-exact-active")]: r.isExactActive
    }));
    return () => {
      const o = t.default && O_(t.default(r));
      return e.custom ? o : mn("a", {
        "aria-current": r.isExactActive ? e.ariaCurrentValue : null,
        href: r.href,
        onClick: r.navigate,
        class: n.value
      }, o);
    };
  }
}), jo = E_;
function N_(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function z_(e, t) {
  for (const r in t) {
    const a = t[r], n = e[r];
    if (typeof a == "string") {
      if (a !== n) return !1;
    } else if (!Ua(n) || n.length !== a.length || a.some((o, i) => o !== n[i])) return !1;
  }
  return !0;
}
function qs(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Xs = (e, t, r) => e ?? t ?? r, T_ = /* @__PURE__ */ D({
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
    const n = He(e, t);
    return (o, i) => (g(), A(s(Dh), K({ "data-slot": "collapsible" }, s(n)), {
      default: h(({ open: l }) => [
        j(o.$slots, "default", { open: l })
      ]),
      _: 3
    }, 16));
  }
}), P_ = /* @__PURE__ */ D({
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), A(s(Ch), K({ "data-slot": "collapsible-content" }, t), {
      default: h(() => [
        j(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), A_ = /* @__PURE__ */ D({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), A(s(jh), K({ "data-slot": "collapsible-trigger" }, t), {
      default: h(() => [
        j(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Jc(e) {
  var t, r, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var n = e.length;
    for (t = 0; t < n; t++) e[t] && (r = Jc(e[t])) && (a && (a += " "), a += r);
  } else for (r in e) e[r] && (a && (a += " "), a += r);
  return a;
}
function Yc() {
  for (var e, t, r = 0, a = "", n = arguments.length; r < n; r++) (e = arguments[r]) && (t = Jc(e)) && (a && (a += " "), a += t);
  return a;
}
const Qs = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, eu = Yc, rr = (e, t) => (r) => {
  var a;
  if (t?.variants == null) return eu(e, r?.class, r?.className);
  const { variants: n, defaultVariants: o } = t, i = Object.keys(n).map((c) => {
    const d = r?.[c], f = o?.[c];
    if (d === null) return null;
    const m = Qs(d) || Qs(f);
    return n[c][m];
  }), l = r && Object.entries(r).reduce((c, d) => {
    let [f, m] = d;
    return m === void 0 || (c[f] = m), c;
  }, {}), u = t == null || (a = t.compoundVariants) === null || a === void 0 ? void 0 : a.reduce((c, d) => {
    let { class: f, className: m, ...p } = d;
    return Object.entries(p).every((v) => {
      let [_, k] = v;
      return Array.isArray(k) ? k.includes({
        ...o,
        ...l
      }[_]) : {
        ...o,
        ...l
      }[_] === k;
    }) ? [
      ...c,
      f,
      m
    ] : c;
  }, []);
  return eu(e, i, u, r?.class, r?.className);
}, D_ = (e, t) => {
  const r = new Array(e.length + t.length);
  for (let a = 0; a < e.length; a++)
    r[a] = e[a];
  for (let a = 0; a < t.length; a++)
    r[e.length + a] = t[a];
  return r;
}, C_ = (e, t) => ({
  classGroupId: e,
  validator: t
}), qc = (e = /* @__PURE__ */ new Map(), t = null, r) => ({
  nextPart: e,
  validators: t,
  classGroupId: r
}), La = "-", tu = [], j_ = "arbitrary..", U_ = (e) => {
  const t = R_(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: a
  } = e;
  return {
    getClassGroupId: (i) => {
      if (i.startsWith("[") && i.endsWith("]"))
        return L_(i);
      const l = i.split(La), u = l[0] === "" && l.length > 1 ? 1 : 0;
      return Xc(l, u, t);
    },
    getConflictingClassGroupIds: (i, l) => {
      if (l) {
        const u = a[i], c = r[i];
        return u ? c ? D_(c, u) : u : c || tu;
      }
      return r[i] || tu;
    }
  };
}, Xc = (e, t, r) => {
  if (e.length - t === 0)
    return r.classGroupId;
  const n = e[t], o = r.nextPart.get(n);
  if (o) {
    const c = Xc(e, t + 1, o);
    if (c) return c;
  }
  const i = r.validators;
  if (i === null)
    return;
  const l = t === 0 ? e.join(La) : e.slice(t).join(La), u = i.length;
  for (let c = 0; c < u; c++) {
    const d = i[c];
    if (d.validator(l))
      return d.classGroupId;
  }
}, L_ = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), r = t.indexOf(":"), a = t.slice(0, r);
  return a ? j_ + a : void 0;
})(), R_ = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e;
  return V_(r, t);
}, V_ = (e, t) => {
  const r = qc();
  for (const a in e) {
    const n = e[a];
    Ti(n, r, a, t);
  }
  return r;
}, Ti = (e, t, r, a) => {
  const n = e.length;
  for (let o = 0; o < n; o++) {
    const i = e[o];
    F_(i, t, r, a);
  }
}, F_ = (e, t, r, a) => {
  if (typeof e == "string") {
    M_(e, t, r);
    return;
  }
  if (typeof e == "function") {
    B_(e, t, r, a);
    return;
  }
  Z_(e, t, r, a);
}, M_ = (e, t, r) => {
  const a = e === "" ? t : Qc(t, e);
  a.classGroupId = r;
}, B_ = (e, t, r, a) => {
  if (W_(e)) {
    Ti(e(a), t, r, a);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(C_(r, e));
}, Z_ = (e, t, r, a) => {
  const n = Object.entries(e), o = n.length;
  for (let i = 0; i < o; i++) {
    const [l, u] = n[i];
    Ti(u, Qc(t, l), r, a);
  }
}, Qc = (e, t) => {
  let r = e;
  const a = t.split(La), n = a.length;
  for (let o = 0; o < n; o++) {
    const i = a[o];
    let l = r.nextPart.get(i);
    l || (l = qc(), r.nextPart.set(i, l)), r = l;
  }
  return r;
}, W_ = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, G_ = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ Object.create(null), a = /* @__PURE__ */ Object.create(null);
  const n = (o, i) => {
    r[o] = i, t++, t > e && (t = 0, a = r, r = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(o) {
      let i = r[o];
      if (i !== void 0)
        return i;
      if ((i = a[o]) !== void 0)
        return n(o, i), i;
    },
    set(o, i) {
      o in r ? r[o] = i : n(o, i);
    }
  };
}, Yo = "!", nu = ":", H_ = [], ru = (e, t, r, a, n) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: r,
  maybePostfixModifierPosition: a,
  isExternal: n
}), K_ = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let a = (n) => {
    const o = [];
    let i = 0, l = 0, u = 0, c;
    const d = n.length;
    for (let _ = 0; _ < d; _++) {
      const k = n[_];
      if (i === 0 && l === 0) {
        if (k === nu) {
          o.push(n.slice(u, _)), u = _ + 1;
          continue;
        }
        if (k === "/") {
          c = _;
          continue;
        }
      }
      k === "[" ? i++ : k === "]" ? i-- : k === "(" ? l++ : k === ")" && l--;
    }
    const f = o.length === 0 ? n : n.slice(u);
    let m = f, p = !1;
    f.endsWith(Yo) ? (m = f.slice(0, -1), p = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      f.startsWith(Yo) && (m = f.slice(1), p = !0)
    );
    const v = c && c > u ? c - u : void 0;
    return ru(o, p, m, v);
  };
  if (t) {
    const n = t + nu, o = a;
    a = (i) => i.startsWith(n) ? o(i.slice(n.length)) : ru(H_, !1, i, void 0, !0);
  }
  if (r) {
    const n = a;
    a = (o) => r({
      className: o,
      parseClassName: n
    });
  }
  return a;
}, J_ = (e) => {
  const t = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((r, a) => {
    t.set(r, 1e6 + a);
  }), (r) => {
    const a = [];
    let n = [];
    for (let o = 0; o < r.length; o++) {
      const i = r[o], l = i[0] === "[", u = t.has(i);
      l || u ? (n.length > 0 && (n.sort(), a.push(...n), n = []), a.push(i)) : n.push(i);
    }
    return n.length > 0 && (n.sort(), a.push(...n)), a;
  };
}, Y_ = (e) => ({
  cache: G_(e.cacheSize),
  parseClassName: K_(e),
  sortModifiers: J_(e),
  ...U_(e)
}), q_ = /\s+/, X_ = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: a,
    getConflictingClassGroupIds: n,
    sortModifiers: o
  } = t, i = [], l = e.trim().split(q_);
  let u = "";
  for (let c = l.length - 1; c >= 0; c -= 1) {
    const d = l[c], {
      isExternal: f,
      modifiers: m,
      hasImportantModifier: p,
      baseClassName: v,
      maybePostfixModifierPosition: _
    } = r(d);
    if (f) {
      u = d + (u.length > 0 ? " " + u : u);
      continue;
    }
    let k = !!_, $ = a(k ? v.substring(0, _) : v);
    if (!$) {
      if (!k) {
        u = d + (u.length > 0 ? " " + u : u);
        continue;
      }
      if ($ = a(v), !$) {
        u = d + (u.length > 0 ? " " + u : u);
        continue;
      }
      k = !1;
    }
    const y = m.length === 0 ? "" : m.length === 1 ? m[0] : o(m).join(":"), x = p ? y + Yo : y, I = x + $;
    if (i.indexOf(I) > -1)
      continue;
    i.push(I);
    const E = n($, k);
    for (let N = 0; N < E.length; ++N) {
      const O = E[N];
      i.push(x + O);
    }
    u = d + (u.length > 0 ? " " + u : u);
  }
  return u;
}, Q_ = (...e) => {
  let t = 0, r, a, n = "";
  for (; t < e.length; )
    (r = e[t++]) && (a = ed(r)) && (n && (n += " "), n += a);
  return n;
}, ed = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let a = 0; a < e.length; a++)
    e[a] && (t = ed(e[a])) && (r && (r += " "), r += t);
  return r;
}, ey = (e, ...t) => {
  let r, a, n, o;
  const i = (u) => {
    const c = t.reduce((d, f) => f(d), e());
    return r = Y_(c), a = r.cache.get, n = r.cache.set, o = l, l(u);
  }, l = (u) => {
    const c = a(u);
    if (c)
      return c;
    const d = X_(u, r);
    return n(u, d), d;
  };
  return o = i, (...u) => o(Q_(...u));
}, ty = [], dt = (e) => {
  const t = (r) => r[e] || ty;
  return t.isThemeGetter = !0, t;
}, td = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, nd = /^\((?:(\w[\w-]*):)?(.+)\)$/i, ny = /^\d+\/\d+$/, ry = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ay = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, oy = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, iy = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ly = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, lr = (e) => ny.test(e), ze = (e) => !!e && !Number.isNaN(Number(e)), Nn = (e) => !!e && Number.isInteger(Number(e)), Uo = (e) => e.endsWith("%") && ze(e.slice(0, -1)), bn = (e) => ry.test(e), sy = () => !0, uy = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  ay.test(e) && !oy.test(e)
), rd = () => !1, cy = (e) => iy.test(e), dy = (e) => ly.test(e), fy = (e) => !ce(e) && !de(e), my = (e) => $r(e, id, rd), ce = (e) => td.test(e), Fn = (e) => $r(e, ld, uy), Lo = (e) => $r(e, by, ze), au = (e) => $r(e, ad, rd), py = (e) => $r(e, od, dy), ga = (e) => $r(e, sd, cy), de = (e) => nd.test(e), Tr = (e) => wr(e, ld), vy = (e) => wr(e, _y), ou = (e) => wr(e, ad), gy = (e) => wr(e, id), hy = (e) => wr(e, od), ha = (e) => wr(e, sd, !0), $r = (e, t, r) => {
  const a = td.exec(e);
  return a ? a[1] ? t(a[1]) : r(a[2]) : !1;
}, wr = (e, t, r = !1) => {
  const a = nd.exec(e);
  return a ? a[1] ? t(a[1]) : r : !1;
}, ad = (e) => e === "position" || e === "percentage", od = (e) => e === "image" || e === "url", id = (e) => e === "length" || e === "size" || e === "bg-size", ld = (e) => e === "length", by = (e) => e === "number", _y = (e) => e === "family-name", sd = (e) => e === "shadow", yy = () => {
  const e = dt("color"), t = dt("font"), r = dt("text"), a = dt("font-weight"), n = dt("tracking"), o = dt("leading"), i = dt("breakpoint"), l = dt("container"), u = dt("spacing"), c = dt("radius"), d = dt("shadow"), f = dt("inset-shadow"), m = dt("text-shadow"), p = dt("drop-shadow"), v = dt("blur"), _ = dt("perspective"), k = dt("aspect"), $ = dt("ease"), y = dt("animate"), x = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], I = () => [
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
  ], E = () => [...I(), de, ce], N = () => ["auto", "hidden", "clip", "visible", "scroll"], O = () => ["auto", "contain", "none"], C = () => [de, ce, u], U = () => [lr, "full", "auto", ...C()], Q = () => [Nn, "none", "subgrid", de, ce], re = () => ["auto", {
    span: ["full", Nn, de, ce]
  }, Nn, de, ce], ne = () => [Nn, "auto", de, ce], fe = () => ["auto", "min", "max", "fr", de, ce], X = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], ae = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], V = () => ["auto", ...C()], te = () => [lr, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...C()], J = () => [e, de, ce], Ce = () => [...I(), ou, au, {
    position: [de, ce]
  }], Ze = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], it = () => ["auto", "cover", "contain", gy, my, {
    size: [de, ce]
  }], Pt = () => [Uo, Tr, Fn], Ke = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    c,
    de,
    ce
  ], Pe = () => ["", ze, Tr, Fn], Et = () => ["solid", "dashed", "dotted", "double"], se = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ue = () => [ze, Uo, ou, au], Ee = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    v,
    de,
    ce
  ], Ne = () => ["none", ze, de, ce], rt = () => ["none", ze, de, ce], lt = () => [ze, de, ce], Je = () => [lr, "full", ...C()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [bn],
      breakpoint: [bn],
      color: [sy],
      container: [bn],
      "drop-shadow": [bn],
      ease: ["in", "out", "in-out"],
      font: [fy],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [bn],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [bn],
      shadow: [bn],
      spacing: ["px", ze],
      text: [bn],
      "text-shadow": [bn],
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
        aspect: ["auto", "square", lr, ce, de, k]
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
        columns: [ze, ce, de, l]
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
        object: E()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: N()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": N()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": N()
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
        inset: U()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": U()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": U()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: U()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: U()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: U()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: U()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: U()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: U()
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
        z: [Nn, "auto", de, ce]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [lr, "full", "auto", l, ...C()]
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
        flex: [ze, lr, "auto", "initial", "none", ce]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", ze, de, ce]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", ze, de, ce]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Nn, "first", "last", "none", de, ce]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": Q()
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
        "col-start": ne()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": ne()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": Q()
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
        "row-start": ne()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": ne()
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
        "auto-cols": fe()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": fe()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: C()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": C()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": C()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...X(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...ae(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...ae()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...X()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...ae(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...ae(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": X()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...ae(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...ae()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: C()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: C()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: C()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: C()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: C()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: C()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: C()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: C()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: C()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: V()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: V()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: V()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: V()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: V()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: V()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: V()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: V()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: V()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": C()
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
        "space-y": C()
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
        size: te()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [l, "screen", ...te()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          l,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...te()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          l,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [i]
          },
          ...te()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...te()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...te()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...te()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, Tr, Fn]
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
        font: [a, de, Lo]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Uo, ce]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [vy, ce, t]
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
        tracking: [n, de, ce]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [ze, "none", de, Lo]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          o,
          ...C()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", de, ce]
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
        list: ["disc", "decimal", "none", de, ce]
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
        placeholder: J()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: J()
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
        decoration: [...Et(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [ze, "from-font", "auto", de, Fn]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: J()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [ze, "auto", de, ce]
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
        indent: C()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", de, ce]
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
        content: ["none", de, ce]
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
        bg: Ce()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: Ze()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: it()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Nn, de, ce],
          radial: ["", de, ce],
          conic: [Nn, de, ce]
        }, hy, py]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: J()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: Pt()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: Pt()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: Pt()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: J()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: J()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: J()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: Ke()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": Ke()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": Ke()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": Ke()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": Ke()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": Ke()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": Ke()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": Ke()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": Ke()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": Ke()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": Ke()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": Ke()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": Ke()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": Ke()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": Ke()
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
        border: [...Et(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...Et(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: J()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": J()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": J()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": J()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": J()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": J()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": J()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": J()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": J()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: J()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...Et(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ze, de, ce]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", ze, Tr, Fn]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: J()
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
          ha,
          ga
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: J()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", f, ha, ga]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": J()
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
        ring: J()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [ze, Fn]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": J()
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
        "inset-ring": J()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", m, ha, ga]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": J()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [ze, de, ce]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...se(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": se()
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
        "mask-linear": [ze]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": ue()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": ue()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": J()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": J()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": ue()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": ue()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": J()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": J()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": ue()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": ue()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": J()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": J()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": ue()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": ue()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": J()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": J()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": ue()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": ue()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": J()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": J()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": ue()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": ue()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": J()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": J()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": ue()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": ue()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": J()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": J()
      }],
      "mask-image-radial": [{
        "mask-radial": [de, ce]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": ue()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": ue()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": J()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": J()
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
        "mask-radial-at": I()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [ze]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": ue()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": ue()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": J()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": J()
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
        mask: Ce()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: Ze()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: it()
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
        mask: ["none", de, ce]
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
          de,
          ce
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: Ee()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [ze, de, ce]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [ze, de, ce]
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
          p,
          ha,
          ga
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": J()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", ze, de, ce]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [ze, de, ce]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", ze, de, ce]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ze, de, ce]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", ze, de, ce]
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
          de,
          ce
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": Ee()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [ze, de, ce]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [ze, de, ce]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", ze, de, ce]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [ze, de, ce]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", ze, de, ce]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [ze, de, ce]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ze, de, ce]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", ze, de, ce]
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
        "border-spacing": C()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": C()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": C()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", de, ce]
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
        duration: [ze, "initial", de, ce]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", $, de, ce]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [ze, de, ce]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", y, de, ce]
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
        perspective: [_, de, ce]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": E()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: Ne()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Ne()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Ne()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Ne()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: rt()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": rt()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": rt()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": rt()
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
        skew: lt()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": lt()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": lt()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [de, ce, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: E()
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
        translate: Je()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Je()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Je()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Je()
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
        accent: J()
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
        caret: J()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", de, ce]
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
        "scroll-m": C()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": C()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": C()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": C()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": C()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": C()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": C()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": C()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": C()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": C()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": C()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": C()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": C()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": C()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": C()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": C()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": C()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": C()
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
        "will-change": ["auto", "scroll", "contents", "transform", de, ce]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...J()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [ze, Tr, Fn, Lo]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...J()]
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
}, $y = /* @__PURE__ */ ey(yy);
function G(...e) {
  return $y(Yc(e));
}
const wy = /* @__PURE__ */ D({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = He(e, t);
    return (o, i) => (g(), A(s(ki), K({ "data-slot": "sheet" }, s(n)), {
      default: h(() => [
        j(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function ud(e, t) {
  return jc() ? (Ih(e, t), !0) : !1;
}
const Ro = /* @__PURE__ */ new WeakMap(), ky = /* @__NO_SIDE_EFFECTS__ */ (...e) => {
  var t;
  const r = e[0], a = (t = Bt()) === null || t === void 0 ? void 0 : t.proxy, n = a ?? jc();
  if (n == null && !Uc()) throw new Error("injectLocal must be called in setup");
  return n && Ro.has(n) && r in Ro.get(n) ? Ro.get(n)[r] : vn(...e);
}, cd = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Sy = (e) => typeof e < "u", Iy = (e) => e != null, xy = Object.prototype.toString, Oy = (e) => xy.call(e) === "[object Object]", Yn = () => {
};
function Ey(...e) {
  if (e.length !== 1) return zn(...e);
  const t = e[0];
  return typeof t == "function" ? yi(xh(() => ({
    get: t,
    set: Yn
  }))) : me(t);
}
function Pi(e, t) {
  function r(...a) {
    return new Promise((n, o) => {
      Promise.resolve(e(() => t.apply(this, a), {
        fn: t,
        thisArg: this,
        args: a
      })).then(n).catch(o);
    });
  }
  return r;
}
const dd = (e) => e();
function Ny(e, t = {}) {
  let r, a, n = Yn;
  const o = (u) => {
    clearTimeout(u), n(), n = Yn;
  };
  let i;
  return (u) => {
    const c = M(e), d = M(t.maxWait);
    return r && o(r), c <= 0 || d !== void 0 && d <= 0 ? (a && (o(a), a = void 0), Promise.resolve(u())) : new Promise((f, m) => {
      n = t.rejectOnCancel ? m : f, i = u, d && !a && (a = setTimeout(() => {
        r && o(r), a = void 0, f(i());
      }, d)), r = setTimeout(() => {
        a && o(a), a = void 0, f(u());
      }, c);
    });
  };
}
function zy(...e) {
  let t = 0, r, a = !0, n = Yn, o, i, l, u, c;
  !dn(e[0]) && typeof e[0] == "object" ? { delay: i, trailing: l = !0, leading: u = !0, rejectOnCancel: c = !1 } = e[0] : [i, l = !0, u = !0, c = !1] = e;
  const d = () => {
    r && (clearTimeout(r), r = void 0, n(), n = Yn);
  };
  return (m) => {
    const p = M(i), v = Date.now() - t, _ = () => o = m();
    return d(), p <= 0 ? (t = Date.now(), _()) : (v > p ? (t = Date.now(), (u || !a) && _()) : l && (o = new Promise((k, $) => {
      n = c ? $ : k, r = setTimeout(() => {
        t = Date.now(), a = !0, k(_()), d();
      }, Math.max(0, p - v));
    })), !u && !r && (r = setTimeout(() => a = !0, p)), a = !1, o);
  };
}
function Ty(e = dd, t = {}) {
  const { initialState: r = "active" } = t, a = Ey(r === "active");
  function n() {
    a.value = !1;
  }
  function o() {
    a.value = !0;
  }
  const i = (...l) => {
    a.value && e(...l);
  };
  return {
    isActive: yi(a),
    pause: n,
    resume: o,
    eventFilter: i
  };
}
function iu(e) {
  return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function Pa(e) {
  return Array.isArray(e) ? e : [e];
}
function Py(e) {
  return Bt();
}
function Ay(e) {
  return dn(e) ? pn(new Proxy({}, {
    get(t, r, a) {
      return s(Reflect.get(e.value, r, a));
    },
    set(t, r, a) {
      return dn(e.value[r]) && !dn(a) ? e.value[r].value = a : e.value[r] = a, !0;
    },
    deleteProperty(t, r) {
      return Reflect.deleteProperty(e.value, r);
    },
    has(t, r) {
      return Reflect.has(e.value, r);
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
  })) : pn(e);
}
function Dy(e) {
  return Ay(W(e));
}
function ve(e, ...t) {
  const r = t.flat(), a = r[0];
  return Dy(() => Object.fromEntries(typeof a == "function" ? Object.entries(ja(e)).filter(([n, o]) => !a(M(o), n)) : Object.entries(ja(e)).filter((n) => !r.includes(n[0]))));
}
// @__NO_SIDE_EFFECTS__
function Cy(e, t = 200, r = {}) {
  return Pi(Ny(t, r), e);
}
// @__NO_SIDE_EFFECTS__
function jy(e, t = 200, r = !1, a = !0, n = !1) {
  return Pi(zy(t, r, a, n), e);
}
function Uy(e, t, r = {}) {
  const { eventFilter: a = dd, ...n } = r;
  return Ue(e, Pi(a, t), n);
}
function Ly(e, t, r = {}) {
  const { eventFilter: a, initialState: n = "active", ...o } = r, { eventFilter: i, pause: l, resume: u, isActive: c } = Ty(a, { initialState: n });
  return {
    stop: Uy(e, t, {
      ...o,
      eventFilter: i
    }),
    pause: l,
    resume: u,
    isActive: c
  };
}
const Ry = Ly;
function fd(e, t = !0, r) {
  Py() ? An(e, r) : t ? e() : xt(e);
}
const Vy = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[T\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/i, Fy = /[YMDHhms]o|\[([^\]]+)\]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|z{1,4}|SSS/g;
function My(e, t, r, a) {
  let n = e < 12 ? "AM" : "PM";
  return a && (n = n.split("").reduce((o, i) => o += `${i}.`, "")), r ? n.toLowerCase() : n;
}
function Mn(e) {
  const t = [
    "th",
    "st",
    "nd",
    "rd"
  ], r = e % 100;
  return e + (t[(r - 20) % 10] || t[r] || t[0]);
}
function By(e, t, r = {}) {
  var a;
  const n = e.getFullYear(), o = e.getMonth(), i = e.getDate(), l = e.getHours(), u = e.getMinutes(), c = e.getSeconds(), d = e.getMilliseconds(), f = e.getDay(), m = (a = r.customMeridiem) !== null && a !== void 0 ? a : My, p = (_) => {
    var k;
    return (k = _.split(" ")[1]) !== null && k !== void 0 ? k : "";
  }, v = {
    Yo: () => Mn(n),
    YY: () => String(n).slice(-2),
    YYYY: () => n,
    M: () => o + 1,
    Mo: () => Mn(o + 1),
    MM: () => `${o + 1}`.padStart(2, "0"),
    MMM: () => e.toLocaleDateString(M(r.locales), { month: "short" }),
    MMMM: () => e.toLocaleDateString(M(r.locales), { month: "long" }),
    D: () => String(i),
    Do: () => Mn(i),
    DD: () => `${i}`.padStart(2, "0"),
    H: () => String(l),
    Ho: () => Mn(l),
    HH: () => `${l}`.padStart(2, "0"),
    h: () => `${l % 12 || 12}`.padStart(1, "0"),
    ho: () => Mn(l % 12 || 12),
    hh: () => `${l % 12 || 12}`.padStart(2, "0"),
    m: () => String(u),
    mo: () => Mn(u),
    mm: () => `${u}`.padStart(2, "0"),
    s: () => String(c),
    so: () => Mn(c),
    ss: () => `${c}`.padStart(2, "0"),
    SSS: () => `${d}`.padStart(3, "0"),
    d: () => f,
    dd: () => e.toLocaleDateString(M(r.locales), { weekday: "narrow" }),
    ddd: () => e.toLocaleDateString(M(r.locales), { weekday: "short" }),
    dddd: () => e.toLocaleDateString(M(r.locales), { weekday: "long" }),
    A: () => m(l, u),
    AA: () => m(l, u, !1, !0),
    a: () => m(l, u, !0),
    aa: () => m(l, u, !0, !0),
    z: () => p(e.toLocaleDateString(M(r.locales), { timeZoneName: "shortOffset" })),
    zz: () => p(e.toLocaleDateString(M(r.locales), { timeZoneName: "shortOffset" })),
    zzz: () => p(e.toLocaleDateString(M(r.locales), { timeZoneName: "shortOffset" })),
    zzzz: () => p(e.toLocaleDateString(M(r.locales), { timeZoneName: "longOffset" }))
  };
  return t.replace(Fy, (_, k) => {
    var $, y;
    return ($ = k ?? ((y = v[_]) === null || y === void 0 ? void 0 : y.call(v))) !== null && $ !== void 0 ? $ : _;
  });
}
function Zy(e) {
  if (e === null) return /* @__PURE__ */ new Date(NaN);
  if (e === void 0) return /* @__PURE__ */ new Date();
  if (e instanceof Date) return new Date(e);
  if (typeof e == "string" && !/Z$/i.test(e)) {
    const t = e.match(Vy);
    if (t) {
      const r = t[2] - 1 || 0, a = (t[7] || "0").substring(0, 3);
      return new Date(t[1], r, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, a);
    }
  }
  return new Date(e);
}
// @__NO_SIDE_EFFECTS__
function Wy(e, t = "HH:mm:ss", r = {}) {
  return W(() => By(Zy(M(e)), M(t), r));
}
function Gy(e, t, r) {
  return Ue(e, t, {
    ...r,
    immediate: !0
  });
}
const cn = cd ? window : void 0, md = cd ? window.document : void 0;
function Mr(e) {
  var t;
  const r = M(e);
  return (t = r?.$el) !== null && t !== void 0 ? t : r;
}
function kn(...e) {
  const t = (a, n, o, i) => (a.addEventListener(n, o, i), () => a.removeEventListener(n, o, i)), r = W(() => {
    const a = Pa(M(e[0])).filter((n) => n != null);
    return a.every((n) => typeof n != "string") ? a : void 0;
  });
  return Gy(() => {
    var a, n;
    return [
      (a = (n = r.value) === null || n === void 0 ? void 0 : n.map((o) => Mr(o))) !== null && a !== void 0 ? a : [cn].filter((o) => o != null),
      Pa(M(r.value ? e[1] : e[0])),
      Pa(s(r.value ? e[2] : e[1])),
      M(r.value ? e[3] : e[2])
    ];
  }, ([a, n, o, i], l, u) => {
    if (!a?.length || !n?.length || !o?.length) return;
    const c = Oy(i) ? { ...i } : i, d = a.flatMap((f) => n.flatMap((m) => o.map((p) => t(f, m, p, c))));
    u(() => {
      d.forEach((f) => f());
    });
  }, { flush: "post" });
}
// @__NO_SIDE_EFFECTS__
function Hy() {
  const e = Ut(!1), t = Bt();
  return t && An(() => {
    e.value = !0;
  }, t), e;
}
// @__NO_SIDE_EFFECTS__
function Ai(e) {
  const t = /* @__PURE__ */ Hy();
  return W(() => (t.value, !!e()));
}
function Ky(e, t, r = {}) {
  const { window: a = cn, ...n } = r;
  let o;
  const i = /* @__PURE__ */ Ai(() => a && "MutationObserver" in a), l = () => {
    o && (o.disconnect(), o = void 0);
  }, u = Ue(W(() => {
    const f = Pa(M(e)).map(Mr).filter(Iy);
    return new Set(f);
  }), (f) => {
    l(), i.value && f.size && (o = new MutationObserver(t), f.forEach((m) => o.observe(m, n)));
  }, {
    immediate: !0,
    flush: "post"
  }), c = () => o?.takeRecords(), d = () => {
    u(), l();
  };
  return ud(d), {
    isSupported: i,
    stop: d,
    takeRecords: c
  };
}
const Jy = Symbol("vueuse-ssr-width");
// @__NO_SIDE_EFFECTS__
function Yy() {
  const e = Uc() ? /* @__PURE__ */ ky(Jy, null) : null;
  return typeof e == "number" ? e : void 0;
}
function qy(e, t = {}) {
  const { window: r = cn, ssrWidth: a = /* @__PURE__ */ Yy() } = t, n = /* @__PURE__ */ Ai(() => r && "matchMedia" in r && typeof r.matchMedia == "function"), o = Ut(typeof a == "number"), i = Ut(), l = Ut(!1), u = (c) => {
    l.value = c.matches;
  };
  return nr(() => {
    if (o.value) {
      o.value = !n.value, l.value = M(e).split(",").some((c) => {
        const d = c.includes("not all"), f = c.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), m = c.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let p = !!(f || m);
        return f && p && (p = a >= iu(f[1])), m && p && (p = a <= iu(m[1])), d ? !p : p;
      });
      return;
    }
    n.value && (i.value = r.matchMedia(M(e)), l.value = i.value.matches);
  }), kn(i, "change", u, { passive: !0 }), W(() => l.value);
}
function Xy(e) {
  return JSON.parse(JSON.stringify(e));
}
const ba = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, _a = "__vueuse_ssr_handlers__", Qy = /* @__PURE__ */ e$();
function e$() {
  return _a in ba || (ba[_a] = ba[_a] || {}), ba[_a];
}
function t$(e, t) {
  return Qy[e] || t;
}
function n$(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const r$ = {
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
}, lu = "vueuse-storage";
function a$(e, t, r, a = {}) {
  var n;
  const { flush: o = "pre", deep: i = !0, listenToStorageChanges: l = !0, writeDefaults: u = !0, mergeDefaults: c = !1, shallow: d, window: f = cn, eventFilter: m, onError: p = (X) => {
    console.error(X);
  }, initOnMounted: v } = a, _ = (d ? Ut : me)(typeof t == "function" ? t() : t), k = W(() => M(e));
  if (!r) try {
    r = t$("getDefaultStorage", () => cn?.localStorage)();
  } catch (X) {
    p(X);
  }
  if (!r) return _;
  const $ = M(t), y = n$($), x = (n = a.serializer) !== null && n !== void 0 ? n : r$[y], { pause: I, resume: E } = Ry(_, (X) => Q(X), {
    flush: o,
    deep: i,
    eventFilter: m
  });
  Ue(k, () => ne(), { flush: o });
  let N = !1;
  const O = (X) => {
    v && !N || ne(X);
  }, C = (X) => {
    v && !N || fe(X);
  };
  f && l && (r instanceof Storage ? kn(f, "storage", O, { passive: !0 }) : kn(f, lu, C)), v ? fd(() => {
    N = !0, ne();
  }) : ne();
  function U(X, ae) {
    if (f) {
      const V = {
        key: k.value,
        oldValue: X,
        newValue: ae,
        storageArea: r
      };
      f.dispatchEvent(r instanceof Storage ? new StorageEvent("storage", V) : new CustomEvent(lu, { detail: V }));
    }
  }
  function Q(X) {
    try {
      const ae = r.getItem(k.value);
      if (X == null)
        U(ae, null), r.removeItem(k.value);
      else {
        const V = x.write(X);
        ae !== V && (r.setItem(k.value, V), U(ae, V));
      }
    } catch (ae) {
      p(ae);
    }
  }
  function re(X) {
    const ae = X ? X.newValue : r.getItem(k.value);
    if (ae == null)
      return u && $ != null && r.setItem(k.value, x.write($)), $;
    if (!X && c) {
      const V = x.read(ae);
      return typeof c == "function" ? c(V, $) : y === "object" && !Array.isArray(V) ? {
        ...$,
        ...V
      } : V;
    } else return typeof ae != "string" ? ae : x.read(ae);
  }
  function ne(X) {
    if (!(X && X.storageArea !== r)) {
      if (X && X.key == null) {
        _.value = $;
        return;
      }
      if (!(X && X.key !== k.value)) {
        I();
        try {
          const ae = x.write(_.value);
          (X === void 0 || X?.newValue !== ae) && (_.value = re(X));
        } catch (ae) {
          p(ae);
        } finally {
          X ? xt(E) : E();
        }
      }
    }
  }
  function fe(X) {
    ne(X.detail);
  }
  return _;
}
function o$(e, t, r = {}) {
  const { window: a = cn, ...n } = r;
  let o;
  const i = /* @__PURE__ */ Ai(() => a && "ResizeObserver" in a), l = () => {
    o && (o.disconnect(), o = void 0);
  }, u = Ue(W(() => {
    const d = M(e);
    return Array.isArray(d) ? d.map((f) => Mr(f)) : [Mr(d)];
  }), (d) => {
    if (l(), i.value && a) {
      o = new ResizeObserver(t);
      for (const f of d) f && o.observe(f, n);
    }
  }, {
    immediate: !0,
    flush: "post"
  }), c = () => {
    l(), u();
  };
  return ud(c), {
    isSupported: i,
    stop: c
  };
}
const su = 1;
function i$(e, t = {}) {
  const { throttle: r = 0, idle: a = 200, onStop: n = Yn, onScroll: o = Yn, offset: i = {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  }, observe: l = { mutation: !1 }, eventListenerOptions: u = {
    capture: !1,
    passive: !0
  }, behavior: c = "auto", window: d = cn, onError: f = (U) => {
    console.error(U);
  } } = t, m = typeof l == "boolean" ? { mutation: l } : l, p = Ut(0), v = Ut(0), _ = W({
    get() {
      return p.value;
    },
    set(U) {
      $(U, void 0);
    }
  }), k = W({
    get() {
      return v.value;
    },
    set(U) {
      $(void 0, U);
    }
  });
  function $(U, Q) {
    var re, ne, fe, X;
    if (!d) return;
    const ae = M(e);
    if (!ae) return;
    (re = ae instanceof Document ? d.document.body : ae) === null || re === void 0 || re.scrollTo({
      top: (ne = M(Q)) !== null && ne !== void 0 ? ne : k.value,
      left: (fe = M(U)) !== null && fe !== void 0 ? fe : _.value,
      behavior: M(c)
    });
    const V = (ae == null || (X = ae.document) === null || X === void 0 ? void 0 : X.documentElement) || ae?.documentElement || ae;
    _ != null && (p.value = V.scrollLeft), k != null && (v.value = V.scrollTop);
  }
  const y = Ut(!1), x = pn({
    left: !0,
    right: !1,
    top: !0,
    bottom: !1
  }), I = pn({
    left: !1,
    right: !1,
    top: !1,
    bottom: !1
  }), E = (U) => {
    y.value && (y.value = !1, I.left = !1, I.right = !1, I.top = !1, I.bottom = !1, n(U));
  }, N = /* @__PURE__ */ Cy(E, r + a), O = (U) => {
    var Q;
    if (!d) return;
    const re = (U == null || (Q = U.document) === null || Q === void 0 ? void 0 : Q.documentElement) || U?.documentElement || Mr(U), { display: ne, flexDirection: fe, direction: X } = d.getComputedStyle(re), ae = X === "rtl" ? -1 : 1, V = re.scrollLeft;
    I.left = V < p.value, I.right = V > p.value;
    const te = Math.abs(V * ae) <= (i.left || 0), J = Math.abs(V * ae) + re.clientWidth >= re.scrollWidth - (i.right || 0) - su;
    ne === "flex" && fe === "row-reverse" ? (x.left = J, x.right = te) : (x.left = te, x.right = J), p.value = V;
    let Ce = re.scrollTop;
    U === d.document && !Ce && (Ce = d.document.body.scrollTop), I.top = Ce < v.value, I.bottom = Ce > v.value;
    const Ze = Math.abs(Ce) <= (i.top || 0), it = Math.abs(Ce) + re.clientHeight >= re.scrollHeight - (i.bottom || 0) - su;
    ne === "flex" && fe === "column-reverse" ? (x.top = it, x.bottom = Ze) : (x.top = Ze, x.bottom = it), v.value = Ce;
  }, C = (U) => {
    var Q;
    d && (O((Q = U.target.documentElement) !== null && Q !== void 0 ? Q : U.target), y.value = !0, N(U), o(U));
  };
  return kn(e, "scroll", r ? /* @__PURE__ */ jy(C, r, !0, !1) : C, u), fd(() => {
    try {
      const U = M(e);
      if (!U) return;
      O(U);
    } catch (U) {
      f(U);
    }
  }), m?.mutation && e != null && e !== d && e !== document && Ky(e, () => {
    const U = M(e);
    U && O(U);
  }, {
    attributes: !0,
    childList: !0,
    subtree: !0
  }), kn(e, "scrollend", E, u), {
    x: _,
    y: k,
    isScrolling: y,
    arrivedState: x,
    directions: I,
    measure() {
      const U = M(e);
      d && U && O(U);
    }
  };
}
const l$ = [
  "mousedown",
  "mouseup",
  "keydown",
  "keyup"
];
// @__NO_SIDE_EFFECTS__
function s$(e, t = {}) {
  const { events: r = l$, document: a = md, initial: n = null } = t, o = Ut(n);
  return a && r.forEach((i) => {
    kn(a, i, (l) => {
      typeof l.getModifierState == "function" && (o.value = l.getModifierState(e));
    }, { passive: !0 });
  }), o;
}
function u$(e, t, r = {}) {
  const { window: a = cn } = r;
  return a$(e, t, a?.sessionStorage, r);
}
// @__NO_SIDE_EFFECTS__
function Di(e, t, r, a = {}) {
  var n, o;
  const { clone: i = !1, passive: l = !1, eventName: u, deep: c = !1, defaultValue: d, shouldEmit: f } = a, m = Bt(), p = r || m?.emit || (m == null || (n = m.$emit) === null || n === void 0 ? void 0 : n.bind(m)) || (m == null || (o = m.proxy) === null || o === void 0 || (o = o.$emit) === null || o === void 0 ? void 0 : o.bind(m?.proxy));
  let v = u;
  t || (t = "modelValue"), v = v || `update:${t.toString()}`;
  const _ = (y) => i ? typeof i == "function" ? i(y) : Xy(y) : y, k = () => Sy(e[t]) ? _(e[t]) : d, $ = (y) => {
    f ? f(y) && p(v, y) : p(v, y);
  };
  if (l) {
    const y = me(k());
    let x = !1;
    return Ue(() => e[t], (I) => {
      x || (x = !0, y.value = _(I), xt(() => x = !1));
    }), Ue(y, (I) => {
      !x && (I !== e[t] || c) && $(I);
    }, { deep: c }), y;
  } else return W({
    get() {
      return k();
    },
    set(y) {
      $(y);
    }
  });
}
const c$ = /* @__PURE__ */ D({
  __name: "SheetOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = ve(t, "class");
    return (a, n) => (g(), A(s(Si), K({
      "data-slot": "sheet-overlay",
      class: s(G)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80", t.class)
    }, s(r)), {
      default: h(() => [
        j(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), d$ = /* @__PURE__ */ D({
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
    const r = e, a = t, n = ve(r, "class", "side"), o = He(n, a);
    return (i, l) => (g(), A(s(Ii), null, {
      default: h(() => [
        w(c$),
        w(s(xi), K({
          "data-slot": "sheet-content",
          class: s(G)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
            e.side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
            e.side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
            e.side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
            e.side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
            r.class
          )
        }, { ...s(o), ...i.$attrs }), {
          default: h(() => [
            j(i.$slots, "default"),
            w(s(Mc), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
              default: h(() => [
                w(s(Qr), { class: "size-4" }),
                l[0] || (l[0] = ie("span", { class: "sr-only" }, "Close", -1))
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
}), f$ = /* @__PURE__ */ D({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = ve(t, "class");
    return (a, n) => (g(), A(s(Oi), K({
      "data-slot": "sheet-description",
      class: s(G)("text-muted-foreground text-sm", t.class)
    }, s(r)), {
      default: h(() => [
        j(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), m$ = /* @__PURE__ */ D({
  __name: "SheetHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), F("div", {
      "data-slot": "sheet-header",
      class: be(s(G)("flex flex-col gap-1.5 p-4", t.class))
    }, [
      j(r.$slots, "default")
    ], 2));
  }
}), p$ = /* @__PURE__ */ D({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = ve(t, "class");
    return (a, n) => (g(), A(s(Ei), K({
      "data-slot": "sheet-title",
      class: s(G)("text-foreground font-semibold", t.class)
    }, s(r)), {
      default: h(() => [
        j(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), uu = "sidebar_state", v$ = 3600 * 24 * 7, g$ = "16rem", h$ = "18rem", b$ = "3rem", _$ = "b", [Ci, y$] = Ni("Sidebar"), $$ = { class: "flex h-full w-full flex-col" }, w$ = ["data-state", "data-collapsible", "data-variant", "data-side"], k$ = {
  "data-sidebar": "sidebar",
  class: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, S$ = /* @__PURE__ */ D({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: {}
  },
  setup(e) {
    const t = e, { isMobile: r, state: a, openMobile: n, setOpenMobile: o } = Ci();
    return (i, l) => e.collapsible === "none" ? (g(), F("div", K({
      key: 0,
      "data-slot": "sidebar",
      class: s(G)("bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col", t.class)
    }, i.$attrs), [
      j(i.$slots, "default")
    ], 16)) : s(r) ? (g(), A(s(wy), K({
      key: 1,
      open: s(n)
    }, i.$attrs, { "onUpdate:open": s(o) }), {
      default: h(() => [
        w(s(d$), {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar",
          "data-mobile": "true",
          side: e.side,
          class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
          style: Lc({
            "--sidebar-width": s(h$)
          })
        }, {
          default: h(() => [
            w(m$, { class: "sr-only" }, {
              default: h(() => [
                w(p$, null, {
                  default: h(() => [...l[0] || (l[0] = [
                    he("Sidebar", -1)
                  ])]),
                  _: 1
                }),
                w(f$, null, {
                  default: h(() => [...l[1] || (l[1] = [
                    he("Displays the mobile sidebar.", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            ie("div", $$, [
              j(i.$slots, "default")
            ])
          ]),
          _: 3
        }, 8, ["side", "style"])
      ]),
      _: 3
    }, 16, ["open", "onUpdate:open"])) : (g(), F("div", {
      key: 2,
      class: "group peer text-sidebar-foreground hidden md:block",
      "data-slot": "sidebar",
      "data-state": s(a),
      "data-collapsible": s(a) === "collapsed" ? e.collapsible : "",
      "data-variant": e.variant,
      "data-side": e.side
    }, [
      ie("div", {
        class: be(s(G)(
          "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
          "group-data-[collapsible=offcanvas]:w-0",
          "group-data-[side=right]:rotate-180",
          e.variant === "floating" || e.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
        ))
      }, null, 2),
      ie("div", K({
        class: s(G)(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          e.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          e.variant === "floating" || e.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          t.class
        )
      }, i.$attrs), [
        ie("div", k$, [
          j(i.$slots, "default")
        ])
      ], 16)
    ], 8, w$));
  }
}), I$ = /* @__PURE__ */ D({
  __name: "SidebarContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), F("div", {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      class: be(s(G)("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", t.class))
    }, [
      j(r.$slots, "default")
    ], 2));
  }
}), x$ = /* @__PURE__ */ D({
  __name: "SidebarFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), F("div", {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      class: be(s(G)("flex flex-col gap-2 p-2", t.class))
    }, [
      j(r.$slots, "default")
    ], 2));
  }
}), O$ = /* @__PURE__ */ D({
  __name: "SidebarGroup",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), F("div", {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      class: be(s(G)("relative flex w-full min-w-0 flex-col p-2", t.class))
    }, [
      j(r.$slots, "default")
    ], 2));
  }
}), E$ = /* @__PURE__ */ D({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), A(s(Xr), {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      as: e.as,
      "as-child": e.asChild,
      class: be(s(G)(
        "text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        t.class
      ))
    }, {
      default: h(() => [
        j(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), N$ = /* @__PURE__ */ D({
  __name: "SidebarHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), F("div", {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      class: be(s(G)("flex flex-col gap-2 p-2", t.class))
    }, [
      j(r.$slots, "default")
    ], 2));
  }
}), Tn = /* @__PURE__ */ D({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, n = /* @__PURE__ */ Di(r, "modelValue", t, {
      passive: !0,
      defaultValue: r.defaultValue
    });
    return (o, i) => $i((g(), F("input", {
      "onUpdate:modelValue": i[0] || (i[0] = (l) => dn(n) ? n.value = l : null),
      "data-slot": "input",
      class: be(s(G)(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        r.class
      ))
    }, null, 2)), [
      [Rc, s(n)]
    ]);
  }
}), z$ = /* @__PURE__ */ D({
  __name: "SidebarMenu",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), F("ul", {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      class: be(s(G)("flex w-full min-w-0 flex-col gap-1", t.class))
    }, [
      j(r.$slots, "default")
    ], 2));
  }
}), T$ = /* @__PURE__ */ D({
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
    const n = He(e, t);
    return (o, i) => (g(), A(s(Uh), K({ "data-slot": "tooltip" }, s(n)), {
      default: h(() => [
        j(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), P$ = /* @__PURE__ */ D({
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
    const r = e, a = t, n = ve(r, "class"), o = He(n, a);
    return (i, l) => (g(), A(s(Lh), null, {
      default: h(() => [
        w(s(Rh), K({ "data-slot": "tooltip-content" }, { ...s(o), ...i.$attrs }, {
          class: s(G)("bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance", r.class)
        }), {
          default: h(() => [
            j(i.$slots, "default"),
            w(s(Vh), { class: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), A$ = /* @__PURE__ */ D({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), A(s(Fh), K({ "data-slot": "tooltip-trigger" }, t), {
      default: h(() => [
        j(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cu = /* @__PURE__ */ D({
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
    return (r, a) => (g(), A(s(Xr), K({
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": e.size,
      "data-active": e.isActive,
      class: s(G)(s(R$)({ variant: e.variant, size: e.size }), t.class),
      as: e.as,
      "as-child": e.asChild
    }, r.$attrs), {
      default: h(() => [
        j(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), du = /* @__PURE__ */ D({
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
    const t = e, { isMobile: r, state: a } = Ci(), n = ve(t, "tooltip");
    return (o, i) => e.tooltip ? (g(), A(s(T$), { key: 1 }, {
      default: h(() => [
        w(s(A$), { "as-child": "" }, {
          default: h(() => [
            w(cu, zt(Lt({ ...s(n), ...o.$attrs })), {
              default: h(() => [
                j(o.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        w(s(P$), {
          side: "right",
          align: "center",
          hidden: s(a) !== "collapsed" || s(r)
        }, {
          default: h(() => [
            typeof e.tooltip == "string" ? (g(), F(je, { key: 0 }, [
              he(oe(e.tooltip), 1)
            ], 64)) : (g(), A(mt(e.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (g(), A(cu, zt(K({ key: 0 }, { ...s(n), ...o.$attrs })), {
      default: h(() => [
        j(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fu = /* @__PURE__ */ D({
  __name: "SidebarMenuItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), F("li", {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      class: be(s(G)("group/menu-item relative", t.class))
    }, [
      j(r.$slots, "default")
    ], 2));
  }
}), D$ = /* @__PURE__ */ D({
  __name: "SidebarMenuSub",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), F("ul", {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-badge",
      class: be(s(G)(
        "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        t.class
      ))
    }, [
      j(r.$slots, "default")
    ], 2));
  }
}), C$ = /* @__PURE__ */ D({
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
    return (r, a) => (g(), A(s(Xr), {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      as: e.as,
      "as-child": e.asChild,
      "data-size": e.size,
      "data-active": e.isActive,
      class: be(s(G)(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        e.size === "sm" && "text-xs",
        e.size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        t.class
      ))
    }, {
      default: h(() => [
        j(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-size", "data-active", "class"]));
  }
}), j$ = /* @__PURE__ */ D({
  __name: "SidebarMenuSubItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), F("li", {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      class: be(s(G)("group/menu-sub-item relative", t.class))
    }, [
      j(r.$slots, "default")
    ], 2));
  }
});
md?.cookie.includes(`${uu}=false`);
const U$ = /* @__PURE__ */ D({
  __name: "SidebarRail",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { toggleSidebar: r } = Ci();
    return (a, n) => (g(), F("button", {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabindex: -1,
      title: "Toggle Sidebar",
      class: be(s(G)(
        "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex",
        "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        t.class
      )),
      onClick: n[0] || (n[0] = //@ts-ignore
      (...o) => s(r) && s(r)(...o))
    }, [
      j(a.$slots, "default")
    ], 2));
  }
}), L$ = /* @__PURE__ */ D({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = ve(t, "class");
    return (a, n) => (g(), A(s(Bh), K({ "data-slot": "separator-root" }, s(r), {
      class: s(G)(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        t.class
      )
    }), null, 16, ["class"]));
  }
}), pt = /* @__PURE__ */ D({
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
    return (r, a) => (g(), A(s(Xr), {
      "data-slot": "button",
      as: e.as,
      "as-child": e.asChild,
      class: be(s(G)(s(an)({ variant: e.variant, size: e.size }), t.class))
    }, {
      default: h(() => [
        j(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), an = rr(
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
), R$ = rr(
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
), V$ = {
  key: 0,
  class: "font-semibold text-sm mt-4 ml-2 truncate"
}, F$ = { key: 1 }, $T = /* @__PURE__ */ D({
  __name: "AppSidebar",
  props: {
    config: {},
    currentPath: { default: "" }
  },
  setup(e) {
    function t(r, a) {
      return !!(r.url === a || r.items?.some((n) => n.url === a));
    }
    return (r, a) => (g(), A(s(S$), {
      collapsible: e.config.collapsible || "icon"
    }, {
      default: h(() => [
        w(s(N$), null, {
          default: h(() => [
            j(r.$slots, "header", {}, () => [
              e.config.title ? (g(), F("div", V$, oe(e.config.title), 1)) : pe("", !0)
            ])
          ]),
          _: 3
        }),
        w(s(I$), null, {
          default: h(() => [
            w(s(z$), null, {
              default: h(() => [
                (g(!0), F(je, null, Ge(e.config.menuGroups, (n, o) => (g(), A(s(O$), {
                  key: o,
                  class: "!pb-0"
                }, {
                  default: h(() => [
                    n.title ? (g(), A(s(E$), { key: 0 }, {
                      default: h(() => [
                        he(oe(n.title), 1)
                      ]),
                      _: 2
                    }, 1024)) : pe("", !0),
                    (g(!0), F(je, null, Ge(n.items, (i) => (g(), F(je, {
                      key: i.title
                    }, [
                      i.items?.length ? (g(), A(s(T_), {
                        key: 0,
                        "as-child": "",
                        "default-open": t(i, e.currentPath),
                        class: "group/collapsible"
                      }, {
                        default: h(() => [
                          w(s(fu), null, {
                            default: h(() => [
                              w(s(A_), { "as-child": "" }, {
                                default: h(() => [
                                  w(s(du), {
                                    tooltip: i.title,
                                    disabled: i.disabled
                                  }, {
                                    default: h(() => [
                                      i.icon ? (g(), A(mt(i.icon), { key: 0 })) : pe("", !0),
                                      i.url ? (g(), A(s(jo), {
                                        key: 2,
                                        to: i.url
                                      }, {
                                        default: h(() => [
                                          ie("span", null, oe(i.title), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["to"])) : (g(), F("span", F$, oe(i.title), 1)),
                                      w(s(Hn), { class: "ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" })
                                    ]),
                                    _: 2
                                  }, 1032, ["tooltip", "disabled"])
                                ]),
                                _: 2
                              }, 1024),
                              w(s(P_), null, {
                                default: h(() => [
                                  w(s(D$), null, {
                                    default: h(() => [
                                      (g(!0), F(je, null, Ge(i.items, (l) => (g(), A(s(j$), {
                                        key: l.title
                                      }, {
                                        default: h(() => [
                                          w(s(C$), {
                                            "as-child": "",
                                            "is-active": e.currentPath === l.url,
                                            disabled: l.disabled
                                          }, {
                                            default: h(() => [
                                              w(s(jo), {
                                                to: l.url
                                              }, {
                                                default: h(() => [
                                                  ie("span", null, oe(l.title), 1)
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
                      }, 1032, ["default-open"])) : (g(), A(s(fu), { key: 1 }, {
                        default: h(() => [
                          w(s(du), {
                            "as-child": "",
                            "is-active": e.currentPath === i.url,
                            disabled: i.disabled
                          }, {
                            default: h(() => [
                              w(s(jo), {
                                to: i.url
                              }, {
                                default: h(() => [
                                  i.icon ? (g(), A(mt(i.icon), { key: 0 })) : pe("", !0),
                                  ie("span", null, oe(i.title), 1)
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
        w(s(x$), null, {
          default: h(() => [
            j(r.$slots, "footer")
          ]),
          _: 3
        }),
        w(s(U$))
      ]),
      _: 3
    }, 8, ["collapsible"]));
  }
}), M$ = { class: "flex-1 flex gap-2 items-center [&_[data-placeholder]]:text-muted-foreground [&_[data-placeholder]]:truncate min-w-0" }, pd = /* @__PURE__ */ D({
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
    return (r, a) => (g(), A(s(Xr), {
      as: e.as,
      class: be(s(G)(s(an)({ variant: e.variant, size: e.size }), t.class))
    }, {
      default: h(() => [
        ie("span", M$, [
          j(r.$slots, "default")
        ]),
        w(s(Gn), { class: "!size-3 !-mx-1" })
      ]),
      _: 3
    }, 8, ["as", "class"]));
  }
}), qo = (e, t, r = (a) => a) => e.reduce((a, n) => (a[t(n)] = r(n), a), {}), B$ = (e, t) => {
  const r = e.reduce((a, n) => {
    const o = n;
    return a[o] || (a[o] = n), a;
  }, {});
  return Object.values(r);
}, Z$ = (e, t, r, a) => {
  if (!e && !t)
    return [];
  if (!e)
    return [t];
  if (!t)
    return [...e];
  const n = (i) => i === t;
  return e.find(n) ? e.filter((i, l) => !n(i)) : [...e, t];
}, mu = (e, t, r = (a) => a) => {
  if (!e?.length && !t?.length)
    return [];
  if (e?.length === void 0)
    return [...t];
  if (!t?.length)
    return [...e];
  const a = t.reduce((n, o) => (n[r(o)] = !0, n), {});
  return e.filter((n) => !a[r(n)]);
}, W$ = (e) => {
  if (!e || e.length === 0)
    return "";
  const t = e.toLowerCase();
  return t.substring(0, 1).toUpperCase() + t.substring(1, t.length);
}, G$ = (e) => e ? e.split(/(?=[A-Z])|[\.\-\s_]/).map((t) => t.trim()).filter((t) => !!t).map((t) => W$(t.toLowerCase())).join(" ") : "";
function gn(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const pu = {};
function H$(e) {
  pu[e] || (pu[e] = !0, gn(e));
}
const Sn = typeof window < "u";
let Mt, qn;
if (process.env.NODE_ENV !== "production") {
  const e = Sn && window.performance;
  e && e.mark && e.measure && e.clearMarks && // @ts-ignore browser compat
  e.clearMeasures && (Mt = (t) => {
    e.mark(t);
  }, qn = (t, r, a) => {
    e.measure(t, r, a), e.clearMarks(r), e.clearMarks(a);
  });
}
const K$ = /\{([0-9a-zA-Z]+)\}/g;
function io(e, ...t) {
  return t.length === 1 && Re(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(K$, (r, a) => t.hasOwnProperty(a) ? t[a] : "");
}
const xn = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), J$ = (e, t, r) => Y$({ l: e, k: t, s: r }), Y$ = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), bt = (e) => typeof e == "number" && isFinite(e), q$ = (e) => ji(e) === "[object Date]", Ra = (e) => ji(e) === "[object RegExp]", lo = (e) => Le(e) && Object.keys(e).length === 0, _t = Object.assign, X$ = Object.create, Ve = (e = null) => X$(e);
let vu;
const Bn = () => vu || (vu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : Ve());
function gu(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function hu(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Q$(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (a, n, o) => `${n}="${hu(o)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (a, n, o) => `${n}='${hu(o)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (process.env.NODE_ENV !== "production" && gn("Potentially dangerous event handlers detected in translation. Consider removing onclick, onerror, etc. from your translation messages."), e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((a) => {
    e = e.replace(a, "$1javascript&#58;");
  }), e;
}
const e0 = Object.prototype.hasOwnProperty;
function qt(e, t) {
  return e0.call(e, t);
}
const ot = Array.isArray, qe = (e) => typeof e == "function", le = (e) => typeof e == "string", at = (e) => typeof e == "boolean", Re = (e) => e !== null && typeof e == "object", t0 = (e) => Re(e) && qe(e.then) && qe(e.catch), vd = Object.prototype.toString, ji = (e) => vd.call(e), Le = (e) => ji(e) === "[object Object]", n0 = (e) => e == null ? "" : ot(e) || Le(e) && e.toString === vd ? JSON.stringify(e, null, 2) : String(e);
function Ui(e, t = "") {
  return e.reduce((r, a, n) => n === 0 ? r + a : r + t + a, "");
}
const bu = 2;
function r0(e, t = 0, r = e.length) {
  const a = e.split(/\r?\n/);
  let n = 0;
  const o = [];
  for (let i = 0; i < a.length; i++)
    if (n += a[i].length + 1, n >= t) {
      for (let l = i - bu; l <= i + bu || r > n; l++) {
        if (l < 0 || l >= a.length)
          continue;
        const u = l + 1;
        o.push(`${u}${" ".repeat(3 - String(u).length)}|  ${a[l]}`);
        const c = a[l].length;
        if (l === i) {
          const d = t - (n - c) + 1, f = Math.max(1, r > n ? c - d : r - t);
          o.push("   |  " + " ".repeat(d) + "^".repeat(f));
        } else if (l > i) {
          if (r > n) {
            const d = Math.max(Math.min(r - n, c), 1);
            o.push("   |  " + "^".repeat(d));
          }
          n += c + 1;
        }
      }
      break;
    }
  return o.join(`
`);
}
function a0() {
  const e = /* @__PURE__ */ new Map();
  return {
    events: e,
    on(r, a) {
      const n = e.get(r);
      n && n.push(a) || e.set(r, [a]);
    },
    off(r, a) {
      const n = e.get(r);
      n && n.splice(n.indexOf(a) >>> 0, 1);
    },
    emit(r, a) {
      (e.get(r) || []).slice().map((n) => n(a)), (e.get("*") || []).slice().map((n) => n(r, a));
    }
  };
}
const ya = (e) => !Re(e) || ot(e);
function Aa(e, t) {
  if (ya(e) || ya(t))
    throw new Error("Invalid value");
  const r = [{ src: e, des: t }];
  for (; r.length; ) {
    const { src: a, des: n } = r.pop();
    Object.keys(a).forEach((o) => {
      o !== "__proto__" && (Re(a[o]) && !Re(n[o]) && (n[o] = Array.isArray(a[o]) ? [] : Ve()), ya(n[o]) || ya(a[o]) ? n[o] = a[o] : r.push({ src: a[o], des: n[o] }));
    });
  }
}
function o0(e, t, r) {
  return { line: e, column: t, offset: r };
}
function Xo(e, t, r) {
  return { start: e, end: t };
}
const ye = {
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
}, i0 = 17, l0 = {
  // tokenizer error messages
  [ye.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [ye.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [ye.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [ye.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [ye.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [ye.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [ye.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [ye.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [ye.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [ye.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [ye.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [ye.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [ye.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [ye.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
  // generator error messages
  [ye.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
  // minimizer error messages
  [ye.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function kr(e, t, r = {}) {
  const { domain: a, messages: n, args: o } = r, i = process.env.NODE_ENV !== "production" ? io((n || l0)[e] || "", ...o || []) : e, l = new SyntaxError(String(i));
  return l.code = e, t && (l.location = t), l.domain = a, l;
}
function s0(e) {
  throw e;
}
const u0 = /<\/?[\w\s="/.':;#-\/]+>/, c0 = (e) => u0.test(e), ln = " ", d0 = "\r", It = `
`, f0 = "\u2028", m0 = "\u2029";
function p0(e) {
  const t = e;
  let r = 0, a = 1, n = 1, o = 0;
  const i = (O) => t[O] === d0 && t[O + 1] === It, l = (O) => t[O] === It, u = (O) => t[O] === m0, c = (O) => t[O] === f0, d = (O) => i(O) || l(O) || u(O) || c(O), f = () => r, m = () => a, p = () => n, v = () => o, _ = (O) => i(O) || u(O) || c(O) ? It : t[O], k = () => _(r), $ = () => _(r + o);
  function y() {
    return o = 0, d(r) && (a++, n = 0), i(r) && r++, r++, n++, t[r];
  }
  function x() {
    return i(r + o) && o++, o++, t[r + o];
  }
  function I() {
    r = 0, a = 1, n = 1, o = 0;
  }
  function E(O = 0) {
    o = O;
  }
  function N() {
    const O = r + o;
    for (; O !== r; )
      y();
    o = 0;
  }
  return {
    index: f,
    line: m,
    column: p,
    peekOffset: v,
    charAt: _,
    currentChar: k,
    currentPeek: $,
    next: y,
    peek: x,
    reset: I,
    resetPeek: E,
    skipToPeek: N
  };
}
const _n = void 0, v0 = ".", _u = "'", g0 = "tokenizer";
function h0(e, t = {}) {
  const r = t.location !== !1, a = p0(e), n = () => a.index(), o = () => o0(a.line(), a.column(), a.index()), i = o(), l = n(), u = {
    currentType: 13,
    offset: l,
    startLoc: i,
    endLoc: i,
    lastType: 13,
    lastOffset: l,
    lastStartLoc: i,
    lastEndLoc: i,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, c = () => u, { onError: d } = t;
  function f(b, S, R, ...Y) {
    const Se = c();
    if (S.column += R, S.offset += R, d) {
      const xe = r ? Xo(Se.startLoc, S) : null, we = kr(b, xe, {
        domain: g0,
        args: Y
      });
      d(we);
    }
  }
  function m(b, S, R) {
    b.endLoc = o(), b.currentType = S;
    const Y = { type: S };
    return r && (Y.loc = Xo(b.startLoc, b.endLoc)), R != null && (Y.value = R), Y;
  }
  const p = (b) => m(
    b,
    13
    /* TokenTypes.EOF */
  );
  function v(b, S) {
    return b.currentChar() === S ? (b.next(), S) : (f(ye.EXPECTED_TOKEN, o(), 0, S), "");
  }
  function _(b) {
    let S = "";
    for (; b.currentPeek() === ln || b.currentPeek() === It; )
      S += b.currentPeek(), b.peek();
    return S;
  }
  function k(b) {
    const S = _(b);
    return b.skipToPeek(), S;
  }
  function $(b) {
    if (b === _n)
      return !1;
    const S = b.charCodeAt(0);
    return S >= 97 && S <= 122 || // a-z
    S >= 65 && S <= 90 || // A-Z
    S === 95;
  }
  function y(b) {
    if (b === _n)
      return !1;
    const S = b.charCodeAt(0);
    return S >= 48 && S <= 57;
  }
  function x(b, S) {
    const { currentType: R } = S;
    if (R !== 2)
      return !1;
    _(b);
    const Y = $(b.currentPeek());
    return b.resetPeek(), Y;
  }
  function I(b, S) {
    const { currentType: R } = S;
    if (R !== 2)
      return !1;
    _(b);
    const Y = b.currentPeek() === "-" ? b.peek() : b.currentPeek(), Se = y(Y);
    return b.resetPeek(), Se;
  }
  function E(b, S) {
    const { currentType: R } = S;
    if (R !== 2)
      return !1;
    _(b);
    const Y = b.currentPeek() === _u;
    return b.resetPeek(), Y;
  }
  function N(b, S) {
    const { currentType: R } = S;
    if (R !== 7)
      return !1;
    _(b);
    const Y = b.currentPeek() === ".";
    return b.resetPeek(), Y;
  }
  function O(b, S) {
    const { currentType: R } = S;
    if (R !== 8)
      return !1;
    _(b);
    const Y = $(b.currentPeek());
    return b.resetPeek(), Y;
  }
  function C(b, S) {
    const { currentType: R } = S;
    if (!(R === 7 || R === 11))
      return !1;
    _(b);
    const Y = b.currentPeek() === ":";
    return b.resetPeek(), Y;
  }
  function U(b, S) {
    const { currentType: R } = S;
    if (R !== 9)
      return !1;
    const Y = () => {
      const xe = b.currentPeek();
      return xe === "{" ? $(b.peek()) : xe === "@" || xe === "|" || xe === ":" || xe === "." || xe === ln || !xe ? !1 : xe === It ? (b.peek(), Y()) : re(b, !1);
    }, Se = Y();
    return b.resetPeek(), Se;
  }
  function Q(b) {
    _(b);
    const S = b.currentPeek() === "|";
    return b.resetPeek(), S;
  }
  function re(b, S = !0) {
    const R = (Se = !1, xe = "") => {
      const we = b.currentPeek();
      return we === "{" || we === "@" || !we ? Se : we === "|" ? !(xe === ln || xe === It) : we === ln ? (b.peek(), R(!0, ln)) : we === It ? (b.peek(), R(!0, It)) : !0;
    }, Y = R();
    return S && b.resetPeek(), Y;
  }
  function ne(b, S) {
    const R = b.currentChar();
    return R === _n ? _n : S(R) ? (b.next(), R) : null;
  }
  function fe(b) {
    const S = b.charCodeAt(0);
    return S >= 97 && S <= 122 || // a-z
    S >= 65 && S <= 90 || // A-Z
    S >= 48 && S <= 57 || // 0-9
    S === 95 || // _
    S === 36;
  }
  function X(b) {
    return ne(b, fe);
  }
  function ae(b) {
    const S = b.charCodeAt(0);
    return S >= 97 && S <= 122 || // a-z
    S >= 65 && S <= 90 || // A-Z
    S >= 48 && S <= 57 || // 0-9
    S === 95 || // _
    S === 36 || // $
    S === 45;
  }
  function V(b) {
    return ne(b, ae);
  }
  function te(b) {
    const S = b.charCodeAt(0);
    return S >= 48 && S <= 57;
  }
  function J(b) {
    return ne(b, te);
  }
  function Ce(b) {
    const S = b.charCodeAt(0);
    return S >= 48 && S <= 57 || // 0-9
    S >= 65 && S <= 70 || // A-F
    S >= 97 && S <= 102;
  }
  function Ze(b) {
    return ne(b, Ce);
  }
  function it(b) {
    let S = "", R = "";
    for (; S = J(b); )
      R += S;
    return R;
  }
  function Pt(b) {
    let S = "";
    for (; ; ) {
      const R = b.currentChar();
      if (R === "{" || R === "}" || R === "@" || R === "|" || !R)
        break;
      if (R === ln || R === It)
        if (re(b))
          S += R, b.next();
        else {
          if (Q(b))
            break;
          S += R, b.next();
        }
      else
        S += R, b.next();
    }
    return S;
  }
  function Ke(b) {
    k(b);
    let S = "", R = "";
    for (; S = V(b); )
      R += S;
    const Y = b.currentChar();
    if (Y && Y !== "}" && Y !== _n && Y !== ln && Y !== It && Y !== "　") {
      const Se = rt(b);
      return f(ye.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, R + Se), R + Se;
    }
    return b.currentChar() === _n && f(ye.UNTERMINATED_CLOSING_BRACE, o(), 0), R;
  }
  function Pe(b) {
    k(b);
    let S = "";
    return b.currentChar() === "-" ? (b.next(), S += `-${it(b)}`) : S += it(b), b.currentChar() === _n && f(ye.UNTERMINATED_CLOSING_BRACE, o(), 0), S;
  }
  function Et(b) {
    return b !== _u && b !== It;
  }
  function se(b) {
    k(b), v(b, "'");
    let S = "", R = "";
    for (; S = ne(b, Et); )
      S === "\\" ? R += ue(b) : R += S;
    const Y = b.currentChar();
    return Y === It || Y === _n ? (f(ye.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, o(), 0), Y === It && (b.next(), v(b, "'")), R) : (v(b, "'"), R);
  }
  function ue(b) {
    const S = b.currentChar();
    switch (S) {
      case "\\":
      case "'":
        return b.next(), `\\${S}`;
      case "u":
        return Ee(b, S, 4);
      case "U":
        return Ee(b, S, 6);
      default:
        return f(ye.UNKNOWN_ESCAPE_SEQUENCE, o(), 0, S), "";
    }
  }
  function Ee(b, S, R) {
    v(b, S);
    let Y = "";
    for (let Se = 0; Se < R; Se++) {
      const xe = Ze(b);
      if (!xe) {
        f(ye.INVALID_UNICODE_ESCAPE_SEQUENCE, o(), 0, `\\${S}${Y}${b.currentChar()}`);
        break;
      }
      Y += xe;
    }
    return `\\${S}${Y}`;
  }
  function Ne(b) {
    return b !== "{" && b !== "}" && b !== ln && b !== It;
  }
  function rt(b) {
    k(b);
    let S = "", R = "";
    for (; S = ne(b, Ne); )
      R += S;
    return R;
  }
  function lt(b) {
    let S = "", R = "";
    for (; S = X(b); )
      R += S;
    return R;
  }
  function Je(b) {
    const S = (R) => {
      const Y = b.currentChar();
      return Y === "{" || Y === "@" || Y === "|" || Y === "(" || Y === ")" || !Y || Y === ln ? R : (R += Y, b.next(), S(R));
    };
    return S("");
  }
  function Rt(b) {
    k(b);
    const S = v(
      b,
      "|"
      /* TokenChars.Pipe */
    );
    return k(b), S;
  }
  function hn(b, S) {
    let R = null;
    switch (b.currentChar()) {
      case "{":
        return S.braceNest >= 1 && f(ye.NOT_ALLOW_NEST_PLACEHOLDER, o(), 0), b.next(), R = m(
          S,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), k(b), S.braceNest++, R;
      case "}":
        return S.braceNest > 0 && S.currentType === 2 && f(ye.EMPTY_PLACEHOLDER, o(), 0), b.next(), R = m(
          S,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), S.braceNest--, S.braceNest > 0 && k(b), S.inLinked && S.braceNest === 0 && (S.inLinked = !1), R;
      case "@":
        return S.braceNest > 0 && f(ye.UNTERMINATED_CLOSING_BRACE, o(), 0), R = Jt(b, S) || p(S), S.braceNest = 0, R;
      default: {
        let Se = !0, xe = !0, we = !0;
        if (Q(b))
          return S.braceNest > 0 && f(ye.UNTERMINATED_CLOSING_BRACE, o(), 0), R = m(S, 1, Rt(b)), S.braceNest = 0, S.inLinked = !1, R;
        if (S.braceNest > 0 && (S.currentType === 4 || S.currentType === 5 || S.currentType === 6))
          return f(ye.UNTERMINATED_CLOSING_BRACE, o(), 0), S.braceNest = 0, Yt(b, S);
        if (Se = x(b, S))
          return R = m(S, 4, Ke(b)), k(b), R;
        if (xe = I(b, S))
          return R = m(S, 5, Pe(b)), k(b), R;
        if (we = E(b, S))
          return R = m(S, 6, se(b)), k(b), R;
        if (!Se && !xe && !we)
          return R = m(S, 12, rt(b)), f(ye.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, R.value), k(b), R;
        break;
      }
    }
    return R;
  }
  function Jt(b, S) {
    const { currentType: R } = S;
    let Y = null;
    const Se = b.currentChar();
    switch ((R === 7 || R === 8 || R === 11 || R === 9) && (Se === It || Se === ln) && f(ye.INVALID_LINKED_FORMAT, o(), 0), Se) {
      case "@":
        return b.next(), Y = m(
          S,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), S.inLinked = !0, Y;
      case ".":
        return k(b), b.next(), m(
          S,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return k(b), b.next(), m(
          S,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return Q(b) ? (Y = m(S, 1, Rt(b)), S.braceNest = 0, S.inLinked = !1, Y) : N(b, S) || C(b, S) ? (k(b), Jt(b, S)) : O(b, S) ? (k(b), m(S, 11, lt(b))) : U(b, S) ? (k(b), Se === "{" ? hn(b, S) || Y : m(S, 10, Je(b))) : (R === 7 && f(ye.INVALID_LINKED_FORMAT, o(), 0), S.braceNest = 0, S.inLinked = !1, Yt(b, S));
    }
  }
  function Yt(b, S) {
    let R = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (S.braceNest > 0)
      return hn(b, S) || p(S);
    if (S.inLinked)
      return Jt(b, S) || p(S);
    switch (b.currentChar()) {
      case "{":
        return hn(b, S) || p(S);
      case "}":
        return f(ye.UNBALANCED_CLOSING_BRACE, o(), 0), b.next(), m(
          S,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return Jt(b, S) || p(S);
      default: {
        if (Q(b))
          return R = m(S, 1, Rt(b)), S.braceNest = 0, S.inLinked = !1, R;
        if (re(b))
          return m(S, 0, Pt(b));
        break;
      }
    }
    return R;
  }
  function En() {
    const { currentType: b, offset: S, startLoc: R, endLoc: Y } = u;
    return u.lastType = b, u.lastOffset = S, u.lastStartLoc = R, u.lastEndLoc = Y, u.offset = n(), u.startLoc = o(), a.currentChar() === _n ? m(
      u,
      13
      /* TokenTypes.EOF */
    ) : Yt(a, u);
  }
  return {
    nextToken: En,
    currentOffset: n,
    currentPosition: o,
    context: c
  };
}
const b0 = "parser", _0 = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function y0(e, t, r) {
  switch (e) {
    case "\\\\":
      return "\\";
    // eslint-disable-next-line no-useless-escape
    case "\\'":
      return "'";
    default: {
      const a = parseInt(t || r, 16);
      return a <= 55295 || a >= 57344 ? String.fromCodePoint(a) : "�";
    }
  }
}
function $0(e = {}) {
  const t = e.location !== !1, { onError: r } = e;
  function a($, y, x, I, ...E) {
    const N = $.currentPosition();
    if (N.offset += I, N.column += I, r) {
      const O = t ? Xo(x, N) : null, C = kr(y, O, {
        domain: b0,
        args: E
      });
      r(C);
    }
  }
  function n($, y, x) {
    const I = { type: $ };
    return t && (I.start = y, I.end = y, I.loc = { start: x, end: x }), I;
  }
  function o($, y, x, I) {
    t && ($.end = y, $.loc && ($.loc.end = x));
  }
  function i($, y) {
    const x = $.context(), I = n(3, x.offset, x.startLoc);
    return I.value = y, o(I, $.currentOffset(), $.currentPosition()), I;
  }
  function l($, y) {
    const x = $.context(), { lastOffset: I, lastStartLoc: E } = x, N = n(5, I, E);
    return N.index = parseInt(y, 10), $.nextToken(), o(N, $.currentOffset(), $.currentPosition()), N;
  }
  function u($, y) {
    const x = $.context(), { lastOffset: I, lastStartLoc: E } = x, N = n(4, I, E);
    return N.key = y, $.nextToken(), o(N, $.currentOffset(), $.currentPosition()), N;
  }
  function c($, y) {
    const x = $.context(), { lastOffset: I, lastStartLoc: E } = x, N = n(9, I, E);
    return N.value = y.replace(_0, y0), $.nextToken(), o(N, $.currentOffset(), $.currentPosition()), N;
  }
  function d($) {
    const y = $.nextToken(), x = $.context(), { lastOffset: I, lastStartLoc: E } = x, N = n(8, I, E);
    return y.type !== 11 ? (a($, ye.UNEXPECTED_EMPTY_LINKED_MODIFIER, x.lastStartLoc, 0), N.value = "", o(N, I, E), {
      nextConsumeToken: y,
      node: N
    }) : (y.value == null && a($, ye.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, sn(y)), N.value = y.value || "", o(N, $.currentOffset(), $.currentPosition()), {
      node: N
    });
  }
  function f($, y) {
    const x = $.context(), I = n(7, x.offset, x.startLoc);
    return I.value = y, o(I, $.currentOffset(), $.currentPosition()), I;
  }
  function m($) {
    const y = $.context(), x = n(6, y.offset, y.startLoc);
    let I = $.nextToken();
    if (I.type === 8) {
      const E = d($);
      x.modifier = E.node, I = E.nextConsumeToken || $.nextToken();
    }
    switch (I.type !== 9 && a($, ye.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, sn(I)), I = $.nextToken(), I.type === 2 && (I = $.nextToken()), I.type) {
      case 10:
        I.value == null && a($, ye.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, sn(I)), x.key = f($, I.value || "");
        break;
      case 4:
        I.value == null && a($, ye.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, sn(I)), x.key = u($, I.value || "");
        break;
      case 5:
        I.value == null && a($, ye.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, sn(I)), x.key = l($, I.value || "");
        break;
      case 6:
        I.value == null && a($, ye.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, sn(I)), x.key = c($, I.value || "");
        break;
      default: {
        a($, ye.UNEXPECTED_EMPTY_LINKED_KEY, y.lastStartLoc, 0);
        const E = $.context(), N = n(7, E.offset, E.startLoc);
        return N.value = "", o(N, E.offset, E.startLoc), x.key = N, o(x, E.offset, E.startLoc), {
          nextConsumeToken: I,
          node: x
        };
      }
    }
    return o(x, $.currentOffset(), $.currentPosition()), {
      node: x
    };
  }
  function p($) {
    const y = $.context(), x = y.currentType === 1 ? $.currentOffset() : y.offset, I = y.currentType === 1 ? y.endLoc : y.startLoc, E = n(2, x, I);
    E.items = [];
    let N = null;
    do {
      const U = N || $.nextToken();
      switch (N = null, U.type) {
        case 0:
          U.value == null && a($, ye.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, sn(U)), E.items.push(i($, U.value || ""));
          break;
        case 5:
          U.value == null && a($, ye.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, sn(U)), E.items.push(l($, U.value || ""));
          break;
        case 4:
          U.value == null && a($, ye.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, sn(U)), E.items.push(u($, U.value || ""));
          break;
        case 6:
          U.value == null && a($, ye.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, sn(U)), E.items.push(c($, U.value || ""));
          break;
        case 7: {
          const Q = m($);
          E.items.push(Q.node), N = Q.nextConsumeToken || null;
          break;
        }
      }
    } while (y.currentType !== 13 && y.currentType !== 1);
    const O = y.currentType === 1 ? y.lastOffset : $.currentOffset(), C = y.currentType === 1 ? y.lastEndLoc : $.currentPosition();
    return o(E, O, C), E;
  }
  function v($, y, x, I) {
    const E = $.context();
    let N = I.items.length === 0;
    const O = n(1, y, x);
    O.cases = [], O.cases.push(I);
    do {
      const C = p($);
      N || (N = C.items.length === 0), O.cases.push(C);
    } while (E.currentType !== 13);
    return N && a($, ye.MUST_HAVE_MESSAGES_IN_PLURAL, x, 0), o(O, $.currentOffset(), $.currentPosition()), O;
  }
  function _($) {
    const y = $.context(), { offset: x, startLoc: I } = y, E = p($);
    return y.currentType === 13 ? E : v($, x, I, E);
  }
  function k($) {
    const y = h0($, _t({}, e)), x = y.context(), I = n(0, x.offset, x.startLoc);
    return t && I.loc && (I.loc.source = $), I.body = _(y), e.onCacheKey && (I.cacheKey = e.onCacheKey($)), x.currentType !== 13 && a(y, ye.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, $[x.offset] || ""), o(I, y.currentOffset(), y.currentPosition()), I;
  }
  return { parse: k };
}
function sn(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function w0(e, t = {}) {
  const r = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => r, helper: (o) => (r.helpers.add(o), o) };
}
function yu(e, t) {
  for (let r = 0; r < e.length; r++)
    Li(e[r], t);
}
function Li(e, t) {
  switch (e.type) {
    case 1:
      yu(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      yu(e.items, t);
      break;
    case 6: {
      Li(e.key, t), t.helper(
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
function k0(e, t = {}) {
  const r = w0(e);
  r.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && Li(e.body, r);
  const a = r.context();
  e.helpers = Array.from(a.helpers);
}
function S0(e) {
  const t = e.body;
  return t.type === 2 ? $u(t) : t.cases.forEach((r) => $u(r)), e;
}
function $u(e) {
  if (e.items.length === 1) {
    const t = e.items[0];
    (t.type === 3 || t.type === 9) && (e.static = t.value, delete t.value);
  } else {
    const t = [];
    for (let r = 0; r < e.items.length; r++) {
      const a = e.items[r];
      if (!(a.type === 3 || a.type === 9) || a.value == null)
        break;
      t.push(a.value);
    }
    if (t.length === e.items.length) {
      e.static = Ui(t);
      for (let r = 0; r < e.items.length; r++) {
        const a = e.items[r];
        (a.type === 3 || a.type === 9) && delete a.value;
      }
    }
  }
}
const I0 = "minifier";
function sr(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      sr(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, r = t.cases;
      for (let a = 0; a < r.length; a++)
        sr(r[a]);
      t.c = r, delete t.cases;
      break;
    }
    case 2: {
      const t = e, r = t.items;
      for (let a = 0; a < r.length; a++)
        sr(r[a]);
      t.i = r, delete t.items, t.static && (t.s = t.static, delete t.static);
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
      sr(t.key), t.k = t.key, delete t.key, t.modifier && (sr(t.modifier), t.m = t.modifier, delete t.modifier);
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
        throw kr(ye.UNHANDLED_MINIFIER_NODE_TYPE, null, {
          domain: I0,
          args: [e.type]
        });
  }
  delete e.type;
}
const x0 = "parser";
function O0(e, t) {
  const { filename: r, breakLineCode: a, needIndent: n } = t, o = t.location !== !1, i = {
    filename: r,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: a,
    needIndent: n,
    indentLevel: 0
  };
  o && e.loc && (i.source = e.loc.source);
  const l = () => i;
  function u(_, k) {
    i.code += _;
  }
  function c(_, k = !0) {
    const $ = k ? a : "";
    u(n ? $ + "  ".repeat(_) : $);
  }
  function d(_ = !0) {
    const k = ++i.indentLevel;
    _ && c(k);
  }
  function f(_ = !0) {
    const k = --i.indentLevel;
    _ && c(k);
  }
  function m() {
    c(i.indentLevel);
  }
  return {
    context: l,
    push: u,
    indent: d,
    deindent: f,
    newline: m,
    helper: (_) => `_${_}`,
    needIndent: () => i.needIndent
  };
}
function E0(e, t) {
  const { helper: r } = e;
  e.push(`${r(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), dr(e, t.key), t.modifier ? (e.push(", "), dr(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function N0(e, t) {
  const { helper: r, needIndent: a } = e;
  e.push(`${r(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(a());
  const n = t.items.length;
  for (let o = 0; o < n && (dr(e, t.items[o]), o !== n - 1); o++)
    e.push(", ");
  e.deindent(a()), e.push("])");
}
function z0(e, t) {
  const { helper: r, needIndent: a } = e;
  if (t.cases.length > 1) {
    e.push(`${r(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(a());
    const n = t.cases.length;
    for (let o = 0; o < n && (dr(e, t.cases[o]), o !== n - 1); o++)
      e.push(", ");
    e.deindent(a()), e.push("])");
  }
}
function T0(e, t) {
  t.body ? dr(e, t.body) : e.push("null");
}
function dr(e, t) {
  const { helper: r } = e;
  switch (t.type) {
    case 0:
      T0(e, t);
      break;
    case 1:
      z0(e, t);
      break;
    case 2:
      N0(e, t);
      break;
    case 6:
      E0(e, t);
      break;
    case 8:
      e.push(JSON.stringify(t.value), t);
      break;
    case 7:
      e.push(JSON.stringify(t.value), t);
      break;
    case 5:
      e.push(`${r(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${r(
        "list"
        /* HelperNameMap.LIST */
      )}(${t.index}))`, t);
      break;
    case 4:
      e.push(`${r(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${r(
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
        throw kr(ye.UNHANDLED_CODEGEN_NODE_TYPE, null, {
          domain: x0,
          args: [t.type]
        });
  }
}
const P0 = (e, t = {}) => {
  const r = le(t.mode) ? t.mode : "normal", a = le(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const n = t.breakLineCode != null ? t.breakLineCode : r === "arrow" ? ";" : `
`, o = t.needIndent ? t.needIndent : r !== "arrow", i = e.helpers || [], l = O0(e, {
    filename: a,
    breakLineCode: n,
    needIndent: o
  });
  l.push(r === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), l.indent(o), i.length > 0 && (l.push(`const { ${Ui(i.map((d) => `${d}: _${d}`), ", ")} } = ctx`), l.newline()), l.push("return "), dr(l, e), l.deindent(o), l.push("}"), delete e.helpers;
  const { code: u, map: c } = l.context();
  return {
    ast: e,
    code: u,
    map: c ? c.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function A0(e, t = {}) {
  const r = _t({}, t), a = !!r.jit, n = !!r.minify, o = r.optimize == null ? !0 : r.optimize, l = $0(r).parse(e);
  return a ? (o && S0(l), n && sr(l), { ast: l, code: "" }) : (k0(l, r), P0(l, r));
}
function D0() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Bn().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Bn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function tn(e) {
  return Re(e) && Ri(e) === 0 && (qt(e, "b") || qt(e, "body"));
}
const gd = ["b", "body"];
function C0(e) {
  return Dn(e, gd);
}
const hd = ["c", "cases"];
function j0(e) {
  return Dn(e, hd, []);
}
const bd = ["s", "static"];
function U0(e) {
  return Dn(e, bd);
}
const _d = ["i", "items"];
function L0(e) {
  return Dn(e, _d, []);
}
const yd = ["t", "type"];
function Ri(e) {
  return Dn(e, yd);
}
const $d = ["v", "value"];
function $a(e, t) {
  const r = Dn(e, $d);
  if (r != null)
    return r;
  throw Br(t);
}
const wd = ["m", "modifier"];
function R0(e) {
  return Dn(e, wd);
}
const kd = ["k", "key"];
function V0(e) {
  const t = Dn(e, kd);
  if (t)
    return t;
  throw Br(
    6
    /* NodeTypes.Linked */
  );
}
function Dn(e, t, r) {
  for (let a = 0; a < t.length; a++) {
    const n = t[a];
    if (qt(e, n) && e[n] != null)
      return e[n];
  }
  return r;
}
const Sd = [
  ...gd,
  ...hd,
  ...bd,
  ..._d,
  ...kd,
  ...wd,
  ...$d,
  ...yd
];
function Br(e) {
  return new Error(`unhandled node type: ${e}`);
}
function Vo(e) {
  return (r) => F0(r, e);
}
function F0(e, t) {
  const r = C0(t);
  if (r == null)
    throw Br(
      0
      /* NodeTypes.Resource */
    );
  if (Ri(r) === 1) {
    const o = j0(r);
    return e.plural(o.reduce((i, l) => [
      ...i,
      wu(e, l)
    ], []));
  } else
    return wu(e, r);
}
function wu(e, t) {
  const r = U0(t);
  if (r != null)
    return e.type === "text" ? r : e.normalize([r]);
  {
    const a = L0(t).reduce((n, o) => [...n, Qo(e, o)], []);
    return e.normalize(a);
  }
}
function Qo(e, t) {
  const r = Ri(t);
  switch (r) {
    case 3:
      return $a(t, r);
    case 9:
      return $a(t, r);
    case 4: {
      const a = t;
      if (qt(a, "k") && a.k)
        return e.interpolate(e.named(a.k));
      if (qt(a, "key") && a.key)
        return e.interpolate(e.named(a.key));
      throw Br(r);
    }
    case 5: {
      const a = t;
      if (qt(a, "i") && bt(a.i))
        return e.interpolate(e.list(a.i));
      if (qt(a, "index") && bt(a.index))
        return e.interpolate(e.list(a.index));
      throw Br(r);
    }
    case 6: {
      const a = t, n = R0(a), o = V0(a);
      return e.linked(Qo(e, o), n ? Qo(e, n) : void 0, e.type);
    }
    case 7:
      return $a(t, r);
    case 8:
      return $a(t, r);
    default:
      throw new Error(`unhandled node on format message part: ${r}`);
  }
}
const M0 = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function B0(e, t) {
  t && c0(e) && gn(io(M0, { source: e }));
}
const Z0 = (e) => e;
let wa = Ve();
function W0(e, t = {}) {
  let r = !1;
  const a = t.onError || s0;
  return t.onError = (n) => {
    r = !0, a(n);
  }, { ...A0(e, t), detectError: r };
}
// @__NO_SIDE_EFFECTS__
function G0(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && le(e)) {
    const r = at(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && B0(e, r);
    const n = (t.onCacheKey || Z0)(e), o = wa[n];
    if (o)
      return o;
    const { ast: i, detectError: l } = W0(e, {
      ...t,
      location: process.env.NODE_ENV !== "production",
      jit: !0
    }), u = Vo(i);
    return l ? u : wa[n] = u;
  } else {
    if (process.env.NODE_ENV !== "production" && !tn(e))
      return gn(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), (() => e);
    const r = e.cacheKey;
    if (r) {
      const a = wa[r];
      return a || (wa[r] = Vo(e));
    } else
      return Vo(e);
  }
}
let Zr = null;
function H0(e) {
  Zr = e;
}
function K0(e, t, r) {
  Zr && Zr.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: r
  });
}
const J0 = /* @__PURE__ */ Y0("function:translate");
function Y0(e) {
  return (t) => Zr && Zr.emit(e, t);
}
const Ot = {
  INVALID_ARGUMENT: i0,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_NON_STRING_MESSAGE: 20,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, q0 = 24;
function $n(e) {
  return kr(e, null, process.env.NODE_ENV !== "production" ? { messages: X0 } : void 0);
}
const X0 = {
  [Ot.INVALID_ARGUMENT]: "Invalid arguments",
  [Ot.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [Ot.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [Ot.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
  [Ot.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
  [Ot.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
  [Ot.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function Vi(e, t) {
  return t.locale != null ? ku(t.locale) : ku(e.locale);
}
let Fo;
function ku(e) {
  if (le(e))
    return e;
  if (qe(e)) {
    if (e.resolvedOnce && Fo != null)
      return Fo;
    if (e.constructor.name === "Function") {
      const t = e();
      if (t0(t))
        throw $n(Ot.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return Fo = t;
    } else
      throw $n(Ot.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw $n(Ot.NOT_SUPPORT_LOCALE_TYPE);
}
function Q0(e, t, r) {
  return [.../* @__PURE__ */ new Set([
    r,
    ...ot(t) ? t : Re(t) ? Object.keys(t) : le(t) ? [t] : [r]
  ])];
}
function Id(e, t, r) {
  const a = le(r) ? r : Va, n = e;
  n.__localeChainCache || (n.__localeChainCache = /* @__PURE__ */ new Map());
  let o = n.__localeChainCache.get(a);
  if (!o) {
    o = [];
    let i = [r];
    for (; ot(i); )
      i = Su(o, i, t);
    const l = ot(t) || !Le(t) ? t : t.default ? t.default : null;
    i = le(l) ? [l] : l, ot(i) && Su(o, i, !1), n.__localeChainCache.set(a, o);
  }
  return o;
}
function Su(e, t, r) {
  let a = !0;
  for (let n = 0; n < t.length && at(a); n++) {
    const o = t[n];
    le(o) && (a = ew(e, t[n], r));
  }
  return a;
}
function ew(e, t, r) {
  let a;
  const n = t.split("-");
  do {
    const o = n.join("-");
    a = tw(e, o, r), n.splice(-1, 1);
  } while (n.length && a === !0);
  return a;
}
function tw(e, t, r) {
  let a = !1;
  if (!e.includes(t) && (a = !0, t)) {
    a = t[t.length - 1] !== "!";
    const n = t.replace(/!/g, "");
    e.push(n), (ot(r) || Le(r)) && r[n] && (a = r[n]);
  }
  return a;
}
const Cn = [];
Cn[
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
Cn[
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
Cn[
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
Cn[
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
Cn[
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
Cn[
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
Cn[
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
const nw = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function rw(e) {
  return nw.test(e);
}
function aw(e) {
  const t = e.charCodeAt(0), r = e.charCodeAt(e.length - 1);
  return t === r && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function ow(e) {
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
function iw(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : rw(t) ? aw(t) : "*" + t;
}
function lw(e) {
  const t = [];
  let r = -1, a = 0, n = 0, o, i, l, u, c, d, f;
  const m = [];
  m[
    0
    /* Actions.APPEND */
  ] = () => {
    i === void 0 ? i = l : i += l;
  }, m[
    1
    /* Actions.PUSH */
  ] = () => {
    i !== void 0 && (t.push(i), i = void 0);
  }, m[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    m[
      0
      /* Actions.APPEND */
    ](), n++;
  }, m[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (n > 0)
      n--, a = 4, m[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (n = 0, i === void 0 || (i = iw(i), i === !1))
        return !1;
      m[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function p() {
    const v = e[r + 1];
    if (a === 5 && v === "'" || a === 6 && v === '"')
      return r++, l = "\\" + v, m[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; a !== null; )
    if (r++, o = e[r], !(o === "\\" && p())) {
      if (u = ow(o), f = Cn[a], c = f[u] || f.l || 8, c === 8 || (a = c[0], c[1] !== void 0 && (d = m[c[1]], d && (l = o, d() === !1))))
        return;
      if (a === 7)
        return t;
    }
}
const Iu = /* @__PURE__ */ new Map();
function sw(e, t) {
  return Re(e) ? e[t] : null;
}
function uw(e, t) {
  if (!Re(e))
    return null;
  let r = Iu.get(t);
  if (r || (r = lw(t), r && Iu.set(t, r)), !r)
    return null;
  const a = r.length;
  let n = e, o = 0;
  for (; o < a; ) {
    const i = r[o];
    if (Sd.includes(i) && tn(n))
      return null;
    const l = n[i];
    if (l === void 0 || qe(n))
      return null;
    n = l, o++;
  }
  return n;
}
const jt = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7
}, cw = 8, dw = {
  [jt.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [jt.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [jt.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [jt.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [jt.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [jt.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [jt.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function Xn(e, ...t) {
  return io(dw[e], ...t);
}
const fw = "11.2.2", so = -1, Va = "en-US", Fa = "", xu = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function mw() {
  return {
    upper: (e, t) => t === "text" && le(e) ? e.toUpperCase() : t === "vnode" && Re(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && le(e) ? e.toLowerCase() : t === "vnode" && Re(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && le(e) ? xu(e) : t === "vnode" && Re(e) && "__v_isVNode" in e ? xu(e.children) : e
  };
}
let xd;
function pw(e) {
  xd = e;
}
let Od;
function vw(e) {
  Od = e;
}
let Ed;
function gw(e) {
  Ed = e;
}
let Nd = null;
const hw = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  Nd = e;
}, bw = /* @__NO_SIDE_EFFECTS__ */ () => Nd;
let zd = null;
const Ou = (e) => {
  zd = e;
}, _w = () => zd;
let Eu = 0;
function yw(e = {}) {
  const t = qe(e.onWarn) ? e.onWarn : gn, r = le(e.version) ? e.version : fw, a = le(e.locale) || qe(e.locale) ? e.locale : Va, n = qe(a) ? Va : a, o = ot(e.fallbackLocale) || Le(e.fallbackLocale) || le(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : n, i = Le(e.messages) ? e.messages : Mo(n), l = Le(e.datetimeFormats) ? e.datetimeFormats : Mo(n), u = Le(e.numberFormats) ? e.numberFormats : Mo(n), c = _t(Ve(), e.modifiers, mw()), d = e.pluralRules || Ve(), f = qe(e.missing) ? e.missing : null, m = at(e.missingWarn) || Ra(e.missingWarn) ? e.missingWarn : !0, p = at(e.fallbackWarn) || Ra(e.fallbackWarn) ? e.fallbackWarn : !0, v = !!e.fallbackFormat, _ = !!e.unresolving, k = qe(e.postTranslation) ? e.postTranslation : null, $ = Le(e.processor) ? e.processor : null, y = at(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, x = !!e.escapeParameter, I = qe(e.messageCompiler) ? e.messageCompiler : xd;
  process.env.NODE_ENV !== "production" && qe(e.messageCompiler) && H$(Xn(jt.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const E = qe(e.messageResolver) ? e.messageResolver : Od || sw, N = qe(e.localeFallbacker) ? e.localeFallbacker : Ed || Q0, O = Re(e.fallbackContext) ? e.fallbackContext : void 0, C = e, U = Re(C.__datetimeFormatters) ? C.__datetimeFormatters : /* @__PURE__ */ new Map(), Q = Re(C.__numberFormatters) ? C.__numberFormatters : /* @__PURE__ */ new Map(), re = Re(C.__meta) ? C.__meta : {};
  Eu++;
  const ne = {
    version: r,
    cid: Eu,
    locale: a,
    fallbackLocale: o,
    messages: i,
    modifiers: c,
    pluralRules: d,
    missing: f,
    missingWarn: m,
    fallbackWarn: p,
    fallbackFormat: v,
    unresolving: _,
    postTranslation: k,
    processor: $,
    warnHtmlMessage: y,
    escapeParameter: x,
    messageCompiler: I,
    messageResolver: E,
    localeFallbacker: N,
    fallbackContext: O,
    onWarn: t,
    __meta: re
  };
  return ne.datetimeFormats = l, ne.numberFormats = u, ne.__datetimeFormatters = U, ne.__numberFormatters = Q, process.env.NODE_ENV !== "production" && (ne.__v_emitter = C.__v_emitter != null ? C.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && K0(ne, r, re), ne;
}
const Mo = (e) => ({ [e]: Ve() });
function uo(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function Td(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function Fi(e, t, r, a, n) {
  const { missing: o, onWarn: i } = e;
  if (process.env.NODE_ENV !== "production") {
    const l = e.__v_emitter;
    l && l.emit("missing", {
      locale: r,
      key: t,
      type: n,
      groupId: `${n}:${t}`
    });
  }
  if (o !== null) {
    const l = o(e, r, t, n);
    return le(l) ? l : t;
  } else
    return process.env.NODE_ENV !== "production" && Td(a, t) && i(Xn(jt.NOT_FOUND_KEY, { key: t, locale: r })), t;
}
function Pr(e, t, r) {
  const a = e;
  a.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, r, t);
}
function Pd(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function $w(e, t) {
  const r = t.indexOf(e);
  if (r === -1)
    return !1;
  for (let a = r + 1; a < t.length; a++)
    if (Pd(e, t[a]))
      return !0;
  return !1;
}
const Nu = typeof Intl < "u", Ad = {
  dateTimeFormat: Nu && typeof Intl.DateTimeFormat < "u",
  numberFormat: Nu && typeof Intl.NumberFormat < "u"
};
function zu(e, ...t) {
  const { datetimeFormats: r, unresolving: a, fallbackLocale: n, onWarn: o, localeFallbacker: i } = e, { __datetimeFormatters: l } = e;
  if (process.env.NODE_ENV !== "production" && !Ad.dateTimeFormat)
    return o(Xn(jt.CANNOT_FORMAT_DATE)), Fa;
  const [u, c, d, f] = ei(...t), m = at(d.missingWarn) ? d.missingWarn : e.missingWarn, p = at(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn, v = !!d.part, _ = Vi(e, d), k = i(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    n,
    _
  );
  if (!le(u) || u === "")
    return new Intl.DateTimeFormat(_, f).format(c);
  let $ = {}, y, x = null, I = _, E = null;
  const N = "datetime format";
  for (let U = 0; U < k.length; U++) {
    if (y = E = k[U], process.env.NODE_ENV !== "production" && _ !== y && uo(p, u) && o(Xn(jt.FALLBACK_TO_DATE_FORMAT, {
      key: u,
      target: y
    })), process.env.NODE_ENV !== "production" && _ !== y) {
      const Q = e.__v_emitter;
      Q && Q.emit("fallback", {
        type: N,
        key: u,
        from: I,
        to: E,
        groupId: `${N}:${u}`
      });
    }
    if ($ = r[y] || {}, x = $[u], Le(x))
      break;
    Fi(e, u, y, m, N), I = E;
  }
  if (!Le(x) || !le(y))
    return a ? so : u;
  let O = `${y}__${u}`;
  lo(f) || (O = `${O}__${JSON.stringify(f)}`);
  let C = l.get(O);
  return C || (C = new Intl.DateTimeFormat(y, _t({}, x, f)), l.set(O, C)), v ? C.formatToParts(c) : C.format(c);
}
const Dd = [
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
function ei(...e) {
  const [t, r, a, n] = e, o = Ve();
  let i = Ve(), l;
  if (le(t)) {
    const u = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!u)
      throw $n(Ot.INVALID_ISO_DATE_ARGUMENT);
    const c = u[3] ? u[3].trim().startsWith("T") ? `${u[1].trim()}${u[3].trim()}` : `${u[1].trim()}T${u[3].trim()}` : u[1].trim();
    l = new Date(c);
    try {
      l.toISOString();
    } catch {
      throw $n(Ot.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (q$(t)) {
    if (isNaN(t.getTime()))
      throw $n(Ot.INVALID_DATE_ARGUMENT);
    l = t;
  } else if (bt(t))
    l = t;
  else
    throw $n(Ot.INVALID_ARGUMENT);
  return le(r) ? o.key = r : Le(r) && Object.keys(r).forEach((u) => {
    Dd.includes(u) ? i[u] = r[u] : o[u] = r[u];
  }), le(a) ? o.locale = a : Le(a) && (i = a), Le(n) && (i = n), [o.key || "", l, o, i];
}
function Tu(e, t, r) {
  const a = e;
  for (const n in r) {
    const o = `${t}__${n}`;
    a.__datetimeFormatters.has(o) && a.__datetimeFormatters.delete(o);
  }
}
function Pu(e, ...t) {
  const { numberFormats: r, unresolving: a, fallbackLocale: n, onWarn: o, localeFallbacker: i } = e, { __numberFormatters: l } = e;
  if (process.env.NODE_ENV !== "production" && !Ad.numberFormat)
    return o(Xn(jt.CANNOT_FORMAT_NUMBER)), Fa;
  const [u, c, d, f] = ti(...t), m = at(d.missingWarn) ? d.missingWarn : e.missingWarn, p = at(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn, v = !!d.part, _ = Vi(e, d), k = i(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    n,
    _
  );
  if (!le(u) || u === "")
    return new Intl.NumberFormat(_, f).format(c);
  let $ = {}, y, x = null, I = _, E = null;
  const N = "number format";
  for (let U = 0; U < k.length; U++) {
    if (y = E = k[U], process.env.NODE_ENV !== "production" && _ !== y && uo(p, u) && o(Xn(jt.FALLBACK_TO_NUMBER_FORMAT, {
      key: u,
      target: y
    })), process.env.NODE_ENV !== "production" && _ !== y) {
      const Q = e.__v_emitter;
      Q && Q.emit("fallback", {
        type: N,
        key: u,
        from: I,
        to: E,
        groupId: `${N}:${u}`
      });
    }
    if ($ = r[y] || {}, x = $[u], Le(x))
      break;
    Fi(e, u, y, m, N), I = E;
  }
  if (!Le(x) || !le(y))
    return a ? so : u;
  let O = `${y}__${u}`;
  lo(f) || (O = `${O}__${JSON.stringify(f)}`);
  let C = l.get(O);
  return C || (C = new Intl.NumberFormat(y, _t({}, x, f)), l.set(O, C)), v ? C.formatToParts(c) : C.format(c);
}
const Cd = [
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
function ti(...e) {
  const [t, r, a, n] = e, o = Ve();
  let i = Ve();
  if (!bt(t))
    throw $n(Ot.INVALID_ARGUMENT);
  const l = t;
  return le(r) ? o.key = r : Le(r) && Object.keys(r).forEach((u) => {
    Cd.includes(u) ? i[u] = r[u] : o[u] = r[u];
  }), le(a) ? o.locale = a : Le(a) && (i = a), Le(n) && (i = n), [o.key || "", l, o, i];
}
function Au(e, t, r) {
  const a = e;
  for (const n in r) {
    const o = `${t}__${n}`;
    a.__numberFormatters.has(o) && a.__numberFormatters.delete(o);
  }
}
const ww = (e) => e, kw = (e) => "", Sw = "text", Iw = (e) => e.length === 0 ? "" : Ui(e), xw = n0;
function Du(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Ow(e) {
  const t = bt(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (bt(e.named.count) || bt(e.named.n)) ? bt(e.named.count) ? e.named.count : bt(e.named.n) ? e.named.n : t : t;
}
function Ew(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Nw(e = {}) {
  const t = e.locale, r = Ow(e), a = Re(e.pluralRules) && le(t) && qe(e.pluralRules[t]) ? e.pluralRules[t] : Du, n = Re(e.pluralRules) && le(t) && qe(e.pluralRules[t]) ? Du : void 0, o = ($) => $[a(r, $.length, n)], i = e.list || [], l = ($) => i[$], u = e.named || Ve();
  bt(e.pluralIndex) && Ew(r, u);
  const c = ($) => u[$];
  function d($, y) {
    const x = qe(e.messages) ? e.messages($, !!y) : Re(e.messages) ? e.messages[$] : !1;
    return x || (e.parent ? e.parent.message($) : kw);
  }
  const f = ($) => e.modifiers ? e.modifiers[$] : ww, m = Le(e.processor) && qe(e.processor.normalize) ? e.processor.normalize : Iw, p = Le(e.processor) && qe(e.processor.interpolate) ? e.processor.interpolate : xw, v = Le(e.processor) && le(e.processor.type) ? e.processor.type : Sw, k = {
    list: l,
    named: c,
    plural: o,
    linked: ($, ...y) => {
      const [x, I] = y;
      let E = "text", N = "";
      y.length === 1 ? Re(x) ? (N = x.modifier || N, E = x.type || E) : le(x) && (N = x || N) : y.length === 2 && (le(x) && (N = x || N), le(I) && (E = I || E));
      const O = d($, !0)(k), C = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        E === "vnode" && ot(O) && N ? O[0] : O
      );
      return N ? f(N)(C, E) : C;
    },
    message: d,
    type: v,
    interpolate: p,
    normalize: m,
    values: _t(Ve(), i, u)
  };
  return k;
}
const Cu = () => "", Ht = (e) => qe(e);
function ju(e, ...t) {
  const { fallbackFormat: r, postTranslation: a, unresolving: n, messageCompiler: o, fallbackLocale: i, messages: l } = e, [u, c] = ni(...t), d = at(c.missingWarn) ? c.missingWarn : e.missingWarn, f = at(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, m = at(c.escapeParameter) ? c.escapeParameter : e.escapeParameter, p = !!c.resolvedMessage, v = le(c.default) || at(c.default) ? at(c.default) ? o ? u : () => u : c.default : r ? o ? u : () => u : null, _ = r || v != null && (le(v) || qe(v)), k = Vi(e, c);
  m && zw(c);
  let [$, y, x] = p ? [
    u,
    k,
    l[k] || Ve()
  ] : jd(e, u, k, i, f, d), I = $, E = u;
  if (!p && !(le(I) || tn(I) || Ht(I)) && _ && (I = v, E = I), !p && (!(le(I) || tn(I) || Ht(I)) || !le(y)))
    return n ? so : u;
  if (process.env.NODE_ENV !== "production" && le(I) && e.messageCompiler == null)
    return gn(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${u}'.`), u;
  let N = !1;
  const O = () => {
    N = !0;
  }, C = Ht(I) ? I : Ud(e, u, y, I, E, O);
  if (N)
    return I;
  const U = Dw(e, y, x, c), Q = Nw(U), re = Tw(e, C, Q);
  let ne = a ? a(re, u) : re;
  if (m && le(ne) && (ne = Q$(ne)), process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const fe = {
      timestamp: Date.now(),
      key: le(u) ? u : Ht(I) ? I.key : "",
      locale: y || (Ht(I) ? I.locale : ""),
      format: le(I) ? I : Ht(I) ? I.source : "",
      message: ne
    };
    fe.meta = _t({}, e.__meta, /* @__PURE__ */ bw() || {}), J0(fe);
  }
  return ne;
}
function zw(e) {
  ot(e.list) ? e.list = e.list.map((t) => le(t) ? gu(t) : t) : Re(e.named) && Object.keys(e.named).forEach((t) => {
    le(e.named[t]) && (e.named[t] = gu(e.named[t]));
  });
}
function jd(e, t, r, a, n, o) {
  const { messages: i, onWarn: l, messageResolver: u, localeFallbacker: c } = e, d = c(e, a, r);
  let f = Ve(), m, p = null, v = r, _ = null;
  const k = "translate";
  for (let $ = 0; $ < d.length; $++) {
    if (m = _ = d[$], process.env.NODE_ENV !== "production" && r !== m && !Pd(r, m) && uo(n, t) && l(Xn(jt.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: m
    })), process.env.NODE_ENV !== "production" && r !== m) {
      const E = e.__v_emitter;
      E && E.emit("fallback", {
        type: k,
        key: t,
        from: v,
        to: _,
        groupId: `${k}:${t}`
      });
    }
    f = i[m] || Ve();
    let y = null, x, I;
    if (process.env.NODE_ENV !== "production" && Sn && (y = window.performance.now(), x = "intlify-message-resolve-start", I = "intlify-message-resolve-end", Mt && Mt(x)), (p = u(f, t)) === null && (p = f[t]), process.env.NODE_ENV !== "production" && Sn) {
      const E = window.performance.now(), N = e.__v_emitter;
      N && y && p && N.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: p,
        time: E - y,
        groupId: `${k}:${t}`
      }), x && I && Mt && qn && (Mt(I), qn("intlify message resolve", x, I));
    }
    if (le(p) || tn(p) || Ht(p))
      break;
    if (!$w(m, d)) {
      const E = Fi(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        m,
        o,
        k
      );
      E !== t && (p = E);
    }
    v = _;
  }
  return [p, m, f];
}
function Ud(e, t, r, a, n, o) {
  const { messageCompiler: i, warnHtmlMessage: l } = e;
  if (Ht(a)) {
    const m = a;
    return m.locale = m.locale || r, m.key = m.key || t, m;
  }
  if (i == null) {
    const m = (() => a);
    return m.locale = r, m.key = t, m;
  }
  let u = null, c, d;
  process.env.NODE_ENV !== "production" && Sn && (u = window.performance.now(), c = "intlify-message-compilation-start", d = "intlify-message-compilation-end", Mt && Mt(c));
  const f = i(a, Pw(e, r, n, a, l, o));
  if (process.env.NODE_ENV !== "production" && Sn) {
    const m = window.performance.now(), p = e.__v_emitter;
    p && u && p.emit("message-compilation", {
      type: "message-compilation",
      message: a,
      time: m - u,
      groupId: `translate:${t}`
    }), c && d && Mt && qn && (Mt(d), qn("intlify message compilation", c, d));
  }
  return f.locale = r, f.key = t, f.source = a, f;
}
function Tw(e, t, r) {
  let a = null, n, o;
  process.env.NODE_ENV !== "production" && Sn && (a = window.performance.now(), n = "intlify-message-evaluation-start", o = "intlify-message-evaluation-end", Mt && Mt(n));
  const i = t(r);
  if (process.env.NODE_ENV !== "production" && Sn) {
    const l = window.performance.now(), u = e.__v_emitter;
    u && a && u.emit("message-evaluation", {
      type: "message-evaluation",
      value: i,
      time: l - a,
      groupId: `translate:${t.key}`
    }), n && o && Mt && qn && (Mt(o), qn("intlify message evaluation", n, o));
  }
  return i;
}
function ni(...e) {
  const [t, r, a] = e, n = Ve();
  if (!le(t) && !bt(t) && !Ht(t) && !tn(t))
    throw $n(Ot.INVALID_ARGUMENT);
  const o = bt(t) ? String(t) : (Ht(t), t);
  return bt(r) ? n.plural = r : le(r) ? n.default = r : Le(r) && !lo(r) ? n.named = r : ot(r) && (n.list = r), bt(a) ? n.plural = a : le(a) ? n.default = a : Le(a) && _t(n, a), [o, n];
}
function Pw(e, t, r, a, n, o) {
  return {
    locale: t,
    key: r,
    warnHtmlMessage: n,
    onError: (i) => {
      if (o && o(i), process.env.NODE_ENV !== "production") {
        const l = Aw(a), u = `Message compilation error: ${i.message}`, c = i.location && l && r0(l, i.location.start.offset, i.location.end.offset), d = e.__v_emitter;
        d && l && d.emit("compile-error", {
          message: l,
          error: i.message,
          start: i.location && i.location.start.offset,
          end: i.location && i.location.end.offset,
          groupId: `translate:${r}`
        }), console.error(c ? `${u}
${c}` : u);
      } else
        throw i;
    },
    onCacheKey: (i) => J$(t, r, i)
  };
}
function Aw(e) {
  if (le(e))
    return e;
  if (e.loc && e.loc.source)
    return e.loc.source;
}
function Dw(e, t, r, a) {
  const { modifiers: n, pluralRules: o, messageResolver: i, fallbackLocale: l, fallbackWarn: u, missingWarn: c, fallbackContext: d } = e, m = {
    locale: t,
    modifiers: n,
    pluralRules: o,
    messages: (p, v) => {
      let _ = i(r, p);
      if (_ == null && (d || v)) {
        const [, , k] = jd(
          d || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          p,
          t,
          l,
          u,
          c
        );
        _ = i(k, p);
      }
      if (le(_) || tn(_)) {
        let k = !1;
        const y = Ud(e, p, t, _, p, () => {
          k = !0;
        });
        return k ? Cu : y;
      } else return Ht(_) ? _ : Cu;
    }
  };
  return e.processor && (m.processor = e.processor), a.list && (m.list = a.list), a.named && (m.named = a.named), bt(a.plural) && (m.pluralIndex = a.plural), m;
}
D0();
const Cw = "11.2.2";
function jw() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Bn().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Bn().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Bn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Bn().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const $t = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: q0,
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
function Wr(e, ...t) {
  return kr(e, null, process.env.NODE_ENV !== "production" ? { messages: Uw, args: t } : void 0);
}
const Uw = {
  [$t.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
  [$t.INVALID_ARGUMENT]: "Invalid argument",
  [$t.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
  [$t.NOT_INSTALLED]: "Need to install with `app.use` function",
  [$t.UNEXPECTED_ERROR]: "Unexpected error",
  [$t.REQUIRED_VALUE]: "Required in value: {0}",
  [$t.INVALID_VALUE]: "Invalid value",
  [$t.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
  [$t.NOT_INSTALLED_WITH_PROVIDE]: "Need to install with `provide` function",
  [$t.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
  [$t.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}, ri = /* @__PURE__ */ xn("__translateVNode"), ai = /* @__PURE__ */ xn("__datetimeParts"), oi = /* @__PURE__ */ xn("__numberParts"), ii = /* @__PURE__ */ xn("__enableEmitter"), li = /* @__PURE__ */ xn("__disableEmitter"), Lw = xn("__setPluralRules"), Ld = /* @__PURE__ */ xn("__injectWithOption"), si = /* @__PURE__ */ xn("__dispose"), un = {
  FALLBACK_TO_ROOT: cw,
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
}, Rw = {
  [un.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
  [un.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
  [un.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
  /**
   * @deprecated will be removed at vue-i18n v12
   */
  [un.DEPRECATE_LEGACY_MODE]: `Legacy API mode has been deprecated in v11. Use Composition API mode instead.
About how to use the Composition API mode, see https://vue-i18n.intlify.dev/guide/advanced/composition.html`,
  /**
   * @deprecated will be removed at vue-i18n v12
   */
  [un.DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE]: "'v-t' has been deprecated in v11. Use translate APIs ('t' or '$t') instead.",
  [un.DUPLICATE_USE_I18N_CALLING]: "Duplicate `useI18n` calling by local scope. Please don't call it on local scope, due to it does not work properly in component."
};
function Ma(e, ...t) {
  return io(Rw[e], ...t);
}
function Gr(e) {
  if (!Re(e) || tn(e))
    return e;
  for (const t in e)
    if (qt(e, t))
      if (!t.includes("."))
        Re(e[t]) && Gr(e[t]);
      else {
        const r = t.split("."), a = r.length - 1;
        let n = e, o = !1;
        for (let i = 0; i < a; i++) {
          if (r[i] === "__proto__")
            throw new Error(`unsafe key: ${r[i]}`);
          if (r[i] in n || (n[r[i]] = Ve()), !Re(n[r[i]])) {
            process.env.NODE_ENV !== "production" && gn(Ma(un.IGNORE_OBJ_FLATTEN, {
              key: r[i]
            })), o = !0;
            break;
          }
          n = n[r[i]];
        }
        if (o || (tn(n) ? Sd.includes(r[a]) || delete e[t] : (n[r[a]] = e[t], delete e[t])), !tn(n)) {
          const i = n[r[a]];
          Re(i) && Gr(i);
        }
      }
  return e;
}
function Rd(e, t) {
  const { messages: r, __i18n: a, messageResolver: n, flatJson: o } = t, i = Le(r) ? r : ot(a) ? Ve() : { [e]: Ve() };
  if (ot(a) && a.forEach((l) => {
    if ("locale" in l && "resource" in l) {
      const { locale: u, resource: c } = l;
      u ? (i[u] = i[u] || Ve(), Aa(c, i[u])) : Aa(c, i);
    } else
      le(l) && Aa(JSON.parse(l), i);
  }), n == null && o)
    for (const l in i)
      qt(i, l) && Gr(i[l]);
  return i;
}
function Vd(e) {
  return e.type;
}
function Vw(e, t, r) {
  let a = Re(t.messages) ? t.messages : Ve();
  "__i18nGlobal" in r && (a = Rd(e.locale.value, {
    messages: a,
    __i18n: r.__i18nGlobal
  }));
  const n = Object.keys(a);
  n.length && n.forEach((o) => {
    e.mergeLocaleMessage(o, a[o]);
  });
  {
    if (Re(t.datetimeFormats)) {
      const o = Object.keys(t.datetimeFormats);
      o.length && o.forEach((i) => {
        e.mergeDateTimeFormat(i, t.datetimeFormats[i]);
      });
    }
    if (Re(t.numberFormats)) {
      const o = Object.keys(t.numberFormats);
      o.length && o.forEach((i) => {
        e.mergeNumberFormat(i, t.numberFormats[i]);
      });
    }
  }
}
function Uu(e) {
  return w(Oh, null, e, 0);
}
function Mi() {
  return "currentInstance" in Co ? Co["currentInstance"] : Co.getCurrentInstance();
}
const Lu = "__INTLIFY_META__", Ru = () => [], Fw = () => !1;
let Vu = 0;
function Fu(e) {
  return ((t, r, a, n) => e(r, a, Mi() || void 0, n));
}
const Mw = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = Mi();
  let t = null;
  return e && (t = Vd(e)[Lu]) ? { [Lu]: t } : null;
};
function Bw(e = {}) {
  const { __root: t, __injectWithOption: r } = e, a = t === void 0, n = e.flatJson, o = Sn ? me : Ut;
  let i = at(e.inheritLocale) ? e.inheritLocale : !0;
  const l = o(
    // prettier-ignore
    t && i ? t.locale.value : le(e.locale) ? e.locale : Va
  ), u = o(
    // prettier-ignore
    t && i ? t.fallbackLocale.value : le(e.fallbackLocale) || ot(e.fallbackLocale) || Le(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : l.value
  ), c = o(Rd(l.value, e)), d = o(Le(e.datetimeFormats) ? e.datetimeFormats : { [l.value]: {} }), f = o(Le(e.numberFormats) ? e.numberFormats : { [l.value]: {} });
  let m = t ? t.missingWarn : at(e.missingWarn) || Ra(e.missingWarn) ? e.missingWarn : !0, p = t ? t.fallbackWarn : at(e.fallbackWarn) || Ra(e.fallbackWarn) ? e.fallbackWarn : !0, v = t ? t.fallbackRoot : at(e.fallbackRoot) ? e.fallbackRoot : !0, _ = !!e.fallbackFormat, k = qe(e.missing) ? e.missing : null, $ = qe(e.missing) ? Fu(e.missing) : null, y = qe(e.postTranslation) ? e.postTranslation : null, x = t ? t.warnHtmlMessage : at(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, I = !!e.escapeParameter;
  const E = t ? t.modifiers : Le(e.modifiers) ? e.modifiers : {};
  let N = e.pluralRules || t && t.pluralRules, O;
  O = (() => {
    a && Ou(null);
    const L = {
      version: Cw,
      locale: l.value,
      fallbackLocale: u.value,
      messages: c.value,
      modifiers: E,
      pluralRules: N,
      missing: $ === null ? void 0 : $,
      missingWarn: m,
      fallbackWarn: p,
      fallbackFormat: _,
      unresolving: !0,
      postTranslation: y === null ? void 0 : y,
      warnHtmlMessage: x,
      escapeParameter: I,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    L.datetimeFormats = d.value, L.numberFormats = f.value, L.__datetimeFormatters = Le(O) ? O.__datetimeFormatters : void 0, L.__numberFormatters = Le(O) ? O.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (L.__v_emitter = Le(O) ? O.__v_emitter : void 0);
    const H = yw(L);
    return a && Ou(H), H;
  })(), Pr(O, l.value, u.value);
  function U() {
    return [
      l.value,
      u.value,
      c.value,
      d.value,
      f.value
    ];
  }
  const Q = W({
    get: () => l.value,
    set: (L) => {
      O.locale = L, l.value = L;
    }
  }), re = W({
    get: () => u.value,
    set: (L) => {
      O.fallbackLocale = L, u.value = L, Pr(O, l.value, L);
    }
  }), ne = W(() => c.value), fe = /* @__PURE__ */ W(() => d.value), X = /* @__PURE__ */ W(() => f.value);
  function ae() {
    return qe(y) ? y : null;
  }
  function V(L) {
    y = L, O.postTranslation = L;
  }
  function te() {
    return k;
  }
  function J(L) {
    L !== null && ($ = Fu(L)), k = L, O.missing = $;
  }
  function Ce(L, H) {
    return L !== "translate" || !H.resolvedMessage;
  }
  const Ze = (L, H, Te, Me, Vt, on) => {
    U();
    let z;
    try {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, a || (O.fallbackContext = t ? _w() : void 0), z = L(O);
    } finally {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, a || (O.fallbackContext = void 0);
    }
    if (Te !== "translate exists" && // for not `te` (e.g `t`)
    bt(z) && z === so || Te === "translate exists" && !z) {
      const [T, Z] = H();
      if (process.env.NODE_ENV !== "production" && t && le(T) && Ce(Te, Z) && (v && (uo(p, T) || Td(m, T)) && gn(Ma(un.FALLBACK_TO_ROOT, {
        key: T,
        type: Te
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: ee } = O;
        ee && v && ee.emit("fallback", {
          type: Te,
          key: T,
          to: "global",
          groupId: `${Te}:${T}`
        });
      }
      return t && v ? Me(t) : Vt(T);
    } else {
      if (on(z))
        return z;
      throw Wr($t.UNEXPECTED_RETURN_TYPE);
    }
  };
  function it(...L) {
    return Ze((H) => Reflect.apply(ju, null, [H, ...L]), () => ni(...L), "translate", (H) => Reflect.apply(H.t, H, [...L]), (H) => H, (H) => le(H));
  }
  function Pt(...L) {
    const [H, Te, Me] = L;
    if (Me && !Re(Me))
      throw Wr($t.INVALID_ARGUMENT);
    return it(H, Te, _t({ resolvedMessage: !0 }, Me || {}));
  }
  function Ke(...L) {
    return Ze((H) => Reflect.apply(zu, null, [H, ...L]), () => ei(...L), "datetime format", (H) => Reflect.apply(H.d, H, [...L]), () => Fa, (H) => le(H) || ot(H));
  }
  function Pe(...L) {
    return Ze((H) => Reflect.apply(Pu, null, [H, ...L]), () => ti(...L), "number format", (H) => Reflect.apply(H.n, H, [...L]), () => Fa, (H) => le(H) || ot(H));
  }
  function Et(L) {
    return L.map((H) => le(H) || bt(H) || at(H) ? Uu(String(H)) : H);
  }
  const ue = {
    normalize: Et,
    interpolate: (L) => L,
    type: "vnode"
  };
  function Ee(...L) {
    return Ze((H) => {
      let Te;
      const Me = H;
      try {
        Me.processor = ue, Te = Reflect.apply(ju, null, [Me, ...L]);
      } finally {
        Me.processor = null;
      }
      return Te;
    }, () => ni(...L), "translate", (H) => H[ri](...L), (H) => [Uu(H)], (H) => ot(H));
  }
  function Ne(...L) {
    return Ze((H) => Reflect.apply(Pu, null, [H, ...L]), () => ti(...L), "number format", (H) => H[oi](...L), Ru, (H) => le(H) || ot(H));
  }
  function rt(...L) {
    return Ze((H) => Reflect.apply(zu, null, [H, ...L]), () => ei(...L), "datetime format", (H) => H[ai](...L), Ru, (H) => le(H) || ot(H));
  }
  function lt(L) {
    N = L, O.pluralRules = N;
  }
  function Je(L, H) {
    return Ze(() => {
      if (!L)
        return !1;
      const Te = le(H) ? H : l.value, Me = Jt(Te), Vt = O.messageResolver(Me, L);
      return tn(Vt) || Ht(Vt) || le(Vt);
    }, () => [L], "translate exists", (Te) => Reflect.apply(Te.te, Te, [L, H]), Fw, (Te) => at(Te));
  }
  function Rt(L) {
    let H = null;
    const Te = Id(O, u.value, l.value);
    for (let Me = 0; Me < Te.length; Me++) {
      const Vt = c.value[Te[Me]] || {}, on = O.messageResolver(Vt, L);
      if (on != null) {
        H = on;
        break;
      }
    }
    return H;
  }
  function hn(L) {
    const H = Rt(L);
    return H ?? (t ? t.tm(L) || {} : {});
  }
  function Jt(L) {
    return c.value[L] || {};
  }
  function Yt(L, H) {
    if (n) {
      const Te = { [L]: H };
      for (const Me in Te)
        qt(Te, Me) && Gr(Te[Me]);
      H = Te[L];
    }
    c.value[L] = H, O.messages = c.value;
  }
  function En(L, H) {
    c.value[L] = c.value[L] || {};
    const Te = { [L]: H };
    if (n)
      for (const Me in Te)
        qt(Te, Me) && Gr(Te[Me]);
    H = Te[L], Aa(H, c.value[L]), O.messages = c.value;
  }
  function b(L) {
    return d.value[L] || {};
  }
  function S(L, H) {
    d.value[L] = H, O.datetimeFormats = d.value, Tu(O, L, H);
  }
  function R(L, H) {
    d.value[L] = _t(d.value[L] || {}, H), O.datetimeFormats = d.value, Tu(O, L, H);
  }
  function Y(L) {
    return f.value[L] || {};
  }
  function Se(L, H) {
    f.value[L] = H, O.numberFormats = f.value, Au(O, L, H);
  }
  function xe(L, H) {
    f.value[L] = _t(f.value[L] || {}, H), O.numberFormats = f.value, Au(O, L, H);
  }
  Vu++, t && Sn && (Ue(t.locale, (L) => {
    i && (l.value = L, O.locale = L, Pr(O, l.value, u.value));
  }), Ue(t.fallbackLocale, (L) => {
    i && (u.value = L, O.fallbackLocale = L, Pr(O, l.value, u.value));
  }));
  const we = {
    id: Vu,
    locale: Q,
    fallbackLocale: re,
    get inheritLocale() {
      return i;
    },
    set inheritLocale(L) {
      i = L, L && t && (l.value = t.locale.value, u.value = t.fallbackLocale.value, Pr(O, l.value, u.value));
    },
    get availableLocales() {
      return Object.keys(c.value).sort();
    },
    messages: ne,
    get modifiers() {
      return E;
    },
    get pluralRules() {
      return N || {};
    },
    get isGlobal() {
      return a;
    },
    get missingWarn() {
      return m;
    },
    set missingWarn(L) {
      m = L, O.missingWarn = m;
    },
    get fallbackWarn() {
      return p;
    },
    set fallbackWarn(L) {
      p = L, O.fallbackWarn = p;
    },
    get fallbackRoot() {
      return v;
    },
    set fallbackRoot(L) {
      v = L;
    },
    get fallbackFormat() {
      return _;
    },
    set fallbackFormat(L) {
      _ = L, O.fallbackFormat = _;
    },
    get warnHtmlMessage() {
      return x;
    },
    set warnHtmlMessage(L) {
      x = L, O.warnHtmlMessage = L;
    },
    get escapeParameter() {
      return I;
    },
    set escapeParameter(L) {
      I = L, O.escapeParameter = L;
    },
    t: it,
    getLocaleMessage: Jt,
    setLocaleMessage: Yt,
    mergeLocaleMessage: En,
    getPostTranslationHandler: ae,
    setPostTranslationHandler: V,
    getMissingHandler: te,
    setMissingHandler: J,
    [Lw]: lt
  };
  return we.datetimeFormats = fe, we.numberFormats = X, we.rt = Pt, we.te = Je, we.tm = hn, we.d = Ke, we.n = Pe, we.getDateTimeFormat = b, we.setDateTimeFormat = S, we.mergeDateTimeFormat = R, we.getNumberFormat = Y, we.setNumberFormat = Se, we.mergeNumberFormat = xe, we[Ld] = r, we[ri] = Ee, we[ai] = rt, we[oi] = Ne, process.env.NODE_ENV !== "production" && (we[ii] = (L) => {
    O.__v_emitter = L;
  }, we[li] = () => {
    O.__v_emitter = void 0;
  }), we;
}
function Mu(e, t) {
}
const Bi = {
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
function Zw({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((a, n) => [
    ...a,
    // prettier-ignore
    ...n.type === je ? n.children : [n]
  ], []) : t.reduce((r, a) => {
    const n = e[a];
    return n && (r[a] = n()), r;
  }, Ve());
}
function Fd() {
  return je;
}
_t({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => bt(e) || !isNaN(e)
  }
}, Bi);
function Ww(e) {
  return ot(e) && !le(e[0]);
}
function Md(e, t, r, a) {
  const { slots: n, attrs: o } = t;
  return () => {
    const i = { part: !0 };
    let l = Ve();
    e.locale && (i.locale = e.locale), le(e.format) ? i.key = e.format : Re(e.format) && (le(e.format.key) && (i.key = e.format.key), l = Object.keys(e.format).reduce((m, p) => r.includes(p) ? _t(Ve(), m, { [p]: e.format[p] }) : m, Ve()));
    const u = a(e.value, i, l);
    let c = [i.key];
    ot(u) ? c = u.map((m, p) => {
      const v = n[m.type], _ = v ? v({ [m.type]: m.value, index: p, parts: u }) : [m.value];
      return Ww(_) && (_[0].key = `${m.type}-${p}`), _;
    }) : le(u) && (c = [u]);
    const d = _t(Ve(), o), f = le(e.tag) || Re(e.tag) ? e.tag : Fd();
    return mn(f, d, c);
  };
}
_t({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Bi);
const Gw = /* @__PURE__ */ xn("global-vue-i18n");
function jn(e = {}) {
  const t = Mi();
  if (t == null)
    throw Wr($t.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Wr($t.NOT_INSTALLED);
  const r = Hw(t), a = Jw(r), n = Vd(t), o = Kw(e, n);
  if (o === "global")
    return Vw(a, e, n), a;
  if (o === "parent") {
    let u = Yw(r, t, e.__useComponent);
    return u == null && (process.env.NODE_ENV !== "production" && gn(Ma(un.NOT_FOUND_PARENT_SCOPE)), u = a), u;
  }
  const i = r;
  let l = i.__getInstance(t);
  if (l == null) {
    const u = _t({}, e);
    "__i18n" in n && (u.__i18n = n.__i18n), a && (u.__root = a), l = Bw(u), i.__composerExtend && (l[si] = i.__composerExtend(l)), Xw(i, t, l), i.__setInstance(t, l);
  } else
    process.env.NODE_ENV !== "production" && o === "local" && gn(Ma(un.DUPLICATE_USE_I18N_CALLING));
  return l;
}
function Hw(e) {
  const t = vn(e.isCE ? Gw : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw Wr(e.isCE ? $t.NOT_INSTALLED_WITH_PROVIDE : $t.UNEXPECTED_ERROR);
  return t;
}
function Kw(e, t) {
  return lo(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Jw(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function Yw(e, t, r = !1) {
  let a = null;
  const n = t.root;
  let o = qw(t, r);
  for (; o != null; ) {
    const i = e;
    if (e.mode === "composition")
      a = i.__getInstance(o);
    else if (__VUE_I18N_LEGACY_API__) {
      const l = i.__getInstance(o);
      l != null && (a = l.__composer, r && a && !a[Ld] && (a = null));
    }
    if (a != null || n === o)
      break;
    o = o.parent;
  }
  return a;
}
function qw(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function Xw(e, t, r) {
  let a = null;
  An(() => {
    if (process.env.NODE_ENV !== "production") {
      t.__VUE_I18N__ = r, a = a0();
      const n = r;
      n[ii] && n[ii](a), a.on("*", Mu);
    }
  }, t), ro(() => {
    const n = r;
    process.env.NODE_ENV !== "production" && (a && a.off("*", Mu), n[li] && n[li](), delete t.__VUE_I18N__), e.__deleteInstance(t);
    const o = n[si];
    o && (o(), delete n[si]);
  }, t);
}
_t({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Bi);
jw();
pw(G0);
vw(uw);
gw(Id);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = Bn();
  e.__INTLIFY__ = !0, H0(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
const Qw = /* @__PURE__ */ D({
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
    const r = e, a = t, n = ve(r, "class"), o = He(n, a);
    return (i, l) => (g(), A(s(Zh), K({ "data-slot": "pagination" }, s(o), {
      class: s(G)("mx-auto flex w-full justify-center", r.class)
    }), {
      default: h((u) => [
        j(i.$slots, "default", zt(Lt(u)))
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ek = /* @__PURE__ */ D({
  __name: "PaginationContent",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = ve(t, "class");
    return (a, n) => (g(), A(s(Wh), K({ "data-slot": "pagination-content" }, s(r), {
      class: s(G)("flex flex-row items-center gap-1", t.class)
    }), {
      default: h((o) => [
        j(a.$slots, "default", zt(Lt(o)))
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), tk = /* @__PURE__ */ D({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, r = ve(t, "class", "size"), a = Qe(r);
    return (n, o) => (g(), A(s(Gh), K({
      "data-slot": "pagination-first",
      class: s(G)(s(an)({ variant: "outline", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, s(a)), {
      default: h(() => [
        j(n.$slots, "default", {}, () => [
          w(s(Zc), { class: "size-4" }),
          o[0] || (o[0] = ie("span", { class: "hidden sm:block" }, "First", -1))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), nk = /* @__PURE__ */ D({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, r = ve(t, "class", "size"), a = Qe(r);
    return (n, o) => (g(), A(s(Hh), K({
      "data-slot": "pagination-last",
      class: s(G)(s(an)({ variant: "outline", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, s(a)), {
      default: h(() => [
        j(n.$slots, "default", {}, () => [
          o[0] || (o[0] = ie("span", { class: "hidden sm:block" }, "Last", -1)),
          w(s(Wc), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), rk = /* @__PURE__ */ D({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, r = ve(t, "class", "size"), a = Qe(r);
    return (n, o) => (g(), A(s(Kh), K({
      "data-slot": "pagination-next",
      class: s(G)(s(an)({ variant: "outline", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, s(a)), {
      default: h(() => [
        j(n.$slots, "default", {}, () => [
          o[0] || (o[0] = ie("span", { class: "hidden sm:block" }, "Next", -1)),
          w(s(Hn))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ak = /* @__PURE__ */ D({
  __name: "PaginationPrevious",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, r = ve(t, "class", "size"), a = Qe(r);
    return (n, o) => (g(), A(s(Jh), K({
      "data-slot": "pagination-previous",
      class: s(G)(s(an)({ variant: "outline", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, s(a)), {
      default: h(() => [
        j(n.$slots, "default", {}, () => [
          w(s(zi)),
          o[0] || (o[0] = ie("span", { class: "hidden sm:block" }, "Previous", -1))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Bd = /* @__PURE__ */ D({
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
    const n = He(e, t);
    return (o, i) => (g(), A(s(Yh), K({ "data-slot": "select" }, s(n)), {
      default: h(() => [
        j(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zd = /* @__PURE__ */ D({
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
    const r = e, a = t, n = ve(r, "class"), o = He(n, a);
    return (i, l) => (g(), A(s(qh), null, {
      default: h(() => [
        w(s(Xh), K({ "data-slot": "select-content" }, { ...s(o), ...i.$attrs }, {
          class: s(G)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--reka-select-content-available-height) min-w-[8rem] overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
            e.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            r.class
          )
        }), {
          default: h(() => [
            w(s(lk)),
            w(s(Qh), {
              class: be(s(G)("p-1", e.position === "popper" && "h-[var(--reka-select-trigger-height)] w-full min-w-[var(--reka-select-trigger-width)] scroll-my-1"))
            }, {
              default: h(() => [
                j(i.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            w(s(ik))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), ok = { class: "absolute right-2 flex size-3.5 items-center justify-center" }, Wd = /* @__PURE__ */ D({
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
    const t = e, r = ve(t, "class"), a = Qe(r);
    return (n, o) => (g(), A(s(eb), K({ "data-slot": "select-item" }, s(a), {
      class: s(G)(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        t.class
      )
    }), {
      default: h(() => [
        ie("span", ok, [
          w(s(tb), null, {
            default: h(() => [
              w(s(ao), { class: "size-4" })
            ]),
            _: 1
          })
        ]),
        w(s(nb), null, {
          default: h(() => [
            j(n.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ik = /* @__PURE__ */ D({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = ve(t, "class"), a = Qe(r);
    return (n, o) => (g(), A(s(rb), K({ "data-slot": "select-scroll-down-button" }, s(a), {
      class: s(G)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: h(() => [
        j(n.$slots, "default", {}, () => [
          w(s(Gn), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), lk = /* @__PURE__ */ D({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = ve(t, "class"), a = Qe(r);
    return (n, o) => (g(), A(s(ab), K({ "data-slot": "select-scroll-up-button" }, s(a), {
      class: s(G)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: h(() => [
        j(n.$slots, "default", {}, () => [
          w(s(m_), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), sk = /* @__PURE__ */ D({
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
    const t = e, r = ve(t, "class", "size"), a = Qe(r);
    return (n, o) => (g(), A(s(Bc), K({
      "data-slot": "select-trigger",
      "data-size": e.size
    }, s(a), {
      class: s(G)(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        t.class
      )
    }), {
      default: h(() => [
        j(n.$slots, "default"),
        w(s(ob), { "as-child": "" }, {
          default: h(() => [
            w(s(Gn), { class: "size-3" })
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["data-size", "class"]));
  }
}), Gd = /* @__PURE__ */ D({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), A(s(ib), K({ "data-slot": "select-value" }, t), {
      default: h(() => [
        j(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zi = /* @__PURE__ */ D({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = ve(t, "class");
    return (a, n) => (g(), A(s(lb), K({ "data-slot": "dropdown-menu-separator" }, s(r), {
      class: s(G)("bg-border -mx-1 my-1 h-px", t.class)
    }), null, 16, ["class"]));
  }
}), uk = {
  key: 0,
  class: "text-xs font-semibold px-2 py-2"
}, ck = { key: 1 }, dk = {
  key: 0,
  class: "-mt-2"
}, Wi = /* @__PURE__ */ D({
  inheritAttrs: !1,
  __name: "SelectOptions",
  props: /* @__PURE__ */ vt({
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
  emits: /* @__PURE__ */ vt(["onAddItem"], ["update:modelValue"]),
  setup(e) {
    const t = e;
    function r(u) {
      return {
        "common.select": "Select",
        "common.reset": "Reset",
        "common.addItem": "Add Item"
      }[u] || u;
    }
    const a = ft(e, "modelValue"), n = W(() => Object.fromEntries(M(t.options).map((u) => [u.value, u]))), o = W(() => a.value ? t.multiple ? Array.isArray(a.value) ? a.value.map((u) => n.value[u]).filter(Boolean) : [] : n.value[a.value] ? [n.value[a.value]] : [] : []);
    function i() {
      a.value = t.initialValues ?? (t.multiple ? [] : void 0);
    }
    const l = W(() => t.initialValues === void 0 ? a.value !== void 0 : JSON.stringify(t.initialValues) !== JSON.stringify(a.value));
    return (u, c) => (g(), F(je, null, [
      w(s(Bd), {
        modelValue: a.value,
        "onUpdate:modelValue": c[1] || (c[1] = (d) => a.value = d),
        multiple: e.multiple
      }, {
        default: h(() => [
          w(s(Bc), K({
            class: s(G)(
              "w-full data-[placeholder]:text-muted-foreground ",
              t.class
            )
          }, u.$attrs, { "as-child": "" }), {
            default: h(() => [
              w(pd, { variant: "outline" }, {
                default: h(() => [
                  j(u.$slots, "default", { selectedOptions: o.value }, () => [
                    w(s(Gd), {
                      placeholder: e.placeholder || r("common.select"),
                      class: "flex-wrap"
                    }, {
                      default: h(() => [
                        e.customValueComponent && o.value.length > 0 ? (g(!0), F(je, { key: 0 }, Ge(o.value, (d) => (g(), A(mt(e.customValueComponent), K({
                          key: d.value,
                          option: d,
                          "selected-options": o.value
                        }, { ref_for: !0 }, e.customValueProps), null, 16, ["option", "selected-options"]))), 128)) : pe("", !0)
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
          w(s(Zd), null, {
            default: h(() => [
              e.label ? (g(), F("div", uk, oe(e.label), 1)) : pe("", !0),
              (g(!0), F(je, null, Ge(M(e.options), (d) => (g(), A(s(Wd), {
                key: String(d.value),
                value: d.value
              }, {
                default: h(() => [
                  he(oe(d.label), 1)
                ]),
                _: 2
              }, 1032, ["value"]))), 128)),
              e.showResetButton && l.value ? (g(), F("div", ck, [
                w(Zi),
                w(pt, {
                  class: "w-full",
                  variant: "ghost",
                  size: "sm",
                  onClick: c[0] || (c[0] = (d) => i())
                }, {
                  default: h(() => [
                    w(s(b_)),
                    he(" " + oe(r("common.reset")), 1)
                  ]),
                  _: 1
                })
              ])) : pe("", !0)
            ]),
            _: 1
          })
        ]),
        _: 3
      }, 8, ["modelValue", "multiple"]),
      e.showAddItemButton ? (g(), F("div", dk, [
        w(pt, {
          size: "sm",
          class: "sticky bottom-0",
          variant: "ghost",
          onClick: c[2] || (c[2] = (d) => u.$emit("onAddItem"))
        }, {
          default: h(() => [
            w(s(oo)),
            he(" " + oe(r("common.addItem")), 1)
          ]),
          _: 1
        })
      ])) : pe("", !0)
    ], 64));
  }
}), fk = {
  key: 0,
  class: "flex items-center gap-2 min-w-0"
}, mk = { class: "text-sm text-muted-foreground hidden truncate @xl:block" }, pk = { class: "text-sm truncate min-w-0 mr-2 text-muted-foreground" }, vk = { class: "hidden @2xl:block" }, gk = { class: "@2xl:hidden" }, hk = /* @__PURE__ */ D({
  __name: "PaginationCustom",
  props: /* @__PURE__ */ vt({
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
  emits: /* @__PURE__ */ vt(["update:page"], ["update:itemsPerPage"]),
  setup(e, { emit: t }) {
    const r = e, a = t, n = ve(r, "class"), o = He(n, a), i = ft(e, "itemsPerPage"), { t: l } = jn();
    return (u, c) => (g(), F("div", null, [
      w(s(Qw), K(s(o), { class: "flex items-center gap-4 @xl:gap-8 @4xl:gap-12" }), {
        default: h(({ page: d, pageCount: f }) => [
          e.hideItemsPerPage ? pe("", !0) : (g(), F("div", fk, [
            ie("span", mk, oe(s(l)("dataTable.rowsPerPage")), 1),
            w(Wi, {
              class: "!w-auto",
              options: e.pageSizeOptions.map((m) => ({ value: m, label: `${m}` })),
              "model-value": i.value,
              "onUpdate:modelValue": c[0] || (c[0] = (m) => i.value = m)
            }, null, 8, ["options", "model-value"])
          ])),
          w(s(ek), null, {
            default: h(() => [
              ie("div", pk, [
                ie("span", vk, oe(s(l)("dataTable.pageOf", { page: d, pageCount: f })), 1),
                ie("span", gk, oe(d) + " / " + oe(f), 1)
              ]),
              w(s(tk), null, {
                default: h(() => [
                  w(s(Zc), { class: "size-4" })
                ]),
                _: 1
              }),
              w(s(ak), null, {
                default: h(() => [
                  w(s(zi))
                ]),
                _: 1
              }),
              w(s(rk), { variant: "outline" }, {
                default: h(() => [
                  w(s(Hn))
                ]),
                _: 1
              }),
              w(s(nk), { variant: "outline" }, {
                default: h(() => [
                  w(s(Wc), { class: "size-4" })
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
}), bk = /* @__PURE__ */ D({
  __name: "Badge",
  props: {
    variant: {},
    class: {}
  },
  setup(e) {
    const t = rr(
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
    ), r = e;
    return (a, n) => (g(), F("div", {
      class: be(s(G)(s(t)({ variant: r.variant }), r.class))
    }, [
      j(a.$slots, "default")
    ], 2));
  }
}), Da = /* @__PURE__ */ D({
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
    const r = e, a = t, n = ve(r, "class"), o = He(n, a);
    return (i, l) => (g(), A(s(sb), K({ "data-slot": "checkbox" }, s(o), {
      class: s(G)(
        "peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        r.class
      )
    }), {
      default: h(() => [
        w(s(ub), {
          "data-slot": "checkbox-indicator",
          class: "flex items-center justify-center text-current transition-none"
        }, {
          default: h(() => [
            j(i.$slots, "default", {}, () => [
              w(s(ao), { class: "size-3.5" })
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), _k = /* @__PURE__ */ D({
  __name: "Empty",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), F("div", {
      "data-slot": "empty",
      class: be(s(G)(
        "flex min-w-0 flex-1 flex-col items-center justify-center gap-6 text-balance rounded-lg border-dashed p-6 text-center md:p-12",
        t.class
      ))
    }, [
      j(r.$slots, "default")
    ], 2));
  }
}), yk = /* @__PURE__ */ D({
  __name: "EmptyContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), F("div", {
      "data-slot": "empty-content",
      class: be(s(G)(
        "flex w-full min-w-0 max-w-sm flex-col items-center gap-4 text-balance text-sm",
        t.class
      ))
    }, [
      j(r.$slots, "default")
    ], 2));
  }
}), $k = /* @__PURE__ */ D({
  __name: "EmptyDescription",
  props: {
    class: {}
  },
  setup(e) {
    return (t, r) => (g(), F("p", {
      "data-slot": "empty-description",
      class: be(s(G)(
        "text-muted-foreground [&>a:hover]:text-primary text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4",
        t.$attrs.class ?? ""
      ))
    }, [
      j(t.$slots, "default")
    ], 2));
  }
}), wk = /* @__PURE__ */ D({
  __name: "EmptyHeader",
  props: {
    class: {}
  },
  setup(e) {
    return (t, r) => (g(), F("div", {
      "data-slot": "empty-header",
      class: be(s(G)(
        "flex max-w-sm flex-col items-center gap-2 text-center",
        t.$attrs.class ?? ""
      ))
    }, [
      j(t.$slots, "default")
    ], 2));
  }
}), kk = ["data-variant"], Sk = /* @__PURE__ */ D({
  __name: "EmptyMedia",
  props: {
    class: {},
    variant: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), F("div", {
      "data-slot": "empty-icon",
      "data-variant": e.variant,
      class: be(s(G)(s(Hd)({ variant: e.variant }), t.class))
    }, [
      j(r.$slots, "default")
    ], 10, kk));
  }
}), Ik = ["data-variant"], xk = /* @__PURE__ */ D({
  __name: "EmptyTitle",
  props: {
    class: {},
    variant: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), F("div", {
      "data-slot": "empty-icon",
      "data-variant": e.variant,
      class: be(s(G)(s(Hd)({ variant: e.variant }), t.class))
    }, [
      j(r.$slots, "default")
    ], 10, Ik));
  }
}), Hd = rr(
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
function Ok(e, t) {
  const r = Ut(null), a = () => {
    e.value ? r.value = e.value.querySelector(t) : r.value = null;
  };
  return An(a), nr(() => {
    a();
  }), r;
}
const Kn = Ut([]), Kd = (e, t) => Kn.value.push({ callback: e, id: t });
function Jd(e) {
  return Kn.value = typeof e == "string" ? Kn.value.filter(({ id: t }) => t !== e) : Kn.value.filter(({ callback: t }) => t !== e);
}
const Gi = (e) => {
  const t = e !== void 0 ? e : Kn.value.length - 1;
  return t >= 0 && !Kn.value[t].callback() && Gi(t - 1);
};
document.body.addEventListener("keydown", (e) => {
  e.key === "Escape" && Kn.value.length > 0 && (e.stopPropagation(), !e.target || !["INPUT"].includes(e.target?.tagName) ? Gi() : e.target.blur());
});
const Yd = { add: Kd, remove: Jd, invokeLatest: Gi };
function Ek(e, t) {
  Ue(t, (r) => r ? Kd(e) : Jd(e), { immediate: !0 });
}
function Nk(e) {
  const { arrivedState: t, x: r, y: a } = i$(e), n = pn({
    top: !1,
    right: !1,
    left: !1,
    bottom: !1
  }), o = () => {
    const i = M(e);
    if (!i)
      return;
    const l = i.scrollWidth > i.clientWidth, u = i.scrollHeight > i.clientHeight;
    n.left = !l || t.left, n.right = !l || t.right, n.top = !u || t.top, n.bottom = !u || t.bottom;
  };
  return Ue(r, () => o()), Ue(a, () => o()), Ue(e, () => o()), o$(e, () => o()), n;
}
const qd = Object.freeze({
  status: "aborted"
});
function P(e, t, r) {
  function a(l, u) {
    if (l._zod || Object.defineProperty(l, "_zod", {
      value: {
        def: u,
        constr: i,
        traits: /* @__PURE__ */ new Set()
      },
      enumerable: !1
    }), l._zod.traits.has(e))
      return;
    l._zod.traits.add(e), t(l, u);
    const c = i.prototype, d = Object.keys(c);
    for (let f = 0; f < d.length; f++) {
      const m = d[f];
      m in l || (l[m] = c[m].bind(l));
    }
  }
  const n = r?.Parent ?? Object;
  class o extends n {
  }
  Object.defineProperty(o, "name", { value: e });
  function i(l) {
    var u;
    const c = r?.Parent ? new o() : this;
    a(c, l), (u = c._zod).deferred ?? (u.deferred = []);
    for (const d of c._zod.deferred)
      d();
    return c;
  }
  return Object.defineProperty(i, "init", { value: a }), Object.defineProperty(i, Symbol.hasInstance, {
    value: (l) => r?.Parent && l instanceof r.Parent ? !0 : l?._zod?.traits?.has(e)
  }), Object.defineProperty(i, "name", { value: e }), i;
}
const Xd = Symbol("zod_brand");
class Jn extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class co extends Error {
  constructor(t) {
    super(`Encountered unidirectional transform during encode: ${t}`), this.name = "ZodEncodeError";
  }
}
const Ba = {};
function Tt(e) {
  return e && Object.assign(Ba, e), Ba;
}
function zk(e) {
  return e;
}
function Tk(e) {
  return e;
}
function Pk(e) {
}
function Ak(e) {
  throw new Error();
}
function Dk(e) {
}
function Hi(e) {
  const t = Object.values(e).filter((a) => typeof a == "number");
  return Object.entries(e).filter(([a, n]) => t.indexOf(+a) === -1).map(([a, n]) => n);
}
function q(e, t = "|") {
  return e.map((r) => $e(r)).join(t);
}
function Za(e, t) {
  return typeof t == "bigint" ? t.toString() : t;
}
function ea(e) {
  return {
    get value() {
      {
        const t = e();
        return Object.defineProperty(this, "value", { value: t }), t;
      }
    }
  };
}
function ar(e) {
  return e == null;
}
function fo(e) {
  const t = e.startsWith("^") ? 1 : 0, r = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, r);
}
function Qd(e, t) {
  const r = (e.toString().split(".")[1] || "").length, a = t.toString();
  let n = (a.split(".")[1] || "").length;
  if (n === 0 && /\d?e-\d?/.test(a)) {
    const u = a.match(/\d?e-(\d?)/);
    u?.[1] && (n = Number.parseInt(u[1]));
  }
  const o = r > n ? r : n, i = Number.parseInt(e.toFixed(o).replace(".", "")), l = Number.parseInt(t.toFixed(o).replace(".", ""));
  return i % l / 10 ** o;
}
const Bu = Symbol("evaluating");
function De(e, t, r) {
  let a;
  Object.defineProperty(e, t, {
    get() {
      if (a !== Bu)
        return a === void 0 && (a = Bu, a = r()), a;
    },
    set(n) {
      Object.defineProperty(e, t, {
        value: n
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function Ck(e) {
  return Object.create(Object.getPrototypeOf(e), Object.getOwnPropertyDescriptors(e));
}
function Un(e, t, r) {
  Object.defineProperty(e, t, {
    value: r,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function On(...e) {
  const t = {};
  for (const r of e) {
    const a = Object.getOwnPropertyDescriptors(r);
    Object.assign(t, a);
  }
  return Object.defineProperties({}, t);
}
function jk(e) {
  return On(e._zod.def);
}
function Uk(e, t) {
  return t ? t.reduce((r, a) => r?.[a], e) : e;
}
function Lk(e) {
  const t = Object.keys(e), r = t.map((a) => e[a]);
  return Promise.all(r).then((a) => {
    const n = {};
    for (let o = 0; o < t.length; o++)
      n[t[o]] = a[o];
    return n;
  });
}
function Rk(e = 10) {
  const t = "abcdefghijklmnopqrstuvwxyz";
  let r = "";
  for (let a = 0; a < e; a++)
    r += t[Math.floor(Math.random() * t.length)];
  return r;
}
function ui(e) {
  return JSON.stringify(e);
}
function ef(e) {
  return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const Ki = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function fr(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const tf = ea(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const e = Function;
    return new e(""), !0;
  } catch {
    return !1;
  }
});
function Qn(e) {
  if (fr(e) === !1)
    return !1;
  const t = e.constructor;
  if (t === void 0 || typeof t != "function")
    return !0;
  const r = t.prototype;
  return !(fr(r) === !1 || Object.prototype.hasOwnProperty.call(r, "isPrototypeOf") === !1);
}
function mo(e) {
  return Qn(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
function Vk(e) {
  let t = 0;
  for (const r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t++;
  return t;
}
const Fk = (e) => {
  const t = typeof e;
  switch (t) {
    case "undefined":
      return "undefined";
    case "string":
      return "string";
    case "number":
      return Number.isNaN(e) ? "nan" : "number";
    case "boolean":
      return "boolean";
    case "function":
      return "function";
    case "bigint":
      return "bigint";
    case "symbol":
      return "symbol";
    case "object":
      return Array.isArray(e) ? "array" : e === null ? "null" : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? "promise" : typeof Map < "u" && e instanceof Map ? "map" : typeof Set < "u" && e instanceof Set ? "set" : typeof Date < "u" && e instanceof Date ? "date" : typeof File < "u" && e instanceof File ? "file" : "object";
    default:
      throw new Error(`Unknown data type: ${t}`);
  }
}, Wa = /* @__PURE__ */ new Set(["string", "number", "symbol"]), nf = /* @__PURE__ */ new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"]);
function In(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Kt(e, t, r) {
  const a = new e._zod.constr(t ?? e._zod.def);
  return (!t || r?.parent) && (a._zod.parent = e), a;
}
function B(e) {
  const t = e;
  if (!t)
    return {};
  if (typeof t == "string")
    return { error: () => t };
  if (t?.message !== void 0) {
    if (t?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    t.error = t.message;
  }
  return delete t.message, typeof t.error == "string" ? { ...t, error: () => t.error } : t;
}
function Mk(e) {
  let t;
  return new Proxy({}, {
    get(r, a, n) {
      return t ?? (t = e()), Reflect.get(t, a, n);
    },
    set(r, a, n, o) {
      return t ?? (t = e()), Reflect.set(t, a, n, o);
    },
    has(r, a) {
      return t ?? (t = e()), Reflect.has(t, a);
    },
    deleteProperty(r, a) {
      return t ?? (t = e()), Reflect.deleteProperty(t, a);
    },
    ownKeys(r) {
      return t ?? (t = e()), Reflect.ownKeys(t);
    },
    getOwnPropertyDescriptor(r, a) {
      return t ?? (t = e()), Reflect.getOwnPropertyDescriptor(t, a);
    },
    defineProperty(r, a, n) {
      return t ?? (t = e()), Reflect.defineProperty(t, a, n);
    }
  });
}
function $e(e) {
  return typeof e == "bigint" ? e.toString() + "n" : typeof e == "string" ? `"${e}"` : `${e}`;
}
function rf(e) {
  return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
const af = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
}, of = {
  int64: [/* @__PURE__ */ BigInt("-9223372036854775808"), /* @__PURE__ */ BigInt("9223372036854775807")],
  uint64: [/* @__PURE__ */ BigInt(0), /* @__PURE__ */ BigInt("18446744073709551615")]
};
function lf(e, t) {
  const r = e._zod.def, a = On(e._zod.def, {
    get shape() {
      const n = {};
      for (const o in t) {
        if (!(o in r.shape))
          throw new Error(`Unrecognized key: "${o}"`);
        t[o] && (n[o] = r.shape[o]);
      }
      return Un(this, "shape", n), n;
    },
    checks: []
  });
  return Kt(e, a);
}
function sf(e, t) {
  const r = e._zod.def, a = On(e._zod.def, {
    get shape() {
      const n = { ...e._zod.def.shape };
      for (const o in t) {
        if (!(o in r.shape))
          throw new Error(`Unrecognized key: "${o}"`);
        t[o] && delete n[o];
      }
      return Un(this, "shape", n), n;
    },
    checks: []
  });
  return Kt(e, a);
}
function uf(e, t) {
  if (!Qn(t))
    throw new Error("Invalid input to extend: expected a plain object");
  const r = e._zod.def.checks;
  if (r && r.length > 0)
    throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
  const n = On(e._zod.def, {
    get shape() {
      const o = { ...e._zod.def.shape, ...t };
      return Un(this, "shape", o), o;
    },
    checks: []
  });
  return Kt(e, n);
}
function cf(e, t) {
  if (!Qn(t))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const r = {
    ...e._zod.def,
    get shape() {
      const a = { ...e._zod.def.shape, ...t };
      return Un(this, "shape", a), a;
    },
    checks: e._zod.def.checks
  };
  return Kt(e, r);
}
function df(e, t) {
  const r = On(e._zod.def, {
    get shape() {
      const a = { ...e._zod.def.shape, ...t._zod.def.shape };
      return Un(this, "shape", a), a;
    },
    get catchall() {
      return t._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return Kt(e, r);
}
function ff(e, t, r) {
  const a = On(t._zod.def, {
    get shape() {
      const n = t._zod.def.shape, o = { ...n };
      if (r)
        for (const i in r) {
          if (!(i in n))
            throw new Error(`Unrecognized key: "${i}"`);
          r[i] && (o[i] = e ? new e({
            type: "optional",
            innerType: n[i]
          }) : n[i]);
        }
      else
        for (const i in n)
          o[i] = e ? new e({
            type: "optional",
            innerType: n[i]
          }) : n[i];
      return Un(this, "shape", o), o;
    },
    checks: []
  });
  return Kt(t, a);
}
function mf(e, t, r) {
  const a = On(t._zod.def, {
    get shape() {
      const n = t._zod.def.shape, o = { ...n };
      if (r)
        for (const i in r) {
          if (!(i in o))
            throw new Error(`Unrecognized key: "${i}"`);
          r[i] && (o[i] = new e({
            type: "nonoptional",
            innerType: n[i]
          }));
        }
      else
        for (const i in n)
          o[i] = new e({
            type: "nonoptional",
            innerType: n[i]
          });
      return Un(this, "shape", o), o;
    },
    checks: []
  });
  return Kt(t, a);
}
function Zn(e, t = 0) {
  if (e.aborted === !0)
    return !0;
  for (let r = t; r < e.issues.length; r++)
    if (e.issues[r]?.continue !== !0)
      return !0;
  return !1;
}
function Xt(e, t) {
  return t.map((r) => {
    var a;
    return (a = r).path ?? (a.path = []), r.path.unshift(e), r;
  });
}
function Cr(e) {
  return typeof e == "string" ? e : e?.message;
}
function rn(e, t, r) {
  const a = { ...e, path: e.path ?? [] };
  if (!e.message) {
    const n = Cr(e.inst?._zod.def?.error?.(e)) ?? Cr(t?.error?.(e)) ?? Cr(r.customError?.(e)) ?? Cr(r.localeError?.(e)) ?? "Invalid input";
    a.message = n;
  }
  return delete a.inst, delete a.continue, t?.reportInput || delete a.input, a;
}
function po(e) {
  return e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof File ? "file" : "unknown";
}
function vo(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function mr(...e) {
  const [t, r, a] = e;
  return typeof t == "string" ? {
    message: t,
    code: "custom",
    input: r,
    inst: a
  } : { ...t };
}
function Bk(e) {
  return Object.entries(e).filter(([t, r]) => Number.isNaN(Number.parseInt(t, 10))).map((t) => t[1]);
}
function pf(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let a = 0; a < t.length; a++)
    r[a] = t.charCodeAt(a);
  return r;
}
function vf(e) {
  let t = "";
  for (let r = 0; r < e.length; r++)
    t += String.fromCharCode(e[r]);
  return btoa(t);
}
function Zk(e) {
  const t = e.replace(/-/g, "+").replace(/_/g, "/"), r = "=".repeat((4 - t.length % 4) % 4);
  return pf(t + r);
}
function Wk(e) {
  return vf(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function Gk(e) {
  const t = e.replace(/^0x/, "");
  if (t.length % 2 !== 0)
    throw new Error("Invalid hex string length");
  const r = new Uint8Array(t.length / 2);
  for (let a = 0; a < t.length; a += 2)
    r[a / 2] = Number.parseInt(t.slice(a, a + 2), 16);
  return r;
}
function Hk(e) {
  return Array.from(e).map((t) => t.toString(16).padStart(2, "0")).join("");
}
class Kk {
  constructor(...t) {
  }
}
const gf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BIGINT_FORMAT_RANGES: of,
  Class: Kk,
  NUMBER_FORMAT_RANGES: af,
  aborted: Zn,
  allowsEval: tf,
  assert: Dk,
  assertEqual: zk,
  assertIs: Pk,
  assertNever: Ak,
  assertNotEqual: Tk,
  assignProp: Un,
  base64ToUint8Array: pf,
  base64urlToUint8Array: Zk,
  cached: ea,
  captureStackTrace: Ki,
  cleanEnum: Bk,
  cleanRegex: fo,
  clone: Kt,
  cloneDef: jk,
  createTransparentProxy: Mk,
  defineLazy: De,
  esc: ui,
  escapeRegex: In,
  extend: uf,
  finalizeIssue: rn,
  floatSafeRemainder: Qd,
  getElementAtPath: Uk,
  getEnumValues: Hi,
  getLengthableOrigin: vo,
  getParsedType: Fk,
  getSizableOrigin: po,
  hexToUint8Array: Gk,
  isObject: fr,
  isPlainObject: Qn,
  issue: mr,
  joinValues: q,
  jsonStringifyReplacer: Za,
  merge: df,
  mergeDefs: On,
  normalizeParams: B,
  nullish: ar,
  numKeys: Vk,
  objectClone: Ck,
  omit: sf,
  optionalKeys: rf,
  partial: ff,
  pick: lf,
  prefixIssues: Xt,
  primitiveTypes: nf,
  promiseAllObject: Lk,
  propertyKeyTypes: Wa,
  randomString: Rk,
  required: mf,
  safeExtend: cf,
  shallowClone: mo,
  slugify: ef,
  stringifyPrimitive: $e,
  uint8ArrayToBase64: vf,
  uint8ArrayToBase64url: Wk,
  uint8ArrayToHex: Hk,
  unwrapMessage: Cr
}, Symbol.toStringTag, { value: "Module" })), hf = (e, t) => {
  e.name = "$ZodError", Object.defineProperty(e, "_zod", {
    value: e._zod,
    enumerable: !1
  }), Object.defineProperty(e, "issues", {
    value: t,
    enumerable: !1
  }), e.message = JSON.stringify(t, Za, 2), Object.defineProperty(e, "toString", {
    value: () => e.message,
    enumerable: !1
  });
}, Ji = P("$ZodError", hf), Zt = P("$ZodError", hf, { Parent: Error });
function Yi(e, t = (r) => r.message) {
  const r = {}, a = [];
  for (const n of e.issues)
    n.path.length > 0 ? (r[n.path[0]] = r[n.path[0]] || [], r[n.path[0]].push(t(n))) : a.push(t(n));
  return { formErrors: a, fieldErrors: r };
}
function qi(e, t = (r) => r.message) {
  const r = { _errors: [] }, a = (n) => {
    for (const o of n.issues)
      if (o.code === "invalid_union" && o.errors.length)
        o.errors.map((i) => a({ issues: i }));
      else if (o.code === "invalid_key")
        a({ issues: o.issues });
      else if (o.code === "invalid_element")
        a({ issues: o.issues });
      else if (o.path.length === 0)
        r._errors.push(t(o));
      else {
        let i = r, l = 0;
        for (; l < o.path.length; ) {
          const u = o.path[l];
          l === o.path.length - 1 ? (i[u] = i[u] || { _errors: [] }, i[u]._errors.push(t(o))) : i[u] = i[u] || { _errors: [] }, i = i[u], l++;
        }
      }
  };
  return a(e), r;
}
function bf(e, t = (r) => r.message) {
  const r = { errors: [] }, a = (n, o = []) => {
    var i, l;
    for (const u of n.issues)
      if (u.code === "invalid_union" && u.errors.length)
        u.errors.map((c) => a({ issues: c }, u.path));
      else if (u.code === "invalid_key")
        a({ issues: u.issues }, u.path);
      else if (u.code === "invalid_element")
        a({ issues: u.issues }, u.path);
      else {
        const c = [...o, ...u.path];
        if (c.length === 0) {
          r.errors.push(t(u));
          continue;
        }
        let d = r, f = 0;
        for (; f < c.length; ) {
          const m = c[f], p = f === c.length - 1;
          typeof m == "string" ? (d.properties ?? (d.properties = {}), (i = d.properties)[m] ?? (i[m] = { errors: [] }), d = d.properties[m]) : (d.items ?? (d.items = []), (l = d.items)[m] ?? (l[m] = { errors: [] }), d = d.items[m]), p && d.errors.push(t(u)), f++;
        }
      }
  };
  return a(e), r;
}
function _f(e) {
  const t = [], r = e.map((a) => typeof a == "object" ? a.key : a);
  for (const a of r)
    typeof a == "number" ? t.push(`[${a}]`) : typeof a == "symbol" ? t.push(`[${JSON.stringify(String(a))}]`) : /[^\w$]/.test(a) ? t.push(`[${JSON.stringify(a)}]`) : (t.length && t.push("."), t.push(a));
  return t.join("");
}
function yf(e) {
  const t = [], r = [...e.issues].sort((a, n) => (a.path ?? []).length - (n.path ?? []).length);
  for (const a of r)
    t.push(`✖ ${a.message}`), a.path?.length && t.push(`  → at ${_f(a.path)}`);
  return t.join(`
`);
}
const ta = (e) => (t, r, a, n) => {
  const o = a ? Object.assign(a, { async: !1 }) : { async: !1 }, i = t._zod.run({ value: r, issues: [] }, o);
  if (i instanceof Promise)
    throw new Jn();
  if (i.issues.length) {
    const l = new (n?.Err ?? e)(i.issues.map((u) => rn(u, o, Tt())));
    throw Ki(l, n?.callee), l;
  }
  return i.value;
}, ci = /* @__PURE__ */ ta(Zt), na = (e) => async (t, r, a, n) => {
  const o = a ? Object.assign(a, { async: !0 }) : { async: !0 };
  let i = t._zod.run({ value: r, issues: [] }, o);
  if (i instanceof Promise && (i = await i), i.issues.length) {
    const l = new (n?.Err ?? e)(i.issues.map((u) => rn(u, o, Tt())));
    throw Ki(l, n?.callee), l;
  }
  return i.value;
}, di = /* @__PURE__ */ na(Zt), ra = (e) => (t, r, a) => {
  const n = a ? { ...a, async: !1 } : { async: !1 }, o = t._zod.run({ value: r, issues: [] }, n);
  if (o instanceof Promise)
    throw new Jn();
  return o.issues.length ? {
    success: !1,
    error: new (e ?? Ji)(o.issues.map((i) => rn(i, n, Tt())))
  } : { success: !0, data: o.value };
}, $f = /* @__PURE__ */ ra(Zt), aa = (e) => async (t, r, a) => {
  const n = a ? Object.assign(a, { async: !0 }) : { async: !0 };
  let o = t._zod.run({ value: r, issues: [] }, n);
  return o instanceof Promise && (o = await o), o.issues.length ? {
    success: !1,
    error: new e(o.issues.map((i) => rn(i, n, Tt())))
  } : { success: !0, data: o.value };
}, wf = /* @__PURE__ */ aa(Zt), Xi = (e) => (t, r, a) => {
  const n = a ? Object.assign(a, { direction: "backward" }) : { direction: "backward" };
  return ta(e)(t, r, n);
}, Jk = /* @__PURE__ */ Xi(Zt), Qi = (e) => (t, r, a) => ta(e)(t, r, a), Yk = /* @__PURE__ */ Qi(Zt), el = (e) => async (t, r, a) => {
  const n = a ? Object.assign(a, { direction: "backward" }) : { direction: "backward" };
  return na(e)(t, r, n);
}, qk = /* @__PURE__ */ el(Zt), tl = (e) => async (t, r, a) => na(e)(t, r, a), Xk = /* @__PURE__ */ tl(Zt), nl = (e) => (t, r, a) => {
  const n = a ? Object.assign(a, { direction: "backward" }) : { direction: "backward" };
  return ra(e)(t, r, n);
}, Qk = /* @__PURE__ */ nl(Zt), rl = (e) => (t, r, a) => ra(e)(t, r, a), e1 = /* @__PURE__ */ rl(Zt), al = (e) => async (t, r, a) => {
  const n = a ? Object.assign(a, { direction: "backward" }) : { direction: "backward" };
  return aa(e)(t, r, n);
}, t1 = /* @__PURE__ */ al(Zt), ol = (e) => async (t, r, a) => aa(e)(t, r, a), n1 = /* @__PURE__ */ ol(Zt), kf = /^[cC][^\s-]{8,}$/, Sf = /^[0-9a-z]+$/, If = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, xf = /^[0-9a-vA-V]{20}$/, Of = /^[A-Za-z0-9]{27}$/, Ef = /^[a-zA-Z0-9_-]{21}$/, Nf = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, r1 = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, zf = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, pr = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, a1 = /* @__PURE__ */ pr(4), o1 = /* @__PURE__ */ pr(6), i1 = /* @__PURE__ */ pr(7), Tf = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, l1 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, s1 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, Pf = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u, u1 = Pf, c1 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, d1 = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function Af() {
  return new RegExp(d1, "u");
}
const Df = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Cf = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, jf = (e) => {
  const t = In(e ?? ":");
  return new RegExp(`^(?:[0-9A-F]{2}${t}){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}${t}){5}[0-9a-f]{2}$`);
}, Uf = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, Lf = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Rf = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, il = /^[A-Za-z0-9_-]*$/, Vf = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, Ff = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/, Mf = /^\+(?:[0-9]){6,14}[0-9]$/, Bf = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", Zf = /* @__PURE__ */ new RegExp(`^${Bf}$`);
function Wf(e) {
  const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function Gf(e) {
  return new RegExp(`^${Wf(e)}$`);
}
function Hf(e) {
  const t = Wf({ precision: e.precision }), r = ["Z"];
  e.local && r.push(""), e.offset && r.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const a = `${t}(?:${r.join("|")})`;
  return new RegExp(`^${Bf}T(?:${a})$`);
}
const Kf = (e) => {
  const t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${t}$`);
}, Jf = /^-?\d+n?$/, Yf = /^-?\d+$/, qf = /^-?\d+(?:\.\d+)?/, Xf = /^(?:true|false)$/i, Qf = /^null$/i, em = /^undefined$/i, tm = /^[^A-Z]*$/, nm = /^[^a-z]*$/, rm = /^[0-9a-fA-F]*$/;
function oa(e, t) {
  return new RegExp(`^[A-Za-z0-9+/]{${e}}${t}$`);
}
function ia(e) {
  return new RegExp(`^[A-Za-z0-9_-]{${e}}$`);
}
const f1 = /^[0-9a-fA-F]{32}$/, m1 = /* @__PURE__ */ oa(22, "=="), p1 = /* @__PURE__ */ ia(22), v1 = /^[0-9a-fA-F]{40}$/, g1 = /* @__PURE__ */ oa(27, "="), h1 = /* @__PURE__ */ ia(27), b1 = /^[0-9a-fA-F]{64}$/, _1 = /* @__PURE__ */ oa(43, "="), y1 = /* @__PURE__ */ ia(43), $1 = /^[0-9a-fA-F]{96}$/, w1 = /* @__PURE__ */ oa(64, ""), k1 = /* @__PURE__ */ ia(64), S1 = /^[0-9a-fA-F]{128}$/, I1 = /* @__PURE__ */ oa(86, "=="), x1 = /* @__PURE__ */ ia(86), ll = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64: Rf,
  base64url: il,
  bigint: Jf,
  boolean: Xf,
  browserEmail: c1,
  cidrv4: Uf,
  cidrv6: Lf,
  cuid: kf,
  cuid2: Sf,
  date: Zf,
  datetime: Hf,
  domain: Ff,
  duration: Nf,
  e164: Mf,
  email: Tf,
  emoji: Af,
  extendedDuration: r1,
  guid: zf,
  hex: rm,
  hostname: Vf,
  html5Email: l1,
  idnEmail: u1,
  integer: Yf,
  ipv4: Df,
  ipv6: Cf,
  ksuid: Of,
  lowercase: tm,
  mac: jf,
  md5_base64: m1,
  md5_base64url: p1,
  md5_hex: f1,
  nanoid: Ef,
  null: Qf,
  number: qf,
  rfc5322Email: s1,
  sha1_base64: g1,
  sha1_base64url: h1,
  sha1_hex: v1,
  sha256_base64: _1,
  sha256_base64url: y1,
  sha256_hex: b1,
  sha384_base64: w1,
  sha384_base64url: k1,
  sha384_hex: $1,
  sha512_base64: I1,
  sha512_base64url: x1,
  sha512_hex: S1,
  string: Kf,
  time: Gf,
  ulid: If,
  undefined: em,
  unicodeEmail: Pf,
  uppercase: nm,
  uuid: pr,
  uuid4: a1,
  uuid6: o1,
  uuid7: i1,
  xid: xf
}, Symbol.toStringTag, { value: "Module" })), et = /* @__PURE__ */ P("$ZodCheck", (e, t) => {
  var r;
  e._zod ?? (e._zod = {}), e._zod.def = t, (r = e._zod).onattach ?? (r.onattach = []);
}), am = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, sl = /* @__PURE__ */ P("$ZodCheckLessThan", (e, t) => {
  et.init(e, t);
  const r = am[typeof t.value];
  e._zod.onattach.push((a) => {
    const n = a._zod.bag, o = (t.inclusive ? n.maximum : n.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    t.value < o && (t.inclusive ? n.maximum = t.value : n.exclusiveMaximum = t.value);
  }), e._zod.check = (a) => {
    (t.inclusive ? a.value <= t.value : a.value < t.value) || a.issues.push({
      origin: r,
      code: "too_big",
      maximum: t.value,
      input: a.value,
      inclusive: t.inclusive,
      inst: e,
      continue: !t.abort
    });
  };
}), ul = /* @__PURE__ */ P("$ZodCheckGreaterThan", (e, t) => {
  et.init(e, t);
  const r = am[typeof t.value];
  e._zod.onattach.push((a) => {
    const n = a._zod.bag, o = (t.inclusive ? n.minimum : n.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    t.value > o && (t.inclusive ? n.minimum = t.value : n.exclusiveMinimum = t.value);
  }), e._zod.check = (a) => {
    (t.inclusive ? a.value >= t.value : a.value > t.value) || a.issues.push({
      origin: r,
      code: "too_small",
      minimum: t.value,
      input: a.value,
      inclusive: t.inclusive,
      inst: e,
      continue: !t.abort
    });
  };
}), om = /* @__PURE__ */ P("$ZodCheckMultipleOf", (e, t) => {
  et.init(e, t), e._zod.onattach.push((r) => {
    var a;
    (a = r._zod.bag).multipleOf ?? (a.multipleOf = t.value);
  }), e._zod.check = (r) => {
    if (typeof r.value != typeof t.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof r.value == "bigint" ? r.value % t.value === BigInt(0) : Qd(r.value, t.value) === 0) || r.issues.push({
      origin: typeof r.value,
      code: "not_multiple_of",
      divisor: t.value,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), im = /* @__PURE__ */ P("$ZodCheckNumberFormat", (e, t) => {
  et.init(e, t), t.format = t.format || "float64";
  const r = t.format?.includes("int"), a = r ? "int" : "number", [n, o] = af[t.format];
  e._zod.onattach.push((i) => {
    const l = i._zod.bag;
    l.format = t.format, l.minimum = n, l.maximum = o, r && (l.pattern = Yf);
  }), e._zod.check = (i) => {
    const l = i.value;
    if (r) {
      if (!Number.isInteger(l)) {
        i.issues.push({
          expected: a,
          format: t.format,
          code: "invalid_type",
          continue: !1,
          input: l,
          inst: e
        });
        return;
      }
      if (!Number.isSafeInteger(l)) {
        l > 0 ? i.issues.push({
          input: l,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: a,
          continue: !t.abort
        }) : i.issues.push({
          input: l,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: a,
          continue: !t.abort
        });
        return;
      }
    }
    l < n && i.issues.push({
      origin: "number",
      input: l,
      code: "too_small",
      minimum: n,
      inclusive: !0,
      inst: e,
      continue: !t.abort
    }), l > o && i.issues.push({
      origin: "number",
      input: l,
      code: "too_big",
      maximum: o,
      inst: e
    });
  };
}), lm = /* @__PURE__ */ P("$ZodCheckBigIntFormat", (e, t) => {
  et.init(e, t);
  const [r, a] = of[t.format];
  e._zod.onattach.push((n) => {
    const o = n._zod.bag;
    o.format = t.format, o.minimum = r, o.maximum = a;
  }), e._zod.check = (n) => {
    const o = n.value;
    o < r && n.issues.push({
      origin: "bigint",
      input: o,
      code: "too_small",
      minimum: r,
      inclusive: !0,
      inst: e,
      continue: !t.abort
    }), o > a && n.issues.push({
      origin: "bigint",
      input: o,
      code: "too_big",
      maximum: a,
      inst: e
    });
  };
}), sm = /* @__PURE__ */ P("$ZodCheckMaxSize", (e, t) => {
  var r;
  et.init(e, t), (r = e._zod.def).when ?? (r.when = (a) => {
    const n = a.value;
    return !ar(n) && n.size !== void 0;
  }), e._zod.onattach.push((a) => {
    const n = a._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    t.maximum < n && (a._zod.bag.maximum = t.maximum);
  }), e._zod.check = (a) => {
    const n = a.value;
    n.size <= t.maximum || a.issues.push({
      origin: po(n),
      code: "too_big",
      maximum: t.maximum,
      inclusive: !0,
      input: n,
      inst: e,
      continue: !t.abort
    });
  };
}), um = /* @__PURE__ */ P("$ZodCheckMinSize", (e, t) => {
  var r;
  et.init(e, t), (r = e._zod.def).when ?? (r.when = (a) => {
    const n = a.value;
    return !ar(n) && n.size !== void 0;
  }), e._zod.onattach.push((a) => {
    const n = a._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    t.minimum > n && (a._zod.bag.minimum = t.minimum);
  }), e._zod.check = (a) => {
    const n = a.value;
    n.size >= t.minimum || a.issues.push({
      origin: po(n),
      code: "too_small",
      minimum: t.minimum,
      inclusive: !0,
      input: n,
      inst: e,
      continue: !t.abort
    });
  };
}), cm = /* @__PURE__ */ P("$ZodCheckSizeEquals", (e, t) => {
  var r;
  et.init(e, t), (r = e._zod.def).when ?? (r.when = (a) => {
    const n = a.value;
    return !ar(n) && n.size !== void 0;
  }), e._zod.onattach.push((a) => {
    const n = a._zod.bag;
    n.minimum = t.size, n.maximum = t.size, n.size = t.size;
  }), e._zod.check = (a) => {
    const n = a.value, o = n.size;
    if (o === t.size)
      return;
    const i = o > t.size;
    a.issues.push({
      origin: po(n),
      ...i ? { code: "too_big", maximum: t.size } : { code: "too_small", minimum: t.size },
      inclusive: !0,
      exact: !0,
      input: a.value,
      inst: e,
      continue: !t.abort
    });
  };
}), dm = /* @__PURE__ */ P("$ZodCheckMaxLength", (e, t) => {
  var r;
  et.init(e, t), (r = e._zod.def).when ?? (r.when = (a) => {
    const n = a.value;
    return !ar(n) && n.length !== void 0;
  }), e._zod.onattach.push((a) => {
    const n = a._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    t.maximum < n && (a._zod.bag.maximum = t.maximum);
  }), e._zod.check = (a) => {
    const n = a.value;
    if (n.length <= t.maximum)
      return;
    const i = vo(n);
    a.issues.push({
      origin: i,
      code: "too_big",
      maximum: t.maximum,
      inclusive: !0,
      input: n,
      inst: e,
      continue: !t.abort
    });
  };
}), fm = /* @__PURE__ */ P("$ZodCheckMinLength", (e, t) => {
  var r;
  et.init(e, t), (r = e._zod.def).when ?? (r.when = (a) => {
    const n = a.value;
    return !ar(n) && n.length !== void 0;
  }), e._zod.onattach.push((a) => {
    const n = a._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    t.minimum > n && (a._zod.bag.minimum = t.minimum);
  }), e._zod.check = (a) => {
    const n = a.value;
    if (n.length >= t.minimum)
      return;
    const i = vo(n);
    a.issues.push({
      origin: i,
      code: "too_small",
      minimum: t.minimum,
      inclusive: !0,
      input: n,
      inst: e,
      continue: !t.abort
    });
  };
}), mm = /* @__PURE__ */ P("$ZodCheckLengthEquals", (e, t) => {
  var r;
  et.init(e, t), (r = e._zod.def).when ?? (r.when = (a) => {
    const n = a.value;
    return !ar(n) && n.length !== void 0;
  }), e._zod.onattach.push((a) => {
    const n = a._zod.bag;
    n.minimum = t.length, n.maximum = t.length, n.length = t.length;
  }), e._zod.check = (a) => {
    const n = a.value, o = n.length;
    if (o === t.length)
      return;
    const i = vo(n), l = o > t.length;
    a.issues.push({
      origin: i,
      ...l ? { code: "too_big", maximum: t.length } : { code: "too_small", minimum: t.length },
      inclusive: !0,
      exact: !0,
      input: a.value,
      inst: e,
      continue: !t.abort
    });
  };
}), la = /* @__PURE__ */ P("$ZodCheckStringFormat", (e, t) => {
  var r, a;
  et.init(e, t), e._zod.onattach.push((n) => {
    const o = n._zod.bag;
    o.format = t.format, t.pattern && (o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(t.pattern));
  }), t.pattern ? (r = e._zod).check ?? (r.check = (n) => {
    t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({
      origin: "string",
      code: "invalid_format",
      format: t.format,
      input: n.value,
      ...t.pattern ? { pattern: t.pattern.toString() } : {},
      inst: e,
      continue: !t.abort
    });
  }) : (a = e._zod).check ?? (a.check = () => {
  });
}), pm = /* @__PURE__ */ P("$ZodCheckRegex", (e, t) => {
  la.init(e, t), e._zod.check = (r) => {
    t.pattern.lastIndex = 0, !t.pattern.test(r.value) && r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: r.value,
      pattern: t.pattern.toString(),
      inst: e,
      continue: !t.abort
    });
  };
}), vm = /* @__PURE__ */ P("$ZodCheckLowerCase", (e, t) => {
  t.pattern ?? (t.pattern = tm), la.init(e, t);
}), gm = /* @__PURE__ */ P("$ZodCheckUpperCase", (e, t) => {
  t.pattern ?? (t.pattern = nm), la.init(e, t);
}), hm = /* @__PURE__ */ P("$ZodCheckIncludes", (e, t) => {
  et.init(e, t);
  const r = In(t.includes), a = new RegExp(typeof t.position == "number" ? `^.{${t.position}}${r}` : r);
  t.pattern = a, e._zod.onattach.push((n) => {
    const o = n._zod.bag;
    o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(a);
  }), e._zod.check = (n) => {
    n.value.includes(t.includes, t.position) || n.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: t.includes,
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), bm = /* @__PURE__ */ P("$ZodCheckStartsWith", (e, t) => {
  et.init(e, t);
  const r = new RegExp(`^${In(t.prefix)}.*`);
  t.pattern ?? (t.pattern = r), e._zod.onattach.push((a) => {
    const n = a._zod.bag;
    n.patterns ?? (n.patterns = /* @__PURE__ */ new Set()), n.patterns.add(r);
  }), e._zod.check = (a) => {
    a.value.startsWith(t.prefix) || a.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: t.prefix,
      input: a.value,
      inst: e,
      continue: !t.abort
    });
  };
}), _m = /* @__PURE__ */ P("$ZodCheckEndsWith", (e, t) => {
  et.init(e, t);
  const r = new RegExp(`.*${In(t.suffix)}$`);
  t.pattern ?? (t.pattern = r), e._zod.onattach.push((a) => {
    const n = a._zod.bag;
    n.patterns ?? (n.patterns = /* @__PURE__ */ new Set()), n.patterns.add(r);
  }), e._zod.check = (a) => {
    a.value.endsWith(t.suffix) || a.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: t.suffix,
      input: a.value,
      inst: e,
      continue: !t.abort
    });
  };
});
function Zu(e, t, r) {
  e.issues.length && t.issues.push(...Xt(r, e.issues));
}
const ym = /* @__PURE__ */ P("$ZodCheckProperty", (e, t) => {
  et.init(e, t), e._zod.check = (r) => {
    const a = t.schema._zod.run({
      value: r.value[t.property],
      issues: []
    }, {});
    if (a instanceof Promise)
      return a.then((n) => Zu(n, r, t.property));
    Zu(a, r, t.property);
  };
}), $m = /* @__PURE__ */ P("$ZodCheckMimeType", (e, t) => {
  et.init(e, t);
  const r = new Set(t.mime);
  e._zod.onattach.push((a) => {
    a._zod.bag.mime = t.mime;
  }), e._zod.check = (a) => {
    r.has(a.value.type) || a.issues.push({
      code: "invalid_value",
      values: t.mime,
      input: a.value.type,
      inst: e,
      continue: !t.abort
    });
  };
}), wm = /* @__PURE__ */ P("$ZodCheckOverwrite", (e, t) => {
  et.init(e, t), e._zod.check = (r) => {
    r.value = t.tx(r.value);
  };
});
class km {
  constructor(t = []) {
    this.content = [], this.indent = 0, this && (this.args = t);
  }
  indented(t) {
    this.indent += 1, t(this), this.indent -= 1;
  }
  write(t) {
    if (typeof t == "function") {
      t(this, { execution: "sync" }), t(this, { execution: "async" });
      return;
    }
    const a = t.split(`
`).filter((i) => i), n = Math.min(...a.map((i) => i.length - i.trimStart().length)), o = a.map((i) => i.slice(n)).map((i) => " ".repeat(this.indent * 2) + i);
    for (const i of o)
      this.content.push(i);
  }
  compile() {
    const t = Function, r = this?.args, n = [...(this?.content ?? [""]).map((o) => `  ${o}`)];
    return new t(...r, n.join(`
`));
  }
}
const Sm = {
  major: 4,
  minor: 1,
  patch: 13
}, Ie = /* @__PURE__ */ P("$ZodType", (e, t) => {
  var r;
  e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = Sm;
  const a = [...e._zod.def.checks ?? []];
  e._zod.traits.has("$ZodCheck") && a.unshift(e);
  for (const n of a)
    for (const o of n._zod.onattach)
      o(e);
  if (a.length === 0)
    (r = e._zod).deferred ?? (r.deferred = []), e._zod.deferred?.push(() => {
      e._zod.run = e._zod.parse;
    });
  else {
    const n = (i, l, u) => {
      let c = Zn(i), d;
      for (const f of l) {
        if (f._zod.def.when) {
          if (!f._zod.def.when(i))
            continue;
        } else if (c)
          continue;
        const m = i.issues.length, p = f._zod.check(i);
        if (p instanceof Promise && u?.async === !1)
          throw new Jn();
        if (d || p instanceof Promise)
          d = (d ?? Promise.resolve()).then(async () => {
            await p, i.issues.length !== m && (c || (c = Zn(i, m)));
          });
        else {
          if (i.issues.length === m)
            continue;
          c || (c = Zn(i, m));
        }
      }
      return d ? d.then(() => i) : i;
    }, o = (i, l, u) => {
      if (Zn(i))
        return i.aborted = !0, i;
      const c = n(l, a, u);
      if (c instanceof Promise) {
        if (u.async === !1)
          throw new Jn();
        return c.then((d) => e._zod.parse(d, u));
      }
      return e._zod.parse(c, u);
    };
    e._zod.run = (i, l) => {
      if (l.skipChecks)
        return e._zod.parse(i, l);
      if (l.direction === "backward") {
        const c = e._zod.parse({ value: i.value, issues: [] }, { ...l, skipChecks: !0 });
        return c instanceof Promise ? c.then((d) => o(d, i, l)) : o(c, i, l);
      }
      const u = e._zod.parse(i, l);
      if (u instanceof Promise) {
        if (l.async === !1)
          throw new Jn();
        return u.then((c) => n(c, a, l));
      }
      return n(u, a, l);
    };
  }
  e["~standard"] = {
    validate: (n) => {
      try {
        const o = $f(e, n);
        return o.success ? { value: o.data } : { issues: o.error?.issues };
      } catch {
        return wf(e, n).then((i) => i.success ? { value: i.data } : { issues: i.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), sa = /* @__PURE__ */ P("$ZodString", (e, t) => {
  Ie.init(e, t), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? Kf(e._zod.bag), e._zod.parse = (r, a) => {
    if (t.coerce)
      try {
        r.value = String(r.value);
      } catch {
      }
    return typeof r.value == "string" || r.issues.push({
      expected: "string",
      code: "invalid_type",
      input: r.value,
      inst: e
    }), r;
  };
}), Fe = /* @__PURE__ */ P("$ZodStringFormat", (e, t) => {
  la.init(e, t), sa.init(e, t);
}), Im = /* @__PURE__ */ P("$ZodGUID", (e, t) => {
  t.pattern ?? (t.pattern = zf), Fe.init(e, t);
}), xm = /* @__PURE__ */ P("$ZodUUID", (e, t) => {
  if (t.version) {
    const a = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[t.version];
    if (a === void 0)
      throw new Error(`Invalid UUID version: "${t.version}"`);
    t.pattern ?? (t.pattern = pr(a));
  } else
    t.pattern ?? (t.pattern = pr());
  Fe.init(e, t);
}), Om = /* @__PURE__ */ P("$ZodEmail", (e, t) => {
  t.pattern ?? (t.pattern = Tf), Fe.init(e, t);
}), Em = /* @__PURE__ */ P("$ZodURL", (e, t) => {
  Fe.init(e, t), e._zod.check = (r) => {
    try {
      const a = r.value.trim(), n = new URL(a);
      t.hostname && (t.hostname.lastIndex = 0, t.hostname.test(n.hostname) || r.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: t.hostname.source,
        input: r.value,
        inst: e,
        continue: !t.abort
      })), t.protocol && (t.protocol.lastIndex = 0, t.protocol.test(n.protocol.endsWith(":") ? n.protocol.slice(0, -1) : n.protocol) || r.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: t.protocol.source,
        input: r.value,
        inst: e,
        continue: !t.abort
      })), t.normalize ? r.value = n.href : r.value = a;
      return;
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "url",
        input: r.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
}), Nm = /* @__PURE__ */ P("$ZodEmoji", (e, t) => {
  t.pattern ?? (t.pattern = Af()), Fe.init(e, t);
}), zm = /* @__PURE__ */ P("$ZodNanoID", (e, t) => {
  t.pattern ?? (t.pattern = Ef), Fe.init(e, t);
}), Tm = /* @__PURE__ */ P("$ZodCUID", (e, t) => {
  t.pattern ?? (t.pattern = kf), Fe.init(e, t);
}), Pm = /* @__PURE__ */ P("$ZodCUID2", (e, t) => {
  t.pattern ?? (t.pattern = Sf), Fe.init(e, t);
}), Am = /* @__PURE__ */ P("$ZodULID", (e, t) => {
  t.pattern ?? (t.pattern = If), Fe.init(e, t);
}), Dm = /* @__PURE__ */ P("$ZodXID", (e, t) => {
  t.pattern ?? (t.pattern = xf), Fe.init(e, t);
}), Cm = /* @__PURE__ */ P("$ZodKSUID", (e, t) => {
  t.pattern ?? (t.pattern = Of), Fe.init(e, t);
}), jm = /* @__PURE__ */ P("$ZodISODateTime", (e, t) => {
  t.pattern ?? (t.pattern = Hf(t)), Fe.init(e, t);
}), Um = /* @__PURE__ */ P("$ZodISODate", (e, t) => {
  t.pattern ?? (t.pattern = Zf), Fe.init(e, t);
}), Lm = /* @__PURE__ */ P("$ZodISOTime", (e, t) => {
  t.pattern ?? (t.pattern = Gf(t)), Fe.init(e, t);
}), Rm = /* @__PURE__ */ P("$ZodISODuration", (e, t) => {
  t.pattern ?? (t.pattern = Nf), Fe.init(e, t);
}), Vm = /* @__PURE__ */ P("$ZodIPv4", (e, t) => {
  t.pattern ?? (t.pattern = Df), Fe.init(e, t), e._zod.bag.format = "ipv4";
}), Fm = /* @__PURE__ */ P("$ZodIPv6", (e, t) => {
  t.pattern ?? (t.pattern = Cf), Fe.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (r) => {
    try {
      new URL(`http://[${r.value}]`);
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: r.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
}), Mm = /* @__PURE__ */ P("$ZodMAC", (e, t) => {
  t.pattern ?? (t.pattern = jf(t.delimiter)), Fe.init(e, t), e._zod.bag.format = "mac";
}), Bm = /* @__PURE__ */ P("$ZodCIDRv4", (e, t) => {
  t.pattern ?? (t.pattern = Uf), Fe.init(e, t);
}), Zm = /* @__PURE__ */ P("$ZodCIDRv6", (e, t) => {
  t.pattern ?? (t.pattern = Lf), Fe.init(e, t), e._zod.check = (r) => {
    const a = r.value.split("/");
    try {
      if (a.length !== 2)
        throw new Error();
      const [n, o] = a;
      if (!o)
        throw new Error();
      const i = Number(o);
      if (`${i}` !== o)
        throw new Error();
      if (i < 0 || i > 128)
        throw new Error();
      new URL(`http://[${n}]`);
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: r.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
});
function cl(e) {
  if (e === "")
    return !0;
  if (e.length % 4 !== 0)
    return !1;
  try {
    return atob(e), !0;
  } catch {
    return !1;
  }
}
const Wm = /* @__PURE__ */ P("$ZodBase64", (e, t) => {
  t.pattern ?? (t.pattern = Rf), Fe.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (r) => {
    cl(r.value) || r.issues.push({
      code: "invalid_format",
      format: "base64",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
});
function Gm(e) {
  if (!il.test(e))
    return !1;
  const t = e.replace(/[-_]/g, (a) => a === "-" ? "+" : "/"), r = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return cl(r);
}
const Hm = /* @__PURE__ */ P("$ZodBase64URL", (e, t) => {
  t.pattern ?? (t.pattern = il), Fe.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (r) => {
    Gm(r.value) || r.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Km = /* @__PURE__ */ P("$ZodE164", (e, t) => {
  t.pattern ?? (t.pattern = Mf), Fe.init(e, t);
});
function Jm(e, t = null) {
  try {
    const r = e.split(".");
    if (r.length !== 3)
      return !1;
    const [a] = r;
    if (!a)
      return !1;
    const n = JSON.parse(atob(a));
    return !("typ" in n && n?.typ !== "JWT" || !n.alg || t && (!("alg" in n) || n.alg !== t));
  } catch {
    return !1;
  }
}
const Ym = /* @__PURE__ */ P("$ZodJWT", (e, t) => {
  Fe.init(e, t), e._zod.check = (r) => {
    Jm(r.value, t.alg) || r.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), qm = /* @__PURE__ */ P("$ZodCustomStringFormat", (e, t) => {
  Fe.init(e, t), e._zod.check = (r) => {
    t.fn(r.value) || r.issues.push({
      code: "invalid_format",
      format: t.format,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), dl = /* @__PURE__ */ P("$ZodNumber", (e, t) => {
  Ie.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? qf, e._zod.parse = (r, a) => {
    if (t.coerce)
      try {
        r.value = Number(r.value);
      } catch {
      }
    const n = r.value;
    if (typeof n == "number" && !Number.isNaN(n) && Number.isFinite(n))
      return r;
    const o = typeof n == "number" ? Number.isNaN(n) ? "NaN" : Number.isFinite(n) ? void 0 : "Infinity" : void 0;
    return r.issues.push({
      expected: "number",
      code: "invalid_type",
      input: n,
      inst: e,
      ...o ? { received: o } : {}
    }), r;
  };
}), Xm = /* @__PURE__ */ P("$ZodNumberFormat", (e, t) => {
  im.init(e, t), dl.init(e, t);
}), fl = /* @__PURE__ */ P("$ZodBoolean", (e, t) => {
  Ie.init(e, t), e._zod.pattern = Xf, e._zod.parse = (r, a) => {
    if (t.coerce)
      try {
        r.value = !!r.value;
      } catch {
      }
    const n = r.value;
    return typeof n == "boolean" || r.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input: n,
      inst: e
    }), r;
  };
}), ml = /* @__PURE__ */ P("$ZodBigInt", (e, t) => {
  Ie.init(e, t), e._zod.pattern = Jf, e._zod.parse = (r, a) => {
    if (t.coerce)
      try {
        r.value = BigInt(r.value);
      } catch {
      }
    return typeof r.value == "bigint" || r.issues.push({
      expected: "bigint",
      code: "invalid_type",
      input: r.value,
      inst: e
    }), r;
  };
}), Qm = /* @__PURE__ */ P("$ZodBigIntFormat", (e, t) => {
  lm.init(e, t), ml.init(e, t);
}), ep = /* @__PURE__ */ P("$ZodSymbol", (e, t) => {
  Ie.init(e, t), e._zod.parse = (r, a) => {
    const n = r.value;
    return typeof n == "symbol" || r.issues.push({
      expected: "symbol",
      code: "invalid_type",
      input: n,
      inst: e
    }), r;
  };
}), tp = /* @__PURE__ */ P("$ZodUndefined", (e, t) => {
  Ie.init(e, t), e._zod.pattern = em, e._zod.values = /* @__PURE__ */ new Set([void 0]), e._zod.optin = "optional", e._zod.optout = "optional", e._zod.parse = (r, a) => {
    const n = r.value;
    return typeof n > "u" || r.issues.push({
      expected: "undefined",
      code: "invalid_type",
      input: n,
      inst: e
    }), r;
  };
}), np = /* @__PURE__ */ P("$ZodNull", (e, t) => {
  Ie.init(e, t), e._zod.pattern = Qf, e._zod.values = /* @__PURE__ */ new Set([null]), e._zod.parse = (r, a) => {
    const n = r.value;
    return n === null || r.issues.push({
      expected: "null",
      code: "invalid_type",
      input: n,
      inst: e
    }), r;
  };
}), rp = /* @__PURE__ */ P("$ZodAny", (e, t) => {
  Ie.init(e, t), e._zod.parse = (r) => r;
}), ap = /* @__PURE__ */ P("$ZodUnknown", (e, t) => {
  Ie.init(e, t), e._zod.parse = (r) => r;
}), op = /* @__PURE__ */ P("$ZodNever", (e, t) => {
  Ie.init(e, t), e._zod.parse = (r, a) => (r.issues.push({
    expected: "never",
    code: "invalid_type",
    input: r.value,
    inst: e
  }), r);
}), ip = /* @__PURE__ */ P("$ZodVoid", (e, t) => {
  Ie.init(e, t), e._zod.parse = (r, a) => {
    const n = r.value;
    return typeof n > "u" || r.issues.push({
      expected: "void",
      code: "invalid_type",
      input: n,
      inst: e
    }), r;
  };
}), lp = /* @__PURE__ */ P("$ZodDate", (e, t) => {
  Ie.init(e, t), e._zod.parse = (r, a) => {
    if (t.coerce)
      try {
        r.value = new Date(r.value);
      } catch {
      }
    const n = r.value, o = n instanceof Date;
    return o && !Number.isNaN(n.getTime()) || r.issues.push({
      expected: "date",
      code: "invalid_type",
      input: n,
      ...o ? { received: "Invalid Date" } : {},
      inst: e
    }), r;
  };
});
function Wu(e, t, r) {
  e.issues.length && t.issues.push(...Xt(r, e.issues)), t.value[r] = e.value;
}
const sp = /* @__PURE__ */ P("$ZodArray", (e, t) => {
  Ie.init(e, t), e._zod.parse = (r, a) => {
    const n = r.value;
    if (!Array.isArray(n))
      return r.issues.push({
        expected: "array",
        code: "invalid_type",
        input: n,
        inst: e
      }), r;
    r.value = Array(n.length);
    const o = [];
    for (let i = 0; i < n.length; i++) {
      const l = n[i], u = t.element._zod.run({
        value: l,
        issues: []
      }, a);
      u instanceof Promise ? o.push(u.then((c) => Wu(c, r, i))) : Wu(u, r, i);
    }
    return o.length ? Promise.all(o).then(() => r) : r;
  };
});
function Ga(e, t, r, a) {
  e.issues.length && t.issues.push(...Xt(r, e.issues)), e.value === void 0 ? r in a && (t.value[r] = void 0) : t.value[r] = e.value;
}
function up(e) {
  const t = Object.keys(e.shape);
  for (const a of t)
    if (!e.shape?.[a]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${a}": expected a Zod schema`);
  const r = rf(e.shape);
  return {
    ...e,
    keys: t,
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(r)
  };
}
function cp(e, t, r, a, n, o) {
  const i = [], l = n.keySet, u = n.catchall._zod, c = u.def.type;
  for (const d in t) {
    if (l.has(d))
      continue;
    if (c === "never") {
      i.push(d);
      continue;
    }
    const f = u.run({ value: t[d], issues: [] }, a);
    f instanceof Promise ? e.push(f.then((m) => Ga(m, r, d, t))) : Ga(f, r, d, t);
  }
  return i.length && r.issues.push({
    code: "unrecognized_keys",
    keys: i,
    input: t,
    inst: o
  }), e.length ? Promise.all(e).then(() => r) : r;
}
const dp = /* @__PURE__ */ P("$ZodObject", (e, t) => {
  if (Ie.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
    const l = t.shape;
    Object.defineProperty(t, "shape", {
      get: () => {
        const u = { ...l };
        return Object.defineProperty(t, "shape", {
          value: u
        }), u;
      }
    });
  }
  const a = ea(() => up(t));
  De(e._zod, "propValues", () => {
    const l = t.shape, u = {};
    for (const c in l) {
      const d = l[c]._zod;
      if (d.values) {
        u[c] ?? (u[c] = /* @__PURE__ */ new Set());
        for (const f of d.values)
          u[c].add(f);
      }
    }
    return u;
  });
  const n = fr, o = t.catchall;
  let i;
  e._zod.parse = (l, u) => {
    i ?? (i = a.value);
    const c = l.value;
    if (!n(c))
      return l.issues.push({
        expected: "object",
        code: "invalid_type",
        input: c,
        inst: e
      }), l;
    l.value = {};
    const d = [], f = i.shape;
    for (const m of i.keys) {
      const v = f[m]._zod.run({ value: c[m], issues: [] }, u);
      v instanceof Promise ? d.push(v.then((_) => Ga(_, l, m, c))) : Ga(v, l, m, c);
    }
    return o ? cp(d, c, l, u, a.value, e) : d.length ? Promise.all(d).then(() => l) : l;
  };
}), fp = /* @__PURE__ */ P("$ZodObjectJIT", (e, t) => {
  dp.init(e, t);
  const r = e._zod.parse, a = ea(() => up(t)), n = (m) => {
    const p = new km(["shape", "payload", "ctx"]), v = a.value, _ = (x) => {
      const I = ui(x);
      return `shape[${I}]._zod.run({ value: input[${I}], issues: [] }, ctx)`;
    };
    p.write("const input = payload.value;");
    const k = /* @__PURE__ */ Object.create(null);
    let $ = 0;
    for (const x of v.keys)
      k[x] = `key_${$++}`;
    p.write("const newResult = {};");
    for (const x of v.keys) {
      const I = k[x], E = ui(x);
      p.write(`const ${I} = ${_(x)};`), p.write(`
        if (${I}.issues.length) {
          payload.issues = payload.issues.concat(${I}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${E}, ...iss.path] : [${E}]
          })));
        }
        
        
        if (${I}.value === undefined) {
          if (${E} in input) {
            newResult[${E}] = undefined;
          }
        } else {
          newResult[${E}] = ${I}.value;
        }
        
      `);
    }
    p.write("payload.value = newResult;"), p.write("return payload;");
    const y = p.compile();
    return (x, I) => y(m, x, I);
  };
  let o;
  const i = fr, l = !Ba.jitless, c = l && tf.value, d = t.catchall;
  let f;
  e._zod.parse = (m, p) => {
    f ?? (f = a.value);
    const v = m.value;
    return i(v) ? l && c && p?.async === !1 && p.jitless !== !0 ? (o || (o = n(t.shape)), m = o(m, p), d ? cp([], v, m, p, f, e) : m) : r(m, p) : (m.issues.push({
      expected: "object",
      code: "invalid_type",
      input: v,
      inst: e
    }), m);
  };
});
function Gu(e, t, r, a) {
  for (const o of e)
    if (o.issues.length === 0)
      return t.value = o.value, t;
  const n = e.filter((o) => !Zn(o));
  return n.length === 1 ? (t.value = n[0].value, n[0]) : (t.issues.push({
    code: "invalid_union",
    input: t.value,
    inst: r,
    errors: e.map((o) => o.issues.map((i) => rn(i, a, Tt())))
  }), t);
}
const pl = /* @__PURE__ */ P("$ZodUnion", (e, t) => {
  Ie.init(e, t), De(e._zod, "optin", () => t.options.some((n) => n._zod.optin === "optional") ? "optional" : void 0), De(e._zod, "optout", () => t.options.some((n) => n._zod.optout === "optional") ? "optional" : void 0), De(e._zod, "values", () => {
    if (t.options.every((n) => n._zod.values))
      return new Set(t.options.flatMap((n) => Array.from(n._zod.values)));
  }), De(e._zod, "pattern", () => {
    if (t.options.every((n) => n._zod.pattern)) {
      const n = t.options.map((o) => o._zod.pattern);
      return new RegExp(`^(${n.map((o) => fo(o.source)).join("|")})$`);
    }
  });
  const r = t.options.length === 1, a = t.options[0]._zod.run;
  e._zod.parse = (n, o) => {
    if (r)
      return a(n, o);
    let i = !1;
    const l = [];
    for (const u of t.options) {
      const c = u._zod.run({
        value: n.value,
        issues: []
      }, o);
      if (c instanceof Promise)
        l.push(c), i = !0;
      else {
        if (c.issues.length === 0)
          return c;
        l.push(c);
      }
    }
    return i ? Promise.all(l).then((u) => Gu(u, n, e, o)) : Gu(l, n, e, o);
  };
}), mp = /* @__PURE__ */ P("$ZodDiscriminatedUnion", (e, t) => {
  pl.init(e, t);
  const r = e._zod.parse;
  De(e._zod, "propValues", () => {
    const n = {};
    for (const o of t.options) {
      const i = o._zod.propValues;
      if (!i || Object.keys(i).length === 0)
        throw new Error(`Invalid discriminated union option at index "${t.options.indexOf(o)}"`);
      for (const [l, u] of Object.entries(i)) {
        n[l] || (n[l] = /* @__PURE__ */ new Set());
        for (const c of u)
          n[l].add(c);
      }
    }
    return n;
  });
  const a = ea(() => {
    const n = t.options, o = /* @__PURE__ */ new Map();
    for (const i of n) {
      const l = i._zod.propValues?.[t.discriminator];
      if (!l || l.size === 0)
        throw new Error(`Invalid discriminated union option at index "${t.options.indexOf(i)}"`);
      for (const u of l) {
        if (o.has(u))
          throw new Error(`Duplicate discriminator value "${String(u)}"`);
        o.set(u, i);
      }
    }
    return o;
  });
  e._zod.parse = (n, o) => {
    const i = n.value;
    if (!fr(i))
      return n.issues.push({
        code: "invalid_type",
        expected: "object",
        input: i,
        inst: e
      }), n;
    const l = a.value.get(i?.[t.discriminator]);
    return l ? l._zod.run(n, o) : t.unionFallback ? r(n, o) : (n.issues.push({
      code: "invalid_union",
      errors: [],
      note: "No matching discriminator",
      discriminator: t.discriminator,
      input: i,
      path: [t.discriminator],
      inst: e
    }), n);
  };
}), pp = /* @__PURE__ */ P("$ZodIntersection", (e, t) => {
  Ie.init(e, t), e._zod.parse = (r, a) => {
    const n = r.value, o = t.left._zod.run({ value: n, issues: [] }, a), i = t.right._zod.run({ value: n, issues: [] }, a);
    return o instanceof Promise || i instanceof Promise ? Promise.all([o, i]).then(([u, c]) => Hu(r, u, c)) : Hu(r, o, i);
  };
});
function fi(e, t) {
  if (e === t)
    return { valid: !0, data: e };
  if (e instanceof Date && t instanceof Date && +e == +t)
    return { valid: !0, data: e };
  if (Qn(e) && Qn(t)) {
    const r = Object.keys(t), a = Object.keys(e).filter((o) => r.indexOf(o) !== -1), n = { ...e, ...t };
    for (const o of a) {
      const i = fi(e[o], t[o]);
      if (!i.valid)
        return {
          valid: !1,
          mergeErrorPath: [o, ...i.mergeErrorPath]
        };
      n[o] = i.data;
    }
    return { valid: !0, data: n };
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length)
      return { valid: !1, mergeErrorPath: [] };
    const r = [];
    for (let a = 0; a < e.length; a++) {
      const n = e[a], o = t[a], i = fi(n, o);
      if (!i.valid)
        return {
          valid: !1,
          mergeErrorPath: [a, ...i.mergeErrorPath]
        };
      r.push(i.data);
    }
    return { valid: !0, data: r };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function Hu(e, t, r) {
  if (t.issues.length && e.issues.push(...t.issues), r.issues.length && e.issues.push(...r.issues), Zn(e))
    return e;
  const a = fi(t.value, r.value);
  if (!a.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(a.mergeErrorPath)}`);
  return e.value = a.data, e;
}
const vl = /* @__PURE__ */ P("$ZodTuple", (e, t) => {
  Ie.init(e, t);
  const r = t.items;
  e._zod.parse = (a, n) => {
    const o = a.value;
    if (!Array.isArray(o))
      return a.issues.push({
        input: o,
        inst: e,
        expected: "tuple",
        code: "invalid_type"
      }), a;
    a.value = [];
    const i = [], l = [...r].reverse().findIndex((d) => d._zod.optin !== "optional"), u = l === -1 ? 0 : r.length - l;
    if (!t.rest) {
      const d = o.length > r.length, f = o.length < u - 1;
      if (d || f)
        return a.issues.push({
          ...d ? { code: "too_big", maximum: r.length } : { code: "too_small", minimum: r.length },
          input: o,
          inst: e,
          origin: "array"
        }), a;
    }
    let c = -1;
    for (const d of r) {
      if (c++, c >= o.length && c >= u)
        continue;
      const f = d._zod.run({
        value: o[c],
        issues: []
      }, n);
      f instanceof Promise ? i.push(f.then((m) => ka(m, a, c))) : ka(f, a, c);
    }
    if (t.rest) {
      const d = o.slice(r.length);
      for (const f of d) {
        c++;
        const m = t.rest._zod.run({
          value: f,
          issues: []
        }, n);
        m instanceof Promise ? i.push(m.then((p) => ka(p, a, c))) : ka(m, a, c);
      }
    }
    return i.length ? Promise.all(i).then(() => a) : a;
  };
});
function ka(e, t, r) {
  e.issues.length && t.issues.push(...Xt(r, e.issues)), t.value[r] = e.value;
}
const vp = /* @__PURE__ */ P("$ZodRecord", (e, t) => {
  Ie.init(e, t), e._zod.parse = (r, a) => {
    const n = r.value;
    if (!Qn(n))
      return r.issues.push({
        expected: "record",
        code: "invalid_type",
        input: n,
        inst: e
      }), r;
    const o = [], i = t.keyType._zod.values;
    if (i) {
      r.value = {};
      const l = /* @__PURE__ */ new Set();
      for (const c of i)
        if (typeof c == "string" || typeof c == "number" || typeof c == "symbol") {
          l.add(typeof c == "number" ? c.toString() : c);
          const d = t.valueType._zod.run({ value: n[c], issues: [] }, a);
          d instanceof Promise ? o.push(d.then((f) => {
            f.issues.length && r.issues.push(...Xt(c, f.issues)), r.value[c] = f.value;
          })) : (d.issues.length && r.issues.push(...Xt(c, d.issues)), r.value[c] = d.value);
        }
      let u;
      for (const c in n)
        l.has(c) || (u = u ?? [], u.push(c));
      u && u.length > 0 && r.issues.push({
        code: "unrecognized_keys",
        input: n,
        inst: e,
        keys: u
      });
    } else {
      r.value = {};
      for (const l of Reflect.ownKeys(n)) {
        if (l === "__proto__")
          continue;
        const u = t.keyType._zod.run({ value: l, issues: [] }, a);
        if (u instanceof Promise)
          throw new Error("Async schemas not supported in object keys currently");
        if (u.issues.length) {
          r.issues.push({
            code: "invalid_key",
            origin: "record",
            issues: u.issues.map((d) => rn(d, a, Tt())),
            input: l,
            path: [l],
            inst: e
          }), r.value[u.value] = u.value;
          continue;
        }
        const c = t.valueType._zod.run({ value: n[l], issues: [] }, a);
        c instanceof Promise ? o.push(c.then((d) => {
          d.issues.length && r.issues.push(...Xt(l, d.issues)), r.value[u.value] = d.value;
        })) : (c.issues.length && r.issues.push(...Xt(l, c.issues)), r.value[u.value] = c.value);
      }
    }
    return o.length ? Promise.all(o).then(() => r) : r;
  };
}), gp = /* @__PURE__ */ P("$ZodMap", (e, t) => {
  Ie.init(e, t), e._zod.parse = (r, a) => {
    const n = r.value;
    if (!(n instanceof Map))
      return r.issues.push({
        expected: "map",
        code: "invalid_type",
        input: n,
        inst: e
      }), r;
    const o = [];
    r.value = /* @__PURE__ */ new Map();
    for (const [i, l] of n) {
      const u = t.keyType._zod.run({ value: i, issues: [] }, a), c = t.valueType._zod.run({ value: l, issues: [] }, a);
      u instanceof Promise || c instanceof Promise ? o.push(Promise.all([u, c]).then(([d, f]) => {
        Ku(d, f, r, i, n, e, a);
      })) : Ku(u, c, r, i, n, e, a);
    }
    return o.length ? Promise.all(o).then(() => r) : r;
  };
});
function Ku(e, t, r, a, n, o, i) {
  e.issues.length && (Wa.has(typeof a) ? r.issues.push(...Xt(a, e.issues)) : r.issues.push({
    code: "invalid_key",
    origin: "map",
    input: n,
    inst: o,
    issues: e.issues.map((l) => rn(l, i, Tt()))
  })), t.issues.length && (Wa.has(typeof a) ? r.issues.push(...Xt(a, t.issues)) : r.issues.push({
    origin: "map",
    code: "invalid_element",
    input: n,
    inst: o,
    key: a,
    issues: t.issues.map((l) => rn(l, i, Tt()))
  })), r.value.set(e.value, t.value);
}
const hp = /* @__PURE__ */ P("$ZodSet", (e, t) => {
  Ie.init(e, t), e._zod.parse = (r, a) => {
    const n = r.value;
    if (!(n instanceof Set))
      return r.issues.push({
        input: n,
        inst: e,
        expected: "set",
        code: "invalid_type"
      }), r;
    const o = [];
    r.value = /* @__PURE__ */ new Set();
    for (const i of n) {
      const l = t.valueType._zod.run({ value: i, issues: [] }, a);
      l instanceof Promise ? o.push(l.then((u) => Ju(u, r))) : Ju(l, r);
    }
    return o.length ? Promise.all(o).then(() => r) : r;
  };
});
function Ju(e, t) {
  e.issues.length && t.issues.push(...e.issues), t.value.add(e.value);
}
const bp = /* @__PURE__ */ P("$ZodEnum", (e, t) => {
  Ie.init(e, t);
  const r = Hi(t.entries), a = new Set(r);
  e._zod.values = a, e._zod.pattern = new RegExp(`^(${r.filter((n) => Wa.has(typeof n)).map((n) => typeof n == "string" ? In(n) : n.toString()).join("|")})$`), e._zod.parse = (n, o) => {
    const i = n.value;
    return a.has(i) || n.issues.push({
      code: "invalid_value",
      values: r,
      input: i,
      inst: e
    }), n;
  };
}), _p = /* @__PURE__ */ P("$ZodLiteral", (e, t) => {
  if (Ie.init(e, t), t.values.length === 0)
    throw new Error("Cannot create literal schema with no valid values");
  const r = new Set(t.values);
  e._zod.values = r, e._zod.pattern = new RegExp(`^(${t.values.map((a) => typeof a == "string" ? In(a) : a ? In(a.toString()) : String(a)).join("|")})$`), e._zod.parse = (a, n) => {
    const o = a.value;
    return r.has(o) || a.issues.push({
      code: "invalid_value",
      values: t.values,
      input: o,
      inst: e
    }), a;
  };
}), yp = /* @__PURE__ */ P("$ZodFile", (e, t) => {
  Ie.init(e, t), e._zod.parse = (r, a) => {
    const n = r.value;
    return n instanceof File || r.issues.push({
      expected: "file",
      code: "invalid_type",
      input: n,
      inst: e
    }), r;
  };
}), $p = /* @__PURE__ */ P("$ZodTransform", (e, t) => {
  Ie.init(e, t), e._zod.parse = (r, a) => {
    if (a.direction === "backward")
      throw new co(e.constructor.name);
    const n = t.transform(r.value, r);
    if (a.async)
      return (n instanceof Promise ? n : Promise.resolve(n)).then((i) => (r.value = i, r));
    if (n instanceof Promise)
      throw new Jn();
    return r.value = n, r;
  };
});
function Yu(e, t) {
  return e.issues.length && t === void 0 ? { issues: [], value: void 0 } : e;
}
const wp = /* @__PURE__ */ P("$ZodOptional", (e, t) => {
  Ie.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", De(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), De(e._zod, "pattern", () => {
    const r = t.innerType._zod.pattern;
    return r ? new RegExp(`^(${fo(r.source)})?$`) : void 0;
  }), e._zod.parse = (r, a) => {
    if (t.innerType._zod.optin === "optional") {
      const n = t.innerType._zod.run(r, a);
      return n instanceof Promise ? n.then((o) => Yu(o, r.value)) : Yu(n, r.value);
    }
    return r.value === void 0 ? r : t.innerType._zod.run(r, a);
  };
}), kp = /* @__PURE__ */ P("$ZodNullable", (e, t) => {
  Ie.init(e, t), De(e._zod, "optin", () => t.innerType._zod.optin), De(e._zod, "optout", () => t.innerType._zod.optout), De(e._zod, "pattern", () => {
    const r = t.innerType._zod.pattern;
    return r ? new RegExp(`^(${fo(r.source)}|null)$`) : void 0;
  }), De(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (r, a) => r.value === null ? r : t.innerType._zod.run(r, a);
}), Sp = /* @__PURE__ */ P("$ZodDefault", (e, t) => {
  Ie.init(e, t), e._zod.optin = "optional", De(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, a) => {
    if (a.direction === "backward")
      return t.innerType._zod.run(r, a);
    if (r.value === void 0)
      return r.value = t.defaultValue, r;
    const n = t.innerType._zod.run(r, a);
    return n instanceof Promise ? n.then((o) => qu(o, t)) : qu(n, t);
  };
});
function qu(e, t) {
  return e.value === void 0 && (e.value = t.defaultValue), e;
}
const Ip = /* @__PURE__ */ P("$ZodPrefault", (e, t) => {
  Ie.init(e, t), e._zod.optin = "optional", De(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, a) => (a.direction === "backward" || r.value === void 0 && (r.value = t.defaultValue), t.innerType._zod.run(r, a));
}), xp = /* @__PURE__ */ P("$ZodNonOptional", (e, t) => {
  Ie.init(e, t), De(e._zod, "values", () => {
    const r = t.innerType._zod.values;
    return r ? new Set([...r].filter((a) => a !== void 0)) : void 0;
  }), e._zod.parse = (r, a) => {
    const n = t.innerType._zod.run(r, a);
    return n instanceof Promise ? n.then((o) => Xu(o, e)) : Xu(n, e);
  };
});
function Xu(e, t) {
  return !e.issues.length && e.value === void 0 && e.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: e.value,
    inst: t
  }), e;
}
const Op = /* @__PURE__ */ P("$ZodSuccess", (e, t) => {
  Ie.init(e, t), e._zod.parse = (r, a) => {
    if (a.direction === "backward")
      throw new co("ZodSuccess");
    const n = t.innerType._zod.run(r, a);
    return n instanceof Promise ? n.then((o) => (r.value = o.issues.length === 0, r)) : (r.value = n.issues.length === 0, r);
  };
}), Ep = /* @__PURE__ */ P("$ZodCatch", (e, t) => {
  Ie.init(e, t), De(e._zod, "optin", () => t.innerType._zod.optin), De(e._zod, "optout", () => t.innerType._zod.optout), De(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, a) => {
    if (a.direction === "backward")
      return t.innerType._zod.run(r, a);
    const n = t.innerType._zod.run(r, a);
    return n instanceof Promise ? n.then((o) => (r.value = o.value, o.issues.length && (r.value = t.catchValue({
      ...r,
      error: {
        issues: o.issues.map((i) => rn(i, a, Tt()))
      },
      input: r.value
    }), r.issues = []), r)) : (r.value = n.value, n.issues.length && (r.value = t.catchValue({
      ...r,
      error: {
        issues: n.issues.map((o) => rn(o, a, Tt()))
      },
      input: r.value
    }), r.issues = []), r);
  };
}), Np = /* @__PURE__ */ P("$ZodNaN", (e, t) => {
  Ie.init(e, t), e._zod.parse = (r, a) => ((typeof r.value != "number" || !Number.isNaN(r.value)) && r.issues.push({
    input: r.value,
    inst: e,
    expected: "nan",
    code: "invalid_type"
  }), r);
}), zp = /* @__PURE__ */ P("$ZodPipe", (e, t) => {
  Ie.init(e, t), De(e._zod, "values", () => t.in._zod.values), De(e._zod, "optin", () => t.in._zod.optin), De(e._zod, "optout", () => t.out._zod.optout), De(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (r, a) => {
    if (a.direction === "backward") {
      const o = t.out._zod.run(r, a);
      return o instanceof Promise ? o.then((i) => Sa(i, t.in, a)) : Sa(o, t.in, a);
    }
    const n = t.in._zod.run(r, a);
    return n instanceof Promise ? n.then((o) => Sa(o, t.out, a)) : Sa(n, t.out, a);
  };
});
function Sa(e, t, r) {
  return e.issues.length ? (e.aborted = !0, e) : t._zod.run({ value: e.value, issues: e.issues }, r);
}
const gl = /* @__PURE__ */ P("$ZodCodec", (e, t) => {
  Ie.init(e, t), De(e._zod, "values", () => t.in._zod.values), De(e._zod, "optin", () => t.in._zod.optin), De(e._zod, "optout", () => t.out._zod.optout), De(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (r, a) => {
    if ((a.direction || "forward") === "forward") {
      const o = t.in._zod.run(r, a);
      return o instanceof Promise ? o.then((i) => Ia(i, t, a)) : Ia(o, t, a);
    } else {
      const o = t.out._zod.run(r, a);
      return o instanceof Promise ? o.then((i) => Ia(i, t, a)) : Ia(o, t, a);
    }
  };
});
function Ia(e, t, r) {
  if (e.issues.length)
    return e.aborted = !0, e;
  if ((r.direction || "forward") === "forward") {
    const n = t.transform(e.value, e);
    return n instanceof Promise ? n.then((o) => xa(e, o, t.out, r)) : xa(e, n, t.out, r);
  } else {
    const n = t.reverseTransform(e.value, e);
    return n instanceof Promise ? n.then((o) => xa(e, o, t.in, r)) : xa(e, n, t.in, r);
  }
}
function xa(e, t, r, a) {
  return e.issues.length ? (e.aborted = !0, e) : r._zod.run({ value: t, issues: e.issues }, a);
}
const Tp = /* @__PURE__ */ P("$ZodReadonly", (e, t) => {
  Ie.init(e, t), De(e._zod, "propValues", () => t.innerType._zod.propValues), De(e._zod, "values", () => t.innerType._zod.values), De(e._zod, "optin", () => t.innerType?._zod?.optin), De(e._zod, "optout", () => t.innerType?._zod?.optout), e._zod.parse = (r, a) => {
    if (a.direction === "backward")
      return t.innerType._zod.run(r, a);
    const n = t.innerType._zod.run(r, a);
    return n instanceof Promise ? n.then(Qu) : Qu(n);
  };
});
function Qu(e) {
  return e.value = Object.freeze(e.value), e;
}
const Pp = /* @__PURE__ */ P("$ZodTemplateLiteral", (e, t) => {
  Ie.init(e, t);
  const r = [];
  for (const a of t.parts)
    if (typeof a == "object" && a !== null) {
      if (!a._zod.pattern)
        throw new Error(`Invalid template literal part, no pattern found: ${[...a._zod.traits].shift()}`);
      const n = a._zod.pattern instanceof RegExp ? a._zod.pattern.source : a._zod.pattern;
      if (!n)
        throw new Error(`Invalid template literal part: ${a._zod.traits}`);
      const o = n.startsWith("^") ? 1 : 0, i = n.endsWith("$") ? n.length - 1 : n.length;
      r.push(n.slice(o, i));
    } else if (a === null || nf.has(typeof a))
      r.push(In(`${a}`));
    else
      throw new Error(`Invalid template literal part: ${a}`);
  e._zod.pattern = new RegExp(`^${r.join("")}$`), e._zod.parse = (a, n) => typeof a.value != "string" ? (a.issues.push({
    input: a.value,
    inst: e,
    expected: "template_literal",
    code: "invalid_type"
  }), a) : (e._zod.pattern.lastIndex = 0, e._zod.pattern.test(a.value) || a.issues.push({
    input: a.value,
    inst: e,
    code: "invalid_format",
    format: t.format ?? "template_literal",
    pattern: e._zod.pattern.source
  }), a);
}), Ap = /* @__PURE__ */ P("$ZodFunction", (e, t) => (Ie.init(e, t), e._def = t, e._zod.def = t, e.implement = (r) => {
  if (typeof r != "function")
    throw new Error("implement() must be called with a function");
  return function(...a) {
    const n = e._def.input ? ci(e._def.input, a) : a, o = Reflect.apply(r, this, n);
    return e._def.output ? ci(e._def.output, o) : o;
  };
}, e.implementAsync = (r) => {
  if (typeof r != "function")
    throw new Error("implementAsync() must be called with a function");
  return async function(...a) {
    const n = e._def.input ? await di(e._def.input, a) : a, o = await Reflect.apply(r, this, n);
    return e._def.output ? await di(e._def.output, o) : o;
  };
}, e._zod.parse = (r, a) => typeof r.value != "function" ? (r.issues.push({
  code: "invalid_type",
  expected: "function",
  input: r.value,
  inst: e
}), r) : (e._def.output && e._def.output._zod.def.type === "promise" ? r.value = e.implementAsync(r.value) : r.value = e.implement(r.value), r), e.input = (...r) => {
  const a = e.constructor;
  return Array.isArray(r[0]) ? new a({
    type: "function",
    input: new vl({
      type: "tuple",
      items: r[0],
      rest: r[1]
    }),
    output: e._def.output
  }) : new a({
    type: "function",
    input: r[0],
    output: e._def.output
  });
}, e.output = (r) => {
  const a = e.constructor;
  return new a({
    type: "function",
    input: e._def.input,
    output: r
  });
}, e)), Dp = /* @__PURE__ */ P("$ZodPromise", (e, t) => {
  Ie.init(e, t), e._zod.parse = (r, a) => Promise.resolve(r.value).then((n) => t.innerType._zod.run({ value: n, issues: [] }, a));
}), Cp = /* @__PURE__ */ P("$ZodLazy", (e, t) => {
  Ie.init(e, t), De(e._zod, "innerType", () => t.getter()), De(e._zod, "pattern", () => e._zod.innerType?._zod?.pattern), De(e._zod, "propValues", () => e._zod.innerType?._zod?.propValues), De(e._zod, "optin", () => e._zod.innerType?._zod?.optin ?? void 0), De(e._zod, "optout", () => e._zod.innerType?._zod?.optout ?? void 0), e._zod.parse = (r, a) => e._zod.innerType._zod.run(r, a);
}), jp = /* @__PURE__ */ P("$ZodCustom", (e, t) => {
  et.init(e, t), Ie.init(e, t), e._zod.parse = (r, a) => r, e._zod.check = (r) => {
    const a = r.value, n = t.fn(a);
    if (n instanceof Promise)
      return n.then((o) => ec(o, r, a, e));
    ec(n, r, a, e);
  };
});
function ec(e, t, r, a) {
  if (!e) {
    const n = {
      code: "custom",
      input: r,
      inst: a,
      // incorporates params.error into issue reporting
      path: [...a._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !a._zod.def.abort
      // params: inst._zod.def.params,
    };
    a._zod.def.params && (n.params = a._zod.def.params), t.issues.push(mr(n));
  }
}
const O1 = () => {
  const e = {
    string: { unit: "حرف", verb: "أن يحوي" },
    file: { unit: "بايت", verb: "أن يحوي" },
    array: { unit: "عنصر", verb: "أن يحوي" },
    set: { unit: "عنصر", verb: "أن يحوي" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const o = typeof n;
    switch (o) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "number";
      case "object": {
        if (Array.isArray(n))
          return "array";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return o;
  }, a = {
    regex: "مدخل",
    email: "بريد إلكتروني",
    url: "رابط",
    emoji: "إيموجي",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "تاريخ ووقت بمعيار ISO",
    date: "تاريخ بمعيار ISO",
    time: "وقت بمعيار ISO",
    duration: "مدة بمعيار ISO",
    ipv4: "عنوان IPv4",
    ipv6: "عنوان IPv6",
    cidrv4: "مدى عناوين بصيغة IPv4",
    cidrv6: "مدى عناوين بصيغة IPv6",
    base64: "نَص بترميز base64-encoded",
    base64url: "نَص بترميز base64url-encoded",
    json_string: "نَص على هيئة JSON",
    e164: "رقم هاتف بمعيار E.164",
    jwt: "JWT",
    template_literal: "مدخل"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `مدخلات غير مقبولة: يفترض إدخال ${n.expected}، ولكن تم إدخال ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `مدخلات غير مقبولة: يفترض إدخال ${$e(n.values[0])}` : `اختيار غير مقبول: يتوقع انتقاء أحد هذه الخيارات: ${q(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", i = t(n.origin);
        return i ? ` أكبر من اللازم: يفترض أن تكون ${n.origin ?? "القيمة"} ${o} ${n.maximum.toString()} ${i.unit ?? "عنصر"}` : `أكبر من اللازم: يفترض أن تكون ${n.origin ?? "القيمة"} ${o} ${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", i = t(n.origin);
        return i ? `أصغر من اللازم: يفترض لـ ${n.origin} أن يكون ${o} ${n.minimum.toString()} ${i.unit}` : `أصغر من اللازم: يفترض لـ ${n.origin} أن يكون ${o} ${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `نَص غير مقبول: يجب أن يبدأ بـ "${n.prefix}"` : o.format === "ends_with" ? `نَص غير مقبول: يجب أن ينتهي بـ "${o.suffix}"` : o.format === "includes" ? `نَص غير مقبول: يجب أن يتضمَّن "${o.includes}"` : o.format === "regex" ? `نَص غير مقبول: يجب أن يطابق النمط ${o.pattern}` : `${a[o.format] ?? n.format} غير مقبول`;
      }
      case "not_multiple_of":
        return `رقم غير مقبول: يجب أن يكون من مضاعفات ${n.divisor}`;
      case "unrecognized_keys":
        return `معرف${n.keys.length > 1 ? "ات" : ""} غريب${n.keys.length > 1 ? "ة" : ""}: ${q(n.keys, "، ")}`;
      case "invalid_key":
        return `معرف غير مقبول في ${n.origin}`;
      case "invalid_union":
        return "مدخل غير مقبول";
      case "invalid_element":
        return `مدخل غير مقبول في ${n.origin}`;
      default:
        return "مدخل غير مقبول";
    }
  };
};
function E1() {
  return {
    localeError: O1()
  };
}
const N1 = () => {
  const e = {
    string: { unit: "simvol", verb: "olmalıdır" },
    file: { unit: "bayt", verb: "olmalıdır" },
    array: { unit: "element", verb: "olmalıdır" },
    set: { unit: "element", verb: "olmalıdır" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const o = typeof n;
    switch (o) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "number";
      case "object": {
        if (Array.isArray(n))
          return "array";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return o;
  }, a = {
    regex: "input",
    email: "email address",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datetime",
    date: "ISO date",
    time: "ISO time",
    duration: "ISO duration",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded string",
    base64url: "base64url-encoded string",
    json_string: "JSON string",
    e164: "E.164 number",
    jwt: "JWT",
    template_literal: "input"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Yanlış dəyər: gözlənilən ${n.expected}, daxil olan ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Yanlış dəyər: gözlənilən ${$e(n.values[0])}` : `Yanlış seçim: aşağıdakılardan biri olmalıdır: ${q(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", i = t(n.origin);
        return i ? `Çox böyük: gözlənilən ${n.origin ?? "dəyər"} ${o}${n.maximum.toString()} ${i.unit ?? "element"}` : `Çox böyük: gözlənilən ${n.origin ?? "dəyər"} ${o}${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", i = t(n.origin);
        return i ? `Çox kiçik: gözlənilən ${n.origin} ${o}${n.minimum.toString()} ${i.unit}` : `Çox kiçik: gözlənilən ${n.origin} ${o}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `Yanlış mətn: "${o.prefix}" ilə başlamalıdır` : o.format === "ends_with" ? `Yanlış mətn: "${o.suffix}" ilə bitməlidir` : o.format === "includes" ? `Yanlış mətn: "${o.includes}" daxil olmalıdır` : o.format === "regex" ? `Yanlış mətn: ${o.pattern} şablonuna uyğun olmalıdır` : `Yanlış ${a[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Yanlış ədəd: ${n.divisor} ilə bölünə bilən olmalıdır`;
      case "unrecognized_keys":
        return `Tanınmayan açar${n.keys.length > 1 ? "lar" : ""}: ${q(n.keys, ", ")}`;
      case "invalid_key":
        return `${n.origin} daxilində yanlış açar`;
      case "invalid_union":
        return "Yanlış dəyər";
      case "invalid_element":
        return `${n.origin} daxilində yanlış dəyər`;
      default:
        return "Yanlış dəyər";
    }
  };
};
function z1() {
  return {
    localeError: N1()
  };
}
function tc(e, t, r, a) {
  const n = Math.abs(e), o = n % 10, i = n % 100;
  return i >= 11 && i <= 19 ? a : o === 1 ? t : o >= 2 && o <= 4 ? r : a;
}
const T1 = () => {
  const e = {
    string: {
      unit: {
        one: "сімвал",
        few: "сімвалы",
        many: "сімвалаў"
      },
      verb: "мець"
    },
    array: {
      unit: {
        one: "элемент",
        few: "элементы",
        many: "элементаў"
      },
      verb: "мець"
    },
    set: {
      unit: {
        one: "элемент",
        few: "элементы",
        many: "элементаў"
      },
      verb: "мець"
    },
    file: {
      unit: {
        one: "байт",
        few: "байты",
        many: "байтаў"
      },
      verb: "мець"
    }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const o = typeof n;
    switch (o) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "лік";
      case "object": {
        if (Array.isArray(n))
          return "масіў";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return o;
  }, a = {
    regex: "увод",
    email: "email адрас",
    url: "URL",
    emoji: "эмодзі",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO дата і час",
    date: "ISO дата",
    time: "ISO час",
    duration: "ISO працягласць",
    ipv4: "IPv4 адрас",
    ipv6: "IPv6 адрас",
    cidrv4: "IPv4 дыяпазон",
    cidrv6: "IPv6 дыяпазон",
    base64: "радок у фармаце base64",
    base64url: "радок у фармаце base64url",
    json_string: "JSON радок",
    e164: "нумар E.164",
    jwt: "JWT",
    template_literal: "увод"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Няправільны ўвод: чакаўся ${n.expected}, атрымана ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Няправільны ўвод: чакалася ${$e(n.values[0])}` : `Няправільны варыянт: чакаўся адзін з ${q(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", i = t(n.origin);
        if (i) {
          const l = Number(n.maximum), u = tc(l, i.unit.one, i.unit.few, i.unit.many);
          return `Занадта вялікі: чакалася, што ${n.origin ?? "значэнне"} павінна ${i.verb} ${o}${n.maximum.toString()} ${u}`;
        }
        return `Занадта вялікі: чакалася, што ${n.origin ?? "значэнне"} павінна быць ${o}${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", i = t(n.origin);
        if (i) {
          const l = Number(n.minimum), u = tc(l, i.unit.one, i.unit.few, i.unit.many);
          return `Занадта малы: чакалася, што ${n.origin} павінна ${i.verb} ${o}${n.minimum.toString()} ${u}`;
        }
        return `Занадта малы: чакалася, што ${n.origin} павінна быць ${o}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `Няправільны радок: павінен пачынацца з "${o.prefix}"` : o.format === "ends_with" ? `Няправільны радок: павінен заканчвацца на "${o.suffix}"` : o.format === "includes" ? `Няправільны радок: павінен змяшчаць "${o.includes}"` : o.format === "regex" ? `Няправільны радок: павінен адпавядаць шаблону ${o.pattern}` : `Няправільны ${a[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Няправільны лік: павінен быць кратным ${n.divisor}`;
      case "unrecognized_keys":
        return `Нераспазнаны ${n.keys.length > 1 ? "ключы" : "ключ"}: ${q(n.keys, ", ")}`;
      case "invalid_key":
        return `Няправільны ключ у ${n.origin}`;
      case "invalid_union":
        return "Няправільны ўвод";
      case "invalid_element":
        return `Няправільнае значэнне ў ${n.origin}`;
      default:
        return "Няправільны ўвод";
    }
  };
};
function P1() {
  return {
    localeError: T1()
  };
}
const A1 = (e) => {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : "число";
    case "object": {
      if (Array.isArray(e))
        return "масив";
      if (e === null)
        return "null";
      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
        return e.constructor.name;
    }
  }
  return t;
}, D1 = () => {
  const e = {
    string: { unit: "символа", verb: "да съдържа" },
    file: { unit: "байта", verb: "да съдържа" },
    array: { unit: "елемента", verb: "да съдържа" },
    set: { unit: "елемента", verb: "да съдържа" }
  };
  function t(a) {
    return e[a] ?? null;
  }
  const r = {
    regex: "вход",
    email: "имейл адрес",
    url: "URL",
    emoji: "емоджи",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO време",
    date: "ISO дата",
    time: "ISO време",
    duration: "ISO продължителност",
    ipv4: "IPv4 адрес",
    ipv6: "IPv6 адрес",
    cidrv4: "IPv4 диапазон",
    cidrv6: "IPv6 диапазон",
    base64: "base64-кодиран низ",
    base64url: "base64url-кодиран низ",
    json_string: "JSON низ",
    e164: "E.164 номер",
    jwt: "JWT",
    template_literal: "вход"
  };
  return (a) => {
    switch (a.code) {
      case "invalid_type":
        return `Невалиден вход: очакван ${a.expected}, получен ${A1(a.input)}`;
      case "invalid_value":
        return a.values.length === 1 ? `Невалиден вход: очакван ${$e(a.values[0])}` : `Невалидна опция: очаквано едно от ${q(a.values, "|")}`;
      case "too_big": {
        const n = a.inclusive ? "<=" : "<", o = t(a.origin);
        return o ? `Твърде голямо: очаква се ${a.origin ?? "стойност"} да съдържа ${n}${a.maximum.toString()} ${o.unit ?? "елемента"}` : `Твърде голямо: очаква се ${a.origin ?? "стойност"} да бъде ${n}${a.maximum.toString()}`;
      }
      case "too_small": {
        const n = a.inclusive ? ">=" : ">", o = t(a.origin);
        return o ? `Твърде малко: очаква се ${a.origin} да съдържа ${n}${a.minimum.toString()} ${o.unit}` : `Твърде малко: очаква се ${a.origin} да бъде ${n}${a.minimum.toString()}`;
      }
      case "invalid_format": {
        const n = a;
        if (n.format === "starts_with")
          return `Невалиден низ: трябва да започва с "${n.prefix}"`;
        if (n.format === "ends_with")
          return `Невалиден низ: трябва да завършва с "${n.suffix}"`;
        if (n.format === "includes")
          return `Невалиден низ: трябва да включва "${n.includes}"`;
        if (n.format === "regex")
          return `Невалиден низ: трябва да съвпада с ${n.pattern}`;
        let o = "Невалиден";
        return n.format === "emoji" && (o = "Невалидно"), n.format === "datetime" && (o = "Невалидно"), n.format === "date" && (o = "Невалидна"), n.format === "time" && (o = "Невалидно"), n.format === "duration" && (o = "Невалидна"), `${o} ${r[n.format] ?? a.format}`;
      }
      case "not_multiple_of":
        return `Невалидно число: трябва да бъде кратно на ${a.divisor}`;
      case "unrecognized_keys":
        return `Неразпознат${a.keys.length > 1 ? "и" : ""} ключ${a.keys.length > 1 ? "ове" : ""}: ${q(a.keys, ", ")}`;
      case "invalid_key":
        return `Невалиден ключ в ${a.origin}`;
      case "invalid_union":
        return "Невалиден вход";
      case "invalid_element":
        return `Невалидна стойност в ${a.origin}`;
      default:
        return "Невалиден вход";
    }
  };
};
function C1() {
  return {
    localeError: D1()
  };
}
const j1 = () => {
  const e = {
    string: { unit: "caràcters", verb: "contenir" },
    file: { unit: "bytes", verb: "contenir" },
    array: { unit: "elements", verb: "contenir" },
    set: { unit: "elements", verb: "contenir" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const o = typeof n;
    switch (o) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "number";
      case "object": {
        if (Array.isArray(n))
          return "array";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return o;
  }, a = {
    regex: "entrada",
    email: "adreça electrònica",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data i hora ISO",
    date: "data ISO",
    time: "hora ISO",
    duration: "durada ISO",
    ipv4: "adreça IPv4",
    ipv6: "adreça IPv6",
    cidrv4: "rang IPv4",
    cidrv6: "rang IPv6",
    base64: "cadena codificada en base64",
    base64url: "cadena codificada en base64url",
    json_string: "cadena JSON",
    e164: "número E.164",
    jwt: "JWT",
    template_literal: "entrada"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Tipus invàlid: s'esperava ${n.expected}, s'ha rebut ${r(n.input)}`;
      // return `Tipus invàlid: s'esperava ${issue.expected}, s'ha rebut ${util.getParsedType(issue.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Valor invàlid: s'esperava ${$e(n.values[0])}` : `Opció invàlida: s'esperava una de ${q(n.values, " o ")}`;
      case "too_big": {
        const o = n.inclusive ? "com a màxim" : "menys de", i = t(n.origin);
        return i ? `Massa gran: s'esperava que ${n.origin ?? "el valor"} contingués ${o} ${n.maximum.toString()} ${i.unit ?? "elements"}` : `Massa gran: s'esperava que ${n.origin ?? "el valor"} fos ${o} ${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? "com a mínim" : "més de", i = t(n.origin);
        return i ? `Massa petit: s'esperava que ${n.origin} contingués ${o} ${n.minimum.toString()} ${i.unit}` : `Massa petit: s'esperava que ${n.origin} fos ${o} ${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `Format invàlid: ha de començar amb "${o.prefix}"` : o.format === "ends_with" ? `Format invàlid: ha d'acabar amb "${o.suffix}"` : o.format === "includes" ? `Format invàlid: ha d'incloure "${o.includes}"` : o.format === "regex" ? `Format invàlid: ha de coincidir amb el patró ${o.pattern}` : `Format invàlid per a ${a[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Número invàlid: ha de ser múltiple de ${n.divisor}`;
      case "unrecognized_keys":
        return `Clau${n.keys.length > 1 ? "s" : ""} no reconeguda${n.keys.length > 1 ? "s" : ""}: ${q(n.keys, ", ")}`;
      case "invalid_key":
        return `Clau invàlida a ${n.origin}`;
      case "invalid_union":
        return "Entrada invàlida";
      // Could also be "Tipus d'unió invàlid" but "Entrada invàlida" is more general
      case "invalid_element":
        return `Element invàlid a ${n.origin}`;
      default:
        return "Entrada invàlida";
    }
  };
};
function U1() {
  return {
    localeError: j1()
  };
}
const L1 = () => {
  const e = {
    string: { unit: "znaků", verb: "mít" },
    file: { unit: "bajtů", verb: "mít" },
    array: { unit: "prvků", verb: "mít" },
    set: { unit: "prvků", verb: "mít" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const o = typeof n;
    switch (o) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "číslo";
      case "string":
        return "řetězec";
      case "boolean":
        return "boolean";
      case "bigint":
        return "bigint";
      case "function":
        return "funkce";
      case "symbol":
        return "symbol";
      case "undefined":
        return "undefined";
      case "object": {
        if (Array.isArray(n))
          return "pole";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return o;
  }, a = {
    regex: "regulární výraz",
    email: "e-mailová adresa",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "datum a čas ve formátu ISO",
    date: "datum ve formátu ISO",
    time: "čas ve formátu ISO",
    duration: "doba trvání ISO",
    ipv4: "IPv4 adresa",
    ipv6: "IPv6 adresa",
    cidrv4: "rozsah IPv4",
    cidrv6: "rozsah IPv6",
    base64: "řetězec zakódovaný ve formátu base64",
    base64url: "řetězec zakódovaný ve formátu base64url",
    json_string: "řetězec ve formátu JSON",
    e164: "číslo E.164",
    jwt: "JWT",
    template_literal: "vstup"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Neplatný vstup: očekáváno ${n.expected}, obdrženo ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Neplatný vstup: očekáváno ${$e(n.values[0])}` : `Neplatná možnost: očekávána jedna z hodnot ${q(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", i = t(n.origin);
        return i ? `Hodnota je příliš velká: ${n.origin ?? "hodnota"} musí mít ${o}${n.maximum.toString()} ${i.unit ?? "prvků"}` : `Hodnota je příliš velká: ${n.origin ?? "hodnota"} musí být ${o}${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", i = t(n.origin);
        return i ? `Hodnota je příliš malá: ${n.origin ?? "hodnota"} musí mít ${o}${n.minimum.toString()} ${i.unit ?? "prvků"}` : `Hodnota je příliš malá: ${n.origin ?? "hodnota"} musí být ${o}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `Neplatný řetězec: musí začínat na "${o.prefix}"` : o.format === "ends_with" ? `Neplatný řetězec: musí končit na "${o.suffix}"` : o.format === "includes" ? `Neplatný řetězec: musí obsahovat "${o.includes}"` : o.format === "regex" ? `Neplatný řetězec: musí odpovídat vzoru ${o.pattern}` : `Neplatný formát ${a[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Neplatné číslo: musí být násobkem ${n.divisor}`;
      case "unrecognized_keys":
        return `Neznámé klíče: ${q(n.keys, ", ")}`;
      case "invalid_key":
        return `Neplatný klíč v ${n.origin}`;
      case "invalid_union":
        return "Neplatný vstup";
      case "invalid_element":
        return `Neplatná hodnota v ${n.origin}`;
      default:
        return "Neplatný vstup";
    }
  };
};
function R1() {
  return {
    localeError: L1()
  };
}
const V1 = () => {
  const e = {
    string: { unit: "tegn", verb: "havde" },
    file: { unit: "bytes", verb: "havde" },
    array: { unit: "elementer", verb: "indeholdt" },
    set: { unit: "elementer", verb: "indeholdt" }
  }, t = {
    string: "streng",
    number: "tal",
    boolean: "boolean",
    array: "liste",
    object: "objekt",
    set: "sæt",
    file: "fil"
  };
  function r(i) {
    return e[i] ?? null;
  }
  function a(i) {
    return t[i] ?? i;
  }
  const n = (i) => {
    const l = typeof i;
    switch (l) {
      case "number":
        return Number.isNaN(i) ? "NaN" : "tal";
      case "object":
        return Array.isArray(i) ? "liste" : i === null ? "null" : Object.getPrototypeOf(i) !== Object.prototype && i.constructor ? i.constructor.name : "objekt";
    }
    return l;
  }, o = {
    regex: "input",
    email: "e-mailadresse",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO dato- og klokkeslæt",
    date: "ISO-dato",
    time: "ISO-klokkeslæt",
    duration: "ISO-varighed",
    ipv4: "IPv4-område",
    ipv6: "IPv6-område",
    cidrv4: "IPv4-spektrum",
    cidrv6: "IPv6-spektrum",
    base64: "base64-kodet streng",
    base64url: "base64url-kodet streng",
    json_string: "JSON-streng",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "input"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type":
        return `Ugyldigt input: forventede ${a(i.expected)}, fik ${a(n(i.input))}`;
      case "invalid_value":
        return i.values.length === 1 ? `Ugyldig værdi: forventede ${$e(i.values[0])}` : `Ugyldigt valg: forventede en af følgende ${q(i.values, "|")}`;
      case "too_big": {
        const l = i.inclusive ? "<=" : "<", u = r(i.origin), c = a(i.origin);
        return u ? `For stor: forventede ${c ?? "value"} ${u.verb} ${l} ${i.maximum.toString()} ${u.unit ?? "elementer"}` : `For stor: forventede ${c ?? "value"} havde ${l} ${i.maximum.toString()}`;
      }
      case "too_small": {
        const l = i.inclusive ? ">=" : ">", u = r(i.origin), c = a(i.origin);
        return u ? `For lille: forventede ${c} ${u.verb} ${l} ${i.minimum.toString()} ${u.unit}` : `For lille: forventede ${c} havde ${l} ${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const l = i;
        return l.format === "starts_with" ? `Ugyldig streng: skal starte med "${l.prefix}"` : l.format === "ends_with" ? `Ugyldig streng: skal ende med "${l.suffix}"` : l.format === "includes" ? `Ugyldig streng: skal indeholde "${l.includes}"` : l.format === "regex" ? `Ugyldig streng: skal matche mønsteret ${l.pattern}` : `Ugyldig ${o[l.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `Ugyldigt tal: skal være deleligt med ${i.divisor}`;
      case "unrecognized_keys":
        return `${i.keys.length > 1 ? "Ukendte nøgler" : "Ukendt nøgle"}: ${q(i.keys, ", ")}`;
      case "invalid_key":
        return `Ugyldig nøgle i ${i.origin}`;
      case "invalid_union":
        return "Ugyldigt input: matcher ingen af de tilladte typer";
      case "invalid_element":
        return `Ugyldig værdi i ${i.origin}`;
      default:
        return "Ugyldigt input";
    }
  };
};
function F1() {
  return {
    localeError: V1()
  };
}
const M1 = () => {
  const e = {
    string: { unit: "Zeichen", verb: "zu haben" },
    file: { unit: "Bytes", verb: "zu haben" },
    array: { unit: "Elemente", verb: "zu haben" },
    set: { unit: "Elemente", verb: "zu haben" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const o = typeof n;
    switch (o) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "Zahl";
      case "object": {
        if (Array.isArray(n))
          return "Array";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return o;
  }, a = {
    regex: "Eingabe",
    email: "E-Mail-Adresse",
    url: "URL",
    emoji: "Emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-Datum und -Uhrzeit",
    date: "ISO-Datum",
    time: "ISO-Uhrzeit",
    duration: "ISO-Dauer",
    ipv4: "IPv4-Adresse",
    ipv6: "IPv6-Adresse",
    cidrv4: "IPv4-Bereich",
    cidrv6: "IPv6-Bereich",
    base64: "Base64-codierter String",
    base64url: "Base64-URL-codierter String",
    json_string: "JSON-String",
    e164: "E.164-Nummer",
    jwt: "JWT",
    template_literal: "Eingabe"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Ungültige Eingabe: erwartet ${n.expected}, erhalten ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Ungültige Eingabe: erwartet ${$e(n.values[0])}` : `Ungültige Option: erwartet eine von ${q(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", i = t(n.origin);
        return i ? `Zu groß: erwartet, dass ${n.origin ?? "Wert"} ${o}${n.maximum.toString()} ${i.unit ?? "Elemente"} hat` : `Zu groß: erwartet, dass ${n.origin ?? "Wert"} ${o}${n.maximum.toString()} ist`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", i = t(n.origin);
        return i ? `Zu klein: erwartet, dass ${n.origin} ${o}${n.minimum.toString()} ${i.unit} hat` : `Zu klein: erwartet, dass ${n.origin} ${o}${n.minimum.toString()} ist`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `Ungültiger String: muss mit "${o.prefix}" beginnen` : o.format === "ends_with" ? `Ungültiger String: muss mit "${o.suffix}" enden` : o.format === "includes" ? `Ungültiger String: muss "${o.includes}" enthalten` : o.format === "regex" ? `Ungültiger String: muss dem Muster ${o.pattern} entsprechen` : `Ungültig: ${a[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Ungültige Zahl: muss ein Vielfaches von ${n.divisor} sein`;
      case "unrecognized_keys":
        return `${n.keys.length > 1 ? "Unbekannte Schlüssel" : "Unbekannter Schlüssel"}: ${q(n.keys, ", ")}`;
      case "invalid_key":
        return `Ungültiger Schlüssel in ${n.origin}`;
      case "invalid_union":
        return "Ungültige Eingabe";
      case "invalid_element":
        return `Ungültiger Wert in ${n.origin}`;
      default:
        return "Ungültige Eingabe";
    }
  };
};
function B1() {
  return {
    localeError: M1()
  };
}
const Z1 = (e) => {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : "number";
    case "object": {
      if (Array.isArray(e))
        return "array";
      if (e === null)
        return "null";
      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
        return e.constructor.name;
    }
  }
  return t;
}, W1 = () => {
  const e = {
    string: { unit: "characters", verb: "to have" },
    file: { unit: "bytes", verb: "to have" },
    array: { unit: "items", verb: "to have" },
    set: { unit: "items", verb: "to have" }
  };
  function t(a) {
    return e[a] ?? null;
  }
  const r = {
    regex: "input",
    email: "email address",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datetime",
    date: "ISO date",
    time: "ISO time",
    duration: "ISO duration",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    mac: "MAC address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded string",
    base64url: "base64url-encoded string",
    json_string: "JSON string",
    e164: "E.164 number",
    jwt: "JWT",
    template_literal: "input"
  };
  return (a) => {
    switch (a.code) {
      case "invalid_type":
        return `Invalid input: expected ${a.expected}, received ${Z1(a.input)}`;
      case "invalid_value":
        return a.values.length === 1 ? `Invalid input: expected ${$e(a.values[0])}` : `Invalid option: expected one of ${q(a.values, "|")}`;
      case "too_big": {
        const n = a.inclusive ? "<=" : "<", o = t(a.origin);
        return o ? `Too big: expected ${a.origin ?? "value"} to have ${n}${a.maximum.toString()} ${o.unit ?? "elements"}` : `Too big: expected ${a.origin ?? "value"} to be ${n}${a.maximum.toString()}`;
      }
      case "too_small": {
        const n = a.inclusive ? ">=" : ">", o = t(a.origin);
        return o ? `Too small: expected ${a.origin} to have ${n}${a.minimum.toString()} ${o.unit}` : `Too small: expected ${a.origin} to be ${n}${a.minimum.toString()}`;
      }
      case "invalid_format": {
        const n = a;
        return n.format === "starts_with" ? `Invalid string: must start with "${n.prefix}"` : n.format === "ends_with" ? `Invalid string: must end with "${n.suffix}"` : n.format === "includes" ? `Invalid string: must include "${n.includes}"` : n.format === "regex" ? `Invalid string: must match pattern ${n.pattern}` : `Invalid ${r[n.format] ?? a.format}`;
      }
      case "not_multiple_of":
        return `Invalid number: must be a multiple of ${a.divisor}`;
      case "unrecognized_keys":
        return `Unrecognized key${a.keys.length > 1 ? "s" : ""}: ${q(a.keys, ", ")}`;
      case "invalid_key":
        return `Invalid key in ${a.origin}`;
      case "invalid_union":
        return "Invalid input";
      case "invalid_element":
        return `Invalid value in ${a.origin}`;
      default:
        return "Invalid input";
    }
  };
};
function Up() {
  return {
    localeError: W1()
  };
}
const G1 = (e) => {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : "nombro";
    case "object": {
      if (Array.isArray(e))
        return "tabelo";
      if (e === null)
        return "senvalora";
      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
        return e.constructor.name;
    }
  }
  return t;
}, H1 = () => {
  const e = {
    string: { unit: "karaktrojn", verb: "havi" },
    file: { unit: "bajtojn", verb: "havi" },
    array: { unit: "elementojn", verb: "havi" },
    set: { unit: "elementojn", verb: "havi" }
  };
  function t(a) {
    return e[a] ?? null;
  }
  const r = {
    regex: "enigo",
    email: "retadreso",
    url: "URL",
    emoji: "emoĝio",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-datotempo",
    date: "ISO-dato",
    time: "ISO-tempo",
    duration: "ISO-daŭro",
    ipv4: "IPv4-adreso",
    ipv6: "IPv6-adreso",
    cidrv4: "IPv4-rango",
    cidrv6: "IPv6-rango",
    base64: "64-ume kodita karaktraro",
    base64url: "URL-64-ume kodita karaktraro",
    json_string: "JSON-karaktraro",
    e164: "E.164-nombro",
    jwt: "JWT",
    template_literal: "enigo"
  };
  return (a) => {
    switch (a.code) {
      case "invalid_type":
        return `Nevalida enigo: atendiĝis ${a.expected}, riceviĝis ${G1(a.input)}`;
      case "invalid_value":
        return a.values.length === 1 ? `Nevalida enigo: atendiĝis ${$e(a.values[0])}` : `Nevalida opcio: atendiĝis unu el ${q(a.values, "|")}`;
      case "too_big": {
        const n = a.inclusive ? "<=" : "<", o = t(a.origin);
        return o ? `Tro granda: atendiĝis ke ${a.origin ?? "valoro"} havu ${n}${a.maximum.toString()} ${o.unit ?? "elementojn"}` : `Tro granda: atendiĝis ke ${a.origin ?? "valoro"} havu ${n}${a.maximum.toString()}`;
      }
      case "too_small": {
        const n = a.inclusive ? ">=" : ">", o = t(a.origin);
        return o ? `Tro malgranda: atendiĝis ke ${a.origin} havu ${n}${a.minimum.toString()} ${o.unit}` : `Tro malgranda: atendiĝis ke ${a.origin} estu ${n}${a.minimum.toString()}`;
      }
      case "invalid_format": {
        const n = a;
        return n.format === "starts_with" ? `Nevalida karaktraro: devas komenciĝi per "${n.prefix}"` : n.format === "ends_with" ? `Nevalida karaktraro: devas finiĝi per "${n.suffix}"` : n.format === "includes" ? `Nevalida karaktraro: devas inkluzivi "${n.includes}"` : n.format === "regex" ? `Nevalida karaktraro: devas kongrui kun la modelo ${n.pattern}` : `Nevalida ${r[n.format] ?? a.format}`;
      }
      case "not_multiple_of":
        return `Nevalida nombro: devas esti oblo de ${a.divisor}`;
      case "unrecognized_keys":
        return `Nekonata${a.keys.length > 1 ? "j" : ""} ŝlosilo${a.keys.length > 1 ? "j" : ""}: ${q(a.keys, ", ")}`;
      case "invalid_key":
        return `Nevalida ŝlosilo en ${a.origin}`;
      case "invalid_union":
        return "Nevalida enigo";
      case "invalid_element":
        return `Nevalida valoro en ${a.origin}`;
      default:
        return "Nevalida enigo";
    }
  };
};
function K1() {
  return {
    localeError: H1()
  };
}
const J1 = () => {
  const e = {
    string: { unit: "caracteres", verb: "tener" },
    file: { unit: "bytes", verb: "tener" },
    array: { unit: "elementos", verb: "tener" },
    set: { unit: "elementos", verb: "tener" }
  }, t = {
    string: "texto",
    number: "número",
    boolean: "booleano",
    array: "arreglo",
    object: "objeto",
    set: "conjunto",
    file: "archivo",
    date: "fecha",
    bigint: "número grande",
    symbol: "símbolo",
    undefined: "indefinido",
    null: "nulo",
    function: "función",
    map: "mapa",
    record: "registro",
    tuple: "tupla",
    enum: "enumeración",
    union: "unión",
    literal: "literal",
    promise: "promesa",
    void: "vacío",
    never: "nunca",
    unknown: "desconocido",
    any: "cualquiera"
  };
  function r(i) {
    return e[i] ?? null;
  }
  function a(i) {
    return t[i] ?? i;
  }
  const n = (i) => {
    const l = typeof i;
    switch (l) {
      case "number":
        return Number.isNaN(i) ? "NaN" : "number";
      case "object":
        return Array.isArray(i) ? "array" : i === null ? "null" : Object.getPrototypeOf(i) !== Object.prototype ? i.constructor.name : "object";
    }
    return l;
  }, o = {
    regex: "entrada",
    email: "dirección de correo electrónico",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "fecha y hora ISO",
    date: "fecha ISO",
    time: "hora ISO",
    duration: "duración ISO",
    ipv4: "dirección IPv4",
    ipv6: "dirección IPv6",
    cidrv4: "rango IPv4",
    cidrv6: "rango IPv6",
    base64: "cadena codificada en base64",
    base64url: "URL codificada en base64",
    json_string: "cadena JSON",
    e164: "número E.164",
    jwt: "JWT",
    template_literal: "entrada"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type":
        return `Entrada inválida: se esperaba ${a(i.expected)}, recibido ${a(n(i.input))}`;
      // return `Entrada inválida: se esperaba ${issue.expected}, recibido ${util.getParsedType(issue.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `Entrada inválida: se esperaba ${$e(i.values[0])}` : `Opción inválida: se esperaba una de ${q(i.values, "|")}`;
      case "too_big": {
        const l = i.inclusive ? "<=" : "<", u = r(i.origin), c = a(i.origin);
        return u ? `Demasiado grande: se esperaba que ${c ?? "valor"} tuviera ${l}${i.maximum.toString()} ${u.unit ?? "elementos"}` : `Demasiado grande: se esperaba que ${c ?? "valor"} fuera ${l}${i.maximum.toString()}`;
      }
      case "too_small": {
        const l = i.inclusive ? ">=" : ">", u = r(i.origin), c = a(i.origin);
        return u ? `Demasiado pequeño: se esperaba que ${c} tuviera ${l}${i.minimum.toString()} ${u.unit}` : `Demasiado pequeño: se esperaba que ${c} fuera ${l}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const l = i;
        return l.format === "starts_with" ? `Cadena inválida: debe comenzar con "${l.prefix}"` : l.format === "ends_with" ? `Cadena inválida: debe terminar en "${l.suffix}"` : l.format === "includes" ? `Cadena inválida: debe incluir "${l.includes}"` : l.format === "regex" ? `Cadena inválida: debe coincidir con el patrón ${l.pattern}` : `Inválido ${o[l.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `Número inválido: debe ser múltiplo de ${i.divisor}`;
      case "unrecognized_keys":
        return `Llave${i.keys.length > 1 ? "s" : ""} desconocida${i.keys.length > 1 ? "s" : ""}: ${q(i.keys, ", ")}`;
      case "invalid_key":
        return `Llave inválida en ${a(i.origin)}`;
      case "invalid_union":
        return "Entrada inválida";
      case "invalid_element":
        return `Valor inválido en ${a(i.origin)}`;
      default:
        return "Entrada inválida";
    }
  };
};
function Y1() {
  return {
    localeError: J1()
  };
}
const q1 = () => {
  const e = {
    string: { unit: "کاراکتر", verb: "داشته باشد" },
    file: { unit: "بایت", verb: "داشته باشد" },
    array: { unit: "آیتم", verb: "داشته باشد" },
    set: { unit: "آیتم", verb: "داشته باشد" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const o = typeof n;
    switch (o) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "عدد";
      case "object": {
        if (Array.isArray(n))
          return "آرایه";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return o;
  }, a = {
    regex: "ورودی",
    email: "آدرس ایمیل",
    url: "URL",
    emoji: "ایموجی",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "تاریخ و زمان ایزو",
    date: "تاریخ ایزو",
    time: "زمان ایزو",
    duration: "مدت زمان ایزو",
    ipv4: "IPv4 آدرس",
    ipv6: "IPv6 آدرس",
    cidrv4: "IPv4 دامنه",
    cidrv6: "IPv6 دامنه",
    base64: "base64-encoded رشته",
    base64url: "base64url-encoded رشته",
    json_string: "JSON رشته",
    e164: "E.164 عدد",
    jwt: "JWT",
    template_literal: "ورودی"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `ورودی نامعتبر: می‌بایست ${n.expected} می‌بود، ${r(n.input)} دریافت شد`;
      case "invalid_value":
        return n.values.length === 1 ? `ورودی نامعتبر: می‌بایست ${$e(n.values[0])} می‌بود` : `گزینه نامعتبر: می‌بایست یکی از ${q(n.values, "|")} می‌بود`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", i = t(n.origin);
        return i ? `خیلی بزرگ: ${n.origin ?? "مقدار"} باید ${o}${n.maximum.toString()} ${i.unit ?? "عنصر"} باشد` : `خیلی بزرگ: ${n.origin ?? "مقدار"} باید ${o}${n.maximum.toString()} باشد`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", i = t(n.origin);
        return i ? `خیلی کوچک: ${n.origin} باید ${o}${n.minimum.toString()} ${i.unit} باشد` : `خیلی کوچک: ${n.origin} باید ${o}${n.minimum.toString()} باشد`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `رشته نامعتبر: باید با "${o.prefix}" شروع شود` : o.format === "ends_with" ? `رشته نامعتبر: باید با "${o.suffix}" تمام شود` : o.format === "includes" ? `رشته نامعتبر: باید شامل "${o.includes}" باشد` : o.format === "regex" ? `رشته نامعتبر: باید با الگوی ${o.pattern} مطابقت داشته باشد` : `${a[o.format] ?? n.format} نامعتبر`;
      }
      case "not_multiple_of":
        return `عدد نامعتبر: باید مضرب ${n.divisor} باشد`;
      case "unrecognized_keys":
        return `کلید${n.keys.length > 1 ? "های" : ""} ناشناس: ${q(n.keys, ", ")}`;
      case "invalid_key":
        return `کلید ناشناس در ${n.origin}`;
      case "invalid_union":
        return "ورودی نامعتبر";
      case "invalid_element":
        return `مقدار نامعتبر در ${n.origin}`;
      default:
        return "ورودی نامعتبر";
    }
  };
};
function X1() {
  return {
    localeError: q1()
  };
}
const Q1 = () => {
  const e = {
    string: { unit: "merkkiä", subject: "merkkijonon" },
    file: { unit: "tavua", subject: "tiedoston" },
    array: { unit: "alkiota", subject: "listan" },
    set: { unit: "alkiota", subject: "joukon" },
    number: { unit: "", subject: "luvun" },
    bigint: { unit: "", subject: "suuren kokonaisluvun" },
    int: { unit: "", subject: "kokonaisluvun" },
    date: { unit: "", subject: "päivämäärän" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const o = typeof n;
    switch (o) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "number";
      case "object": {
        if (Array.isArray(n))
          return "array";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return o;
  }, a = {
    regex: "säännöllinen lauseke",
    email: "sähköpostiosoite",
    url: "URL-osoite",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-aikaleima",
    date: "ISO-päivämäärä",
    time: "ISO-aika",
    duration: "ISO-kesto",
    ipv4: "IPv4-osoite",
    ipv6: "IPv6-osoite",
    cidrv4: "IPv4-alue",
    cidrv6: "IPv6-alue",
    base64: "base64-koodattu merkkijono",
    base64url: "base64url-koodattu merkkijono",
    json_string: "JSON-merkkijono",
    e164: "E.164-luku",
    jwt: "JWT",
    template_literal: "templaattimerkkijono"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Virheellinen tyyppi: odotettiin ${n.expected}, oli ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Virheellinen syöte: täytyy olla ${$e(n.values[0])}` : `Virheellinen valinta: täytyy olla yksi seuraavista: ${q(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", i = t(n.origin);
        return i ? `Liian suuri: ${i.subject} täytyy olla ${o}${n.maximum.toString()} ${i.unit}`.trim() : `Liian suuri: arvon täytyy olla ${o}${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", i = t(n.origin);
        return i ? `Liian pieni: ${i.subject} täytyy olla ${o}${n.minimum.toString()} ${i.unit}`.trim() : `Liian pieni: arvon täytyy olla ${o}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `Virheellinen syöte: täytyy alkaa "${o.prefix}"` : o.format === "ends_with" ? `Virheellinen syöte: täytyy loppua "${o.suffix}"` : o.format === "includes" ? `Virheellinen syöte: täytyy sisältää "${o.includes}"` : o.format === "regex" ? `Virheellinen syöte: täytyy vastata säännöllistä lauseketta ${o.pattern}` : `Virheellinen ${a[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Virheellinen luku: täytyy olla luvun ${n.divisor} monikerta`;
      case "unrecognized_keys":
        return `${n.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain"}: ${q(n.keys, ", ")}`;
      case "invalid_key":
        return "Virheellinen avain tietueessa";
      case "invalid_union":
        return "Virheellinen unioni";
      case "invalid_element":
        return "Virheellinen arvo joukossa";
      default:
        return "Virheellinen syöte";
    }
  };
};
function eS() {
  return {
    localeError: Q1()
  };
}
const tS = () => {
  const e = {
    string: { unit: "caractères", verb: "avoir" },
    file: { unit: "octets", verb: "avoir" },
    array: { unit: "éléments", verb: "avoir" },
    set: { unit: "éléments", verb: "avoir" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const o = typeof n;
    switch (o) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "nombre";
      case "object": {
        if (Array.isArray(n))
          return "tableau";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return o;
  }, a = {
    regex: "entrée",
    email: "adresse e-mail",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "date et heure ISO",
    date: "date ISO",
    time: "heure ISO",
    duration: "durée ISO",
    ipv4: "adresse IPv4",
    ipv6: "adresse IPv6",
    cidrv4: "plage IPv4",
    cidrv6: "plage IPv6",
    base64: "chaîne encodée en base64",
    base64url: "chaîne encodée en base64url",
    json_string: "chaîne JSON",
    e164: "numéro E.164",
    jwt: "JWT",
    template_literal: "entrée"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Entrée invalide : ${n.expected} attendu, ${r(n.input)} reçu`;
      case "invalid_value":
        return n.values.length === 1 ? `Entrée invalide : ${$e(n.values[0])} attendu` : `Option invalide : une valeur parmi ${q(n.values, "|")} attendue`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", i = t(n.origin);
        return i ? `Trop grand : ${n.origin ?? "valeur"} doit ${i.verb} ${o}${n.maximum.toString()} ${i.unit ?? "élément(s)"}` : `Trop grand : ${n.origin ?? "valeur"} doit être ${o}${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", i = t(n.origin);
        return i ? `Trop petit : ${n.origin} doit ${i.verb} ${o}${n.minimum.toString()} ${i.unit}` : `Trop petit : ${n.origin} doit être ${o}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `Chaîne invalide : doit commencer par "${o.prefix}"` : o.format === "ends_with" ? `Chaîne invalide : doit se terminer par "${o.suffix}"` : o.format === "includes" ? `Chaîne invalide : doit inclure "${o.includes}"` : o.format === "regex" ? `Chaîne invalide : doit correspondre au modèle ${o.pattern}` : `${a[o.format] ?? n.format} invalide`;
      }
      case "not_multiple_of":
        return `Nombre invalide : doit être un multiple de ${n.divisor}`;
      case "unrecognized_keys":
        return `Clé${n.keys.length > 1 ? "s" : ""} non reconnue${n.keys.length > 1 ? "s" : ""} : ${q(n.keys, ", ")}`;
      case "invalid_key":
        return `Clé invalide dans ${n.origin}`;
      case "invalid_union":
        return "Entrée invalide";
      case "invalid_element":
        return `Valeur invalide dans ${n.origin}`;
      default:
        return "Entrée invalide";
    }
  };
};
function nS() {
  return {
    localeError: tS()
  };
}
const rS = () => {
  const e = {
    string: { unit: "caractères", verb: "avoir" },
    file: { unit: "octets", verb: "avoir" },
    array: { unit: "éléments", verb: "avoir" },
    set: { unit: "éléments", verb: "avoir" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const o = typeof n;
    switch (o) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "number";
      case "object": {
        if (Array.isArray(n))
          return "array";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return o;
  }, a = {
    regex: "entrée",
    email: "adresse courriel",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "date-heure ISO",
    date: "date ISO",
    time: "heure ISO",
    duration: "durée ISO",
    ipv4: "adresse IPv4",
    ipv6: "adresse IPv6",
    cidrv4: "plage IPv4",
    cidrv6: "plage IPv6",
    base64: "chaîne encodée en base64",
    base64url: "chaîne encodée en base64url",
    json_string: "chaîne JSON",
    e164: "numéro E.164",
    jwt: "JWT",
    template_literal: "entrée"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Entrée invalide : attendu ${n.expected}, reçu ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Entrée invalide : attendu ${$e(n.values[0])}` : `Option invalide : attendu l'une des valeurs suivantes ${q(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "≤" : "<", i = t(n.origin);
        return i ? `Trop grand : attendu que ${n.origin ?? "la valeur"} ait ${o}${n.maximum.toString()} ${i.unit}` : `Trop grand : attendu que ${n.origin ?? "la valeur"} soit ${o}${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? "≥" : ">", i = t(n.origin);
        return i ? `Trop petit : attendu que ${n.origin} ait ${o}${n.minimum.toString()} ${i.unit}` : `Trop petit : attendu que ${n.origin} soit ${o}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `Chaîne invalide : doit commencer par "${o.prefix}"` : o.format === "ends_with" ? `Chaîne invalide : doit se terminer par "${o.suffix}"` : o.format === "includes" ? `Chaîne invalide : doit inclure "${o.includes}"` : o.format === "regex" ? `Chaîne invalide : doit correspondre au motif ${o.pattern}` : `${a[o.format] ?? n.format} invalide`;
      }
      case "not_multiple_of":
        return `Nombre invalide : doit être un multiple de ${n.divisor}`;
      case "unrecognized_keys":
        return `Clé${n.keys.length > 1 ? "s" : ""} non reconnue${n.keys.length > 1 ? "s" : ""} : ${q(n.keys, ", ")}`;
      case "invalid_key":
        return `Clé invalide dans ${n.origin}`;
      case "invalid_union":
        return "Entrée invalide";
      case "invalid_element":
        return `Valeur invalide dans ${n.origin}`;
      default:
        return "Entrée invalide";
    }
  };
};
function aS() {
  return {
    localeError: rS()
  };
}
const oS = () => {
  const e = {
    string: { label: "מחרוזת", gender: "f" },
    number: { label: "מספר", gender: "m" },
    boolean: { label: "ערך בוליאני", gender: "m" },
    bigint: { label: "BigInt", gender: "m" },
    date: { label: "תאריך", gender: "m" },
    array: { label: "מערך", gender: "m" },
    object: { label: "אובייקט", gender: "m" },
    null: { label: "ערך ריק (null)", gender: "m" },
    undefined: { label: "ערך לא מוגדר (undefined)", gender: "m" },
    symbol: { label: "סימבול (Symbol)", gender: "m" },
    function: { label: "פונקציה", gender: "f" },
    map: { label: "מפה (Map)", gender: "f" },
    set: { label: "קבוצה (Set)", gender: "f" },
    file: { label: "קובץ", gender: "m" },
    promise: { label: "Promise", gender: "m" },
    NaN: { label: "NaN", gender: "m" },
    unknown: { label: "ערך לא ידוע", gender: "m" },
    value: { label: "ערך", gender: "m" }
  }, t = {
    string: { unit: "תווים", shortLabel: "קצר", longLabel: "ארוך" },
    file: { unit: "בייטים", shortLabel: "קטן", longLabel: "גדול" },
    array: { unit: "פריטים", shortLabel: "קטן", longLabel: "גדול" },
    set: { unit: "פריטים", shortLabel: "קטן", longLabel: "גדול" },
    number: { unit: "", shortLabel: "קטן", longLabel: "גדול" }
    // no unit
  }, r = (c) => c ? e[c] : void 0, a = (c) => {
    const d = r(c);
    return d ? d.label : c ?? e.unknown.label;
  }, n = (c) => `ה${a(c)}`, o = (c) => (r(c)?.gender ?? "m") === "f" ? "צריכה להיות" : "צריך להיות", i = (c) => c ? t[c] ?? null : null, l = (c) => {
    const d = typeof c;
    switch (d) {
      case "number":
        return Number.isNaN(c) ? "NaN" : "number";
      case "object":
        return Array.isArray(c) ? "array" : c === null ? "null" : Object.getPrototypeOf(c) !== Object.prototype && c.constructor ? c.constructor.name : "object";
      default:
        return d;
    }
  }, u = {
    regex: { label: "קלט", gender: "m" },
    email: { label: "כתובת אימייל", gender: "f" },
    url: { label: "כתובת רשת", gender: "f" },
    emoji: { label: "אימוג'י", gender: "m" },
    uuid: { label: "UUID", gender: "m" },
    nanoid: { label: "nanoid", gender: "m" },
    guid: { label: "GUID", gender: "m" },
    cuid: { label: "cuid", gender: "m" },
    cuid2: { label: "cuid2", gender: "m" },
    ulid: { label: "ULID", gender: "m" },
    xid: { label: "XID", gender: "m" },
    ksuid: { label: "KSUID", gender: "m" },
    datetime: { label: "תאריך וזמן ISO", gender: "m" },
    date: { label: "תאריך ISO", gender: "m" },
    time: { label: "זמן ISO", gender: "m" },
    duration: { label: "משך זמן ISO", gender: "m" },
    ipv4: { label: "כתובת IPv4", gender: "f" },
    ipv6: { label: "כתובת IPv6", gender: "f" },
    cidrv4: { label: "טווח IPv4", gender: "m" },
    cidrv6: { label: "טווח IPv6", gender: "m" },
    base64: { label: "מחרוזת בבסיס 64", gender: "f" },
    base64url: { label: "מחרוזת בבסיס 64 לכתובות רשת", gender: "f" },
    json_string: { label: "מחרוזת JSON", gender: "f" },
    e164: { label: "מספר E.164", gender: "m" },
    jwt: { label: "JWT", gender: "m" },
    ends_with: { label: "קלט", gender: "m" },
    includes: { label: "קלט", gender: "m" },
    lowercase: { label: "קלט", gender: "m" },
    starts_with: { label: "קלט", gender: "m" },
    uppercase: { label: "קלט", gender: "m" }
  };
  return (c) => {
    switch (c.code) {
      case "invalid_type": {
        const d = c.expected, f = a(d), m = l(c.input), p = e[m]?.label ?? m;
        return `קלט לא תקין: צריך להיות ${f}, התקבל ${p}`;
      }
      case "invalid_value": {
        if (c.values.length === 1)
          return `ערך לא תקין: הערך חייב להיות ${$e(c.values[0])}`;
        const d = c.values.map((p) => $e(p));
        if (c.values.length === 2)
          return `ערך לא תקין: האפשרויות המתאימות הן ${d[0]} או ${d[1]}`;
        const f = d[d.length - 1];
        return `ערך לא תקין: האפשרויות המתאימות הן ${d.slice(0, -1).join(", ")} או ${f}`;
      }
      case "too_big": {
        const d = i(c.origin), f = n(c.origin ?? "value");
        if (c.origin === "string")
          return `${d?.longLabel ?? "ארוך"} מדי: ${f} צריכה להכיל ${c.maximum.toString()} ${d?.unit ?? ""} ${c.inclusive ? "או פחות" : "לכל היותר"}`.trim();
        if (c.origin === "number") {
          const v = c.inclusive ? `קטן או שווה ל-${c.maximum}` : `קטן מ-${c.maximum}`;
          return `גדול מדי: ${f} צריך להיות ${v}`;
        }
        if (c.origin === "array" || c.origin === "set") {
          const v = c.origin === "set" ? "צריכה" : "צריך", _ = c.inclusive ? `${c.maximum} ${d?.unit ?? ""} או פחות` : `פחות מ-${c.maximum} ${d?.unit ?? ""}`;
          return `גדול מדי: ${f} ${v} להכיל ${_}`.trim();
        }
        const m = c.inclusive ? "<=" : "<", p = o(c.origin ?? "value");
        return d?.unit ? `${d.longLabel} מדי: ${f} ${p} ${m}${c.maximum.toString()} ${d.unit}` : `${d?.longLabel ?? "גדול"} מדי: ${f} ${p} ${m}${c.maximum.toString()}`;
      }
      case "too_small": {
        const d = i(c.origin), f = n(c.origin ?? "value");
        if (c.origin === "string")
          return `${d?.shortLabel ?? "קצר"} מדי: ${f} צריכה להכיל ${c.minimum.toString()} ${d?.unit ?? ""} ${c.inclusive ? "או יותר" : "לפחות"}`.trim();
        if (c.origin === "number") {
          const v = c.inclusive ? `גדול או שווה ל-${c.minimum}` : `גדול מ-${c.minimum}`;
          return `קטן מדי: ${f} צריך להיות ${v}`;
        }
        if (c.origin === "array" || c.origin === "set") {
          const v = c.origin === "set" ? "צריכה" : "צריך";
          if (c.minimum === 1 && c.inclusive) {
            const k = (c.origin === "set", "לפחות פריט אחד");
            return `קטן מדי: ${f} ${v} להכיל ${k}`;
          }
          const _ = c.inclusive ? `${c.minimum} ${d?.unit ?? ""} או יותר` : `יותר מ-${c.minimum} ${d?.unit ?? ""}`;
          return `קטן מדי: ${f} ${v} להכיל ${_}`.trim();
        }
        const m = c.inclusive ? ">=" : ">", p = o(c.origin ?? "value");
        return d?.unit ? `${d.shortLabel} מדי: ${f} ${p} ${m}${c.minimum.toString()} ${d.unit}` : `${d?.shortLabel ?? "קטן"} מדי: ${f} ${p} ${m}${c.minimum.toString()}`;
      }
      case "invalid_format": {
        const d = c;
        if (d.format === "starts_with")
          return `המחרוזת חייבת להתחיל ב "${d.prefix}"`;
        if (d.format === "ends_with")
          return `המחרוזת חייבת להסתיים ב "${d.suffix}"`;
        if (d.format === "includes")
          return `המחרוזת חייבת לכלול "${d.includes}"`;
        if (d.format === "regex")
          return `המחרוזת חייבת להתאים לתבנית ${d.pattern}`;
        const f = u[d.format], m = f?.label ?? d.format, v = (f?.gender ?? "m") === "f" ? "תקינה" : "תקין";
        return `${m} לא ${v}`;
      }
      case "not_multiple_of":
        return `מספר לא תקין: חייב להיות מכפלה של ${c.divisor}`;
      case "unrecognized_keys":
        return `מפתח${c.keys.length > 1 ? "ות" : ""} לא מזוה${c.keys.length > 1 ? "ים" : "ה"}: ${q(c.keys, ", ")}`;
      case "invalid_key":
        return "שדה לא תקין באובייקט";
      case "invalid_union":
        return "קלט לא תקין";
      case "invalid_element":
        return `ערך לא תקין ב${n(c.origin ?? "array")}`;
      default:
        return "קלט לא תקין";
    }
  };
};
function iS() {
  return {
    localeError: oS()
  };
}
const lS = () => {
  const e = {
    string: { unit: "karakter", verb: "legyen" },
    file: { unit: "byte", verb: "legyen" },
    array: { unit: "elem", verb: "legyen" },
    set: { unit: "elem", verb: "legyen" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const o = typeof n;
    switch (o) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "szám";
      case "object": {
        if (Array.isArray(n))
          return "tömb";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return o;
  }, a = {
    regex: "bemenet",
    email: "email cím",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO időbélyeg",
    date: "ISO dátum",
    time: "ISO idő",
    duration: "ISO időintervallum",
    ipv4: "IPv4 cím",
    ipv6: "IPv6 cím",
    cidrv4: "IPv4 tartomány",
    cidrv6: "IPv6 tartomány",
    base64: "base64-kódolt string",
    base64url: "base64url-kódolt string",
    json_string: "JSON string",
    e164: "E.164 szám",
    jwt: "JWT",
    template_literal: "bemenet"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Érvénytelen bemenet: a várt érték ${n.expected}, a kapott érték ${r(n.input)}`;
      // return `Invalid input: expected ${issue.expected}, received ${util.getParsedType(issue.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Érvénytelen bemenet: a várt érték ${$e(n.values[0])}` : `Érvénytelen opció: valamelyik érték várt ${q(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", i = t(n.origin);
        return i ? `Túl nagy: ${n.origin ?? "érték"} mérete túl nagy ${o}${n.maximum.toString()} ${i.unit ?? "elem"}` : `Túl nagy: a bemeneti érték ${n.origin ?? "érték"} túl nagy: ${o}${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", i = t(n.origin);
        return i ? `Túl kicsi: a bemeneti érték ${n.origin} mérete túl kicsi ${o}${n.minimum.toString()} ${i.unit}` : `Túl kicsi: a bemeneti érték ${n.origin} túl kicsi ${o}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `Érvénytelen string: "${o.prefix}" értékkel kell kezdődnie` : o.format === "ends_with" ? `Érvénytelen string: "${o.suffix}" értékkel kell végződnie` : o.format === "includes" ? `Érvénytelen string: "${o.includes}" értéket kell tartalmaznia` : o.format === "regex" ? `Érvénytelen string: ${o.pattern} mintának kell megfelelnie` : `Érvénytelen ${a[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Érvénytelen szám: ${n.divisor} többszörösének kell lennie`;
      case "unrecognized_keys":
        return `Ismeretlen kulcs${n.keys.length > 1 ? "s" : ""}: ${q(n.keys, ", ")}`;
      case "invalid_key":
        return `Érvénytelen kulcs ${n.origin}`;
      case "invalid_union":
        return "Érvénytelen bemenet";
      case "invalid_element":
        return `Érvénytelen érték: ${n.origin}`;
      default:
        return "Érvénytelen bemenet";
    }
  };
};
function sS() {
  return {
    localeError: lS()
  };
}
const uS = () => {
  const e = {
    string: { unit: "karakter", verb: "memiliki" },
    file: { unit: "byte", verb: "memiliki" },
    array: { unit: "item", verb: "memiliki" },
    set: { unit: "item", verb: "memiliki" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const o = typeof n;
    switch (o) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "number";
      case "object": {
        if (Array.isArray(n))
          return "array";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return o;
  }, a = {
    regex: "input",
    email: "alamat email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "tanggal dan waktu format ISO",
    date: "tanggal format ISO",
    time: "jam format ISO",
    duration: "durasi format ISO",
    ipv4: "alamat IPv4",
    ipv6: "alamat IPv6",
    cidrv4: "rentang alamat IPv4",
    cidrv6: "rentang alamat IPv6",
    base64: "string dengan enkode base64",
    base64url: "string dengan enkode base64url",
    json_string: "string JSON",
    e164: "angka E.164",
    jwt: "JWT",
    template_literal: "input"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Input tidak valid: diharapkan ${n.expected}, diterima ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Input tidak valid: diharapkan ${$e(n.values[0])}` : `Pilihan tidak valid: diharapkan salah satu dari ${q(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", i = t(n.origin);
        return i ? `Terlalu besar: diharapkan ${n.origin ?? "value"} memiliki ${o}${n.maximum.toString()} ${i.unit ?? "elemen"}` : `Terlalu besar: diharapkan ${n.origin ?? "value"} menjadi ${o}${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", i = t(n.origin);
        return i ? `Terlalu kecil: diharapkan ${n.origin} memiliki ${o}${n.minimum.toString()} ${i.unit}` : `Terlalu kecil: diharapkan ${n.origin} menjadi ${o}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `String tidak valid: harus dimulai dengan "${o.prefix}"` : o.format === "ends_with" ? `String tidak valid: harus berakhir dengan "${o.suffix}"` : o.format === "includes" ? `String tidak valid: harus menyertakan "${o.includes}"` : o.format === "regex" ? `String tidak valid: harus sesuai pola ${o.pattern}` : `${a[o.format] ?? n.format} tidak valid`;
      }
      case "not_multiple_of":
        return `Angka tidak valid: harus kelipatan dari ${n.divisor}`;
      case "unrecognized_keys":
        return `Kunci tidak dikenali ${n.keys.length > 1 ? "s" : ""}: ${q(n.keys, ", ")}`;
      case "invalid_key":
        return `Kunci tidak valid di ${n.origin}`;
      case "invalid_union":
        return "Input tidak valid";
      case "invalid_element":
        return `Nilai tidak valid di ${n.origin}`;
      default:
        return "Input tidak valid";
    }
  };
};
function cS() {
  return {
    localeError: uS()
  };
}
const dS = (e) => {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : "númer";
    case "object": {
      if (Array.isArray(e))
        return "fylki";
      if (e === null)
        return "null";
      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
        return e.constructor.name;
    }
  }
  return t;
}, fS = () => {
  const e = {
    string: { unit: "stafi", verb: "að hafa" },
    file: { unit: "bæti", verb: "að hafa" },
    array: { unit: "hluti", verb: "að hafa" },
    set: { unit: "hluti", verb: "að hafa" }
  };
  function t(a) {
    return e[a] ?? null;
  }
  const r = {
    regex: "gildi",
    email: "netfang",
    url: "vefslóð",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO dagsetning og tími",
    date: "ISO dagsetning",
    time: "ISO tími",
    duration: "ISO tímalengd",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded strengur",
    base64url: "base64url-encoded strengur",
    json_string: "JSON strengur",
    e164: "E.164 tölugildi",
    jwt: "JWT",
    template_literal: "gildi"
  };
  return (a) => {
    switch (a.code) {
      case "invalid_type":
        return `Rangt gildi: Þú slóst inn ${dS(a.input)} þar sem á að vera ${a.expected}`;
      case "invalid_value":
        return a.values.length === 1 ? `Rangt gildi: gert ráð fyrir ${$e(a.values[0])}` : `Ógilt val: má vera eitt af eftirfarandi ${q(a.values, "|")}`;
      case "too_big": {
        const n = a.inclusive ? "<=" : "<", o = t(a.origin);
        return o ? `Of stórt: gert er ráð fyrir að ${a.origin ?? "gildi"} hafi ${n}${a.maximum.toString()} ${o.unit ?? "hluti"}` : `Of stórt: gert er ráð fyrir að ${a.origin ?? "gildi"} sé ${n}${a.maximum.toString()}`;
      }
      case "too_small": {
        const n = a.inclusive ? ">=" : ">", o = t(a.origin);
        return o ? `Of lítið: gert er ráð fyrir að ${a.origin} hafi ${n}${a.minimum.toString()} ${o.unit}` : `Of lítið: gert er ráð fyrir að ${a.origin} sé ${n}${a.minimum.toString()}`;
      }
      case "invalid_format": {
        const n = a;
        return n.format === "starts_with" ? `Ógildur strengur: verður að byrja á "${n.prefix}"` : n.format === "ends_with" ? `Ógildur strengur: verður að enda á "${n.suffix}"` : n.format === "includes" ? `Ógildur strengur: verður að innihalda "${n.includes}"` : n.format === "regex" ? `Ógildur strengur: verður að fylgja mynstri ${n.pattern}` : `Rangt ${r[n.format] ?? a.format}`;
      }
      case "not_multiple_of":
        return `Röng tala: verður að vera margfeldi af ${a.divisor}`;
      case "unrecognized_keys":
        return `Óþekkt ${a.keys.length > 1 ? "ir lyklar" : "ur lykill"}: ${q(a.keys, ", ")}`;
      case "invalid_key":
        return `Rangur lykill í ${a.origin}`;
      case "invalid_union":
        return "Rangt gildi";
      case "invalid_element":
        return `Rangt gildi í ${a.origin}`;
      default:
        return "Rangt gildi";
    }
  };
};
function mS() {
  return {
    localeError: fS()
  };
}
const pS = () => {
  const e = {
    string: { unit: "caratteri", verb: "avere" },
    file: { unit: "byte", verb: "avere" },
    array: { unit: "elementi", verb: "avere" },
    set: { unit: "elementi", verb: "avere" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const o = typeof n;
    switch (o) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "numero";
      case "object": {
        if (Array.isArray(n))
          return "vettore";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return o;
  }, a = {
    regex: "input",
    email: "indirizzo email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data e ora ISO",
    date: "data ISO",
    time: "ora ISO",
    duration: "durata ISO",
    ipv4: "indirizzo IPv4",
    ipv6: "indirizzo IPv6",
    cidrv4: "intervallo IPv4",
    cidrv6: "intervallo IPv6",
    base64: "stringa codificata in base64",
    base64url: "URL codificata in base64",
    json_string: "stringa JSON",
    e164: "numero E.164",
    jwt: "JWT",
    template_literal: "input"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Input non valido: atteso ${n.expected}, ricevuto ${r(n.input)}`;
      // return `Input non valido: atteso ${issue.expected}, ricevuto ${util.getParsedType(issue.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Input non valido: atteso ${$e(n.values[0])}` : `Opzione non valida: atteso uno tra ${q(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", i = t(n.origin);
        return i ? `Troppo grande: ${n.origin ?? "valore"} deve avere ${o}${n.maximum.toString()} ${i.unit ?? "elementi"}` : `Troppo grande: ${n.origin ?? "valore"} deve essere ${o}${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", i = t(n.origin);
        return i ? `Troppo piccolo: ${n.origin} deve avere ${o}${n.minimum.toString()} ${i.unit}` : `Troppo piccolo: ${n.origin} deve essere ${o}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `Stringa non valida: deve iniziare con "${o.prefix}"` : o.format === "ends_with" ? `Stringa non valida: deve terminare con "${o.suffix}"` : o.format === "includes" ? `Stringa non valida: deve includere "${o.includes}"` : o.format === "regex" ? `Stringa non valida: deve corrispondere al pattern ${o.pattern}` : `Invalid ${a[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Numero non valido: deve essere un multiplo di ${n.divisor}`;
      case "unrecognized_keys":
        return `Chiav${n.keys.length > 1 ? "i" : "e"} non riconosciut${n.keys.length > 1 ? "e" : "a"}: ${q(n.keys, ", ")}`;
      case "invalid_key":
        return `Chiave non valida in ${n.origin}`;
      case "invalid_union":
        return "Input non valido";
      case "invalid_element":
        return `Valore non valido in ${n.origin}`;
      default:
        return "Input non valido";
    }
  };
};
function vS() {
  return {
    localeError: pS()
  };
}
const gS = () => {
  const e = {
    string: { unit: "文字", verb: "である" },
    file: { unit: "バイト", verb: "である" },
    array: { unit: "要素", verb: "である" },
    set: { unit: "要素", verb: "である" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const o = typeof n;
    switch (o) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "数値";
      case "object": {
        if (Array.isArray(n))
          return "配列";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return o;
  }, a = {
    regex: "入力値",
    email: "メールアドレス",
    url: "URL",
    emoji: "絵文字",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO日時",
    date: "ISO日付",
    time: "ISO時刻",
    duration: "ISO期間",
    ipv4: "IPv4アドレス",
    ipv6: "IPv6アドレス",
    cidrv4: "IPv4範囲",
    cidrv6: "IPv6範囲",
    base64: "base64エンコード文字列",
    base64url: "base64urlエンコード文字列",
    json_string: "JSON文字列",
    e164: "E.164番号",
    jwt: "JWT",
    template_literal: "入力値"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `無効な入力: ${n.expected}が期待されましたが、${r(n.input)}が入力されました`;
      case "invalid_value":
        return n.values.length === 1 ? `無効な入力: ${$e(n.values[0])}が期待されました` : `無効な選択: ${q(n.values, "、")}のいずれかである必要があります`;
      case "too_big": {
        const o = n.inclusive ? "以下である" : "より小さい", i = t(n.origin);
        return i ? `大きすぎる値: ${n.origin ?? "値"}は${n.maximum.toString()}${i.unit ?? "要素"}${o}必要があります` : `大きすぎる値: ${n.origin ?? "値"}は${n.maximum.toString()}${o}必要があります`;
      }
      case "too_small": {
        const o = n.inclusive ? "以上である" : "より大きい", i = t(n.origin);
        return i ? `小さすぎる値: ${n.origin}は${n.minimum.toString()}${i.unit}${o}必要があります` : `小さすぎる値: ${n.origin}は${n.minimum.toString()}${o}必要があります`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `無効な文字列: "${o.prefix}"で始まる必要があります` : o.format === "ends_with" ? `無効な文字列: "${o.suffix}"で終わる必要があります` : o.format === "includes" ? `無効な文字列: "${o.includes}"を含む必要があります` : o.format === "regex" ? `無効な文字列: パターン${o.pattern}に一致する必要があります` : `無効な${a[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `無効な数値: ${n.divisor}の倍数である必要があります`;
      case "unrecognized_keys":
        return `認識されていないキー${n.keys.length > 1 ? "群" : ""}: ${q(n.keys, "、")}`;
      case "invalid_key":
        return `${n.origin}内の無効なキー`;
      case "invalid_union":
        return "無効な入力";
      case "invalid_element":
        return `${n.origin}内の無効な値`;
      default:
        return "無効な入力";
    }
  };
};
function hS() {
  return {
    localeError: gS()
  };
}
const bS = (e) => {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : "რიცხვი";
    case "object": {
      if (Array.isArray(e))
        return "მასივი";
      if (e === null)
        return "null";
      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
        return e.constructor.name;
    }
  }
  return {
    string: "სტრინგი",
    boolean: "ბულეანი",
    undefined: "undefined",
    bigint: "bigint",
    symbol: "symbol",
    function: "ფუნქცია"
  }[t] ?? t;
}, _S = () => {
  const e = {
    string: { unit: "სიმბოლო", verb: "უნდა შეიცავდეს" },
    file: { unit: "ბაიტი", verb: "უნდა შეიცავდეს" },
    array: { unit: "ელემენტი", verb: "უნდა შეიცავდეს" },
    set: { unit: "ელემენტი", verb: "უნდა შეიცავდეს" }
  };
  function t(a) {
    return e[a] ?? null;
  }
  const r = {
    regex: "შეყვანა",
    email: "ელ-ფოსტის მისამართი",
    url: "URL",
    emoji: "ემოჯი",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "თარიღი-დრო",
    date: "თარიღი",
    time: "დრო",
    duration: "ხანგრძლივობა",
    ipv4: "IPv4 მისამართი",
    ipv6: "IPv6 მისამართი",
    cidrv4: "IPv4 დიაპაზონი",
    cidrv6: "IPv6 დიაპაზონი",
    base64: "base64-კოდირებული სტრინგი",
    base64url: "base64url-კოდირებული სტრინგი",
    json_string: "JSON სტრინგი",
    e164: "E.164 ნომერი",
    jwt: "JWT",
    template_literal: "შეყვანა"
  };
  return (a) => {
    switch (a.code) {
      case "invalid_type":
        return `არასწორი შეყვანა: მოსალოდნელი ${a.expected}, მიღებული ${bS(a.input)}`;
      case "invalid_value":
        return a.values.length === 1 ? `არასწორი შეყვანა: მოსალოდნელი ${$e(a.values[0])}` : `არასწორი ვარიანტი: მოსალოდნელია ერთ-ერთი ${q(a.values, "|")}-დან`;
      case "too_big": {
        const n = a.inclusive ? "<=" : "<", o = t(a.origin);
        return o ? `ზედმეტად დიდი: მოსალოდნელი ${a.origin ?? "მნიშვნელობა"} ${o.verb} ${n}${a.maximum.toString()} ${o.unit}` : `ზედმეტად დიდი: მოსალოდნელი ${a.origin ?? "მნიშვნელობა"} იყოს ${n}${a.maximum.toString()}`;
      }
      case "too_small": {
        const n = a.inclusive ? ">=" : ">", o = t(a.origin);
        return o ? `ზედმეტად პატარა: მოსალოდნელი ${a.origin} ${o.verb} ${n}${a.minimum.toString()} ${o.unit}` : `ზედმეტად პატარა: მოსალოდნელი ${a.origin} იყოს ${n}${a.minimum.toString()}`;
      }
      case "invalid_format": {
        const n = a;
        return n.format === "starts_with" ? `არასწორი სტრინგი: უნდა იწყებოდეს "${n.prefix}"-ით` : n.format === "ends_with" ? `არასწორი სტრინგი: უნდა მთავრდებოდეს "${n.suffix}"-ით` : n.format === "includes" ? `არასწორი სტრინგი: უნდა შეიცავდეს "${n.includes}"-ს` : n.format === "regex" ? `არასწორი სტრინგი: უნდა შეესაბამებოდეს შაბლონს ${n.pattern}` : `არასწორი ${r[n.format] ?? a.format}`;
      }
      case "not_multiple_of":
        return `არასწორი რიცხვი: უნდა იყოს ${a.divisor}-ის ჯერადი`;
      case "unrecognized_keys":
        return `უცნობი გასაღებ${a.keys.length > 1 ? "ები" : "ი"}: ${q(a.keys, ", ")}`;
      case "invalid_key":
        return `არასწორი გასაღები ${a.origin}-ში`;
      case "invalid_union":
        return "არასწორი შეყვანა";
      case "invalid_element":
        return `არასწორი მნიშვნელობა ${a.origin}-ში`;
      default:
        return "არასწორი შეყვანა";
    }
  };
};
function yS() {
  return {
    localeError: _S()
  };
}
const $S = () => {
  const e = {
    string: { unit: "តួអក្សរ", verb: "គួរមាន" },
    file: { unit: "បៃ", verb: "គួរមាន" },
    array: { unit: "ធាតុ", verb: "គួរមាន" },
    set: { unit: "ធាតុ", verb: "គួរមាន" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const o = typeof n;
    switch (o) {
      case "number":
        return Number.isNaN(n) ? "មិនមែនជាលេខ (NaN)" : "លេខ";
      case "object": {
        if (Array.isArray(n))
          return "អារេ (Array)";
        if (n === null)
          return "គ្មានតម្លៃ (null)";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return o;
  }, a = {
    regex: "ទិន្នន័យបញ្ចូល",
    email: "អាសយដ្ឋានអ៊ីមែល",
    url: "URL",
    emoji: "សញ្ញាអារម្មណ៍",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "កាលបរិច្ឆេទ និងម៉ោង ISO",
    date: "កាលបរិច្ឆេទ ISO",
    time: "ម៉ោង ISO",
    duration: "រយៈពេល ISO",
    ipv4: "អាសយដ្ឋាន IPv4",
    ipv6: "អាសយដ្ឋាន IPv6",
    cidrv4: "ដែនអាសយដ្ឋាន IPv4",
    cidrv6: "ដែនអាសយដ្ឋាន IPv6",
    base64: "ខ្សែអក្សរអ៊ិកូដ base64",
    base64url: "ខ្សែអក្សរអ៊ិកូដ base64url",
    json_string: "ខ្សែអក្សរ JSON",
    e164: "លេខ E.164",
    jwt: "JWT",
    template_literal: "ទិន្នន័យបញ្ចូល"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${n.expected} ប៉ុន្តែទទួលបាន ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${$e(n.values[0])}` : `ជម្រើសមិនត្រឹមត្រូវ៖ ត្រូវជាមួយក្នុងចំណោម ${q(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", i = t(n.origin);
        return i ? `ធំពេក៖ ត្រូវការ ${n.origin ?? "តម្លៃ"} ${o} ${n.maximum.toString()} ${i.unit ?? "ធាតុ"}` : `ធំពេក៖ ត្រូវការ ${n.origin ?? "តម្លៃ"} ${o} ${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", i = t(n.origin);
        return i ? `តូចពេក៖ ត្រូវការ ${n.origin} ${o} ${n.minimum.toString()} ${i.unit}` : `តូចពេក៖ ត្រូវការ ${n.origin} ${o} ${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវចាប់ផ្តើមដោយ "${o.prefix}"` : o.format === "ends_with" ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវបញ្ចប់ដោយ "${o.suffix}"` : o.format === "includes" ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវមាន "${o.includes}"` : o.format === "regex" ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវតែផ្គូផ្គងនឹងទម្រង់ដែលបានកំណត់ ${o.pattern}` : `មិនត្រឹមត្រូវ៖ ${a[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `លេខមិនត្រឹមត្រូវ៖ ត្រូវតែជាពហុគុណនៃ ${n.divisor}`;
      case "unrecognized_keys":
        return `រកឃើញសោមិនស្គាល់៖ ${q(n.keys, ", ")}`;
      case "invalid_key":
        return `សោមិនត្រឹមត្រូវនៅក្នុង ${n.origin}`;
      case "invalid_union":
        return "ទិន្នន័យមិនត្រឹមត្រូវ";
      case "invalid_element":
        return `ទិន្នន័យមិនត្រឹមត្រូវនៅក្នុង ${n.origin}`;
      default:
        return "ទិន្នន័យមិនត្រឹមត្រូវ";
    }
  };
};
function Lp() {
  return {
    localeError: $S()
  };
}
function wS() {
  return Lp();
}
const kS = () => {
  const e = {
    string: { unit: "문자", verb: "to have" },
    file: { unit: "바이트", verb: "to have" },
    array: { unit: "개", verb: "to have" },
    set: { unit: "개", verb: "to have" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const o = typeof n;
    switch (o) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "number";
      case "object": {
        if (Array.isArray(n))
          return "array";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return o;
  }, a = {
    regex: "입력",
    email: "이메일 주소",
    url: "URL",
    emoji: "이모지",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO 날짜시간",
    date: "ISO 날짜",
    time: "ISO 시간",
    duration: "ISO 기간",
    ipv4: "IPv4 주소",
    ipv6: "IPv6 주소",
    cidrv4: "IPv4 범위",
    cidrv6: "IPv6 범위",
    base64: "base64 인코딩 문자열",
    base64url: "base64url 인코딩 문자열",
    json_string: "JSON 문자열",
    e164: "E.164 번호",
    jwt: "JWT",
    template_literal: "입력"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `잘못된 입력: 예상 타입은 ${n.expected}, 받은 타입은 ${r(n.input)}입니다`;
      case "invalid_value":
        return n.values.length === 1 ? `잘못된 입력: 값은 ${$e(n.values[0])} 이어야 합니다` : `잘못된 옵션: ${q(n.values, "또는 ")} 중 하나여야 합니다`;
      case "too_big": {
        const o = n.inclusive ? "이하" : "미만", i = o === "미만" ? "이어야 합니다" : "여야 합니다", l = t(n.origin), u = l?.unit ?? "요소";
        return l ? `${n.origin ?? "값"}이 너무 큽니다: ${n.maximum.toString()}${u} ${o}${i}` : `${n.origin ?? "값"}이 너무 큽니다: ${n.maximum.toString()} ${o}${i}`;
      }
      case "too_small": {
        const o = n.inclusive ? "이상" : "초과", i = o === "이상" ? "이어야 합니다" : "여야 합니다", l = t(n.origin), u = l?.unit ?? "요소";
        return l ? `${n.origin ?? "값"}이 너무 작습니다: ${n.minimum.toString()}${u} ${o}${i}` : `${n.origin ?? "값"}이 너무 작습니다: ${n.minimum.toString()} ${o}${i}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `잘못된 문자열: "${o.prefix}"(으)로 시작해야 합니다` : o.format === "ends_with" ? `잘못된 문자열: "${o.suffix}"(으)로 끝나야 합니다` : o.format === "includes" ? `잘못된 문자열: "${o.includes}"을(를) 포함해야 합니다` : o.format === "regex" ? `잘못된 문자열: 정규식 ${o.pattern} 패턴과 일치해야 합니다` : `잘못된 ${a[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `잘못된 숫자: ${n.divisor}의 배수여야 합니다`;
      case "unrecognized_keys":
        return `인식할 수 없는 키: ${q(n.keys, ", ")}`;
      case "invalid_key":
        return `잘못된 키: ${n.origin}`;
      case "invalid_union":
        return "잘못된 입력";
      case "invalid_element":
        return `잘못된 값: ${n.origin}`;
      default:
        return "잘못된 입력";
    }
  };
};
function SS() {
  return {
    localeError: kS()
  };
}
const IS = (e) => jr(typeof e, e), jr = (e, t = void 0) => {
  switch (e) {
    case "number":
      return Number.isNaN(t) ? "NaN" : "skaičius";
    case "bigint":
      return "sveikasis skaičius";
    case "string":
      return "eilutė";
    case "boolean":
      return "loginė reikšmė";
    case "undefined":
    case "void":
      return "neapibrėžta reikšmė";
    case "function":
      return "funkcija";
    case "symbol":
      return "simbolis";
    case "object":
      return t === void 0 ? "nežinomas objektas" : t === null ? "nulinė reikšmė" : Array.isArray(t) ? "masyvas" : Object.getPrototypeOf(t) !== Object.prototype && t.constructor ? t.constructor.name : "objektas";
    //Zod types below
    case "null":
      return "nulinė reikšmė";
  }
  return e;
}, Ar = (e) => e.charAt(0).toUpperCase() + e.slice(1);
function nc(e) {
  const t = Math.abs(e), r = t % 10, a = t % 100;
  return a >= 11 && a <= 19 || r === 0 ? "many" : r === 1 ? "one" : "few";
}
const xS = () => {
  const e = {
    string: {
      unit: {
        one: "simbolis",
        few: "simboliai",
        many: "simbolių"
      },
      verb: {
        smaller: {
          inclusive: "turi būti ne ilgesnė kaip",
          notInclusive: "turi būti trumpesnė kaip"
        },
        bigger: {
          inclusive: "turi būti ne trumpesnė kaip",
          notInclusive: "turi būti ilgesnė kaip"
        }
      }
    },
    file: {
      unit: {
        one: "baitas",
        few: "baitai",
        many: "baitų"
      },
      verb: {
        smaller: {
          inclusive: "turi būti ne didesnis kaip",
          notInclusive: "turi būti mažesnis kaip"
        },
        bigger: {
          inclusive: "turi būti ne mažesnis kaip",
          notInclusive: "turi būti didesnis kaip"
        }
      }
    },
    array: {
      unit: {
        one: "elementą",
        few: "elementus",
        many: "elementų"
      },
      verb: {
        smaller: {
          inclusive: "turi turėti ne daugiau kaip",
          notInclusive: "turi turėti mažiau kaip"
        },
        bigger: {
          inclusive: "turi turėti ne mažiau kaip",
          notInclusive: "turi turėti daugiau kaip"
        }
      }
    },
    set: {
      unit: {
        one: "elementą",
        few: "elementus",
        many: "elementų"
      },
      verb: {
        smaller: {
          inclusive: "turi turėti ne daugiau kaip",
          notInclusive: "turi turėti mažiau kaip"
        },
        bigger: {
          inclusive: "turi turėti ne mažiau kaip",
          notInclusive: "turi turėti daugiau kaip"
        }
      }
    }
  };
  function t(a, n, o, i) {
    const l = e[a] ?? null;
    return l === null ? l : {
      unit: l.unit[n],
      verb: l.verb[i][o ? "inclusive" : "notInclusive"]
    };
  }
  const r = {
    regex: "įvestis",
    email: "el. pašto adresas",
    url: "URL",
    emoji: "jaustukas",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO data ir laikas",
    date: "ISO data",
    time: "ISO laikas",
    duration: "ISO trukmė",
    ipv4: "IPv4 adresas",
    ipv6: "IPv6 adresas",
    cidrv4: "IPv4 tinklo prefiksas (CIDR)",
    cidrv6: "IPv6 tinklo prefiksas (CIDR)",
    base64: "base64 užkoduota eilutė",
    base64url: "base64url užkoduota eilutė",
    json_string: "JSON eilutė",
    e164: "E.164 numeris",
    jwt: "JWT",
    template_literal: "įvestis"
  };
  return (a) => {
    switch (a.code) {
      case "invalid_type":
        return `Gautas tipas ${IS(a.input)}, o tikėtasi - ${jr(a.expected)}`;
      case "invalid_value":
        return a.values.length === 1 ? `Privalo būti ${$e(a.values[0])}` : `Privalo būti vienas iš ${q(a.values, "|")} pasirinkimų`;
      case "too_big": {
        const n = jr(a.origin), o = t(a.origin, nc(Number(a.maximum)), a.inclusive ?? !1, "smaller");
        if (o?.verb)
          return `${Ar(n ?? a.origin ?? "reikšmė")} ${o.verb} ${a.maximum.toString()} ${o.unit ?? "elementų"}`;
        const i = a.inclusive ? "ne didesnis kaip" : "mažesnis kaip";
        return `${Ar(n ?? a.origin ?? "reikšmė")} turi būti ${i} ${a.maximum.toString()} ${o?.unit}`;
      }
      case "too_small": {
        const n = jr(a.origin), o = t(a.origin, nc(Number(a.minimum)), a.inclusive ?? !1, "bigger");
        if (o?.verb)
          return `${Ar(n ?? a.origin ?? "reikšmė")} ${o.verb} ${a.minimum.toString()} ${o.unit ?? "elementų"}`;
        const i = a.inclusive ? "ne mažesnis kaip" : "didesnis kaip";
        return `${Ar(n ?? a.origin ?? "reikšmė")} turi būti ${i} ${a.minimum.toString()} ${o?.unit}`;
      }
      case "invalid_format": {
        const n = a;
        return n.format === "starts_with" ? `Eilutė privalo prasidėti "${n.prefix}"` : n.format === "ends_with" ? `Eilutė privalo pasibaigti "${n.suffix}"` : n.format === "includes" ? `Eilutė privalo įtraukti "${n.includes}"` : n.format === "regex" ? `Eilutė privalo atitikti ${n.pattern}` : `Neteisingas ${r[n.format] ?? a.format}`;
      }
      case "not_multiple_of":
        return `Skaičius privalo būti ${a.divisor} kartotinis.`;
      case "unrecognized_keys":
        return `Neatpažint${a.keys.length > 1 ? "i" : "as"} rakt${a.keys.length > 1 ? "ai" : "as"}: ${q(a.keys, ", ")}`;
      case "invalid_key":
        return "Rastas klaidingas raktas";
      case "invalid_union":
        return "Klaidinga įvestis";
      case "invalid_element": {
        const n = jr(a.origin);
        return `${Ar(n ?? a.origin ?? "reikšmė")} turi klaidingą įvestį`;
      }
      default:
        return "Klaidinga įvestis";
    }
  };
};
function OS() {
  return {
    localeError: xS()
  };
}
const ES = () => {
  const e = {
    string: { unit: "знаци", verb: "да имаат" },
    file: { unit: "бајти", verb: "да имаат" },
    array: { unit: "ставки", verb: "да имаат" },
    set: { unit: "ставки", verb: "да имаат" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const o = typeof n;
    switch (o) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "број";
      case "object": {
        if (Array.isArray(n))
          return "низа";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return o;
  }, a = {
    regex: "внес",
    email: "адреса на е-пошта",
    url: "URL",
    emoji: "емоџи",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO датум и време",
    date: "ISO датум",
    time: "ISO време",
    duration: "ISO времетраење",
    ipv4: "IPv4 адреса",
    ipv6: "IPv6 адреса",
    cidrv4: "IPv4 опсег",
    cidrv6: "IPv6 опсег",
    base64: "base64-енкодирана низа",
    base64url: "base64url-енкодирана низа",
    json_string: "JSON низа",
    e164: "E.164 број",
    jwt: "JWT",
    template_literal: "внес"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Грешен внес: се очекува ${n.expected}, примено ${r(n.input)}`;
      // return `Invalid input: expected ${issue.expected}, received ${util.getParsedType(issue.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Invalid input: expected ${$e(n.values[0])}` : `Грешана опција: се очекува една ${q(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", i = t(n.origin);
        return i ? `Премногу голем: се очекува ${n.origin ?? "вредноста"} да има ${o}${n.maximum.toString()} ${i.unit ?? "елементи"}` : `Премногу голем: се очекува ${n.origin ?? "вредноста"} да биде ${o}${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", i = t(n.origin);
        return i ? `Премногу мал: се очекува ${n.origin} да има ${o}${n.minimum.toString()} ${i.unit}` : `Премногу мал: се очекува ${n.origin} да биде ${o}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `Неважечка низа: мора да започнува со "${o.prefix}"` : o.format === "ends_with" ? `Неважечка низа: мора да завршува со "${o.suffix}"` : o.format === "includes" ? `Неважечка низа: мора да вклучува "${o.includes}"` : o.format === "regex" ? `Неважечка низа: мора да одгоара на патернот ${o.pattern}` : `Invalid ${a[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Грешен број: мора да биде делив со ${n.divisor}`;
      case "unrecognized_keys":
        return `${n.keys.length > 1 ? "Непрепознаени клучеви" : "Непрепознаен клуч"}: ${q(n.keys, ", ")}`;
      case "invalid_key":
        return `Грешен клуч во ${n.origin}`;
      case "invalid_union":
        return "Грешен внес";
      case "invalid_element":
        return `Грешна вредност во ${n.origin}`;
      default:
        return "Грешен внес";
    }
  };
};
function NS() {
  return {
    localeError: ES()
  };
}
const zS = () => {
  const e = {
    string: { unit: "aksara", verb: "mempunyai" },
    file: { unit: "bait", verb: "mempunyai" },
    array: { unit: "elemen", verb: "mempunyai" },
    set: { unit: "elemen", verb: "mempunyai" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const o = typeof n;
    switch (o) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "nombor";
      case "object": {
        if (Array.isArray(n))
          return "array";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return o;
  }, a = {
    regex: "input",
    email: "alamat e-mel",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "tarikh masa ISO",
    date: "tarikh ISO",
    time: "masa ISO",
    duration: "tempoh ISO",
    ipv4: "alamat IPv4",
    ipv6: "alamat IPv6",
    cidrv4: "julat IPv4",
    cidrv6: "julat IPv6",
    base64: "string dikodkan base64",
    base64url: "string dikodkan base64url",
    json_string: "string JSON",
    e164: "nombor E.164",
    jwt: "JWT",
    template_literal: "input"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Input tidak sah: dijangka ${n.expected}, diterima ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Input tidak sah: dijangka ${$e(n.values[0])}` : `Pilihan tidak sah: dijangka salah satu daripada ${q(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", i = t(n.origin);
        return i ? `Terlalu besar: dijangka ${n.origin ?? "nilai"} ${i.verb} ${o}${n.maximum.toString()} ${i.unit ?? "elemen"}` : `Terlalu besar: dijangka ${n.origin ?? "nilai"} adalah ${o}${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", i = t(n.origin);
        return i ? `Terlalu kecil: dijangka ${n.origin} ${i.verb} ${o}${n.minimum.toString()} ${i.unit}` : `Terlalu kecil: dijangka ${n.origin} adalah ${o}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `String tidak sah: mesti bermula dengan "${o.prefix}"` : o.format === "ends_with" ? `String tidak sah: mesti berakhir dengan "${o.suffix}"` : o.format === "includes" ? `String tidak sah: mesti mengandungi "${o.includes}"` : o.format === "regex" ? `String tidak sah: mesti sepadan dengan corak ${o.pattern}` : `${a[o.format] ?? n.format} tidak sah`;
      }
      case "not_multiple_of":
        return `Nombor tidak sah: perlu gandaan ${n.divisor}`;
      case "unrecognized_keys":
        return `Kunci tidak dikenali: ${q(n.keys, ", ")}`;
      case "invalid_key":
        return `Kunci tidak sah dalam ${n.origin}`;
      case "invalid_union":
        return "Input tidak sah";
      case "invalid_element":
        return `Nilai tidak sah dalam ${n.origin}`;
      default:
        return "Input tidak sah";
    }
  };
};
function TS() {
  return {
    localeError: zS()
  };
}
const PS = () => {
  const e = {
    string: { unit: "tekens", verb: "te hebben" },
    file: { unit: "bytes", verb: "te hebben" },
    array: { unit: "elementen", verb: "te hebben" },
    set: { unit: "elementen", verb: "te hebben" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const o = typeof n;
    switch (o) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "getal";
      case "object": {
        if (Array.isArray(n))
          return "array";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return o;
  }, a = {
    regex: "invoer",
    email: "emailadres",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datum en tijd",
    date: "ISO datum",
    time: "ISO tijd",
    duration: "ISO duur",
    ipv4: "IPv4-adres",
    ipv6: "IPv6-adres",
    cidrv4: "IPv4-bereik",
    cidrv6: "IPv6-bereik",
    base64: "base64-gecodeerde tekst",
    base64url: "base64 URL-gecodeerde tekst",
    json_string: "JSON string",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "invoer"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Ongeldige invoer: verwacht ${n.expected}, ontving ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Ongeldige invoer: verwacht ${$e(n.values[0])}` : `Ongeldige optie: verwacht één van ${q(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", i = t(n.origin);
        return i ? `Te groot: verwacht dat ${n.origin ?? "waarde"} ${i.verb} ${o}${n.maximum.toString()} ${i.unit ?? "elementen"}` : `Te groot: verwacht dat ${n.origin ?? "waarde"} ${o}${n.maximum.toString()} is`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", i = t(n.origin);
        return i ? `Te klein: verwacht dat ${n.origin} ${i.verb} ${o}${n.minimum.toString()} ${i.unit}` : `Te klein: verwacht dat ${n.origin} ${o}${n.minimum.toString()} is`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `Ongeldige tekst: moet met "${o.prefix}" beginnen` : o.format === "ends_with" ? `Ongeldige tekst: moet op "${o.suffix}" eindigen` : o.format === "includes" ? `Ongeldige tekst: moet "${o.includes}" bevatten` : o.format === "regex" ? `Ongeldige tekst: moet overeenkomen met patroon ${o.pattern}` : `Ongeldig: ${a[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Ongeldig getal: moet een veelvoud van ${n.divisor} zijn`;
      case "unrecognized_keys":
        return `Onbekende key${n.keys.length > 1 ? "s" : ""}: ${q(n.keys, ", ")}`;
      case "invalid_key":
        return `Ongeldige key in ${n.origin}`;
      case "invalid_union":
        return "Ongeldige invoer";
      case "invalid_element":
        return `Ongeldige waarde in ${n.origin}`;
      default:
        return "Ongeldige invoer";
    }
  };
};
function AS() {
  return {
    localeError: PS()
  };
}
const DS = () => {
  const e = {
    string: { unit: "tegn", verb: "å ha" },
    file: { unit: "bytes", verb: "å ha" },
    array: { unit: "elementer", verb: "å inneholde" },
    set: { unit: "elementer", verb: "å inneholde" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const o = typeof n;
    switch (o) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "tall";
      case "object": {
        if (Array.isArray(n))
          return "liste";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return o;
  }, a = {
    regex: "input",
    email: "e-postadresse",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO dato- og klokkeslett",
    date: "ISO-dato",
    time: "ISO-klokkeslett",
    duration: "ISO-varighet",
    ipv4: "IPv4-område",
    ipv6: "IPv6-område",
    cidrv4: "IPv4-spekter",
    cidrv6: "IPv6-spekter",
    base64: "base64-enkodet streng",
    base64url: "base64url-enkodet streng",
    json_string: "JSON-streng",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "input"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Ugyldig input: forventet ${n.expected}, fikk ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Ugyldig verdi: forventet ${$e(n.values[0])}` : `Ugyldig valg: forventet en av ${q(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", i = t(n.origin);
        return i ? `For stor(t): forventet ${n.origin ?? "value"} til å ha ${o}${n.maximum.toString()} ${i.unit ?? "elementer"}` : `For stor(t): forventet ${n.origin ?? "value"} til å ha ${o}${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", i = t(n.origin);
        return i ? `For lite(n): forventet ${n.origin} til å ha ${o}${n.minimum.toString()} ${i.unit}` : `For lite(n): forventet ${n.origin} til å ha ${o}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `Ugyldig streng: må starte med "${o.prefix}"` : o.format === "ends_with" ? `Ugyldig streng: må ende med "${o.suffix}"` : o.format === "includes" ? `Ugyldig streng: må inneholde "${o.includes}"` : o.format === "regex" ? `Ugyldig streng: må matche mønsteret ${o.pattern}` : `Ugyldig ${a[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Ugyldig tall: må være et multiplum av ${n.divisor}`;
      case "unrecognized_keys":
        return `${n.keys.length > 1 ? "Ukjente nøkler" : "Ukjent nøkkel"}: ${q(n.keys, ", ")}`;
      case "invalid_key":
        return `Ugyldig nøkkel i ${n.origin}`;
      case "invalid_union":
        return "Ugyldig input";
      case "invalid_element":
        return `Ugyldig verdi i ${n.origin}`;
      default:
        return "Ugyldig input";
    }
  };
};
function CS() {
  return {
    localeError: DS()
  };
}
const jS = () => {
  const e = {
    string: { unit: "harf", verb: "olmalıdır" },
    file: { unit: "bayt", verb: "olmalıdır" },
    array: { unit: "unsur", verb: "olmalıdır" },
    set: { unit: "unsur", verb: "olmalıdır" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const o = typeof n;
    switch (o) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "numara";
      case "object": {
        if (Array.isArray(n))
          return "saf";
        if (n === null)
          return "gayb";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return o;
  }, a = {
    regex: "giren",
    email: "epostagâh",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO hengâmı",
    date: "ISO tarihi",
    time: "ISO zamanı",
    duration: "ISO müddeti",
    ipv4: "IPv4 nişânı",
    ipv6: "IPv6 nişânı",
    cidrv4: "IPv4 menzili",
    cidrv6: "IPv6 menzili",
    base64: "base64-şifreli metin",
    base64url: "base64url-şifreli metin",
    json_string: "JSON metin",
    e164: "E.164 sayısı",
    jwt: "JWT",
    template_literal: "giren"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Fâsit giren: umulan ${n.expected}, alınan ${r(n.input)}`;
      // return `Fâsit giren: umulan ${issue.expected}, alınan ${util.getParsedType(issue.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Fâsit giren: umulan ${$e(n.values[0])}` : `Fâsit tercih: mûteberler ${q(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", i = t(n.origin);
        return i ? `Fazla büyük: ${n.origin ?? "value"}, ${o}${n.maximum.toString()} ${i.unit ?? "elements"} sahip olmalıydı.` : `Fazla büyük: ${n.origin ?? "value"}, ${o}${n.maximum.toString()} olmalıydı.`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", i = t(n.origin);
        return i ? `Fazla küçük: ${n.origin}, ${o}${n.minimum.toString()} ${i.unit} sahip olmalıydı.` : `Fazla küçük: ${n.origin}, ${o}${n.minimum.toString()} olmalıydı.`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `Fâsit metin: "${o.prefix}" ile başlamalı.` : o.format === "ends_with" ? `Fâsit metin: "${o.suffix}" ile bitmeli.` : o.format === "includes" ? `Fâsit metin: "${o.includes}" ihtivâ etmeli.` : o.format === "regex" ? `Fâsit metin: ${o.pattern} nakşına uymalı.` : `Fâsit ${a[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Fâsit sayı: ${n.divisor} katı olmalıydı.`;
      case "unrecognized_keys":
        return `Tanınmayan anahtar ${n.keys.length > 1 ? "s" : ""}: ${q(n.keys, ", ")}`;
      case "invalid_key":
        return `${n.origin} için tanınmayan anahtar var.`;
      case "invalid_union":
        return "Giren tanınamadı.";
      case "invalid_element":
        return `${n.origin} için tanınmayan kıymet var.`;
      default:
        return "Kıymet tanınamadı.";
    }
  };
};
function US() {
  return {
    localeError: jS()
  };
}
const LS = () => {
  const e = {
    string: { unit: "توکي", verb: "ولري" },
    file: { unit: "بایټس", verb: "ولري" },
    array: { unit: "توکي", verb: "ولري" },
    set: { unit: "توکي", verb: "ولري" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const o = typeof n;
    switch (o) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "عدد";
      case "object": {
        if (Array.isArray(n))
          return "ارې";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return o;
  }, a = {
    regex: "ورودي",
    email: "بریښنالیک",
    url: "یو آر ال",
    emoji: "ایموجي",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "نیټه او وخت",
    date: "نېټه",
    time: "وخت",
    duration: "موده",
    ipv4: "د IPv4 پته",
    ipv6: "د IPv6 پته",
    cidrv4: "د IPv4 ساحه",
    cidrv6: "د IPv6 ساحه",
    base64: "base64-encoded متن",
    base64url: "base64url-encoded متن",
    json_string: "JSON متن",
    e164: "د E.164 شمېره",
    jwt: "JWT",
    template_literal: "ورودي"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `ناسم ورودي: باید ${n.expected} وای, مګر ${r(n.input)} ترلاسه شو`;
      case "invalid_value":
        return n.values.length === 1 ? `ناسم ورودي: باید ${$e(n.values[0])} وای` : `ناسم انتخاب: باید یو له ${q(n.values, "|")} څخه وای`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", i = t(n.origin);
        return i ? `ډیر لوی: ${n.origin ?? "ارزښت"} باید ${o}${n.maximum.toString()} ${i.unit ?? "عنصرونه"} ولري` : `ډیر لوی: ${n.origin ?? "ارزښت"} باید ${o}${n.maximum.toString()} وي`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", i = t(n.origin);
        return i ? `ډیر کوچنی: ${n.origin} باید ${o}${n.minimum.toString()} ${i.unit} ولري` : `ډیر کوچنی: ${n.origin} باید ${o}${n.minimum.toString()} وي`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `ناسم متن: باید د "${o.prefix}" سره پیل شي` : o.format === "ends_with" ? `ناسم متن: باید د "${o.suffix}" سره پای ته ورسيږي` : o.format === "includes" ? `ناسم متن: باید "${o.includes}" ولري` : o.format === "regex" ? `ناسم متن: باید د ${o.pattern} سره مطابقت ولري` : `${a[o.format] ?? n.format} ناسم دی`;
      }
      case "not_multiple_of":
        return `ناسم عدد: باید د ${n.divisor} مضرب وي`;
      case "unrecognized_keys":
        return `ناسم ${n.keys.length > 1 ? "کلیډونه" : "کلیډ"}: ${q(n.keys, ", ")}`;
      case "invalid_key":
        return `ناسم کلیډ په ${n.origin} کې`;
      case "invalid_union":
        return "ناسمه ورودي";
      case "invalid_element":
        return `ناسم عنصر په ${n.origin} کې`;
      default:
        return "ناسمه ورودي";
    }
  };
};
function RS() {
  return {
    localeError: LS()
  };
}
const VS = () => {
  const e = {
    string: { unit: "znaków", verb: "mieć" },
    file: { unit: "bajtów", verb: "mieć" },
    array: { unit: "elementów", verb: "mieć" },
    set: { unit: "elementów", verb: "mieć" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const o = typeof n;
    switch (o) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "liczba";
      case "object": {
        if (Array.isArray(n))
          return "tablica";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return o;
  }, a = {
    regex: "wyrażenie",
    email: "adres email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data i godzina w formacie ISO",
    date: "data w formacie ISO",
    time: "godzina w formacie ISO",
    duration: "czas trwania ISO",
    ipv4: "adres IPv4",
    ipv6: "adres IPv6",
    cidrv4: "zakres IPv4",
    cidrv6: "zakres IPv6",
    base64: "ciąg znaków zakodowany w formacie base64",
    base64url: "ciąg znaków zakodowany w formacie base64url",
    json_string: "ciąg znaków w formacie JSON",
    e164: "liczba E.164",
    jwt: "JWT",
    template_literal: "wejście"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Nieprawidłowe dane wejściowe: oczekiwano ${n.expected}, otrzymano ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Nieprawidłowe dane wejściowe: oczekiwano ${$e(n.values[0])}` : `Nieprawidłowa opcja: oczekiwano jednej z wartości ${q(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", i = t(n.origin);
        return i ? `Za duża wartość: oczekiwano, że ${n.origin ?? "wartość"} będzie mieć ${o}${n.maximum.toString()} ${i.unit ?? "elementów"}` : `Zbyt duż(y/a/e): oczekiwano, że ${n.origin ?? "wartość"} będzie wynosić ${o}${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", i = t(n.origin);
        return i ? `Za mała wartość: oczekiwano, że ${n.origin ?? "wartość"} będzie mieć ${o}${n.minimum.toString()} ${i.unit ?? "elementów"}` : `Zbyt mał(y/a/e): oczekiwano, że ${n.origin ?? "wartość"} będzie wynosić ${o}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `Nieprawidłowy ciąg znaków: musi zaczynać się od "${o.prefix}"` : o.format === "ends_with" ? `Nieprawidłowy ciąg znaków: musi kończyć się na "${o.suffix}"` : o.format === "includes" ? `Nieprawidłowy ciąg znaków: musi zawierać "${o.includes}"` : o.format === "regex" ? `Nieprawidłowy ciąg znaków: musi odpowiadać wzorcowi ${o.pattern}` : `Nieprawidłow(y/a/e) ${a[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Nieprawidłowa liczba: musi być wielokrotnością ${n.divisor}`;
      case "unrecognized_keys":
        return `Nierozpoznane klucze${n.keys.length > 1 ? "s" : ""}: ${q(n.keys, ", ")}`;
      case "invalid_key":
        return `Nieprawidłowy klucz w ${n.origin}`;
      case "invalid_union":
        return "Nieprawidłowe dane wejściowe";
      case "invalid_element":
        return `Nieprawidłowa wartość w ${n.origin}`;
      default:
        return "Nieprawidłowe dane wejściowe";
    }
  };
};
function FS() {
  return {
    localeError: VS()
  };
}
const MS = () => {
  const e = {
    string: { unit: "caracteres", verb: "ter" },
    file: { unit: "bytes", verb: "ter" },
    array: { unit: "itens", verb: "ter" },
    set: { unit: "itens", verb: "ter" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const o = typeof n;
    switch (o) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "número";
      case "object": {
        if (Array.isArray(n))
          return "array";
        if (n === null)
          return "nulo";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return o;
  }, a = {
    regex: "padrão",
    email: "endereço de e-mail",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data e hora ISO",
    date: "data ISO",
    time: "hora ISO",
    duration: "duração ISO",
    ipv4: "endereço IPv4",
    ipv6: "endereço IPv6",
    cidrv4: "faixa de IPv4",
    cidrv6: "faixa de IPv6",
    base64: "texto codificado em base64",
    base64url: "URL codificada em base64",
    json_string: "texto JSON",
    e164: "número E.164",
    jwt: "JWT",
    template_literal: "entrada"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Tipo inválido: esperado ${n.expected}, recebido ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Entrada inválida: esperado ${$e(n.values[0])}` : `Opção inválida: esperada uma das ${q(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", i = t(n.origin);
        return i ? `Muito grande: esperado que ${n.origin ?? "valor"} tivesse ${o}${n.maximum.toString()} ${i.unit ?? "elementos"}` : `Muito grande: esperado que ${n.origin ?? "valor"} fosse ${o}${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", i = t(n.origin);
        return i ? `Muito pequeno: esperado que ${n.origin} tivesse ${o}${n.minimum.toString()} ${i.unit}` : `Muito pequeno: esperado que ${n.origin} fosse ${o}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `Texto inválido: deve começar com "${o.prefix}"` : o.format === "ends_with" ? `Texto inválido: deve terminar com "${o.suffix}"` : o.format === "includes" ? `Texto inválido: deve incluir "${o.includes}"` : o.format === "regex" ? `Texto inválido: deve corresponder ao padrão ${o.pattern}` : `${a[o.format] ?? n.format} inválido`;
      }
      case "not_multiple_of":
        return `Número inválido: deve ser múltiplo de ${n.divisor}`;
      case "unrecognized_keys":
        return `Chave${n.keys.length > 1 ? "s" : ""} desconhecida${n.keys.length > 1 ? "s" : ""}: ${q(n.keys, ", ")}`;
      case "invalid_key":
        return `Chave inválida em ${n.origin}`;
      case "invalid_union":
        return "Entrada inválida";
      case "invalid_element":
        return `Valor inválido em ${n.origin}`;
      default:
        return "Campo inválido";
    }
  };
};
function BS() {
  return {
    localeError: MS()
  };
}
function rc(e, t, r, a) {
  const n = Math.abs(e), o = n % 10, i = n % 100;
  return i >= 11 && i <= 19 ? a : o === 1 ? t : o >= 2 && o <= 4 ? r : a;
}
const ZS = () => {
  const e = {
    string: {
      unit: {
        one: "символ",
        few: "символа",
        many: "символов"
      },
      verb: "иметь"
    },
    file: {
      unit: {
        one: "байт",
        few: "байта",
        many: "байт"
      },
      verb: "иметь"
    },
    array: {
      unit: {
        one: "элемент",
        few: "элемента",
        many: "элементов"
      },
      verb: "иметь"
    },
    set: {
      unit: {
        one: "элемент",
        few: "элемента",
        many: "элементов"
      },
      verb: "иметь"
    }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const o = typeof n;
    switch (o) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "число";
      case "object": {
        if (Array.isArray(n))
          return "массив";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return o;
  }, a = {
    regex: "ввод",
    email: "email адрес",
    url: "URL",
    emoji: "эмодзи",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO дата и время",
    date: "ISO дата",
    time: "ISO время",
    duration: "ISO длительность",
    ipv4: "IPv4 адрес",
    ipv6: "IPv6 адрес",
    cidrv4: "IPv4 диапазон",
    cidrv6: "IPv6 диапазон",
    base64: "строка в формате base64",
    base64url: "строка в формате base64url",
    json_string: "JSON строка",
    e164: "номер E.164",
    jwt: "JWT",
    template_literal: "ввод"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Неверный ввод: ожидалось ${n.expected}, получено ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Неверный ввод: ожидалось ${$e(n.values[0])}` : `Неверный вариант: ожидалось одно из ${q(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", i = t(n.origin);
        if (i) {
          const l = Number(n.maximum), u = rc(l, i.unit.one, i.unit.few, i.unit.many);
          return `Слишком большое значение: ожидалось, что ${n.origin ?? "значение"} будет иметь ${o}${n.maximum.toString()} ${u}`;
        }
        return `Слишком большое значение: ожидалось, что ${n.origin ?? "значение"} будет ${o}${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", i = t(n.origin);
        if (i) {
          const l = Number(n.minimum), u = rc(l, i.unit.one, i.unit.few, i.unit.many);
          return `Слишком маленькое значение: ожидалось, что ${n.origin} будет иметь ${o}${n.minimum.toString()} ${u}`;
        }
        return `Слишком маленькое значение: ожидалось, что ${n.origin} будет ${o}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `Неверная строка: должна начинаться с "${o.prefix}"` : o.format === "ends_with" ? `Неверная строка: должна заканчиваться на "${o.suffix}"` : o.format === "includes" ? `Неверная строка: должна содержать "${o.includes}"` : o.format === "regex" ? `Неверная строка: должна соответствовать шаблону ${o.pattern}` : `Неверный ${a[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Неверное число: должно быть кратным ${n.divisor}`;
      case "unrecognized_keys":
        return `Нераспознанн${n.keys.length > 1 ? "ые" : "ый"} ключ${n.keys.length > 1 ? "и" : ""}: ${q(n.keys, ", ")}`;
      case "invalid_key":
        return `Неверный ключ в ${n.origin}`;
      case "invalid_union":
        return "Неверные входные данные";
      case "invalid_element":
        return `Неверное значение в ${n.origin}`;
      default:
        return "Неверные входные данные";
    }
  };
};
function WS() {
  return {
    localeError: ZS()
  };
}
const GS = () => {
  const e = {
    string: { unit: "znakov", verb: "imeti" },
    file: { unit: "bajtov", verb: "imeti" },
    array: { unit: "elementov", verb: "imeti" },
    set: { unit: "elementov", verb: "imeti" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const o = typeof n;
    switch (o) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "število";
      case "object": {
        if (Array.isArray(n))
          return "tabela";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return o;
  }, a = {
    regex: "vnos",
    email: "e-poštni naslov",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datum in čas",
    date: "ISO datum",
    time: "ISO čas",
    duration: "ISO trajanje",
    ipv4: "IPv4 naslov",
    ipv6: "IPv6 naslov",
    cidrv4: "obseg IPv4",
    cidrv6: "obseg IPv6",
    base64: "base64 kodiran niz",
    base64url: "base64url kodiran niz",
    json_string: "JSON niz",
    e164: "E.164 številka",
    jwt: "JWT",
    template_literal: "vnos"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Neveljaven vnos: pričakovano ${n.expected}, prejeto ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Neveljaven vnos: pričakovano ${$e(n.values[0])}` : `Neveljavna možnost: pričakovano eno izmed ${q(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", i = t(n.origin);
        return i ? `Preveliko: pričakovano, da bo ${n.origin ?? "vrednost"} imelo ${o}${n.maximum.toString()} ${i.unit ?? "elementov"}` : `Preveliko: pričakovano, da bo ${n.origin ?? "vrednost"} ${o}${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", i = t(n.origin);
        return i ? `Premajhno: pričakovano, da bo ${n.origin} imelo ${o}${n.minimum.toString()} ${i.unit}` : `Premajhno: pričakovano, da bo ${n.origin} ${o}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `Neveljaven niz: mora se začeti z "${o.prefix}"` : o.format === "ends_with" ? `Neveljaven niz: mora se končati z "${o.suffix}"` : o.format === "includes" ? `Neveljaven niz: mora vsebovati "${o.includes}"` : o.format === "regex" ? `Neveljaven niz: mora ustrezati vzorcu ${o.pattern}` : `Neveljaven ${a[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Neveljavno število: mora biti večkratnik ${n.divisor}`;
      case "unrecognized_keys":
        return `Neprepoznan${n.keys.length > 1 ? "i ključi" : " ključ"}: ${q(n.keys, ", ")}`;
      case "invalid_key":
        return `Neveljaven ključ v ${n.origin}`;
      case "invalid_union":
        return "Neveljaven vnos";
      case "invalid_element":
        return `Neveljavna vrednost v ${n.origin}`;
      default:
        return "Neveljaven vnos";
    }
  };
};
function HS() {
  return {
    localeError: GS()
  };
}
const KS = () => {
  const e = {
    string: { unit: "tecken", verb: "att ha" },
    file: { unit: "bytes", verb: "att ha" },
    array: { unit: "objekt", verb: "att innehålla" },
    set: { unit: "objekt", verb: "att innehålla" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const o = typeof n;
    switch (o) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "antal";
      case "object": {
        if (Array.isArray(n))
          return "lista";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return o;
  }, a = {
    regex: "reguljärt uttryck",
    email: "e-postadress",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-datum och tid",
    date: "ISO-datum",
    time: "ISO-tid",
    duration: "ISO-varaktighet",
    ipv4: "IPv4-intervall",
    ipv6: "IPv6-intervall",
    cidrv4: "IPv4-spektrum",
    cidrv6: "IPv6-spektrum",
    base64: "base64-kodad sträng",
    base64url: "base64url-kodad sträng",
    json_string: "JSON-sträng",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "mall-literal"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Ogiltig inmatning: förväntat ${n.expected}, fick ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Ogiltig inmatning: förväntat ${$e(n.values[0])}` : `Ogiltigt val: förväntade en av ${q(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", i = t(n.origin);
        return i ? `För stor(t): förväntade ${n.origin ?? "värdet"} att ha ${o}${n.maximum.toString()} ${i.unit ?? "element"}` : `För stor(t): förväntat ${n.origin ?? "värdet"} att ha ${o}${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", i = t(n.origin);
        return i ? `För lite(t): förväntade ${n.origin ?? "värdet"} att ha ${o}${n.minimum.toString()} ${i.unit}` : `För lite(t): förväntade ${n.origin ?? "värdet"} att ha ${o}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `Ogiltig sträng: måste börja med "${o.prefix}"` : o.format === "ends_with" ? `Ogiltig sträng: måste sluta med "${o.suffix}"` : o.format === "includes" ? `Ogiltig sträng: måste innehålla "${o.includes}"` : o.format === "regex" ? `Ogiltig sträng: måste matcha mönstret "${o.pattern}"` : `Ogiltig(t) ${a[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Ogiltigt tal: måste vara en multipel av ${n.divisor}`;
      case "unrecognized_keys":
        return `${n.keys.length > 1 ? "Okända nycklar" : "Okänd nyckel"}: ${q(n.keys, ", ")}`;
      case "invalid_key":
        return `Ogiltig nyckel i ${n.origin ?? "värdet"}`;
      case "invalid_union":
        return "Ogiltig input";
      case "invalid_element":
        return `Ogiltigt värde i ${n.origin ?? "värdet"}`;
      default:
        return "Ogiltig input";
    }
  };
};
function JS() {
  return {
    localeError: KS()
  };
}
const YS = () => {
  const e = {
    string: { unit: "எழுத்துக்கள்", verb: "கொண்டிருக்க வேண்டும்" },
    file: { unit: "பைட்டுகள்", verb: "கொண்டிருக்க வேண்டும்" },
    array: { unit: "உறுப்புகள்", verb: "கொண்டிருக்க வேண்டும்" },
    set: { unit: "உறுப்புகள்", verb: "கொண்டிருக்க வேண்டும்" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const o = typeof n;
    switch (o) {
      case "number":
        return Number.isNaN(n) ? "எண் அல்லாதது" : "எண்";
      case "object": {
        if (Array.isArray(n))
          return "அணி";
        if (n === null)
          return "வெறுமை";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return o;
  }, a = {
    regex: "உள்ளீடு",
    email: "மின்னஞ்சல் முகவரி",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO தேதி நேரம்",
    date: "ISO தேதி",
    time: "ISO நேரம்",
    duration: "ISO கால அளவு",
    ipv4: "IPv4 முகவரி",
    ipv6: "IPv6 முகவரி",
    cidrv4: "IPv4 வரம்பு",
    cidrv6: "IPv6 வரம்பு",
    base64: "base64-encoded சரம்",
    base64url: "base64url-encoded சரம்",
    json_string: "JSON சரம்",
    e164: "E.164 எண்",
    jwt: "JWT",
    template_literal: "input"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${n.expected}, பெறப்பட்டது ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${$e(n.values[0])}` : `தவறான விருப்பம்: எதிர்பார்க்கப்பட்டது ${q(n.values, "|")} இல் ஒன்று`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", i = t(n.origin);
        return i ? `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${n.origin ?? "மதிப்பு"} ${o}${n.maximum.toString()} ${i.unit ?? "உறுப்புகள்"} ஆக இருக்க வேண்டும்` : `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${n.origin ?? "மதிப்பு"} ${o}${n.maximum.toString()} ஆக இருக்க வேண்டும்`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", i = t(n.origin);
        return i ? `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${n.origin} ${o}${n.minimum.toString()} ${i.unit} ஆக இருக்க வேண்டும்` : `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${n.origin} ${o}${n.minimum.toString()} ஆக இருக்க வேண்டும்`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `தவறான சரம்: "${o.prefix}" இல் தொடங்க வேண்டும்` : o.format === "ends_with" ? `தவறான சரம்: "${o.suffix}" இல் முடிவடைய வேண்டும்` : o.format === "includes" ? `தவறான சரம்: "${o.includes}" ஐ உள்ளடக்க வேண்டும்` : o.format === "regex" ? `தவறான சரம்: ${o.pattern} முறைபாட்டுடன் பொருந்த வேண்டும்` : `தவறான ${a[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `தவறான எண்: ${n.divisor} இன் பலமாக இருக்க வேண்டும்`;
      case "unrecognized_keys":
        return `அடையாளம் தெரியாத விசை${n.keys.length > 1 ? "கள்" : ""}: ${q(n.keys, ", ")}`;
      case "invalid_key":
        return `${n.origin} இல் தவறான விசை`;
      case "invalid_union":
        return "தவறான உள்ளீடு";
      case "invalid_element":
        return `${n.origin} இல் தவறான மதிப்பு`;
      default:
        return "தவறான உள்ளீடு";
    }
  };
};
function qS() {
  return {
    localeError: YS()
  };
}
const XS = () => {
  const e = {
    string: { unit: "ตัวอักษร", verb: "ควรมี" },
    file: { unit: "ไบต์", verb: "ควรมี" },
    array: { unit: "รายการ", verb: "ควรมี" },
    set: { unit: "รายการ", verb: "ควรมี" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const o = typeof n;
    switch (o) {
      case "number":
        return Number.isNaN(n) ? "ไม่ใช่ตัวเลข (NaN)" : "ตัวเลข";
      case "object": {
        if (Array.isArray(n))
          return "อาร์เรย์ (Array)";
        if (n === null)
          return "ไม่มีค่า (null)";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return o;
  }, a = {
    regex: "ข้อมูลที่ป้อน",
    email: "ที่อยู่อีเมล",
    url: "URL",
    emoji: "อิโมจิ",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "วันที่เวลาแบบ ISO",
    date: "วันที่แบบ ISO",
    time: "เวลาแบบ ISO",
    duration: "ช่วงเวลาแบบ ISO",
    ipv4: "ที่อยู่ IPv4",
    ipv6: "ที่อยู่ IPv6",
    cidrv4: "ช่วง IP แบบ IPv4",
    cidrv6: "ช่วง IP แบบ IPv6",
    base64: "ข้อความแบบ Base64",
    base64url: "ข้อความแบบ Base64 สำหรับ URL",
    json_string: "ข้อความแบบ JSON",
    e164: "เบอร์โทรศัพท์ระหว่างประเทศ (E.164)",
    jwt: "โทเคน JWT",
    template_literal: "ข้อมูลที่ป้อน"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น ${n.expected} แต่ได้รับ ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `ค่าไม่ถูกต้อง: ควรเป็น ${$e(n.values[0])}` : `ตัวเลือกไม่ถูกต้อง: ควรเป็นหนึ่งใน ${q(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "ไม่เกิน" : "น้อยกว่า", i = t(n.origin);
        return i ? `เกินกำหนด: ${n.origin ?? "ค่า"} ควรมี${o} ${n.maximum.toString()} ${i.unit ?? "รายการ"}` : `เกินกำหนด: ${n.origin ?? "ค่า"} ควรมี${o} ${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? "อย่างน้อย" : "มากกว่า", i = t(n.origin);
        return i ? `น้อยกว่ากำหนด: ${n.origin} ควรมี${o} ${n.minimum.toString()} ${i.unit}` : `น้อยกว่ากำหนด: ${n.origin} ควรมี${o} ${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `รูปแบบไม่ถูกต้อง: ข้อความต้องขึ้นต้นด้วย "${o.prefix}"` : o.format === "ends_with" ? `รูปแบบไม่ถูกต้อง: ข้อความต้องลงท้ายด้วย "${o.suffix}"` : o.format === "includes" ? `รูปแบบไม่ถูกต้อง: ข้อความต้องมี "${o.includes}" อยู่ในข้อความ` : o.format === "regex" ? `รูปแบบไม่ถูกต้อง: ต้องตรงกับรูปแบบที่กำหนด ${o.pattern}` : `รูปแบบไม่ถูกต้อง: ${a[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `ตัวเลขไม่ถูกต้อง: ต้องเป็นจำนวนที่หารด้วย ${n.divisor} ได้ลงตัว`;
      case "unrecognized_keys":
        return `พบคีย์ที่ไม่รู้จัก: ${q(n.keys, ", ")}`;
      case "invalid_key":
        return `คีย์ไม่ถูกต้องใน ${n.origin}`;
      case "invalid_union":
        return "ข้อมูลไม่ถูกต้อง: ไม่ตรงกับรูปแบบยูเนียนที่กำหนดไว้";
      case "invalid_element":
        return `ข้อมูลไม่ถูกต้องใน ${n.origin}`;
      default:
        return "ข้อมูลไม่ถูกต้อง";
    }
  };
};
function QS() {
  return {
    localeError: XS()
  };
}
const eI = (e) => {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : "number";
    case "object": {
      if (Array.isArray(e))
        return "array";
      if (e === null)
        return "null";
      if (Object.getPrototypeOf(e) !== Object.prototype && e.constructor)
        return e.constructor.name;
    }
  }
  return t;
}, tI = () => {
  const e = {
    string: { unit: "karakter", verb: "olmalı" },
    file: { unit: "bayt", verb: "olmalı" },
    array: { unit: "öğe", verb: "olmalı" },
    set: { unit: "öğe", verb: "olmalı" }
  };
  function t(a) {
    return e[a] ?? null;
  }
  const r = {
    regex: "girdi",
    email: "e-posta adresi",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO tarih ve saat",
    date: "ISO tarih",
    time: "ISO saat",
    duration: "ISO süre",
    ipv4: "IPv4 adresi",
    ipv6: "IPv6 adresi",
    cidrv4: "IPv4 aralığı",
    cidrv6: "IPv6 aralığı",
    base64: "base64 ile şifrelenmiş metin",
    base64url: "base64url ile şifrelenmiş metin",
    json_string: "JSON dizesi",
    e164: "E.164 sayısı",
    jwt: "JWT",
    template_literal: "Şablon dizesi"
  };
  return (a) => {
    switch (a.code) {
      case "invalid_type":
        return `Geçersiz değer: beklenen ${a.expected}, alınan ${eI(a.input)}`;
      case "invalid_value":
        return a.values.length === 1 ? `Geçersiz değer: beklenen ${$e(a.values[0])}` : `Geçersiz seçenek: aşağıdakilerden biri olmalı: ${q(a.values, "|")}`;
      case "too_big": {
        const n = a.inclusive ? "<=" : "<", o = t(a.origin);
        return o ? `Çok büyük: beklenen ${a.origin ?? "değer"} ${n}${a.maximum.toString()} ${o.unit ?? "öğe"}` : `Çok büyük: beklenen ${a.origin ?? "değer"} ${n}${a.maximum.toString()}`;
      }
      case "too_small": {
        const n = a.inclusive ? ">=" : ">", o = t(a.origin);
        return o ? `Çok küçük: beklenen ${a.origin} ${n}${a.minimum.toString()} ${o.unit}` : `Çok küçük: beklenen ${a.origin} ${n}${a.minimum.toString()}`;
      }
      case "invalid_format": {
        const n = a;
        return n.format === "starts_with" ? `Geçersiz metin: "${n.prefix}" ile başlamalı` : n.format === "ends_with" ? `Geçersiz metin: "${n.suffix}" ile bitmeli` : n.format === "includes" ? `Geçersiz metin: "${n.includes}" içermeli` : n.format === "regex" ? `Geçersiz metin: ${n.pattern} desenine uymalı` : `Geçersiz ${r[n.format] ?? a.format}`;
      }
      case "not_multiple_of":
        return `Geçersiz sayı: ${a.divisor} ile tam bölünebilmeli`;
      case "unrecognized_keys":
        return `Tanınmayan anahtar${a.keys.length > 1 ? "lar" : ""}: ${q(a.keys, ", ")}`;
      case "invalid_key":
        return `${a.origin} içinde geçersiz anahtar`;
      case "invalid_union":
        return "Geçersiz değer";
      case "invalid_element":
        return `${a.origin} içinde geçersiz değer`;
      default:
        return "Geçersiz değer";
    }
  };
};
function nI() {
  return {
    localeError: tI()
  };
}
const rI = () => {
  const e = {
    string: { unit: "символів", verb: "матиме" },
    file: { unit: "байтів", verb: "матиме" },
    array: { unit: "елементів", verb: "матиме" },
    set: { unit: "елементів", verb: "матиме" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const o = typeof n;
    switch (o) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "число";
      case "object": {
        if (Array.isArray(n))
          return "масив";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return o;
  }, a = {
    regex: "вхідні дані",
    email: "адреса електронної пошти",
    url: "URL",
    emoji: "емодзі",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "дата та час ISO",
    date: "дата ISO",
    time: "час ISO",
    duration: "тривалість ISO",
    ipv4: "адреса IPv4",
    ipv6: "адреса IPv6",
    cidrv4: "діапазон IPv4",
    cidrv6: "діапазон IPv6",
    base64: "рядок у кодуванні base64",
    base64url: "рядок у кодуванні base64url",
    json_string: "рядок JSON",
    e164: "номер E.164",
    jwt: "JWT",
    template_literal: "вхідні дані"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Неправильні вхідні дані: очікується ${n.expected}, отримано ${r(n.input)}`;
      // return `Неправильні вхідні дані: очікується ${issue.expected}, отримано ${util.getParsedType(issue.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Неправильні вхідні дані: очікується ${$e(n.values[0])}` : `Неправильна опція: очікується одне з ${q(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", i = t(n.origin);
        return i ? `Занадто велике: очікується, що ${n.origin ?? "значення"} ${i.verb} ${o}${n.maximum.toString()} ${i.unit ?? "елементів"}` : `Занадто велике: очікується, що ${n.origin ?? "значення"} буде ${o}${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", i = t(n.origin);
        return i ? `Занадто мале: очікується, що ${n.origin} ${i.verb} ${o}${n.minimum.toString()} ${i.unit}` : `Занадто мале: очікується, що ${n.origin} буде ${o}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `Неправильний рядок: повинен починатися з "${o.prefix}"` : o.format === "ends_with" ? `Неправильний рядок: повинен закінчуватися на "${o.suffix}"` : o.format === "includes" ? `Неправильний рядок: повинен містити "${o.includes}"` : o.format === "regex" ? `Неправильний рядок: повинен відповідати шаблону ${o.pattern}` : `Неправильний ${a[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Неправильне число: повинно бути кратним ${n.divisor}`;
      case "unrecognized_keys":
        return `Нерозпізнаний ключ${n.keys.length > 1 ? "і" : ""}: ${q(n.keys, ", ")}`;
      case "invalid_key":
        return `Неправильний ключ у ${n.origin}`;
      case "invalid_union":
        return "Неправильні вхідні дані";
      case "invalid_element":
        return `Неправильне значення у ${n.origin}`;
      default:
        return "Неправильні вхідні дані";
    }
  };
};
function Rp() {
  return {
    localeError: rI()
  };
}
function aI() {
  return Rp();
}
const oI = () => {
  const e = {
    string: { unit: "حروف", verb: "ہونا" },
    file: { unit: "بائٹس", verb: "ہونا" },
    array: { unit: "آئٹمز", verb: "ہونا" },
    set: { unit: "آئٹمز", verb: "ہونا" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const o = typeof n;
    switch (o) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "نمبر";
      case "object": {
        if (Array.isArray(n))
          return "آرے";
        if (n === null)
          return "نل";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return o;
  }, a = {
    regex: "ان پٹ",
    email: "ای میل ایڈریس",
    url: "یو آر ایل",
    emoji: "ایموجی",
    uuid: "یو یو آئی ڈی",
    uuidv4: "یو یو آئی ڈی وی 4",
    uuidv6: "یو یو آئی ڈی وی 6",
    nanoid: "نینو آئی ڈی",
    guid: "جی یو آئی ڈی",
    cuid: "سی یو آئی ڈی",
    cuid2: "سی یو آئی ڈی 2",
    ulid: "یو ایل آئی ڈی",
    xid: "ایکس آئی ڈی",
    ksuid: "کے ایس یو آئی ڈی",
    datetime: "آئی ایس او ڈیٹ ٹائم",
    date: "آئی ایس او تاریخ",
    time: "آئی ایس او وقت",
    duration: "آئی ایس او مدت",
    ipv4: "آئی پی وی 4 ایڈریس",
    ipv6: "آئی پی وی 6 ایڈریس",
    cidrv4: "آئی پی وی 4 رینج",
    cidrv6: "آئی پی وی 6 رینج",
    base64: "بیس 64 ان کوڈڈ سٹرنگ",
    base64url: "بیس 64 یو آر ایل ان کوڈڈ سٹرنگ",
    json_string: "جے ایس او این سٹرنگ",
    e164: "ای 164 نمبر",
    jwt: "جے ڈبلیو ٹی",
    template_literal: "ان پٹ"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `غلط ان پٹ: ${n.expected} متوقع تھا، ${r(n.input)} موصول ہوا`;
      case "invalid_value":
        return n.values.length === 1 ? `غلط ان پٹ: ${$e(n.values[0])} متوقع تھا` : `غلط آپشن: ${q(n.values, "|")} میں سے ایک متوقع تھا`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", i = t(n.origin);
        return i ? `بہت بڑا: ${n.origin ?? "ویلیو"} کے ${o}${n.maximum.toString()} ${i.unit ?? "عناصر"} ہونے متوقع تھے` : `بہت بڑا: ${n.origin ?? "ویلیو"} کا ${o}${n.maximum.toString()} ہونا متوقع تھا`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", i = t(n.origin);
        return i ? `بہت چھوٹا: ${n.origin} کے ${o}${n.minimum.toString()} ${i.unit} ہونے متوقع تھے` : `بہت چھوٹا: ${n.origin} کا ${o}${n.minimum.toString()} ہونا متوقع تھا`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `غلط سٹرنگ: "${o.prefix}" سے شروع ہونا چاہیے` : o.format === "ends_with" ? `غلط سٹرنگ: "${o.suffix}" پر ختم ہونا چاہیے` : o.format === "includes" ? `غلط سٹرنگ: "${o.includes}" شامل ہونا چاہیے` : o.format === "regex" ? `غلط سٹرنگ: پیٹرن ${o.pattern} سے میچ ہونا چاہیے` : `غلط ${a[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `غلط نمبر: ${n.divisor} کا مضاعف ہونا چاہیے`;
      case "unrecognized_keys":
        return `غیر تسلیم شدہ کی${n.keys.length > 1 ? "ز" : ""}: ${q(n.keys, "، ")}`;
      case "invalid_key":
        return `${n.origin} میں غلط کی`;
      case "invalid_union":
        return "غلط ان پٹ";
      case "invalid_element":
        return `${n.origin} میں غلط ویلیو`;
      default:
        return "غلط ان پٹ";
    }
  };
};
function iI() {
  return {
    localeError: oI()
  };
}
const lI = () => {
  const e = {
    string: { unit: "ký tự", verb: "có" },
    file: { unit: "byte", verb: "có" },
    array: { unit: "phần tử", verb: "có" },
    set: { unit: "phần tử", verb: "có" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const o = typeof n;
    switch (o) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "số";
      case "object": {
        if (Array.isArray(n))
          return "mảng";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return o;
  }, a = {
    regex: "đầu vào",
    email: "địa chỉ email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ngày giờ ISO",
    date: "ngày ISO",
    time: "giờ ISO",
    duration: "khoảng thời gian ISO",
    ipv4: "địa chỉ IPv4",
    ipv6: "địa chỉ IPv6",
    cidrv4: "dải IPv4",
    cidrv6: "dải IPv6",
    base64: "chuỗi mã hóa base64",
    base64url: "chuỗi mã hóa base64url",
    json_string: "chuỗi JSON",
    e164: "số E.164",
    jwt: "JWT",
    template_literal: "đầu vào"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Đầu vào không hợp lệ: mong đợi ${n.expected}, nhận được ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Đầu vào không hợp lệ: mong đợi ${$e(n.values[0])}` : `Tùy chọn không hợp lệ: mong đợi một trong các giá trị ${q(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", i = t(n.origin);
        return i ? `Quá lớn: mong đợi ${n.origin ?? "giá trị"} ${i.verb} ${o}${n.maximum.toString()} ${i.unit ?? "phần tử"}` : `Quá lớn: mong đợi ${n.origin ?? "giá trị"} ${o}${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", i = t(n.origin);
        return i ? `Quá nhỏ: mong đợi ${n.origin} ${i.verb} ${o}${n.minimum.toString()} ${i.unit}` : `Quá nhỏ: mong đợi ${n.origin} ${o}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `Chuỗi không hợp lệ: phải bắt đầu bằng "${o.prefix}"` : o.format === "ends_with" ? `Chuỗi không hợp lệ: phải kết thúc bằng "${o.suffix}"` : o.format === "includes" ? `Chuỗi không hợp lệ: phải bao gồm "${o.includes}"` : o.format === "regex" ? `Chuỗi không hợp lệ: phải khớp với mẫu ${o.pattern}` : `${a[o.format] ?? n.format} không hợp lệ`;
      }
      case "not_multiple_of":
        return `Số không hợp lệ: phải là bội số của ${n.divisor}`;
      case "unrecognized_keys":
        return `Khóa không được nhận dạng: ${q(n.keys, ", ")}`;
      case "invalid_key":
        return `Khóa không hợp lệ trong ${n.origin}`;
      case "invalid_union":
        return "Đầu vào không hợp lệ";
      case "invalid_element":
        return `Giá trị không hợp lệ trong ${n.origin}`;
      default:
        return "Đầu vào không hợp lệ";
    }
  };
};
function sI() {
  return {
    localeError: lI()
  };
}
const uI = () => {
  const e = {
    string: { unit: "字符", verb: "包含" },
    file: { unit: "字节", verb: "包含" },
    array: { unit: "项", verb: "包含" },
    set: { unit: "项", verb: "包含" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const o = typeof n;
    switch (o) {
      case "number":
        return Number.isNaN(n) ? "非数字(NaN)" : "数字";
      case "object": {
        if (Array.isArray(n))
          return "数组";
        if (n === null)
          return "空值(null)";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return o;
  }, a = {
    regex: "输入",
    email: "电子邮件",
    url: "URL",
    emoji: "表情符号",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO日期时间",
    date: "ISO日期",
    time: "ISO时间",
    duration: "ISO时长",
    ipv4: "IPv4地址",
    ipv6: "IPv6地址",
    cidrv4: "IPv4网段",
    cidrv6: "IPv6网段",
    base64: "base64编码字符串",
    base64url: "base64url编码字符串",
    json_string: "JSON字符串",
    e164: "E.164号码",
    jwt: "JWT",
    template_literal: "输入"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `无效输入：期望 ${n.expected}，实际接收 ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `无效输入：期望 ${$e(n.values[0])}` : `无效选项：期望以下之一 ${q(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", i = t(n.origin);
        return i ? `数值过大：期望 ${n.origin ?? "值"} ${o}${n.maximum.toString()} ${i.unit ?? "个元素"}` : `数值过大：期望 ${n.origin ?? "值"} ${o}${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", i = t(n.origin);
        return i ? `数值过小：期望 ${n.origin} ${o}${n.minimum.toString()} ${i.unit}` : `数值过小：期望 ${n.origin} ${o}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `无效字符串：必须以 "${o.prefix}" 开头` : o.format === "ends_with" ? `无效字符串：必须以 "${o.suffix}" 结尾` : o.format === "includes" ? `无效字符串：必须包含 "${o.includes}"` : o.format === "regex" ? `无效字符串：必须满足正则表达式 ${o.pattern}` : `无效${a[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `无效数字：必须是 ${n.divisor} 的倍数`;
      case "unrecognized_keys":
        return `出现未知的键(key): ${q(n.keys, ", ")}`;
      case "invalid_key":
        return `${n.origin} 中的键(key)无效`;
      case "invalid_union":
        return "无效输入";
      case "invalid_element":
        return `${n.origin} 中包含无效值(value)`;
      default:
        return "无效输入";
    }
  };
};
function cI() {
  return {
    localeError: uI()
  };
}
const dI = () => {
  const e = {
    string: { unit: "字元", verb: "擁有" },
    file: { unit: "位元組", verb: "擁有" },
    array: { unit: "項目", verb: "擁有" },
    set: { unit: "項目", verb: "擁有" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const o = typeof n;
    switch (o) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "number";
      case "object": {
        if (Array.isArray(n))
          return "array";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return o;
  }, a = {
    regex: "輸入",
    email: "郵件地址",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO 日期時間",
    date: "ISO 日期",
    time: "ISO 時間",
    duration: "ISO 期間",
    ipv4: "IPv4 位址",
    ipv6: "IPv6 位址",
    cidrv4: "IPv4 範圍",
    cidrv6: "IPv6 範圍",
    base64: "base64 編碼字串",
    base64url: "base64url 編碼字串",
    json_string: "JSON 字串",
    e164: "E.164 數值",
    jwt: "JWT",
    template_literal: "輸入"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `無效的輸入值：預期為 ${n.expected}，但收到 ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `無效的輸入值：預期為 ${$e(n.values[0])}` : `無效的選項：預期為以下其中之一 ${q(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", i = t(n.origin);
        return i ? `數值過大：預期 ${n.origin ?? "值"} 應為 ${o}${n.maximum.toString()} ${i.unit ?? "個元素"}` : `數值過大：預期 ${n.origin ?? "值"} 應為 ${o}${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", i = t(n.origin);
        return i ? `數值過小：預期 ${n.origin} 應為 ${o}${n.minimum.toString()} ${i.unit}` : `數值過小：預期 ${n.origin} 應為 ${o}${n.minimum.toString()}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `無效的字串：必須以 "${o.prefix}" 開頭` : o.format === "ends_with" ? `無效的字串：必須以 "${o.suffix}" 結尾` : o.format === "includes" ? `無效的字串：必須包含 "${o.includes}"` : o.format === "regex" ? `無效的字串：必須符合格式 ${o.pattern}` : `無效的 ${a[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `無效的數字：必須為 ${n.divisor} 的倍數`;
      case "unrecognized_keys":
        return `無法識別的鍵值${n.keys.length > 1 ? "們" : ""}：${q(n.keys, "、")}`;
      case "invalid_key":
        return `${n.origin} 中有無效的鍵值`;
      case "invalid_union":
        return "無效的輸入值";
      case "invalid_element":
        return `${n.origin} 中有無效的值`;
      default:
        return "無效的輸入值";
    }
  };
};
function fI() {
  return {
    localeError: dI()
  };
}
const mI = () => {
  const e = {
    string: { unit: "àmi", verb: "ní" },
    file: { unit: "bytes", verb: "ní" },
    array: { unit: "nkan", verb: "ní" },
    set: { unit: "nkan", verb: "ní" }
  };
  function t(n) {
    return e[n] ?? null;
  }
  const r = (n) => {
    const o = typeof n;
    switch (o) {
      case "number":
        return Number.isNaN(n) ? "NaN" : "nọ́mbà";
      case "object": {
        if (Array.isArray(n))
          return "akopọ";
        if (n === null)
          return "null";
        if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor)
          return n.constructor.name;
      }
    }
    return o;
  }, a = {
    regex: "ẹ̀rọ ìbáwọlé",
    email: "àdírẹ́sì ìmẹ́lì",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "àkókò ISO",
    date: "ọjọ́ ISO",
    time: "àkókò ISO",
    duration: "àkókò tó pé ISO",
    ipv4: "àdírẹ́sì IPv4",
    ipv6: "àdírẹ́sì IPv6",
    cidrv4: "àgbègbè IPv4",
    cidrv6: "àgbègbè IPv6",
    base64: "ọ̀rọ̀ tí a kọ́ ní base64",
    base64url: "ọ̀rọ̀ base64url",
    json_string: "ọ̀rọ̀ JSON",
    e164: "nọ́mbà E.164",
    jwt: "JWT",
    template_literal: "ẹ̀rọ ìbáwọlé"
  };
  return (n) => {
    switch (n.code) {
      case "invalid_type":
        return `Ìbáwọlé aṣìṣe: a ní láti fi ${n.expected}, àmọ̀ a rí ${r(n.input)}`;
      case "invalid_value":
        return n.values.length === 1 ? `Ìbáwọlé aṣìṣe: a ní láti fi ${$e(n.values[0])}` : `Àṣàyàn aṣìṣe: yan ọ̀kan lára ${q(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", i = t(n.origin);
        return i ? `Tó pọ̀ jù: a ní láti jẹ́ pé ${n.origin ?? "iye"} ${i.verb} ${o}${n.maximum} ${i.unit}` : `Tó pọ̀ jù: a ní láti jẹ́ ${o}${n.maximum}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", i = t(n.origin);
        return i ? `Kéré ju: a ní láti jẹ́ pé ${n.origin} ${i.verb} ${o}${n.minimum} ${i.unit}` : `Kéré ju: a ní láti jẹ́ ${o}${n.minimum}`;
      }
      case "invalid_format": {
        const o = n;
        return o.format === "starts_with" ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bẹ̀rẹ̀ pẹ̀lú "${o.prefix}"` : o.format === "ends_with" ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ parí pẹ̀lú "${o.suffix}"` : o.format === "includes" ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ ní "${o.includes}"` : o.format === "regex" ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bá àpẹẹrẹ mu ${o.pattern}` : `Aṣìṣe: ${a[o.format] ?? n.format}`;
      }
      case "not_multiple_of":
        return `Nọ́mbà aṣìṣe: gbọ́dọ̀ jẹ́ èyà pípín ti ${n.divisor}`;
      case "unrecognized_keys":
        return `Bọtìnì àìmọ̀: ${q(n.keys, ", ")}`;
      case "invalid_key":
        return `Bọtìnì aṣìṣe nínú ${n.origin}`;
      case "invalid_union":
        return "Ìbáwọlé aṣìṣe";
      case "invalid_element":
        return `Iye aṣìṣe nínú ${n.origin}`;
      default:
        return "Ìbáwọlé aṣìṣe";
    }
  };
};
function pI() {
  return {
    localeError: mI()
  };
}
const Vp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ar: E1,
  az: z1,
  be: P1,
  bg: C1,
  ca: U1,
  cs: R1,
  da: F1,
  de: B1,
  en: Up,
  eo: K1,
  es: Y1,
  fa: X1,
  fi: eS,
  fr: nS,
  frCA: aS,
  he: iS,
  hu: sS,
  id: cS,
  is: mS,
  it: vS,
  ja: hS,
  ka: yS,
  kh: wS,
  km: Lp,
  ko: SS,
  lt: OS,
  mk: NS,
  ms: TS,
  nl: AS,
  no: CS,
  ota: US,
  pl: FS,
  ps: RS,
  pt: BS,
  ru: WS,
  sl: HS,
  sv: JS,
  ta: qS,
  th: QS,
  tr: nI,
  ua: aI,
  uk: Rp,
  ur: iI,
  vi: sI,
  yo: pI,
  zhCN: cI,
  zhTW: fI
}, Symbol.toStringTag, { value: "Module" }));
var ac;
const Fp = Symbol("ZodOutput"), Mp = Symbol("ZodInput");
class hl {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(t, ...r) {
    const a = r[0];
    if (this._map.set(t, a), a && typeof a == "object" && "id" in a) {
      if (this._idmap.has(a.id))
        throw new Error(`ID ${a.id} already exists in the registry`);
      this._idmap.set(a.id, t);
    }
    return this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(t) {
    const r = this._map.get(t);
    return r && typeof r == "object" && "id" in r && this._idmap.delete(r.id), this._map.delete(t), this;
  }
  get(t) {
    const r = t._zod.parent;
    if (r) {
      const a = { ...this.get(r) ?? {} };
      delete a.id;
      const n = { ...a, ...this._map.get(t) };
      return Object.keys(n).length ? n : void 0;
    }
    return this._map.get(t);
  }
  has(t) {
    return this._map.has(t);
  }
}
function bl() {
  return new hl();
}
(ac = globalThis).__zod_globalRegistry ?? (ac.__zod_globalRegistry = bl());
const Qt = globalThis.__zod_globalRegistry;
function Bp(e, t) {
  return new e({
    type: "string",
    ...B(t)
  });
}
function Zp(e, t) {
  return new e({
    type: "string",
    coerce: !0,
    ...B(t)
  });
}
function _l(e, t) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...B(t)
  });
}
function Ha(e, t) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...B(t)
  });
}
function yl(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...B(t)
  });
}
function $l(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...B(t)
  });
}
function wl(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...B(t)
  });
}
function kl(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...B(t)
  });
}
function go(e, t) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...B(t)
  });
}
function Sl(e, t) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...B(t)
  });
}
function Il(e, t) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...B(t)
  });
}
function xl(e, t) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...B(t)
  });
}
function Ol(e, t) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...B(t)
  });
}
function El(e, t) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...B(t)
  });
}
function Nl(e, t) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...B(t)
  });
}
function zl(e, t) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...B(t)
  });
}
function Tl(e, t) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...B(t)
  });
}
function Pl(e, t) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...B(t)
  });
}
function Wp(e, t) {
  return new e({
    type: "string",
    format: "mac",
    check: "string_format",
    abort: !1,
    ...B(t)
  });
}
function Al(e, t) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...B(t)
  });
}
function Dl(e, t) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...B(t)
  });
}
function Cl(e, t) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...B(t)
  });
}
function jl(e, t) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...B(t)
  });
}
function Ul(e, t) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...B(t)
  });
}
function Ll(e, t) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...B(t)
  });
}
const Gp = {
  Any: null,
  Minute: -1,
  Second: 0,
  Millisecond: 3,
  Microsecond: 6
};
function Hp(e, t) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...B(t)
  });
}
function Kp(e, t) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...B(t)
  });
}
function Jp(e, t) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...B(t)
  });
}
function Yp(e, t) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...B(t)
  });
}
function qp(e, t) {
  return new e({
    type: "number",
    checks: [],
    ...B(t)
  });
}
function Xp(e, t) {
  return new e({
    type: "number",
    coerce: !0,
    checks: [],
    ...B(t)
  });
}
function Qp(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...B(t)
  });
}
function ev(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "float32",
    ...B(t)
  });
}
function tv(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "float64",
    ...B(t)
  });
}
function nv(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "int32",
    ...B(t)
  });
}
function rv(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "uint32",
    ...B(t)
  });
}
function av(e, t) {
  return new e({
    type: "boolean",
    ...B(t)
  });
}
function ov(e, t) {
  return new e({
    type: "boolean",
    coerce: !0,
    ...B(t)
  });
}
function iv(e, t) {
  return new e({
    type: "bigint",
    ...B(t)
  });
}
function lv(e, t) {
  return new e({
    type: "bigint",
    coerce: !0,
    ...B(t)
  });
}
function sv(e, t) {
  return new e({
    type: "bigint",
    check: "bigint_format",
    abort: !1,
    format: "int64",
    ...B(t)
  });
}
function uv(e, t) {
  return new e({
    type: "bigint",
    check: "bigint_format",
    abort: !1,
    format: "uint64",
    ...B(t)
  });
}
function cv(e, t) {
  return new e({
    type: "symbol",
    ...B(t)
  });
}
function dv(e, t) {
  return new e({
    type: "undefined",
    ...B(t)
  });
}
function fv(e, t) {
  return new e({
    type: "null",
    ...B(t)
  });
}
function mv(e) {
  return new e({
    type: "any"
  });
}
function pv(e) {
  return new e({
    type: "unknown"
  });
}
function vv(e, t) {
  return new e({
    type: "never",
    ...B(t)
  });
}
function gv(e, t) {
  return new e({
    type: "void",
    ...B(t)
  });
}
function hv(e, t) {
  return new e({
    type: "date",
    ...B(t)
  });
}
function bv(e, t) {
  return new e({
    type: "date",
    coerce: !0,
    ...B(t)
  });
}
function _v(e, t) {
  return new e({
    type: "nan",
    ...B(t)
  });
}
function er(e, t) {
  return new sl({
    check: "less_than",
    ...B(t),
    value: e,
    inclusive: !1
  });
}
function nn(e, t) {
  return new sl({
    check: "less_than",
    ...B(t),
    value: e,
    inclusive: !0
  });
}
function tr(e, t) {
  return new ul({
    check: "greater_than",
    ...B(t),
    value: e,
    inclusive: !1
  });
}
function Ft(e, t) {
  return new ul({
    check: "greater_than",
    ...B(t),
    value: e,
    inclusive: !0
  });
}
function yv(e) {
  return tr(0, e);
}
function $v(e) {
  return er(0, e);
}
function wv(e) {
  return nn(0, e);
}
function kv(e) {
  return Ft(0, e);
}
function Hr(e, t) {
  return new om({
    check: "multiple_of",
    ...B(t),
    value: e
  });
}
function ho(e, t) {
  return new sm({
    check: "max_size",
    ...B(t),
    maximum: e
  });
}
function Kr(e, t) {
  return new um({
    check: "min_size",
    ...B(t),
    minimum: e
  });
}
function Rl(e, t) {
  return new cm({
    check: "size_equals",
    ...B(t),
    size: e
  });
}
function bo(e, t) {
  return new dm({
    check: "max_length",
    ...B(t),
    maximum: e
  });
}
function vr(e, t) {
  return new fm({
    check: "min_length",
    ...B(t),
    minimum: e
  });
}
function _o(e, t) {
  return new mm({
    check: "length_equals",
    ...B(t),
    length: e
  });
}
function Vl(e, t) {
  return new pm({
    check: "string_format",
    format: "regex",
    ...B(t),
    pattern: e
  });
}
function Fl(e) {
  return new vm({
    check: "string_format",
    format: "lowercase",
    ...B(e)
  });
}
function Ml(e) {
  return new gm({
    check: "string_format",
    format: "uppercase",
    ...B(e)
  });
}
function Bl(e, t) {
  return new hm({
    check: "string_format",
    format: "includes",
    ...B(t),
    includes: e
  });
}
function Zl(e, t) {
  return new bm({
    check: "string_format",
    format: "starts_with",
    ...B(t),
    prefix: e
  });
}
function Wl(e, t) {
  return new _m({
    check: "string_format",
    format: "ends_with",
    ...B(t),
    suffix: e
  });
}
function Sv(e, t, r) {
  return new ym({
    check: "property",
    property: e,
    schema: t,
    ...B(r)
  });
}
function Gl(e, t) {
  return new $m({
    check: "mime_type",
    mime: e,
    ...B(t)
  });
}
function Ln(e) {
  return new wm({
    check: "overwrite",
    tx: e
  });
}
function Hl(e) {
  return Ln((t) => t.normalize(e));
}
function Kl() {
  return Ln((e) => e.trim());
}
function Jl() {
  return Ln((e) => e.toLowerCase());
}
function Yl() {
  return Ln((e) => e.toUpperCase());
}
function ql() {
  return Ln((e) => ef(e));
}
function Iv(e, t, r) {
  return new e({
    type: "array",
    element: t,
    // get element() {
    //   return element;
    // },
    ...B(r)
  });
}
function vI(e, t, r) {
  return new e({
    type: "union",
    options: t,
    ...B(r)
  });
}
function gI(e, t, r, a) {
  return new e({
    type: "union",
    options: r,
    discriminator: t,
    ...B(a)
  });
}
function hI(e, t, r) {
  return new e({
    type: "intersection",
    left: t,
    right: r
  });
}
function bI(e, t, r, a) {
  const n = r instanceof Ie, o = n ? a : r, i = n ? r : null;
  return new e({
    type: "tuple",
    items: t,
    rest: i,
    ...B(o)
  });
}
function _I(e, t, r, a) {
  return new e({
    type: "record",
    keyType: t,
    valueType: r,
    ...B(a)
  });
}
function yI(e, t, r, a) {
  return new e({
    type: "map",
    keyType: t,
    valueType: r,
    ...B(a)
  });
}
function $I(e, t, r) {
  return new e({
    type: "set",
    valueType: t,
    ...B(r)
  });
}
function wI(e, t, r) {
  const a = Array.isArray(t) ? Object.fromEntries(t.map((n) => [n, n])) : t;
  return new e({
    type: "enum",
    entries: a,
    ...B(r)
  });
}
function kI(e, t, r) {
  return new e({
    type: "enum",
    entries: t,
    ...B(r)
  });
}
function SI(e, t, r) {
  return new e({
    type: "literal",
    values: Array.isArray(t) ? t : [t],
    ...B(r)
  });
}
function xv(e, t) {
  return new e({
    type: "file",
    ...B(t)
  });
}
function II(e, t) {
  return new e({
    type: "transform",
    transform: t
  });
}
function xI(e, t) {
  return new e({
    type: "optional",
    innerType: t
  });
}
function OI(e, t) {
  return new e({
    type: "nullable",
    innerType: t
  });
}
function EI(e, t, r) {
  return new e({
    type: "default",
    innerType: t,
    get defaultValue() {
      return typeof r == "function" ? r() : mo(r);
    }
  });
}
function NI(e, t, r) {
  return new e({
    type: "nonoptional",
    innerType: t,
    ...B(r)
  });
}
function zI(e, t) {
  return new e({
    type: "success",
    innerType: t
  });
}
function TI(e, t, r) {
  return new e({
    type: "catch",
    innerType: t,
    catchValue: typeof r == "function" ? r : () => r
  });
}
function PI(e, t, r) {
  return new e({
    type: "pipe",
    in: t,
    out: r
  });
}
function AI(e, t) {
  return new e({
    type: "readonly",
    innerType: t
  });
}
function DI(e, t, r) {
  return new e({
    type: "template_literal",
    parts: t,
    ...B(r)
  });
}
function CI(e, t) {
  return new e({
    type: "lazy",
    getter: t
  });
}
function jI(e, t) {
  return new e({
    type: "promise",
    innerType: t
  });
}
function Ov(e, t, r) {
  const a = B(r);
  return a.abort ?? (a.abort = !0), new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...a
  });
}
function Ev(e, t, r) {
  return new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...B(r)
  });
}
function Nv(e) {
  const t = zv((r) => (r.addIssue = (a) => {
    if (typeof a == "string")
      r.issues.push(mr(a, r.value, t._zod.def));
    else {
      const n = a;
      n.fatal && (n.continue = !1), n.code ?? (n.code = "custom"), n.input ?? (n.input = r.value), n.inst ?? (n.inst = t), n.continue ?? (n.continue = !t._zod.def.abort), r.issues.push(mr(n));
    }
  }, e(r.value, r)));
  return t;
}
function zv(e, t) {
  const r = new et({
    check: "custom",
    ...B(t)
  });
  return r._zod.check = e, r;
}
function Tv(e) {
  const t = new et({ check: "describe" });
  return t._zod.onattach = [
    (r) => {
      const a = Qt.get(r) ?? {};
      Qt.add(r, { ...a, description: e });
    }
  ], t._zod.check = () => {
  }, t;
}
function Pv(e) {
  const t = new et({ check: "meta" });
  return t._zod.onattach = [
    (r) => {
      const a = Qt.get(r) ?? {};
      Qt.add(r, { ...a, ...e });
    }
  ], t._zod.check = () => {
  }, t;
}
function Av(e, t) {
  const r = B(t);
  let a = r.truthy ?? ["true", "1", "yes", "on", "y", "enabled"], n = r.falsy ?? ["false", "0", "no", "off", "n", "disabled"];
  r.case !== "sensitive" && (a = a.map((p) => typeof p == "string" ? p.toLowerCase() : p), n = n.map((p) => typeof p == "string" ? p.toLowerCase() : p));
  const o = new Set(a), i = new Set(n), l = e.Codec ?? gl, u = e.Boolean ?? fl, c = e.String ?? sa, d = new c({ type: "string", error: r.error }), f = new u({ type: "boolean", error: r.error }), m = new l({
    type: "pipe",
    in: d,
    out: f,
    transform: ((p, v) => {
      let _ = p;
      return r.case !== "sensitive" && (_ = _.toLowerCase()), o.has(_) ? !0 : i.has(_) ? !1 : (v.issues.push({
        code: "invalid_value",
        expected: "stringbool",
        values: [...o, ...i],
        input: v.value,
        inst: m,
        continue: !1
      }), {});
    }),
    reverseTransform: ((p, v) => p === !0 ? a[0] || "true" : n[0] || "false"),
    error: r.error
  });
  return m;
}
function ua(e, t, r, a = {}) {
  const n = B(a), o = {
    ...B(a),
    check: "string_format",
    type: "string",
    format: t,
    fn: typeof r == "function" ? r : (l) => r.test(l),
    ...n
  };
  return r instanceof RegExp && (o.pattern = r), new e(o);
}
class mi {
  constructor(t) {
    this.counter = 0, this.metadataRegistry = t?.metadata ?? Qt, this.target = t?.target ?? "draft-2020-12", this.unrepresentable = t?.unrepresentable ?? "throw", this.override = t?.override ?? (() => {
    }), this.io = t?.io ?? "output", this.seen = /* @__PURE__ */ new Map();
  }
  process(t, r = { path: [], schemaPath: [] }) {
    var a;
    const n = t._zod.def, o = {
      guid: "uuid",
      url: "uri",
      datetime: "date-time",
      json_string: "json-string",
      regex: ""
      // do not set
    }, i = this.seen.get(t);
    if (i)
      return i.count++, r.schemaPath.includes(t) && (i.cycle = r.path), i.schema;
    const l = { schema: {}, count: 1, cycle: void 0, path: r.path };
    this.seen.set(t, l);
    const u = t._zod.toJSONSchema?.();
    if (u)
      l.schema = u;
    else {
      const f = {
        ...r,
        schemaPath: [...r.schemaPath, t],
        path: r.path
      }, m = t._zod.parent;
      if (m)
        l.ref = m, this.process(m, f), this.seen.get(m).isParent = !0;
      else {
        const p = l.schema;
        switch (n.type) {
          case "string": {
            const v = p;
            v.type = "string";
            const { minimum: _, maximum: k, format: $, patterns: y, contentEncoding: x } = t._zod.bag;
            if (typeof _ == "number" && (v.minLength = _), typeof k == "number" && (v.maxLength = k), $ && (v.format = o[$] ?? $, v.format === "" && delete v.format), x && (v.contentEncoding = x), y && y.size > 0) {
              const I = [...y];
              I.length === 1 ? v.pattern = I[0].source : I.length > 1 && (l.schema.allOf = [
                ...I.map((E) => ({
                  ...this.target === "draft-7" || this.target === "draft-4" || this.target === "openapi-3.0" ? { type: "string" } : {},
                  pattern: E.source
                }))
              ]);
            }
            break;
          }
          case "number": {
            const v = p, { minimum: _, maximum: k, format: $, multipleOf: y, exclusiveMaximum: x, exclusiveMinimum: I } = t._zod.bag;
            typeof $ == "string" && $.includes("int") ? v.type = "integer" : v.type = "number", typeof I == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (v.minimum = I, v.exclusiveMinimum = !0) : v.exclusiveMinimum = I), typeof _ == "number" && (v.minimum = _, typeof I == "number" && this.target !== "draft-4" && (I >= _ ? delete v.minimum : delete v.exclusiveMinimum)), typeof x == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (v.maximum = x, v.exclusiveMaximum = !0) : v.exclusiveMaximum = x), typeof k == "number" && (v.maximum = k, typeof x == "number" && this.target !== "draft-4" && (x <= k ? delete v.maximum : delete v.exclusiveMaximum)), typeof y == "number" && (v.multipleOf = y);
            break;
          }
          case "boolean": {
            const v = p;
            v.type = "boolean";
            break;
          }
          case "bigint": {
            if (this.unrepresentable === "throw")
              throw new Error("BigInt cannot be represented in JSON Schema");
            break;
          }
          case "symbol": {
            if (this.unrepresentable === "throw")
              throw new Error("Symbols cannot be represented in JSON Schema");
            break;
          }
          case "null": {
            this.target === "openapi-3.0" ? (p.type = "string", p.nullable = !0, p.enum = [null]) : p.type = "null";
            break;
          }
          case "any":
            break;
          case "unknown":
            break;
          case "undefined": {
            if (this.unrepresentable === "throw")
              throw new Error("Undefined cannot be represented in JSON Schema");
            break;
          }
          case "void": {
            if (this.unrepresentable === "throw")
              throw new Error("Void cannot be represented in JSON Schema");
            break;
          }
          case "never": {
            p.not = {};
            break;
          }
          case "date": {
            if (this.unrepresentable === "throw")
              throw new Error("Date cannot be represented in JSON Schema");
            break;
          }
          case "array": {
            const v = p, { minimum: _, maximum: k } = t._zod.bag;
            typeof _ == "number" && (v.minItems = _), typeof k == "number" && (v.maxItems = k), v.type = "array", v.items = this.process(n.element, { ...f, path: [...f.path, "items"] });
            break;
          }
          case "object": {
            const v = p;
            v.type = "object", v.properties = {};
            const _ = n.shape;
            for (const y in _)
              v.properties[y] = this.process(_[y], {
                ...f,
                path: [...f.path, "properties", y]
              });
            const k = new Set(Object.keys(_)), $ = new Set([...k].filter((y) => {
              const x = n.shape[y]._zod;
              return this.io === "input" ? x.optin === void 0 : x.optout === void 0;
            }));
            $.size > 0 && (v.required = Array.from($)), n.catchall?._zod.def.type === "never" ? v.additionalProperties = !1 : n.catchall ? n.catchall && (v.additionalProperties = this.process(n.catchall, {
              ...f,
              path: [...f.path, "additionalProperties"]
            })) : this.io === "output" && (v.additionalProperties = !1);
            break;
          }
          case "union": {
            const v = p, _ = n.discriminator !== void 0, k = n.options.map(($, y) => this.process($, {
              ...f,
              path: [...f.path, _ ? "oneOf" : "anyOf", y]
            }));
            _ ? v.oneOf = k : v.anyOf = k;
            break;
          }
          case "intersection": {
            const v = p, _ = this.process(n.left, {
              ...f,
              path: [...f.path, "allOf", 0]
            }), k = this.process(n.right, {
              ...f,
              path: [...f.path, "allOf", 1]
            }), $ = (x) => "allOf" in x && Object.keys(x).length === 1, y = [
              ...$(_) ? _.allOf : [_],
              ...$(k) ? k.allOf : [k]
            ];
            v.allOf = y;
            break;
          }
          case "tuple": {
            const v = p;
            v.type = "array";
            const _ = this.target === "draft-2020-12" ? "prefixItems" : "items", k = this.target === "draft-2020-12" || this.target === "openapi-3.0" ? "items" : "additionalItems", $ = n.items.map((E, N) => this.process(E, {
              ...f,
              path: [...f.path, _, N]
            })), y = n.rest ? this.process(n.rest, {
              ...f,
              path: [...f.path, k, ...this.target === "openapi-3.0" ? [n.items.length] : []]
            }) : null;
            this.target === "draft-2020-12" ? (v.prefixItems = $, y && (v.items = y)) : this.target === "openapi-3.0" ? (v.items = {
              anyOf: $
            }, y && v.items.anyOf.push(y), v.minItems = $.length, y || (v.maxItems = $.length)) : (v.items = $, y && (v.additionalItems = y));
            const { minimum: x, maximum: I } = t._zod.bag;
            typeof x == "number" && (v.minItems = x), typeof I == "number" && (v.maxItems = I);
            break;
          }
          case "record": {
            const v = p;
            v.type = "object", (this.target === "draft-7" || this.target === "draft-2020-12") && (v.propertyNames = this.process(n.keyType, {
              ...f,
              path: [...f.path, "propertyNames"]
            })), v.additionalProperties = this.process(n.valueType, {
              ...f,
              path: [...f.path, "additionalProperties"]
            });
            break;
          }
          case "map": {
            if (this.unrepresentable === "throw")
              throw new Error("Map cannot be represented in JSON Schema");
            break;
          }
          case "set": {
            if (this.unrepresentable === "throw")
              throw new Error("Set cannot be represented in JSON Schema");
            break;
          }
          case "enum": {
            const v = p, _ = Hi(n.entries);
            _.every((k) => typeof k == "number") && (v.type = "number"), _.every((k) => typeof k == "string") && (v.type = "string"), v.enum = _;
            break;
          }
          case "literal": {
            const v = p, _ = [];
            for (const k of n.values)
              if (k === void 0) {
                if (this.unrepresentable === "throw")
                  throw new Error("Literal `undefined` cannot be represented in JSON Schema");
              } else if (typeof k == "bigint") {
                if (this.unrepresentable === "throw")
                  throw new Error("BigInt literals cannot be represented in JSON Schema");
                _.push(Number(k));
              } else
                _.push(k);
            if (_.length !== 0) if (_.length === 1) {
              const k = _[0];
              v.type = k === null ? "null" : typeof k, this.target === "draft-4" || this.target === "openapi-3.0" ? v.enum = [k] : v.const = k;
            } else
              _.every((k) => typeof k == "number") && (v.type = "number"), _.every((k) => typeof k == "string") && (v.type = "string"), _.every((k) => typeof k == "boolean") && (v.type = "string"), _.every((k) => k === null) && (v.type = "null"), v.enum = _;
            break;
          }
          case "file": {
            const v = p, _ = {
              type: "string",
              format: "binary",
              contentEncoding: "binary"
            }, { minimum: k, maximum: $, mime: y } = t._zod.bag;
            k !== void 0 && (_.minLength = k), $ !== void 0 && (_.maxLength = $), y ? y.length === 1 ? (_.contentMediaType = y[0], Object.assign(v, _)) : v.anyOf = y.map((x) => ({ ..._, contentMediaType: x })) : Object.assign(v, _);
            break;
          }
          case "transform": {
            if (this.unrepresentable === "throw")
              throw new Error("Transforms cannot be represented in JSON Schema");
            break;
          }
          case "nullable": {
            const v = this.process(n.innerType, f);
            this.target === "openapi-3.0" ? (l.ref = n.innerType, p.nullable = !0) : p.anyOf = [v, { type: "null" }];
            break;
          }
          case "nonoptional": {
            this.process(n.innerType, f), l.ref = n.innerType;
            break;
          }
          case "success": {
            const v = p;
            v.type = "boolean";
            break;
          }
          case "default": {
            this.process(n.innerType, f), l.ref = n.innerType, p.default = JSON.parse(JSON.stringify(n.defaultValue));
            break;
          }
          case "prefault": {
            this.process(n.innerType, f), l.ref = n.innerType, this.io === "input" && (p._prefault = JSON.parse(JSON.stringify(n.defaultValue)));
            break;
          }
          case "catch": {
            this.process(n.innerType, f), l.ref = n.innerType;
            let v;
            try {
              v = n.catchValue(void 0);
            } catch {
              throw new Error("Dynamic catch values are not supported in JSON Schema");
            }
            p.default = v;
            break;
          }
          case "nan": {
            if (this.unrepresentable === "throw")
              throw new Error("NaN cannot be represented in JSON Schema");
            break;
          }
          case "template_literal": {
            const v = p, _ = t._zod.pattern;
            if (!_)
              throw new Error("Pattern not found in template literal");
            v.type = "string", v.pattern = _.source;
            break;
          }
          case "pipe": {
            const v = this.io === "input" ? n.in._zod.def.type === "transform" ? n.out : n.in : n.out;
            this.process(v, f), l.ref = v;
            break;
          }
          case "readonly": {
            this.process(n.innerType, f), l.ref = n.innerType, p.readOnly = !0;
            break;
          }
          // passthrough types
          case "promise": {
            this.process(n.innerType, f), l.ref = n.innerType;
            break;
          }
          case "optional": {
            this.process(n.innerType, f), l.ref = n.innerType;
            break;
          }
          case "lazy": {
            const v = t._zod.innerType;
            this.process(v, f), l.ref = v;
            break;
          }
          case "custom": {
            if (this.unrepresentable === "throw")
              throw new Error("Custom types cannot be represented in JSON Schema");
            break;
          }
          case "function": {
            if (this.unrepresentable === "throw")
              throw new Error("Function types cannot be represented in JSON Schema");
            break;
          }
        }
      }
    }
    const c = this.metadataRegistry.get(t);
    return c && Object.assign(l.schema, c), this.io === "input" && Nt(t) && (delete l.schema.examples, delete l.schema.default), this.io === "input" && l.schema._prefault && ((a = l.schema).default ?? (a.default = l.schema._prefault)), delete l.schema._prefault, this.seen.get(t).schema;
  }
  emit(t, r) {
    const a = {
      cycles: r?.cycles ?? "ref",
      reused: r?.reused ?? "inline",
      // unrepresentable: _params?.unrepresentable ?? "throw",
      // uri: _params?.uri ?? ((id) => `${id}`),
      external: r?.external ?? void 0
    }, n = this.seen.get(t);
    if (!n)
      throw new Error("Unprocessed schema. This is a bug in Zod.");
    const o = (d) => {
      const f = this.target === "draft-2020-12" ? "$defs" : "definitions";
      if (a.external) {
        const _ = a.external.registry.get(d[0])?.id, k = a.external.uri ?? ((y) => y);
        if (_)
          return { ref: k(_) };
        const $ = d[1].defId ?? d[1].schema.id ?? `schema${this.counter++}`;
        return d[1].defId = $, { defId: $, ref: `${k("__shared")}#/${f}/${$}` };
      }
      if (d[1] === n)
        return { ref: "#" };
      const p = `#/${f}/`, v = d[1].schema.id ?? `__schema${this.counter++}`;
      return { defId: v, ref: p + v };
    }, i = (d) => {
      if (d[1].schema.$ref)
        return;
      const f = d[1], { ref: m, defId: p } = o(d);
      f.def = { ...f.schema }, p && (f.defId = p);
      const v = f.schema;
      for (const _ in v)
        delete v[_];
      v.$ref = m;
    };
    if (a.cycles === "throw")
      for (const d of this.seen.entries()) {
        const f = d[1];
        if (f.cycle)
          throw new Error(`Cycle detected: #/${f.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
      }
    for (const d of this.seen.entries()) {
      const f = d[1];
      if (t === d[0]) {
        i(d);
        continue;
      }
      if (a.external) {
        const p = a.external.registry.get(d[0])?.id;
        if (t !== d[0] && p) {
          i(d);
          continue;
        }
      }
      if (this.metadataRegistry.get(d[0])?.id) {
        i(d);
        continue;
      }
      if (f.cycle) {
        i(d);
        continue;
      }
      if (f.count > 1 && a.reused === "ref") {
        i(d);
        continue;
      }
    }
    const l = (d, f) => {
      const m = this.seen.get(d), p = m.def ?? m.schema, v = { ...p };
      if (m.ref === null)
        return;
      const _ = m.ref;
      if (m.ref = null, _) {
        l(_, f);
        const k = this.seen.get(_).schema;
        k.$ref && (f.target === "draft-7" || f.target === "draft-4" || f.target === "openapi-3.0") ? (p.allOf = p.allOf ?? [], p.allOf.push(k)) : (Object.assign(p, k), Object.assign(p, v));
      }
      m.isParent || this.override({
        zodSchema: d,
        jsonSchema: p,
        path: m.path ?? []
      });
    };
    for (const d of [...this.seen.entries()].reverse())
      l(d[0], { target: this.target });
    const u = {};
    if (this.target === "draft-2020-12" ? u.$schema = "https://json-schema.org/draft/2020-12/schema" : this.target === "draft-7" ? u.$schema = "http://json-schema.org/draft-07/schema#" : this.target === "draft-4" ? u.$schema = "http://json-schema.org/draft-04/schema#" : this.target === "openapi-3.0" || console.warn(`Invalid target: ${this.target}`), a.external?.uri) {
      const d = a.external.registry.get(t)?.id;
      if (!d)
        throw new Error("Schema is missing an `id` property");
      u.$id = a.external.uri(d);
    }
    Object.assign(u, n.def);
    const c = a.external?.defs ?? {};
    for (const d of this.seen.entries()) {
      const f = d[1];
      f.def && f.defId && (c[f.defId] = f.def);
    }
    a.external || Object.keys(c).length > 0 && (this.target === "draft-2020-12" ? u.$defs = c : u.definitions = c);
    try {
      return JSON.parse(JSON.stringify(u));
    } catch {
      throw new Error("Error converting schema to JSON.");
    }
  }
}
function Dv(e, t) {
  if (e instanceof hl) {
    const a = new mi(t), n = {};
    for (const l of e._idmap.entries()) {
      const [u, c] = l;
      a.process(c);
    }
    const o = {}, i = {
      registry: e,
      uri: t?.uri,
      defs: n
    };
    for (const l of e._idmap.entries()) {
      const [u, c] = l;
      o[u] = a.emit(c, {
        ...t,
        external: i
      });
    }
    if (Object.keys(n).length > 0) {
      const l = a.target === "draft-2020-12" ? "$defs" : "definitions";
      o.__shared = {
        [l]: n
      };
    }
    return { schemas: o };
  }
  const r = new mi(t);
  return r.process(e), r.emit(e, t);
}
function Nt(e, t) {
  const r = t ?? { seen: /* @__PURE__ */ new Set() };
  if (r.seen.has(e))
    return !1;
  r.seen.add(e);
  const a = e._zod.def;
  if (a.type === "transform")
    return !0;
  if (a.type === "array")
    return Nt(a.element, r);
  if (a.type === "set")
    return Nt(a.valueType, r);
  if (a.type === "lazy")
    return Nt(a.getter(), r);
  if (a.type === "promise" || a.type === "optional" || a.type === "nonoptional" || a.type === "nullable" || a.type === "readonly" || a.type === "default" || a.type === "prefault")
    return Nt(a.innerType, r);
  if (a.type === "intersection")
    return Nt(a.left, r) || Nt(a.right, r);
  if (a.type === "record" || a.type === "map")
    return Nt(a.keyType, r) || Nt(a.valueType, r);
  if (a.type === "pipe")
    return Nt(a.in, r) || Nt(a.out, r);
  if (a.type === "object") {
    for (const n in a.shape)
      if (Nt(a.shape[n], r))
        return !0;
    return !1;
  }
  if (a.type === "union") {
    for (const n of a.options)
      if (Nt(n, r))
        return !0;
    return !1;
  }
  if (a.type === "tuple") {
    for (const n of a.items)
      if (Nt(n, r))
        return !0;
    return !!(a.rest && Nt(a.rest, r));
  }
  return !1;
}
const UI = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), LI = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $ZodAny: rp,
  $ZodArray: sp,
  $ZodAsyncError: Jn,
  $ZodBase64: Wm,
  $ZodBase64URL: Hm,
  $ZodBigInt: ml,
  $ZodBigIntFormat: Qm,
  $ZodBoolean: fl,
  $ZodCIDRv4: Bm,
  $ZodCIDRv6: Zm,
  $ZodCUID: Tm,
  $ZodCUID2: Pm,
  $ZodCatch: Ep,
  $ZodCheck: et,
  $ZodCheckBigIntFormat: lm,
  $ZodCheckEndsWith: _m,
  $ZodCheckGreaterThan: ul,
  $ZodCheckIncludes: hm,
  $ZodCheckLengthEquals: mm,
  $ZodCheckLessThan: sl,
  $ZodCheckLowerCase: vm,
  $ZodCheckMaxLength: dm,
  $ZodCheckMaxSize: sm,
  $ZodCheckMimeType: $m,
  $ZodCheckMinLength: fm,
  $ZodCheckMinSize: um,
  $ZodCheckMultipleOf: om,
  $ZodCheckNumberFormat: im,
  $ZodCheckOverwrite: wm,
  $ZodCheckProperty: ym,
  $ZodCheckRegex: pm,
  $ZodCheckSizeEquals: cm,
  $ZodCheckStartsWith: bm,
  $ZodCheckStringFormat: la,
  $ZodCheckUpperCase: gm,
  $ZodCodec: gl,
  $ZodCustom: jp,
  $ZodCustomStringFormat: qm,
  $ZodDate: lp,
  $ZodDefault: Sp,
  $ZodDiscriminatedUnion: mp,
  $ZodE164: Km,
  $ZodEmail: Om,
  $ZodEmoji: Nm,
  $ZodEncodeError: co,
  $ZodEnum: bp,
  $ZodError: Ji,
  $ZodFile: yp,
  $ZodFunction: Ap,
  $ZodGUID: Im,
  $ZodIPv4: Vm,
  $ZodIPv6: Fm,
  $ZodISODate: Um,
  $ZodISODateTime: jm,
  $ZodISODuration: Rm,
  $ZodISOTime: Lm,
  $ZodIntersection: pp,
  $ZodJWT: Ym,
  $ZodKSUID: Cm,
  $ZodLazy: Cp,
  $ZodLiteral: _p,
  $ZodMAC: Mm,
  $ZodMap: gp,
  $ZodNaN: Np,
  $ZodNanoID: zm,
  $ZodNever: op,
  $ZodNonOptional: xp,
  $ZodNull: np,
  $ZodNullable: kp,
  $ZodNumber: dl,
  $ZodNumberFormat: Xm,
  $ZodObject: dp,
  $ZodObjectJIT: fp,
  $ZodOptional: wp,
  $ZodPipe: zp,
  $ZodPrefault: Ip,
  $ZodPromise: Dp,
  $ZodReadonly: Tp,
  $ZodRealError: Zt,
  $ZodRecord: vp,
  $ZodRegistry: hl,
  $ZodSet: hp,
  $ZodString: sa,
  $ZodStringFormat: Fe,
  $ZodSuccess: Op,
  $ZodSymbol: ep,
  $ZodTemplateLiteral: Pp,
  $ZodTransform: $p,
  $ZodTuple: vl,
  $ZodType: Ie,
  $ZodULID: Am,
  $ZodURL: Em,
  $ZodUUID: xm,
  $ZodUndefined: tp,
  $ZodUnion: pl,
  $ZodUnknown: ap,
  $ZodVoid: ip,
  $ZodXID: Dm,
  $brand: Xd,
  $constructor: P,
  $input: Mp,
  $output: Fp,
  Doc: km,
  JSONSchema: UI,
  JSONSchemaGenerator: mi,
  NEVER: qd,
  TimePrecision: Gp,
  _any: mv,
  _array: Iv,
  _base64: Cl,
  _base64url: jl,
  _bigint: iv,
  _boolean: av,
  _catch: TI,
  _check: zv,
  _cidrv4: Al,
  _cidrv6: Dl,
  _coercedBigint: lv,
  _coercedBoolean: ov,
  _coercedDate: bv,
  _coercedNumber: Xp,
  _coercedString: Zp,
  _cuid: xl,
  _cuid2: Ol,
  _custom: Ov,
  _date: hv,
  _decode: Qi,
  _decodeAsync: tl,
  _default: EI,
  _discriminatedUnion: gI,
  _e164: Ul,
  _email: _l,
  _emoji: Sl,
  _encode: Xi,
  _encodeAsync: el,
  _endsWith: Wl,
  _enum: wI,
  _file: xv,
  _float32: ev,
  _float64: tv,
  _gt: tr,
  _gte: Ft,
  _guid: Ha,
  _includes: Bl,
  _int: Qp,
  _int32: nv,
  _int64: sv,
  _intersection: hI,
  _ipv4: Tl,
  _ipv6: Pl,
  _isoDate: Kp,
  _isoDateTime: Hp,
  _isoDuration: Yp,
  _isoTime: Jp,
  _jwt: Ll,
  _ksuid: zl,
  _lazy: CI,
  _length: _o,
  _literal: SI,
  _lowercase: Fl,
  _lt: er,
  _lte: nn,
  _mac: Wp,
  _map: yI,
  _max: nn,
  _maxLength: bo,
  _maxSize: ho,
  _mime: Gl,
  _min: Ft,
  _minLength: vr,
  _minSize: Kr,
  _multipleOf: Hr,
  _nan: _v,
  _nanoid: Il,
  _nativeEnum: kI,
  _negative: $v,
  _never: vv,
  _nonnegative: kv,
  _nonoptional: NI,
  _nonpositive: wv,
  _normalize: Hl,
  _null: fv,
  _nullable: OI,
  _number: qp,
  _optional: xI,
  _overwrite: Ln,
  _parse: ta,
  _parseAsync: na,
  _pipe: PI,
  _positive: yv,
  _promise: jI,
  _property: Sv,
  _readonly: AI,
  _record: _I,
  _refine: Ev,
  _regex: Vl,
  _safeDecode: rl,
  _safeDecodeAsync: ol,
  _safeEncode: nl,
  _safeEncodeAsync: al,
  _safeParse: ra,
  _safeParseAsync: aa,
  _set: $I,
  _size: Rl,
  _slugify: ql,
  _startsWith: Zl,
  _string: Bp,
  _stringFormat: ua,
  _stringbool: Av,
  _success: zI,
  _superRefine: Nv,
  _symbol: cv,
  _templateLiteral: DI,
  _toLowerCase: Jl,
  _toUpperCase: Yl,
  _transform: II,
  _trim: Kl,
  _tuple: bI,
  _uint32: rv,
  _uint64: uv,
  _ulid: El,
  _undefined: dv,
  _union: vI,
  _unknown: pv,
  _uppercase: Ml,
  _url: go,
  _uuid: yl,
  _uuidv4: $l,
  _uuidv6: wl,
  _uuidv7: kl,
  _void: gv,
  _xid: Nl,
  clone: Kt,
  config: Tt,
  decode: Yk,
  decodeAsync: Xk,
  describe: Tv,
  encode: Jk,
  encodeAsync: qk,
  flattenError: Yi,
  formatError: qi,
  globalConfig: Ba,
  globalRegistry: Qt,
  isValidBase64: cl,
  isValidBase64URL: Gm,
  isValidJWT: Jm,
  locales: Vp,
  meta: Pv,
  parse: ci,
  parseAsync: di,
  prettifyError: yf,
  regexes: ll,
  registry: bl,
  safeDecode: e1,
  safeDecodeAsync: n1,
  safeEncode: Qk,
  safeEncodeAsync: t1,
  safeParse: $f,
  safeParseAsync: wf,
  toDotPath: _f,
  toJSONSchema: Dv,
  treeifyError: bf,
  util: gf,
  version: Sm
}, Symbol.toStringTag, { value: "Module" })), Xl = /* @__PURE__ */ P("ZodISODateTime", (e, t) => {
  jm.init(e, t), Be.init(e, t);
});
function Cv(e) {
  return Hp(Xl, e);
}
const Ql = /* @__PURE__ */ P("ZodISODate", (e, t) => {
  Um.init(e, t), Be.init(e, t);
});
function jv(e) {
  return Kp(Ql, e);
}
const es = /* @__PURE__ */ P("ZodISOTime", (e, t) => {
  Lm.init(e, t), Be.init(e, t);
});
function Uv(e) {
  return Jp(es, e);
}
const ts = /* @__PURE__ */ P("ZodISODuration", (e, t) => {
  Rm.init(e, t), Be.init(e, t);
});
function Lv(e) {
  return Yp(ts, e);
}
const RI = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ZodISODate: Ql,
  ZodISODateTime: Xl,
  ZodISODuration: ts,
  ZodISOTime: es,
  date: jv,
  datetime: Cv,
  duration: Lv,
  time: Uv
}, Symbol.toStringTag, { value: "Module" })), Rv = (e, t) => {
  Ji.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
    format: {
      value: (r) => qi(e, r)
      // enumerable: false,
    },
    flatten: {
      value: (r) => Yi(e, r)
      // enumerable: false,
    },
    addIssue: {
      value: (r) => {
        e.issues.push(r), e.message = JSON.stringify(e.issues, Za, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (r) => {
        e.issues.push(...r), e.message = JSON.stringify(e.issues, Za, 2);
      }
      // enumerable: false,
    },
    isEmpty: {
      get() {
        return e.issues.length === 0;
      }
      // enumerable: false,
    }
  });
}, VI = P("ZodError", Rv), Wt = P("ZodError", Rv, {
  Parent: Error
}), Vv = /* @__PURE__ */ ta(Wt), Fv = /* @__PURE__ */ na(Wt), Mv = /* @__PURE__ */ ra(Wt), Bv = /* @__PURE__ */ aa(Wt), Zv = /* @__PURE__ */ Xi(Wt), Wv = /* @__PURE__ */ Qi(Wt), Gv = /* @__PURE__ */ el(Wt), Hv = /* @__PURE__ */ tl(Wt), Kv = /* @__PURE__ */ nl(Wt), Jv = /* @__PURE__ */ rl(Wt), Yv = /* @__PURE__ */ al(Wt), qv = /* @__PURE__ */ ol(Wt), Oe = /* @__PURE__ */ P("ZodType", (e, t) => (Ie.init(e, t), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.check = (...r) => e.clone(On(t, {
  checks: [
    ...t.checks ?? [],
    ...r.map((a) => typeof a == "function" ? { _zod: { check: a, def: { check: "custom" }, onattach: [] } } : a)
  ]
})), e.clone = (r, a) => Kt(e, r, a), e.brand = () => e, e.register = ((r, a) => (r.add(e, a), e)), e.parse = (r, a) => Vv(e, r, a, { callee: e.parse }), e.safeParse = (r, a) => Mv(e, r, a), e.parseAsync = async (r, a) => Fv(e, r, a, { callee: e.parseAsync }), e.safeParseAsync = async (r, a) => Bv(e, r, a), e.spa = e.safeParseAsync, e.encode = (r, a) => Zv(e, r, a), e.decode = (r, a) => Wv(e, r, a), e.encodeAsync = async (r, a) => Gv(e, r, a), e.decodeAsync = async (r, a) => Hv(e, r, a), e.safeEncode = (r, a) => Kv(e, r, a), e.safeDecode = (r, a) => Jv(e, r, a), e.safeEncodeAsync = async (r, a) => Yv(e, r, a), e.safeDecodeAsync = async (r, a) => qv(e, r, a), e.refine = (r, a) => e.check(Cg(r, a)), e.superRefine = (r) => e.check(jg(r)), e.overwrite = (r) => e.check(Ln(r)), e.optional = () => Ja(e), e.nullable = () => Ya(e), e.nullish = () => Ja(Ya(e)), e.nonoptional = (r) => kg(e, r), e.array = () => So(e), e.or = (r) => Ss([e, r]), e.and = (r) => cg(e, r), e.transform = (r) => qa(e, Os(r)), e.default = (r) => yg(e, r), e.prefault = (r) => wg(e, r), e.catch = (r) => xg(e, r), e.pipe = (r) => qa(e, r), e.readonly = () => Ng(e), e.describe = (r) => {
  const a = e.clone();
  return Qt.add(a, { description: r }), a;
}, Object.defineProperty(e, "description", {
  get() {
    return Qt.get(e)?.description;
  },
  configurable: !0
}), e.meta = (...r) => {
  if (r.length === 0)
    return Qt.get(e);
  const a = e.clone();
  return Qt.add(a, r[0]), a;
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e)), ns = /* @__PURE__ */ P("_ZodString", (e, t) => {
  sa.init(e, t), Oe.init(e, t);
  const r = e._zod.bag;
  e.format = r.format ?? null, e.minLength = r.minimum ?? null, e.maxLength = r.maximum ?? null, e.regex = (...a) => e.check(Vl(...a)), e.includes = (...a) => e.check(Bl(...a)), e.startsWith = (...a) => e.check(Zl(...a)), e.endsWith = (...a) => e.check(Wl(...a)), e.min = (...a) => e.check(vr(...a)), e.max = (...a) => e.check(bo(...a)), e.length = (...a) => e.check(_o(...a)), e.nonempty = (...a) => e.check(vr(1, ...a)), e.lowercase = (a) => e.check(Fl(a)), e.uppercase = (a) => e.check(Ml(a)), e.trim = () => e.check(Kl()), e.normalize = (...a) => e.check(Hl(...a)), e.toLowerCase = () => e.check(Jl()), e.toUpperCase = () => e.check(Yl()), e.slugify = () => e.check(ql());
}), ca = /* @__PURE__ */ P("ZodString", (e, t) => {
  sa.init(e, t), ns.init(e, t), e.email = (r) => e.check(_l(rs, r)), e.url = (r) => e.check(go(yo, r)), e.jwt = (r) => e.check(Ll(bs, r)), e.emoji = (r) => e.check(Sl(as, r)), e.guid = (r) => e.check(Ha(Ka, r)), e.uuid = (r) => e.check(yl(wn, r)), e.uuidv4 = (r) => e.check($l(wn, r)), e.uuidv6 = (r) => e.check(wl(wn, r)), e.uuidv7 = (r) => e.check(kl(wn, r)), e.nanoid = (r) => e.check(Il(os, r)), e.guid = (r) => e.check(Ha(Ka, r)), e.cuid = (r) => e.check(xl(is, r)), e.cuid2 = (r) => e.check(Ol(ls, r)), e.ulid = (r) => e.check(El(ss, r)), e.base64 = (r) => e.check(Cl(vs, r)), e.base64url = (r) => e.check(jl(gs, r)), e.xid = (r) => e.check(Nl(us, r)), e.ksuid = (r) => e.check(zl(cs, r)), e.ipv4 = (r) => e.check(Tl(ds, r)), e.ipv6 = (r) => e.check(Pl(fs, r)), e.cidrv4 = (r) => e.check(Al(ms, r)), e.cidrv6 = (r) => e.check(Dl(ps, r)), e.e164 = (r) => e.check(Ul(hs, r)), e.datetime = (r) => e.check(Cv(r)), e.date = (r) => e.check(jv(r)), e.time = (r) => e.check(Uv(r)), e.duration = (r) => e.check(Lv(r));
});
function pi(e) {
  return Bp(ca, e);
}
const Be = /* @__PURE__ */ P("ZodStringFormat", (e, t) => {
  Fe.init(e, t), ns.init(e, t);
}), rs = /* @__PURE__ */ P("ZodEmail", (e, t) => {
  Om.init(e, t), Be.init(e, t);
});
function FI(e) {
  return _l(rs, e);
}
const Ka = /* @__PURE__ */ P("ZodGUID", (e, t) => {
  Im.init(e, t), Be.init(e, t);
});
function MI(e) {
  return Ha(Ka, e);
}
const wn = /* @__PURE__ */ P("ZodUUID", (e, t) => {
  xm.init(e, t), Be.init(e, t);
});
function BI(e) {
  return yl(wn, e);
}
function ZI(e) {
  return $l(wn, e);
}
function WI(e) {
  return wl(wn, e);
}
function GI(e) {
  return kl(wn, e);
}
const yo = /* @__PURE__ */ P("ZodURL", (e, t) => {
  Em.init(e, t), Be.init(e, t);
});
function HI(e) {
  return go(yo, e);
}
function KI(e) {
  return go(yo, {
    protocol: /^https?$/,
    hostname: Ff,
    ...B(e)
  });
}
const as = /* @__PURE__ */ P("ZodEmoji", (e, t) => {
  Nm.init(e, t), Be.init(e, t);
});
function JI(e) {
  return Sl(as, e);
}
const os = /* @__PURE__ */ P("ZodNanoID", (e, t) => {
  zm.init(e, t), Be.init(e, t);
});
function YI(e) {
  return Il(os, e);
}
const is = /* @__PURE__ */ P("ZodCUID", (e, t) => {
  Tm.init(e, t), Be.init(e, t);
});
function qI(e) {
  return xl(is, e);
}
const ls = /* @__PURE__ */ P("ZodCUID2", (e, t) => {
  Pm.init(e, t), Be.init(e, t);
});
function XI(e) {
  return Ol(ls, e);
}
const ss = /* @__PURE__ */ P("ZodULID", (e, t) => {
  Am.init(e, t), Be.init(e, t);
});
function QI(e) {
  return El(ss, e);
}
const us = /* @__PURE__ */ P("ZodXID", (e, t) => {
  Dm.init(e, t), Be.init(e, t);
});
function ex(e) {
  return Nl(us, e);
}
const cs = /* @__PURE__ */ P("ZodKSUID", (e, t) => {
  Cm.init(e, t), Be.init(e, t);
});
function tx(e) {
  return zl(cs, e);
}
const ds = /* @__PURE__ */ P("ZodIPv4", (e, t) => {
  Vm.init(e, t), Be.init(e, t);
});
function nx(e) {
  return Tl(ds, e);
}
const Xv = /* @__PURE__ */ P("ZodMAC", (e, t) => {
  Mm.init(e, t), Be.init(e, t);
});
function rx(e) {
  return Wp(Xv, e);
}
const fs = /* @__PURE__ */ P("ZodIPv6", (e, t) => {
  Fm.init(e, t), Be.init(e, t);
});
function ax(e) {
  return Pl(fs, e);
}
const ms = /* @__PURE__ */ P("ZodCIDRv4", (e, t) => {
  Bm.init(e, t), Be.init(e, t);
});
function ox(e) {
  return Al(ms, e);
}
const ps = /* @__PURE__ */ P("ZodCIDRv6", (e, t) => {
  Zm.init(e, t), Be.init(e, t);
});
function ix(e) {
  return Dl(ps, e);
}
const vs = /* @__PURE__ */ P("ZodBase64", (e, t) => {
  Wm.init(e, t), Be.init(e, t);
});
function lx(e) {
  return Cl(vs, e);
}
const gs = /* @__PURE__ */ P("ZodBase64URL", (e, t) => {
  Hm.init(e, t), Be.init(e, t);
});
function sx(e) {
  return jl(gs, e);
}
const hs = /* @__PURE__ */ P("ZodE164", (e, t) => {
  Km.init(e, t), Be.init(e, t);
});
function ux(e) {
  return Ul(hs, e);
}
const bs = /* @__PURE__ */ P("ZodJWT", (e, t) => {
  Ym.init(e, t), Be.init(e, t);
});
function cx(e) {
  return Ll(bs, e);
}
const da = /* @__PURE__ */ P("ZodCustomStringFormat", (e, t) => {
  qm.init(e, t), Be.init(e, t);
});
function dx(e, t, r = {}) {
  return ua(da, e, t, r);
}
function fx(e) {
  return ua(da, "hostname", Vf, e);
}
function mx(e) {
  return ua(da, "hex", rm, e);
}
function px(e, t) {
  const r = t?.enc ?? "hex", a = `${e}_${r}`, n = ll[a];
  if (!n)
    throw new Error(`Unrecognized hash format: ${a}`);
  return ua(da, a, n, t);
}
const $o = /* @__PURE__ */ P("ZodNumber", (e, t) => {
  dl.init(e, t), Oe.init(e, t), e.gt = (a, n) => e.check(tr(a, n)), e.gte = (a, n) => e.check(Ft(a, n)), e.min = (a, n) => e.check(Ft(a, n)), e.lt = (a, n) => e.check(er(a, n)), e.lte = (a, n) => e.check(nn(a, n)), e.max = (a, n) => e.check(nn(a, n)), e.int = (a) => e.check(vi(a)), e.safe = (a) => e.check(vi(a)), e.positive = (a) => e.check(tr(0, a)), e.nonnegative = (a) => e.check(Ft(0, a)), e.negative = (a) => e.check(er(0, a)), e.nonpositive = (a) => e.check(nn(0, a)), e.multipleOf = (a, n) => e.check(Hr(a, n)), e.step = (a, n) => e.check(Hr(a, n)), e.finite = () => e;
  const r = e._zod.bag;
  e.minValue = Math.max(r.minimum ?? Number.NEGATIVE_INFINITY, r.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(r.maximum ?? Number.POSITIVE_INFINITY, r.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (r.format ?? "").includes("int") || Number.isSafeInteger(r.multipleOf ?? 0.5), e.isFinite = !0, e.format = r.format ?? null;
});
function Qv(e) {
  return qp($o, e);
}
const Sr = /* @__PURE__ */ P("ZodNumberFormat", (e, t) => {
  Xm.init(e, t), $o.init(e, t);
});
function vi(e) {
  return Qp(Sr, e);
}
function vx(e) {
  return ev(Sr, e);
}
function gx(e) {
  return tv(Sr, e);
}
function hx(e) {
  return nv(Sr, e);
}
function bx(e) {
  return rv(Sr, e);
}
const wo = /* @__PURE__ */ P("ZodBoolean", (e, t) => {
  fl.init(e, t), Oe.init(e, t);
});
function eg(e) {
  return av(wo, e);
}
const ko = /* @__PURE__ */ P("ZodBigInt", (e, t) => {
  ml.init(e, t), Oe.init(e, t), e.gte = (a, n) => e.check(Ft(a, n)), e.min = (a, n) => e.check(Ft(a, n)), e.gt = (a, n) => e.check(tr(a, n)), e.gte = (a, n) => e.check(Ft(a, n)), e.min = (a, n) => e.check(Ft(a, n)), e.lt = (a, n) => e.check(er(a, n)), e.lte = (a, n) => e.check(nn(a, n)), e.max = (a, n) => e.check(nn(a, n)), e.positive = (a) => e.check(tr(BigInt(0), a)), e.negative = (a) => e.check(er(BigInt(0), a)), e.nonpositive = (a) => e.check(nn(BigInt(0), a)), e.nonnegative = (a) => e.check(Ft(BigInt(0), a)), e.multipleOf = (a, n) => e.check(Hr(a, n));
  const r = e._zod.bag;
  e.minValue = r.minimum ?? null, e.maxValue = r.maximum ?? null, e.format = r.format ?? null;
});
function _x(e) {
  return iv(ko, e);
}
const _s = /* @__PURE__ */ P("ZodBigIntFormat", (e, t) => {
  Qm.init(e, t), ko.init(e, t);
});
function yx(e) {
  return sv(_s, e);
}
function $x(e) {
  return uv(_s, e);
}
const tg = /* @__PURE__ */ P("ZodSymbol", (e, t) => {
  ep.init(e, t), Oe.init(e, t);
});
function wx(e) {
  return cv(tg, e);
}
const ng = /* @__PURE__ */ P("ZodUndefined", (e, t) => {
  tp.init(e, t), Oe.init(e, t);
});
function kx(e) {
  return dv(ng, e);
}
const ys = /* @__PURE__ */ P("ZodNull", (e, t) => {
  np.init(e, t), Oe.init(e, t);
});
function rg(e) {
  return fv(ys, e);
}
const ag = /* @__PURE__ */ P("ZodAny", (e, t) => {
  rp.init(e, t), Oe.init(e, t);
});
function Sx() {
  return mv(ag);
}
const og = /* @__PURE__ */ P("ZodUnknown", (e, t) => {
  ap.init(e, t), Oe.init(e, t);
});
function gr() {
  return pv(og);
}
const ig = /* @__PURE__ */ P("ZodNever", (e, t) => {
  op.init(e, t), Oe.init(e, t);
});
function $s(e) {
  return vv(ig, e);
}
const lg = /* @__PURE__ */ P("ZodVoid", (e, t) => {
  ip.init(e, t), Oe.init(e, t);
});
function Ix(e) {
  return gv(lg, e);
}
const ws = /* @__PURE__ */ P("ZodDate", (e, t) => {
  lp.init(e, t), Oe.init(e, t), e.min = (a, n) => e.check(Ft(a, n)), e.max = (a, n) => e.check(nn(a, n));
  const r = e._zod.bag;
  e.minDate = r.minimum ? new Date(r.minimum) : null, e.maxDate = r.maximum ? new Date(r.maximum) : null;
});
function xx(e) {
  return hv(ws, e);
}
const ks = /* @__PURE__ */ P("ZodArray", (e, t) => {
  sp.init(e, t), Oe.init(e, t), e.element = t.element, e.min = (r, a) => e.check(vr(r, a)), e.nonempty = (r) => e.check(vr(1, r)), e.max = (r, a) => e.check(bo(r, a)), e.length = (r, a) => e.check(_o(r, a)), e.unwrap = () => e.element;
});
function So(e, t) {
  return Iv(ks, e, t);
}
function Ox(e) {
  const t = e._zod.def.shape;
  return xs(Object.keys(t));
}
const hr = /* @__PURE__ */ P("ZodObject", (e, t) => {
  fp.init(e, t), Oe.init(e, t), De(e, "shape", () => t.shape), e.keyof = () => xs(Object.keys(e._zod.def.shape)), e.catchall = (r) => e.clone({ ...e._zod.def, catchall: r }), e.passthrough = () => e.clone({ ...e._zod.def, catchall: gr() }), e.loose = () => e.clone({ ...e._zod.def, catchall: gr() }), e.strict = () => e.clone({ ...e._zod.def, catchall: $s() }), e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 }), e.extend = (r) => uf(e, r), e.safeExtend = (r) => cf(e, r), e.merge = (r) => df(e, r), e.pick = (r) => lf(e, r), e.omit = (r) => sf(e, r), e.partial = (...r) => ff(Es, e, r[0]), e.required = (...r) => mf(Ns, e, r[0]);
});
function Ex(e, t) {
  const r = {
    type: "object",
    shape: e ?? {},
    ...B(t)
  };
  return new hr(r);
}
function Nx(e, t) {
  return new hr({
    type: "object",
    shape: e,
    catchall: $s(),
    ...B(t)
  });
}
function zx(e, t) {
  return new hr({
    type: "object",
    shape: e,
    catchall: gr(),
    ...B(t)
  });
}
const Io = /* @__PURE__ */ P("ZodUnion", (e, t) => {
  pl.init(e, t), Oe.init(e, t), e.options = t.options;
});
function Ss(e, t) {
  return new Io({
    type: "union",
    options: e,
    ...B(t)
  });
}
const sg = /* @__PURE__ */ P("ZodDiscriminatedUnion", (e, t) => {
  Io.init(e, t), mp.init(e, t);
});
function Tx(e, t, r) {
  return new sg({
    type: "union",
    options: t,
    discriminator: e,
    ...B(r)
  });
}
const ug = /* @__PURE__ */ P("ZodIntersection", (e, t) => {
  pp.init(e, t), Oe.init(e, t);
});
function cg(e, t) {
  return new ug({
    type: "intersection",
    left: e,
    right: t
  });
}
const dg = /* @__PURE__ */ P("ZodTuple", (e, t) => {
  vl.init(e, t), Oe.init(e, t), e.rest = (r) => e.clone({
    ...e._zod.def,
    rest: r
  });
});
function fg(e, t, r) {
  const a = t instanceof Ie, n = a ? r : t, o = a ? t : null;
  return new dg({
    type: "tuple",
    items: e,
    rest: o,
    ...B(n)
  });
}
const Is = /* @__PURE__ */ P("ZodRecord", (e, t) => {
  vp.init(e, t), Oe.init(e, t), e.keyType = t.keyType, e.valueType = t.valueType;
});
function mg(e, t, r) {
  return new Is({
    type: "record",
    keyType: e,
    valueType: t,
    ...B(r)
  });
}
function Px(e, t, r) {
  const a = Kt(e);
  return a._zod.values = void 0, new Is({
    type: "record",
    keyType: a,
    valueType: t,
    ...B(r)
  });
}
const pg = /* @__PURE__ */ P("ZodMap", (e, t) => {
  gp.init(e, t), Oe.init(e, t), e.keyType = t.keyType, e.valueType = t.valueType;
});
function Ax(e, t, r) {
  return new pg({
    type: "map",
    keyType: e,
    valueType: t,
    ...B(r)
  });
}
const vg = /* @__PURE__ */ P("ZodSet", (e, t) => {
  hp.init(e, t), Oe.init(e, t), e.min = (...r) => e.check(Kr(...r)), e.nonempty = (r) => e.check(Kr(1, r)), e.max = (...r) => e.check(ho(...r)), e.size = (...r) => e.check(Rl(...r));
});
function Dx(e, t) {
  return new vg({
    type: "set",
    valueType: e,
    ...B(t)
  });
}
const Jr = /* @__PURE__ */ P("ZodEnum", (e, t) => {
  bp.init(e, t), Oe.init(e, t), e.enum = t.entries, e.options = Object.values(t.entries);
  const r = new Set(Object.keys(t.entries));
  e.extract = (a, n) => {
    const o = {};
    for (const i of a)
      if (r.has(i))
        o[i] = t.entries[i];
      else
        throw new Error(`Key ${i} not found in enum`);
    return new Jr({
      ...t,
      checks: [],
      ...B(n),
      entries: o
    });
  }, e.exclude = (a, n) => {
    const o = { ...t.entries };
    for (const i of a)
      if (r.has(i))
        delete o[i];
      else
        throw new Error(`Key ${i} not found in enum`);
    return new Jr({
      ...t,
      checks: [],
      ...B(n),
      entries: o
    });
  };
});
function xs(e, t) {
  const r = Array.isArray(e) ? Object.fromEntries(e.map((a) => [a, a])) : e;
  return new Jr({
    type: "enum",
    entries: r,
    ...B(t)
  });
}
function Cx(e, t) {
  return new Jr({
    type: "enum",
    entries: e,
    ...B(t)
  });
}
const gg = /* @__PURE__ */ P("ZodLiteral", (e, t) => {
  _p.init(e, t), Oe.init(e, t), e.values = new Set(t.values), Object.defineProperty(e, "value", {
    get() {
      if (t.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return t.values[0];
    }
  });
});
function jx(e, t) {
  return new gg({
    type: "literal",
    values: Array.isArray(e) ? e : [e],
    ...B(t)
  });
}
const hg = /* @__PURE__ */ P("ZodFile", (e, t) => {
  yp.init(e, t), Oe.init(e, t), e.min = (r, a) => e.check(Kr(r, a)), e.max = (r, a) => e.check(ho(r, a)), e.mime = (r, a) => e.check(Gl(Array.isArray(r) ? r : [r], a));
});
function Ux(e) {
  return xv(hg, e);
}
const bg = /* @__PURE__ */ P("ZodTransform", (e, t) => {
  $p.init(e, t), Oe.init(e, t), e._zod.parse = (r, a) => {
    if (a.direction === "backward")
      throw new co(e.constructor.name);
    r.addIssue = (o) => {
      if (typeof o == "string")
        r.issues.push(mr(o, r.value, t));
      else {
        const i = o;
        i.fatal && (i.continue = !1), i.code ?? (i.code = "custom"), i.input ?? (i.input = r.value), i.inst ?? (i.inst = e), r.issues.push(mr(i));
      }
    };
    const n = t.transform(r.value, r);
    return n instanceof Promise ? n.then((o) => (r.value = o, r)) : (r.value = n, r);
  };
});
function Os(e) {
  return new bg({
    type: "transform",
    transform: e
  });
}
const Es = /* @__PURE__ */ P("ZodOptional", (e, t) => {
  wp.init(e, t), Oe.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function Ja(e) {
  return new Es({
    type: "optional",
    innerType: e
  });
}
const _g = /* @__PURE__ */ P("ZodNullable", (e, t) => {
  kp.init(e, t), Oe.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function Ya(e) {
  return new _g({
    type: "nullable",
    innerType: e
  });
}
function Lx(e) {
  return Ja(Ya(e));
}
const xo = /* @__PURE__ */ P("ZodDefault", (e, t) => {
  Sp.init(e, t), Oe.init(e, t), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function yg(e, t) {
  return new xo({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : mo(t);
    }
  });
}
const $g = /* @__PURE__ */ P("ZodPrefault", (e, t) => {
  Ip.init(e, t), Oe.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function wg(e, t) {
  return new $g({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : mo(t);
    }
  });
}
const Ns = /* @__PURE__ */ P("ZodNonOptional", (e, t) => {
  xp.init(e, t), Oe.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function kg(e, t) {
  return new Ns({
    type: "nonoptional",
    innerType: e,
    ...B(t)
  });
}
const Sg = /* @__PURE__ */ P("ZodSuccess", (e, t) => {
  Op.init(e, t), Oe.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function Rx(e) {
  return new Sg({
    type: "success",
    innerType: e
  });
}
const Ig = /* @__PURE__ */ P("ZodCatch", (e, t) => {
  Ep.init(e, t), Oe.init(e, t), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function xg(e, t) {
  return new Ig({
    type: "catch",
    innerType: e,
    catchValue: typeof t == "function" ? t : () => t
  });
}
const Og = /* @__PURE__ */ P("ZodNaN", (e, t) => {
  Np.init(e, t), Oe.init(e, t);
});
function Vx(e) {
  return _v(Og, e);
}
const zs = /* @__PURE__ */ P("ZodPipe", (e, t) => {
  zp.init(e, t), Oe.init(e, t), e.in = t.in, e.out = t.out;
});
function qa(e, t) {
  return new zs({
    type: "pipe",
    in: e,
    out: t
    // ...util.normalizeParams(params),
  });
}
const Ts = /* @__PURE__ */ P("ZodCodec", (e, t) => {
  zs.init(e, t), gl.init(e, t);
});
function Fx(e, t, r) {
  return new Ts({
    type: "pipe",
    in: e,
    out: t,
    transform: r.decode,
    reverseTransform: r.encode
  });
}
const Eg = /* @__PURE__ */ P("ZodReadonly", (e, t) => {
  Tp.init(e, t), Oe.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function Ng(e) {
  return new Eg({
    type: "readonly",
    innerType: e
  });
}
const zg = /* @__PURE__ */ P("ZodTemplateLiteral", (e, t) => {
  Pp.init(e, t), Oe.init(e, t);
});
function Mx(e, t) {
  return new zg({
    type: "template_literal",
    parts: e,
    ...B(t)
  });
}
const Tg = /* @__PURE__ */ P("ZodLazy", (e, t) => {
  Cp.init(e, t), Oe.init(e, t), e.unwrap = () => e._zod.def.getter();
});
function Pg(e) {
  return new Tg({
    type: "lazy",
    getter: e
  });
}
const Ag = /* @__PURE__ */ P("ZodPromise", (e, t) => {
  Dp.init(e, t), Oe.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function Bx(e) {
  return new Ag({
    type: "promise",
    innerType: e
  });
}
const Dg = /* @__PURE__ */ P("ZodFunction", (e, t) => {
  Ap.init(e, t), Oe.init(e, t);
});
function oc(e) {
  return new Dg({
    type: "function",
    input: Array.isArray(e?.input) ? fg(e?.input) : e?.input ?? So(gr()),
    output: e?.output ?? gr()
  });
}
const Oo = /* @__PURE__ */ P("ZodCustom", (e, t) => {
  jp.init(e, t), Oe.init(e, t);
});
function Zx(e) {
  const t = new et({
    check: "custom"
    // ...util.normalizeParams(params),
  });
  return t._zod.check = e, t;
}
function Wx(e, t) {
  return Ov(Oo, e ?? (() => !0), t);
}
function Cg(e, t = {}) {
  return Ev(Oo, e, t);
}
function jg(e) {
  return Nv(e);
}
const Gx = Tv, Hx = Pv;
function Kx(e, t = {
  error: `Input not instance of ${e.name}`
}) {
  const r = new Oo({
    type: "custom",
    check: "custom",
    fn: (a) => a instanceof e,
    abort: !0,
    ...B(t)
  });
  return r._zod.bag.Class = e, r;
}
const Jx = (...e) => Av({
  Codec: Ts,
  Boolean: wo,
  String: ca
}, ...e);
function Yx(e) {
  const t = Pg(() => Ss([pi(e), Qv(), eg(), rg(), So(t), mg(pi(), t)]));
  return t;
}
function qx(e, t) {
  return qa(Os(e), t);
}
const Xx = {
  invalid_type: "invalid_type",
  too_big: "too_big",
  too_small: "too_small",
  invalid_format: "invalid_format",
  not_multiple_of: "not_multiple_of",
  unrecognized_keys: "unrecognized_keys",
  invalid_union: "invalid_union",
  invalid_key: "invalid_key",
  invalid_element: "invalid_element",
  invalid_value: "invalid_value",
  custom: "custom"
};
function Qx(e) {
  Tt({
    customError: e
  });
}
function eO() {
  return Tt().customError;
}
var Yr;
Yr || (Yr = {});
function tO(e) {
  return Zp(ca, e);
}
function nO(e) {
  return Xp($o, e);
}
function rO(e) {
  return ov(wo, e);
}
function aO(e) {
  return lv(ko, e);
}
function oO(e) {
  return bv(ws, e);
}
const iO = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  bigint: aO,
  boolean: rO,
  date: oO,
  number: nO,
  string: tO
}, Symbol.toStringTag, { value: "Module" }));
Tt(Up());
const ic = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $brand: Xd,
  $input: Mp,
  $output: Fp,
  NEVER: qd,
  TimePrecision: Gp,
  ZodAny: ag,
  ZodArray: ks,
  ZodBase64: vs,
  ZodBase64URL: gs,
  ZodBigInt: ko,
  ZodBigIntFormat: _s,
  ZodBoolean: wo,
  ZodCIDRv4: ms,
  ZodCIDRv6: ps,
  ZodCUID: is,
  ZodCUID2: ls,
  ZodCatch: Ig,
  ZodCodec: Ts,
  ZodCustom: Oo,
  ZodCustomStringFormat: da,
  ZodDate: ws,
  ZodDefault: xo,
  ZodDiscriminatedUnion: sg,
  ZodE164: hs,
  ZodEmail: rs,
  ZodEmoji: as,
  ZodEnum: Jr,
  ZodError: VI,
  ZodFile: hg,
  get ZodFirstPartyTypeKind() {
    return Yr;
  },
  ZodFunction: Dg,
  ZodGUID: Ka,
  ZodIPv4: ds,
  ZodIPv6: fs,
  ZodISODate: Ql,
  ZodISODateTime: Xl,
  ZodISODuration: ts,
  ZodISOTime: es,
  ZodIntersection: ug,
  ZodIssueCode: Xx,
  ZodJWT: bs,
  ZodKSUID: cs,
  ZodLazy: Tg,
  ZodLiteral: gg,
  ZodMAC: Xv,
  ZodMap: pg,
  ZodNaN: Og,
  ZodNanoID: os,
  ZodNever: ig,
  ZodNonOptional: Ns,
  ZodNull: ys,
  ZodNullable: _g,
  ZodNumber: $o,
  ZodNumberFormat: Sr,
  ZodObject: hr,
  ZodOptional: Es,
  ZodPipe: zs,
  ZodPrefault: $g,
  ZodPromise: Ag,
  ZodReadonly: Eg,
  ZodRealError: Wt,
  ZodRecord: Is,
  ZodSet: vg,
  ZodString: ca,
  ZodStringFormat: Be,
  ZodSuccess: Sg,
  ZodSymbol: tg,
  ZodTemplateLiteral: zg,
  ZodTransform: bg,
  ZodTuple: dg,
  ZodType: Oe,
  ZodULID: ss,
  ZodURL: yo,
  ZodUUID: wn,
  ZodUndefined: ng,
  ZodUnion: Io,
  ZodUnknown: og,
  ZodVoid: lg,
  ZodXID: us,
  _ZodString: ns,
  _default: yg,
  _function: oc,
  any: Sx,
  array: So,
  base64: lx,
  base64url: sx,
  bigint: _x,
  boolean: eg,
  catch: xg,
  check: Zx,
  cidrv4: ox,
  cidrv6: ix,
  clone: Kt,
  codec: Fx,
  coerce: iO,
  config: Tt,
  core: LI,
  cuid: qI,
  cuid2: XI,
  custom: Wx,
  date: xx,
  decode: Wv,
  decodeAsync: Hv,
  describe: Gx,
  discriminatedUnion: Tx,
  e164: ux,
  email: FI,
  emoji: JI,
  encode: Zv,
  encodeAsync: Gv,
  endsWith: Wl,
  enum: xs,
  file: Ux,
  flattenError: Yi,
  float32: vx,
  float64: gx,
  formatError: qi,
  function: oc,
  getErrorMap: eO,
  globalRegistry: Qt,
  gt: tr,
  gte: Ft,
  guid: MI,
  hash: px,
  hex: mx,
  hostname: fx,
  httpUrl: KI,
  includes: Bl,
  instanceof: Kx,
  int: vi,
  int32: hx,
  int64: yx,
  intersection: cg,
  ipv4: nx,
  ipv6: ax,
  iso: RI,
  json: Yx,
  jwt: cx,
  keyof: Ox,
  ksuid: tx,
  lazy: Pg,
  length: _o,
  literal: jx,
  locales: Vp,
  looseObject: zx,
  lowercase: Fl,
  lt: er,
  lte: nn,
  mac: rx,
  map: Ax,
  maxLength: bo,
  maxSize: ho,
  meta: Hx,
  mime: Gl,
  minLength: vr,
  minSize: Kr,
  multipleOf: Hr,
  nan: Vx,
  nanoid: YI,
  nativeEnum: Cx,
  negative: $v,
  never: $s,
  nonnegative: kv,
  nonoptional: kg,
  nonpositive: wv,
  normalize: Hl,
  null: rg,
  nullable: Ya,
  nullish: Lx,
  number: Qv,
  object: Ex,
  optional: Ja,
  overwrite: Ln,
  parse: Vv,
  parseAsync: Fv,
  partialRecord: Px,
  pipe: qa,
  positive: yv,
  prefault: wg,
  preprocess: qx,
  prettifyError: yf,
  promise: Bx,
  property: Sv,
  readonly: Ng,
  record: mg,
  refine: Cg,
  regex: Vl,
  regexes: ll,
  registry: bl,
  safeDecode: Jv,
  safeDecodeAsync: qv,
  safeEncode: Kv,
  safeEncodeAsync: Yv,
  safeParse: Mv,
  safeParseAsync: Bv,
  set: Dx,
  setErrorMap: Qx,
  size: Rl,
  slugify: ql,
  startsWith: Zl,
  strictObject: Nx,
  string: pi,
  stringFormat: dx,
  stringbool: Jx,
  success: Rx,
  superRefine: jg,
  symbol: wx,
  templateLiteral: Mx,
  toJSONSchema: Dv,
  toLowerCase: Jl,
  toUpperCase: Yl,
  transform: Os,
  treeifyError: bf,
  trim: Kl,
  tuple: fg,
  uint32: bx,
  uint64: $x,
  ulid: QI,
  undefined: kx,
  union: Ss,
  unknown: gr,
  uppercase: Ml,
  url: HI,
  util: gf,
  uuid: BI,
  uuidv4: ZI,
  uuidv6: WI,
  uuidv7: GI,
  void: Ix,
  xid: ex
}, Symbol.toStringTag, { value: "Module" }));
function lc(e, t, r, a = !1, n) {
  kn(e, "keydown", (o) => {
    ["Space", "Enter"].includes(o.code) && document.activeElement?.matches(t) && (o.preventDefault(), r(document.activeElement, o));
  }), kn(e, "click", (o) => {
    const i = o.target.closest(
      t
    );
    i && (a && (o.stopPropagation(), o.stopImmediatePropagation()), o.preventDefault(), r(i, o));
  });
}
function lO(e, t, r, a, n) {
  const o = e.includes(r), i = t.indexOf(r), l = t.indexOf(a), u = i < l ? t.slice(i, l + 1) : t.slice(l, i);
  return o ? B$([...e, ...u]) : e.filter((c) => !u.includes(c));
}
function sO(e, t, r) {
  let a = null;
  const n = /* @__PURE__ */ s$("Shift");
  Ue(
    () => e.value,
    (o, i) => {
      const l = o.length > i.length ? mu(o, i, r) : mu(i, o, r);
      if (l.length === 1) {
        const u = l[0];
        n.value && a && (e.value = lO(
          e.value,
          t.value,
          a,
          u
        )), a = u;
      }
    }
  );
}
function sc(e) {
  const t = e.shape, r = {};
  for (const a in t) {
    const n = t[a], o = n._def.typeName === "ZodOptional", i = n._def.innerType || n;
    let l = n;
    if (i instanceof Io) {
      const c = i._def.options.filter(
        (d) => !(d instanceof ys)
      );
      c.length === 1 && (l = c[0].optional());
    }
    l instanceof ca && l._def?.checks?.[0] && l._def.checks[0].kind === "datetime" && (l = ic.date()), o && (l = l.optional()), r[a] = l;
  }
  return ic.object(r);
}
const Ug = /* @__PURE__ */ D({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = He(e, t);
    return (o, i) => (g(), A(s(cb), K({ "data-slot": "dropdown-menu" }, s(n)), {
      default: h(() => [
        j(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), uO = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, cO = /* @__PURE__ */ D({
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
    const r = e, a = t, n = ve(r, "class"), o = He(n, a);
    return (i, l) => (g(), A(s(db), K({ "data-slot": "dropdown-menu-checkbox-item" }, s(o), {
      class: s(G)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        r.class
      )
    }), {
      default: h(() => [
        ie("span", uO, [
          w(s(fb), null, {
            default: h(() => [
              w(s(ao), { class: "size-4" })
            ]),
            _: 1
          })
        ]),
        j(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Lg = /* @__PURE__ */ D({
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
    const r = e, a = t, n = ve(r, "class"), o = He(n, a);
    return (i, l) => (g(), A(s(mb), null, {
      default: h(() => [
        w(s(pb), K({ "data-slot": "dropdown-menu-content" }, s(o), {
          class: s(G)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--reka-dropdown-menu-content-available-height) min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", r.class)
        }), {
          default: h(() => [
            j(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Oa = /* @__PURE__ */ D({
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
    const t = e, r = ve(t, "inset", "variant", "class"), a = Qe(r);
    return (n, o) => (g(), A(s(vb), K({
      "data-slot": "dropdown-menu-item",
      "data-inset": e.inset ? "" : void 0,
      "data-variant": e.variant
    }, s(a), {
      class: s(G)("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive-foreground data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/40 data-[variant=destructive]:focus:text-destructive-foreground data-[variant=destructive]:*:[svg]:!text-destructive-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", t.class)
    }), {
      default: h(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "data-variant", "class"]));
  }
}), dO = /* @__PURE__ */ D({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(e) {
    const t = e, r = ve(t, "class", "inset"), a = Qe(r);
    return (n, o) => (g(), A(s(gb), K({
      "data-slot": "dropdown-menu-label",
      "data-inset": e.inset ? "" : void 0
    }, s(a), {
      class: s(G)("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", t.class)
    }), {
      default: h(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), Rg = /* @__PURE__ */ D({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const r = Qe(e);
    return (a, n) => (g(), A(s(hb), K({ "data-slot": "dropdown-menu-trigger" }, s(r)), {
      default: h(() => [
        j(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fO = /* @__PURE__ */ D({
  __name: "DataTableColumnHeader",
  props: {
    title: {},
    sortable: { type: Boolean, default: !1 },
    sortOrder: {},
    hideable: { type: Boolean, default: !0 }
  },
  emits: ["sort", "hide"],
  setup(e, { emit: t }) {
    const r = e, a = t, n = W(() => r.sortOrder ? r.sortOrder === "asc" ? Ws : Zs : p_);
    function o(l) {
      a("sort", l);
    }
    function i() {
      a("hide");
    }
    return (l, u) => !e.sortable && !e.hideable ? (g(), F("div", {
      key: 0,
      class: be(s(G)("flex items-center space-x-2"))
    }, [
      ie("span", null, oe(e.title), 1)
    ], 2)) : (g(), F("div", {
      key: 1,
      class: be(s(G)("flex items-center space-x-2"))
    }, [
      w(s(Ug), null, {
        default: h(() => [
          w(s(Rg), { "as-child": "" }, {
            default: h(() => [
              w(s(pt), {
                variant: "ghost",
                size: "sm",
                class: "-ml-3 h-8 data-[state=open]:bg-accent text-muted-foreground text-xs font-normal"
              }, {
                default: h(() => [
                  ie("span", null, oe(e.title), 1),
                  e.sortable ? (g(), A(mt(n.value), {
                    key: 0,
                    class: "ml-2 !h-3.5 !w-3.5"
                  })) : pe("", !0)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          w(s(Lg), { align: "start" }, {
            default: h(() => [
              e.sortable ? (g(), F(je, { key: 0 }, [
                w(s(Oa), {
                  onClick: u[0] || (u[0] = (c) => o("asc"))
                }, {
                  default: h(() => [
                    w(s(Ws), { class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                    u[3] || (u[3] = he(" Asc ", -1))
                  ]),
                  _: 1
                }),
                w(s(Oa), {
                  onClick: u[1] || (u[1] = (c) => o("desc"))
                }, {
                  default: h(() => [
                    w(s(Zs), { class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                    u[4] || (u[4] = he(" Desc ", -1))
                  ]),
                  _: 1
                }),
                e.sortOrder ? (g(), A(s(Oa), {
                  key: 0,
                  onClick: u[2] || (u[2] = (c) => o(void 0))
                }, {
                  default: h(() => [
                    w(s(d_), { class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                    u[5] || (u[5] = he(" Clear sort ", -1))
                  ]),
                  _: 1
                })) : pe("", !0)
              ], 64)) : pe("", !0),
              e.sortable && e.hideable ? (g(), A(s(Zi), { key: 1 })) : pe("", !0),
              e.hideable ? (g(), A(s(Oa), {
                key: 2,
                onClick: i
              }, {
                default: h(() => [
                  w(s(g_), { class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                  u[6] || (u[6] = he(" Hide ", -1))
                ]),
                _: 1
              })) : pe("", !0)
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ], 2));
  }
}), mO = /* @__PURE__ */ D({
  __name: "DataTableViewOptions",
  props: {
    columns: {},
    visibleColumns: {}
  },
  emits: ["update:visibleColumns"],
  setup(e, { emit: t }) {
    const r = e, a = t, n = W(
      () => r.columns.filter((u) => u.title && u.hideable !== !1)
    ), o = W(() => !r.visibleColumns || r.visibleColumns.length === 0 ? r.columns.map((u) => u.id) : r.visibleColumns);
    function i(u) {
      return o.value.includes(u);
    }
    function l(u, c) {
      const d = o.value;
      (typeof c == "boolean" ? c : !1) ? d.includes(u) || a("update:visibleColumns", [...d, u]) : a("update:visibleColumns", d.filter((m) => m !== u));
    }
    return (u, c) => (g(), A(s(Ug), null, {
      default: h(() => [
        w(s(Rg), { "as-child": "" }, {
          default: h(() => [
            w(s(pt), {
              variant: "outline",
              size: "sm",
              class: "ml-auto h-8"
            }, {
              default: h(() => [
                w(s(y_), { class: "mr-2 h-4 w-4" }),
                c[0] || (c[0] = he(" View ", -1))
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        w(s(Lg), {
          align: "end",
          class: "w-[150px]"
        }, {
          default: h(() => [
            w(s(dO), null, {
              default: h(() => [...c[1] || (c[1] = [
                he("Toggle columns", -1)
              ])]),
              _: 1
            }),
            w(s(Zi)),
            (g(!0), F(je, null, Ge(n.value, (d) => (g(), A(s(cO), {
              key: d.id,
              "model-value": i(d.id),
              "onUpdate:modelValue": (f) => l(d.id, f)
            }, {
              default: h(() => [
                he(oe(d.title), 1)
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
}), pO = { class: "flex flex-col flex-1 min-w-0 min-h-0 relative" }, vO = {
  key: 0,
  class: "flex items-center justify-end py-2"
}, gO = {
  key: 0,
  class: "absolute inset-0 bg-background/80 backdrop-blur-sm z-10 flex items-center justify-center rounded-md"
}, hO = { class: "flex flex-col items-center gap-2" }, bO = { class: "text-sm text-muted-foreground" }, _O = { class: "[&>tbody>tr:hover]:bg-muted h-1 [&_tr]:border-b [&_th,&_td]:px-2 [&_th,&_td]:py-1 [&_tbody_tr:last-child]:border-b-0 min-h-0 w-full [&_.p-datatable-empty-message]:!bg-transparent [&_.p-datatable-paginator-bottom]:sticky [&_.p-datatable-paginator-bottom]:bottom-0 [&_.p-paginator]:justify-start [&_.p-paginator]:pt-3 [&_.p-paginator]:pb-6 [&_th]:!text-sm [&_tr>*:first-child]:pl-6 [&_tr>*:last-child]:pr-6" }, yO = { class: "text-left" }, $O = {
  key: 0,
  class: "!w-6 !pr-0"
}, wO = {
  key: 1,
  class: "!w-6"
}, kO = { key: 2 }, SO = { class: "[&_[data-state=selected]]:bg-muted/50" }, IO = { class: "bg-muted/50 hover:bg-muted/70" }, xO = ["colspan"], OO = { class: "flex items-center gap-2" }, EO = { class: "text-sm" }, NO = ["data-state", "data-row-id"], zO = {
  key: 0,
  class: "!w-6 !pr-0"
}, TO = {
  key: 1,
  class: "!w-6 !pr-0"
}, PO = ["data-col-id", "tabindex"], AO = { key: 2 }, DO = { class: "flex items-center gap-0.5" }, CO = {
  key: 0,
  class: "hover:!bg-transparent"
}, jO = ["colspan"], UO = { class: "p-4" }, LO = ["data-state", "data-row-id"], RO = {
  key: 0,
  class: "!w-6 !pr-0"
}, VO = {
  key: 1,
  class: "!w-6 !pr-0"
}, FO = ["data-col-id", "tabindex"], MO = { class: "flex items-center gap-0.5" }, BO = {
  key: 0,
  class: "hover:!bg-transparent"
}, ZO = ["colspan"], WO = { class: "p-4" }, GO = ["colspan"], HO = {
  key: 1,
  class: "@container sticky bottom-0 right-0 w-full gap-2 flex items-center bg-background px-0 py-3 z-10 transition-[left] duration-200 ease-linear"
}, KO = { key: 0 }, JO = { class: "flex gap-2 items-center min-w-0" }, YO = { class: "text-sm mr-2 line-clamp-1 min-w-0 text-muted-foreground" }, qO = { key: 1 }, XO = { class: "text-sm line-clamp-1 text-muted-foreground" }, QO = {
  key: 2,
  class: "flex flex-1 justify-end items-center gap-4"
}, wT = /* @__PURE__ */ D({
  __name: "DataTable",
  props: /* @__PURE__ */ vt({
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
    translatableConfig: {},
    pageSizeOptions: { default: () => [25, 50, 100, 250, 500] },
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
    sortByModifiers: {},
    selected: { default: () => [] },
    selectedModifiers: {}
  }),
  emits: /* @__PURE__ */ vt(["clickRow"], ["update:visibleColumns", "update:itemsPerPage", "update:page", "update:sortBy", "update:selected"]),
  setup(e, { expose: t, emit: r }) {
    const a = r, { t: n } = jn(), o = W(() => qo(e.columns, (fe) => fe.id)), i = W(() => qo(e.items, (fe) => fe.id)), l = ft(e, "visibleColumns"), u = ft(e, "itemsPerPage"), c = ft(e, "page"), d = ft(e, "sortBy"), f = ft(e, "selected"), m = W(() => e.items && e.items.length > 0);
    Ue(u, () => {
      c.value && c.value > 1 && (c.value = 1);
    });
    function p(fe) {
      !d.value || d.value.key !== fe ? d.value = { key: fe, order: "asc" } : d.value.key === fe && (d.value.order === "asc" ? d.value = { key: fe, order: "desc" } : d.value = void 0);
    }
    const v = Eh("container"), _ = Ok(v, '[data-slot="table-container"]'), k = Nk(_);
    lc(v, "[data-col-id]", (fe) => {
      const X = fe.getAttribute("data-col-id"), ae = fe.closest("tr")?.getAttribute("data-row-id");
      if (!X || !ae)
        return;
      const V = o.value[X], te = i.value[ae];
      V && te && V.onClick?.(te);
    }), lc(v, "[data-row-id]", (fe) => {
      const X = fe.getAttribute("data-row-id");
      X && a("clickRow", X);
    });
    const $ = W(() => e.items), { stateMap: y, toggle: x, toggleAll: I, allToggledState: E, clear: N } = uc($, "id", e.storagekey, f);
    sO(
      f,
      W(() => e.items.map((fe) => fe.id))
    ), Ek(() => (N(), !0), W(() => f.value.length > 0)), Ue(c, () => N());
    const { stateMap: O, toggle: C, allToggledState: U, toggleAll: Q } = uc($, "id", e.storagekey), re = W(() => l.value ? e.columns.filter((fe) => l.value?.includes(fe.id)) : e.columns), ne = W(() => re.value.length + (e.selectMode === "multiselect" ? 1 : 0) + (e.hasActionsColumn ? 1 : 0) + (e.expandable ? 1 : 0));
    return t({ selected: f, clearSelected: N }), (fe, X) => {
      const ae = Nh("tooltip");
      return g(), F("div", pO, [
        e.showOptions ? (g(), F("div", vO, [
          j(fe.$slots, "header"),
          w(mO, {
            columns: e.columns,
            "visible-columns": l.value,
            "onUpdate:visibleColumns": X[0] || (X[0] = (V) => l.value = V)
          }, null, 8, ["columns", "visible-columns"])
        ])) : pe("", !0),
        ie("div", {
          ref: "container",
          class: be(["min-w-0 min-h-0 relative flex flex-col", { "[&_td:first-child]:!w-0 [&_th:first-child]:!w-0": e.selectMode === "multiselect", "[&_td:last-child]:!w-0 [&_th:last-child]:!w-0": e.hasActionsColumn }])
        }, [
          e.isPending ? (g(), F("div", gO, [
            ie("div", hO, [
              w(s(h_), { class: "h-8 w-8 animate-spin text-muted-foreground" }),
              ie("span", bO, oe(s(n)("dataTable.loading") || "Loading..."), 1)
            ])
          ])) : pe("", !0),
          ie("div", {
            class: be(["flex-1 flex flex-col min-h-0", { "!rounded-md border": e.bordered }])
          }, [
            ie("table", _O, [
              ie("thead", yO, [
                ie("tr", null, [
                  e.expandable ? (g(), F("th", $O, [
                    $i((g(), A(pt, {
                      variant: "outline",
                      size: "sm",
                      class: "[&:not(:hover)]:opacity-0",
                      onClick: X[1] || (X[1] = (V) => s(Q)())
                    }, {
                      default: h(() => [
                        (g(), A(mt(s(U) ? s(Gn) : s(Hn))))
                      ]),
                      _: 1
                    })), [
                      [ae, "Toggle collapse"]
                    ])
                  ])) : pe("", !0),
                  e.selectMode === "multiselect" ? (g(), F("th", wO, [
                    w(s(Da), {
                      "model-value": s(E),
                      "onUpdate:modelValue": X[2] || (X[2] = () => s(I)())
                    }, null, 8, ["model-value"])
                  ])) : pe("", !0),
                  (g(!0), F(je, null, Ge(re.value, (V) => (g(), F("th", {
                    key: V.id
                  }, [
                    w(fO, {
                      title: V.title ?? s(G$)(V.id),
                      sortable: e.sortable && V.sortable,
                      "sort-order": d.value?.key === V.id ? d.value.order : void 0,
                      hideable: V.hideable ?? !0,
                      onSort: (te) => te ? p(V.id) : d.value = void 0,
                      onHide: () => l.value = l.value?.filter((te) => te !== V.id)
                    }, null, 8, ["title", "sortable", "sort-order", "hideable", "onSort", "onHide"])
                  ]))), 128)),
                  e.hasActionsColumn ? (g(), F("th", kO)) : pe("", !0)
                ])
              ]),
              ie("tbody", SO, [
                e.isGrouped ? (g(!0), F(je, { key: 0 }, Ge(e.groups, (V, te) => (g(), F(je, { key: te }, [
                  ie("tr", IO, [
                    ie("td", {
                      colspan: ne.value,
                      class: "font-medium"
                    }, [
                      ie("div", OO, [
                        ie("span", EO, oe(e.groupByField) + ": " + oe(te || "(No value)"), 1),
                        w(s(bk), {
                          variant: "secondary",
                          class: "ml-2"
                        }, {
                          default: h(() => [
                            he(oe(V.length), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ])
                    ], 8, xO)
                  ]),
                  (g(!0), F(je, null, Ge(V, (J) => (g(), F(je, {
                    key: J.id
                  }, [
                    ie("tr", {
                      "data-state": (s(y)[J.id] || e.highlightedRow === J.id) && "selected",
                      "data-row-id": J.id
                    }, [
                      e.expandable ? (g(), F("td", zO, [
                        w(pt, {
                          size: "sm",
                          variant: "ghost",
                          class: "h-6 w-6 p-0 -mr-1",
                          onClick: (Ce) => s(C)(J[e.idcol])
                        }, {
                          default: h(() => [
                            (g(), A(mt(s(O)[J[e.idcol]] ? s(Gn) : s(Hn)), { class: "h-4 w-4" }))
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ])) : pe("", !0),
                      e.selectMode === "multiselect" ? (g(), F("td", TO, [
                        w(s(Da), {
                          "model-value": f.value.includes(J.id),
                          "onUpdate:modelValue": (Ce) => s(x)(J.id)
                        }, null, 8, ["model-value", "onUpdate:modelValue"])
                      ])) : pe("", !0),
                      (g(!0), F(je, null, Ge(re.value, (Ce) => (g(), F("td", {
                        key: Ce.id,
                        "data-col-id": Ce.id,
                        tabindex: Ce.onClick ? 0 : -1,
                        class: be(Ce.cssClass)
                      }, [
                        j(fe.$slots, `cell:${String(Ce.id)}`, {
                          item: J,
                          value: J[Ce.id],
                          expanded: s(O)[J[e.idcol]]
                        }, () => [
                          he(oe(J[Ce.id]), 1)
                        ])
                      ], 10, PO))), 128)),
                      e.hasActionsColumn ? (g(), F("td", AO, [
                        ie("div", DO, [
                          j(fe.$slots, "cell:actions", { item: J })
                        ])
                      ])) : pe("", !0)
                    ], 8, NO),
                    e.expandable && s(O)[J[e.idcol]] ? (g(), F("tr", CO, [
                      ie("td", {
                        colspan: ne.value,
                        class: "bg-muted/30 p-0 [&_thead>tr:hover]:bg-transparent [&_th]:h-7 [&_td]:py-0.5"
                      }, [
                        j(fe.$slots, "expanded-row", { item: J }, () => [
                          ie("div", UO, oe(s(n)("dataTable.expandedContent", { id: J[e.idcol] })), 1)
                        ])
                      ], 8, jO)
                    ])) : pe("", !0)
                  ], 64))), 128))
                ], 64))), 128)) : (g(!0), F(je, { key: 1 }, Ge(e.items, (V) => (g(), F(je, {
                  key: V.id
                }, [
                  ie("tr", {
                    "data-state": (s(y)[V.id] || e.highlightedRow === V[e.idcol]) && "selected",
                    "data-row-id": V.id
                  }, [
                    e.expandable ? (g(), F("td", RO, [
                      w(pt, {
                        size: "sm",
                        variant: "ghost",
                        class: "h-6 w-6 p-0 -mr-1",
                        onClick: (te) => s(C)(V[e.idcol])
                      }, {
                        default: h(() => [
                          (g(), A(mt(s(O)[V[e.idcol]] ? s(Gn) : s(Hn)), { class: "h-4 w-4" }))
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ])) : pe("", !0),
                    e.selectMode === "multiselect" ? (g(), F("td", VO, [
                      w(s(Da), {
                        "model-value": f.value.includes(V.id),
                        "onUpdate:modelValue": (te) => s(x)(V.id)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ])) : pe("", !0),
                    (g(!0), F(je, null, Ge(re.value, (te) => (g(), F("td", {
                      key: te.id,
                      "data-col-id": te.id,
                      tabindex: te.onClick ? 0 : -1,
                      class: be(te.cssClass)
                    }, [
                      j(fe.$slots, `cell:${String(te.id)}`, {
                        item: V,
                        value: V[te.id],
                        expanded: s(O)[V[e.idcol]]
                      }, () => [
                        he(oe(V[te.id]), 1)
                      ])
                    ], 10, FO))), 128)),
                    e.hasActionsColumn ? (g(), F("td", {
                      key: 2,
                      class: be(["sticky right-0", { "bg-background/90  [[data-state=selected]_&]:bg-muted/90 ": !s(k).right }])
                    }, [
                      ie("div", MO, [
                        j(fe.$slots, "cell:actions", { item: V })
                      ])
                    ], 2)) : pe("", !0)
                  ], 8, LO),
                  e.expandable && s(O)[V[e.idcol]] ? (g(), F("tr", BO, [
                    ie("td", {
                      colspan: ne.value,
                      class: "bg-muted/30 p-0 [&_thead>tr:hover]:bg-transparent [&_th]:h-7 [&_td]:py-0.5"
                    }, [
                      j(fe.$slots, "expanded-row", { item: V }, () => [
                        ie("div", WO, oe(s(n)("dataTable.expandedContent", { id: V[e.idcol] })), 1)
                      ])
                    ], 8, ZO)
                  ])) : pe("", !0)
                ], 64))), 128)),
                m.value ? pe("", !0) : (g(), F("td", {
                  key: 2,
                  colspan: ne.value
                }, [
                  w(s(_k), null, {
                    default: h(() => [
                      w(s(wk), null, {
                        default: h(() => [
                          w(s(Sk), { variant: "icon" }, {
                            default: h(() => [
                              w(s(Gc))
                            ]),
                            _: 1
                          }),
                          w(s(xk), null, {
                            default: h(() => [
                              he(oe(s(n)("dataTable.noEntriesFound")), 1)
                            ]),
                            _: 1
                          }),
                          w(s($k), null, {
                            default: h(() => [
                              he(oe(s(n)("dataTable.noEntriesFoundDescription")), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      w(s(yk))
                    ]),
                    _: 1
                  })
                ], 8, GO))
              ])
            ])
          ], 2)
        ], 2),
        e.total && e.total > 0 ? (g(), F("div", HO, [
          e.selectMode === "multiselect" && f.value.length > 0 ? (g(), F("div", KO, [
            ie("div", JO, [
              ie("span", YO, oe(s(n)("dataTable.elementsSelected", {
                count: f.value.length,
                total: e.items.length
              })), 1),
              f.value.length > 0 ? j(fe.$slots, "bulk", {
                key: 0,
                selected: f.value
              }) : pe("", !0)
            ])
          ])) : f.value.length === 0 && e.total !== void 0 ? (g(), F("div", qO, [
            ie("span", XO, oe(s(n)("dataTable.totalElements", { total: e.total })), 1)
          ])) : pe("", !0),
          e.total !== void 0 ? (g(), F("div", QO, [
            w(hk, {
              page: c.value,
              "onUpdate:page": X[3] || (X[3] = (V) => c.value = V),
              "items-per-page": u.value,
              "onUpdate:itemsPerPage": X[4] || (X[4] = (V) => u.value = V),
              "page-size-options": e.pageSizeOptions,
              "hide-items-per-page": f.value.length > 0 || e.pageSizeOptions.length < 2,
              total: e.total,
              disabled: e.isPending
            }, null, 8, ["page", "items-per-page", "page-size-options", "hide-items-per-page", "total", "disabled"])
          ])) : pe("", !0)
        ])) : pe("", !0)
      ]);
    };
  }
});
function uc(e, t, r, a) {
  const n = a || (r ? u$(r, []) : me([])), o = W(
    () => Object.fromEntries(n.value.map((f) => [f, !0]))
  ), i = (f) => n.value = Z$(n.value, f), l = W(
    () => n.value.length > 0 ? n.value?.length === e.value.length ? !0 : "indeterminate" : !1
  );
  function u() {
    n.value = [];
  }
  function c() {
    n.value = e.value.map((f) => f[t]);
  }
  return {
    state: n,
    stateMap: o,
    toggle: i,
    allToggledState: l,
    toggleAll: () => l.value === !1 || l.value === "indeterminate" ? c() : u(),
    clear: u
  };
}
const eE = ["datetime", "title"], kT = /* @__PURE__ */ D({
  __name: "DateFormat",
  props: {
    date: {},
    format: { default: "DD.MM.YYYY HH:mm" },
    relative: { type: Boolean, default: !1 },
    locale: { default: "de-DE" }
  },
  setup(e) {
    const t = e, r = {
      "date.daysAgo": "{count} days ago",
      "date.hoursAgo": "{count} hours ago",
      "date.minutesAgo": "{count} minutes ago",
      "date.justNow": "Just now"
    };
    function a(u, c) {
      let d = r[u] || u;
      return c && Object.entries(c).forEach(([f, m]) => {
        d = d.replace(`{${f}}`, String(m));
      }), d;
    }
    const n = W(() => t.date instanceof Date ? t.date : typeof t.date == "string" || typeof t.date == "number" ? new Date(t.date) : /* @__PURE__ */ new Date()), o = /* @__PURE__ */ Wy(n, t.format, {
      locales: t.locale
    }), i = W(() => {
      if (!t.relative)
        return null;
      const c = (/* @__PURE__ */ new Date()).getTime() - n.value.getTime(), d = Math.floor(c / 1e3), f = Math.floor(d / 60), m = Math.floor(f / 60), p = Math.floor(m / 24);
      return p > 0 ? a("date.daysAgo", { count: p }) : m > 0 ? a("date.hoursAgo", { count: m }) : f > 0 ? a("date.minutesAgo", { count: f }) : a("date.justNow");
    }), l = W(() => t.relative ? i.value : o.value);
    return (u, c) => (g(), F("time", {
      datetime: n.value.toISOString(),
      title: t.relative ? s(o) : void 0,
      class: "whitespace-nowrap"
    }, oe(l.value), 9, eE));
  }
}), tE = { class: "min-w-0 line-clamp-1 break-spaces text-left whitespace-normal space-x-1" }, nE = { class: "text-muted-foreground" }, rE = { class: "font-semibold" }, aE = {
  key: 1,
  class: "text-muted-foreground"
}, cc = /* @__PURE__ */ D({
  __name: "DisplayGraduated",
  props: {
    value: {}
  },
  setup(e) {
    function t(r) {
      return {
        "common.novalue": "No value"
      }[r] || r;
    }
    return (r, a) => (g(), F("div", tE, [
      e.value?.length ? (g(!0), F(je, { key: 0 }, Ge(e.value, (n, o) => (g(), F("span", {
        key: o,
        class: "bg-muted text-xs px-1 py-0.5 rounded"
      }, [
        ie("span", nE, " ≥" + oe(`${n.from}:`), 1),
        a[0] || (a[0] = he()),
        ie("span", rE, oe(n.value), 1)
      ]))), 128)) : (g(), F("span", aE, oe(t("common.novalue")), 1))
    ]));
  }
}), br = Ut([]), oE = W(() => qo(br.value, (e) => e.key)), Ps = me({});
function Vg(e) {
  const t = br.value.findIndex((r) => r.key === e);
  t !== -1 && br.value.splice(t, 1), Yd.remove(e);
}
const Fg = (e) => {
  Ps.value[e] = !1, oE.value[e]?.onClose?.(), setTimeout(() => Vg(e), 600);
}, iE = (e) => (e.key = e.key ?? `${Math.random()}`, br.value.push(e), Vc(br), Ps.value[e.key] = !0, Yd.add(() => (Fg(e.key), !0), e.key), e.key), lE = { close: Fg, visible: Ps, open: iE, instances: br, removeInstance: Vg }, Mg = () => lE, ST = /* @__PURE__ */ D({
  __name: "DynamicComponentProvider",
  setup(e) {
    const { close: t, visible: r, instances: a } = Mg();
    return (n, o) => (g(!0), F(je, null, Ge(s(a), (i) => (g(), A(mt(i.component), K({
      key: i.key,
      open: s(r)[i.key]
    }, { ref_for: !0 }, i.componentProps || {}, {
      "onUpdate:open": (l) => !l && s(t)(i.key)
    }), null, 16, ["open", "onUpdate:open"]))), 128));
  }
}), sE = { class: "text-muted-foreground py-4 flex gap-2 items-center text-sm" }, uE = /* @__PURE__ */ D({
  __name: "EmptyMini",
  setup(e) {
    function t(r) {
      return {
        "common.noValues": "No values"
      }[r] || r;
    }
    return (r, a) => (g(), F("div", sE, [
      w(s(Gc), { size: 16 }),
      ie("span", null, [
        j(r.$slots, "default", {}, () => [
          he(oe(t("common.noValues")), 1)
        ])
      ])
    ]));
  }
}), cE = { class: "flex-1" }, dE = { class: "flex gap-1 items-center" }, fE = {
  key: 0,
  class: "flex-1"
}, mE = {
  key: 1,
  class: "text-muted-foreground text-sm px-2"
}, pE = /* @__PURE__ */ D({
  inheritAttrs: !1,
  __name: "SelectListOptions",
  props: /* @__PURE__ */ vt({
    placeholder: { default: "Filter.." },
    addItemButtonLabel: { default: "Add Item" },
    multiple: { type: Boolean },
    options: {},
    showAddItemButton: { type: Boolean }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ vt(["onAddItem"], ["update:modelValue"]),
  setup(e) {
    const t = ft(e, "modelValue"), r = me(""), { startsWith: a } = bb({ sensitivity: "base" }), n = W(() => M(e.options).filter((l) => a(l.label, r.value))), o = W(() => !!M(e.options).length), { t: i } = jn();
    return (l, u) => (g(), F(je, null, [
      w(s(_b), {
        modelValue: t.value,
        "onUpdate:modelValue": u[1] || (u[1] = (c) => t.value = c),
        multiple: e.multiple
      }, {
        default: h(() => [
          w(s(yb), {
            modelValue: r.value,
            "onUpdate:modelValue": u[0] || (u[0] = (c) => r.value = c),
            autofocus: "",
            disabled: !o.value,
            placeholder: e.placeholder,
            class: be(s(G)(
              "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
              "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
            ))
          }, null, 8, ["modelValue", "disabled", "placeholder", "class"]),
          n.value.length ? pe("", !0) : (g(), A(uE, { key: 0 })),
          w(s($b), { class: "max-h-[400px] overflow-auto py-1" }, {
            default: h(() => [
              (g(!0), F(je, null, Ge(n.value, (c) => (g(), A(s(wb), {
                key: String(c.value),
                value: c.value,
                class: "focus:bg-accent focus:text-accent-foreground data-[highlighted]:bg-accent [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2"
              }, {
                default: h(() => [
                  ie("div", cE, [
                    j(l.$slots, "option", { option: c }, () => [
                      he(oe(c.label), 1)
                    ])
                  ]),
                  w(s(kb), null, {
                    default: h(() => [
                      w(s(ao), { size: 12 })
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
      ie("div", dE, [
        e.showAddItemButton ? (g(), F("div", fE, [
          w(pt, {
            size: "sm",
            class: "sticky bottom-0",
            variant: "ghost",
            type: "button",
            onClick: u[2] || (u[2] = (c) => l.$emit("onAddItem"))
          }, {
            default: h(() => [
              w(s(oo)),
              he(" " + oe(e.addItemButtonLabel), 1)
            ]),
            _: 1
          })
        ])) : pe("", !0),
        o.value && e.multiple ? (g(), F("div", mE, oe(s(i)("common.elementCountSelected", { count: t.value.length })), 1)) : pe("", !0)
      ])
    ], 64));
  }
}), vE = /* @__PURE__ */ D({
  __name: "AlertDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = He(e, t);
    return (o, i) => (g(), A(s(Sb), K({ "data-slot": "alert-dialog" }, s(n)), {
      default: h(() => [
        j(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gE = /* @__PURE__ */ D({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = ve(t, "class");
    return (a, n) => (g(), A(s(Ib), K(s(r), {
      class: s(G)(s(an)(), t.class)
    }), {
      default: h(() => [
        j(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), hE = /* @__PURE__ */ D({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = ve(t, "class");
    return (a, n) => (g(), A(s(xb), K(s(r), {
      class: s(G)(
        s(an)({ variant: "outline" }),
        "mt-2 sm:mt-0",
        t.class
      )
    }), {
      default: h(() => [
        j(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), bE = /* @__PURE__ */ D({
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
    const r = e, a = t, n = ve(r, "class"), o = He(n, a);
    return (i, l) => (g(), A(s(Ob), null, {
      default: h(() => [
        w(s(Eb), {
          "data-slot": "alert-dialog-overlay",
          class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80"
        }),
        w(s(Nb), K({ "data-slot": "alert-dialog-content" }, s(o), {
          class: s(G)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
            r.class
          )
        }), {
          default: h(() => [
            j(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), _E = /* @__PURE__ */ D({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = ve(t, "class");
    return (a, n) => (g(), A(s(zb), K({ "data-slot": "alert-dialog-description" }, s(r), {
      class: s(G)("text-muted-foreground text-sm", t.class)
    }), {
      default: h(() => [
        j(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), yE = /* @__PURE__ */ D({
  __name: "AlertDialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), F("div", {
      "data-slot": "alert-dialog-footer",
      class: be(
        s(G)(
          "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
          t.class
        )
      )
    }, [
      j(r.$slots, "default")
    ], 2));
  }
}), $E = /* @__PURE__ */ D({
  __name: "AlertDialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), F("div", {
      "data-slot": "alert-dialog-header",
      class: be(s(G)("flex flex-col gap-2 text-center sm:text-left", t.class))
    }, [
      j(r.$slots, "default")
    ], 2));
  }
}), wE = /* @__PURE__ */ D({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = ve(t, "class");
    return (a, n) => (g(), A(s(Tb), K({ "data-slot": "alert-dialog-title" }, s(r), {
      class: s(G)("text-lg font-semibold", t.class)
    }), {
      default: h(() => [
        j(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), kE = /* @__PURE__ */ D({
  __name: "DynamicAlertDialog",
  props: /* @__PURE__ */ vt({
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
    const t = e, r = ft(e, "open"), a = me(!1);
    async function n() {
      a.value = !0, (t.onOk ? await t.onOk() : !0) && close(), a.value = !1;
    }
    const { t: o } = jn();
    return (i, l) => (g(), A(s(vE), {
      open: r.value,
      "onUpdate:open": l[2] || (l[2] = (u) => r.value = u)
    }, {
      default: h(() => [
        w(s(bE), null, {
          default: h(() => [
            w(s($E), null, {
              default: h(() => [
                w(s(wE), null, {
                  default: h(() => [
                    he(oe(e.title || s(o)("dialog.alert.defaultTitle")), 1)
                  ]),
                  _: 1
                }),
                w(s(_E), null, {
                  default: h(() => [
                    he(oe(e.description || s(o)("dialog.alert.defaultDescription")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            w(s(yE), null, {
              default: h(() => [
                w(s(hE), {
                  disabled: a.value,
                  onClick: l[0] || (l[0] = (u) => r.value = !1)
                }, {
                  default: h(() => [
                    he(oe(s(o)("common.cancel")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                w(s(gE), {
                  loading: a.value,
                  onClick: l[1] || (l[1] = (u) => n())
                }, {
                  default: h(() => [
                    he(oe(s(o)("common.continue")), 1)
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
function wt(e) {
  return typeof e == "function";
}
function ur(e) {
  return e == null;
}
const Pn = (e) => e !== null && !!e && typeof e == "object" && !Array.isArray(e);
function As(e) {
  return Number(e) >= 0;
}
function SE(e) {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}
function IE(e) {
  return typeof e == "object" && e !== null;
}
function xE(e) {
  return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
function dc(e) {
  if (!IE(e) || xE(e) !== "[object Object]")
    return !1;
  if (Object.getPrototypeOf(e) === null)
    return !0;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function qr(e, t) {
  return Object.keys(t).forEach((r) => {
    if (dc(t[r]) && dc(e[r])) {
      e[r] || (e[r] = {}), qr(e[r], t[r]);
      return;
    }
    e[r] = t[r];
  }), e;
}
function Ur(e) {
  const t = e.split(".");
  if (!t.length)
    return "";
  let r = String(t[0]);
  for (let a = 1; a < t.length; a++) {
    if (As(t[a])) {
      r += `[${t[a]}]`;
      continue;
    }
    r += `.${t[a]}`;
  }
  return r;
}
const OE = {};
function EE(e) {
  return OE[e];
}
function fc(e, t, r) {
  typeof r.value == "object" && (r.value = Ae(r.value)), !r.enumerable || r.get || r.set || !r.configurable || !r.writable || t === "__proto__" ? Object.defineProperty(e, t, r) : e[t] = r.value;
}
function Ae(e) {
  if (typeof e != "object") return e;
  var t = 0, r, a, n, o = Object.prototype.toString.call(e);
  if (o === "[object Object]" ? n = Object.create(e.__proto__ || null) : o === "[object Array]" ? n = Array(e.length) : o === "[object Set]" ? (n = /* @__PURE__ */ new Set(), e.forEach(function(i) {
    n.add(Ae(i));
  })) : o === "[object Map]" ? (n = /* @__PURE__ */ new Map(), e.forEach(function(i, l) {
    n.set(Ae(l), Ae(i));
  })) : o === "[object Date]" ? n = /* @__PURE__ */ new Date(+e) : o === "[object RegExp]" ? n = new RegExp(e.source, e.flags) : o === "[object DataView]" ? n = new e.constructor(Ae(e.buffer)) : o === "[object ArrayBuffer]" ? n = e.slice(0) : o.slice(-6) === "Array]" && (n = new e.constructor(e)), n) {
    for (a = Object.getOwnPropertySymbols(e); t < a.length; t++)
      fc(n, a[t], Object.getOwnPropertyDescriptor(e, a[t]));
    for (t = 0, a = Object.getOwnPropertyNames(e); t < a.length; t++)
      Object.hasOwnProperty.call(n, r = a[t]) && n[r] === e[r] || fc(n, r, Object.getOwnPropertyDescriptor(e, r));
  }
  return n || e;
}
const or = Symbol("vee-validate-form"), NE = Symbol("vee-validate-form-context"), fa = Symbol("vee-validate-field-instance"), Xa = Symbol("Default empty value"), Bg = typeof window < "u";
function gi(e) {
  return wt(e) && !!e.__locatorRef;
}
function en(e) {
  return !!e && wt(e.parse) && e.__type === "VVTypedSchema";
}
function Qa(e) {
  return !!e && wt(e.validate);
}
function ma(e) {
  return e === "checkbox" || e === "radio";
}
function zE(e) {
  return Pn(e) || Array.isArray(e);
}
function TE(e) {
  return Array.isArray(e) ? e.length === 0 : Pn(e) && Object.keys(e).length === 0;
}
function pa(e) {
  return /^\[.+\]$/i.test(e);
}
function PE(e) {
  return Zg(e) && e.multiple;
}
function Zg(e) {
  return e.tagName === "SELECT";
}
function AE(e, t) {
  const r = ![!1, null, void 0, 0].includes(t.multiple) && !Number.isNaN(t.multiple);
  return e === "select" && "multiple" in t && r;
}
function DE(e, t) {
  return !AE(e, t) && t.type !== "file" && !ma(t.type);
}
function Wg(e) {
  return Ds(e) && e.target && "submit" in e.target;
}
function Ds(e) {
  return e ? !!(typeof Event < "u" && wt(Event) && e instanceof Event || e && e.srcElement) : !1;
}
function mc(e, t) {
  return t in e && e[t] !== Xa;
}
function yt(e, t) {
  if (e === t)
    return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor)
      return !1;
    var r, a, n;
    if (Array.isArray(e)) {
      if (r = e.length, r != t.length)
        return !1;
      for (a = r; a-- !== 0; )
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
    if (vc(e) && vc(t))
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
      if (r = e.length, r != t.length)
        return !1;
      for (a = r; a-- !== 0; )
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
    if (e = pc(e), t = pc(t), n = Object.keys(e), r = n.length, r !== Object.keys(t).length)
      return !1;
    for (a = r; a-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, n[a]))
        return !1;
    for (a = r; a-- !== 0; ) {
      var o = n[a];
      if (!yt(e[o], t[o]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function pc(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function vc(e) {
  return Bg ? e instanceof File : !1;
}
function Eo(e) {
  return pa(e) ? e.replace(/\[|\]/gi, "") : e;
}
function Xe(e, t, r) {
  return e ? pa(t) ? e[Eo(t)] : (t || "").split(/\.|\[(\d+)\]/).filter(Boolean).reduce((n, o) => zE(n) && o in n ? n[o] : r, e) : r;
}
function ht(e, t, r) {
  if (pa(t)) {
    e[Eo(t)] = r;
    return;
  }
  const a = t.split(/\.|\[(\d+)\]/).filter(Boolean);
  let n = e;
  for (let o = 0; o < a.length; o++) {
    if (o === a.length - 1) {
      n[a[o]] = r;
      return;
    }
    (!(a[o] in n) || ur(n[a[o]])) && (n[a[o]] = As(a[o + 1]) ? [] : {}), n = n[a[o]];
  }
}
function Bo(e, t) {
  if (Array.isArray(e) && As(t)) {
    e.splice(Number(t), 1);
    return;
  }
  Pn(e) && delete e[t];
}
function gc(e, t) {
  if (pa(t)) {
    delete e[Eo(t)];
    return;
  }
  const r = t.split(/\.|\[(\d+)\]/).filter(Boolean);
  let a = e;
  for (let o = 0; o < r.length; o++) {
    if (o === r.length - 1) {
      Bo(a, r[o]);
      break;
    }
    if (!(r[o] in a) || ur(a[r[o]]))
      break;
    a = a[r[o]];
  }
  const n = r.map((o, i) => Xe(e, r.slice(0, i).join(".")));
  for (let o = n.length - 1; o >= 0; o--)
    if (TE(n[o])) {
      if (o === 0) {
        Bo(e, r[0]);
        continue;
      }
      Bo(n[o - 1], r[o - 1]);
    }
}
function Dt(e) {
  return Object.keys(e);
}
function va(e, t = void 0) {
  const r = Bt();
  return r?.provides[e] || vn(e, t);
}
function Ca(e) {
  Fc(`[vee-validate]: ${e}`);
}
function hc(e, t, r) {
  if (Array.isArray(e)) {
    const a = [...e], n = a.findIndex((o) => yt(o, t));
    return n >= 0 ? a.splice(n, 1) : a.push(t), a;
  }
  return yt(e, t) ? r : t;
}
function CE(e, t) {
  let r, a;
  return function(...n) {
    const o = this;
    return r || (r = !0, setTimeout(() => r = !1, t), a = e.apply(o, n)), a;
  };
}
function bc(e, t = 0) {
  let r = null, a = [];
  return function(...n) {
    return r && clearTimeout(r), r = setTimeout(() => {
      const o = e(...n);
      a.forEach((i) => i(o)), a = [];
    }, t), new Promise((o) => a.push(o));
  };
}
function jE(e, t) {
  return Pn(t) && t.number ? SE(e) : e;
}
function hi(e, t) {
  let r;
  return async function(...n) {
    const o = e(...n);
    r = o;
    const i = await o;
    return o !== r ? i : (r = void 0, t(i, n));
  };
}
function UE({ get: e, set: t }) {
  const r = me(Ae(e()));
  return Ue(e, (a) => {
    yt(a, r.value) || (r.value = Ae(a));
  }, {
    deep: !0
  }), Ue(r, (a) => {
    yt(a, e()) || t(Ae(a));
  }, {
    deep: !0
  }), r;
}
function bi(e) {
  return Array.isArray(e) ? e : e ? [e] : [];
}
function Ea(e, t) {
  const r = {};
  for (const a in e)
    t.includes(a) || (r[a] = e[a]);
  return r;
}
function LE(e) {
  let t = null, r = [];
  return function(...a) {
    const n = xt(() => {
      if (t !== n)
        return;
      const o = e(...a);
      r.forEach((i) => i(o)), r = [], t = null;
    });
    return t = n, new Promise((o) => r.push(o));
  };
}
function No(e, t, r) {
  return t.slots.default ? typeof e == "string" || !e ? t.slots.default(r()) : {
    default: () => {
      var a, n;
      return (n = (a = t.slots).default) === null || n === void 0 ? void 0 : n.call(a, r());
    }
  } : t.slots.default;
}
function Zo(e) {
  if (Gg(e))
    return e._value;
}
function Gg(e) {
  return "_value" in e;
}
function RE(e) {
  return e.type === "number" || e.type === "range" ? Number.isNaN(e.valueAsNumber) ? e.value : e.valueAsNumber : e.value;
}
function eo(e) {
  if (!Ds(e))
    return e;
  const t = e.target;
  if (ma(t.type) && Gg(t))
    return Zo(t);
  if (t.type === "file" && t.files) {
    const r = Array.from(t.files);
    return t.multiple ? r : r[0];
  }
  if (PE(t))
    return Array.from(t.options).filter((r) => r.selected && !r.disabled).map(Zo);
  if (Zg(t)) {
    const r = Array.from(t.options).find((a) => a.selected);
    return r ? Zo(r) : t.value;
  }
  return RE(t);
}
function Hg(e) {
  const t = {};
  return Object.defineProperty(t, "_$$isNormalized", {
    value: !0,
    writable: !1,
    enumerable: !1,
    configurable: !1
  }), e ? Pn(e) && e._$$isNormalized ? e : Pn(e) ? Object.keys(e).reduce((r, a) => {
    const n = VE(e[a]);
    return e[a] !== !1 && (r[a] = _c(n)), r;
  }, t) : typeof e != "string" ? t : e.split("|").reduce((r, a) => {
    const n = FE(a);
    return n.name && (r[n.name] = _c(n.params)), r;
  }, t) : t;
}
function VE(e) {
  return e === !0 ? [] : Array.isArray(e) || Pn(e) ? e : [e];
}
function _c(e) {
  const t = (r) => typeof r == "string" && r[0] === "@" ? ME(r.slice(1)) : r;
  return Array.isArray(e) ? e.map(t) : e instanceof RegExp ? [e] : Object.keys(e).reduce((r, a) => (r[a] = t(e[a]), r), {});
}
const FE = (e) => {
  let t = [];
  const r = e.split(":")[0];
  return e.includes(":") && (t = e.split(":").slice(1).join(":").split(",")), { name: r, params: t };
};
function ME(e) {
  const t = (r) => {
    var a;
    return (a = Xe(r, e)) !== null && a !== void 0 ? a : r[e];
  };
  return t.__locatorRef = e, t;
}
function BE(e) {
  return Array.isArray(e) ? e.filter(gi) : Dt(e).filter((t) => gi(e[t])).map((t) => e[t]);
}
const ZE = {
  generateMessage: ({ field: e }) => `${e} is not valid.`,
  bails: !0,
  validateOnBlur: !0,
  validateOnChange: !0,
  validateOnInput: !1,
  validateOnModelUpdate: !0
};
let WE = Object.assign({}, ZE);
const Wn = () => WE;
async function Kg(e, t, r = {}) {
  const a = r?.bails, n = {
    name: r?.name || "{field}",
    rules: t,
    label: r?.label,
    bails: a ?? !0,
    formData: r?.values || {}
  }, o = await GE(n, e);
  return Object.assign(Object.assign({}, o), { valid: !o.errors.length });
}
async function GE(e, t) {
  const r = e.rules;
  if (en(r) || Qa(r))
    return KE(t, Object.assign(Object.assign({}, e), { rules: r }));
  if (wt(r) || Array.isArray(r)) {
    const l = {
      field: e.label || e.name,
      name: e.name,
      label: e.label,
      form: e.formData,
      value: t
    }, u = Array.isArray(r) ? r : [r], c = u.length, d = [];
    for (let f = 0; f < c; f++) {
      const m = u[f], p = await m(t, l);
      if (!(typeof p != "string" && !Array.isArray(p) && p)) {
        if (Array.isArray(p))
          d.push(...p);
        else {
          const _ = typeof p == "string" ? p : Yg(l);
          d.push(_);
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
  const a = Object.assign(Object.assign({}, e), { rules: Hg(r) }), n = [], o = Object.keys(a.rules), i = o.length;
  for (let l = 0; l < i; l++) {
    const u = o[l], c = await JE(a, t, {
      name: u,
      params: a.rules[u]
    });
    if (c.error && (n.push(c.error), e.bails))
      return {
        errors: n
      };
  }
  return {
    errors: n
  };
}
function HE(e) {
  return !!e && e.name === "ValidationError";
}
function Jg(e) {
  return {
    __type: "VVTypedSchema",
    async parse(r, a) {
      var n;
      try {
        return {
          output: await e.validate(r, { abortEarly: !1, context: a?.formData || {} }),
          errors: []
        };
      } catch (o) {
        if (!HE(o))
          throw o;
        if (!(!((n = o.inner) === null || n === void 0) && n.length) && o.errors.length)
          return { errors: [{ path: o.path, errors: o.errors }] };
        const i = o.inner.reduce((l, u) => {
          const c = u.path || "";
          return l[c] || (l[c] = { errors: [], path: c }), l[c].errors.push(...u.errors), l;
        }, {});
        return { errors: Object.values(i) };
      }
    }
  };
}
async function KE(e, t) {
  const a = await (en(t.rules) ? t.rules : Jg(t.rules)).parse(e, { formData: t.formData }), n = [];
  for (const o of a.errors)
    o.errors.length && n.push(...o.errors);
  return {
    value: a.value,
    errors: n
  };
}
async function JE(e, t, r) {
  const a = EE(r.name);
  if (!a)
    throw new Error(`No such validator '${r.name}' exists.`);
  const n = YE(r.params, e.formData), o = {
    field: e.label || e.name,
    name: e.name,
    label: e.label,
    value: t,
    form: e.formData,
    rule: Object.assign(Object.assign({}, r), { params: n })
  }, i = await a(t, n, o);
  return typeof i == "string" ? {
    error: i
  } : {
    error: i ? void 0 : Yg(o)
  };
}
function Yg(e) {
  const t = Wn().generateMessage;
  return t ? t(e) : "Field is invalid";
}
function YE(e, t) {
  const r = (a) => gi(a) ? a(t) : a;
  return Array.isArray(e) ? e.map(r) : Object.keys(e).reduce((a, n) => (a[n] = r(e[n]), a), {});
}
async function qE(e, t) {
  const a = await (en(e) ? e : Jg(e)).parse(Ae(t), { formData: Ae(t) }), n = {}, o = {};
  for (const i of a.errors) {
    const l = i.errors, u = (i.path || "").replace(/\["(\d+)"\]/g, (c, d) => `[${d}]`);
    n[u] = { valid: !l.length, errors: l }, l.length && (o[u] = l[0]);
  }
  return {
    valid: !a.errors.length,
    results: n,
    errors: o,
    values: a.value,
    source: "schema"
  };
}
async function XE(e, t, r) {
  const n = Dt(e).map(async (c) => {
    var d, f, m;
    const p = (d = r?.names) === null || d === void 0 ? void 0 : d[c], v = await Kg(Xe(t, c), e[c], {
      name: p?.name || c,
      label: p?.label,
      values: t,
      bails: (m = (f = r?.bailsMap) === null || f === void 0 ? void 0 : f[c]) !== null && m !== void 0 ? m : !0
    });
    return Object.assign(Object.assign({}, v), { path: c });
  });
  let o = !0;
  const i = await Promise.all(n), l = {}, u = {};
  for (const c of i)
    l[c.path] = {
      valid: c.valid,
      errors: c.errors
    }, c.valid || (o = !1, u[c.path] = c.errors[0]);
  return {
    valid: o,
    results: l,
    errors: u,
    source: "schema"
  };
}
let yc = 0;
function QE(e, t) {
  const { value: r, initialValue: a, setInitialValue: n } = eN(e, t.modelValue, t.form);
  if (!t.form) {
    let m = function(p) {
      var v;
      "value" in p && (r.value = p.value), "errors" in p && c(p.errors), "touched" in p && (f.touched = (v = p.touched) !== null && v !== void 0 ? v : f.touched), "initialValue" in p && n(p.initialValue);
    };
    const { errors: u, setErrors: c } = rN(), d = yc >= Number.MAX_SAFE_INTEGER ? 0 : ++yc, f = nN(r, a, u, t.schema);
    return {
      id: d,
      path: e,
      value: r,
      initialValue: a,
      meta: f,
      flags: { pendingUnmount: { [d]: !1 }, pendingReset: !1 },
      errors: u,
      setState: m
    };
  }
  const o = t.form.createPathState(e, {
    bails: t.bails,
    label: t.label,
    type: t.type,
    validate: t.validate,
    schema: t.schema
  }), i = W(() => o.errors);
  function l(u) {
    var c, d, f;
    "value" in u && (r.value = u.value), "errors" in u && ((c = t.form) === null || c === void 0 || c.setFieldError(s(e), u.errors)), "touched" in u && ((d = t.form) === null || d === void 0 || d.setFieldTouched(s(e), (f = u.touched) !== null && f !== void 0 ? f : !1)), "initialValue" in u && n(u.initialValue);
  }
  return {
    id: Array.isArray(o.id) ? o.id[o.id.length - 1] : o.id,
    path: e,
    value: r,
    errors: i,
    meta: o,
    initialValue: a,
    flags: o.__flags,
    setState: l
  };
}
function eN(e, t, r) {
  const a = me(s(t));
  function n() {
    return r ? Xe(r.initialValues.value, s(e), s(a)) : s(a);
  }
  function o(c) {
    if (!r) {
      a.value = c;
      return;
    }
    r.setFieldInitialValue(s(e), c, !0);
  }
  const i = W(n);
  if (!r)
    return {
      value: me(n()),
      initialValue: i,
      setInitialValue: o
    };
  const l = tN(t, r, i, e);
  return r.stageInitialValue(s(e), l, !0), {
    value: W({
      get() {
        return Xe(r.values, s(e));
      },
      set(c) {
        r.setFieldValue(s(e), c, !1);
      }
    }),
    initialValue: i,
    setInitialValue: o
  };
}
function tN(e, t, r, a) {
  return dn(e) ? s(e) : e !== void 0 ? e : Xe(t.values, s(a), s(r));
}
function nN(e, t, r, a) {
  const n = W(() => {
    var i, l, u;
    return (u = (l = (i = M(a)) === null || i === void 0 ? void 0 : i.describe) === null || l === void 0 ? void 0 : l.call(i).required) !== null && u !== void 0 ? u : !1;
  }), o = pn({
    touched: !1,
    pending: !1,
    valid: !0,
    required: n,
    validated: !!s(r).length,
    initialValue: W(() => s(t)),
    dirty: W(() => !yt(s(e), s(t)))
  });
  return Ue(r, (i) => {
    o.valid = !i.length;
  }, {
    immediate: !0,
    flush: "sync"
  }), o;
}
function rN() {
  const e = me([]);
  return {
    errors: e,
    setErrors: (t) => {
      e.value = bi(t);
    }
  };
}
const Rr = {}, Vr = {}, Fr = "vee-validate-inspector", Ct = {
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
let ut = null, yn;
async function qg(e) {
  if (process.env.NODE_ENV !== "production") {
    if (!Bg)
      return;
    (await import("./index-Cj4LybIA.js")).setupDevtoolsPlugin({
      id: "vee-validate-devtools-plugin",
      label: "VeeValidate Plugin",
      packageName: "vee-validate",
      homepage: "https://vee-validate.logaretm.com/v4",
      app: e,
      logo: "https://vee-validate.logaretm.com/v4/logo.png"
    }, (r) => {
      yn = r, r.addInspector({
        id: Fr,
        icon: "rule",
        label: "vee-validate",
        noSelectionText: "Select a vee-validate node to inspect",
        actions: [
          {
            icon: "done_outline",
            tooltip: "Validate selected item",
            action: async () => {
              if (!ut) {
                console.error("There is not a valid selected vee-validate node or component");
                return;
              }
              if (ut.type === "field") {
                await ut.field.validate();
                return;
              }
              if (ut.type === "form") {
                await ut.form.validate();
                return;
              }
              ut.type === "pathState" && await ut.form.validateField(ut.state.path);
            }
          },
          {
            icon: "delete_sweep",
            tooltip: "Clear validation state of the selected item",
            action: () => {
              if (!ut) {
                console.error("There is not a valid selected vee-validate node or component");
                return;
              }
              if (ut.type === "field") {
                ut.field.resetField();
                return;
              }
              ut.type === "form" && ut.form.resetForm(), ut.type === "pathState" && ut.form.resetField(ut.state.path);
            }
          }
        ]
      }), r.on.getInspectorTree((a) => {
        if (a.inspectorId !== Fr)
          return;
        const n = Object.values(Rr), o = Object.values(Vr);
        a.rootNodes = [
          ...n.map(iN),
          ...o.map((i) => sN(i))
        ];
      }), r.on.getInspectorState((a) => {
        if (a.inspectorId !== Fr)
          return;
        const { form: n, field: o, state: i, type: l } = uN(a.nodeId);
        if (r.unhighlightElement(), n && l === "form") {
          a.state = cN(n), ut = { type: "form", form: n }, r.highlightElement(n._vm);
          return;
        }
        if (i && l === "pathState" && n) {
          a.state = $c(i), ut = { type: "pathState", state: i, form: n };
          return;
        }
        if (o && l === "field") {
          a.state = $c({
            errors: o.errors.value,
            dirty: o.meta.dirty,
            valid: o.meta.valid,
            touched: o.meta.touched,
            value: o.value.value,
            initialValue: o.meta.initialValue
          }), ut = { field: o, type: "field" }, r.highlightElement(o._vm);
          return;
        }
        ut = null, r.unhighlightElement();
      });
    });
  }
}
const _r = CE(() => {
  setTimeout(async () => {
    await xt(), yn?.sendInspectorState(Fr), yn?.sendInspectorTree(Fr);
  }, 100);
}, 100);
function aN(e) {
  const t = Bt();
  if (!yn) {
    const r = t?.appContext.app;
    if (!r)
      return;
    qg(r);
  }
  Rr[e.formId] = Object.assign({}, e), Rr[e.formId]._vm = t, ro(() => {
    delete Rr[e.formId], _r();
  }), _r();
}
function oN(e) {
  const t = Bt();
  if (!yn) {
    const r = t?.appContext.app;
    if (!r)
      return;
    qg(r);
  }
  Vr[e.id] = Object.assign({}, e), Vr[e.id]._vm = t, ro(() => {
    delete Vr[e.id], _r();
  }), _r();
}
function iN(e) {
  const { textColor: t, bgColor: r } = Qg(e.meta.value.valid), a = {};
  Object.values(e.getAllPathStates()).forEach((i) => {
    ht(a, M(i.path), lN(i, e));
  });
  function n(i, l = []) {
    const u = [...l].pop();
    return "id" in i ? Object.assign(Object.assign({}, i), { label: u || i.label }) : Pn(i) ? {
      id: `${l.join(".")}`,
      label: u || "",
      children: Object.keys(i).map((c) => n(i[c], [...l, c]))
    } : Array.isArray(i) ? {
      id: `${l.join(".")}`,
      label: `${u}[]`,
      children: i.map((c, d) => n(c, [...l, String(d)]))
    } : { id: "", label: "", children: [] };
  }
  const { children: o } = n(a);
  return {
    id: Cs(e),
    label: e.name,
    children: o,
    tags: [
      {
        label: "Form",
        textColor: t,
        backgroundColor: r
      },
      {
        label: `${e.getAllPathStates().length} fields`,
        textColor: Ct.white,
        backgroundColor: Ct.unknown
      }
    ]
  };
}
function lN(e, t) {
  return {
    id: Cs(t, e),
    label: M(e.path),
    tags: Xg(e.multiple, e.fieldsCount, e.type, e.valid, t)
  };
}
function sN(e, t) {
  return {
    id: Cs(t, e),
    label: s(e.name),
    tags: Xg(!1, 1, e.type, e.meta.valid, t)
  };
}
function Xg(e, t, r, a, n) {
  const { textColor: o, bgColor: i } = Qg(a);
  return [
    e ? void 0 : {
      label: "Field",
      textColor: o,
      backgroundColor: i
    },
    n ? void 0 : {
      label: "Standalone",
      textColor: Ct.black,
      backgroundColor: Ct.gray
    },
    r === "checkbox" ? {
      label: "Checkbox",
      textColor: Ct.white,
      backgroundColor: Ct.blue
    } : void 0,
    r === "radio" ? {
      label: "Radio",
      textColor: Ct.white,
      backgroundColor: Ct.purple
    } : void 0,
    e ? {
      label: "Multiple",
      textColor: Ct.black,
      backgroundColor: Ct.orange
    } : void 0
  ].filter(Boolean);
}
function Cs(e, t) {
  const r = t ? "path" in t ? "pathState" : "field" : "form", a = t ? "path" in t ? t?.path : M(t?.name) : "", n = { f: e?.formId, ff: t?.id || a, type: r };
  return btoa(encodeURIComponent(JSON.stringify(n)));
}
function uN(e) {
  try {
    const t = JSON.parse(decodeURIComponent(atob(e))), r = Rr[t.f];
    if (!r && t.ff) {
      const n = Vr[t.ff];
      return n ? {
        type: t.type,
        field: n
      } : {};
    }
    if (!r)
      return {};
    const a = r.getPathState(t.ff);
    return {
      type: t.type,
      form: r,
      state: a
    };
  } catch {
  }
  return {};
}
function $c(e) {
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
function cN(e) {
  const { errorBag: t, meta: r, values: a, isSubmitting: n, isValidating: o, submitCount: i } = e;
  return {
    "Form state": [
      {
        key: "submitCount",
        value: i.value
      },
      {
        key: "isSubmitting",
        value: n.value
      },
      {
        key: "isValidating",
        value: o.value
      },
      {
        key: "touched",
        value: r.value.touched
      },
      {
        key: "dirty",
        value: r.value.dirty
      },
      {
        key: "valid",
        value: r.value.valid
      },
      {
        key: "initialValues",
        value: r.value.initialValues
      },
      {
        key: "currentValues",
        value: a
      },
      {
        key: "errors",
        value: Dt(t.value).reduce((l, u) => {
          var c;
          const d = (c = t.value[u]) === null || c === void 0 ? void 0 : c[0];
          return d && (l[u] = d), l;
        }, {})
      }
    ]
  };
}
function Qg(e) {
  return {
    bgColor: e ? Ct.success : Ct.error,
    textColor: e ? Ct.black : Ct.white
  };
}
function js(e, t, r) {
  return ma(r?.type) ? fN(e, t, r) : eh(e, t, r);
}
function eh(e, t, r) {
  const { initialValue: a, validateOnMount: n, bails: o, type: i, checkedValue: l, label: u, validateOnValueUpdate: c, uncheckedValue: d, controlled: f, keepValueOnUnmount: m, syncVModel: p, form: v } = dN(r), _ = f ? va(or) : void 0, k = v || _, $ = W(() => Ur(M(e))), y = W(() => {
    if (M(k?.schema))
      return;
    const ue = s(t);
    return Qa(ue) || en(ue) || wt(ue) || Array.isArray(ue) ? ue : Hg(ue);
  }), x = !wt(y.value) && en(M(t)), { id: I, value: E, initialValue: N, meta: O, setState: C, errors: U, flags: Q } = QE($, {
    modelValue: a,
    form: k,
    bails: o,
    label: u,
    type: i,
    validate: y.value ? V : void 0,
    schema: x ? t : void 0
  }), re = W(() => U.value[0]);
  p && mN({
    value: E,
    prop: p,
    handleChange: te,
    shouldValidate: () => c && !Q.pendingReset
  });
  const ne = (se, ue = !1) => {
    O.touched = !0, ue && X();
  };
  async function fe(se) {
    var ue, Ee;
    if (k?.validateSchema) {
      const { results: Ne } = await k.validateSchema(se);
      return (ue = Ne[M($)]) !== null && ue !== void 0 ? ue : { valid: !0, errors: [] };
    }
    return y.value ? Kg(E.value, y.value, {
      name: M($),
      label: M(u),
      values: (Ee = k?.values) !== null && Ee !== void 0 ? Ee : {},
      bails: o
    }) : { valid: !0, errors: [] };
  }
  const X = hi(async () => (O.pending = !0, O.validated = !0, fe("validated-only")), (se) => (Q.pendingUnmount[Pe.id] || (C({ errors: se.errors }), O.pending = !1, O.valid = se.valid), se)), ae = hi(async () => fe("silent"), (se) => (O.valid = se.valid, se));
  function V(se) {
    return se?.mode === "silent" ? ae() : X();
  }
  function te(se, ue = !0) {
    const Ee = eo(se);
    it(Ee, ue);
  }
  An(() => {
    if (n)
      return X();
    (!k || !k.validateSchema) && ae();
  });
  function J(se) {
    O.touched = se;
  }
  function Ce(se) {
    var ue;
    const Ee = se && "value" in se ? se.value : N.value;
    C({
      value: Ae(Ee),
      initialValue: Ae(Ee),
      touched: (ue = se?.touched) !== null && ue !== void 0 ? ue : !1,
      errors: se?.errors || []
    }), O.pending = !1, O.validated = !1, ae();
  }
  const Ze = Bt();
  function it(se, ue = !0) {
    E.value = Ze && p ? jE(se, Ze.props.modelModifiers) : se, (ue ? X : ae)();
  }
  function Pt(se) {
    C({ errors: Array.isArray(se) ? se : [se] });
  }
  const Ke = W({
    get() {
      return E.value;
    },
    set(se) {
      it(se, c);
    }
  }), Pe = {
    id: I,
    name: $,
    label: u,
    value: Ke,
    meta: O,
    errors: U,
    errorMessage: re,
    type: i,
    checkedValue: l,
    uncheckedValue: d,
    bails: o,
    keepValueOnUnmount: m,
    resetField: Ce,
    handleReset: () => Ce(),
    validate: V,
    handleChange: te,
    handleBlur: ne,
    setState: C,
    setTouched: J,
    setErrors: Pt,
    setValue: it
  };
  if (cr(fa, Pe), dn(t) && typeof s(t) != "function" && Ue(t, (se, ue) => {
    yt(se, ue) || (O.validated ? X() : ae());
  }, {
    deep: !0
  }), process.env.NODE_ENV !== "production" && (Pe._vm = Bt(), Ue(() => Object.assign(Object.assign({ errors: U.value }, O), { value: E.value }), _r, {
    deep: !0
  }), k || oN(Pe)), !k)
    return Pe;
  const Et = W(() => {
    const se = y.value;
    return !se || wt(se) || Qa(se) || en(se) || Array.isArray(se) ? {} : Object.keys(se).reduce((ue, Ee) => {
      const Ne = BE(se[Ee]).map((rt) => rt.__locatorRef).reduce((rt, lt) => {
        const Je = Xe(k.values, lt) || k.values[lt];
        return Je !== void 0 && (rt[lt] = Je), rt;
      }, {});
      return Object.assign(ue, Ne), ue;
    }, {});
  });
  return Ue(Et, (se, ue) => {
    if (!Object.keys(se).length)
      return;
    !yt(se, ue) && (O.validated ? X() : ae());
  }), wi(() => {
    var se;
    const ue = (se = M(Pe.keepValueOnUnmount)) !== null && se !== void 0 ? se : M(k.keepValuesOnUnmount), Ee = M($);
    if (ue || !k || Q.pendingUnmount[Pe.id]) {
      k?.removePathState(Ee, I);
      return;
    }
    Q.pendingUnmount[Pe.id] = !0;
    const Ne = k.getPathState(Ee);
    if (Array.isArray(Ne?.id) && Ne?.multiple ? Ne?.id.includes(Pe.id) : Ne?.id === Pe.id) {
      if (Ne?.multiple && Array.isArray(Ne.value)) {
        const lt = Ne.value.findIndex((Je) => yt(Je, M(Pe.checkedValue)));
        if (lt > -1) {
          const Je = [...Ne.value];
          Je.splice(lt, 1), k.setFieldValue(Ee, Je);
        }
        Array.isArray(Ne.id) && Ne.id.splice(Ne.id.indexOf(Pe.id), 1);
      } else
        k.unsetPathValue(M($));
      k.removePathState(Ee, I);
    }
  }), Pe;
}
function dN(e) {
  const t = () => ({
    initialValue: void 0,
    validateOnMount: !1,
    bails: !0,
    label: void 0,
    validateOnValueUpdate: !0,
    keepValueOnUnmount: void 0,
    syncVModel: !1,
    controlled: !0
  }), r = !!e?.syncVModel, a = typeof e?.syncVModel == "string" ? e.syncVModel : e?.modelPropName || "modelValue", n = r && !("initialValue" in (e || {})) ? _i(Bt(), a) : e?.initialValue;
  if (!e)
    return Object.assign(Object.assign({}, t()), { initialValue: n });
  const o = "valueProp" in e ? e.valueProp : e.checkedValue, i = "standalone" in e ? !e.standalone : e.controlled, l = e?.modelPropName || e?.syncVModel || !1;
  return Object.assign(Object.assign(Object.assign({}, t()), e || {}), {
    initialValue: n,
    controlled: i ?? !0,
    checkedValue: o,
    syncVModel: l
  });
}
function fN(e, t, r) {
  const a = r?.standalone ? void 0 : va(or), n = r?.checkedValue, o = r?.uncheckedValue;
  function i(l) {
    const u = l.handleChange, c = W(() => {
      const f = M(l.value), m = M(n);
      return Array.isArray(f) ? f.findIndex((p) => yt(p, m)) >= 0 : yt(m, f);
    });
    function d(f, m = !0) {
      var p, v;
      if (c.value === ((p = f?.target) === null || p === void 0 ? void 0 : p.checked)) {
        m && l.validate();
        return;
      }
      const _ = M(e), k = a?.getPathState(_), $ = eo(f);
      let y = (v = M(n)) !== null && v !== void 0 ? v : $;
      a && k?.multiple && k.type === "checkbox" ? y = hc(Xe(a.values, _) || [], y, void 0) : r?.type === "checkbox" && (y = hc(M(l.value), y, M(o))), u(y, m);
    }
    return Object.assign(Object.assign({}, l), {
      checked: c,
      checkedValue: n,
      uncheckedValue: o,
      handleChange: d
    });
  }
  return i(eh(e, t, r));
}
function mN({ prop: e, value: t, handleChange: r, shouldValidate: a }) {
  const n = Bt();
  if (!n || !e) {
    process.env.NODE_ENV !== "production" && console.warn("Failed to setup model events because `useField` was not called in setup.");
    return;
  }
  const o = typeof e == "string" ? e : "modelValue", i = `update:${o}`;
  o in n.props && (Ue(t, (l) => {
    yt(l, _i(n, o)) || n.emit(i, l);
  }), Ue(() => _i(n, o), (l) => {
    if (l === Xa && t.value === void 0)
      return;
    const u = l === Xa ? void 0 : l;
    yt(u, t.value) || r(u, a());
  }));
}
function _i(e, t) {
  if (e)
    return e.props[t];
}
const pN = /* @__PURE__ */ D({
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
      default: () => Wn().bails
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
      default: Xa
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
    const r = zn(e, "rules"), a = zn(e, "name"), n = zn(e, "label"), o = zn(e, "uncheckedValue"), i = zn(e, "keepValue"), { errors: l, value: u, errorMessage: c, validate: d, handleChange: f, handleBlur: m, setTouched: p, resetField: v, handleReset: _, meta: k, checked: $, setErrors: y, setValue: x } = js(a, r, {
      validateOnMount: e.validateOnMount,
      bails: e.bails,
      standalone: e.standalone,
      type: t.attrs.type,
      initialValue: gN(e, t),
      // Only for checkboxes and radio buttons
      checkedValue: t.attrs.value,
      uncheckedValue: o,
      label: n,
      validateOnValueUpdate: e.validateOnModelUpdate,
      keepValueOnUnmount: i,
      syncVModel: !0
    }), I = function(Q, re = !0) {
      f(Q, re);
    }, E = W(() => {
      const { validateOnInput: U, validateOnChange: Q, validateOnBlur: re, validateOnModelUpdate: ne } = vN(e);
      function fe(te) {
        m(te, re), wt(t.attrs.onBlur) && t.attrs.onBlur(te);
      }
      function X(te) {
        I(te, U), wt(t.attrs.onInput) && t.attrs.onInput(te);
      }
      function ae(te) {
        I(te, Q), wt(t.attrs.onChange) && t.attrs.onChange(te);
      }
      const V = {
        name: e.name,
        onBlur: fe,
        onInput: X,
        onChange: ae
      };
      return V["onUpdate:modelValue"] = (te) => I(te, ne), V;
    }), N = W(() => {
      const U = Object.assign({}, E.value);
      ma(t.attrs.type) && $ && (U.checked = $.value);
      const Q = wc(e, t);
      return DE(Q, t.attrs) && (U.value = u.value), U;
    }), O = W(() => Object.assign(Object.assign({}, E.value), { modelValue: u.value }));
    function C() {
      return {
        field: N.value,
        componentField: O.value,
        value: u.value,
        meta: k,
        errors: l.value,
        errorMessage: c.value,
        validate: d,
        resetField: v,
        handleChange: I,
        handleInput: (U) => I(U, !1),
        handleReset: _,
        handleBlur: E.value.onBlur,
        setTouched: p,
        setErrors: y,
        setValue: x
      };
    }
    return t.expose({
      value: u,
      meta: k,
      errors: l,
      errorMessage: c,
      setErrors: y,
      setTouched: p,
      setValue: x,
      reset: v,
      validate: d,
      handleChange: f
    }), () => {
      const U = mt(wc(e, t)), Q = No(U, t, C);
      return U ? mn(U, Object.assign(Object.assign({}, t.attrs), N.value), Q) : Q;
    };
  }
});
function wc(e, t) {
  let r = e.as || "";
  return !e.as && !t.slots.default && (r = "input"), r;
}
function vN(e) {
  var t, r, a, n;
  const { validateOnInput: o, validateOnChange: i, validateOnBlur: l, validateOnModelUpdate: u } = Wn();
  return {
    validateOnInput: (t = e.validateOnInput) !== null && t !== void 0 ? t : o,
    validateOnChange: (r = e.validateOnChange) !== null && r !== void 0 ? r : i,
    validateOnBlur: (a = e.validateOnBlur) !== null && a !== void 0 ? a : l,
    validateOnModelUpdate: (n = e.validateOnModelUpdate) !== null && n !== void 0 ? n : u
  };
}
function gN(e, t) {
  return ma(t.attrs.type) ? mc(e, "modelValue") ? e.modelValue : void 0 : mc(e, "modelValue") ? e.modelValue : t.attrs.value;
}
const Ir = pN;
let hN = 0;
const Na = ["bails", "fieldsCount", "id", "multiple", "type", "validate"];
function th(e) {
  const t = e?.initialValues || {}, r = Object.assign({}, M(t)), a = s(e?.validationSchema);
  return a && en(a) && wt(a.cast) ? Ae(a.cast(r) || {}) : Ae(r);
}
function nh(e) {
  var t;
  const r = hN++, a = e?.name || "Form";
  let n = 0;
  const o = me(!1), i = me(!1), l = me(0), u = [], c = pn(th(e)), d = me([]), f = me({}), m = me({}), p = LE(() => {
    m.value = d.value.reduce((z, T) => (z[Ur(M(T.path))] = T, z), {});
  });
  function v(z, T) {
    const Z = te(z);
    if (!Z) {
      typeof z == "string" && (f.value[Ur(z)] = bi(T));
      return;
    }
    if (typeof z == "string") {
      const ee = Ur(z);
      f.value[ee] && delete f.value[ee];
    }
    Z.errors = bi(T), Z.valid = !Z.errors.length;
  }
  function _(z) {
    Dt(z).forEach((T) => {
      v(T, z[T]);
    });
  }
  e?.initialErrors && _(e.initialErrors);
  const k = W(() => {
    const z = d.value.reduce((T, Z) => (Z.errors.length && (T[M(Z.path)] = Z.errors), T), {});
    return Object.assign(Object.assign({}, f.value), z);
  }), $ = W(() => Dt(k.value).reduce((z, T) => {
    const Z = k.value[T];
    return Z?.length && (z[T] = Z[0]), z;
  }, {})), y = W(() => d.value.reduce((z, T) => (z[M(T.path)] = { name: M(T.path) || "", label: T.label || "" }, z), {})), x = W(() => d.value.reduce((z, T) => {
    var Z;
    return z[M(T.path)] = (Z = T.bails) !== null && Z !== void 0 ? Z : !0, z;
  }, {})), I = Object.assign({}, e?.initialErrors || {}), E = (t = e?.keepValuesOnUnmount) !== null && t !== void 0 ? t : !1, { initialValues: N, originalInitialValues: O, setInitialValues: C } = _N(d, c, e), U = bN(d, c, O, $), Q = W(() => d.value.reduce((z, T) => {
    const Z = Xe(c, M(T.path));
    return ht(z, M(T.path), Z), z;
  }, {})), re = e?.validationSchema;
  function ne(z, T) {
    var Z, ee;
    const ge = W(() => Xe(N.value, M(z))), ke = m.value[M(z)], _e = T?.type === "checkbox" || T?.type === "radio";
    if (ke && _e) {
      ke.multiple = !0;
      const Gt = n++;
      return Array.isArray(ke.id) ? ke.id.push(Gt) : ke.id = [ke.id, Gt], ke.fieldsCount++, ke.__flags.pendingUnmount[Gt] = !1, ke;
    }
    const Ye = W(() => Xe(c, M(z))), st = M(z), kt = Ce.findIndex((Gt) => Gt === st);
    kt !== -1 && Ce.splice(kt, 1);
    const We = W(() => {
      var Gt, Nr, To, Po;
      const Ao = M(re);
      if (en(Ao))
        return (Nr = (Gt = Ao.describe) === null || Gt === void 0 ? void 0 : Gt.call(Ao, M(z)).required) !== null && Nr !== void 0 ? Nr : !1;
      const Do = M(T?.schema);
      return en(Do) && (Po = (To = Do.describe) === null || To === void 0 ? void 0 : To.call(Do).required) !== null && Po !== void 0 ? Po : !1;
    }), St = n++, At = pn({
      id: St,
      path: z,
      touched: !1,
      pending: !1,
      valid: !0,
      validated: !!(!((Z = I[st]) === null || Z === void 0) && Z.length),
      required: We,
      initialValue: ge,
      errors: Ut([]),
      bails: (ee = T?.bails) !== null && ee !== void 0 ? ee : !1,
      label: T?.label,
      type: T?.type || "default",
      value: Ye,
      multiple: !1,
      __flags: {
        pendingUnmount: { [St]: !1 },
        pendingReset: !1
      },
      fieldsCount: 1,
      validate: T?.validate,
      dirty: W(() => !yt(s(Ye), s(ge)))
    });
    return d.value.push(At), m.value[st] = At, p(), $.value[st] && !I[st] && xt(() => {
      R(st, { mode: "silent" });
    }), dn(z) && Ue(z, (Gt) => {
      p();
      const Nr = Ae(Ye.value);
      m.value[Gt] = At, xt(() => {
        ht(c, Gt, Nr);
      });
    }), At;
  }
  const fe = bc(we, 5), X = bc(we, 5), ae = hi(async (z) => await (z === "silent" ? fe() : X()), (z, [T]) => {
    const Z = Dt(ue.errorBag.value), ge = [
      .../* @__PURE__ */ new Set([...Dt(z.results), ...d.value.map((ke) => ke.path), ...Z])
    ].sort().reduce((ke, _e) => {
      var Ye;
      const st = _e, kt = te(st) || J(st), We = ((Ye = z.results[st]) === null || Ye === void 0 ? void 0 : Ye.errors) || [], St = M(kt?.path) || st, At = yN({ errors: We, valid: !We.length }, ke.results[St]);
      return ke.results[St] = At, At.valid || (ke.errors[St] = At.errors[0]), kt && f.value[St] && delete f.value[St], kt ? (kt.valid = At.valid, T === "silent" || T === "validated-only" && !kt.validated || v(kt, At.errors), ke) : (v(St, We), ke);
    }, {
      valid: z.valid,
      results: {},
      errors: {},
      source: z.source
    });
    return z.values && (ge.values = z.values, ge.source = z.source), Dt(ge.results).forEach((ke) => {
      var _e;
      const Ye = te(ke);
      Ye && T !== "silent" && (T === "validated-only" && !Ye.validated || v(Ye, (_e = ge.results[ke]) === null || _e === void 0 ? void 0 : _e.errors));
    }), ge;
  });
  function V(z) {
    d.value.forEach(z);
  }
  function te(z) {
    const T = typeof z == "string" ? Ur(z) : z;
    return typeof T == "string" ? m.value[T] : T;
  }
  function J(z) {
    return d.value.filter((Z) => z.startsWith(M(Z.path))).reduce((Z, ee) => Z ? ee.path.length > Z.path.length ? ee : Z : ee, void 0);
  }
  let Ce = [], Ze;
  function it(z) {
    return Ce.push(z), Ze || (Ze = xt(() => {
      [...Ce].sort().reverse().forEach((Z) => {
        gc(c, Z);
      }), Ce = [], Ze = null;
    })), Ze;
  }
  function Pt(z) {
    return function(Z, ee) {
      return function(ke) {
        return ke instanceof Event && (ke.preventDefault(), ke.stopPropagation()), V((_e) => _e.touched = !0), o.value = !0, l.value++, S().then((_e) => {
          const Ye = Ae(c);
          if (_e.valid && typeof Z == "function") {
            const st = Ae(Q.value);
            let kt = z ? st : Ye;
            return _e.values && (kt = _e.source === "schema" ? _e.values : Object.assign({}, kt, _e.values)), Z(kt, {
              evt: ke,
              controlledValues: st,
              setErrors: _,
              setFieldError: v,
              setTouched: Yt,
              setFieldTouched: Je,
              setValues: rt,
              setFieldValue: Ee,
              resetForm: b,
              resetField: En
            });
          }
          !_e.valid && typeof ee == "function" && ee({
            values: Ye,
            evt: ke,
            errors: _e.errors,
            results: _e.results
          });
        }).then((_e) => (o.value = !1, _e), (_e) => {
          throw o.value = !1, _e;
        });
      };
    };
  }
  const Pe = Pt(!1);
  Pe.withControlled = Pt(!0);
  function Et(z, T) {
    const Z = d.value.findIndex((ge) => ge.path === z && (Array.isArray(ge.id) ? ge.id.includes(T) : ge.id === T)), ee = d.value[Z];
    if (!(Z === -1 || !ee)) {
      if (xt(() => {
        R(z, { mode: "silent", warn: !1 });
      }), ee.multiple && ee.fieldsCount && ee.fieldsCount--, Array.isArray(ee.id)) {
        const ge = ee.id.indexOf(T);
        ge >= 0 && ee.id.splice(ge, 1), delete ee.__flags.pendingUnmount[T];
      }
      (!ee.multiple || ee.fieldsCount <= 0) && (d.value.splice(Z, 1), Y(z), p(), delete m.value[z]);
    }
  }
  function se(z) {
    Dt(m.value).forEach((T) => {
      T.startsWith(z) && delete m.value[T];
    }), d.value = d.value.filter((T) => !T.path.startsWith(z)), xt(() => {
      p();
    });
  }
  const ue = {
    name: a,
    formId: r,
    values: c,
    controlledValues: Q,
    errorBag: k,
    errors: $,
    schema: re,
    submitCount: l,
    meta: U,
    isSubmitting: o,
    isValidating: i,
    fieldArrays: u,
    keepValuesOnUnmount: E,
    validateSchema: s(re) ? ae : void 0,
    validate: S,
    setFieldError: v,
    validateField: R,
    setFieldValue: Ee,
    setValues: rt,
    setErrors: _,
    setFieldTouched: Je,
    setTouched: Yt,
    resetForm: b,
    resetField: En,
    handleSubmit: Pe,
    useFieldModel: Te,
    defineInputBinds: Me,
    defineComponentBinds: Vt,
    defineField: H,
    stageInitialValue: Se,
    unsetInitialValue: Y,
    setFieldInitialValue: xe,
    createPathState: ne,
    getPathState: te,
    unsetPathValue: it,
    removePathState: Et,
    initialValues: N,
    getAllPathStates: () => d.value,
    destroyPath: se,
    isFieldTouched: Rt,
    isFieldDirty: hn,
    isFieldValid: Jt
  };
  function Ee(z, T, Z = !0) {
    const ee = Ae(T), ge = typeof z == "string" ? z : z.path;
    te(ge) || ne(ge), ht(c, ge, ee), Z && R(ge);
  }
  function Ne(z, T = !0) {
    Dt(c).forEach((Z) => {
      delete c[Z];
    }), Dt(z).forEach((Z) => {
      Ee(Z, z[Z], !1);
    }), T && S();
  }
  function rt(z, T = !0) {
    qr(c, z), u.forEach((Z) => Z && Z.reset()), T && S();
  }
  function lt(z, T) {
    const Z = te(M(z)) || ne(z);
    return W({
      get() {
        return Z.value;
      },
      set(ee) {
        var ge;
        const ke = M(z);
        Ee(ke, ee, (ge = M(T)) !== null && ge !== void 0 ? ge : !1);
      }
    });
  }
  function Je(z, T) {
    const Z = te(z);
    Z && (Z.touched = T);
  }
  function Rt(z) {
    const T = te(z);
    return T ? T.touched : d.value.filter((Z) => Z.path.startsWith(z)).some((Z) => Z.touched);
  }
  function hn(z) {
    const T = te(z);
    return T ? T.dirty : d.value.filter((Z) => Z.path.startsWith(z)).some((Z) => Z.dirty);
  }
  function Jt(z) {
    const T = te(z);
    return T ? T.valid : d.value.filter((Z) => Z.path.startsWith(z)).every((Z) => Z.valid);
  }
  function Yt(z) {
    if (typeof z == "boolean") {
      V((T) => {
        T.touched = z;
      });
      return;
    }
    Dt(z).forEach((T) => {
      Je(T, !!z[T]);
    });
  }
  function En(z, T) {
    var Z;
    const ee = T && "value" in T ? T.value : Xe(N.value, z), ge = te(z);
    ge && (ge.__flags.pendingReset = !0), xe(z, Ae(ee), !0), Ee(z, ee, !1), Je(z, (Z = T?.touched) !== null && Z !== void 0 ? Z : !1), v(z, T?.errors || []), xt(() => {
      ge && (ge.__flags.pendingReset = !1);
    });
  }
  function b(z, T) {
    let Z = Ae(z?.values ? z.values : O.value);
    Z = T?.force ? Z : qr(O.value, Z), Z = en(re) && wt(re.cast) ? re.cast(Z) : Z, C(Z, { force: T?.force }), V((ee) => {
      var ge;
      ee.__flags.pendingReset = !0, ee.validated = !1, ee.touched = ((ge = z?.touched) === null || ge === void 0 ? void 0 : ge[M(ee.path)]) || !1, Ee(M(ee.path), Xe(Z, M(ee.path)), !1), v(M(ee.path), void 0);
    }), T?.force ? Ne(Z, !1) : rt(Z, !1), _(z?.errors || {}), l.value = z?.submitCount || 0, xt(() => {
      S({ mode: "silent" }), V((ee) => {
        ee.__flags.pendingReset = !1;
      });
    });
  }
  async function S(z) {
    const T = z?.mode || "force";
    if (T === "force" && V((_e) => _e.validated = !0), ue.validateSchema)
      return ue.validateSchema(T);
    i.value = !0;
    const Z = await Promise.all(d.value.map((_e) => _e.validate ? _e.validate(z).then((Ye) => ({
      key: M(_e.path),
      valid: Ye.valid,
      errors: Ye.errors,
      value: Ye.value
    })) : Promise.resolve({
      key: M(_e.path),
      valid: !0,
      errors: [],
      value: void 0
    })));
    i.value = !1;
    const ee = {}, ge = {}, ke = {};
    for (const _e of Z)
      ee[_e.key] = {
        valid: _e.valid,
        errors: _e.errors
      }, _e.value && ht(ke, _e.key, _e.value), _e.errors.length && (ge[_e.key] = _e.errors[0]);
    return {
      valid: Z.every((_e) => _e.valid),
      results: ee,
      errors: ge,
      values: ke,
      source: "fields"
    };
  }
  async function R(z, T) {
    var Z;
    const ee = te(z);
    if (ee && T?.mode !== "silent" && (ee.validated = !0), re) {
      const { results: ke } = await ae(T?.mode || "validated-only");
      return ke[z] || { errors: [], valid: !0 };
    }
    return ee?.validate ? ee.validate(T) : (!ee && ((Z = T?.warn) !== null && Z !== void 0 ? Z : !0) && process.env.NODE_ENV !== "production" && Fc(`field with path ${z} was not found`), Promise.resolve({ errors: [], valid: !0 }));
  }
  function Y(z) {
    gc(N.value, z);
  }
  function Se(z, T, Z = !1) {
    xe(z, T), ht(c, z, T), Z && !e?.initialValues && ht(O.value, z, Ae(T));
  }
  function xe(z, T, Z = !1) {
    ht(N.value, z, Ae(T)), Z && ht(O.value, z, Ae(T));
  }
  async function we() {
    const z = s(re);
    if (!z)
      return { valid: !0, results: {}, errors: {}, source: "none" };
    i.value = !0;
    const T = Qa(z) || en(z) ? await qE(z, c) : await XE(z, c, {
      names: y.value,
      bailsMap: x.value
    });
    return i.value = !1, T;
  }
  const L = Pe((z, { evt: T }) => {
    Wg(T) && T.target.submit();
  });
  An(() => {
    if (e?.initialErrors && _(e.initialErrors), e?.initialTouched && Yt(e.initialTouched), e?.validateOnMount) {
      S();
      return;
    }
    ue.validateSchema && ue.validateSchema("silent");
  }), dn(re) && Ue(re, () => {
    var z;
    (z = ue.validateSchema) === null || z === void 0 || z.call(ue, "validated-only");
  }), cr(or, ue), process.env.NODE_ENV !== "production" && (aN(ue), Ue(() => Object.assign(Object.assign({ errors: k.value }, U.value), { values: c, isSubmitting: o.value, isValidating: i.value, submitCount: l.value }), _r, {
    deep: !0
  }));
  function H(z, T) {
    const Z = wt(T) ? void 0 : T?.label, ee = te(M(z)) || ne(z, { label: Z }), ge = () => wt(T) ? T(Ea(ee, Na)) : T || {};
    function ke() {
      var We;
      ee.touched = !0, ((We = ge().validateOnBlur) !== null && We !== void 0 ? We : Wn().validateOnBlur) && R(M(ee.path));
    }
    function _e() {
      var We;
      ((We = ge().validateOnInput) !== null && We !== void 0 ? We : Wn().validateOnInput) && xt(() => {
        R(M(ee.path));
      });
    }
    function Ye() {
      var We;
      ((We = ge().validateOnChange) !== null && We !== void 0 ? We : Wn().validateOnChange) && xt(() => {
        R(M(ee.path));
      });
    }
    const st = W(() => {
      const We = {
        onChange: Ye,
        onInput: _e,
        onBlur: ke
      };
      return wt(T) ? Object.assign(Object.assign({}, We), T(Ea(ee, Na)).props || {}) : T?.props ? Object.assign(Object.assign({}, We), T.props(Ea(ee, Na))) : We;
    });
    return [lt(z, () => {
      var We, St, At;
      return (At = (We = ge().validateOnModelUpdate) !== null && We !== void 0 ? We : (St = Wn()) === null || St === void 0 ? void 0 : St.validateOnModelUpdate) !== null && At !== void 0 ? At : !0;
    }), st];
  }
  function Te(z) {
    return Array.isArray(z) ? z.map((T) => lt(T, !0)) : lt(z);
  }
  function Me(z, T) {
    const [Z, ee] = H(z, T);
    function ge() {
      ee.value.onBlur();
    }
    function ke(Ye) {
      const st = eo(Ye);
      Ee(M(z), st, !1), ee.value.onInput();
    }
    function _e(Ye) {
      const st = eo(Ye);
      Ee(M(z), st, !1), ee.value.onChange();
    }
    return W(() => Object.assign(Object.assign({}, ee.value), {
      onBlur: ge,
      onInput: ke,
      onChange: _e,
      value: Z.value
    }));
  }
  function Vt(z, T) {
    const [Z, ee] = H(z, T), ge = te(M(z));
    function ke(_e) {
      Z.value = _e;
    }
    return W(() => {
      const _e = wt(T) ? T(Ea(ge, Na)) : T || {};
      return Object.assign({ [_e.model || "modelValue"]: Z.value, [`onUpdate:${_e.model || "modelValue"}`]: ke }, ee.value);
    });
  }
  const on = Object.assign(Object.assign({}, ue), { values: yi(c), handleReset: () => b(), submitForm: L });
  return cr(NE, on), on;
}
function bN(e, t, r, a) {
  const n = {
    touched: "some",
    pending: "some",
    valid: "every"
  }, o = W(() => !yt(t, s(r)));
  function i() {
    const u = e.value;
    return Dt(n).reduce((c, d) => {
      const f = n[d];
      return c[d] = u[f]((m) => m[d]), c;
    }, {});
  }
  const l = pn(i());
  return nr(() => {
    const u = i();
    l.touched = u.touched, l.valid = u.valid, l.pending = u.pending;
  }), W(() => Object.assign(Object.assign({ initialValues: s(r) }, l), { valid: l.valid && !Dt(a.value).length, dirty: o.value }));
}
function _N(e, t, r) {
  const a = th(r), n = me(a), o = me(Ae(a));
  function i(l, u) {
    u?.force ? (n.value = Ae(l), o.value = Ae(l)) : (n.value = qr(Ae(n.value) || {}, Ae(l)), o.value = qr(Ae(o.value) || {}, Ae(l))), u?.updateFields && e.value.forEach((c) => {
      if (c.touched)
        return;
      const f = Xe(n.value, M(c.path));
      ht(t, M(c.path), Ae(f));
    });
  }
  return {
    initialValues: n,
    originalInitialValues: o,
    setInitialValues: i
  };
}
function yN(e, t) {
  return t ? {
    valid: e.valid && t.valid,
    errors: [...e.errors, ...t.errors]
  } : e;
}
const $N = /* @__PURE__ */ D({
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
    const r = zn(e, "validationSchema"), a = zn(e, "keepValues"), { errors: n, errorBag: o, values: i, meta: l, isSubmitting: u, isValidating: c, submitCount: d, controlledValues: f, validate: m, validateField: p, handleReset: v, resetForm: _, handleSubmit: k, setErrors: $, setFieldError: y, setFieldValue: x, setValues: I, setFieldTouched: E, setTouched: N, resetField: O } = nh({
      validationSchema: r.value ? r : void 0,
      initialValues: e.initialValues,
      initialErrors: e.initialErrors,
      initialTouched: e.initialTouched,
      validateOnMount: e.validateOnMount,
      keepValuesOnUnmount: a,
      name: e.name
    }), C = k((V, { evt: te }) => {
      Wg(te) && te.target.submit();
    }, e.onInvalidSubmit), U = e.onSubmit ? k(e.onSubmit, e.onInvalidSubmit) : C;
    function Q(V) {
      Ds(V) && V.preventDefault(), v(), typeof t.attrs.onReset == "function" && t.attrs.onReset();
    }
    function re(V, te) {
      return k(typeof V == "function" && !te ? V : te, e.onInvalidSubmit)(V);
    }
    function ne() {
      return Ae(i);
    }
    function fe() {
      return Ae(l.value);
    }
    function X() {
      return Ae(n.value);
    }
    function ae() {
      return {
        meta: l.value,
        errors: n.value,
        errorBag: o.value,
        values: i,
        isSubmitting: u.value,
        isValidating: c.value,
        submitCount: d.value,
        controlledValues: f.value,
        validate: m,
        validateField: p,
        handleSubmit: re,
        handleReset: v,
        submitForm: C,
        setErrors: $,
        setFieldError: y,
        setFieldValue: x,
        setValues: I,
        setFieldTouched: E,
        setTouched: N,
        resetForm: _,
        resetField: O,
        getValues: ne,
        getMeta: fe,
        getErrors: X
      };
    }
    return t.expose({
      setFieldError: y,
      setErrors: $,
      setFieldValue: x,
      setValues: I,
      setFieldTouched: E,
      setTouched: N,
      resetForm: _,
      validate: m,
      validateField: p,
      resetField: O,
      getValues: ne,
      getMeta: fe,
      getErrors: X,
      values: i,
      meta: l,
      errors: n
    }), function() {
      const te = e.as === "form" ? e.as : e.as ? mt(e.as) : null, J = No(te, t, ae);
      return te ? mn(te, Object.assign(Object.assign(Object.assign({}, te === "form" ? {
        // Disables native validation as vee-validate will handle it.
        novalidate: !0
      } : {}), t.attrs), { onSubmit: U, onReset: Q }), J) : J;
    };
  }
}), wN = $N;
function kN(e) {
  const t = va(or, void 0), r = me([]), a = () => {
  }, n = {
    fields: r,
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
    return process.env.NODE_ENV !== "production" && Ca("FieldArray requires being a child of `<Form/>` or `useForm` being called before it. Array fields may not work correctly"), n;
  if (!s(e))
    return process.env.NODE_ENV !== "production" && Ca("FieldArray requires a field path to be provided, did you forget to pass the `name` prop?"), n;
  const o = t.fieldArrays.find((E) => s(E.path) === s(e));
  if (o)
    return o;
  let i = 0;
  function l() {
    return Xe(t?.values, M(e), []) || [];
  }
  function u() {
    const E = l();
    Array.isArray(E) && (r.value = E.map((N, O) => d(N, O, r.value)), c());
  }
  u();
  function c() {
    const E = r.value.length;
    for (let N = 0; N < E; N++) {
      const O = r.value[N];
      O.isFirst = N === 0, O.isLast = N === E - 1;
    }
  }
  function d(E, N, O) {
    if (O && !ur(N) && O[N])
      return O[N];
    const C = i++;
    return {
      key: C,
      value: UE({
        get() {
          const Q = Xe(t?.values, M(e), []) || [], re = r.value.findIndex((ne) => ne.key === C);
          return re === -1 ? E : Q[re];
        },
        set(Q) {
          const re = r.value.findIndex((ne) => ne.key === C);
          if (re === -1) {
            process.env.NODE_ENV !== "production" && Ca("Attempting to update a non-existent array item");
            return;
          }
          $(re, Q);
        }
      }),
      // will be auto unwrapped
      isFirst: !1,
      isLast: !1
    };
  }
  function f() {
    c(), t?.validate({ mode: "silent" });
  }
  function m(E) {
    const N = M(e), O = Xe(t?.values, N);
    if (!O || !Array.isArray(O))
      return;
    const C = [...O];
    C.splice(E, 1);
    const U = N + `[${E}]`;
    t.destroyPath(U), t.unsetInitialValue(U), ht(t.values, N, C), r.value.splice(E, 1), f();
  }
  function p(E) {
    const N = Ae(E), O = M(e), C = Xe(t?.values, O), U = ur(C) ? [] : C;
    if (!Array.isArray(U))
      return;
    const Q = [...U];
    Q.push(N), t.stageInitialValue(O + `[${Q.length - 1}]`, N), ht(t.values, O, Q), r.value.push(d(N)), f();
  }
  function v(E, N) {
    const O = M(e), C = Xe(t?.values, O);
    if (!Array.isArray(C) || !(E in C) || !(N in C))
      return;
    const U = [...C], Q = [...r.value], re = U[E];
    U[E] = U[N], U[N] = re;
    const ne = Q[E];
    Q[E] = Q[N], Q[N] = ne, ht(t.values, O, U), r.value = Q, c();
  }
  function _(E, N) {
    const O = Ae(N), C = M(e), U = Xe(t?.values, C);
    if (!Array.isArray(U) || U.length < E)
      return;
    const Q = [...U], re = [...r.value];
    Q.splice(E, 0, O), re.splice(E, 0, d(O)), ht(t.values, C, Q), r.value = re, f();
  }
  function k(E) {
    const N = M(e);
    t.stageInitialValue(N, E), ht(t.values, N, E), u(), f();
  }
  function $(E, N) {
    const O = M(e), C = Xe(t?.values, O);
    !Array.isArray(C) || C.length - 1 < E || (ht(t.values, `${O}[${E}]`, N), t?.validate({ mode: "validated-only" }));
  }
  function y(E) {
    const N = Ae(E), O = M(e), C = Xe(t?.values, O), U = ur(C) ? [] : C;
    if (!Array.isArray(U))
      return;
    const Q = [N, ...U];
    ht(t.values, O, Q), t.stageInitialValue(O + "[0]", N), r.value.unshift(d(N)), f();
  }
  function x(E, N) {
    const O = M(e), C = Xe(t?.values, O), U = ur(C) ? [] : [...C];
    if (!Array.isArray(C) || !(E in C) || !(N in C))
      return;
    const Q = [...r.value], re = Q[E];
    Q.splice(E, 1), Q.splice(N, 0, re);
    const ne = U[E];
    U.splice(E, 1), U.splice(N, 0, ne), ht(t.values, O, U), r.value = Q, f();
  }
  const I = {
    fields: r,
    remove: m,
    push: p,
    swap: v,
    insert: _,
    update: $,
    replace: k,
    prepend: y,
    move: x
  };
  return t.fieldArrays.push(Object.assign({ path: e, reset: u }, I)), wi(() => {
    const E = t.fieldArrays.findIndex((N) => M(N.path) === M(e));
    E >= 0 && t.fieldArrays.splice(E, 1);
  }), Ue(l, (E) => {
    const N = r.value.map((O) => O.value);
    yt(E, N) || u();
  }), I;
}
const SN = /* @__PURE__ */ D({
  name: "FieldArray",
  inheritAttrs: !1,
  props: {
    name: {
      type: String,
      required: !0
    }
  },
  setup(e, t) {
    const { push: r, remove: a, swap: n, insert: o, replace: i, update: l, prepend: u, move: c, fields: d } = kN(() => e.name);
    function f() {
      return {
        fields: d.value,
        push: r,
        remove: a,
        swap: n,
        insert: o,
        update: l,
        replace: i,
        prepend: u,
        move: c
      };
    }
    return t.expose({
      push: r,
      remove: a,
      swap: n,
      insert: o,
      update: l,
      replace: i,
      prepend: u,
      move: c
    }), () => No(void 0, t, f);
  }
}), IN = SN, xN = /* @__PURE__ */ D({
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
    const r = vn(or, void 0), a = W(() => r?.errors.value[e.name]);
    function n() {
      return {
        message: a.value
      };
    }
    return () => {
      if (!a.value)
        return;
      const o = e.as ? mt(e.as) : e.as, i = No(o, t, n), l = Object.assign({ role: "alert" }, t.attrs);
      return !o && (Array.isArray(i) || !i) && i?.length ? i : (Array.isArray(i) || !i) && !i?.length ? mn(o || "span", l, a.value) : mn(o, l, i);
    };
  }
}), ON = xN;
function EN(e) {
  const t = va(or), r = e ? void 0 : vn(fa);
  return W(() => e ? Xe(t?.values, M(e)) : M(r?.value));
}
function NN() {
  const e = va(or);
  return e || process.env.NODE_ENV !== "production" && Ca("No vee-validate <Form /> or `useForm` was detected in the component tree"), W(() => e?.values || {});
}
const kc = (e) => e !== null && !!e && typeof e == "object" && !Array.isArray(e);
function rh(e) {
  return Number(e) >= 0;
}
function zN(e) {
  return typeof e == "object" && e !== null;
}
function TN(e) {
  return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
function Sc(e) {
  if (!zN(e) || TN(e) !== "[object Object]")
    return !1;
  if (Object.getPrototypeOf(e) === null)
    return !0;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function ah(e, t) {
  return Object.keys(t).forEach((r) => {
    if (Sc(t[r]) && Sc(e[r])) {
      e[r] || (e[r] = {}), ah(e[r], t[r]);
      return;
    }
    e[r] = t[r];
  }), e;
}
function PN(e) {
  const t = e.split(".");
  if (!t.length)
    return "";
  let r = String(t[0]);
  for (let a = 1; a < t.length; a++) {
    if (rh(t[a])) {
      r += `[${t[a]}]`;
      continue;
    }
    r += `.${t[a]}`;
  }
  return r;
}
function oh(e, t) {
  return {
    __type: "VVTypedSchema",
    async parse(a) {
      const n = await e.safeParseAsync(a, t);
      if (n.success)
        return {
          value: n.data,
          errors: []
        };
      const o = {};
      return ih(n.error.issues, o), {
        errors: Object.values(o)
      };
    },
    cast(a) {
      try {
        return e.parse(a);
      } catch {
        const o = lh(e);
        return kc(o) && kc(a) ? ah(o, a) : a;
      }
    },
    describe(a) {
      try {
        if (!a)
          return {
            required: !e.isOptional(),
            exists: !0
          };
        const n = AN(a, e);
        return n ? {
          required: !n.isOptional(),
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
function ih(e, t) {
  e.forEach((r) => {
    const a = PN(r.path.join("."));
    r.code === "invalid_union" && (ih(r.unionErrors.flatMap((n) => n.issues), t), !a) || (t[a] || (t[a] = { errors: [], path: a }), t[a].errors.push(r.message));
  });
}
function lh(e) {
  if (e instanceof hr)
    return Object.fromEntries(Object.entries(e.shape).map(([t, r]) => r instanceof xo ? [t, r._def.defaultValue()] : r instanceof hr ? [t, lh(r)] : [t, void 0]));
}
function AN(e, t) {
  if (!Ic(t))
    return null;
  if (pa(e))
    return t.shape[Eo(e)];
  const r = (e || "").split(/\.|\[(\d+)\]/).filter(Boolean);
  let a = t;
  for (let n = 0; n <= r.length; n++) {
    const o = r[n];
    if (!o || !a)
      return a;
    if (Ic(a)) {
      a = a.shape[o] || null;
      continue;
    }
    rh(o) && DN(a) && (a = a._def.type);
  }
  return null;
}
function sh(e) {
  return e._def.typeName;
}
function DN(e) {
  return sh(e) === Yr.ZodArray;
}
function Ic(e) {
  return sh(e) === Yr.ZodObject;
}
const uh = Symbol();
function zo() {
  const e = vn(fa), t = vn(uh);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { name: r, errorMessage: a, meta: n } = e, o = t, i = {
    valid: W(() => n.valid),
    isDirty: W(() => n.dirty),
    isTouched: W(() => n.touched),
    error: a
  };
  return {
    id: o,
    name: r,
    formItemId: `${o}-form-item`,
    formDescriptionId: `${o}-form-item-description`,
    formMessageId: `${o}-form-item-message`,
    ...i
  };
}
const xr = /* @__PURE__ */ D({
  __name: "FormControl",
  setup(e) {
    const { error: t, formItemId: r, formDescriptionId: a, formMessageId: n } = zo();
    return (o, i) => (g(), A(s(Pb), {
      id: s(r),
      "data-slot": "form-control",
      "aria-describedby": s(t) ? `${s(a)} ${s(n)}` : `${s(a)}`,
      "aria-invalid": !!s(t)
    }, {
      default: h(() => [
        j(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "aria-describedby", "aria-invalid"]));
  }
}), CN = ["id"], Or = /* @__PURE__ */ D({
  __name: "FormDescription",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { formDescriptionId: r } = zo();
    return (a, n) => (g(), F("p", {
      id: s(r),
      "data-slot": "form-description",
      class: be(s(G)("text-muted-foreground text-sm", t.class))
    }, [
      j(a.$slots, "default")
    ], 10, CN));
  }
}), Rn = /* @__PURE__ */ D({
  __name: "FormItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, r = Ab();
    return cr(uh, r), (a, n) => (g(), F("div", {
      "data-slot": "form-item",
      class: be(s(G)("grid gap-2", t.class))
    }, [
      j(a.$slots, "default")
    ], 2));
  }
}), ch = /* @__PURE__ */ D({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = ve(t, "class");
    return (a, n) => (g(), A(s(Db), K({ "data-slot": "label" }, s(r), {
      class: s(G)(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        t.class
      )
    }), {
      default: h(() => [
        j(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), jN = /* @__PURE__ */ D({
  __name: "FormLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, { error: r, formItemId: a } = zo();
    return (n, o) => (g(), A(s(ch), {
      "data-slot": "form-label",
      "data-error": !!s(r),
      class: be(s(G)(
        "data-[error=true]:text-destructive",
        t.class
      )),
      for: s(a)
    }, {
      default: h(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-error", "class", "for"]));
  }
}), ir = /* @__PURE__ */ D({
  __name: "FormMessage",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { name: r, formMessageId: a } = zo();
    return (n, o) => (g(), A(s(ON), {
      id: s(a),
      "data-slot": "form-message",
      as: "p",
      name: M(s(r)),
      class: be(s(G)("text-destructive text-sm", t.class))
    }, null, 8, ["id", "name", "class"]));
  }
}), dh = /* @__PURE__ */ D({
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
    const n = He(e, t);
    return (o, i) => (g(), A(s(Cb), K({ "data-slot": "accordion" }, s(n)), {
      default: h(() => [
        j(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fh = /* @__PURE__ */ D({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = ve(t, "class");
    return (a, n) => (g(), A(s(jb), K({ "data-slot": "accordion-content" }, s(r), { class: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm" }), {
      default: h(() => [
        ie("div", {
          class: be(s(G)("pt-0 pb-4", t.class))
        }, [
          j(a.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 16));
  }
}), mh = /* @__PURE__ */ D({
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
    const t = e, r = ve(t, "class"), a = Qe(r);
    return (n, o) => (g(), A(s(Ub), K({ "data-slot": "accordion-item" }, s(a), {
      class: s(G)("border-b last:border-b-0", t.class)
    }), {
      default: h(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ph = /* @__PURE__ */ D({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = ve(t, "class");
    return (a, n) => (g(), A(s(Lb), { class: "flex" }, {
      default: h(() => [
        w(s(Rb), K({ "data-slot": "accordion-trigger" }, s(r), {
          class: s(G)(
            "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
            t.class
          )
        }), {
          default: h(() => [
            j(a.$slots, "default"),
            j(a.$slots, "icon", {}, () => [
              w(s(Gn), { class: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" })
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), UN = {
  key: 0,
  class: "text-destructive"
}, Vn = /* @__PURE__ */ D({
  __name: "AutoFormLabel",
  props: {
    required: { type: Boolean }
  },
  setup(e) {
    return (t, r) => (g(), A(s(jN), null, {
      default: h(() => [
        j(t.$slots, "default"),
        e.required ? (g(), F("span", UN, " *")) : pe("", !0)
      ]),
      _: 3
    }));
  }
});
function fn(e) {
  let t = e.replace(/\[\d+\]/g, "").replace(/([A-Z])/g, " $1");
  return t = t.charAt(0).toUpperCase() + t.slice(1), t;
}
function LN(e) {
  const t = /\[(\d+)\]/, r = e.match(t);
  return r ? Number.parseInt(r[1]) : void 0;
}
function yr(e) {
  return e ? "innerType" in e._def ? yr(e._def.innerType) : "schema" in e._def ? yr(e._def.schema) : e : null;
}
function Us(e) {
  const t = yr(e);
  return t ? t._def.typeName : "";
}
function to(e) {
  const t = e;
  if (t._def.typeName === "ZodDefault")
    return t._def.defaultValue();
  if ("innerType" in t._def)
    return to(
      t._def.innerType
    );
  if ("schema" in t._def)
    return to(
      t._def.schema
    );
}
function vh(e) {
  const t = (e?._def).typeName;
  if (t === "ZodEffects" || t === "ZodTransform" || t === "ZodPipe") {
    const r = e;
    return vh(r._def.schema || r._def.in);
  }
  return e;
}
function gh(e) {
  return /^\[.+\]$/.test(e);
}
function RN(e) {
  return e !== null && !!e && typeof e == "object" && !Array.isArray(e);
}
function VN(e) {
  return RN(e) || Array.isArray(e);
}
function FN(e) {
  return gh(e) ? e.replace(/\[|\]/g, "") : e;
}
function xc(e, t, r) {
  return e ? gh(t) ? e[FN(t)] : (t || "").split(/\.|\[(\d+)\]/).filter(Boolean).reduce((n, o) => VN(n) && o in n ? n[o] : r, e) : r;
}
function MN(e) {
  switch (e) {
    case "true":
    case !0:
      return !0;
    case "false":
    case !1:
      return !1;
  }
}
function no(e) {
  return e ? MN(e) : void 0;
}
const BN = { class: "!my-4 flex justify-end" }, ZN = /* @__PURE__ */ D({
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
    function r(i) {
      return i instanceof ks;
    }
    function a(i) {
      return i instanceof xo;
    }
    const n = W(() => {
      if (!t.schema)
        return;
      const i = r(t.schema) ? t.schema._def.type : a(t.schema) ? t.schema._def.innerType._def.type : null;
      return {
        type: Us(i),
        schema: i
      };
    }), o = js(t.fieldName);
    return cr(fa, o), (i, l) => (g(), A(s(IN), {
      as: "section",
      name: e.fieldName
    }, {
      default: h(({ fields: u, remove: c, push: d }) => [
        j(i.$slots, "default", zt(Lt(t)), () => [
          w(s(dh), {
            type: "multiple",
            class: "w-full",
            collapsible: "",
            disabled: e.disabled,
            "as-child": ""
          }, {
            default: h(() => [
              w(s(Rn), null, {
                default: h(() => [
                  w(s(mh), {
                    value: e.fieldName,
                    class: "border-none"
                  }, {
                    default: h(() => [
                      w(s(ph), null, {
                        default: h(() => [
                          w(Vn, {
                            class: "text-base",
                            required: e.required
                          }, {
                            default: h(() => [
                              he(oe(e.schema?.description || s(fn)(e.fieldName)), 1)
                            ]),
                            _: 1
                          }, 8, ["required"])
                        ]),
                        _: 1
                      }),
                      w(s(fh), null, {
                        default: h(() => [
                          (g(!0), F(je, null, Ge(u, (f, m) => (g(), F("div", {
                            key: f.key,
                            class: "mb-4 p-1"
                          }, [
                            w(Ls, {
                              "field-name": `${e.fieldName}[${m}]`,
                              label: e.fieldName,
                              shape: n.value,
                              config: e.config
                            }, null, 8, ["field-name", "label", "shape", "config"]),
                            ie("div", BN, [
                              w(s(pt), {
                                type: "button",
                                size: "icon",
                                variant: "secondary",
                                onClick: (p) => c(m)
                              }, {
                                default: h(() => [
                                  w(s(Hc), { size: 16 })
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            f.isLast ? pe("", !0) : (g(), A(s(L$), { key: 0 }))
                          ]))), 128)),
                          w(s(pt), {
                            type: "button",
                            variant: "secondary",
                            class: "mt-4 flex items-center",
                            onClick: (f) => d(null)
                          }, {
                            default: h(() => [
                              w(s(oo), {
                                class: "mr-2",
                                size: 16
                              }),
                              l[0] || (l[0] = he(" Add ", -1))
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 2
                      }, 1024),
                      w(s(ir))
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
}), WN = /* @__PURE__ */ D({
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
    const r = e, a = t, n = ve(r, "class"), o = He(n, a);
    return (i, l) => (g(), A(s(Vb), K({ "data-slot": "switch" }, s(o), {
      class: s(G)(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        r.class
      )
    }), {
      default: h(() => [
        w(s(Fb), {
          "data-slot": "switch-thumb",
          class: be(s(G)("bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"))
        }, {
          default: h(() => [
            j(i.$slots, "thumb")
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), GN = { class: "space-y-0 mb-3 flex items-center gap-3" }, Oc = /* @__PURE__ */ D({
  __name: "AutoFormFieldBoolean",
  props: {
    fieldName: {},
    label: {},
    required: { type: Boolean },
    config: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, r = W(() => t.config?.component === "switch" ? WN : Da);
    return (a, n) => (g(), A(s(Ir), { name: e.fieldName }, {
      default: h((o) => [
        w(s(Rn), null, {
          default: h(() => [
            ie("div", GN, [
              w(s(xr), null, {
                default: h(() => [
                  j(a.$slots, "default", zt(Lt(o)), () => [
                    (g(), A(mt(r.value), {
                      disabled: s(no)(e.config?.inputProps?.disabled) ?? e.disabled,
                      name: o.componentField.name,
                      "model-value": o.componentField.modelValue,
                      "onUpdate:modelValue": o.componentField["onUpdate:modelValue"]
                    }, null, 8, ["disabled", "name", "model-value", "onUpdate:modelValue"]))
                  ])
                ]),
                _: 2
              }, 1024),
              e.config?.hideLabel ? pe("", !0) : (g(), A(Vn, {
                key: 0,
                required: e.required
              }, {
                default: h(() => [
                  he(oe(e.config?.label || s(fn)(e.label ?? e.fieldName)), 1)
                ]),
                _: 1
              }, 8, ["required"]))
            ]),
            e.config?.description ? (g(), A(s(Or), { key: 0 }, {
              default: h(() => [
                he(oe(e.config.description), 1)
              ]),
              _: 1
            })) : pe("", !0),
            w(s(ir))
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 8, ["name"]));
  }
}), HN = { class: "flex items-center gap-1" }, KN = { class: "flex flex-col gap-y-4 mt-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, JN = /* @__PURE__ */ D({
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
    const r = e, a = t, n = ve(r, "class"), o = He(n, a);
    return (i, l) => (g(), A(s(Mb), K({
      "data-slot": "calendar",
      class: s(G)("p-3", r.class)
    }, s(o)), {
      default: h(({ grid: u, weekDays: c }) => [
        w(s(nz), null, {
          default: h(() => [
            w(s(rz)),
            ie("div", HN, [
              w(s(oz)),
              w(s(az))
            ])
          ]),
          _: 1
        }),
        ie("div", KN, [
          (g(!0), F(je, null, Ge(u, (d) => (g(), A(s(XN), {
            key: d.value.toString()
          }, {
            default: h(() => [
              w(s(ez), null, {
                default: h(() => [
                  w(s(Ec), null, {
                    default: h(() => [
                      (g(!0), F(je, null, Ge(c, (f) => (g(), A(s(tz), { key: f }, {
                        default: h(() => [
                          he(oe(f), 1)
                        ]),
                        _: 2
                      }, 1024))), 128))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              w(s(QN), null, {
                default: h(() => [
                  (g(!0), F(je, null, Ge(d.rows, (f, m) => (g(), A(s(Ec), {
                    key: `weekDate-${m}`,
                    class: "mt-2 w-full"
                  }, {
                    default: h(() => [
                      (g(!0), F(je, null, Ge(f, (p) => (g(), A(s(YN), {
                        key: p.toString(),
                        date: p
                      }, {
                        default: h(() => [
                          w(s(qN), {
                            day: p,
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
}), YN = /* @__PURE__ */ D({
  __name: "CalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = ve(t, "class"), a = Qe(r);
    return (n, o) => (g(), A(s(Bb), K({
      "data-slot": "calendar-cell",
      class: s(G)("relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:rounded-md [&:has([data-selected])]:bg-accent", t.class)
    }, s(a)), {
      default: h(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), qN = /* @__PURE__ */ D({
  __name: "CalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "button" },
    class: {}
  },
  setup(e) {
    const t = e, r = ve(t, "class"), a = Qe(r);
    return (n, o) => (g(), A(s(Zb), K({
      "data-slot": "calendar-cell-trigger",
      class: s(G)(
        s(an)({ variant: "ghost" }),
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
    }, s(a)), {
      default: h(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), XN = /* @__PURE__ */ D({
  __name: "CalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = ve(t, "class"), a = Qe(r);
    return (n, o) => (g(), A(s(Wb), K({
      "data-slot": "calendar-grid",
      class: s(G)("w-full border-collapse space-x-1", t.class)
    }, s(a)), {
      default: h(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), QN = /* @__PURE__ */ D({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), A(s(Gb), K({ "data-slot": "calendar-grid-body" }, t), {
      default: h(() => [
        j(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ez = /* @__PURE__ */ D({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), A(s(Hb), K({ "data-slot": "calendar-grid-head" }, t), {
      default: h(() => [
        j(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ec = /* @__PURE__ */ D({
  __name: "CalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = ve(t, "class"), a = Qe(r);
    return (n, o) => (g(), A(s(Kb), K({
      "data-slot": "calendar-grid-row",
      class: s(G)("flex", t.class)
    }, s(a)), {
      default: h(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), tz = /* @__PURE__ */ D({
  __name: "CalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = ve(t, "class"), a = Qe(r);
    return (n, o) => (g(), A(s(Jb), K({
      "data-slot": "calendar-head-cell",
      class: s(G)("text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]", t.class)
    }, s(a)), {
      default: h(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), nz = /* @__PURE__ */ D({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = ve(t, "class"), a = Qe(r);
    return (n, o) => (g(), A(s(Yb), K({
      "data-slot": "calendar-header",
      class: s(G)("flex justify-center pt-1 relative items-center w-full", t.class)
    }, s(a)), {
      default: h(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), rz = /* @__PURE__ */ D({
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = ve(t, "class"), a = Qe(r);
    return (n, o) => (g(), A(s(qb), K({
      "data-slot": "calendar-heading",
      class: s(G)("text-sm font-medium", t.class)
    }, s(a)), {
      default: h(({ headingValue: i }) => [
        j(n.$slots, "default", { headingValue: i }, () => [
          he(oe(i), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), az = /* @__PURE__ */ D({
  __name: "CalendarNextButton",
  props: {
    nextPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = ve(t, "class"), a = Qe(r);
    return (n, o) => (g(), A(s(Xb), K({
      "data-slot": "calendar-next-button",
      class: s(G)(
        s(an)({ variant: "outline" }),
        "absolute right-1",
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        t.class
      )
    }, s(a)), {
      default: h(() => [
        j(n.$slots, "default", {}, () => [
          w(s(Hn), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), oz = /* @__PURE__ */ D({
  __name: "CalendarPrevButton",
  props: {
    prevPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = ve(t, "class"), a = Qe(r);
    return (n, o) => (g(), A(s(Qb), K({
      "data-slot": "calendar-prev-button",
      class: s(G)(
        s(an)({ variant: "outline" }),
        "absolute left-1",
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        t.class
      )
    }, s(a)), {
      default: h(() => [
        j(n.$slots, "default", {}, () => [
          w(s(zi), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), hh = /* @__PURE__ */ D({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = He(e, t);
    return (o, i) => (g(), A(s(e_), K({ "data-slot": "popover" }, s(n)), {
      default: h(() => [
        j(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bh = /* @__PURE__ */ D({
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
    const r = e, a = t, n = ve(r, "class"), o = He(n, a);
    return (i, l) => (g(), A(s(t_), null, {
      default: h(() => [
        w(s(n_), K({ "data-slot": "popover-content" }, { ...s(o), ...i.$attrs }, {
          class: s(G)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border p-4 shadow-md origin-(--reka-popover-content-transform-origin) outline-hidden",
            r.class
          )
        }), {
          default: h(() => [
            j(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), _h = /* @__PURE__ */ D({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), A(s(r_), K({ "data-slot": "popover-trigger" }, t), {
      default: h(() => [
        j(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
let Wo = null;
function iz() {
  return Wo == null && (Wo = new Intl.DateTimeFormat().resolvedOptions().timeZone), Wo;
}
let Go = /* @__PURE__ */ new Map();
class lz {
  /** Formats a date as a string according to the locale and format options passed to the constructor. */
  format(t) {
    return this.formatter.format(t);
  }
  /** Formats a date to an array of parts such as separators, numbers, punctuation, and more. */
  formatToParts(t) {
    return this.formatter.formatToParts(t);
  }
  /** Formats a date range as a string. */
  formatRange(t, r) {
    if (typeof this.formatter.formatRange == "function")
      return this.formatter.formatRange(t, r);
    if (r < t) throw new RangeError("End date must be >= start date");
    return `${this.formatter.format(t)} – ${this.formatter.format(r)}`;
  }
  /** Formats a date range as an array of parts. */
  formatRangeToParts(t, r) {
    if (typeof this.formatter.formatRangeToParts == "function")
      return this.formatter.formatRangeToParts(t, r);
    if (r < t) throw new RangeError("End date must be >= start date");
    let a = this.formatter.formatToParts(t), n = this.formatter.formatToParts(r);
    return [
      ...a.map((o) => ({
        ...o,
        source: "startRange"
      })),
      {
        type: "literal",
        value: " – ",
        source: "shared"
      },
      ...n.map((o) => ({
        ...o,
        source: "endRange"
      }))
    ];
  }
  /** Returns the resolved formatting options based on the values passed to the constructor. */
  resolvedOptions() {
    let t = this.formatter.resolvedOptions();
    return cz() && (this.resolvedHourCycle || (this.resolvedHourCycle = dz(t.locale, this.options)), t.hourCycle = this.resolvedHourCycle, t.hour12 = this.resolvedHourCycle === "h11" || this.resolvedHourCycle === "h12"), t.calendar === "ethiopic-amete-alem" && (t.calendar = "ethioaa"), t;
  }
  constructor(t, r = {}) {
    this.formatter = yh(t, r), this.options = r;
  }
}
const sz = {
  true: {
    // Only Japanese uses the h11 style for 12 hour time. All others use h12.
    ja: "h11"
  },
  false: {}
};
function yh(e, t = {}) {
  if (typeof t.hour12 == "boolean" && uz()) {
    t = {
      ...t
    };
    let n = sz[String(t.hour12)][e.split("-")[0]], o = t.hour12 ? "h12" : "h23";
    t.hourCycle = n ?? o, delete t.hour12;
  }
  let r = e + (t ? Object.entries(t).sort((n, o) => n[0] < o[0] ? -1 : 1).join() : "");
  if (Go.has(r)) return Go.get(r);
  let a = new Intl.DateTimeFormat(e, t);
  return Go.set(r, a), a;
}
let Ho = null;
function uz() {
  return Ho == null && (Ho = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    hour12: !1
  }).format(new Date(2020, 2, 3, 0)) === "24"), Ho;
}
let Ko = null;
function cz() {
  return Ko == null && (Ko = new Intl.DateTimeFormat("fr", {
    hour: "numeric",
    hour12: !1
  }).resolvedOptions().hourCycle === "h12"), Ko;
}
function dz(e, t) {
  if (!t.timeStyle && !t.hour) return;
  e = e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, ""), e += (e.includes("-u-") ? "" : "-u") + "-nu-latn";
  let r = yh(e, {
    ...t,
    timeZone: void 0
    // use local timezone
  }), a = parseInt(r.formatToParts(new Date(2020, 2, 3, 0)).find((o) => o.type === "hour").value, 10), n = parseInt(r.formatToParts(new Date(2020, 2, 3, 23)).find((o) => o.type === "hour").value, 10);
  if (a === 0 && n === 23) return "h23";
  if (a === 24 && n === 23) return "h24";
  if (a === 0 && n === 11) return "h11";
  if (a === 12 && n === 11) return "h12";
  throw new Error("Unexpected hour cycle result");
}
const fz = /* @__PURE__ */ D({
  __name: "AutoFormFieldDate",
  props: {
    fieldName: {},
    label: {},
    required: { type: Boolean },
    config: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = new lz("en-US", {
      dateStyle: "long"
    });
    return (r, a) => (g(), A(s(Ir), { name: e.fieldName }, {
      default: h((n) => [
        w(s(Rn), null, {
          default: h(() => [
            e.config?.hideLabel ? pe("", !0) : (g(), A(Vn, {
              key: 0,
              required: e.required
            }, {
              default: h(() => [
                he(oe(e.config?.label || s(fn)(e.label ?? e.fieldName)), 1)
              ]),
              _: 1
            }, 8, ["required"])),
            w(s(xr), null, {
              default: h(() => [
                j(r.$slots, "default", zt(Lt(n)), () => [
                  ie("div", null, [
                    w(s(hh), null, {
                      default: h(() => [
                        w(s(_h), {
                          "as-child": "",
                          disabled: s(no)(e.config?.inputProps?.disabled) ?? e.disabled
                        }, {
                          default: h(() => [
                            w(s(pt), {
                              variant: "outline",
                              class: be(s(G)(
                                "w-full justify-start text-left font-normal",
                                !n.componentField.modelValue && "text-muted-foreground"
                              ))
                            }, {
                              default: h(() => [
                                w(s(f_), { class: "mr-2 h-4 w-4" }),
                                he(" " + oe(n.componentField.modelValue ? s(t).format(n.componentField.modelValue.toDate(s(iz)())) : "Pick a date"), 1)
                              ]),
                              _: 2
                            }, 1032, ["class"])
                          ]),
                          _: 2
                        }, 1032, ["disabled"]),
                        w(s(bh), { class: "w-auto p-0" }, {
                          default: h(() => [
                            w(s(JN), K({ "initial-focus": "" }, n.componentField), null, 16)
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
            e.config?.description ? (g(), A(s(Or), { key: 1 }, {
              default: h(() => [
                he(oe(e.config.description), 1)
              ]),
              _: 1
            })) : pe("", !0),
            w(s(ir))
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 8, ["name"]));
  }
}), mz = /* @__PURE__ */ D({
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
    const r = e, a = t, n = ve(r, "class"), o = He(n, a);
    return (i, l) => (g(), A(s(a_), K({
      "data-slot": "radio-group",
      class: s(G)("grid gap-3", r.class)
    }, s(o)), {
      default: h(() => [
        j(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), pz = /* @__PURE__ */ D({
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
    const t = e, r = ve(t, "class"), a = Qe(r);
    return (n, o) => (g(), A(s(o_), K({ "data-slot": "radio-group-item" }, s(a), {
      class: s(G)(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        t.class
      )
    }), {
      default: h(() => [
        w(s(i_), {
          "data-slot": "radio-group-indicator",
          class: "relative flex items-center justify-center"
        }, {
          default: h(() => [
            w(s(v_), { class: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Nc = /* @__PURE__ */ D({
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
    return (t, r) => (g(), A(s(Ir), { name: e.fieldName }, {
      default: h((a) => [
        w(s(Rn), null, {
          default: h(() => [
            e.config?.hideLabel ? pe("", !0) : (g(), A(Vn, {
              key: 0,
              required: e.required
            }, {
              default: h(() => [
                he(oe(e.config?.label || s(fn)(e.label ?? e.fieldName)), 1)
              ]),
              _: 1
            }, 8, ["required"])),
            w(s(xr), null, {
              default: h(() => [
                j(t.$slots, "default", zt(Lt(a)), () => [
                  e.config?.component === "radio" ? (g(), A(s(mz), K({
                    key: 0,
                    disabled: s(no)(e.config?.inputProps?.disabled) ?? e.disabled,
                    orientation: "vertical"
                  }, { ...a.componentField }), {
                    default: h(() => [
                      (g(!0), F(je, null, Ge(e.options, (n, o) => (g(), F("div", {
                        key: n,
                        class: "mb-2 flex items-center gap-3 space-y-0"
                      }, [
                        w(s(pz), {
                          id: `${n}-${o}`,
                          value: n
                        }, null, 8, ["id", "value"]),
                        w(s(ch), {
                          for: `${n}-${o}`
                        }, {
                          default: h(() => [
                            he(oe(s(fn)(n)), 1)
                          ]),
                          _: 2
                        }, 1032, ["for"])
                      ]))), 128))
                    ]),
                    _: 1
                  }, 16, ["disabled"])) : (g(), A(s(Bd), K({
                    key: 1,
                    disabled: s(no)(e.config?.inputProps?.disabled) ?? e.disabled
                  }, { ...a.componentField }), {
                    default: h(() => [
                      w(s(sk), { class: "w-full" }, {
                        default: h(() => [
                          w(s(Gd), {
                            placeholder: e.config?.inputProps?.placeholder
                          }, null, 8, ["placeholder"])
                        ]),
                        _: 1
                      }),
                      w(s(Zd), null, {
                        default: h(() => [
                          (g(!0), F(je, null, Ge(e.options, (n) => (g(), A(s(Wd), {
                            key: n,
                            value: n
                          }, {
                            default: h(() => [
                              he(oe(s(fn)(n)), 1)
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
            e.config?.description ? (g(), A(s(Or), { key: 1 }, {
              default: h(() => [
                he(oe(e.config.description), 1)
              ]),
              _: 1
            })) : pe("", !0),
            w(s(ir))
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 8, ["name"]));
  }
}), vz = {
  key: 1,
  class: "flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent pl-3 pr-1 py-1 text-sm shadow-sm transition-colors"
}, gz = /* @__PURE__ */ D({
  __name: "AutoFormFieldFile",
  props: {
    fieldName: {},
    label: {},
    required: { type: Boolean },
    config: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = me();
    async function r(a) {
      return new Promise((n, o) => {
        if (a) {
          const i = new FileReader();
          i.onloadend = () => {
            n(i.result);
          }, i.onerror = (l) => {
            o(l);
          }, i.readAsDataURL(a);
        }
      });
    }
    return (a, n) => (g(), A(s(Ir), { name: e.fieldName }, {
      default: h((o) => [
        w(s(Rn), zt(Lt(a.$attrs)), {
          default: h(() => [
            e.config?.hideLabel ? pe("", !0) : (g(), A(Vn, {
              key: 0,
              required: e.required
            }, {
              default: h(() => [
                he(oe(e.config?.label || s(fn)(e.label ?? e.fieldName)), 1)
              ]),
              _: 1
            }, 8, ["required"])),
            w(s(xr), null, {
              default: h(() => [
                j(a.$slots, "default", zt(Lt(o)), () => [
                  t.value ? (g(), F("div", vz, [
                    ie("p", null, oe(t.value?.name), 1),
                    w(s(pt), {
                      size: "icon",
                      variant: "ghost",
                      class: "h-[26px] w-[26px]",
                      "aria-label": "Remove file",
                      type: "button",
                      onClick: () => {
                        t.value = void 0, o.componentField.onInput(void 0);
                      }
                    }, {
                      default: h(() => [
                        w(s(Hc))
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ])) : (g(), A(s(Tn), K({
                    key: 0,
                    type: "file"
                  }, { ...e.config?.inputProps }, {
                    disabled: e.config?.inputProps?.disabled ?? e.disabled,
                    onChange: async (i) => {
                      const l = i.target.files?.[0];
                      t.value = l;
                      const u = await r(l);
                      o.componentField.onInput(u);
                    }
                  }), null, 16, ["disabled", "onChange"]))
                ])
              ]),
              _: 2
            }, 1024),
            e.config?.description ? (g(), A(s(Or), { key: 1 }, {
              default: h(() => [
                he(oe(e.config.description), 1)
              ]),
              _: 1
            })) : pe("", !0),
            w(s(ir))
          ]),
          _: 2
        }, 1040)
      ]),
      _: 3
    }, 8, ["name"]));
  }
}), hz = /* @__PURE__ */ D({
  __name: "Textarea",
  props: {
    class: {},
    defaultValue: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, n = /* @__PURE__ */ Di(r, "modelValue", t, {
      passive: !0,
      defaultValue: r.defaultValue
    });
    return (o, i) => $i((g(), F("textarea", {
      "onUpdate:modelValue": i[0] || (i[0] = (l) => dn(n) ? n.value = l : null),
      "data-slot": "textarea",
      class: be(s(G)("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", r.class))
    }, null, 2)), [
      [Rc, s(n)]
    ]);
  }
}), zc = /* @__PURE__ */ D({
  __name: "AutoFormFieldInput",
  props: {
    fieldName: {},
    label: {},
    required: { type: Boolean },
    config: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, r = W(() => t.config?.component === "textarea" ? hz : Tn);
    return (a, n) => (g(), A(s(Ir), { name: e.fieldName }, {
      default: h((o) => [
        w(s(Rn), zt(Lt(a.$attrs)), {
          default: h(() => [
            e.config?.hideLabel ? pe("", !0) : (g(), A(Vn, {
              key: 0,
              required: e.required
            }, {
              default: h(() => [
                he(oe(e.config?.label || s(fn)(e.label ?? e.fieldName)), 1)
              ]),
              _: 1
            }, 8, ["required"])),
            w(s(xr), null, {
              default: h(() => [
                j(a.$slots, "default", zt(Lt(o)), () => [
                  (g(), A(mt(r.value), K({ type: "text" }, { ...o.componentField, ...e.config?.inputProps }, {
                    disabled: e.config?.inputProps?.disabled ?? e.disabled
                  }), null, 16, ["disabled"]))
                ])
              ]),
              _: 2
            }, 1024),
            e.config?.description ? (g(), A(s(Or), { key: 1 }, {
              default: h(() => [
                he(oe(e.config.description), 1)
              ]),
              _: 1
            })) : pe("", !0),
            w(s(ir))
          ]),
          _: 2
        }, 1040)
      ]),
      _: 3
    }, 8, ["name"]));
  }
}), bz = /* @__PURE__ */ D({
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
    return (t, r) => (g(), A(s(Ir), { name: e.fieldName }, {
      default: h((a) => [
        w(s(Rn), null, {
          default: h(() => [
            e.config?.hideLabel ? pe("", !0) : (g(), A(Vn, {
              key: 0,
              required: e.required
            }, {
              default: h(() => [
                he(oe(e.config?.label || s(fn)(e.label ?? e.fieldName)), 1)
              ]),
              _: 1
            }, 8, ["required"])),
            w(s(xr), null, {
              default: h(() => [
                j(t.$slots, "default", zt(Lt(a)), () => [
                  w(s(Tn), K({ type: "number" }, { ...a.componentField, ...e.config?.inputProps }, {
                    disabled: e.config?.inputProps?.disabled ?? e.disabled
                  }), null, 16, ["disabled"])
                ])
              ]),
              _: 2
            }, 1024),
            e.config?.description ? (g(), A(s(Or), { key: 1 }, {
              default: h(() => [
                he(oe(e.config.description), 1)
              ]),
              _: 1
            })) : pe("", !0),
            w(s(ir))
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 8, ["name"]));
  }
}), _z = /* @__PURE__ */ D({
  __name: "AutoFormFieldObject",
  props: {
    fieldName: {},
    required: { type: Boolean },
    config: {},
    schema: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, r = W(() => {
      const n = {};
      if (!t.schema)
        return;
      const o = yr(t.schema)?.shape;
      if (o)
        return Object.keys(o).forEach((i) => {
          const l = o[i], u = yr(l);
          let c = u && "values" in u._def ? u._def.values : void 0;
          !Array.isArray(c) && typeof c == "object" && (c = Object.values(c)), n[i] = {
            type: Us(l),
            default: to(l),
            options: c,
            required: !["ZodOptional", "ZodNullable"].includes(l._def.typeName),
            schema: l
          };
        }), n;
    }), a = js(t.fieldName);
    return cr(fa, a), (n, o) => (g(), F("section", null, [
      j(n.$slots, "default", zt(Lt(t)), () => [
        w(s(dh), {
          type: "single",
          "as-child": "",
          class: "w-full",
          collapsible: "",
          disabled: e.disabled
        }, {
          default: h(() => [
            w(s(Rn), null, {
              default: h(() => [
                w(s(mh), {
                  value: e.fieldName,
                  class: "border-none"
                }, {
                  default: h(() => [
                    w(s(ph), null, {
                      default: h(() => [
                        w(Vn, {
                          class: "text-base",
                          required: e.required
                        }, {
                          default: h(() => [
                            he(oe(e.schema?.description || s(fn)(e.fieldName)), 1)
                          ]),
                          _: 1
                        }, 8, ["required"])
                      ]),
                      _: 1
                    }),
                    w(s(fh), { class: "p-1 space-y-5" }, {
                      default: h(() => [
                        (g(!0), F(je, null, Ge(r.value, (i, l) => (g(), A(Ls, {
                          key: l,
                          config: e.config?.[l],
                          "field-name": `${e.fieldName}.${l.toString()}`,
                          label: l.toString(),
                          shape: i
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
}), Tc = {
  date: fz,
  select: Nc,
  radio: Nc,
  checkbox: Oc,
  switch: Oc,
  textarea: zc,
  number: bz,
  string: zc,
  file: gz,
  array: ZN,
  object: _z
}, yz = {
  ZodString: "string",
  ZodBoolean: "checkbox",
  ZodDate: "date",
  ZodEnum: "select",
  ZodNativeEnum: "select",
  ZodNumber: "number",
  ZodArray: "array",
  ZodObject: "object"
};
var Lr = /* @__PURE__ */ ((e) => (e[e.DISABLES = 0] = "DISABLES", e[e.REQUIRES = 1] = "REQUIRES", e[e.HIDES = 2] = "HIDES", e[e.SETS_OPTIONS = 3] = "SETS_OPTIONS", e))(Lr || {});
const [$z, wz] = Ni("AutoFormDependencies");
function kz(e) {
  const t = NN(), r = e.replace(/\[\d+\]/g, ""), a = EN(e);
  if (!t)
    throw new Error("useDependencies should be used within <AutoForm>");
  const n = $z(), o = me(!1), i = me(!1), l = me(!1), u = me(), c = W(() => n.value?.filter(
    (p) => p.targetField === r
  ));
  function d(p) {
    const v = p.sourceField, _ = LN(e) ?? -1, [k, ...$] = v.split(".").toReversed(), [y, ...x] = p.targetField.split(".").toReversed();
    if (_ >= 0 && $.join(",") === x.join(",")) {
      const [I, ...E] = e.split(".").toReversed();
      return xc(t.value, E.join(".") + k);
    }
    return xc(t.value, v);
  }
  const f = W(() => c.value?.map((p) => d(p))), m = () => {
    o.value = !1, i.value = !1, l.value = !1, u.value = void 0;
  };
  return Ue([f, n], () => {
    m(), c.value?.forEach((p) => {
      const v = d(p), _ = p.when(v, a.value);
      switch (p.type) {
        case Lr.DISABLES:
          _ && (o.value = !0);
          break;
        case Lr.REQUIRES:
          _ && (l.value = !0);
          break;
        case Lr.HIDES:
          _ && (i.value = !0);
          break;
        case Lr.SETS_OPTIONS:
          _ && (u.value = p.options);
          break;
      }
    });
  }, { immediate: !0, deep: !0 }), {
    isDisabled: o,
    isHidden: i,
    isRequired: l,
    overrideOptions: u
  };
}
const Ls = /* @__PURE__ */ D({
  __name: "AutoFormField",
  props: {
    fieldName: {},
    shape: {},
    config: {}
  },
  setup(e) {
    const t = e;
    function r(u) {
      return !!u?.component;
    }
    const a = W(() => {
      if (["ZodObject", "ZodArray"].includes(t.shape?.type))
        return { schema: t.shape?.schema };
    }), { isDisabled: n, isHidden: o, isRequired: i, overrideOptions: l } = kz(t.fieldName);
    return (u, c) => s(o) ? pe("", !0) : (g(), A(mt(r(e.config) ? typeof e.config.component == "string" ? s(Tc)[e.config.component] : e.config.component : s(Tc)[s(yz)[e.shape.type]]), K({
      key: 0,
      "field-name": e.fieldName,
      label: e.shape.schema?.description,
      required: s(i) || e.shape.required,
      options: s(l) || e.shape.options,
      disabled: s(n),
      config: e.config
    }, a.value), {
      default: h(() => [
        j(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["field-name", "label", "required", "options", "disabled", "config"]));
  }
}), Sz = /* @__PURE__ */ D({
  __name: "AutoForm",
  props: {
    schema: {},
    form: {},
    fieldConfig: {},
    dependencies: {}
  },
  emits: ["submit"],
  setup(e, { emit: t }) {
    const r = e, a = t, { dependencies: n } = ja(r);
    wz(n);
    const o = W(() => {
      const c = {}, f = vh(r.schema).shape;
      return Object.keys(f).forEach((m) => {
        const p = f[m], v = yr(p);
        let _ = v && "values" in v._def ? v._def.values : void 0;
        !Array.isArray(_) && typeof _ == "object" && (_ = Object.values(_)), c[m] = {
          type: Us(p),
          default: to(p),
          options: _,
          required: !["ZodOptional", "ZodNullable"].includes(p._def.typeName),
          schema: v
        };
      }), c;
    }), i = W(() => {
      const c = {};
      for (const d in o.value) {
        const f = o.value[d];
        c[d] = {
          shape: f,
          config: r.fieldConfig?.[d],
          fieldName: d
        };
      }
      return c;
    }), l = W(() => r.form ? "form" : wN), u = W(() => r.form ? {
      onSubmit: r.form.handleSubmit((c) => a("submit", c))
    } : {
      keepValues: !0,
      validationSchema: oh(r.schema),
      onSubmit: (d) => a("submit", d)
    });
    return (c, d) => (g(), A(mt(l.value), zt(Lt(u.value)), {
      default: h(() => [
        j(c.$slots, "customAutoForm", { fields: i.value }, () => [
          (g(!0), F(je, null, Ge(o.value, (f, m) => j(c.$slots, m.toString(), {
            key: m,
            shape: f,
            fieldName: m.toString(),
            config: e.fieldConfig?.[m]
          }, () => [
            w(Ls, {
              config: e.fieldConfig?.[m],
              "field-name": m.toString(),
              shape: f
            }, null, 8, ["config", "field-name", "shape"])
          ])), 128))
        ]),
        j(c.$slots, "default", { shapes: o.value })
      ]),
      _: 3
    }, 16));
  }
}), Iz = /* @__PURE__ */ D({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = He(e, t);
    return (o, i) => (g(), A(s(ki), K({ "data-slot": "dialog" }, s(n)), {
      default: h(() => [
        j(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xz = /* @__PURE__ */ D({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = ve(t, "class"), a = Qe(r);
    return (n, o) => (g(), A(s(Oi), K({ "data-slot": "dialog-description" }, s(a), {
      class: s(G)("text-muted-foreground text-sm", t.class)
    }), {
      default: h(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Oz = /* @__PURE__ */ D({
  __name: "DialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), F("div", {
      "data-slot": "dialog-header",
      class: be(s(G)("flex flex-col gap-2 text-center sm:text-left", t.class))
    }, [
      j(r.$slots, "default")
    ], 2));
  }
}), Ez = /* @__PURE__ */ D({
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
    const r = e, a = t, n = ve(r, "class"), o = He(n, a);
    return (i, l) => (g(), A(s(Ii), null, {
      default: h(() => [
        w(s(Si), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: h(() => [
            w(s(xi), K({
              class: s(G)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                r.class
              )
            }, s(o), {
              onPointerDownOutside: l[0] || (l[0] = (u) => {
                const c = u.detail.originalEvent, d = c.target;
                (c.offsetX > d.clientWidth || c.offsetY > d.clientHeight) && u.preventDefault();
              })
            }), {
              default: h(() => [
                j(i.$slots, "default"),
                w(s(Mc), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                  default: h(() => [
                    w(s(Qr), { class: "w-4 h-4" }),
                    l[1] || (l[1] = ie("span", { class: "sr-only" }, "Close", -1))
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
}), Nz = /* @__PURE__ */ D({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = ve(t, "class"), a = Qe(r);
    return (n, o) => (g(), A(s(Ei), K({ "data-slot": "dialog-title" }, s(a), {
      class: s(G)("text-lg leading-none font-semibold", t.class)
    }), {
      default: h(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), zz = ["innerHTML"], Rs = /* @__PURE__ */ D({
  __name: "DynamicDialog",
  props: /* @__PURE__ */ vt({
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
    const t = ft(e, "open");
    return (r, a) => (g(), A(s(Iz), {
      open: t.value,
      "onUpdate:open": a[0] || (a[0] = (n) => t.value = n)
    }, {
      default: h(() => [
        w(s(Ez), { class: "!max-w-max min-w-[435px]" }, {
          default: h(() => [
            w(s(Oz), null, {
              default: h(() => [
                w(s(Nz), null, {
                  default: h(() => [
                    ie("div", {
                      class: "[&>em]:font-normal [&>em]:!not-italic line-clamp-1",
                      innerHTML: e.title
                    }, null, 8, zz)
                  ]),
                  _: 1
                }),
                e.description ? (g(), A(s(xz), { key: 0 }, {
                  default: h(() => [
                    he(oe(e.description), 1)
                  ]),
                  _: 1
                })) : pe("", !0)
              ]),
              _: 1
            }),
            j(r.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), Tz = { class: "mt-1" }, Pz = /* @__PURE__ */ D({
  __name: "DynamicAutoFormDialog",
  props: /* @__PURE__ */ vt({
    dialogConfig: {},
    formConfig: {}
  }, {
    open: { type: Boolean },
    openModifiers: {}
  }),
  emits: ["update:open"],
  setup(e) {
    const t = ft(e, "open"), r = me(!1);
    async function a(o) {
      r.value = !0;
      try {
        await e.formConfig.onSubmit?.(o) && (t.value = !1);
      } catch {
      }
      r.value = !1;
    }
    const n = nh({
      validationSchema: oh(sc(e.formConfig.schema))
    });
    return e.formConfig.initialValues && n.setValues(zh(e.formConfig.initialValues)), (o, i) => (g(), A(Rs, K(e.dialogConfig, {
      open: t.value,
      "onUpdate:open": i[1] || (i[1] = (l) => t.value = l)
    }), {
      default: h(() => [
        w(Sz, {
          schema: s(sc)(e.formConfig.schema),
          form: s(n),
          "field-config": e.formConfig.fieldConfig,
          class: "flex flex-col gap-3",
          onSubmit: i[0] || (i[0] = (l) => a(l))
        }, {
          default: h(() => [
            ie("div", Tz, [
              w(pt, {
                type: "submit",
                disabled: r.value
              }, {
                default: h(() => [
                  he(oe(e.dialogConfig.okButtonText || "Submit"), 1)
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
  } catch (r) {
    console.error("vite-plugin-css-injected-by-js", r);
  }
})();
const Az = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Dz = (e) => typeof e < "u";
function Cz(e) {
  return JSON.parse(JSON.stringify(e));
}
function Pc(e, t, r, a = {}) {
  var n, o, i;
  const {
    clone: l = !1,
    passive: u = !1,
    eventName: c,
    deep: d = !1,
    defaultValue: f,
    shouldEmit: m
  } = a, p = Bt(), v = r || p?.emit || ((n = p?.$emit) == null ? void 0 : n.bind(p)) || ((i = (o = p?.proxy) == null ? void 0 : o.$emit) == null ? void 0 : i.bind(p?.proxy));
  let _ = c;
  t || (t = "modelValue"), _ = _ || `update:${t.toString()}`;
  const k = (x) => l ? typeof l == "function" ? l(x) : Cz(x) : x, $ = () => Dz(e[t]) ? k(e[t]) : f, y = (x) => {
    m ? m(x) && v(_, x) : v(_, x);
  };
  if (u) {
    const x = $(), I = me(x);
    let E = !1;
    return Ue(
      () => e[t],
      (N) => {
        E || (E = !0, I.value = k(N), xt(() => E = !1));
      }
    ), Ue(
      I,
      (N) => {
        !E && (N !== e[t] || d) && y(N);
      },
      { deep: d }
    ), I;
  } else
    return W({
      get() {
        return $();
      },
      set(x) {
        y(x);
      }
    });
}
const [Vs, jz] = Ni("DrawerRoot"), $h = /* @__PURE__ */ new WeakMap();
function gt(e, t, r = !1) {
  if (!e || !(e instanceof HTMLElement) || !t)
    return;
  const a = {};
  Object.entries(t).forEach(([n, o]) => {
    if (n.startsWith("--")) {
      e.style.setProperty(n, o);
      return;
    }
    a[n] = e.style[n], e.style[n] = o;
  }), !r && $h.set(e, a);
}
function Uz(e, t) {
  if (!e || !(e instanceof HTMLElement))
    return;
  const r = $h.get(e);
  r && Object.entries(r).forEach(([a, n]) => {
    e.style[a] = n;
  });
}
function za(e, t) {
  const r = window.getComputedStyle(e), a = r.transform || r.webkitTransform || r.mozTransform;
  let n = a.match(/^matrix3d\((.+)\)$/);
  return n ? Number.parseFloat(n[1].split(", ")[ct(t) ? 13 : 12]) : (n = a.match(/^matrix\((.+)\)$/), n ? Number.parseFloat(n[1].split(", ")[ct(t) ? 5 : 4]) : null);
}
function Lz(e) {
  return 8 * (Math.log(e + 1) - 2);
}
function ct(e) {
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
function Jo(e, t) {
  if (!e)
    return () => {
    };
  const r = e.style.cssText;
  return Object.assign(e.style, t), () => {
    e.style.cssText = r;
  };
}
function Rz(...e) {
  return (...t) => {
    for (const r of e)
      typeof r == "function" && r(...t);
  };
}
const tt = {
  DURATION: 0.5,
  EASE: [0.32, 0.72, 0, 1]
}, wh = 0.4, Vz = 0.25, Fz = 100, kh = 8, Ta = 16, Sh = 26, Ac = "vaul-dragging";
function Mz({
  activeSnapPoint: e,
  snapPoints: t,
  drawerRef: r,
  overlayRef: a,
  fadeFromIndex: n,
  onSnapPointChange: o,
  direction: i
}) {
  const l = me(typeof window < "u" ? {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  } : void 0);
  function u() {
    l.value = {
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight
    };
  }
  An(() => {
    typeof window < "u" && window.addEventListener("resize", u);
  }), wi(() => {
    typeof window < "u" && window.removeEventListener("resize", u);
  });
  const c = W(
    () => (t.value && e.value === t.value[t.value.length - 1]) ?? null
  ), d = W(
    () => t.value && t.value.length > 0 && (n?.value || n?.value === 0) && !Number.isNaN(n?.value) && t.value[n?.value ?? -1] === e.value || !t.value
  ), f = W(
    () => {
      var y;
      return ((y = t.value) == null ? void 0 : y.findIndex((x) => x === e.value)) ?? null;
    }
  ), m = W(
    () => {
      var y;
      return ((y = t.value) == null ? void 0 : y.map((x) => {
        const I = typeof x == "string";
        let E = 0;
        if (I && (E = Number.parseInt(x, 10)), ct(i.value)) {
          const O = I ? E : l.value ? x * l.value.innerHeight : 0;
          return l.value ? i.value === "bottom" ? l.value.innerHeight - O : -l.value.innerHeight + O : O;
        }
        const N = I ? E : l.value ? x * l.value.innerWidth : 0;
        return l.value ? i.value === "right" ? l.value.innerWidth - N : -l.value.innerWidth + N : N;
      })) ?? [];
    }
  ), p = W(
    () => {
      var y;
      return f.value !== null ? (y = m.value) == null ? void 0 : y[f.value] : null;
    }
  ), v = (y) => {
    var x, I, E, N;
    const O = ((x = m.value) == null ? void 0 : x.findIndex((C) => C === y)) ?? null;
    xt(() => {
      var C;
      o(O, m.value), gt((C = r.value) == null ? void 0 : C.$el, {
        transition: `transform ${tt.DURATION}s cubic-bezier(${tt.EASE.join(",")})`,
        transform: ct(i.value) ? `translate3d(0, ${y}px, 0)` : `translate3d(${y}px, 0, 0)`
      });
    }), m.value && O !== m.value.length - 1 && O !== n?.value ? gt((I = a.value) == null ? void 0 : I.$el, {
      transition: `opacity ${tt.DURATION}s cubic-bezier(${tt.EASE.join(",")})`,
      opacity: "0"
    }) : gt((E = a.value) == null ? void 0 : E.$el, {
      transition: `opacity ${tt.DURATION}s cubic-bezier(${tt.EASE.join(",")})`,
      opacity: "1"
    }), e.value = O !== null ? ((N = t.value) == null ? void 0 : N[O]) ?? null : null;
  };
  Ue(
    [e, m, t],
    () => {
      var y;
      if (e.value) {
        const x = ((y = t.value) == null ? void 0 : y.findIndex((I) => I === e.value)) ?? -1;
        m.value && x !== -1 && typeof m.value[x] == "number" && v(m.value[x]);
      }
    },
    {
      immediate: !0
      // if you want to run the effect immediately as well
    }
  );
  function _({
    draggedDistance: y,
    closeDrawer: x,
    velocity: I,
    dismissible: E
  }) {
    var N, O, C;
    if (n.value === void 0)
      return;
    const U = i.value === "bottom" || i.value === "right" ? (p.value ?? 0) - y : (p.value ?? 0) + y, Q = f.value === n.value - 1, re = f.value === 0, ne = y > 0;
    if (Q && gt((N = a.value) == null ? void 0 : N.$el, {
      transition: `opacity ${tt.DURATION}s cubic-bezier(${tt.EASE.join(",")})`
    }), I > 2 && !ne) {
      E ? x() : v(m.value[0]);
      return;
    }
    if (I > 2 && ne && m && t.value) {
      v(m.value[t.value.length - 1]);
      return;
    }
    const fe = (O = m.value) == null ? void 0 : O.reduce((ae, V) => typeof ae != "number" || typeof V != "number" ? ae : Math.abs(V - U) < Math.abs(ae - U) ? V : ae), X = ct(i.value) ? window.innerHeight : window.innerWidth;
    if (I > wh && Math.abs(y) < X * 0.4) {
      const ae = ne ? 1 : -1;
      if (ae > 0 && c) {
        v(m.value[(((C = t.value) == null ? void 0 : C.length) ?? 0) - 1]);
        return;
      }
      if (re && ae < 0 && E && x(), f.value === null)
        return;
      v(m.value[f.value + ae]);
      return;
    }
    v(fe);
  }
  function k({ draggedDistance: y }) {
    var x;
    if (p.value === null)
      return;
    const I = i.value === "bottom" || i.value === "right" ? p.value - y : p.value + y;
    (i.value === "bottom" || i.value === "right") && I < m.value[m.value.length - 1] || (i.value === "top" || i.value === "left") && I > m.value[m.value.length - 1] || gt((x = r.value) == null ? void 0 : x.$el, {
      transform: ct(i.value) ? `translate3d(0, ${I}px, 0)` : `translate3d(${I}px, 0, 0)`
    });
  }
  function $(y, x) {
    if (!t.value || typeof f.value != "number" || !m.value || n.value === void 0)
      return null;
    const I = f.value === n.value - 1;
    if (f.value >= n.value && x)
      return 0;
    if (I && !x)
      return 1;
    if (!d.value && !I)
      return null;
    const E = I ? f.value + 1 : f.value - 1, N = I ? m.value[E] - m.value[E - 1] : m.value[E + 1] - m.value[E], O = y / Math.abs(N);
    return I ? 1 - O : O;
  }
  return {
    isLastSnapPoint: c,
    shouldFade: d,
    getPercentageDragged: $,
    activeSnapPointIndex: f,
    onRelease: _,
    onDrag: k,
    snapPointsOffset: m
  };
}
function Dc() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
let Dr = null;
function Bz(e) {
  const { isOpen: t, modal: r, nested: a, hasBeenOpened: n, preventScrollRestoration: o, noBodyStyles: i } = e, l = me(typeof window < "u" ? window.location.href : ""), u = me(0);
  function c() {
    if (Dc() && Dr === null && t.value && !i.value) {
      Dr = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left,
        height: document.body.style.height
      };
      const { scrollX: f, innerHeight: m } = window;
      document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, {
        top: `${-u.value}px`,
        left: `${-f}px`,
        right: "0px",
        height: "auto"
      }), setTimeout(() => {
        requestAnimationFrame(() => {
          const p = m - window.innerHeight;
          p && u.value >= m && (document.body.style.top = `-${u.value + p}px`);
        });
      }, 300);
    }
  }
  function d() {
    if (Dc() && Dr !== null && !i.value) {
      const f = -Number.parseInt(document.body.style.top, 10), m = -Number.parseInt(document.body.style.left, 10);
      Object.assign(document.body.style, Dr), window.requestAnimationFrame(() => {
        if (o.value && l.value !== window.location.href) {
          l.value = window.location.href;
          return;
        }
        window.scrollTo(m, f);
      }), Dr = null;
    }
  }
  return An(() => {
    function f() {
      u.value = window.scrollY;
    }
    f(), window.addEventListener("scroll", f), ro(() => {
      window.removeEventListener("scroll", f);
    });
  }), Ue([t, n, l], () => {
    a.value || !n.value || (t.value ? (window.matchMedia("(display-mode: standalone)").matches || c(), r.value || setTimeout(() => {
      d();
    }, 500)) : d());
  }), { restorePositionSetting: d };
}
function Zz(e, t) {
  return e && e.value ? e : t;
}
function Wz(e) {
  const {
    emitDrag: t,
    emitRelease: r,
    emitClose: a,
    emitOpenChange: n,
    open: o,
    dismissible: i,
    nested: l,
    modal: u,
    shouldScaleBackground: c,
    setBackgroundColorOnScale: d,
    scrollLockTimeout: f,
    closeThreshold: m,
    activeSnapPoint: p,
    fadeFromIndex: v,
    direction: _,
    noBodyStyles: k,
    handleOnly: $,
    preventScrollRestoration: y
  } = e, x = me(o.value ?? !1), I = me(!1), E = me(!1), N = me(!1), O = me(null), C = me(null), U = me(null), Q = me(null), re = me(null), ne = me(!1), fe = me(null), X = me(0), ae = me(!1);
  me(0);
  const V = me(null);
  me(0);
  const te = W(() => {
    var b;
    return ((b = V.value) == null ? void 0 : b.$el.getBoundingClientRect().height) || 0;
  }), J = Zz(
    e.snapPoints,
    me(void 0)
  ), Ce = W(() => {
    var b;
    return J && (((b = J.value) == null ? void 0 : b.length) ?? 0) > 0;
  }), Ze = me(null), {
    activeSnapPointIndex: it,
    onRelease: Pt,
    snapPointsOffset: Ke,
    onDrag: Pe,
    shouldFade: Et,
    getPercentageDragged: se
  } = Mz({
    snapPoints: J,
    activeSnapPoint: p,
    drawerRef: V,
    fadeFromIndex: v,
    overlayRef: O,
    onSnapPointChange: ue,
    direction: _
  });
  function ue(b, S) {
    J.value && b === S.length - 1 && (C.value = /* @__PURE__ */ new Date());
  }
  Bz({
    isOpen: x,
    modal: u,
    nested: l,
    hasBeenOpened: I,
    noBodyStyles: k,
    preventScrollRestoration: y
  });
  function Ee() {
    return (window.innerWidth - Sh) / window.innerWidth;
  }
  function Ne(b, S) {
    var R;
    if (!b)
      return !1;
    let Y = b;
    const Se = (R = window.getSelection()) == null ? void 0 : R.toString(), xe = V.value ? za(V.value.$el, _.value) : null, we = /* @__PURE__ */ new Date();
    if (Y.hasAttribute("data-vaul-no-drag") || Y.closest("[data-vaul-no-drag]"))
      return !1;
    if (_.value === "right" || _.value === "left")
      return !0;
    if (C.value && we.getTime() - C.value.getTime() < 500)
      return !1;
    if (xe !== null && (_.value === "bottom" ? xe > 0 : xe < 0))
      return !0;
    if (Se && Se.length > 0)
      return !1;
    if (re.value && we.getTime() - re.value.getTime() < f.value && xe === 0 || S)
      return re.value = we, !1;
    for (; Y; ) {
      if (Y.scrollHeight > Y.clientHeight) {
        if (Y.scrollTop !== 0)
          return re.value = /* @__PURE__ */ new Date(), !1;
        if (Y.getAttribute("role") === "dialog")
          return !0;
      }
      Y = Y.parentNode;
    }
    return !0;
  }
  function rt(b) {
    !i.value && !J.value || V.value && !V.value.$el.contains(b.target) || (E.value = !0, U.value = /* @__PURE__ */ new Date(), b.target.setPointerCapture(b.pointerId), X.value = ct(_.value) ? b.clientY : b.clientX);
  }
  function lt(b) {
    var S, R, Y, Se, xe, we;
    if (V.value && E.value) {
      const L = _.value === "bottom" || _.value === "right" ? 1 : -1, H = (X.value - (ct(_.value) ? b.clientY : b.clientX)) * L, Te = H > 0, Me = J.value && !i.value && !Te;
      if (Me && it.value === 0)
        return;
      const Vt = Math.abs(H), on = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      let z = Vt / te.value;
      const T = se(Vt, Te);
      if (T !== null && (z = T), Me && z >= 1 || !ne.value && !Ne(b.target, Te))
        return;
      if ((S = V?.value) == null || S.$el.classList.add(Ac), ne.value = !0, gt((R = V.value) == null ? void 0 : R.$el, {
        transition: "none"
      }), gt((Y = O.value) == null ? void 0 : Y.$el, {
        transition: "none"
      }), J.value && Pe({ draggedDistance: H }), Te && !J.value) {
        const ee = Lz(H), ge = Math.min(ee * -1, 0) * L;
        gt((Se = V.value) == null ? void 0 : Se.$el, {
          transform: ct(_.value) ? `translate3d(0, ${ge}px, 0)` : `translate3d(${ge}px, 0, 0)`
        });
        return;
      }
      const Z = 1 - z;
      if ((Et.value || v.value && it.value === v.value - 1) && (t(z), gt(
        (xe = O.value) == null ? void 0 : xe.$el,
        {
          opacity: `${Z}`,
          transition: "none"
        },
        !0
      )), on && O.value && c.value) {
        const ee = Math.min(Ee() + z * (1 - Ee()), 1), ge = 8 - z * 8, ke = Math.max(0, 14 - z * 14);
        gt(
          on,
          {
            borderRadius: `${ge}px`,
            transform: ct(_.value) ? `scale(${ee}) translate3d(0, ${ke}px, 0)` : `scale(${ee}) translate3d(${ke}px, 0, 0)`,
            transition: "none"
          },
          !0
        );
      }
      if (!J.value) {
        const ee = Vt * L;
        gt((we = V.value) == null ? void 0 : we.$el, {
          transform: ct(_.value) ? `translate3d(0, ${ee}px, 0)` : `translate3d(${ee}px, 0, 0)`
        });
      }
    }
  }
  function Je() {
    var b;
    if (!V.value)
      return;
    const S = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]"), R = za(V.value.$el, _.value);
    gt(V.value.$el, {
      transform: "translate3d(0, 0, 0)",
      transition: `transform ${tt.DURATION}s cubic-bezier(${tt.EASE.join(",")})`
    }), gt((b = O.value) == null ? void 0 : b.$el, {
      transition: `opacity ${tt.DURATION}s cubic-bezier(${tt.EASE.join(",")})`,
      opacity: "1"
    }), c.value && R && R > 0 && x.value && gt(
      S,
      {
        borderRadius: `${kh}px`,
        overflow: "hidden",
        ...ct(_.value) ? {
          transform: `scale(${Ee()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
          transformOrigin: "top"
        } : {
          transform: `scale(${Ee()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
          transformOrigin: "left"
        },
        transitionProperty: "transform, border-radius",
        transitionDuration: `${tt.DURATION}s`,
        transitionTimingFunction: `cubic-bezier(${tt.EASE.join(",")})`
      },
      !0
    );
  }
  function Rt(b) {
    V.value && (a(), b || (x.value = !1), window.setTimeout(() => {
      J.value && (p.value = J.value[0]);
    }, tt.DURATION * 1e3));
  }
  nr(() => {
    if (!x.value && c.value && Az) {
      const b = setTimeout(() => {
        Uz(document.body);
      }, 200);
      return () => clearTimeout(b);
    }
  }), Ue(o, () => {
    x.value = o.value, o.value || Rt();
  });
  function hn(b) {
    if (!E.value || !V.value)
      return;
    V.value.$el.classList.remove(Ac), ne.value = !1, E.value = !1, Q.value = /* @__PURE__ */ new Date();
    const S = za(V.value.$el, _.value);
    if (!Ne(b.target, !1) || !S || Number.isNaN(S) || U.value === null)
      return;
    const R = Q.value.getTime() - U.value.getTime(), Y = X.value - (ct(_.value) ? b.clientY : b.clientX), Se = Math.abs(Y) / R;
    if (Se > 0.05 && (N.value = !0, window.setTimeout(() => {
      N.value = !1;
    }, 200)), J.value) {
      const we = _.value === "bottom" || _.value === "right" ? 1 : -1;
      Pt({
        draggedDistance: Y * we,
        closeDrawer: Rt,
        velocity: Se,
        dismissible: i.value
      }), r(!0);
      return;
    }
    if (_.value === "bottom" || _.value === "right" ? Y > 0 : Y < 0) {
      Je(), r(!0);
      return;
    }
    if (Se > wh) {
      Rt(), r(!1);
      return;
    }
    const xe = Math.min(
      V.value.$el.getBoundingClientRect().height ?? 0,
      window.innerHeight
    );
    if (S >= xe * m.value) {
      Rt(), r(!1);
      return;
    }
    r(!0), Je();
  }
  Ue(x, (b) => {
    b && (C.value = /* @__PURE__ */ new Date()), n(b);
  }, { immediate: !0 });
  function Jt(b) {
    var S, R;
    const Y = b ? (window.innerWidth - Ta) / window.innerWidth : 1, Se = b ? -16 : 0;
    fe.value && window.clearTimeout(fe.value), gt((S = V.value) == null ? void 0 : S.$el, {
      transition: `transform ${tt.DURATION}s cubic-bezier(${tt.EASE.join(",")})`,
      transform: `scale(${Y}) translate3d(0, ${Se}px, 0)`
    }), !b && (R = V.value) != null && R.$el && (fe.value = window.setTimeout(() => {
      var xe, we;
      const L = za((xe = V.value) == null ? void 0 : xe.$el, _.value);
      gt((we = V.value) == null ? void 0 : we.$el, {
        transition: "none",
        transform: ct(_.value) ? `translate3d(0, ${L}px, 0)` : `translate3d(${L}px, 0, 0)`
      });
    }, 500));
  }
  function Yt(b) {
    var S;
    if (b < 0)
      return;
    const R = ct(_.value) ? window.innerHeight : window.innerWidth, Y = (R - Ta) / R, Se = Y + b * (1 - Y), xe = -16 + b * Ta;
    gt((S = V.value) == null ? void 0 : S.$el, {
      transform: ct(_.value) ? `scale(${Se}) translate3d(0, ${xe}px, 0)` : `scale(${Se}) translate3d(${xe}px, 0, 0)`,
      transition: "none"
    });
  }
  function En(b) {
    var S;
    const R = ct(_.value) ? window.innerHeight : window.innerWidth, Y = b ? (R - Ta) / R : 1, Se = b ? -16 : 0;
    b && gt((S = V.value) == null ? void 0 : S.$el, {
      transition: `transform ${tt.DURATION}s cubic-bezier(${tt.EASE.join(",")})`,
      transform: ct(_.value) ? `scale(${Y}) translate3d(0, ${Se}px, 0)` : `scale(${Y}) translate3d(${Se}px, 0, 0)`
    });
  }
  return {
    open: o,
    isOpen: x,
    modal: u,
    keyboardIsOpen: ae,
    hasBeenOpened: I,
    drawerRef: V,
    drawerHeightRef: te,
    overlayRef: O,
    handleRef: Ze,
    isDragging: E,
    dragStartTime: U,
    isAllowedToDrag: ne,
    snapPoints: J,
    activeSnapPoint: p,
    hasSnapPoints: Ce,
    pointerStart: X,
    dismissible: i,
    snapPointsOffset: Ke,
    direction: _,
    shouldFade: Et,
    fadeFromIndex: v,
    shouldScaleBackground: c,
    setBackgroundColorOnScale: d,
    onPress: rt,
    onDrag: lt,
    onRelease: hn,
    closeDrawer: Rt,
    onNestedDrag: Yt,
    onNestedRelease: En,
    onNestedOpenChange: Jt,
    emitClose: a,
    emitDrag: t,
    emitRelease: r,
    emitOpenChange: n,
    nested: l,
    handleOnly: $,
    noBodyStyles: k
  };
}
const Gz = /* @__PURE__ */ D({
  __name: "DrawerRoot",
  props: {
    activeSnapPoint: { default: void 0 },
    closeThreshold: { default: Vz },
    shouldScaleBackground: { type: Boolean, default: void 0 },
    setBackgroundColorOnScale: { type: Boolean, default: !0 },
    scrollLockTimeout: { default: Fz },
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
  setup(e, { expose: t, emit: r }) {
    const a = e, n = r;
    Th();
    const o = W(() => a.fadeFromIndex ?? (a.snapPoints && a.snapPoints.length - 1)), i = Pc(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), l = Pc(a, "activeSnapPoint", n, {
      passive: a.activeSnapPoint === void 0
    }), u = {
      emitDrag: (v) => n("drag", v),
      emitRelease: (v) => n("release", v),
      emitClose: () => n("close"),
      emitOpenChange: (v) => {
        n("update:open", v), setTimeout(() => {
          n("animationEnd", v);
        }, tt.DURATION * 1e3);
      }
    }, { closeDrawer: c, hasBeenOpened: d, modal: f, isOpen: m } = jz(
      Wz({
        ...u,
        ...ja(a),
        activeSnapPoint: l,
        fadeFromIndex: o,
        open: i
      })
    );
    function p(v) {
      if (i.value !== void 0) {
        u.emitOpenChange(v);
        return;
      }
      m.value = v, v ? d.value = !0 : c();
    }
    return t({
      open: m
    }), (v, _) => (g(), A(s(ki), {
      open: s(m),
      modal: s(f),
      "onUpdate:open": p
    }, {
      default: h(() => [
        j(v.$slots, "default", { open: s(m) })
      ]),
      _: 3
    }, 8, ["open", "modal"]));
  }
}), Hz = /* @__PURE__ */ D({
  __name: "DrawerOverlay",
  setup(e) {
    const { overlayRef: t, hasSnapPoints: r, isOpen: a, shouldFade: n } = Vs();
    return (o, i) => (g(), A(s(Si), {
      ref_key: "overlayRef",
      ref: t,
      "data-vaul-overlay": "",
      "data-vaul-snap-points": s(a) && s(r) ? "true" : "false",
      "data-vaul-snap-points-overlay": s(a) && s(n) ? "true" : "false"
    }, null, 8, ["data-vaul-snap-points", "data-vaul-snap-points-overlay"]));
  }
}), Kz = () => () => {
};
function Jz() {
  const { direction: e, isOpen: t, shouldScaleBackground: r, setBackgroundColorOnScale: a, noBodyStyles: n } = Vs(), o = me(null), i = me(document.body.style.backgroundColor);
  function l() {
    return (window.innerWidth - Sh) / window.innerWidth;
  }
  nr((u) => {
    if (t.value && r.value) {
      o.value && clearTimeout(o.value);
      const c = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      if (!c)
        return;
      Rz(
        a.value && !n.value ? Jo(document.body, { background: "black" }) : Kz,
        Jo(c, {
          transformOrigin: ct(e.value) ? "top" : "left",
          transitionProperty: "transform, border-radius",
          transitionDuration: `${tt.DURATION}s`,
          transitionTimingFunction: `cubic-bezier(${tt.EASE.join(",")})`
        })
      );
      const d = Jo(c, {
        borderRadius: `${kh}px`,
        overflow: "hidden",
        ...ct(e.value) ? {
          transform: `scale(${l()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`
        } : {
          transform: `scale(${l()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`
        }
      });
      u(() => {
        d(), o.value = window.setTimeout(() => {
          i.value ? document.body.style.background = i.value : document.body.style.removeProperty("background");
        }, tt.DURATION * 1e3);
      });
    }
  }, { flush: "pre" });
}
const Yz = /* @__PURE__ */ D({
  __name: "DrawerContent",
  setup(e) {
    const {
      open: t,
      isOpen: r,
      snapPointsOffset: a,
      hasSnapPoints: n,
      drawerRef: o,
      onPress: i,
      onDrag: l,
      onRelease: u,
      modal: c,
      emitOpenChange: d,
      dismissible: f,
      keyboardIsOpen: m,
      closeDrawer: p,
      direction: v,
      handleOnly: _
    } = Vs();
    Jz();
    const k = me(!1), $ = W(() => a.value && a.value.length > 0 ? `${a.value[0]}px` : "0");
    function y(E) {
      if (!c.value || E.defaultPrevented) {
        E.preventDefault();
        return;
      }
      m.value && (m.value = !1), f.value ? d(!1) : E.preventDefault();
    }
    function x(E) {
      _.value || i(E);
    }
    function I(E) {
      _.value || l(E);
    }
    return nr(() => {
      n.value && window.requestAnimationFrame(() => {
        k.value = !0;
      });
    }), (E, N) => (g(), A(s(xi), {
      ref_key: "drawerRef",
      ref: o,
      "data-vaul-drawer": "",
      "data-vaul-drawer-direction": s(v),
      "data-vaul-delayed-snap-points": k.value ? "true" : "false",
      "data-vaul-snap-points": s(r) && s(n) ? "true" : "false",
      style: Lc({ "--snap-point-height": $.value }),
      onPointerdown: x,
      onPointermove: I,
      onPointerup: s(u),
      onPointerDownOutside: y,
      onOpenAutoFocus: N[0] || (N[0] = Ph(() => {
      }, ["prevent"])),
      onEscapeKeyDown: N[1] || (N[1] = (O) => {
        s(f) || O.preventDefault();
      })
    }, {
      default: h(() => [
        j(E.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-vaul-drawer-direction", "data-vaul-delayed-snap-points", "data-vaul-snap-points", "style", "onPointerup"]));
  }
}), qz = /* @__PURE__ */ D({
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
    const n = He(e, t);
    return (o, i) => (g(), A(s(Gz), K({ "data-slot": "drawer" }, s(n)), {
      default: h(() => [
        j(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Xz = /* @__PURE__ */ D({
  __name: "DrawerOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = ve(t, "class");
    return (a, n) => (g(), A(s(Hz), K({ "data-slot": "drawer-overlay" }, s(r), {
      class: s(G)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80", t.class)
    }), null, 16, ["class"]));
  }
}), Qz = /* @__PURE__ */ D({
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
    const r = e, n = He(r, t);
    return (o, i) => (g(), A(s(Ii), null, {
      default: h(() => [
        w(Xz),
        w(s(Yz), K({ "data-slot": "drawer-content" }, s(n), {
          class: s(G)(
            "group/drawer-content bg-background fixed z-50 flex h-auto flex-col",
            "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg",
            "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg",
            "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:sm:max-w-sm",
            "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:sm:max-w-sm",
            r.class
          )
        }), {
          default: h(() => [
            i[0] || (i[0] = ie("div", { class: "bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }, null, -1)),
            j(o.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), eT = /* @__PURE__ */ D({
  __name: "DrawerDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = ve(t, "class");
    return (a, n) => (g(), A(s(Oi), K({ "data-slot": "drawer-description" }, s(r), {
      class: s(G)("text-muted-foreground text-sm", t.class)
    }), {
      default: h(() => [
        j(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), tT = /* @__PURE__ */ D({
  __name: "DrawerHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), F("div", {
      "data-slot": "drawer-header",
      class: be(s(G)("flex flex-col gap-1.5 p-4", t.class))
    }, [
      j(r.$slots, "default")
    ], 2));
  }
}), nT = /* @__PURE__ */ D({
  __name: "DrawerTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = ve(t, "class");
    return (a, n) => (g(), A(s(Ei), K({ "data-slot": "drawer-title" }, s(r), {
      class: s(G)("text-foreground font-semibold", t.class)
    }), {
      default: h(() => [
        j(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), rT = ["innerHTML"], aT = { class: "px-4 flex-1 overflow-auto select-text" }, oT = /* @__PURE__ */ D({
  __name: "DynamicDrawer",
  props: /* @__PURE__ */ vt({
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
    const t = ft(e, "open");
    return (r, a) => (g(), A(s(qz), {
      open: t.value,
      "onUpdate:open": a[1] || (a[1] = (n) => t.value = n),
      "handle-only": "",
      direction: "right",
      dismissible: !0,
      "should-scale-background": ""
    }, {
      default: h(() => [
        w(s(Qz), { class: "!max-w-[800px]" }, {
          default: h(() => [
            w(s(tT), { class: "!pb-0" }, {
              default: h(() => [
                w(s(nT), { class: "flex items-center gap-2" }, {
                  default: h(() => [
                    ie("div", {
                      class: "[&>em]:font-normal [&>em]:!not-italic line-clamp-1 flex-1",
                      innerHTML: e.title
                    }, null, 8, rT),
                    w(pt, {
                      variant: "ghost",
                      onClick: a[0] || (a[0] = (n) => t.value = !1)
                    }, {
                      default: h(() => [
                        w(s(Qr))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                e.description ? (g(), A(s(eT), { key: 0 }, {
                  default: h(() => [
                    he(oe(e.description), 1)
                  ]),
                  _: 1
                })) : pe("", !0)
              ]),
              _: 1
            }),
            ie("div", aT, [
              j(r.$slots, "default")
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), iT = /* @__PURE__ */ D({
  __name: "DynamicComponentDialog",
  props: /* @__PURE__ */ vt({
    dialogConfig: {},
    componentConfig: {},
    type: {}
  }, {
    open: { type: Boolean },
    openModifiers: {}
  }),
  emits: ["update:open"],
  setup(e) {
    const t = ft(e, "open"), r = me(!1);
    async function a() {
      r.value = !0, (await e.dialogConfig.onOk?.() ?? !0) && (t.value = !1), r.value = !1;
    }
    return (n, o) => (g(), A(mt(e.type === "drawer" ? oT : Rs), K(e.dialogConfig, {
      open: t.value,
      "onUpdate:open": o[0] || (o[0] = (i) => t.value = i)
    }), {
      default: h(() => [
        (g(), A(mt(e.componentConfig.component), K(e.componentConfig.componentProps, { onSubmitSuccess: a }), null, 16))
      ]),
      _: 1
    }, 16, ["open"]));
  }
}), lT = { class: "mt-1" }, Fs = /* @__PURE__ */ D({
  __name: "DynamicConfirmComponentDialog",
  props: /* @__PURE__ */ vt({
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
    const t = ft(e, "open"), r = me(e.initialValue), { t: a } = jn(), n = me(!1);
    async function o() {
      n.value = !0, (await e.dialogConfig.onOk?.(r.value) ?? !0) && (t.value = !1), n.value = !1;
    }
    return (i, l) => (g(), A(Rs, K(e.dialogConfig, {
      open: t.value,
      "onUpdate:open": l[1] || (l[1] = (u) => t.value = u)
    }), {
      default: h(() => [
        (g(), A(mt(e.componentConfig.component), K(e.componentConfig.componentProps, {
          modelValue: r.value,
          "onUpdate:modelValue": l[0] || (l[0] = (u) => r.value = u)
        }), null, 16, ["modelValue"])),
        ie("div", lT, [
          w(pt, {
            type: "Submit",
            disabled: n.value,
            size: "sm",
            onClick: o
          }, {
            default: h(() => [
              he(oe(e.dialogConfig.okButtonText || s(a)("common.save")), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      _: 1
    }, 16, ["open"]));
  }
}), Er = Mg();
function IT(e, t, r = "dialog") {
  return Er.open({
    component: iT,
    componentProps: {
      componentConfig: t,
      dialogConfig: typeof e == "string" ? { title: e } : e,
      type: r
    }
  });
}
function xT(e, t) {
  return Er.open({
    component: Pz,
    componentProps: {
      formConfig: t,
      dialogConfig: typeof e == "string" ? { title: e } : e
    }
  });
}
function OT(e, t = "Achtung", r = "Sind Sie sicher?") {
  return Er.open({
    component: kE,
    componentProps: {
      title: t,
      description: r,
      onOk: e
    }
  });
}
function ET({ dialogConfig: e, initialValue: t, onOk: r, component: a, componentProps: n }) {
  return Er.open({
    component: Fs,
    componentProps: {
      componentConfig: { component: a, componentProps: n },
      initialValue: t,
      dialogConfig: { ...typeof e == "string" ? { title: e } : e, onOk: r }
    }
  });
}
function NT(e, t, r, a, n) {
  return Er.open({
    component: Fs,
    componentProps: {
      componentConfig: { component: Wi, componentProps: { multiple: !0, options: t, ...n } },
      initialValue: r,
      dialogConfig: { ...typeof e == "string" ? { title: e } : e, onOk: a }
    }
  });
}
function zT(e, t, r, a, n) {
  return Er.open({
    component: Fs,
    componentProps: {
      componentConfig: { component: pE, componentProps: { multiple: !0, options: t, ...n } },
      initialValue: r,
      dialogConfig: { ...typeof e == "string" ? { title: e } : e, onOk: a }
    }
  });
}
const TT = /* @__PURE__ */ D({
  inheritAttrs: !1,
  __name: "InputBoolean",
  props: /* @__PURE__ */ vt({
    class: {},
    readonly: { type: Boolean }
  }, {
    modelValue: { type: Boolean },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, r = ft(e, "modelValue");
    return (a, n) => (g(), A(Wi, {
      modelValue: r.value,
      "onUpdate:modelValue": n[0] || (n[0] = (o) => r.value = o),
      class: be(t.class),
      options: [{ value: !0, label: "True" }, { value: !1, label: "False" }]
    }, null, 8, ["modelValue", "class"]));
  }
}), sT = { key: 0 }, uT = { class: "text-xs" }, cT = { class: "text-xs" }, dT = { class: "flex gap-2" }, PT = /* @__PURE__ */ D({
  __name: "InputGraduated",
  props: /* @__PURE__ */ vt({
    class: {},
    placeholder: {}
  }, {
    modelValue: { default: () => [] },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e;
    function r(u) {
      return {
        "common.from": "From",
        "common.value": "Value",
        "common.add": "Add",
        "common.clear": "Clear All"
      }[u] || u;
    }
    const a = (u) => typeof u == "string", n = ft(e, "modelValue"), o = () => n.value?.push({ from: 0, value: 0 }), i = (u) => n.value.splice(u, 1), l = () => n.value = [];
    return (u, c) => (g(), A(s(hh), null, {
      default: h(() => [
        w(s(_h), { "as-child": "" }, {
          default: h(() => [
            w(pd, {
              class: be(t.class),
              variant: "outline"
            }, {
              default: h(() => [
                n.value.length ? (g(), A(cc, {
                  key: 0,
                  value: n.value
                }, null, 8, ["value"])) : e.placeholder ? (g(), F(je, { key: 1 }, [
                  a(e.placeholder) ? (g(), F("span", sT)) : (g(), A(cc, {
                    key: 1,
                    value: e.placeholder,
                    class: "text-muted-foreground"
                  }, null, 8, ["value"]))
                ], 64)) : pe("", !0)
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          _: 1
        }),
        w(s(bh), {
          class: "w-80 flex flex-col gap-2 min-w-[var(--reka-popper-anchor-width)]",
          align: "end"
        }, {
          default: h(() => [
            (g(!0), F(je, null, Ge(n.value, (d, f) => (g(), F("div", {
              key: f,
              class: "flex gap-2 items-center"
            }, [
              ie("label", uT, oe(r("common.from")) + ":", 1),
              w(Tn, {
                modelValue: n.value[f].from,
                "onUpdate:modelValue": (m) => n.value[f].from = m,
                type: "number"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              ie("label", cT, oe(r("common.value")) + ":", 1),
              w(Tn, {
                modelValue: n.value[f].value,
                "onUpdate:modelValue": (m) => n.value[f].value = m,
                type: "number"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              w(pt, {
                variant: "ghost",
                size: "sm",
                class: "px-1",
                onClick: (m) => i(f)
              }, {
                default: h(() => [
                  w(s(Qr))
                ]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128)),
            ie("div", dT, [
              w(pt, {
                size: "sm",
                variant: "ghost",
                class: "!justify-start -mx-2 flex-1",
                onClick: c[0] || (c[0] = (d) => o())
              }, {
                default: h(() => [
                  w(s(oo)),
                  he(" " + oe(r("common.add")), 1)
                ]),
                _: 1
              }),
              n.value.length > 0 ? (g(), A(pt, {
                key: 0,
                size: "sm",
                variant: "ghost",
                class: "!justify-start -mx-2",
                onClick: c[1] || (c[1] = (d) => l())
              }, {
                default: h(() => [
                  w(s($_)),
                  he(" " + oe(r("common.clear")), 1)
                ]),
                _: 1
              })) : pe("", !0)
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), AT = /* @__PURE__ */ D({
  __name: "InputRange",
  props: /* @__PURE__ */ vt({
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
    const t = e, r = ft(e, "modelValue");
    function a(n, o) {
      r.value || (r.value = [void 0, void 0]), r.value[n] = o, Vc(r);
    }
    return (n, o) => (g(), F("div", {
      class: be(s(G)("flex items-center gap-0", t.class))
    }, [
      w(s(Tn), {
        "model-value": r.value?.[0],
        placeholder: e.placeholder?.[0] || "Min",
        disabled: e.disabled,
        type: "number",
        class: "flex-1 rounded-r-none pr-1",
        "onUpdate:modelValue": o[0] || (o[0] = (i) => a(0, i))
      }, null, 8, ["model-value", "placeholder", "disabled"]),
      w(s(Tn), {
        "model-value": r.value?.[1],
        placeholder: e.placeholder?.[1] || "Max",
        disabled: e.disabled,
        type: "number",
        class: "flex-1 rounded-l-none pr-1",
        "onUpdate:modelValue": o[1] || (o[1] = (i) => a(1, i))
      }, null, 8, ["model-value", "placeholder", "disabled"])
    ], 2));
  }
}), fT = /* @__PURE__ */ D({
  __name: "InputGroup",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), F("div", {
      "data-slot": "input-group",
      role: "group",
      class: be(s(G)(
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
      j(r.$slots, "default")
    ], 2));
  }
}), mT = ["data-align"], Cc = /* @__PURE__ */ D({
  __name: "InputGroupAddon",
  props: {
    align: { default: "inline-start" },
    class: {}
  },
  setup(e) {
    const t = e;
    function r(a) {
      const n = a.currentTarget, o = a.target;
      o && o.closest("button") || n && n?.parentElement && n.parentElement?.querySelector("input")?.focus();
    }
    return (a, n) => (g(), F("div", {
      role: "group",
      "data-slot": "input-group-addon",
      "data-align": t.align,
      class: be(s(G)(s(gT)({ align: t.align }), t.class)),
      onClick: r
    }, [
      j(a.$slots, "default")
    ], 10, mT));
  }
}), pT = /* @__PURE__ */ D({
  __name: "InputGroupButton",
  props: {
    variant: { default: "ghost" },
    size: { default: "xs" },
    class: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), A(s(pt), {
      "data-size": t.size,
      variant: t.variant,
      class: be(s(G)(s(hT)({ size: t.size }), t.class))
    }, {
      default: h(() => [
        j(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-size", "variant", "class"]));
  }
}), vT = /* @__PURE__ */ D({
  __name: "InputGroupInput",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), A(s(Tn), {
      "data-slot": "input-group-control",
      class: be(s(G)(
        "flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent",
        t.class
      ))
    }, null, 8, ["class"]));
  }
}), gT = rr(
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
), hT = rr(
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
), DT = /* @__PURE__ */ D({
  inheritAttrs: !1,
  __name: "InputSearch",
  props: /* @__PURE__ */ vt({
    showClearButton: { type: Boolean, default: !0 },
    placeholder: { default: "Search..." }
  }, {
    modelValue: {},
    modelModifiers: {},
    modelSubmit: { default: "" },
    modelSubmitModifiers: {}
  }),
  emits: /* @__PURE__ */ vt(["onSubmit", "onClear"], ["update:modelValue", "update:modelSubmit"]),
  setup(e, { emit: t }) {
    const r = t, a = ft(e, "modelValue"), n = ft(e, "modelSubmit"), o = W(() => !!a.value && a.value.length > 0);
    function i() {
      n.value = a.value || "", r("onSubmit", a.value || "");
    }
    function l() {
      n.value = "", a.value = "", r("onClear", "");
    }
    return (u, c) => (g(), A(s(fT), null, {
      default: h(() => [
        w(s(Cc), { align: "inline-start" }, {
          default: h(() => [
            w(s(__))
          ]),
          _: 1
        }),
        w(s(vT), K({
          modelValue: a.value,
          "onUpdate:modelValue": c[0] || (c[0] = (d) => a.value = d),
          type: "text",
          placeholder: e.placeholder
        }, u.$attrs, {
          onKeydown: Ah(i, ["enter"])
        }), null, 16, ["modelValue", "placeholder"]),
        o.value && e.showClearButton ? (g(), A(s(Cc), {
          key: 0,
          align: "inline-end"
        }, {
          default: h(() => [
            w(s(pT), {
              variant: "ghost",
              size: "icon-xs",
              onClick: l
            }, {
              default: h(() => [
                w(s(Qr))
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : pe("", !0)
      ]),
      _: 1
    }));
  }
}), CT = /* @__PURE__ */ D({
  __name: "Tag",
  props: {
    variant: {},
    class: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), F("span", {
      class: be(s(G)(s(bT)({ variant: e.variant }), t.class))
    }, [
      j(r.$slots, "default")
    ], 2));
  }
}), bT = rr(
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
  $T as AppSidebar,
  pt as Button,
  pd as ButtonSelect,
  wT as DataTable,
  fO as DataTableColumnHeader,
  mO as DataTableViewOptions,
  kT as DateFormat,
  cc as DisplayGraduated,
  kE as DynamicAlertDialog,
  Pz as DynamicAutoFormDialog,
  iT as DynamicComponentDialog,
  ST as DynamicComponentProvider,
  Fs as DynamicConfirmComponentDialog,
  Rs as DynamicDialog,
  oT as DynamicDrawer,
  uE as EmptyMini,
  TT as InputBoolean,
  PT as InputGraduated,
  AT as InputRange,
  DT as InputSearch,
  pE as SelectListOptions,
  Wi as SelectOptions,
  CT as Tag,
  OT as alert,
  ET as confirmGeneric,
  NT as confirmSelect,
  zT as confirmSelectList,
  lE as dynamicComponent,
  xT as openAutoFormDialog,
  IT as openDynamicDialogComponent,
  Mg as useDynamicComponent,
  uc as useToggleState
};
