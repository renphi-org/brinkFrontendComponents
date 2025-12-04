import * as To from "vue";
import { h as dn, defineComponent as D, reactive as Kn, inject as fn, computed as G, unref as s, getCurrentInstance as Mt, watchEffect as _r, createBlock as A, openBlock as g, mergeProps as J, withCtx as v, renderSlot as C, watch as Le, getCurrentScope as hh, hasInjectionContext as Pc, toValue as H, isRef as yn, onMounted as er, nextTick as xt, readonly as bi, toRef as On, ref as fe, customRef as bh, toRefs as Aa, shallowRef as un, createVNode as $, createElementVNode as oe, createElementBlock as R, normalizeClass as ge, normalizeStyle as Tc, createTextVNode as he, withDirectives as _i, vModelText as Ac, normalizeProps as zt, guardReactiveProps as Ut, Fragment as De, toDisplayString as ae, resolveDynamicComponent as dt, createCommentVNode as me, renderList as Ze, onUnmounted as eo, Text as _h, mergeModels as mt, useModel as ct, useTemplateRef as yh, resolveDirective as $h, triggerRef as Dc, provide as sr, warn as Cc, onBeforeUnmount as yi, toRaw as kh, useSlots as wh, withModifiers as Sh, withKeys as Ih } from "vue";
import { useForwardPropsEmits as We, CollapsibleRoot as xh, CollapsibleContent as Oh, CollapsibleTrigger as Nh, DialogRoot as $i, DialogOverlay as ki, DialogPortal as wi, DialogContent as Si, DialogClose as jc, DialogDescription as Ii, DialogTitle as xi, createContext as Oi, Primitive as qr, TooltipRoot as Eh, TooltipPortal as zh, TooltipContent as Ph, TooltipArrow as Th, TooltipTrigger as Ah, TooltipProvider as Dh, Separator as Ch, PaginationRoot as jh, PaginationList as Uh, useForwardProps as Ye, PaginationFirst as Lh, PaginationLast as Rh, PaginationNext as Vh, PaginationPrev as Fh, SelectRoot as Mh, SelectPortal as Bh, SelectContent as Zh, SelectViewport as Wh, SelectItem as Gh, SelectItemIndicator as Kh, SelectItemText as Hh, SelectScrollDownButton as Jh, SelectScrollUpButton as qh, SelectTrigger as Uc, SelectIcon as Yh, SelectValue as Xh, DropdownMenuSeparator as Qh, CheckboxRoot as eb, CheckboxIndicator as tb, DropdownMenuRoot as nb, DropdownMenuCheckboxItem as rb, DropdownMenuItemIndicator as ab, DropdownMenuPortal as ob, DropdownMenuContent as ib, DropdownMenuItem as lb, DropdownMenuLabel as sb, DropdownMenuTrigger as ub, useFilter as cb, ListboxRoot as db, ListboxFilter as fb, ListboxContent as mb, ListboxItem as pb, ListboxItemIndicator as vb, AlertDialogRoot as gb, AlertDialogAction as hb, AlertDialogCancel as bb, AlertDialogPortal as _b, AlertDialogOverlay as yb, AlertDialogContent as $b, AlertDialogDescription as kb, AlertDialogTitle as wb, Slot as Sb, useId as Ib, Label as xb, AccordionRoot as Ob, AccordionContent as Nb, AccordionItem as Eb, AccordionHeader as zb, AccordionTrigger as Pb, SwitchRoot as Tb, SwitchThumb as Ab, CalendarRoot as Db, CalendarCell as Cb, CalendarCellTrigger as jb, CalendarGrid as Ub, CalendarGridBody as Lb, CalendarGridHead as Rb, CalendarGridRow as Vb, CalendarHeadCell as Fb, CalendarHeader as Mb, CalendarHeading as Bb, CalendarNext as Zb, CalendarPrev as Wb, PopoverRoot as Gb, PopoverPortal as Kb, PopoverContent as Hb, PopoverTrigger as Jb, RadioGroupRoot as qb, RadioGroupItem as Yb, RadioGroupIndicator as Xb } from "reka-ui";
const Ls = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Qb = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, r, a) => a ? a.toUpperCase() : r.toLowerCase()
), e_ = (e) => {
  const t = Qb(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, t_ = (...e) => e.filter((t, r, a) => !!t && t.trim() !== "" && a.indexOf(t) === r).join(" ").trim(), Rs = (e) => e === "";
var Er = {
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
const n_ = ({
  name: e,
  iconNode: t,
  absoluteStrokeWidth: r,
  "absolute-stroke-width": a,
  strokeWidth: n,
  "stroke-width": o,
  size: i = Er.width,
  color: l = Er.stroke,
  ...u
}, { slots: c }) => dn(
  "svg",
  {
    ...Er,
    ...u,
    width: i,
    height: i,
    stroke: l,
    "stroke-width": Rs(r) || Rs(a) || r === !0 || a === !0 ? Number(n || o || Er["stroke-width"]) * 24 / Number(i) : n || o || Er["stroke-width"],
    class: t_(
      "lucide",
      u.class,
      ...e ? [`lucide-${Ls(e_(e))}-icon`, `lucide-${Ls(e)}`] : ["lucide-icon"]
    )
  },
  [...t.map((d) => dn(...d)), ...c.default ? [c.default()] : []]
);
const et = (e, t) => (r, { slots: a, attrs: n }) => dn(
  n_,
  {
    ...n,
    ...r,
    iconNode: t,
    name: e
  },
  a
);
const Vs = et("arrow-down", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
const r_ = et("arrow-up-down", [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
]);
const Fs = et("arrow-up", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
const a_ = et("calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
]);
const to = et("check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
const Bn = et("chevron-down", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
const Ni = et("chevron-left", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
const Zn = et("chevron-right", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
const o_ = et("chevron-up", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]);
const Lc = et("chevrons-left", [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
]);
const Rc = et("chevrons-right", [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
]);
const i_ = et("chevrons-up-down", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]);
const l_ = et("circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
const s_ = et("eye-off", [
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
const Vc = et("frown", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M16 16s-1.5-2-4-2-4 2-4 2", key: "epbg0q" }],
  ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
  ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }]
]);
const u_ = et("loader-circle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
const no = et("plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
const c_ = et("rotate-ccw", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
]);
const d_ = et("search", [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
]);
const f_ = et("settings-2", [
  ["path", { d: "M14 17H5", key: "gfn3mx" }],
  ["path", { d: "M19 7h-9", key: "6i9tg" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
]);
const m_ = et("trash-2", [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
]);
const Fc = et("trash", [
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
]);
const Yr = et("x", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
const p_ = typeof document < "u", v_ = () => {
}, Da = Array.isArray;
function Ms(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
function Bs(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function g_(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const r in e) if (!h_(e[r], t[r])) return !1;
  return !0;
}
function h_(e, t) {
  return Da(e) ? Zs(e, t) : Da(t) ? Zs(t, e) : e === t;
}
function Zs(e, t) {
  return Da(t) ? e.length === t.length && e.every((r, a) => r === t[a]) : e.length === 1 && e[0] === t;
}
function Ws(e) {
  return typeof e == "string" || e && typeof e == "object";
}
Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : "");
const Mc = Symbol(process.env.NODE_ENV !== "production" ? "router" : ""), b_ = Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function Gs(e) {
  const t = fn(Mc), r = fn(b_);
  let a = !1, n = null;
  const o = G(() => {
    const d = s(e.to);
    return process.env.NODE_ENV !== "production" && (!a || d !== n) && (Ws(d) || (a ? Ms(`Invalid value for prop "to" in useLink()
- to:`, d, `
- previous to:`, n, `
- props:`, e) : Ms(`Invalid value for prop "to" in useLink()
- to:`, d, `
- props:`, e)), n = d, a = !0), t.resolve(d);
  }), i = G(() => {
    const { matched: d } = o.value, { length: f } = d, m = d[f - 1], p = r.matched;
    if (!m || !p.length) return -1;
    const h = p.findIndex(Bs.bind(null, m));
    if (h > -1) return h;
    const _ = Ks(d[f - 2]);
    return f > 1 && Ks(m) === _ && p[p.length - 1].path !== _ ? p.findIndex(Bs.bind(null, d[f - 2])) : h;
  }), l = G(() => i.value > -1 && k_(r.params, o.value.params)), u = G(() => i.value > -1 && i.value === r.matched.length - 1 && g_(r.params, o.value.params));
  function c(d = {}) {
    if ($_(d)) {
      const f = t[s(e.replace) ? "replace" : "push"](s(e.to)).catch(v_);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => f), f;
    }
    return Promise.resolve();
  }
  if (process.env.NODE_ENV !== "production" && p_) {
    const d = Mt();
    if (d) {
      const f = {
        route: o.value,
        isActive: l.value,
        isExactActive: u.value,
        error: null
      };
      d.__vrl_devtools = d.__vrl_devtools || [], d.__vrl_devtools.push(f), _r(() => {
        f.route = o.value, f.isActive = l.value, f.isExactActive = u.value, f.error = Ws(s(e.to)) ? null : 'Invalid "to" value';
      }, { flush: "post" });
    }
  }
  return {
    route: o,
    href: G(() => o.value.href),
    isActive: l,
    isExactActive: u,
    navigate: c
  };
}
function __(e) {
  return e.length === 1 ? e[0] : e;
}
const y_ = /* @__PURE__ */ D({
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
  useLink: Gs,
  setup(e, { slots: t }) {
    const r = Kn(Gs(e)), { options: a } = fn(Mc), n = G(() => ({
      [Hs(e.activeClass, a.linkActiveClass, "router-link-active")]: r.isActive,
      [Hs(e.exactActiveClass, a.linkExactActiveClass, "router-link-exact-active")]: r.isExactActive
    }));
    return () => {
      const o = t.default && __(t.default(r));
      return e.custom ? o : dn("a", {
        "aria-current": r.isExactActive ? e.ariaCurrentValue : null,
        href: r.href,
        onClick: r.navigate,
        class: n.value
      }, o);
    };
  }
}), Ao = y_;
function $_(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function k_(e, t) {
  for (const r in t) {
    const a = t[r], n = e[r];
    if (typeof a == "string") {
      if (a !== n) return !1;
    } else if (!Da(n) || n.length !== a.length || a.some((o, i) => o !== n[i])) return !1;
  }
  return !0;
}
function Ks(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Hs = (e, t, r) => e ?? t ?? r, w_ = /* @__PURE__ */ D({
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
    const n = We(e, t);
    return (o, i) => (g(), A(s(xh), J({ "data-slot": "collapsible" }, s(n)), {
      default: v(({ open: l }) => [
        C(o.$slots, "default", { open: l })
      ]),
      _: 3
    }, 16));
  }
}), S_ = /* @__PURE__ */ D({
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), A(s(Oh), J({ "data-slot": "collapsible-content" }, t), {
      default: v(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), I_ = /* @__PURE__ */ D({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), A(s(Nh), J({ "data-slot": "collapsible-trigger" }, t), {
      default: v(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Bc(e) {
  var t, r, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var n = e.length;
    for (t = 0; t < n; t++) e[t] && (r = Bc(e[t])) && (a && (a += " "), a += r);
  } else for (r in e) e[r] && (a && (a += " "), a += r);
  return a;
}
function Zc() {
  for (var e, t, r = 0, a = "", n = arguments.length; r < n; r++) (e = arguments[r]) && (t = Bc(e)) && (a && (a += " "), a += t);
  return a;
}
const Js = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, qs = Zc, tr = (e, t) => (r) => {
  var a;
  if (t?.variants == null) return qs(e, r?.class, r?.className);
  const { variants: n, defaultVariants: o } = t, i = Object.keys(n).map((c) => {
    const d = r?.[c], f = o?.[c];
    if (d === null) return null;
    const m = Js(d) || Js(f);
    return n[c][m];
  }), l = r && Object.entries(r).reduce((c, d) => {
    let [f, m] = d;
    return m === void 0 || (c[f] = m), c;
  }, {}), u = t == null || (a = t.compoundVariants) === null || a === void 0 ? void 0 : a.reduce((c, d) => {
    let { class: f, className: m, ...p } = d;
    return Object.entries(p).every((h) => {
      let [_, S] = h;
      return Array.isArray(S) ? S.includes({
        ...o,
        ...l
      }[_]) : {
        ...o,
        ...l
      }[_] === S;
    }) ? [
      ...c,
      f,
      m
    ] : c;
  }, []);
  return qs(e, i, u, r?.class, r?.className);
}, x_ = (e, t) => {
  const r = new Array(e.length + t.length);
  for (let a = 0; a < e.length; a++)
    r[a] = e[a];
  for (let a = 0; a < t.length; a++)
    r[e.length + a] = t[a];
  return r;
}, O_ = (e, t) => ({
  classGroupId: e,
  validator: t
}), Wc = (e = /* @__PURE__ */ new Map(), t = null, r) => ({
  nextPart: e,
  validators: t,
  classGroupId: r
}), Ca = "-", Ys = [], N_ = "arbitrary..", E_ = (e) => {
  const t = P_(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: a
  } = e;
  return {
    getClassGroupId: (i) => {
      if (i.startsWith("[") && i.endsWith("]"))
        return z_(i);
      const l = i.split(Ca), u = l[0] === "" && l.length > 1 ? 1 : 0;
      return Gc(l, u, t);
    },
    getConflictingClassGroupIds: (i, l) => {
      if (l) {
        const u = a[i], c = r[i];
        return u ? c ? x_(c, u) : u : c || Ys;
      }
      return r[i] || Ys;
    }
  };
}, Gc = (e, t, r) => {
  if (e.length - t === 0)
    return r.classGroupId;
  const n = e[t], o = r.nextPart.get(n);
  if (o) {
    const c = Gc(e, t + 1, o);
    if (c) return c;
  }
  const i = r.validators;
  if (i === null)
    return;
  const l = t === 0 ? e.join(Ca) : e.slice(t).join(Ca), u = i.length;
  for (let c = 0; c < u; c++) {
    const d = i[c];
    if (d.validator(l))
      return d.classGroupId;
  }
}, z_ = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), r = t.indexOf(":"), a = t.slice(0, r);
  return a ? N_ + a : void 0;
})(), P_ = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e;
  return T_(r, t);
}, T_ = (e, t) => {
  const r = Wc();
  for (const a in e) {
    const n = e[a];
    Ei(n, r, a, t);
  }
  return r;
}, Ei = (e, t, r, a) => {
  const n = e.length;
  for (let o = 0; o < n; o++) {
    const i = e[o];
    A_(i, t, r, a);
  }
}, A_ = (e, t, r, a) => {
  if (typeof e == "string") {
    D_(e, t, r);
    return;
  }
  if (typeof e == "function") {
    C_(e, t, r, a);
    return;
  }
  j_(e, t, r, a);
}, D_ = (e, t, r) => {
  const a = e === "" ? t : Kc(t, e);
  a.classGroupId = r;
}, C_ = (e, t, r, a) => {
  if (U_(e)) {
    Ei(e(a), t, r, a);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(O_(r, e));
}, j_ = (e, t, r, a) => {
  const n = Object.entries(e), o = n.length;
  for (let i = 0; i < o; i++) {
    const [l, u] = n[i];
    Ei(u, Kc(t, l), r, a);
  }
}, Kc = (e, t) => {
  let r = e;
  const a = t.split(Ca), n = a.length;
  for (let o = 0; o < n; o++) {
    const i = a[o];
    let l = r.nextPart.get(i);
    l || (l = Wc(), r.nextPart.set(i, l)), r = l;
  }
  return r;
}, U_ = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, L_ = (e) => {
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
}, Ho = "!", Xs = ":", R_ = [], Qs = (e, t, r, a, n) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: r,
  maybePostfixModifierPosition: a,
  isExternal: n
}), V_ = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let a = (n) => {
    const o = [];
    let i = 0, l = 0, u = 0, c;
    const d = n.length;
    for (let _ = 0; _ < d; _++) {
      const S = n[_];
      if (i === 0 && l === 0) {
        if (S === Xs) {
          o.push(n.slice(u, _)), u = _ + 1;
          continue;
        }
        if (S === "/") {
          c = _;
          continue;
        }
      }
      S === "[" ? i++ : S === "]" ? i-- : S === "(" ? l++ : S === ")" && l--;
    }
    const f = o.length === 0 ? n : n.slice(u);
    let m = f, p = !1;
    f.endsWith(Ho) ? (m = f.slice(0, -1), p = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      f.startsWith(Ho) && (m = f.slice(1), p = !0)
    );
    const h = c && c > u ? c - u : void 0;
    return Qs(o, p, m, h);
  };
  if (t) {
    const n = t + Xs, o = a;
    a = (i) => i.startsWith(n) ? o(i.slice(n.length)) : Qs(R_, !1, i, void 0, !0);
  }
  if (r) {
    const n = a;
    a = (o) => r({
      className: o,
      parseClassName: n
    });
  }
  return a;
}, F_ = (e) => {
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
}, M_ = (e) => ({
  cache: L_(e.cacheSize),
  parseClassName: V_(e),
  sortModifiers: F_(e),
  ...E_(e)
}), B_ = /\s+/, Z_ = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: a,
    getConflictingClassGroupIds: n,
    sortModifiers: o
  } = t, i = [], l = e.trim().split(B_);
  let u = "";
  for (let c = l.length - 1; c >= 0; c -= 1) {
    const d = l[c], {
      isExternal: f,
      modifiers: m,
      hasImportantModifier: p,
      baseClassName: h,
      maybePostfixModifierPosition: _
    } = r(d);
    if (f) {
      u = d + (u.length > 0 ? " " + u : u);
      continue;
    }
    let S = !!_, k = a(S ? h.substring(0, _) : h);
    if (!k) {
      if (!S) {
        u = d + (u.length > 0 ? " " + u : u);
        continue;
      }
      if (k = a(h), !k) {
        u = d + (u.length > 0 ? " " + u : u);
        continue;
      }
      S = !1;
    }
    const y = m.length === 0 ? "" : m.length === 1 ? m[0] : o(m).join(":"), O = p ? y + Ho : y, I = O + k;
    if (i.indexOf(I) > -1)
      continue;
    i.push(I);
    const x = n(k, S);
    for (let P = 0; P < x.length; ++P) {
      const N = x[P];
      i.push(O + N);
    }
    u = d + (u.length > 0 ? " " + u : u);
  }
  return u;
}, W_ = (...e) => {
  let t = 0, r, a, n = "";
  for (; t < e.length; )
    (r = e[t++]) && (a = Hc(r)) && (n && (n += " "), n += a);
  return n;
}, Hc = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let a = 0; a < e.length; a++)
    e[a] && (t = Hc(e[a])) && (r && (r += " "), r += t);
  return r;
}, G_ = (e, ...t) => {
  let r, a, n, o;
  const i = (u) => {
    const c = t.reduce((d, f) => f(d), e());
    return r = M_(c), a = r.cache.get, n = r.cache.set, o = l, l(u);
  }, l = (u) => {
    const c = a(u);
    if (c)
      return c;
    const d = Z_(u, r);
    return n(u, d), d;
  };
  return o = i, (...u) => o(W_(...u));
}, K_ = [], ut = (e) => {
  const t = (r) => r[e] || K_;
  return t.isThemeGetter = !0, t;
}, Jc = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, qc = /^\((?:(\w[\w-]*):)?(.+)\)$/i, H_ = /^\d+\/\d+$/, J_ = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, q_ = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Y_ = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, X_ = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Q_ = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, or = (e) => H_.test(e), Ee = (e) => !!e && !Number.isNaN(Number(e)), xn = (e) => !!e && Number.isInteger(Number(e)), Do = (e) => e.endsWith("%") && Ee(e.slice(0, -1)), vn = (e) => J_.test(e), ey = () => !0, ty = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  q_.test(e) && !Y_.test(e)
), Yc = () => !1, ny = (e) => X_.test(e), ry = (e) => Q_.test(e), ay = (e) => !ce(e) && !de(e), oy = (e) => yr(e, ed, Yc), ce = (e) => Jc.test(e), Un = (e) => yr(e, td, ty), Co = (e) => yr(e, cy, Ee), eu = (e) => yr(e, Xc, Yc), iy = (e) => yr(e, Qc, ry), pa = (e) => yr(e, nd, ny), de = (e) => qc.test(e), zr = (e) => $r(e, td), ly = (e) => $r(e, dy), tu = (e) => $r(e, Xc), sy = (e) => $r(e, ed), uy = (e) => $r(e, Qc), va = (e) => $r(e, nd, !0), yr = (e, t, r) => {
  const a = Jc.exec(e);
  return a ? a[1] ? t(a[1]) : r(a[2]) : !1;
}, $r = (e, t, r = !1) => {
  const a = qc.exec(e);
  return a ? a[1] ? t(a[1]) : r : !1;
}, Xc = (e) => e === "position" || e === "percentage", Qc = (e) => e === "image" || e === "url", ed = (e) => e === "length" || e === "size" || e === "bg-size", td = (e) => e === "length", cy = (e) => e === "number", dy = (e) => e === "family-name", nd = (e) => e === "shadow", fy = () => {
  const e = ut("color"), t = ut("font"), r = ut("text"), a = ut("font-weight"), n = ut("tracking"), o = ut("leading"), i = ut("breakpoint"), l = ut("container"), u = ut("spacing"), c = ut("radius"), d = ut("shadow"), f = ut("inset-shadow"), m = ut("text-shadow"), p = ut("drop-shadow"), h = ut("blur"), _ = ut("perspective"), S = ut("aspect"), k = ut("ease"), y = ut("animate"), O = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], I = () => [
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
  ], x = () => [...I(), de, ce], P = () => ["auto", "hidden", "clip", "visible", "scroll"], N = () => ["auto", "contain", "none"], j = () => [de, ce, u], M = () => [or, "full", "auto", ...j()], te = () => [xn, "none", "subgrid", de, ce], X = () => ["auto", {
    span: ["full", xn, de, ce]
  }, xn, de, ce], Q = () => [xn, "auto", de, ce], Ce = () => ["auto", "min", "max", "fr", de, ce], B = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], ne = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], K = () => ["auto", ...j()], ue = () => [or, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...j()], re = () => [e, de, ce], pt = () => [...I(), tu, eu, {
    position: [de, ce]
  }], tt = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], yt = () => ["auto", "cover", "contain", sy, oy, {
    size: [de, ce]
  }], Tt = () => [Do, zr, Un], Ge = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    c,
    de,
    ce
  ], Pe = () => ["", Ee, zr, Un], Nt = () => ["solid", "dashed", "dotted", "double"], le = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], se = () => [Ee, Do, tu, eu], Oe = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    h,
    de,
    ce
  ], Ne = () => ["none", Ee, de, ce], nt = () => ["none", Ee, de, ce], ot = () => [Ee, de, ce], Ke = () => [or, "full", ...j()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [vn],
      breakpoint: [vn],
      color: [ey],
      container: [vn],
      "drop-shadow": [vn],
      ease: ["in", "out", "in-out"],
      font: [ay],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [vn],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [vn],
      shadow: [vn],
      spacing: ["px", Ee],
      text: [vn],
      "text-shadow": [vn],
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
        aspect: ["auto", "square", or, ce, de, S]
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
        columns: [Ee, ce, de, l]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": O()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": O()
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
        object: x()
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
        overscroll: N()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": N()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": N()
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
        inset: M()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": M()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": M()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: M()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: M()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: M()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: M()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: M()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: M()
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
        z: [xn, "auto", de, ce]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [or, "full", "auto", l, ...j()]
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
        flex: [Ee, or, "auto", "initial", "none", ce]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", Ee, de, ce]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", Ee, de, ce]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [xn, "first", "last", "none", de, ce]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": te()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: X()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": Q()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": Q()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": te()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: X()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": Q()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": Q()
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
        "auto-cols": Ce()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": Ce()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: j()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": j()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": j()
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
        content: ["normal", ...B()]
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
        "place-content": B()
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
        p: j()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: j()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: j()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: j()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: j()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: j()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: j()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: j()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: j()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: K()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: K()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: K()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: K()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: K()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: K()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: K()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: K()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: K()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": j()
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
        "space-y": j()
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
        size: ue()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [l, "screen", ...ue()]
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
          ...ue()
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
          ...ue()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...ue()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...ue()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...ue()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, zr, Un]
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
        font: [a, de, Co]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Do, ce]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ly, ce, t]
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
        "line-clamp": [Ee, "none", de, Co]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          o,
          ...j()
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
        placeholder: re()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: re()
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
        decoration: [...Nt(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [Ee, "from-font", "auto", de, Un]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: re()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [Ee, "auto", de, ce]
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
        indent: j()
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
        bg: pt()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: tt()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: yt()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, xn, de, ce],
          radial: ["", de, ce],
          conic: [xn, de, ce]
        }, uy, iy]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: re()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: Tt()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: Tt()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: Tt()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: re()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: re()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: re()
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
        border: [...Nt(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...Nt(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: re()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": re()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": re()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": re()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": re()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": re()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": re()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": re()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": re()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: re()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...Nt(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Ee, de, ce]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", Ee, zr, Un]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: re()
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
          va,
          pa
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: re()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", f, va, pa]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": re()
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
        ring: re()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [Ee, Un]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": re()
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
        "inset-ring": re()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", m, va, pa]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": re()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [Ee, de, ce]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...le(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": le()
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
        "mask-linear": [Ee]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": se()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": se()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": re()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": re()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": se()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": se()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": re()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": re()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": se()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": se()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": re()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": re()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": se()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": se()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": re()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": re()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": se()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": se()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": re()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": re()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": se()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": se()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": re()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": re()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": se()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": se()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": re()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": re()
      }],
      "mask-image-radial": [{
        "mask-radial": [de, ce]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": se()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": se()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": re()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": re()
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
        "mask-conic": [Ee]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": se()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": se()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": re()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": re()
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
        mask: pt()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: tt()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: yt()
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
        blur: Oe()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [Ee, de, ce]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [Ee, de, ce]
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
          va,
          pa
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": re()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", Ee, de, ce]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [Ee, de, ce]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", Ee, de, ce]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [Ee, de, ce]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", Ee, de, ce]
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
        "backdrop-blur": Oe()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [Ee, de, ce]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [Ee, de, ce]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", Ee, de, ce]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [Ee, de, ce]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", Ee, de, ce]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [Ee, de, ce]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [Ee, de, ce]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", Ee, de, ce]
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
        "border-spacing": j()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": j()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": j()
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
        duration: [Ee, "initial", de, ce]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", k, de, ce]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [Ee, de, ce]
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
        "perspective-origin": x()
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
        scale: nt()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": nt()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": nt()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": nt()
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
        skew: ot()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": ot()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": ot()
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
        origin: x()
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
        translate: Ke()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Ke()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Ke()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Ke()
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
        accent: re()
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
        caret: re()
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
        "scroll-m": j()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": j()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": j()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": j()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": j()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": j()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": j()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": j()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": j()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": j()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": j()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": j()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": j()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": j()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": j()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": j()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": j()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": j()
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
        fill: ["none", ...re()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Ee, zr, Un, Co]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...re()]
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
}, my = /* @__PURE__ */ G_(fy);
function Z(...e) {
  return my(Zc(e));
}
const py = /* @__PURE__ */ D({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = We(e, t);
    return (o, i) => (g(), A(s($i), J({ "data-slot": "sheet" }, s(n)), {
      default: v(() => [
        C(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jo = /* @__PURE__ */ new WeakMap(), vy = /* @__NO_SIDE_EFFECTS__ */ (...e) => {
  var t;
  const r = e[0], a = (t = Mt()) === null || t === void 0 ? void 0 : t.proxy, n = a ?? hh();
  if (n == null && !Pc()) throw new Error("injectLocal must be called in setup");
  return n && jo.has(n) && r in jo.get(n) ? jo.get(n)[r] : fn(...e);
}, rd = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const gy = (e) => typeof e < "u", hy = Object.prototype.toString, by = (e) => hy.call(e) === "[object Object]", _y = () => {
};
function yy(...e) {
  if (e.length !== 1) return On(...e);
  const t = e[0];
  return typeof t == "function" ? bi(bh(() => ({
    get: t,
    set: _y
  }))) : fe(t);
}
function $y(e, t) {
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
const ad = (e) => e();
function ky(e = ad, t = {}) {
  const { initialState: r = "active" } = t, a = yy(r === "active");
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
    isActive: bi(a),
    pause: n,
    resume: o,
    eventFilter: i
  };
}
function nu(e) {
  return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function Uo(e) {
  return Array.isArray(e) ? e : [e];
}
function wy(e) {
  return Mt();
}
function Sy(e) {
  return yn(e) ? Kn(new Proxy({}, {
    get(t, r, a) {
      return s(Reflect.get(e.value, r, a));
    },
    set(t, r, a) {
      return yn(e.value[r]) && !yn(a) ? e.value[r].value = a : e.value[r] = a, !0;
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
  })) : Kn(e);
}
function Iy(e) {
  return Sy(G(e));
}
function pe(e, ...t) {
  const r = t.flat(), a = r[0];
  return Iy(() => Object.fromEntries(typeof a == "function" ? Object.entries(Aa(e)).filter(([n, o]) => !a(H(o), n)) : Object.entries(Aa(e)).filter((n) => !r.includes(n[0]))));
}
function xy(e, t, r = {}) {
  const { eventFilter: a = ad, ...n } = r;
  return Le(e, $y(a, t), n);
}
function Oy(e, t, r = {}) {
  const { eventFilter: a, initialState: n = "active", ...o } = r, { eventFilter: i, pause: l, resume: u, isActive: c } = ky(a, { initialState: n });
  return {
    stop: xy(e, t, {
      ...o,
      eventFilter: i
    }),
    pause: l,
    resume: u,
    isActive: c
  };
}
const Ny = Oy;
function Ey(e, t = !0, r) {
  wy() ? er(e, r) : t ? e() : xt(e);
}
const zy = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[T\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/i, Py = /[YMDHhms]o|\[([^\]]+)\]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|z{1,4}|SSS/g;
function Ty(e, t, r, a) {
  let n = e < 12 ? "AM" : "PM";
  return a && (n = n.split("").reduce((o, i) => o += `${i}.`, "")), r ? n.toLowerCase() : n;
}
function Ln(e) {
  const t = [
    "th",
    "st",
    "nd",
    "rd"
  ], r = e % 100;
  return e + (t[(r - 20) % 10] || t[r] || t[0]);
}
function Ay(e, t, r = {}) {
  var a;
  const n = e.getFullYear(), o = e.getMonth(), i = e.getDate(), l = e.getHours(), u = e.getMinutes(), c = e.getSeconds(), d = e.getMilliseconds(), f = e.getDay(), m = (a = r.customMeridiem) !== null && a !== void 0 ? a : Ty, p = (_) => {
    var S;
    return (S = _.split(" ")[1]) !== null && S !== void 0 ? S : "";
  }, h = {
    Yo: () => Ln(n),
    YY: () => String(n).slice(-2),
    YYYY: () => n,
    M: () => o + 1,
    Mo: () => Ln(o + 1),
    MM: () => `${o + 1}`.padStart(2, "0"),
    MMM: () => e.toLocaleDateString(H(r.locales), { month: "short" }),
    MMMM: () => e.toLocaleDateString(H(r.locales), { month: "long" }),
    D: () => String(i),
    Do: () => Ln(i),
    DD: () => `${i}`.padStart(2, "0"),
    H: () => String(l),
    Ho: () => Ln(l),
    HH: () => `${l}`.padStart(2, "0"),
    h: () => `${l % 12 || 12}`.padStart(1, "0"),
    ho: () => Ln(l % 12 || 12),
    hh: () => `${l % 12 || 12}`.padStart(2, "0"),
    m: () => String(u),
    mo: () => Ln(u),
    mm: () => `${u}`.padStart(2, "0"),
    s: () => String(c),
    so: () => Ln(c),
    ss: () => `${c}`.padStart(2, "0"),
    SSS: () => `${d}`.padStart(3, "0"),
    d: () => f,
    dd: () => e.toLocaleDateString(H(r.locales), { weekday: "narrow" }),
    ddd: () => e.toLocaleDateString(H(r.locales), { weekday: "short" }),
    dddd: () => e.toLocaleDateString(H(r.locales), { weekday: "long" }),
    A: () => m(l, u),
    AA: () => m(l, u, !1, !0),
    a: () => m(l, u, !0),
    aa: () => m(l, u, !0, !0),
    z: () => p(e.toLocaleDateString(H(r.locales), { timeZoneName: "shortOffset" })),
    zz: () => p(e.toLocaleDateString(H(r.locales), { timeZoneName: "shortOffset" })),
    zzz: () => p(e.toLocaleDateString(H(r.locales), { timeZoneName: "shortOffset" })),
    zzzz: () => p(e.toLocaleDateString(H(r.locales), { timeZoneName: "longOffset" }))
  };
  return t.replace(Py, (_, S) => {
    var k, y;
    return (k = S ?? ((y = h[_]) === null || y === void 0 ? void 0 : y.call(h))) !== null && k !== void 0 ? k : _;
  });
}
function Dy(e) {
  if (e === null) return /* @__PURE__ */ new Date(NaN);
  if (e === void 0) return /* @__PURE__ */ new Date();
  if (e instanceof Date) return new Date(e);
  if (typeof e == "string" && !/Z$/i.test(e)) {
    const t = e.match(zy);
    if (t) {
      const r = t[2] - 1 || 0, a = (t[7] || "0").substring(0, 3);
      return new Date(t[1], r, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, a);
    }
  }
  return new Date(e);
}
// @__NO_SIDE_EFFECTS__
function Cy(e, t = "HH:mm:ss", r = {}) {
  return G(() => Ay(Dy(H(e)), H(t), r));
}
function jy(e, t, r) {
  return Le(e, t, {
    ...r,
    immediate: !0
  });
}
const Rn = rd ? window : void 0, od = rd ? window.document : void 0;
function Uy(e) {
  var t;
  const r = H(e);
  return (t = r?.$el) !== null && t !== void 0 ? t : r;
}
function Hn(...e) {
  const t = (a, n, o, i) => (a.addEventListener(n, o, i), () => a.removeEventListener(n, o, i)), r = G(() => {
    const a = Uo(H(e[0])).filter((n) => n != null);
    return a.every((n) => typeof n != "string") ? a : void 0;
  });
  return jy(() => {
    var a, n;
    return [
      (a = (n = r.value) === null || n === void 0 ? void 0 : n.map((o) => Uy(o))) !== null && a !== void 0 ? a : [Rn].filter((o) => o != null),
      Uo(H(r.value ? e[1] : e[0])),
      Uo(s(r.value ? e[2] : e[1])),
      H(r.value ? e[3] : e[2])
    ];
  }, ([a, n, o, i], l, u) => {
    if (!a?.length || !n?.length || !o?.length) return;
    const c = by(i) ? { ...i } : i, d = a.flatMap((f) => n.flatMap((m) => o.map((p) => t(f, m, p, c))));
    u(() => {
      d.forEach((f) => f());
    });
  }, { flush: "post" });
}
// @__NO_SIDE_EFFECTS__
function Ly() {
  const e = un(!1), t = Mt();
  return t && er(() => {
    e.value = !0;
  }, t), e;
}
// @__NO_SIDE_EFFECTS__
function Ry(e) {
  const t = /* @__PURE__ */ Ly();
  return G(() => (t.value, !!e()));
}
const Vy = Symbol("vueuse-ssr-width");
// @__NO_SIDE_EFFECTS__
function Fy() {
  const e = Pc() ? /* @__PURE__ */ vy(Vy, null) : null;
  return typeof e == "number" ? e : void 0;
}
function My(e, t = {}) {
  const { window: r = Rn, ssrWidth: a = /* @__PURE__ */ Fy() } = t, n = /* @__PURE__ */ Ry(() => r && "matchMedia" in r && typeof r.matchMedia == "function"), o = un(typeof a == "number"), i = un(), l = un(!1), u = (c) => {
    l.value = c.matches;
  };
  return _r(() => {
    if (o.value) {
      o.value = !n.value, l.value = H(e).split(",").some((c) => {
        const d = c.includes("not all"), f = c.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), m = c.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let p = !!(f || m);
        return f && p && (p = a >= nu(f[1])), m && p && (p = a <= nu(m[1])), d ? !p : p;
      });
      return;
    }
    n.value && (i.value = r.matchMedia(H(e)), l.value = i.value.matches);
  }), Hn(i, "change", u, { passive: !0 }), G(() => l.value);
}
function By(e) {
  return JSON.parse(JSON.stringify(e));
}
const ga = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ha = "__vueuse_ssr_handlers__", Zy = /* @__PURE__ */ Wy();
function Wy() {
  return ha in ga || (ga[ha] = ga[ha] || {}), ga[ha];
}
function Gy(e, t) {
  return Zy[e] || t;
}
function Ky(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const Hy = {
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
}, ru = "vueuse-storage";
function Jy(e, t, r, a = {}) {
  var n;
  const { flush: o = "pre", deep: i = !0, listenToStorageChanges: l = !0, writeDefaults: u = !0, mergeDefaults: c = !1, shallow: d, window: f = Rn, eventFilter: m, onError: p = (B) => {
    console.error(B);
  }, initOnMounted: h } = a, _ = (d ? un : fe)(typeof t == "function" ? t() : t), S = G(() => H(e));
  if (!r) try {
    r = Gy("getDefaultStorage", () => Rn?.localStorage)();
  } catch (B) {
    p(B);
  }
  if (!r) return _;
  const k = H(t), y = Ky(k), O = (n = a.serializer) !== null && n !== void 0 ? n : Hy[y], { pause: I, resume: x } = Ny(_, (B) => te(B), {
    flush: o,
    deep: i,
    eventFilter: m
  });
  Le(S, () => Q(), { flush: o });
  let P = !1;
  const N = (B) => {
    h && !P || Q(B);
  }, j = (B) => {
    h && !P || Ce(B);
  };
  f && l && (r instanceof Storage ? Hn(f, "storage", N, { passive: !0 }) : Hn(f, ru, j)), h ? Ey(() => {
    P = !0, Q();
  }) : Q();
  function M(B, ne) {
    if (f) {
      const K = {
        key: S.value,
        oldValue: B,
        newValue: ne,
        storageArea: r
      };
      f.dispatchEvent(r instanceof Storage ? new StorageEvent("storage", K) : new CustomEvent(ru, { detail: K }));
    }
  }
  function te(B) {
    try {
      const ne = r.getItem(S.value);
      if (B == null)
        M(ne, null), r.removeItem(S.value);
      else {
        const K = O.write(B);
        ne !== K && (r.setItem(S.value, K), M(ne, K));
      }
    } catch (ne) {
      p(ne);
    }
  }
  function X(B) {
    const ne = B ? B.newValue : r.getItem(S.value);
    if (ne == null)
      return u && k != null && r.setItem(S.value, O.write(k)), k;
    if (!B && c) {
      const K = O.read(ne);
      return typeof c == "function" ? c(K, k) : y === "object" && !Array.isArray(K) ? {
        ...k,
        ...K
      } : K;
    } else return typeof ne != "string" ? ne : O.read(ne);
  }
  function Q(B) {
    if (!(B && B.storageArea !== r)) {
      if (B && B.key == null) {
        _.value = k;
        return;
      }
      if (!(B && B.key !== S.value)) {
        I();
        try {
          const ne = O.write(_.value);
          (B === void 0 || B?.newValue !== ne) && (_.value = X(B));
        } catch (ne) {
          p(ne);
        } finally {
          B ? xt(x) : x();
        }
      }
    }
  }
  function Ce(B) {
    Q(B.detail);
  }
  return _;
}
const qy = [
  "mousedown",
  "mouseup",
  "keydown",
  "keyup"
];
// @__NO_SIDE_EFFECTS__
function Yy(e, t = {}) {
  const { events: r = qy, document: a = od, initial: n = null } = t, o = un(n);
  return a && r.forEach((i) => {
    Hn(a, i, (l) => {
      typeof l.getModifierState == "function" && (o.value = l.getModifierState(e));
    }, { passive: !0 });
  }), o;
}
function Xy(e, t, r = {}) {
  const { window: a = Rn } = r;
  return Jy(e, t, a?.sessionStorage, r);
}
// @__NO_SIDE_EFFECTS__
function zi(e, t, r, a = {}) {
  var n, o;
  const { clone: i = !1, passive: l = !1, eventName: u, deep: c = !1, defaultValue: d, shouldEmit: f } = a, m = Mt(), p = r || m?.emit || (m == null || (n = m.$emit) === null || n === void 0 ? void 0 : n.bind(m)) || (m == null || (o = m.proxy) === null || o === void 0 || (o = o.$emit) === null || o === void 0 ? void 0 : o.bind(m?.proxy));
  let h = u;
  t || (t = "modelValue"), h = h || `update:${t.toString()}`;
  const _ = (y) => i ? typeof i == "function" ? i(y) : By(y) : y, S = () => gy(e[t]) ? _(e[t]) : d, k = (y) => {
    f ? f(y) && p(h, y) : p(h, y);
  };
  if (l) {
    const y = fe(S());
    let O = !1;
    return Le(() => e[t], (I) => {
      O || (O = !0, y.value = _(I), xt(() => O = !1));
    }), Le(y, (I) => {
      !O && (I !== e[t] || c) && k(I);
    }, { deep: c }), y;
  } else return G({
    get() {
      return S();
    },
    set(y) {
      k(y);
    }
  });
}
const Qy = /* @__PURE__ */ D({
  __name: "SheetOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = pe(t, "class");
    return (a, n) => (g(), A(s(ki), J({
      "data-slot": "sheet-overlay",
      class: s(Z)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80", t.class)
    }, s(r)), {
      default: v(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), e$ = /* @__PURE__ */ D({
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
    const r = e, a = t, n = pe(r, "class", "side"), o = We(n, a);
    return (i, l) => (g(), A(s(wi), null, {
      default: v(() => [
        $(Qy),
        $(s(Si), J({
          "data-slot": "sheet-content",
          class: s(Z)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
            e.side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
            e.side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
            e.side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
            e.side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
            r.class
          )
        }, { ...s(o), ...i.$attrs }), {
          default: v(() => [
            C(i.$slots, "default"),
            $(s(jc), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
              default: v(() => [
                $(s(Yr), { class: "size-4" }),
                l[0] || (l[0] = oe("span", { class: "sr-only" }, "Close", -1))
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
}), t$ = /* @__PURE__ */ D({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = pe(t, "class");
    return (a, n) => (g(), A(s(Ii), J({
      "data-slot": "sheet-description",
      class: s(Z)("text-muted-foreground text-sm", t.class)
    }, s(r)), {
      default: v(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), n$ = /* @__PURE__ */ D({
  __name: "SheetHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), R("div", {
      "data-slot": "sheet-header",
      class: ge(s(Z)("flex flex-col gap-1.5 p-4", t.class))
    }, [
      C(r.$slots, "default")
    ], 2));
  }
}), r$ = /* @__PURE__ */ D({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = pe(t, "class");
    return (a, n) => (g(), A(s(xi), J({
      "data-slot": "sheet-title",
      class: s(Z)("text-foreground font-semibold", t.class)
    }, s(r)), {
      default: v(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), au = "sidebar_state", a$ = 3600 * 24 * 7, o$ = "16rem", i$ = "18rem", l$ = "3rem", s$ = "b", [Pi, u$] = Oi("Sidebar"), c$ = { class: "flex h-full w-full flex-col" }, d$ = ["data-state", "data-collapsible", "data-variant", "data-side"], f$ = {
  "data-sidebar": "sidebar",
  class: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, m$ = /* @__PURE__ */ D({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: {}
  },
  setup(e) {
    const t = e, { isMobile: r, state: a, openMobile: n, setOpenMobile: o } = Pi();
    return (i, l) => e.collapsible === "none" ? (g(), R("div", J({
      key: 0,
      "data-slot": "sidebar",
      class: s(Z)("bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col", t.class)
    }, i.$attrs), [
      C(i.$slots, "default")
    ], 16)) : s(r) ? (g(), A(s(py), J({
      key: 1,
      open: s(n)
    }, i.$attrs, { "onUpdate:open": s(o) }), {
      default: v(() => [
        $(s(e$), {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar",
          "data-mobile": "true",
          side: e.side,
          class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
          style: Tc({
            "--sidebar-width": s(i$)
          })
        }, {
          default: v(() => [
            $(n$, { class: "sr-only" }, {
              default: v(() => [
                $(r$, null, {
                  default: v(() => [...l[0] || (l[0] = [
                    he("Sidebar", -1)
                  ])]),
                  _: 1
                }),
                $(t$, null, {
                  default: v(() => [...l[1] || (l[1] = [
                    he("Displays the mobile sidebar.", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            oe("div", c$, [
              C(i.$slots, "default")
            ])
          ]),
          _: 3
        }, 8, ["side", "style"])
      ]),
      _: 3
    }, 16, ["open", "onUpdate:open"])) : (g(), R("div", {
      key: 2,
      class: "group peer text-sidebar-foreground hidden md:block",
      "data-slot": "sidebar",
      "data-state": s(a),
      "data-collapsible": s(a) === "collapsed" ? e.collapsible : "",
      "data-variant": e.variant,
      "data-side": e.side
    }, [
      oe("div", {
        class: ge(s(Z)(
          "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
          "group-data-[collapsible=offcanvas]:w-0",
          "group-data-[side=right]:rotate-180",
          e.variant === "floating" || e.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
        ))
      }, null, 2),
      oe("div", J({
        class: s(Z)(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          e.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          e.variant === "floating" || e.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          t.class
        )
      }, i.$attrs), [
        oe("div", f$, [
          C(i.$slots, "default")
        ])
      ], 16)
    ], 8, d$));
  }
}), p$ = /* @__PURE__ */ D({
  __name: "SidebarContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), R("div", {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      class: ge(s(Z)("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", t.class))
    }, [
      C(r.$slots, "default")
    ], 2));
  }
}), v$ = /* @__PURE__ */ D({
  __name: "SidebarFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), R("div", {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      class: ge(s(Z)("flex flex-col gap-2 p-2", t.class))
    }, [
      C(r.$slots, "default")
    ], 2));
  }
}), g$ = /* @__PURE__ */ D({
  __name: "SidebarGroup",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), R("div", {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      class: ge(s(Z)("relative flex w-full min-w-0 flex-col p-2", t.class))
    }, [
      C(r.$slots, "default")
    ], 2));
  }
}), h$ = /* @__PURE__ */ D({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), A(s(qr), {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      as: e.as,
      "as-child": e.asChild,
      class: ge(s(Z)(
        "text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        t.class
      ))
    }, {
      default: v(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), b$ = /* @__PURE__ */ D({
  __name: "SidebarHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), R("div", {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      class: ge(s(Z)("flex flex-col gap-2 p-2", t.class))
    }, [
      C(r.$slots, "default")
    ], 2));
  }
}), Nn = /* @__PURE__ */ D({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, n = /* @__PURE__ */ zi(r, "modelValue", t, {
      passive: !0,
      defaultValue: r.defaultValue
    });
    return (o, i) => _i((g(), R("input", {
      "onUpdate:modelValue": i[0] || (i[0] = (l) => yn(n) ? n.value = l : null),
      "data-slot": "input",
      class: ge(s(Z)(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        r.class
      ))
    }, null, 2)), [
      [Ac, s(n)]
    ]);
  }
}), _$ = /* @__PURE__ */ D({
  __name: "SidebarMenu",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), R("ul", {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      class: ge(s(Z)("flex w-full min-w-0 flex-col gap-1", t.class))
    }, [
      C(r.$slots, "default")
    ], 2));
  }
}), y$ = /* @__PURE__ */ D({
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
    const n = We(e, t);
    return (o, i) => (g(), A(s(Eh), J({ "data-slot": "tooltip" }, s(n)), {
      default: v(() => [
        C(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $$ = /* @__PURE__ */ D({
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
    const r = e, a = t, n = pe(r, "class"), o = We(n, a);
    return (i, l) => (g(), A(s(zh), null, {
      default: v(() => [
        $(s(Ph), J({ "data-slot": "tooltip-content" }, { ...s(o), ...i.$attrs }, {
          class: s(Z)("bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance", r.class)
        }), {
          default: v(() => [
            C(i.$slots, "default"),
            $(s(Th), { class: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), k$ = /* @__PURE__ */ D({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), A(s(Ah), J({ "data-slot": "tooltip-trigger" }, t), {
      default: v(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ou = /* @__PURE__ */ D({
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
    return (r, a) => (g(), A(s(qr), J({
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": e.size,
      "data-active": e.isActive,
      class: s(Z)(s(N$)({ variant: e.variant, size: e.size }), t.class),
      as: e.as,
      "as-child": e.asChild
    }, r.$attrs), {
      default: v(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), iu = /* @__PURE__ */ D({
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
    const t = e, { isMobile: r, state: a } = Pi(), n = pe(t, "tooltip");
    return (o, i) => e.tooltip ? (g(), A(s(y$), { key: 1 }, {
      default: v(() => [
        $(s(k$), { "as-child": "" }, {
          default: v(() => [
            $(ou, zt(Ut({ ...s(n), ...o.$attrs })), {
              default: v(() => [
                C(o.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        $(s($$), {
          side: "right",
          align: "center",
          hidden: s(a) !== "collapsed" || s(r)
        }, {
          default: v(() => [
            typeof e.tooltip == "string" ? (g(), R(De, { key: 0 }, [
              he(ae(e.tooltip), 1)
            ], 64)) : (g(), A(dt(e.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (g(), A(ou, zt(J({ key: 0 }, { ...s(n), ...o.$attrs })), {
      default: v(() => [
        C(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lu = /* @__PURE__ */ D({
  __name: "SidebarMenuItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), R("li", {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      class: ge(s(Z)("group/menu-item relative", t.class))
    }, [
      C(r.$slots, "default")
    ], 2));
  }
}), w$ = /* @__PURE__ */ D({
  __name: "SidebarMenuSub",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), R("ul", {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-badge",
      class: ge(s(Z)(
        "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        t.class
      ))
    }, [
      C(r.$slots, "default")
    ], 2));
  }
}), S$ = /* @__PURE__ */ D({
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
    return (r, a) => (g(), A(s(qr), {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      as: e.as,
      "as-child": e.asChild,
      "data-size": e.size,
      "data-active": e.isActive,
      class: ge(s(Z)(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        e.size === "sm" && "text-xs",
        e.size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        t.class
      ))
    }, {
      default: v(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-size", "data-active", "class"]));
  }
}), I$ = /* @__PURE__ */ D({
  __name: "SidebarMenuSubItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), R("li", {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      class: ge(s(Z)("group/menu-sub-item relative", t.class))
    }, [
      C(r.$slots, "default")
    ], 2));
  }
});
od?.cookie.includes(`${au}=false`);
const x$ = /* @__PURE__ */ D({
  __name: "SidebarRail",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { toggleSidebar: r } = Pi();
    return (a, n) => (g(), R("button", {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabindex: -1,
      title: "Toggle Sidebar",
      class: ge(s(Z)(
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
      C(a.$slots, "default")
    ], 2));
  }
}), O$ = /* @__PURE__ */ D({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = pe(t, "class");
    return (a, n) => (g(), A(s(Ch), J({ "data-slot": "separator-root" }, s(r), {
      class: s(Z)(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        t.class
      )
    }), null, 16, ["class"]));
  }
}), ft = /* @__PURE__ */ D({
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
    return (r, a) => (g(), A(s(qr), {
      "data-slot": "button",
      as: e.as,
      "as-child": e.asChild,
      class: ge(s(Z)(s(rn)({ variant: e.variant, size: e.size }), t.class))
    }, {
      default: v(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), rn = tr(
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
), N$ = tr(
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
), E$ = {
  key: 0,
  class: "font-semibold text-sm mt-4 ml-2 truncate"
}, z$ = { key: 1 }, lP = /* @__PURE__ */ D({
  __name: "AppSidebar",
  props: {
    config: {},
    currentPath: { default: "" }
  },
  setup(e) {
    function t(r, a) {
      return !!(r.url === a || r.items?.some((n) => n.url === a));
    }
    return (r, a) => (g(), A(s(m$), {
      collapsible: e.config.collapsible || "icon"
    }, {
      default: v(() => [
        $(s(b$), null, {
          default: v(() => [
            C(r.$slots, "header", {}, () => [
              e.config.title ? (g(), R("div", E$, ae(e.config.title), 1)) : me("", !0)
            ])
          ]),
          _: 3
        }),
        $(s(p$), null, {
          default: v(() => [
            $(s(_$), null, {
              default: v(() => [
                (g(!0), R(De, null, Ze(e.config.menuGroups, (n, o) => (g(), A(s(g$), {
                  key: o,
                  class: "!pb-0"
                }, {
                  default: v(() => [
                    n.title ? (g(), A(s(h$), { key: 0 }, {
                      default: v(() => [
                        he(ae(n.title), 1)
                      ]),
                      _: 2
                    }, 1024)) : me("", !0),
                    (g(!0), R(De, null, Ze(n.items, (i) => (g(), R(De, {
                      key: i.title
                    }, [
                      i.items?.length ? (g(), A(s(w_), {
                        key: 0,
                        "as-child": "",
                        "default-open": t(i, e.currentPath),
                        class: "group/collapsible"
                      }, {
                        default: v(() => [
                          $(s(lu), null, {
                            default: v(() => [
                              $(s(I_), { "as-child": "" }, {
                                default: v(() => [
                                  $(s(iu), {
                                    tooltip: i.title,
                                    disabled: i.disabled
                                  }, {
                                    default: v(() => [
                                      i.icon ? (g(), A(dt(i.icon), { key: 0 })) : me("", !0),
                                      i.url ? (g(), A(s(Ao), {
                                        key: 2,
                                        to: i.url
                                      }, {
                                        default: v(() => [
                                          oe("span", null, ae(i.title), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["to"])) : (g(), R("span", z$, ae(i.title), 1)),
                                      $(s(Zn), { class: "ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" })
                                    ]),
                                    _: 2
                                  }, 1032, ["tooltip", "disabled"])
                                ]),
                                _: 2
                              }, 1024),
                              $(s(S_), null, {
                                default: v(() => [
                                  $(s(w$), null, {
                                    default: v(() => [
                                      (g(!0), R(De, null, Ze(i.items, (l) => (g(), A(s(I$), {
                                        key: l.title
                                      }, {
                                        default: v(() => [
                                          $(s(S$), {
                                            "as-child": "",
                                            "is-active": e.currentPath === l.url,
                                            disabled: l.disabled
                                          }, {
                                            default: v(() => [
                                              $(s(Ao), {
                                                to: l.url
                                              }, {
                                                default: v(() => [
                                                  oe("span", null, ae(l.title), 1)
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
                      }, 1032, ["default-open"])) : (g(), A(s(lu), { key: 1 }, {
                        default: v(() => [
                          $(s(iu), {
                            "as-child": "",
                            "is-active": e.currentPath === i.url,
                            disabled: i.disabled
                          }, {
                            default: v(() => [
                              $(s(Ao), {
                                to: i.url
                              }, {
                                default: v(() => [
                                  i.icon ? (g(), A(dt(i.icon), { key: 0 })) : me("", !0),
                                  oe("span", null, ae(i.title), 1)
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
        $(s(v$), null, {
          default: v(() => [
            C(r.$slots, "footer")
          ]),
          _: 3
        }),
        $(s(x$))
      ]),
      _: 3
    }, 8, ["collapsible"]));
  }
}), P$ = { class: "flex-1 flex gap-2 items-center [&_[data-placeholder]]:text-muted-foreground [&_[data-placeholder]]:truncate min-w-0" }, id = /* @__PURE__ */ D({
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
    return (r, a) => (g(), A(s(qr), {
      as: e.as,
      class: ge(s(Z)(s(rn)({ variant: e.variant, size: e.size }), t.class))
    }, {
      default: v(() => [
        oe("span", P$, [
          C(r.$slots, "default")
        ]),
        $(s(Bn), { class: "!size-3 !-mx-1" })
      ]),
      _: 3
    }, 8, ["as", "class"]));
  }
}), Jo = (e, t, r = (a) => a) => e.reduce((a, n) => (a[t(n)] = r(n), a), {}), T$ = (e, t) => {
  const r = e.reduce((a, n) => {
    const o = n;
    return a[o] || (a[o] = n), a;
  }, {});
  return Object.values(r);
}, A$ = (e, t, r, a) => {
  if (!e && !t)
    return [];
  if (!e)
    return [t];
  if (!t)
    return [...e];
  const n = (i) => i === t;
  return e.find(n) ? e.filter((i, l) => !n(i)) : [...e, t];
}, su = (e, t, r = (a) => a) => {
  if (!e?.length && !t?.length)
    return [];
  if (e?.length === void 0)
    return [...t];
  if (!t?.length)
    return [...e];
  const a = t.reduce((n, o) => (n[r(o)] = !0, n), {});
  return e.filter((n) => !a[r(n)]);
}, D$ = (e) => {
  if (!e || e.length === 0)
    return "";
  const t = e.toLowerCase();
  return t.substring(0, 1).toUpperCase() + t.substring(1, t.length);
}, C$ = (e) => e ? e.split(/(?=[A-Z])|[\.\-\s_]/).map((t) => t.trim()).filter((t) => !!t).map((t) => D$(t.toLowerCase())).join(" ") : "";
function mn(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const uu = {};
function j$(e) {
  uu[e] || (uu[e] = !0, mn(e));
}
const $n = typeof window < "u";
let Ft, Jn;
if (process.env.NODE_ENV !== "production") {
  const e = $n && window.performance;
  e && e.mark && e.measure && e.clearMarks && // @ts-ignore browser compat
  e.clearMeasures && (Ft = (t) => {
    e.mark(t);
  }, Jn = (t, r, a) => {
    e.measure(t, r, a), e.clearMarks(r), e.clearMarks(a);
  });
}
const U$ = /\{([0-9a-zA-Z]+)\}/g;
function ro(e, ...t) {
  return t.length === 1 && Ue(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(U$, (r, a) => t.hasOwnProperty(a) ? t[a] : "");
}
const wn = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), L$ = (e, t, r) => R$({ l: e, k: t, s: r }), R$ = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), ht = (e) => typeof e == "number" && isFinite(e), V$ = (e) => Ti(e) === "[object Date]", ja = (e) => Ti(e) === "[object RegExp]", ao = (e) => je(e) && Object.keys(e).length === 0, bt = Object.assign, F$ = Object.create, Re = (e = null) => F$(e);
let cu;
const Vn = () => cu || (cu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : Re());
function du(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function fu(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function M$(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (a, n, o) => `${n}="${fu(o)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (a, n, o) => `${n}='${fu(o)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (process.env.NODE_ENV !== "production" && mn("Potentially dangerous event handlers detected in translation. Consider removing onclick, onerror, etc. from your translation messages."), e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((a) => {
    e = e.replace(a, "$1javascript&#58;");
  }), e;
}
const B$ = Object.prototype.hasOwnProperty;
function qt(e, t) {
  return B$.call(e, t);
}
const at = Array.isArray, Je = (e) => typeof e == "function", ie = (e) => typeof e == "string", rt = (e) => typeof e == "boolean", Ue = (e) => e !== null && typeof e == "object", Z$ = (e) => Ue(e) && Je(e.then) && Je(e.catch), ld = Object.prototype.toString, Ti = (e) => ld.call(e), je = (e) => Ti(e) === "[object Object]", W$ = (e) => e == null ? "" : at(e) || je(e) && e.toString === ld ? JSON.stringify(e, null, 2) : String(e);
function Ai(e, t = "") {
  return e.reduce((r, a, n) => n === 0 ? r + a : r + t + a, "");
}
const mu = 2;
function G$(e, t = 0, r = e.length) {
  const a = e.split(/\r?\n/);
  let n = 0;
  const o = [];
  for (let i = 0; i < a.length; i++)
    if (n += a[i].length + 1, n >= t) {
      for (let l = i - mu; l <= i + mu || r > n; l++) {
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
function K$() {
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
const ba = (e) => !Ue(e) || at(e);
function za(e, t) {
  if (ba(e) || ba(t))
    throw new Error("Invalid value");
  const r = [{ src: e, des: t }];
  for (; r.length; ) {
    const { src: a, des: n } = r.pop();
    Object.keys(a).forEach((o) => {
      o !== "__proto__" && (Ue(a[o]) && !Ue(n[o]) && (n[o] = Array.isArray(a[o]) ? [] : Re()), ba(n[o]) || ba(a[o]) ? n[o] = a[o] : r.push({ src: a[o], des: n[o] }));
    });
  }
}
function H$(e, t, r) {
  return { line: e, column: t, offset: r };
}
function qo(e, t, r) {
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
}, J$ = 17, q$ = {
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
function kr(e, t, r = {}) {
  const { domain: a, messages: n, args: o } = r, i = process.env.NODE_ENV !== "production" ? ro((n || q$)[e] || "", ...o || []) : e, l = new SyntaxError(String(i));
  return l.code = e, t && (l.location = t), l.domain = a, l;
}
function Y$(e) {
  throw e;
}
const X$ = /<\/?[\w\s="/.':;#-\/]+>/, Q$ = (e) => X$.test(e), on = " ", e0 = "\r", It = `
`, t0 = "\u2028", n0 = "\u2029";
function r0(e) {
  const t = e;
  let r = 0, a = 1, n = 1, o = 0;
  const i = (N) => t[N] === e0 && t[N + 1] === It, l = (N) => t[N] === It, u = (N) => t[N] === n0, c = (N) => t[N] === t0, d = (N) => i(N) || l(N) || u(N) || c(N), f = () => r, m = () => a, p = () => n, h = () => o, _ = (N) => i(N) || u(N) || c(N) ? It : t[N], S = () => _(r), k = () => _(r + o);
  function y() {
    return o = 0, d(r) && (a++, n = 0), i(r) && r++, r++, n++, t[r];
  }
  function O() {
    return i(r + o) && o++, o++, t[r + o];
  }
  function I() {
    r = 0, a = 1, n = 1, o = 0;
  }
  function x(N = 0) {
    o = N;
  }
  function P() {
    const N = r + o;
    for (; N !== r; )
      y();
    o = 0;
  }
  return {
    index: f,
    line: m,
    column: p,
    peekOffset: h,
    charAt: _,
    currentChar: S,
    currentPeek: k,
    next: y,
    peek: O,
    reset: I,
    resetPeek: x,
    skipToPeek: P
  };
}
const gn = void 0, a0 = ".", pu = "'", o0 = "tokenizer";
function i0(e, t = {}) {
  const r = t.location !== !1, a = r0(e), n = () => a.index(), o = () => H$(a.line(), a.column(), a.index()), i = o(), l = n(), u = {
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
  function f(b, w, L, ...q) {
    const we = c();
    if (w.column += L, w.offset += L, d) {
      const Ie = r ? qo(we.startLoc, w) : null, $e = kr(b, Ie, {
        domain: o0,
        args: q
      });
      d($e);
    }
  }
  function m(b, w, L) {
    b.endLoc = o(), b.currentType = w;
    const q = { type: w };
    return r && (q.loc = qo(b.startLoc, b.endLoc)), L != null && (q.value = L), q;
  }
  const p = (b) => m(
    b,
    13
    /* TokenTypes.EOF */
  );
  function h(b, w) {
    return b.currentChar() === w ? (b.next(), w) : (f(_e.EXPECTED_TOKEN, o(), 0, w), "");
  }
  function _(b) {
    let w = "";
    for (; b.currentPeek() === on || b.currentPeek() === It; )
      w += b.currentPeek(), b.peek();
    return w;
  }
  function S(b) {
    const w = _(b);
    return b.skipToPeek(), w;
  }
  function k(b) {
    if (b === gn)
      return !1;
    const w = b.charCodeAt(0);
    return w >= 97 && w <= 122 || // a-z
    w >= 65 && w <= 90 || // A-Z
    w === 95;
  }
  function y(b) {
    if (b === gn)
      return !1;
    const w = b.charCodeAt(0);
    return w >= 48 && w <= 57;
  }
  function O(b, w) {
    const { currentType: L } = w;
    if (L !== 2)
      return !1;
    _(b);
    const q = k(b.currentPeek());
    return b.resetPeek(), q;
  }
  function I(b, w) {
    const { currentType: L } = w;
    if (L !== 2)
      return !1;
    _(b);
    const q = b.currentPeek() === "-" ? b.peek() : b.currentPeek(), we = y(q);
    return b.resetPeek(), we;
  }
  function x(b, w) {
    const { currentType: L } = w;
    if (L !== 2)
      return !1;
    _(b);
    const q = b.currentPeek() === pu;
    return b.resetPeek(), q;
  }
  function P(b, w) {
    const { currentType: L } = w;
    if (L !== 7)
      return !1;
    _(b);
    const q = b.currentPeek() === ".";
    return b.resetPeek(), q;
  }
  function N(b, w) {
    const { currentType: L } = w;
    if (L !== 8)
      return !1;
    _(b);
    const q = k(b.currentPeek());
    return b.resetPeek(), q;
  }
  function j(b, w) {
    const { currentType: L } = w;
    if (!(L === 7 || L === 11))
      return !1;
    _(b);
    const q = b.currentPeek() === ":";
    return b.resetPeek(), q;
  }
  function M(b, w) {
    const { currentType: L } = w;
    if (L !== 9)
      return !1;
    const q = () => {
      const Ie = b.currentPeek();
      return Ie === "{" ? k(b.peek()) : Ie === "@" || Ie === "|" || Ie === ":" || Ie === "." || Ie === on || !Ie ? !1 : Ie === It ? (b.peek(), q()) : X(b, !1);
    }, we = q();
    return b.resetPeek(), we;
  }
  function te(b) {
    _(b);
    const w = b.currentPeek() === "|";
    return b.resetPeek(), w;
  }
  function X(b, w = !0) {
    const L = (we = !1, Ie = "") => {
      const $e = b.currentPeek();
      return $e === "{" || $e === "@" || !$e ? we : $e === "|" ? !(Ie === on || Ie === It) : $e === on ? (b.peek(), L(!0, on)) : $e === It ? (b.peek(), L(!0, It)) : !0;
    }, q = L();
    return w && b.resetPeek(), q;
  }
  function Q(b, w) {
    const L = b.currentChar();
    return L === gn ? gn : w(L) ? (b.next(), L) : null;
  }
  function Ce(b) {
    const w = b.charCodeAt(0);
    return w >= 97 && w <= 122 || // a-z
    w >= 65 && w <= 90 || // A-Z
    w >= 48 && w <= 57 || // 0-9
    w === 95 || // _
    w === 36;
  }
  function B(b) {
    return Q(b, Ce);
  }
  function ne(b) {
    const w = b.charCodeAt(0);
    return w >= 97 && w <= 122 || // a-z
    w >= 65 && w <= 90 || // A-Z
    w >= 48 && w <= 57 || // 0-9
    w === 95 || // _
    w === 36 || // $
    w === 45;
  }
  function K(b) {
    return Q(b, ne);
  }
  function ue(b) {
    const w = b.charCodeAt(0);
    return w >= 48 && w <= 57;
  }
  function re(b) {
    return Q(b, ue);
  }
  function pt(b) {
    const w = b.charCodeAt(0);
    return w >= 48 && w <= 57 || // 0-9
    w >= 65 && w <= 70 || // A-F
    w >= 97 && w <= 102;
  }
  function tt(b) {
    return Q(b, pt);
  }
  function yt(b) {
    let w = "", L = "";
    for (; w = re(b); )
      L += w;
    return L;
  }
  function Tt(b) {
    let w = "";
    for (; ; ) {
      const L = b.currentChar();
      if (L === "{" || L === "}" || L === "@" || L === "|" || !L)
        break;
      if (L === on || L === It)
        if (X(b))
          w += L, b.next();
        else {
          if (te(b))
            break;
          w += L, b.next();
        }
      else
        w += L, b.next();
    }
    return w;
  }
  function Ge(b) {
    S(b);
    let w = "", L = "";
    for (; w = K(b); )
      L += w;
    const q = b.currentChar();
    if (q && q !== "}" && q !== gn && q !== on && q !== It && q !== "　") {
      const we = nt(b);
      return f(_e.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, L + we), L + we;
    }
    return b.currentChar() === gn && f(_e.UNTERMINATED_CLOSING_BRACE, o(), 0), L;
  }
  function Pe(b) {
    S(b);
    let w = "";
    return b.currentChar() === "-" ? (b.next(), w += `-${yt(b)}`) : w += yt(b), b.currentChar() === gn && f(_e.UNTERMINATED_CLOSING_BRACE, o(), 0), w;
  }
  function Nt(b) {
    return b !== pu && b !== It;
  }
  function le(b) {
    S(b), h(b, "'");
    let w = "", L = "";
    for (; w = Q(b, Nt); )
      w === "\\" ? L += se(b) : L += w;
    const q = b.currentChar();
    return q === It || q === gn ? (f(_e.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, o(), 0), q === It && (b.next(), h(b, "'")), L) : (h(b, "'"), L);
  }
  function se(b) {
    const w = b.currentChar();
    switch (w) {
      case "\\":
      case "'":
        return b.next(), `\\${w}`;
      case "u":
        return Oe(b, w, 4);
      case "U":
        return Oe(b, w, 6);
      default:
        return f(_e.UNKNOWN_ESCAPE_SEQUENCE, o(), 0, w), "";
    }
  }
  function Oe(b, w, L) {
    h(b, w);
    let q = "";
    for (let we = 0; we < L; we++) {
      const Ie = tt(b);
      if (!Ie) {
        f(_e.INVALID_UNICODE_ESCAPE_SEQUENCE, o(), 0, `\\${w}${q}${b.currentChar()}`);
        break;
      }
      q += Ie;
    }
    return `\\${w}${q}`;
  }
  function Ne(b) {
    return b !== "{" && b !== "}" && b !== on && b !== It;
  }
  function nt(b) {
    S(b);
    let w = "", L = "";
    for (; w = Q(b, Ne); )
      L += w;
    return L;
  }
  function ot(b) {
    let w = "", L = "";
    for (; w = B(b); )
      L += w;
    return L;
  }
  function Ke(b) {
    const w = (L) => {
      const q = b.currentChar();
      return q === "{" || q === "@" || q === "|" || q === "(" || q === ")" || !q || q === on ? L : (L += q, b.next(), w(L));
    };
    return w("");
  }
  function Lt(b) {
    S(b);
    const w = h(
      b,
      "|"
      /* TokenChars.Pipe */
    );
    return S(b), w;
  }
  function pn(b, w) {
    let L = null;
    switch (b.currentChar()) {
      case "{":
        return w.braceNest >= 1 && f(_e.NOT_ALLOW_NEST_PLACEHOLDER, o(), 0), b.next(), L = m(
          w,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), S(b), w.braceNest++, L;
      case "}":
        return w.braceNest > 0 && w.currentType === 2 && f(_e.EMPTY_PLACEHOLDER, o(), 0), b.next(), L = m(
          w,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), w.braceNest--, w.braceNest > 0 && S(b), w.inLinked && w.braceNest === 0 && (w.inLinked = !1), L;
      case "@":
        return w.braceNest > 0 && f(_e.UNTERMINATED_CLOSING_BRACE, o(), 0), L = Ht(b, w) || p(w), w.braceNest = 0, L;
      default: {
        let we = !0, Ie = !0, $e = !0;
        if (te(b))
          return w.braceNest > 0 && f(_e.UNTERMINATED_CLOSING_BRACE, o(), 0), L = m(w, 1, Lt(b)), w.braceNest = 0, w.inLinked = !1, L;
        if (w.braceNest > 0 && (w.currentType === 4 || w.currentType === 5 || w.currentType === 6))
          return f(_e.UNTERMINATED_CLOSING_BRACE, o(), 0), w.braceNest = 0, Jt(b, w);
        if (we = O(b, w))
          return L = m(w, 4, Ge(b)), S(b), L;
        if (Ie = I(b, w))
          return L = m(w, 5, Pe(b)), S(b), L;
        if ($e = x(b, w))
          return L = m(w, 6, le(b)), S(b), L;
        if (!we && !Ie && !$e)
          return L = m(w, 12, nt(b)), f(_e.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, L.value), S(b), L;
        break;
      }
    }
    return L;
  }
  function Ht(b, w) {
    const { currentType: L } = w;
    let q = null;
    const we = b.currentChar();
    switch ((L === 7 || L === 8 || L === 11 || L === 9) && (we === It || we === on) && f(_e.INVALID_LINKED_FORMAT, o(), 0), we) {
      case "@":
        return b.next(), q = m(
          w,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), w.inLinked = !0, q;
      case ".":
        return S(b), b.next(), m(
          w,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return S(b), b.next(), m(
          w,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return te(b) ? (q = m(w, 1, Lt(b)), w.braceNest = 0, w.inLinked = !1, q) : P(b, w) || j(b, w) ? (S(b), Ht(b, w)) : N(b, w) ? (S(b), m(w, 11, ot(b))) : M(b, w) ? (S(b), we === "{" ? pn(b, w) || q : m(w, 10, Ke(b))) : (L === 7 && f(_e.INVALID_LINKED_FORMAT, o(), 0), w.braceNest = 0, w.inLinked = !1, Jt(b, w));
    }
  }
  function Jt(b, w) {
    let L = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (w.braceNest > 0)
      return pn(b, w) || p(w);
    if (w.inLinked)
      return Ht(b, w) || p(w);
    switch (b.currentChar()) {
      case "{":
        return pn(b, w) || p(w);
      case "}":
        return f(_e.UNBALANCED_CLOSING_BRACE, o(), 0), b.next(), m(
          w,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return Ht(b, w) || p(w);
      default: {
        if (te(b))
          return L = m(w, 1, Lt(b)), w.braceNest = 0, w.inLinked = !1, L;
        if (X(b))
          return m(w, 0, Tt(b));
        break;
      }
    }
    return L;
  }
  function In() {
    const { currentType: b, offset: w, startLoc: L, endLoc: q } = u;
    return u.lastType = b, u.lastOffset = w, u.lastStartLoc = L, u.lastEndLoc = q, u.offset = n(), u.startLoc = o(), a.currentChar() === gn ? m(
      u,
      13
      /* TokenTypes.EOF */
    ) : Jt(a, u);
  }
  return {
    nextToken: In,
    currentOffset: n,
    currentPosition: o,
    context: c
  };
}
const l0 = "parser", s0 = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function u0(e, t, r) {
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
function c0(e = {}) {
  const t = e.location !== !1, { onError: r } = e;
  function a(k, y, O, I, ...x) {
    const P = k.currentPosition();
    if (P.offset += I, P.column += I, r) {
      const N = t ? qo(O, P) : null, j = kr(y, N, {
        domain: l0,
        args: x
      });
      r(j);
    }
  }
  function n(k, y, O) {
    const I = { type: k };
    return t && (I.start = y, I.end = y, I.loc = { start: O, end: O }), I;
  }
  function o(k, y, O, I) {
    t && (k.end = y, k.loc && (k.loc.end = O));
  }
  function i(k, y) {
    const O = k.context(), I = n(3, O.offset, O.startLoc);
    return I.value = y, o(I, k.currentOffset(), k.currentPosition()), I;
  }
  function l(k, y) {
    const O = k.context(), { lastOffset: I, lastStartLoc: x } = O, P = n(5, I, x);
    return P.index = parseInt(y, 10), k.nextToken(), o(P, k.currentOffset(), k.currentPosition()), P;
  }
  function u(k, y) {
    const O = k.context(), { lastOffset: I, lastStartLoc: x } = O, P = n(4, I, x);
    return P.key = y, k.nextToken(), o(P, k.currentOffset(), k.currentPosition()), P;
  }
  function c(k, y) {
    const O = k.context(), { lastOffset: I, lastStartLoc: x } = O, P = n(9, I, x);
    return P.value = y.replace(s0, u0), k.nextToken(), o(P, k.currentOffset(), k.currentPosition()), P;
  }
  function d(k) {
    const y = k.nextToken(), O = k.context(), { lastOffset: I, lastStartLoc: x } = O, P = n(8, I, x);
    return y.type !== 11 ? (a(k, _e.UNEXPECTED_EMPTY_LINKED_MODIFIER, O.lastStartLoc, 0), P.value = "", o(P, I, x), {
      nextConsumeToken: y,
      node: P
    }) : (y.value == null && a(k, _e.UNEXPECTED_LEXICAL_ANALYSIS, O.lastStartLoc, 0, ln(y)), P.value = y.value || "", o(P, k.currentOffset(), k.currentPosition()), {
      node: P
    });
  }
  function f(k, y) {
    const O = k.context(), I = n(7, O.offset, O.startLoc);
    return I.value = y, o(I, k.currentOffset(), k.currentPosition()), I;
  }
  function m(k) {
    const y = k.context(), O = n(6, y.offset, y.startLoc);
    let I = k.nextToken();
    if (I.type === 8) {
      const x = d(k);
      O.modifier = x.node, I = x.nextConsumeToken || k.nextToken();
    }
    switch (I.type !== 9 && a(k, _e.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, ln(I)), I = k.nextToken(), I.type === 2 && (I = k.nextToken()), I.type) {
      case 10:
        I.value == null && a(k, _e.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, ln(I)), O.key = f(k, I.value || "");
        break;
      case 4:
        I.value == null && a(k, _e.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, ln(I)), O.key = u(k, I.value || "");
        break;
      case 5:
        I.value == null && a(k, _e.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, ln(I)), O.key = l(k, I.value || "");
        break;
      case 6:
        I.value == null && a(k, _e.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, ln(I)), O.key = c(k, I.value || "");
        break;
      default: {
        a(k, _e.UNEXPECTED_EMPTY_LINKED_KEY, y.lastStartLoc, 0);
        const x = k.context(), P = n(7, x.offset, x.startLoc);
        return P.value = "", o(P, x.offset, x.startLoc), O.key = P, o(O, x.offset, x.startLoc), {
          nextConsumeToken: I,
          node: O
        };
      }
    }
    return o(O, k.currentOffset(), k.currentPosition()), {
      node: O
    };
  }
  function p(k) {
    const y = k.context(), O = y.currentType === 1 ? k.currentOffset() : y.offset, I = y.currentType === 1 ? y.endLoc : y.startLoc, x = n(2, O, I);
    x.items = [];
    let P = null;
    do {
      const M = P || k.nextToken();
      switch (P = null, M.type) {
        case 0:
          M.value == null && a(k, _e.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, ln(M)), x.items.push(i(k, M.value || ""));
          break;
        case 5:
          M.value == null && a(k, _e.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, ln(M)), x.items.push(l(k, M.value || ""));
          break;
        case 4:
          M.value == null && a(k, _e.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, ln(M)), x.items.push(u(k, M.value || ""));
          break;
        case 6:
          M.value == null && a(k, _e.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, ln(M)), x.items.push(c(k, M.value || ""));
          break;
        case 7: {
          const te = m(k);
          x.items.push(te.node), P = te.nextConsumeToken || null;
          break;
        }
      }
    } while (y.currentType !== 13 && y.currentType !== 1);
    const N = y.currentType === 1 ? y.lastOffset : k.currentOffset(), j = y.currentType === 1 ? y.lastEndLoc : k.currentPosition();
    return o(x, N, j), x;
  }
  function h(k, y, O, I) {
    const x = k.context();
    let P = I.items.length === 0;
    const N = n(1, y, O);
    N.cases = [], N.cases.push(I);
    do {
      const j = p(k);
      P || (P = j.items.length === 0), N.cases.push(j);
    } while (x.currentType !== 13);
    return P && a(k, _e.MUST_HAVE_MESSAGES_IN_PLURAL, O, 0), o(N, k.currentOffset(), k.currentPosition()), N;
  }
  function _(k) {
    const y = k.context(), { offset: O, startLoc: I } = y, x = p(k);
    return y.currentType === 13 ? x : h(k, O, I, x);
  }
  function S(k) {
    const y = i0(k, bt({}, e)), O = y.context(), I = n(0, O.offset, O.startLoc);
    return t && I.loc && (I.loc.source = k), I.body = _(y), e.onCacheKey && (I.cacheKey = e.onCacheKey(k)), O.currentType !== 13 && a(y, _e.UNEXPECTED_LEXICAL_ANALYSIS, O.lastStartLoc, 0, k[O.offset] || ""), o(I, y.currentOffset(), y.currentPosition()), I;
  }
  return { parse: S };
}
function ln(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function d0(e, t = {}) {
  const r = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => r, helper: (o) => (r.helpers.add(o), o) };
}
function vu(e, t) {
  for (let r = 0; r < e.length; r++)
    Di(e[r], t);
}
function Di(e, t) {
  switch (e.type) {
    case 1:
      vu(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      vu(e.items, t);
      break;
    case 6: {
      Di(e.key, t), t.helper(
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
function f0(e, t = {}) {
  const r = d0(e);
  r.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && Di(e.body, r);
  const a = r.context();
  e.helpers = Array.from(a.helpers);
}
function m0(e) {
  const t = e.body;
  return t.type === 2 ? gu(t) : t.cases.forEach((r) => gu(r)), e;
}
function gu(e) {
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
      e.static = Ai(t);
      for (let r = 0; r < e.items.length; r++) {
        const a = e.items[r];
        (a.type === 3 || a.type === 9) && delete a.value;
      }
    }
  }
}
const p0 = "minifier";
function ir(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      ir(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, r = t.cases;
      for (let a = 0; a < r.length; a++)
        ir(r[a]);
      t.c = r, delete t.cases;
      break;
    }
    case 2: {
      const t = e, r = t.items;
      for (let a = 0; a < r.length; a++)
        ir(r[a]);
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
      ir(t.key), t.k = t.key, delete t.key, t.modifier && (ir(t.modifier), t.m = t.modifier, delete t.modifier);
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
        throw kr(_e.UNHANDLED_MINIFIER_NODE_TYPE, null, {
          domain: p0,
          args: [e.type]
        });
  }
  delete e.type;
}
const v0 = "parser";
function g0(e, t) {
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
  function u(_, S) {
    i.code += _;
  }
  function c(_, S = !0) {
    const k = S ? a : "";
    u(n ? k + "  ".repeat(_) : k);
  }
  function d(_ = !0) {
    const S = ++i.indentLevel;
    _ && c(S);
  }
  function f(_ = !0) {
    const S = --i.indentLevel;
    _ && c(S);
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
function h0(e, t) {
  const { helper: r } = e;
  e.push(`${r(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), ur(e, t.key), t.modifier ? (e.push(", "), ur(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function b0(e, t) {
  const { helper: r, needIndent: a } = e;
  e.push(`${r(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(a());
  const n = t.items.length;
  for (let o = 0; o < n && (ur(e, t.items[o]), o !== n - 1); o++)
    e.push(", ");
  e.deindent(a()), e.push("])");
}
function _0(e, t) {
  const { helper: r, needIndent: a } = e;
  if (t.cases.length > 1) {
    e.push(`${r(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(a());
    const n = t.cases.length;
    for (let o = 0; o < n && (ur(e, t.cases[o]), o !== n - 1); o++)
      e.push(", ");
    e.deindent(a()), e.push("])");
  }
}
function y0(e, t) {
  t.body ? ur(e, t.body) : e.push("null");
}
function ur(e, t) {
  const { helper: r } = e;
  switch (t.type) {
    case 0:
      y0(e, t);
      break;
    case 1:
      _0(e, t);
      break;
    case 2:
      b0(e, t);
      break;
    case 6:
      h0(e, t);
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
        throw kr(_e.UNHANDLED_CODEGEN_NODE_TYPE, null, {
          domain: v0,
          args: [t.type]
        });
  }
}
const $0 = (e, t = {}) => {
  const r = ie(t.mode) ? t.mode : "normal", a = ie(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const n = t.breakLineCode != null ? t.breakLineCode : r === "arrow" ? ";" : `
`, o = t.needIndent ? t.needIndent : r !== "arrow", i = e.helpers || [], l = g0(e, {
    filename: a,
    breakLineCode: n,
    needIndent: o
  });
  l.push(r === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), l.indent(o), i.length > 0 && (l.push(`const { ${Ai(i.map((d) => `${d}: _${d}`), ", ")} } = ctx`), l.newline()), l.push("return "), ur(l, e), l.deindent(o), l.push("}"), delete e.helpers;
  const { code: u, map: c } = l.context();
  return {
    ast: e,
    code: u,
    map: c ? c.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function k0(e, t = {}) {
  const r = bt({}, t), a = !!r.jit, n = !!r.minify, o = r.optimize == null ? !0 : r.optimize, l = c0(r).parse(e);
  return a ? (o && m0(l), n && ir(l), { ast: l, code: "" }) : (f0(l, r), $0(l, r));
}
function w0() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Vn().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Vn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function en(e) {
  return Ue(e) && Ci(e) === 0 && (qt(e, "b") || qt(e, "body"));
}
const sd = ["b", "body"];
function S0(e) {
  return zn(e, sd);
}
const ud = ["c", "cases"];
function I0(e) {
  return zn(e, ud, []);
}
const cd = ["s", "static"];
function x0(e) {
  return zn(e, cd);
}
const dd = ["i", "items"];
function O0(e) {
  return zn(e, dd, []);
}
const fd = ["t", "type"];
function Ci(e) {
  return zn(e, fd);
}
const md = ["v", "value"];
function _a(e, t) {
  const r = zn(e, md);
  if (r != null)
    return r;
  throw Fr(t);
}
const pd = ["m", "modifier"];
function N0(e) {
  return zn(e, pd);
}
const vd = ["k", "key"];
function E0(e) {
  const t = zn(e, vd);
  if (t)
    return t;
  throw Fr(
    6
    /* NodeTypes.Linked */
  );
}
function zn(e, t, r) {
  for (let a = 0; a < t.length; a++) {
    const n = t[a];
    if (qt(e, n) && e[n] != null)
      return e[n];
  }
  return r;
}
const gd = [
  ...sd,
  ...ud,
  ...cd,
  ...dd,
  ...vd,
  ...pd,
  ...md,
  ...fd
];
function Fr(e) {
  return new Error(`unhandled node type: ${e}`);
}
function Lo(e) {
  return (r) => z0(r, e);
}
function z0(e, t) {
  const r = S0(t);
  if (r == null)
    throw Fr(
      0
      /* NodeTypes.Resource */
    );
  if (Ci(r) === 1) {
    const o = I0(r);
    return e.plural(o.reduce((i, l) => [
      ...i,
      hu(e, l)
    ], []));
  } else
    return hu(e, r);
}
function hu(e, t) {
  const r = x0(t);
  if (r != null)
    return e.type === "text" ? r : e.normalize([r]);
  {
    const a = O0(t).reduce((n, o) => [...n, Yo(e, o)], []);
    return e.normalize(a);
  }
}
function Yo(e, t) {
  const r = Ci(t);
  switch (r) {
    case 3:
      return _a(t, r);
    case 9:
      return _a(t, r);
    case 4: {
      const a = t;
      if (qt(a, "k") && a.k)
        return e.interpolate(e.named(a.k));
      if (qt(a, "key") && a.key)
        return e.interpolate(e.named(a.key));
      throw Fr(r);
    }
    case 5: {
      const a = t;
      if (qt(a, "i") && ht(a.i))
        return e.interpolate(e.list(a.i));
      if (qt(a, "index") && ht(a.index))
        return e.interpolate(e.list(a.index));
      throw Fr(r);
    }
    case 6: {
      const a = t, n = N0(a), o = E0(a);
      return e.linked(Yo(e, o), n ? Yo(e, n) : void 0, e.type);
    }
    case 7:
      return _a(t, r);
    case 8:
      return _a(t, r);
    default:
      throw new Error(`unhandled node on format message part: ${r}`);
  }
}
const P0 = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function T0(e, t) {
  t && Q$(e) && mn(ro(P0, { source: e }));
}
const A0 = (e) => e;
let ya = Re();
function D0(e, t = {}) {
  let r = !1;
  const a = t.onError || Y$;
  return t.onError = (n) => {
    r = !0, a(n);
  }, { ...k0(e, t), detectError: r };
}
// @__NO_SIDE_EFFECTS__
function C0(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && ie(e)) {
    const r = rt(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && T0(e, r);
    const n = (t.onCacheKey || A0)(e), o = ya[n];
    if (o)
      return o;
    const { ast: i, detectError: l } = D0(e, {
      ...t,
      location: process.env.NODE_ENV !== "production",
      jit: !0
    }), u = Lo(i);
    return l ? u : ya[n] = u;
  } else {
    if (process.env.NODE_ENV !== "production" && !en(e))
      return mn(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), (() => e);
    const r = e.cacheKey;
    if (r) {
      const a = ya[r];
      return a || (ya[r] = Lo(e));
    } else
      return Lo(e);
  }
}
let Mr = null;
function j0(e) {
  Mr = e;
}
function U0(e, t, r) {
  Mr && Mr.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: r
  });
}
const L0 = /* @__PURE__ */ R0("function:translate");
function R0(e) {
  return (t) => Mr && Mr.emit(e, t);
}
const Ot = {
  INVALID_ARGUMENT: J$,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_NON_STRING_MESSAGE: 20,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, V0 = 24;
function bn(e) {
  return kr(e, null, process.env.NODE_ENV !== "production" ? { messages: F0 } : void 0);
}
const F0 = {
  [Ot.INVALID_ARGUMENT]: "Invalid arguments",
  [Ot.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [Ot.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [Ot.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
  [Ot.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
  [Ot.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
  [Ot.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function ji(e, t) {
  return t.locale != null ? bu(t.locale) : bu(e.locale);
}
let Ro;
function bu(e) {
  if (ie(e))
    return e;
  if (Je(e)) {
    if (e.resolvedOnce && Ro != null)
      return Ro;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Z$(t))
        throw bn(Ot.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return Ro = t;
    } else
      throw bn(Ot.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw bn(Ot.NOT_SUPPORT_LOCALE_TYPE);
}
function M0(e, t, r) {
  return [.../* @__PURE__ */ new Set([
    r,
    ...at(t) ? t : Ue(t) ? Object.keys(t) : ie(t) ? [t] : [r]
  ])];
}
function hd(e, t, r) {
  const a = ie(r) ? r : Ua, n = e;
  n.__localeChainCache || (n.__localeChainCache = /* @__PURE__ */ new Map());
  let o = n.__localeChainCache.get(a);
  if (!o) {
    o = [];
    let i = [r];
    for (; at(i); )
      i = _u(o, i, t);
    const l = at(t) || !je(t) ? t : t.default ? t.default : null;
    i = ie(l) ? [l] : l, at(i) && _u(o, i, !1), n.__localeChainCache.set(a, o);
  }
  return o;
}
function _u(e, t, r) {
  let a = !0;
  for (let n = 0; n < t.length && rt(a); n++) {
    const o = t[n];
    ie(o) && (a = B0(e, t[n], r));
  }
  return a;
}
function B0(e, t, r) {
  let a;
  const n = t.split("-");
  do {
    const o = n.join("-");
    a = Z0(e, o, r), n.splice(-1, 1);
  } while (n.length && a === !0);
  return a;
}
function Z0(e, t, r) {
  let a = !1;
  if (!e.includes(t) && (a = !0, t)) {
    a = t[t.length - 1] !== "!";
    const n = t.replace(/!/g, "");
    e.push(n), (at(r) || je(r)) && r[n] && (a = r[n]);
  }
  return a;
}
const Pn = [];
Pn[
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
Pn[
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
Pn[
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
Pn[
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
Pn[
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
Pn[
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
Pn[
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
const W0 = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function G0(e) {
  return W0.test(e);
}
function K0(e) {
  const t = e.charCodeAt(0), r = e.charCodeAt(e.length - 1);
  return t === r && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function H0(e) {
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
function J0(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : G0(t) ? K0(t) : "*" + t;
}
function q0(e) {
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
      if (n = 0, i === void 0 || (i = J0(i), i === !1))
        return !1;
      m[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function p() {
    const h = e[r + 1];
    if (a === 5 && h === "'" || a === 6 && h === '"')
      return r++, l = "\\" + h, m[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; a !== null; )
    if (r++, o = e[r], !(o === "\\" && p())) {
      if (u = H0(o), f = Pn[a], c = f[u] || f.l || 8, c === 8 || (a = c[0], c[1] !== void 0 && (d = m[c[1]], d && (l = o, d() === !1))))
        return;
      if (a === 7)
        return t;
    }
}
const yu = /* @__PURE__ */ new Map();
function Y0(e, t) {
  return Ue(e) ? e[t] : null;
}
function X0(e, t) {
  if (!Ue(e))
    return null;
  let r = yu.get(t);
  if (r || (r = q0(t), r && yu.set(t, r)), !r)
    return null;
  const a = r.length;
  let n = e, o = 0;
  for (; o < a; ) {
    const i = r[o];
    if (gd.includes(i) && en(n))
      return null;
    const l = n[i];
    if (l === void 0 || Je(n))
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
}, Q0 = 8, ek = {
  [jt.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [jt.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [jt.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [jt.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [jt.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [jt.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [jt.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function qn(e, ...t) {
  return ro(ek[e], ...t);
}
const tk = "11.2.2", oo = -1, Ua = "en-US", La = "", $u = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function nk() {
  return {
    upper: (e, t) => t === "text" && ie(e) ? e.toUpperCase() : t === "vnode" && Ue(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && ie(e) ? e.toLowerCase() : t === "vnode" && Ue(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && ie(e) ? $u(e) : t === "vnode" && Ue(e) && "__v_isVNode" in e ? $u(e.children) : e
  };
}
let bd;
function rk(e) {
  bd = e;
}
let _d;
function ak(e) {
  _d = e;
}
let yd;
function ok(e) {
  yd = e;
}
let $d = null;
const ik = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  $d = e;
}, lk = /* @__NO_SIDE_EFFECTS__ */ () => $d;
let kd = null;
const ku = (e) => {
  kd = e;
}, sk = () => kd;
let wu = 0;
function uk(e = {}) {
  const t = Je(e.onWarn) ? e.onWarn : mn, r = ie(e.version) ? e.version : tk, a = ie(e.locale) || Je(e.locale) ? e.locale : Ua, n = Je(a) ? Ua : a, o = at(e.fallbackLocale) || je(e.fallbackLocale) || ie(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : n, i = je(e.messages) ? e.messages : Vo(n), l = je(e.datetimeFormats) ? e.datetimeFormats : Vo(n), u = je(e.numberFormats) ? e.numberFormats : Vo(n), c = bt(Re(), e.modifiers, nk()), d = e.pluralRules || Re(), f = Je(e.missing) ? e.missing : null, m = rt(e.missingWarn) || ja(e.missingWarn) ? e.missingWarn : !0, p = rt(e.fallbackWarn) || ja(e.fallbackWarn) ? e.fallbackWarn : !0, h = !!e.fallbackFormat, _ = !!e.unresolving, S = Je(e.postTranslation) ? e.postTranslation : null, k = je(e.processor) ? e.processor : null, y = rt(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, O = !!e.escapeParameter, I = Je(e.messageCompiler) ? e.messageCompiler : bd;
  process.env.NODE_ENV !== "production" && Je(e.messageCompiler) && j$(qn(jt.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const x = Je(e.messageResolver) ? e.messageResolver : _d || Y0, P = Je(e.localeFallbacker) ? e.localeFallbacker : yd || M0, N = Ue(e.fallbackContext) ? e.fallbackContext : void 0, j = e, M = Ue(j.__datetimeFormatters) ? j.__datetimeFormatters : /* @__PURE__ */ new Map(), te = Ue(j.__numberFormatters) ? j.__numberFormatters : /* @__PURE__ */ new Map(), X = Ue(j.__meta) ? j.__meta : {};
  wu++;
  const Q = {
    version: r,
    cid: wu,
    locale: a,
    fallbackLocale: o,
    messages: i,
    modifiers: c,
    pluralRules: d,
    missing: f,
    missingWarn: m,
    fallbackWarn: p,
    fallbackFormat: h,
    unresolving: _,
    postTranslation: S,
    processor: k,
    warnHtmlMessage: y,
    escapeParameter: O,
    messageCompiler: I,
    messageResolver: x,
    localeFallbacker: P,
    fallbackContext: N,
    onWarn: t,
    __meta: X
  };
  return Q.datetimeFormats = l, Q.numberFormats = u, Q.__datetimeFormatters = M, Q.__numberFormatters = te, process.env.NODE_ENV !== "production" && (Q.__v_emitter = j.__v_emitter != null ? j.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && U0(Q, r, X), Q;
}
const Vo = (e) => ({ [e]: Re() });
function io(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function wd(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function Ui(e, t, r, a, n) {
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
    return ie(l) ? l : t;
  } else
    return process.env.NODE_ENV !== "production" && wd(a, t) && i(qn(jt.NOT_FOUND_KEY, { key: t, locale: r })), t;
}
function Pr(e, t, r) {
  const a = e;
  a.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, r, t);
}
function Sd(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function ck(e, t) {
  const r = t.indexOf(e);
  if (r === -1)
    return !1;
  for (let a = r + 1; a < t.length; a++)
    if (Sd(e, t[a]))
      return !0;
  return !1;
}
const Su = typeof Intl < "u", Id = {
  dateTimeFormat: Su && typeof Intl.DateTimeFormat < "u",
  numberFormat: Su && typeof Intl.NumberFormat < "u"
};
function Iu(e, ...t) {
  const { datetimeFormats: r, unresolving: a, fallbackLocale: n, onWarn: o, localeFallbacker: i } = e, { __datetimeFormatters: l } = e;
  if (process.env.NODE_ENV !== "production" && !Id.dateTimeFormat)
    return o(qn(jt.CANNOT_FORMAT_DATE)), La;
  const [u, c, d, f] = Xo(...t), m = rt(d.missingWarn) ? d.missingWarn : e.missingWarn, p = rt(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn, h = !!d.part, _ = ji(e, d), S = i(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    n,
    _
  );
  if (!ie(u) || u === "")
    return new Intl.DateTimeFormat(_, f).format(c);
  let k = {}, y, O = null, I = _, x = null;
  const P = "datetime format";
  for (let M = 0; M < S.length; M++) {
    if (y = x = S[M], process.env.NODE_ENV !== "production" && _ !== y && io(p, u) && o(qn(jt.FALLBACK_TO_DATE_FORMAT, {
      key: u,
      target: y
    })), process.env.NODE_ENV !== "production" && _ !== y) {
      const te = e.__v_emitter;
      te && te.emit("fallback", {
        type: P,
        key: u,
        from: I,
        to: x,
        groupId: `${P}:${u}`
      });
    }
    if (k = r[y] || {}, O = k[u], je(O))
      break;
    Ui(e, u, y, m, P), I = x;
  }
  if (!je(O) || !ie(y))
    return a ? oo : u;
  let N = `${y}__${u}`;
  ao(f) || (N = `${N}__${JSON.stringify(f)}`);
  let j = l.get(N);
  return j || (j = new Intl.DateTimeFormat(y, bt({}, O, f)), l.set(N, j)), h ? j.formatToParts(c) : j.format(c);
}
const xd = [
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
function Xo(...e) {
  const [t, r, a, n] = e, o = Re();
  let i = Re(), l;
  if (ie(t)) {
    const u = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!u)
      throw bn(Ot.INVALID_ISO_DATE_ARGUMENT);
    const c = u[3] ? u[3].trim().startsWith("T") ? `${u[1].trim()}${u[3].trim()}` : `${u[1].trim()}T${u[3].trim()}` : u[1].trim();
    l = new Date(c);
    try {
      l.toISOString();
    } catch {
      throw bn(Ot.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (V$(t)) {
    if (isNaN(t.getTime()))
      throw bn(Ot.INVALID_DATE_ARGUMENT);
    l = t;
  } else if (ht(t))
    l = t;
  else
    throw bn(Ot.INVALID_ARGUMENT);
  return ie(r) ? o.key = r : je(r) && Object.keys(r).forEach((u) => {
    xd.includes(u) ? i[u] = r[u] : o[u] = r[u];
  }), ie(a) ? o.locale = a : je(a) && (i = a), je(n) && (i = n), [o.key || "", l, o, i];
}
function xu(e, t, r) {
  const a = e;
  for (const n in r) {
    const o = `${t}__${n}`;
    a.__datetimeFormatters.has(o) && a.__datetimeFormatters.delete(o);
  }
}
function Ou(e, ...t) {
  const { numberFormats: r, unresolving: a, fallbackLocale: n, onWarn: o, localeFallbacker: i } = e, { __numberFormatters: l } = e;
  if (process.env.NODE_ENV !== "production" && !Id.numberFormat)
    return o(qn(jt.CANNOT_FORMAT_NUMBER)), La;
  const [u, c, d, f] = Qo(...t), m = rt(d.missingWarn) ? d.missingWarn : e.missingWarn, p = rt(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn, h = !!d.part, _ = ji(e, d), S = i(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    n,
    _
  );
  if (!ie(u) || u === "")
    return new Intl.NumberFormat(_, f).format(c);
  let k = {}, y, O = null, I = _, x = null;
  const P = "number format";
  for (let M = 0; M < S.length; M++) {
    if (y = x = S[M], process.env.NODE_ENV !== "production" && _ !== y && io(p, u) && o(qn(jt.FALLBACK_TO_NUMBER_FORMAT, {
      key: u,
      target: y
    })), process.env.NODE_ENV !== "production" && _ !== y) {
      const te = e.__v_emitter;
      te && te.emit("fallback", {
        type: P,
        key: u,
        from: I,
        to: x,
        groupId: `${P}:${u}`
      });
    }
    if (k = r[y] || {}, O = k[u], je(O))
      break;
    Ui(e, u, y, m, P), I = x;
  }
  if (!je(O) || !ie(y))
    return a ? oo : u;
  let N = `${y}__${u}`;
  ao(f) || (N = `${N}__${JSON.stringify(f)}`);
  let j = l.get(N);
  return j || (j = new Intl.NumberFormat(y, bt({}, O, f)), l.set(N, j)), h ? j.formatToParts(c) : j.format(c);
}
const Od = [
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
function Qo(...e) {
  const [t, r, a, n] = e, o = Re();
  let i = Re();
  if (!ht(t))
    throw bn(Ot.INVALID_ARGUMENT);
  const l = t;
  return ie(r) ? o.key = r : je(r) && Object.keys(r).forEach((u) => {
    Od.includes(u) ? i[u] = r[u] : o[u] = r[u];
  }), ie(a) ? o.locale = a : je(a) && (i = a), je(n) && (i = n), [o.key || "", l, o, i];
}
function Nu(e, t, r) {
  const a = e;
  for (const n in r) {
    const o = `${t}__${n}`;
    a.__numberFormatters.has(o) && a.__numberFormatters.delete(o);
  }
}
const dk = (e) => e, fk = (e) => "", mk = "text", pk = (e) => e.length === 0 ? "" : Ai(e), vk = W$;
function Eu(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function gk(e) {
  const t = ht(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (ht(e.named.count) || ht(e.named.n)) ? ht(e.named.count) ? e.named.count : ht(e.named.n) ? e.named.n : t : t;
}
function hk(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function bk(e = {}) {
  const t = e.locale, r = gk(e), a = Ue(e.pluralRules) && ie(t) && Je(e.pluralRules[t]) ? e.pluralRules[t] : Eu, n = Ue(e.pluralRules) && ie(t) && Je(e.pluralRules[t]) ? Eu : void 0, o = (k) => k[a(r, k.length, n)], i = e.list || [], l = (k) => i[k], u = e.named || Re();
  ht(e.pluralIndex) && hk(r, u);
  const c = (k) => u[k];
  function d(k, y) {
    const O = Je(e.messages) ? e.messages(k, !!y) : Ue(e.messages) ? e.messages[k] : !1;
    return O || (e.parent ? e.parent.message(k) : fk);
  }
  const f = (k) => e.modifiers ? e.modifiers[k] : dk, m = je(e.processor) && Je(e.processor.normalize) ? e.processor.normalize : pk, p = je(e.processor) && Je(e.processor.interpolate) ? e.processor.interpolate : vk, h = je(e.processor) && ie(e.processor.type) ? e.processor.type : mk, S = {
    list: l,
    named: c,
    plural: o,
    linked: (k, ...y) => {
      const [O, I] = y;
      let x = "text", P = "";
      y.length === 1 ? Ue(O) ? (P = O.modifier || P, x = O.type || x) : ie(O) && (P = O || P) : y.length === 2 && (ie(O) && (P = O || P), ie(I) && (x = I || x));
      const N = d(k, !0)(S), j = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        x === "vnode" && at(N) && P ? N[0] : N
      );
      return P ? f(P)(j, x) : j;
    },
    message: d,
    type: h,
    interpolate: p,
    normalize: m,
    values: bt(Re(), i, u)
  };
  return S;
}
const zu = () => "", Gt = (e) => Je(e);
function Pu(e, ...t) {
  const { fallbackFormat: r, postTranslation: a, unresolving: n, messageCompiler: o, fallbackLocale: i, messages: l } = e, [u, c] = ei(...t), d = rt(c.missingWarn) ? c.missingWarn : e.missingWarn, f = rt(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, m = rt(c.escapeParameter) ? c.escapeParameter : e.escapeParameter, p = !!c.resolvedMessage, h = ie(c.default) || rt(c.default) ? rt(c.default) ? o ? u : () => u : c.default : r ? o ? u : () => u : null, _ = r || h != null && (ie(h) || Je(h)), S = ji(e, c);
  m && _k(c);
  let [k, y, O] = p ? [
    u,
    S,
    l[S] || Re()
  ] : Nd(e, u, S, i, f, d), I = k, x = u;
  if (!p && !(ie(I) || en(I) || Gt(I)) && _ && (I = h, x = I), !p && (!(ie(I) || en(I) || Gt(I)) || !ie(y)))
    return n ? oo : u;
  if (process.env.NODE_ENV !== "production" && ie(I) && e.messageCompiler == null)
    return mn(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${u}'.`), u;
  let P = !1;
  const N = () => {
    P = !0;
  }, j = Gt(I) ? I : Ed(e, u, y, I, x, N);
  if (P)
    return I;
  const M = wk(e, y, O, c), te = bk(M), X = yk(e, j, te);
  let Q = a ? a(X, u) : X;
  if (m && ie(Q) && (Q = M$(Q)), process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const Ce = {
      timestamp: Date.now(),
      key: ie(u) ? u : Gt(I) ? I.key : "",
      locale: y || (Gt(I) ? I.locale : ""),
      format: ie(I) ? I : Gt(I) ? I.source : "",
      message: Q
    };
    Ce.meta = bt({}, e.__meta, /* @__PURE__ */ lk() || {}), L0(Ce);
  }
  return Q;
}
function _k(e) {
  at(e.list) ? e.list = e.list.map((t) => ie(t) ? du(t) : t) : Ue(e.named) && Object.keys(e.named).forEach((t) => {
    ie(e.named[t]) && (e.named[t] = du(e.named[t]));
  });
}
function Nd(e, t, r, a, n, o) {
  const { messages: i, onWarn: l, messageResolver: u, localeFallbacker: c } = e, d = c(e, a, r);
  let f = Re(), m, p = null, h = r, _ = null;
  const S = "translate";
  for (let k = 0; k < d.length; k++) {
    if (m = _ = d[k], process.env.NODE_ENV !== "production" && r !== m && !Sd(r, m) && io(n, t) && l(qn(jt.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: m
    })), process.env.NODE_ENV !== "production" && r !== m) {
      const x = e.__v_emitter;
      x && x.emit("fallback", {
        type: S,
        key: t,
        from: h,
        to: _,
        groupId: `${S}:${t}`
      });
    }
    f = i[m] || Re();
    let y = null, O, I;
    if (process.env.NODE_ENV !== "production" && $n && (y = window.performance.now(), O = "intlify-message-resolve-start", I = "intlify-message-resolve-end", Ft && Ft(O)), (p = u(f, t)) === null && (p = f[t]), process.env.NODE_ENV !== "production" && $n) {
      const x = window.performance.now(), P = e.__v_emitter;
      P && y && p && P.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: p,
        time: x - y,
        groupId: `${S}:${t}`
      }), O && I && Ft && Jn && (Ft(I), Jn("intlify message resolve", O, I));
    }
    if (ie(p) || en(p) || Gt(p))
      break;
    if (!ck(m, d)) {
      const x = Ui(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        m,
        o,
        S
      );
      x !== t && (p = x);
    }
    h = _;
  }
  return [p, m, f];
}
function Ed(e, t, r, a, n, o) {
  const { messageCompiler: i, warnHtmlMessage: l } = e;
  if (Gt(a)) {
    const m = a;
    return m.locale = m.locale || r, m.key = m.key || t, m;
  }
  if (i == null) {
    const m = (() => a);
    return m.locale = r, m.key = t, m;
  }
  let u = null, c, d;
  process.env.NODE_ENV !== "production" && $n && (u = window.performance.now(), c = "intlify-message-compilation-start", d = "intlify-message-compilation-end", Ft && Ft(c));
  const f = i(a, $k(e, r, n, a, l, o));
  if (process.env.NODE_ENV !== "production" && $n) {
    const m = window.performance.now(), p = e.__v_emitter;
    p && u && p.emit("message-compilation", {
      type: "message-compilation",
      message: a,
      time: m - u,
      groupId: `translate:${t}`
    }), c && d && Ft && Jn && (Ft(d), Jn("intlify message compilation", c, d));
  }
  return f.locale = r, f.key = t, f.source = a, f;
}
function yk(e, t, r) {
  let a = null, n, o;
  process.env.NODE_ENV !== "production" && $n && (a = window.performance.now(), n = "intlify-message-evaluation-start", o = "intlify-message-evaluation-end", Ft && Ft(n));
  const i = t(r);
  if (process.env.NODE_ENV !== "production" && $n) {
    const l = window.performance.now(), u = e.__v_emitter;
    u && a && u.emit("message-evaluation", {
      type: "message-evaluation",
      value: i,
      time: l - a,
      groupId: `translate:${t.key}`
    }), n && o && Ft && Jn && (Ft(o), Jn("intlify message evaluation", n, o));
  }
  return i;
}
function ei(...e) {
  const [t, r, a] = e, n = Re();
  if (!ie(t) && !ht(t) && !Gt(t) && !en(t))
    throw bn(Ot.INVALID_ARGUMENT);
  const o = ht(t) ? String(t) : (Gt(t), t);
  return ht(r) ? n.plural = r : ie(r) ? n.default = r : je(r) && !ao(r) ? n.named = r : at(r) && (n.list = r), ht(a) ? n.plural = a : ie(a) ? n.default = a : je(a) && bt(n, a), [o, n];
}
function $k(e, t, r, a, n, o) {
  return {
    locale: t,
    key: r,
    warnHtmlMessage: n,
    onError: (i) => {
      if (o && o(i), process.env.NODE_ENV !== "production") {
        const l = kk(a), u = `Message compilation error: ${i.message}`, c = i.location && l && G$(l, i.location.start.offset, i.location.end.offset), d = e.__v_emitter;
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
    onCacheKey: (i) => L$(t, r, i)
  };
}
function kk(e) {
  if (ie(e))
    return e;
  if (e.loc && e.loc.source)
    return e.loc.source;
}
function wk(e, t, r, a) {
  const { modifiers: n, pluralRules: o, messageResolver: i, fallbackLocale: l, fallbackWarn: u, missingWarn: c, fallbackContext: d } = e, m = {
    locale: t,
    modifiers: n,
    pluralRules: o,
    messages: (p, h) => {
      let _ = i(r, p);
      if (_ == null && (d || h)) {
        const [, , S] = Nd(
          d || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          p,
          t,
          l,
          u,
          c
        );
        _ = i(S, p);
      }
      if (ie(_) || en(_)) {
        let S = !1;
        const y = Ed(e, p, t, _, p, () => {
          S = !0;
        });
        return S ? zu : y;
      } else return Gt(_) ? _ : zu;
    }
  };
  return e.processor && (m.processor = e.processor), a.list && (m.list = a.list), a.named && (m.named = a.named), ht(a.plural) && (m.pluralIndex = a.plural), m;
}
w0();
const Sk = "11.2.2";
function Ik() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Vn().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Vn().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Vn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Vn().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const $t = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: V0,
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
function Br(e, ...t) {
  return kr(e, null, process.env.NODE_ENV !== "production" ? { messages: xk, args: t } : void 0);
}
const xk = {
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
}, ti = /* @__PURE__ */ wn("__translateVNode"), ni = /* @__PURE__ */ wn("__datetimeParts"), ri = /* @__PURE__ */ wn("__numberParts"), ai = /* @__PURE__ */ wn("__enableEmitter"), oi = /* @__PURE__ */ wn("__disableEmitter"), Ok = wn("__setPluralRules"), zd = /* @__PURE__ */ wn("__injectWithOption"), ii = /* @__PURE__ */ wn("__dispose"), sn = {
  FALLBACK_TO_ROOT: Q0,
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
}, Nk = {
  [sn.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
  [sn.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
  [sn.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
  /**
   * @deprecated will be removed at vue-i18n v12
   */
  [sn.DEPRECATE_LEGACY_MODE]: `Legacy API mode has been deprecated in v11. Use Composition API mode instead.
About how to use the Composition API mode, see https://vue-i18n.intlify.dev/guide/advanced/composition.html`,
  /**
   * @deprecated will be removed at vue-i18n v12
   */
  [sn.DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE]: "'v-t' has been deprecated in v11. Use translate APIs ('t' or '$t') instead.",
  [sn.DUPLICATE_USE_I18N_CALLING]: "Duplicate `useI18n` calling by local scope. Please don't call it on local scope, due to it does not work properly in component."
};
function Ra(e, ...t) {
  return ro(Nk[e], ...t);
}
function Zr(e) {
  if (!Ue(e) || en(e))
    return e;
  for (const t in e)
    if (qt(e, t))
      if (!t.includes("."))
        Ue(e[t]) && Zr(e[t]);
      else {
        const r = t.split("."), a = r.length - 1;
        let n = e, o = !1;
        for (let i = 0; i < a; i++) {
          if (r[i] === "__proto__")
            throw new Error(`unsafe key: ${r[i]}`);
          if (r[i] in n || (n[r[i]] = Re()), !Ue(n[r[i]])) {
            process.env.NODE_ENV !== "production" && mn(Ra(sn.IGNORE_OBJ_FLATTEN, {
              key: r[i]
            })), o = !0;
            break;
          }
          n = n[r[i]];
        }
        if (o || (en(n) ? gd.includes(r[a]) || delete e[t] : (n[r[a]] = e[t], delete e[t])), !en(n)) {
          const i = n[r[a]];
          Ue(i) && Zr(i);
        }
      }
  return e;
}
function Pd(e, t) {
  const { messages: r, __i18n: a, messageResolver: n, flatJson: o } = t, i = je(r) ? r : at(a) ? Re() : { [e]: Re() };
  if (at(a) && a.forEach((l) => {
    if ("locale" in l && "resource" in l) {
      const { locale: u, resource: c } = l;
      u ? (i[u] = i[u] || Re(), za(c, i[u])) : za(c, i);
    } else
      ie(l) && za(JSON.parse(l), i);
  }), n == null && o)
    for (const l in i)
      qt(i, l) && Zr(i[l]);
  return i;
}
function Td(e) {
  return e.type;
}
function Ek(e, t, r) {
  let a = Ue(t.messages) ? t.messages : Re();
  "__i18nGlobal" in r && (a = Pd(e.locale.value, {
    messages: a,
    __i18n: r.__i18nGlobal
  }));
  const n = Object.keys(a);
  n.length && n.forEach((o) => {
    e.mergeLocaleMessage(o, a[o]);
  });
  {
    if (Ue(t.datetimeFormats)) {
      const o = Object.keys(t.datetimeFormats);
      o.length && o.forEach((i) => {
        e.mergeDateTimeFormat(i, t.datetimeFormats[i]);
      });
    }
    if (Ue(t.numberFormats)) {
      const o = Object.keys(t.numberFormats);
      o.length && o.forEach((i) => {
        e.mergeNumberFormat(i, t.numberFormats[i]);
      });
    }
  }
}
function Tu(e) {
  return $(_h, null, e, 0);
}
function Li() {
  return "currentInstance" in To ? To["currentInstance"] : To.getCurrentInstance();
}
const Au = "__INTLIFY_META__", Du = () => [], zk = () => !1;
let Cu = 0;
function ju(e) {
  return ((t, r, a, n) => e(r, a, Li() || void 0, n));
}
const Pk = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = Li();
  let t = null;
  return e && (t = Td(e)[Au]) ? { [Au]: t } : null;
};
function Tk(e = {}) {
  const { __root: t, __injectWithOption: r } = e, a = t === void 0, n = e.flatJson, o = $n ? fe : un;
  let i = rt(e.inheritLocale) ? e.inheritLocale : !0;
  const l = o(
    // prettier-ignore
    t && i ? t.locale.value : ie(e.locale) ? e.locale : Ua
  ), u = o(
    // prettier-ignore
    t && i ? t.fallbackLocale.value : ie(e.fallbackLocale) || at(e.fallbackLocale) || je(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : l.value
  ), c = o(Pd(l.value, e)), d = o(je(e.datetimeFormats) ? e.datetimeFormats : { [l.value]: {} }), f = o(je(e.numberFormats) ? e.numberFormats : { [l.value]: {} });
  let m = t ? t.missingWarn : rt(e.missingWarn) || ja(e.missingWarn) ? e.missingWarn : !0, p = t ? t.fallbackWarn : rt(e.fallbackWarn) || ja(e.fallbackWarn) ? e.fallbackWarn : !0, h = t ? t.fallbackRoot : rt(e.fallbackRoot) ? e.fallbackRoot : !0, _ = !!e.fallbackFormat, S = Je(e.missing) ? e.missing : null, k = Je(e.missing) ? ju(e.missing) : null, y = Je(e.postTranslation) ? e.postTranslation : null, O = t ? t.warnHtmlMessage : rt(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, I = !!e.escapeParameter;
  const x = t ? t.modifiers : je(e.modifiers) ? e.modifiers : {};
  let P = e.pluralRules || t && t.pluralRules, N;
  N = (() => {
    a && ku(null);
    const U = {
      version: Sk,
      locale: l.value,
      fallbackLocale: u.value,
      messages: c.value,
      modifiers: x,
      pluralRules: P,
      missing: k === null ? void 0 : k,
      missingWarn: m,
      fallbackWarn: p,
      fallbackFormat: _,
      unresolving: !0,
      postTranslation: y === null ? void 0 : y,
      warnHtmlMessage: O,
      escapeParameter: I,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    U.datetimeFormats = d.value, U.numberFormats = f.value, U.__datetimeFormatters = je(N) ? N.__datetimeFormatters : void 0, U.__numberFormatters = je(N) ? N.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (U.__v_emitter = je(N) ? N.__v_emitter : void 0);
    const W = uk(U);
    return a && ku(W), W;
  })(), Pr(N, l.value, u.value);
  function M() {
    return [
      l.value,
      u.value,
      c.value,
      d.value,
      f.value
    ];
  }
  const te = G({
    get: () => l.value,
    set: (U) => {
      N.locale = U, l.value = U;
    }
  }), X = G({
    get: () => u.value,
    set: (U) => {
      N.fallbackLocale = U, u.value = U, Pr(N, l.value, U);
    }
  }), Q = G(() => c.value), Ce = /* @__PURE__ */ G(() => d.value), B = /* @__PURE__ */ G(() => f.value);
  function ne() {
    return Je(y) ? y : null;
  }
  function K(U) {
    y = U, N.postTranslation = U;
  }
  function ue() {
    return S;
  }
  function re(U) {
    U !== null && (k = ju(U)), S = U, N.missing = k;
  }
  function pt(U, W) {
    return U !== "translate" || !W.resolvedMessage;
  }
  const tt = (U, W, ze, Fe, Rt, an) => {
    M();
    let E;
    try {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, a || (N.fallbackContext = t ? sk() : void 0), E = U(N);
    } finally {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, a || (N.fallbackContext = void 0);
    }
    if (ze !== "translate exists" && // for not `te` (e.g `t`)
    ht(E) && E === oo || ze === "translate exists" && !E) {
      const [z, F] = W();
      if (process.env.NODE_ENV !== "production" && t && ie(z) && pt(ze, F) && (h && (io(p, z) || wd(m, z)) && mn(Ra(sn.FALLBACK_TO_ROOT, {
        key: z,
        type: ze
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: ee } = N;
        ee && h && ee.emit("fallback", {
          type: ze,
          key: z,
          to: "global",
          groupId: `${ze}:${z}`
        });
      }
      return t && h ? Fe(t) : Rt(z);
    } else {
      if (an(E))
        return E;
      throw Br($t.UNEXPECTED_RETURN_TYPE);
    }
  };
  function yt(...U) {
    return tt((W) => Reflect.apply(Pu, null, [W, ...U]), () => ei(...U), "translate", (W) => Reflect.apply(W.t, W, [...U]), (W) => W, (W) => ie(W));
  }
  function Tt(...U) {
    const [W, ze, Fe] = U;
    if (Fe && !Ue(Fe))
      throw Br($t.INVALID_ARGUMENT);
    return yt(W, ze, bt({ resolvedMessage: !0 }, Fe || {}));
  }
  function Ge(...U) {
    return tt((W) => Reflect.apply(Iu, null, [W, ...U]), () => Xo(...U), "datetime format", (W) => Reflect.apply(W.d, W, [...U]), () => La, (W) => ie(W) || at(W));
  }
  function Pe(...U) {
    return tt((W) => Reflect.apply(Ou, null, [W, ...U]), () => Qo(...U), "number format", (W) => Reflect.apply(W.n, W, [...U]), () => La, (W) => ie(W) || at(W));
  }
  function Nt(U) {
    return U.map((W) => ie(W) || ht(W) || rt(W) ? Tu(String(W)) : W);
  }
  const se = {
    normalize: Nt,
    interpolate: (U) => U,
    type: "vnode"
  };
  function Oe(...U) {
    return tt((W) => {
      let ze;
      const Fe = W;
      try {
        Fe.processor = se, ze = Reflect.apply(Pu, null, [Fe, ...U]);
      } finally {
        Fe.processor = null;
      }
      return ze;
    }, () => ei(...U), "translate", (W) => W[ti](...U), (W) => [Tu(W)], (W) => at(W));
  }
  function Ne(...U) {
    return tt((W) => Reflect.apply(Ou, null, [W, ...U]), () => Qo(...U), "number format", (W) => W[ri](...U), Du, (W) => ie(W) || at(W));
  }
  function nt(...U) {
    return tt((W) => Reflect.apply(Iu, null, [W, ...U]), () => Xo(...U), "datetime format", (W) => W[ni](...U), Du, (W) => ie(W) || at(W));
  }
  function ot(U) {
    P = U, N.pluralRules = P;
  }
  function Ke(U, W) {
    return tt(() => {
      if (!U)
        return !1;
      const ze = ie(W) ? W : l.value, Fe = Ht(ze), Rt = N.messageResolver(Fe, U);
      return en(Rt) || Gt(Rt) || ie(Rt);
    }, () => [U], "translate exists", (ze) => Reflect.apply(ze.te, ze, [U, W]), zk, (ze) => rt(ze));
  }
  function Lt(U) {
    let W = null;
    const ze = hd(N, u.value, l.value);
    for (let Fe = 0; Fe < ze.length; Fe++) {
      const Rt = c.value[ze[Fe]] || {}, an = N.messageResolver(Rt, U);
      if (an != null) {
        W = an;
        break;
      }
    }
    return W;
  }
  function pn(U) {
    const W = Lt(U);
    return W ?? (t ? t.tm(U) || {} : {});
  }
  function Ht(U) {
    return c.value[U] || {};
  }
  function Jt(U, W) {
    if (n) {
      const ze = { [U]: W };
      for (const Fe in ze)
        qt(ze, Fe) && Zr(ze[Fe]);
      W = ze[U];
    }
    c.value[U] = W, N.messages = c.value;
  }
  function In(U, W) {
    c.value[U] = c.value[U] || {};
    const ze = { [U]: W };
    if (n)
      for (const Fe in ze)
        qt(ze, Fe) && Zr(ze[Fe]);
    W = ze[U], za(W, c.value[U]), N.messages = c.value;
  }
  function b(U) {
    return d.value[U] || {};
  }
  function w(U, W) {
    d.value[U] = W, N.datetimeFormats = d.value, xu(N, U, W);
  }
  function L(U, W) {
    d.value[U] = bt(d.value[U] || {}, W), N.datetimeFormats = d.value, xu(N, U, W);
  }
  function q(U) {
    return f.value[U] || {};
  }
  function we(U, W) {
    f.value[U] = W, N.numberFormats = f.value, Nu(N, U, W);
  }
  function Ie(U, W) {
    f.value[U] = bt(f.value[U] || {}, W), N.numberFormats = f.value, Nu(N, U, W);
  }
  Cu++, t && $n && (Le(t.locale, (U) => {
    i && (l.value = U, N.locale = U, Pr(N, l.value, u.value));
  }), Le(t.fallbackLocale, (U) => {
    i && (u.value = U, N.fallbackLocale = U, Pr(N, l.value, u.value));
  }));
  const $e = {
    id: Cu,
    locale: te,
    fallbackLocale: X,
    get inheritLocale() {
      return i;
    },
    set inheritLocale(U) {
      i = U, U && t && (l.value = t.locale.value, u.value = t.fallbackLocale.value, Pr(N, l.value, u.value));
    },
    get availableLocales() {
      return Object.keys(c.value).sort();
    },
    messages: Q,
    get modifiers() {
      return x;
    },
    get pluralRules() {
      return P || {};
    },
    get isGlobal() {
      return a;
    },
    get missingWarn() {
      return m;
    },
    set missingWarn(U) {
      m = U, N.missingWarn = m;
    },
    get fallbackWarn() {
      return p;
    },
    set fallbackWarn(U) {
      p = U, N.fallbackWarn = p;
    },
    get fallbackRoot() {
      return h;
    },
    set fallbackRoot(U) {
      h = U;
    },
    get fallbackFormat() {
      return _;
    },
    set fallbackFormat(U) {
      _ = U, N.fallbackFormat = _;
    },
    get warnHtmlMessage() {
      return O;
    },
    set warnHtmlMessage(U) {
      O = U, N.warnHtmlMessage = U;
    },
    get escapeParameter() {
      return I;
    },
    set escapeParameter(U) {
      I = U, N.escapeParameter = U;
    },
    t: yt,
    getLocaleMessage: Ht,
    setLocaleMessage: Jt,
    mergeLocaleMessage: In,
    getPostTranslationHandler: ne,
    setPostTranslationHandler: K,
    getMissingHandler: ue,
    setMissingHandler: re,
    [Ok]: ot
  };
  return $e.datetimeFormats = Ce, $e.numberFormats = B, $e.rt = Tt, $e.te = Ke, $e.tm = pn, $e.d = Ge, $e.n = Pe, $e.getDateTimeFormat = b, $e.setDateTimeFormat = w, $e.mergeDateTimeFormat = L, $e.getNumberFormat = q, $e.setNumberFormat = we, $e.mergeNumberFormat = Ie, $e[zd] = r, $e[ti] = Oe, $e[ni] = nt, $e[ri] = Ne, process.env.NODE_ENV !== "production" && ($e[ai] = (U) => {
    N.__v_emitter = U;
  }, $e[oi] = () => {
    N.__v_emitter = void 0;
  }), $e;
}
function Uu(e, t) {
}
const Ri = {
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
function Ak({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((a, n) => [
    ...a,
    // prettier-ignore
    ...n.type === De ? n.children : [n]
  ], []) : t.reduce((r, a) => {
    const n = e[a];
    return n && (r[a] = n()), r;
  }, Re());
}
function Ad() {
  return De;
}
bt({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => ht(e) || !isNaN(e)
  }
}, Ri);
function Dk(e) {
  return at(e) && !ie(e[0]);
}
function Dd(e, t, r, a) {
  const { slots: n, attrs: o } = t;
  return () => {
    const i = { part: !0 };
    let l = Re();
    e.locale && (i.locale = e.locale), ie(e.format) ? i.key = e.format : Ue(e.format) && (ie(e.format.key) && (i.key = e.format.key), l = Object.keys(e.format).reduce((m, p) => r.includes(p) ? bt(Re(), m, { [p]: e.format[p] }) : m, Re()));
    const u = a(e.value, i, l);
    let c = [i.key];
    at(u) ? c = u.map((m, p) => {
      const h = n[m.type], _ = h ? h({ [m.type]: m.value, index: p, parts: u }) : [m.value];
      return Dk(_) && (_[0].key = `${m.type}-${p}`), _;
    }) : ie(u) && (c = [u]);
    const d = bt(Re(), o), f = ie(e.tag) || Ue(e.tag) ? e.tag : Ad();
    return dn(f, d, c);
  };
}
bt({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Ri);
const Ck = /* @__PURE__ */ wn("global-vue-i18n");
function Tn(e = {}) {
  const t = Li();
  if (t == null)
    throw Br($t.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Br($t.NOT_INSTALLED);
  const r = jk(t), a = Lk(r), n = Td(t), o = Uk(e, n);
  if (o === "global")
    return Ek(a, e, n), a;
  if (o === "parent") {
    let u = Rk(r, t, e.__useComponent);
    return u == null && (process.env.NODE_ENV !== "production" && mn(Ra(sn.NOT_FOUND_PARENT_SCOPE)), u = a), u;
  }
  const i = r;
  let l = i.__getInstance(t);
  if (l == null) {
    const u = bt({}, e);
    "__i18n" in n && (u.__i18n = n.__i18n), a && (u.__root = a), l = Tk(u), i.__composerExtend && (l[ii] = i.__composerExtend(l)), Fk(i, t, l), i.__setInstance(t, l);
  } else
    process.env.NODE_ENV !== "production" && o === "local" && mn(Ra(sn.DUPLICATE_USE_I18N_CALLING));
  return l;
}
function jk(e) {
  const t = fn(e.isCE ? Ck : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw Br(e.isCE ? $t.NOT_INSTALLED_WITH_PROVIDE : $t.UNEXPECTED_ERROR);
  return t;
}
function Uk(e, t) {
  return ao(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Lk(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function Rk(e, t, r = !1) {
  let a = null;
  const n = t.root;
  let o = Vk(t, r);
  for (; o != null; ) {
    const i = e;
    if (e.mode === "composition")
      a = i.__getInstance(o);
    else if (__VUE_I18N_LEGACY_API__) {
      const l = i.__getInstance(o);
      l != null && (a = l.__composer, r && a && !a[zd] && (a = null));
    }
    if (a != null || n === o)
      break;
    o = o.parent;
  }
  return a;
}
function Vk(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function Fk(e, t, r) {
  let a = null;
  er(() => {
    if (process.env.NODE_ENV !== "production") {
      t.__VUE_I18N__ = r, a = K$();
      const n = r;
      n[ai] && n[ai](a), a.on("*", Uu);
    }
  }, t), eo(() => {
    const n = r;
    process.env.NODE_ENV !== "production" && (a && a.off("*", Uu), n[oi] && n[oi](), delete t.__VUE_I18N__), e.__deleteInstance(t);
    const o = n[ii];
    o && (o(), delete n[ii]);
  }, t);
}
bt({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Ri);
Ik();
rk(C0);
ak(X0);
ok(hd);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = Vn();
  e.__INTLIFY__ = !0, j0(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
const Mk = /* @__PURE__ */ D({
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
    const r = e, a = t, n = pe(r, "class"), o = We(n, a);
    return (i, l) => (g(), A(s(jh), J({ "data-slot": "pagination" }, s(o), {
      class: s(Z)("mx-auto flex w-full justify-center", r.class)
    }), {
      default: v((u) => [
        C(i.$slots, "default", zt(Ut(u)))
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Bk = /* @__PURE__ */ D({
  __name: "PaginationContent",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = pe(t, "class");
    return (a, n) => (g(), A(s(Uh), J({ "data-slot": "pagination-content" }, s(r), {
      class: s(Z)("flex flex-row items-center gap-1", t.class)
    }), {
      default: v((o) => [
        C(a.$slots, "default", zt(Ut(o)))
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Zk = /* @__PURE__ */ D({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, r = pe(t, "class", "size"), a = Ye(r);
    return (n, o) => (g(), A(s(Lh), J({
      "data-slot": "pagination-first",
      class: s(Z)(s(rn)({ variant: "outline", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, s(a)), {
      default: v(() => [
        C(n.$slots, "default", {}, () => [
          $(s(Lc), { class: "size-4" }),
          o[0] || (o[0] = oe("span", { class: "hidden sm:block" }, "First", -1))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Wk = /* @__PURE__ */ D({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, r = pe(t, "class", "size"), a = Ye(r);
    return (n, o) => (g(), A(s(Rh), J({
      "data-slot": "pagination-last",
      class: s(Z)(s(rn)({ variant: "outline", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, s(a)), {
      default: v(() => [
        C(n.$slots, "default", {}, () => [
          o[0] || (o[0] = oe("span", { class: "hidden sm:block" }, "Last", -1)),
          $(s(Rc), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Gk = /* @__PURE__ */ D({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, r = pe(t, "class", "size"), a = Ye(r);
    return (n, o) => (g(), A(s(Vh), J({
      "data-slot": "pagination-next",
      class: s(Z)(s(rn)({ variant: "outline", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, s(a)), {
      default: v(() => [
        C(n.$slots, "default", {}, () => [
          o[0] || (o[0] = oe("span", { class: "hidden sm:block" }, "Next", -1)),
          $(s(Zn))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Kk = /* @__PURE__ */ D({
  __name: "PaginationPrevious",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, r = pe(t, "class", "size"), a = Ye(r);
    return (n, o) => (g(), A(s(Fh), J({
      "data-slot": "pagination-previous",
      class: s(Z)(s(rn)({ variant: "outline", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, s(a)), {
      default: v(() => [
        C(n.$slots, "default", {}, () => [
          $(s(Ni)),
          o[0] || (o[0] = oe("span", { class: "hidden sm:block" }, "Previous", -1))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Cd = /* @__PURE__ */ D({
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
    const n = We(e, t);
    return (o, i) => (g(), A(s(Mh), J({ "data-slot": "select" }, s(n)), {
      default: v(() => [
        C(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jd = /* @__PURE__ */ D({
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
    const r = e, a = t, n = pe(r, "class"), o = We(n, a);
    return (i, l) => (g(), A(s(Bh), null, {
      default: v(() => [
        $(s(Zh), J({ "data-slot": "select-content" }, { ...s(o), ...i.$attrs }, {
          class: s(Z)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--reka-select-content-available-height) min-w-[8rem] overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
            e.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            r.class
          )
        }), {
          default: v(() => [
            $(s(qk)),
            $(s(Wh), {
              class: ge(s(Z)("p-1", e.position === "popper" && "h-[var(--reka-select-trigger-height)] w-full min-w-[var(--reka-select-trigger-width)] scroll-my-1"))
            }, {
              default: v(() => [
                C(i.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            $(s(Jk))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Hk = { class: "absolute right-2 flex size-3.5 items-center justify-center" }, Ud = /* @__PURE__ */ D({
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
    const t = e, r = pe(t, "class"), a = Ye(r);
    return (n, o) => (g(), A(s(Gh), J({ "data-slot": "select-item" }, s(a), {
      class: s(Z)(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        t.class
      )
    }), {
      default: v(() => [
        oe("span", Hk, [
          $(s(Kh), null, {
            default: v(() => [
              $(s(to), { class: "size-4" })
            ]),
            _: 1
          })
        ]),
        $(s(Hh), null, {
          default: v(() => [
            C(n.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Jk = /* @__PURE__ */ D({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = pe(t, "class"), a = Ye(r);
    return (n, o) => (g(), A(s(Jh), J({ "data-slot": "select-scroll-down-button" }, s(a), {
      class: s(Z)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: v(() => [
        C(n.$slots, "default", {}, () => [
          $(s(Bn), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), qk = /* @__PURE__ */ D({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = pe(t, "class"), a = Ye(r);
    return (n, o) => (g(), A(s(qh), J({ "data-slot": "select-scroll-up-button" }, s(a), {
      class: s(Z)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: v(() => [
        C(n.$slots, "default", {}, () => [
          $(s(o_), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Yk = /* @__PURE__ */ D({
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
    const t = e, r = pe(t, "class", "size"), a = Ye(r);
    return (n, o) => (g(), A(s(Uc), J({
      "data-slot": "select-trigger",
      "data-size": e.size
    }, s(a), {
      class: s(Z)(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        t.class
      )
    }), {
      default: v(() => [
        C(n.$slots, "default"),
        $(s(Yh), { "as-child": "" }, {
          default: v(() => [
            $(s(Bn), { class: "size-3" })
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["data-size", "class"]));
  }
}), Ld = /* @__PURE__ */ D({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), A(s(Xh), J({ "data-slot": "select-value" }, t), {
      default: v(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vi = /* @__PURE__ */ D({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = pe(t, "class");
    return (a, n) => (g(), A(s(Qh), J({ "data-slot": "dropdown-menu-separator" }, s(r), {
      class: s(Z)("bg-border -mx-1 my-1 h-px", t.class)
    }), null, 16, ["class"]));
  }
}), Xk = {
  key: 0,
  class: "text-xs font-semibold px-2 py-2"
}, Qk = { key: 1 }, ew = {
  key: 0,
  class: "-mt-2"
}, Fi = /* @__PURE__ */ D({
  inheritAttrs: !1,
  __name: "SelectOptions",
  props: /* @__PURE__ */ mt({
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
  emits: /* @__PURE__ */ mt(["onAddItem"], ["update:modelValue"]),
  setup(e) {
    const t = e;
    function r(u) {
      return {
        "common.select": "Select",
        "common.reset": "Reset",
        "common.addItem": "Add Item"
      }[u] || u;
    }
    const a = ct(e, "modelValue"), n = G(() => Object.fromEntries(H(t.options).map((u) => [u.value, u]))), o = G(() => a.value ? t.multiple ? Array.isArray(a.value) ? a.value.map((u) => n.value[u]).filter(Boolean) : [] : n.value[a.value] ? [n.value[a.value]] : [] : []);
    function i() {
      a.value = t.initialValues ?? (t.multiple ? [] : void 0);
    }
    const l = G(() => t.initialValues === void 0 ? a.value !== void 0 : JSON.stringify(t.initialValues) !== JSON.stringify(a.value));
    return (u, c) => (g(), R(De, null, [
      $(s(Cd), {
        modelValue: a.value,
        "onUpdate:modelValue": c[1] || (c[1] = (d) => a.value = d),
        multiple: e.multiple
      }, {
        default: v(() => [
          $(s(Uc), J({
            class: s(Z)(
              "w-full data-[placeholder]:text-muted-foreground ",
              t.class
            )
          }, u.$attrs, { "as-child": "" }), {
            default: v(() => [
              $(id, { variant: "outline" }, {
                default: v(() => [
                  C(u.$slots, "default", { selectedOptions: o.value }, () => [
                    $(s(Ld), {
                      placeholder: e.placeholder || r("common.select"),
                      class: "flex-wrap"
                    }, {
                      default: v(() => [
                        e.customValueComponent && o.value.length > 0 ? (g(!0), R(De, { key: 0 }, Ze(o.value, (d) => (g(), A(dt(e.customValueComponent), J({
                          key: d.value,
                          option: d,
                          "selected-options": o.value
                        }, { ref_for: !0 }, e.customValueProps), null, 16, ["option", "selected-options"]))), 128)) : me("", !0)
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
          $(s(jd), null, {
            default: v(() => [
              e.label ? (g(), R("div", Xk, ae(e.label), 1)) : me("", !0),
              (g(!0), R(De, null, Ze(H(e.options), (d) => (g(), A(s(Ud), {
                key: String(d.value),
                value: d.value
              }, {
                default: v(() => [
                  he(ae(d.label), 1)
                ]),
                _: 2
              }, 1032, ["value"]))), 128)),
              e.showResetButton && l.value ? (g(), R("div", Qk, [
                $(Vi),
                $(ft, {
                  class: "w-full",
                  variant: "ghost",
                  size: "sm",
                  onClick: c[0] || (c[0] = (d) => i())
                }, {
                  default: v(() => [
                    $(s(c_)),
                    he(" " + ae(r("common.reset")), 1)
                  ]),
                  _: 1
                })
              ])) : me("", !0)
            ]),
            _: 1
          })
        ]),
        _: 3
      }, 8, ["modelValue", "multiple"]),
      e.showAddItemButton ? (g(), R("div", ew, [
        $(ft, {
          size: "sm",
          class: "sticky bottom-0",
          variant: "ghost",
          onClick: c[2] || (c[2] = (d) => u.$emit("onAddItem"))
        }, {
          default: v(() => [
            $(s(no)),
            he(" " + ae(r("common.addItem")), 1)
          ]),
          _: 1
        })
      ])) : me("", !0)
    ], 64));
  }
}), tw = {
  key: 0,
  class: "flex items-center gap-2 min-w-0"
}, nw = { class: "text-sm text-muted-foreground hidden truncate @xl:block" }, rw = { class: "text-sm truncate min-w-0 mr-2 text-muted-foreground" }, aw = { class: "hidden @2xl:block" }, ow = { class: "@2xl:hidden" }, iw = /* @__PURE__ */ D({
  __name: "PaginationCustom",
  props: /* @__PURE__ */ mt({
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
  emits: /* @__PURE__ */ mt(["update:page"], ["update:itemsPerPage"]),
  setup(e, { emit: t }) {
    const r = e, a = t, n = pe(r, "class"), o = We(n, a), i = ct(e, "itemsPerPage"), { t: l } = Tn();
    return (u, c) => (g(), R("div", null, [
      $(s(Mk), J(s(o), { class: "flex items-center gap-4 @xl:gap-8 @4xl:gap-12" }), {
        default: v(({ page: d, pageCount: f }) => [
          e.hideItemsPerPage ? me("", !0) : (g(), R("div", tw, [
            oe("span", nw, ae(s(l)("dataTable.rowsPerPage")), 1),
            $(Fi, {
              class: "!w-auto",
              options: e.pageSizeOptions.map((m) => ({ value: m, label: `${m}` })),
              "model-value": i.value,
              "onUpdate:modelValue": c[0] || (c[0] = (m) => i.value = m)
            }, null, 8, ["options", "model-value"])
          ])),
          $(s(Bk), null, {
            default: v(() => [
              oe("div", rw, [
                oe("span", aw, ae(s(l)("dataTable.pageOf", { page: d, pageCount: f })), 1),
                oe("span", ow, ae(d) + " / " + ae(f), 1)
              ]),
              $(s(Zk), null, {
                default: v(() => [
                  $(s(Lc), { class: "size-4" })
                ]),
                _: 1
              }),
              $(s(Kk), null, {
                default: v(() => [
                  $(s(Ni))
                ]),
                _: 1
              }),
              $(s(Gk), { variant: "outline" }, {
                default: v(() => [
                  $(s(Zn))
                ]),
                _: 1
              }),
              $(s(Wk), { variant: "outline" }, {
                default: v(() => [
                  $(s(Rc), { class: "size-4" })
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
}), lw = /* @__PURE__ */ D({
  __name: "Badge",
  props: {
    variant: {},
    class: {}
  },
  setup(e) {
    const t = tr(
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
    return (a, n) => (g(), R("div", {
      class: ge(s(Z)(s(t)({ variant: r.variant }), r.class))
    }, [
      C(a.$slots, "default")
    ], 2));
  }
}), Pa = /* @__PURE__ */ D({
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
    const r = e, a = t, n = pe(r, "class"), o = We(n, a);
    return (i, l) => (g(), A(s(eb), J({ "data-slot": "checkbox" }, s(o), {
      class: s(Z)(
        "peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        r.class
      )
    }), {
      default: v(() => [
        $(s(tb), {
          "data-slot": "checkbox-indicator",
          class: "flex items-center justify-center text-current transition-none"
        }, {
          default: v(() => [
            C(i.$slots, "default", {}, () => [
              $(s(to), { class: "size-3.5" })
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), sw = /* @__PURE__ */ D({
  __name: "Empty",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), R("div", {
      "data-slot": "empty",
      class: ge(s(Z)(
        "flex min-w-0 flex-1 flex-col items-center justify-center gap-6 text-balance rounded-lg border-dashed p-6 text-center md:p-12",
        t.class
      ))
    }, [
      C(r.$slots, "default")
    ], 2));
  }
}), uw = /* @__PURE__ */ D({
  __name: "EmptyContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), R("div", {
      "data-slot": "empty-content",
      class: ge(s(Z)(
        "flex w-full min-w-0 max-w-sm flex-col items-center gap-4 text-balance text-sm",
        t.class
      ))
    }, [
      C(r.$slots, "default")
    ], 2));
  }
}), cw = /* @__PURE__ */ D({
  __name: "EmptyDescription",
  props: {
    class: {}
  },
  setup(e) {
    return (t, r) => (g(), R("p", {
      "data-slot": "empty-description",
      class: ge(s(Z)(
        "text-muted-foreground [&>a:hover]:text-primary text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4",
        t.$attrs.class ?? ""
      ))
    }, [
      C(t.$slots, "default")
    ], 2));
  }
}), dw = /* @__PURE__ */ D({
  __name: "EmptyHeader",
  props: {
    class: {}
  },
  setup(e) {
    return (t, r) => (g(), R("div", {
      "data-slot": "empty-header",
      class: ge(s(Z)(
        "flex max-w-sm flex-col items-center gap-2 text-center",
        t.$attrs.class ?? ""
      ))
    }, [
      C(t.$slots, "default")
    ], 2));
  }
}), fw = ["data-variant"], mw = /* @__PURE__ */ D({
  __name: "EmptyMedia",
  props: {
    class: {},
    variant: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), R("div", {
      "data-slot": "empty-icon",
      "data-variant": e.variant,
      class: ge(s(Z)(s(Rd)({ variant: e.variant }), t.class))
    }, [
      C(r.$slots, "default")
    ], 10, fw));
  }
}), pw = ["data-variant"], vw = /* @__PURE__ */ D({
  __name: "EmptyTitle",
  props: {
    class: {},
    variant: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), R("div", {
      "data-slot": "empty-icon",
      "data-variant": e.variant,
      class: ge(s(Z)(s(Rd)({ variant: e.variant }), t.class))
    }, [
      C(r.$slots, "default")
    ], 10, pw));
  }
}), Rd = tr(
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
), Wn = un([]), Vd = (e, t) => Wn.value.push({ callback: e, id: t });
function Fd(e) {
  return Wn.value = typeof e == "string" ? Wn.value.filter(({ id: t }) => t !== e) : Wn.value.filter(({ callback: t }) => t !== e);
}
const Mi = (e) => {
  const t = e !== void 0 ? e : Wn.value.length - 1;
  return t >= 0 && !Wn.value[t].callback() && Mi(t - 1);
};
document.body.addEventListener("keydown", (e) => {
  e.key === "Escape" && Wn.value.length > 0 && (e.stopPropagation(), !e.target || !["INPUT"].includes(e.target?.tagName) ? Mi() : e.target.blur());
});
const Md = { add: Vd, remove: Fd, invokeLatest: Mi };
function gw(e, t) {
  Le(t, (r) => r ? Vd(e) : Fd(e), { immediate: !0 });
}
const Bd = Object.freeze({
  status: "aborted"
});
function T(e, t, r) {
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
const Zd = Symbol("zod_brand");
class Gn extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class lo extends Error {
  constructor(t) {
    super(`Encountered unidirectional transform during encode: ${t}`), this.name = "ZodEncodeError";
  }
}
const Va = {};
function Pt(e) {
  return e && Object.assign(Va, e), Va;
}
function hw(e) {
  return e;
}
function bw(e) {
  return e;
}
function _w(e) {
}
function yw(e) {
  throw new Error();
}
function $w(e) {
}
function Bi(e) {
  const t = Object.values(e).filter((a) => typeof a == "number");
  return Object.entries(e).filter(([a, n]) => t.indexOf(+a) === -1).map(([a, n]) => n);
}
function Y(e, t = "|") {
  return e.map((r) => ye(r)).join(t);
}
function Fa(e, t) {
  return typeof t == "bigint" ? t.toString() : t;
}
function Xr(e) {
  return {
    get value() {
      {
        const t = e();
        return Object.defineProperty(this, "value", { value: t }), t;
      }
    }
  };
}
function nr(e) {
  return e == null;
}
function so(e) {
  const t = e.startsWith("^") ? 1 : 0, r = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, r);
}
function Wd(e, t) {
  const r = (e.toString().split(".")[1] || "").length, a = t.toString();
  let n = (a.split(".")[1] || "").length;
  if (n === 0 && /\d?e-\d?/.test(a)) {
    const u = a.match(/\d?e-(\d?)/);
    u?.[1] && (n = Number.parseInt(u[1]));
  }
  const o = r > n ? r : n, i = Number.parseInt(e.toFixed(o).replace(".", "")), l = Number.parseInt(t.toFixed(o).replace(".", ""));
  return i % l / 10 ** o;
}
const Lu = Symbol("evaluating");
function Ae(e, t, r) {
  let a;
  Object.defineProperty(e, t, {
    get() {
      if (a !== Lu)
        return a === void 0 && (a = Lu, a = r()), a;
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
function kw(e) {
  return Object.create(Object.getPrototypeOf(e), Object.getOwnPropertyDescriptors(e));
}
function An(e, t, r) {
  Object.defineProperty(e, t, {
    value: r,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function Sn(...e) {
  const t = {};
  for (const r of e) {
    const a = Object.getOwnPropertyDescriptors(r);
    Object.assign(t, a);
  }
  return Object.defineProperties({}, t);
}
function ww(e) {
  return Sn(e._zod.def);
}
function Sw(e, t) {
  return t ? t.reduce((r, a) => r?.[a], e) : e;
}
function Iw(e) {
  const t = Object.keys(e), r = t.map((a) => e[a]);
  return Promise.all(r).then((a) => {
    const n = {};
    for (let o = 0; o < t.length; o++)
      n[t[o]] = a[o];
    return n;
  });
}
function xw(e = 10) {
  const t = "abcdefghijklmnopqrstuvwxyz";
  let r = "";
  for (let a = 0; a < e; a++)
    r += t[Math.floor(Math.random() * t.length)];
  return r;
}
function li(e) {
  return JSON.stringify(e);
}
function Gd(e) {
  return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const Zi = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function cr(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const Kd = Xr(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const e = Function;
    return new e(""), !0;
  } catch {
    return !1;
  }
});
function Yn(e) {
  if (cr(e) === !1)
    return !1;
  const t = e.constructor;
  if (t === void 0 || typeof t != "function")
    return !0;
  const r = t.prototype;
  return !(cr(r) === !1 || Object.prototype.hasOwnProperty.call(r, "isPrototypeOf") === !1);
}
function uo(e) {
  return Yn(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
function Ow(e) {
  let t = 0;
  for (const r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t++;
  return t;
}
const Nw = (e) => {
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
}, Ma = /* @__PURE__ */ new Set(["string", "number", "symbol"]), Hd = /* @__PURE__ */ new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"]);
function kn(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Kt(e, t, r) {
  const a = new e._zod.constr(t ?? e._zod.def);
  return (!t || r?.parent) && (a._zod.parent = e), a;
}
function V(e) {
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
function Ew(e) {
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
function ye(e) {
  return typeof e == "bigint" ? e.toString() + "n" : typeof e == "string" ? `"${e}"` : `${e}`;
}
function Jd(e) {
  return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
const qd = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
}, Yd = {
  int64: [/* @__PURE__ */ BigInt("-9223372036854775808"), /* @__PURE__ */ BigInt("9223372036854775807")],
  uint64: [/* @__PURE__ */ BigInt(0), /* @__PURE__ */ BigInt("18446744073709551615")]
};
function Xd(e, t) {
  const r = e._zod.def, a = Sn(e._zod.def, {
    get shape() {
      const n = {};
      for (const o in t) {
        if (!(o in r.shape))
          throw new Error(`Unrecognized key: "${o}"`);
        t[o] && (n[o] = r.shape[o]);
      }
      return An(this, "shape", n), n;
    },
    checks: []
  });
  return Kt(e, a);
}
function Qd(e, t) {
  const r = e._zod.def, a = Sn(e._zod.def, {
    get shape() {
      const n = { ...e._zod.def.shape };
      for (const o in t) {
        if (!(o in r.shape))
          throw new Error(`Unrecognized key: "${o}"`);
        t[o] && delete n[o];
      }
      return An(this, "shape", n), n;
    },
    checks: []
  });
  return Kt(e, a);
}
function ef(e, t) {
  if (!Yn(t))
    throw new Error("Invalid input to extend: expected a plain object");
  const r = e._zod.def.checks;
  if (r && r.length > 0)
    throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
  const n = Sn(e._zod.def, {
    get shape() {
      const o = { ...e._zod.def.shape, ...t };
      return An(this, "shape", o), o;
    },
    checks: []
  });
  return Kt(e, n);
}
function tf(e, t) {
  if (!Yn(t))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const r = {
    ...e._zod.def,
    get shape() {
      const a = { ...e._zod.def.shape, ...t };
      return An(this, "shape", a), a;
    },
    checks: e._zod.def.checks
  };
  return Kt(e, r);
}
function nf(e, t) {
  const r = Sn(e._zod.def, {
    get shape() {
      const a = { ...e._zod.def.shape, ...t._zod.def.shape };
      return An(this, "shape", a), a;
    },
    get catchall() {
      return t._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return Kt(e, r);
}
function rf(e, t, r) {
  const a = Sn(t._zod.def, {
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
      return An(this, "shape", o), o;
    },
    checks: []
  });
  return Kt(t, a);
}
function af(e, t, r) {
  const a = Sn(t._zod.def, {
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
      return An(this, "shape", o), o;
    },
    checks: []
  });
  return Kt(t, a);
}
function Fn(e, t = 0) {
  if (e.aborted === !0)
    return !0;
  for (let r = t; r < e.issues.length; r++)
    if (e.issues[r]?.continue !== !0)
      return !0;
  return !1;
}
function Yt(e, t) {
  return t.map((r) => {
    var a;
    return (a = r).path ?? (a.path = []), r.path.unshift(e), r;
  });
}
function Dr(e) {
  return typeof e == "string" ? e : e?.message;
}
function nn(e, t, r) {
  const a = { ...e, path: e.path ?? [] };
  if (!e.message) {
    const n = Dr(e.inst?._zod.def?.error?.(e)) ?? Dr(t?.error?.(e)) ?? Dr(r.customError?.(e)) ?? Dr(r.localeError?.(e)) ?? "Invalid input";
    a.message = n;
  }
  return delete a.inst, delete a.continue, t?.reportInput || delete a.input, a;
}
function co(e) {
  return e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof File ? "file" : "unknown";
}
function fo(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function dr(...e) {
  const [t, r, a] = e;
  return typeof t == "string" ? {
    message: t,
    code: "custom",
    input: r,
    inst: a
  } : { ...t };
}
function zw(e) {
  return Object.entries(e).filter(([t, r]) => Number.isNaN(Number.parseInt(t, 10))).map((t) => t[1]);
}
function of(e) {
  const t = atob(e), r = new Uint8Array(t.length);
  for (let a = 0; a < t.length; a++)
    r[a] = t.charCodeAt(a);
  return r;
}
function lf(e) {
  let t = "";
  for (let r = 0; r < e.length; r++)
    t += String.fromCharCode(e[r]);
  return btoa(t);
}
function Pw(e) {
  const t = e.replace(/-/g, "+").replace(/_/g, "/"), r = "=".repeat((4 - t.length % 4) % 4);
  return of(t + r);
}
function Tw(e) {
  return lf(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function Aw(e) {
  const t = e.replace(/^0x/, "");
  if (t.length % 2 !== 0)
    throw new Error("Invalid hex string length");
  const r = new Uint8Array(t.length / 2);
  for (let a = 0; a < t.length; a += 2)
    r[a / 2] = Number.parseInt(t.slice(a, a + 2), 16);
  return r;
}
function Dw(e) {
  return Array.from(e).map((t) => t.toString(16).padStart(2, "0")).join("");
}
class Cw {
  constructor(...t) {
  }
}
const sf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BIGINT_FORMAT_RANGES: Yd,
  Class: Cw,
  NUMBER_FORMAT_RANGES: qd,
  aborted: Fn,
  allowsEval: Kd,
  assert: $w,
  assertEqual: hw,
  assertIs: _w,
  assertNever: yw,
  assertNotEqual: bw,
  assignProp: An,
  base64ToUint8Array: of,
  base64urlToUint8Array: Pw,
  cached: Xr,
  captureStackTrace: Zi,
  cleanEnum: zw,
  cleanRegex: so,
  clone: Kt,
  cloneDef: ww,
  createTransparentProxy: Ew,
  defineLazy: Ae,
  esc: li,
  escapeRegex: kn,
  extend: ef,
  finalizeIssue: nn,
  floatSafeRemainder: Wd,
  getElementAtPath: Sw,
  getEnumValues: Bi,
  getLengthableOrigin: fo,
  getParsedType: Nw,
  getSizableOrigin: co,
  hexToUint8Array: Aw,
  isObject: cr,
  isPlainObject: Yn,
  issue: dr,
  joinValues: Y,
  jsonStringifyReplacer: Fa,
  merge: nf,
  mergeDefs: Sn,
  normalizeParams: V,
  nullish: nr,
  numKeys: Ow,
  objectClone: kw,
  omit: Qd,
  optionalKeys: Jd,
  partial: rf,
  pick: Xd,
  prefixIssues: Yt,
  primitiveTypes: Hd,
  promiseAllObject: Iw,
  propertyKeyTypes: Ma,
  randomString: xw,
  required: af,
  safeExtend: tf,
  shallowClone: uo,
  slugify: Gd,
  stringifyPrimitive: ye,
  uint8ArrayToBase64: lf,
  uint8ArrayToBase64url: Tw,
  uint8ArrayToHex: Dw,
  unwrapMessage: Dr
}, Symbol.toStringTag, { value: "Module" })), uf = (e, t) => {
  e.name = "$ZodError", Object.defineProperty(e, "_zod", {
    value: e._zod,
    enumerable: !1
  }), Object.defineProperty(e, "issues", {
    value: t,
    enumerable: !1
  }), e.message = JSON.stringify(t, Fa, 2), Object.defineProperty(e, "toString", {
    value: () => e.message,
    enumerable: !1
  });
}, Wi = T("$ZodError", uf), Bt = T("$ZodError", uf, { Parent: Error });
function Gi(e, t = (r) => r.message) {
  const r = {}, a = [];
  for (const n of e.issues)
    n.path.length > 0 ? (r[n.path[0]] = r[n.path[0]] || [], r[n.path[0]].push(t(n))) : a.push(t(n));
  return { formErrors: a, fieldErrors: r };
}
function Ki(e, t = (r) => r.message) {
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
function cf(e, t = (r) => r.message) {
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
function df(e) {
  const t = [], r = e.map((a) => typeof a == "object" ? a.key : a);
  for (const a of r)
    typeof a == "number" ? t.push(`[${a}]`) : typeof a == "symbol" ? t.push(`[${JSON.stringify(String(a))}]`) : /[^\w$]/.test(a) ? t.push(`[${JSON.stringify(a)}]`) : (t.length && t.push("."), t.push(a));
  return t.join("");
}
function ff(e) {
  const t = [], r = [...e.issues].sort((a, n) => (a.path ?? []).length - (n.path ?? []).length);
  for (const a of r)
    t.push(`✖ ${a.message}`), a.path?.length && t.push(`  → at ${df(a.path)}`);
  return t.join(`
`);
}
const Qr = (e) => (t, r, a, n) => {
  const o = a ? Object.assign(a, { async: !1 }) : { async: !1 }, i = t._zod.run({ value: r, issues: [] }, o);
  if (i instanceof Promise)
    throw new Gn();
  if (i.issues.length) {
    const l = new (n?.Err ?? e)(i.issues.map((u) => nn(u, o, Pt())));
    throw Zi(l, n?.callee), l;
  }
  return i.value;
}, si = /* @__PURE__ */ Qr(Bt), ea = (e) => async (t, r, a, n) => {
  const o = a ? Object.assign(a, { async: !0 }) : { async: !0 };
  let i = t._zod.run({ value: r, issues: [] }, o);
  if (i instanceof Promise && (i = await i), i.issues.length) {
    const l = new (n?.Err ?? e)(i.issues.map((u) => nn(u, o, Pt())));
    throw Zi(l, n?.callee), l;
  }
  return i.value;
}, ui = /* @__PURE__ */ ea(Bt), ta = (e) => (t, r, a) => {
  const n = a ? { ...a, async: !1 } : { async: !1 }, o = t._zod.run({ value: r, issues: [] }, n);
  if (o instanceof Promise)
    throw new Gn();
  return o.issues.length ? {
    success: !1,
    error: new (e ?? Wi)(o.issues.map((i) => nn(i, n, Pt())))
  } : { success: !0, data: o.value };
}, mf = /* @__PURE__ */ ta(Bt), na = (e) => async (t, r, a) => {
  const n = a ? Object.assign(a, { async: !0 }) : { async: !0 };
  let o = t._zod.run({ value: r, issues: [] }, n);
  return o instanceof Promise && (o = await o), o.issues.length ? {
    success: !1,
    error: new e(o.issues.map((i) => nn(i, n, Pt())))
  } : { success: !0, data: o.value };
}, pf = /* @__PURE__ */ na(Bt), Hi = (e) => (t, r, a) => {
  const n = a ? Object.assign(a, { direction: "backward" }) : { direction: "backward" };
  return Qr(e)(t, r, n);
}, jw = /* @__PURE__ */ Hi(Bt), Ji = (e) => (t, r, a) => Qr(e)(t, r, a), Uw = /* @__PURE__ */ Ji(Bt), qi = (e) => async (t, r, a) => {
  const n = a ? Object.assign(a, { direction: "backward" }) : { direction: "backward" };
  return ea(e)(t, r, n);
}, Lw = /* @__PURE__ */ qi(Bt), Yi = (e) => async (t, r, a) => ea(e)(t, r, a), Rw = /* @__PURE__ */ Yi(Bt), Xi = (e) => (t, r, a) => {
  const n = a ? Object.assign(a, { direction: "backward" }) : { direction: "backward" };
  return ta(e)(t, r, n);
}, Vw = /* @__PURE__ */ Xi(Bt), Qi = (e) => (t, r, a) => ta(e)(t, r, a), Fw = /* @__PURE__ */ Qi(Bt), el = (e) => async (t, r, a) => {
  const n = a ? Object.assign(a, { direction: "backward" }) : { direction: "backward" };
  return na(e)(t, r, n);
}, Mw = /* @__PURE__ */ el(Bt), tl = (e) => async (t, r, a) => na(e)(t, r, a), Bw = /* @__PURE__ */ tl(Bt), vf = /^[cC][^\s-]{8,}$/, gf = /^[0-9a-z]+$/, hf = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, bf = /^[0-9a-vA-V]{20}$/, _f = /^[A-Za-z0-9]{27}$/, yf = /^[a-zA-Z0-9_-]{21}$/, $f = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Zw = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, kf = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, fr = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Ww = /* @__PURE__ */ fr(4), Gw = /* @__PURE__ */ fr(6), Kw = /* @__PURE__ */ fr(7), wf = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Hw = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, Jw = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, Sf = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u, qw = Sf, Yw = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, Xw = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function If() {
  return new RegExp(Xw, "u");
}
const xf = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Of = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Nf = (e) => {
  const t = kn(e ?? ":");
  return new RegExp(`^(?:[0-9A-F]{2}${t}){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}${t}){5}[0-9a-f]{2}$`);
}, Ef = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, zf = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Pf = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, nl = /^[A-Za-z0-9_-]*$/, Tf = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, Af = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/, Df = /^\+(?:[0-9]){6,14}[0-9]$/, Cf = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", jf = /* @__PURE__ */ new RegExp(`^${Cf}$`);
function Uf(e) {
  const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function Lf(e) {
  return new RegExp(`^${Uf(e)}$`);
}
function Rf(e) {
  const t = Uf({ precision: e.precision }), r = ["Z"];
  e.local && r.push(""), e.offset && r.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const a = `${t}(?:${r.join("|")})`;
  return new RegExp(`^${Cf}T(?:${a})$`);
}
const Vf = (e) => {
  const t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${t}$`);
}, Ff = /^-?\d+n?$/, Mf = /^-?\d+$/, Bf = /^-?\d+(?:\.\d+)?/, Zf = /^(?:true|false)$/i, Wf = /^null$/i, Gf = /^undefined$/i, Kf = /^[^A-Z]*$/, Hf = /^[^a-z]*$/, Jf = /^[0-9a-fA-F]*$/;
function ra(e, t) {
  return new RegExp(`^[A-Za-z0-9+/]{${e}}${t}$`);
}
function aa(e) {
  return new RegExp(`^[A-Za-z0-9_-]{${e}}$`);
}
const Qw = /^[0-9a-fA-F]{32}$/, e1 = /* @__PURE__ */ ra(22, "=="), t1 = /* @__PURE__ */ aa(22), n1 = /^[0-9a-fA-F]{40}$/, r1 = /* @__PURE__ */ ra(27, "="), a1 = /* @__PURE__ */ aa(27), o1 = /^[0-9a-fA-F]{64}$/, i1 = /* @__PURE__ */ ra(43, "="), l1 = /* @__PURE__ */ aa(43), s1 = /^[0-9a-fA-F]{96}$/, u1 = /* @__PURE__ */ ra(64, ""), c1 = /* @__PURE__ */ aa(64), d1 = /^[0-9a-fA-F]{128}$/, f1 = /* @__PURE__ */ ra(86, "=="), m1 = /* @__PURE__ */ aa(86), rl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64: Pf,
  base64url: nl,
  bigint: Ff,
  boolean: Zf,
  browserEmail: Yw,
  cidrv4: Ef,
  cidrv6: zf,
  cuid: vf,
  cuid2: gf,
  date: jf,
  datetime: Rf,
  domain: Af,
  duration: $f,
  e164: Df,
  email: wf,
  emoji: If,
  extendedDuration: Zw,
  guid: kf,
  hex: Jf,
  hostname: Tf,
  html5Email: Hw,
  idnEmail: qw,
  integer: Mf,
  ipv4: xf,
  ipv6: Of,
  ksuid: _f,
  lowercase: Kf,
  mac: Nf,
  md5_base64: e1,
  md5_base64url: t1,
  md5_hex: Qw,
  nanoid: yf,
  null: Wf,
  number: Bf,
  rfc5322Email: Jw,
  sha1_base64: r1,
  sha1_base64url: a1,
  sha1_hex: n1,
  sha256_base64: i1,
  sha256_base64url: l1,
  sha256_hex: o1,
  sha384_base64: u1,
  sha384_base64url: c1,
  sha384_hex: s1,
  sha512_base64: f1,
  sha512_base64url: m1,
  sha512_hex: d1,
  string: Vf,
  time: Lf,
  ulid: hf,
  undefined: Gf,
  unicodeEmail: Sf,
  uppercase: Hf,
  uuid: fr,
  uuid4: Ww,
  uuid6: Gw,
  uuid7: Kw,
  xid: bf
}, Symbol.toStringTag, { value: "Module" })), Xe = /* @__PURE__ */ T("$ZodCheck", (e, t) => {
  var r;
  e._zod ?? (e._zod = {}), e._zod.def = t, (r = e._zod).onattach ?? (r.onattach = []);
}), qf = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, al = /* @__PURE__ */ T("$ZodCheckLessThan", (e, t) => {
  Xe.init(e, t);
  const r = qf[typeof t.value];
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
}), ol = /* @__PURE__ */ T("$ZodCheckGreaterThan", (e, t) => {
  Xe.init(e, t);
  const r = qf[typeof t.value];
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
}), Yf = /* @__PURE__ */ T("$ZodCheckMultipleOf", (e, t) => {
  Xe.init(e, t), e._zod.onattach.push((r) => {
    var a;
    (a = r._zod.bag).multipleOf ?? (a.multipleOf = t.value);
  }), e._zod.check = (r) => {
    if (typeof r.value != typeof t.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof r.value == "bigint" ? r.value % t.value === BigInt(0) : Wd(r.value, t.value) === 0) || r.issues.push({
      origin: typeof r.value,
      code: "not_multiple_of",
      divisor: t.value,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Xf = /* @__PURE__ */ T("$ZodCheckNumberFormat", (e, t) => {
  Xe.init(e, t), t.format = t.format || "float64";
  const r = t.format?.includes("int"), a = r ? "int" : "number", [n, o] = qd[t.format];
  e._zod.onattach.push((i) => {
    const l = i._zod.bag;
    l.format = t.format, l.minimum = n, l.maximum = o, r && (l.pattern = Mf);
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
}), Qf = /* @__PURE__ */ T("$ZodCheckBigIntFormat", (e, t) => {
  Xe.init(e, t);
  const [r, a] = Yd[t.format];
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
}), em = /* @__PURE__ */ T("$ZodCheckMaxSize", (e, t) => {
  var r;
  Xe.init(e, t), (r = e._zod.def).when ?? (r.when = (a) => {
    const n = a.value;
    return !nr(n) && n.size !== void 0;
  }), e._zod.onattach.push((a) => {
    const n = a._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    t.maximum < n && (a._zod.bag.maximum = t.maximum);
  }), e._zod.check = (a) => {
    const n = a.value;
    n.size <= t.maximum || a.issues.push({
      origin: co(n),
      code: "too_big",
      maximum: t.maximum,
      inclusive: !0,
      input: n,
      inst: e,
      continue: !t.abort
    });
  };
}), tm = /* @__PURE__ */ T("$ZodCheckMinSize", (e, t) => {
  var r;
  Xe.init(e, t), (r = e._zod.def).when ?? (r.when = (a) => {
    const n = a.value;
    return !nr(n) && n.size !== void 0;
  }), e._zod.onattach.push((a) => {
    const n = a._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    t.minimum > n && (a._zod.bag.minimum = t.minimum);
  }), e._zod.check = (a) => {
    const n = a.value;
    n.size >= t.minimum || a.issues.push({
      origin: co(n),
      code: "too_small",
      minimum: t.minimum,
      inclusive: !0,
      input: n,
      inst: e,
      continue: !t.abort
    });
  };
}), nm = /* @__PURE__ */ T("$ZodCheckSizeEquals", (e, t) => {
  var r;
  Xe.init(e, t), (r = e._zod.def).when ?? (r.when = (a) => {
    const n = a.value;
    return !nr(n) && n.size !== void 0;
  }), e._zod.onattach.push((a) => {
    const n = a._zod.bag;
    n.minimum = t.size, n.maximum = t.size, n.size = t.size;
  }), e._zod.check = (a) => {
    const n = a.value, o = n.size;
    if (o === t.size)
      return;
    const i = o > t.size;
    a.issues.push({
      origin: co(n),
      ...i ? { code: "too_big", maximum: t.size } : { code: "too_small", minimum: t.size },
      inclusive: !0,
      exact: !0,
      input: a.value,
      inst: e,
      continue: !t.abort
    });
  };
}), rm = /* @__PURE__ */ T("$ZodCheckMaxLength", (e, t) => {
  var r;
  Xe.init(e, t), (r = e._zod.def).when ?? (r.when = (a) => {
    const n = a.value;
    return !nr(n) && n.length !== void 0;
  }), e._zod.onattach.push((a) => {
    const n = a._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    t.maximum < n && (a._zod.bag.maximum = t.maximum);
  }), e._zod.check = (a) => {
    const n = a.value;
    if (n.length <= t.maximum)
      return;
    const i = fo(n);
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
}), am = /* @__PURE__ */ T("$ZodCheckMinLength", (e, t) => {
  var r;
  Xe.init(e, t), (r = e._zod.def).when ?? (r.when = (a) => {
    const n = a.value;
    return !nr(n) && n.length !== void 0;
  }), e._zod.onattach.push((a) => {
    const n = a._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    t.minimum > n && (a._zod.bag.minimum = t.minimum);
  }), e._zod.check = (a) => {
    const n = a.value;
    if (n.length >= t.minimum)
      return;
    const i = fo(n);
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
}), om = /* @__PURE__ */ T("$ZodCheckLengthEquals", (e, t) => {
  var r;
  Xe.init(e, t), (r = e._zod.def).when ?? (r.when = (a) => {
    const n = a.value;
    return !nr(n) && n.length !== void 0;
  }), e._zod.onattach.push((a) => {
    const n = a._zod.bag;
    n.minimum = t.length, n.maximum = t.length, n.length = t.length;
  }), e._zod.check = (a) => {
    const n = a.value, o = n.length;
    if (o === t.length)
      return;
    const i = fo(n), l = o > t.length;
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
}), oa = /* @__PURE__ */ T("$ZodCheckStringFormat", (e, t) => {
  var r, a;
  Xe.init(e, t), e._zod.onattach.push((n) => {
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
}), im = /* @__PURE__ */ T("$ZodCheckRegex", (e, t) => {
  oa.init(e, t), e._zod.check = (r) => {
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
}), lm = /* @__PURE__ */ T("$ZodCheckLowerCase", (e, t) => {
  t.pattern ?? (t.pattern = Kf), oa.init(e, t);
}), sm = /* @__PURE__ */ T("$ZodCheckUpperCase", (e, t) => {
  t.pattern ?? (t.pattern = Hf), oa.init(e, t);
}), um = /* @__PURE__ */ T("$ZodCheckIncludes", (e, t) => {
  Xe.init(e, t);
  const r = kn(t.includes), a = new RegExp(typeof t.position == "number" ? `^.{${t.position}}${r}` : r);
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
}), cm = /* @__PURE__ */ T("$ZodCheckStartsWith", (e, t) => {
  Xe.init(e, t);
  const r = new RegExp(`^${kn(t.prefix)}.*`);
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
}), dm = /* @__PURE__ */ T("$ZodCheckEndsWith", (e, t) => {
  Xe.init(e, t);
  const r = new RegExp(`.*${kn(t.suffix)}$`);
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
function Ru(e, t, r) {
  e.issues.length && t.issues.push(...Yt(r, e.issues));
}
const fm = /* @__PURE__ */ T("$ZodCheckProperty", (e, t) => {
  Xe.init(e, t), e._zod.check = (r) => {
    const a = t.schema._zod.run({
      value: r.value[t.property],
      issues: []
    }, {});
    if (a instanceof Promise)
      return a.then((n) => Ru(n, r, t.property));
    Ru(a, r, t.property);
  };
}), mm = /* @__PURE__ */ T("$ZodCheckMimeType", (e, t) => {
  Xe.init(e, t);
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
}), pm = /* @__PURE__ */ T("$ZodCheckOverwrite", (e, t) => {
  Xe.init(e, t), e._zod.check = (r) => {
    r.value = t.tx(r.value);
  };
});
class vm {
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
const gm = {
  major: 4,
  minor: 1,
  patch: 13
}, Se = /* @__PURE__ */ T("$ZodType", (e, t) => {
  var r;
  e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = gm;
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
      let c = Fn(i), d;
      for (const f of l) {
        if (f._zod.def.when) {
          if (!f._zod.def.when(i))
            continue;
        } else if (c)
          continue;
        const m = i.issues.length, p = f._zod.check(i);
        if (p instanceof Promise && u?.async === !1)
          throw new Gn();
        if (d || p instanceof Promise)
          d = (d ?? Promise.resolve()).then(async () => {
            await p, i.issues.length !== m && (c || (c = Fn(i, m)));
          });
        else {
          if (i.issues.length === m)
            continue;
          c || (c = Fn(i, m));
        }
      }
      return d ? d.then(() => i) : i;
    }, o = (i, l, u) => {
      if (Fn(i))
        return i.aborted = !0, i;
      const c = n(l, a, u);
      if (c instanceof Promise) {
        if (u.async === !1)
          throw new Gn();
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
          throw new Gn();
        return u.then((c) => n(c, a, l));
      }
      return n(u, a, l);
    };
  }
  e["~standard"] = {
    validate: (n) => {
      try {
        const o = mf(e, n);
        return o.success ? { value: o.data } : { issues: o.error?.issues };
      } catch {
        return pf(e, n).then((i) => i.success ? { value: i.data } : { issues: i.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), ia = /* @__PURE__ */ T("$ZodString", (e, t) => {
  Se.init(e, t), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? Vf(e._zod.bag), e._zod.parse = (r, a) => {
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
}), Ve = /* @__PURE__ */ T("$ZodStringFormat", (e, t) => {
  oa.init(e, t), ia.init(e, t);
}), hm = /* @__PURE__ */ T("$ZodGUID", (e, t) => {
  t.pattern ?? (t.pattern = kf), Ve.init(e, t);
}), bm = /* @__PURE__ */ T("$ZodUUID", (e, t) => {
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
    t.pattern ?? (t.pattern = fr(a));
  } else
    t.pattern ?? (t.pattern = fr());
  Ve.init(e, t);
}), _m = /* @__PURE__ */ T("$ZodEmail", (e, t) => {
  t.pattern ?? (t.pattern = wf), Ve.init(e, t);
}), ym = /* @__PURE__ */ T("$ZodURL", (e, t) => {
  Ve.init(e, t), e._zod.check = (r) => {
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
}), $m = /* @__PURE__ */ T("$ZodEmoji", (e, t) => {
  t.pattern ?? (t.pattern = If()), Ve.init(e, t);
}), km = /* @__PURE__ */ T("$ZodNanoID", (e, t) => {
  t.pattern ?? (t.pattern = yf), Ve.init(e, t);
}), wm = /* @__PURE__ */ T("$ZodCUID", (e, t) => {
  t.pattern ?? (t.pattern = vf), Ve.init(e, t);
}), Sm = /* @__PURE__ */ T("$ZodCUID2", (e, t) => {
  t.pattern ?? (t.pattern = gf), Ve.init(e, t);
}), Im = /* @__PURE__ */ T("$ZodULID", (e, t) => {
  t.pattern ?? (t.pattern = hf), Ve.init(e, t);
}), xm = /* @__PURE__ */ T("$ZodXID", (e, t) => {
  t.pattern ?? (t.pattern = bf), Ve.init(e, t);
}), Om = /* @__PURE__ */ T("$ZodKSUID", (e, t) => {
  t.pattern ?? (t.pattern = _f), Ve.init(e, t);
}), Nm = /* @__PURE__ */ T("$ZodISODateTime", (e, t) => {
  t.pattern ?? (t.pattern = Rf(t)), Ve.init(e, t);
}), Em = /* @__PURE__ */ T("$ZodISODate", (e, t) => {
  t.pattern ?? (t.pattern = jf), Ve.init(e, t);
}), zm = /* @__PURE__ */ T("$ZodISOTime", (e, t) => {
  t.pattern ?? (t.pattern = Lf(t)), Ve.init(e, t);
}), Pm = /* @__PURE__ */ T("$ZodISODuration", (e, t) => {
  t.pattern ?? (t.pattern = $f), Ve.init(e, t);
}), Tm = /* @__PURE__ */ T("$ZodIPv4", (e, t) => {
  t.pattern ?? (t.pattern = xf), Ve.init(e, t), e._zod.bag.format = "ipv4";
}), Am = /* @__PURE__ */ T("$ZodIPv6", (e, t) => {
  t.pattern ?? (t.pattern = Of), Ve.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (r) => {
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
}), Dm = /* @__PURE__ */ T("$ZodMAC", (e, t) => {
  t.pattern ?? (t.pattern = Nf(t.delimiter)), Ve.init(e, t), e._zod.bag.format = "mac";
}), Cm = /* @__PURE__ */ T("$ZodCIDRv4", (e, t) => {
  t.pattern ?? (t.pattern = Ef), Ve.init(e, t);
}), jm = /* @__PURE__ */ T("$ZodCIDRv6", (e, t) => {
  t.pattern ?? (t.pattern = zf), Ve.init(e, t), e._zod.check = (r) => {
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
function il(e) {
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
const Um = /* @__PURE__ */ T("$ZodBase64", (e, t) => {
  t.pattern ?? (t.pattern = Pf), Ve.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (r) => {
    il(r.value) || r.issues.push({
      code: "invalid_format",
      format: "base64",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
});
function Lm(e) {
  if (!nl.test(e))
    return !1;
  const t = e.replace(/[-_]/g, (a) => a === "-" ? "+" : "/"), r = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return il(r);
}
const Rm = /* @__PURE__ */ T("$ZodBase64URL", (e, t) => {
  t.pattern ?? (t.pattern = nl), Ve.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (r) => {
    Lm(r.value) || r.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Vm = /* @__PURE__ */ T("$ZodE164", (e, t) => {
  t.pattern ?? (t.pattern = Df), Ve.init(e, t);
});
function Fm(e, t = null) {
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
const Mm = /* @__PURE__ */ T("$ZodJWT", (e, t) => {
  Ve.init(e, t), e._zod.check = (r) => {
    Fm(r.value, t.alg) || r.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Bm = /* @__PURE__ */ T("$ZodCustomStringFormat", (e, t) => {
  Ve.init(e, t), e._zod.check = (r) => {
    t.fn(r.value) || r.issues.push({
      code: "invalid_format",
      format: t.format,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), ll = /* @__PURE__ */ T("$ZodNumber", (e, t) => {
  Se.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? Bf, e._zod.parse = (r, a) => {
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
}), Zm = /* @__PURE__ */ T("$ZodNumberFormat", (e, t) => {
  Xf.init(e, t), ll.init(e, t);
}), sl = /* @__PURE__ */ T("$ZodBoolean", (e, t) => {
  Se.init(e, t), e._zod.pattern = Zf, e._zod.parse = (r, a) => {
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
}), ul = /* @__PURE__ */ T("$ZodBigInt", (e, t) => {
  Se.init(e, t), e._zod.pattern = Ff, e._zod.parse = (r, a) => {
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
}), Wm = /* @__PURE__ */ T("$ZodBigIntFormat", (e, t) => {
  Qf.init(e, t), ul.init(e, t);
}), Gm = /* @__PURE__ */ T("$ZodSymbol", (e, t) => {
  Se.init(e, t), e._zod.parse = (r, a) => {
    const n = r.value;
    return typeof n == "symbol" || r.issues.push({
      expected: "symbol",
      code: "invalid_type",
      input: n,
      inst: e
    }), r;
  };
}), Km = /* @__PURE__ */ T("$ZodUndefined", (e, t) => {
  Se.init(e, t), e._zod.pattern = Gf, e._zod.values = /* @__PURE__ */ new Set([void 0]), e._zod.optin = "optional", e._zod.optout = "optional", e._zod.parse = (r, a) => {
    const n = r.value;
    return typeof n > "u" || r.issues.push({
      expected: "undefined",
      code: "invalid_type",
      input: n,
      inst: e
    }), r;
  };
}), Hm = /* @__PURE__ */ T("$ZodNull", (e, t) => {
  Se.init(e, t), e._zod.pattern = Wf, e._zod.values = /* @__PURE__ */ new Set([null]), e._zod.parse = (r, a) => {
    const n = r.value;
    return n === null || r.issues.push({
      expected: "null",
      code: "invalid_type",
      input: n,
      inst: e
    }), r;
  };
}), Jm = /* @__PURE__ */ T("$ZodAny", (e, t) => {
  Se.init(e, t), e._zod.parse = (r) => r;
}), qm = /* @__PURE__ */ T("$ZodUnknown", (e, t) => {
  Se.init(e, t), e._zod.parse = (r) => r;
}), Ym = /* @__PURE__ */ T("$ZodNever", (e, t) => {
  Se.init(e, t), e._zod.parse = (r, a) => (r.issues.push({
    expected: "never",
    code: "invalid_type",
    input: r.value,
    inst: e
  }), r);
}), Xm = /* @__PURE__ */ T("$ZodVoid", (e, t) => {
  Se.init(e, t), e._zod.parse = (r, a) => {
    const n = r.value;
    return typeof n > "u" || r.issues.push({
      expected: "void",
      code: "invalid_type",
      input: n,
      inst: e
    }), r;
  };
}), Qm = /* @__PURE__ */ T("$ZodDate", (e, t) => {
  Se.init(e, t), e._zod.parse = (r, a) => {
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
function Vu(e, t, r) {
  e.issues.length && t.issues.push(...Yt(r, e.issues)), t.value[r] = e.value;
}
const ep = /* @__PURE__ */ T("$ZodArray", (e, t) => {
  Se.init(e, t), e._zod.parse = (r, a) => {
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
      u instanceof Promise ? o.push(u.then((c) => Vu(c, r, i))) : Vu(u, r, i);
    }
    return o.length ? Promise.all(o).then(() => r) : r;
  };
});
function Ba(e, t, r, a) {
  e.issues.length && t.issues.push(...Yt(r, e.issues)), e.value === void 0 ? r in a && (t.value[r] = void 0) : t.value[r] = e.value;
}
function tp(e) {
  const t = Object.keys(e.shape);
  for (const a of t)
    if (!e.shape?.[a]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${a}": expected a Zod schema`);
  const r = Jd(e.shape);
  return {
    ...e,
    keys: t,
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(r)
  };
}
function np(e, t, r, a, n, o) {
  const i = [], l = n.keySet, u = n.catchall._zod, c = u.def.type;
  for (const d in t) {
    if (l.has(d))
      continue;
    if (c === "never") {
      i.push(d);
      continue;
    }
    const f = u.run({ value: t[d], issues: [] }, a);
    f instanceof Promise ? e.push(f.then((m) => Ba(m, r, d, t))) : Ba(f, r, d, t);
  }
  return i.length && r.issues.push({
    code: "unrecognized_keys",
    keys: i,
    input: t,
    inst: o
  }), e.length ? Promise.all(e).then(() => r) : r;
}
const rp = /* @__PURE__ */ T("$ZodObject", (e, t) => {
  if (Se.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
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
  const a = Xr(() => tp(t));
  Ae(e._zod, "propValues", () => {
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
  const n = cr, o = t.catchall;
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
      const h = f[m]._zod.run({ value: c[m], issues: [] }, u);
      h instanceof Promise ? d.push(h.then((_) => Ba(_, l, m, c))) : Ba(h, l, m, c);
    }
    return o ? np(d, c, l, u, a.value, e) : d.length ? Promise.all(d).then(() => l) : l;
  };
}), ap = /* @__PURE__ */ T("$ZodObjectJIT", (e, t) => {
  rp.init(e, t);
  const r = e._zod.parse, a = Xr(() => tp(t)), n = (m) => {
    const p = new vm(["shape", "payload", "ctx"]), h = a.value, _ = (O) => {
      const I = li(O);
      return `shape[${I}]._zod.run({ value: input[${I}], issues: [] }, ctx)`;
    };
    p.write("const input = payload.value;");
    const S = /* @__PURE__ */ Object.create(null);
    let k = 0;
    for (const O of h.keys)
      S[O] = `key_${k++}`;
    p.write("const newResult = {};");
    for (const O of h.keys) {
      const I = S[O], x = li(O);
      p.write(`const ${I} = ${_(O)};`), p.write(`
        if (${I}.issues.length) {
          payload.issues = payload.issues.concat(${I}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${x}, ...iss.path] : [${x}]
          })));
        }
        
        
        if (${I}.value === undefined) {
          if (${x} in input) {
            newResult[${x}] = undefined;
          }
        } else {
          newResult[${x}] = ${I}.value;
        }
        
      `);
    }
    p.write("payload.value = newResult;"), p.write("return payload;");
    const y = p.compile();
    return (O, I) => y(m, O, I);
  };
  let o;
  const i = cr, l = !Va.jitless, c = l && Kd.value, d = t.catchall;
  let f;
  e._zod.parse = (m, p) => {
    f ?? (f = a.value);
    const h = m.value;
    return i(h) ? l && c && p?.async === !1 && p.jitless !== !0 ? (o || (o = n(t.shape)), m = o(m, p), d ? np([], h, m, p, f, e) : m) : r(m, p) : (m.issues.push({
      expected: "object",
      code: "invalid_type",
      input: h,
      inst: e
    }), m);
  };
});
function Fu(e, t, r, a) {
  for (const o of e)
    if (o.issues.length === 0)
      return t.value = o.value, t;
  const n = e.filter((o) => !Fn(o));
  return n.length === 1 ? (t.value = n[0].value, n[0]) : (t.issues.push({
    code: "invalid_union",
    input: t.value,
    inst: r,
    errors: e.map((o) => o.issues.map((i) => nn(i, a, Pt())))
  }), t);
}
const cl = /* @__PURE__ */ T("$ZodUnion", (e, t) => {
  Se.init(e, t), Ae(e._zod, "optin", () => t.options.some((n) => n._zod.optin === "optional") ? "optional" : void 0), Ae(e._zod, "optout", () => t.options.some((n) => n._zod.optout === "optional") ? "optional" : void 0), Ae(e._zod, "values", () => {
    if (t.options.every((n) => n._zod.values))
      return new Set(t.options.flatMap((n) => Array.from(n._zod.values)));
  }), Ae(e._zod, "pattern", () => {
    if (t.options.every((n) => n._zod.pattern)) {
      const n = t.options.map((o) => o._zod.pattern);
      return new RegExp(`^(${n.map((o) => so(o.source)).join("|")})$`);
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
    return i ? Promise.all(l).then((u) => Fu(u, n, e, o)) : Fu(l, n, e, o);
  };
}), op = /* @__PURE__ */ T("$ZodDiscriminatedUnion", (e, t) => {
  cl.init(e, t);
  const r = e._zod.parse;
  Ae(e._zod, "propValues", () => {
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
  const a = Xr(() => {
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
    if (!cr(i))
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
}), ip = /* @__PURE__ */ T("$ZodIntersection", (e, t) => {
  Se.init(e, t), e._zod.parse = (r, a) => {
    const n = r.value, o = t.left._zod.run({ value: n, issues: [] }, a), i = t.right._zod.run({ value: n, issues: [] }, a);
    return o instanceof Promise || i instanceof Promise ? Promise.all([o, i]).then(([u, c]) => Mu(r, u, c)) : Mu(r, o, i);
  };
});
function ci(e, t) {
  if (e === t)
    return { valid: !0, data: e };
  if (e instanceof Date && t instanceof Date && +e == +t)
    return { valid: !0, data: e };
  if (Yn(e) && Yn(t)) {
    const r = Object.keys(t), a = Object.keys(e).filter((o) => r.indexOf(o) !== -1), n = { ...e, ...t };
    for (const o of a) {
      const i = ci(e[o], t[o]);
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
      const n = e[a], o = t[a], i = ci(n, o);
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
function Mu(e, t, r) {
  if (t.issues.length && e.issues.push(...t.issues), r.issues.length && e.issues.push(...r.issues), Fn(e))
    return e;
  const a = ci(t.value, r.value);
  if (!a.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(a.mergeErrorPath)}`);
  return e.value = a.data, e;
}
const dl = /* @__PURE__ */ T("$ZodTuple", (e, t) => {
  Se.init(e, t);
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
      f instanceof Promise ? i.push(f.then((m) => $a(m, a, c))) : $a(f, a, c);
    }
    if (t.rest) {
      const d = o.slice(r.length);
      for (const f of d) {
        c++;
        const m = t.rest._zod.run({
          value: f,
          issues: []
        }, n);
        m instanceof Promise ? i.push(m.then((p) => $a(p, a, c))) : $a(m, a, c);
      }
    }
    return i.length ? Promise.all(i).then(() => a) : a;
  };
});
function $a(e, t, r) {
  e.issues.length && t.issues.push(...Yt(r, e.issues)), t.value[r] = e.value;
}
const lp = /* @__PURE__ */ T("$ZodRecord", (e, t) => {
  Se.init(e, t), e._zod.parse = (r, a) => {
    const n = r.value;
    if (!Yn(n))
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
            f.issues.length && r.issues.push(...Yt(c, f.issues)), r.value[c] = f.value;
          })) : (d.issues.length && r.issues.push(...Yt(c, d.issues)), r.value[c] = d.value);
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
            issues: u.issues.map((d) => nn(d, a, Pt())),
            input: l,
            path: [l],
            inst: e
          }), r.value[u.value] = u.value;
          continue;
        }
        const c = t.valueType._zod.run({ value: n[l], issues: [] }, a);
        c instanceof Promise ? o.push(c.then((d) => {
          d.issues.length && r.issues.push(...Yt(l, d.issues)), r.value[u.value] = d.value;
        })) : (c.issues.length && r.issues.push(...Yt(l, c.issues)), r.value[u.value] = c.value);
      }
    }
    return o.length ? Promise.all(o).then(() => r) : r;
  };
}), sp = /* @__PURE__ */ T("$ZodMap", (e, t) => {
  Se.init(e, t), e._zod.parse = (r, a) => {
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
        Bu(d, f, r, i, n, e, a);
      })) : Bu(u, c, r, i, n, e, a);
    }
    return o.length ? Promise.all(o).then(() => r) : r;
  };
});
function Bu(e, t, r, a, n, o, i) {
  e.issues.length && (Ma.has(typeof a) ? r.issues.push(...Yt(a, e.issues)) : r.issues.push({
    code: "invalid_key",
    origin: "map",
    input: n,
    inst: o,
    issues: e.issues.map((l) => nn(l, i, Pt()))
  })), t.issues.length && (Ma.has(typeof a) ? r.issues.push(...Yt(a, t.issues)) : r.issues.push({
    origin: "map",
    code: "invalid_element",
    input: n,
    inst: o,
    key: a,
    issues: t.issues.map((l) => nn(l, i, Pt()))
  })), r.value.set(e.value, t.value);
}
const up = /* @__PURE__ */ T("$ZodSet", (e, t) => {
  Se.init(e, t), e._zod.parse = (r, a) => {
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
      l instanceof Promise ? o.push(l.then((u) => Zu(u, r))) : Zu(l, r);
    }
    return o.length ? Promise.all(o).then(() => r) : r;
  };
});
function Zu(e, t) {
  e.issues.length && t.issues.push(...e.issues), t.value.add(e.value);
}
const cp = /* @__PURE__ */ T("$ZodEnum", (e, t) => {
  Se.init(e, t);
  const r = Bi(t.entries), a = new Set(r);
  e._zod.values = a, e._zod.pattern = new RegExp(`^(${r.filter((n) => Ma.has(typeof n)).map((n) => typeof n == "string" ? kn(n) : n.toString()).join("|")})$`), e._zod.parse = (n, o) => {
    const i = n.value;
    return a.has(i) || n.issues.push({
      code: "invalid_value",
      values: r,
      input: i,
      inst: e
    }), n;
  };
}), dp = /* @__PURE__ */ T("$ZodLiteral", (e, t) => {
  if (Se.init(e, t), t.values.length === 0)
    throw new Error("Cannot create literal schema with no valid values");
  const r = new Set(t.values);
  e._zod.values = r, e._zod.pattern = new RegExp(`^(${t.values.map((a) => typeof a == "string" ? kn(a) : a ? kn(a.toString()) : String(a)).join("|")})$`), e._zod.parse = (a, n) => {
    const o = a.value;
    return r.has(o) || a.issues.push({
      code: "invalid_value",
      values: t.values,
      input: o,
      inst: e
    }), a;
  };
}), fp = /* @__PURE__ */ T("$ZodFile", (e, t) => {
  Se.init(e, t), e._zod.parse = (r, a) => {
    const n = r.value;
    return n instanceof File || r.issues.push({
      expected: "file",
      code: "invalid_type",
      input: n,
      inst: e
    }), r;
  };
}), mp = /* @__PURE__ */ T("$ZodTransform", (e, t) => {
  Se.init(e, t), e._zod.parse = (r, a) => {
    if (a.direction === "backward")
      throw new lo(e.constructor.name);
    const n = t.transform(r.value, r);
    if (a.async)
      return (n instanceof Promise ? n : Promise.resolve(n)).then((i) => (r.value = i, r));
    if (n instanceof Promise)
      throw new Gn();
    return r.value = n, r;
  };
});
function Wu(e, t) {
  return e.issues.length && t === void 0 ? { issues: [], value: void 0 } : e;
}
const pp = /* @__PURE__ */ T("$ZodOptional", (e, t) => {
  Se.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", Ae(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), Ae(e._zod, "pattern", () => {
    const r = t.innerType._zod.pattern;
    return r ? new RegExp(`^(${so(r.source)})?$`) : void 0;
  }), e._zod.parse = (r, a) => {
    if (t.innerType._zod.optin === "optional") {
      const n = t.innerType._zod.run(r, a);
      return n instanceof Promise ? n.then((o) => Wu(o, r.value)) : Wu(n, r.value);
    }
    return r.value === void 0 ? r : t.innerType._zod.run(r, a);
  };
}), vp = /* @__PURE__ */ T("$ZodNullable", (e, t) => {
  Se.init(e, t), Ae(e._zod, "optin", () => t.innerType._zod.optin), Ae(e._zod, "optout", () => t.innerType._zod.optout), Ae(e._zod, "pattern", () => {
    const r = t.innerType._zod.pattern;
    return r ? new RegExp(`^(${so(r.source)}|null)$`) : void 0;
  }), Ae(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (r, a) => r.value === null ? r : t.innerType._zod.run(r, a);
}), gp = /* @__PURE__ */ T("$ZodDefault", (e, t) => {
  Se.init(e, t), e._zod.optin = "optional", Ae(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, a) => {
    if (a.direction === "backward")
      return t.innerType._zod.run(r, a);
    if (r.value === void 0)
      return r.value = t.defaultValue, r;
    const n = t.innerType._zod.run(r, a);
    return n instanceof Promise ? n.then((o) => Gu(o, t)) : Gu(n, t);
  };
});
function Gu(e, t) {
  return e.value === void 0 && (e.value = t.defaultValue), e;
}
const hp = /* @__PURE__ */ T("$ZodPrefault", (e, t) => {
  Se.init(e, t), e._zod.optin = "optional", Ae(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, a) => (a.direction === "backward" || r.value === void 0 && (r.value = t.defaultValue), t.innerType._zod.run(r, a));
}), bp = /* @__PURE__ */ T("$ZodNonOptional", (e, t) => {
  Se.init(e, t), Ae(e._zod, "values", () => {
    const r = t.innerType._zod.values;
    return r ? new Set([...r].filter((a) => a !== void 0)) : void 0;
  }), e._zod.parse = (r, a) => {
    const n = t.innerType._zod.run(r, a);
    return n instanceof Promise ? n.then((o) => Ku(o, e)) : Ku(n, e);
  };
});
function Ku(e, t) {
  return !e.issues.length && e.value === void 0 && e.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: e.value,
    inst: t
  }), e;
}
const _p = /* @__PURE__ */ T("$ZodSuccess", (e, t) => {
  Se.init(e, t), e._zod.parse = (r, a) => {
    if (a.direction === "backward")
      throw new lo("ZodSuccess");
    const n = t.innerType._zod.run(r, a);
    return n instanceof Promise ? n.then((o) => (r.value = o.issues.length === 0, r)) : (r.value = n.issues.length === 0, r);
  };
}), yp = /* @__PURE__ */ T("$ZodCatch", (e, t) => {
  Se.init(e, t), Ae(e._zod, "optin", () => t.innerType._zod.optin), Ae(e._zod, "optout", () => t.innerType._zod.optout), Ae(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, a) => {
    if (a.direction === "backward")
      return t.innerType._zod.run(r, a);
    const n = t.innerType._zod.run(r, a);
    return n instanceof Promise ? n.then((o) => (r.value = o.value, o.issues.length && (r.value = t.catchValue({
      ...r,
      error: {
        issues: o.issues.map((i) => nn(i, a, Pt()))
      },
      input: r.value
    }), r.issues = []), r)) : (r.value = n.value, n.issues.length && (r.value = t.catchValue({
      ...r,
      error: {
        issues: n.issues.map((o) => nn(o, a, Pt()))
      },
      input: r.value
    }), r.issues = []), r);
  };
}), $p = /* @__PURE__ */ T("$ZodNaN", (e, t) => {
  Se.init(e, t), e._zod.parse = (r, a) => ((typeof r.value != "number" || !Number.isNaN(r.value)) && r.issues.push({
    input: r.value,
    inst: e,
    expected: "nan",
    code: "invalid_type"
  }), r);
}), kp = /* @__PURE__ */ T("$ZodPipe", (e, t) => {
  Se.init(e, t), Ae(e._zod, "values", () => t.in._zod.values), Ae(e._zod, "optin", () => t.in._zod.optin), Ae(e._zod, "optout", () => t.out._zod.optout), Ae(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (r, a) => {
    if (a.direction === "backward") {
      const o = t.out._zod.run(r, a);
      return o instanceof Promise ? o.then((i) => ka(i, t.in, a)) : ka(o, t.in, a);
    }
    const n = t.in._zod.run(r, a);
    return n instanceof Promise ? n.then((o) => ka(o, t.out, a)) : ka(n, t.out, a);
  };
});
function ka(e, t, r) {
  return e.issues.length ? (e.aborted = !0, e) : t._zod.run({ value: e.value, issues: e.issues }, r);
}
const fl = /* @__PURE__ */ T("$ZodCodec", (e, t) => {
  Se.init(e, t), Ae(e._zod, "values", () => t.in._zod.values), Ae(e._zod, "optin", () => t.in._zod.optin), Ae(e._zod, "optout", () => t.out._zod.optout), Ae(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (r, a) => {
    if ((a.direction || "forward") === "forward") {
      const o = t.in._zod.run(r, a);
      return o instanceof Promise ? o.then((i) => wa(i, t, a)) : wa(o, t, a);
    } else {
      const o = t.out._zod.run(r, a);
      return o instanceof Promise ? o.then((i) => wa(i, t, a)) : wa(o, t, a);
    }
  };
});
function wa(e, t, r) {
  if (e.issues.length)
    return e.aborted = !0, e;
  if ((r.direction || "forward") === "forward") {
    const n = t.transform(e.value, e);
    return n instanceof Promise ? n.then((o) => Sa(e, o, t.out, r)) : Sa(e, n, t.out, r);
  } else {
    const n = t.reverseTransform(e.value, e);
    return n instanceof Promise ? n.then((o) => Sa(e, o, t.in, r)) : Sa(e, n, t.in, r);
  }
}
function Sa(e, t, r, a) {
  return e.issues.length ? (e.aborted = !0, e) : r._zod.run({ value: t, issues: e.issues }, a);
}
const wp = /* @__PURE__ */ T("$ZodReadonly", (e, t) => {
  Se.init(e, t), Ae(e._zod, "propValues", () => t.innerType._zod.propValues), Ae(e._zod, "values", () => t.innerType._zod.values), Ae(e._zod, "optin", () => t.innerType?._zod?.optin), Ae(e._zod, "optout", () => t.innerType?._zod?.optout), e._zod.parse = (r, a) => {
    if (a.direction === "backward")
      return t.innerType._zod.run(r, a);
    const n = t.innerType._zod.run(r, a);
    return n instanceof Promise ? n.then(Hu) : Hu(n);
  };
});
function Hu(e) {
  return e.value = Object.freeze(e.value), e;
}
const Sp = /* @__PURE__ */ T("$ZodTemplateLiteral", (e, t) => {
  Se.init(e, t);
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
    } else if (a === null || Hd.has(typeof a))
      r.push(kn(`${a}`));
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
}), Ip = /* @__PURE__ */ T("$ZodFunction", (e, t) => (Se.init(e, t), e._def = t, e._zod.def = t, e.implement = (r) => {
  if (typeof r != "function")
    throw new Error("implement() must be called with a function");
  return function(...a) {
    const n = e._def.input ? si(e._def.input, a) : a, o = Reflect.apply(r, this, n);
    return e._def.output ? si(e._def.output, o) : o;
  };
}, e.implementAsync = (r) => {
  if (typeof r != "function")
    throw new Error("implementAsync() must be called with a function");
  return async function(...a) {
    const n = e._def.input ? await ui(e._def.input, a) : a, o = await Reflect.apply(r, this, n);
    return e._def.output ? await ui(e._def.output, o) : o;
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
    input: new dl({
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
}, e)), xp = /* @__PURE__ */ T("$ZodPromise", (e, t) => {
  Se.init(e, t), e._zod.parse = (r, a) => Promise.resolve(r.value).then((n) => t.innerType._zod.run({ value: n, issues: [] }, a));
}), Op = /* @__PURE__ */ T("$ZodLazy", (e, t) => {
  Se.init(e, t), Ae(e._zod, "innerType", () => t.getter()), Ae(e._zod, "pattern", () => e._zod.innerType?._zod?.pattern), Ae(e._zod, "propValues", () => e._zod.innerType?._zod?.propValues), Ae(e._zod, "optin", () => e._zod.innerType?._zod?.optin ?? void 0), Ae(e._zod, "optout", () => e._zod.innerType?._zod?.optout ?? void 0), e._zod.parse = (r, a) => e._zod.innerType._zod.run(r, a);
}), Np = /* @__PURE__ */ T("$ZodCustom", (e, t) => {
  Xe.init(e, t), Se.init(e, t), e._zod.parse = (r, a) => r, e._zod.check = (r) => {
    const a = r.value, n = t.fn(a);
    if (n instanceof Promise)
      return n.then((o) => Ju(o, r, a, e));
    Ju(n, r, a, e);
  };
});
function Ju(e, t, r, a) {
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
    a._zod.def.params && (n.params = a._zod.def.params), t.issues.push(dr(n));
  }
}
const p1 = () => {
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
        return n.values.length === 1 ? `مدخلات غير مقبولة: يفترض إدخال ${ye(n.values[0])}` : `اختيار غير مقبول: يتوقع انتقاء أحد هذه الخيارات: ${Y(n.values, "|")}`;
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
        return `معرف${n.keys.length > 1 ? "ات" : ""} غريب${n.keys.length > 1 ? "ة" : ""}: ${Y(n.keys, "، ")}`;
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
function v1() {
  return {
    localeError: p1()
  };
}
const g1 = () => {
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
        return n.values.length === 1 ? `Yanlış dəyər: gözlənilən ${ye(n.values[0])}` : `Yanlış seçim: aşağıdakılardan biri olmalıdır: ${Y(n.values, "|")}`;
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
        return `Tanınmayan açar${n.keys.length > 1 ? "lar" : ""}: ${Y(n.keys, ", ")}`;
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
function h1() {
  return {
    localeError: g1()
  };
}
function qu(e, t, r, a) {
  const n = Math.abs(e), o = n % 10, i = n % 100;
  return i >= 11 && i <= 19 ? a : o === 1 ? t : o >= 2 && o <= 4 ? r : a;
}
const b1 = () => {
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
        return n.values.length === 1 ? `Няправільны ўвод: чакалася ${ye(n.values[0])}` : `Няправільны варыянт: чакаўся адзін з ${Y(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", i = t(n.origin);
        if (i) {
          const l = Number(n.maximum), u = qu(l, i.unit.one, i.unit.few, i.unit.many);
          return `Занадта вялікі: чакалася, што ${n.origin ?? "значэнне"} павінна ${i.verb} ${o}${n.maximum.toString()} ${u}`;
        }
        return `Занадта вялікі: чакалася, што ${n.origin ?? "значэнне"} павінна быць ${o}${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", i = t(n.origin);
        if (i) {
          const l = Number(n.minimum), u = qu(l, i.unit.one, i.unit.few, i.unit.many);
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
        return `Нераспазнаны ${n.keys.length > 1 ? "ключы" : "ключ"}: ${Y(n.keys, ", ")}`;
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
function _1() {
  return {
    localeError: b1()
  };
}
const y1 = (e) => {
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
}, $1 = () => {
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
        return `Невалиден вход: очакван ${a.expected}, получен ${y1(a.input)}`;
      case "invalid_value":
        return a.values.length === 1 ? `Невалиден вход: очакван ${ye(a.values[0])}` : `Невалидна опция: очаквано едно от ${Y(a.values, "|")}`;
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
        return `Неразпознат${a.keys.length > 1 ? "и" : ""} ключ${a.keys.length > 1 ? "ове" : ""}: ${Y(a.keys, ", ")}`;
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
function k1() {
  return {
    localeError: $1()
  };
}
const w1 = () => {
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
        return n.values.length === 1 ? `Valor invàlid: s'esperava ${ye(n.values[0])}` : `Opció invàlida: s'esperava una de ${Y(n.values, " o ")}`;
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
        return `Clau${n.keys.length > 1 ? "s" : ""} no reconeguda${n.keys.length > 1 ? "s" : ""}: ${Y(n.keys, ", ")}`;
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
function S1() {
  return {
    localeError: w1()
  };
}
const I1 = () => {
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
        return n.values.length === 1 ? `Neplatný vstup: očekáváno ${ye(n.values[0])}` : `Neplatná možnost: očekávána jedna z hodnot ${Y(n.values, "|")}`;
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
        return `Neznámé klíče: ${Y(n.keys, ", ")}`;
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
function x1() {
  return {
    localeError: I1()
  };
}
const O1 = () => {
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
        return i.values.length === 1 ? `Ugyldig værdi: forventede ${ye(i.values[0])}` : `Ugyldigt valg: forventede en af følgende ${Y(i.values, "|")}`;
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
        return `${i.keys.length > 1 ? "Ukendte nøgler" : "Ukendt nøgle"}: ${Y(i.keys, ", ")}`;
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
function N1() {
  return {
    localeError: O1()
  };
}
const E1 = () => {
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
        return n.values.length === 1 ? `Ungültige Eingabe: erwartet ${ye(n.values[0])}` : `Ungültige Option: erwartet eine von ${Y(n.values, "|")}`;
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
        return `${n.keys.length > 1 ? "Unbekannte Schlüssel" : "Unbekannter Schlüssel"}: ${Y(n.keys, ", ")}`;
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
function z1() {
  return {
    localeError: E1()
  };
}
const P1 = (e) => {
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
}, T1 = () => {
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
        return `Invalid input: expected ${a.expected}, received ${P1(a.input)}`;
      case "invalid_value":
        return a.values.length === 1 ? `Invalid input: expected ${ye(a.values[0])}` : `Invalid option: expected one of ${Y(a.values, "|")}`;
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
        return `Unrecognized key${a.keys.length > 1 ? "s" : ""}: ${Y(a.keys, ", ")}`;
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
function Ep() {
  return {
    localeError: T1()
  };
}
const A1 = (e) => {
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
}, D1 = () => {
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
        return `Nevalida enigo: atendiĝis ${a.expected}, riceviĝis ${A1(a.input)}`;
      case "invalid_value":
        return a.values.length === 1 ? `Nevalida enigo: atendiĝis ${ye(a.values[0])}` : `Nevalida opcio: atendiĝis unu el ${Y(a.values, "|")}`;
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
        return `Nekonata${a.keys.length > 1 ? "j" : ""} ŝlosilo${a.keys.length > 1 ? "j" : ""}: ${Y(a.keys, ", ")}`;
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
function C1() {
  return {
    localeError: D1()
  };
}
const j1 = () => {
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
        return i.values.length === 1 ? `Entrada inválida: se esperaba ${ye(i.values[0])}` : `Opción inválida: se esperaba una de ${Y(i.values, "|")}`;
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
        return `Llave${i.keys.length > 1 ? "s" : ""} desconocida${i.keys.length > 1 ? "s" : ""}: ${Y(i.keys, ", ")}`;
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
function U1() {
  return {
    localeError: j1()
  };
}
const L1 = () => {
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
        return n.values.length === 1 ? `ورودی نامعتبر: می‌بایست ${ye(n.values[0])} می‌بود` : `گزینه نامعتبر: می‌بایست یکی از ${Y(n.values, "|")} می‌بود`;
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
        return `کلید${n.keys.length > 1 ? "های" : ""} ناشناس: ${Y(n.keys, ", ")}`;
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
function R1() {
  return {
    localeError: L1()
  };
}
const V1 = () => {
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
        return n.values.length === 1 ? `Virheellinen syöte: täytyy olla ${ye(n.values[0])}` : `Virheellinen valinta: täytyy olla yksi seuraavista: ${Y(n.values, "|")}`;
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
        return `${n.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain"}: ${Y(n.keys, ", ")}`;
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
function F1() {
  return {
    localeError: V1()
  };
}
const M1 = () => {
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
        return n.values.length === 1 ? `Entrée invalide : ${ye(n.values[0])} attendu` : `Option invalide : une valeur parmi ${Y(n.values, "|")} attendue`;
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
        return `Clé${n.keys.length > 1 ? "s" : ""} non reconnue${n.keys.length > 1 ? "s" : ""} : ${Y(n.keys, ", ")}`;
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
function B1() {
  return {
    localeError: M1()
  };
}
const Z1 = () => {
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
        return n.values.length === 1 ? `Entrée invalide : attendu ${ye(n.values[0])}` : `Option invalide : attendu l'une des valeurs suivantes ${Y(n.values, "|")}`;
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
        return `Clé${n.keys.length > 1 ? "s" : ""} non reconnue${n.keys.length > 1 ? "s" : ""} : ${Y(n.keys, ", ")}`;
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
function W1() {
  return {
    localeError: Z1()
  };
}
const G1 = () => {
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
          return `ערך לא תקין: הערך חייב להיות ${ye(c.values[0])}`;
        const d = c.values.map((p) => ye(p));
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
          const h = c.inclusive ? `קטן או שווה ל-${c.maximum}` : `קטן מ-${c.maximum}`;
          return `גדול מדי: ${f} צריך להיות ${h}`;
        }
        if (c.origin === "array" || c.origin === "set") {
          const h = c.origin === "set" ? "צריכה" : "צריך", _ = c.inclusive ? `${c.maximum} ${d?.unit ?? ""} או פחות` : `פחות מ-${c.maximum} ${d?.unit ?? ""}`;
          return `גדול מדי: ${f} ${h} להכיל ${_}`.trim();
        }
        const m = c.inclusive ? "<=" : "<", p = o(c.origin ?? "value");
        return d?.unit ? `${d.longLabel} מדי: ${f} ${p} ${m}${c.maximum.toString()} ${d.unit}` : `${d?.longLabel ?? "גדול"} מדי: ${f} ${p} ${m}${c.maximum.toString()}`;
      }
      case "too_small": {
        const d = i(c.origin), f = n(c.origin ?? "value");
        if (c.origin === "string")
          return `${d?.shortLabel ?? "קצר"} מדי: ${f} צריכה להכיל ${c.minimum.toString()} ${d?.unit ?? ""} ${c.inclusive ? "או יותר" : "לפחות"}`.trim();
        if (c.origin === "number") {
          const h = c.inclusive ? `גדול או שווה ל-${c.minimum}` : `גדול מ-${c.minimum}`;
          return `קטן מדי: ${f} צריך להיות ${h}`;
        }
        if (c.origin === "array" || c.origin === "set") {
          const h = c.origin === "set" ? "צריכה" : "צריך";
          if (c.minimum === 1 && c.inclusive) {
            const S = (c.origin === "set", "לפחות פריט אחד");
            return `קטן מדי: ${f} ${h} להכיל ${S}`;
          }
          const _ = c.inclusive ? `${c.minimum} ${d?.unit ?? ""} או יותר` : `יותר מ-${c.minimum} ${d?.unit ?? ""}`;
          return `קטן מדי: ${f} ${h} להכיל ${_}`.trim();
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
        const f = u[d.format], m = f?.label ?? d.format, h = (f?.gender ?? "m") === "f" ? "תקינה" : "תקין";
        return `${m} לא ${h}`;
      }
      case "not_multiple_of":
        return `מספר לא תקין: חייב להיות מכפלה של ${c.divisor}`;
      case "unrecognized_keys":
        return `מפתח${c.keys.length > 1 ? "ות" : ""} לא מזוה${c.keys.length > 1 ? "ים" : "ה"}: ${Y(c.keys, ", ")}`;
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
function K1() {
  return {
    localeError: G1()
  };
}
const H1 = () => {
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
        return n.values.length === 1 ? `Érvénytelen bemenet: a várt érték ${ye(n.values[0])}` : `Érvénytelen opció: valamelyik érték várt ${Y(n.values, "|")}`;
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
        return `Ismeretlen kulcs${n.keys.length > 1 ? "s" : ""}: ${Y(n.keys, ", ")}`;
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
function J1() {
  return {
    localeError: H1()
  };
}
const q1 = () => {
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
        return n.values.length === 1 ? `Input tidak valid: diharapkan ${ye(n.values[0])}` : `Pilihan tidak valid: diharapkan salah satu dari ${Y(n.values, "|")}`;
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
        return `Kunci tidak dikenali ${n.keys.length > 1 ? "s" : ""}: ${Y(n.keys, ", ")}`;
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
function Y1() {
  return {
    localeError: q1()
  };
}
const X1 = (e) => {
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
}, Q1 = () => {
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
        return `Rangt gildi: Þú slóst inn ${X1(a.input)} þar sem á að vera ${a.expected}`;
      case "invalid_value":
        return a.values.length === 1 ? `Rangt gildi: gert ráð fyrir ${ye(a.values[0])}` : `Ógilt val: má vera eitt af eftirfarandi ${Y(a.values, "|")}`;
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
        return `Óþekkt ${a.keys.length > 1 ? "ir lyklar" : "ur lykill"}: ${Y(a.keys, ", ")}`;
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
function eS() {
  return {
    localeError: Q1()
  };
}
const tS = () => {
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
        return n.values.length === 1 ? `Input non valido: atteso ${ye(n.values[0])}` : `Opzione non valida: atteso uno tra ${Y(n.values, "|")}`;
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
        return `Chiav${n.keys.length > 1 ? "i" : "e"} non riconosciut${n.keys.length > 1 ? "e" : "a"}: ${Y(n.keys, ", ")}`;
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
function nS() {
  return {
    localeError: tS()
  };
}
const rS = () => {
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
        return n.values.length === 1 ? `無効な入力: ${ye(n.values[0])}が期待されました` : `無効な選択: ${Y(n.values, "、")}のいずれかである必要があります`;
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
        return `認識されていないキー${n.keys.length > 1 ? "群" : ""}: ${Y(n.keys, "、")}`;
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
function aS() {
  return {
    localeError: rS()
  };
}
const oS = (e) => {
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
}, iS = () => {
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
        return `არასწორი შეყვანა: მოსალოდნელი ${a.expected}, მიღებული ${oS(a.input)}`;
      case "invalid_value":
        return a.values.length === 1 ? `არასწორი შეყვანა: მოსალოდნელი ${ye(a.values[0])}` : `არასწორი ვარიანტი: მოსალოდნელია ერთ-ერთი ${Y(a.values, "|")}-დან`;
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
        return `უცნობი გასაღებ${a.keys.length > 1 ? "ები" : "ი"}: ${Y(a.keys, ", ")}`;
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
function lS() {
  return {
    localeError: iS()
  };
}
const sS = () => {
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
        return n.values.length === 1 ? `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${ye(n.values[0])}` : `ជម្រើសមិនត្រឹមត្រូវ៖ ត្រូវជាមួយក្នុងចំណោម ${Y(n.values, "|")}`;
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
        return `រកឃើញសោមិនស្គាល់៖ ${Y(n.keys, ", ")}`;
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
function zp() {
  return {
    localeError: sS()
  };
}
function uS() {
  return zp();
}
const cS = () => {
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
        return n.values.length === 1 ? `잘못된 입력: 값은 ${ye(n.values[0])} 이어야 합니다` : `잘못된 옵션: ${Y(n.values, "또는 ")} 중 하나여야 합니다`;
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
        return `인식할 수 없는 키: ${Y(n.keys, ", ")}`;
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
function dS() {
  return {
    localeError: cS()
  };
}
const fS = (e) => Cr(typeof e, e), Cr = (e, t = void 0) => {
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
}, Tr = (e) => e.charAt(0).toUpperCase() + e.slice(1);
function Yu(e) {
  const t = Math.abs(e), r = t % 10, a = t % 100;
  return a >= 11 && a <= 19 || r === 0 ? "many" : r === 1 ? "one" : "few";
}
const mS = () => {
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
        return `Gautas tipas ${fS(a.input)}, o tikėtasi - ${Cr(a.expected)}`;
      case "invalid_value":
        return a.values.length === 1 ? `Privalo būti ${ye(a.values[0])}` : `Privalo būti vienas iš ${Y(a.values, "|")} pasirinkimų`;
      case "too_big": {
        const n = Cr(a.origin), o = t(a.origin, Yu(Number(a.maximum)), a.inclusive ?? !1, "smaller");
        if (o?.verb)
          return `${Tr(n ?? a.origin ?? "reikšmė")} ${o.verb} ${a.maximum.toString()} ${o.unit ?? "elementų"}`;
        const i = a.inclusive ? "ne didesnis kaip" : "mažesnis kaip";
        return `${Tr(n ?? a.origin ?? "reikšmė")} turi būti ${i} ${a.maximum.toString()} ${o?.unit}`;
      }
      case "too_small": {
        const n = Cr(a.origin), o = t(a.origin, Yu(Number(a.minimum)), a.inclusive ?? !1, "bigger");
        if (o?.verb)
          return `${Tr(n ?? a.origin ?? "reikšmė")} ${o.verb} ${a.minimum.toString()} ${o.unit ?? "elementų"}`;
        const i = a.inclusive ? "ne mažesnis kaip" : "didesnis kaip";
        return `${Tr(n ?? a.origin ?? "reikšmė")} turi būti ${i} ${a.minimum.toString()} ${o?.unit}`;
      }
      case "invalid_format": {
        const n = a;
        return n.format === "starts_with" ? `Eilutė privalo prasidėti "${n.prefix}"` : n.format === "ends_with" ? `Eilutė privalo pasibaigti "${n.suffix}"` : n.format === "includes" ? `Eilutė privalo įtraukti "${n.includes}"` : n.format === "regex" ? `Eilutė privalo atitikti ${n.pattern}` : `Neteisingas ${r[n.format] ?? a.format}`;
      }
      case "not_multiple_of":
        return `Skaičius privalo būti ${a.divisor} kartotinis.`;
      case "unrecognized_keys":
        return `Neatpažint${a.keys.length > 1 ? "i" : "as"} rakt${a.keys.length > 1 ? "ai" : "as"}: ${Y(a.keys, ", ")}`;
      case "invalid_key":
        return "Rastas klaidingas raktas";
      case "invalid_union":
        return "Klaidinga įvestis";
      case "invalid_element": {
        const n = Cr(a.origin);
        return `${Tr(n ?? a.origin ?? "reikšmė")} turi klaidingą įvestį`;
      }
      default:
        return "Klaidinga įvestis";
    }
  };
};
function pS() {
  return {
    localeError: mS()
  };
}
const vS = () => {
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
        return n.values.length === 1 ? `Invalid input: expected ${ye(n.values[0])}` : `Грешана опција: се очекува една ${Y(n.values, "|")}`;
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
        return `${n.keys.length > 1 ? "Непрепознаени клучеви" : "Непрепознаен клуч"}: ${Y(n.keys, ", ")}`;
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
function gS() {
  return {
    localeError: vS()
  };
}
const hS = () => {
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
        return n.values.length === 1 ? `Input tidak sah: dijangka ${ye(n.values[0])}` : `Pilihan tidak sah: dijangka salah satu daripada ${Y(n.values, "|")}`;
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
        return `Kunci tidak dikenali: ${Y(n.keys, ", ")}`;
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
function bS() {
  return {
    localeError: hS()
  };
}
const _S = () => {
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
        return n.values.length === 1 ? `Ongeldige invoer: verwacht ${ye(n.values[0])}` : `Ongeldige optie: verwacht één van ${Y(n.values, "|")}`;
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
        return `Onbekende key${n.keys.length > 1 ? "s" : ""}: ${Y(n.keys, ", ")}`;
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
function yS() {
  return {
    localeError: _S()
  };
}
const $S = () => {
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
        return n.values.length === 1 ? `Ugyldig verdi: forventet ${ye(n.values[0])}` : `Ugyldig valg: forventet en av ${Y(n.values, "|")}`;
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
        return `${n.keys.length > 1 ? "Ukjente nøkler" : "Ukjent nøkkel"}: ${Y(n.keys, ", ")}`;
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
function kS() {
  return {
    localeError: $S()
  };
}
const wS = () => {
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
        return n.values.length === 1 ? `Fâsit giren: umulan ${ye(n.values[0])}` : `Fâsit tercih: mûteberler ${Y(n.values, "|")}`;
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
        return `Tanınmayan anahtar ${n.keys.length > 1 ? "s" : ""}: ${Y(n.keys, ", ")}`;
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
function SS() {
  return {
    localeError: wS()
  };
}
const IS = () => {
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
        return n.values.length === 1 ? `ناسم ورودي: باید ${ye(n.values[0])} وای` : `ناسم انتخاب: باید یو له ${Y(n.values, "|")} څخه وای`;
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
        return `ناسم ${n.keys.length > 1 ? "کلیډونه" : "کلیډ"}: ${Y(n.keys, ", ")}`;
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
function xS() {
  return {
    localeError: IS()
  };
}
const OS = () => {
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
        return n.values.length === 1 ? `Nieprawidłowe dane wejściowe: oczekiwano ${ye(n.values[0])}` : `Nieprawidłowa opcja: oczekiwano jednej z wartości ${Y(n.values, "|")}`;
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
        return `Nierozpoznane klucze${n.keys.length > 1 ? "s" : ""}: ${Y(n.keys, ", ")}`;
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
function NS() {
  return {
    localeError: OS()
  };
}
const ES = () => {
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
        return n.values.length === 1 ? `Entrada inválida: esperado ${ye(n.values[0])}` : `Opção inválida: esperada uma das ${Y(n.values, "|")}`;
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
        return `Chave${n.keys.length > 1 ? "s" : ""} desconhecida${n.keys.length > 1 ? "s" : ""}: ${Y(n.keys, ", ")}`;
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
function zS() {
  return {
    localeError: ES()
  };
}
function Xu(e, t, r, a) {
  const n = Math.abs(e), o = n % 10, i = n % 100;
  return i >= 11 && i <= 19 ? a : o === 1 ? t : o >= 2 && o <= 4 ? r : a;
}
const PS = () => {
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
        return n.values.length === 1 ? `Неверный ввод: ожидалось ${ye(n.values[0])}` : `Неверный вариант: ожидалось одно из ${Y(n.values, "|")}`;
      case "too_big": {
        const o = n.inclusive ? "<=" : "<", i = t(n.origin);
        if (i) {
          const l = Number(n.maximum), u = Xu(l, i.unit.one, i.unit.few, i.unit.many);
          return `Слишком большое значение: ожидалось, что ${n.origin ?? "значение"} будет иметь ${o}${n.maximum.toString()} ${u}`;
        }
        return `Слишком большое значение: ожидалось, что ${n.origin ?? "значение"} будет ${o}${n.maximum.toString()}`;
      }
      case "too_small": {
        const o = n.inclusive ? ">=" : ">", i = t(n.origin);
        if (i) {
          const l = Number(n.minimum), u = Xu(l, i.unit.one, i.unit.few, i.unit.many);
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
        return `Нераспознанн${n.keys.length > 1 ? "ые" : "ый"} ключ${n.keys.length > 1 ? "и" : ""}: ${Y(n.keys, ", ")}`;
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
function TS() {
  return {
    localeError: PS()
  };
}
const AS = () => {
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
        return n.values.length === 1 ? `Neveljaven vnos: pričakovano ${ye(n.values[0])}` : `Neveljavna možnost: pričakovano eno izmed ${Y(n.values, "|")}`;
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
        return `Neprepoznan${n.keys.length > 1 ? "i ključi" : " ključ"}: ${Y(n.keys, ", ")}`;
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
function DS() {
  return {
    localeError: AS()
  };
}
const CS = () => {
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
        return n.values.length === 1 ? `Ogiltig inmatning: förväntat ${ye(n.values[0])}` : `Ogiltigt val: förväntade en av ${Y(n.values, "|")}`;
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
        return `${n.keys.length > 1 ? "Okända nycklar" : "Okänd nyckel"}: ${Y(n.keys, ", ")}`;
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
function jS() {
  return {
    localeError: CS()
  };
}
const US = () => {
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
        return n.values.length === 1 ? `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${ye(n.values[0])}` : `தவறான விருப்பம்: எதிர்பார்க்கப்பட்டது ${Y(n.values, "|")} இல் ஒன்று`;
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
        return `அடையாளம் தெரியாத விசை${n.keys.length > 1 ? "கள்" : ""}: ${Y(n.keys, ", ")}`;
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
function LS() {
  return {
    localeError: US()
  };
}
const RS = () => {
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
        return n.values.length === 1 ? `ค่าไม่ถูกต้อง: ควรเป็น ${ye(n.values[0])}` : `ตัวเลือกไม่ถูกต้อง: ควรเป็นหนึ่งใน ${Y(n.values, "|")}`;
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
        return `พบคีย์ที่ไม่รู้จัก: ${Y(n.keys, ", ")}`;
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
function VS() {
  return {
    localeError: RS()
  };
}
const FS = (e) => {
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
}, MS = () => {
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
        return `Geçersiz değer: beklenen ${a.expected}, alınan ${FS(a.input)}`;
      case "invalid_value":
        return a.values.length === 1 ? `Geçersiz değer: beklenen ${ye(a.values[0])}` : `Geçersiz seçenek: aşağıdakilerden biri olmalı: ${Y(a.values, "|")}`;
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
        return `Tanınmayan anahtar${a.keys.length > 1 ? "lar" : ""}: ${Y(a.keys, ", ")}`;
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
function BS() {
  return {
    localeError: MS()
  };
}
const ZS = () => {
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
        return n.values.length === 1 ? `Неправильні вхідні дані: очікується ${ye(n.values[0])}` : `Неправильна опція: очікується одне з ${Y(n.values, "|")}`;
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
        return `Нерозпізнаний ключ${n.keys.length > 1 ? "і" : ""}: ${Y(n.keys, ", ")}`;
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
function Pp() {
  return {
    localeError: ZS()
  };
}
function WS() {
  return Pp();
}
const GS = () => {
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
        return n.values.length === 1 ? `غلط ان پٹ: ${ye(n.values[0])} متوقع تھا` : `غلط آپشن: ${Y(n.values, "|")} میں سے ایک متوقع تھا`;
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
        return `غیر تسلیم شدہ کی${n.keys.length > 1 ? "ز" : ""}: ${Y(n.keys, "، ")}`;
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
function KS() {
  return {
    localeError: GS()
  };
}
const HS = () => {
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
        return n.values.length === 1 ? `Đầu vào không hợp lệ: mong đợi ${ye(n.values[0])}` : `Tùy chọn không hợp lệ: mong đợi một trong các giá trị ${Y(n.values, "|")}`;
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
        return `Khóa không được nhận dạng: ${Y(n.keys, ", ")}`;
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
function JS() {
  return {
    localeError: HS()
  };
}
const qS = () => {
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
        return n.values.length === 1 ? `无效输入：期望 ${ye(n.values[0])}` : `无效选项：期望以下之一 ${Y(n.values, "|")}`;
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
        return `出现未知的键(key): ${Y(n.keys, ", ")}`;
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
function YS() {
  return {
    localeError: qS()
  };
}
const XS = () => {
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
        return n.values.length === 1 ? `無效的輸入值：預期為 ${ye(n.values[0])}` : `無效的選項：預期為以下其中之一 ${Y(n.values, "|")}`;
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
        return `無法識別的鍵值${n.keys.length > 1 ? "們" : ""}：${Y(n.keys, "、")}`;
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
function QS() {
  return {
    localeError: XS()
  };
}
const eI = () => {
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
        return n.values.length === 1 ? `Ìbáwọlé aṣìṣe: a ní láti fi ${ye(n.values[0])}` : `Àṣàyàn aṣìṣe: yan ọ̀kan lára ${Y(n.values, "|")}`;
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
        return `Bọtìnì àìmọ̀: ${Y(n.keys, ", ")}`;
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
function tI() {
  return {
    localeError: eI()
  };
}
const Tp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ar: v1,
  az: h1,
  be: _1,
  bg: k1,
  ca: S1,
  cs: x1,
  da: N1,
  de: z1,
  en: Ep,
  eo: C1,
  es: U1,
  fa: R1,
  fi: F1,
  fr: B1,
  frCA: W1,
  he: K1,
  hu: J1,
  id: Y1,
  is: eS,
  it: nS,
  ja: aS,
  ka: lS,
  kh: uS,
  km: zp,
  ko: dS,
  lt: pS,
  mk: gS,
  ms: bS,
  nl: yS,
  no: kS,
  ota: SS,
  pl: NS,
  ps: xS,
  pt: zS,
  ru: TS,
  sl: DS,
  sv: jS,
  ta: LS,
  th: VS,
  tr: BS,
  ua: WS,
  uk: Pp,
  ur: KS,
  vi: JS,
  yo: tI,
  zhCN: YS,
  zhTW: QS
}, Symbol.toStringTag, { value: "Module" }));
var Qu;
const Ap = Symbol("ZodOutput"), Dp = Symbol("ZodInput");
class ml {
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
function pl() {
  return new ml();
}
(Qu = globalThis).__zod_globalRegistry ?? (Qu.__zod_globalRegistry = pl());
const Xt = globalThis.__zod_globalRegistry;
function Cp(e, t) {
  return new e({
    type: "string",
    ...V(t)
  });
}
function jp(e, t) {
  return new e({
    type: "string",
    coerce: !0,
    ...V(t)
  });
}
function vl(e, t) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...V(t)
  });
}
function Za(e, t) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...V(t)
  });
}
function gl(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...V(t)
  });
}
function hl(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...V(t)
  });
}
function bl(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...V(t)
  });
}
function _l(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...V(t)
  });
}
function mo(e, t) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...V(t)
  });
}
function yl(e, t) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...V(t)
  });
}
function $l(e, t) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...V(t)
  });
}
function kl(e, t) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...V(t)
  });
}
function wl(e, t) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...V(t)
  });
}
function Sl(e, t) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...V(t)
  });
}
function Il(e, t) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...V(t)
  });
}
function xl(e, t) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...V(t)
  });
}
function Ol(e, t) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...V(t)
  });
}
function Nl(e, t) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...V(t)
  });
}
function Up(e, t) {
  return new e({
    type: "string",
    format: "mac",
    check: "string_format",
    abort: !1,
    ...V(t)
  });
}
function El(e, t) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...V(t)
  });
}
function zl(e, t) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...V(t)
  });
}
function Pl(e, t) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...V(t)
  });
}
function Tl(e, t) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...V(t)
  });
}
function Al(e, t) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...V(t)
  });
}
function Dl(e, t) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...V(t)
  });
}
const Lp = {
  Any: null,
  Minute: -1,
  Second: 0,
  Millisecond: 3,
  Microsecond: 6
};
function Rp(e, t) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...V(t)
  });
}
function Vp(e, t) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...V(t)
  });
}
function Fp(e, t) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...V(t)
  });
}
function Mp(e, t) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...V(t)
  });
}
function Bp(e, t) {
  return new e({
    type: "number",
    checks: [],
    ...V(t)
  });
}
function Zp(e, t) {
  return new e({
    type: "number",
    coerce: !0,
    checks: [],
    ...V(t)
  });
}
function Wp(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...V(t)
  });
}
function Gp(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "float32",
    ...V(t)
  });
}
function Kp(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "float64",
    ...V(t)
  });
}
function Hp(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "int32",
    ...V(t)
  });
}
function Jp(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "uint32",
    ...V(t)
  });
}
function qp(e, t) {
  return new e({
    type: "boolean",
    ...V(t)
  });
}
function Yp(e, t) {
  return new e({
    type: "boolean",
    coerce: !0,
    ...V(t)
  });
}
function Xp(e, t) {
  return new e({
    type: "bigint",
    ...V(t)
  });
}
function Qp(e, t) {
  return new e({
    type: "bigint",
    coerce: !0,
    ...V(t)
  });
}
function ev(e, t) {
  return new e({
    type: "bigint",
    check: "bigint_format",
    abort: !1,
    format: "int64",
    ...V(t)
  });
}
function tv(e, t) {
  return new e({
    type: "bigint",
    check: "bigint_format",
    abort: !1,
    format: "uint64",
    ...V(t)
  });
}
function nv(e, t) {
  return new e({
    type: "symbol",
    ...V(t)
  });
}
function rv(e, t) {
  return new e({
    type: "undefined",
    ...V(t)
  });
}
function av(e, t) {
  return new e({
    type: "null",
    ...V(t)
  });
}
function ov(e) {
  return new e({
    type: "any"
  });
}
function iv(e) {
  return new e({
    type: "unknown"
  });
}
function lv(e, t) {
  return new e({
    type: "never",
    ...V(t)
  });
}
function sv(e, t) {
  return new e({
    type: "void",
    ...V(t)
  });
}
function uv(e, t) {
  return new e({
    type: "date",
    ...V(t)
  });
}
function cv(e, t) {
  return new e({
    type: "date",
    coerce: !0,
    ...V(t)
  });
}
function dv(e, t) {
  return new e({
    type: "nan",
    ...V(t)
  });
}
function Xn(e, t) {
  return new al({
    check: "less_than",
    ...V(t),
    value: e,
    inclusive: !1
  });
}
function tn(e, t) {
  return new al({
    check: "less_than",
    ...V(t),
    value: e,
    inclusive: !0
  });
}
function Qn(e, t) {
  return new ol({
    check: "greater_than",
    ...V(t),
    value: e,
    inclusive: !1
  });
}
function Vt(e, t) {
  return new ol({
    check: "greater_than",
    ...V(t),
    value: e,
    inclusive: !0
  });
}
function fv(e) {
  return Qn(0, e);
}
function mv(e) {
  return Xn(0, e);
}
function pv(e) {
  return tn(0, e);
}
function vv(e) {
  return Vt(0, e);
}
function Wr(e, t) {
  return new Yf({
    check: "multiple_of",
    ...V(t),
    value: e
  });
}
function po(e, t) {
  return new em({
    check: "max_size",
    ...V(t),
    maximum: e
  });
}
function Gr(e, t) {
  return new tm({
    check: "min_size",
    ...V(t),
    minimum: e
  });
}
function Cl(e, t) {
  return new nm({
    check: "size_equals",
    ...V(t),
    size: e
  });
}
function vo(e, t) {
  return new rm({
    check: "max_length",
    ...V(t),
    maximum: e
  });
}
function mr(e, t) {
  return new am({
    check: "min_length",
    ...V(t),
    minimum: e
  });
}
function go(e, t) {
  return new om({
    check: "length_equals",
    ...V(t),
    length: e
  });
}
function jl(e, t) {
  return new im({
    check: "string_format",
    format: "regex",
    ...V(t),
    pattern: e
  });
}
function Ul(e) {
  return new lm({
    check: "string_format",
    format: "lowercase",
    ...V(e)
  });
}
function Ll(e) {
  return new sm({
    check: "string_format",
    format: "uppercase",
    ...V(e)
  });
}
function Rl(e, t) {
  return new um({
    check: "string_format",
    format: "includes",
    ...V(t),
    includes: e
  });
}
function Vl(e, t) {
  return new cm({
    check: "string_format",
    format: "starts_with",
    ...V(t),
    prefix: e
  });
}
function Fl(e, t) {
  return new dm({
    check: "string_format",
    format: "ends_with",
    ...V(t),
    suffix: e
  });
}
function gv(e, t, r) {
  return new fm({
    check: "property",
    property: e,
    schema: t,
    ...V(r)
  });
}
function Ml(e, t) {
  return new mm({
    check: "mime_type",
    mime: e,
    ...V(t)
  });
}
function Dn(e) {
  return new pm({
    check: "overwrite",
    tx: e
  });
}
function Bl(e) {
  return Dn((t) => t.normalize(e));
}
function Zl() {
  return Dn((e) => e.trim());
}
function Wl() {
  return Dn((e) => e.toLowerCase());
}
function Gl() {
  return Dn((e) => e.toUpperCase());
}
function Kl() {
  return Dn((e) => Gd(e));
}
function hv(e, t, r) {
  return new e({
    type: "array",
    element: t,
    // get element() {
    //   return element;
    // },
    ...V(r)
  });
}
function nI(e, t, r) {
  return new e({
    type: "union",
    options: t,
    ...V(r)
  });
}
function rI(e, t, r, a) {
  return new e({
    type: "union",
    options: r,
    discriminator: t,
    ...V(a)
  });
}
function aI(e, t, r) {
  return new e({
    type: "intersection",
    left: t,
    right: r
  });
}
function oI(e, t, r, a) {
  const n = r instanceof Se, o = n ? a : r, i = n ? r : null;
  return new e({
    type: "tuple",
    items: t,
    rest: i,
    ...V(o)
  });
}
function iI(e, t, r, a) {
  return new e({
    type: "record",
    keyType: t,
    valueType: r,
    ...V(a)
  });
}
function lI(e, t, r, a) {
  return new e({
    type: "map",
    keyType: t,
    valueType: r,
    ...V(a)
  });
}
function sI(e, t, r) {
  return new e({
    type: "set",
    valueType: t,
    ...V(r)
  });
}
function uI(e, t, r) {
  const a = Array.isArray(t) ? Object.fromEntries(t.map((n) => [n, n])) : t;
  return new e({
    type: "enum",
    entries: a,
    ...V(r)
  });
}
function cI(e, t, r) {
  return new e({
    type: "enum",
    entries: t,
    ...V(r)
  });
}
function dI(e, t, r) {
  return new e({
    type: "literal",
    values: Array.isArray(t) ? t : [t],
    ...V(r)
  });
}
function bv(e, t) {
  return new e({
    type: "file",
    ...V(t)
  });
}
function fI(e, t) {
  return new e({
    type: "transform",
    transform: t
  });
}
function mI(e, t) {
  return new e({
    type: "optional",
    innerType: t
  });
}
function pI(e, t) {
  return new e({
    type: "nullable",
    innerType: t
  });
}
function vI(e, t, r) {
  return new e({
    type: "default",
    innerType: t,
    get defaultValue() {
      return typeof r == "function" ? r() : uo(r);
    }
  });
}
function gI(e, t, r) {
  return new e({
    type: "nonoptional",
    innerType: t,
    ...V(r)
  });
}
function hI(e, t) {
  return new e({
    type: "success",
    innerType: t
  });
}
function bI(e, t, r) {
  return new e({
    type: "catch",
    innerType: t,
    catchValue: typeof r == "function" ? r : () => r
  });
}
function _I(e, t, r) {
  return new e({
    type: "pipe",
    in: t,
    out: r
  });
}
function yI(e, t) {
  return new e({
    type: "readonly",
    innerType: t
  });
}
function $I(e, t, r) {
  return new e({
    type: "template_literal",
    parts: t,
    ...V(r)
  });
}
function kI(e, t) {
  return new e({
    type: "lazy",
    getter: t
  });
}
function wI(e, t) {
  return new e({
    type: "promise",
    innerType: t
  });
}
function _v(e, t, r) {
  const a = V(r);
  return a.abort ?? (a.abort = !0), new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...a
  });
}
function yv(e, t, r) {
  return new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...V(r)
  });
}
function $v(e) {
  const t = kv((r) => (r.addIssue = (a) => {
    if (typeof a == "string")
      r.issues.push(dr(a, r.value, t._zod.def));
    else {
      const n = a;
      n.fatal && (n.continue = !1), n.code ?? (n.code = "custom"), n.input ?? (n.input = r.value), n.inst ?? (n.inst = t), n.continue ?? (n.continue = !t._zod.def.abort), r.issues.push(dr(n));
    }
  }, e(r.value, r)));
  return t;
}
function kv(e, t) {
  const r = new Xe({
    check: "custom",
    ...V(t)
  });
  return r._zod.check = e, r;
}
function wv(e) {
  const t = new Xe({ check: "describe" });
  return t._zod.onattach = [
    (r) => {
      const a = Xt.get(r) ?? {};
      Xt.add(r, { ...a, description: e });
    }
  ], t._zod.check = () => {
  }, t;
}
function Sv(e) {
  const t = new Xe({ check: "meta" });
  return t._zod.onattach = [
    (r) => {
      const a = Xt.get(r) ?? {};
      Xt.add(r, { ...a, ...e });
    }
  ], t._zod.check = () => {
  }, t;
}
function Iv(e, t) {
  const r = V(t);
  let a = r.truthy ?? ["true", "1", "yes", "on", "y", "enabled"], n = r.falsy ?? ["false", "0", "no", "off", "n", "disabled"];
  r.case !== "sensitive" && (a = a.map((p) => typeof p == "string" ? p.toLowerCase() : p), n = n.map((p) => typeof p == "string" ? p.toLowerCase() : p));
  const o = new Set(a), i = new Set(n), l = e.Codec ?? fl, u = e.Boolean ?? sl, c = e.String ?? ia, d = new c({ type: "string", error: r.error }), f = new u({ type: "boolean", error: r.error }), m = new l({
    type: "pipe",
    in: d,
    out: f,
    transform: ((p, h) => {
      let _ = p;
      return r.case !== "sensitive" && (_ = _.toLowerCase()), o.has(_) ? !0 : i.has(_) ? !1 : (h.issues.push({
        code: "invalid_value",
        expected: "stringbool",
        values: [...o, ...i],
        input: h.value,
        inst: m,
        continue: !1
      }), {});
    }),
    reverseTransform: ((p, h) => p === !0 ? a[0] || "true" : n[0] || "false"),
    error: r.error
  });
  return m;
}
function la(e, t, r, a = {}) {
  const n = V(a), o = {
    ...V(a),
    check: "string_format",
    type: "string",
    format: t,
    fn: typeof r == "function" ? r : (l) => r.test(l),
    ...n
  };
  return r instanceof RegExp && (o.pattern = r), new e(o);
}
class di {
  constructor(t) {
    this.counter = 0, this.metadataRegistry = t?.metadata ?? Xt, this.target = t?.target ?? "draft-2020-12", this.unrepresentable = t?.unrepresentable ?? "throw", this.override = t?.override ?? (() => {
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
            const h = p;
            h.type = "string";
            const { minimum: _, maximum: S, format: k, patterns: y, contentEncoding: O } = t._zod.bag;
            if (typeof _ == "number" && (h.minLength = _), typeof S == "number" && (h.maxLength = S), k && (h.format = o[k] ?? k, h.format === "" && delete h.format), O && (h.contentEncoding = O), y && y.size > 0) {
              const I = [...y];
              I.length === 1 ? h.pattern = I[0].source : I.length > 1 && (l.schema.allOf = [
                ...I.map((x) => ({
                  ...this.target === "draft-7" || this.target === "draft-4" || this.target === "openapi-3.0" ? { type: "string" } : {},
                  pattern: x.source
                }))
              ]);
            }
            break;
          }
          case "number": {
            const h = p, { minimum: _, maximum: S, format: k, multipleOf: y, exclusiveMaximum: O, exclusiveMinimum: I } = t._zod.bag;
            typeof k == "string" && k.includes("int") ? h.type = "integer" : h.type = "number", typeof I == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (h.minimum = I, h.exclusiveMinimum = !0) : h.exclusiveMinimum = I), typeof _ == "number" && (h.minimum = _, typeof I == "number" && this.target !== "draft-4" && (I >= _ ? delete h.minimum : delete h.exclusiveMinimum)), typeof O == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (h.maximum = O, h.exclusiveMaximum = !0) : h.exclusiveMaximum = O), typeof S == "number" && (h.maximum = S, typeof O == "number" && this.target !== "draft-4" && (O <= S ? delete h.maximum : delete h.exclusiveMaximum)), typeof y == "number" && (h.multipleOf = y);
            break;
          }
          case "boolean": {
            const h = p;
            h.type = "boolean";
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
            const h = p, { minimum: _, maximum: S } = t._zod.bag;
            typeof _ == "number" && (h.minItems = _), typeof S == "number" && (h.maxItems = S), h.type = "array", h.items = this.process(n.element, { ...f, path: [...f.path, "items"] });
            break;
          }
          case "object": {
            const h = p;
            h.type = "object", h.properties = {};
            const _ = n.shape;
            for (const y in _)
              h.properties[y] = this.process(_[y], {
                ...f,
                path: [...f.path, "properties", y]
              });
            const S = new Set(Object.keys(_)), k = new Set([...S].filter((y) => {
              const O = n.shape[y]._zod;
              return this.io === "input" ? O.optin === void 0 : O.optout === void 0;
            }));
            k.size > 0 && (h.required = Array.from(k)), n.catchall?._zod.def.type === "never" ? h.additionalProperties = !1 : n.catchall ? n.catchall && (h.additionalProperties = this.process(n.catchall, {
              ...f,
              path: [...f.path, "additionalProperties"]
            })) : this.io === "output" && (h.additionalProperties = !1);
            break;
          }
          case "union": {
            const h = p, _ = n.discriminator !== void 0, S = n.options.map((k, y) => this.process(k, {
              ...f,
              path: [...f.path, _ ? "oneOf" : "anyOf", y]
            }));
            _ ? h.oneOf = S : h.anyOf = S;
            break;
          }
          case "intersection": {
            const h = p, _ = this.process(n.left, {
              ...f,
              path: [...f.path, "allOf", 0]
            }), S = this.process(n.right, {
              ...f,
              path: [...f.path, "allOf", 1]
            }), k = (O) => "allOf" in O && Object.keys(O).length === 1, y = [
              ...k(_) ? _.allOf : [_],
              ...k(S) ? S.allOf : [S]
            ];
            h.allOf = y;
            break;
          }
          case "tuple": {
            const h = p;
            h.type = "array";
            const _ = this.target === "draft-2020-12" ? "prefixItems" : "items", S = this.target === "draft-2020-12" || this.target === "openapi-3.0" ? "items" : "additionalItems", k = n.items.map((x, P) => this.process(x, {
              ...f,
              path: [...f.path, _, P]
            })), y = n.rest ? this.process(n.rest, {
              ...f,
              path: [...f.path, S, ...this.target === "openapi-3.0" ? [n.items.length] : []]
            }) : null;
            this.target === "draft-2020-12" ? (h.prefixItems = k, y && (h.items = y)) : this.target === "openapi-3.0" ? (h.items = {
              anyOf: k
            }, y && h.items.anyOf.push(y), h.minItems = k.length, y || (h.maxItems = k.length)) : (h.items = k, y && (h.additionalItems = y));
            const { minimum: O, maximum: I } = t._zod.bag;
            typeof O == "number" && (h.minItems = O), typeof I == "number" && (h.maxItems = I);
            break;
          }
          case "record": {
            const h = p;
            h.type = "object", (this.target === "draft-7" || this.target === "draft-2020-12") && (h.propertyNames = this.process(n.keyType, {
              ...f,
              path: [...f.path, "propertyNames"]
            })), h.additionalProperties = this.process(n.valueType, {
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
            const h = p, _ = Bi(n.entries);
            _.every((S) => typeof S == "number") && (h.type = "number"), _.every((S) => typeof S == "string") && (h.type = "string"), h.enum = _;
            break;
          }
          case "literal": {
            const h = p, _ = [];
            for (const S of n.values)
              if (S === void 0) {
                if (this.unrepresentable === "throw")
                  throw new Error("Literal `undefined` cannot be represented in JSON Schema");
              } else if (typeof S == "bigint") {
                if (this.unrepresentable === "throw")
                  throw new Error("BigInt literals cannot be represented in JSON Schema");
                _.push(Number(S));
              } else
                _.push(S);
            if (_.length !== 0) if (_.length === 1) {
              const S = _[0];
              h.type = S === null ? "null" : typeof S, this.target === "draft-4" || this.target === "openapi-3.0" ? h.enum = [S] : h.const = S;
            } else
              _.every((S) => typeof S == "number") && (h.type = "number"), _.every((S) => typeof S == "string") && (h.type = "string"), _.every((S) => typeof S == "boolean") && (h.type = "string"), _.every((S) => S === null) && (h.type = "null"), h.enum = _;
            break;
          }
          case "file": {
            const h = p, _ = {
              type: "string",
              format: "binary",
              contentEncoding: "binary"
            }, { minimum: S, maximum: k, mime: y } = t._zod.bag;
            S !== void 0 && (_.minLength = S), k !== void 0 && (_.maxLength = k), y ? y.length === 1 ? (_.contentMediaType = y[0], Object.assign(h, _)) : h.anyOf = y.map((O) => ({ ..._, contentMediaType: O })) : Object.assign(h, _);
            break;
          }
          case "transform": {
            if (this.unrepresentable === "throw")
              throw new Error("Transforms cannot be represented in JSON Schema");
            break;
          }
          case "nullable": {
            const h = this.process(n.innerType, f);
            this.target === "openapi-3.0" ? (l.ref = n.innerType, p.nullable = !0) : p.anyOf = [h, { type: "null" }];
            break;
          }
          case "nonoptional": {
            this.process(n.innerType, f), l.ref = n.innerType;
            break;
          }
          case "success": {
            const h = p;
            h.type = "boolean";
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
            let h;
            try {
              h = n.catchValue(void 0);
            } catch {
              throw new Error("Dynamic catch values are not supported in JSON Schema");
            }
            p.default = h;
            break;
          }
          case "nan": {
            if (this.unrepresentable === "throw")
              throw new Error("NaN cannot be represented in JSON Schema");
            break;
          }
          case "template_literal": {
            const h = p, _ = t._zod.pattern;
            if (!_)
              throw new Error("Pattern not found in template literal");
            h.type = "string", h.pattern = _.source;
            break;
          }
          case "pipe": {
            const h = this.io === "input" ? n.in._zod.def.type === "transform" ? n.out : n.in : n.out;
            this.process(h, f), l.ref = h;
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
            const h = t._zod.innerType;
            this.process(h, f), l.ref = h;
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
    return c && Object.assign(l.schema, c), this.io === "input" && Et(t) && (delete l.schema.examples, delete l.schema.default), this.io === "input" && l.schema._prefault && ((a = l.schema).default ?? (a.default = l.schema._prefault)), delete l.schema._prefault, this.seen.get(t).schema;
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
        const _ = a.external.registry.get(d[0])?.id, S = a.external.uri ?? ((y) => y);
        if (_)
          return { ref: S(_) };
        const k = d[1].defId ?? d[1].schema.id ?? `schema${this.counter++}`;
        return d[1].defId = k, { defId: k, ref: `${S("__shared")}#/${f}/${k}` };
      }
      if (d[1] === n)
        return { ref: "#" };
      const p = `#/${f}/`, h = d[1].schema.id ?? `__schema${this.counter++}`;
      return { defId: h, ref: p + h };
    }, i = (d) => {
      if (d[1].schema.$ref)
        return;
      const f = d[1], { ref: m, defId: p } = o(d);
      f.def = { ...f.schema }, p && (f.defId = p);
      const h = f.schema;
      for (const _ in h)
        delete h[_];
      h.$ref = m;
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
      const m = this.seen.get(d), p = m.def ?? m.schema, h = { ...p };
      if (m.ref === null)
        return;
      const _ = m.ref;
      if (m.ref = null, _) {
        l(_, f);
        const S = this.seen.get(_).schema;
        S.$ref && (f.target === "draft-7" || f.target === "draft-4" || f.target === "openapi-3.0") ? (p.allOf = p.allOf ?? [], p.allOf.push(S)) : (Object.assign(p, S), Object.assign(p, h));
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
function xv(e, t) {
  if (e instanceof ml) {
    const a = new di(t), n = {};
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
  const r = new di(t);
  return r.process(e), r.emit(e, t);
}
function Et(e, t) {
  const r = t ?? { seen: /* @__PURE__ */ new Set() };
  if (r.seen.has(e))
    return !1;
  r.seen.add(e);
  const a = e._zod.def;
  if (a.type === "transform")
    return !0;
  if (a.type === "array")
    return Et(a.element, r);
  if (a.type === "set")
    return Et(a.valueType, r);
  if (a.type === "lazy")
    return Et(a.getter(), r);
  if (a.type === "promise" || a.type === "optional" || a.type === "nonoptional" || a.type === "nullable" || a.type === "readonly" || a.type === "default" || a.type === "prefault")
    return Et(a.innerType, r);
  if (a.type === "intersection")
    return Et(a.left, r) || Et(a.right, r);
  if (a.type === "record" || a.type === "map")
    return Et(a.keyType, r) || Et(a.valueType, r);
  if (a.type === "pipe")
    return Et(a.in, r) || Et(a.out, r);
  if (a.type === "object") {
    for (const n in a.shape)
      if (Et(a.shape[n], r))
        return !0;
    return !1;
  }
  if (a.type === "union") {
    for (const n of a.options)
      if (Et(n, r))
        return !0;
    return !1;
  }
  if (a.type === "tuple") {
    for (const n of a.items)
      if (Et(n, r))
        return !0;
    return !!(a.rest && Et(a.rest, r));
  }
  return !1;
}
const SI = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), II = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $ZodAny: Jm,
  $ZodArray: ep,
  $ZodAsyncError: Gn,
  $ZodBase64: Um,
  $ZodBase64URL: Rm,
  $ZodBigInt: ul,
  $ZodBigIntFormat: Wm,
  $ZodBoolean: sl,
  $ZodCIDRv4: Cm,
  $ZodCIDRv6: jm,
  $ZodCUID: wm,
  $ZodCUID2: Sm,
  $ZodCatch: yp,
  $ZodCheck: Xe,
  $ZodCheckBigIntFormat: Qf,
  $ZodCheckEndsWith: dm,
  $ZodCheckGreaterThan: ol,
  $ZodCheckIncludes: um,
  $ZodCheckLengthEquals: om,
  $ZodCheckLessThan: al,
  $ZodCheckLowerCase: lm,
  $ZodCheckMaxLength: rm,
  $ZodCheckMaxSize: em,
  $ZodCheckMimeType: mm,
  $ZodCheckMinLength: am,
  $ZodCheckMinSize: tm,
  $ZodCheckMultipleOf: Yf,
  $ZodCheckNumberFormat: Xf,
  $ZodCheckOverwrite: pm,
  $ZodCheckProperty: fm,
  $ZodCheckRegex: im,
  $ZodCheckSizeEquals: nm,
  $ZodCheckStartsWith: cm,
  $ZodCheckStringFormat: oa,
  $ZodCheckUpperCase: sm,
  $ZodCodec: fl,
  $ZodCustom: Np,
  $ZodCustomStringFormat: Bm,
  $ZodDate: Qm,
  $ZodDefault: gp,
  $ZodDiscriminatedUnion: op,
  $ZodE164: Vm,
  $ZodEmail: _m,
  $ZodEmoji: $m,
  $ZodEncodeError: lo,
  $ZodEnum: cp,
  $ZodError: Wi,
  $ZodFile: fp,
  $ZodFunction: Ip,
  $ZodGUID: hm,
  $ZodIPv4: Tm,
  $ZodIPv6: Am,
  $ZodISODate: Em,
  $ZodISODateTime: Nm,
  $ZodISODuration: Pm,
  $ZodISOTime: zm,
  $ZodIntersection: ip,
  $ZodJWT: Mm,
  $ZodKSUID: Om,
  $ZodLazy: Op,
  $ZodLiteral: dp,
  $ZodMAC: Dm,
  $ZodMap: sp,
  $ZodNaN: $p,
  $ZodNanoID: km,
  $ZodNever: Ym,
  $ZodNonOptional: bp,
  $ZodNull: Hm,
  $ZodNullable: vp,
  $ZodNumber: ll,
  $ZodNumberFormat: Zm,
  $ZodObject: rp,
  $ZodObjectJIT: ap,
  $ZodOptional: pp,
  $ZodPipe: kp,
  $ZodPrefault: hp,
  $ZodPromise: xp,
  $ZodReadonly: wp,
  $ZodRealError: Bt,
  $ZodRecord: lp,
  $ZodRegistry: ml,
  $ZodSet: up,
  $ZodString: ia,
  $ZodStringFormat: Ve,
  $ZodSuccess: _p,
  $ZodSymbol: Gm,
  $ZodTemplateLiteral: Sp,
  $ZodTransform: mp,
  $ZodTuple: dl,
  $ZodType: Se,
  $ZodULID: Im,
  $ZodURL: ym,
  $ZodUUID: bm,
  $ZodUndefined: Km,
  $ZodUnion: cl,
  $ZodUnknown: qm,
  $ZodVoid: Xm,
  $ZodXID: xm,
  $brand: Zd,
  $constructor: T,
  $input: Dp,
  $output: Ap,
  Doc: vm,
  JSONSchema: SI,
  JSONSchemaGenerator: di,
  NEVER: Bd,
  TimePrecision: Lp,
  _any: ov,
  _array: hv,
  _base64: Pl,
  _base64url: Tl,
  _bigint: Xp,
  _boolean: qp,
  _catch: bI,
  _check: kv,
  _cidrv4: El,
  _cidrv6: zl,
  _coercedBigint: Qp,
  _coercedBoolean: Yp,
  _coercedDate: cv,
  _coercedNumber: Zp,
  _coercedString: jp,
  _cuid: kl,
  _cuid2: wl,
  _custom: _v,
  _date: uv,
  _decode: Ji,
  _decodeAsync: Yi,
  _default: vI,
  _discriminatedUnion: rI,
  _e164: Al,
  _email: vl,
  _emoji: yl,
  _encode: Hi,
  _encodeAsync: qi,
  _endsWith: Fl,
  _enum: uI,
  _file: bv,
  _float32: Gp,
  _float64: Kp,
  _gt: Qn,
  _gte: Vt,
  _guid: Za,
  _includes: Rl,
  _int: Wp,
  _int32: Hp,
  _int64: ev,
  _intersection: aI,
  _ipv4: Ol,
  _ipv6: Nl,
  _isoDate: Vp,
  _isoDateTime: Rp,
  _isoDuration: Mp,
  _isoTime: Fp,
  _jwt: Dl,
  _ksuid: xl,
  _lazy: kI,
  _length: go,
  _literal: dI,
  _lowercase: Ul,
  _lt: Xn,
  _lte: tn,
  _mac: Up,
  _map: lI,
  _max: tn,
  _maxLength: vo,
  _maxSize: po,
  _mime: Ml,
  _min: Vt,
  _minLength: mr,
  _minSize: Gr,
  _multipleOf: Wr,
  _nan: dv,
  _nanoid: $l,
  _nativeEnum: cI,
  _negative: mv,
  _never: lv,
  _nonnegative: vv,
  _nonoptional: gI,
  _nonpositive: pv,
  _normalize: Bl,
  _null: av,
  _nullable: pI,
  _number: Bp,
  _optional: mI,
  _overwrite: Dn,
  _parse: Qr,
  _parseAsync: ea,
  _pipe: _I,
  _positive: fv,
  _promise: wI,
  _property: gv,
  _readonly: yI,
  _record: iI,
  _refine: yv,
  _regex: jl,
  _safeDecode: Qi,
  _safeDecodeAsync: tl,
  _safeEncode: Xi,
  _safeEncodeAsync: el,
  _safeParse: ta,
  _safeParseAsync: na,
  _set: sI,
  _size: Cl,
  _slugify: Kl,
  _startsWith: Vl,
  _string: Cp,
  _stringFormat: la,
  _stringbool: Iv,
  _success: hI,
  _superRefine: $v,
  _symbol: nv,
  _templateLiteral: $I,
  _toLowerCase: Wl,
  _toUpperCase: Gl,
  _transform: fI,
  _trim: Zl,
  _tuple: oI,
  _uint32: Jp,
  _uint64: tv,
  _ulid: Sl,
  _undefined: rv,
  _union: nI,
  _unknown: iv,
  _uppercase: Ll,
  _url: mo,
  _uuid: gl,
  _uuidv4: hl,
  _uuidv6: bl,
  _uuidv7: _l,
  _void: sv,
  _xid: Il,
  clone: Kt,
  config: Pt,
  decode: Uw,
  decodeAsync: Rw,
  describe: wv,
  encode: jw,
  encodeAsync: Lw,
  flattenError: Gi,
  formatError: Ki,
  globalConfig: Va,
  globalRegistry: Xt,
  isValidBase64: il,
  isValidBase64URL: Lm,
  isValidJWT: Fm,
  locales: Tp,
  meta: Sv,
  parse: si,
  parseAsync: ui,
  prettifyError: ff,
  regexes: rl,
  registry: pl,
  safeDecode: Fw,
  safeDecodeAsync: Bw,
  safeEncode: Vw,
  safeEncodeAsync: Mw,
  safeParse: mf,
  safeParseAsync: pf,
  toDotPath: df,
  toJSONSchema: xv,
  treeifyError: cf,
  util: sf,
  version: gm
}, Symbol.toStringTag, { value: "Module" })), Hl = /* @__PURE__ */ T("ZodISODateTime", (e, t) => {
  Nm.init(e, t), Me.init(e, t);
});
function Ov(e) {
  return Rp(Hl, e);
}
const Jl = /* @__PURE__ */ T("ZodISODate", (e, t) => {
  Em.init(e, t), Me.init(e, t);
});
function Nv(e) {
  return Vp(Jl, e);
}
const ql = /* @__PURE__ */ T("ZodISOTime", (e, t) => {
  zm.init(e, t), Me.init(e, t);
});
function Ev(e) {
  return Fp(ql, e);
}
const Yl = /* @__PURE__ */ T("ZodISODuration", (e, t) => {
  Pm.init(e, t), Me.init(e, t);
});
function zv(e) {
  return Mp(Yl, e);
}
const xI = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ZodISODate: Jl,
  ZodISODateTime: Hl,
  ZodISODuration: Yl,
  ZodISOTime: ql,
  date: Nv,
  datetime: Ov,
  duration: zv,
  time: Ev
}, Symbol.toStringTag, { value: "Module" })), Pv = (e, t) => {
  Wi.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
    format: {
      value: (r) => Ki(e, r)
      // enumerable: false,
    },
    flatten: {
      value: (r) => Gi(e, r)
      // enumerable: false,
    },
    addIssue: {
      value: (r) => {
        e.issues.push(r), e.message = JSON.stringify(e.issues, Fa, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (r) => {
        e.issues.push(...r), e.message = JSON.stringify(e.issues, Fa, 2);
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
}, OI = T("ZodError", Pv), Zt = T("ZodError", Pv, {
  Parent: Error
}), Tv = /* @__PURE__ */ Qr(Zt), Av = /* @__PURE__ */ ea(Zt), Dv = /* @__PURE__ */ ta(Zt), Cv = /* @__PURE__ */ na(Zt), jv = /* @__PURE__ */ Hi(Zt), Uv = /* @__PURE__ */ Ji(Zt), Lv = /* @__PURE__ */ qi(Zt), Rv = /* @__PURE__ */ Yi(Zt), Vv = /* @__PURE__ */ Xi(Zt), Fv = /* @__PURE__ */ Qi(Zt), Mv = /* @__PURE__ */ el(Zt), Bv = /* @__PURE__ */ tl(Zt), xe = /* @__PURE__ */ T("ZodType", (e, t) => (Se.init(e, t), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.check = (...r) => e.clone(Sn(t, {
  checks: [
    ...t.checks ?? [],
    ...r.map((a) => typeof a == "function" ? { _zod: { check: a, def: { check: "custom" }, onattach: [] } } : a)
  ]
})), e.clone = (r, a) => Kt(e, r, a), e.brand = () => e, e.register = ((r, a) => (r.add(e, a), e)), e.parse = (r, a) => Tv(e, r, a, { callee: e.parse }), e.safeParse = (r, a) => Dv(e, r, a), e.parseAsync = async (r, a) => Av(e, r, a, { callee: e.parseAsync }), e.safeParseAsync = async (r, a) => Cv(e, r, a), e.spa = e.safeParseAsync, e.encode = (r, a) => jv(e, r, a), e.decode = (r, a) => Uv(e, r, a), e.encodeAsync = async (r, a) => Lv(e, r, a), e.decodeAsync = async (r, a) => Rv(e, r, a), e.safeEncode = (r, a) => Vv(e, r, a), e.safeDecode = (r, a) => Fv(e, r, a), e.safeEncodeAsync = async (r, a) => Mv(e, r, a), e.safeDecodeAsync = async (r, a) => Bv(e, r, a), e.refine = (r, a) => e.check(Og(r, a)), e.superRefine = (r) => e.check(Ng(r)), e.overwrite = (r) => e.check(Dn(r)), e.optional = () => Ga(e), e.nullable = () => Ka(e), e.nullish = () => Ga(Ka(e)), e.nonoptional = (r) => vg(e, r), e.array = () => $o(e), e.or = (r) => ys([e, r]), e.and = (r) => ng(e, r), e.transform = (r) => Ha(e, ws(r)), e.default = (r) => fg(e, r), e.prefault = (r) => pg(e, r), e.catch = (r) => bg(e, r), e.pipe = (r) => Ha(e, r), e.readonly = () => $g(e), e.describe = (r) => {
  const a = e.clone();
  return Xt.add(a, { description: r }), a;
}, Object.defineProperty(e, "description", {
  get() {
    return Xt.get(e)?.description;
  },
  configurable: !0
}), e.meta = (...r) => {
  if (r.length === 0)
    return Xt.get(e);
  const a = e.clone();
  return Xt.add(a, r[0]), a;
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e)), Xl = /* @__PURE__ */ T("_ZodString", (e, t) => {
  ia.init(e, t), xe.init(e, t);
  const r = e._zod.bag;
  e.format = r.format ?? null, e.minLength = r.minimum ?? null, e.maxLength = r.maximum ?? null, e.regex = (...a) => e.check(jl(...a)), e.includes = (...a) => e.check(Rl(...a)), e.startsWith = (...a) => e.check(Vl(...a)), e.endsWith = (...a) => e.check(Fl(...a)), e.min = (...a) => e.check(mr(...a)), e.max = (...a) => e.check(vo(...a)), e.length = (...a) => e.check(go(...a)), e.nonempty = (...a) => e.check(mr(1, ...a)), e.lowercase = (a) => e.check(Ul(a)), e.uppercase = (a) => e.check(Ll(a)), e.trim = () => e.check(Zl()), e.normalize = (...a) => e.check(Bl(...a)), e.toLowerCase = () => e.check(Wl()), e.toUpperCase = () => e.check(Gl()), e.slugify = () => e.check(Kl());
}), sa = /* @__PURE__ */ T("ZodString", (e, t) => {
  ia.init(e, t), Xl.init(e, t), e.email = (r) => e.check(vl(Ql, r)), e.url = (r) => e.check(mo(ho, r)), e.jwt = (r) => e.check(Dl(ps, r)), e.emoji = (r) => e.check(yl(es, r)), e.guid = (r) => e.check(Za(Wa, r)), e.uuid = (r) => e.check(gl(_n, r)), e.uuidv4 = (r) => e.check(hl(_n, r)), e.uuidv6 = (r) => e.check(bl(_n, r)), e.uuidv7 = (r) => e.check(_l(_n, r)), e.nanoid = (r) => e.check($l(ts, r)), e.guid = (r) => e.check(Za(Wa, r)), e.cuid = (r) => e.check(kl(ns, r)), e.cuid2 = (r) => e.check(wl(rs, r)), e.ulid = (r) => e.check(Sl(as, r)), e.base64 = (r) => e.check(Pl(ds, r)), e.base64url = (r) => e.check(Tl(fs, r)), e.xid = (r) => e.check(Il(os, r)), e.ksuid = (r) => e.check(xl(is, r)), e.ipv4 = (r) => e.check(Ol(ls, r)), e.ipv6 = (r) => e.check(Nl(ss, r)), e.cidrv4 = (r) => e.check(El(us, r)), e.cidrv6 = (r) => e.check(zl(cs, r)), e.e164 = (r) => e.check(Al(ms, r)), e.datetime = (r) => e.check(Ov(r)), e.date = (r) => e.check(Nv(r)), e.time = (r) => e.check(Ev(r)), e.duration = (r) => e.check(zv(r));
});
function fi(e) {
  return Cp(sa, e);
}
const Me = /* @__PURE__ */ T("ZodStringFormat", (e, t) => {
  Ve.init(e, t), Xl.init(e, t);
}), Ql = /* @__PURE__ */ T("ZodEmail", (e, t) => {
  _m.init(e, t), Me.init(e, t);
});
function NI(e) {
  return vl(Ql, e);
}
const Wa = /* @__PURE__ */ T("ZodGUID", (e, t) => {
  hm.init(e, t), Me.init(e, t);
});
function EI(e) {
  return Za(Wa, e);
}
const _n = /* @__PURE__ */ T("ZodUUID", (e, t) => {
  bm.init(e, t), Me.init(e, t);
});
function zI(e) {
  return gl(_n, e);
}
function PI(e) {
  return hl(_n, e);
}
function TI(e) {
  return bl(_n, e);
}
function AI(e) {
  return _l(_n, e);
}
const ho = /* @__PURE__ */ T("ZodURL", (e, t) => {
  ym.init(e, t), Me.init(e, t);
});
function DI(e) {
  return mo(ho, e);
}
function CI(e) {
  return mo(ho, {
    protocol: /^https?$/,
    hostname: Af,
    ...V(e)
  });
}
const es = /* @__PURE__ */ T("ZodEmoji", (e, t) => {
  $m.init(e, t), Me.init(e, t);
});
function jI(e) {
  return yl(es, e);
}
const ts = /* @__PURE__ */ T("ZodNanoID", (e, t) => {
  km.init(e, t), Me.init(e, t);
});
function UI(e) {
  return $l(ts, e);
}
const ns = /* @__PURE__ */ T("ZodCUID", (e, t) => {
  wm.init(e, t), Me.init(e, t);
});
function LI(e) {
  return kl(ns, e);
}
const rs = /* @__PURE__ */ T("ZodCUID2", (e, t) => {
  Sm.init(e, t), Me.init(e, t);
});
function RI(e) {
  return wl(rs, e);
}
const as = /* @__PURE__ */ T("ZodULID", (e, t) => {
  Im.init(e, t), Me.init(e, t);
});
function VI(e) {
  return Sl(as, e);
}
const os = /* @__PURE__ */ T("ZodXID", (e, t) => {
  xm.init(e, t), Me.init(e, t);
});
function FI(e) {
  return Il(os, e);
}
const is = /* @__PURE__ */ T("ZodKSUID", (e, t) => {
  Om.init(e, t), Me.init(e, t);
});
function MI(e) {
  return xl(is, e);
}
const ls = /* @__PURE__ */ T("ZodIPv4", (e, t) => {
  Tm.init(e, t), Me.init(e, t);
});
function BI(e) {
  return Ol(ls, e);
}
const Zv = /* @__PURE__ */ T("ZodMAC", (e, t) => {
  Dm.init(e, t), Me.init(e, t);
});
function ZI(e) {
  return Up(Zv, e);
}
const ss = /* @__PURE__ */ T("ZodIPv6", (e, t) => {
  Am.init(e, t), Me.init(e, t);
});
function WI(e) {
  return Nl(ss, e);
}
const us = /* @__PURE__ */ T("ZodCIDRv4", (e, t) => {
  Cm.init(e, t), Me.init(e, t);
});
function GI(e) {
  return El(us, e);
}
const cs = /* @__PURE__ */ T("ZodCIDRv6", (e, t) => {
  jm.init(e, t), Me.init(e, t);
});
function KI(e) {
  return zl(cs, e);
}
const ds = /* @__PURE__ */ T("ZodBase64", (e, t) => {
  Um.init(e, t), Me.init(e, t);
});
function HI(e) {
  return Pl(ds, e);
}
const fs = /* @__PURE__ */ T("ZodBase64URL", (e, t) => {
  Rm.init(e, t), Me.init(e, t);
});
function JI(e) {
  return Tl(fs, e);
}
const ms = /* @__PURE__ */ T("ZodE164", (e, t) => {
  Vm.init(e, t), Me.init(e, t);
});
function qI(e) {
  return Al(ms, e);
}
const ps = /* @__PURE__ */ T("ZodJWT", (e, t) => {
  Mm.init(e, t), Me.init(e, t);
});
function YI(e) {
  return Dl(ps, e);
}
const ua = /* @__PURE__ */ T("ZodCustomStringFormat", (e, t) => {
  Bm.init(e, t), Me.init(e, t);
});
function XI(e, t, r = {}) {
  return la(ua, e, t, r);
}
function QI(e) {
  return la(ua, "hostname", Tf, e);
}
function ex(e) {
  return la(ua, "hex", Jf, e);
}
function tx(e, t) {
  const r = t?.enc ?? "hex", a = `${e}_${r}`, n = rl[a];
  if (!n)
    throw new Error(`Unrecognized hash format: ${a}`);
  return la(ua, a, n, t);
}
const bo = /* @__PURE__ */ T("ZodNumber", (e, t) => {
  ll.init(e, t), xe.init(e, t), e.gt = (a, n) => e.check(Qn(a, n)), e.gte = (a, n) => e.check(Vt(a, n)), e.min = (a, n) => e.check(Vt(a, n)), e.lt = (a, n) => e.check(Xn(a, n)), e.lte = (a, n) => e.check(tn(a, n)), e.max = (a, n) => e.check(tn(a, n)), e.int = (a) => e.check(mi(a)), e.safe = (a) => e.check(mi(a)), e.positive = (a) => e.check(Qn(0, a)), e.nonnegative = (a) => e.check(Vt(0, a)), e.negative = (a) => e.check(Xn(0, a)), e.nonpositive = (a) => e.check(tn(0, a)), e.multipleOf = (a, n) => e.check(Wr(a, n)), e.step = (a, n) => e.check(Wr(a, n)), e.finite = () => e;
  const r = e._zod.bag;
  e.minValue = Math.max(r.minimum ?? Number.NEGATIVE_INFINITY, r.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(r.maximum ?? Number.POSITIVE_INFINITY, r.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (r.format ?? "").includes("int") || Number.isSafeInteger(r.multipleOf ?? 0.5), e.isFinite = !0, e.format = r.format ?? null;
});
function Wv(e) {
  return Bp(bo, e);
}
const wr = /* @__PURE__ */ T("ZodNumberFormat", (e, t) => {
  Zm.init(e, t), bo.init(e, t);
});
function mi(e) {
  return Wp(wr, e);
}
function nx(e) {
  return Gp(wr, e);
}
function rx(e) {
  return Kp(wr, e);
}
function ax(e) {
  return Hp(wr, e);
}
function ox(e) {
  return Jp(wr, e);
}
const _o = /* @__PURE__ */ T("ZodBoolean", (e, t) => {
  sl.init(e, t), xe.init(e, t);
});
function Gv(e) {
  return qp(_o, e);
}
const yo = /* @__PURE__ */ T("ZodBigInt", (e, t) => {
  ul.init(e, t), xe.init(e, t), e.gte = (a, n) => e.check(Vt(a, n)), e.min = (a, n) => e.check(Vt(a, n)), e.gt = (a, n) => e.check(Qn(a, n)), e.gte = (a, n) => e.check(Vt(a, n)), e.min = (a, n) => e.check(Vt(a, n)), e.lt = (a, n) => e.check(Xn(a, n)), e.lte = (a, n) => e.check(tn(a, n)), e.max = (a, n) => e.check(tn(a, n)), e.positive = (a) => e.check(Qn(BigInt(0), a)), e.negative = (a) => e.check(Xn(BigInt(0), a)), e.nonpositive = (a) => e.check(tn(BigInt(0), a)), e.nonnegative = (a) => e.check(Vt(BigInt(0), a)), e.multipleOf = (a, n) => e.check(Wr(a, n));
  const r = e._zod.bag;
  e.minValue = r.minimum ?? null, e.maxValue = r.maximum ?? null, e.format = r.format ?? null;
});
function ix(e) {
  return Xp(yo, e);
}
const vs = /* @__PURE__ */ T("ZodBigIntFormat", (e, t) => {
  Wm.init(e, t), yo.init(e, t);
});
function lx(e) {
  return ev(vs, e);
}
function sx(e) {
  return tv(vs, e);
}
const Kv = /* @__PURE__ */ T("ZodSymbol", (e, t) => {
  Gm.init(e, t), xe.init(e, t);
});
function ux(e) {
  return nv(Kv, e);
}
const Hv = /* @__PURE__ */ T("ZodUndefined", (e, t) => {
  Km.init(e, t), xe.init(e, t);
});
function cx(e) {
  return rv(Hv, e);
}
const gs = /* @__PURE__ */ T("ZodNull", (e, t) => {
  Hm.init(e, t), xe.init(e, t);
});
function Jv(e) {
  return av(gs, e);
}
const qv = /* @__PURE__ */ T("ZodAny", (e, t) => {
  Jm.init(e, t), xe.init(e, t);
});
function dx() {
  return ov(qv);
}
const Yv = /* @__PURE__ */ T("ZodUnknown", (e, t) => {
  qm.init(e, t), xe.init(e, t);
});
function pr() {
  return iv(Yv);
}
const Xv = /* @__PURE__ */ T("ZodNever", (e, t) => {
  Ym.init(e, t), xe.init(e, t);
});
function hs(e) {
  return lv(Xv, e);
}
const Qv = /* @__PURE__ */ T("ZodVoid", (e, t) => {
  Xm.init(e, t), xe.init(e, t);
});
function fx(e) {
  return sv(Qv, e);
}
const bs = /* @__PURE__ */ T("ZodDate", (e, t) => {
  Qm.init(e, t), xe.init(e, t), e.min = (a, n) => e.check(Vt(a, n)), e.max = (a, n) => e.check(tn(a, n));
  const r = e._zod.bag;
  e.minDate = r.minimum ? new Date(r.minimum) : null, e.maxDate = r.maximum ? new Date(r.maximum) : null;
});
function mx(e) {
  return uv(bs, e);
}
const _s = /* @__PURE__ */ T("ZodArray", (e, t) => {
  ep.init(e, t), xe.init(e, t), e.element = t.element, e.min = (r, a) => e.check(mr(r, a)), e.nonempty = (r) => e.check(mr(1, r)), e.max = (r, a) => e.check(vo(r, a)), e.length = (r, a) => e.check(go(r, a)), e.unwrap = () => e.element;
});
function $o(e, t) {
  return hv(_s, e, t);
}
function px(e) {
  const t = e._zod.def.shape;
  return ks(Object.keys(t));
}
const vr = /* @__PURE__ */ T("ZodObject", (e, t) => {
  ap.init(e, t), xe.init(e, t), Ae(e, "shape", () => t.shape), e.keyof = () => ks(Object.keys(e._zod.def.shape)), e.catchall = (r) => e.clone({ ...e._zod.def, catchall: r }), e.passthrough = () => e.clone({ ...e._zod.def, catchall: pr() }), e.loose = () => e.clone({ ...e._zod.def, catchall: pr() }), e.strict = () => e.clone({ ...e._zod.def, catchall: hs() }), e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 }), e.extend = (r) => ef(e, r), e.safeExtend = (r) => tf(e, r), e.merge = (r) => nf(e, r), e.pick = (r) => Xd(e, r), e.omit = (r) => Qd(e, r), e.partial = (...r) => rf(Ss, e, r[0]), e.required = (...r) => af(Is, e, r[0]);
});
function vx(e, t) {
  const r = {
    type: "object",
    shape: e ?? {},
    ...V(t)
  };
  return new vr(r);
}
function gx(e, t) {
  return new vr({
    type: "object",
    shape: e,
    catchall: hs(),
    ...V(t)
  });
}
function hx(e, t) {
  return new vr({
    type: "object",
    shape: e,
    catchall: pr(),
    ...V(t)
  });
}
const ko = /* @__PURE__ */ T("ZodUnion", (e, t) => {
  cl.init(e, t), xe.init(e, t), e.options = t.options;
});
function ys(e, t) {
  return new ko({
    type: "union",
    options: e,
    ...V(t)
  });
}
const eg = /* @__PURE__ */ T("ZodDiscriminatedUnion", (e, t) => {
  ko.init(e, t), op.init(e, t);
});
function bx(e, t, r) {
  return new eg({
    type: "union",
    options: t,
    discriminator: e,
    ...V(r)
  });
}
const tg = /* @__PURE__ */ T("ZodIntersection", (e, t) => {
  ip.init(e, t), xe.init(e, t);
});
function ng(e, t) {
  return new tg({
    type: "intersection",
    left: e,
    right: t
  });
}
const rg = /* @__PURE__ */ T("ZodTuple", (e, t) => {
  dl.init(e, t), xe.init(e, t), e.rest = (r) => e.clone({
    ...e._zod.def,
    rest: r
  });
});
function ag(e, t, r) {
  const a = t instanceof Se, n = a ? r : t, o = a ? t : null;
  return new rg({
    type: "tuple",
    items: e,
    rest: o,
    ...V(n)
  });
}
const $s = /* @__PURE__ */ T("ZodRecord", (e, t) => {
  lp.init(e, t), xe.init(e, t), e.keyType = t.keyType, e.valueType = t.valueType;
});
function og(e, t, r) {
  return new $s({
    type: "record",
    keyType: e,
    valueType: t,
    ...V(r)
  });
}
function _x(e, t, r) {
  const a = Kt(e);
  return a._zod.values = void 0, new $s({
    type: "record",
    keyType: a,
    valueType: t,
    ...V(r)
  });
}
const ig = /* @__PURE__ */ T("ZodMap", (e, t) => {
  sp.init(e, t), xe.init(e, t), e.keyType = t.keyType, e.valueType = t.valueType;
});
function yx(e, t, r) {
  return new ig({
    type: "map",
    keyType: e,
    valueType: t,
    ...V(r)
  });
}
const lg = /* @__PURE__ */ T("ZodSet", (e, t) => {
  up.init(e, t), xe.init(e, t), e.min = (...r) => e.check(Gr(...r)), e.nonempty = (r) => e.check(Gr(1, r)), e.max = (...r) => e.check(po(...r)), e.size = (...r) => e.check(Cl(...r));
});
function $x(e, t) {
  return new lg({
    type: "set",
    valueType: e,
    ...V(t)
  });
}
const Kr = /* @__PURE__ */ T("ZodEnum", (e, t) => {
  cp.init(e, t), xe.init(e, t), e.enum = t.entries, e.options = Object.values(t.entries);
  const r = new Set(Object.keys(t.entries));
  e.extract = (a, n) => {
    const o = {};
    for (const i of a)
      if (r.has(i))
        o[i] = t.entries[i];
      else
        throw new Error(`Key ${i} not found in enum`);
    return new Kr({
      ...t,
      checks: [],
      ...V(n),
      entries: o
    });
  }, e.exclude = (a, n) => {
    const o = { ...t.entries };
    for (const i of a)
      if (r.has(i))
        delete o[i];
      else
        throw new Error(`Key ${i} not found in enum`);
    return new Kr({
      ...t,
      checks: [],
      ...V(n),
      entries: o
    });
  };
});
function ks(e, t) {
  const r = Array.isArray(e) ? Object.fromEntries(e.map((a) => [a, a])) : e;
  return new Kr({
    type: "enum",
    entries: r,
    ...V(t)
  });
}
function kx(e, t) {
  return new Kr({
    type: "enum",
    entries: e,
    ...V(t)
  });
}
const sg = /* @__PURE__ */ T("ZodLiteral", (e, t) => {
  dp.init(e, t), xe.init(e, t), e.values = new Set(t.values), Object.defineProperty(e, "value", {
    get() {
      if (t.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return t.values[0];
    }
  });
});
function wx(e, t) {
  return new sg({
    type: "literal",
    values: Array.isArray(e) ? e : [e],
    ...V(t)
  });
}
const ug = /* @__PURE__ */ T("ZodFile", (e, t) => {
  fp.init(e, t), xe.init(e, t), e.min = (r, a) => e.check(Gr(r, a)), e.max = (r, a) => e.check(po(r, a)), e.mime = (r, a) => e.check(Ml(Array.isArray(r) ? r : [r], a));
});
function Sx(e) {
  return bv(ug, e);
}
const cg = /* @__PURE__ */ T("ZodTransform", (e, t) => {
  mp.init(e, t), xe.init(e, t), e._zod.parse = (r, a) => {
    if (a.direction === "backward")
      throw new lo(e.constructor.name);
    r.addIssue = (o) => {
      if (typeof o == "string")
        r.issues.push(dr(o, r.value, t));
      else {
        const i = o;
        i.fatal && (i.continue = !1), i.code ?? (i.code = "custom"), i.input ?? (i.input = r.value), i.inst ?? (i.inst = e), r.issues.push(dr(i));
      }
    };
    const n = t.transform(r.value, r);
    return n instanceof Promise ? n.then((o) => (r.value = o, r)) : (r.value = n, r);
  };
});
function ws(e) {
  return new cg({
    type: "transform",
    transform: e
  });
}
const Ss = /* @__PURE__ */ T("ZodOptional", (e, t) => {
  pp.init(e, t), xe.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function Ga(e) {
  return new Ss({
    type: "optional",
    innerType: e
  });
}
const dg = /* @__PURE__ */ T("ZodNullable", (e, t) => {
  vp.init(e, t), xe.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function Ka(e) {
  return new dg({
    type: "nullable",
    innerType: e
  });
}
function Ix(e) {
  return Ga(Ka(e));
}
const wo = /* @__PURE__ */ T("ZodDefault", (e, t) => {
  gp.init(e, t), xe.init(e, t), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function fg(e, t) {
  return new wo({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : uo(t);
    }
  });
}
const mg = /* @__PURE__ */ T("ZodPrefault", (e, t) => {
  hp.init(e, t), xe.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function pg(e, t) {
  return new mg({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : uo(t);
    }
  });
}
const Is = /* @__PURE__ */ T("ZodNonOptional", (e, t) => {
  bp.init(e, t), xe.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function vg(e, t) {
  return new Is({
    type: "nonoptional",
    innerType: e,
    ...V(t)
  });
}
const gg = /* @__PURE__ */ T("ZodSuccess", (e, t) => {
  _p.init(e, t), xe.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function xx(e) {
  return new gg({
    type: "success",
    innerType: e
  });
}
const hg = /* @__PURE__ */ T("ZodCatch", (e, t) => {
  yp.init(e, t), xe.init(e, t), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function bg(e, t) {
  return new hg({
    type: "catch",
    innerType: e,
    catchValue: typeof t == "function" ? t : () => t
  });
}
const _g = /* @__PURE__ */ T("ZodNaN", (e, t) => {
  $p.init(e, t), xe.init(e, t);
});
function Ox(e) {
  return dv(_g, e);
}
const xs = /* @__PURE__ */ T("ZodPipe", (e, t) => {
  kp.init(e, t), xe.init(e, t), e.in = t.in, e.out = t.out;
});
function Ha(e, t) {
  return new xs({
    type: "pipe",
    in: e,
    out: t
    // ...util.normalizeParams(params),
  });
}
const Os = /* @__PURE__ */ T("ZodCodec", (e, t) => {
  xs.init(e, t), fl.init(e, t);
});
function Nx(e, t, r) {
  return new Os({
    type: "pipe",
    in: e,
    out: t,
    transform: r.decode,
    reverseTransform: r.encode
  });
}
const yg = /* @__PURE__ */ T("ZodReadonly", (e, t) => {
  wp.init(e, t), xe.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function $g(e) {
  return new yg({
    type: "readonly",
    innerType: e
  });
}
const kg = /* @__PURE__ */ T("ZodTemplateLiteral", (e, t) => {
  Sp.init(e, t), xe.init(e, t);
});
function Ex(e, t) {
  return new kg({
    type: "template_literal",
    parts: e,
    ...V(t)
  });
}
const wg = /* @__PURE__ */ T("ZodLazy", (e, t) => {
  Op.init(e, t), xe.init(e, t), e.unwrap = () => e._zod.def.getter();
});
function Sg(e) {
  return new wg({
    type: "lazy",
    getter: e
  });
}
const Ig = /* @__PURE__ */ T("ZodPromise", (e, t) => {
  xp.init(e, t), xe.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function zx(e) {
  return new Ig({
    type: "promise",
    innerType: e
  });
}
const xg = /* @__PURE__ */ T("ZodFunction", (e, t) => {
  Ip.init(e, t), xe.init(e, t);
});
function ec(e) {
  return new xg({
    type: "function",
    input: Array.isArray(e?.input) ? ag(e?.input) : e?.input ?? $o(pr()),
    output: e?.output ?? pr()
  });
}
const So = /* @__PURE__ */ T("ZodCustom", (e, t) => {
  Np.init(e, t), xe.init(e, t);
});
function Px(e) {
  const t = new Xe({
    check: "custom"
    // ...util.normalizeParams(params),
  });
  return t._zod.check = e, t;
}
function Tx(e, t) {
  return _v(So, e ?? (() => !0), t);
}
function Og(e, t = {}) {
  return yv(So, e, t);
}
function Ng(e) {
  return $v(e);
}
const Ax = wv, Dx = Sv;
function Cx(e, t = {
  error: `Input not instance of ${e.name}`
}) {
  const r = new So({
    type: "custom",
    check: "custom",
    fn: (a) => a instanceof e,
    abort: !0,
    ...V(t)
  });
  return r._zod.bag.Class = e, r;
}
const jx = (...e) => Iv({
  Codec: Os,
  Boolean: _o,
  String: sa
}, ...e);
function Ux(e) {
  const t = Sg(() => ys([fi(e), Wv(), Gv(), Jv(), $o(t), og(fi(), t)]));
  return t;
}
function Lx(e, t) {
  return Ha(ws(e), t);
}
const Rx = {
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
function Vx(e) {
  Pt({
    customError: e
  });
}
function Fx() {
  return Pt().customError;
}
var Hr;
Hr || (Hr = {});
function Mx(e) {
  return jp(sa, e);
}
function Bx(e) {
  return Zp(bo, e);
}
function Zx(e) {
  return Yp(_o, e);
}
function Wx(e) {
  return Qp(yo, e);
}
function Gx(e) {
  return cv(bs, e);
}
const Kx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  bigint: Wx,
  boolean: Zx,
  date: Gx,
  number: Bx,
  string: Mx
}, Symbol.toStringTag, { value: "Module" }));
Pt(Ep());
const tc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $brand: Zd,
  $input: Dp,
  $output: Ap,
  NEVER: Bd,
  TimePrecision: Lp,
  ZodAny: qv,
  ZodArray: _s,
  ZodBase64: ds,
  ZodBase64URL: fs,
  ZodBigInt: yo,
  ZodBigIntFormat: vs,
  ZodBoolean: _o,
  ZodCIDRv4: us,
  ZodCIDRv6: cs,
  ZodCUID: ns,
  ZodCUID2: rs,
  ZodCatch: hg,
  ZodCodec: Os,
  ZodCustom: So,
  ZodCustomStringFormat: ua,
  ZodDate: bs,
  ZodDefault: wo,
  ZodDiscriminatedUnion: eg,
  ZodE164: ms,
  ZodEmail: Ql,
  ZodEmoji: es,
  ZodEnum: Kr,
  ZodError: OI,
  ZodFile: ug,
  get ZodFirstPartyTypeKind() {
    return Hr;
  },
  ZodFunction: xg,
  ZodGUID: Wa,
  ZodIPv4: ls,
  ZodIPv6: ss,
  ZodISODate: Jl,
  ZodISODateTime: Hl,
  ZodISODuration: Yl,
  ZodISOTime: ql,
  ZodIntersection: tg,
  ZodIssueCode: Rx,
  ZodJWT: ps,
  ZodKSUID: is,
  ZodLazy: wg,
  ZodLiteral: sg,
  ZodMAC: Zv,
  ZodMap: ig,
  ZodNaN: _g,
  ZodNanoID: ts,
  ZodNever: Xv,
  ZodNonOptional: Is,
  ZodNull: gs,
  ZodNullable: dg,
  ZodNumber: bo,
  ZodNumberFormat: wr,
  ZodObject: vr,
  ZodOptional: Ss,
  ZodPipe: xs,
  ZodPrefault: mg,
  ZodPromise: Ig,
  ZodReadonly: yg,
  ZodRealError: Zt,
  ZodRecord: $s,
  ZodSet: lg,
  ZodString: sa,
  ZodStringFormat: Me,
  ZodSuccess: gg,
  ZodSymbol: Kv,
  ZodTemplateLiteral: kg,
  ZodTransform: cg,
  ZodTuple: rg,
  ZodType: xe,
  ZodULID: as,
  ZodURL: ho,
  ZodUUID: _n,
  ZodUndefined: Hv,
  ZodUnion: ko,
  ZodUnknown: Yv,
  ZodVoid: Qv,
  ZodXID: os,
  _ZodString: Xl,
  _default: fg,
  _function: ec,
  any: dx,
  array: $o,
  base64: HI,
  base64url: JI,
  bigint: ix,
  boolean: Gv,
  catch: bg,
  check: Px,
  cidrv4: GI,
  cidrv6: KI,
  clone: Kt,
  codec: Nx,
  coerce: Kx,
  config: Pt,
  core: II,
  cuid: LI,
  cuid2: RI,
  custom: Tx,
  date: mx,
  decode: Uv,
  decodeAsync: Rv,
  describe: Ax,
  discriminatedUnion: bx,
  e164: qI,
  email: NI,
  emoji: jI,
  encode: jv,
  encodeAsync: Lv,
  endsWith: Fl,
  enum: ks,
  file: Sx,
  flattenError: Gi,
  float32: nx,
  float64: rx,
  formatError: Ki,
  function: ec,
  getErrorMap: Fx,
  globalRegistry: Xt,
  gt: Qn,
  gte: Vt,
  guid: EI,
  hash: tx,
  hex: ex,
  hostname: QI,
  httpUrl: CI,
  includes: Rl,
  instanceof: Cx,
  int: mi,
  int32: ax,
  int64: lx,
  intersection: ng,
  ipv4: BI,
  ipv6: WI,
  iso: xI,
  json: Ux,
  jwt: YI,
  keyof: px,
  ksuid: MI,
  lazy: Sg,
  length: go,
  literal: wx,
  locales: Tp,
  looseObject: hx,
  lowercase: Ul,
  lt: Xn,
  lte: tn,
  mac: ZI,
  map: yx,
  maxLength: vo,
  maxSize: po,
  meta: Dx,
  mime: Ml,
  minLength: mr,
  minSize: Gr,
  multipleOf: Wr,
  nan: Ox,
  nanoid: UI,
  nativeEnum: kx,
  negative: mv,
  never: hs,
  nonnegative: vv,
  nonoptional: vg,
  nonpositive: pv,
  normalize: Bl,
  null: Jv,
  nullable: Ka,
  nullish: Ix,
  number: Wv,
  object: vx,
  optional: Ga,
  overwrite: Dn,
  parse: Tv,
  parseAsync: Av,
  partialRecord: _x,
  pipe: Ha,
  positive: fv,
  prefault: pg,
  preprocess: Lx,
  prettifyError: ff,
  promise: zx,
  property: gv,
  readonly: $g,
  record: og,
  refine: Og,
  regex: jl,
  regexes: rl,
  registry: pl,
  safeDecode: Fv,
  safeDecodeAsync: Bv,
  safeEncode: Vv,
  safeEncodeAsync: Mv,
  safeParse: Dv,
  safeParseAsync: Cv,
  set: $x,
  setErrorMap: Vx,
  size: Cl,
  slugify: Kl,
  startsWith: Vl,
  strictObject: gx,
  string: fi,
  stringFormat: XI,
  stringbool: jx,
  success: xx,
  superRefine: Ng,
  symbol: ux,
  templateLiteral: Ex,
  toJSONSchema: xv,
  toLowerCase: Wl,
  toUpperCase: Gl,
  transform: ws,
  treeifyError: cf,
  trim: Zl,
  tuple: ag,
  uint32: ox,
  uint64: sx,
  ulid: VI,
  undefined: cx,
  union: ys,
  unknown: pr,
  uppercase: Ll,
  url: DI,
  util: sf,
  uuid: zI,
  uuidv4: PI,
  uuidv6: TI,
  uuidv7: AI,
  void: fx,
  xid: FI
}, Symbol.toStringTag, { value: "Module" }));
function nc(e, t, r, a = !1, n) {
  Hn(e, "keydown", (o) => {
    ["Space", "Enter"].includes(o.code) && document.activeElement?.matches(t) && (o.preventDefault(), r(document.activeElement, o));
  }), Hn(e, "click", (o) => {
    const i = o.target.closest(
      t
    );
    i && (a && (o.stopPropagation(), o.stopImmediatePropagation()), o.preventDefault(), r(i, o));
  });
}
function Hx(e, t, r, a, n) {
  const o = e.includes(r), i = t.indexOf(r), l = t.indexOf(a), u = i < l ? t.slice(i, l + 1) : t.slice(l, i);
  return o ? T$([...e, ...u]) : e.filter((c) => !u.includes(c));
}
function Jx(e, t, r) {
  let a = null;
  const n = /* @__PURE__ */ Yy("Shift");
  Le(
    () => e.value,
    (o, i) => {
      const l = o.length > i.length ? su(o, i, r) : su(i, o, r);
      if (l.length === 1) {
        const u = l[0];
        n.value && a && (e.value = Hx(
          e.value,
          t.value,
          a,
          u
        )), a = u;
      }
    }
  );
}
function rc(e) {
  const t = e.shape, r = {};
  for (const a in t) {
    const n = t[a], o = n._def.typeName === "ZodOptional", i = n._def.innerType || n;
    let l = n;
    if (i instanceof ko) {
      const c = i._def.options.filter(
        (d) => !(d instanceof gs)
      );
      c.length === 1 && (l = c[0].optional());
    }
    l instanceof sa && l._def?.checks?.[0] && l._def.checks[0].kind === "datetime" && (l = tc.date()), o && (l = l.optional()), r[a] = l;
  }
  return tc.object(r);
}
const Eg = /* @__PURE__ */ D({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = We(e, t);
    return (o, i) => (g(), A(s(nb), J({ "data-slot": "dropdown-menu" }, s(n)), {
      default: v(() => [
        C(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qx = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, Yx = /* @__PURE__ */ D({
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
    const r = e, a = t, n = pe(r, "class"), o = We(n, a);
    return (i, l) => (g(), A(s(rb), J({ "data-slot": "dropdown-menu-checkbox-item" }, s(o), {
      class: s(Z)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        r.class
      )
    }), {
      default: v(() => [
        oe("span", qx, [
          $(s(ab), null, {
            default: v(() => [
              $(s(to), { class: "size-4" })
            ]),
            _: 1
          })
        ]),
        C(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), zg = /* @__PURE__ */ D({
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
    const r = e, a = t, n = pe(r, "class"), o = We(n, a);
    return (i, l) => (g(), A(s(ob), null, {
      default: v(() => [
        $(s(ib), J({ "data-slot": "dropdown-menu-content" }, s(o), {
          class: s(Z)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--reka-dropdown-menu-content-available-height) min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", r.class)
        }), {
          default: v(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Ia = /* @__PURE__ */ D({
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
    const t = e, r = pe(t, "inset", "variant", "class"), a = Ye(r);
    return (n, o) => (g(), A(s(lb), J({
      "data-slot": "dropdown-menu-item",
      "data-inset": e.inset ? "" : void 0,
      "data-variant": e.variant
    }, s(a), {
      class: s(Z)("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive-foreground data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/40 data-[variant=destructive]:focus:text-destructive-foreground data-[variant=destructive]:*:[svg]:!text-destructive-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", t.class)
    }), {
      default: v(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "data-variant", "class"]));
  }
}), Xx = /* @__PURE__ */ D({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(e) {
    const t = e, r = pe(t, "class", "inset"), a = Ye(r);
    return (n, o) => (g(), A(s(sb), J({
      "data-slot": "dropdown-menu-label",
      "data-inset": e.inset ? "" : void 0
    }, s(a), {
      class: s(Z)("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", t.class)
    }), {
      default: v(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), Pg = /* @__PURE__ */ D({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const r = Ye(e);
    return (a, n) => (g(), A(s(ub), J({ "data-slot": "dropdown-menu-trigger" }, s(r)), {
      default: v(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qx = /* @__PURE__ */ D({
  __name: "DataTableColumnHeader",
  props: {
    title: {},
    sortable: { type: Boolean, default: !1 },
    sortOrder: {},
    hideable: { type: Boolean, default: !0 }
  },
  emits: ["sort", "hide"],
  setup(e, { emit: t }) {
    const r = e, a = t, n = G(() => r.sortOrder ? r.sortOrder === "asc" ? Fs : Vs : i_);
    function o(l) {
      a("sort", l);
    }
    function i() {
      a("hide");
    }
    return (l, u) => !e.sortable && !e.hideable ? (g(), R("div", {
      key: 0,
      class: ge(s(Z)("flex items-center space-x-2"))
    }, [
      oe("span", null, ae(e.title), 1)
    ], 2)) : (g(), R("div", {
      key: 1,
      class: ge(s(Z)("flex items-center space-x-2"))
    }, [
      $(s(Eg), null, {
        default: v(() => [
          $(s(Pg), { "as-child": "" }, {
            default: v(() => [
              $(s(ft), {
                variant: "ghost",
                size: "sm",
                class: "-ml-3 h-8 data-[state=open]:bg-accent text-muted-foreground text-xs font-normal"
              }, {
                default: v(() => [
                  oe("span", null, ae(e.title), 1),
                  e.sortable ? (g(), A(dt(n.value), {
                    key: 0,
                    class: "ml-2 !h-3.5 !w-3.5"
                  })) : me("", !0)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          $(s(zg), { align: "start" }, {
            default: v(() => [
              e.sortable ? (g(), R(De, { key: 0 }, [
                $(s(Ia), {
                  onClick: u[0] || (u[0] = (c) => o("asc"))
                }, {
                  default: v(() => [
                    $(s(Fs), { class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                    u[3] || (u[3] = he(" Asc ", -1))
                  ]),
                  _: 1
                }),
                $(s(Ia), {
                  onClick: u[1] || (u[1] = (c) => o("desc"))
                }, {
                  default: v(() => [
                    $(s(Vs), { class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                    u[4] || (u[4] = he(" Desc ", -1))
                  ]),
                  _: 1
                }),
                e.sortOrder ? (g(), A(s(Ia), {
                  key: 0,
                  onClick: u[2] || (u[2] = (c) => o(void 0))
                }, {
                  default: v(() => [
                    $(s(r_), { class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                    u[5] || (u[5] = he(" Clear sort ", -1))
                  ]),
                  _: 1
                })) : me("", !0)
              ], 64)) : me("", !0),
              e.sortable && e.hideable ? (g(), A(s(Vi), { key: 1 })) : me("", !0),
              e.hideable ? (g(), A(s(Ia), {
                key: 2,
                onClick: i
              }, {
                default: v(() => [
                  $(s(s_), { class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                  u[6] || (u[6] = he(" Hide ", -1))
                ]),
                _: 1
              })) : me("", !0)
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ], 2));
  }
}), eO = /* @__PURE__ */ D({
  __name: "DataTableViewOptions",
  props: {
    columns: {},
    visibleColumns: {}
  },
  emits: ["update:visibleColumns"],
  setup(e, { emit: t }) {
    const r = e, a = t, n = G(
      () => r.columns.filter((u) => u.title && u.hideable !== !1)
    ), o = G(() => !r.visibleColumns || r.visibleColumns.length === 0 ? r.columns.map((u) => u.id) : r.visibleColumns);
    function i(u) {
      return o.value.includes(u);
    }
    function l(u, c) {
      const d = o.value;
      (typeof c == "boolean" ? c : !1) ? d.includes(u) || a("update:visibleColumns", [...d, u]) : a("update:visibleColumns", d.filter((m) => m !== u));
    }
    return (u, c) => (g(), A(s(Eg), null, {
      default: v(() => [
        $(s(Pg), { "as-child": "" }, {
          default: v(() => [
            $(s(ft), {
              variant: "outline",
              size: "sm",
              class: "ml-auto h-8"
            }, {
              default: v(() => [
                $(s(f_), { class: "mr-2 h-4 w-4" }),
                c[0] || (c[0] = he(" View ", -1))
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        $(s(zg), {
          align: "end",
          class: "w-[150px]"
        }, {
          default: v(() => [
            $(s(Xx), null, {
              default: v(() => [...c[1] || (c[1] = [
                he("Toggle columns", -1)
              ])]),
              _: 1
            }),
            $(s(Vi)),
            (g(!0), R(De, null, Ze(n.value, (d) => (g(), A(s(Yx), {
              key: d.id,
              "model-value": i(d.id),
              "onUpdate:modelValue": (f) => l(d.id, f)
            }, {
              default: v(() => [
                he(ae(d.title), 1)
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
}), tO = { class: "flex flex-col flex-1 min-w-0 min-h-0 relative" }, nO = {
  key: 0,
  class: "flex items-center justify-end py-2"
}, rO = {
  key: 0,
  class: "absolute inset-0 bg-background/80 backdrop-blur-sm z-10 flex items-center justify-center rounded-md"
}, aO = { class: "flex flex-col items-center gap-2" }, oO = { class: "text-sm text-muted-foreground" }, iO = { class: "text-left" }, lO = {
  key: 0,
  class: "!w-6 !pr-0"
}, sO = {
  key: 1,
  class: "!w-6"
}, uO = { key: 2 }, cO = { class: "[&_[data-state=selected]]:bg-muted/50" }, dO = { class: "bg-muted/50 hover:bg-muted/70" }, fO = ["colspan"], mO = { class: "flex items-center gap-2" }, pO = { class: "text-sm" }, vO = ["data-state", "data-row-id"], gO = {
  key: 0,
  class: "!w-6 !pr-0"
}, hO = {
  key: 1,
  class: "!w-6 !pr-0"
}, bO = ["data-col-id", "tabindex"], _O = { key: 2 }, yO = { class: "flex items-center gap-0.5" }, $O = {
  key: 0,
  class: "hover:!bg-transparent"
}, kO = ["colspan"], wO = { class: "p-4" }, SO = ["data-state", "data-row-id"], IO = {
  key: 0,
  class: "!w-6 !pr-0"
}, xO = {
  key: 1,
  class: "!w-6 !pr-0"
}, OO = ["data-col-id", "tabindex"], NO = { key: 2 }, EO = { class: "flex items-center gap-0.5" }, zO = { class: "hover:!bg-transparent" }, PO = ["colspan"], TO = { class: "p-4" }, AO = ["colspan"], DO = { key: 0 }, CO = { class: "flex gap-2 items-center min-w-0" }, jO = { class: "text-sm mr-2 line-clamp-1 min-w-0 text-muted-foreground" }, UO = { key: 1 }, LO = { class: "text-sm line-clamp-1 text-muted-foreground" }, RO = {
  key: 2,
  class: "flex flex-1 justify-end items-center gap-4"
}, sP = /* @__PURE__ */ D({
  __name: "DataTable",
  props: /* @__PURE__ */ mt({
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
  emits: /* @__PURE__ */ mt(["clickRow"], ["update:visibleColumns", "update:itemsPerPage", "update:page", "update:sortBy", "update:selected"]),
  setup(e, { expose: t, emit: r }) {
    const a = r, { t: n } = Tn(), o = G(() => Jo(e.columns, (X) => X.id)), i = G(() => Jo(e.items, (X) => X.id)), l = ct(e, "visibleColumns"), u = ct(e, "itemsPerPage"), c = ct(e, "page"), d = ct(e, "sortBy"), f = ct(e, "selected"), m = G(() => e.items && e.items.length > 0);
    Le(u, () => {
      c.value && c.value > 1 && (c.value = 1);
    });
    function p(X) {
      !d.value || d.value.key !== X ? d.value = { key: X, order: "asc" } : d.value.key === X && (d.value.order === "asc" ? d.value = { key: X, order: "desc" } : d.value = void 0);
    }
    const h = yh("container");
    nc(h, "[data-col-id]", (X) => {
      const Q = X.getAttribute("data-col-id"), Ce = X.closest("tr")?.getAttribute("data-row-id");
      if (!Q || !Ce)
        return;
      const B = o.value[Q], ne = i.value[Ce];
      B && ne && B.onClick?.(ne);
    }), nc(h, "[data-row-id]", (X) => {
      const Q = X.getAttribute("data-row-id");
      Q && a("clickRow", Q);
    });
    const _ = G(() => e.items), { stateMap: S, toggle: k, toggleAll: y, allToggledState: O, clear: I } = ac(_, "id", e.storagekey, f);
    Jx(
      f,
      G(() => e.items.map((X) => X.id))
    ), gw(() => (I(), !0), G(() => f.value.length > 0)), Le(c, () => I());
    const { stateMap: x, toggle: P, allToggledState: N, toggleAll: j } = ac(_, "id", e.storagekey), M = G(() => l.value ? e.columns.filter((X) => l.value?.includes(X.id)) : e.columns), te = G(() => M.value.length + (e.selectMode === "multiselect" ? 1 : 0) + (e.hasActionsColumn ? 1 : 0) + (e.expandable ? 1 : 0));
    return t({ selected: f, clearSelected: I }), (X, Q) => {
      const Ce = $h("tooltip");
      return g(), R("div", tO, [
        e.showOptions ? (g(), R("div", nO, [
          C(X.$slots, "header"),
          $(eO, {
            columns: e.columns,
            "visible-columns": l.value,
            "onUpdate:visibleColumns": Q[0] || (Q[0] = (B) => l.value = B)
          }, null, 8, ["columns", "visible-columns"])
        ])) : me("", !0),
        oe("div", {
          ref: "container",
          class: ge(["min-w-0 min-h-0 relative flex flex-col", { "[&_td:first-child]:!w-0 [&_th:first-child]:!w-0": e.selectMode === "multiselect", "[&_td:last-child]:!w-0 [&_th:last-child]:!w-0": e.hasActionsColumn }])
        }, [
          e.isPending ? (g(), R("div", rO, [
            oe("div", aO, [
              $(s(u_), { class: "h-8 w-8 animate-spin text-muted-foreground" }),
              oe("span", oO, ae(s(n)("dataTable.loading") || "Loading..."), 1)
            ])
          ])) : me("", !0),
          oe("div", {
            class: ge(["flex-1 flex flex-col min-h-0", { "!rounded-md border": e.bordered }])
          }, [
            oe("table", {
              class: ge(["[&>tbody>tr:hover]:bg-muted h-1 [&_tr]:border-b [&_th,&_td]:px-2 [&_th,&_td]:py-1 min-h-0 w-full [&_.p-datatable-empty-message]:!bg-transparent [&_.p-datatable-paginator-bottom]:sticky [&_.p-datatable-paginator-bottom]:bottom-0 [&_.p-paginator]:justify-start [&_.p-paginator]:pt-3 [&_.p-paginator]:pb-6 [&_th]:!text-sm [&_tr>*:first-child]:pl-6 [&_tr>*:last-child]:pr-6", { "[&_tbody_tr:last-child]:border-b-0": e.bordered }])
            }, [
              oe("thead", iO, [
                oe("tr", null, [
                  e.expandable ? (g(), R("th", lO, [
                    _i((g(), A(ft, {
                      variant: "outline",
                      size: "sm",
                      class: "[&:not(:hover)]:opacity-0",
                      onClick: Q[1] || (Q[1] = (B) => s(j)())
                    }, {
                      default: v(() => [
                        (g(), A(dt(s(N) ? s(Bn) : s(Zn))))
                      ]),
                      _: 1
                    })), [
                      [Ce, "Toggle collapse"]
                    ])
                  ])) : me("", !0),
                  e.selectMode === "multiselect" ? (g(), R("th", sO, [
                    $(s(Pa), {
                      "model-value": s(O),
                      "onUpdate:modelValue": Q[2] || (Q[2] = () => s(y)())
                    }, null, 8, ["model-value"])
                  ])) : me("", !0),
                  (g(!0), R(De, null, Ze(M.value, (B) => (g(), R("th", {
                    key: B.id
                  }, [
                    $(Qx, {
                      title: B.title ?? s(C$)(B.id),
                      sortable: e.sortable && B.sortable,
                      "sort-order": d.value?.key === B.id ? d.value.order : void 0,
                      hideable: B.hideable ?? !0,
                      onSort: (ne) => ne ? p(B.id) : d.value = void 0,
                      onHide: () => l.value = l.value?.filter((ne) => ne !== B.id)
                    }, null, 8, ["title", "sortable", "sort-order", "hideable", "onSort", "onHide"])
                  ]))), 128)),
                  e.hasActionsColumn ? (g(), R("th", uO)) : me("", !0)
                ])
              ]),
              oe("tbody", cO, [
                e.isGrouped ? (g(!0), R(De, { key: 0 }, Ze(e.groups, (B, ne) => (g(), R(De, { key: ne }, [
                  oe("tr", dO, [
                    oe("td", {
                      colspan: te.value,
                      class: "font-medium"
                    }, [
                      oe("div", mO, [
                        oe("span", pO, ae(e.groupByField) + ": " + ae(ne || "(No value)"), 1),
                        $(s(lw), {
                          variant: "secondary",
                          class: "ml-2"
                        }, {
                          default: v(() => [
                            he(ae(B.length), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ])
                    ], 8, fO)
                  ]),
                  (g(!0), R(De, null, Ze(B, (K) => (g(), R(De, {
                    key: K.id
                  }, [
                    oe("tr", {
                      "data-state": (s(S)[K.id] || e.highlightedRow === K.id) && "selected",
                      "data-row-id": K.id
                    }, [
                      e.expandable ? (g(), R("td", gO, [
                        $(ft, {
                          size: "sm",
                          variant: "ghost",
                          class: "h-6 w-6 p-0 -mr-1",
                          onClick: (ue) => s(P)(K[e.idcol])
                        }, {
                          default: v(() => [
                            (g(), A(dt(s(x)[K[e.idcol]] ? s(Bn) : s(Zn)), { class: "h-4 w-4" }))
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ])) : me("", !0),
                      e.selectMode === "multiselect" ? (g(), R("td", hO, [
                        $(s(Pa), {
                          "model-value": f.value.includes(K.id),
                          "onUpdate:modelValue": (ue) => s(k)(K.id)
                        }, null, 8, ["model-value", "onUpdate:modelValue"])
                      ])) : me("", !0),
                      (g(!0), R(De, null, Ze(M.value, (ue) => (g(), R("td", {
                        key: ue.id,
                        "data-col-id": ue.id,
                        tabindex: ue.onClick ? 0 : -1,
                        class: ge(ue.cssClass)
                      }, [
                        C(X.$slots, `cell:${String(ue.id)}`, {
                          item: K,
                          value: K[ue.id],
                          expanded: s(x)[K[e.idcol]]
                        }, () => [
                          he(ae(K[ue.id]), 1)
                        ])
                      ], 10, bO))), 128)),
                      e.hasActionsColumn ? (g(), R("td", _O, [
                        oe("div", yO, [
                          C(X.$slots, "cell:actions", { item: K })
                        ])
                      ])) : me("", !0)
                    ], 8, vO),
                    e.expandable && s(x)[K[e.idcol]] ? (g(), R("tr", $O, [
                      oe("td", {
                        colspan: te.value,
                        class: "bg-muted/30 p-0 [&_thead>tr:hover]:bg-transparent [&_th]:h-7 [&_td]:py-0.5"
                      }, [
                        C(X.$slots, "expanded-row", { item: K }, () => [
                          oe("div", wO, ae(s(n)("dataTable.expandedContent", { id: K[e.idcol] })), 1)
                        ])
                      ], 8, kO)
                    ])) : me("", !0)
                  ], 64))), 128))
                ], 64))), 128)) : (g(!0), R(De, { key: 1 }, Ze(e.items, (B) => (g(), R(De, {
                  key: B.id
                }, [
                  oe("tr", {
                    "data-state": (s(S)[B.id] || e.highlightedRow === B[e.idcol]) && "selected",
                    "data-row-id": B.id
                  }, [
                    e.expandable ? (g(), R("td", IO, [
                      $(ft, {
                        size: "sm",
                        variant: "ghost",
                        class: "h-6 w-6 p-0 -mr-1",
                        onClick: (ne) => s(P)(B[e.idcol])
                      }, {
                        default: v(() => [
                          (g(), A(dt(s(x)[B[e.idcol]] ? s(Bn) : s(Zn)), { class: "h-4 w-4" }))
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ])) : me("", !0),
                    e.selectMode === "multiselect" ? (g(), R("td", xO, [
                      $(s(Pa), {
                        "model-value": f.value.includes(B.id),
                        "onUpdate:modelValue": (ne) => s(k)(B.id)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ])) : me("", !0),
                    (g(!0), R(De, null, Ze(M.value, (ne) => (g(), R("td", {
                      key: ne.id,
                      "data-col-id": ne.id,
                      tabindex: ne.onClick ? 0 : -1,
                      class: ge(ne.cssClass)
                    }, [
                      C(X.$slots, `cell:${String(ne.id)}`, {
                        item: B,
                        value: B[ne.id],
                        expanded: s(x)[B[e.idcol]]
                      }, () => [
                        he(ae(B[ne.id]), 1)
                      ])
                    ], 10, OO))), 128)),
                    e.hasActionsColumn ? (g(), R("td", NO, [
                      oe("div", EO, [
                        C(X.$slots, "cell:actions", { item: B })
                      ])
                    ])) : me("", !0)
                  ], 8, SO),
                  e.expandable && s(x)[B[e.idcol]] ? C(X.$slots, "expanded-row-raw", {
                    key: 0,
                    item: B,
                    colNum: te.value
                  }, () => [
                    oe("tr", zO, [
                      oe("td", {
                        colspan: te.value,
                        class: "bg-muted/30 p-0 [&_thead>tr:hover]:bg-transparent [&_th]:h-7 [&_td]:py-0.5"
                      }, [
                        C(X.$slots, "expanded-row", { item: B }, () => [
                          oe("div", TO, ae(s(n)("dataTable.expandedContent", { id: B[e.idcol] })), 1)
                        ])
                      ], 8, PO)
                    ])
                  ]) : me("", !0)
                ], 64))), 128)),
                m.value ? me("", !0) : (g(), R("td", {
                  key: 2,
                  colspan: te.value
                }, [
                  $(s(sw), null, {
                    default: v(() => [
                      $(s(dw), null, {
                        default: v(() => [
                          $(s(mw), { variant: "icon" }, {
                            default: v(() => [
                              $(s(Vc))
                            ]),
                            _: 1
                          }),
                          $(s(vw), null, {
                            default: v(() => [
                              he(ae(s(n)("dataTable.noEntriesFound")), 1)
                            ]),
                            _: 1
                          }),
                          $(s(cw), null, {
                            default: v(() => [
                              he(ae(s(n)("dataTable.noEntriesFoundDescription")), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      $(s(uw))
                    ]),
                    _: 1
                  })
                ], 8, AO))
              ])
            ], 2)
          ], 2)
        ], 2),
        e.total && e.total > 0 ? (g(), R("div", {
          key: 1,
          class: ge(["@container sticky bottom-0 right-0 w-full gap-2 flex items-center bg-background px-0 py-3 z-10 transition-[left] duration-200 ease-linear", { "px-6": !e.bordered }])
        }, [
          e.selectMode === "multiselect" && f.value.length > 0 ? (g(), R("div", DO, [
            oe("div", CO, [
              oe("span", jO, ae(s(n)("dataTable.elementsSelected", {
                count: f.value.length,
                total: e.items.length
              })), 1),
              f.value.length > 0 ? C(X.$slots, "bulk", {
                key: 0,
                selected: f.value
              }) : me("", !0)
            ])
          ])) : f.value.length === 0 && e.total !== void 0 ? (g(), R("div", UO, [
            oe("span", LO, ae(s(n)("dataTable.totalElements", { total: e.total })), 1)
          ])) : me("", !0),
          e.total !== void 0 ? (g(), R("div", RO, [
            $(iw, {
              page: c.value,
              "onUpdate:page": Q[3] || (Q[3] = (B) => c.value = B),
              "items-per-page": u.value,
              "onUpdate:itemsPerPage": Q[4] || (Q[4] = (B) => u.value = B),
              "page-size-options": e.pageSizeOptions,
              "hide-items-per-page": f.value.length > 0 || e.pageSizeOptions.length < 2,
              total: e.total,
              disabled: e.isPending
            }, null, 8, ["page", "items-per-page", "page-size-options", "hide-items-per-page", "total", "disabled"])
          ])) : me("", !0)
        ], 2)) : me("", !0)
      ]);
    };
  }
});
function ac(e, t, r, a) {
  const n = a || (r ? Xy(r, []) : fe([])), o = G(
    () => Object.fromEntries(n.value.map((f) => [f, !0]))
  ), i = (f) => n.value = A$(n.value, f), l = G(
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
const VO = ["datetime", "title"], uP = /* @__PURE__ */ D({
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
    const n = G(() => t.date instanceof Date ? t.date : typeof t.date == "string" || typeof t.date == "number" ? new Date(t.date) : /* @__PURE__ */ new Date()), o = /* @__PURE__ */ Cy(n, t.format, {
      locales: t.locale
    }), i = G(() => {
      if (!t.relative)
        return null;
      const c = (/* @__PURE__ */ new Date()).getTime() - n.value.getTime(), d = Math.floor(c / 1e3), f = Math.floor(d / 60), m = Math.floor(f / 60), p = Math.floor(m / 24);
      return p > 0 ? a("date.daysAgo", { count: p }) : m > 0 ? a("date.hoursAgo", { count: m }) : f > 0 ? a("date.minutesAgo", { count: f }) : a("date.justNow");
    }), l = G(() => t.relative ? i.value : o.value);
    return (u, c) => (g(), R("time", {
      datetime: n.value.toISOString(),
      title: t.relative ? s(o) : void 0,
      class: "whitespace-nowrap"
    }, ae(l.value), 9, VO));
  }
}), FO = { class: "min-w-0 line-clamp-1 break-spaces text-left whitespace-normal space-x-1" }, MO = { class: "text-muted-foreground" }, BO = { class: "font-semibold" }, ZO = {
  key: 1,
  class: "text-muted-foreground"
}, oc = /* @__PURE__ */ D({
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
    return (r, a) => (g(), R("div", FO, [
      e.value?.length ? (g(!0), R(De, { key: 0 }, Ze(e.value, (n, o) => (g(), R("span", {
        key: o,
        class: "bg-muted text-xs px-1 py-0.5 rounded"
      }, [
        oe("span", MO, " ≥" + ae(`${n.from}:`), 1),
        a[0] || (a[0] = he()),
        oe("span", BO, ae(n.value), 1)
      ]))), 128)) : (g(), R("span", ZO, ae(t("common.novalue")), 1))
    ]));
  }
}), gr = un([]), WO = G(() => Jo(gr.value, (e) => e.key)), Ns = fe({});
function Tg(e) {
  const t = gr.value.findIndex((r) => r.key === e);
  t !== -1 && gr.value.splice(t, 1), Md.remove(e);
}
const Ag = (e) => {
  Ns.value[e] = !1, WO.value[e]?.onClose?.(), setTimeout(() => Tg(e), 600);
}, GO = (e) => (e.key = e.key ?? `${Math.random()}`, gr.value.push(e), Dc(gr), Ns.value[e.key] = !0, Md.add(() => (Ag(e.key), !0), e.key), e.key), KO = { close: Ag, visible: Ns, open: GO, instances: gr, removeInstance: Tg }, Dg = () => KO, cP = /* @__PURE__ */ D({
  __name: "DynamicComponentProvider",
  setup(e) {
    const { close: t, visible: r, instances: a } = Dg();
    return (n, o) => (g(!0), R(De, null, Ze(s(a), (i) => (g(), A(dt(i.component), J({
      key: i.key,
      open: s(r)[i.key]
    }, { ref_for: !0 }, i.componentProps || {}, {
      "onUpdate:open": (l) => !l && s(t)(i.key)
    }), null, 16, ["open", "onUpdate:open"]))), 128));
  }
}), HO = { class: "text-muted-foreground py-4 flex gap-2 items-center text-sm" }, JO = /* @__PURE__ */ D({
  __name: "EmptyMini",
  setup(e) {
    function t(r) {
      return {
        "common.noValues": "No values"
      }[r] || r;
    }
    return (r, a) => (g(), R("div", HO, [
      $(s(Vc), { size: 16 }),
      oe("span", null, [
        C(r.$slots, "default", {}, () => [
          he(ae(t("common.noValues")), 1)
        ])
      ])
    ]));
  }
}), qO = { class: "flex-1" }, YO = { class: "flex gap-1 items-center" }, XO = {
  key: 0,
  class: "flex-1"
}, QO = {
  key: 1,
  class: "text-muted-foreground text-sm px-2"
}, eN = /* @__PURE__ */ D({
  inheritAttrs: !1,
  __name: "SelectListOptions",
  props: /* @__PURE__ */ mt({
    placeholder: { default: "Filter.." },
    addItemButtonLabel: { default: "Add Item" },
    multiple: { type: Boolean },
    options: {},
    showAddItemButton: { type: Boolean }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ mt(["onAddItem"], ["update:modelValue"]),
  setup(e) {
    const t = ct(e, "modelValue"), r = fe(""), { startsWith: a } = cb({ sensitivity: "base" }), n = G(() => H(e.options).filter((l) => a(l.label, r.value))), o = G(() => !!H(e.options).length), { t: i } = Tn();
    return (l, u) => (g(), R(De, null, [
      $(s(db), {
        modelValue: t.value,
        "onUpdate:modelValue": u[1] || (u[1] = (c) => t.value = c),
        multiple: e.multiple
      }, {
        default: v(() => [
          $(s(fb), {
            modelValue: r.value,
            "onUpdate:modelValue": u[0] || (u[0] = (c) => r.value = c),
            autofocus: "",
            disabled: !o.value,
            placeholder: e.placeholder,
            class: ge(s(Z)(
              "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
              "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
            ))
          }, null, 8, ["modelValue", "disabled", "placeholder", "class"]),
          n.value.length ? me("", !0) : (g(), A(JO, { key: 0 })),
          $(s(mb), { class: "max-h-[400px] overflow-auto py-1" }, {
            default: v(() => [
              (g(!0), R(De, null, Ze(n.value, (c) => (g(), A(s(pb), {
                key: String(c.value),
                value: c.value,
                class: "focus:bg-accent focus:text-accent-foreground data-[highlighted]:bg-accent [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2"
              }, {
                default: v(() => [
                  oe("div", qO, [
                    C(l.$slots, "option", { option: c }, () => [
                      he(ae(c.label), 1)
                    ])
                  ]),
                  $(s(vb), null, {
                    default: v(() => [
                      $(s(to), { size: 12 })
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
      oe("div", YO, [
        e.showAddItemButton ? (g(), R("div", XO, [
          $(ft, {
            size: "sm",
            class: "sticky bottom-0",
            variant: "ghost",
            type: "button",
            onClick: u[2] || (u[2] = (c) => l.$emit("onAddItem"))
          }, {
            default: v(() => [
              $(s(no)),
              he(" " + ae(e.addItemButtonLabel), 1)
            ]),
            _: 1
          })
        ])) : me("", !0),
        o.value && e.multiple ? (g(), R("div", QO, ae(s(i)("common.elementCountSelected", { count: t.value.length })), 1)) : me("", !0)
      ])
    ], 64));
  }
}), tN = /* @__PURE__ */ D({
  __name: "AlertDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = We(e, t);
    return (o, i) => (g(), A(s(gb), J({ "data-slot": "alert-dialog" }, s(n)), {
      default: v(() => [
        C(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), nN = /* @__PURE__ */ D({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = pe(t, "class");
    return (a, n) => (g(), A(s(hb), J(s(r), {
      class: s(Z)(s(rn)(), t.class)
    }), {
      default: v(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), rN = /* @__PURE__ */ D({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = pe(t, "class");
    return (a, n) => (g(), A(s(bb), J(s(r), {
      class: s(Z)(
        s(rn)({ variant: "outline" }),
        "mt-2 sm:mt-0",
        t.class
      )
    }), {
      default: v(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), aN = /* @__PURE__ */ D({
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
    const r = e, a = t, n = pe(r, "class"), o = We(n, a);
    return (i, l) => (g(), A(s(_b), null, {
      default: v(() => [
        $(s(yb), {
          "data-slot": "alert-dialog-overlay",
          class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80"
        }),
        $(s($b), J({ "data-slot": "alert-dialog-content" }, s(o), {
          class: s(Z)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
            r.class
          )
        }), {
          default: v(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), oN = /* @__PURE__ */ D({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = pe(t, "class");
    return (a, n) => (g(), A(s(kb), J({ "data-slot": "alert-dialog-description" }, s(r), {
      class: s(Z)("text-muted-foreground text-sm", t.class)
    }), {
      default: v(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), iN = /* @__PURE__ */ D({
  __name: "AlertDialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), R("div", {
      "data-slot": "alert-dialog-footer",
      class: ge(
        s(Z)(
          "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
          t.class
        )
      )
    }, [
      C(r.$slots, "default")
    ], 2));
  }
}), lN = /* @__PURE__ */ D({
  __name: "AlertDialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), R("div", {
      "data-slot": "alert-dialog-header",
      class: ge(s(Z)("flex flex-col gap-2 text-center sm:text-left", t.class))
    }, [
      C(r.$slots, "default")
    ], 2));
  }
}), sN = /* @__PURE__ */ D({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = pe(t, "class");
    return (a, n) => (g(), A(s(wb), J({ "data-slot": "alert-dialog-title" }, s(r), {
      class: s(Z)("text-lg font-semibold", t.class)
    }), {
      default: v(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), uN = /* @__PURE__ */ D({
  __name: "DynamicAlertDialog",
  props: /* @__PURE__ */ mt({
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
    const t = e, r = ct(e, "open"), a = fe(!1);
    async function n() {
      a.value = !0, (t.onOk ? await t.onOk() : !0) && close(), a.value = !1;
    }
    const { t: o } = Tn();
    return (i, l) => (g(), A(s(tN), {
      open: r.value,
      "onUpdate:open": l[2] || (l[2] = (u) => r.value = u)
    }, {
      default: v(() => [
        $(s(aN), null, {
          default: v(() => [
            $(s(lN), null, {
              default: v(() => [
                $(s(sN), null, {
                  default: v(() => [
                    he(ae(e.title || s(o)("dialog.alert.defaultTitle")), 1)
                  ]),
                  _: 1
                }),
                $(s(oN), null, {
                  default: v(() => [
                    he(ae(e.description || s(o)("dialog.alert.defaultDescription")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            $(s(iN), null, {
              default: v(() => [
                $(s(rN), {
                  disabled: a.value,
                  onClick: l[0] || (l[0] = (u) => r.value = !1)
                }, {
                  default: v(() => [
                    he(ae(s(o)("common.cancel")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                $(s(nN), {
                  loading: a.value,
                  onClick: l[1] || (l[1] = (u) => n())
                }, {
                  default: v(() => [
                    he(ae(s(o)("common.continue")), 1)
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
function kt(e) {
  return typeof e == "function";
}
function lr(e) {
  return e == null;
}
const En = (e) => e !== null && !!e && typeof e == "object" && !Array.isArray(e);
function Es(e) {
  return Number(e) >= 0;
}
function cN(e) {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}
function dN(e) {
  return typeof e == "object" && e !== null;
}
function fN(e) {
  return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
function ic(e) {
  if (!dN(e) || fN(e) !== "[object Object]")
    return !1;
  if (Object.getPrototypeOf(e) === null)
    return !0;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Jr(e, t) {
  return Object.keys(t).forEach((r) => {
    if (ic(t[r]) && ic(e[r])) {
      e[r] || (e[r] = {}), Jr(e[r], t[r]);
      return;
    }
    e[r] = t[r];
  }), e;
}
function jr(e) {
  const t = e.split(".");
  if (!t.length)
    return "";
  let r = String(t[0]);
  for (let a = 1; a < t.length; a++) {
    if (Es(t[a])) {
      r += `[${t[a]}]`;
      continue;
    }
    r += `.${t[a]}`;
  }
  return r;
}
const mN = {};
function pN(e) {
  return mN[e];
}
function lc(e, t, r) {
  typeof r.value == "object" && (r.value = Te(r.value)), !r.enumerable || r.get || r.set || !r.configurable || !r.writable || t === "__proto__" ? Object.defineProperty(e, t, r) : e[t] = r.value;
}
function Te(e) {
  if (typeof e != "object") return e;
  var t = 0, r, a, n, o = Object.prototype.toString.call(e);
  if (o === "[object Object]" ? n = Object.create(e.__proto__ || null) : o === "[object Array]" ? n = Array(e.length) : o === "[object Set]" ? (n = /* @__PURE__ */ new Set(), e.forEach(function(i) {
    n.add(Te(i));
  })) : o === "[object Map]" ? (n = /* @__PURE__ */ new Map(), e.forEach(function(i, l) {
    n.set(Te(l), Te(i));
  })) : o === "[object Date]" ? n = /* @__PURE__ */ new Date(+e) : o === "[object RegExp]" ? n = new RegExp(e.source, e.flags) : o === "[object DataView]" ? n = new e.constructor(Te(e.buffer)) : o === "[object ArrayBuffer]" ? n = e.slice(0) : o.slice(-6) === "Array]" && (n = new e.constructor(e)), n) {
    for (a = Object.getOwnPropertySymbols(e); t < a.length; t++)
      lc(n, a[t], Object.getOwnPropertyDescriptor(e, a[t]));
    for (t = 0, a = Object.getOwnPropertyNames(e); t < a.length; t++)
      Object.hasOwnProperty.call(n, r = a[t]) && n[r] === e[r] || lc(n, r, Object.getOwnPropertyDescriptor(e, r));
  }
  return n || e;
}
const rr = Symbol("vee-validate-form"), vN = Symbol("vee-validate-form-context"), ca = Symbol("vee-validate-field-instance"), Ja = Symbol("Default empty value"), Cg = typeof window < "u";
function pi(e) {
  return kt(e) && !!e.__locatorRef;
}
function Qt(e) {
  return !!e && kt(e.parse) && e.__type === "VVTypedSchema";
}
function qa(e) {
  return !!e && kt(e.validate);
}
function da(e) {
  return e === "checkbox" || e === "radio";
}
function gN(e) {
  return En(e) || Array.isArray(e);
}
function hN(e) {
  return Array.isArray(e) ? e.length === 0 : En(e) && Object.keys(e).length === 0;
}
function fa(e) {
  return /^\[.+\]$/i.test(e);
}
function bN(e) {
  return jg(e) && e.multiple;
}
function jg(e) {
  return e.tagName === "SELECT";
}
function _N(e, t) {
  const r = ![!1, null, void 0, 0].includes(t.multiple) && !Number.isNaN(t.multiple);
  return e === "select" && "multiple" in t && r;
}
function yN(e, t) {
  return !_N(e, t) && t.type !== "file" && !da(t.type);
}
function Ug(e) {
  return zs(e) && e.target && "submit" in e.target;
}
function zs(e) {
  return e ? !!(typeof Event < "u" && kt(Event) && e instanceof Event || e && e.srcElement) : !1;
}
function sc(e, t) {
  return t in e && e[t] !== Ja;
}
function _t(e, t) {
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
        if (!_t(e[a], t[a]))
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
        if (!_t(a[1], t.get(a[0])))
          return !1;
      return !0;
    }
    if (cc(e) && cc(t))
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
    if (e = uc(e), t = uc(t), n = Object.keys(e), r = n.length, r !== Object.keys(t).length)
      return !1;
    for (a = r; a-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, n[a]))
        return !1;
    for (a = r; a-- !== 0; ) {
      var o = n[a];
      if (!_t(e[o], t[o]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function uc(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function cc(e) {
  return Cg ? e instanceof File : !1;
}
function Io(e) {
  return fa(e) ? e.replace(/\[|\]/gi, "") : e;
}
function qe(e, t, r) {
  return e ? fa(t) ? e[Io(t)] : (t || "").split(/\.|\[(\d+)\]/).filter(Boolean).reduce((n, o) => gN(n) && o in n ? n[o] : r, e) : r;
}
function gt(e, t, r) {
  if (fa(t)) {
    e[Io(t)] = r;
    return;
  }
  const a = t.split(/\.|\[(\d+)\]/).filter(Boolean);
  let n = e;
  for (let o = 0; o < a.length; o++) {
    if (o === a.length - 1) {
      n[a[o]] = r;
      return;
    }
    (!(a[o] in n) || lr(n[a[o]])) && (n[a[o]] = Es(a[o + 1]) ? [] : {}), n = n[a[o]];
  }
}
function Fo(e, t) {
  if (Array.isArray(e) && Es(t)) {
    e.splice(Number(t), 1);
    return;
  }
  En(e) && delete e[t];
}
function dc(e, t) {
  if (fa(t)) {
    delete e[Io(t)];
    return;
  }
  const r = t.split(/\.|\[(\d+)\]/).filter(Boolean);
  let a = e;
  for (let o = 0; o < r.length; o++) {
    if (o === r.length - 1) {
      Fo(a, r[o]);
      break;
    }
    if (!(r[o] in a) || lr(a[r[o]]))
      break;
    a = a[r[o]];
  }
  const n = r.map((o, i) => qe(e, r.slice(0, i).join(".")));
  for (let o = n.length - 1; o >= 0; o--)
    if (hN(n[o])) {
      if (o === 0) {
        Fo(e, r[0]);
        continue;
      }
      Fo(n[o - 1], r[o - 1]);
    }
}
function Dt(e) {
  return Object.keys(e);
}
function ma(e, t = void 0) {
  const r = Mt();
  return r?.provides[e] || fn(e, t);
}
function Ta(e) {
  Cc(`[vee-validate]: ${e}`);
}
function fc(e, t, r) {
  if (Array.isArray(e)) {
    const a = [...e], n = a.findIndex((o) => _t(o, t));
    return n >= 0 ? a.splice(n, 1) : a.push(t), a;
  }
  return _t(e, t) ? r : t;
}
function $N(e, t) {
  let r, a;
  return function(...n) {
    const o = this;
    return r || (r = !0, setTimeout(() => r = !1, t), a = e.apply(o, n)), a;
  };
}
function mc(e, t = 0) {
  let r = null, a = [];
  return function(...n) {
    return r && clearTimeout(r), r = setTimeout(() => {
      const o = e(...n);
      a.forEach((i) => i(o)), a = [];
    }, t), new Promise((o) => a.push(o));
  };
}
function kN(e, t) {
  return En(t) && t.number ? cN(e) : e;
}
function vi(e, t) {
  let r;
  return async function(...n) {
    const o = e(...n);
    r = o;
    const i = await o;
    return o !== r ? i : (r = void 0, t(i, n));
  };
}
function wN({ get: e, set: t }) {
  const r = fe(Te(e()));
  return Le(e, (a) => {
    _t(a, r.value) || (r.value = Te(a));
  }, {
    deep: !0
  }), Le(r, (a) => {
    _t(a, e()) || t(Te(a));
  }, {
    deep: !0
  }), r;
}
function gi(e) {
  return Array.isArray(e) ? e : e ? [e] : [];
}
function xa(e, t) {
  const r = {};
  for (const a in e)
    t.includes(a) || (r[a] = e[a]);
  return r;
}
function SN(e) {
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
function xo(e, t, r) {
  return t.slots.default ? typeof e == "string" || !e ? t.slots.default(r()) : {
    default: () => {
      var a, n;
      return (n = (a = t.slots).default) === null || n === void 0 ? void 0 : n.call(a, r());
    }
  } : t.slots.default;
}
function Mo(e) {
  if (Lg(e))
    return e._value;
}
function Lg(e) {
  return "_value" in e;
}
function IN(e) {
  return e.type === "number" || e.type === "range" ? Number.isNaN(e.valueAsNumber) ? e.value : e.valueAsNumber : e.value;
}
function Ya(e) {
  if (!zs(e))
    return e;
  const t = e.target;
  if (da(t.type) && Lg(t))
    return Mo(t);
  if (t.type === "file" && t.files) {
    const r = Array.from(t.files);
    return t.multiple ? r : r[0];
  }
  if (bN(t))
    return Array.from(t.options).filter((r) => r.selected && !r.disabled).map(Mo);
  if (jg(t)) {
    const r = Array.from(t.options).find((a) => a.selected);
    return r ? Mo(r) : t.value;
  }
  return IN(t);
}
function Rg(e) {
  const t = {};
  return Object.defineProperty(t, "_$$isNormalized", {
    value: !0,
    writable: !1,
    enumerable: !1,
    configurable: !1
  }), e ? En(e) && e._$$isNormalized ? e : En(e) ? Object.keys(e).reduce((r, a) => {
    const n = xN(e[a]);
    return e[a] !== !1 && (r[a] = pc(n)), r;
  }, t) : typeof e != "string" ? t : e.split("|").reduce((r, a) => {
    const n = ON(a);
    return n.name && (r[n.name] = pc(n.params)), r;
  }, t) : t;
}
function xN(e) {
  return e === !0 ? [] : Array.isArray(e) || En(e) ? e : [e];
}
function pc(e) {
  const t = (r) => typeof r == "string" && r[0] === "@" ? NN(r.slice(1)) : r;
  return Array.isArray(e) ? e.map(t) : e instanceof RegExp ? [e] : Object.keys(e).reduce((r, a) => (r[a] = t(e[a]), r), {});
}
const ON = (e) => {
  let t = [];
  const r = e.split(":")[0];
  return e.includes(":") && (t = e.split(":").slice(1).join(":").split(",")), { name: r, params: t };
};
function NN(e) {
  const t = (r) => {
    var a;
    return (a = qe(r, e)) !== null && a !== void 0 ? a : r[e];
  };
  return t.__locatorRef = e, t;
}
function EN(e) {
  return Array.isArray(e) ? e.filter(pi) : Dt(e).filter((t) => pi(e[t])).map((t) => e[t]);
}
const zN = {
  generateMessage: ({ field: e }) => `${e} is not valid.`,
  bails: !0,
  validateOnBlur: !0,
  validateOnChange: !0,
  validateOnInput: !1,
  validateOnModelUpdate: !0
};
let PN = Object.assign({}, zN);
const Mn = () => PN;
async function Vg(e, t, r = {}) {
  const a = r?.bails, n = {
    name: r?.name || "{field}",
    rules: t,
    label: r?.label,
    bails: a ?? !0,
    formData: r?.values || {}
  }, o = await TN(n, e);
  return Object.assign(Object.assign({}, o), { valid: !o.errors.length });
}
async function TN(e, t) {
  const r = e.rules;
  if (Qt(r) || qa(r))
    return DN(t, Object.assign(Object.assign({}, e), { rules: r }));
  if (kt(r) || Array.isArray(r)) {
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
          const _ = typeof p == "string" ? p : Mg(l);
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
  const a = Object.assign(Object.assign({}, e), { rules: Rg(r) }), n = [], o = Object.keys(a.rules), i = o.length;
  for (let l = 0; l < i; l++) {
    const u = o[l], c = await CN(a, t, {
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
function AN(e) {
  return !!e && e.name === "ValidationError";
}
function Fg(e) {
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
        if (!AN(o))
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
async function DN(e, t) {
  const a = await (Qt(t.rules) ? t.rules : Fg(t.rules)).parse(e, { formData: t.formData }), n = [];
  for (const o of a.errors)
    o.errors.length && n.push(...o.errors);
  return {
    value: a.value,
    errors: n
  };
}
async function CN(e, t, r) {
  const a = pN(r.name);
  if (!a)
    throw new Error(`No such validator '${r.name}' exists.`);
  const n = jN(r.params, e.formData), o = {
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
    error: i ? void 0 : Mg(o)
  };
}
function Mg(e) {
  const t = Mn().generateMessage;
  return t ? t(e) : "Field is invalid";
}
function jN(e, t) {
  const r = (a) => pi(a) ? a(t) : a;
  return Array.isArray(e) ? e.map(r) : Object.keys(e).reduce((a, n) => (a[n] = r(e[n]), a), {});
}
async function UN(e, t) {
  const a = await (Qt(e) ? e : Fg(e)).parse(Te(t), { formData: Te(t) }), n = {}, o = {};
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
async function LN(e, t, r) {
  const n = Dt(e).map(async (c) => {
    var d, f, m;
    const p = (d = r?.names) === null || d === void 0 ? void 0 : d[c], h = await Vg(qe(t, c), e[c], {
      name: p?.name || c,
      label: p?.label,
      values: t,
      bails: (m = (f = r?.bailsMap) === null || f === void 0 ? void 0 : f[c]) !== null && m !== void 0 ? m : !0
    });
    return Object.assign(Object.assign({}, h), { path: c });
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
let vc = 0;
function RN(e, t) {
  const { value: r, initialValue: a, setInitialValue: n } = VN(e, t.modelValue, t.form);
  if (!t.form) {
    let m = function(p) {
      var h;
      "value" in p && (r.value = p.value), "errors" in p && c(p.errors), "touched" in p && (f.touched = (h = p.touched) !== null && h !== void 0 ? h : f.touched), "initialValue" in p && n(p.initialValue);
    };
    const { errors: u, setErrors: c } = BN(), d = vc >= Number.MAX_SAFE_INTEGER ? 0 : ++vc, f = MN(r, a, u, t.schema);
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
  }), i = G(() => o.errors);
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
function VN(e, t, r) {
  const a = fe(s(t));
  function n() {
    return r ? qe(r.initialValues.value, s(e), s(a)) : s(a);
  }
  function o(c) {
    if (!r) {
      a.value = c;
      return;
    }
    r.setFieldInitialValue(s(e), c, !0);
  }
  const i = G(n);
  if (!r)
    return {
      value: fe(n()),
      initialValue: i,
      setInitialValue: o
    };
  const l = FN(t, r, i, e);
  return r.stageInitialValue(s(e), l, !0), {
    value: G({
      get() {
        return qe(r.values, s(e));
      },
      set(c) {
        r.setFieldValue(s(e), c, !1);
      }
    }),
    initialValue: i,
    setInitialValue: o
  };
}
function FN(e, t, r, a) {
  return yn(e) ? s(e) : e !== void 0 ? e : qe(t.values, s(a), s(r));
}
function MN(e, t, r, a) {
  const n = G(() => {
    var i, l, u;
    return (u = (l = (i = H(a)) === null || i === void 0 ? void 0 : i.describe) === null || l === void 0 ? void 0 : l.call(i).required) !== null && u !== void 0 ? u : !1;
  }), o = Kn({
    touched: !1,
    pending: !1,
    valid: !0,
    required: n,
    validated: !!s(r).length,
    initialValue: G(() => s(t)),
    dirty: G(() => !_t(s(e), s(t)))
  });
  return Le(r, (i) => {
    o.valid = !i.length;
  }, {
    immediate: !0,
    flush: "sync"
  }), o;
}
function BN() {
  const e = fe([]);
  return {
    errors: e,
    setErrors: (t) => {
      e.value = gi(t);
    }
  };
}
const Lr = {}, Rr = {}, Vr = "vee-validate-inspector", Ct = {
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
let lt = null, hn;
async function Bg(e) {
  if (process.env.NODE_ENV !== "production") {
    if (!Cg)
      return;
    (await import("./index-Cj4LybIA.js")).setupDevtoolsPlugin({
      id: "vee-validate-devtools-plugin",
      label: "VeeValidate Plugin",
      packageName: "vee-validate",
      homepage: "https://vee-validate.logaretm.com/v4",
      app: e,
      logo: "https://vee-validate.logaretm.com/v4/logo.png"
    }, (r) => {
      hn = r, r.addInspector({
        id: Vr,
        icon: "rule",
        label: "vee-validate",
        noSelectionText: "Select a vee-validate node to inspect",
        actions: [
          {
            icon: "done_outline",
            tooltip: "Validate selected item",
            action: async () => {
              if (!lt) {
                console.error("There is not a valid selected vee-validate node or component");
                return;
              }
              if (lt.type === "field") {
                await lt.field.validate();
                return;
              }
              if (lt.type === "form") {
                await lt.form.validate();
                return;
              }
              lt.type === "pathState" && await lt.form.validateField(lt.state.path);
            }
          },
          {
            icon: "delete_sweep",
            tooltip: "Clear validation state of the selected item",
            action: () => {
              if (!lt) {
                console.error("There is not a valid selected vee-validate node or component");
                return;
              }
              if (lt.type === "field") {
                lt.field.resetField();
                return;
              }
              lt.type === "form" && lt.form.resetForm(), lt.type === "pathState" && lt.form.resetField(lt.state.path);
            }
          }
        ]
      }), r.on.getInspectorTree((a) => {
        if (a.inspectorId !== Vr)
          return;
        const n = Object.values(Lr), o = Object.values(Rr);
        a.rootNodes = [
          ...n.map(GN),
          ...o.map((i) => HN(i))
        ];
      }), r.on.getInspectorState((a) => {
        if (a.inspectorId !== Vr)
          return;
        const { form: n, field: o, state: i, type: l } = JN(a.nodeId);
        if (r.unhighlightElement(), n && l === "form") {
          a.state = qN(n), lt = { type: "form", form: n }, r.highlightElement(n._vm);
          return;
        }
        if (i && l === "pathState" && n) {
          a.state = gc(i), lt = { type: "pathState", state: i, form: n };
          return;
        }
        if (o && l === "field") {
          a.state = gc({
            errors: o.errors.value,
            dirty: o.meta.dirty,
            valid: o.meta.valid,
            touched: o.meta.touched,
            value: o.value.value,
            initialValue: o.meta.initialValue
          }), lt = { field: o, type: "field" }, r.highlightElement(o._vm);
          return;
        }
        lt = null, r.unhighlightElement();
      });
    });
  }
}
const hr = $N(() => {
  setTimeout(async () => {
    await xt(), hn?.sendInspectorState(Vr), hn?.sendInspectorTree(Vr);
  }, 100);
}, 100);
function ZN(e) {
  const t = Mt();
  if (!hn) {
    const r = t?.appContext.app;
    if (!r)
      return;
    Bg(r);
  }
  Lr[e.formId] = Object.assign({}, e), Lr[e.formId]._vm = t, eo(() => {
    delete Lr[e.formId], hr();
  }), hr();
}
function WN(e) {
  const t = Mt();
  if (!hn) {
    const r = t?.appContext.app;
    if (!r)
      return;
    Bg(r);
  }
  Rr[e.id] = Object.assign({}, e), Rr[e.id]._vm = t, eo(() => {
    delete Rr[e.id], hr();
  }), hr();
}
function GN(e) {
  const { textColor: t, bgColor: r } = Wg(e.meta.value.valid), a = {};
  Object.values(e.getAllPathStates()).forEach((i) => {
    gt(a, H(i.path), KN(i, e));
  });
  function n(i, l = []) {
    const u = [...l].pop();
    return "id" in i ? Object.assign(Object.assign({}, i), { label: u || i.label }) : En(i) ? {
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
    id: Ps(e),
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
function KN(e, t) {
  return {
    id: Ps(t, e),
    label: H(e.path),
    tags: Zg(e.multiple, e.fieldsCount, e.type, e.valid, t)
  };
}
function HN(e, t) {
  return {
    id: Ps(t, e),
    label: s(e.name),
    tags: Zg(!1, 1, e.type, e.meta.valid, t)
  };
}
function Zg(e, t, r, a, n) {
  const { textColor: o, bgColor: i } = Wg(a);
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
function Ps(e, t) {
  const r = t ? "path" in t ? "pathState" : "field" : "form", a = t ? "path" in t ? t?.path : H(t?.name) : "", n = { f: e?.formId, ff: t?.id || a, type: r };
  return btoa(encodeURIComponent(JSON.stringify(n)));
}
function JN(e) {
  try {
    const t = JSON.parse(decodeURIComponent(atob(e))), r = Lr[t.f];
    if (!r && t.ff) {
      const n = Rr[t.ff];
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
function gc(e) {
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
function qN(e) {
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
function Wg(e) {
  return {
    bgColor: e ? Ct.success : Ct.error,
    textColor: e ? Ct.black : Ct.white
  };
}
function Ts(e, t, r) {
  return da(r?.type) ? XN(e, t, r) : Gg(e, t, r);
}
function Gg(e, t, r) {
  const { initialValue: a, validateOnMount: n, bails: o, type: i, checkedValue: l, label: u, validateOnValueUpdate: c, uncheckedValue: d, controlled: f, keepValueOnUnmount: m, syncVModel: p, form: h } = YN(r), _ = f ? ma(rr) : void 0, S = h || _, k = G(() => jr(H(e))), y = G(() => {
    if (H(S?.schema))
      return;
    const se = s(t);
    return qa(se) || Qt(se) || kt(se) || Array.isArray(se) ? se : Rg(se);
  }), O = !kt(y.value) && Qt(H(t)), { id: I, value: x, initialValue: P, meta: N, setState: j, errors: M, flags: te } = RN(k, {
    modelValue: a,
    form: S,
    bails: o,
    label: u,
    type: i,
    validate: y.value ? K : void 0,
    schema: O ? t : void 0
  }), X = G(() => M.value[0]);
  p && QN({
    value: x,
    prop: p,
    handleChange: ue,
    shouldValidate: () => c && !te.pendingReset
  });
  const Q = (le, se = !1) => {
    N.touched = !0, se && B();
  };
  async function Ce(le) {
    var se, Oe;
    if (S?.validateSchema) {
      const { results: Ne } = await S.validateSchema(le);
      return (se = Ne[H(k)]) !== null && se !== void 0 ? se : { valid: !0, errors: [] };
    }
    return y.value ? Vg(x.value, y.value, {
      name: H(k),
      label: H(u),
      values: (Oe = S?.values) !== null && Oe !== void 0 ? Oe : {},
      bails: o
    }) : { valid: !0, errors: [] };
  }
  const B = vi(async () => (N.pending = !0, N.validated = !0, Ce("validated-only")), (le) => (te.pendingUnmount[Pe.id] || (j({ errors: le.errors }), N.pending = !1, N.valid = le.valid), le)), ne = vi(async () => Ce("silent"), (le) => (N.valid = le.valid, le));
  function K(le) {
    return le?.mode === "silent" ? ne() : B();
  }
  function ue(le, se = !0) {
    const Oe = Ya(le);
    yt(Oe, se);
  }
  er(() => {
    if (n)
      return B();
    (!S || !S.validateSchema) && ne();
  });
  function re(le) {
    N.touched = le;
  }
  function pt(le) {
    var se;
    const Oe = le && "value" in le ? le.value : P.value;
    j({
      value: Te(Oe),
      initialValue: Te(Oe),
      touched: (se = le?.touched) !== null && se !== void 0 ? se : !1,
      errors: le?.errors || []
    }), N.pending = !1, N.validated = !1, ne();
  }
  const tt = Mt();
  function yt(le, se = !0) {
    x.value = tt && p ? kN(le, tt.props.modelModifiers) : le, (se ? B : ne)();
  }
  function Tt(le) {
    j({ errors: Array.isArray(le) ? le : [le] });
  }
  const Ge = G({
    get() {
      return x.value;
    },
    set(le) {
      yt(le, c);
    }
  }), Pe = {
    id: I,
    name: k,
    label: u,
    value: Ge,
    meta: N,
    errors: M,
    errorMessage: X,
    type: i,
    checkedValue: l,
    uncheckedValue: d,
    bails: o,
    keepValueOnUnmount: m,
    resetField: pt,
    handleReset: () => pt(),
    validate: K,
    handleChange: ue,
    handleBlur: Q,
    setState: j,
    setTouched: re,
    setErrors: Tt,
    setValue: yt
  };
  if (sr(ca, Pe), yn(t) && typeof s(t) != "function" && Le(t, (le, se) => {
    _t(le, se) || (N.validated ? B() : ne());
  }, {
    deep: !0
  }), process.env.NODE_ENV !== "production" && (Pe._vm = Mt(), Le(() => Object.assign(Object.assign({ errors: M.value }, N), { value: x.value }), hr, {
    deep: !0
  }), S || WN(Pe)), !S)
    return Pe;
  const Nt = G(() => {
    const le = y.value;
    return !le || kt(le) || qa(le) || Qt(le) || Array.isArray(le) ? {} : Object.keys(le).reduce((se, Oe) => {
      const Ne = EN(le[Oe]).map((nt) => nt.__locatorRef).reduce((nt, ot) => {
        const Ke = qe(S.values, ot) || S.values[ot];
        return Ke !== void 0 && (nt[ot] = Ke), nt;
      }, {});
      return Object.assign(se, Ne), se;
    }, {});
  });
  return Le(Nt, (le, se) => {
    if (!Object.keys(le).length)
      return;
    !_t(le, se) && (N.validated ? B() : ne());
  }), yi(() => {
    var le;
    const se = (le = H(Pe.keepValueOnUnmount)) !== null && le !== void 0 ? le : H(S.keepValuesOnUnmount), Oe = H(k);
    if (se || !S || te.pendingUnmount[Pe.id]) {
      S?.removePathState(Oe, I);
      return;
    }
    te.pendingUnmount[Pe.id] = !0;
    const Ne = S.getPathState(Oe);
    if (Array.isArray(Ne?.id) && Ne?.multiple ? Ne?.id.includes(Pe.id) : Ne?.id === Pe.id) {
      if (Ne?.multiple && Array.isArray(Ne.value)) {
        const ot = Ne.value.findIndex((Ke) => _t(Ke, H(Pe.checkedValue)));
        if (ot > -1) {
          const Ke = [...Ne.value];
          Ke.splice(ot, 1), S.setFieldValue(Oe, Ke);
        }
        Array.isArray(Ne.id) && Ne.id.splice(Ne.id.indexOf(Pe.id), 1);
      } else
        S.unsetPathValue(H(k));
      S.removePathState(Oe, I);
    }
  }), Pe;
}
function YN(e) {
  const t = () => ({
    initialValue: void 0,
    validateOnMount: !1,
    bails: !0,
    label: void 0,
    validateOnValueUpdate: !0,
    keepValueOnUnmount: void 0,
    syncVModel: !1,
    controlled: !0
  }), r = !!e?.syncVModel, a = typeof e?.syncVModel == "string" ? e.syncVModel : e?.modelPropName || "modelValue", n = r && !("initialValue" in (e || {})) ? hi(Mt(), a) : e?.initialValue;
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
function XN(e, t, r) {
  const a = r?.standalone ? void 0 : ma(rr), n = r?.checkedValue, o = r?.uncheckedValue;
  function i(l) {
    const u = l.handleChange, c = G(() => {
      const f = H(l.value), m = H(n);
      return Array.isArray(f) ? f.findIndex((p) => _t(p, m)) >= 0 : _t(m, f);
    });
    function d(f, m = !0) {
      var p, h;
      if (c.value === ((p = f?.target) === null || p === void 0 ? void 0 : p.checked)) {
        m && l.validate();
        return;
      }
      const _ = H(e), S = a?.getPathState(_), k = Ya(f);
      let y = (h = H(n)) !== null && h !== void 0 ? h : k;
      a && S?.multiple && S.type === "checkbox" ? y = fc(qe(a.values, _) || [], y, void 0) : r?.type === "checkbox" && (y = fc(H(l.value), y, H(o))), u(y, m);
    }
    return Object.assign(Object.assign({}, l), {
      checked: c,
      checkedValue: n,
      uncheckedValue: o,
      handleChange: d
    });
  }
  return i(Gg(e, t, r));
}
function QN({ prop: e, value: t, handleChange: r, shouldValidate: a }) {
  const n = Mt();
  if (!n || !e) {
    process.env.NODE_ENV !== "production" && console.warn("Failed to setup model events because `useField` was not called in setup.");
    return;
  }
  const o = typeof e == "string" ? e : "modelValue", i = `update:${o}`;
  o in n.props && (Le(t, (l) => {
    _t(l, hi(n, o)) || n.emit(i, l);
  }), Le(() => hi(n, o), (l) => {
    if (l === Ja && t.value === void 0)
      return;
    const u = l === Ja ? void 0 : l;
    _t(u, t.value) || r(u, a());
  }));
}
function hi(e, t) {
  if (e)
    return e.props[t];
}
const eE = /* @__PURE__ */ D({
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
      default: () => Mn().bails
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
      default: Ja
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
    const r = On(e, "rules"), a = On(e, "name"), n = On(e, "label"), o = On(e, "uncheckedValue"), i = On(e, "keepValue"), { errors: l, value: u, errorMessage: c, validate: d, handleChange: f, handleBlur: m, setTouched: p, resetField: h, handleReset: _, meta: S, checked: k, setErrors: y, setValue: O } = Ts(a, r, {
      validateOnMount: e.validateOnMount,
      bails: e.bails,
      standalone: e.standalone,
      type: t.attrs.type,
      initialValue: nE(e, t),
      // Only for checkboxes and radio buttons
      checkedValue: t.attrs.value,
      uncheckedValue: o,
      label: n,
      validateOnValueUpdate: e.validateOnModelUpdate,
      keepValueOnUnmount: i,
      syncVModel: !0
    }), I = function(te, X = !0) {
      f(te, X);
    }, x = G(() => {
      const { validateOnInput: M, validateOnChange: te, validateOnBlur: X, validateOnModelUpdate: Q } = tE(e);
      function Ce(ue) {
        m(ue, X), kt(t.attrs.onBlur) && t.attrs.onBlur(ue);
      }
      function B(ue) {
        I(ue, M), kt(t.attrs.onInput) && t.attrs.onInput(ue);
      }
      function ne(ue) {
        I(ue, te), kt(t.attrs.onChange) && t.attrs.onChange(ue);
      }
      const K = {
        name: e.name,
        onBlur: Ce,
        onInput: B,
        onChange: ne
      };
      return K["onUpdate:modelValue"] = (ue) => I(ue, Q), K;
    }), P = G(() => {
      const M = Object.assign({}, x.value);
      da(t.attrs.type) && k && (M.checked = k.value);
      const te = hc(e, t);
      return yN(te, t.attrs) && (M.value = u.value), M;
    }), N = G(() => Object.assign(Object.assign({}, x.value), { modelValue: u.value }));
    function j() {
      return {
        field: P.value,
        componentField: N.value,
        value: u.value,
        meta: S,
        errors: l.value,
        errorMessage: c.value,
        validate: d,
        resetField: h,
        handleChange: I,
        handleInput: (M) => I(M, !1),
        handleReset: _,
        handleBlur: x.value.onBlur,
        setTouched: p,
        setErrors: y,
        setValue: O
      };
    }
    return t.expose({
      value: u,
      meta: S,
      errors: l,
      errorMessage: c,
      setErrors: y,
      setTouched: p,
      setValue: O,
      reset: h,
      validate: d,
      handleChange: f
    }), () => {
      const M = dt(hc(e, t)), te = xo(M, t, j);
      return M ? dn(M, Object.assign(Object.assign({}, t.attrs), P.value), te) : te;
    };
  }
});
function hc(e, t) {
  let r = e.as || "";
  return !e.as && !t.slots.default && (r = "input"), r;
}
function tE(e) {
  var t, r, a, n;
  const { validateOnInput: o, validateOnChange: i, validateOnBlur: l, validateOnModelUpdate: u } = Mn();
  return {
    validateOnInput: (t = e.validateOnInput) !== null && t !== void 0 ? t : o,
    validateOnChange: (r = e.validateOnChange) !== null && r !== void 0 ? r : i,
    validateOnBlur: (a = e.validateOnBlur) !== null && a !== void 0 ? a : l,
    validateOnModelUpdate: (n = e.validateOnModelUpdate) !== null && n !== void 0 ? n : u
  };
}
function nE(e, t) {
  return da(t.attrs.type) ? sc(e, "modelValue") ? e.modelValue : void 0 : sc(e, "modelValue") ? e.modelValue : t.attrs.value;
}
const Sr = eE;
let rE = 0;
const Oa = ["bails", "fieldsCount", "id", "multiple", "type", "validate"];
function Kg(e) {
  const t = e?.initialValues || {}, r = Object.assign({}, H(t)), a = s(e?.validationSchema);
  return a && Qt(a) && kt(a.cast) ? Te(a.cast(r) || {}) : Te(r);
}
function Hg(e) {
  var t;
  const r = rE++, a = e?.name || "Form";
  let n = 0;
  const o = fe(!1), i = fe(!1), l = fe(0), u = [], c = Kn(Kg(e)), d = fe([]), f = fe({}), m = fe({}), p = SN(() => {
    m.value = d.value.reduce((E, z) => (E[jr(H(z.path))] = z, E), {});
  });
  function h(E, z) {
    const F = ue(E);
    if (!F) {
      typeof E == "string" && (f.value[jr(E)] = gi(z));
      return;
    }
    if (typeof E == "string") {
      const ee = jr(E);
      f.value[ee] && delete f.value[ee];
    }
    F.errors = gi(z), F.valid = !F.errors.length;
  }
  function _(E) {
    Dt(E).forEach((z) => {
      h(z, E[z]);
    });
  }
  e?.initialErrors && _(e.initialErrors);
  const S = G(() => {
    const E = d.value.reduce((z, F) => (F.errors.length && (z[H(F.path)] = F.errors), z), {});
    return Object.assign(Object.assign({}, f.value), E);
  }), k = G(() => Dt(S.value).reduce((E, z) => {
    const F = S.value[z];
    return F?.length && (E[z] = F[0]), E;
  }, {})), y = G(() => d.value.reduce((E, z) => (E[H(z.path)] = { name: H(z.path) || "", label: z.label || "" }, E), {})), O = G(() => d.value.reduce((E, z) => {
    var F;
    return E[H(z.path)] = (F = z.bails) !== null && F !== void 0 ? F : !0, E;
  }, {})), I = Object.assign({}, e?.initialErrors || {}), x = (t = e?.keepValuesOnUnmount) !== null && t !== void 0 ? t : !1, { initialValues: P, originalInitialValues: N, setInitialValues: j } = oE(d, c, e), M = aE(d, c, N, k), te = G(() => d.value.reduce((E, z) => {
    const F = qe(c, H(z.path));
    return gt(E, H(z.path), F), E;
  }, {})), X = e?.validationSchema;
  function Q(E, z) {
    var F, ee;
    const ve = G(() => qe(P.value, H(E))), ke = m.value[H(E)], be = z?.type === "checkbox" || z?.type === "radio";
    if (ke && be) {
      ke.multiple = !0;
      const Wt = n++;
      return Array.isArray(ke.id) ? ke.id.push(Wt) : ke.id = [ke.id, Wt], ke.fieldsCount++, ke.__flags.pendingUnmount[Wt] = !1, ke;
    }
    const He = G(() => qe(c, H(E))), it = H(E), wt = pt.findIndex((Wt) => Wt === it);
    wt !== -1 && pt.splice(wt, 1);
    const Be = G(() => {
      var Wt, Nr, No, Eo;
      const zo = H(X);
      if (Qt(zo))
        return (Nr = (Wt = zo.describe) === null || Wt === void 0 ? void 0 : Wt.call(zo, H(E)).required) !== null && Nr !== void 0 ? Nr : !1;
      const Po = H(z?.schema);
      return Qt(Po) && (Eo = (No = Po.describe) === null || No === void 0 ? void 0 : No.call(Po).required) !== null && Eo !== void 0 ? Eo : !1;
    }), St = n++, At = Kn({
      id: St,
      path: E,
      touched: !1,
      pending: !1,
      valid: !0,
      validated: !!(!((F = I[it]) === null || F === void 0) && F.length),
      required: Be,
      initialValue: ve,
      errors: un([]),
      bails: (ee = z?.bails) !== null && ee !== void 0 ? ee : !1,
      label: z?.label,
      type: z?.type || "default",
      value: He,
      multiple: !1,
      __flags: {
        pendingUnmount: { [St]: !1 },
        pendingReset: !1
      },
      fieldsCount: 1,
      validate: z?.validate,
      dirty: G(() => !_t(s(He), s(ve)))
    });
    return d.value.push(At), m.value[it] = At, p(), k.value[it] && !I[it] && xt(() => {
      L(it, { mode: "silent" });
    }), yn(E) && Le(E, (Wt) => {
      p();
      const Nr = Te(He.value);
      m.value[Wt] = At, xt(() => {
        gt(c, Wt, Nr);
      });
    }), At;
  }
  const Ce = mc($e, 5), B = mc($e, 5), ne = vi(async (E) => await (E === "silent" ? Ce() : B()), (E, [z]) => {
    const F = Dt(se.errorBag.value), ve = [
      .../* @__PURE__ */ new Set([...Dt(E.results), ...d.value.map((ke) => ke.path), ...F])
    ].sort().reduce((ke, be) => {
      var He;
      const it = be, wt = ue(it) || re(it), Be = ((He = E.results[it]) === null || He === void 0 ? void 0 : He.errors) || [], St = H(wt?.path) || it, At = iE({ errors: Be, valid: !Be.length }, ke.results[St]);
      return ke.results[St] = At, At.valid || (ke.errors[St] = At.errors[0]), wt && f.value[St] && delete f.value[St], wt ? (wt.valid = At.valid, z === "silent" || z === "validated-only" && !wt.validated || h(wt, At.errors), ke) : (h(St, Be), ke);
    }, {
      valid: E.valid,
      results: {},
      errors: {},
      source: E.source
    });
    return E.values && (ve.values = E.values, ve.source = E.source), Dt(ve.results).forEach((ke) => {
      var be;
      const He = ue(ke);
      He && z !== "silent" && (z === "validated-only" && !He.validated || h(He, (be = ve.results[ke]) === null || be === void 0 ? void 0 : be.errors));
    }), ve;
  });
  function K(E) {
    d.value.forEach(E);
  }
  function ue(E) {
    const z = typeof E == "string" ? jr(E) : E;
    return typeof z == "string" ? m.value[z] : z;
  }
  function re(E) {
    return d.value.filter((F) => E.startsWith(H(F.path))).reduce((F, ee) => F ? ee.path.length > F.path.length ? ee : F : ee, void 0);
  }
  let pt = [], tt;
  function yt(E) {
    return pt.push(E), tt || (tt = xt(() => {
      [...pt].sort().reverse().forEach((F) => {
        dc(c, F);
      }), pt = [], tt = null;
    })), tt;
  }
  function Tt(E) {
    return function(F, ee) {
      return function(ke) {
        return ke instanceof Event && (ke.preventDefault(), ke.stopPropagation()), K((be) => be.touched = !0), o.value = !0, l.value++, w().then((be) => {
          const He = Te(c);
          if (be.valid && typeof F == "function") {
            const it = Te(te.value);
            let wt = E ? it : He;
            return be.values && (wt = be.source === "schema" ? be.values : Object.assign({}, wt, be.values)), F(wt, {
              evt: ke,
              controlledValues: it,
              setErrors: _,
              setFieldError: h,
              setTouched: Jt,
              setFieldTouched: Ke,
              setValues: nt,
              setFieldValue: Oe,
              resetForm: b,
              resetField: In
            });
          }
          !be.valid && typeof ee == "function" && ee({
            values: He,
            evt: ke,
            errors: be.errors,
            results: be.results
          });
        }).then((be) => (o.value = !1, be), (be) => {
          throw o.value = !1, be;
        });
      };
    };
  }
  const Pe = Tt(!1);
  Pe.withControlled = Tt(!0);
  function Nt(E, z) {
    const F = d.value.findIndex((ve) => ve.path === E && (Array.isArray(ve.id) ? ve.id.includes(z) : ve.id === z)), ee = d.value[F];
    if (!(F === -1 || !ee)) {
      if (xt(() => {
        L(E, { mode: "silent", warn: !1 });
      }), ee.multiple && ee.fieldsCount && ee.fieldsCount--, Array.isArray(ee.id)) {
        const ve = ee.id.indexOf(z);
        ve >= 0 && ee.id.splice(ve, 1), delete ee.__flags.pendingUnmount[z];
      }
      (!ee.multiple || ee.fieldsCount <= 0) && (d.value.splice(F, 1), q(E), p(), delete m.value[E]);
    }
  }
  function le(E) {
    Dt(m.value).forEach((z) => {
      z.startsWith(E) && delete m.value[z];
    }), d.value = d.value.filter((z) => !z.path.startsWith(E)), xt(() => {
      p();
    });
  }
  const se = {
    name: a,
    formId: r,
    values: c,
    controlledValues: te,
    errorBag: S,
    errors: k,
    schema: X,
    submitCount: l,
    meta: M,
    isSubmitting: o,
    isValidating: i,
    fieldArrays: u,
    keepValuesOnUnmount: x,
    validateSchema: s(X) ? ne : void 0,
    validate: w,
    setFieldError: h,
    validateField: L,
    setFieldValue: Oe,
    setValues: nt,
    setErrors: _,
    setFieldTouched: Ke,
    setTouched: Jt,
    resetForm: b,
    resetField: In,
    handleSubmit: Pe,
    useFieldModel: ze,
    defineInputBinds: Fe,
    defineComponentBinds: Rt,
    defineField: W,
    stageInitialValue: we,
    unsetInitialValue: q,
    setFieldInitialValue: Ie,
    createPathState: Q,
    getPathState: ue,
    unsetPathValue: yt,
    removePathState: Nt,
    initialValues: P,
    getAllPathStates: () => d.value,
    destroyPath: le,
    isFieldTouched: Lt,
    isFieldDirty: pn,
    isFieldValid: Ht
  };
  function Oe(E, z, F = !0) {
    const ee = Te(z), ve = typeof E == "string" ? E : E.path;
    ue(ve) || Q(ve), gt(c, ve, ee), F && L(ve);
  }
  function Ne(E, z = !0) {
    Dt(c).forEach((F) => {
      delete c[F];
    }), Dt(E).forEach((F) => {
      Oe(F, E[F], !1);
    }), z && w();
  }
  function nt(E, z = !0) {
    Jr(c, E), u.forEach((F) => F && F.reset()), z && w();
  }
  function ot(E, z) {
    const F = ue(H(E)) || Q(E);
    return G({
      get() {
        return F.value;
      },
      set(ee) {
        var ve;
        const ke = H(E);
        Oe(ke, ee, (ve = H(z)) !== null && ve !== void 0 ? ve : !1);
      }
    });
  }
  function Ke(E, z) {
    const F = ue(E);
    F && (F.touched = z);
  }
  function Lt(E) {
    const z = ue(E);
    return z ? z.touched : d.value.filter((F) => F.path.startsWith(E)).some((F) => F.touched);
  }
  function pn(E) {
    const z = ue(E);
    return z ? z.dirty : d.value.filter((F) => F.path.startsWith(E)).some((F) => F.dirty);
  }
  function Ht(E) {
    const z = ue(E);
    return z ? z.valid : d.value.filter((F) => F.path.startsWith(E)).every((F) => F.valid);
  }
  function Jt(E) {
    if (typeof E == "boolean") {
      K((z) => {
        z.touched = E;
      });
      return;
    }
    Dt(E).forEach((z) => {
      Ke(z, !!E[z]);
    });
  }
  function In(E, z) {
    var F;
    const ee = z && "value" in z ? z.value : qe(P.value, E), ve = ue(E);
    ve && (ve.__flags.pendingReset = !0), Ie(E, Te(ee), !0), Oe(E, ee, !1), Ke(E, (F = z?.touched) !== null && F !== void 0 ? F : !1), h(E, z?.errors || []), xt(() => {
      ve && (ve.__flags.pendingReset = !1);
    });
  }
  function b(E, z) {
    let F = Te(E?.values ? E.values : N.value);
    F = z?.force ? F : Jr(N.value, F), F = Qt(X) && kt(X.cast) ? X.cast(F) : F, j(F, { force: z?.force }), K((ee) => {
      var ve;
      ee.__flags.pendingReset = !0, ee.validated = !1, ee.touched = ((ve = E?.touched) === null || ve === void 0 ? void 0 : ve[H(ee.path)]) || !1, Oe(H(ee.path), qe(F, H(ee.path)), !1), h(H(ee.path), void 0);
    }), z?.force ? Ne(F, !1) : nt(F, !1), _(E?.errors || {}), l.value = E?.submitCount || 0, xt(() => {
      w({ mode: "silent" }), K((ee) => {
        ee.__flags.pendingReset = !1;
      });
    });
  }
  async function w(E) {
    const z = E?.mode || "force";
    if (z === "force" && K((be) => be.validated = !0), se.validateSchema)
      return se.validateSchema(z);
    i.value = !0;
    const F = await Promise.all(d.value.map((be) => be.validate ? be.validate(E).then((He) => ({
      key: H(be.path),
      valid: He.valid,
      errors: He.errors,
      value: He.value
    })) : Promise.resolve({
      key: H(be.path),
      valid: !0,
      errors: [],
      value: void 0
    })));
    i.value = !1;
    const ee = {}, ve = {}, ke = {};
    for (const be of F)
      ee[be.key] = {
        valid: be.valid,
        errors: be.errors
      }, be.value && gt(ke, be.key, be.value), be.errors.length && (ve[be.key] = be.errors[0]);
    return {
      valid: F.every((be) => be.valid),
      results: ee,
      errors: ve,
      values: ke,
      source: "fields"
    };
  }
  async function L(E, z) {
    var F;
    const ee = ue(E);
    if (ee && z?.mode !== "silent" && (ee.validated = !0), X) {
      const { results: ke } = await ne(z?.mode || "validated-only");
      return ke[E] || { errors: [], valid: !0 };
    }
    return ee?.validate ? ee.validate(z) : (!ee && ((F = z?.warn) !== null && F !== void 0 ? F : !0) && process.env.NODE_ENV !== "production" && Cc(`field with path ${E} was not found`), Promise.resolve({ errors: [], valid: !0 }));
  }
  function q(E) {
    dc(P.value, E);
  }
  function we(E, z, F = !1) {
    Ie(E, z), gt(c, E, z), F && !e?.initialValues && gt(N.value, E, Te(z));
  }
  function Ie(E, z, F = !1) {
    gt(P.value, E, Te(z)), F && gt(N.value, E, Te(z));
  }
  async function $e() {
    const E = s(X);
    if (!E)
      return { valid: !0, results: {}, errors: {}, source: "none" };
    i.value = !0;
    const z = qa(E) || Qt(E) ? await UN(E, c) : await LN(E, c, {
      names: y.value,
      bailsMap: O.value
    });
    return i.value = !1, z;
  }
  const U = Pe((E, { evt: z }) => {
    Ug(z) && z.target.submit();
  });
  er(() => {
    if (e?.initialErrors && _(e.initialErrors), e?.initialTouched && Jt(e.initialTouched), e?.validateOnMount) {
      w();
      return;
    }
    se.validateSchema && se.validateSchema("silent");
  }), yn(X) && Le(X, () => {
    var E;
    (E = se.validateSchema) === null || E === void 0 || E.call(se, "validated-only");
  }), sr(rr, se), process.env.NODE_ENV !== "production" && (ZN(se), Le(() => Object.assign(Object.assign({ errors: S.value }, M.value), { values: c, isSubmitting: o.value, isValidating: i.value, submitCount: l.value }), hr, {
    deep: !0
  }));
  function W(E, z) {
    const F = kt(z) ? void 0 : z?.label, ee = ue(H(E)) || Q(E, { label: F }), ve = () => kt(z) ? z(xa(ee, Oa)) : z || {};
    function ke() {
      var Be;
      ee.touched = !0, ((Be = ve().validateOnBlur) !== null && Be !== void 0 ? Be : Mn().validateOnBlur) && L(H(ee.path));
    }
    function be() {
      var Be;
      ((Be = ve().validateOnInput) !== null && Be !== void 0 ? Be : Mn().validateOnInput) && xt(() => {
        L(H(ee.path));
      });
    }
    function He() {
      var Be;
      ((Be = ve().validateOnChange) !== null && Be !== void 0 ? Be : Mn().validateOnChange) && xt(() => {
        L(H(ee.path));
      });
    }
    const it = G(() => {
      const Be = {
        onChange: He,
        onInput: be,
        onBlur: ke
      };
      return kt(z) ? Object.assign(Object.assign({}, Be), z(xa(ee, Oa)).props || {}) : z?.props ? Object.assign(Object.assign({}, Be), z.props(xa(ee, Oa))) : Be;
    });
    return [ot(E, () => {
      var Be, St, At;
      return (At = (Be = ve().validateOnModelUpdate) !== null && Be !== void 0 ? Be : (St = Mn()) === null || St === void 0 ? void 0 : St.validateOnModelUpdate) !== null && At !== void 0 ? At : !0;
    }), it];
  }
  function ze(E) {
    return Array.isArray(E) ? E.map((z) => ot(z, !0)) : ot(E);
  }
  function Fe(E, z) {
    const [F, ee] = W(E, z);
    function ve() {
      ee.value.onBlur();
    }
    function ke(He) {
      const it = Ya(He);
      Oe(H(E), it, !1), ee.value.onInput();
    }
    function be(He) {
      const it = Ya(He);
      Oe(H(E), it, !1), ee.value.onChange();
    }
    return G(() => Object.assign(Object.assign({}, ee.value), {
      onBlur: ve,
      onInput: ke,
      onChange: be,
      value: F.value
    }));
  }
  function Rt(E, z) {
    const [F, ee] = W(E, z), ve = ue(H(E));
    function ke(be) {
      F.value = be;
    }
    return G(() => {
      const be = kt(z) ? z(xa(ve, Oa)) : z || {};
      return Object.assign({ [be.model || "modelValue"]: F.value, [`onUpdate:${be.model || "modelValue"}`]: ke }, ee.value);
    });
  }
  const an = Object.assign(Object.assign({}, se), { values: bi(c), handleReset: () => b(), submitForm: U });
  return sr(vN, an), an;
}
function aE(e, t, r, a) {
  const n = {
    touched: "some",
    pending: "some",
    valid: "every"
  }, o = G(() => !_t(t, s(r)));
  function i() {
    const u = e.value;
    return Dt(n).reduce((c, d) => {
      const f = n[d];
      return c[d] = u[f]((m) => m[d]), c;
    }, {});
  }
  const l = Kn(i());
  return _r(() => {
    const u = i();
    l.touched = u.touched, l.valid = u.valid, l.pending = u.pending;
  }), G(() => Object.assign(Object.assign({ initialValues: s(r) }, l), { valid: l.valid && !Dt(a.value).length, dirty: o.value }));
}
function oE(e, t, r) {
  const a = Kg(r), n = fe(a), o = fe(Te(a));
  function i(l, u) {
    u?.force ? (n.value = Te(l), o.value = Te(l)) : (n.value = Jr(Te(n.value) || {}, Te(l)), o.value = Jr(Te(o.value) || {}, Te(l))), u?.updateFields && e.value.forEach((c) => {
      if (c.touched)
        return;
      const f = qe(n.value, H(c.path));
      gt(t, H(c.path), Te(f));
    });
  }
  return {
    initialValues: n,
    originalInitialValues: o,
    setInitialValues: i
  };
}
function iE(e, t) {
  return t ? {
    valid: e.valid && t.valid,
    errors: [...e.errors, ...t.errors]
  } : e;
}
const lE = /* @__PURE__ */ D({
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
    const r = On(e, "validationSchema"), a = On(e, "keepValues"), { errors: n, errorBag: o, values: i, meta: l, isSubmitting: u, isValidating: c, submitCount: d, controlledValues: f, validate: m, validateField: p, handleReset: h, resetForm: _, handleSubmit: S, setErrors: k, setFieldError: y, setFieldValue: O, setValues: I, setFieldTouched: x, setTouched: P, resetField: N } = Hg({
      validationSchema: r.value ? r : void 0,
      initialValues: e.initialValues,
      initialErrors: e.initialErrors,
      initialTouched: e.initialTouched,
      validateOnMount: e.validateOnMount,
      keepValuesOnUnmount: a,
      name: e.name
    }), j = S((K, { evt: ue }) => {
      Ug(ue) && ue.target.submit();
    }, e.onInvalidSubmit), M = e.onSubmit ? S(e.onSubmit, e.onInvalidSubmit) : j;
    function te(K) {
      zs(K) && K.preventDefault(), h(), typeof t.attrs.onReset == "function" && t.attrs.onReset();
    }
    function X(K, ue) {
      return S(typeof K == "function" && !ue ? K : ue, e.onInvalidSubmit)(K);
    }
    function Q() {
      return Te(i);
    }
    function Ce() {
      return Te(l.value);
    }
    function B() {
      return Te(n.value);
    }
    function ne() {
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
        handleSubmit: X,
        handleReset: h,
        submitForm: j,
        setErrors: k,
        setFieldError: y,
        setFieldValue: O,
        setValues: I,
        setFieldTouched: x,
        setTouched: P,
        resetForm: _,
        resetField: N,
        getValues: Q,
        getMeta: Ce,
        getErrors: B
      };
    }
    return t.expose({
      setFieldError: y,
      setErrors: k,
      setFieldValue: O,
      setValues: I,
      setFieldTouched: x,
      setTouched: P,
      resetForm: _,
      validate: m,
      validateField: p,
      resetField: N,
      getValues: Q,
      getMeta: Ce,
      getErrors: B,
      values: i,
      meta: l,
      errors: n
    }), function() {
      const ue = e.as === "form" ? e.as : e.as ? dt(e.as) : null, re = xo(ue, t, ne);
      return ue ? dn(ue, Object.assign(Object.assign(Object.assign({}, ue === "form" ? {
        // Disables native validation as vee-validate will handle it.
        novalidate: !0
      } : {}), t.attrs), { onSubmit: M, onReset: te }), re) : re;
    };
  }
}), sE = lE;
function uE(e) {
  const t = ma(rr, void 0), r = fe([]), a = () => {
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
    return process.env.NODE_ENV !== "production" && Ta("FieldArray requires being a child of `<Form/>` or `useForm` being called before it. Array fields may not work correctly"), n;
  if (!s(e))
    return process.env.NODE_ENV !== "production" && Ta("FieldArray requires a field path to be provided, did you forget to pass the `name` prop?"), n;
  const o = t.fieldArrays.find((x) => s(x.path) === s(e));
  if (o)
    return o;
  let i = 0;
  function l() {
    return qe(t?.values, H(e), []) || [];
  }
  function u() {
    const x = l();
    Array.isArray(x) && (r.value = x.map((P, N) => d(P, N, r.value)), c());
  }
  u();
  function c() {
    const x = r.value.length;
    for (let P = 0; P < x; P++) {
      const N = r.value[P];
      N.isFirst = P === 0, N.isLast = P === x - 1;
    }
  }
  function d(x, P, N) {
    if (N && !lr(P) && N[P])
      return N[P];
    const j = i++;
    return {
      key: j,
      value: wN({
        get() {
          const te = qe(t?.values, H(e), []) || [], X = r.value.findIndex((Q) => Q.key === j);
          return X === -1 ? x : te[X];
        },
        set(te) {
          const X = r.value.findIndex((Q) => Q.key === j);
          if (X === -1) {
            process.env.NODE_ENV !== "production" && Ta("Attempting to update a non-existent array item");
            return;
          }
          k(X, te);
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
  function m(x) {
    const P = H(e), N = qe(t?.values, P);
    if (!N || !Array.isArray(N))
      return;
    const j = [...N];
    j.splice(x, 1);
    const M = P + `[${x}]`;
    t.destroyPath(M), t.unsetInitialValue(M), gt(t.values, P, j), r.value.splice(x, 1), f();
  }
  function p(x) {
    const P = Te(x), N = H(e), j = qe(t?.values, N), M = lr(j) ? [] : j;
    if (!Array.isArray(M))
      return;
    const te = [...M];
    te.push(P), t.stageInitialValue(N + `[${te.length - 1}]`, P), gt(t.values, N, te), r.value.push(d(P)), f();
  }
  function h(x, P) {
    const N = H(e), j = qe(t?.values, N);
    if (!Array.isArray(j) || !(x in j) || !(P in j))
      return;
    const M = [...j], te = [...r.value], X = M[x];
    M[x] = M[P], M[P] = X;
    const Q = te[x];
    te[x] = te[P], te[P] = Q, gt(t.values, N, M), r.value = te, c();
  }
  function _(x, P) {
    const N = Te(P), j = H(e), M = qe(t?.values, j);
    if (!Array.isArray(M) || M.length < x)
      return;
    const te = [...M], X = [...r.value];
    te.splice(x, 0, N), X.splice(x, 0, d(N)), gt(t.values, j, te), r.value = X, f();
  }
  function S(x) {
    const P = H(e);
    t.stageInitialValue(P, x), gt(t.values, P, x), u(), f();
  }
  function k(x, P) {
    const N = H(e), j = qe(t?.values, N);
    !Array.isArray(j) || j.length - 1 < x || (gt(t.values, `${N}[${x}]`, P), t?.validate({ mode: "validated-only" }));
  }
  function y(x) {
    const P = Te(x), N = H(e), j = qe(t?.values, N), M = lr(j) ? [] : j;
    if (!Array.isArray(M))
      return;
    const te = [P, ...M];
    gt(t.values, N, te), t.stageInitialValue(N + "[0]", P), r.value.unshift(d(P)), f();
  }
  function O(x, P) {
    const N = H(e), j = qe(t?.values, N), M = lr(j) ? [] : [...j];
    if (!Array.isArray(j) || !(x in j) || !(P in j))
      return;
    const te = [...r.value], X = te[x];
    te.splice(x, 1), te.splice(P, 0, X);
    const Q = M[x];
    M.splice(x, 1), M.splice(P, 0, Q), gt(t.values, N, M), r.value = te, f();
  }
  const I = {
    fields: r,
    remove: m,
    push: p,
    swap: h,
    insert: _,
    update: k,
    replace: S,
    prepend: y,
    move: O
  };
  return t.fieldArrays.push(Object.assign({ path: e, reset: u }, I)), yi(() => {
    const x = t.fieldArrays.findIndex((P) => H(P.path) === H(e));
    x >= 0 && t.fieldArrays.splice(x, 1);
  }), Le(l, (x) => {
    const P = r.value.map((N) => N.value);
    _t(x, P) || u();
  }), I;
}
const cE = /* @__PURE__ */ D({
  name: "FieldArray",
  inheritAttrs: !1,
  props: {
    name: {
      type: String,
      required: !0
    }
  },
  setup(e, t) {
    const { push: r, remove: a, swap: n, insert: o, replace: i, update: l, prepend: u, move: c, fields: d } = uE(() => e.name);
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
    }), () => xo(void 0, t, f);
  }
}), dE = cE, fE = /* @__PURE__ */ D({
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
    const r = fn(rr, void 0), a = G(() => r?.errors.value[e.name]);
    function n() {
      return {
        message: a.value
      };
    }
    return () => {
      if (!a.value)
        return;
      const o = e.as ? dt(e.as) : e.as, i = xo(o, t, n), l = Object.assign({ role: "alert" }, t.attrs);
      return !o && (Array.isArray(i) || !i) && i?.length ? i : (Array.isArray(i) || !i) && !i?.length ? dn(o || "span", l, a.value) : dn(o, l, i);
    };
  }
}), mE = fE;
function pE(e) {
  const t = ma(rr), r = e ? void 0 : fn(ca);
  return G(() => e ? qe(t?.values, H(e)) : H(r?.value));
}
function vE() {
  const e = ma(rr);
  return e || process.env.NODE_ENV !== "production" && Ta("No vee-validate <Form /> or `useForm` was detected in the component tree"), G(() => e?.values || {});
}
const bc = (e) => e !== null && !!e && typeof e == "object" && !Array.isArray(e);
function Jg(e) {
  return Number(e) >= 0;
}
function gE(e) {
  return typeof e == "object" && e !== null;
}
function hE(e) {
  return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
function _c(e) {
  if (!gE(e) || hE(e) !== "[object Object]")
    return !1;
  if (Object.getPrototypeOf(e) === null)
    return !0;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function qg(e, t) {
  return Object.keys(t).forEach((r) => {
    if (_c(t[r]) && _c(e[r])) {
      e[r] || (e[r] = {}), qg(e[r], t[r]);
      return;
    }
    e[r] = t[r];
  }), e;
}
function bE(e) {
  const t = e.split(".");
  if (!t.length)
    return "";
  let r = String(t[0]);
  for (let a = 1; a < t.length; a++) {
    if (Jg(t[a])) {
      r += `[${t[a]}]`;
      continue;
    }
    r += `.${t[a]}`;
  }
  return r;
}
function Yg(e, t) {
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
      return Xg(n.error.issues, o), {
        errors: Object.values(o)
      };
    },
    cast(a) {
      try {
        return e.parse(a);
      } catch {
        const o = Qg(e);
        return bc(o) && bc(a) ? qg(o, a) : a;
      }
    },
    describe(a) {
      try {
        if (!a)
          return {
            required: !e.isOptional(),
            exists: !0
          };
        const n = _E(a, e);
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
function Xg(e, t) {
  e.forEach((r) => {
    const a = bE(r.path.join("."));
    r.code === "invalid_union" && (Xg(r.unionErrors.flatMap((n) => n.issues), t), !a) || (t[a] || (t[a] = { errors: [], path: a }), t[a].errors.push(r.message));
  });
}
function Qg(e) {
  if (e instanceof vr)
    return Object.fromEntries(Object.entries(e.shape).map(([t, r]) => r instanceof wo ? [t, r._def.defaultValue()] : r instanceof vr ? [t, Qg(r)] : [t, void 0]));
}
function _E(e, t) {
  if (!yc(t))
    return null;
  if (fa(e))
    return t.shape[Io(e)];
  const r = (e || "").split(/\.|\[(\d+)\]/).filter(Boolean);
  let a = t;
  for (let n = 0; n <= r.length; n++) {
    const o = r[n];
    if (!o || !a)
      return a;
    if (yc(a)) {
      a = a.shape[o] || null;
      continue;
    }
    Jg(o) && yE(a) && (a = a._def.type);
  }
  return null;
}
function eh(e) {
  return e._def.typeName;
}
function yE(e) {
  return eh(e) === Hr.ZodArray;
}
function yc(e) {
  return eh(e) === Hr.ZodObject;
}
const th = Symbol();
function Oo() {
  const e = fn(ca), t = fn(th);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { name: r, errorMessage: a, meta: n } = e, o = t, i = {
    valid: G(() => n.valid),
    isDirty: G(() => n.dirty),
    isTouched: G(() => n.touched),
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
const Ir = /* @__PURE__ */ D({
  __name: "FormControl",
  setup(e) {
    const { error: t, formItemId: r, formDescriptionId: a, formMessageId: n } = Oo();
    return (o, i) => (g(), A(s(Sb), {
      id: s(r),
      "data-slot": "form-control",
      "aria-describedby": s(t) ? `${s(a)} ${s(n)}` : `${s(a)}`,
      "aria-invalid": !!s(t)
    }, {
      default: v(() => [
        C(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "aria-describedby", "aria-invalid"]));
  }
}), $E = ["id"], xr = /* @__PURE__ */ D({
  __name: "FormDescription",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { formDescriptionId: r } = Oo();
    return (a, n) => (g(), R("p", {
      id: s(r),
      "data-slot": "form-description",
      class: ge(s(Z)("text-muted-foreground text-sm", t.class))
    }, [
      C(a.$slots, "default")
    ], 10, $E));
  }
}), Cn = /* @__PURE__ */ D({
  __name: "FormItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, r = Ib();
    return sr(th, r), (a, n) => (g(), R("div", {
      "data-slot": "form-item",
      class: ge(s(Z)("grid gap-2", t.class))
    }, [
      C(a.$slots, "default")
    ], 2));
  }
}), nh = /* @__PURE__ */ D({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = pe(t, "class");
    return (a, n) => (g(), A(s(xb), J({ "data-slot": "label" }, s(r), {
      class: s(Z)(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        t.class
      )
    }), {
      default: v(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), kE = /* @__PURE__ */ D({
  __name: "FormLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, { error: r, formItemId: a } = Oo();
    return (n, o) => (g(), A(s(nh), {
      "data-slot": "form-label",
      "data-error": !!s(r),
      class: ge(s(Z)(
        "data-[error=true]:text-destructive",
        t.class
      )),
      for: s(a)
    }, {
      default: v(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-error", "class", "for"]));
  }
}), ar = /* @__PURE__ */ D({
  __name: "FormMessage",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { name: r, formMessageId: a } = Oo();
    return (n, o) => (g(), A(s(mE), {
      id: s(a),
      "data-slot": "form-message",
      as: "p",
      name: H(s(r)),
      class: ge(s(Z)("text-destructive text-sm", t.class))
    }, null, 8, ["id", "name", "class"]));
  }
}), rh = /* @__PURE__ */ D({
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
    const n = We(e, t);
    return (o, i) => (g(), A(s(Ob), J({ "data-slot": "accordion" }, s(n)), {
      default: v(() => [
        C(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ah = /* @__PURE__ */ D({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = pe(t, "class");
    return (a, n) => (g(), A(s(Nb), J({ "data-slot": "accordion-content" }, s(r), { class: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm" }), {
      default: v(() => [
        oe("div", {
          class: ge(s(Z)("pt-0 pb-4", t.class))
        }, [
          C(a.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 16));
  }
}), oh = /* @__PURE__ */ D({
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
    const t = e, r = pe(t, "class"), a = Ye(r);
    return (n, o) => (g(), A(s(Eb), J({ "data-slot": "accordion-item" }, s(a), {
      class: s(Z)("border-b last:border-b-0", t.class)
    }), {
      default: v(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ih = /* @__PURE__ */ D({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = pe(t, "class");
    return (a, n) => (g(), A(s(zb), { class: "flex" }, {
      default: v(() => [
        $(s(Pb), J({ "data-slot": "accordion-trigger" }, s(r), {
          class: s(Z)(
            "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
            t.class
          )
        }), {
          default: v(() => [
            C(a.$slots, "default"),
            C(a.$slots, "icon", {}, () => [
              $(s(Bn), { class: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" })
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), wE = {
  key: 0,
  class: "text-destructive"
}, jn = /* @__PURE__ */ D({
  __name: "AutoFormLabel",
  props: {
    required: { type: Boolean }
  },
  setup(e) {
    return (t, r) => (g(), A(s(kE), null, {
      default: v(() => [
        C(t.$slots, "default"),
        e.required ? (g(), R("span", wE, " *")) : me("", !0)
      ]),
      _: 3
    }));
  }
});
function cn(e) {
  let t = e.replace(/\[\d+\]/g, "").replace(/([A-Z])/g, " $1");
  return t = t.charAt(0).toUpperCase() + t.slice(1), t;
}
function SE(e) {
  const t = /\[(\d+)\]/, r = e.match(t);
  return r ? Number.parseInt(r[1]) : void 0;
}
function br(e) {
  return e ? "innerType" in e._def ? br(e._def.innerType) : "schema" in e._def ? br(e._def.schema) : e : null;
}
function As(e) {
  const t = br(e);
  return t ? t._def.typeName : "";
}
function Xa(e) {
  const t = e;
  if (t._def.typeName === "ZodDefault")
    return t._def.defaultValue();
  if ("innerType" in t._def)
    return Xa(
      t._def.innerType
    );
  if ("schema" in t._def)
    return Xa(
      t._def.schema
    );
}
function lh(e) {
  const t = (e?._def).typeName;
  if (t === "ZodEffects" || t === "ZodTransform" || t === "ZodPipe") {
    const r = e;
    return lh(r._def.schema || r._def.in);
  }
  return e;
}
function sh(e) {
  return /^\[.+\]$/.test(e);
}
function IE(e) {
  return e !== null && !!e && typeof e == "object" && !Array.isArray(e);
}
function xE(e) {
  return IE(e) || Array.isArray(e);
}
function OE(e) {
  return sh(e) ? e.replace(/\[|\]/g, "") : e;
}
function $c(e, t, r) {
  return e ? sh(t) ? e[OE(t)] : (t || "").split(/\.|\[(\d+)\]/).filter(Boolean).reduce((n, o) => xE(n) && o in n ? n[o] : r, e) : r;
}
function NE(e) {
  switch (e) {
    case "true":
    case !0:
      return !0;
    case "false":
    case !1:
      return !1;
  }
}
function Qa(e) {
  return e ? NE(e) : void 0;
}
const EE = { class: "!my-4 flex justify-end" }, zE = /* @__PURE__ */ D({
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
      return i instanceof _s;
    }
    function a(i) {
      return i instanceof wo;
    }
    const n = G(() => {
      if (!t.schema)
        return;
      const i = r(t.schema) ? t.schema._def.type : a(t.schema) ? t.schema._def.innerType._def.type : null;
      return {
        type: As(i),
        schema: i
      };
    }), o = Ts(t.fieldName);
    return sr(ca, o), (i, l) => (g(), A(s(dE), {
      as: "section",
      name: e.fieldName
    }, {
      default: v(({ fields: u, remove: c, push: d }) => [
        C(i.$slots, "default", zt(Ut(t)), () => [
          $(s(rh), {
            type: "multiple",
            class: "w-full",
            collapsible: "",
            disabled: e.disabled,
            "as-child": ""
          }, {
            default: v(() => [
              $(s(Cn), null, {
                default: v(() => [
                  $(s(oh), {
                    value: e.fieldName,
                    class: "border-none"
                  }, {
                    default: v(() => [
                      $(s(ih), null, {
                        default: v(() => [
                          $(jn, {
                            class: "text-base",
                            required: e.required
                          }, {
                            default: v(() => [
                              he(ae(e.schema?.description || s(cn)(e.fieldName)), 1)
                            ]),
                            _: 1
                          }, 8, ["required"])
                        ]),
                        _: 1
                      }),
                      $(s(ah), null, {
                        default: v(() => [
                          (g(!0), R(De, null, Ze(u, (f, m) => (g(), R("div", {
                            key: f.key,
                            class: "mb-4 p-1"
                          }, [
                            $(Ds, {
                              "field-name": `${e.fieldName}[${m}]`,
                              label: e.fieldName,
                              shape: n.value,
                              config: e.config
                            }, null, 8, ["field-name", "label", "shape", "config"]),
                            oe("div", EE, [
                              $(s(ft), {
                                type: "button",
                                size: "icon",
                                variant: "secondary",
                                onClick: (p) => c(m)
                              }, {
                                default: v(() => [
                                  $(s(Fc), { size: 16 })
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            f.isLast ? me("", !0) : (g(), A(s(O$), { key: 0 }))
                          ]))), 128)),
                          $(s(ft), {
                            type: "button",
                            variant: "secondary",
                            class: "mt-4 flex items-center",
                            onClick: (f) => d(null)
                          }, {
                            default: v(() => [
                              $(s(no), {
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
                      $(s(ar))
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
}), PE = /* @__PURE__ */ D({
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
    const r = e, a = t, n = pe(r, "class"), o = We(n, a);
    return (i, l) => (g(), A(s(Tb), J({ "data-slot": "switch" }, s(o), {
      class: s(Z)(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        r.class
      )
    }), {
      default: v(() => [
        $(s(Ab), {
          "data-slot": "switch-thumb",
          class: ge(s(Z)("bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"))
        }, {
          default: v(() => [
            C(i.$slots, "thumb")
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), TE = { class: "space-y-0 mb-3 flex items-center gap-3" }, kc = /* @__PURE__ */ D({
  __name: "AutoFormFieldBoolean",
  props: {
    fieldName: {},
    label: {},
    required: { type: Boolean },
    config: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, r = G(() => t.config?.component === "switch" ? PE : Pa);
    return (a, n) => (g(), A(s(Sr), { name: e.fieldName }, {
      default: v((o) => [
        $(s(Cn), null, {
          default: v(() => [
            oe("div", TE, [
              $(s(Ir), null, {
                default: v(() => [
                  C(a.$slots, "default", zt(Ut(o)), () => [
                    (g(), A(dt(r.value), {
                      disabled: s(Qa)(e.config?.inputProps?.disabled) ?? e.disabled,
                      name: o.componentField.name,
                      "model-value": o.componentField.modelValue,
                      "onUpdate:modelValue": o.componentField["onUpdate:modelValue"]
                    }, null, 8, ["disabled", "name", "model-value", "onUpdate:modelValue"]))
                  ])
                ]),
                _: 2
              }, 1024),
              e.config?.hideLabel ? me("", !0) : (g(), A(jn, {
                key: 0,
                required: e.required
              }, {
                default: v(() => [
                  he(ae(e.config?.label || s(cn)(e.label ?? e.fieldName)), 1)
                ]),
                _: 1
              }, 8, ["required"]))
            ]),
            e.config?.description ? (g(), A(s(xr), { key: 0 }, {
              default: v(() => [
                he(ae(e.config.description), 1)
              ]),
              _: 1
            })) : me("", !0),
            $(s(ar))
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 8, ["name"]));
  }
}), AE = { class: "flex items-center gap-1" }, DE = { class: "flex flex-col gap-y-4 mt-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, CE = /* @__PURE__ */ D({
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
    const r = e, a = t, n = pe(r, "class"), o = We(n, a);
    return (i, l) => (g(), A(s(Db), J({
      "data-slot": "calendar",
      class: s(Z)("p-3", r.class)
    }, s(o)), {
      default: v(({ grid: u, weekDays: c }) => [
        $(s(ME), null, {
          default: v(() => [
            $(s(BE)),
            oe("div", AE, [
              $(s(WE)),
              $(s(ZE))
            ])
          ]),
          _: 1
        }),
        oe("div", DE, [
          (g(!0), R(De, null, Ze(u, (d) => (g(), A(s(LE), {
            key: d.value.toString()
          }, {
            default: v(() => [
              $(s(VE), null, {
                default: v(() => [
                  $(s(wc), null, {
                    default: v(() => [
                      (g(!0), R(De, null, Ze(c, (f) => (g(), A(s(FE), { key: f }, {
                        default: v(() => [
                          he(ae(f), 1)
                        ]),
                        _: 2
                      }, 1024))), 128))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              $(s(RE), null, {
                default: v(() => [
                  (g(!0), R(De, null, Ze(d.rows, (f, m) => (g(), A(s(wc), {
                    key: `weekDate-${m}`,
                    class: "mt-2 w-full"
                  }, {
                    default: v(() => [
                      (g(!0), R(De, null, Ze(f, (p) => (g(), A(s(jE), {
                        key: p.toString(),
                        date: p
                      }, {
                        default: v(() => [
                          $(s(UE), {
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
}), jE = /* @__PURE__ */ D({
  __name: "CalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = pe(t, "class"), a = Ye(r);
    return (n, o) => (g(), A(s(Cb), J({
      "data-slot": "calendar-cell",
      class: s(Z)("relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:rounded-md [&:has([data-selected])]:bg-accent", t.class)
    }, s(a)), {
      default: v(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), UE = /* @__PURE__ */ D({
  __name: "CalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "button" },
    class: {}
  },
  setup(e) {
    const t = e, r = pe(t, "class"), a = Ye(r);
    return (n, o) => (g(), A(s(jb), J({
      "data-slot": "calendar-cell-trigger",
      class: s(Z)(
        s(rn)({ variant: "ghost" }),
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
      default: v(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), LE = /* @__PURE__ */ D({
  __name: "CalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = pe(t, "class"), a = Ye(r);
    return (n, o) => (g(), A(s(Ub), J({
      "data-slot": "calendar-grid",
      class: s(Z)("w-full border-collapse space-x-1", t.class)
    }, s(a)), {
      default: v(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), RE = /* @__PURE__ */ D({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), A(s(Lb), J({ "data-slot": "calendar-grid-body" }, t), {
      default: v(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), VE = /* @__PURE__ */ D({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), A(s(Rb), J({ "data-slot": "calendar-grid-head" }, t), {
      default: v(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wc = /* @__PURE__ */ D({
  __name: "CalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = pe(t, "class"), a = Ye(r);
    return (n, o) => (g(), A(s(Vb), J({
      "data-slot": "calendar-grid-row",
      class: s(Z)("flex", t.class)
    }, s(a)), {
      default: v(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), FE = /* @__PURE__ */ D({
  __name: "CalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = pe(t, "class"), a = Ye(r);
    return (n, o) => (g(), A(s(Fb), J({
      "data-slot": "calendar-head-cell",
      class: s(Z)("text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]", t.class)
    }, s(a)), {
      default: v(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ME = /* @__PURE__ */ D({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = pe(t, "class"), a = Ye(r);
    return (n, o) => (g(), A(s(Mb), J({
      "data-slot": "calendar-header",
      class: s(Z)("flex justify-center pt-1 relative items-center w-full", t.class)
    }, s(a)), {
      default: v(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), BE = /* @__PURE__ */ D({
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = pe(t, "class"), a = Ye(r);
    return (n, o) => (g(), A(s(Bb), J({
      "data-slot": "calendar-heading",
      class: s(Z)("text-sm font-medium", t.class)
    }, s(a)), {
      default: v(({ headingValue: i }) => [
        C(n.$slots, "default", { headingValue: i }, () => [
          he(ae(i), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ZE = /* @__PURE__ */ D({
  __name: "CalendarNextButton",
  props: {
    nextPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = pe(t, "class"), a = Ye(r);
    return (n, o) => (g(), A(s(Zb), J({
      "data-slot": "calendar-next-button",
      class: s(Z)(
        s(rn)({ variant: "outline" }),
        "absolute right-1",
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        t.class
      )
    }, s(a)), {
      default: v(() => [
        C(n.$slots, "default", {}, () => [
          $(s(Zn), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), WE = /* @__PURE__ */ D({
  __name: "CalendarPrevButton",
  props: {
    prevPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = pe(t, "class"), a = Ye(r);
    return (n, o) => (g(), A(s(Wb), J({
      "data-slot": "calendar-prev-button",
      class: s(Z)(
        s(rn)({ variant: "outline" }),
        "absolute left-1",
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        t.class
      )
    }, s(a)), {
      default: v(() => [
        C(n.$slots, "default", {}, () => [
          $(s(Ni), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), uh = /* @__PURE__ */ D({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = We(e, t);
    return (o, i) => (g(), A(s(Gb), J({ "data-slot": "popover" }, s(n)), {
      default: v(() => [
        C(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ch = /* @__PURE__ */ D({
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
    const r = e, a = t, n = pe(r, "class"), o = We(n, a);
    return (i, l) => (g(), A(s(Kb), null, {
      default: v(() => [
        $(s(Hb), J({ "data-slot": "popover-content" }, { ...s(o), ...i.$attrs }, {
          class: s(Z)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border p-4 shadow-md origin-(--reka-popover-content-transform-origin) outline-hidden",
            r.class
          )
        }), {
          default: v(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), dh = /* @__PURE__ */ D({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), A(s(Jb), J({ "data-slot": "popover-trigger" }, t), {
      default: v(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
let Bo = null;
function GE() {
  return Bo == null && (Bo = new Intl.DateTimeFormat().resolvedOptions().timeZone), Bo;
}
let Zo = /* @__PURE__ */ new Map();
class KE {
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
    return qE() && (this.resolvedHourCycle || (this.resolvedHourCycle = YE(t.locale, this.options)), t.hourCycle = this.resolvedHourCycle, t.hour12 = this.resolvedHourCycle === "h11" || this.resolvedHourCycle === "h12"), t.calendar === "ethiopic-amete-alem" && (t.calendar = "ethioaa"), t;
  }
  constructor(t, r = {}) {
    this.formatter = fh(t, r), this.options = r;
  }
}
const HE = {
  true: {
    // Only Japanese uses the h11 style for 12 hour time. All others use h12.
    ja: "h11"
  },
  false: {}
};
function fh(e, t = {}) {
  if (typeof t.hour12 == "boolean" && JE()) {
    t = {
      ...t
    };
    let n = HE[String(t.hour12)][e.split("-")[0]], o = t.hour12 ? "h12" : "h23";
    t.hourCycle = n ?? o, delete t.hour12;
  }
  let r = e + (t ? Object.entries(t).sort((n, o) => n[0] < o[0] ? -1 : 1).join() : "");
  if (Zo.has(r)) return Zo.get(r);
  let a = new Intl.DateTimeFormat(e, t);
  return Zo.set(r, a), a;
}
let Wo = null;
function JE() {
  return Wo == null && (Wo = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    hour12: !1
  }).format(new Date(2020, 2, 3, 0)) === "24"), Wo;
}
let Go = null;
function qE() {
  return Go == null && (Go = new Intl.DateTimeFormat("fr", {
    hour: "numeric",
    hour12: !1
  }).resolvedOptions().hourCycle === "h12"), Go;
}
function YE(e, t) {
  if (!t.timeStyle && !t.hour) return;
  e = e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, ""), e += (e.includes("-u-") ? "" : "-u") + "-nu-latn";
  let r = fh(e, {
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
const XE = /* @__PURE__ */ D({
  __name: "AutoFormFieldDate",
  props: {
    fieldName: {},
    label: {},
    required: { type: Boolean },
    config: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = new KE("en-US", {
      dateStyle: "long"
    });
    return (r, a) => (g(), A(s(Sr), { name: e.fieldName }, {
      default: v((n) => [
        $(s(Cn), null, {
          default: v(() => [
            e.config?.hideLabel ? me("", !0) : (g(), A(jn, {
              key: 0,
              required: e.required
            }, {
              default: v(() => [
                he(ae(e.config?.label || s(cn)(e.label ?? e.fieldName)), 1)
              ]),
              _: 1
            }, 8, ["required"])),
            $(s(Ir), null, {
              default: v(() => [
                C(r.$slots, "default", zt(Ut(n)), () => [
                  oe("div", null, [
                    $(s(uh), null, {
                      default: v(() => [
                        $(s(dh), {
                          "as-child": "",
                          disabled: s(Qa)(e.config?.inputProps?.disabled) ?? e.disabled
                        }, {
                          default: v(() => [
                            $(s(ft), {
                              variant: "outline",
                              class: ge(s(Z)(
                                "w-full justify-start text-left font-normal",
                                !n.componentField.modelValue && "text-muted-foreground"
                              ))
                            }, {
                              default: v(() => [
                                $(s(a_), { class: "mr-2 h-4 w-4" }),
                                he(" " + ae(n.componentField.modelValue ? s(t).format(n.componentField.modelValue.toDate(s(GE)())) : "Pick a date"), 1)
                              ]),
                              _: 2
                            }, 1032, ["class"])
                          ]),
                          _: 2
                        }, 1032, ["disabled"]),
                        $(s(ch), { class: "w-auto p-0" }, {
                          default: v(() => [
                            $(s(CE), J({ "initial-focus": "" }, n.componentField), null, 16)
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
            e.config?.description ? (g(), A(s(xr), { key: 1 }, {
              default: v(() => [
                he(ae(e.config.description), 1)
              ]),
              _: 1
            })) : me("", !0),
            $(s(ar))
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 8, ["name"]));
  }
}), QE = /* @__PURE__ */ D({
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
    const r = e, a = t, n = pe(r, "class"), o = We(n, a);
    return (i, l) => (g(), A(s(qb), J({
      "data-slot": "radio-group",
      class: s(Z)("grid gap-3", r.class)
    }, s(o)), {
      default: v(() => [
        C(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ez = /* @__PURE__ */ D({
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
    const t = e, r = pe(t, "class"), a = Ye(r);
    return (n, o) => (g(), A(s(Yb), J({ "data-slot": "radio-group-item" }, s(a), {
      class: s(Z)(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        t.class
      )
    }), {
      default: v(() => [
        $(s(Xb), {
          "data-slot": "radio-group-indicator",
          class: "relative flex items-center justify-center"
        }, {
          default: v(() => [
            $(s(l_), { class: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Sc = /* @__PURE__ */ D({
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
    return (t, r) => (g(), A(s(Sr), { name: e.fieldName }, {
      default: v((a) => [
        $(s(Cn), null, {
          default: v(() => [
            e.config?.hideLabel ? me("", !0) : (g(), A(jn, {
              key: 0,
              required: e.required
            }, {
              default: v(() => [
                he(ae(e.config?.label || s(cn)(e.label ?? e.fieldName)), 1)
              ]),
              _: 1
            }, 8, ["required"])),
            $(s(Ir), null, {
              default: v(() => [
                C(t.$slots, "default", zt(Ut(a)), () => [
                  e.config?.component === "radio" ? (g(), A(s(QE), J({
                    key: 0,
                    disabled: s(Qa)(e.config?.inputProps?.disabled) ?? e.disabled,
                    orientation: "vertical"
                  }, { ...a.componentField }), {
                    default: v(() => [
                      (g(!0), R(De, null, Ze(e.options, (n, o) => (g(), R("div", {
                        key: n,
                        class: "mb-2 flex items-center gap-3 space-y-0"
                      }, [
                        $(s(ez), {
                          id: `${n}-${o}`,
                          value: n
                        }, null, 8, ["id", "value"]),
                        $(s(nh), {
                          for: `${n}-${o}`
                        }, {
                          default: v(() => [
                            he(ae(s(cn)(n)), 1)
                          ]),
                          _: 2
                        }, 1032, ["for"])
                      ]))), 128))
                    ]),
                    _: 1
                  }, 16, ["disabled"])) : (g(), A(s(Cd), J({
                    key: 1,
                    disabled: s(Qa)(e.config?.inputProps?.disabled) ?? e.disabled
                  }, { ...a.componentField }), {
                    default: v(() => [
                      $(s(Yk), { class: "w-full" }, {
                        default: v(() => [
                          $(s(Ld), {
                            placeholder: e.config?.inputProps?.placeholder
                          }, null, 8, ["placeholder"])
                        ]),
                        _: 1
                      }),
                      $(s(jd), null, {
                        default: v(() => [
                          (g(!0), R(De, null, Ze(e.options, (n) => (g(), A(s(Ud), {
                            key: n,
                            value: n
                          }, {
                            default: v(() => [
                              he(ae(s(cn)(n)), 1)
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
            e.config?.description ? (g(), A(s(xr), { key: 1 }, {
              default: v(() => [
                he(ae(e.config.description), 1)
              ]),
              _: 1
            })) : me("", !0),
            $(s(ar))
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 8, ["name"]));
  }
}), tz = {
  key: 1,
  class: "flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent pl-3 pr-1 py-1 text-sm shadow-sm transition-colors"
}, nz = /* @__PURE__ */ D({
  __name: "AutoFormFieldFile",
  props: {
    fieldName: {},
    label: {},
    required: { type: Boolean },
    config: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = fe();
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
    return (a, n) => (g(), A(s(Sr), { name: e.fieldName }, {
      default: v((o) => [
        $(s(Cn), zt(Ut(a.$attrs)), {
          default: v(() => [
            e.config?.hideLabel ? me("", !0) : (g(), A(jn, {
              key: 0,
              required: e.required
            }, {
              default: v(() => [
                he(ae(e.config?.label || s(cn)(e.label ?? e.fieldName)), 1)
              ]),
              _: 1
            }, 8, ["required"])),
            $(s(Ir), null, {
              default: v(() => [
                C(a.$slots, "default", zt(Ut(o)), () => [
                  t.value ? (g(), R("div", tz, [
                    oe("p", null, ae(t.value?.name), 1),
                    $(s(ft), {
                      size: "icon",
                      variant: "ghost",
                      class: "h-[26px] w-[26px]",
                      "aria-label": "Remove file",
                      type: "button",
                      onClick: () => {
                        t.value = void 0, o.componentField.onInput(void 0);
                      }
                    }, {
                      default: v(() => [
                        $(s(Fc))
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ])) : (g(), A(s(Nn), J({
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
            e.config?.description ? (g(), A(s(xr), { key: 1 }, {
              default: v(() => [
                he(ae(e.config.description), 1)
              ]),
              _: 1
            })) : me("", !0),
            $(s(ar))
          ]),
          _: 2
        }, 1040)
      ]),
      _: 3
    }, 8, ["name"]));
  }
}), rz = /* @__PURE__ */ D({
  __name: "Textarea",
  props: {
    class: {},
    defaultValue: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, n = /* @__PURE__ */ zi(r, "modelValue", t, {
      passive: !0,
      defaultValue: r.defaultValue
    });
    return (o, i) => _i((g(), R("textarea", {
      "onUpdate:modelValue": i[0] || (i[0] = (l) => yn(n) ? n.value = l : null),
      "data-slot": "textarea",
      class: ge(s(Z)("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", r.class))
    }, null, 2)), [
      [Ac, s(n)]
    ]);
  }
}), Ic = /* @__PURE__ */ D({
  __name: "AutoFormFieldInput",
  props: {
    fieldName: {},
    label: {},
    required: { type: Boolean },
    config: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, r = G(() => t.config?.component === "textarea" ? rz : Nn);
    return (a, n) => (g(), A(s(Sr), { name: e.fieldName }, {
      default: v((o) => [
        $(s(Cn), zt(Ut(a.$attrs)), {
          default: v(() => [
            e.config?.hideLabel ? me("", !0) : (g(), A(jn, {
              key: 0,
              required: e.required
            }, {
              default: v(() => [
                he(ae(e.config?.label || s(cn)(e.label ?? e.fieldName)), 1)
              ]),
              _: 1
            }, 8, ["required"])),
            $(s(Ir), null, {
              default: v(() => [
                C(a.$slots, "default", zt(Ut(o)), () => [
                  (g(), A(dt(r.value), J({ type: "text" }, { ...o.componentField, ...e.config?.inputProps }, {
                    disabled: e.config?.inputProps?.disabled ?? e.disabled
                  }), null, 16, ["disabled"]))
                ])
              ]),
              _: 2
            }, 1024),
            e.config?.description ? (g(), A(s(xr), { key: 1 }, {
              default: v(() => [
                he(ae(e.config.description), 1)
              ]),
              _: 1
            })) : me("", !0),
            $(s(ar))
          ]),
          _: 2
        }, 1040)
      ]),
      _: 3
    }, 8, ["name"]));
  }
}), az = /* @__PURE__ */ D({
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
    return (t, r) => (g(), A(s(Sr), { name: e.fieldName }, {
      default: v((a) => [
        $(s(Cn), null, {
          default: v(() => [
            e.config?.hideLabel ? me("", !0) : (g(), A(jn, {
              key: 0,
              required: e.required
            }, {
              default: v(() => [
                he(ae(e.config?.label || s(cn)(e.label ?? e.fieldName)), 1)
              ]),
              _: 1
            }, 8, ["required"])),
            $(s(Ir), null, {
              default: v(() => [
                C(t.$slots, "default", zt(Ut(a)), () => [
                  $(s(Nn), J({ type: "number" }, { ...a.componentField, ...e.config?.inputProps }, {
                    disabled: e.config?.inputProps?.disabled ?? e.disabled
                  }), null, 16, ["disabled"])
                ])
              ]),
              _: 2
            }, 1024),
            e.config?.description ? (g(), A(s(xr), { key: 1 }, {
              default: v(() => [
                he(ae(e.config.description), 1)
              ]),
              _: 1
            })) : me("", !0),
            $(s(ar))
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 8, ["name"]));
  }
}), oz = /* @__PURE__ */ D({
  __name: "AutoFormFieldObject",
  props: {
    fieldName: {},
    required: { type: Boolean },
    config: {},
    schema: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, r = G(() => {
      const n = {};
      if (!t.schema)
        return;
      const o = br(t.schema)?.shape;
      if (o)
        return Object.keys(o).forEach((i) => {
          const l = o[i], u = br(l);
          let c = u && "values" in u._def ? u._def.values : void 0;
          !Array.isArray(c) && typeof c == "object" && (c = Object.values(c)), n[i] = {
            type: As(l),
            default: Xa(l),
            options: c,
            required: !["ZodOptional", "ZodNullable"].includes(l._def.typeName),
            schema: l
          };
        }), n;
    }), a = Ts(t.fieldName);
    return sr(ca, a), (n, o) => (g(), R("section", null, [
      C(n.$slots, "default", zt(Ut(t)), () => [
        $(s(rh), {
          type: "single",
          "as-child": "",
          class: "w-full",
          collapsible: "",
          disabled: e.disabled
        }, {
          default: v(() => [
            $(s(Cn), null, {
              default: v(() => [
                $(s(oh), {
                  value: e.fieldName,
                  class: "border-none"
                }, {
                  default: v(() => [
                    $(s(ih), null, {
                      default: v(() => [
                        $(jn, {
                          class: "text-base",
                          required: e.required
                        }, {
                          default: v(() => [
                            he(ae(e.schema?.description || s(cn)(e.fieldName)), 1)
                          ]),
                          _: 1
                        }, 8, ["required"])
                      ]),
                      _: 1
                    }),
                    $(s(ah), { class: "p-1 space-y-5" }, {
                      default: v(() => [
                        (g(!0), R(De, null, Ze(r.value, (i, l) => (g(), A(Ds, {
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
}), xc = {
  date: XE,
  select: Sc,
  radio: Sc,
  checkbox: kc,
  switch: kc,
  textarea: Ic,
  number: az,
  string: Ic,
  file: nz,
  array: zE,
  object: oz
}, iz = {
  ZodString: "string",
  ZodBoolean: "checkbox",
  ZodDate: "date",
  ZodEnum: "select",
  ZodNativeEnum: "select",
  ZodNumber: "number",
  ZodArray: "array",
  ZodObject: "object"
};
var Ur = /* @__PURE__ */ ((e) => (e[e.DISABLES = 0] = "DISABLES", e[e.REQUIRES = 1] = "REQUIRES", e[e.HIDES = 2] = "HIDES", e[e.SETS_OPTIONS = 3] = "SETS_OPTIONS", e))(Ur || {});
const [lz, sz] = Oi("AutoFormDependencies");
function uz(e) {
  const t = vE(), r = e.replace(/\[\d+\]/g, ""), a = pE(e);
  if (!t)
    throw new Error("useDependencies should be used within <AutoForm>");
  const n = lz(), o = fe(!1), i = fe(!1), l = fe(!1), u = fe(), c = G(() => n.value?.filter(
    (p) => p.targetField === r
  ));
  function d(p) {
    const h = p.sourceField, _ = SE(e) ?? -1, [S, ...k] = h.split(".").toReversed(), [y, ...O] = p.targetField.split(".").toReversed();
    if (_ >= 0 && k.join(",") === O.join(",")) {
      const [I, ...x] = e.split(".").toReversed();
      return $c(t.value, x.join(".") + S);
    }
    return $c(t.value, h);
  }
  const f = G(() => c.value?.map((p) => d(p))), m = () => {
    o.value = !1, i.value = !1, l.value = !1, u.value = void 0;
  };
  return Le([f, n], () => {
    m(), c.value?.forEach((p) => {
      const h = d(p), _ = p.when(h, a.value);
      switch (p.type) {
        case Ur.DISABLES:
          _ && (o.value = !0);
          break;
        case Ur.REQUIRES:
          _ && (l.value = !0);
          break;
        case Ur.HIDES:
          _ && (i.value = !0);
          break;
        case Ur.SETS_OPTIONS:
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
const Ds = /* @__PURE__ */ D({
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
    const a = G(() => {
      if (["ZodObject", "ZodArray"].includes(t.shape?.type))
        return { schema: t.shape?.schema };
    }), { isDisabled: n, isHidden: o, isRequired: i, overrideOptions: l } = uz(t.fieldName);
    return (u, c) => s(o) ? me("", !0) : (g(), A(dt(r(e.config) ? typeof e.config.component == "string" ? s(xc)[e.config.component] : e.config.component : s(xc)[s(iz)[e.shape.type]]), J({
      key: 0,
      "field-name": e.fieldName,
      label: e.shape.schema?.description,
      required: s(i) || e.shape.required,
      options: s(l) || e.shape.options,
      disabled: s(n),
      config: e.config
    }, a.value), {
      default: v(() => [
        C(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["field-name", "label", "required", "options", "disabled", "config"]));
  }
}), cz = /* @__PURE__ */ D({
  __name: "AutoForm",
  props: {
    schema: {},
    form: {},
    fieldConfig: {},
    dependencies: {}
  },
  emits: ["submit"],
  setup(e, { emit: t }) {
    const r = e, a = t, { dependencies: n } = Aa(r);
    sz(n);
    const o = G(() => {
      const c = {}, f = lh(r.schema).shape;
      return Object.keys(f).forEach((m) => {
        const p = f[m], h = br(p);
        let _ = h && "values" in h._def ? h._def.values : void 0;
        !Array.isArray(_) && typeof _ == "object" && (_ = Object.values(_)), c[m] = {
          type: As(p),
          default: Xa(p),
          options: _,
          required: !["ZodOptional", "ZodNullable"].includes(p._def.typeName),
          schema: h
        };
      }), c;
    }), i = G(() => {
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
    }), l = G(() => r.form ? "form" : sE), u = G(() => r.form ? {
      onSubmit: r.form.handleSubmit((c) => a("submit", c))
    } : {
      keepValues: !0,
      validationSchema: Yg(r.schema),
      onSubmit: (d) => a("submit", d)
    });
    return (c, d) => (g(), A(dt(l.value), zt(Ut(u.value)), {
      default: v(() => [
        C(c.$slots, "customAutoForm", { fields: i.value }, () => [
          (g(!0), R(De, null, Ze(o.value, (f, m) => C(c.$slots, m.toString(), {
            key: m,
            shape: f,
            fieldName: m.toString(),
            config: e.fieldConfig?.[m]
          }, () => [
            $(Ds, {
              config: e.fieldConfig?.[m],
              "field-name": m.toString(),
              shape: f
            }, null, 8, ["config", "field-name", "shape"])
          ])), 128))
        ]),
        C(c.$slots, "default", { shapes: o.value })
      ]),
      _: 3
    }, 16));
  }
}), dz = /* @__PURE__ */ D({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = We(e, t);
    return (o, i) => (g(), A(s($i), J({ "data-slot": "dialog" }, s(n)), {
      default: v(() => [
        C(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fz = /* @__PURE__ */ D({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = pe(t, "class"), a = Ye(r);
    return (n, o) => (g(), A(s(Ii), J({ "data-slot": "dialog-description" }, s(a), {
      class: s(Z)("text-muted-foreground text-sm", t.class)
    }), {
      default: v(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), mz = /* @__PURE__ */ D({
  __name: "DialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), R("div", {
      "data-slot": "dialog-header",
      class: ge(s(Z)("flex flex-col gap-2 text-center sm:text-left", t.class))
    }, [
      C(r.$slots, "default")
    ], 2));
  }
}), pz = /* @__PURE__ */ D({
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
    const r = e, a = t, n = pe(r, "class"), o = We(n, a);
    return (i, l) => (g(), A(s(wi), null, {
      default: v(() => [
        $(s(ki), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: v(() => [
            $(s(Si), J({
              class: s(Z)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                r.class
              )
            }, s(o), {
              onPointerDownOutside: l[0] || (l[0] = (u) => {
                const c = u.detail.originalEvent, d = c.target;
                (c.offsetX > d.clientWidth || c.offsetY > d.clientHeight) && u.preventDefault();
              })
            }), {
              default: v(() => [
                C(i.$slots, "default"),
                $(s(jc), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                  default: v(() => [
                    $(s(Yr), { class: "w-4 h-4" }),
                    l[1] || (l[1] = oe("span", { class: "sr-only" }, "Close", -1))
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
}), vz = /* @__PURE__ */ D({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = pe(t, "class"), a = Ye(r);
    return (n, o) => (g(), A(s(xi), J({ "data-slot": "dialog-title" }, s(a), {
      class: s(Z)("text-lg leading-none font-semibold", t.class)
    }), {
      default: v(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), gz = ["innerHTML"], Cs = /* @__PURE__ */ D({
  __name: "DynamicDialog",
  props: /* @__PURE__ */ mt({
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
    const t = ct(e, "open");
    return (r, a) => (g(), A(s(dz), {
      open: t.value,
      "onUpdate:open": a[0] || (a[0] = (n) => t.value = n)
    }, {
      default: v(() => [
        $(s(pz), { class: "!max-w-max min-w-[435px]" }, {
          default: v(() => [
            $(s(mz), null, {
              default: v(() => [
                $(s(vz), null, {
                  default: v(() => [
                    oe("div", {
                      class: "[&>em]:font-normal [&>em]:!not-italic line-clamp-1",
                      innerHTML: e.title
                    }, null, 8, gz)
                  ]),
                  _: 1
                }),
                e.description ? (g(), A(s(fz), { key: 0 }, {
                  default: v(() => [
                    he(ae(e.description), 1)
                  ]),
                  _: 1
                })) : me("", !0)
              ]),
              _: 1
            }),
            C(r.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), hz = { class: "mt-1" }, bz = /* @__PURE__ */ D({
  __name: "DynamicAutoFormDialog",
  props: /* @__PURE__ */ mt({
    dialogConfig: {},
    formConfig: {}
  }, {
    open: { type: Boolean },
    openModifiers: {}
  }),
  emits: ["update:open"],
  setup(e) {
    const t = ct(e, "open"), r = fe(!1);
    async function a(o) {
      r.value = !0;
      try {
        await e.formConfig.onSubmit?.(o) && (t.value = !1);
      } catch {
      }
      r.value = !1;
    }
    const n = Hg({
      validationSchema: Yg(rc(e.formConfig.schema))
    });
    return e.formConfig.initialValues && n.setValues(kh(e.formConfig.initialValues)), (o, i) => (g(), A(Cs, J(e.dialogConfig, {
      open: t.value,
      "onUpdate:open": i[1] || (i[1] = (l) => t.value = l)
    }), {
      default: v(() => [
        $(cz, {
          schema: s(rc)(e.formConfig.schema),
          form: s(n),
          "field-config": e.formConfig.fieldConfig,
          class: "flex flex-col gap-3",
          onSubmit: i[0] || (i[0] = (l) => a(l))
        }, {
          default: v(() => [
            oe("div", hz, [
              $(ft, {
                type: "submit",
                disabled: r.value
              }, {
                default: v(() => [
                  he(ae(e.dialogConfig.okButtonText || "Submit"), 1)
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
const _z = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const yz = (e) => typeof e < "u";
function $z(e) {
  return JSON.parse(JSON.stringify(e));
}
function Oc(e, t, r, a = {}) {
  var n, o, i;
  const {
    clone: l = !1,
    passive: u = !1,
    eventName: c,
    deep: d = !1,
    defaultValue: f,
    shouldEmit: m
  } = a, p = Mt(), h = r || p?.emit || ((n = p?.$emit) == null ? void 0 : n.bind(p)) || ((i = (o = p?.proxy) == null ? void 0 : o.$emit) == null ? void 0 : i.bind(p?.proxy));
  let _ = c;
  t || (t = "modelValue"), _ = _ || `update:${t.toString()}`;
  const S = (O) => l ? typeof l == "function" ? l(O) : $z(O) : O, k = () => yz(e[t]) ? S(e[t]) : f, y = (O) => {
    m ? m(O) && h(_, O) : h(_, O);
  };
  if (u) {
    const O = k(), I = fe(O);
    let x = !1;
    return Le(
      () => e[t],
      (P) => {
        x || (x = !0, I.value = S(P), xt(() => x = !1));
      }
    ), Le(
      I,
      (P) => {
        !x && (P !== e[t] || d) && y(P);
      },
      { deep: d }
    ), I;
  } else
    return G({
      get() {
        return k();
      },
      set(O) {
        y(O);
      }
    });
}
const [js, kz] = Oi("DrawerRoot"), mh = /* @__PURE__ */ new WeakMap();
function vt(e, t, r = !1) {
  if (!e || !(e instanceof HTMLElement) || !t)
    return;
  const a = {};
  Object.entries(t).forEach(([n, o]) => {
    if (n.startsWith("--")) {
      e.style.setProperty(n, o);
      return;
    }
    a[n] = e.style[n], e.style[n] = o;
  }), !r && mh.set(e, a);
}
function wz(e, t) {
  if (!e || !(e instanceof HTMLElement))
    return;
  const r = mh.get(e);
  r && Object.entries(r).forEach(([a, n]) => {
    e.style[a] = n;
  });
}
function Na(e, t) {
  const r = window.getComputedStyle(e), a = r.transform || r.webkitTransform || r.mozTransform;
  let n = a.match(/^matrix3d\((.+)\)$/);
  return n ? Number.parseFloat(n[1].split(", ")[st(t) ? 13 : 12]) : (n = a.match(/^matrix\((.+)\)$/), n ? Number.parseFloat(n[1].split(", ")[st(t) ? 5 : 4]) : null);
}
function Sz(e) {
  return 8 * (Math.log(e + 1) - 2);
}
function st(e) {
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
function Ko(e, t) {
  if (!e)
    return () => {
    };
  const r = e.style.cssText;
  return Object.assign(e.style, t), () => {
    e.style.cssText = r;
  };
}
function Iz(...e) {
  return (...t) => {
    for (const r of e)
      typeof r == "function" && r(...t);
  };
}
const Qe = {
  DURATION: 0.5,
  EASE: [0.32, 0.72, 0, 1]
}, ph = 0.4, xz = 0.25, Oz = 100, vh = 8, Ea = 16, gh = 26, Nc = "vaul-dragging";
function Nz({
  activeSnapPoint: e,
  snapPoints: t,
  drawerRef: r,
  overlayRef: a,
  fadeFromIndex: n,
  onSnapPointChange: o,
  direction: i
}) {
  const l = fe(typeof window < "u" ? {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  } : void 0);
  function u() {
    l.value = {
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight
    };
  }
  er(() => {
    typeof window < "u" && window.addEventListener("resize", u);
  }), yi(() => {
    typeof window < "u" && window.removeEventListener("resize", u);
  });
  const c = G(
    () => (t.value && e.value === t.value[t.value.length - 1]) ?? null
  ), d = G(
    () => t.value && t.value.length > 0 && (n?.value || n?.value === 0) && !Number.isNaN(n?.value) && t.value[n?.value ?? -1] === e.value || !t.value
  ), f = G(
    () => {
      var y;
      return ((y = t.value) == null ? void 0 : y.findIndex((O) => O === e.value)) ?? null;
    }
  ), m = G(
    () => {
      var y;
      return ((y = t.value) == null ? void 0 : y.map((O) => {
        const I = typeof O == "string";
        let x = 0;
        if (I && (x = Number.parseInt(O, 10)), st(i.value)) {
          const N = I ? x : l.value ? O * l.value.innerHeight : 0;
          return l.value ? i.value === "bottom" ? l.value.innerHeight - N : -l.value.innerHeight + N : N;
        }
        const P = I ? x : l.value ? O * l.value.innerWidth : 0;
        return l.value ? i.value === "right" ? l.value.innerWidth - P : -l.value.innerWidth + P : P;
      })) ?? [];
    }
  ), p = G(
    () => {
      var y;
      return f.value !== null ? (y = m.value) == null ? void 0 : y[f.value] : null;
    }
  ), h = (y) => {
    var O, I, x, P;
    const N = ((O = m.value) == null ? void 0 : O.findIndex((j) => j === y)) ?? null;
    xt(() => {
      var j;
      o(N, m.value), vt((j = r.value) == null ? void 0 : j.$el, {
        transition: `transform ${Qe.DURATION}s cubic-bezier(${Qe.EASE.join(",")})`,
        transform: st(i.value) ? `translate3d(0, ${y}px, 0)` : `translate3d(${y}px, 0, 0)`
      });
    }), m.value && N !== m.value.length - 1 && N !== n?.value ? vt((I = a.value) == null ? void 0 : I.$el, {
      transition: `opacity ${Qe.DURATION}s cubic-bezier(${Qe.EASE.join(",")})`,
      opacity: "0"
    }) : vt((x = a.value) == null ? void 0 : x.$el, {
      transition: `opacity ${Qe.DURATION}s cubic-bezier(${Qe.EASE.join(",")})`,
      opacity: "1"
    }), e.value = N !== null ? ((P = t.value) == null ? void 0 : P[N]) ?? null : null;
  };
  Le(
    [e, m, t],
    () => {
      var y;
      if (e.value) {
        const O = ((y = t.value) == null ? void 0 : y.findIndex((I) => I === e.value)) ?? -1;
        m.value && O !== -1 && typeof m.value[O] == "number" && h(m.value[O]);
      }
    },
    {
      immediate: !0
      // if you want to run the effect immediately as well
    }
  );
  function _({
    draggedDistance: y,
    closeDrawer: O,
    velocity: I,
    dismissible: x
  }) {
    var P, N, j;
    if (n.value === void 0)
      return;
    const M = i.value === "bottom" || i.value === "right" ? (p.value ?? 0) - y : (p.value ?? 0) + y, te = f.value === n.value - 1, X = f.value === 0, Q = y > 0;
    if (te && vt((P = a.value) == null ? void 0 : P.$el, {
      transition: `opacity ${Qe.DURATION}s cubic-bezier(${Qe.EASE.join(",")})`
    }), I > 2 && !Q) {
      x ? O() : h(m.value[0]);
      return;
    }
    if (I > 2 && Q && m && t.value) {
      h(m.value[t.value.length - 1]);
      return;
    }
    const Ce = (N = m.value) == null ? void 0 : N.reduce((ne, K) => typeof ne != "number" || typeof K != "number" ? ne : Math.abs(K - M) < Math.abs(ne - M) ? K : ne), B = st(i.value) ? window.innerHeight : window.innerWidth;
    if (I > ph && Math.abs(y) < B * 0.4) {
      const ne = Q ? 1 : -1;
      if (ne > 0 && c) {
        h(m.value[(((j = t.value) == null ? void 0 : j.length) ?? 0) - 1]);
        return;
      }
      if (X && ne < 0 && x && O(), f.value === null)
        return;
      h(m.value[f.value + ne]);
      return;
    }
    h(Ce);
  }
  function S({ draggedDistance: y }) {
    var O;
    if (p.value === null)
      return;
    const I = i.value === "bottom" || i.value === "right" ? p.value - y : p.value + y;
    (i.value === "bottom" || i.value === "right") && I < m.value[m.value.length - 1] || (i.value === "top" || i.value === "left") && I > m.value[m.value.length - 1] || vt((O = r.value) == null ? void 0 : O.$el, {
      transform: st(i.value) ? `translate3d(0, ${I}px, 0)` : `translate3d(${I}px, 0, 0)`
    });
  }
  function k(y, O) {
    if (!t.value || typeof f.value != "number" || !m.value || n.value === void 0)
      return null;
    const I = f.value === n.value - 1;
    if (f.value >= n.value && O)
      return 0;
    if (I && !O)
      return 1;
    if (!d.value && !I)
      return null;
    const x = I ? f.value + 1 : f.value - 1, P = I ? m.value[x] - m.value[x - 1] : m.value[x + 1] - m.value[x], N = y / Math.abs(P);
    return I ? 1 - N : N;
  }
  return {
    isLastSnapPoint: c,
    shouldFade: d,
    getPercentageDragged: k,
    activeSnapPointIndex: f,
    onRelease: _,
    onDrag: S,
    snapPointsOffset: m
  };
}
function Ec() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
let Ar = null;
function Ez(e) {
  const { isOpen: t, modal: r, nested: a, hasBeenOpened: n, preventScrollRestoration: o, noBodyStyles: i } = e, l = fe(typeof window < "u" ? window.location.href : ""), u = fe(0);
  function c() {
    if (Ec() && Ar === null && t.value && !i.value) {
      Ar = {
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
    if (Ec() && Ar !== null && !i.value) {
      const f = -Number.parseInt(document.body.style.top, 10), m = -Number.parseInt(document.body.style.left, 10);
      Object.assign(document.body.style, Ar), window.requestAnimationFrame(() => {
        if (o.value && l.value !== window.location.href) {
          l.value = window.location.href;
          return;
        }
        window.scrollTo(m, f);
      }), Ar = null;
    }
  }
  return er(() => {
    function f() {
      u.value = window.scrollY;
    }
    f(), window.addEventListener("scroll", f), eo(() => {
      window.removeEventListener("scroll", f);
    });
  }), Le([t, n, l], () => {
    a.value || !n.value || (t.value ? (window.matchMedia("(display-mode: standalone)").matches || c(), r.value || setTimeout(() => {
      d();
    }, 500)) : d());
  }), { restorePositionSetting: d };
}
function zz(e, t) {
  return e && e.value ? e : t;
}
function Pz(e) {
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
    fadeFromIndex: h,
    direction: _,
    noBodyStyles: S,
    handleOnly: k,
    preventScrollRestoration: y
  } = e, O = fe(o.value ?? !1), I = fe(!1), x = fe(!1), P = fe(!1), N = fe(null), j = fe(null), M = fe(null), te = fe(null), X = fe(null), Q = fe(!1), Ce = fe(null), B = fe(0), ne = fe(!1);
  fe(0);
  const K = fe(null);
  fe(0);
  const ue = G(() => {
    var b;
    return ((b = K.value) == null ? void 0 : b.$el.getBoundingClientRect().height) || 0;
  }), re = zz(
    e.snapPoints,
    fe(void 0)
  ), pt = G(() => {
    var b;
    return re && (((b = re.value) == null ? void 0 : b.length) ?? 0) > 0;
  }), tt = fe(null), {
    activeSnapPointIndex: yt,
    onRelease: Tt,
    snapPointsOffset: Ge,
    onDrag: Pe,
    shouldFade: Nt,
    getPercentageDragged: le
  } = Nz({
    snapPoints: re,
    activeSnapPoint: p,
    drawerRef: K,
    fadeFromIndex: h,
    overlayRef: N,
    onSnapPointChange: se,
    direction: _
  });
  function se(b, w) {
    re.value && b === w.length - 1 && (j.value = /* @__PURE__ */ new Date());
  }
  Ez({
    isOpen: O,
    modal: u,
    nested: l,
    hasBeenOpened: I,
    noBodyStyles: S,
    preventScrollRestoration: y
  });
  function Oe() {
    return (window.innerWidth - gh) / window.innerWidth;
  }
  function Ne(b, w) {
    var L;
    if (!b)
      return !1;
    let q = b;
    const we = (L = window.getSelection()) == null ? void 0 : L.toString(), Ie = K.value ? Na(K.value.$el, _.value) : null, $e = /* @__PURE__ */ new Date();
    if (q.hasAttribute("data-vaul-no-drag") || q.closest("[data-vaul-no-drag]"))
      return !1;
    if (_.value === "right" || _.value === "left")
      return !0;
    if (j.value && $e.getTime() - j.value.getTime() < 500)
      return !1;
    if (Ie !== null && (_.value === "bottom" ? Ie > 0 : Ie < 0))
      return !0;
    if (we && we.length > 0)
      return !1;
    if (X.value && $e.getTime() - X.value.getTime() < f.value && Ie === 0 || w)
      return X.value = $e, !1;
    for (; q; ) {
      if (q.scrollHeight > q.clientHeight) {
        if (q.scrollTop !== 0)
          return X.value = /* @__PURE__ */ new Date(), !1;
        if (q.getAttribute("role") === "dialog")
          return !0;
      }
      q = q.parentNode;
    }
    return !0;
  }
  function nt(b) {
    !i.value && !re.value || K.value && !K.value.$el.contains(b.target) || (x.value = !0, M.value = /* @__PURE__ */ new Date(), b.target.setPointerCapture(b.pointerId), B.value = st(_.value) ? b.clientY : b.clientX);
  }
  function ot(b) {
    var w, L, q, we, Ie, $e;
    if (K.value && x.value) {
      const U = _.value === "bottom" || _.value === "right" ? 1 : -1, W = (B.value - (st(_.value) ? b.clientY : b.clientX)) * U, ze = W > 0, Fe = re.value && !i.value && !ze;
      if (Fe && yt.value === 0)
        return;
      const Rt = Math.abs(W), an = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      let E = Rt / ue.value;
      const z = le(Rt, ze);
      if (z !== null && (E = z), Fe && E >= 1 || !Q.value && !Ne(b.target, ze))
        return;
      if ((w = K?.value) == null || w.$el.classList.add(Nc), Q.value = !0, vt((L = K.value) == null ? void 0 : L.$el, {
        transition: "none"
      }), vt((q = N.value) == null ? void 0 : q.$el, {
        transition: "none"
      }), re.value && Pe({ draggedDistance: W }), ze && !re.value) {
        const ee = Sz(W), ve = Math.min(ee * -1, 0) * U;
        vt((we = K.value) == null ? void 0 : we.$el, {
          transform: st(_.value) ? `translate3d(0, ${ve}px, 0)` : `translate3d(${ve}px, 0, 0)`
        });
        return;
      }
      const F = 1 - E;
      if ((Nt.value || h.value && yt.value === h.value - 1) && (t(E), vt(
        (Ie = N.value) == null ? void 0 : Ie.$el,
        {
          opacity: `${F}`,
          transition: "none"
        },
        !0
      )), an && N.value && c.value) {
        const ee = Math.min(Oe() + E * (1 - Oe()), 1), ve = 8 - E * 8, ke = Math.max(0, 14 - E * 14);
        vt(
          an,
          {
            borderRadius: `${ve}px`,
            transform: st(_.value) ? `scale(${ee}) translate3d(0, ${ke}px, 0)` : `scale(${ee}) translate3d(${ke}px, 0, 0)`,
            transition: "none"
          },
          !0
        );
      }
      if (!re.value) {
        const ee = Rt * U;
        vt(($e = K.value) == null ? void 0 : $e.$el, {
          transform: st(_.value) ? `translate3d(0, ${ee}px, 0)` : `translate3d(${ee}px, 0, 0)`
        });
      }
    }
  }
  function Ke() {
    var b;
    if (!K.value)
      return;
    const w = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]"), L = Na(K.value.$el, _.value);
    vt(K.value.$el, {
      transform: "translate3d(0, 0, 0)",
      transition: `transform ${Qe.DURATION}s cubic-bezier(${Qe.EASE.join(",")})`
    }), vt((b = N.value) == null ? void 0 : b.$el, {
      transition: `opacity ${Qe.DURATION}s cubic-bezier(${Qe.EASE.join(",")})`,
      opacity: "1"
    }), c.value && L && L > 0 && O.value && vt(
      w,
      {
        borderRadius: `${vh}px`,
        overflow: "hidden",
        ...st(_.value) ? {
          transform: `scale(${Oe()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
          transformOrigin: "top"
        } : {
          transform: `scale(${Oe()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
          transformOrigin: "left"
        },
        transitionProperty: "transform, border-radius",
        transitionDuration: `${Qe.DURATION}s`,
        transitionTimingFunction: `cubic-bezier(${Qe.EASE.join(",")})`
      },
      !0
    );
  }
  function Lt(b) {
    K.value && (a(), b || (O.value = !1), window.setTimeout(() => {
      re.value && (p.value = re.value[0]);
    }, Qe.DURATION * 1e3));
  }
  _r(() => {
    if (!O.value && c.value && _z) {
      const b = setTimeout(() => {
        wz(document.body);
      }, 200);
      return () => clearTimeout(b);
    }
  }), Le(o, () => {
    O.value = o.value, o.value || Lt();
  });
  function pn(b) {
    if (!x.value || !K.value)
      return;
    K.value.$el.classList.remove(Nc), Q.value = !1, x.value = !1, te.value = /* @__PURE__ */ new Date();
    const w = Na(K.value.$el, _.value);
    if (!Ne(b.target, !1) || !w || Number.isNaN(w) || M.value === null)
      return;
    const L = te.value.getTime() - M.value.getTime(), q = B.value - (st(_.value) ? b.clientY : b.clientX), we = Math.abs(q) / L;
    if (we > 0.05 && (P.value = !0, window.setTimeout(() => {
      P.value = !1;
    }, 200)), re.value) {
      const $e = _.value === "bottom" || _.value === "right" ? 1 : -1;
      Tt({
        draggedDistance: q * $e,
        closeDrawer: Lt,
        velocity: we,
        dismissible: i.value
      }), r(!0);
      return;
    }
    if (_.value === "bottom" || _.value === "right" ? q > 0 : q < 0) {
      Ke(), r(!0);
      return;
    }
    if (we > ph) {
      Lt(), r(!1);
      return;
    }
    const Ie = Math.min(
      K.value.$el.getBoundingClientRect().height ?? 0,
      window.innerHeight
    );
    if (w >= Ie * m.value) {
      Lt(), r(!1);
      return;
    }
    r(!0), Ke();
  }
  Le(O, (b) => {
    b && (j.value = /* @__PURE__ */ new Date()), n(b);
  }, { immediate: !0 });
  function Ht(b) {
    var w, L;
    const q = b ? (window.innerWidth - Ea) / window.innerWidth : 1, we = b ? -16 : 0;
    Ce.value && window.clearTimeout(Ce.value), vt((w = K.value) == null ? void 0 : w.$el, {
      transition: `transform ${Qe.DURATION}s cubic-bezier(${Qe.EASE.join(",")})`,
      transform: `scale(${q}) translate3d(0, ${we}px, 0)`
    }), !b && (L = K.value) != null && L.$el && (Ce.value = window.setTimeout(() => {
      var Ie, $e;
      const U = Na((Ie = K.value) == null ? void 0 : Ie.$el, _.value);
      vt(($e = K.value) == null ? void 0 : $e.$el, {
        transition: "none",
        transform: st(_.value) ? `translate3d(0, ${U}px, 0)` : `translate3d(${U}px, 0, 0)`
      });
    }, 500));
  }
  function Jt(b) {
    var w;
    if (b < 0)
      return;
    const L = st(_.value) ? window.innerHeight : window.innerWidth, q = (L - Ea) / L, we = q + b * (1 - q), Ie = -16 + b * Ea;
    vt((w = K.value) == null ? void 0 : w.$el, {
      transform: st(_.value) ? `scale(${we}) translate3d(0, ${Ie}px, 0)` : `scale(${we}) translate3d(${Ie}px, 0, 0)`,
      transition: "none"
    });
  }
  function In(b) {
    var w;
    const L = st(_.value) ? window.innerHeight : window.innerWidth, q = b ? (L - Ea) / L : 1, we = b ? -16 : 0;
    b && vt((w = K.value) == null ? void 0 : w.$el, {
      transition: `transform ${Qe.DURATION}s cubic-bezier(${Qe.EASE.join(",")})`,
      transform: st(_.value) ? `scale(${q}) translate3d(0, ${we}px, 0)` : `scale(${q}) translate3d(${we}px, 0, 0)`
    });
  }
  return {
    open: o,
    isOpen: O,
    modal: u,
    keyboardIsOpen: ne,
    hasBeenOpened: I,
    drawerRef: K,
    drawerHeightRef: ue,
    overlayRef: N,
    handleRef: tt,
    isDragging: x,
    dragStartTime: M,
    isAllowedToDrag: Q,
    snapPoints: re,
    activeSnapPoint: p,
    hasSnapPoints: pt,
    pointerStart: B,
    dismissible: i,
    snapPointsOffset: Ge,
    direction: _,
    shouldFade: Nt,
    fadeFromIndex: h,
    shouldScaleBackground: c,
    setBackgroundColorOnScale: d,
    onPress: nt,
    onDrag: ot,
    onRelease: pn,
    closeDrawer: Lt,
    onNestedDrag: Jt,
    onNestedRelease: In,
    onNestedOpenChange: Ht,
    emitClose: a,
    emitDrag: t,
    emitRelease: r,
    emitOpenChange: n,
    nested: l,
    handleOnly: k,
    noBodyStyles: S
  };
}
const Tz = /* @__PURE__ */ D({
  __name: "DrawerRoot",
  props: {
    activeSnapPoint: { default: void 0 },
    closeThreshold: { default: xz },
    shouldScaleBackground: { type: Boolean, default: void 0 },
    setBackgroundColorOnScale: { type: Boolean, default: !0 },
    scrollLockTimeout: { default: Oz },
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
    wh();
    const o = G(() => a.fadeFromIndex ?? (a.snapPoints && a.snapPoints.length - 1)), i = Oc(a, "open", n, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), l = Oc(a, "activeSnapPoint", n, {
      passive: a.activeSnapPoint === void 0
    }), u = {
      emitDrag: (h) => n("drag", h),
      emitRelease: (h) => n("release", h),
      emitClose: () => n("close"),
      emitOpenChange: (h) => {
        n("update:open", h), setTimeout(() => {
          n("animationEnd", h);
        }, Qe.DURATION * 1e3);
      }
    }, { closeDrawer: c, hasBeenOpened: d, modal: f, isOpen: m } = kz(
      Pz({
        ...u,
        ...Aa(a),
        activeSnapPoint: l,
        fadeFromIndex: o,
        open: i
      })
    );
    function p(h) {
      if (i.value !== void 0) {
        u.emitOpenChange(h);
        return;
      }
      m.value = h, h ? d.value = !0 : c();
    }
    return t({
      open: m
    }), (h, _) => (g(), A(s($i), {
      open: s(m),
      modal: s(f),
      "onUpdate:open": p
    }, {
      default: v(() => [
        C(h.$slots, "default", { open: s(m) })
      ]),
      _: 3
    }, 8, ["open", "modal"]));
  }
}), Az = /* @__PURE__ */ D({
  __name: "DrawerOverlay",
  setup(e) {
    const { overlayRef: t, hasSnapPoints: r, isOpen: a, shouldFade: n } = js();
    return (o, i) => (g(), A(s(ki), {
      ref_key: "overlayRef",
      ref: t,
      "data-vaul-overlay": "",
      "data-vaul-snap-points": s(a) && s(r) ? "true" : "false",
      "data-vaul-snap-points-overlay": s(a) && s(n) ? "true" : "false"
    }, null, 8, ["data-vaul-snap-points", "data-vaul-snap-points-overlay"]));
  }
}), Dz = () => () => {
};
function Cz() {
  const { direction: e, isOpen: t, shouldScaleBackground: r, setBackgroundColorOnScale: a, noBodyStyles: n } = js(), o = fe(null), i = fe(document.body.style.backgroundColor);
  function l() {
    return (window.innerWidth - gh) / window.innerWidth;
  }
  _r((u) => {
    if (t.value && r.value) {
      o.value && clearTimeout(o.value);
      const c = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      if (!c)
        return;
      Iz(
        a.value && !n.value ? Ko(document.body, { background: "black" }) : Dz,
        Ko(c, {
          transformOrigin: st(e.value) ? "top" : "left",
          transitionProperty: "transform, border-radius",
          transitionDuration: `${Qe.DURATION}s`,
          transitionTimingFunction: `cubic-bezier(${Qe.EASE.join(",")})`
        })
      );
      const d = Ko(c, {
        borderRadius: `${vh}px`,
        overflow: "hidden",
        ...st(e.value) ? {
          transform: `scale(${l()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`
        } : {
          transform: `scale(${l()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`
        }
      });
      u(() => {
        d(), o.value = window.setTimeout(() => {
          i.value ? document.body.style.background = i.value : document.body.style.removeProperty("background");
        }, Qe.DURATION * 1e3);
      });
    }
  }, { flush: "pre" });
}
const jz = /* @__PURE__ */ D({
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
      direction: h,
      handleOnly: _
    } = js();
    Cz();
    const S = fe(!1), k = G(() => a.value && a.value.length > 0 ? `${a.value[0]}px` : "0");
    function y(x) {
      if (!c.value || x.defaultPrevented) {
        x.preventDefault();
        return;
      }
      m.value && (m.value = !1), f.value ? d(!1) : x.preventDefault();
    }
    function O(x) {
      _.value || i(x);
    }
    function I(x) {
      _.value || l(x);
    }
    return _r(() => {
      n.value && window.requestAnimationFrame(() => {
        S.value = !0;
      });
    }), (x, P) => (g(), A(s(Si), {
      ref_key: "drawerRef",
      ref: o,
      "data-vaul-drawer": "",
      "data-vaul-drawer-direction": s(h),
      "data-vaul-delayed-snap-points": S.value ? "true" : "false",
      "data-vaul-snap-points": s(r) && s(n) ? "true" : "false",
      style: Tc({ "--snap-point-height": k.value }),
      onPointerdown: O,
      onPointermove: I,
      onPointerup: s(u),
      onPointerDownOutside: y,
      onOpenAutoFocus: P[0] || (P[0] = Sh(() => {
      }, ["prevent"])),
      onEscapeKeyDown: P[1] || (P[1] = (N) => {
        s(f) || N.preventDefault();
      })
    }, {
      default: v(() => [
        C(x.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-vaul-drawer-direction", "data-vaul-delayed-snap-points", "data-vaul-snap-points", "style", "onPointerup"]));
  }
}), Uz = /* @__PURE__ */ D({
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
    const n = We(e, t);
    return (o, i) => (g(), A(s(Tz), J({ "data-slot": "drawer" }, s(n)), {
      default: v(() => [
        C(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Lz = /* @__PURE__ */ D({
  __name: "DrawerOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = pe(t, "class");
    return (a, n) => (g(), A(s(Az), J({ "data-slot": "drawer-overlay" }, s(r), {
      class: s(Z)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80", t.class)
    }), null, 16, ["class"]));
  }
}), Rz = /* @__PURE__ */ D({
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
    const r = e, n = We(r, t);
    return (o, i) => (g(), A(s(wi), null, {
      default: v(() => [
        $(Lz),
        $(s(jz), J({ "data-slot": "drawer-content" }, s(n), {
          class: s(Z)(
            "group/drawer-content bg-background fixed z-50 flex h-auto flex-col",
            "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg",
            "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg",
            "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:sm:max-w-sm",
            "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:sm:max-w-sm",
            r.class
          )
        }), {
          default: v(() => [
            i[0] || (i[0] = oe("div", { class: "bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }, null, -1)),
            C(o.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Vz = /* @__PURE__ */ D({
  __name: "DrawerDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = pe(t, "class");
    return (a, n) => (g(), A(s(Ii), J({ "data-slot": "drawer-description" }, s(r), {
      class: s(Z)("text-muted-foreground text-sm", t.class)
    }), {
      default: v(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Fz = /* @__PURE__ */ D({
  __name: "DrawerHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), R("div", {
      "data-slot": "drawer-header",
      class: ge(s(Z)("flex flex-col gap-1.5 p-4", t.class))
    }, [
      C(r.$slots, "default")
    ], 2));
  }
}), Mz = /* @__PURE__ */ D({
  __name: "DrawerTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, r = pe(t, "class");
    return (a, n) => (g(), A(s(xi), J({ "data-slot": "drawer-title" }, s(r), {
      class: s(Z)("text-foreground font-semibold", t.class)
    }), {
      default: v(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Bz = ["innerHTML"], Zz = { class: "px-4 flex-1 overflow-auto select-text" }, Wz = /* @__PURE__ */ D({
  __name: "DynamicDrawer",
  props: /* @__PURE__ */ mt({
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
    const t = ct(e, "open");
    return (r, a) => (g(), A(s(Uz), {
      open: t.value,
      "onUpdate:open": a[1] || (a[1] = (n) => t.value = n),
      "handle-only": "",
      direction: "right",
      dismissible: !0,
      "should-scale-background": ""
    }, {
      default: v(() => [
        $(s(Rz), { class: "!max-w-[800px]" }, {
          default: v(() => [
            $(s(Fz), { class: "!pb-0" }, {
              default: v(() => [
                $(s(Mz), { class: "flex items-center gap-2" }, {
                  default: v(() => [
                    oe("div", {
                      class: "[&>em]:font-normal [&>em]:!not-italic line-clamp-1 flex-1",
                      innerHTML: e.title
                    }, null, 8, Bz),
                    $(ft, {
                      variant: "ghost",
                      onClick: a[0] || (a[0] = (n) => t.value = !1)
                    }, {
                      default: v(() => [
                        $(s(Yr))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                e.description ? (g(), A(s(Vz), { key: 0 }, {
                  default: v(() => [
                    he(ae(e.description), 1)
                  ]),
                  _: 1
                })) : me("", !0)
              ]),
              _: 1
            }),
            oe("div", Zz, [
              C(r.$slots, "default")
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), Gz = /* @__PURE__ */ D({
  __name: "DynamicComponentDialog",
  props: /* @__PURE__ */ mt({
    dialogConfig: {},
    componentConfig: {},
    type: {}
  }, {
    open: { type: Boolean },
    openModifiers: {}
  }),
  emits: ["update:open"],
  setup(e) {
    const t = ct(e, "open"), r = fe(!1);
    async function a() {
      r.value = !0, (await e.dialogConfig.onOk?.() ?? !0) && (t.value = !1), r.value = !1;
    }
    return (n, o) => (g(), A(dt(e.type === "drawer" ? Wz : Cs), J(e.dialogConfig, {
      open: t.value,
      "onUpdate:open": o[0] || (o[0] = (i) => t.value = i)
    }), {
      default: v(() => [
        (g(), A(dt(e.componentConfig.component), J(e.componentConfig.componentProps, { onSubmitSuccess: a }), null, 16))
      ]),
      _: 1
    }, 16, ["open"]));
  }
}), Kz = { class: "mt-1" }, Us = /* @__PURE__ */ D({
  __name: "DynamicConfirmComponentDialog",
  props: /* @__PURE__ */ mt({
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
    const t = ct(e, "open"), r = fe(e.initialValue), { t: a } = Tn(), n = fe(!1);
    async function o() {
      n.value = !0, (await e.dialogConfig.onOk?.(r.value) ?? !0) && (t.value = !1), n.value = !1;
    }
    return (i, l) => (g(), A(Cs, J(e.dialogConfig, {
      open: t.value,
      "onUpdate:open": l[1] || (l[1] = (u) => t.value = u)
    }), {
      default: v(() => [
        (g(), A(dt(e.componentConfig.component), J(e.componentConfig.componentProps, {
          modelValue: r.value,
          "onUpdate:modelValue": l[0] || (l[0] = (u) => r.value = u)
        }), null, 16, ["modelValue"])),
        oe("div", Kz, [
          $(ft, {
            type: "Submit",
            disabled: n.value,
            size: "sm",
            onClick: o
          }, {
            default: v(() => [
              he(ae(e.dialogConfig.okButtonText || s(a)("common.save")), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      _: 1
    }, 16, ["open"]));
  }
}), Or = Dg();
function dP(e, t, r = "dialog") {
  return Or.open({
    component: Gz,
    componentProps: {
      componentConfig: t,
      dialogConfig: typeof e == "string" ? { title: e } : e,
      type: r
    }
  });
}
function fP(e, t) {
  return Or.open({
    component: bz,
    componentProps: {
      formConfig: t,
      dialogConfig: typeof e == "string" ? { title: e } : e
    }
  });
}
function mP(e, t = "Achtung", r = "Sind Sie sicher?") {
  return Or.open({
    component: uN,
    componentProps: {
      title: t,
      description: r,
      onOk: e
    }
  });
}
function pP({ dialogConfig: e, initialValue: t, onOk: r, component: a, componentProps: n }) {
  return Or.open({
    component: Us,
    componentProps: {
      componentConfig: { component: a, componentProps: n },
      initialValue: t,
      dialogConfig: { ...typeof e == "string" ? { title: e } : e, onOk: r }
    }
  });
}
function vP(e, t, r, a, n) {
  return Or.open({
    component: Us,
    componentProps: {
      componentConfig: { component: Fi, componentProps: { multiple: !0, options: t, ...n } },
      initialValue: r,
      dialogConfig: { ...typeof e == "string" ? { title: e } : e, onOk: a }
    }
  });
}
function gP(e, t, r, a, n) {
  return Or.open({
    component: Us,
    componentProps: {
      componentConfig: { component: eN, componentProps: { multiple: !0, options: t, ...n } },
      initialValue: r,
      dialogConfig: { ...typeof e == "string" ? { title: e } : e, onOk: a }
    }
  });
}
const hP = /* @__PURE__ */ D({
  inheritAttrs: !1,
  __name: "InputBoolean",
  props: /* @__PURE__ */ mt({
    class: {},
    readonly: { type: Boolean }
  }, {
    modelValue: { type: Boolean },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, r = ct(e, "modelValue");
    return (a, n) => (g(), A(Fi, {
      modelValue: r.value,
      "onUpdate:modelValue": n[0] || (n[0] = (o) => r.value = o),
      class: ge(t.class),
      options: [{ value: !0, label: "True" }, { value: !1, label: "False" }]
    }, null, 8, ["modelValue", "class"]));
  }
}), Hz = { key: 0 }, Jz = { class: "text-xs" }, qz = { class: "text-xs" }, Yz = { class: "flex gap-2" }, bP = /* @__PURE__ */ D({
  __name: "InputGraduated",
  props: /* @__PURE__ */ mt({
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
    const a = (u) => typeof u == "string", n = ct(e, "modelValue"), o = () => n.value?.push({ from: 0, value: 0 }), i = (u) => n.value.splice(u, 1), l = () => n.value = [];
    return (u, c) => (g(), A(s(uh), null, {
      default: v(() => [
        $(s(dh), { "as-child": "" }, {
          default: v(() => [
            $(id, {
              class: ge(t.class),
              variant: "outline"
            }, {
              default: v(() => [
                n.value.length ? (g(), A(oc, {
                  key: 0,
                  value: n.value
                }, null, 8, ["value"])) : e.placeholder ? (g(), R(De, { key: 1 }, [
                  a(e.placeholder) ? (g(), R("span", Hz)) : (g(), A(oc, {
                    key: 1,
                    value: e.placeholder,
                    class: "text-muted-foreground"
                  }, null, 8, ["value"]))
                ], 64)) : me("", !0)
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          _: 1
        }),
        $(s(ch), {
          class: "w-80 flex flex-col gap-2 min-w-[var(--reka-popper-anchor-width)]",
          align: "end"
        }, {
          default: v(() => [
            (g(!0), R(De, null, Ze(n.value, (d, f) => (g(), R("div", {
              key: f,
              class: "flex gap-2 items-center"
            }, [
              oe("label", Jz, ae(r("common.from")) + ":", 1),
              $(Nn, {
                modelValue: n.value[f].from,
                "onUpdate:modelValue": (m) => n.value[f].from = m,
                type: "number"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              oe("label", qz, ae(r("common.value")) + ":", 1),
              $(Nn, {
                modelValue: n.value[f].value,
                "onUpdate:modelValue": (m) => n.value[f].value = m,
                type: "number"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              $(ft, {
                variant: "ghost",
                size: "sm",
                class: "px-1",
                onClick: (m) => i(f)
              }, {
                default: v(() => [
                  $(s(Yr))
                ]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128)),
            oe("div", Yz, [
              $(ft, {
                size: "sm",
                variant: "ghost",
                class: "!justify-start -mx-2 flex-1",
                onClick: c[0] || (c[0] = (d) => o())
              }, {
                default: v(() => [
                  $(s(no)),
                  he(" " + ae(r("common.add")), 1)
                ]),
                _: 1
              }),
              n.value.length > 0 ? (g(), A(ft, {
                key: 0,
                size: "sm",
                variant: "ghost",
                class: "!justify-start -mx-2",
                onClick: c[1] || (c[1] = (d) => l())
              }, {
                default: v(() => [
                  $(s(m_)),
                  he(" " + ae(r("common.clear")), 1)
                ]),
                _: 1
              })) : me("", !0)
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), _P = /* @__PURE__ */ D({
  __name: "InputRange",
  props: /* @__PURE__ */ mt({
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
    const t = e, r = ct(e, "modelValue");
    function a(n, o) {
      r.value || (r.value = [void 0, void 0]), r.value[n] = o, Dc(r);
    }
    return (n, o) => (g(), R("div", {
      class: ge(s(Z)("flex items-center gap-0", t.class))
    }, [
      $(s(Nn), {
        "model-value": r.value?.[0],
        placeholder: e.placeholder?.[0] || "Min",
        disabled: e.disabled,
        type: "number",
        class: "flex-1 rounded-r-none pr-1",
        "onUpdate:modelValue": o[0] || (o[0] = (i) => a(0, i))
      }, null, 8, ["model-value", "placeholder", "disabled"]),
      $(s(Nn), {
        "model-value": r.value?.[1],
        placeholder: e.placeholder?.[1] || "Max",
        disabled: e.disabled,
        type: "number",
        class: "flex-1 rounded-l-none pr-1",
        "onUpdate:modelValue": o[1] || (o[1] = (i) => a(1, i))
      }, null, 8, ["model-value", "placeholder", "disabled"])
    ], 2));
  }
}), Xz = /* @__PURE__ */ D({
  __name: "InputGroup",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), R("div", {
      "data-slot": "input-group",
      role: "group",
      class: ge(s(Z)(
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
      C(r.$slots, "default")
    ], 2));
  }
}), Qz = ["data-align"], zc = /* @__PURE__ */ D({
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
    return (a, n) => (g(), R("div", {
      role: "group",
      "data-slot": "input-group-addon",
      "data-align": t.align,
      class: ge(s(Z)(s(nP)({ align: t.align }), t.class)),
      onClick: r
    }, [
      C(a.$slots, "default")
    ], 10, Qz));
  }
}), eP = /* @__PURE__ */ D({
  __name: "InputGroupButton",
  props: {
    variant: { default: "ghost" },
    size: { default: "xs" },
    class: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), A(s(ft), {
      "data-size": t.size,
      variant: t.variant,
      class: ge(s(Z)(s(rP)({ size: t.size }), t.class))
    }, {
      default: v(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-size", "variant", "class"]));
  }
}), tP = /* @__PURE__ */ D({
  __name: "InputGroupInput",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), A(s(Nn), {
      "data-slot": "input-group-control",
      class: ge(s(Z)(
        "flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent",
        t.class
      ))
    }, null, 8, ["class"]));
  }
}), nP = tr(
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
), rP = tr(
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
), yP = /* @__PURE__ */ D({
  inheritAttrs: !1,
  __name: "InputSearch",
  props: /* @__PURE__ */ mt({
    showClearButton: { type: Boolean, default: !0 },
    placeholder: { default: "Search..." }
  }, {
    modelValue: {},
    modelModifiers: {},
    modelSubmit: { default: "" },
    modelSubmitModifiers: {}
  }),
  emits: /* @__PURE__ */ mt(["onSubmit", "onClear"], ["update:modelValue", "update:modelSubmit"]),
  setup(e, { emit: t }) {
    const r = t, a = ct(e, "modelValue"), n = ct(e, "modelSubmit"), o = G(() => !!a.value && a.value.length > 0);
    function i() {
      n.value = a.value || "", r("onSubmit", a.value || "");
    }
    function l() {
      n.value = "", a.value = "", r("onClear", "");
    }
    return (u, c) => (g(), A(s(Xz), null, {
      default: v(() => [
        $(s(zc), { align: "inline-start" }, {
          default: v(() => [
            $(s(d_))
          ]),
          _: 1
        }),
        $(s(tP), J({
          modelValue: a.value,
          "onUpdate:modelValue": c[0] || (c[0] = (d) => a.value = d),
          type: "text",
          placeholder: e.placeholder
        }, u.$attrs, {
          onKeydown: Ih(i, ["enter"])
        }), null, 16, ["modelValue", "placeholder"]),
        o.value && e.showClearButton ? (g(), A(s(zc), {
          key: 0,
          align: "inline-end"
        }, {
          default: v(() => [
            $(s(eP), {
              variant: "ghost",
              size: "icon-xs",
              onClick: l
            }, {
              default: v(() => [
                $(s(Yr))
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : me("", !0)
      ]),
      _: 1
    }));
  }
}), $P = /* @__PURE__ */ D({
  __name: "Tag",
  props: {
    variant: {},
    class: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (r, a) => (g(), R("span", {
      class: ge(s(Z)(s(aP)({ variant: e.variant }), t.class))
    }, [
      C(r.$slots, "default")
    ], 2));
  }
}), aP = tr(
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
  lP as AppSidebar,
  ft as Button,
  id as ButtonSelect,
  sP as DataTable,
  Qx as DataTableColumnHeader,
  eO as DataTableViewOptions,
  uP as DateFormat,
  oc as DisplayGraduated,
  uN as DynamicAlertDialog,
  bz as DynamicAutoFormDialog,
  Gz as DynamicComponentDialog,
  cP as DynamicComponentProvider,
  Us as DynamicConfirmComponentDialog,
  Cs as DynamicDialog,
  Wz as DynamicDrawer,
  JO as EmptyMini,
  hP as InputBoolean,
  bP as InputGraduated,
  _P as InputRange,
  yP as InputSearch,
  eN as SelectListOptions,
  Fi as SelectOptions,
  $P as Tag,
  mP as alert,
  pP as confirmGeneric,
  vP as confirmSelect,
  gP as confirmSelectList,
  KO as dynamicComponent,
  fP as openAutoFormDialog,
  dP as openDynamicDialogComponent,
  Dg as useDynamicComponent,
  ac as useToggleState
};
