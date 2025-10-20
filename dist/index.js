import { h as un, defineComponent as $, reactive as cn, inject as dn, computed as U, unref as i, getCurrentInstance as Tt, watchEffect as na, createBlock as A, openBlock as p, mergeProps as G, withCtx as m, renderSlot as R, watch as Fe, getCurrentScope as dc, onScopeDispose as fc, hasInjectionContext as sl, toValue as F, isRef as sn, onMounted as Vn, nextTick as St, readonly as js, toRef as Tn, ref as pe, customRef as mc, toRefs as Or, shallowRef as Ut, createVNode as b, createElementVNode as oe, createElementBlock as j, normalizeClass as Ee, normalizeStyle as ol, createTextVNode as be, withDirectives as Us, vModelText as il, normalizeProps as It, guardReactiveProps as Mt, Fragment as Re, toDisplayString as se, resolveDynamicComponent as mt, createCommentVNode as ve, renderList as Ge, onUnmounted as Ur, Text as pc, mergeModels as vt, useModel as ft, useTemplateRef as vc, resolveComponent as hc, resolveDirective as gc, triggerRef as ll, provide as fa, warn as ul, onBeforeUnmount as zs, toRaw as yc, useSlots as bc, withModifiers as _c, withKeys as wc } from "vue";
import { useForwardPropsEmits as qe, CollapsibleRoot as kc, CollapsibleContent as xc, CollapsibleTrigger as Ec, DialogRoot as Ws, DialogOverlay as Hs, DialogPortal as Zs, DialogContent as Gs, DialogClose as cl, DialogDescription as qs, DialogTitle as Ys, createContext as Ks, Primitive as nr, TooltipRoot as Oc, TooltipPortal as Sc, TooltipContent as Cc, TooltipArrow as Tc, TooltipTrigger as Nc, TooltipProvider as Ac, Separator as Ic, PaginationRoot as Pc, PaginationList as $c, useForwardProps as et, PaginationFirst as Dc, PaginationLast as Lc, PaginationNext as Vc, PaginationPrev as Rc, SelectRoot as Mc, SelectPortal as Fc, SelectContent as Bc, SelectViewport as jc, SelectItem as Uc, SelectItemIndicator as zc, SelectItemText as Wc, SelectScrollDownButton as Hc, SelectScrollUpButton as Zc, SelectTrigger as dl, SelectIcon as Gc, SelectValue as qc, DropdownMenuSeparator as Yc, CheckboxRoot as Kc, CheckboxIndicator as Xc, DropdownMenuRoot as Jc, DropdownMenuCheckboxItem as Qc, DropdownMenuItemIndicator as ed, DropdownMenuPortal as td, DropdownMenuContent as nd, DropdownMenuItem as ad, DropdownMenuLabel as rd, DropdownMenuTrigger as sd, useFilter as od, ListboxRoot as id, ListboxFilter as ld, ListboxContent as ud, ListboxItem as cd, ListboxItemIndicator as dd, AlertDialogRoot as fd, AlertDialogAction as md, AlertDialogCancel as pd, AlertDialogPortal as vd, AlertDialogOverlay as hd, AlertDialogContent as gd, AlertDialogDescription as yd, AlertDialogTitle as bd, Slot as _d, useId as wd, Label as kd, AccordionRoot as xd, AccordionContent as Ed, AccordionItem as Od, AccordionHeader as Sd, AccordionTrigger as Cd, SwitchRoot as Td, SwitchThumb as Nd, CalendarRoot as Ad, CalendarCell as Id, CalendarCellTrigger as Pd, CalendarGrid as $d, CalendarGridBody as Dd, CalendarGridHead as Ld, CalendarGridRow as Vd, CalendarHeadCell as Rd, CalendarHeader as Md, CalendarHeading as Fd, CalendarNext as Bd, CalendarPrev as jd, PopoverRoot as Ud, PopoverPortal as zd, PopoverContent as Wd, PopoverTrigger as Hd, RadioGroupRoot as Zd, RadioGroupItem as Gd, RadioGroupIndicator as qd } from "reka-ui";
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const So = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Yd = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, a) => a ? a.toUpperCase() : n.toLowerCase()
), Kd = (e) => {
  const t = Yd(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Xd = (...e) => e.filter((t, n, a) => !!t && t.trim() !== "" && a.indexOf(t) === n).join(" ").trim(), Co = (e) => e === "";
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ia = {
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
const Jd = ({
  name: e,
  iconNode: t,
  absoluteStrokeWidth: n,
  "absolute-stroke-width": a,
  strokeWidth: r,
  "stroke-width": s,
  size: o = Ia.width,
  color: l = Ia.stroke,
  ...u
}, { slots: c }) => un(
  "svg",
  {
    ...Ia,
    ...u,
    width: o,
    height: o,
    stroke: l,
    "stroke-width": Co(n) || Co(a) || n === !0 || a === !0 ? Number(r || s || Ia["stroke-width"]) * 24 / Number(o) : r || s || Ia["stroke-width"],
    class: Xd(
      "lucide",
      u.class,
      ...e ? [`lucide-${So(Kd(e))}-icon`, `lucide-${So(e)}`] : ["lucide-icon"]
    )
  },
  [...t.map((d) => un(...d)), ...c.default ? [c.default()] : []]
);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nt = (e, t) => (n, { slots: a, attrs: r }) => un(
  Jd,
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
const To = nt("arrow-down", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qd = nt("arrow-up-down", [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
]);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const No = nt("arrow-up", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ef = nt("calendar", [
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
const zr = nt("check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hn = nt("chevron-down", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xs = nt("chevron-left", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zn = nt("chevron-right", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tf = nt("chevron-up", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fl = nt("chevrons-left", [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
]);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ml = nt("chevrons-right", [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
]);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nf = nt("chevrons-up-down", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const af = nt("circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rf = nt("eye-off", [
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
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sf = nt("frown", [
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
const of = nt("loader-circle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wr = nt("plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lf = nt("rotate-ccw", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
]);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uf = nt("search", [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
]);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cf = nt("settings-2", [
  ["path", { d: "M14 17H5", key: "gfn3mx" }],
  ["path", { d: "M19 7h-9", key: "6i9tg" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
]);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const df = nt("trash-2", [
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
const pl = nt("trash", [
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
const ar = nt("x", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
const ff = typeof document < "u", mf = () => {
}, Sr = Array.isArray;
function Ao(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
function Io(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function pf(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!vf(e[n], t[n])) return !1;
  return !0;
}
function vf(e, t) {
  return Sr(e) ? Po(e, t) : Sr(t) ? Po(t, e) : e === t;
}
function Po(e, t) {
  return Sr(t) ? e.length === t.length && e.every((n, a) => n === t[a]) : e.length === 1 && e[0] === t;
}
function $o(e) {
  return typeof e == "string" || e && typeof e == "object";
}
Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : "");
const vl = Symbol(process.env.NODE_ENV !== "production" ? "router" : ""), hf = Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
function Do(e) {
  const t = dn(vl), n = dn(hf);
  let a = !1, r = null;
  const s = U(() => {
    const d = i(e.to);
    return process.env.NODE_ENV !== "production" && (!a || d !== r) && ($o(d) || (a ? Ao(`Invalid value for prop "to" in useLink()
- to:`, d, `
- previous to:`, r, `
- props:`, e) : Ao(`Invalid value for prop "to" in useLink()
- to:`, d, `
- props:`, e)), r = d, a = !0), t.resolve(d);
  }), o = U(() => {
    const { matched: d } = s.value, { length: f } = d, v = d[f - 1], y = n.matched;
    if (!v || !y.length) return -1;
    const I = y.findIndex(Io.bind(null, v));
    if (I > -1) return I;
    const S = Lo(d[f - 2]);
    return f > 1 && Lo(v) === S && y[y.length - 1].path !== S ? y.findIndex(Io.bind(null, d[f - 2])) : I;
  }), l = U(() => o.value > -1 && _f(n.params, s.value.params)), u = U(() => o.value > -1 && o.value === n.matched.length - 1 && pf(n.params, s.value.params));
  function c(d = {}) {
    if (bf(d)) {
      const f = t[i(e.replace) ? "replace" : "push"](i(e.to)).catch(mf);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => f), f;
    }
    return Promise.resolve();
  }
  if (process.env.NODE_ENV !== "production" && ff) {
    const d = Tt();
    if (d) {
      const f = {
        route: s.value,
        isActive: l.value,
        isExactActive: u.value,
        error: null
      };
      d.__vrl_devtools = d.__vrl_devtools || [], d.__vrl_devtools.push(f), na(() => {
        f.route = s.value, f.isActive = l.value, f.isExactActive = u.value, f.error = $o(i(e.to)) ? null : 'Invalid "to" value';
      }, { flush: "post" });
    }
  }
  return {
    route: s,
    href: U(() => s.value.href),
    isActive: l,
    isExactActive: u,
    navigate: c
  };
}
function gf(e) {
  return e.length === 1 ? e[0] : e;
}
const yf = /* @__PURE__ */ $({
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
  useLink: Do,
  setup(e, { slots: t }) {
    const n = cn(Do(e)), { options: a } = dn(vl), r = U(() => ({
      [Vo(e.activeClass, a.linkActiveClass, "router-link-active")]: n.isActive,
      [Vo(e.exactActiveClass, a.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const s = t.default && gf(t.default(n));
      return e.custom ? s : un("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        onClick: n.navigate,
        class: r.value
      }, s);
    };
  }
}), as = yf;
function bf(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function _f(e, t) {
  for (const n in t) {
    const a = t[n], r = e[n];
    if (typeof a == "string") {
      if (a !== r) return !1;
    } else if (!Sr(r) || r.length !== a.length || a.some((s, o) => s !== r[o])) return !1;
  }
  return !0;
}
function Lo(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Vo = (e, t, n) => e ?? t ?? n, wf = /* @__PURE__ */ $({
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
    const r = qe(e, t);
    return (s, o) => (p(), A(i(kc), G({ "data-slot": "collapsible" }, i(r)), {
      default: m(({ open: l }) => [
        R(s.$slots, "default", { open: l })
      ]),
      _: 3
    }, 16));
  }
}), kf = /* @__PURE__ */ $({
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (p(), A(i(xc), G({ "data-slot": "collapsible-content" }, t), {
      default: m(() => [
        R(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xf = /* @__PURE__ */ $({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (p(), A(i(Ec), G({ "data-slot": "collapsible-trigger" }, t), {
      default: m(() => [
        R(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function hl(e) {
  var t, n, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var r = e.length;
    for (t = 0; t < r; t++) e[t] && (n = hl(e[t])) && (a && (a += " "), a += n);
  } else for (n in e) e[n] && (a && (a += " "), a += n);
  return a;
}
function gl() {
  for (var e, t, n = 0, a = "", r = arguments.length; n < r; n++) (e = arguments[n]) && (t = hl(e)) && (a && (a += " "), a += t);
  return a;
}
const Ro = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Mo = gl, ka = (e, t) => (n) => {
  var a;
  if (t?.variants == null) return Mo(e, n?.class, n?.className);
  const { variants: r, defaultVariants: s } = t, o = Object.keys(r).map((c) => {
    const d = n?.[c], f = s?.[c];
    if (d === null) return null;
    const v = Ro(d) || Ro(f);
    return r[c][v];
  }), l = n && Object.entries(n).reduce((c, d) => {
    let [f, v] = d;
    return v === void 0 || (c[f] = v), c;
  }, {}), u = t == null || (a = t.compoundVariants) === null || a === void 0 ? void 0 : a.reduce((c, d) => {
    let { class: f, className: v, ...y } = d;
    return Object.entries(y).every((I) => {
      let [S, P] = I;
      return Array.isArray(P) ? P.includes({
        ...s,
        ...l
      }[S]) : {
        ...s,
        ...l
      }[S] === P;
    }) ? [
      ...c,
      f,
      v
    ] : c;
  }, []);
  return Mo(e, o, u, n?.class, n?.className);
}, Js = "-", Ef = (e) => {
  const t = Sf(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: a
  } = e;
  return {
    getClassGroupId: (o) => {
      const l = o.split(Js);
      return l[0] === "" && l.length !== 1 && l.shift(), yl(l, t) || Of(o);
    },
    getConflictingClassGroupIds: (o, l) => {
      const u = n[o] || [];
      return l && a[o] ? [...u, ...a[o]] : u;
    }
  };
}, yl = (e, t) => {
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], a = t.nextPart.get(n), r = a ? yl(e.slice(1), a) : void 0;
  if (r)
    return r;
  if (t.validators.length === 0)
    return;
  const s = e.join(Js);
  return t.validators.find(({
    validator: o
  }) => o(s))?.classGroupId;
}, Fo = /^\[(.+)\]$/, Of = (e) => {
  if (Fo.test(e)) {
    const t = Fo.exec(e)[1], n = t?.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, Sf = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e, a = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const r in n)
    ys(n[r], a, r, t);
  return a;
}, ys = (e, t, n, a) => {
  e.forEach((r) => {
    if (typeof r == "string") {
      const s = r === "" ? t : Bo(t, r);
      s.classGroupId = n;
      return;
    }
    if (typeof r == "function") {
      if (Cf(r)) {
        ys(r(a), t, n, a);
        return;
      }
      t.validators.push({
        validator: r,
        classGroupId: n
      });
      return;
    }
    Object.entries(r).forEach(([s, o]) => {
      ys(o, Bo(t, s), n, a);
    });
  });
}, Bo = (e, t) => {
  let n = e;
  return t.split(Js).forEach((a) => {
    n.nextPart.has(a) || n.nextPart.set(a, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(a);
  }), n;
}, Cf = (e) => e.isThemeGetter, Tf = (e) => {
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
}, bs = "!", _s = ":", Nf = _s.length, Af = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let a = (r) => {
    const s = [];
    let o = 0, l = 0, u = 0, c;
    for (let I = 0; I < r.length; I++) {
      let S = r[I];
      if (o === 0 && l === 0) {
        if (S === _s) {
          s.push(r.slice(u, I)), u = I + Nf;
          continue;
        }
        if (S === "/") {
          c = I;
          continue;
        }
      }
      S === "[" ? o++ : S === "]" ? o-- : S === "(" ? l++ : S === ")" && l--;
    }
    const d = s.length === 0 ? r : r.substring(u), f = If(d), v = f !== d, y = c && c > u ? c - u : void 0;
    return {
      modifiers: s,
      hasImportantModifier: v,
      baseClassName: f,
      maybePostfixModifierPosition: y
    };
  };
  if (t) {
    const r = t + _s, s = a;
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
}, If = (e) => e.endsWith(bs) ? e.substring(0, e.length - 1) : e.startsWith(bs) ? e.substring(1) : e, Pf = (e) => {
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
}, $f = (e) => ({
  cache: Tf(e.cacheSize),
  parseClassName: Af(e),
  sortModifiers: Pf(e),
  ...Ef(e)
}), Df = /\s+/, Lf = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: a,
    getConflictingClassGroupIds: r,
    sortModifiers: s
  } = t, o = [], l = e.trim().split(Df);
  let u = "";
  for (let c = l.length - 1; c >= 0; c -= 1) {
    const d = l[c], {
      isExternal: f,
      modifiers: v,
      hasImportantModifier: y,
      baseClassName: I,
      maybePostfixModifierPosition: S
    } = n(d);
    if (f) {
      u = d + (u.length > 0 ? " " + u : u);
      continue;
    }
    let P = !!S, w = a(P ? I.substring(0, S) : I);
    if (!w) {
      if (!P) {
        u = d + (u.length > 0 ? " " + u : u);
        continue;
      }
      if (w = a(I), !w) {
        u = d + (u.length > 0 ? " " + u : u);
        continue;
      }
      P = !1;
    }
    const x = s(v).join(":"), O = y ? x + bs : x, E = O + w;
    if (o.includes(E))
      continue;
    o.push(E);
    const k = r(w, P);
    for (let C = 0; C < k.length; ++C) {
      const _ = k[C];
      o.push(O + _);
    }
    u = d + (u.length > 0 ? " " + u : u);
  }
  return u;
};
function Vf() {
  let e = 0, t, n, a = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = bl(t)) && (a && (a += " "), a += n);
  return a;
}
const bl = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let a = 0; a < e.length; a++)
    e[a] && (t = bl(e[a])) && (n && (n += " "), n += t);
  return n;
};
function Rf(e, ...t) {
  let n, a, r, s = o;
  function o(u) {
    const c = t.reduce((d, f) => f(d), e());
    return n = $f(c), a = n.cache.get, r = n.cache.set, s = l, l(u);
  }
  function l(u) {
    const c = a(u);
    if (c)
      return c;
    const d = Lf(u, n);
    return r(u, d), d;
  }
  return function() {
    return s(Vf.apply(null, arguments));
  };
}
const dt = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, _l = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, wl = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Mf = /^\d+\/\d+$/, Ff = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Bf = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, jf = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Uf = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, zf = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, oa = (e) => Mf.test(e), $e = (e) => !!e && !Number.isNaN(Number(e)), Cn = (e) => !!e && Number.isInteger(Number(e)), rs = (e) => e.endsWith("%") && $e(e.slice(0, -1)), hn = (e) => Ff.test(e), Wf = () => !0, Hf = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Bf.test(e) && !jf.test(e)
), kl = () => !1, Zf = (e) => Uf.test(e), Gf = (e) => zf.test(e), qf = (e) => !ce(e) && !de(e), Yf = (e) => xa(e, Ol, kl), ce = (e) => _l.test(e), jn = (e) => xa(e, Sl, Hf), ss = (e) => xa(e, em, $e), jo = (e) => xa(e, xl, kl), Kf = (e) => xa(e, El, Gf), ur = (e) => xa(e, Cl, Zf), de = (e) => wl.test(e), Pa = (e) => Ea(e, Sl), Xf = (e) => Ea(e, tm), Uo = (e) => Ea(e, xl), Jf = (e) => Ea(e, Ol), Qf = (e) => Ea(e, El), cr = (e) => Ea(e, Cl, !0), xa = (e, t, n) => {
  const a = _l.exec(e);
  return a ? a[1] ? t(a[1]) : n(a[2]) : !1;
}, Ea = (e, t, n = !1) => {
  const a = wl.exec(e);
  return a ? a[1] ? t(a[1]) : n : !1;
}, xl = (e) => e === "position" || e === "percentage", El = (e) => e === "image" || e === "url", Ol = (e) => e === "length" || e === "size" || e === "bg-size", Sl = (e) => e === "length", em = (e) => e === "number", tm = (e) => e === "family-name", Cl = (e) => e === "shadow", nm = () => {
  const e = dt("color"), t = dt("font"), n = dt("text"), a = dt("font-weight"), r = dt("tracking"), s = dt("leading"), o = dt("breakpoint"), l = dt("container"), u = dt("spacing"), c = dt("radius"), d = dt("shadow"), f = dt("inset-shadow"), v = dt("text-shadow"), y = dt("drop-shadow"), I = dt("blur"), S = dt("perspective"), P = dt("aspect"), w = dt("ease"), x = dt("animate"), O = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], E = () => [
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
  ], k = () => [...E(), de, ce], C = () => ["auto", "hidden", "clip", "visible", "scroll"], _ = () => ["auto", "contain", "none"], D = () => [de, ce, u], L = () => [oa, "full", "auto", ...D()], J = () => [Cn, "none", "subgrid", de, ce], te = () => ["auto", {
    span: ["full", Cn, de, ce]
  }, Cn, de, ce], ne = () => [Cn, "auto", de, ce], fe = () => ["auto", "min", "max", "fr", de, ce], X = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], ae = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], Y = () => ["auto", ...D()], W = () => [oa, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...D()], q = () => [e, de, ce], Ce = () => [...E(), Uo, jo, {
    position: [de, ce]
  }], Me = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], ot = () => ["auto", "cover", "contain", Jf, Yf, {
    size: [de, ce]
  }], $t = () => [rs, Pa, jn], Ye = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    c,
    de,
    ce
  ], Le = () => ["", $e, Pa, jn], At = () => ["solid", "dashed", "dotted", "double"], le = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ue = () => [$e, rs, Uo, jo], Ie = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    I,
    de,
    ce
  ], Pe = () => ["none", $e, de, ce], at = () => ["none", $e, de, ce], it = () => [$e, de, ce], Ke = () => [oa, "full", ...D()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [hn],
      breakpoint: [hn],
      color: [Wf],
      container: [hn],
      "drop-shadow": [hn],
      ease: ["in", "out", "in-out"],
      font: [qf],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [hn],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [hn],
      shadow: [hn],
      spacing: ["px", $e],
      text: [hn],
      "text-shadow": [hn],
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
        aspect: ["auto", "square", oa, ce, de, P]
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
        columns: [$e, ce, de, l]
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
        object: k()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: C()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": C()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": C()
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
        inset: L()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": L()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": L()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: L()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: L()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: L()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: L()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: L()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: L()
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
        z: [Cn, "auto", de, ce]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [oa, "full", "auto", l, ...D()]
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
        flex: [$e, oa, "auto", "initial", "none", ce]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", $e, de, ce]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", $e, de, ce]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Cn, "first", "last", "none", de, ce]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": J()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: te()
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
        "grid-rows": J()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: te()
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
        gap: D()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": D()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": D()
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
        p: D()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: D()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: D()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: D()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: D()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: D()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: D()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: D()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: D()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: Y()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: Y()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: Y()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: Y()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: Y()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: Y()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: Y()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: Y()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: Y()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": D()
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
        "space-y": D()
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
        size: W()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [l, "screen", ...W()]
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
          ...W()
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
            screen: [o]
          },
          ...W()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...W()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...W()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...W()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, Pa, jn]
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
        font: [a, de, ss]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", rs, ce]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Xf, ce, t]
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
        tracking: [r, de, ce]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [$e, "none", de, ss]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          s,
          ...D()
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
        placeholder: q()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: q()
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
        decoration: [...At(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [$e, "from-font", "auto", de, jn]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: q()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [$e, "auto", de, ce]
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
        indent: D()
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
        bg: Me()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ot()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Cn, de, ce],
          radial: ["", de, ce],
          conic: [Cn, de, ce]
        }, Qf, Kf]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: q()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: $t()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: $t()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: $t()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: q()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: q()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: q()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: Ye()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": Ye()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": Ye()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": Ye()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": Ye()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": Ye()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": Ye()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": Ye()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": Ye()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": Ye()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": Ye()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": Ye()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": Ye()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": Ye()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": Ye()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: Le()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": Le()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": Le()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": Le()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": Le()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": Le()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": Le()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": Le()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": Le()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": Le()
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
        "divide-y": Le()
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
        border: [...At(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...At(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: q()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": q()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": q()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": q()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": q()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": q()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": q()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": q()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": q()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: q()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...At(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [$e, de, ce]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", $e, Pa, jn]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: q()
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
          cr,
          ur
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: q()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", f, cr, ur]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": q()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: Le()
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
        ring: q()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [$e, jn]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": q()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": Le()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": q()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", v, cr, ur]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": q()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [$e, de, ce]
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
        "mask-linear": [$e]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": ue()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": ue()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": q()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": q()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": ue()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": ue()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": q()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": q()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": ue()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": ue()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": q()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": q()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": ue()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": ue()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": q()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": q()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": ue()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": ue()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": q()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": q()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": ue()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": ue()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": q()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": q()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": ue()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": ue()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": q()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": q()
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
        "mask-radial-from": q()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": q()
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
        "mask-radial-at": E()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [$e]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": ue()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": ue()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": q()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": q()
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
        mask: Me()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: ot()
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
        blur: Ie()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [$e, de, ce]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [$e, de, ce]
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
          y,
          cr,
          ur
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": q()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", $e, de, ce]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [$e, de, ce]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", $e, de, ce]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [$e, de, ce]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", $e, de, ce]
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
        "backdrop-blur": Ie()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [$e, de, ce]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [$e, de, ce]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", $e, de, ce]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [$e, de, ce]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", $e, de, ce]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [$e, de, ce]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [$e, de, ce]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", $e, de, ce]
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
        "border-spacing": D()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": D()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": D()
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
        duration: [$e, "initial", de, ce]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", w, de, ce]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [$e, de, ce]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", x, de, ce]
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
        perspective: [S, de, ce]
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
        rotate: Pe()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Pe()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Pe()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Pe()
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
        skew: it()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": it()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": it()
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
        accent: q()
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
        caret: q()
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
        "scroll-m": D()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": D()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": D()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": D()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": D()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": D()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": D()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": D()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": D()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": D()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": D()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": D()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": D()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": D()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": D()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": D()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": D()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": D()
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
        fill: ["none", ...q()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [$e, Pa, jn, ss]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...q()]
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
}, am = /* @__PURE__ */ Rf(nm);
function H(...e) {
  return am(gl(e));
}
const rm = /* @__PURE__ */ $({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = qe(e, t);
    return (s, o) => (p(), A(i(Ws), G({ "data-slot": "sheet" }, i(r)), {
      default: m(() => [
        R(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function Qs(e) {
  return dc() ? (fc(e), !0) : !1;
}
const os = /* @__PURE__ */ new WeakMap(), sm = /* @__NO_SIDE_EFFECTS__ */ (...e) => {
  var t;
  const n = e[0], a = (t = Tt()) == null ? void 0 : t.proxy;
  if (a == null && !sl())
    throw new Error("injectLocal must be called in setup");
  return a && os.has(a) && n in os.get(a) ? os.get(a)[n] : dn(...e);
};
function om(e) {
  if (!sn(e))
    return cn(e);
  const t = new Proxy({}, {
    get(n, a, r) {
      return i(Reflect.get(e.value, a, r));
    },
    set(n, a, r) {
      return sn(e.value[a]) && !sn(r) ? e.value[a].value = r : e.value[a] = r, !0;
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
  return cn(t);
}
function im(e) {
  return om(U(e));
}
function he(e, ...t) {
  const n = t.flat(), a = n[0];
  return im(() => Object.fromEntries(typeof a == "function" ? Object.entries(Or(e)).filter(([r, s]) => !a(F(s), r)) : Object.entries(Or(e)).filter((r) => !n.includes(r[0]))));
}
const Tl = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const lm = (e) => typeof e < "u", um = (e) => e != null, cm = Object.prototype.toString, dm = (e) => cm.call(e) === "[object Object]", Yn = () => {
};
function fm(...e) {
  if (e.length !== 1)
    return Tn(...e);
  const t = e[0];
  return typeof t == "function" ? js(mc(() => ({ get: t, set: Yn }))) : pe(t);
}
function eo(e, t) {
  function n(...a) {
    return new Promise((r, s) => {
      Promise.resolve(e(() => t.apply(this, a), { fn: t, thisArg: this, args: a })).then(r).catch(s);
    });
  }
  return n;
}
const Nl = (e) => e();
function mm(e, t = {}) {
  let n, a, r = Yn;
  const s = (u) => {
    clearTimeout(u), r(), r = Yn;
  };
  let o;
  return (u) => {
    const c = F(e), d = F(t.maxWait);
    return n && s(n), c <= 0 || d !== void 0 && d <= 0 ? (a && (s(a), a = void 0), Promise.resolve(u())) : new Promise((f, v) => {
      r = t.rejectOnCancel ? v : f, o = u, d && !a && (a = setTimeout(() => {
        n && s(n), a = void 0, f(o());
      }, d)), n = setTimeout(() => {
        a && s(a), a = void 0, f(u());
      }, c);
    });
  };
}
function pm(...e) {
  let t = 0, n, a = !0, r = Yn, s, o, l, u, c;
  !sn(e[0]) && typeof e[0] == "object" ? { delay: o, trailing: l = !0, leading: u = !0, rejectOnCancel: c = !1 } = e[0] : [o, l = !0, u = !0, c = !1] = e;
  const d = () => {
    n && (clearTimeout(n), n = void 0, r(), r = Yn);
  };
  return (v) => {
    const y = F(o), I = Date.now() - t, S = () => s = v();
    return d(), y <= 0 ? (t = Date.now(), S()) : (I > y && (u || !a) ? (t = Date.now(), S()) : l && (s = new Promise((P, w) => {
      r = c ? w : P, n = setTimeout(() => {
        t = Date.now(), a = !0, P(S()), d();
      }, Math.max(0, y - I));
    })), !u && !n && (n = setTimeout(() => a = !0, y)), a = !1, s);
  };
}
function vm(e = Nl, t = {}) {
  const {
    initialState: n = "active"
  } = t, a = fm(n === "active");
  function r() {
    a.value = !1;
  }
  function s() {
    a.value = !0;
  }
  const o = (...l) => {
    a.value && e(...l);
  };
  return { isActive: js(a), pause: r, resume: s, eventFilter: o };
}
function zo(e) {
  return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function wr(e) {
  return Array.isArray(e) ? e : [e];
}
function hm(e) {
  return Tt();
}
// @__NO_SIDE_EFFECTS__
function gm(e, t = 200, n = {}) {
  return eo(
    mm(t, n),
    e
  );
}
// @__NO_SIDE_EFFECTS__
function ym(e, t = 200, n = !1, a = !0, r = !1) {
  return eo(
    pm(t, n, a, r),
    e
  );
}
function bm(e, t, n = {}) {
  const {
    eventFilter: a = Nl,
    ...r
  } = n;
  return Fe(
    e,
    eo(
      a,
      t
    ),
    r
  );
}
function _m(e, t, n = {}) {
  const {
    eventFilter: a,
    initialState: r = "active",
    ...s
  } = n, { eventFilter: o, pause: l, resume: u, isActive: c } = vm(a, { initialState: r });
  return { stop: bm(
    e,
    t,
    {
      ...s,
      eventFilter: o
    }
  ), pause: l, resume: u, isActive: c };
}
function Al(e, t = !0, n) {
  hm() ? Vn(e, n) : t ? e() : St(e);
}
const wm = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[T\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/i, km = /[YMDHhms]o|\[([^\]]+)\]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|z{1,4}|SSS/g;
function xm(e, t, n, a) {
  let r = e < 12 ? "AM" : "PM";
  return a && (r = r.split("").reduce((s, o) => s += `${o}.`, "")), n ? r.toLowerCase() : r;
}
function Un(e) {
  const t = ["th", "st", "nd", "rd"], n = e % 100;
  return e + (t[(n - 20) % 10] || t[n] || t[0]);
}
function Em(e, t, n = {}) {
  var a;
  const r = e.getFullYear(), s = e.getMonth(), o = e.getDate(), l = e.getHours(), u = e.getMinutes(), c = e.getSeconds(), d = e.getMilliseconds(), f = e.getDay(), v = (a = n.customMeridiem) != null ? a : xm, y = (S) => {
    var P;
    return (P = S.split(" ")[1]) != null ? P : "";
  }, I = {
    Yo: () => Un(r),
    YY: () => String(r).slice(-2),
    YYYY: () => r,
    M: () => s + 1,
    Mo: () => Un(s + 1),
    MM: () => `${s + 1}`.padStart(2, "0"),
    MMM: () => e.toLocaleDateString(F(n.locales), { month: "short" }),
    MMMM: () => e.toLocaleDateString(F(n.locales), { month: "long" }),
    D: () => String(o),
    Do: () => Un(o),
    DD: () => `${o}`.padStart(2, "0"),
    H: () => String(l),
    Ho: () => Un(l),
    HH: () => `${l}`.padStart(2, "0"),
    h: () => `${l % 12 || 12}`.padStart(1, "0"),
    ho: () => Un(l % 12 || 12),
    hh: () => `${l % 12 || 12}`.padStart(2, "0"),
    m: () => String(u),
    mo: () => Un(u),
    mm: () => `${u}`.padStart(2, "0"),
    s: () => String(c),
    so: () => Un(c),
    ss: () => `${c}`.padStart(2, "0"),
    SSS: () => `${d}`.padStart(3, "0"),
    d: () => f,
    dd: () => e.toLocaleDateString(F(n.locales), { weekday: "narrow" }),
    ddd: () => e.toLocaleDateString(F(n.locales), { weekday: "short" }),
    dddd: () => e.toLocaleDateString(F(n.locales), { weekday: "long" }),
    A: () => v(l, u),
    AA: () => v(l, u, !1, !0),
    a: () => v(l, u, !0),
    aa: () => v(l, u, !0, !0),
    z: () => y(e.toLocaleDateString(F(n.locales), { timeZoneName: "shortOffset" })),
    zz: () => y(e.toLocaleDateString(F(n.locales), { timeZoneName: "shortOffset" })),
    zzz: () => y(e.toLocaleDateString(F(n.locales), { timeZoneName: "shortOffset" })),
    zzzz: () => y(e.toLocaleDateString(F(n.locales), { timeZoneName: "longOffset" }))
  };
  return t.replace(km, (S, P) => {
    var w, x;
    return (x = P ?? ((w = I[S]) == null ? void 0 : w.call(I))) != null ? x : S;
  });
}
function Om(e) {
  if (e === null)
    return new Date(Number.NaN);
  if (e === void 0)
    return /* @__PURE__ */ new Date();
  if (e instanceof Date)
    return new Date(e);
  if (typeof e == "string" && !/Z$/i.test(e)) {
    const t = e.match(wm);
    if (t) {
      const n = t[2] - 1 || 0, a = (t[7] || "0").substring(0, 3);
      return new Date(t[1], n, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, a);
    }
  }
  return new Date(e);
}
// @__NO_SIDE_EFFECTS__
function Sm(e, t = "HH:mm:ss", n = {}) {
  return U(() => Em(Om(F(e)), F(t), n));
}
function Cm(e, t, n) {
  return Fe(
    e,
    t,
    {
      ...n,
      immediate: !0
    }
  );
}
const Nn = Tl ? window : void 0, Il = Tl ? window.document : void 0;
function Ba(e) {
  var t;
  const n = F(e);
  return (t = n?.$el) != null ? t : n;
}
function kn(...e) {
  const t = [], n = () => {
    t.forEach((l) => l()), t.length = 0;
  }, a = (l, u, c, d) => (l.addEventListener(u, c, d), () => l.removeEventListener(u, c, d)), r = U(() => {
    const l = wr(F(e[0])).filter((u) => u != null);
    return l.every((u) => typeof u != "string") ? l : void 0;
  }), s = Cm(
    () => {
      var l, u;
      return [
        (u = (l = r.value) == null ? void 0 : l.map((c) => Ba(c))) != null ? u : [Nn].filter((c) => c != null),
        wr(F(r.value ? e[1] : e[0])),
        wr(i(r.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        F(r.value ? e[3] : e[2])
      ];
    },
    ([l, u, c, d]) => {
      if (n(), !l?.length || !u?.length || !c?.length)
        return;
      const f = dm(d) ? { ...d } : d;
      t.push(
        ...l.flatMap(
          (v) => u.flatMap(
            (y) => c.map((I) => a(v, y, I, f))
          )
        )
      );
    },
    { flush: "post" }
  ), o = () => {
    s(), n();
  };
  return Qs(n), o;
}
// @__NO_SIDE_EFFECTS__
function Tm() {
  const e = Ut(!1), t = Tt();
  return t && Vn(() => {
    e.value = !0;
  }, t), e;
}
// @__NO_SIDE_EFFECTS__
function to(e) {
  const t = /* @__PURE__ */ Tm();
  return U(() => (t.value, !!e()));
}
function Nm(e, t, n = {}) {
  const { window: a = Nn, ...r } = n;
  let s;
  const o = /* @__PURE__ */ to(() => a && "MutationObserver" in a), l = () => {
    s && (s.disconnect(), s = void 0);
  }, u = U(() => {
    const v = F(e), y = wr(v).map(Ba).filter(um);
    return new Set(y);
  }), c = Fe(
    u,
    (v) => {
      l(), o.value && v.size && (s = new MutationObserver(t), v.forEach((y) => s.observe(y, r)));
    },
    { immediate: !0, flush: "post" }
  ), d = () => s?.takeRecords(), f = () => {
    c(), l();
  };
  return Qs(f), {
    isSupported: o,
    stop: f,
    takeRecords: d
  };
}
const Am = Symbol("vueuse-ssr-width");
// @__NO_SIDE_EFFECTS__
function Im() {
  const e = sl() ? /* @__PURE__ */ sm(Am, null) : null;
  return typeof e == "number" ? e : void 0;
}
function Pm(e, t = {}) {
  const { window: n = Nn, ssrWidth: a = /* @__PURE__ */ Im() } = t, r = /* @__PURE__ */ to(() => n && "matchMedia" in n && typeof n.matchMedia == "function"), s = Ut(typeof a == "number"), o = Ut(), l = Ut(!1), u = (c) => {
    l.value = c.matches;
  };
  return na(() => {
    if (s.value) {
      s.value = !r.value;
      const c = F(e).split(",");
      l.value = c.some((d) => {
        const f = d.includes("not all"), v = d.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), y = d.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
        let I = !!(v || y);
        return v && I && (I = a >= zo(v[1])), y && I && (I = a <= zo(y[1])), f ? !I : I;
      });
      return;
    }
    r.value && (o.value = n.matchMedia(F(e)), l.value = o.value.matches);
  }), kn(o, "change", u, { passive: !0 }), U(() => l.value);
}
function $m(e) {
  return JSON.parse(JSON.stringify(e));
}
const dr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, fr = "__vueuse_ssr_handlers__", Dm = /* @__PURE__ */ Lm();
function Lm() {
  return fr in dr || (dr[fr] = dr[fr] || {}), dr[fr];
}
function Vm(e, t) {
  return Dm[e] || t;
}
function Rm(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const Mm = {
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
}, Wo = "vueuse-storage";
function Fm(e, t, n, a = {}) {
  var r;
  const {
    flush: s = "pre",
    deep: o = !0,
    listenToStorageChanges: l = !0,
    writeDefaults: u = !0,
    mergeDefaults: c = !1,
    shallow: d,
    window: f = Nn,
    eventFilter: v,
    onError: y = (X) => {
      console.error(X);
    },
    initOnMounted: I
  } = a, S = (d ? Ut : pe)(typeof t == "function" ? t() : t), P = U(() => F(e));
  if (!n)
    try {
      n = Vm("getDefaultStorage", () => {
        var X;
        return (X = Nn) == null ? void 0 : X.localStorage;
      })();
    } catch (X) {
      y(X);
    }
  if (!n)
    return S;
  const w = F(t), x = Rm(w), O = (r = a.serializer) != null ? r : Mm[x], { pause: E, resume: k } = _m(
    S,
    (X) => J(X),
    { flush: s, deep: o, eventFilter: v }
  );
  Fe(P, () => ne(), { flush: s });
  let C = !1;
  const _ = (X) => {
    I && !C || ne(X);
  }, D = (X) => {
    I && !C || fe(X);
  };
  f && l && (n instanceof Storage ? kn(f, "storage", _, { passive: !0 }) : kn(f, Wo, D)), I ? Al(() => {
    C = !0, ne();
  }) : ne();
  function L(X, ae) {
    if (f) {
      const Y = {
        key: P.value,
        oldValue: X,
        newValue: ae,
        storageArea: n
      };
      f.dispatchEvent(n instanceof Storage ? new StorageEvent("storage", Y) : new CustomEvent(Wo, {
        detail: Y
      }));
    }
  }
  function J(X) {
    try {
      const ae = n.getItem(P.value);
      if (X == null)
        L(ae, null), n.removeItem(P.value);
      else {
        const Y = O.write(X);
        ae !== Y && (n.setItem(P.value, Y), L(ae, Y));
      }
    } catch (ae) {
      y(ae);
    }
  }
  function te(X) {
    const ae = X ? X.newValue : n.getItem(P.value);
    if (ae == null)
      return u && w != null && n.setItem(P.value, O.write(w)), w;
    if (!X && c) {
      const Y = O.read(ae);
      return typeof c == "function" ? c(Y, w) : x === "object" && !Array.isArray(Y) ? { ...w, ...Y } : Y;
    } else return typeof ae != "string" ? ae : O.read(ae);
  }
  function ne(X) {
    if (!(X && X.storageArea !== n)) {
      if (X && X.key == null) {
        S.value = w;
        return;
      }
      if (!(X && X.key !== P.value)) {
        E();
        try {
          const ae = O.write(S.value);
          (X === void 0 || X?.newValue !== ae) && (S.value = te(X));
        } catch (ae) {
          y(ae);
        } finally {
          X ? St(k) : k();
        }
      }
    }
  }
  function fe(X) {
    ne(X.detail);
  }
  return S;
}
function Bm(e, t, n = {}) {
  const { window: a = Nn, ...r } = n;
  let s;
  const o = /* @__PURE__ */ to(() => a && "ResizeObserver" in a), l = () => {
    s && (s.disconnect(), s = void 0);
  }, u = U(() => {
    const f = F(e);
    return Array.isArray(f) ? f.map((v) => Ba(v)) : [Ba(f)];
  }), c = Fe(
    u,
    (f) => {
      if (l(), o.value && a) {
        s = new ResizeObserver(t);
        for (const v of f)
          v && s.observe(v, r);
      }
    },
    { immediate: !0, flush: "post" }
  ), d = () => {
    l(), c();
  };
  return Qs(d), {
    isSupported: o,
    stop: d
  };
}
const Ho = 1;
function jm(e, t = {}) {
  const {
    throttle: n = 0,
    idle: a = 200,
    onStop: r = Yn,
    onScroll: s = Yn,
    offset: o = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    observe: l = {
      mutation: !1
    },
    eventListenerOptions: u = {
      capture: !1,
      passive: !0
    },
    behavior: c = "auto",
    window: d = Nn,
    onError: f = (L) => {
      console.error(L);
    }
  } = t, v = typeof l == "boolean" ? {
    mutation: l
  } : l, y = Ut(0), I = Ut(0), S = U({
    get() {
      return y.value;
    },
    set(L) {
      w(L, void 0);
    }
  }), P = U({
    get() {
      return I.value;
    },
    set(L) {
      w(void 0, L);
    }
  });
  function w(L, J) {
    var te, ne, fe, X;
    if (!d)
      return;
    const ae = F(e);
    if (!ae)
      return;
    (fe = ae instanceof Document ? d.document.body : ae) == null || fe.scrollTo({
      top: (te = F(J)) != null ? te : P.value,
      left: (ne = F(L)) != null ? ne : S.value,
      behavior: F(c)
    });
    const Y = ((X = ae?.document) == null ? void 0 : X.documentElement) || ae?.documentElement || ae;
    S != null && (y.value = Y.scrollLeft), P != null && (I.value = Y.scrollTop);
  }
  const x = Ut(!1), O = cn({
    left: !0,
    right: !1,
    top: !0,
    bottom: !1
  }), E = cn({
    left: !1,
    right: !1,
    top: !1,
    bottom: !1
  }), k = (L) => {
    x.value && (x.value = !1, E.left = !1, E.right = !1, E.top = !1, E.bottom = !1, r(L));
  }, C = /* @__PURE__ */ gm(k, n + a), _ = (L) => {
    var J;
    if (!d)
      return;
    const te = ((J = L?.document) == null ? void 0 : J.documentElement) || L?.documentElement || Ba(L), { display: ne, flexDirection: fe, direction: X } = getComputedStyle(te), ae = X === "rtl" ? -1 : 1, Y = te.scrollLeft;
    E.left = Y < y.value, E.right = Y > y.value;
    const W = Math.abs(Y * ae) <= (o.left || 0), q = Math.abs(Y * ae) + te.clientWidth >= te.scrollWidth - (o.right || 0) - Ho;
    ne === "flex" && fe === "row-reverse" ? (O.left = q, O.right = W) : (O.left = W, O.right = q), y.value = Y;
    let Ce = te.scrollTop;
    L === d.document && !Ce && (Ce = d.document.body.scrollTop), E.top = Ce < I.value, E.bottom = Ce > I.value;
    const Me = Math.abs(Ce) <= (o.top || 0), ot = Math.abs(Ce) + te.clientHeight >= te.scrollHeight - (o.bottom || 0) - Ho;
    ne === "flex" && fe === "column-reverse" ? (O.top = ot, O.bottom = Me) : (O.top = Me, O.bottom = ot), I.value = Ce;
  }, D = (L) => {
    var J;
    if (!d)
      return;
    const te = (J = L.target.documentElement) != null ? J : L.target;
    _(te), x.value = !0, C(L), s(L);
  };
  return kn(
    e,
    "scroll",
    n ? /* @__PURE__ */ ym(D, n, !0, !1) : D,
    u
  ), Al(() => {
    try {
      const L = F(e);
      if (!L)
        return;
      _(L);
    } catch (L) {
      f(L);
    }
  }), v?.mutation && e != null && e !== d && e !== document && Nm(
    e,
    () => {
      const L = F(e);
      L && _(L);
    },
    {
      attributes: !0,
      childList: !0,
      subtree: !0
    }
  ), kn(
    e,
    "scrollend",
    k,
    u
  ), {
    x: S,
    y: P,
    isScrolling: x,
    arrivedState: O,
    directions: E,
    measure() {
      const L = F(e);
      d && L && _(L);
    }
  };
}
const Um = ["mousedown", "mouseup", "keydown", "keyup"];
// @__NO_SIDE_EFFECTS__
function zm(e, t = {}) {
  const {
    events: n = Um,
    document: a = Il,
    initial: r = null
  } = t, s = Ut(r);
  return a && n.forEach((o) => {
    kn(a, o, (l) => {
      typeof l.getModifierState == "function" && (s.value = l.getModifierState(e));
    }, { passive: !0 });
  }), s;
}
function Wm(e, t, n = {}) {
  const { window: a = Nn } = n;
  return Fm(e, t, a?.sessionStorage, n);
}
// @__NO_SIDE_EFFECTS__
function no(e, t, n, a = {}) {
  var r, s, o;
  const {
    clone: l = !1,
    passive: u = !1,
    eventName: c,
    deep: d = !1,
    defaultValue: f,
    shouldEmit: v
  } = a, y = Tt(), I = n || y?.emit || ((r = y?.$emit) == null ? void 0 : r.bind(y)) || ((o = (s = y?.proxy) == null ? void 0 : s.$emit) == null ? void 0 : o.bind(y?.proxy));
  let S = c;
  t || (t = "modelValue"), S = S || `update:${t.toString()}`;
  const P = (O) => l ? typeof l == "function" ? l(O) : $m(O) : O, w = () => lm(e[t]) ? P(e[t]) : f, x = (O) => {
    v ? v(O) && I(S, O) : I(S, O);
  };
  if (u) {
    const O = w(), E = pe(O);
    let k = !1;
    return Fe(
      () => e[t],
      (C) => {
        k || (k = !0, E.value = P(C), St(() => k = !1));
      }
    ), Fe(
      E,
      (C) => {
        !k && (C !== e[t] || d) && x(C);
      },
      { deep: d }
    ), E;
  } else
    return U({
      get() {
        return w();
      },
      set(O) {
        x(O);
      }
    });
}
const Hm = /* @__PURE__ */ $({
  __name: "SheetOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = he(t, "class");
    return (a, r) => (p(), A(i(Hs), G({
      "data-slot": "sheet-overlay",
      class: i(H)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80", t.class)
    }, i(n)), {
      default: m(() => [
        R(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Zm = /* @__PURE__ */ $({
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
    const n = e, a = t, r = he(n, "class", "side"), s = qe(r, a);
    return (o, l) => (p(), A(i(Zs), null, {
      default: m(() => [
        b(Hm),
        b(i(Gs), G({
          "data-slot": "sheet-content",
          class: i(H)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
            e.side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
            e.side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
            e.side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
            e.side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
            n.class
          )
        }, { ...i(s), ...o.$attrs }), {
          default: m(() => [
            R(o.$slots, "default"),
            b(i(cl), { class: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none" }, {
              default: m(() => [
                b(i(ar), { class: "size-4" }),
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
}), Gm = /* @__PURE__ */ $({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = he(t, "class");
    return (a, r) => (p(), A(i(qs), G({
      "data-slot": "sheet-description",
      class: i(H)("text-muted-foreground text-sm", t.class)
    }, i(n)), {
      default: m(() => [
        R(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), qm = /* @__PURE__ */ $({
  __name: "SheetHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (p(), j("div", {
      "data-slot": "sheet-header",
      class: Ee(i(H)("flex flex-col gap-1.5 p-4", t.class))
    }, [
      R(n.$slots, "default")
    ], 2));
  }
}), Ym = /* @__PURE__ */ $({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = he(t, "class");
    return (a, r) => (p(), A(i(Ys), G({
      "data-slot": "sheet-title",
      class: i(H)("text-foreground font-semibold", t.class)
    }, i(n)), {
      default: m(() => [
        R(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Zo = "sidebar_state", Km = 3600 * 24 * 7, Xm = "16rem", Jm = "18rem", Qm = "3rem", ep = "b", [ao, tp] = Ks("Sidebar"), np = { class: "flex h-full w-full flex-col" }, ap = ["data-state", "data-collapsible", "data-variant", "data-side"], rp = {
  "data-sidebar": "sidebar",
  class: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
}, sp = /* @__PURE__ */ $({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: {}
  },
  setup(e) {
    const t = e, { isMobile: n, state: a, openMobile: r, setOpenMobile: s } = ao();
    return (o, l) => e.collapsible === "none" ? (p(), j("div", G({
      key: 0,
      "data-slot": "sidebar",
      class: i(H)("bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col", t.class)
    }, o.$attrs), [
      R(o.$slots, "default")
    ], 16)) : i(n) ? (p(), A(i(rm), G({
      key: 1,
      open: i(r)
    }, o.$attrs, { "onUpdate:open": i(s) }), {
      default: m(() => [
        b(i(Zm), {
          "data-sidebar": "sidebar",
          "data-slot": "sidebar",
          "data-mobile": "true",
          side: e.side,
          class: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
          style: ol({
            "--sidebar-width": i(Jm)
          })
        }, {
          default: m(() => [
            b(qm, { class: "sr-only" }, {
              default: m(() => [
                b(Ym, null, {
                  default: m(() => [...l[0] || (l[0] = [
                    be("Sidebar", -1)
                  ])]),
                  _: 1
                }),
                b(Gm, null, {
                  default: m(() => [...l[1] || (l[1] = [
                    be("Displays the mobile sidebar.", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            oe("div", np, [
              R(o.$slots, "default")
            ])
          ]),
          _: 3
        }, 8, ["side", "style"])
      ]),
      _: 3
    }, 16, ["open", "onUpdate:open"])) : (p(), j("div", {
      key: 2,
      class: "group peer text-sidebar-foreground hidden md:block",
      "data-slot": "sidebar",
      "data-state": i(a),
      "data-collapsible": i(a) === "collapsed" ? e.collapsible : "",
      "data-variant": e.variant,
      "data-side": e.side
    }, [
      oe("div", {
        class: Ee(i(H)(
          "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
          "group-data-[collapsible=offcanvas]:w-0",
          "group-data-[side=right]:rotate-180",
          e.variant === "floating" || e.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
        ))
      }, null, 2),
      oe("div", G({
        class: i(H)(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          e.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          e.variant === "floating" || e.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          t.class
        )
      }, o.$attrs), [
        oe("div", rp, [
          R(o.$slots, "default")
        ])
      ], 16)
    ], 8, ap));
  }
}), op = /* @__PURE__ */ $({
  __name: "SidebarContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (p(), j("div", {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      class: Ee(i(H)("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", t.class))
    }, [
      R(n.$slots, "default")
    ], 2));
  }
}), ip = /* @__PURE__ */ $({
  __name: "SidebarFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (p(), j("div", {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      class: Ee(i(H)("flex flex-col gap-2 p-2", t.class))
    }, [
      R(n.$slots, "default")
    ], 2));
  }
}), lp = /* @__PURE__ */ $({
  __name: "SidebarGroup",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (p(), j("div", {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      class: Ee(i(H)("relative flex w-full min-w-0 flex-col p-2", t.class))
    }, [
      R(n.$slots, "default")
    ], 2));
  }
}), up = /* @__PURE__ */ $({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (p(), A(i(nr), {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      as: e.as,
      "as-child": e.asChild,
      class: Ee(i(H)(
        "text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        t.class
      ))
    }, {
      default: m(() => [
        R(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), cp = /* @__PURE__ */ $({
  __name: "SidebarHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (p(), j("div", {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      class: Ee(i(H)("flex flex-col gap-2 p-2", t.class))
    }, [
      R(n.$slots, "default")
    ], 2));
  }
}), An = /* @__PURE__ */ $({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, r = /* @__PURE__ */ no(n, "modelValue", t, {
      passive: !0,
      defaultValue: n.defaultValue
    });
    return (s, o) => Us((p(), j("input", {
      "onUpdate:modelValue": o[0] || (o[0] = (l) => sn(r) ? r.value = l : null),
      "data-slot": "input",
      class: Ee(i(H)(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        n.class
      ))
    }, null, 2)), [
      [il, i(r)]
    ]);
  }
}), dp = /* @__PURE__ */ $({
  __name: "SidebarMenu",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (p(), j("ul", {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      class: Ee(i(H)("flex w-full min-w-0 flex-col gap-1", t.class))
    }, [
      R(n.$slots, "default")
    ], 2));
  }
}), fp = /* @__PURE__ */ $({
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
    const r = qe(e, t);
    return (s, o) => (p(), A(i(Oc), G({ "data-slot": "tooltip" }, i(r)), {
      default: m(() => [
        R(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), mp = /* @__PURE__ */ $({
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
    const n = e, a = t, r = he(n, "class"), s = qe(r, a);
    return (o, l) => (p(), A(i(Sc), null, {
      default: m(() => [
        b(i(Cc), G({ "data-slot": "tooltip-content" }, { ...i(s), ...o.$attrs }, {
          class: i(H)("bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance", n.class)
        }), {
          default: m(() => [
            R(o.$slots, "default"),
            b(i(Tc), { class: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), pp = /* @__PURE__ */ $({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (p(), A(i(Nc), G({ "data-slot": "tooltip-trigger" }, t), {
      default: m(() => [
        R(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Go = /* @__PURE__ */ $({
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
    return (n, a) => (p(), A(i(nr), G({
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": e.size,
      "data-active": e.isActive,
      class: i(H)(i(_p)({ variant: e.variant, size: e.size }), t.class),
      as: e.as,
      "as-child": e.asChild
    }, n.$attrs), {
      default: m(() => [
        R(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
}), qo = /* @__PURE__ */ $({
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
    const t = e, { isMobile: n, state: a } = ao(), r = he(t, "tooltip");
    return (s, o) => e.tooltip ? (p(), A(i(fp), { key: 1 }, {
      default: m(() => [
        b(i(pp), { "as-child": "" }, {
          default: m(() => [
            b(Go, It(Mt({ ...i(r), ...s.$attrs })), {
              default: m(() => [
                R(s.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        b(i(mp), {
          side: "right",
          align: "center",
          hidden: i(a) !== "collapsed" || i(n)
        }, {
          default: m(() => [
            typeof e.tooltip == "string" ? (p(), j(Re, { key: 0 }, [
              be(se(e.tooltip), 1)
            ], 64)) : (p(), A(mt(e.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (p(), A(Go, It(G({ key: 0 }, { ...i(r), ...s.$attrs })), {
      default: m(() => [
        R(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Yo = /* @__PURE__ */ $({
  __name: "SidebarMenuItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (p(), j("li", {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      class: Ee(i(H)("group/menu-item relative", t.class))
    }, [
      R(n.$slots, "default")
    ], 2));
  }
}), vp = /* @__PURE__ */ $({
  __name: "SidebarMenuSub",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (p(), j("ul", {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-badge",
      class: Ee(i(H)(
        "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        t.class
      ))
    }, [
      R(n.$slots, "default")
    ], 2));
  }
}), hp = /* @__PURE__ */ $({
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
    return (n, a) => (p(), A(i(nr), {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      as: e.as,
      "as-child": e.asChild,
      "data-size": e.size,
      "data-active": e.isActive,
      class: Ee(i(H)(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        e.size === "sm" && "text-xs",
        e.size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        t.class
      ))
    }, {
      default: m(() => [
        R(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-size", "data-active", "class"]));
  }
}), gp = /* @__PURE__ */ $({
  __name: "SidebarMenuSubItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (p(), j("li", {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      class: Ee(i(H)("group/menu-sub-item relative", t.class))
    }, [
      R(n.$slots, "default")
    ], 2));
  }
});
Il?.cookie.includes(`${Zo}=false`);
const yp = /* @__PURE__ */ $({
  __name: "SidebarRail",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { toggleSidebar: n } = ao();
    return (a, r) => (p(), j("button", {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabindex: -1,
      title: "Toggle Sidebar",
      class: Ee(i(H)(
        "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex",
        "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        t.class
      )),
      onClick: r[0] || (r[0] = //@ts-ignore
      (...s) => i(n) && i(n)(...s))
    }, [
      R(a.$slots, "default")
    ], 2));
  }
}), bp = /* @__PURE__ */ $({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = he(t, "class");
    return (a, r) => (p(), A(i(Ic), G({ "data-slot": "separator-root" }, i(n), {
      class: i(H)(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        t.class
      )
    }), null, 16, ["class"]));
  }
}), pt = /* @__PURE__ */ $({
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
    return (n, a) => (p(), A(i(nr), {
      "data-slot": "button",
      as: e.as,
      "as-child": e.asChild,
      class: Ee(i(H)(i(en)({ variant: e.variant, size: e.size }), t.class))
    }, {
      default: m(() => [
        R(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), en = ka(
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
), _p = ka(
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
), wp = {
  key: 0,
  class: "font-semibold text-sm mt-4 ml-2 truncate"
}, kp = { key: 1 }, E1 = /* @__PURE__ */ $({
  __name: "AppSidebar",
  props: {
    config: {},
    currentPath: { default: "" }
  },
  setup(e) {
    function t(n, a) {
      return !!(n.url === a || n.items?.some((r) => r.url === a));
    }
    return (n, a) => (p(), A(i(sp), {
      collapsible: e.config.collapsible || "icon"
    }, {
      default: m(() => [
        b(i(cp), null, {
          default: m(() => [
            R(n.$slots, "header", {}, () => [
              e.config.title ? (p(), j("div", wp, se(e.config.title), 1)) : ve("", !0)
            ])
          ]),
          _: 3
        }),
        b(i(op), null, {
          default: m(() => [
            b(i(dp), null, {
              default: m(() => [
                (p(!0), j(Re, null, Ge(e.config.menuGroups, (r, s) => (p(), A(i(lp), {
                  key: s,
                  class: "!pb-0"
                }, {
                  default: m(() => [
                    r.title ? (p(), A(i(up), { key: 0 }, {
                      default: m(() => [
                        be(se(r.title), 1)
                      ]),
                      _: 2
                    }, 1024)) : ve("", !0),
                    (p(!0), j(Re, null, Ge(r.items, (o) => (p(), j(Re, {
                      key: o.title
                    }, [
                      o.items?.length ? (p(), A(i(wf), {
                        key: 0,
                        "as-child": "",
                        "default-open": t(o, e.currentPath),
                        class: "group/collapsible"
                      }, {
                        default: m(() => [
                          b(i(Yo), null, {
                            default: m(() => [
                              b(i(xf), { "as-child": "" }, {
                                default: m(() => [
                                  b(i(qo), {
                                    tooltip: o.title,
                                    disabled: o.disabled
                                  }, {
                                    default: m(() => [
                                      o.icon ? (p(), A(mt(o.icon), { key: 0 })) : ve("", !0),
                                      o.url ? (p(), A(i(as), {
                                        key: 2,
                                        to: o.url
                                      }, {
                                        default: m(() => [
                                          oe("span", null, se(o.title), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["to"])) : (p(), j("span", kp, se(o.title), 1)),
                                      b(i(Zn), { class: "ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" })
                                    ]),
                                    _: 2
                                  }, 1032, ["tooltip", "disabled"])
                                ]),
                                _: 2
                              }, 1024),
                              b(i(kf), null, {
                                default: m(() => [
                                  b(i(vp), null, {
                                    default: m(() => [
                                      (p(!0), j(Re, null, Ge(o.items, (l) => (p(), A(i(gp), {
                                        key: l.title
                                      }, {
                                        default: m(() => [
                                          b(i(hp), {
                                            "as-child": "",
                                            "is-active": e.currentPath === l.url,
                                            disabled: l.disabled
                                          }, {
                                            default: m(() => [
                                              b(i(as), {
                                                to: l.url
                                              }, {
                                                default: m(() => [
                                                  oe("span", null, se(l.title), 1)
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
                      }, 1032, ["default-open"])) : (p(), A(i(Yo), { key: 1 }, {
                        default: m(() => [
                          b(i(qo), {
                            "as-child": "",
                            "is-active": e.currentPath === o.url,
                            disabled: o.disabled
                          }, {
                            default: m(() => [
                              b(i(as), {
                                to: o.url
                              }, {
                                default: m(() => [
                                  o.icon ? (p(), A(mt(o.icon), { key: 0 })) : ve("", !0),
                                  oe("span", null, se(o.title), 1)
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
        b(i(ip), null, {
          default: m(() => [
            R(n.$slots, "footer")
          ]),
          _: 3
        }),
        b(i(yp))
      ]),
      _: 3
    }, 8, ["collapsible"]));
  }
}), xp = { class: "flex-1 flex gap-2 items-center [&_[data-placeholder]]:text-muted-foreground [&_[data-placeholder]]:truncate min-w-0" }, Pl = /* @__PURE__ */ $({
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
    return (n, a) => (p(), A(i(nr), {
      as: e.as,
      class: Ee(i(H)(i(en)({ variant: e.variant, size: e.size }), t.class))
    }, {
      default: m(() => [
        oe("span", xp, [
          R(n.$slots, "default")
        ]),
        b(i(Hn), { class: "!size-3 !-mx-1" })
      ]),
      _: 3
    }, 8, ["as", "class"]));
  }
}), ws = (e, t, n = (a) => a) => e.reduce((a, r) => (a[t(r)] = n(r), a), {}), Ep = (e, t) => {
  const n = e.reduce((a, r) => {
    const s = r;
    return a[s] || (a[s] = r), a;
  }, {});
  return Object.values(n);
}, Op = (e, t, n, a) => {
  if (!e && !t)
    return [];
  if (!e)
    return [t];
  if (!t)
    return [...e];
  const r = (o) => o === t;
  return e.find(r) ? e.filter((o, l) => !r(o)) : [...e, t];
}, Ko = (e, t, n = (a) => a) => {
  if (!e?.length && !t?.length)
    return [];
  if (e?.length === void 0)
    return [...t];
  if (!t?.length)
    return [...e];
  const a = t.reduce((r, s) => (r[n(s)] = !0, r), {});
  return e.filter((r) => !a[n(r)]);
}, Sp = (e) => {
  if (!e || e.length === 0)
    return "";
  const t = e.toLowerCase();
  return t.substring(0, 1).toUpperCase() + t.substring(1, t.length);
}, Cp = (e) => e ? e.split(/(?=[A-Z])|[\.\-\s_]/).map((t) => t.trim()).filter((t) => !!t).map((t) => Sp(t.toLowerCase())).join(" ") : "";
/*!
  * shared v11.1.12
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function fn(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Xo = {};
function Tp(e) {
  Xo[e] || (Xo[e] = !0, fn(e));
}
const xn = typeof window < "u";
let jt, Kn;
if (process.env.NODE_ENV !== "production") {
  const e = xn && window.performance;
  e && e.mark && e.measure && e.clearMarks && // @ts-ignore browser compat
  e.clearMeasures && (jt = (t) => {
    e.mark(t);
  }, Kn = (t, n, a) => {
    e.measure(t, n, a), e.clearMarks(n), e.clearMarks(a);
  });
}
const Np = /\{([0-9a-zA-Z]+)\}/g;
function Hr(e, ...t) {
  return t.length === 1 && Ue(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(Np, (n, a) => t.hasOwnProperty(a) ? t[a] : "");
}
const On = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), Ap = (e, t, n) => Ip({ l: e, k: t, s: n }), Ip = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), yt = (e) => typeof e == "number" && isFinite(e), Pp = (e) => ro(e) === "[object Date]", Cr = (e) => ro(e) === "[object RegExp]", Zr = (e) => je(e) && Object.keys(e).length === 0, bt = Object.assign, $p = Object.create, ze = (e = null) => $p(e);
let Jo;
const zn = () => Jo || (Jo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : ze());
function Qo(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function ei(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Dp(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (a, r, s) => `${r}="${ei(s)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (a, r, s) => `${r}='${ei(s)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (process.env.NODE_ENV !== "production" && fn("Potentially dangerous event handlers detected in translation. Consider removing onclick, onerror, etc. from your translation messages."), e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((a) => {
    e = e.replace(a, "$1javascript&#58;");
  }), e;
}
const Lp = Object.prototype.hasOwnProperty;
function Kt(e, t) {
  return Lp.call(e, t);
}
const st = Array.isArray, Je = (e) => typeof e == "function", ie = (e) => typeof e == "string", rt = (e) => typeof e == "boolean", Ue = (e) => e !== null && typeof e == "object", Vp = (e) => Ue(e) && Je(e.then) && Je(e.catch), $l = Object.prototype.toString, ro = (e) => $l.call(e), je = (e) => ro(e) === "[object Object]", Rp = (e) => e == null ? "" : st(e) || je(e) && e.toString === $l ? JSON.stringify(e, null, 2) : String(e);
function so(e, t = "") {
  return e.reduce((n, a, r) => r === 0 ? n + a : n + t + a, "");
}
const ti = 2;
function Mp(e, t = 0, n = e.length) {
  const a = e.split(/\r?\n/);
  let r = 0;
  const s = [];
  for (let o = 0; o < a.length; o++)
    if (r += a[o].length + 1, r >= t) {
      for (let l = o - ti; l <= o + ti || n > r; l++) {
        if (l < 0 || l >= a.length)
          continue;
        const u = l + 1;
        s.push(`${u}${" ".repeat(3 - String(u).length)}|  ${a[l]}`);
        const c = a[l].length;
        if (l === o) {
          const d = t - (r - c) + 1, f = Math.max(1, n > r ? c - d : n - t);
          s.push("   |  " + " ".repeat(d) + "^".repeat(f));
        } else if (l > o) {
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
function Fp() {
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
const mr = (e) => !Ue(e) || st(e);
function kr(e, t) {
  if (mr(e) || mr(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: a, des: r } = n.pop();
    Object.keys(a).forEach((s) => {
      s !== "__proto__" && (Ue(a[s]) && !Ue(r[s]) && (r[s] = Array.isArray(a[s]) ? [] : ze()), mr(r[s]) || mr(a[s]) ? r[s] = a[s] : n.push({ src: a[s], des: r[s] }));
    });
  }
}
/*!
  * message-compiler v11.1.12
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Bp(e, t, n) {
  return { line: e, column: t, offset: n };
}
function ks(e, t, n) {
  return { start: e, end: t };
}
const ke = {
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
}, jp = 17, Up = {
  // tokenizer error messages
  [ke.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [ke.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [ke.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [ke.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [ke.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [ke.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [ke.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [ke.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [ke.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [ke.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [ke.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [ke.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [ke.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [ke.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
  // generator error messages
  [ke.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
  // minimizer error messages
  [ke.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function Oa(e, t, n = {}) {
  const { domain: a, messages: r, args: s } = n, o = process.env.NODE_ENV !== "production" ? Hr((r || Up)[e] || "", ...s || []) : e, l = new SyntaxError(String(o));
  return l.code = e, t && (l.location = t), l.domain = a, l;
}
function zp(e) {
  throw e;
}
const Wp = /<\/?[\w\s="/.':;#-\/]+>/, Hp = (e) => Wp.test(e), nn = " ", Zp = "\r", Ot = `
`, Gp = "\u2028", qp = "\u2029";
function Yp(e) {
  const t = e;
  let n = 0, a = 1, r = 1, s = 0;
  const o = (_) => t[_] === Zp && t[_ + 1] === Ot, l = (_) => t[_] === Ot, u = (_) => t[_] === qp, c = (_) => t[_] === Gp, d = (_) => o(_) || l(_) || u(_) || c(_), f = () => n, v = () => a, y = () => r, I = () => s, S = (_) => o(_) || u(_) || c(_) ? Ot : t[_], P = () => S(n), w = () => S(n + s);
  function x() {
    return s = 0, d(n) && (a++, r = 0), o(n) && n++, n++, r++, t[n];
  }
  function O() {
    return o(n + s) && s++, s++, t[n + s];
  }
  function E() {
    n = 0, a = 1, r = 1, s = 0;
  }
  function k(_ = 0) {
    s = _;
  }
  function C() {
    const _ = n + s;
    for (; _ !== n; )
      x();
    s = 0;
  }
  return {
    index: f,
    line: v,
    column: y,
    peekOffset: I,
    charAt: S,
    currentChar: P,
    currentPeek: w,
    next: x,
    peek: O,
    reset: E,
    resetPeek: k,
    skipToPeek: C
  };
}
const gn = void 0, Kp = ".", ni = "'", Xp = "tokenizer";
function Jp(e, t = {}) {
  const n = t.location !== !1, a = Yp(e), r = () => a.index(), s = () => Bp(a.line(), a.column(), a.index()), o = s(), l = r(), u = {
    currentType: 13,
    offset: l,
    startLoc: o,
    endLoc: o,
    lastType: 13,
    lastOffset: l,
    lastStartLoc: o,
    lastEndLoc: o,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, c = () => u, { onError: d } = t;
  function f(h, g, M, ...K) {
    const Se = c();
    if (g.column += M, g.offset += M, d) {
      const Ne = n ? ks(Se.startLoc, g) : null, xe = Oa(h, Ne, {
        domain: Xp,
        args: K
      });
      d(xe);
    }
  }
  function v(h, g, M) {
    h.endLoc = s(), h.currentType = g;
    const K = { type: g };
    return n && (K.loc = ks(h.startLoc, h.endLoc)), M != null && (K.value = M), K;
  }
  const y = (h) => v(
    h,
    13
    /* TokenTypes.EOF */
  );
  function I(h, g) {
    return h.currentChar() === g ? (h.next(), g) : (f(ke.EXPECTED_TOKEN, s(), 0, g), "");
  }
  function S(h) {
    let g = "";
    for (; h.currentPeek() === nn || h.currentPeek() === Ot; )
      g += h.currentPeek(), h.peek();
    return g;
  }
  function P(h) {
    const g = S(h);
    return h.skipToPeek(), g;
  }
  function w(h) {
    if (h === gn)
      return !1;
    const g = h.charCodeAt(0);
    return g >= 97 && g <= 122 || // a-z
    g >= 65 && g <= 90 || // A-Z
    g === 95;
  }
  function x(h) {
    if (h === gn)
      return !1;
    const g = h.charCodeAt(0);
    return g >= 48 && g <= 57;
  }
  function O(h, g) {
    const { currentType: M } = g;
    if (M !== 2)
      return !1;
    S(h);
    const K = w(h.currentPeek());
    return h.resetPeek(), K;
  }
  function E(h, g) {
    const { currentType: M } = g;
    if (M !== 2)
      return !1;
    S(h);
    const K = h.currentPeek() === "-" ? h.peek() : h.currentPeek(), Se = x(K);
    return h.resetPeek(), Se;
  }
  function k(h, g) {
    const { currentType: M } = g;
    if (M !== 2)
      return !1;
    S(h);
    const K = h.currentPeek() === ni;
    return h.resetPeek(), K;
  }
  function C(h, g) {
    const { currentType: M } = g;
    if (M !== 7)
      return !1;
    S(h);
    const K = h.currentPeek() === ".";
    return h.resetPeek(), K;
  }
  function _(h, g) {
    const { currentType: M } = g;
    if (M !== 8)
      return !1;
    S(h);
    const K = w(h.currentPeek());
    return h.resetPeek(), K;
  }
  function D(h, g) {
    const { currentType: M } = g;
    if (!(M === 7 || M === 11))
      return !1;
    S(h);
    const K = h.currentPeek() === ":";
    return h.resetPeek(), K;
  }
  function L(h, g) {
    const { currentType: M } = g;
    if (M !== 9)
      return !1;
    const K = () => {
      const Ne = h.currentPeek();
      return Ne === "{" ? w(h.peek()) : Ne === "@" || Ne === "|" || Ne === ":" || Ne === "." || Ne === nn || !Ne ? !1 : Ne === Ot ? (h.peek(), K()) : te(h, !1);
    }, Se = K();
    return h.resetPeek(), Se;
  }
  function J(h) {
    S(h);
    const g = h.currentPeek() === "|";
    return h.resetPeek(), g;
  }
  function te(h, g = !0) {
    const M = (Se = !1, Ne = "") => {
      const xe = h.currentPeek();
      return xe === "{" || xe === "@" || !xe ? Se : xe === "|" ? !(Ne === nn || Ne === Ot) : xe === nn ? (h.peek(), M(!0, nn)) : xe === Ot ? (h.peek(), M(!0, Ot)) : !0;
    }, K = M();
    return g && h.resetPeek(), K;
  }
  function ne(h, g) {
    const M = h.currentChar();
    return M === gn ? gn : g(M) ? (h.next(), M) : null;
  }
  function fe(h) {
    const g = h.charCodeAt(0);
    return g >= 97 && g <= 122 || // a-z
    g >= 65 && g <= 90 || // A-Z
    g >= 48 && g <= 57 || // 0-9
    g === 95 || // _
    g === 36;
  }
  function X(h) {
    return ne(h, fe);
  }
  function ae(h) {
    const g = h.charCodeAt(0);
    return g >= 97 && g <= 122 || // a-z
    g >= 65 && g <= 90 || // A-Z
    g >= 48 && g <= 57 || // 0-9
    g === 95 || // _
    g === 36 || // $
    g === 45;
  }
  function Y(h) {
    return ne(h, ae);
  }
  function W(h) {
    const g = h.charCodeAt(0);
    return g >= 48 && g <= 57;
  }
  function q(h) {
    return ne(h, W);
  }
  function Ce(h) {
    const g = h.charCodeAt(0);
    return g >= 48 && g <= 57 || // 0-9
    g >= 65 && g <= 70 || // A-F
    g >= 97 && g <= 102;
  }
  function Me(h) {
    return ne(h, Ce);
  }
  function ot(h) {
    let g = "", M = "";
    for (; g = q(h); )
      M += g;
    return M;
  }
  function $t(h) {
    let g = "";
    for (; ; ) {
      const M = h.currentChar();
      if (M === "{" || M === "}" || M === "@" || M === "|" || !M)
        break;
      if (M === nn || M === Ot)
        if (te(h))
          g += M, h.next();
        else {
          if (J(h))
            break;
          g += M, h.next();
        }
      else
        g += M, h.next();
    }
    return g;
  }
  function Ye(h) {
    P(h);
    let g = "", M = "";
    for (; g = Y(h); )
      M += g;
    const K = h.currentChar();
    if (K && K !== "}" && K !== gn && K !== nn && K !== Ot && K !== "　") {
      const Se = at(h);
      return f(ke.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, M + Se), M + Se;
    }
    return h.currentChar() === gn && f(ke.UNTERMINATED_CLOSING_BRACE, s(), 0), M;
  }
  function Le(h) {
    P(h);
    let g = "";
    return h.currentChar() === "-" ? (h.next(), g += `-${ot(h)}`) : g += ot(h), h.currentChar() === gn && f(ke.UNTERMINATED_CLOSING_BRACE, s(), 0), g;
  }
  function At(h) {
    return h !== ni && h !== Ot;
  }
  function le(h) {
    P(h), I(h, "'");
    let g = "", M = "";
    for (; g = ne(h, At); )
      g === "\\" ? M += ue(h) : M += g;
    const K = h.currentChar();
    return K === Ot || K === gn ? (f(ke.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, s(), 0), K === Ot && (h.next(), I(h, "'")), M) : (I(h, "'"), M);
  }
  function ue(h) {
    const g = h.currentChar();
    switch (g) {
      case "\\":
      case "'":
        return h.next(), `\\${g}`;
      case "u":
        return Ie(h, g, 4);
      case "U":
        return Ie(h, g, 6);
      default:
        return f(ke.UNKNOWN_ESCAPE_SEQUENCE, s(), 0, g), "";
    }
  }
  function Ie(h, g, M) {
    I(h, g);
    let K = "";
    for (let Se = 0; Se < M; Se++) {
      const Ne = Me(h);
      if (!Ne) {
        f(ke.INVALID_UNICODE_ESCAPE_SEQUENCE, s(), 0, `\\${g}${K}${h.currentChar()}`);
        break;
      }
      K += Ne;
    }
    return `\\${g}${K}`;
  }
  function Pe(h) {
    return h !== "{" && h !== "}" && h !== nn && h !== Ot;
  }
  function at(h) {
    P(h);
    let g = "", M = "";
    for (; g = ne(h, Pe); )
      M += g;
    return M;
  }
  function it(h) {
    let g = "", M = "";
    for (; g = X(h); )
      M += g;
    return M;
  }
  function Ke(h) {
    const g = (M) => {
      const K = h.currentChar();
      return K === "{" || K === "@" || K === "|" || K === "(" || K === ")" || !K || K === nn ? M : (M += K, h.next(), g(M));
    };
    return g("");
  }
  function Ft(h) {
    P(h);
    const g = I(
      h,
      "|"
      /* TokenChars.Pipe */
    );
    return P(h), g;
  }
  function vn(h, g) {
    let M = null;
    switch (h.currentChar()) {
      case "{":
        return g.braceNest >= 1 && f(ke.NOT_ALLOW_NEST_PLACEHOLDER, s(), 0), h.next(), M = v(
          g,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), P(h), g.braceNest++, M;
      case "}":
        return g.braceNest > 0 && g.currentType === 2 && f(ke.EMPTY_PLACEHOLDER, s(), 0), h.next(), M = v(
          g,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), g.braceNest--, g.braceNest > 0 && P(h), g.inLinked && g.braceNest === 0 && (g.inLinked = !1), M;
      case "@":
        return g.braceNest > 0 && f(ke.UNTERMINATED_CLOSING_BRACE, s(), 0), M = qt(h, g) || y(g), g.braceNest = 0, M;
      default: {
        let Se = !0, Ne = !0, xe = !0;
        if (J(h))
          return g.braceNest > 0 && f(ke.UNTERMINATED_CLOSING_BRACE, s(), 0), M = v(g, 1, Ft(h)), g.braceNest = 0, g.inLinked = !1, M;
        if (g.braceNest > 0 && (g.currentType === 4 || g.currentType === 5 || g.currentType === 6))
          return f(ke.UNTERMINATED_CLOSING_BRACE, s(), 0), g.braceNest = 0, Yt(h, g);
        if (Se = O(h, g))
          return M = v(g, 4, Ye(h)), P(h), M;
        if (Ne = E(h, g))
          return M = v(g, 5, Le(h)), P(h), M;
        if (xe = k(h, g))
          return M = v(g, 6, le(h)), P(h), M;
        if (!Se && !Ne && !xe)
          return M = v(g, 12, at(h)), f(ke.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, M.value), P(h), M;
        break;
      }
    }
    return M;
  }
  function qt(h, g) {
    const { currentType: M } = g;
    let K = null;
    const Se = h.currentChar();
    switch ((M === 7 || M === 8 || M === 11 || M === 9) && (Se === Ot || Se === nn) && f(ke.INVALID_LINKED_FORMAT, s(), 0), Se) {
      case "@":
        return h.next(), K = v(
          g,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), g.inLinked = !0, K;
      case ".":
        return P(h), h.next(), v(
          g,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return P(h), h.next(), v(
          g,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return J(h) ? (K = v(g, 1, Ft(h)), g.braceNest = 0, g.inLinked = !1, K) : C(h, g) || D(h, g) ? (P(h), qt(h, g)) : _(h, g) ? (P(h), v(g, 11, it(h))) : L(h, g) ? (P(h), Se === "{" ? vn(h, g) || K : v(g, 10, Ke(h))) : (M === 7 && f(ke.INVALID_LINKED_FORMAT, s(), 0), g.braceNest = 0, g.inLinked = !1, Yt(h, g));
    }
  }
  function Yt(h, g) {
    let M = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (g.braceNest > 0)
      return vn(h, g) || y(g);
    if (g.inLinked)
      return qt(h, g) || y(g);
    switch (h.currentChar()) {
      case "{":
        return vn(h, g) || y(g);
      case "}":
        return f(ke.UNBALANCED_CLOSING_BRACE, s(), 0), h.next(), v(
          g,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return qt(h, g) || y(g);
      default: {
        if (J(h))
          return M = v(g, 1, Ft(h)), g.braceNest = 0, g.inLinked = !1, M;
        if (te(h))
          return v(g, 0, $t(h));
        break;
      }
    }
    return M;
  }
  function Sn() {
    const { currentType: h, offset: g, startLoc: M, endLoc: K } = u;
    return u.lastType = h, u.lastOffset = g, u.lastStartLoc = M, u.lastEndLoc = K, u.offset = r(), u.startLoc = s(), a.currentChar() === gn ? v(
      u,
      13
      /* TokenTypes.EOF */
    ) : Yt(a, u);
  }
  return {
    nextToken: Sn,
    currentOffset: r,
    currentPosition: s,
    context: c
  };
}
const Qp = "parser", ev = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function tv(e, t, n) {
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
function nv(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function a(w, x, O, E, ...k) {
    const C = w.currentPosition();
    if (C.offset += E, C.column += E, n) {
      const _ = t ? ks(O, C) : null, D = Oa(x, _, {
        domain: Qp,
        args: k
      });
      n(D);
    }
  }
  function r(w, x, O) {
    const E = { type: w };
    return t && (E.start = x, E.end = x, E.loc = { start: O, end: O }), E;
  }
  function s(w, x, O, E) {
    t && (w.end = x, w.loc && (w.loc.end = O));
  }
  function o(w, x) {
    const O = w.context(), E = r(3, O.offset, O.startLoc);
    return E.value = x, s(E, w.currentOffset(), w.currentPosition()), E;
  }
  function l(w, x) {
    const O = w.context(), { lastOffset: E, lastStartLoc: k } = O, C = r(5, E, k);
    return C.index = parseInt(x, 10), w.nextToken(), s(C, w.currentOffset(), w.currentPosition()), C;
  }
  function u(w, x) {
    const O = w.context(), { lastOffset: E, lastStartLoc: k } = O, C = r(4, E, k);
    return C.key = x, w.nextToken(), s(C, w.currentOffset(), w.currentPosition()), C;
  }
  function c(w, x) {
    const O = w.context(), { lastOffset: E, lastStartLoc: k } = O, C = r(9, E, k);
    return C.value = x.replace(ev, tv), w.nextToken(), s(C, w.currentOffset(), w.currentPosition()), C;
  }
  function d(w) {
    const x = w.nextToken(), O = w.context(), { lastOffset: E, lastStartLoc: k } = O, C = r(8, E, k);
    return x.type !== 11 ? (a(w, ke.UNEXPECTED_EMPTY_LINKED_MODIFIER, O.lastStartLoc, 0), C.value = "", s(C, E, k), {
      nextConsumeToken: x,
      node: C
    }) : (x.value == null && a(w, ke.UNEXPECTED_LEXICAL_ANALYSIS, O.lastStartLoc, 0, an(x)), C.value = x.value || "", s(C, w.currentOffset(), w.currentPosition()), {
      node: C
    });
  }
  function f(w, x) {
    const O = w.context(), E = r(7, O.offset, O.startLoc);
    return E.value = x, s(E, w.currentOffset(), w.currentPosition()), E;
  }
  function v(w) {
    const x = w.context(), O = r(6, x.offset, x.startLoc);
    let E = w.nextToken();
    if (E.type === 8) {
      const k = d(w);
      O.modifier = k.node, E = k.nextConsumeToken || w.nextToken();
    }
    switch (E.type !== 9 && a(w, ke.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, an(E)), E = w.nextToken(), E.type === 2 && (E = w.nextToken()), E.type) {
      case 10:
        E.value == null && a(w, ke.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, an(E)), O.key = f(w, E.value || "");
        break;
      case 4:
        E.value == null && a(w, ke.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, an(E)), O.key = u(w, E.value || "");
        break;
      case 5:
        E.value == null && a(w, ke.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, an(E)), O.key = l(w, E.value || "");
        break;
      case 6:
        E.value == null && a(w, ke.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, an(E)), O.key = c(w, E.value || "");
        break;
      default: {
        a(w, ke.UNEXPECTED_EMPTY_LINKED_KEY, x.lastStartLoc, 0);
        const k = w.context(), C = r(7, k.offset, k.startLoc);
        return C.value = "", s(C, k.offset, k.startLoc), O.key = C, s(O, k.offset, k.startLoc), {
          nextConsumeToken: E,
          node: O
        };
      }
    }
    return s(O, w.currentOffset(), w.currentPosition()), {
      node: O
    };
  }
  function y(w) {
    const x = w.context(), O = x.currentType === 1 ? w.currentOffset() : x.offset, E = x.currentType === 1 ? x.endLoc : x.startLoc, k = r(2, O, E);
    k.items = [];
    let C = null;
    do {
      const L = C || w.nextToken();
      switch (C = null, L.type) {
        case 0:
          L.value == null && a(w, ke.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, an(L)), k.items.push(o(w, L.value || ""));
          break;
        case 5:
          L.value == null && a(w, ke.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, an(L)), k.items.push(l(w, L.value || ""));
          break;
        case 4:
          L.value == null && a(w, ke.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, an(L)), k.items.push(u(w, L.value || ""));
          break;
        case 6:
          L.value == null && a(w, ke.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, an(L)), k.items.push(c(w, L.value || ""));
          break;
        case 7: {
          const J = v(w);
          k.items.push(J.node), C = J.nextConsumeToken || null;
          break;
        }
      }
    } while (x.currentType !== 13 && x.currentType !== 1);
    const _ = x.currentType === 1 ? x.lastOffset : w.currentOffset(), D = x.currentType === 1 ? x.lastEndLoc : w.currentPosition();
    return s(k, _, D), k;
  }
  function I(w, x, O, E) {
    const k = w.context();
    let C = E.items.length === 0;
    const _ = r(1, x, O);
    _.cases = [], _.cases.push(E);
    do {
      const D = y(w);
      C || (C = D.items.length === 0), _.cases.push(D);
    } while (k.currentType !== 13);
    return C && a(w, ke.MUST_HAVE_MESSAGES_IN_PLURAL, O, 0), s(_, w.currentOffset(), w.currentPosition()), _;
  }
  function S(w) {
    const x = w.context(), { offset: O, startLoc: E } = x, k = y(w);
    return x.currentType === 13 ? k : I(w, O, E, k);
  }
  function P(w) {
    const x = Jp(w, bt({}, e)), O = x.context(), E = r(0, O.offset, O.startLoc);
    return t && E.loc && (E.loc.source = w), E.body = S(x), e.onCacheKey && (E.cacheKey = e.onCacheKey(w)), O.currentType !== 13 && a(x, ke.UNEXPECTED_LEXICAL_ANALYSIS, O.lastStartLoc, 0, w[O.offset] || ""), s(E, x.currentOffset(), x.currentPosition()), E;
  }
  return { parse: P };
}
function an(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function av(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (s) => (n.helpers.add(s), s) };
}
function ai(e, t) {
  for (let n = 0; n < e.length; n++)
    oo(e[n], t);
}
function oo(e, t) {
  switch (e.type) {
    case 1:
      ai(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      ai(e.items, t);
      break;
    case 6: {
      oo(e.key, t), t.helper(
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
function rv(e, t = {}) {
  const n = av(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && oo(e.body, n);
  const a = n.context();
  e.helpers = Array.from(a.helpers);
}
function sv(e) {
  const t = e.body;
  return t.type === 2 ? ri(t) : t.cases.forEach((n) => ri(n)), e;
}
function ri(e) {
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
      e.static = so(t);
      for (let n = 0; n < e.items.length; n++) {
        const a = e.items[n];
        (a.type === 3 || a.type === 9) && delete a.value;
      }
    }
  }
}
const ov = "minifier";
function ia(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      ia(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let a = 0; a < n.length; a++)
        ia(n[a]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let a = 0; a < n.length; a++)
        ia(n[a]);
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
      ia(t.key), t.k = t.key, delete t.key, t.modifier && (ia(t.modifier), t.m = t.modifier, delete t.modifier);
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
        throw Oa(ke.UNHANDLED_MINIFIER_NODE_TYPE, null, {
          domain: ov,
          args: [e.type]
        });
  }
  delete e.type;
}
const iv = "parser";
function lv(e, t) {
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
  const l = () => o;
  function u(S, P) {
    o.code += S;
  }
  function c(S, P = !0) {
    const w = P ? a : "";
    u(r ? w + "  ".repeat(S) : w);
  }
  function d(S = !0) {
    const P = ++o.indentLevel;
    S && c(P);
  }
  function f(S = !0) {
    const P = --o.indentLevel;
    S && c(P);
  }
  function v() {
    c(o.indentLevel);
  }
  return {
    context: l,
    push: u,
    indent: d,
    deindent: f,
    newline: v,
    helper: (S) => `_${S}`,
    needIndent: () => o.needIndent
  };
}
function uv(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), ma(e, t.key), t.modifier ? (e.push(", "), ma(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function cv(e, t) {
  const { helper: n, needIndent: a } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(a());
  const r = t.items.length;
  for (let s = 0; s < r && (ma(e, t.items[s]), s !== r - 1); s++)
    e.push(", ");
  e.deindent(a()), e.push("])");
}
function dv(e, t) {
  const { helper: n, needIndent: a } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(a());
    const r = t.cases.length;
    for (let s = 0; s < r && (ma(e, t.cases[s]), s !== r - 1); s++)
      e.push(", ");
    e.deindent(a()), e.push("])");
  }
}
function fv(e, t) {
  t.body ? ma(e, t.body) : e.push("null");
}
function ma(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      fv(e, t);
      break;
    case 1:
      dv(e, t);
      break;
    case 2:
      cv(e, t);
      break;
    case 6:
      uv(e, t);
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
        throw Oa(ke.UNHANDLED_CODEGEN_NODE_TYPE, null, {
          domain: iv,
          args: [t.type]
        });
  }
}
const mv = (e, t = {}) => {
  const n = ie(t.mode) ? t.mode : "normal", a = ie(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const r = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, s = t.needIndent ? t.needIndent : n !== "arrow", o = e.helpers || [], l = lv(e, {
    filename: a,
    breakLineCode: r,
    needIndent: s
  });
  l.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), l.indent(s), o.length > 0 && (l.push(`const { ${so(o.map((d) => `${d}: _${d}`), ", ")} } = ctx`), l.newline()), l.push("return "), ma(l, e), l.deindent(s), l.push("}"), delete e.helpers;
  const { code: u, map: c } = l.context();
  return {
    ast: e,
    code: u,
    map: c ? c.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function pv(e, t = {}) {
  const n = bt({}, t), a = !!n.jit, r = !!n.minify, s = n.optimize == null ? !0 : n.optimize, l = nv(n).parse(e);
  return a ? (s && sv(l), r && ia(l), { ast: l, code: "" }) : (rv(l, n), mv(l, n));
}
/*!
  * core-base v11.1.12
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function vv() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (zn().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (zn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function Jt(e) {
  return Ue(e) && io(e) === 0 && (Kt(e, "b") || Kt(e, "body"));
}
const Dl = ["b", "body"];
function hv(e) {
  return Rn(e, Dl);
}
const Ll = ["c", "cases"];
function gv(e) {
  return Rn(e, Ll, []);
}
const Vl = ["s", "static"];
function yv(e) {
  return Rn(e, Vl);
}
const Rl = ["i", "items"];
function bv(e) {
  return Rn(e, Rl, []);
}
const Ml = ["t", "type"];
function io(e) {
  return Rn(e, Ml);
}
const Fl = ["v", "value"];
function pr(e, t) {
  const n = Rn(e, Fl);
  if (n != null)
    return n;
  throw ja(t);
}
const Bl = ["m", "modifier"];
function _v(e) {
  return Rn(e, Bl);
}
const jl = ["k", "key"];
function wv(e) {
  const t = Rn(e, jl);
  if (t)
    return t;
  throw ja(
    6
    /* NodeTypes.Linked */
  );
}
function Rn(e, t, n) {
  for (let a = 0; a < t.length; a++) {
    const r = t[a];
    if (Kt(e, r) && e[r] != null)
      return e[r];
  }
  return n;
}
const Ul = [
  ...Dl,
  ...Ll,
  ...Vl,
  ...Rl,
  ...jl,
  ...Bl,
  ...Fl,
  ...Ml
];
function ja(e) {
  return new Error(`unhandled node type: ${e}`);
}
function is(e) {
  return (n) => kv(n, e);
}
function kv(e, t) {
  const n = hv(t);
  if (n == null)
    throw ja(
      0
      /* NodeTypes.Resource */
    );
  if (io(n) === 1) {
    const s = gv(n);
    return e.plural(s.reduce((o, l) => [
      ...o,
      si(e, l)
    ], []));
  } else
    return si(e, n);
}
function si(e, t) {
  const n = yv(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const a = bv(t).reduce((r, s) => [...r, xs(e, s)], []);
    return e.normalize(a);
  }
}
function xs(e, t) {
  const n = io(t);
  switch (n) {
    case 3:
      return pr(t, n);
    case 9:
      return pr(t, n);
    case 4: {
      const a = t;
      if (Kt(a, "k") && a.k)
        return e.interpolate(e.named(a.k));
      if (Kt(a, "key") && a.key)
        return e.interpolate(e.named(a.key));
      throw ja(n);
    }
    case 5: {
      const a = t;
      if (Kt(a, "i") && yt(a.i))
        return e.interpolate(e.list(a.i));
      if (Kt(a, "index") && yt(a.index))
        return e.interpolate(e.list(a.index));
      throw ja(n);
    }
    case 6: {
      const a = t, r = _v(a), s = wv(a);
      return e.linked(xs(e, s), r ? xs(e, r) : void 0, e.type);
    }
    case 7:
      return pr(t, n);
    case 8:
      return pr(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const xv = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function Ev(e, t) {
  t && Hp(e) && fn(Hr(xv, { source: e }));
}
const Ov = (e) => e;
let vr = ze();
function Sv(e, t = {}) {
  let n = !1;
  const a = t.onError || zp;
  return t.onError = (r) => {
    n = !0, a(r);
  }, { ...pv(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function Cv(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && ie(e)) {
    const n = rt(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && Ev(e, n);
    const r = (t.onCacheKey || Ov)(e), s = vr[r];
    if (s)
      return s;
    const { ast: o, detectError: l } = Sv(e, {
      ...t,
      location: process.env.NODE_ENV !== "production",
      jit: !0
    }), u = is(o);
    return l ? u : vr[r] = u;
  } else {
    if (process.env.NODE_ENV !== "production" && !Jt(e))
      return fn(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), (() => e);
    const n = e.cacheKey;
    if (n) {
      const a = vr[n];
      return a || (vr[n] = is(e));
    } else
      return is(e);
  }
}
let Ua = null;
function Tv(e) {
  Ua = e;
}
function Nv(e, t, n) {
  Ua && Ua.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const Av = /* @__PURE__ */ Iv("function:translate");
function Iv(e) {
  return (t) => Ua && Ua.emit(e, t);
}
const Ct = {
  INVALID_ARGUMENT: jp,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_NON_STRING_MESSAGE: 20,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, Pv = 24;
function wn(e) {
  return Oa(e, null, process.env.NODE_ENV !== "production" ? { messages: $v } : void 0);
}
const $v = {
  [Ct.INVALID_ARGUMENT]: "Invalid arguments",
  [Ct.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [Ct.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [Ct.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
  [Ct.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
  [Ct.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
  [Ct.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function lo(e, t) {
  return t.locale != null ? oi(t.locale) : oi(e.locale);
}
let ls;
function oi(e) {
  if (ie(e))
    return e;
  if (Je(e)) {
    if (e.resolvedOnce && ls != null)
      return ls;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Vp(t))
        throw wn(Ct.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return ls = t;
    } else
      throw wn(Ct.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw wn(Ct.NOT_SUPPORT_LOCALE_TYPE);
}
function Dv(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...st(t) ? t : Ue(t) ? Object.keys(t) : ie(t) ? [t] : [n]
  ])];
}
function zl(e, t, n) {
  const a = ie(n) ? n : Tr, r = e;
  r.__localeChainCache || (r.__localeChainCache = /* @__PURE__ */ new Map());
  let s = r.__localeChainCache.get(a);
  if (!s) {
    s = [];
    let o = [n];
    for (; st(o); )
      o = ii(s, o, t);
    const l = st(t) || !je(t) ? t : t.default ? t.default : null;
    o = ie(l) ? [l] : l, st(o) && ii(s, o, !1), r.__localeChainCache.set(a, s);
  }
  return s;
}
function ii(e, t, n) {
  let a = !0;
  for (let r = 0; r < t.length && rt(a); r++) {
    const s = t[r];
    ie(s) && (a = Lv(e, t[r], n));
  }
  return a;
}
function Lv(e, t, n) {
  let a;
  const r = t.split("-");
  do {
    const s = r.join("-");
    a = Vv(e, s, n), r.splice(-1, 1);
  } while (r.length && a === !0);
  return a;
}
function Vv(e, t, n) {
  let a = !1;
  if (!e.includes(t) && (a = !0, t)) {
    a = t[t.length - 1] !== "!";
    const r = t.replace(/!/g, "");
    e.push(r), (st(n) || je(n)) && n[r] && (a = n[r]);
  }
  return a;
}
const Mn = [];
Mn[
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
Mn[
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
Mn[
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
Mn[
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
Mn[
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
Mn[
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
Mn[
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
const Rv = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Mv(e) {
  return Rv.test(e);
}
function Fv(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Bv(e) {
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
function jv(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Mv(t) ? Fv(t) : "*" + t;
}
function Uv(e) {
  const t = [];
  let n = -1, a = 0, r = 0, s, o, l, u, c, d, f;
  const v = [];
  v[
    0
    /* Actions.APPEND */
  ] = () => {
    o === void 0 ? o = l : o += l;
  }, v[
    1
    /* Actions.PUSH */
  ] = () => {
    o !== void 0 && (t.push(o), o = void 0);
  }, v[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    v[
      0
      /* Actions.APPEND */
    ](), r++;
  }, v[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (r > 0)
      r--, a = 4, v[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (r = 0, o === void 0 || (o = jv(o), o === !1))
        return !1;
      v[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function y() {
    const I = e[n + 1];
    if (a === 5 && I === "'" || a === 6 && I === '"')
      return n++, l = "\\" + I, v[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; a !== null; )
    if (n++, s = e[n], !(s === "\\" && y())) {
      if (u = Bv(s), f = Mn[a], c = f[u] || f.l || 8, c === 8 || (a = c[0], c[1] !== void 0 && (d = v[c[1]], d && (l = s, d() === !1))))
        return;
      if (a === 7)
        return t;
    }
}
const li = /* @__PURE__ */ new Map();
function zv(e, t) {
  return Ue(e) ? e[t] : null;
}
function Wv(e, t) {
  if (!Ue(e))
    return null;
  let n = li.get(t);
  if (n || (n = Uv(t), n && li.set(t, n)), !n)
    return null;
  const a = n.length;
  let r = e, s = 0;
  for (; s < a; ) {
    const o = n[s];
    if (Ul.includes(o) && Jt(r))
      return null;
    const l = r[o];
    if (l === void 0 || Je(r))
      return null;
    r = l, s++;
  }
  return r;
}
const Rt = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7
}, Hv = 8, Zv = {
  [Rt.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [Rt.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [Rt.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [Rt.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [Rt.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [Rt.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [Rt.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function Xn(e, ...t) {
  return Hr(Zv[e], ...t);
}
const Gv = "11.1.12", Gr = -1, Tr = "en-US", Nr = "", ui = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function qv() {
  return {
    upper: (e, t) => t === "text" && ie(e) ? e.toUpperCase() : t === "vnode" && Ue(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && ie(e) ? e.toLowerCase() : t === "vnode" && Ue(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && ie(e) ? ui(e) : t === "vnode" && Ue(e) && "__v_isVNode" in e ? ui(e.children) : e
  };
}
let Wl;
function Yv(e) {
  Wl = e;
}
let Hl;
function Kv(e) {
  Hl = e;
}
let Zl;
function Xv(e) {
  Zl = e;
}
let Gl = null;
const Jv = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  Gl = e;
}, Qv = /* @__NO_SIDE_EFFECTS__ */ () => Gl;
let ql = null;
const ci = (e) => {
  ql = e;
}, eh = () => ql;
let di = 0;
function th(e = {}) {
  const t = Je(e.onWarn) ? e.onWarn : fn, n = ie(e.version) ? e.version : Gv, a = ie(e.locale) || Je(e.locale) ? e.locale : Tr, r = Je(a) ? Tr : a, s = st(e.fallbackLocale) || je(e.fallbackLocale) || ie(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : r, o = je(e.messages) ? e.messages : us(r), l = je(e.datetimeFormats) ? e.datetimeFormats : us(r), u = je(e.numberFormats) ? e.numberFormats : us(r), c = bt(ze(), e.modifiers, qv()), d = e.pluralRules || ze(), f = Je(e.missing) ? e.missing : null, v = rt(e.missingWarn) || Cr(e.missingWarn) ? e.missingWarn : !0, y = rt(e.fallbackWarn) || Cr(e.fallbackWarn) ? e.fallbackWarn : !0, I = !!e.fallbackFormat, S = !!e.unresolving, P = Je(e.postTranslation) ? e.postTranslation : null, w = je(e.processor) ? e.processor : null, x = rt(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, O = !!e.escapeParameter, E = Je(e.messageCompiler) ? e.messageCompiler : Wl;
  process.env.NODE_ENV !== "production" && Je(e.messageCompiler) && Tp(Xn(Rt.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const k = Je(e.messageResolver) ? e.messageResolver : Hl || zv, C = Je(e.localeFallbacker) ? e.localeFallbacker : Zl || Dv, _ = Ue(e.fallbackContext) ? e.fallbackContext : void 0, D = e, L = Ue(D.__datetimeFormatters) ? D.__datetimeFormatters : /* @__PURE__ */ new Map(), J = Ue(D.__numberFormatters) ? D.__numberFormatters : /* @__PURE__ */ new Map(), te = Ue(D.__meta) ? D.__meta : {};
  di++;
  const ne = {
    version: n,
    cid: di,
    locale: a,
    fallbackLocale: s,
    messages: o,
    modifiers: c,
    pluralRules: d,
    missing: f,
    missingWarn: v,
    fallbackWarn: y,
    fallbackFormat: I,
    unresolving: S,
    postTranslation: P,
    processor: w,
    warnHtmlMessage: x,
    escapeParameter: O,
    messageCompiler: E,
    messageResolver: k,
    localeFallbacker: C,
    fallbackContext: _,
    onWarn: t,
    __meta: te
  };
  return ne.datetimeFormats = l, ne.numberFormats = u, ne.__datetimeFormatters = L, ne.__numberFormatters = J, process.env.NODE_ENV !== "production" && (ne.__v_emitter = D.__v_emitter != null ? D.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && Nv(ne, n, te), ne;
}
const us = (e) => ({ [e]: ze() });
function qr(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function Yl(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function uo(e, t, n, a, r) {
  const { missing: s, onWarn: o } = e;
  if (process.env.NODE_ENV !== "production") {
    const l = e.__v_emitter;
    l && l.emit("missing", {
      locale: n,
      key: t,
      type: r,
      groupId: `${r}:${t}`
    });
  }
  if (s !== null) {
    const l = s(e, n, t, r);
    return ie(l) ? l : t;
  } else
    return process.env.NODE_ENV !== "production" && Yl(a, t) && o(Xn(Rt.NOT_FOUND_KEY, { key: t, locale: n })), t;
}
function $a(e, t, n) {
  const a = e;
  a.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Kl(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function nh(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let a = n + 1; a < t.length; a++)
    if (Kl(e, t[a]))
      return !0;
  return !1;
}
const fi = typeof Intl < "u", Xl = {
  dateTimeFormat: fi && typeof Intl.DateTimeFormat < "u",
  numberFormat: fi && typeof Intl.NumberFormat < "u"
};
function mi(e, ...t) {
  const { datetimeFormats: n, unresolving: a, fallbackLocale: r, onWarn: s, localeFallbacker: o } = e, { __datetimeFormatters: l } = e;
  if (process.env.NODE_ENV !== "production" && !Xl.dateTimeFormat)
    return s(Xn(Rt.CANNOT_FORMAT_DATE)), Nr;
  const [u, c, d, f] = Es(...t), v = rt(d.missingWarn) ? d.missingWarn : e.missingWarn, y = rt(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn, I = !!d.part, S = lo(e, d), P = o(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    r,
    S
  );
  if (!ie(u) || u === "")
    return new Intl.DateTimeFormat(S, f).format(c);
  let w = {}, x, O = null, E = S, k = null;
  const C = "datetime format";
  for (let L = 0; L < P.length; L++) {
    if (x = k = P[L], process.env.NODE_ENV !== "production" && S !== x && qr(y, u) && s(Xn(Rt.FALLBACK_TO_DATE_FORMAT, {
      key: u,
      target: x
    })), process.env.NODE_ENV !== "production" && S !== x) {
      const J = e.__v_emitter;
      J && J.emit("fallback", {
        type: C,
        key: u,
        from: E,
        to: k,
        groupId: `${C}:${u}`
      });
    }
    if (w = n[x] || {}, O = w[u], je(O))
      break;
    uo(e, u, x, v, C), E = k;
  }
  if (!je(O) || !ie(x))
    return a ? Gr : u;
  let _ = `${x}__${u}`;
  Zr(f) || (_ = `${_}__${JSON.stringify(f)}`);
  let D = l.get(_);
  return D || (D = new Intl.DateTimeFormat(x, bt({}, O, f)), l.set(_, D)), I ? D.formatToParts(c) : D.format(c);
}
const Jl = [
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
function Es(...e) {
  const [t, n, a, r] = e, s = ze();
  let o = ze(), l;
  if (ie(t)) {
    const u = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!u)
      throw wn(Ct.INVALID_ISO_DATE_ARGUMENT);
    const c = u[3] ? u[3].trim().startsWith("T") ? `${u[1].trim()}${u[3].trim()}` : `${u[1].trim()}T${u[3].trim()}` : u[1].trim();
    l = new Date(c);
    try {
      l.toISOString();
    } catch {
      throw wn(Ct.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Pp(t)) {
    if (isNaN(t.getTime()))
      throw wn(Ct.INVALID_DATE_ARGUMENT);
    l = t;
  } else if (yt(t))
    l = t;
  else
    throw wn(Ct.INVALID_ARGUMENT);
  return ie(n) ? s.key = n : je(n) && Object.keys(n).forEach((u) => {
    Jl.includes(u) ? o[u] = n[u] : s[u] = n[u];
  }), ie(a) ? s.locale = a : je(a) && (o = a), je(r) && (o = r), [s.key || "", l, s, o];
}
function pi(e, t, n) {
  const a = e;
  for (const r in n) {
    const s = `${t}__${r}`;
    a.__datetimeFormatters.has(s) && a.__datetimeFormatters.delete(s);
  }
}
function vi(e, ...t) {
  const { numberFormats: n, unresolving: a, fallbackLocale: r, onWarn: s, localeFallbacker: o } = e, { __numberFormatters: l } = e;
  if (process.env.NODE_ENV !== "production" && !Xl.numberFormat)
    return s(Xn(Rt.CANNOT_FORMAT_NUMBER)), Nr;
  const [u, c, d, f] = Os(...t), v = rt(d.missingWarn) ? d.missingWarn : e.missingWarn, y = rt(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn, I = !!d.part, S = lo(e, d), P = o(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    r,
    S
  );
  if (!ie(u) || u === "")
    return new Intl.NumberFormat(S, f).format(c);
  let w = {}, x, O = null, E = S, k = null;
  const C = "number format";
  for (let L = 0; L < P.length; L++) {
    if (x = k = P[L], process.env.NODE_ENV !== "production" && S !== x && qr(y, u) && s(Xn(Rt.FALLBACK_TO_NUMBER_FORMAT, {
      key: u,
      target: x
    })), process.env.NODE_ENV !== "production" && S !== x) {
      const J = e.__v_emitter;
      J && J.emit("fallback", {
        type: C,
        key: u,
        from: E,
        to: k,
        groupId: `${C}:${u}`
      });
    }
    if (w = n[x] || {}, O = w[u], je(O))
      break;
    uo(e, u, x, v, C), E = k;
  }
  if (!je(O) || !ie(x))
    return a ? Gr : u;
  let _ = `${x}__${u}`;
  Zr(f) || (_ = `${_}__${JSON.stringify(f)}`);
  let D = l.get(_);
  return D || (D = new Intl.NumberFormat(x, bt({}, O, f)), l.set(_, D)), I ? D.formatToParts(c) : D.format(c);
}
const Ql = [
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
function Os(...e) {
  const [t, n, a, r] = e, s = ze();
  let o = ze();
  if (!yt(t))
    throw wn(Ct.INVALID_ARGUMENT);
  const l = t;
  return ie(n) ? s.key = n : je(n) && Object.keys(n).forEach((u) => {
    Ql.includes(u) ? o[u] = n[u] : s[u] = n[u];
  }), ie(a) ? s.locale = a : je(a) && (o = a), je(r) && (o = r), [s.key || "", l, s, o];
}
function hi(e, t, n) {
  const a = e;
  for (const r in n) {
    const s = `${t}__${r}`;
    a.__numberFormatters.has(s) && a.__numberFormatters.delete(s);
  }
}
const ah = (e) => e, rh = (e) => "", sh = "text", oh = (e) => e.length === 0 ? "" : so(e), ih = Rp;
function gi(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function lh(e) {
  const t = yt(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (yt(e.named.count) || yt(e.named.n)) ? yt(e.named.count) ? e.named.count : yt(e.named.n) ? e.named.n : t : t;
}
function uh(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function ch(e = {}) {
  const t = e.locale, n = lh(e), a = Ue(e.pluralRules) && ie(t) && Je(e.pluralRules[t]) ? e.pluralRules[t] : gi, r = Ue(e.pluralRules) && ie(t) && Je(e.pluralRules[t]) ? gi : void 0, s = (w) => w[a(n, w.length, r)], o = e.list || [], l = (w) => o[w], u = e.named || ze();
  yt(e.pluralIndex) && uh(n, u);
  const c = (w) => u[w];
  function d(w, x) {
    const O = Je(e.messages) ? e.messages(w, !!x) : Ue(e.messages) ? e.messages[w] : !1;
    return O || (e.parent ? e.parent.message(w) : rh);
  }
  const f = (w) => e.modifiers ? e.modifiers[w] : ah, v = je(e.processor) && Je(e.processor.normalize) ? e.processor.normalize : oh, y = je(e.processor) && Je(e.processor.interpolate) ? e.processor.interpolate : ih, I = je(e.processor) && ie(e.processor.type) ? e.processor.type : sh, P = {
    list: l,
    named: c,
    plural: s,
    linked: (w, ...x) => {
      const [O, E] = x;
      let k = "text", C = "";
      x.length === 1 ? Ue(O) ? (C = O.modifier || C, k = O.type || k) : ie(O) && (C = O || C) : x.length === 2 && (ie(O) && (C = O || C), ie(E) && (k = E || k));
      const _ = d(w, !0)(P), D = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        k === "vnode" && st(_) && C ? _[0] : _
      );
      return C ? f(C)(D, k) : D;
    },
    message: d,
    type: I,
    interpolate: y,
    normalize: v,
    values: bt(ze(), o, u)
  };
  return P;
}
const yi = () => "", Ht = (e) => Je(e);
function bi(e, ...t) {
  const { fallbackFormat: n, postTranslation: a, unresolving: r, messageCompiler: s, fallbackLocale: o, messages: l } = e, [u, c] = Ss(...t), d = rt(c.missingWarn) ? c.missingWarn : e.missingWarn, f = rt(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, v = rt(c.escapeParameter) ? c.escapeParameter : e.escapeParameter, y = !!c.resolvedMessage, I = ie(c.default) || rt(c.default) ? rt(c.default) ? s ? u : () => u : c.default : n ? s ? u : () => u : null, S = n || I != null && (ie(I) || Je(I)), P = lo(e, c);
  v && dh(c);
  let [w, x, O] = y ? [
    u,
    P,
    l[P] || ze()
  ] : eu(e, u, P, o, f, d), E = w, k = u;
  if (!y && !(ie(E) || Jt(E) || Ht(E)) && S && (E = I, k = E), !y && (!(ie(E) || Jt(E) || Ht(E)) || !ie(x)))
    return r ? Gr : u;
  if (process.env.NODE_ENV !== "production" && ie(E) && e.messageCompiler == null)
    return fn(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${u}'.`), u;
  let C = !1;
  const _ = () => {
    C = !0;
  }, D = Ht(E) ? E : tu(e, u, x, E, k, _);
  if (C)
    return E;
  const L = vh(e, x, O, c), J = ch(L), te = fh(e, D, J);
  let ne = a ? a(te, u) : te;
  if (v && ie(ne) && (ne = Dp(ne)), process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const fe = {
      timestamp: Date.now(),
      key: ie(u) ? u : Ht(E) ? E.key : "",
      locale: x || (Ht(E) ? E.locale : ""),
      format: ie(E) ? E : Ht(E) ? E.source : "",
      message: ne
    };
    fe.meta = bt({}, e.__meta, /* @__PURE__ */ Qv() || {}), Av(fe);
  }
  return ne;
}
function dh(e) {
  st(e.list) ? e.list = e.list.map((t) => ie(t) ? Qo(t) : t) : Ue(e.named) && Object.keys(e.named).forEach((t) => {
    ie(e.named[t]) && (e.named[t] = Qo(e.named[t]));
  });
}
function eu(e, t, n, a, r, s) {
  const { messages: o, onWarn: l, messageResolver: u, localeFallbacker: c } = e, d = c(e, a, n);
  let f = ze(), v, y = null, I = n, S = null;
  const P = "translate";
  for (let w = 0; w < d.length; w++) {
    if (v = S = d[w], process.env.NODE_ENV !== "production" && n !== v && !Kl(n, v) && qr(r, t) && l(Xn(Rt.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: v
    })), process.env.NODE_ENV !== "production" && n !== v) {
      const k = e.__v_emitter;
      k && k.emit("fallback", {
        type: P,
        key: t,
        from: I,
        to: S,
        groupId: `${P}:${t}`
      });
    }
    f = o[v] || ze();
    let x = null, O, E;
    if (process.env.NODE_ENV !== "production" && xn && (x = window.performance.now(), O = "intlify-message-resolve-start", E = "intlify-message-resolve-end", jt && jt(O)), (y = u(f, t)) === null && (y = f[t]), process.env.NODE_ENV !== "production" && xn) {
      const k = window.performance.now(), C = e.__v_emitter;
      C && x && y && C.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: y,
        time: k - x,
        groupId: `${P}:${t}`
      }), O && E && jt && Kn && (jt(E), Kn("intlify message resolve", O, E));
    }
    if (ie(y) || Jt(y) || Ht(y))
      break;
    if (!nh(v, d)) {
      const k = uo(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        v,
        s,
        P
      );
      k !== t && (y = k);
    }
    I = S;
  }
  return [y, v, f];
}
function tu(e, t, n, a, r, s) {
  const { messageCompiler: o, warnHtmlMessage: l } = e;
  if (Ht(a)) {
    const v = a;
    return v.locale = v.locale || n, v.key = v.key || t, v;
  }
  if (o == null) {
    const v = (() => a);
    return v.locale = n, v.key = t, v;
  }
  let u = null, c, d;
  process.env.NODE_ENV !== "production" && xn && (u = window.performance.now(), c = "intlify-message-compilation-start", d = "intlify-message-compilation-end", jt && jt(c));
  const f = o(a, mh(e, n, r, a, l, s));
  if (process.env.NODE_ENV !== "production" && xn) {
    const v = window.performance.now(), y = e.__v_emitter;
    y && u && y.emit("message-compilation", {
      type: "message-compilation",
      message: a,
      time: v - u,
      groupId: `translate:${t}`
    }), c && d && jt && Kn && (jt(d), Kn("intlify message compilation", c, d));
  }
  return f.locale = n, f.key = t, f.source = a, f;
}
function fh(e, t, n) {
  let a = null, r, s;
  process.env.NODE_ENV !== "production" && xn && (a = window.performance.now(), r = "intlify-message-evaluation-start", s = "intlify-message-evaluation-end", jt && jt(r));
  const o = t(n);
  if (process.env.NODE_ENV !== "production" && xn) {
    const l = window.performance.now(), u = e.__v_emitter;
    u && a && u.emit("message-evaluation", {
      type: "message-evaluation",
      value: o,
      time: l - a,
      groupId: `translate:${t.key}`
    }), r && s && jt && Kn && (jt(s), Kn("intlify message evaluation", r, s));
  }
  return o;
}
function Ss(...e) {
  const [t, n, a] = e, r = ze();
  if (!ie(t) && !yt(t) && !Ht(t) && !Jt(t))
    throw wn(Ct.INVALID_ARGUMENT);
  const s = yt(t) ? String(t) : (Ht(t), t);
  return yt(n) ? r.plural = n : ie(n) ? r.default = n : je(n) && !Zr(n) ? r.named = n : st(n) && (r.list = n), yt(a) ? r.plural = a : ie(a) ? r.default = a : je(a) && bt(r, a), [s, r];
}
function mh(e, t, n, a, r, s) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: r,
    onError: (o) => {
      if (s && s(o), process.env.NODE_ENV !== "production") {
        const l = ph(a), u = `Message compilation error: ${o.message}`, c = o.location && l && Mp(l, o.location.start.offset, o.location.end.offset), d = e.__v_emitter;
        d && l && d.emit("compile-error", {
          message: l,
          error: o.message,
          start: o.location && o.location.start.offset,
          end: o.location && o.location.end.offset,
          groupId: `translate:${n}`
        }), console.error(c ? `${u}
${c}` : u);
      } else
        throw o;
    },
    onCacheKey: (o) => Ap(t, n, o)
  };
}
function ph(e) {
  if (ie(e))
    return e;
  if (e.loc && e.loc.source)
    return e.loc.source;
}
function vh(e, t, n, a) {
  const { modifiers: r, pluralRules: s, messageResolver: o, fallbackLocale: l, fallbackWarn: u, missingWarn: c, fallbackContext: d } = e, v = {
    locale: t,
    modifiers: r,
    pluralRules: s,
    messages: (y, I) => {
      let S = o(n, y);
      if (S == null && (d || I)) {
        const [, , P] = eu(
          d || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          y,
          t,
          l,
          u,
          c
        );
        S = o(P, y);
      }
      if (ie(S) || Jt(S)) {
        let P = !1;
        const x = tu(e, y, t, S, y, () => {
          P = !0;
        });
        return P ? yi : x;
      } else return Ht(S) ? S : yi;
    }
  };
  return e.processor && (v.processor = e.processor), a.list && (v.list = a.list), a.named && (v.named = a.named), yt(a.plural) && (v.pluralIndex = a.plural), v;
}
vv();
/*!
  * vue-i18n v11.1.12
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const hh = "11.1.12";
function gh() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (zn().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (zn().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (zn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (zn().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const wt = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Pv,
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
function za(e, ...t) {
  return Oa(e, null, process.env.NODE_ENV !== "production" ? { messages: yh, args: t } : void 0);
}
const yh = {
  [wt.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
  [wt.INVALID_ARGUMENT]: "Invalid argument",
  [wt.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
  [wt.NOT_INSTALLED]: "Need to install with `app.use` function",
  [wt.UNEXPECTED_ERROR]: "Unexpected error",
  [wt.REQUIRED_VALUE]: "Required in value: {0}",
  [wt.INVALID_VALUE]: "Invalid value",
  [wt.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
  [wt.NOT_INSTALLED_WITH_PROVIDE]: "Need to install with `provide` function",
  [wt.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
  [wt.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}, Cs = /* @__PURE__ */ On("__translateVNode"), Ts = /* @__PURE__ */ On("__datetimeParts"), Ns = /* @__PURE__ */ On("__numberParts"), As = /* @__PURE__ */ On("__enableEmitter"), Is = /* @__PURE__ */ On("__disableEmitter"), bh = On("__setPluralRules"), nu = /* @__PURE__ */ On("__injectWithOption"), Ps = /* @__PURE__ */ On("__dispose"), rn = {
  FALLBACK_TO_ROOT: Hv,
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
}, _h = {
  [rn.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
  [rn.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
  [rn.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
  /**
   * @deprecated will be removed at vue-i18n v12
   */
  [rn.DEPRECATE_LEGACY_MODE]: `Legacy API mode has been deprecated in v11. Use Composition API mode instead.
About how to use the Composition API mode, see https://vue-i18n.intlify.dev/guide/advanced/composition.html`,
  /**
   * @deprecated will be removed at vue-i18n v12
   */
  [rn.DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE]: "'v-t' has been deprecated in v11. Use translate APIs ('t' or '$t') instead.",
  [rn.DUPLICATE_USE_I18N_CALLING]: "Duplicate `useI18n` calling by local scope. Please don't call it on local scope, due to it does not work properly in component."
};
function Ar(e, ...t) {
  return Hr(_h[e], ...t);
}
function Wa(e) {
  if (!Ue(e) || Jt(e))
    return e;
  for (const t in e)
    if (Kt(e, t))
      if (!t.includes("."))
        Ue(e[t]) && Wa(e[t]);
      else {
        const n = t.split("."), a = n.length - 1;
        let r = e, s = !1;
        for (let o = 0; o < a; o++) {
          if (n[o] === "__proto__")
            throw new Error(`unsafe key: ${n[o]}`);
          if (n[o] in r || (r[n[o]] = ze()), !Ue(r[n[o]])) {
            process.env.NODE_ENV !== "production" && fn(Ar(rn.IGNORE_OBJ_FLATTEN, {
              key: n[o]
            })), s = !0;
            break;
          }
          r = r[n[o]];
        }
        if (s || (Jt(r) ? Ul.includes(n[a]) || delete e[t] : (r[n[a]] = e[t], delete e[t])), !Jt(r)) {
          const o = r[n[a]];
          Ue(o) && Wa(o);
        }
      }
  return e;
}
function au(e, t) {
  const { messages: n, __i18n: a, messageResolver: r, flatJson: s } = t, o = je(n) ? n : st(a) ? ze() : { [e]: ze() };
  if (st(a) && a.forEach((l) => {
    if ("locale" in l && "resource" in l) {
      const { locale: u, resource: c } = l;
      u ? (o[u] = o[u] || ze(), kr(c, o[u])) : kr(c, o);
    } else
      ie(l) && kr(JSON.parse(l), o);
  }), r == null && s)
    for (const l in o)
      Kt(o, l) && Wa(o[l]);
  return o;
}
function ru(e) {
  return e.type;
}
function wh(e, t, n) {
  let a = Ue(t.messages) ? t.messages : ze();
  "__i18nGlobal" in n && (a = au(e.locale.value, {
    messages: a,
    __i18n: n.__i18nGlobal
  }));
  const r = Object.keys(a);
  r.length && r.forEach((s) => {
    e.mergeLocaleMessage(s, a[s]);
  });
  {
    if (Ue(t.datetimeFormats)) {
      const s = Object.keys(t.datetimeFormats);
      s.length && s.forEach((o) => {
        e.mergeDateTimeFormat(o, t.datetimeFormats[o]);
      });
    }
    if (Ue(t.numberFormats)) {
      const s = Object.keys(t.numberFormats);
      s.length && s.forEach((o) => {
        e.mergeNumberFormat(o, t.numberFormats[o]);
      });
    }
  }
}
function _i(e) {
  return b(pc, null, e, 0);
}
const wi = "__INTLIFY_META__", ki = () => [], kh = () => !1;
let xi = 0;
function Ei(e) {
  return ((t, n, a, r) => e(n, a, Tt() || void 0, r));
}
const xh = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = Tt();
  let t = null;
  return e && (t = ru(e)[wi]) ? { [wi]: t } : null;
};
function Eh(e = {}) {
  const { __root: t, __injectWithOption: n } = e, a = t === void 0, r = e.flatJson, s = xn ? pe : Ut;
  let o = rt(e.inheritLocale) ? e.inheritLocale : !0;
  const l = s(
    // prettier-ignore
    t && o ? t.locale.value : ie(e.locale) ? e.locale : Tr
  ), u = s(
    // prettier-ignore
    t && o ? t.fallbackLocale.value : ie(e.fallbackLocale) || st(e.fallbackLocale) || je(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : l.value
  ), c = s(au(l.value, e)), d = s(je(e.datetimeFormats) ? e.datetimeFormats : { [l.value]: {} }), f = s(je(e.numberFormats) ? e.numberFormats : { [l.value]: {} });
  let v = t ? t.missingWarn : rt(e.missingWarn) || Cr(e.missingWarn) ? e.missingWarn : !0, y = t ? t.fallbackWarn : rt(e.fallbackWarn) || Cr(e.fallbackWarn) ? e.fallbackWarn : !0, I = t ? t.fallbackRoot : rt(e.fallbackRoot) ? e.fallbackRoot : !0, S = !!e.fallbackFormat, P = Je(e.missing) ? e.missing : null, w = Je(e.missing) ? Ei(e.missing) : null, x = Je(e.postTranslation) ? e.postTranslation : null, O = t ? t.warnHtmlMessage : rt(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, E = !!e.escapeParameter;
  const k = t ? t.modifiers : je(e.modifiers) ? e.modifiers : {};
  let C = e.pluralRules || t && t.pluralRules, _;
  _ = (() => {
    a && ci(null);
    const V = {
      version: hh,
      locale: l.value,
      fallbackLocale: u.value,
      messages: c.value,
      modifiers: k,
      pluralRules: C,
      missing: w === null ? void 0 : w,
      missingWarn: v,
      fallbackWarn: y,
      fallbackFormat: S,
      unresolving: !0,
      postTranslation: x === null ? void 0 : x,
      warnHtmlMessage: O,
      escapeParameter: E,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    V.datetimeFormats = d.value, V.numberFormats = f.value, V.__datetimeFormatters = je(_) ? _.__datetimeFormatters : void 0, V.__numberFormatters = je(_) ? _.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (V.__v_emitter = je(_) ? _.__v_emitter : void 0);
    const z = th(V);
    return a && ci(z), z;
  })(), $a(_, l.value, u.value);
  function L() {
    return [
      l.value,
      u.value,
      c.value,
      d.value,
      f.value
    ];
  }
  const J = U({
    get: () => l.value,
    set: (V) => {
      _.locale = V, l.value = V;
    }
  }), te = U({
    get: () => u.value,
    set: (V) => {
      _.fallbackLocale = V, u.value = V, $a(_, l.value, V);
    }
  }), ne = U(() => c.value), fe = /* @__PURE__ */ U(() => d.value), X = /* @__PURE__ */ U(() => f.value);
  function ae() {
    return Je(x) ? x : null;
  }
  function Y(V) {
    x = V, _.postTranslation = V;
  }
  function W() {
    return P;
  }
  function q(V) {
    V !== null && (w = Ei(V)), P = V, _.missing = w;
  }
  function Ce(V, z) {
    return V !== "translate" || !z.resolvedMessage;
  }
  const Me = (V, z, De, We, Bt, tn) => {
    L();
    let T;
    try {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, a || (_.fallbackContext = t ? eh() : void 0), T = V(_);
    } finally {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, a || (_.fallbackContext = void 0);
    }
    if (De !== "translate exists" && // for not `te` (e.g `t`)
    yt(T) && T === Gr || De === "translate exists" && !T) {
      const [N, B] = z();
      if (process.env.NODE_ENV !== "production" && t && ie(N) && Ce(De, B) && (I && (qr(y, N) || Yl(v, N)) && fn(Ar(rn.FALLBACK_TO_ROOT, {
        key: N,
        type: De
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: Q } = _;
        Q && I && Q.emit("fallback", {
          type: De,
          key: N,
          to: "global",
          groupId: `${De}:${N}`
        });
      }
      return t && I ? We(t) : Bt(N);
    } else {
      if (tn(T))
        return T;
      throw za(wt.UNEXPECTED_RETURN_TYPE);
    }
  };
  function ot(...V) {
    return Me((z) => Reflect.apply(bi, null, [z, ...V]), () => Ss(...V), "translate", (z) => Reflect.apply(z.t, z, [...V]), (z) => z, (z) => ie(z));
  }
  function $t(...V) {
    const [z, De, We] = V;
    if (We && !Ue(We))
      throw za(wt.INVALID_ARGUMENT);
    return ot(z, De, bt({ resolvedMessage: !0 }, We || {}));
  }
  function Ye(...V) {
    return Me((z) => Reflect.apply(mi, null, [z, ...V]), () => Es(...V), "datetime format", (z) => Reflect.apply(z.d, z, [...V]), () => Nr, (z) => ie(z) || st(z));
  }
  function Le(...V) {
    return Me((z) => Reflect.apply(vi, null, [z, ...V]), () => Os(...V), "number format", (z) => Reflect.apply(z.n, z, [...V]), () => Nr, (z) => ie(z) || st(z));
  }
  function At(V) {
    return V.map((z) => ie(z) || yt(z) || rt(z) ? _i(String(z)) : z);
  }
  const ue = {
    normalize: At,
    interpolate: (V) => V,
    type: "vnode"
  };
  function Ie(...V) {
    return Me((z) => {
      let De;
      const We = z;
      try {
        We.processor = ue, De = Reflect.apply(bi, null, [We, ...V]);
      } finally {
        We.processor = null;
      }
      return De;
    }, () => Ss(...V), "translate", (z) => z[Cs](...V), (z) => [_i(z)], (z) => st(z));
  }
  function Pe(...V) {
    return Me((z) => Reflect.apply(vi, null, [z, ...V]), () => Os(...V), "number format", (z) => z[Ns](...V), ki, (z) => ie(z) || st(z));
  }
  function at(...V) {
    return Me((z) => Reflect.apply(mi, null, [z, ...V]), () => Es(...V), "datetime format", (z) => z[Ts](...V), ki, (z) => ie(z) || st(z));
  }
  function it(V) {
    C = V, _.pluralRules = C;
  }
  function Ke(V, z) {
    return Me(() => {
      if (!V)
        return !1;
      const De = ie(z) ? z : l.value, We = qt(De), Bt = _.messageResolver(We, V);
      return Jt(Bt) || Ht(Bt) || ie(Bt);
    }, () => [V], "translate exists", (De) => Reflect.apply(De.te, De, [V, z]), kh, (De) => rt(De));
  }
  function Ft(V) {
    let z = null;
    const De = zl(_, u.value, l.value);
    for (let We = 0; We < De.length; We++) {
      const Bt = c.value[De[We]] || {}, tn = _.messageResolver(Bt, V);
      if (tn != null) {
        z = tn;
        break;
      }
    }
    return z;
  }
  function vn(V) {
    const z = Ft(V);
    return z ?? (t ? t.tm(V) || {} : {});
  }
  function qt(V) {
    return c.value[V] || {};
  }
  function Yt(V, z) {
    if (r) {
      const De = { [V]: z };
      for (const We in De)
        Kt(De, We) && Wa(De[We]);
      z = De[V];
    }
    c.value[V] = z, _.messages = c.value;
  }
  function Sn(V, z) {
    c.value[V] = c.value[V] || {};
    const De = { [V]: z };
    if (r)
      for (const We in De)
        Kt(De, We) && Wa(De[We]);
    z = De[V], kr(z, c.value[V]), _.messages = c.value;
  }
  function h(V) {
    return d.value[V] || {};
  }
  function g(V, z) {
    d.value[V] = z, _.datetimeFormats = d.value, pi(_, V, z);
  }
  function M(V, z) {
    d.value[V] = bt(d.value[V] || {}, z), _.datetimeFormats = d.value, pi(_, V, z);
  }
  function K(V) {
    return f.value[V] || {};
  }
  function Se(V, z) {
    f.value[V] = z, _.numberFormats = f.value, hi(_, V, z);
  }
  function Ne(V, z) {
    f.value[V] = bt(f.value[V] || {}, z), _.numberFormats = f.value, hi(_, V, z);
  }
  xi++, t && xn && (Fe(t.locale, (V) => {
    o && (l.value = V, _.locale = V, $a(_, l.value, u.value));
  }), Fe(t.fallbackLocale, (V) => {
    o && (u.value = V, _.fallbackLocale = V, $a(_, l.value, u.value));
  }));
  const xe = {
    id: xi,
    locale: J,
    fallbackLocale: te,
    get inheritLocale() {
      return o;
    },
    set inheritLocale(V) {
      o = V, V && t && (l.value = t.locale.value, u.value = t.fallbackLocale.value, $a(_, l.value, u.value));
    },
    get availableLocales() {
      return Object.keys(c.value).sort();
    },
    messages: ne,
    get modifiers() {
      return k;
    },
    get pluralRules() {
      return C || {};
    },
    get isGlobal() {
      return a;
    },
    get missingWarn() {
      return v;
    },
    set missingWarn(V) {
      v = V, _.missingWarn = v;
    },
    get fallbackWarn() {
      return y;
    },
    set fallbackWarn(V) {
      y = V, _.fallbackWarn = y;
    },
    get fallbackRoot() {
      return I;
    },
    set fallbackRoot(V) {
      I = V;
    },
    get fallbackFormat() {
      return S;
    },
    set fallbackFormat(V) {
      S = V, _.fallbackFormat = S;
    },
    get warnHtmlMessage() {
      return O;
    },
    set warnHtmlMessage(V) {
      O = V, _.warnHtmlMessage = V;
    },
    get escapeParameter() {
      return E;
    },
    set escapeParameter(V) {
      E = V, _.escapeParameter = V;
    },
    t: ot,
    getLocaleMessage: qt,
    setLocaleMessage: Yt,
    mergeLocaleMessage: Sn,
    getPostTranslationHandler: ae,
    setPostTranslationHandler: Y,
    getMissingHandler: W,
    setMissingHandler: q,
    [bh]: it
  };
  return xe.datetimeFormats = fe, xe.numberFormats = X, xe.rt = $t, xe.te = Ke, xe.tm = vn, xe.d = Ye, xe.n = Le, xe.getDateTimeFormat = h, xe.setDateTimeFormat = g, xe.mergeDateTimeFormat = M, xe.getNumberFormat = K, xe.setNumberFormat = Se, xe.mergeNumberFormat = Ne, xe[nu] = n, xe[Cs] = Ie, xe[Ts] = at, xe[Ns] = Pe, process.env.NODE_ENV !== "production" && (xe[As] = (V) => {
    _.__v_emitter = V;
  }, xe[Is] = () => {
    _.__v_emitter = void 0;
  }), xe;
}
function Oi(e, t) {
}
const co = {
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
function Oh({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((a, r) => [
    ...a,
    // prettier-ignore
    ...r.type === Re ? r.children : [r]
  ], []) : t.reduce((n, a) => {
    const r = e[a];
    return r && (n[a] = r()), n;
  }, ze());
}
function su() {
  return Re;
}
bt({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => yt(e) || !isNaN(e)
  }
}, co);
function Sh(e) {
  return st(e) && !ie(e[0]);
}
function ou(e, t, n, a) {
  const { slots: r, attrs: s } = t;
  return () => {
    const o = { part: !0 };
    let l = ze();
    e.locale && (o.locale = e.locale), ie(e.format) ? o.key = e.format : Ue(e.format) && (ie(e.format.key) && (o.key = e.format.key), l = Object.keys(e.format).reduce((v, y) => n.includes(y) ? bt(ze(), v, { [y]: e.format[y] }) : v, ze()));
    const u = a(e.value, o, l);
    let c = [o.key];
    st(u) ? c = u.map((v, y) => {
      const I = r[v.type], S = I ? I({ [v.type]: v.value, index: y, parts: u }) : [v.value];
      return Sh(S) && (S[0].key = `${v.type}-${y}`), S;
    }) : ie(u) && (c = [u]);
    const d = bt(ze(), s), f = ie(e.tag) || Ue(e.tag) ? e.tag : su();
    return un(f, d, c);
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
}, co);
const Ch = /* @__PURE__ */ On("global-vue-i18n");
function aa(e = {}) {
  const t = Tt();
  if (t == null)
    throw za(wt.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw za(wt.NOT_INSTALLED);
  const n = Th(t), a = Ah(n), r = ru(t), s = Nh(e, r);
  if (s === "global")
    return wh(a, e, r), a;
  if (s === "parent") {
    let u = Ih(n, t, e.__useComponent);
    return u == null && (process.env.NODE_ENV !== "production" && fn(Ar(rn.NOT_FOUND_PARENT_SCOPE)), u = a), u;
  }
  const o = n;
  let l = o.__getInstance(t);
  if (l == null) {
    const u = bt({}, e);
    "__i18n" in r && (u.__i18n = r.__i18n), a && (u.__root = a), l = Eh(u), o.__composerExtend && (l[Ps] = o.__composerExtend(l)), $h(o, t, l), o.__setInstance(t, l);
  } else
    process.env.NODE_ENV !== "production" && s === "local" && fn(Ar(rn.DUPLICATE_USE_I18N_CALLING));
  return l;
}
function Th(e) {
  const t = dn(e.isCE ? Ch : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw za(e.isCE ? wt.NOT_INSTALLED_WITH_PROVIDE : wt.UNEXPECTED_ERROR);
  return t;
}
function Nh(e, t) {
  return Zr(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Ah(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function Ih(e, t, n = !1) {
  let a = null;
  const r = t.root;
  let s = Ph(t, n);
  for (; s != null; ) {
    const o = e;
    if (e.mode === "composition")
      a = o.__getInstance(s);
    else if (__VUE_I18N_LEGACY_API__) {
      const l = o.__getInstance(s);
      l != null && (a = l.__composer, n && a && !a[nu] && (a = null));
    }
    if (a != null || r === s)
      break;
    s = s.parent;
  }
  return a;
}
function Ph(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function $h(e, t, n) {
  let a = null;
  Vn(() => {
    if (process.env.NODE_ENV !== "production" && t.vnode.el) {
      t.vnode.el.__VUE_I18N__ = n, a = Fp();
      const r = n;
      r[As] && r[As](a), a.on("*", Oi);
    }
  }, t), Ur(() => {
    const r = n;
    process.env.NODE_ENV !== "production" && t.vnode.el && t.vnode.el.__VUE_I18N__ && (a && a.off("*", Oi), r[Is] && r[Is](), delete t.vnode.el.__VUE_I18N__), e.__deleteInstance(t);
    const s = r[Ps];
    s && (s(), delete r[Ps]);
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
}, co);
gh();
Yv(Cv);
Kv(Wv);
Xv(zl);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = zn();
  e.__INTLIFY__ = !0, Tv(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
const Dh = /* @__PURE__ */ $({
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
    const n = e, a = t, r = he(n, "class"), s = qe(r, a);
    return (o, l) => (p(), A(i(Pc), G({ "data-slot": "pagination" }, i(s), {
      class: i(H)("mx-auto flex w-full justify-center", n.class)
    }), {
      default: m((u) => [
        R(o.$slots, "default", It(Mt(u)))
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Lh = /* @__PURE__ */ $({
  __name: "PaginationContent",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = he(t, "class");
    return (a, r) => (p(), A(i($c), G({ "data-slot": "pagination-content" }, i(n), {
      class: i(H)("flex flex-row items-center gap-1", t.class)
    }), {
      default: m((s) => [
        R(a.$slots, "default", It(Mt(s)))
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Vh = /* @__PURE__ */ $({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, n = he(t, "class", "size"), a = et(n);
    return (r, s) => (p(), A(i(Dc), G({
      "data-slot": "pagination-first",
      class: i(H)(i(en)({ variant: "outline", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, i(a)), {
      default: m(() => [
        R(r.$slots, "default", {}, () => [
          b(i(fl), { class: "size-4" }),
          s[0] || (s[0] = oe("span", { class: "hidden sm:block" }, "First", -1))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Rh = /* @__PURE__ */ $({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, n = he(t, "class", "size"), a = et(n);
    return (r, s) => (p(), A(i(Lc), G({
      "data-slot": "pagination-last",
      class: i(H)(i(en)({ variant: "outline", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, i(a)), {
      default: m(() => [
        R(r.$slots, "default", {}, () => [
          s[0] || (s[0] = oe("span", { class: "hidden sm:block" }, "Last", -1)),
          b(i(ml), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Mh = /* @__PURE__ */ $({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, n = he(t, "class", "size"), a = et(n);
    return (r, s) => (p(), A(i(Vc), G({
      "data-slot": "pagination-next",
      class: i(H)(i(en)({ variant: "outline", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, i(a)), {
      default: m(() => [
        R(r.$slots, "default", {}, () => [
          s[0] || (s[0] = oe("span", { class: "hidden sm:block" }, "Next", -1)),
          b(i(Zn))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Fh = /* @__PURE__ */ $({
  __name: "PaginationPrevious",
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(e) {
    const t = e, n = he(t, "class", "size"), a = et(n);
    return (r, s) => (p(), A(i(Rc), G({
      "data-slot": "pagination-previous",
      class: i(H)(i(en)({ variant: "outline", size: e.size }), "gap-1 px-2.5 sm:pr-2.5", t.class)
    }, i(a)), {
      default: m(() => [
        R(r.$slots, "default", {}, () => [
          b(i(Xs)),
          s[0] || (s[0] = oe("span", { class: "hidden sm:block" }, "Previous", -1))
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), iu = /* @__PURE__ */ $({
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
    const r = qe(e, t);
    return (s, o) => (p(), A(i(Mc), G({ "data-slot": "select" }, i(r)), {
      default: m(() => [
        R(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lu = /* @__PURE__ */ $({
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
    const n = e, a = t, r = he(n, "class"), s = qe(r, a);
    return (o, l) => (p(), A(i(Fc), null, {
      default: m(() => [
        b(i(Bc), G({ "data-slot": "select-content" }, { ...i(s), ...o.$attrs }, {
          class: i(H)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--reka-select-content-available-height) min-w-[8rem] overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
            e.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
            n.class
          )
        }), {
          default: m(() => [
            b(i(Uh)),
            b(i(jc), {
              class: Ee(i(H)("p-1", e.position === "popper" && "h-[var(--reka-select-trigger-height)] w-full min-w-[var(--reka-select-trigger-width)] scroll-my-1"))
            }, {
              default: m(() => [
                R(o.$slots, "default")
              ]),
              _: 3
            }, 8, ["class"]),
            b(i(jh))
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), Bh = { class: "absolute right-2 flex size-3.5 items-center justify-center" }, uu = /* @__PURE__ */ $({
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
    const t = e, n = he(t, "class"), a = et(n);
    return (r, s) => (p(), A(i(Uc), G({ "data-slot": "select-item" }, i(a), {
      class: i(H)(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        t.class
      )
    }), {
      default: m(() => [
        oe("span", Bh, [
          b(i(zc), null, {
            default: m(() => [
              b(i(zr), { class: "size-4" })
            ]),
            _: 1
          })
        ]),
        b(i(Wc), null, {
          default: m(() => [
            R(r.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), jh = /* @__PURE__ */ $({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = he(t, "class"), a = et(n);
    return (r, s) => (p(), A(i(Hc), G({ "data-slot": "select-scroll-down-button" }, i(a), {
      class: i(H)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: m(() => [
        R(r.$slots, "default", {}, () => [
          b(i(Hn), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Uh = /* @__PURE__ */ $({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = he(t, "class"), a = et(n);
    return (r, s) => (p(), A(i(Zc), G({ "data-slot": "select-scroll-up-button" }, i(a), {
      class: i(H)("flex cursor-default items-center justify-center py-1", t.class)
    }), {
      default: m(() => [
        R(r.$slots, "default", {}, () => [
          b(i(tf), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), zh = /* @__PURE__ */ $({
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
    const t = e, n = he(t, "class", "size"), a = et(n);
    return (r, s) => (p(), A(i(dl), G({
      "data-slot": "select-trigger",
      "data-size": e.size
    }, i(a), {
      class: i(H)(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        t.class
      )
    }), {
      default: m(() => [
        R(r.$slots, "default"),
        b(i(Gc), { "as-child": "" }, {
          default: m(() => [
            b(i(Hn), { class: "size-3" })
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 16, ["data-size", "class"]));
  }
}), cu = /* @__PURE__ */ $({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (p(), A(i(qc), G({ "data-slot": "select-value" }, t), {
      default: m(() => [
        R(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fo = /* @__PURE__ */ $({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = he(t, "class");
    return (a, r) => (p(), A(i(Yc), G({ "data-slot": "dropdown-menu-separator" }, i(n), {
      class: i(H)("bg-border -mx-1 my-1 h-px", t.class)
    }), null, 16, ["class"]));
  }
}), Wh = {
  key: 0,
  class: "text-xs font-semibold px-2 py-2"
}, Hh = { key: 1 }, Zh = {
  key: 0,
  class: "-mt-2"
}, mo = /* @__PURE__ */ $({
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
    function n(u) {
      return {
        "common.select": "Select",
        "common.reset": "Reset",
        "common.addItem": "Add Item"
      }[u] || u;
    }
    const a = ft(e, "modelValue"), r = U(() => Object.fromEntries(F(t.options).map((u) => [u.value, u]))), s = U(() => a.value ? t.multiple ? Array.isArray(a.value) ? a.value.map((u) => r.value[u]).filter(Boolean) : [] : r.value[a.value] ? [r.value[a.value]] : [] : []);
    function o() {
      a.value = t.initialValues ?? (t.multiple ? [] : void 0);
    }
    const l = U(() => t.initialValues === void 0 ? a.value !== void 0 : JSON.stringify(t.initialValues) !== JSON.stringify(a.value));
    return (u, c) => (p(), j(Re, null, [
      b(i(iu), {
        modelValue: a.value,
        "onUpdate:modelValue": c[1] || (c[1] = (d) => a.value = d),
        multiple: e.multiple
      }, {
        default: m(() => [
          b(i(dl), G({
            class: i(H)(
              "w-full data-[placeholder]:text-muted-foreground ",
              t.class
            )
          }, u.$attrs, { "as-child": "" }), {
            default: m(() => [
              b(Pl, { variant: "outline" }, {
                default: m(() => [
                  R(u.$slots, "default", { selectedOptions: s.value }, () => [
                    b(i(cu), {
                      placeholder: e.placeholder || n("common.select"),
                      class: "flex-wrap"
                    }, {
                      default: m(() => [
                        e.customValueComponent && s.value.length > 0 ? (p(!0), j(Re, { key: 0 }, Ge(s.value, (d) => (p(), A(mt(e.customValueComponent), G({
                          key: d.value,
                          option: d,
                          "selected-options": s.value
                        }, { ref_for: !0 }, e.customValueProps), null, 16, ["option", "selected-options"]))), 128)) : ve("", !0)
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
          b(i(lu), null, {
            default: m(() => [
              e.label ? (p(), j("div", Wh, se(e.label), 1)) : ve("", !0),
              (p(!0), j(Re, null, Ge(F(e.options), (d) => (p(), A(i(uu), {
                key: String(d.value),
                value: d.value
              }, {
                default: m(() => [
                  be(se(d.label), 1)
                ]),
                _: 2
              }, 1032, ["value"]))), 128)),
              e.showResetButton && l.value ? (p(), j("div", Hh, [
                b(fo),
                b(pt, {
                  class: "w-full",
                  variant: "ghost",
                  size: "sm",
                  onClick: c[0] || (c[0] = (d) => o())
                }, {
                  default: m(() => [
                    b(i(lf)),
                    be(" " + se(n("common.reset")), 1)
                  ]),
                  _: 1
                })
              ])) : ve("", !0)
            ]),
            _: 1
          })
        ]),
        _: 3
      }, 8, ["modelValue", "multiple"]),
      e.showAddItemButton ? (p(), j("div", Zh, [
        b(pt, {
          size: "sm",
          class: "sticky bottom-0",
          variant: "ghost",
          onClick: c[2] || (c[2] = (d) => u.$emit("onAddItem"))
        }, {
          default: m(() => [
            b(i(Wr)),
            be(" " + se(n("common.addItem")), 1)
          ]),
          _: 1
        })
      ])) : ve("", !0)
    ], 64));
  }
}), Gh = {
  key: 0,
  class: "flex items-center gap-2 min-w-0"
}, qh = { class: "text-sm text-muted-foreground hidden truncate @xl:block" }, Yh = { class: "text-sm truncate min-w-0 mr-2 text-muted-foreground" }, Kh = { class: "hidden @2xl:block" }, Xh = { class: "@2xl:hidden" }, Jh = /* @__PURE__ */ $({
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
    const n = e, a = t, r = he(n, "class"), s = qe(r, a), o = ft(e, "itemsPerPage"), { t: l } = aa();
    return (u, c) => (p(), j("div", null, [
      b(i(Dh), G(i(s), { class: "flex items-center gap-4 @xl:gap-8 @4xl:gap-12" }), {
        default: m(({ page: d, pageCount: f }) => [
          e.hideItemsPerPage ? ve("", !0) : (p(), j("div", Gh, [
            oe("span", qh, se(i(l)("dataTable.rowsPerPage")), 1),
            b(mo, {
              class: "!w-auto",
              options: e.pageSizeOptions.map((v) => ({ value: v, label: `${v}` })),
              "model-value": o.value,
              "onUpdate:modelValue": c[0] || (c[0] = (v) => o.value = v)
            }, null, 8, ["options", "model-value"])
          ])),
          b(i(Lh), null, {
            default: m(() => [
              oe("div", Yh, [
                oe("span", Kh, se(i(l)("dataTable.pageOf", { page: d, pageCount: f })), 1),
                oe("span", Xh, se(d) + " / " + se(f), 1)
              ]),
              b(i(Vh), null, {
                default: m(() => [
                  b(i(fl), { class: "size-4" })
                ]),
                _: 1
              }),
              b(i(Fh), null, {
                default: m(() => [
                  b(i(Xs))
                ]),
                _: 1
              }),
              b(i(Mh), { variant: "outline" }, {
                default: m(() => [
                  b(i(Zn))
                ]),
                _: 1
              }),
              b(i(Rh), { variant: "outline" }, {
                default: m(() => [
                  b(i(ml), { class: "size-4" })
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
}), Qh = /* @__PURE__ */ $({
  __name: "Badge",
  props: {
    variant: {},
    class: {}
  },
  setup(e) {
    const t = ka(
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
    return (a, r) => (p(), j("div", {
      class: Ee(i(H)(i(t)({ variant: n.variant }), n.class))
    }, [
      R(a.$slots, "default")
    ], 2));
  }
}), xr = /* @__PURE__ */ $({
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
    const n = e, a = t, r = he(n, "class"), s = qe(r, a);
    return (o, l) => (p(), A(i(Kc), G({ "data-slot": "checkbox" }, i(s), {
      class: i(H)(
        "peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        n.class
      )
    }), {
      default: m(() => [
        b(i(Xc), {
          "data-slot": "checkbox-indicator",
          class: "flex items-center justify-center text-current transition-none"
        }, {
          default: m(() => [
            R(o.$slots, "default", {}, () => [
              b(i(zr), { class: "size-3.5" })
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
function eg(e, t) {
  const n = pe(null), a = () => {
    e.value ? n.value = e.value.querySelector(t) : n.value = null;
  };
  return Vn(a), na(() => {
    a();
  }), n;
}
const Gn = Ut([]), du = (e, t) => Gn.value.push({ callback: e, id: t });
function fu(e) {
  return Gn.value = typeof e == "string" ? Gn.value.filter(({ id: t }) => t !== e) : Gn.value.filter(({ callback: t }) => t !== e);
}
const po = (e) => {
  const t = e !== void 0 ? e : Gn.value.length - 1;
  return t >= 0 && !Gn.value[t].callback() && po(t - 1);
};
document.body.addEventListener("keydown", (e) => {
  e.key === "Escape" && Gn.value.length > 0 && (e.stopPropagation(), !e.target || !["INPUT"].includes(e.target?.tagName) ? po() : e.target.blur());
});
const mu = { add: du, remove: fu, invokeLatest: po };
function tg(e, t) {
  Fe(t, (n) => n ? du(e) : fu(e), { immediate: !0 });
}
function ng(e) {
  const { arrivedState: t, x: n, y: a } = jm(e), r = cn({
    top: !1,
    right: !1,
    left: !1,
    bottom: !1
  }), s = () => {
    const o = F(e);
    if (!o)
      return;
    const l = o.scrollWidth > o.clientWidth, u = o.scrollHeight > o.clientHeight;
    r.left = !l || t.left, r.right = !l || t.right, r.top = !u || t.top, r.bottom = !u || t.bottom;
  };
  return Fe(n, () => s()), Fe(a, () => s()), Fe(e, () => s()), Bm(e, () => s()), r;
}
var Be;
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
    const s = e.objectKeys(r).filter((l) => typeof r[r[l]] != "number"), o = {};
    for (const l of s)
      o[l] = r[l];
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
})(Be || (Be = {}));
var $s;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})($s || ($s = {}));
const re = Be.arrayToEnum([
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
]), bn = (e) => {
  switch (typeof e) {
    case "undefined":
      return re.undefined;
    case "string":
      return re.string;
    case "number":
      return Number.isNaN(e) ? re.nan : re.number;
    case "boolean":
      return re.boolean;
    case "function":
      return re.function;
    case "bigint":
      return re.bigint;
    case "symbol":
      return re.symbol;
    case "object":
      return Array.isArray(e) ? re.array : e === null ? re.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? re.promise : typeof Map < "u" && e instanceof Map ? re.map : typeof Set < "u" && e instanceof Set ? re.set : typeof Date < "u" && e instanceof Date ? re.date : re.object;
    default:
      return re.unknown;
  }
}, Z = Be.arrayToEnum([
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
]), ag = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class zt extends Error {
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
          let l = a, u = 0;
          for (; u < o.path.length; ) {
            const c = o.path[u];
            u === o.path.length - 1 ? (l[c] = l[c] || { _errors: [] }, l[c]._errors.push(n(o))) : l[c] = l[c] || { _errors: [] }, l = l[c], u++;
          }
        }
    };
    return r(this), a;
  }
  static assert(t) {
    if (!(t instanceof zt))
      throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, Be.jsonStringifyReplacer, 2);
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
zt.create = (e) => new zt(e);
const pa = (e, t) => {
  let n;
  switch (e.code) {
    case Z.invalid_type:
      e.received === re.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
      break;
    case Z.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, Be.jsonStringifyReplacer)}`;
      break;
    case Z.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${Be.joinValues(e.keys, ", ")}`;
      break;
    case Z.invalid_union:
      n = "Invalid input";
      break;
    case Z.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${Be.joinValues(e.options)}`;
      break;
    case Z.invalid_enum_value:
      n = `Invalid enum value. Expected ${Be.joinValues(e.options)}, received '${e.received}'`;
      break;
    case Z.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case Z.invalid_return_type:
      n = "Invalid function return type";
      break;
    case Z.invalid_date:
      n = "Invalid date";
      break;
    case Z.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : Be.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
      break;
    case Z.too_small:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "bigint" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : n = "Invalid input";
      break;
    case Z.too_big:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? n = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : n = "Invalid input";
      break;
    case Z.custom:
      n = "Invalid input";
      break;
    case Z.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case Z.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case Z.not_finite:
      n = "Number must be finite";
      break;
    default:
      n = t.defaultError, Be.assertNever(e);
  }
  return { message: n };
};
let pu = pa;
function rg(e) {
  pu = e;
}
function Ir() {
  return pu;
}
const Pr = (e) => {
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
  let l = "";
  const u = a.filter((c) => !!c).slice().reverse();
  for (const c of u)
    l = c(o, { data: t, defaultError: l }).message;
  return {
    ...r,
    path: s,
    message: l
  };
}, sg = [];
function ee(e, t) {
  const n = Ir(), a = Pr({
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
      n === pa ? void 0 : pa
      // then global default map
    ].filter((r) => !!r)
  });
  e.common.issues.push(a);
}
class Nt {
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
        return we;
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
    return Nt.mergeObjectSync(t, a);
  }
  static mergeObjectSync(t, n) {
    const a = {};
    for (const r of n) {
      const { key: s, value: o } = r;
      if (s.status === "aborted" || o.status === "aborted")
        return we;
      s.status === "dirty" && t.dirty(), o.status === "dirty" && t.dirty(), s.value !== "__proto__" && (typeof o.value < "u" || r.alwaysSet) && (a[s.value] = o.value);
    }
    return { status: t.value, value: a };
  }
}
const we = Object.freeze({
  status: "aborted"
}), ua = (e) => ({ status: "dirty", value: e }), Pt = (e) => ({ status: "valid", value: e }), Ds = (e) => e.status === "aborted", Ls = (e) => e.status === "dirty", Jn = (e) => e.status === "valid", Ha = (e) => typeof Promise < "u" && e instanceof Promise;
var me;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t?.message;
})(me || (me = {}));
class mn {
  constructor(t, n, a, r) {
    this._cachedPath = [], this.parent = t, this.data = n, this._path = a, this._key = r;
  }
  get path() {
    return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Si = (e, t) => {
  if (Jn(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const n = new zt(e.common.issues);
      return this._error = n, this._error;
    }
  };
};
function Te(e) {
  if (!e)
    return {};
  const { errorMap: t, invalid_type_error: n, required_error: a, description: r } = e;
  if (t && (n || a))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t ? { errorMap: t, description: r } : { errorMap: (o, l) => {
    const { message: u } = e;
    return o.code === "invalid_enum_value" ? { message: u ?? l.defaultError } : typeof l.data > "u" ? { message: u ?? a ?? l.defaultError } : o.code !== "invalid_type" ? { message: l.defaultError } : { message: u ?? n ?? l.defaultError };
  }, description: r };
}
class Ae {
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return bn(t.data);
  }
  _getOrReturnCtx(t, n) {
    return n || {
      common: t.parent.common,
      data: t.data,
      parsedType: bn(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new Nt(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: bn(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (Ha(n))
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
      parsedType: bn(t)
    }, r = this._parseSync({ data: t, path: a.path, parent: a });
    return Si(a, r);
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
      parsedType: bn(t)
    };
    if (!this["~standard"].async)
      try {
        const a = this._parseSync({ data: t, path: [], parent: n });
        return Jn(a) ? {
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
    return this._parseAsync({ data: t, path: [], parent: n }).then((a) => Jn(a) ? {
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
      parsedType: bn(t)
    }, r = this._parse({ data: t, path: a.path, parent: a }), s = await (Ha(r) ? r : Promise.resolve(r));
    return Si(a, s);
  }
  refine(t, n) {
    const a = (r) => typeof n == "string" || typeof n > "u" ? { message: n } : typeof n == "function" ? n(r) : n;
    return this._refinement((r, s) => {
      const o = t(r), l = () => s.addIssue({
        code: Z.custom,
        ...a(r)
      });
      return typeof Promise < "u" && o instanceof Promise ? o.then((u) => u ? !0 : (l(), !1)) : o ? !0 : (l(), !1);
    });
  }
  refinement(t, n) {
    return this._refinement((a, r) => t(a) ? !0 : (r.addIssue(typeof n == "function" ? n(a, r) : n), !1));
  }
  _refinement(t) {
    return new Qt({
      schema: this,
      typeName: ye.ZodEffects,
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
    return Dn.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Gt.create(this);
  }
  promise() {
    return ya.create(this, this._def);
  }
  or(t) {
    return ga.create([this, t], this._def);
  }
  and(t) {
    return qa.create(this, t, this._def);
  }
  transform(t) {
    return new Qt({
      ...Te(this._def),
      schema: this,
      typeName: ye.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new ta({
      ...Te(this._def),
      innerType: this,
      defaultValue: n,
      typeName: ye.ZodDefault
    });
  }
  brand() {
    return new vo({
      typeName: ye.ZodBranded,
      type: this,
      ...Te(this._def)
    });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Qa({
      ...Te(this._def),
      innerType: this,
      catchValue: n,
      typeName: ye.ZodCatch
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
    return rr.create(this, t);
  }
  readonly() {
    return er.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const og = /^c[^\s-]{8,}$/i, ig = /^[0-9a-z]+$/, lg = /^[0-9A-HJKMNP-TV-Z]{26}$/i, ug = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, cg = /^[a-z0-9_-]{21}$/i, dg = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, fg = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, mg = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, pg = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let cs;
const vg = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, hg = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, gg = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, yg = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, bg = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, _g = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, vu = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", wg = new RegExp(`^${vu}$`);
function hu(e) {
  let t = "[0-5]\\d";
  e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`);
  const n = e.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${n}`;
}
function kg(e) {
  return new RegExp(`^${hu(e)}$`);
}
function gu(e) {
  let t = `${vu}T${hu(e)}`;
  const n = [];
  return n.push(e.local ? "Z?" : "Z"), e.offset && n.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${n.join("|")})`, new RegExp(`^${t}$`);
}
function xg(e, t) {
  return !!((t === "v4" || !t) && vg.test(e) || (t === "v6" || !t) && gg.test(e));
}
function Eg(e, t) {
  if (!dg.test(e))
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
function Og(e, t) {
  return !!((t === "v4" || !t) && hg.test(e) || (t === "v6" || !t) && yg.test(e));
}
class Zt extends Ae {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== re.string) {
      const s = this._getOrReturnCtx(t);
      return ee(s, {
        code: Z.invalid_type,
        expected: re.string,
        received: s.parsedType
      }), we;
    }
    const a = new Nt();
    let r;
    for (const s of this._def.checks)
      if (s.kind === "min")
        t.data.length < s.value && (r = this._getOrReturnCtx(t, r), ee(r, {
          code: Z.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), a.dirty());
      else if (s.kind === "max")
        t.data.length > s.value && (r = this._getOrReturnCtx(t, r), ee(r, {
          code: Z.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: s.message
        }), a.dirty());
      else if (s.kind === "length") {
        const o = t.data.length > s.value, l = t.data.length < s.value;
        (o || l) && (r = this._getOrReturnCtx(t, r), o ? ee(r, {
          code: Z.too_big,
          maximum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }) : l && ee(r, {
          code: Z.too_small,
          minimum: s.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: s.message
        }), a.dirty());
      } else if (s.kind === "email")
        mg.test(t.data) || (r = this._getOrReturnCtx(t, r), ee(r, {
          validation: "email",
          code: Z.invalid_string,
          message: s.message
        }), a.dirty());
      else if (s.kind === "emoji")
        cs || (cs = new RegExp(pg, "u")), cs.test(t.data) || (r = this._getOrReturnCtx(t, r), ee(r, {
          validation: "emoji",
          code: Z.invalid_string,
          message: s.message
        }), a.dirty());
      else if (s.kind === "uuid")
        ug.test(t.data) || (r = this._getOrReturnCtx(t, r), ee(r, {
          validation: "uuid",
          code: Z.invalid_string,
          message: s.message
        }), a.dirty());
      else if (s.kind === "nanoid")
        cg.test(t.data) || (r = this._getOrReturnCtx(t, r), ee(r, {
          validation: "nanoid",
          code: Z.invalid_string,
          message: s.message
        }), a.dirty());
      else if (s.kind === "cuid")
        og.test(t.data) || (r = this._getOrReturnCtx(t, r), ee(r, {
          validation: "cuid",
          code: Z.invalid_string,
          message: s.message
        }), a.dirty());
      else if (s.kind === "cuid2")
        ig.test(t.data) || (r = this._getOrReturnCtx(t, r), ee(r, {
          validation: "cuid2",
          code: Z.invalid_string,
          message: s.message
        }), a.dirty());
      else if (s.kind === "ulid")
        lg.test(t.data) || (r = this._getOrReturnCtx(t, r), ee(r, {
          validation: "ulid",
          code: Z.invalid_string,
          message: s.message
        }), a.dirty());
      else if (s.kind === "url")
        try {
          new URL(t.data);
        } catch {
          r = this._getOrReturnCtx(t, r), ee(r, {
            validation: "url",
            code: Z.invalid_string,
            message: s.message
          }), a.dirty();
        }
      else s.kind === "regex" ? (s.regex.lastIndex = 0, s.regex.test(t.data) || (r = this._getOrReturnCtx(t, r), ee(r, {
        validation: "regex",
        code: Z.invalid_string,
        message: s.message
      }), a.dirty())) : s.kind === "trim" ? t.data = t.data.trim() : s.kind === "includes" ? t.data.includes(s.value, s.position) || (r = this._getOrReturnCtx(t, r), ee(r, {
        code: Z.invalid_string,
        validation: { includes: s.value, position: s.position },
        message: s.message
      }), a.dirty()) : s.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : s.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : s.kind === "startsWith" ? t.data.startsWith(s.value) || (r = this._getOrReturnCtx(t, r), ee(r, {
        code: Z.invalid_string,
        validation: { startsWith: s.value },
        message: s.message
      }), a.dirty()) : s.kind === "endsWith" ? t.data.endsWith(s.value) || (r = this._getOrReturnCtx(t, r), ee(r, {
        code: Z.invalid_string,
        validation: { endsWith: s.value },
        message: s.message
      }), a.dirty()) : s.kind === "datetime" ? gu(s).test(t.data) || (r = this._getOrReturnCtx(t, r), ee(r, {
        code: Z.invalid_string,
        validation: "datetime",
        message: s.message
      }), a.dirty()) : s.kind === "date" ? wg.test(t.data) || (r = this._getOrReturnCtx(t, r), ee(r, {
        code: Z.invalid_string,
        validation: "date",
        message: s.message
      }), a.dirty()) : s.kind === "time" ? kg(s).test(t.data) || (r = this._getOrReturnCtx(t, r), ee(r, {
        code: Z.invalid_string,
        validation: "time",
        message: s.message
      }), a.dirty()) : s.kind === "duration" ? fg.test(t.data) || (r = this._getOrReturnCtx(t, r), ee(r, {
        validation: "duration",
        code: Z.invalid_string,
        message: s.message
      }), a.dirty()) : s.kind === "ip" ? xg(t.data, s.version) || (r = this._getOrReturnCtx(t, r), ee(r, {
        validation: "ip",
        code: Z.invalid_string,
        message: s.message
      }), a.dirty()) : s.kind === "jwt" ? Eg(t.data, s.alg) || (r = this._getOrReturnCtx(t, r), ee(r, {
        validation: "jwt",
        code: Z.invalid_string,
        message: s.message
      }), a.dirty()) : s.kind === "cidr" ? Og(t.data, s.version) || (r = this._getOrReturnCtx(t, r), ee(r, {
        validation: "cidr",
        code: Z.invalid_string,
        message: s.message
      }), a.dirty()) : s.kind === "base64" ? bg.test(t.data) || (r = this._getOrReturnCtx(t, r), ee(r, {
        validation: "base64",
        code: Z.invalid_string,
        message: s.message
      }), a.dirty()) : s.kind === "base64url" ? _g.test(t.data) || (r = this._getOrReturnCtx(t, r), ee(r, {
        validation: "base64url",
        code: Z.invalid_string,
        message: s.message
      }), a.dirty()) : Be.assertNever(s);
    return { status: a.value, value: t.data };
  }
  _regex(t, n, a) {
    return this.refinement((r) => t.test(r), {
      validation: n,
      code: Z.invalid_string,
      ...me.errToObj(a)
    });
  }
  _addCheck(t) {
    return new Zt({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...me.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...me.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...me.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...me.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: "nanoid", ...me.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...me.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...me.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...me.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: "base64", ...me.errToObj(t) });
  }
  base64url(t) {
    return this._addCheck({
      kind: "base64url",
      ...me.errToObj(t)
    });
  }
  jwt(t) {
    return this._addCheck({ kind: "jwt", ...me.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...me.errToObj(t) });
  }
  cidr(t) {
    return this._addCheck({ kind: "cidr", ...me.errToObj(t) });
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
      ...me.errToObj(t?.message)
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
      ...me.errToObj(t?.message)
    });
  }
  duration(t) {
    return this._addCheck({ kind: "duration", ...me.errToObj(t) });
  }
  regex(t, n) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ...me.errToObj(n)
    });
  }
  includes(t, n) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: n?.position,
      ...me.errToObj(n?.message)
    });
  }
  startsWith(t, n) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ...me.errToObj(n)
    });
  }
  endsWith(t, n) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ...me.errToObj(n)
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t,
      ...me.errToObj(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t,
      ...me.errToObj(n)
    });
  }
  length(t, n) {
    return this._addCheck({
      kind: "length",
      value: t,
      ...me.errToObj(n)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(t) {
    return this.min(1, me.errToObj(t));
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
  typeName: ye.ZodString,
  coerce: e?.coerce ?? !1,
  ...Te(e)
});
function Sg(e, t) {
  const n = (e.toString().split(".")[1] || "").length, a = (t.toString().split(".")[1] || "").length, r = n > a ? n : a, s = Number.parseInt(e.toFixed(r).replace(".", "")), o = Number.parseInt(t.toFixed(r).replace(".", ""));
  return s % o / 10 ** r;
}
class In extends Ae {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== re.number) {
      const s = this._getOrReturnCtx(t);
      return ee(s, {
        code: Z.invalid_type,
        expected: re.number,
        received: s.parsedType
      }), we;
    }
    let a;
    const r = new Nt();
    for (const s of this._def.checks)
      s.kind === "int" ? Be.isInteger(t.data) || (a = this._getOrReturnCtx(t, a), ee(a, {
        code: Z.invalid_type,
        expected: "integer",
        received: "float",
        message: s.message
      }), r.dirty()) : s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (a = this._getOrReturnCtx(t, a), ee(a, {
        code: Z.too_small,
        minimum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), r.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (a = this._getOrReturnCtx(t, a), ee(a, {
        code: Z.too_big,
        maximum: s.value,
        type: "number",
        inclusive: s.inclusive,
        exact: !1,
        message: s.message
      }), r.dirty()) : s.kind === "multipleOf" ? Sg(t.data, s.value) !== 0 && (a = this._getOrReturnCtx(t, a), ee(a, {
        code: Z.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), r.dirty()) : s.kind === "finite" ? Number.isFinite(t.data) || (a = this._getOrReturnCtx(t, a), ee(a, {
        code: Z.not_finite,
        message: s.message
      }), r.dirty()) : Be.assertNever(s);
    return { status: r.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, me.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, me.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, me.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, me.toString(n));
  }
  setLimit(t, n, a, r) {
    return new In({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: a,
          message: me.toString(r)
        }
      ]
    });
  }
  _addCheck(t) {
    return new In({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  int(t) {
    return this._addCheck({
      kind: "int",
      message: me.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: me.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: me.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: me.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: me.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: me.toString(n)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: me.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: me.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: me.toString(t)
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
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && Be.isInteger(t.value));
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
In.create = (e) => new In({
  checks: [],
  typeName: ye.ZodNumber,
  coerce: e?.coerce || !1,
  ...Te(e)
});
class Pn extends Ae {
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
    if (this._getType(t) !== re.bigint)
      return this._getInvalidInput(t);
    let a;
    const r = new Nt();
    for (const s of this._def.checks)
      s.kind === "min" ? (s.inclusive ? t.data < s.value : t.data <= s.value) && (a = this._getOrReturnCtx(t, a), ee(a, {
        code: Z.too_small,
        type: "bigint",
        minimum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), r.dirty()) : s.kind === "max" ? (s.inclusive ? t.data > s.value : t.data >= s.value) && (a = this._getOrReturnCtx(t, a), ee(a, {
        code: Z.too_big,
        type: "bigint",
        maximum: s.value,
        inclusive: s.inclusive,
        message: s.message
      }), r.dirty()) : s.kind === "multipleOf" ? t.data % s.value !== BigInt(0) && (a = this._getOrReturnCtx(t, a), ee(a, {
        code: Z.not_multiple_of,
        multipleOf: s.value,
        message: s.message
      }), r.dirty()) : Be.assertNever(s);
    return { status: r.value, value: t.data };
  }
  _getInvalidInput(t) {
    const n = this._getOrReturnCtx(t);
    return ee(n, {
      code: Z.invalid_type,
      expected: re.bigint,
      received: n.parsedType
    }), we;
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, me.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, me.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, me.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, me.toString(n));
  }
  setLimit(t, n, a, r) {
    return new Pn({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: a,
          message: me.toString(r)
        }
      ]
    });
  }
  _addCheck(t) {
    return new Pn({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: me.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: me.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: me.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: me.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: me.toString(n)
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
Pn.create = (e) => new Pn({
  checks: [],
  typeName: ye.ZodBigInt,
  coerce: e?.coerce ?? !1,
  ...Te(e)
});
class Za extends Ae {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== re.boolean) {
      const a = this._getOrReturnCtx(t);
      return ee(a, {
        code: Z.invalid_type,
        expected: re.boolean,
        received: a.parsedType
      }), we;
    }
    return Pt(t.data);
  }
}
Za.create = (e) => new Za({
  typeName: ye.ZodBoolean,
  coerce: e?.coerce || !1,
  ...Te(e)
});
class Qn extends Ae {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== re.date) {
      const s = this._getOrReturnCtx(t);
      return ee(s, {
        code: Z.invalid_type,
        expected: re.date,
        received: s.parsedType
      }), we;
    }
    if (Number.isNaN(t.data.getTime())) {
      const s = this._getOrReturnCtx(t);
      return ee(s, {
        code: Z.invalid_date
      }), we;
    }
    const a = new Nt();
    let r;
    for (const s of this._def.checks)
      s.kind === "min" ? t.data.getTime() < s.value && (r = this._getOrReturnCtx(t, r), ee(r, {
        code: Z.too_small,
        message: s.message,
        inclusive: !0,
        exact: !1,
        minimum: s.value,
        type: "date"
      }), a.dirty()) : s.kind === "max" ? t.data.getTime() > s.value && (r = this._getOrReturnCtx(t, r), ee(r, {
        code: Z.too_big,
        message: s.message,
        inclusive: !0,
        exact: !1,
        maximum: s.value,
        type: "date"
      }), a.dirty()) : Be.assertNever(s);
    return {
      status: a.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new Qn({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: me.toString(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: me.toString(n)
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
Qn.create = (e) => new Qn({
  checks: [],
  coerce: e?.coerce || !1,
  typeName: ye.ZodDate,
  ...Te(e)
});
class $r extends Ae {
  _parse(t) {
    if (this._getType(t) !== re.symbol) {
      const a = this._getOrReturnCtx(t);
      return ee(a, {
        code: Z.invalid_type,
        expected: re.symbol,
        received: a.parsedType
      }), we;
    }
    return Pt(t.data);
  }
}
$r.create = (e) => new $r({
  typeName: ye.ZodSymbol,
  ...Te(e)
});
class Ga extends Ae {
  _parse(t) {
    if (this._getType(t) !== re.undefined) {
      const a = this._getOrReturnCtx(t);
      return ee(a, {
        code: Z.invalid_type,
        expected: re.undefined,
        received: a.parsedType
      }), we;
    }
    return Pt(t.data);
  }
}
Ga.create = (e) => new Ga({
  typeName: ye.ZodUndefined,
  ...Te(e)
});
class va extends Ae {
  _parse(t) {
    if (this._getType(t) !== re.null) {
      const a = this._getOrReturnCtx(t);
      return ee(a, {
        code: Z.invalid_type,
        expected: re.null,
        received: a.parsedType
      }), we;
    }
    return Pt(t.data);
  }
}
va.create = (e) => new va({
  typeName: ye.ZodNull,
  ...Te(e)
});
class ha extends Ae {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return Pt(t.data);
  }
}
ha.create = (e) => new ha({
  typeName: ye.ZodAny,
  ...Te(e)
});
class qn extends Ae {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return Pt(t.data);
  }
}
qn.create = (e) => new qn({
  typeName: ye.ZodUnknown,
  ...Te(e)
});
class En extends Ae {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return ee(n, {
      code: Z.invalid_type,
      expected: re.never,
      received: n.parsedType
    }), we;
  }
}
En.create = (e) => new En({
  typeName: ye.ZodNever,
  ...Te(e)
});
class Dr extends Ae {
  _parse(t) {
    if (this._getType(t) !== re.undefined) {
      const a = this._getOrReturnCtx(t);
      return ee(a, {
        code: Z.invalid_type,
        expected: re.void,
        received: a.parsedType
      }), we;
    }
    return Pt(t.data);
  }
}
Dr.create = (e) => new Dr({
  typeName: ye.ZodVoid,
  ...Te(e)
});
class Gt extends Ae {
  _parse(t) {
    const { ctx: n, status: a } = this._processInputParams(t), r = this._def;
    if (n.parsedType !== re.array)
      return ee(n, {
        code: Z.invalid_type,
        expected: re.array,
        received: n.parsedType
      }), we;
    if (r.exactLength !== null) {
      const o = n.data.length > r.exactLength.value, l = n.data.length < r.exactLength.value;
      (o || l) && (ee(n, {
        code: o ? Z.too_big : Z.too_small,
        minimum: l ? r.exactLength.value : void 0,
        maximum: o ? r.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: r.exactLength.message
      }), a.dirty());
    }
    if (r.minLength !== null && n.data.length < r.minLength.value && (ee(n, {
      code: Z.too_small,
      minimum: r.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: r.minLength.message
    }), a.dirty()), r.maxLength !== null && n.data.length > r.maxLength.value && (ee(n, {
      code: Z.too_big,
      maximum: r.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: r.maxLength.message
    }), a.dirty()), n.common.async)
      return Promise.all([...n.data].map((o, l) => r.type._parseAsync(new mn(n, o, n.path, l)))).then((o) => Nt.mergeArray(a, o));
    const s = [...n.data].map((o, l) => r.type._parseSync(new mn(n, o, n.path, l)));
    return Nt.mergeArray(a, s);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new Gt({
      ...this._def,
      minLength: { value: t, message: me.toString(n) }
    });
  }
  max(t, n) {
    return new Gt({
      ...this._def,
      maxLength: { value: t, message: me.toString(n) }
    });
  }
  length(t, n) {
    return new Gt({
      ...this._def,
      exactLength: { value: t, message: me.toString(n) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Gt.create = (e, t) => new Gt({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: ye.ZodArray,
  ...Te(t)
});
function la(e) {
  if (e instanceof Ze) {
    const t = {};
    for (const n in e.shape) {
      const a = e.shape[n];
      t[n] = on.create(la(a));
    }
    return new Ze({
      ...e._def,
      shape: () => t
    });
  } else return e instanceof Gt ? new Gt({
    ...e._def,
    type: la(e.element)
  }) : e instanceof on ? on.create(la(e.unwrap())) : e instanceof Dn ? Dn.create(la(e.unwrap())) : e instanceof pn ? pn.create(e.items.map((t) => la(t))) : e;
}
class Ze extends Ae {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), n = Be.objectKeys(t);
    return this._cached = { shape: t, keys: n }, this._cached;
  }
  _parse(t) {
    if (this._getType(t) !== re.object) {
      const c = this._getOrReturnCtx(t);
      return ee(c, {
        code: Z.invalid_type,
        expected: re.object,
        received: c.parsedType
      }), we;
    }
    const { status: a, ctx: r } = this._processInputParams(t), { shape: s, keys: o } = this._getCached(), l = [];
    if (!(this._def.catchall instanceof En && this._def.unknownKeys === "strip"))
      for (const c in r.data)
        o.includes(c) || l.push(c);
    const u = [];
    for (const c of o) {
      const d = s[c], f = r.data[c];
      u.push({
        key: { status: "valid", value: c },
        value: d._parse(new mn(r, f, r.path, c)),
        alwaysSet: c in r.data
      });
    }
    if (this._def.catchall instanceof En) {
      const c = this._def.unknownKeys;
      if (c === "passthrough")
        for (const d of l)
          u.push({
            key: { status: "valid", value: d },
            value: { status: "valid", value: r.data[d] }
          });
      else if (c === "strict")
        l.length > 0 && (ee(r, {
          code: Z.unrecognized_keys,
          keys: l
        }), a.dirty());
      else if (c !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const c = this._def.catchall;
      for (const d of l) {
        const f = r.data[d];
        u.push({
          key: { status: "valid", value: d },
          value: c._parse(
            new mn(r, f, r.path, d)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: d in r.data
        });
      }
    }
    return r.common.async ? Promise.resolve().then(async () => {
      const c = [];
      for (const d of u) {
        const f = await d.key, v = await d.value;
        c.push({
          key: f,
          value: v,
          alwaysSet: d.alwaysSet
        });
      }
      return c;
    }).then((c) => Nt.mergeObjectSync(a, c)) : Nt.mergeObjectSync(a, u);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return me.errToObj, new Ze({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (n, a) => {
          const r = this._def.errorMap?.(n, a).message ?? a.defaultError;
          return n.code === "unrecognized_keys" ? {
            message: me.errToObj(t).message ?? r
          } : {
            message: r
          };
        }
      } : {}
    });
  }
  strip() {
    return new Ze({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new Ze({
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
    return new Ze({
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
    return new Ze({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: ye.ZodObject
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
    return new Ze({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const n = {};
    for (const a of Be.objectKeys(t))
      t[a] && this.shape[a] && (n[a] = this.shape[a]);
    return new Ze({
      ...this._def,
      shape: () => n
    });
  }
  omit(t) {
    const n = {};
    for (const a of Be.objectKeys(this.shape))
      t[a] || (n[a] = this.shape[a]);
    return new Ze({
      ...this._def,
      shape: () => n
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return la(this);
  }
  partial(t) {
    const n = {};
    for (const a of Be.objectKeys(this.shape)) {
      const r = this.shape[a];
      t && !t[a] ? n[a] = r : n[a] = r.optional();
    }
    return new Ze({
      ...this._def,
      shape: () => n
    });
  }
  required(t) {
    const n = {};
    for (const a of Be.objectKeys(this.shape))
      if (t && !t[a])
        n[a] = this.shape[a];
      else {
        let s = this.shape[a];
        for (; s instanceof on; )
          s = s._def.innerType;
        n[a] = s;
      }
    return new Ze({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return yu(Be.objectKeys(this.shape));
  }
}
Ze.create = (e, t) => new Ze({
  shape: () => e,
  unknownKeys: "strip",
  catchall: En.create(),
  typeName: ye.ZodObject,
  ...Te(t)
});
Ze.strictCreate = (e, t) => new Ze({
  shape: () => e,
  unknownKeys: "strict",
  catchall: En.create(),
  typeName: ye.ZodObject,
  ...Te(t)
});
Ze.lazycreate = (e, t) => new Ze({
  shape: e,
  unknownKeys: "strip",
  catchall: En.create(),
  typeName: ye.ZodObject,
  ...Te(t)
});
class ga extends Ae {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), a = this._def.options;
    function r(s) {
      for (const l of s)
        if (l.result.status === "valid")
          return l.result;
      for (const l of s)
        if (l.result.status === "dirty")
          return n.common.issues.push(...l.ctx.common.issues), l.result;
      const o = s.map((l) => new zt(l.ctx.common.issues));
      return ee(n, {
        code: Z.invalid_union,
        unionErrors: o
      }), we;
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
      const l = o.map((u) => new zt(u));
      return ee(n, {
        code: Z.invalid_union,
        unionErrors: l
      }), we;
    }
  }
  get options() {
    return this._def.options;
  }
}
ga.create = (e, t) => new ga({
  options: e,
  typeName: ye.ZodUnion,
  ...Te(t)
});
const yn = (e) => e instanceof Ka ? yn(e.schema) : e instanceof Qt ? yn(e.innerType()) : e instanceof Xa ? [e.value] : e instanceof $n ? e.options : e instanceof Ja ? Be.objectValues(e.enum) : e instanceof ta ? yn(e._def.innerType) : e instanceof Ga ? [void 0] : e instanceof va ? [null] : e instanceof on ? [void 0, ...yn(e.unwrap())] : e instanceof Dn ? [null, ...yn(e.unwrap())] : e instanceof vo || e instanceof er ? yn(e.unwrap()) : e instanceof Qa ? yn(e._def.innerType) : [];
class Yr extends Ae {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== re.object)
      return ee(n, {
        code: Z.invalid_type,
        expected: re.object,
        received: n.parsedType
      }), we;
    const a = this.discriminator, r = n.data[a], s = this.optionsMap.get(r);
    return s ? n.common.async ? s._parseAsync({
      data: n.data,
      path: n.path,
      parent: n
    }) : s._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }) : (ee(n, {
      code: Z.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [a]
    }), we);
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
      const o = yn(s.shape[t]);
      if (!o.length)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const l of o) {
        if (r.has(l))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(l)}`);
        r.set(l, s);
      }
    }
    return new Yr({
      typeName: ye.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: r,
      ...Te(a)
    });
  }
}
function Vs(e, t) {
  const n = bn(e), a = bn(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === re.object && a === re.object) {
    const r = Be.objectKeys(t), s = Be.objectKeys(e).filter((l) => r.indexOf(l) !== -1), o = { ...e, ...t };
    for (const l of s) {
      const u = Vs(e[l], t[l]);
      if (!u.valid)
        return { valid: !1 };
      o[l] = u.data;
    }
    return { valid: !0, data: o };
  } else if (n === re.array && a === re.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const r = [];
    for (let s = 0; s < e.length; s++) {
      const o = e[s], l = t[s], u = Vs(o, l);
      if (!u.valid)
        return { valid: !1 };
      r.push(u.data);
    }
    return { valid: !0, data: r };
  } else return n === re.date && a === re.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class qa extends Ae {
  _parse(t) {
    const { status: n, ctx: a } = this._processInputParams(t), r = (s, o) => {
      if (Ds(s) || Ds(o))
        return we;
      const l = Vs(s.value, o.value);
      return l.valid ? ((Ls(s) || Ls(o)) && n.dirty(), { status: n.value, value: l.data }) : (ee(a, {
        code: Z.invalid_intersection_types
      }), we);
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
qa.create = (e, t, n) => new qa({
  left: e,
  right: t,
  typeName: ye.ZodIntersection,
  ...Te(n)
});
class pn extends Ae {
  _parse(t) {
    const { status: n, ctx: a } = this._processInputParams(t);
    if (a.parsedType !== re.array)
      return ee(a, {
        code: Z.invalid_type,
        expected: re.array,
        received: a.parsedType
      }), we;
    if (a.data.length < this._def.items.length)
      return ee(a, {
        code: Z.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), we;
    !this._def.rest && a.data.length > this._def.items.length && (ee(a, {
      code: Z.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), n.dirty());
    const s = [...a.data].map((o, l) => {
      const u = this._def.items[l] || this._def.rest;
      return u ? u._parse(new mn(a, o, a.path, l)) : null;
    }).filter((o) => !!o);
    return a.common.async ? Promise.all(s).then((o) => Nt.mergeArray(n, o)) : Nt.mergeArray(n, s);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new pn({
      ...this._def,
      rest: t
    });
  }
}
pn.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new pn({
    items: e,
    typeName: ye.ZodTuple,
    rest: null,
    ...Te(t)
  });
};
class Ya extends Ae {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: a } = this._processInputParams(t);
    if (a.parsedType !== re.object)
      return ee(a, {
        code: Z.invalid_type,
        expected: re.object,
        received: a.parsedType
      }), we;
    const r = [], s = this._def.keyType, o = this._def.valueType;
    for (const l in a.data)
      r.push({
        key: s._parse(new mn(a, l, a.path, l)),
        value: o._parse(new mn(a, a.data[l], a.path, l)),
        alwaysSet: l in a.data
      });
    return a.common.async ? Nt.mergeObjectAsync(n, r) : Nt.mergeObjectSync(n, r);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, a) {
    return n instanceof Ae ? new Ya({
      keyType: t,
      valueType: n,
      typeName: ye.ZodRecord,
      ...Te(a)
    }) : new Ya({
      keyType: Zt.create(),
      valueType: t,
      typeName: ye.ZodRecord,
      ...Te(n)
    });
  }
}
class Lr extends Ae {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: a } = this._processInputParams(t);
    if (a.parsedType !== re.map)
      return ee(a, {
        code: Z.invalid_type,
        expected: re.map,
        received: a.parsedType
      }), we;
    const r = this._def.keyType, s = this._def.valueType, o = [...a.data.entries()].map(([l, u], c) => ({
      key: r._parse(new mn(a, l, a.path, [c, "key"])),
      value: s._parse(new mn(a, u, a.path, [c, "value"]))
    }));
    if (a.common.async) {
      const l = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const u of o) {
          const c = await u.key, d = await u.value;
          if (c.status === "aborted" || d.status === "aborted")
            return we;
          (c.status === "dirty" || d.status === "dirty") && n.dirty(), l.set(c.value, d.value);
        }
        return { status: n.value, value: l };
      });
    } else {
      const l = /* @__PURE__ */ new Map();
      for (const u of o) {
        const c = u.key, d = u.value;
        if (c.status === "aborted" || d.status === "aborted")
          return we;
        (c.status === "dirty" || d.status === "dirty") && n.dirty(), l.set(c.value, d.value);
      }
      return { status: n.value, value: l };
    }
  }
}
Lr.create = (e, t, n) => new Lr({
  valueType: t,
  keyType: e,
  typeName: ye.ZodMap,
  ...Te(n)
});
class ea extends Ae {
  _parse(t) {
    const { status: n, ctx: a } = this._processInputParams(t);
    if (a.parsedType !== re.set)
      return ee(a, {
        code: Z.invalid_type,
        expected: re.set,
        received: a.parsedType
      }), we;
    const r = this._def;
    r.minSize !== null && a.data.size < r.minSize.value && (ee(a, {
      code: Z.too_small,
      minimum: r.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: r.minSize.message
    }), n.dirty()), r.maxSize !== null && a.data.size > r.maxSize.value && (ee(a, {
      code: Z.too_big,
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
          return we;
        d.status === "dirty" && n.dirty(), c.add(d.value);
      }
      return { status: n.value, value: c };
    }
    const l = [...a.data.values()].map((u, c) => s._parse(new mn(a, u, a.path, c)));
    return a.common.async ? Promise.all(l).then((u) => o(u)) : o(l);
  }
  min(t, n) {
    return new ea({
      ...this._def,
      minSize: { value: t, message: me.toString(n) }
    });
  }
  max(t, n) {
    return new ea({
      ...this._def,
      maxSize: { value: t, message: me.toString(n) }
    });
  }
  size(t, n) {
    return this.min(t, n).max(t, n);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
ea.create = (e, t) => new ea({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: ye.ZodSet,
  ...Te(t)
});
class da extends Ae {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== re.function)
      return ee(n, {
        code: Z.invalid_type,
        expected: re.function,
        received: n.parsedType
      }), we;
    function a(l, u) {
      return Pr({
        data: l,
        path: n.path,
        errorMaps: [n.common.contextualErrorMap, n.schemaErrorMap, Ir(), pa].filter((c) => !!c),
        issueData: {
          code: Z.invalid_arguments,
          argumentsError: u
        }
      });
    }
    function r(l, u) {
      return Pr({
        data: l,
        path: n.path,
        errorMaps: [n.common.contextualErrorMap, n.schemaErrorMap, Ir(), pa].filter((c) => !!c),
        issueData: {
          code: Z.invalid_return_type,
          returnTypeError: u
        }
      });
    }
    const s = { errorMap: n.common.contextualErrorMap }, o = n.data;
    if (this._def.returns instanceof ya) {
      const l = this;
      return Pt(async function(...u) {
        const c = new zt([]), d = await l._def.args.parseAsync(u, s).catch((y) => {
          throw c.addIssue(a(u, y)), c;
        }), f = await Reflect.apply(o, this, d);
        return await l._def.returns._def.type.parseAsync(f, s).catch((y) => {
          throw c.addIssue(r(f, y)), c;
        });
      });
    } else {
      const l = this;
      return Pt(function(...u) {
        const c = l._def.args.safeParse(u, s);
        if (!c.success)
          throw new zt([a(u, c.error)]);
        const d = Reflect.apply(o, this, c.data), f = l._def.returns.safeParse(d, s);
        if (!f.success)
          throw new zt([r(d, f.error)]);
        return f.data;
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
    return new da({
      ...this._def,
      args: pn.create(t).rest(qn.create())
    });
  }
  returns(t) {
    return new da({
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
    return new da({
      args: t || pn.create([]).rest(qn.create()),
      returns: n || qn.create(),
      typeName: ye.ZodFunction,
      ...Te(a)
    });
  }
}
class Ka extends Ae {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
Ka.create = (e, t) => new Ka({
  getter: e,
  typeName: ye.ZodLazy,
  ...Te(t)
});
class Xa extends Ae {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return ee(n, {
        received: n.data,
        code: Z.invalid_literal,
        expected: this._def.value
      }), we;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
Xa.create = (e, t) => new Xa({
  value: e,
  typeName: ye.ZodLiteral,
  ...Te(t)
});
function yu(e, t) {
  return new $n({
    values: e,
    typeName: ye.ZodEnum,
    ...Te(t)
  });
}
class $n extends Ae {
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t), a = this._def.values;
      return ee(n, {
        expected: Be.joinValues(a),
        received: n.parsedType,
        code: Z.invalid_type
      }), we;
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(t.data)) {
      const n = this._getOrReturnCtx(t), a = this._def.values;
      return ee(n, {
        received: n.data,
        code: Z.invalid_enum_value,
        options: a
      }), we;
    }
    return Pt(t.data);
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
    return $n.create(t, {
      ...this._def,
      ...n
    });
  }
  exclude(t, n = this._def) {
    return $n.create(this.options.filter((a) => !t.includes(a)), {
      ...this._def,
      ...n
    });
  }
}
$n.create = yu;
class Ja extends Ae {
  _parse(t) {
    const n = Be.getValidEnumValues(this._def.values), a = this._getOrReturnCtx(t);
    if (a.parsedType !== re.string && a.parsedType !== re.number) {
      const r = Be.objectValues(n);
      return ee(a, {
        expected: Be.joinValues(r),
        received: a.parsedType,
        code: Z.invalid_type
      }), we;
    }
    if (this._cache || (this._cache = new Set(Be.getValidEnumValues(this._def.values))), !this._cache.has(t.data)) {
      const r = Be.objectValues(n);
      return ee(a, {
        received: a.data,
        code: Z.invalid_enum_value,
        options: r
      }), we;
    }
    return Pt(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
Ja.create = (e, t) => new Ja({
  values: e,
  typeName: ye.ZodNativeEnum,
  ...Te(t)
});
class ya extends Ae {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== re.promise && n.common.async === !1)
      return ee(n, {
        code: Z.invalid_type,
        expected: re.promise,
        received: n.parsedType
      }), we;
    const a = n.parsedType === re.promise ? n.data : Promise.resolve(n.data);
    return Pt(a.then((r) => this._def.type.parseAsync(r, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
ya.create = (e, t) => new ya({
  type: e,
  typeName: ye.ZodPromise,
  ...Te(t)
});
class Qt extends Ae {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ye.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: n, ctx: a } = this._processInputParams(t), r = this._def.effect || null, s = {
      addIssue: (o) => {
        ee(a, o), o.fatal ? n.abort() : n.dirty();
      },
      get path() {
        return a.path;
      }
    };
    if (s.addIssue = s.addIssue.bind(s), r.type === "preprocess") {
      const o = r.transform(a.data, s);
      if (a.common.async)
        return Promise.resolve(o).then(async (l) => {
          if (n.value === "aborted")
            return we;
          const u = await this._def.schema._parseAsync({
            data: l,
            path: a.path,
            parent: a
          });
          return u.status === "aborted" ? we : u.status === "dirty" || n.value === "dirty" ? ua(u.value) : u;
        });
      {
        if (n.value === "aborted")
          return we;
        const l = this._def.schema._parseSync({
          data: o,
          path: a.path,
          parent: a
        });
        return l.status === "aborted" ? we : l.status === "dirty" || n.value === "dirty" ? ua(l.value) : l;
      }
    }
    if (r.type === "refinement") {
      const o = (l) => {
        const u = r.refinement(l, s);
        if (a.common.async)
          return Promise.resolve(u);
        if (u instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return l;
      };
      if (a.common.async === !1) {
        const l = this._def.schema._parseSync({
          data: a.data,
          path: a.path,
          parent: a
        });
        return l.status === "aborted" ? we : (l.status === "dirty" && n.dirty(), o(l.value), { status: n.value, value: l.value });
      } else
        return this._def.schema._parseAsync({ data: a.data, path: a.path, parent: a }).then((l) => l.status === "aborted" ? we : (l.status === "dirty" && n.dirty(), o(l.value).then(() => ({ status: n.value, value: l.value }))));
    }
    if (r.type === "transform")
      if (a.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: a.data,
          path: a.path,
          parent: a
        });
        if (!Jn(o))
          return we;
        const l = r.transform(o.value, s);
        if (l instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: l };
      } else
        return this._def.schema._parseAsync({ data: a.data, path: a.path, parent: a }).then((o) => Jn(o) ? Promise.resolve(r.transform(o.value, s)).then((l) => ({
          status: n.value,
          value: l
        })) : we);
    Be.assertNever(r);
  }
}
Qt.create = (e, t, n) => new Qt({
  schema: e,
  typeName: ye.ZodEffects,
  effect: t,
  ...Te(n)
});
Qt.createWithPreprocess = (e, t, n) => new Qt({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: ye.ZodEffects,
  ...Te(n)
});
class on extends Ae {
  _parse(t) {
    return this._getType(t) === re.undefined ? Pt(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
on.create = (e, t) => new on({
  innerType: e,
  typeName: ye.ZodOptional,
  ...Te(t)
});
class Dn extends Ae {
  _parse(t) {
    return this._getType(t) === re.null ? Pt(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Dn.create = (e, t) => new Dn({
  innerType: e,
  typeName: ye.ZodNullable,
  ...Te(t)
});
class ta extends Ae {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    let a = n.data;
    return n.parsedType === re.undefined && (a = this._def.defaultValue()), this._def.innerType._parse({
      data: a,
      path: n.path,
      parent: n
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
ta.create = (e, t) => new ta({
  innerType: e,
  typeName: ye.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...Te(t)
});
class Qa extends Ae {
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
    return Ha(r) ? r.then((s) => ({
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new zt(a.common.issues);
        },
        input: a.data
      })
    })) : {
      status: "valid",
      value: r.status === "valid" ? r.value : this._def.catchValue({
        get error() {
          return new zt(a.common.issues);
        },
        input: a.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Qa.create = (e, t) => new Qa({
  innerType: e,
  typeName: ye.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...Te(t)
});
class Vr extends Ae {
  _parse(t) {
    if (this._getType(t) !== re.nan) {
      const a = this._getOrReturnCtx(t);
      return ee(a, {
        code: Z.invalid_type,
        expected: re.nan,
        received: a.parsedType
      }), we;
    }
    return { status: "valid", value: t.data };
  }
}
Vr.create = (e) => new Vr({
  typeName: ye.ZodNaN,
  ...Te(e)
});
const Cg = Symbol("zod_brand");
class vo extends Ae {
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
class rr extends Ae {
  _parse(t) {
    const { status: n, ctx: a } = this._processInputParams(t);
    if (a.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: a.data,
          path: a.path,
          parent: a
        });
        return s.status === "aborted" ? we : s.status === "dirty" ? (n.dirty(), ua(s.value)) : this._def.out._parseAsync({
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
      return r.status === "aborted" ? we : r.status === "dirty" ? (n.dirty(), {
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
    return new rr({
      in: t,
      out: n,
      typeName: ye.ZodPipeline
    });
  }
}
class er extends Ae {
  _parse(t) {
    const n = this._def.innerType._parse(t), a = (r) => (Jn(r) && (r.value = Object.freeze(r.value)), r);
    return Ha(n) ? n.then((r) => a(r)) : a(n);
  }
  unwrap() {
    return this._def.innerType;
  }
}
er.create = (e, t) => new er({
  innerType: e,
  typeName: ye.ZodReadonly,
  ...Te(t)
});
function Ci(e, t) {
  const n = typeof e == "function" ? e(t) : typeof e == "string" ? { message: e } : e;
  return typeof n == "string" ? { message: n } : n;
}
function bu(e, t = {}, n) {
  return e ? ha.create().superRefine((a, r) => {
    const s = e(a);
    if (s instanceof Promise)
      return s.then((o) => {
        if (!o) {
          const l = Ci(t, a), u = l.fatal ?? n ?? !0;
          r.addIssue({ code: "custom", ...l, fatal: u });
        }
      });
    if (!s) {
      const o = Ci(t, a), l = o.fatal ?? n ?? !0;
      r.addIssue({ code: "custom", ...o, fatal: l });
    }
  }) : ha.create();
}
const Tg = {
  object: Ze.lazycreate
};
var ye;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(ye || (ye = {}));
const Ng = (e, t = {
  message: `Input not instance of ${e.name}`
}) => bu((n) => n instanceof e, t), _u = Zt.create, wu = In.create, Ag = Vr.create, Ig = Pn.create, ku = Za.create, Pg = Qn.create, $g = $r.create, Dg = Ga.create, Lg = va.create, Vg = ha.create, Rg = qn.create, Mg = En.create, Fg = Dr.create, Bg = Gt.create, jg = Ze.create, Ug = Ze.strictCreate, zg = ga.create, Wg = Yr.create, Hg = qa.create, Zg = pn.create, Gg = Ya.create, qg = Lr.create, Yg = ea.create, Kg = da.create, Xg = Ka.create, Jg = Xa.create, Qg = $n.create, ey = Ja.create, ty = ya.create, Ti = Qt.create, ny = on.create, ay = Dn.create, ry = Qt.createWithPreprocess, sy = rr.create, oy = () => _u().optional(), iy = () => wu().optional(), ly = () => ku().optional(), uy = {
  string: ((e) => Zt.create({ ...e, coerce: !0 })),
  number: ((e) => In.create({ ...e, coerce: !0 })),
  boolean: ((e) => Za.create({
    ...e,
    coerce: !0
  })),
  bigint: ((e) => Pn.create({ ...e, coerce: !0 })),
  date: ((e) => Qn.create({ ...e, coerce: !0 }))
}, cy = we, Ni = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BRAND: Cg,
  DIRTY: ua,
  EMPTY_PATH: sg,
  INVALID: we,
  NEVER: cy,
  OK: Pt,
  ParseStatus: Nt,
  Schema: Ae,
  ZodAny: ha,
  ZodArray: Gt,
  ZodBigInt: Pn,
  ZodBoolean: Za,
  ZodBranded: vo,
  ZodCatch: Qa,
  ZodDate: Qn,
  ZodDefault: ta,
  ZodDiscriminatedUnion: Yr,
  ZodEffects: Qt,
  ZodEnum: $n,
  ZodError: zt,
  get ZodFirstPartyTypeKind() {
    return ye;
  },
  ZodFunction: da,
  ZodIntersection: qa,
  ZodIssueCode: Z,
  ZodLazy: Ka,
  ZodLiteral: Xa,
  ZodMap: Lr,
  ZodNaN: Vr,
  ZodNativeEnum: Ja,
  ZodNever: En,
  ZodNull: va,
  ZodNullable: Dn,
  ZodNumber: In,
  ZodObject: Ze,
  ZodOptional: on,
  ZodParsedType: re,
  ZodPipeline: rr,
  ZodPromise: ya,
  ZodReadonly: er,
  ZodRecord: Ya,
  ZodSchema: Ae,
  ZodSet: ea,
  ZodString: Zt,
  ZodSymbol: $r,
  ZodTransformer: Qt,
  ZodTuple: pn,
  ZodType: Ae,
  ZodUndefined: Ga,
  ZodUnion: ga,
  ZodUnknown: qn,
  ZodVoid: Dr,
  addIssueToContext: ee,
  any: Vg,
  array: Bg,
  bigint: Ig,
  boolean: ku,
  coerce: uy,
  custom: bu,
  date: Pg,
  datetimeRegex: gu,
  defaultErrorMap: pa,
  discriminatedUnion: Wg,
  effect: Ti,
  enum: Qg,
  function: Kg,
  getErrorMap: Ir,
  getParsedType: bn,
  instanceof: Ng,
  intersection: Hg,
  isAborted: Ds,
  isAsync: Ha,
  isDirty: Ls,
  isValid: Jn,
  late: Tg,
  lazy: Xg,
  literal: Jg,
  makeIssue: Pr,
  map: qg,
  nan: Ag,
  nativeEnum: ey,
  never: Mg,
  null: Lg,
  nullable: ay,
  number: wu,
  object: jg,
  get objectUtil() {
    return $s;
  },
  oboolean: ly,
  onumber: iy,
  optional: ny,
  ostring: oy,
  pipeline: sy,
  preprocess: ry,
  promise: ty,
  quotelessJson: ag,
  record: Gg,
  set: Yg,
  setErrorMap: rg,
  strictObject: Ug,
  string: _u,
  symbol: $g,
  transformer: Ti,
  tuple: Zg,
  undefined: Dg,
  union: zg,
  unknown: Rg,
  get util() {
    return Be;
  },
  void: Fg
}, Symbol.toStringTag, { value: "Module" }));
function Ai(e, t, n, a = !1, r) {
  kn(e, "keydown", (s) => {
    ["Space", "Enter"].includes(s.code) && document.activeElement?.matches(t) && (s.preventDefault(), n(document.activeElement, s));
  }), kn(e, "click", (s) => {
    const o = s.target.closest(
      t
    );
    o && (a && (s.stopPropagation(), s.stopImmediatePropagation()), s.preventDefault(), n(o, s));
  });
}
function dy(e, t, n, a, r) {
  const s = e.includes(n), o = t.indexOf(n), l = t.indexOf(a), u = o < l ? t.slice(o, l + 1) : t.slice(l, o);
  return s ? Ep([...e, ...u]) : e.filter((c) => !u.includes(c));
}
function fy(e, t, n) {
  let a = null;
  const r = /* @__PURE__ */ zm("Shift");
  Fe(
    () => e.value,
    (s, o) => {
      const l = s.length > o.length ? Ko(s, o, n) : Ko(o, s, n);
      if (l.length === 1) {
        const u = l[0];
        r.value && a && (e.value = dy(
          e.value,
          t.value,
          a,
          u
        )), a = u;
      }
    }
  );
}
function Ii(e) {
  const t = e.shape, n = {};
  for (const a in t) {
    const r = t[a], s = r._def.typeName === "ZodOptional", o = r._def.innerType || r;
    let l = r;
    if (o instanceof ga) {
      const c = o._def.options.filter(
        (d) => !(d instanceof va)
      );
      c.length === 1 && (l = c[0].optional());
    }
    l instanceof Zt && l._def?.checks?.[0]?.kind === "datetime" && (l = Ni.date()), s && (l = l.optional()), n[a] = l;
  }
  return Ni.object(n);
}
const xu = /* @__PURE__ */ $({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = qe(e, t);
    return (s, o) => (p(), A(i(Jc), G({ "data-slot": "dropdown-menu" }, i(r)), {
      default: m(() => [
        R(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), my = { class: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, py = /* @__PURE__ */ $({
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
    const n = e, a = t, r = he(n, "class"), s = qe(r, a);
    return (o, l) => (p(), A(i(Qc), G({ "data-slot": "dropdown-menu-checkbox-item" }, i(s), {
      class: i(H)(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        n.class
      )
    }), {
      default: m(() => [
        oe("span", my, [
          b(i(ed), null, {
            default: m(() => [
              b(i(zr), { class: "size-4" })
            ]),
            _: 1
          })
        ]),
        R(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Eu = /* @__PURE__ */ $({
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
    const n = e, a = t, r = he(n, "class"), s = qe(r, a);
    return (o, l) => (p(), A(i(td), null, {
      default: m(() => [
        b(i(nd), G({ "data-slot": "dropdown-menu-content" }, i(s), {
          class: i(H)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--reka-dropdown-menu-content-available-height) min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", n.class)
        }), {
          default: m(() => [
            R(o.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), hr = /* @__PURE__ */ $({
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
    const t = e, n = he(t, "inset", "variant", "class"), a = et(n);
    return (r, s) => (p(), A(i(ad), G({
      "data-slot": "dropdown-menu-item",
      "data-inset": e.inset ? "" : void 0,
      "data-variant": e.variant
    }, i(a), {
      class: i(H)("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive-foreground data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/40 data-[variant=destructive]:focus:text-destructive-foreground data-[variant=destructive]:*:[svg]:!text-destructive-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", t.class)
    }), {
      default: m(() => [
        R(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "data-variant", "class"]));
  }
}), vy = /* @__PURE__ */ $({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(e) {
    const t = e, n = he(t, "class", "inset"), a = et(n);
    return (r, s) => (p(), A(i(rd), G({
      "data-slot": "dropdown-menu-label",
      "data-inset": e.inset ? "" : void 0
    }, i(a), {
      class: i(H)("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", t.class)
    }), {
      default: m(() => [
        R(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-inset", "class"]));
  }
}), Ou = /* @__PURE__ */ $({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const n = et(e);
    return (a, r) => (p(), A(i(sd), G({ "data-slot": "dropdown-menu-trigger" }, i(n)), {
      default: m(() => [
        R(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hy = /* @__PURE__ */ $({
  __name: "DataTableColumnHeader",
  props: {
    title: {},
    sortable: { type: Boolean, default: !1 },
    sortOrder: {},
    hideable: { type: Boolean, default: !0 }
  },
  emits: ["sort", "hide"],
  setup(e, { emit: t }) {
    const n = e, a = t, r = U(() => n.sortOrder ? n.sortOrder === "asc" ? No : To : nf);
    function s(l) {
      a("sort", l);
    }
    function o() {
      a("hide");
    }
    return (l, u) => !e.sortable && !e.hideable ? (p(), j("div", {
      key: 0,
      class: Ee(i(H)("flex items-center space-x-2"))
    }, [
      oe("span", null, se(e.title), 1)
    ], 2)) : (p(), j("div", {
      key: 1,
      class: Ee(i(H)("flex items-center space-x-2"))
    }, [
      b(i(xu), null, {
        default: m(() => [
          b(i(Ou), { "as-child": "" }, {
            default: m(() => [
              b(i(pt), {
                variant: "ghost",
                size: "sm",
                class: "-ml-3 h-8 data-[state=open]:bg-accent text-muted-foreground text-xs font-normal"
              }, {
                default: m(() => [
                  oe("span", null, se(e.title), 1),
                  e.sortable ? (p(), A(mt(r.value), {
                    key: 0,
                    class: "ml-2 !h-3.5 !w-3.5"
                  })) : ve("", !0)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          b(i(Eu), { align: "start" }, {
            default: m(() => [
              e.sortable ? (p(), j(Re, { key: 0 }, [
                b(i(hr), {
                  onClick: u[0] || (u[0] = (c) => s("asc"))
                }, {
                  default: m(() => [
                    b(i(No), { class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                    u[3] || (u[3] = be(" Asc ", -1))
                  ]),
                  _: 1
                }),
                b(i(hr), {
                  onClick: u[1] || (u[1] = (c) => s("desc"))
                }, {
                  default: m(() => [
                    b(i(To), { class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                    u[4] || (u[4] = be(" Desc ", -1))
                  ]),
                  _: 1
                }),
                e.sortOrder ? (p(), A(i(hr), {
                  key: 0,
                  onClick: u[2] || (u[2] = (c) => s(void 0))
                }, {
                  default: m(() => [
                    b(i(Qd), { class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                    u[5] || (u[5] = be(" Clear sort ", -1))
                  ]),
                  _: 1
                })) : ve("", !0)
              ], 64)) : ve("", !0),
              e.sortable && e.hideable ? (p(), A(i(fo), { key: 1 })) : ve("", !0),
              e.hideable ? (p(), A(i(hr), {
                key: 2,
                onClick: o
              }, {
                default: m(() => [
                  b(i(rf), { class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }),
                  u[6] || (u[6] = be(" Hide ", -1))
                ]),
                _: 1
              })) : ve("", !0)
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ], 2));
  }
}), gy = /* @__PURE__ */ $({
  __name: "DataTableViewOptions",
  props: {
    columns: {},
    visibleColumns: {}
  },
  emits: ["update:visibleColumns"],
  setup(e, { emit: t }) {
    const n = e, a = t, r = U(
      () => n.columns.filter((u) => u.title && u.hideable !== !1)
    ), s = U(() => !n.visibleColumns || n.visibleColumns.length === 0 ? n.columns.map((u) => u.id) : n.visibleColumns);
    function o(u) {
      return s.value.includes(u);
    }
    function l(u, c) {
      const d = s.value;
      (typeof c == "boolean" ? c : !1) ? d.includes(u) || a("update:visibleColumns", [...d, u]) : a("update:visibleColumns", d.filter((v) => v !== u));
    }
    return (u, c) => (p(), A(i(xu), null, {
      default: m(() => [
        b(i(Ou), { "as-child": "" }, {
          default: m(() => [
            b(i(pt), {
              variant: "outline",
              size: "sm",
              class: "ml-auto h-8"
            }, {
              default: m(() => [
                b(i(cf), { class: "mr-2 h-4 w-4" }),
                c[0] || (c[0] = be(" View ", -1))
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        b(i(Eu), {
          align: "end",
          class: "w-[150px]"
        }, {
          default: m(() => [
            b(i(vy), null, {
              default: m(() => [...c[1] || (c[1] = [
                be("Toggle columns", -1)
              ])]),
              _: 1
            }),
            b(i(fo)),
            (p(!0), j(Re, null, Ge(r.value, (d) => (p(), A(i(py), {
              key: d.id,
              "model-value": o(d.id),
              "onUpdate:modelValue": (f) => l(d.id, f)
            }, {
              default: m(() => [
                be(se(d.title), 1)
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
}), yy = { class: "flex flex-col flex-1 min-w-0 min-h-0 relative" }, by = {
  key: 0,
  class: "flex items-center justify-end py-2"
}, _y = {
  key: 0,
  class: "absolute inset-0 bg-background/80 backdrop-blur-sm z-10 flex items-center justify-center rounded-md"
}, wy = { class: "flex flex-col items-center gap-2" }, ky = { class: "text-sm text-muted-foreground" }, xy = { class: "[&>tbody>tr:hover]:bg-muted h-1 [&_tr]:border-b [&_th,&_td]:px-2 [&_th,&_td]:py-1 [&_tbody_tr:last-child]:border-b-0 min-h-0 w-full [&_.p-datatable-empty-message]:!bg-transparent [&_.p-datatable-paginator-bottom]:sticky [&_.p-datatable-paginator-bottom]:bottom-0 [&_.p-paginator]:justify-start [&_.p-paginator]:pt-3 [&_.p-paginator]:pb-6 [&_th]:!text-sm [&_tr>*:first-child]:pl-6 [&_tr>*:last-child]:pr-6" }, Ey = { class: "text-left" }, Oy = {
  key: 0,
  class: "!w-6 !pr-0"
}, Sy = {
  key: 1,
  class: "!w-6"
}, Cy = { key: 2 }, Ty = { class: "[&_[data-state=selected]]:bg-muted/50" }, Ny = { class: "bg-muted/50 hover:bg-muted/70" }, Ay = ["colspan"], Iy = { class: "flex items-center gap-2" }, Py = { class: "text-sm" }, $y = ["data-state", "data-row-id"], Dy = {
  key: 0,
  class: "!w-6 !pr-0"
}, Ly = {
  key: 1,
  class: "!w-6 !pr-0"
}, Vy = ["data-col-id", "tabindex"], Ry = { key: 2 }, My = { class: "flex items-center gap-0.5" }, Fy = {
  key: 0,
  class: "hover:!bg-transparent"
}, By = ["colspan"], jy = { class: "p-4" }, Uy = ["data-state", "data-row-id"], zy = {
  key: 0,
  class: "!w-6 !pr-0"
}, Wy = {
  key: 1,
  class: "!w-6 !pr-0"
}, Hy = ["data-col-id", "tabindex"], Zy = { class: "flex items-center gap-0.5" }, Gy = {
  key: 0,
  class: "hover:!bg-transparent"
}, qy = ["colspan"], Yy = { class: "p-4" }, Ky = {
  key: 1,
  class: "@container w-full gap-2 flex items-center px-0 py-3 z-10 transition-[left] duration-200 ease-linear"
}, Xy = { key: 0 }, Jy = { class: "flex gap-2 items-center min-w-0" }, Qy = { class: "text-sm mr-2 line-clamp-1 min-w-0 text-muted-foreground" }, eb = { key: 1 }, tb = { class: "text-sm line-clamp-1 text-muted-foreground" }, nb = {
  key: 2,
  class: "flex flex-1 justify-end items-center gap-4"
}, O1 = /* @__PURE__ */ $({
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
  setup(e, { expose: t, emit: n }) {
    const a = n, { t: r } = aa(), s = U(() => ws(e.columns, (fe) => fe.id)), o = U(() => ws(e.items, (fe) => fe.id)), l = ft(e, "visibleColumns"), u = ft(e, "itemsPerPage"), c = ft(e, "page"), d = ft(e, "sortBy"), f = ft(e, "selected"), v = U(() => e.items && e.items.length > 0);
    Fe(u, () => {
      c.value && c.value > 1 && (c.value = 1);
    });
    function y(fe) {
      !d.value || d.value.key !== fe ? d.value = { key: fe, order: "asc" } : d.value.key === fe && (d.value.order === "asc" ? d.value = { key: fe, order: "desc" } : d.value = void 0);
    }
    const I = vc("container"), S = eg(I, '[data-slot="table-container"]'), P = ng(S);
    Ai(I, "[data-col-id]", (fe) => {
      const X = fe.getAttribute("data-col-id"), ae = fe.closest("tr")?.getAttribute("data-row-id");
      if (!X || !ae)
        return;
      const Y = s.value[X], W = o.value[ae];
      Y && W && Y.onClick?.(W);
    }), Ai(I, "[data-row-id]", (fe) => {
      const X = fe.getAttribute("data-row-id");
      X && a("clickRow", X);
    });
    const w = U(() => e.items), { stateMap: x, toggle: O, toggleAll: E, allToggledState: k, clear: C } = Pi(w, "id", e.storagekey, f);
    fy(
      f,
      U(() => e.items.map((fe) => fe.id))
    ), tg(() => (C(), !0), U(() => f.value.length > 0)), Fe(c, () => C());
    const { stateMap: _, toggle: D, allToggledState: L, toggleAll: J } = Pi(w, "id", e.storagekey), te = U(() => l.value ? e.columns.filter((fe) => l.value?.includes(fe.id)) : e.columns), ne = U(() => te.value.length + (e.selectMode === "multiselect" ? 1 : 0) + (e.hasActionsColumn ? 1 : 0) + (e.expandable ? 1 : 0));
    return t({ selected: f, clearSelected: C }), (fe, X) => {
      const ae = hc("TableEmpty"), Y = gc("tooltip");
      return p(), j("div", yy, [
        e.showOptions ? (p(), j("div", by, [
          R(fe.$slots, "header"),
          b(gy, {
            columns: e.columns,
            "visible-columns": l.value,
            "onUpdate:visibleColumns": X[0] || (X[0] = (W) => l.value = W)
          }, null, 8, ["columns", "visible-columns"])
        ])) : ve("", !0),
        oe("div", {
          ref: "container",
          class: Ee(["min-w-0 min-h-0 relative flex flex-col", { "[&_td:first-child]:!w-0 [&_th:first-child]:!w-0": e.selectMode === "multiselect", "[&_td:last-child]:!w-0 [&_th:last-child]:!w-0": e.hasActionsColumn }])
        }, [
          e.isPending ? (p(), j("div", _y, [
            oe("div", wy, [
              b(i(of), { class: "h-8 w-8 animate-spin text-muted-foreground" }),
              oe("span", ky, se(i(r)("dataTable.loading") || "Loading..."), 1)
            ])
          ])) : ve("", !0),
          oe("div", {
            class: Ee(["flex-1 flex flex-col min-h-0", { "!rounded-md border": e.bordered }])
          }, [
            oe("table", xy, [
              oe("thead", Ey, [
                oe("tr", null, [
                  e.expandable ? (p(), j("th", Oy, [
                    Us((p(), A(pt, {
                      variant: "outline",
                      size: "sm",
                      class: "[&:not(:hover)]:opacity-0",
                      onClick: X[1] || (X[1] = (W) => i(J)())
                    }, {
                      default: m(() => [
                        (p(), A(mt(i(L) ? i(Hn) : i(Zn))))
                      ]),
                      _: 1
                    })), [
                      [Y, "Toggle collapse"]
                    ])
                  ])) : ve("", !0),
                  e.selectMode === "multiselect" ? (p(), j("th", Sy, [
                    b(i(xr), {
                      "model-value": i(k),
                      "onUpdate:modelValue": X[2] || (X[2] = () => i(E)())
                    }, null, 8, ["model-value"])
                  ])) : ve("", !0),
                  (p(!0), j(Re, null, Ge(te.value, (W) => (p(), j("th", {
                    key: W.id
                  }, [
                    b(hy, {
                      title: W.title || i(Cp)(W.id),
                      sortable: e.sortable && W.sortable,
                      "sort-order": d.value?.key === W.id ? d.value.order : void 0,
                      hideable: W.hideable ?? !0,
                      onSort: (q) => q ? y(W.id) : d.value = void 0,
                      onHide: () => l.value = l.value?.filter((q) => q !== W.id)
                    }, null, 8, ["title", "sortable", "sort-order", "hideable", "onSort", "onHide"])
                  ]))), 128)),
                  e.hasActionsColumn ? (p(), j("th", Cy)) : ve("", !0)
                ])
              ]),
              oe("tbody", Ty, [
                e.isGrouped ? (p(!0), j(Re, { key: 0 }, Ge(e.groups, (W, q) => (p(), j(Re, { key: q }, [
                  oe("tr", Ny, [
                    oe("td", {
                      colspan: ne.value,
                      class: "font-medium"
                    }, [
                      oe("div", Iy, [
                        oe("span", Py, se(e.groupByField) + ": " + se(q || "(No value)"), 1),
                        b(i(Qh), {
                          variant: "secondary",
                          class: "ml-2"
                        }, {
                          default: m(() => [
                            be(se(W.length), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ])
                    ], 8, Ay)
                  ]),
                  (p(!0), j(Re, null, Ge(W, (Ce) => (p(), j(Re, {
                    key: Ce.id
                  }, [
                    oe("tr", {
                      "data-state": (i(x)[Ce.id] || e.highlightedRow === Ce.id) && "selected",
                      "data-row-id": Ce.id
                    }, [
                      e.expandable ? (p(), j("td", Dy, [
                        b(pt, {
                          size: "sm",
                          variant: "ghost",
                          class: "h-6 w-6 p-0 -mr-1",
                          onClick: (Me) => i(D)(Ce[e.idcol])
                        }, {
                          default: m(() => [
                            (p(), A(mt(i(_)[Ce[e.idcol]] ? i(Hn) : i(Zn)), { class: "h-4 w-4" }))
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ])) : ve("", !0),
                      e.selectMode === "multiselect" ? (p(), j("td", Ly, [
                        b(i(xr), {
                          "model-value": f.value.includes(Ce.id),
                          "onUpdate:modelValue": (Me) => i(O)(Ce.id)
                        }, null, 8, ["model-value", "onUpdate:modelValue"])
                      ])) : ve("", !0),
                      (p(!0), j(Re, null, Ge(te.value, (Me) => (p(), j("td", {
                        key: Me.id,
                        "data-col-id": Me.id,
                        tabindex: Me.onClick ? 0 : -1,
                        class: Ee(Me.cssClass)
                      }, [
                        R(fe.$slots, `cell:${String(Me.id)}`, {
                          item: Ce,
                          value: Ce[Me.id],
                          expanded: i(_)[Ce[e.idcol]]
                        }, () => [
                          be(se(Ce[Me.id]), 1)
                        ])
                      ], 10, Vy))), 128)),
                      e.hasActionsColumn ? (p(), j("td", Ry, [
                        oe("div", My, [
                          R(fe.$slots, "cell:actions", { item: Ce })
                        ])
                      ])) : ve("", !0)
                    ], 8, $y),
                    e.expandable && i(_)[Ce[e.idcol]] ? (p(), j("tr", Fy, [
                      oe("td", {
                        colspan: ne.value,
                        class: "bg-muted/30 p-0 [&_thead>tr:hover]:bg-transparent [&_th]:h-7 [&_td]:py-0.5"
                      }, [
                        R(fe.$slots, "expanded-row", { item: Ce }, () => [
                          oe("div", jy, se(i(r)("dataTable.expandedContent", { id: Ce[e.idcol] })), 1)
                        ])
                      ], 8, By)
                    ])) : ve("", !0)
                  ], 64))), 128))
                ], 64))), 128)) : (p(!0), j(Re, { key: 1 }, Ge(e.items, (W) => (p(), j(Re, {
                  key: W.id
                }, [
                  oe("tr", {
                    "data-state": (i(x)[W.id] || e.highlightedRow === W[e.idcol]) && "selected",
                    "data-row-id": W.id
                  }, [
                    e.expandable ? (p(), j("td", zy, [
                      b(pt, {
                        size: "sm",
                        variant: "ghost",
                        class: "h-6 w-6 p-0 -mr-1",
                        onClick: (q) => i(D)(W[e.idcol])
                      }, {
                        default: m(() => [
                          (p(), A(mt(i(_)[W[e.idcol]] ? i(Hn) : i(Zn)), { class: "h-4 w-4" }))
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ])) : ve("", !0),
                    e.selectMode === "multiselect" ? (p(), j("td", Wy, [
                      b(i(xr), {
                        "model-value": f.value.includes(W.id),
                        "onUpdate:modelValue": (q) => i(O)(W.id)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ])) : ve("", !0),
                    (p(!0), j(Re, null, Ge(te.value, (q) => (p(), j("td", {
                      key: q.id,
                      "data-col-id": q.id,
                      tabindex: q.onClick ? 0 : -1,
                      class: Ee(q.cssClass)
                    }, [
                      R(fe.$slots, `cell:${String(q.id)}`, {
                        item: W,
                        value: W[q.id],
                        expanded: i(_)[W[e.idcol]]
                      }, () => [
                        be(se(W[q.id]), 1)
                      ])
                    ], 10, Hy))), 128)),
                    e.hasActionsColumn ? (p(), j("td", {
                      key: 2,
                      class: Ee(["sticky right-0", { "[[data-state=selected]_&]:bg-muted/90 ": !i(P).right }])
                    }, [
                      oe("div", Zy, [
                        R(fe.$slots, "cell:actions", { item: W })
                      ])
                    ], 2)) : ve("", !0)
                  ], 8, Uy),
                  e.expandable && i(_)[W[e.idcol]] ? (p(), j("tr", Gy, [
                    oe("td", {
                      colspan: ne.value,
                      class: "bg-muted/30 p-0 [&_thead>tr:hover]:bg-transparent [&_th]:h-7 [&_td]:py-0.5"
                    }, [
                      R(fe.$slots, "expanded-row", { item: W }, () => [
                        oe("div", Yy, se(i(r)("dataTable.expandedContent", { id: W[e.idcol] })), 1)
                      ])
                    ], 8, qy)
                  ])) : ve("", !0)
                ], 64))), 128)),
                v.value ? ve("", !0) : (p(), A(ae, {
                  key: 2,
                  colspan: ne.value
                }, {
                  default: m(() => [
                    be(se(i(r)("dataTable.noEntriesFound")), 1)
                  ]),
                  _: 1
                }, 8, ["colspan"]))
              ])
            ])
          ], 2)
        ], 2),
        e.total && e.total > 0 ? (p(), j("div", Ky, [
          e.selectMode === "multiselect" && f.value.length > 0 ? (p(), j("div", Xy, [
            oe("div", Jy, [
              oe("span", Qy, se(i(r)("dataTable.elementsSelected", {
                count: f.value.length,
                total: e.items.length
              })), 1),
              f.value.length > 0 ? R(fe.$slots, "bulk", {
                key: 0,
                selected: f.value
              }) : ve("", !0)
            ])
          ])) : f.value.length === 0 && e.total !== void 0 ? (p(), j("div", eb, [
            oe("span", tb, se(i(r)("dataTable.totalElements", { total: e.total })), 1)
          ])) : ve("", !0),
          e.total !== void 0 ? (p(), j("div", nb, [
            b(Jh, {
              page: c.value,
              "onUpdate:page": X[3] || (X[3] = (W) => c.value = W),
              "items-per-page": u.value,
              "onUpdate:itemsPerPage": X[4] || (X[4] = (W) => u.value = W),
              "page-size-options": e.pageSizeOptions,
              "hide-items-per-page": f.value.length > 0 || e.pageSizeOptions.length < 2,
              total: e.total,
              disabled: e.isPending
            }, null, 8, ["page", "items-per-page", "page-size-options", "hide-items-per-page", "total", "disabled"])
          ])) : ve("", !0)
        ])) : ve("", !0)
      ]);
    };
  }
});
function Pi(e, t, n, a) {
  const r = a || (n ? Wm(n, []) : pe([])), s = U(
    () => Object.fromEntries(r.value.map((f) => [f, !0]))
  ), o = (f) => r.value = Op(r.value, f), l = U(
    () => r.value.length > 0 ? r.value?.length === e.value.length ? !0 : "indeterminate" : !1
  );
  function u() {
    r.value = [];
  }
  function c() {
    r.value = e.value.map((f) => f[t]);
  }
  return {
    state: r,
    stateMap: s,
    toggle: o,
    allToggledState: l,
    toggleAll: () => l.value === !1 || l.value === "indeterminate" ? c() : u(),
    clear: u
  };
}
const ab = ["datetime", "title"], S1 = /* @__PURE__ */ $({
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
    };
    function a(u, c) {
      let d = n[u] || u;
      return c && Object.entries(c).forEach(([f, v]) => {
        d = d.replace(`{${f}}`, String(v));
      }), d;
    }
    const r = U(() => t.date instanceof Date ? t.date : typeof t.date == "string" || typeof t.date == "number" ? new Date(t.date) : /* @__PURE__ */ new Date()), s = /* @__PURE__ */ Sm(r, t.format, {
      locales: t.locale
    }), o = U(() => {
      if (!t.relative)
        return null;
      const c = (/* @__PURE__ */ new Date()).getTime() - r.value.getTime(), d = Math.floor(c / 1e3), f = Math.floor(d / 60), v = Math.floor(f / 60), y = Math.floor(v / 24);
      return y > 0 ? a("date.daysAgo", { count: y }) : v > 0 ? a("date.hoursAgo", { count: v }) : f > 0 ? a("date.minutesAgo", { count: f }) : a("date.justNow");
    }), l = U(() => t.relative ? o.value : s.value);
    return (u, c) => (p(), j("time", {
      datetime: r.value.toISOString(),
      title: t.relative ? i(s) : void 0,
      class: "whitespace-nowrap"
    }, se(l.value), 9, ab));
  }
}), rb = { class: "min-w-0 line-clamp-1 break-spaces text-left whitespace-normal space-x-1" }, sb = { class: "text-muted-foreground" }, ob = { class: "font-semibold" }, ib = {
  key: 1,
  class: "text-muted-foreground"
}, $i = /* @__PURE__ */ $({
  __name: "DisplayGraduated",
  props: {
    value: {}
  },
  setup(e) {
    function t(n) {
      return {
        "common.novalue": "No value"
      }[n] || n;
    }
    return (n, a) => (p(), j("div", rb, [
      e.value?.length ? (p(!0), j(Re, { key: 0 }, Ge(e.value, (r, s) => (p(), j("span", {
        key: s,
        class: "bg-muted text-xs px-1 py-0.5 rounded"
      }, [
        oe("span", sb, " ≥" + se(`${r.from}:`), 1),
        a[0] || (a[0] = be()),
        oe("span", ob, se(r.value), 1)
      ]))), 128)) : (p(), j("span", ib, se(t("common.novalue")), 1))
    ]));
  }
}), ba = Ut([]), lb = U(() => ws(ba.value, (e) => e.key)), ho = pe({});
function Su(e) {
  const t = ba.value.findIndex((n) => n.key === e);
  t !== -1 && ba.value.splice(t, 1), mu.remove(e);
}
const Cu = (e) => {
  ho.value[e] = !1, lb.value[e]?.onClose?.(), setTimeout(() => Su(e), 600);
}, ub = (e) => (e.key = e.key ?? `${Math.random()}`, ba.value.push(e), ll(ba), ho.value[e.key] = !0, mu.add(() => (Cu(e.key), !0), e.key), e.key), cb = { close: Cu, visible: ho, open: ub, instances: ba, removeInstance: Su }, Tu = () => cb, C1 = /* @__PURE__ */ $({
  __name: "DynamicComponentProvider",
  setup(e) {
    const { close: t, visible: n, instances: a } = Tu();
    return (r, s) => (p(!0), j(Re, null, Ge(i(a), (o) => (p(), A(mt(o.component), G({
      key: o.key,
      open: i(n)[o.key]
    }, { ref_for: !0 }, o.componentProps || {}, {
      "onUpdate:open": (l) => !l && i(t)(o.key)
    }), null, 16, ["open", "onUpdate:open"]))), 128));
  }
}), db = { class: "text-muted-foreground py-4 flex gap-2 items-center text-sm" }, fb = /* @__PURE__ */ $({
  __name: "Empty",
  setup(e) {
    function t(n) {
      return {
        "common.noValues": "No values"
      }[n] || n;
    }
    return (n, a) => (p(), j("div", db, [
      b(i(sf), { size: 16 }),
      oe("span", null, [
        R(n.$slots, "default", {}, () => [
          be(se(t("common.noValues")), 1)
        ])
      ])
    ]));
  }
}), mb = { class: "flex-1" }, pb = { class: "flex gap-1 items-center" }, vb = {
  key: 0,
  class: "flex-1"
}, hb = {
  key: 1,
  class: "text-muted-foreground text-sm"
}, gb = /* @__PURE__ */ $({
  inheritAttrs: !1,
  __name: "SelectListOptions",
  props: /* @__PURE__ */ vt({
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
    const t = ft(e, "modelValue"), n = pe(""), { startsWith: a } = od({ sensitivity: "base" }), r = U(() => F(e.options).filter((l) => a(l.label, n.value))), s = U(() => !!F(e.options).length);
    function o(l, u) {
      let d = {
        "common.elementCountSelected": "{count} selected"
      }[l] || l;
      return u && Object.entries(u).forEach(([f, v]) => {
        d = d.replace(`{${f}}`, String(v));
      }), d;
    }
    return (l, u) => (p(), j(Re, null, [
      b(i(id), {
        modelValue: t.value,
        "onUpdate:modelValue": u[1] || (u[1] = (c) => t.value = c),
        multiple: e.multiple
      }, {
        default: m(() => [
          b(i(ld), {
            modelValue: n.value,
            "onUpdate:modelValue": u[0] || (u[0] = (c) => n.value = c),
            disabled: !s.value,
            class: Ee(i(H)(
              "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
              "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
            ))
          }, null, 8, ["modelValue", "disabled", "class"]),
          r.value.length ? ve("", !0) : (p(), A(fb, { key: 0 })),
          b(i(ud), { class: "max-h-[400px] overflow-auto" }, {
            default: m(() => [
              (p(!0), j(Re, null, Ge(r.value, (c) => (p(), A(i(cd), {
                key: String(c.value),
                value: c.value,
                class: "focus:bg-accent focus:text-accent-foreground data-[highlighted]:bg-accent [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2"
              }, {
                default: m(() => [
                  oe("div", mb, se(c.label), 1),
                  b(i(dd), null, {
                    default: m(() => [
                      b(i(zr), { size: 12 })
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
      oe("div", pb, [
        e.showAddItemButton ? (p(), j("div", vb, [
          b(pt, {
            size: "sm",
            class: "sticky bottom-0",
            variant: "ghost",
            onClick: u[2] || (u[2] = (c) => l.$emit("onAddItem"))
          }, {
            default: m(() => [
              b(i(Wr)),
              be(" " + se(e.addItemButtonLabel), 1)
            ]),
            _: 1
          })
        ])) : ve("", !0),
        s.value && e.multiple ? (p(), j("div", hb, se(o("common.elementCountSelected", { count: t.value.length })), 1)) : ve("", !0)
      ])
    ], 64));
  }
}), yb = /* @__PURE__ */ $({
  __name: "AlertDialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = qe(e, t);
    return (s, o) => (p(), A(i(fd), G({ "data-slot": "alert-dialog" }, i(r)), {
      default: m(() => [
        R(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bb = /* @__PURE__ */ $({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = he(t, "class");
    return (a, r) => (p(), A(i(md), G(i(n), {
      class: i(H)(i(en)(), t.class)
    }), {
      default: m(() => [
        R(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), _b = /* @__PURE__ */ $({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = he(t, "class");
    return (a, r) => (p(), A(i(pd), G(i(n), {
      class: i(H)(
        i(en)({ variant: "outline" }),
        "mt-2 sm:mt-0",
        t.class
      )
    }), {
      default: m(() => [
        R(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), wb = /* @__PURE__ */ $({
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
    const n = e, a = t, r = he(n, "class"), s = qe(r, a);
    return (o, l) => (p(), A(i(vd), null, {
      default: m(() => [
        b(i(hd), {
          "data-slot": "alert-dialog-overlay",
          class: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80"
        }),
        b(i(gd), G({ "data-slot": "alert-dialog-content" }, i(s), {
          class: i(H)(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
            n.class
          )
        }), {
          default: m(() => [
            R(o.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), kb = /* @__PURE__ */ $({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = he(t, "class");
    return (a, r) => (p(), A(i(yd), G({ "data-slot": "alert-dialog-description" }, i(n), {
      class: i(H)("text-muted-foreground text-sm", t.class)
    }), {
      default: m(() => [
        R(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), xb = /* @__PURE__ */ $({
  __name: "AlertDialogFooter",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (p(), j("div", {
      "data-slot": "alert-dialog-footer",
      class: Ee(
        i(H)(
          "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
          t.class
        )
      )
    }, [
      R(n.$slots, "default")
    ], 2));
  }
}), Eb = /* @__PURE__ */ $({
  __name: "AlertDialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (p(), j("div", {
      "data-slot": "alert-dialog-header",
      class: Ee(i(H)("flex flex-col gap-2 text-center sm:text-left", t.class))
    }, [
      R(n.$slots, "default")
    ], 2));
  }
}), Ob = /* @__PURE__ */ $({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = he(t, "class");
    return (a, r) => (p(), A(i(bd), G({ "data-slot": "alert-dialog-title" }, i(n), {
      class: i(H)("text-lg font-semibold", t.class)
    }), {
      default: m(() => [
        R(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Sb = /* @__PURE__ */ $({
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
    const t = e, n = ft(e, "open"), a = pe(!1);
    async function r() {
      a.value = !0, (t.onOk ? await t.onOk() : !0) && close(), a.value = !1;
    }
    const { t: s } = aa();
    return (o, l) => (p(), A(i(yb), {
      open: n.value,
      "onUpdate:open": l[2] || (l[2] = (u) => n.value = u)
    }, {
      default: m(() => [
        b(i(wb), null, {
          default: m(() => [
            b(i(Eb), null, {
              default: m(() => [
                b(i(Ob), null, {
                  default: m(() => [
                    be(se(e.title || i(s)("dialog.alert.defaultTitle")), 1)
                  ]),
                  _: 1
                }),
                b(i(kb), null, {
                  default: m(() => [
                    be(se(e.description || i(s)("dialog.alert.defaultDescription")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            b(i(xb), null, {
              default: m(() => [
                b(i(_b), {
                  disabled: a.value,
                  onClick: l[0] || (l[0] = (u) => n.value = !1)
                }, {
                  default: m(() => [
                    be(se(i(s)("common.cancel")), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                b(i(bb), {
                  loading: a.value,
                  onClick: l[1] || (l[1] = (u) => r())
                }, {
                  default: m(() => [
                    be(se(i(s)("common.continue")), 1)
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
function kt(e) {
  return typeof e == "function";
}
function ca(e) {
  return e == null;
}
const Ln = (e) => e !== null && !!e && typeof e == "object" && !Array.isArray(e);
function go(e) {
  return Number(e) >= 0;
}
function Cb(e) {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}
function Tb(e) {
  return typeof e == "object" && e !== null;
}
function Nb(e) {
  return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
function Di(e) {
  if (!Tb(e) || Nb(e) !== "[object Object]")
    return !1;
  if (Object.getPrototypeOf(e) === null)
    return !0;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function tr(e, t) {
  return Object.keys(t).forEach((n) => {
    if (Di(t[n]) && Di(e[n])) {
      e[n] || (e[n] = {}), tr(e[n], t[n]);
      return;
    }
    e[n] = t[n];
  }), e;
}
function La(e) {
  const t = e.split(".");
  if (!t.length)
    return "";
  let n = String(t[0]);
  for (let a = 1; a < t.length; a++) {
    if (go(t[a])) {
      n += `[${t[a]}]`;
      continue;
    }
    n += `.${t[a]}`;
  }
  return n;
}
const Ab = {};
function Ib(e) {
  return Ab[e];
}
function Li(e, t, n) {
  typeof n.value == "object" && (n.value = Ve(n.value)), !n.enumerable || n.get || n.set || !n.configurable || !n.writable || t === "__proto__" ? Object.defineProperty(e, t, n) : e[t] = n.value;
}
function Ve(e) {
  if (typeof e != "object") return e;
  var t = 0, n, a, r, s = Object.prototype.toString.call(e);
  if (s === "[object Object]" ? r = Object.create(e.__proto__ || null) : s === "[object Array]" ? r = Array(e.length) : s === "[object Set]" ? (r = /* @__PURE__ */ new Set(), e.forEach(function(o) {
    r.add(Ve(o));
  })) : s === "[object Map]" ? (r = /* @__PURE__ */ new Map(), e.forEach(function(o, l) {
    r.set(Ve(l), Ve(o));
  })) : s === "[object Date]" ? r = /* @__PURE__ */ new Date(+e) : s === "[object RegExp]" ? r = new RegExp(e.source, e.flags) : s === "[object DataView]" ? r = new e.constructor(Ve(e.buffer)) : s === "[object ArrayBuffer]" ? r = e.slice(0) : s.slice(-6) === "Array]" && (r = new e.constructor(e)), r) {
    for (a = Object.getOwnPropertySymbols(e); t < a.length; t++)
      Li(r, a[t], Object.getOwnPropertyDescriptor(e, a[t]));
    for (t = 0, a = Object.getOwnPropertyNames(e); t < a.length; t++)
      Object.hasOwnProperty.call(r, n = a[t]) && r[n] === e[n] || Li(r, n, Object.getOwnPropertyDescriptor(e, n));
  }
  return r || e;
}
const ra = Symbol("vee-validate-form"), Pb = Symbol("vee-validate-form-context"), sr = Symbol("vee-validate-field-instance"), Rr = Symbol("Default empty value"), Nu = typeof window < "u";
function Rs(e) {
  return kt(e) && !!e.__locatorRef;
}
function Xt(e) {
  return !!e && kt(e.parse) && e.__type === "VVTypedSchema";
}
function Mr(e) {
  return !!e && kt(e.validate);
}
function or(e) {
  return e === "checkbox" || e === "radio";
}
function $b(e) {
  return Ln(e) || Array.isArray(e);
}
function Db(e) {
  return Array.isArray(e) ? e.length === 0 : Ln(e) && Object.keys(e).length === 0;
}
function ir(e) {
  return /^\[.+\]$/i.test(e);
}
function Lb(e) {
  return Au(e) && e.multiple;
}
function Au(e) {
  return e.tagName === "SELECT";
}
function Vb(e, t) {
  const n = ![!1, null, void 0, 0].includes(t.multiple) && !Number.isNaN(t.multiple);
  return e === "select" && "multiple" in t && n;
}
function Rb(e, t) {
  return !Vb(e, t) && t.type !== "file" && !or(t.type);
}
function Iu(e) {
  return yo(e) && e.target && "submit" in e.target;
}
function yo(e) {
  return e ? !!(typeof Event < "u" && kt(Event) && e instanceof Event || e && e.srcElement) : !1;
}
function Vi(e, t) {
  return t in e && e[t] !== Rr;
}
function _t(e, t) {
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
    if (Mi(e) && Mi(t))
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
    if (e = Ri(e), t = Ri(t), r = Object.keys(e), n = r.length, n !== Object.keys(t).length)
      return !1;
    for (a = n; a-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, r[a]))
        return !1;
    for (a = n; a-- !== 0; ) {
      var s = r[a];
      if (!_t(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Ri(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function Mi(e) {
  return Nu ? e instanceof File : !1;
}
function Kr(e) {
  return ir(e) ? e.replace(/\[|\]/gi, "") : e;
}
function Qe(e, t, n) {
  return e ? ir(t) ? e[Kr(t)] : (t || "").split(/\.|\[(\d+)\]/).filter(Boolean).reduce((r, s) => $b(r) && s in r ? r[s] : n, e) : n;
}
function gt(e, t, n) {
  if (ir(t)) {
    e[Kr(t)] = n;
    return;
  }
  const a = t.split(/\.|\[(\d+)\]/).filter(Boolean);
  let r = e;
  for (let s = 0; s < a.length; s++) {
    if (s === a.length - 1) {
      r[a[s]] = n;
      return;
    }
    (!(a[s] in r) || ca(r[a[s]])) && (r[a[s]] = go(a[s + 1]) ? [] : {}), r = r[a[s]];
  }
}
function ds(e, t) {
  if (Array.isArray(e) && go(t)) {
    e.splice(Number(t), 1);
    return;
  }
  Ln(e) && delete e[t];
}
function Fi(e, t) {
  if (ir(t)) {
    delete e[Kr(t)];
    return;
  }
  const n = t.split(/\.|\[(\d+)\]/).filter(Boolean);
  let a = e;
  for (let s = 0; s < n.length; s++) {
    if (s === n.length - 1) {
      ds(a, n[s]);
      break;
    }
    if (!(n[s] in a) || ca(a[n[s]]))
      break;
    a = a[n[s]];
  }
  const r = n.map((s, o) => Qe(e, n.slice(0, o).join(".")));
  for (let s = r.length - 1; s >= 0; s--)
    if (Db(r[s])) {
      if (s === 0) {
        ds(e, n[0]);
        continue;
      }
      ds(r[s - 1], n[s - 1]);
    }
}
function Lt(e) {
  return Object.keys(e);
}
function lr(e, t = void 0) {
  const n = Tt();
  return n?.provides[e] || dn(e, t);
}
function Er(e) {
  ul(`[vee-validate]: ${e}`);
}
function Bi(e, t, n) {
  if (Array.isArray(e)) {
    const a = [...e], r = a.findIndex((s) => _t(s, t));
    return r >= 0 ? a.splice(r, 1) : a.push(t), a;
  }
  return _t(e, t) ? n : t;
}
function Mb(e, t) {
  let n, a;
  return function(...r) {
    const s = this;
    return n || (n = !0, setTimeout(() => n = !1, t), a = e.apply(s, r)), a;
  };
}
function ji(e, t = 0) {
  let n = null, a = [];
  return function(...r) {
    return n && clearTimeout(n), n = setTimeout(() => {
      const s = e(...r);
      a.forEach((o) => o(s)), a = [];
    }, t), new Promise((s) => a.push(s));
  };
}
function Fb(e, t) {
  return Ln(t) && t.number ? Cb(e) : e;
}
function Ms(e, t) {
  let n;
  return async function(...r) {
    const s = e(...r);
    n = s;
    const o = await s;
    return s !== n ? o : (n = void 0, t(o, r));
  };
}
function Bb({ get: e, set: t }) {
  const n = pe(Ve(e()));
  return Fe(e, (a) => {
    _t(a, n.value) || (n.value = Ve(a));
  }, {
    deep: !0
  }), Fe(n, (a) => {
    _t(a, e()) || t(Ve(a));
  }, {
    deep: !0
  }), n;
}
function Fs(e) {
  return Array.isArray(e) ? e : e ? [e] : [];
}
function gr(e, t) {
  const n = {};
  for (const a in e)
    t.includes(a) || (n[a] = e[a]);
  return n;
}
function jb(e) {
  let t = null, n = [];
  return function(...a) {
    const r = St(() => {
      if (t !== r)
        return;
      const s = e(...a);
      n.forEach((o) => o(s)), n = [], t = null;
    });
    return t = r, new Promise((s) => n.push(s));
  };
}
function Xr(e, t, n) {
  return t.slots.default ? typeof e == "string" || !e ? t.slots.default(n()) : {
    default: () => {
      var a, r;
      return (r = (a = t.slots).default) === null || r === void 0 ? void 0 : r.call(a, n());
    }
  } : t.slots.default;
}
function fs(e) {
  if (Pu(e))
    return e._value;
}
function Pu(e) {
  return "_value" in e;
}
function Ub(e) {
  return e.type === "number" || e.type === "range" ? Number.isNaN(e.valueAsNumber) ? e.value : e.valueAsNumber : e.value;
}
function Fr(e) {
  if (!yo(e))
    return e;
  const t = e.target;
  if (or(t.type) && Pu(t))
    return fs(t);
  if (t.type === "file" && t.files) {
    const n = Array.from(t.files);
    return t.multiple ? n : n[0];
  }
  if (Lb(t))
    return Array.from(t.options).filter((n) => n.selected && !n.disabled).map(fs);
  if (Au(t)) {
    const n = Array.from(t.options).find((a) => a.selected);
    return n ? fs(n) : t.value;
  }
  return Ub(t);
}
function $u(e) {
  const t = {};
  return Object.defineProperty(t, "_$$isNormalized", {
    value: !0,
    writable: !1,
    enumerable: !1,
    configurable: !1
  }), e ? Ln(e) && e._$$isNormalized ? e : Ln(e) ? Object.keys(e).reduce((n, a) => {
    const r = zb(e[a]);
    return e[a] !== !1 && (n[a] = Ui(r)), n;
  }, t) : typeof e != "string" ? t : e.split("|").reduce((n, a) => {
    const r = Wb(a);
    return r.name && (n[r.name] = Ui(r.params)), n;
  }, t) : t;
}
function zb(e) {
  return e === !0 ? [] : Array.isArray(e) || Ln(e) ? e : [e];
}
function Ui(e) {
  const t = (n) => typeof n == "string" && n[0] === "@" ? Hb(n.slice(1)) : n;
  return Array.isArray(e) ? e.map(t) : e instanceof RegExp ? [e] : Object.keys(e).reduce((n, a) => (n[a] = t(e[a]), n), {});
}
const Wb = (e) => {
  let t = [];
  const n = e.split(":")[0];
  return e.includes(":") && (t = e.split(":").slice(1).join(":").split(",")), { name: n, params: t };
};
function Hb(e) {
  const t = (n) => {
    var a;
    return (a = Qe(n, e)) !== null && a !== void 0 ? a : n[e];
  };
  return t.__locatorRef = e, t;
}
function Zb(e) {
  return Array.isArray(e) ? e.filter(Rs) : Lt(e).filter((t) => Rs(e[t])).map((t) => e[t]);
}
const Gb = {
  generateMessage: ({ field: e }) => `${e} is not valid.`,
  bails: !0,
  validateOnBlur: !0,
  validateOnChange: !0,
  validateOnInput: !1,
  validateOnModelUpdate: !0
};
let qb = Object.assign({}, Gb);
const Wn = () => qb;
async function Du(e, t, n = {}) {
  const a = n?.bails, r = {
    name: n?.name || "{field}",
    rules: t,
    label: n?.label,
    bails: a ?? !0,
    formData: n?.values || {}
  }, s = await Yb(r, e);
  return Object.assign(Object.assign({}, s), { valid: !s.errors.length });
}
async function Yb(e, t) {
  const n = e.rules;
  if (Xt(n) || Mr(n))
    return Xb(t, Object.assign(Object.assign({}, e), { rules: n }));
  if (kt(n) || Array.isArray(n)) {
    const l = {
      field: e.label || e.name,
      name: e.name,
      label: e.label,
      form: e.formData,
      value: t
    }, u = Array.isArray(n) ? n : [n], c = u.length, d = [];
    for (let f = 0; f < c; f++) {
      const v = u[f], y = await v(t, l);
      if (!(typeof y != "string" && !Array.isArray(y) && y)) {
        if (Array.isArray(y))
          d.push(...y);
        else {
          const S = typeof y == "string" ? y : Vu(l);
          d.push(S);
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
  const a = Object.assign(Object.assign({}, e), { rules: $u(n) }), r = [], s = Object.keys(a.rules), o = s.length;
  for (let l = 0; l < o; l++) {
    const u = s[l], c = await Jb(a, t, {
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
function Kb(e) {
  return !!e && e.name === "ValidationError";
}
function Lu(e) {
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
        if (!Kb(s))
          throw s;
        if (!(!((r = s.inner) === null || r === void 0) && r.length) && s.errors.length)
          return { errors: [{ path: s.path, errors: s.errors }] };
        const o = s.inner.reduce((l, u) => {
          const c = u.path || "";
          return l[c] || (l[c] = { errors: [], path: c }), l[c].errors.push(...u.errors), l;
        }, {});
        return { errors: Object.values(o) };
      }
    }
  };
}
async function Xb(e, t) {
  const a = await (Xt(t.rules) ? t.rules : Lu(t.rules)).parse(e, { formData: t.formData }), r = [];
  for (const s of a.errors)
    s.errors.length && r.push(...s.errors);
  return {
    value: a.value,
    errors: r
  };
}
async function Jb(e, t, n) {
  const a = Ib(n.name);
  if (!a)
    throw new Error(`No such validator '${n.name}' exists.`);
  const r = Qb(n.params, e.formData), s = {
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
    error: o ? void 0 : Vu(s)
  };
}
function Vu(e) {
  const t = Wn().generateMessage;
  return t ? t(e) : "Field is invalid";
}
function Qb(e, t) {
  const n = (a) => Rs(a) ? a(t) : a;
  return Array.isArray(e) ? e.map(n) : Object.keys(e).reduce((a, r) => (a[r] = n(e[r]), a), {});
}
async function e_(e, t) {
  const a = await (Xt(e) ? e : Lu(e)).parse(Ve(t), { formData: Ve(t) }), r = {}, s = {};
  for (const o of a.errors) {
    const l = o.errors, u = (o.path || "").replace(/\["(\d+)"\]/g, (c, d) => `[${d}]`);
    r[u] = { valid: !l.length, errors: l }, l.length && (s[u] = l[0]);
  }
  return {
    valid: !a.errors.length,
    results: r,
    errors: s,
    values: a.value,
    source: "schema"
  };
}
async function t_(e, t, n) {
  const r = Lt(e).map(async (c) => {
    var d, f, v;
    const y = (d = n?.names) === null || d === void 0 ? void 0 : d[c], I = await Du(Qe(t, c), e[c], {
      name: y?.name || c,
      label: y?.label,
      values: t,
      bails: (v = (f = n?.bailsMap) === null || f === void 0 ? void 0 : f[c]) !== null && v !== void 0 ? v : !0
    });
    return Object.assign(Object.assign({}, I), { path: c });
  });
  let s = !0;
  const o = await Promise.all(r), l = {}, u = {};
  for (const c of o)
    l[c.path] = {
      valid: c.valid,
      errors: c.errors
    }, c.valid || (s = !1, u[c.path] = c.errors[0]);
  return {
    valid: s,
    results: l,
    errors: u,
    source: "schema"
  };
}
let zi = 0;
function n_(e, t) {
  const { value: n, initialValue: a, setInitialValue: r } = a_(e, t.modelValue, t.form);
  if (!t.form) {
    let v = function(y) {
      var I;
      "value" in y && (n.value = y.value), "errors" in y && c(y.errors), "touched" in y && (f.touched = (I = y.touched) !== null && I !== void 0 ? I : f.touched), "initialValue" in y && r(y.initialValue);
    };
    const { errors: u, setErrors: c } = o_(), d = zi >= Number.MAX_SAFE_INTEGER ? 0 : ++zi, f = s_(n, a, u, t.schema);
    return {
      id: d,
      path: e,
      value: n,
      initialValue: a,
      meta: f,
      flags: { pendingUnmount: { [d]: !1 }, pendingReset: !1 },
      errors: u,
      setState: v
    };
  }
  const s = t.form.createPathState(e, {
    bails: t.bails,
    label: t.label,
    type: t.type,
    validate: t.validate,
    schema: t.schema
  }), o = U(() => s.errors);
  function l(u) {
    var c, d, f;
    "value" in u && (n.value = u.value), "errors" in u && ((c = t.form) === null || c === void 0 || c.setFieldError(i(e), u.errors)), "touched" in u && ((d = t.form) === null || d === void 0 || d.setFieldTouched(i(e), (f = u.touched) !== null && f !== void 0 ? f : !1)), "initialValue" in u && r(u.initialValue);
  }
  return {
    id: Array.isArray(s.id) ? s.id[s.id.length - 1] : s.id,
    path: e,
    value: n,
    errors: o,
    meta: s,
    initialValue: a,
    flags: s.__flags,
    setState: l
  };
}
function a_(e, t, n) {
  const a = pe(i(t));
  function r() {
    return n ? Qe(n.initialValues.value, i(e), i(a)) : i(a);
  }
  function s(c) {
    if (!n) {
      a.value = c;
      return;
    }
    n.setFieldInitialValue(i(e), c, !0);
  }
  const o = U(r);
  if (!n)
    return {
      value: pe(r()),
      initialValue: o,
      setInitialValue: s
    };
  const l = r_(t, n, o, e);
  return n.stageInitialValue(i(e), l, !0), {
    value: U({
      get() {
        return Qe(n.values, i(e));
      },
      set(c) {
        n.setFieldValue(i(e), c, !1);
      }
    }),
    initialValue: o,
    setInitialValue: s
  };
}
function r_(e, t, n, a) {
  return sn(e) ? i(e) : e !== void 0 ? e : Qe(t.values, i(a), i(n));
}
function s_(e, t, n, a) {
  const r = U(() => {
    var o, l, u;
    return (u = (l = (o = F(a)) === null || o === void 0 ? void 0 : o.describe) === null || l === void 0 ? void 0 : l.call(o).required) !== null && u !== void 0 ? u : !1;
  }), s = cn({
    touched: !1,
    pending: !1,
    valid: !0,
    required: r,
    validated: !!i(n).length,
    initialValue: U(() => i(t)),
    dirty: U(() => !_t(i(e), i(t)))
  });
  return Fe(n, (o) => {
    s.valid = !o.length;
  }, {
    immediate: !0,
    flush: "sync"
  }), s;
}
function o_() {
  const e = pe([]);
  return {
    errors: e,
    setErrors: (t) => {
      e.value = Fs(t);
    }
  };
}
const Ra = {}, Ma = {}, Fa = "vee-validate-inspector", Vt = {
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
let ut = null, _n;
async function Ru(e) {
  if (process.env.NODE_ENV !== "production") {
    if (!Nu)
      return;
    (await import("./index-Cj4LybIA.js")).setupDevtoolsPlugin({
      id: "vee-validate-devtools-plugin",
      label: "VeeValidate Plugin",
      packageName: "vee-validate",
      homepage: "https://vee-validate.logaretm.com/v4",
      app: e,
      logo: "https://vee-validate.logaretm.com/v4/logo.png"
    }, (n) => {
      _n = n, n.addInspector({
        id: Fa,
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
      }), n.on.getInspectorTree((a) => {
        if (a.inspectorId !== Fa)
          return;
        const r = Object.values(Ra), s = Object.values(Ma);
        a.rootNodes = [
          ...r.map(u_),
          ...s.map((o) => d_(o))
        ];
      }), n.on.getInspectorState((a) => {
        if (a.inspectorId !== Fa)
          return;
        const { form: r, field: s, state: o, type: l } = f_(a.nodeId);
        if (n.unhighlightElement(), r && l === "form") {
          a.state = m_(r), ut = { type: "form", form: r }, n.highlightElement(r._vm);
          return;
        }
        if (o && l === "pathState" && r) {
          a.state = Wi(o), ut = { type: "pathState", state: o, form: r };
          return;
        }
        if (s && l === "field") {
          a.state = Wi({
            errors: s.errors.value,
            dirty: s.meta.dirty,
            valid: s.meta.valid,
            touched: s.meta.touched,
            value: s.value.value,
            initialValue: s.meta.initialValue
          }), ut = { field: s, type: "field" }, n.highlightElement(s._vm);
          return;
        }
        ut = null, n.unhighlightElement();
      });
    });
  }
}
const _a = Mb(() => {
  setTimeout(async () => {
    await St(), _n?.sendInspectorState(Fa), _n?.sendInspectorTree(Fa);
  }, 100);
}, 100);
function i_(e) {
  const t = Tt();
  if (!_n) {
    const n = t?.appContext.app;
    if (!n)
      return;
    Ru(n);
  }
  Ra[e.formId] = Object.assign({}, e), Ra[e.formId]._vm = t, Ur(() => {
    delete Ra[e.formId], _a();
  }), _a();
}
function l_(e) {
  const t = Tt();
  if (!_n) {
    const n = t?.appContext.app;
    if (!n)
      return;
    Ru(n);
  }
  Ma[e.id] = Object.assign({}, e), Ma[e.id]._vm = t, Ur(() => {
    delete Ma[e.id], _a();
  }), _a();
}
function u_(e) {
  const { textColor: t, bgColor: n } = Fu(e.meta.value.valid), a = {};
  Object.values(e.getAllPathStates()).forEach((o) => {
    gt(a, F(o.path), c_(o, e));
  });
  function r(o, l = []) {
    const u = [...l].pop();
    return "id" in o ? Object.assign(Object.assign({}, o), { label: u || o.label }) : Ln(o) ? {
      id: `${l.join(".")}`,
      label: u || "",
      children: Object.keys(o).map((c) => r(o[c], [...l, c]))
    } : Array.isArray(o) ? {
      id: `${l.join(".")}`,
      label: `${u}[]`,
      children: o.map((c, d) => r(c, [...l, String(d)]))
    } : { id: "", label: "", children: [] };
  }
  const { children: s } = r(a);
  return {
    id: bo(e),
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
        textColor: Vt.white,
        backgroundColor: Vt.unknown
      }
    ]
  };
}
function c_(e, t) {
  return {
    id: bo(t, e),
    label: F(e.path),
    tags: Mu(e.multiple, e.fieldsCount, e.type, e.valid, t)
  };
}
function d_(e, t) {
  return {
    id: bo(t, e),
    label: i(e.name),
    tags: Mu(!1, 1, e.type, e.meta.valid, t)
  };
}
function Mu(e, t, n, a, r) {
  const { textColor: s, bgColor: o } = Fu(a);
  return [
    e ? void 0 : {
      label: "Field",
      textColor: s,
      backgroundColor: o
    },
    r ? void 0 : {
      label: "Standalone",
      textColor: Vt.black,
      backgroundColor: Vt.gray
    },
    n === "checkbox" ? {
      label: "Checkbox",
      textColor: Vt.white,
      backgroundColor: Vt.blue
    } : void 0,
    n === "radio" ? {
      label: "Radio",
      textColor: Vt.white,
      backgroundColor: Vt.purple
    } : void 0,
    e ? {
      label: "Multiple",
      textColor: Vt.black,
      backgroundColor: Vt.orange
    } : void 0
  ].filter(Boolean);
}
function bo(e, t) {
  const n = t ? "path" in t ? "pathState" : "field" : "form", a = t ? "path" in t ? t?.path : F(t?.name) : "", r = { f: e?.formId, ff: t?.id || a, type: n };
  return btoa(encodeURIComponent(JSON.stringify(r)));
}
function f_(e) {
  try {
    const t = JSON.parse(decodeURIComponent(atob(e))), n = Ra[t.f];
    if (!n && t.ff) {
      const r = Ma[t.ff];
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
function Wi(e) {
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
function m_(e) {
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
        value: Lt(t.value).reduce((l, u) => {
          var c;
          const d = (c = t.value[u]) === null || c === void 0 ? void 0 : c[0];
          return d && (l[u] = d), l;
        }, {})
      }
    ]
  };
}
function Fu(e) {
  return {
    bgColor: e ? Vt.success : Vt.error,
    textColor: e ? Vt.black : Vt.white
  };
}
function _o(e, t, n) {
  return or(n?.type) ? v_(e, t, n) : Bu(e, t, n);
}
function Bu(e, t, n) {
  const { initialValue: a, validateOnMount: r, bails: s, type: o, checkedValue: l, label: u, validateOnValueUpdate: c, uncheckedValue: d, controlled: f, keepValueOnUnmount: v, syncVModel: y, form: I } = p_(n), S = f ? lr(ra) : void 0, P = I || S, w = U(() => La(F(e))), x = U(() => {
    if (F(P?.schema))
      return;
    const ue = i(t);
    return Mr(ue) || Xt(ue) || kt(ue) || Array.isArray(ue) ? ue : $u(ue);
  }), O = !kt(x.value) && Xt(F(t)), { id: E, value: k, initialValue: C, meta: _, setState: D, errors: L, flags: J } = n_(w, {
    modelValue: a,
    form: P,
    bails: s,
    label: u,
    type: o,
    validate: x.value ? Y : void 0,
    schema: O ? t : void 0
  }), te = U(() => L.value[0]);
  y && h_({
    value: k,
    prop: y,
    handleChange: W,
    shouldValidate: () => c && !J.pendingReset
  });
  const ne = (le, ue = !1) => {
    _.touched = !0, ue && X();
  };
  async function fe(le) {
    var ue, Ie;
    if (P?.validateSchema) {
      const { results: Pe } = await P.validateSchema(le);
      return (ue = Pe[F(w)]) !== null && ue !== void 0 ? ue : { valid: !0, errors: [] };
    }
    return x.value ? Du(k.value, x.value, {
      name: F(w),
      label: F(u),
      values: (Ie = P?.values) !== null && Ie !== void 0 ? Ie : {},
      bails: s
    }) : { valid: !0, errors: [] };
  }
  const X = Ms(async () => (_.pending = !0, _.validated = !0, fe("validated-only")), (le) => (J.pendingUnmount[Le.id] || (D({ errors: le.errors }), _.pending = !1, _.valid = le.valid), le)), ae = Ms(async () => fe("silent"), (le) => (_.valid = le.valid, le));
  function Y(le) {
    return le?.mode === "silent" ? ae() : X();
  }
  function W(le, ue = !0) {
    const Ie = Fr(le);
    ot(Ie, ue);
  }
  Vn(() => {
    if (r)
      return X();
    (!P || !P.validateSchema) && ae();
  });
  function q(le) {
    _.touched = le;
  }
  function Ce(le) {
    var ue;
    const Ie = le && "value" in le ? le.value : C.value;
    D({
      value: Ve(Ie),
      initialValue: Ve(Ie),
      touched: (ue = le?.touched) !== null && ue !== void 0 ? ue : !1,
      errors: le?.errors || []
    }), _.pending = !1, _.validated = !1, ae();
  }
  const Me = Tt();
  function ot(le, ue = !0) {
    k.value = Me && y ? Fb(le, Me.props.modelModifiers) : le, (ue ? X : ae)();
  }
  function $t(le) {
    D({ errors: Array.isArray(le) ? le : [le] });
  }
  const Ye = U({
    get() {
      return k.value;
    },
    set(le) {
      ot(le, c);
    }
  }), Le = {
    id: E,
    name: w,
    label: u,
    value: Ye,
    meta: _,
    errors: L,
    errorMessage: te,
    type: o,
    checkedValue: l,
    uncheckedValue: d,
    bails: s,
    keepValueOnUnmount: v,
    resetField: Ce,
    handleReset: () => Ce(),
    validate: Y,
    handleChange: W,
    handleBlur: ne,
    setState: D,
    setTouched: q,
    setErrors: $t,
    setValue: ot
  };
  if (fa(sr, Le), sn(t) && typeof i(t) != "function" && Fe(t, (le, ue) => {
    _t(le, ue) || (_.validated ? X() : ae());
  }, {
    deep: !0
  }), process.env.NODE_ENV !== "production" && (Le._vm = Tt(), Fe(() => Object.assign(Object.assign({ errors: L.value }, _), { value: k.value }), _a, {
    deep: !0
  }), P || l_(Le)), !P)
    return Le;
  const At = U(() => {
    const le = x.value;
    return !le || kt(le) || Mr(le) || Xt(le) || Array.isArray(le) ? {} : Object.keys(le).reduce((ue, Ie) => {
      const Pe = Zb(le[Ie]).map((at) => at.__locatorRef).reduce((at, it) => {
        const Ke = Qe(P.values, it) || P.values[it];
        return Ke !== void 0 && (at[it] = Ke), at;
      }, {});
      return Object.assign(ue, Pe), ue;
    }, {});
  });
  return Fe(At, (le, ue) => {
    if (!Object.keys(le).length)
      return;
    !_t(le, ue) && (_.validated ? X() : ae());
  }), zs(() => {
    var le;
    const ue = (le = F(Le.keepValueOnUnmount)) !== null && le !== void 0 ? le : F(P.keepValuesOnUnmount), Ie = F(w);
    if (ue || !P || J.pendingUnmount[Le.id]) {
      P?.removePathState(Ie, E);
      return;
    }
    J.pendingUnmount[Le.id] = !0;
    const Pe = P.getPathState(Ie);
    if (Array.isArray(Pe?.id) && Pe?.multiple ? Pe?.id.includes(Le.id) : Pe?.id === Le.id) {
      if (Pe?.multiple && Array.isArray(Pe.value)) {
        const it = Pe.value.findIndex((Ke) => _t(Ke, F(Le.checkedValue)));
        if (it > -1) {
          const Ke = [...Pe.value];
          Ke.splice(it, 1), P.setFieldValue(Ie, Ke);
        }
        Array.isArray(Pe.id) && Pe.id.splice(Pe.id.indexOf(Le.id), 1);
      } else
        P.unsetPathValue(F(w));
      P.removePathState(Ie, E);
    }
  }), Le;
}
function p_(e) {
  const t = () => ({
    initialValue: void 0,
    validateOnMount: !1,
    bails: !0,
    label: void 0,
    validateOnValueUpdate: !0,
    keepValueOnUnmount: void 0,
    syncVModel: !1,
    controlled: !0
  }), n = !!e?.syncVModel, a = typeof e?.syncVModel == "string" ? e.syncVModel : e?.modelPropName || "modelValue", r = n && !("initialValue" in (e || {})) ? Bs(Tt(), a) : e?.initialValue;
  if (!e)
    return Object.assign(Object.assign({}, t()), { initialValue: r });
  const s = "valueProp" in e ? e.valueProp : e.checkedValue, o = "standalone" in e ? !e.standalone : e.controlled, l = e?.modelPropName || e?.syncVModel || !1;
  return Object.assign(Object.assign(Object.assign({}, t()), e || {}), {
    initialValue: r,
    controlled: o ?? !0,
    checkedValue: s,
    syncVModel: l
  });
}
function v_(e, t, n) {
  const a = n?.standalone ? void 0 : lr(ra), r = n?.checkedValue, s = n?.uncheckedValue;
  function o(l) {
    const u = l.handleChange, c = U(() => {
      const f = F(l.value), v = F(r);
      return Array.isArray(f) ? f.findIndex((y) => _t(y, v)) >= 0 : _t(v, f);
    });
    function d(f, v = !0) {
      var y, I;
      if (c.value === ((y = f?.target) === null || y === void 0 ? void 0 : y.checked)) {
        v && l.validate();
        return;
      }
      const S = F(e), P = a?.getPathState(S), w = Fr(f);
      let x = (I = F(r)) !== null && I !== void 0 ? I : w;
      a && P?.multiple && P.type === "checkbox" ? x = Bi(Qe(a.values, S) || [], x, void 0) : n?.type === "checkbox" && (x = Bi(F(l.value), x, F(s))), u(x, v);
    }
    return Object.assign(Object.assign({}, l), {
      checked: c,
      checkedValue: r,
      uncheckedValue: s,
      handleChange: d
    });
  }
  return o(Bu(e, t, n));
}
function h_({ prop: e, value: t, handleChange: n, shouldValidate: a }) {
  const r = Tt();
  if (!r || !e) {
    process.env.NODE_ENV !== "production" && console.warn("Failed to setup model events because `useField` was not called in setup.");
    return;
  }
  const s = typeof e == "string" ? e : "modelValue", o = `update:${s}`;
  s in r.props && (Fe(t, (l) => {
    _t(l, Bs(r, s)) || r.emit(o, l);
  }), Fe(() => Bs(r, s), (l) => {
    if (l === Rr && t.value === void 0)
      return;
    const u = l === Rr ? void 0 : l;
    _t(u, t.value) || n(u, a());
  }));
}
function Bs(e, t) {
  if (e)
    return e.props[t];
}
const g_ = /* @__PURE__ */ $({
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
      default: Rr
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
    const n = Tn(e, "rules"), a = Tn(e, "name"), r = Tn(e, "label"), s = Tn(e, "uncheckedValue"), o = Tn(e, "keepValue"), { errors: l, value: u, errorMessage: c, validate: d, handleChange: f, handleBlur: v, setTouched: y, resetField: I, handleReset: S, meta: P, checked: w, setErrors: x, setValue: O } = _o(a, n, {
      validateOnMount: e.validateOnMount,
      bails: e.bails,
      standalone: e.standalone,
      type: t.attrs.type,
      initialValue: b_(e, t),
      // Only for checkboxes and radio buttons
      checkedValue: t.attrs.value,
      uncheckedValue: s,
      label: r,
      validateOnValueUpdate: e.validateOnModelUpdate,
      keepValueOnUnmount: o,
      syncVModel: !0
    }), E = function(J, te = !0) {
      f(J, te);
    }, k = U(() => {
      const { validateOnInput: L, validateOnChange: J, validateOnBlur: te, validateOnModelUpdate: ne } = y_(e);
      function fe(W) {
        v(W, te), kt(t.attrs.onBlur) && t.attrs.onBlur(W);
      }
      function X(W) {
        E(W, L), kt(t.attrs.onInput) && t.attrs.onInput(W);
      }
      function ae(W) {
        E(W, J), kt(t.attrs.onChange) && t.attrs.onChange(W);
      }
      const Y = {
        name: e.name,
        onBlur: fe,
        onInput: X,
        onChange: ae
      };
      return Y["onUpdate:modelValue"] = (W) => E(W, ne), Y;
    }), C = U(() => {
      const L = Object.assign({}, k.value);
      or(t.attrs.type) && w && (L.checked = w.value);
      const J = Hi(e, t);
      return Rb(J, t.attrs) && (L.value = u.value), L;
    }), _ = U(() => Object.assign(Object.assign({}, k.value), { modelValue: u.value }));
    function D() {
      return {
        field: C.value,
        componentField: _.value,
        value: u.value,
        meta: P,
        errors: l.value,
        errorMessage: c.value,
        validate: d,
        resetField: I,
        handleChange: E,
        handleInput: (L) => E(L, !1),
        handleReset: S,
        handleBlur: k.value.onBlur,
        setTouched: y,
        setErrors: x,
        setValue: O
      };
    }
    return t.expose({
      value: u,
      meta: P,
      errors: l,
      errorMessage: c,
      setErrors: x,
      setTouched: y,
      setValue: O,
      reset: I,
      validate: d,
      handleChange: f
    }), () => {
      const L = mt(Hi(e, t)), J = Xr(L, t, D);
      return L ? un(L, Object.assign(Object.assign({}, t.attrs), C.value), J) : J;
    };
  }
});
function Hi(e, t) {
  let n = e.as || "";
  return !e.as && !t.slots.default && (n = "input"), n;
}
function y_(e) {
  var t, n, a, r;
  const { validateOnInput: s, validateOnChange: o, validateOnBlur: l, validateOnModelUpdate: u } = Wn();
  return {
    validateOnInput: (t = e.validateOnInput) !== null && t !== void 0 ? t : s,
    validateOnChange: (n = e.validateOnChange) !== null && n !== void 0 ? n : o,
    validateOnBlur: (a = e.validateOnBlur) !== null && a !== void 0 ? a : l,
    validateOnModelUpdate: (r = e.validateOnModelUpdate) !== null && r !== void 0 ? r : u
  };
}
function b_(e, t) {
  return or(t.attrs.type) ? Vi(e, "modelValue") ? e.modelValue : void 0 : Vi(e, "modelValue") ? e.modelValue : t.attrs.value;
}
const Sa = g_;
let __ = 0;
const yr = ["bails", "fieldsCount", "id", "multiple", "type", "validate"];
function ju(e) {
  const t = e?.initialValues || {}, n = Object.assign({}, F(t)), a = i(e?.validationSchema);
  return a && Xt(a) && kt(a.cast) ? Ve(a.cast(n) || {}) : Ve(n);
}
function Uu(e) {
  var t;
  const n = __++, a = e?.name || "Form";
  let r = 0;
  const s = pe(!1), o = pe(!1), l = pe(0), u = [], c = cn(ju(e)), d = pe([]), f = pe({}), v = pe({}), y = jb(() => {
    v.value = d.value.reduce((T, N) => (T[La(F(N.path))] = N, T), {});
  });
  function I(T, N) {
    const B = W(T);
    if (!B) {
      typeof T == "string" && (f.value[La(T)] = Fs(N));
      return;
    }
    if (typeof T == "string") {
      const Q = La(T);
      f.value[Q] && delete f.value[Q];
    }
    B.errors = Fs(N), B.valid = !B.errors.length;
  }
  function S(T) {
    Lt(T).forEach((N) => {
      I(N, T[N]);
    });
  }
  e?.initialErrors && S(e.initialErrors);
  const P = U(() => {
    const T = d.value.reduce((N, B) => (B.errors.length && (N[F(B.path)] = B.errors), N), {});
    return Object.assign(Object.assign({}, f.value), T);
  }), w = U(() => Lt(P.value).reduce((T, N) => {
    const B = P.value[N];
    return B?.length && (T[N] = B[0]), T;
  }, {})), x = U(() => d.value.reduce((T, N) => (T[F(N.path)] = { name: F(N.path) || "", label: N.label || "" }, T), {})), O = U(() => d.value.reduce((T, N) => {
    var B;
    return T[F(N.path)] = (B = N.bails) !== null && B !== void 0 ? B : !0, T;
  }, {})), E = Object.assign({}, e?.initialErrors || {}), k = (t = e?.keepValuesOnUnmount) !== null && t !== void 0 ? t : !1, { initialValues: C, originalInitialValues: _, setInitialValues: D } = k_(d, c, e), L = w_(d, c, _, w), J = U(() => d.value.reduce((T, N) => {
    const B = Qe(c, F(N.path));
    return gt(T, F(N.path), B), T;
  }, {})), te = e?.validationSchema;
  function ne(T, N) {
    var B, Q;
    const ge = U(() => Qe(C.value, F(T))), Oe = v.value[F(T)], _e = N?.type === "checkbox" || N?.type === "radio";
    if (Oe && _e) {
      Oe.multiple = !0;
      const Wt = r++;
      return Array.isArray(Oe.id) ? Oe.id.push(Wt) : Oe.id = [Oe.id, Wt], Oe.fieldsCount++, Oe.__flags.pendingUnmount[Wt] = !1, Oe;
    }
    const Xe = U(() => Qe(c, F(T))), lt = F(T), xt = Ce.findIndex((Wt) => Wt === lt);
    xt !== -1 && Ce.splice(xt, 1);
    const He = U(() => {
      var Wt, Aa, Qr, es;
      const ts = F(te);
      if (Xt(ts))
        return (Aa = (Wt = ts.describe) === null || Wt === void 0 ? void 0 : Wt.call(ts, F(T)).required) !== null && Aa !== void 0 ? Aa : !1;
      const ns = F(N?.schema);
      return Xt(ns) && (es = (Qr = ns.describe) === null || Qr === void 0 ? void 0 : Qr.call(ns).required) !== null && es !== void 0 ? es : !1;
    }), Et = r++, Dt = cn({
      id: Et,
      path: T,
      touched: !1,
      pending: !1,
      valid: !0,
      validated: !!(!((B = E[lt]) === null || B === void 0) && B.length),
      required: He,
      initialValue: ge,
      errors: Ut([]),
      bails: (Q = N?.bails) !== null && Q !== void 0 ? Q : !1,
      label: N?.label,
      type: N?.type || "default",
      value: Xe,
      multiple: !1,
      __flags: {
        pendingUnmount: { [Et]: !1 },
        pendingReset: !1
      },
      fieldsCount: 1,
      validate: N?.validate,
      dirty: U(() => !_t(i(Xe), i(ge)))
    });
    return d.value.push(Dt), v.value[lt] = Dt, y(), w.value[lt] && !E[lt] && St(() => {
      M(lt, { mode: "silent" });
    }), sn(T) && Fe(T, (Wt) => {
      y();
      const Aa = Ve(Xe.value);
      v.value[Wt] = Dt, St(() => {
        gt(c, Wt, Aa);
      });
    }), Dt;
  }
  const fe = ji(xe, 5), X = ji(xe, 5), ae = Ms(async (T) => await (T === "silent" ? fe() : X()), (T, [N]) => {
    const B = Lt(ue.errorBag.value), ge = [
      .../* @__PURE__ */ new Set([...Lt(T.results), ...d.value.map((Oe) => Oe.path), ...B])
    ].sort().reduce((Oe, _e) => {
      var Xe;
      const lt = _e, xt = W(lt) || q(lt), He = ((Xe = T.results[lt]) === null || Xe === void 0 ? void 0 : Xe.errors) || [], Et = F(xt?.path) || lt, Dt = x_({ errors: He, valid: !He.length }, Oe.results[Et]);
      return Oe.results[Et] = Dt, Dt.valid || (Oe.errors[Et] = Dt.errors[0]), xt && f.value[Et] && delete f.value[Et], xt ? (xt.valid = Dt.valid, N === "silent" || N === "validated-only" && !xt.validated || I(xt, Dt.errors), Oe) : (I(Et, He), Oe);
    }, {
      valid: T.valid,
      results: {},
      errors: {},
      source: T.source
    });
    return T.values && (ge.values = T.values, ge.source = T.source), Lt(ge.results).forEach((Oe) => {
      var _e;
      const Xe = W(Oe);
      Xe && N !== "silent" && (N === "validated-only" && !Xe.validated || I(Xe, (_e = ge.results[Oe]) === null || _e === void 0 ? void 0 : _e.errors));
    }), ge;
  });
  function Y(T) {
    d.value.forEach(T);
  }
  function W(T) {
    const N = typeof T == "string" ? La(T) : T;
    return typeof N == "string" ? v.value[N] : N;
  }
  function q(T) {
    return d.value.filter((B) => T.startsWith(F(B.path))).reduce((B, Q) => B ? Q.path.length > B.path.length ? Q : B : Q, void 0);
  }
  let Ce = [], Me;
  function ot(T) {
    return Ce.push(T), Me || (Me = St(() => {
      [...Ce].sort().reverse().forEach((B) => {
        Fi(c, B);
      }), Ce = [], Me = null;
    })), Me;
  }
  function $t(T) {
    return function(B, Q) {
      return function(Oe) {
        return Oe instanceof Event && (Oe.preventDefault(), Oe.stopPropagation()), Y((_e) => _e.touched = !0), s.value = !0, l.value++, g().then((_e) => {
          const Xe = Ve(c);
          if (_e.valid && typeof B == "function") {
            const lt = Ve(J.value);
            let xt = T ? lt : Xe;
            return _e.values && (xt = _e.source === "schema" ? _e.values : Object.assign({}, xt, _e.values)), B(xt, {
              evt: Oe,
              controlledValues: lt,
              setErrors: S,
              setFieldError: I,
              setTouched: Yt,
              setFieldTouched: Ke,
              setValues: at,
              setFieldValue: Ie,
              resetForm: h,
              resetField: Sn
            });
          }
          !_e.valid && typeof Q == "function" && Q({
            values: Xe,
            evt: Oe,
            errors: _e.errors,
            results: _e.results
          });
        }).then((_e) => (s.value = !1, _e), (_e) => {
          throw s.value = !1, _e;
        });
      };
    };
  }
  const Le = $t(!1);
  Le.withControlled = $t(!0);
  function At(T, N) {
    const B = d.value.findIndex((ge) => ge.path === T && (Array.isArray(ge.id) ? ge.id.includes(N) : ge.id === N)), Q = d.value[B];
    if (!(B === -1 || !Q)) {
      if (St(() => {
        M(T, { mode: "silent", warn: !1 });
      }), Q.multiple && Q.fieldsCount && Q.fieldsCount--, Array.isArray(Q.id)) {
        const ge = Q.id.indexOf(N);
        ge >= 0 && Q.id.splice(ge, 1), delete Q.__flags.pendingUnmount[N];
      }
      (!Q.multiple || Q.fieldsCount <= 0) && (d.value.splice(B, 1), K(T), y(), delete v.value[T]);
    }
  }
  function le(T) {
    Lt(v.value).forEach((N) => {
      N.startsWith(T) && delete v.value[N];
    }), d.value = d.value.filter((N) => !N.path.startsWith(T)), St(() => {
      y();
    });
  }
  const ue = {
    name: a,
    formId: n,
    values: c,
    controlledValues: J,
    errorBag: P,
    errors: w,
    schema: te,
    submitCount: l,
    meta: L,
    isSubmitting: s,
    isValidating: o,
    fieldArrays: u,
    keepValuesOnUnmount: k,
    validateSchema: i(te) ? ae : void 0,
    validate: g,
    setFieldError: I,
    validateField: M,
    setFieldValue: Ie,
    setValues: at,
    setErrors: S,
    setFieldTouched: Ke,
    setTouched: Yt,
    resetForm: h,
    resetField: Sn,
    handleSubmit: Le,
    useFieldModel: De,
    defineInputBinds: We,
    defineComponentBinds: Bt,
    defineField: z,
    stageInitialValue: Se,
    unsetInitialValue: K,
    setFieldInitialValue: Ne,
    createPathState: ne,
    getPathState: W,
    unsetPathValue: ot,
    removePathState: At,
    initialValues: C,
    getAllPathStates: () => d.value,
    destroyPath: le,
    isFieldTouched: Ft,
    isFieldDirty: vn,
    isFieldValid: qt
  };
  function Ie(T, N, B = !0) {
    const Q = Ve(N), ge = typeof T == "string" ? T : T.path;
    W(ge) || ne(ge), gt(c, ge, Q), B && M(ge);
  }
  function Pe(T, N = !0) {
    Lt(c).forEach((B) => {
      delete c[B];
    }), Lt(T).forEach((B) => {
      Ie(B, T[B], !1);
    }), N && g();
  }
  function at(T, N = !0) {
    tr(c, T), u.forEach((B) => B && B.reset()), N && g();
  }
  function it(T, N) {
    const B = W(F(T)) || ne(T);
    return U({
      get() {
        return B.value;
      },
      set(Q) {
        var ge;
        const Oe = F(T);
        Ie(Oe, Q, (ge = F(N)) !== null && ge !== void 0 ? ge : !1);
      }
    });
  }
  function Ke(T, N) {
    const B = W(T);
    B && (B.touched = N);
  }
  function Ft(T) {
    const N = W(T);
    return N ? N.touched : d.value.filter((B) => B.path.startsWith(T)).some((B) => B.touched);
  }
  function vn(T) {
    const N = W(T);
    return N ? N.dirty : d.value.filter((B) => B.path.startsWith(T)).some((B) => B.dirty);
  }
  function qt(T) {
    const N = W(T);
    return N ? N.valid : d.value.filter((B) => B.path.startsWith(T)).every((B) => B.valid);
  }
  function Yt(T) {
    if (typeof T == "boolean") {
      Y((N) => {
        N.touched = T;
      });
      return;
    }
    Lt(T).forEach((N) => {
      Ke(N, !!T[N]);
    });
  }
  function Sn(T, N) {
    var B;
    const Q = N && "value" in N ? N.value : Qe(C.value, T), ge = W(T);
    ge && (ge.__flags.pendingReset = !0), Ne(T, Ve(Q), !0), Ie(T, Q, !1), Ke(T, (B = N?.touched) !== null && B !== void 0 ? B : !1), I(T, N?.errors || []), St(() => {
      ge && (ge.__flags.pendingReset = !1);
    });
  }
  function h(T, N) {
    let B = Ve(T?.values ? T.values : _.value);
    B = N?.force ? B : tr(_.value, B), B = Xt(te) && kt(te.cast) ? te.cast(B) : B, D(B, { force: N?.force }), Y((Q) => {
      var ge;
      Q.__flags.pendingReset = !0, Q.validated = !1, Q.touched = ((ge = T?.touched) === null || ge === void 0 ? void 0 : ge[F(Q.path)]) || !1, Ie(F(Q.path), Qe(B, F(Q.path)), !1), I(F(Q.path), void 0);
    }), N?.force ? Pe(B, !1) : at(B, !1), S(T?.errors || {}), l.value = T?.submitCount || 0, St(() => {
      g({ mode: "silent" }), Y((Q) => {
        Q.__flags.pendingReset = !1;
      });
    });
  }
  async function g(T) {
    const N = T?.mode || "force";
    if (N === "force" && Y((_e) => _e.validated = !0), ue.validateSchema)
      return ue.validateSchema(N);
    o.value = !0;
    const B = await Promise.all(d.value.map((_e) => _e.validate ? _e.validate(T).then((Xe) => ({
      key: F(_e.path),
      valid: Xe.valid,
      errors: Xe.errors,
      value: Xe.value
    })) : Promise.resolve({
      key: F(_e.path),
      valid: !0,
      errors: [],
      value: void 0
    })));
    o.value = !1;
    const Q = {}, ge = {}, Oe = {};
    for (const _e of B)
      Q[_e.key] = {
        valid: _e.valid,
        errors: _e.errors
      }, _e.value && gt(Oe, _e.key, _e.value), _e.errors.length && (ge[_e.key] = _e.errors[0]);
    return {
      valid: B.every((_e) => _e.valid),
      results: Q,
      errors: ge,
      values: Oe,
      source: "fields"
    };
  }
  async function M(T, N) {
    var B;
    const Q = W(T);
    if (Q && N?.mode !== "silent" && (Q.validated = !0), te) {
      const { results: Oe } = await ae(N?.mode || "validated-only");
      return Oe[T] || { errors: [], valid: !0 };
    }
    return Q?.validate ? Q.validate(N) : (!Q && ((B = N?.warn) !== null && B !== void 0 ? B : !0) && process.env.NODE_ENV !== "production" && ul(`field with path ${T} was not found`), Promise.resolve({ errors: [], valid: !0 }));
  }
  function K(T) {
    Fi(C.value, T);
  }
  function Se(T, N, B = !1) {
    Ne(T, N), gt(c, T, N), B && !e?.initialValues && gt(_.value, T, Ve(N));
  }
  function Ne(T, N, B = !1) {
    gt(C.value, T, Ve(N)), B && gt(_.value, T, Ve(N));
  }
  async function xe() {
    const T = i(te);
    if (!T)
      return { valid: !0, results: {}, errors: {}, source: "none" };
    o.value = !0;
    const N = Mr(T) || Xt(T) ? await e_(T, c) : await t_(T, c, {
      names: x.value,
      bailsMap: O.value
    });
    return o.value = !1, N;
  }
  const V = Le((T, { evt: N }) => {
    Iu(N) && N.target.submit();
  });
  Vn(() => {
    if (e?.initialErrors && S(e.initialErrors), e?.initialTouched && Yt(e.initialTouched), e?.validateOnMount) {
      g();
      return;
    }
    ue.validateSchema && ue.validateSchema("silent");
  }), sn(te) && Fe(te, () => {
    var T;
    (T = ue.validateSchema) === null || T === void 0 || T.call(ue, "validated-only");
  }), fa(ra, ue), process.env.NODE_ENV !== "production" && (i_(ue), Fe(() => Object.assign(Object.assign({ errors: P.value }, L.value), { values: c, isSubmitting: s.value, isValidating: o.value, submitCount: l.value }), _a, {
    deep: !0
  }));
  function z(T, N) {
    const B = kt(N) ? void 0 : N?.label, Q = W(F(T)) || ne(T, { label: B }), ge = () => kt(N) ? N(gr(Q, yr)) : N || {};
    function Oe() {
      var He;
      Q.touched = !0, ((He = ge().validateOnBlur) !== null && He !== void 0 ? He : Wn().validateOnBlur) && M(F(Q.path));
    }
    function _e() {
      var He;
      ((He = ge().validateOnInput) !== null && He !== void 0 ? He : Wn().validateOnInput) && St(() => {
        M(F(Q.path));
      });
    }
    function Xe() {
      var He;
      ((He = ge().validateOnChange) !== null && He !== void 0 ? He : Wn().validateOnChange) && St(() => {
        M(F(Q.path));
      });
    }
    const lt = U(() => {
      const He = {
        onChange: Xe,
        onInput: _e,
        onBlur: Oe
      };
      return kt(N) ? Object.assign(Object.assign({}, He), N(gr(Q, yr)).props || {}) : N?.props ? Object.assign(Object.assign({}, He), N.props(gr(Q, yr))) : He;
    });
    return [it(T, () => {
      var He, Et, Dt;
      return (Dt = (He = ge().validateOnModelUpdate) !== null && He !== void 0 ? He : (Et = Wn()) === null || Et === void 0 ? void 0 : Et.validateOnModelUpdate) !== null && Dt !== void 0 ? Dt : !0;
    }), lt];
  }
  function De(T) {
    return Array.isArray(T) ? T.map((N) => it(N, !0)) : it(T);
  }
  function We(T, N) {
    const [B, Q] = z(T, N);
    function ge() {
      Q.value.onBlur();
    }
    function Oe(Xe) {
      const lt = Fr(Xe);
      Ie(F(T), lt, !1), Q.value.onInput();
    }
    function _e(Xe) {
      const lt = Fr(Xe);
      Ie(F(T), lt, !1), Q.value.onChange();
    }
    return U(() => Object.assign(Object.assign({}, Q.value), {
      onBlur: ge,
      onInput: Oe,
      onChange: _e,
      value: B.value
    }));
  }
  function Bt(T, N) {
    const [B, Q] = z(T, N), ge = W(F(T));
    function Oe(_e) {
      B.value = _e;
    }
    return U(() => {
      const _e = kt(N) ? N(gr(ge, yr)) : N || {};
      return Object.assign({ [_e.model || "modelValue"]: B.value, [`onUpdate:${_e.model || "modelValue"}`]: Oe }, Q.value);
    });
  }
  const tn = Object.assign(Object.assign({}, ue), { values: js(c), handleReset: () => h(), submitForm: V });
  return fa(Pb, tn), tn;
}
function w_(e, t, n, a) {
  const r = {
    touched: "some",
    pending: "some",
    valid: "every"
  }, s = U(() => !_t(t, i(n)));
  function o() {
    const u = e.value;
    return Lt(r).reduce((c, d) => {
      const f = r[d];
      return c[d] = u[f]((v) => v[d]), c;
    }, {});
  }
  const l = cn(o());
  return na(() => {
    const u = o();
    l.touched = u.touched, l.valid = u.valid, l.pending = u.pending;
  }), U(() => Object.assign(Object.assign({ initialValues: i(n) }, l), { valid: l.valid && !Lt(a.value).length, dirty: s.value }));
}
function k_(e, t, n) {
  const a = ju(n), r = pe(a), s = pe(Ve(a));
  function o(l, u) {
    u?.force ? (r.value = Ve(l), s.value = Ve(l)) : (r.value = tr(Ve(r.value) || {}, Ve(l)), s.value = tr(Ve(s.value) || {}, Ve(l))), u?.updateFields && e.value.forEach((c) => {
      if (c.touched)
        return;
      const f = Qe(r.value, F(c.path));
      gt(t, F(c.path), Ve(f));
    });
  }
  return {
    initialValues: r,
    originalInitialValues: s,
    setInitialValues: o
  };
}
function x_(e, t) {
  return t ? {
    valid: e.valid && t.valid,
    errors: [...e.errors, ...t.errors]
  } : e;
}
const E_ = /* @__PURE__ */ $({
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
    const n = Tn(e, "validationSchema"), a = Tn(e, "keepValues"), { errors: r, errorBag: s, values: o, meta: l, isSubmitting: u, isValidating: c, submitCount: d, controlledValues: f, validate: v, validateField: y, handleReset: I, resetForm: S, handleSubmit: P, setErrors: w, setFieldError: x, setFieldValue: O, setValues: E, setFieldTouched: k, setTouched: C, resetField: _ } = Uu({
      validationSchema: n.value ? n : void 0,
      initialValues: e.initialValues,
      initialErrors: e.initialErrors,
      initialTouched: e.initialTouched,
      validateOnMount: e.validateOnMount,
      keepValuesOnUnmount: a,
      name: e.name
    }), D = P((Y, { evt: W }) => {
      Iu(W) && W.target.submit();
    }, e.onInvalidSubmit), L = e.onSubmit ? P(e.onSubmit, e.onInvalidSubmit) : D;
    function J(Y) {
      yo(Y) && Y.preventDefault(), I(), typeof t.attrs.onReset == "function" && t.attrs.onReset();
    }
    function te(Y, W) {
      return P(typeof Y == "function" && !W ? Y : W, e.onInvalidSubmit)(Y);
    }
    function ne() {
      return Ve(o);
    }
    function fe() {
      return Ve(l.value);
    }
    function X() {
      return Ve(r.value);
    }
    function ae() {
      return {
        meta: l.value,
        errors: r.value,
        errorBag: s.value,
        values: o,
        isSubmitting: u.value,
        isValidating: c.value,
        submitCount: d.value,
        controlledValues: f.value,
        validate: v,
        validateField: y,
        handleSubmit: te,
        handleReset: I,
        submitForm: D,
        setErrors: w,
        setFieldError: x,
        setFieldValue: O,
        setValues: E,
        setFieldTouched: k,
        setTouched: C,
        resetForm: S,
        resetField: _,
        getValues: ne,
        getMeta: fe,
        getErrors: X
      };
    }
    return t.expose({
      setFieldError: x,
      setErrors: w,
      setFieldValue: O,
      setValues: E,
      setFieldTouched: k,
      setTouched: C,
      resetForm: S,
      validate: v,
      validateField: y,
      resetField: _,
      getValues: ne,
      getMeta: fe,
      getErrors: X,
      values: o,
      meta: l,
      errors: r
    }), function() {
      const W = e.as === "form" ? e.as : e.as ? mt(e.as) : null, q = Xr(W, t, ae);
      return W ? un(W, Object.assign(Object.assign(Object.assign({}, W === "form" ? {
        // Disables native validation as vee-validate will handle it.
        novalidate: !0
      } : {}), t.attrs), { onSubmit: L, onReset: J }), q) : q;
    };
  }
}), O_ = E_;
function S_(e) {
  const t = lr(ra, void 0), n = pe([]), a = () => {
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
    return process.env.NODE_ENV !== "production" && Er("FieldArray requires being a child of `<Form/>` or `useForm` being called before it. Array fields may not work correctly"), r;
  if (!i(e))
    return process.env.NODE_ENV !== "production" && Er("FieldArray requires a field path to be provided, did you forget to pass the `name` prop?"), r;
  const s = t.fieldArrays.find((k) => i(k.path) === i(e));
  if (s)
    return s;
  let o = 0;
  function l() {
    return Qe(t?.values, F(e), []) || [];
  }
  function u() {
    const k = l();
    Array.isArray(k) && (n.value = k.map((C, _) => d(C, _, n.value)), c());
  }
  u();
  function c() {
    const k = n.value.length;
    for (let C = 0; C < k; C++) {
      const _ = n.value[C];
      _.isFirst = C === 0, _.isLast = C === k - 1;
    }
  }
  function d(k, C, _) {
    if (_ && !ca(C) && _[C])
      return _[C];
    const D = o++;
    return {
      key: D,
      value: Bb({
        get() {
          const J = Qe(t?.values, F(e), []) || [], te = n.value.findIndex((ne) => ne.key === D);
          return te === -1 ? k : J[te];
        },
        set(J) {
          const te = n.value.findIndex((ne) => ne.key === D);
          if (te === -1) {
            process.env.NODE_ENV !== "production" && Er("Attempting to update a non-existent array item");
            return;
          }
          w(te, J);
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
  function v(k) {
    const C = F(e), _ = Qe(t?.values, C);
    if (!_ || !Array.isArray(_))
      return;
    const D = [..._];
    D.splice(k, 1);
    const L = C + `[${k}]`;
    t.destroyPath(L), t.unsetInitialValue(L), gt(t.values, C, D), n.value.splice(k, 1), f();
  }
  function y(k) {
    const C = Ve(k), _ = F(e), D = Qe(t?.values, _), L = ca(D) ? [] : D;
    if (!Array.isArray(L))
      return;
    const J = [...L];
    J.push(C), t.stageInitialValue(_ + `[${J.length - 1}]`, C), gt(t.values, _, J), n.value.push(d(C)), f();
  }
  function I(k, C) {
    const _ = F(e), D = Qe(t?.values, _);
    if (!Array.isArray(D) || !(k in D) || !(C in D))
      return;
    const L = [...D], J = [...n.value], te = L[k];
    L[k] = L[C], L[C] = te;
    const ne = J[k];
    J[k] = J[C], J[C] = ne, gt(t.values, _, L), n.value = J, c();
  }
  function S(k, C) {
    const _ = Ve(C), D = F(e), L = Qe(t?.values, D);
    if (!Array.isArray(L) || L.length < k)
      return;
    const J = [...L], te = [...n.value];
    J.splice(k, 0, _), te.splice(k, 0, d(_)), gt(t.values, D, J), n.value = te, f();
  }
  function P(k) {
    const C = F(e);
    t.stageInitialValue(C, k), gt(t.values, C, k), u(), f();
  }
  function w(k, C) {
    const _ = F(e), D = Qe(t?.values, _);
    !Array.isArray(D) || D.length - 1 < k || (gt(t.values, `${_}[${k}]`, C), t?.validate({ mode: "validated-only" }));
  }
  function x(k) {
    const C = Ve(k), _ = F(e), D = Qe(t?.values, _), L = ca(D) ? [] : D;
    if (!Array.isArray(L))
      return;
    const J = [C, ...L];
    gt(t.values, _, J), t.stageInitialValue(_ + "[0]", C), n.value.unshift(d(C)), f();
  }
  function O(k, C) {
    const _ = F(e), D = Qe(t?.values, _), L = ca(D) ? [] : [...D];
    if (!Array.isArray(D) || !(k in D) || !(C in D))
      return;
    const J = [...n.value], te = J[k];
    J.splice(k, 1), J.splice(C, 0, te);
    const ne = L[k];
    L.splice(k, 1), L.splice(C, 0, ne), gt(t.values, _, L), n.value = J, f();
  }
  const E = {
    fields: n,
    remove: v,
    push: y,
    swap: I,
    insert: S,
    update: w,
    replace: P,
    prepend: x,
    move: O
  };
  return t.fieldArrays.push(Object.assign({ path: e, reset: u }, E)), zs(() => {
    const k = t.fieldArrays.findIndex((C) => F(C.path) === F(e));
    k >= 0 && t.fieldArrays.splice(k, 1);
  }), Fe(l, (k) => {
    const C = n.value.map((_) => _.value);
    _t(k, C) || u();
  }), E;
}
const C_ = /* @__PURE__ */ $({
  name: "FieldArray",
  inheritAttrs: !1,
  props: {
    name: {
      type: String,
      required: !0
    }
  },
  setup(e, t) {
    const { push: n, remove: a, swap: r, insert: s, replace: o, update: l, prepend: u, move: c, fields: d } = S_(() => e.name);
    function f() {
      return {
        fields: d.value,
        push: n,
        remove: a,
        swap: r,
        insert: s,
        update: l,
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
      update: l,
      replace: o,
      prepend: u,
      move: c
    }), () => Xr(void 0, t, f);
  }
}), T_ = C_, N_ = /* @__PURE__ */ $({
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
    const n = dn(ra, void 0), a = U(() => n?.errors.value[e.name]);
    function r() {
      return {
        message: a.value
      };
    }
    return () => {
      if (!a.value)
        return;
      const s = e.as ? mt(e.as) : e.as, o = Xr(s, t, r), l = Object.assign({ role: "alert" }, t.attrs);
      return !s && (Array.isArray(o) || !o) && o?.length ? o : (Array.isArray(o) || !o) && !o?.length ? un(s || "span", l, a.value) : un(s, l, o);
    };
  }
}), A_ = N_;
function I_(e) {
  const t = lr(ra), n = e ? void 0 : dn(sr);
  return U(() => e ? Qe(t?.values, F(e)) : F(n?.value));
}
function P_() {
  const e = lr(ra);
  return e || process.env.NODE_ENV !== "production" && Er("No vee-validate <Form /> or `useForm` was detected in the component tree"), U(() => e?.values || {});
}
/**
  * vee-validate v4.15.1
  * (c) 2025 Abdelrahman Awad
  * @license MIT
  */
const Zi = (e) => e !== null && !!e && typeof e == "object" && !Array.isArray(e);
function zu(e) {
  return Number(e) >= 0;
}
function $_(e) {
  return typeof e == "object" && e !== null;
}
function D_(e) {
  return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
function Gi(e) {
  if (!$_(e) || D_(e) !== "[object Object]")
    return !1;
  if (Object.getPrototypeOf(e) === null)
    return !0;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Wu(e, t) {
  return Object.keys(t).forEach((n) => {
    if (Gi(t[n]) && Gi(e[n])) {
      e[n] || (e[n] = {}), Wu(e[n], t[n]);
      return;
    }
    e[n] = t[n];
  }), e;
}
function L_(e) {
  const t = e.split(".");
  if (!t.length)
    return "";
  let n = String(t[0]);
  for (let a = 1; a < t.length; a++) {
    if (zu(t[a])) {
      n += `[${t[a]}]`;
      continue;
    }
    n += `.${t[a]}`;
  }
  return n;
}
function Hu(e, t) {
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
      return Zu(r.error.issues, s), {
        errors: Object.values(s)
      };
    },
    cast(a) {
      try {
        return e.parse(a);
      } catch {
        const s = Gu(e);
        return Zi(s) && Zi(a) ? Wu(s, a) : a;
      }
    },
    describe(a) {
      try {
        if (!a)
          return {
            required: !e.isOptional(),
            exists: !0
          };
        const r = V_(a, e);
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
function Zu(e, t) {
  e.forEach((n) => {
    const a = L_(n.path.join("."));
    n.code === "invalid_union" && (Zu(n.unionErrors.flatMap((r) => r.issues), t), !a) || (t[a] || (t[a] = { errors: [], path: a }), t[a].errors.push(n.message));
  });
}
function Gu(e) {
  if (e instanceof Ze)
    return Object.fromEntries(Object.entries(e.shape).map(([t, n]) => n instanceof ta ? [t, n._def.defaultValue()] : n instanceof Ze ? [t, Gu(n)] : [t, void 0]));
}
function V_(e, t) {
  if (!qi(t))
    return null;
  if (ir(e))
    return t.shape[Kr(e)];
  const n = (e || "").split(/\.|\[(\d+)\]/).filter(Boolean);
  let a = t;
  for (let r = 0; r <= n.length; r++) {
    const s = n[r];
    if (!s || !a)
      return a;
    if (qi(a)) {
      a = a.shape[s] || null;
      continue;
    }
    zu(s) && R_(a) && (a = a._def.type);
  }
  return null;
}
function qu(e) {
  return e._def.typeName;
}
function R_(e) {
  return qu(e) === ye.ZodArray;
}
function qi(e) {
  return qu(e) === ye.ZodObject;
}
const Yu = Symbol();
function Jr() {
  const e = dn(sr), t = dn(Yu);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { name: n, errorMessage: a, meta: r } = e, s = t, o = {
    valid: U(() => r.valid),
    isDirty: U(() => r.dirty),
    isTouched: U(() => r.touched),
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
const Ca = /* @__PURE__ */ $({
  __name: "FormControl",
  setup(e) {
    const { error: t, formItemId: n, formDescriptionId: a, formMessageId: r } = Jr();
    return (s, o) => (p(), A(i(_d), {
      id: i(n),
      "data-slot": "form-control",
      "aria-describedby": i(t) ? `${i(a)} ${i(r)}` : `${i(a)}`,
      "aria-invalid": !!i(t)
    }, {
      default: m(() => [
        R(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "aria-describedby", "aria-invalid"]));
  }
}), M_ = ["id"], Ta = /* @__PURE__ */ $({
  __name: "FormDescription",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { formDescriptionId: n } = Jr();
    return (a, r) => (p(), j("p", {
      id: i(n),
      "data-slot": "form-description",
      class: Ee(i(H)("text-muted-foreground text-sm", t.class))
    }, [
      R(a.$slots, "default")
    ], 10, M_));
  }
}), Fn = /* @__PURE__ */ $({
  __name: "FormItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, n = wd();
    return fa(Yu, n), (a, r) => (p(), j("div", {
      "data-slot": "form-item",
      class: Ee(i(H)("grid gap-2", t.class))
    }, [
      R(a.$slots, "default")
    ], 2));
  }
}), Ku = /* @__PURE__ */ $({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = he(t, "class");
    return (a, r) => (p(), A(i(kd), G({ "data-slot": "label" }, i(n), {
      class: i(H)(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        t.class
      )
    }), {
      default: m(() => [
        R(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), F_ = /* @__PURE__ */ $({
  __name: "FormLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, { error: n, formItemId: a } = Jr();
    return (r, s) => (p(), A(i(Ku), {
      "data-slot": "form-label",
      "data-error": !!i(n),
      class: Ee(i(H)(
        "data-[error=true]:text-destructive",
        t.class
      )),
      for: i(a)
    }, {
      default: m(() => [
        R(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-error", "class", "for"]));
  }
}), sa = /* @__PURE__ */ $({
  __name: "FormMessage",
  props: {
    class: {}
  },
  setup(e) {
    const t = e, { name: n, formMessageId: a } = Jr();
    return (r, s) => (p(), A(i(A_), {
      id: i(a),
      "data-slot": "form-message",
      as: "p",
      name: F(i(n)),
      class: Ee(i(H)("text-destructive text-sm", t.class))
    }, null, 8, ["id", "name", "class"]));
  }
}), Xu = /* @__PURE__ */ $({
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
    const r = qe(e, t);
    return (s, o) => (p(), A(i(xd), G({ "data-slot": "accordion" }, i(r)), {
      default: m(() => [
        R(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ju = /* @__PURE__ */ $({
  __name: "AccordionContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = he(t, "class");
    return (a, r) => (p(), A(i(Ed), G({ "data-slot": "accordion-content" }, i(n), { class: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm" }), {
      default: m(() => [
        oe("div", {
          class: Ee(i(H)("pt-0 pb-4", t.class))
        }, [
          R(a.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 16));
  }
}), Qu = /* @__PURE__ */ $({
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
    const t = e, n = he(t, "class"), a = et(n);
    return (r, s) => (p(), A(i(Od), G({ "data-slot": "accordion-item" }, i(a), {
      class: i(H)("border-b last:border-b-0", t.class)
    }), {
      default: m(() => [
        R(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ec = /* @__PURE__ */ $({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = he(t, "class");
    return (a, r) => (p(), A(i(Sd), { class: "flex" }, {
      default: m(() => [
        b(i(Cd), G({ "data-slot": "accordion-trigger" }, i(n), {
          class: i(H)(
            "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
            t.class
          )
        }), {
          default: m(() => [
            R(a.$slots, "default"),
            R(a.$slots, "icon", {}, () => [
              b(i(Hn), { class: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" })
            ])
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), B_ = {
  key: 0,
  class: "text-destructive"
}, Bn = /* @__PURE__ */ $({
  __name: "AutoFormLabel",
  props: {
    required: { type: Boolean }
  },
  setup(e) {
    return (t, n) => (p(), A(i(F_), null, {
      default: m(() => [
        R(t.$slots, "default"),
        e.required ? (p(), j("span", B_, " *")) : ve("", !0)
      ]),
      _: 3
    }));
  }
});
function ln(e) {
  let t = e.replace(/\[\d+\]/g, "").replace(/([A-Z])/g, " $1");
  return t = t.charAt(0).toUpperCase() + t.slice(1), t;
}
function j_(e) {
  const t = /\[(\d+)\]/, n = e.match(t);
  return n ? Number.parseInt(n[1]) : void 0;
}
function wa(e) {
  return e ? "innerType" in e._def ? wa(e._def.innerType) : "schema" in e._def ? wa(e._def.schema) : e : null;
}
function wo(e) {
  const t = wa(e);
  return t ? t._def.typeName : "";
}
function Br(e) {
  const t = e;
  if (t._def.typeName === "ZodDefault")
    return t._def.defaultValue();
  if ("innerType" in t._def)
    return Br(
      t._def.innerType
    );
  if ("schema" in t._def)
    return Br(
      t._def.schema
    );
}
function tc(e) {
  return e?._def.typeName === "ZodEffects" ? tc(e._def.schema) : e;
}
function nc(e) {
  return /^\[.+\]$/.test(e);
}
function U_(e) {
  return e !== null && !!e && typeof e == "object" && !Array.isArray(e);
}
function z_(e) {
  return U_(e) || Array.isArray(e);
}
function W_(e) {
  return nc(e) ? e.replace(/\[|\]/g, "") : e;
}
function Yi(e, t, n) {
  return e ? nc(t) ? e[W_(t)] : (t || "").split(/\.|\[(\d+)\]/).filter(Boolean).reduce((r, s) => z_(r) && s in r ? r[s] : n, e) : n;
}
function H_(e) {
  switch (e) {
    case "true":
    case !0:
      return !0;
    case "false":
    case !1:
      return !1;
  }
}
function jr(e) {
  return e ? H_(e) : void 0;
}
const Z_ = { class: "!my-4 flex justify-end" }, G_ = /* @__PURE__ */ $({
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
      return o instanceof Gt;
    }
    function a(o) {
      return o instanceof ta;
    }
    const r = U(() => {
      if (!t.schema)
        return;
      const o = n(t.schema) ? t.schema._def.type : a(t.schema) ? t.schema._def.innerType._def.type : null;
      return {
        type: wo(o),
        schema: o
      };
    }), s = _o(t.fieldName);
    return fa(sr, s), (o, l) => (p(), A(i(T_), {
      as: "section",
      name: e.fieldName
    }, {
      default: m(({ fields: u, remove: c, push: d }) => [
        R(o.$slots, "default", It(Mt(t)), () => [
          b(i(Xu), {
            type: "multiple",
            class: "w-full",
            collapsible: "",
            disabled: e.disabled,
            "as-child": ""
          }, {
            default: m(() => [
              b(i(Fn), null, {
                default: m(() => [
                  b(i(Qu), {
                    value: e.fieldName,
                    class: "border-none"
                  }, {
                    default: m(() => [
                      b(i(ec), null, {
                        default: m(() => [
                          b(Bn, {
                            class: "text-base",
                            required: e.required
                          }, {
                            default: m(() => [
                              be(se(e.schema?.description || i(ln)(e.fieldName)), 1)
                            ]),
                            _: 1
                          }, 8, ["required"])
                        ]),
                        _: 1
                      }),
                      b(i(Ju), null, {
                        default: m(() => [
                          (p(!0), j(Re, null, Ge(u, (f, v) => (p(), j("div", {
                            key: f.key,
                            class: "mb-4 p-1"
                          }, [
                            b(ko, {
                              "field-name": `${e.fieldName}[${v}]`,
                              label: e.fieldName,
                              shape: r.value,
                              config: e.config
                            }, null, 8, ["field-name", "label", "shape", "config"]),
                            oe("div", Z_, [
                              b(i(pt), {
                                type: "button",
                                size: "icon",
                                variant: "secondary",
                                onClick: (y) => c(v)
                              }, {
                                default: m(() => [
                                  b(i(pl), { size: 16 })
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            f.isLast ? ve("", !0) : (p(), A(i(bp), { key: 0 }))
                          ]))), 128)),
                          b(i(pt), {
                            type: "button",
                            variant: "secondary",
                            class: "mt-4 flex items-center",
                            onClick: (f) => d(null)
                          }, {
                            default: m(() => [
                              b(i(Wr), {
                                class: "mr-2",
                                size: 16
                              }),
                              l[0] || (l[0] = be(" Add ", -1))
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 2
                      }, 1024),
                      b(i(sa))
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
}), q_ = /* @__PURE__ */ $({
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
    const n = e, a = t, r = he(n, "class"), s = qe(r, a);
    return (o, l) => (p(), A(i(Td), G({ "data-slot": "switch" }, i(s), {
      class: i(H)(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        n.class
      )
    }), {
      default: m(() => [
        b(i(Nd), {
          "data-slot": "switch-thumb",
          class: Ee(i(H)("bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"))
        }, {
          default: m(() => [
            R(o.$slots, "thumb")
          ]),
          _: 3
        }, 8, ["class"])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), Y_ = { class: "space-y-0 mb-3 flex items-center gap-3" }, Ki = /* @__PURE__ */ $({
  __name: "AutoFormFieldBoolean",
  props: {
    fieldName: {},
    label: {},
    required: { type: Boolean },
    config: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, n = U(() => t.config?.component === "switch" ? q_ : xr);
    return (a, r) => (p(), A(i(Sa), { name: e.fieldName }, {
      default: m((s) => [
        b(i(Fn), null, {
          default: m(() => [
            oe("div", Y_, [
              b(i(Ca), null, {
                default: m(() => [
                  R(a.$slots, "default", It(Mt(s)), () => [
                    (p(), A(mt(n.value), {
                      disabled: i(jr)(e.config?.inputProps?.disabled) ?? e.disabled,
                      name: s.componentField.name,
                      "model-value": s.componentField.modelValue,
                      "onUpdate:modelValue": s.componentField["onUpdate:modelValue"]
                    }, null, 8, ["disabled", "name", "model-value", "onUpdate:modelValue"]))
                  ])
                ]),
                _: 2
              }, 1024),
              e.config?.hideLabel ? ve("", !0) : (p(), A(Bn, {
                key: 0,
                required: e.required
              }, {
                default: m(() => [
                  be(se(e.config?.label || i(ln)(e.label ?? e.fieldName)), 1)
                ]),
                _: 1
              }, 8, ["required"]))
            ]),
            e.config?.description ? (p(), A(i(Ta), { key: 0 }, {
              default: m(() => [
                be(se(e.config.description), 1)
              ]),
              _: 1
            })) : ve("", !0),
            b(i(sa))
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 8, ["name"]));
  }
}), K_ = { class: "flex items-center gap-1" }, X_ = { class: "flex flex-col gap-y-4 mt-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, J_ = /* @__PURE__ */ $({
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
    const n = e, a = t, r = he(n, "class"), s = qe(r, a);
    return (o, l) => (p(), A(i(Ad), G({
      "data-slot": "calendar",
      class: i(H)("p-3", n.class)
    }, i(s)), {
      default: m(({ grid: u, weekDays: c }) => [
        b(i(s0), null, {
          default: m(() => [
            b(i(o0)),
            oe("div", K_, [
              b(i(l0)),
              b(i(i0))
            ])
          ]),
          _: 1
        }),
        oe("div", X_, [
          (p(!0), j(Re, null, Ge(u, (d) => (p(), A(i(t0), {
            key: d.value.toString()
          }, {
            default: m(() => [
              b(i(a0), null, {
                default: m(() => [
                  b(i(Xi), null, {
                    default: m(() => [
                      (p(!0), j(Re, null, Ge(c, (f) => (p(), A(i(r0), { key: f }, {
                        default: m(() => [
                          be(se(f), 1)
                        ]),
                        _: 2
                      }, 1024))), 128))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024),
              b(i(n0), null, {
                default: m(() => [
                  (p(!0), j(Re, null, Ge(d.rows, (f, v) => (p(), A(i(Xi), {
                    key: `weekDate-${v}`,
                    class: "mt-2 w-full"
                  }, {
                    default: m(() => [
                      (p(!0), j(Re, null, Ge(f, (y) => (p(), A(i(Q_), {
                        key: y.toString(),
                        date: y
                      }, {
                        default: m(() => [
                          b(i(e0), {
                            day: y,
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
}), Q_ = /* @__PURE__ */ $({
  __name: "CalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = he(t, "class"), a = et(n);
    return (r, s) => (p(), A(i(Id), G({
      "data-slot": "calendar-cell",
      class: i(H)("relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:rounded-md [&:has([data-selected])]:bg-accent", t.class)
    }, i(a)), {
      default: m(() => [
        R(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), e0 = /* @__PURE__ */ $({
  __name: "CalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "button" },
    class: {}
  },
  setup(e) {
    const t = e, n = he(t, "class"), a = et(n);
    return (r, s) => (p(), A(i(Pd), G({
      "data-slot": "calendar-cell-trigger",
      class: i(H)(
        i(en)({ variant: "ghost" }),
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
    }, i(a)), {
      default: m(() => [
        R(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), t0 = /* @__PURE__ */ $({
  __name: "CalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = he(t, "class"), a = et(n);
    return (r, s) => (p(), A(i($d), G({
      "data-slot": "calendar-grid",
      class: i(H)("w-full border-collapse space-x-1", t.class)
    }, i(a)), {
      default: m(() => [
        R(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), n0 = /* @__PURE__ */ $({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (p(), A(i(Dd), G({ "data-slot": "calendar-grid-body" }, t), {
      default: m(() => [
        R(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), a0 = /* @__PURE__ */ $({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (p(), A(i(Ld), G({ "data-slot": "calendar-grid-head" }, t), {
      default: m(() => [
        R(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Xi = /* @__PURE__ */ $({
  __name: "CalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = he(t, "class"), a = et(n);
    return (r, s) => (p(), A(i(Vd), G({
      "data-slot": "calendar-grid-row",
      class: i(H)("flex", t.class)
    }, i(a)), {
      default: m(() => [
        R(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), r0 = /* @__PURE__ */ $({
  __name: "CalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = he(t, "class"), a = et(n);
    return (r, s) => (p(), A(i(Rd), G({
      "data-slot": "calendar-head-cell",
      class: i(H)("text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]", t.class)
    }, i(a)), {
      default: m(() => [
        R(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), s0 = /* @__PURE__ */ $({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = he(t, "class"), a = et(n);
    return (r, s) => (p(), A(i(Md), G({
      "data-slot": "calendar-header",
      class: i(H)("flex justify-center pt-1 relative items-center w-full", t.class)
    }, i(a)), {
      default: m(() => [
        R(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), o0 = /* @__PURE__ */ $({
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = he(t, "class"), a = et(n);
    return (r, s) => (p(), A(i(Fd), G({
      "data-slot": "calendar-heading",
      class: i(H)("text-sm font-medium", t.class)
    }, i(a)), {
      default: m(({ headingValue: o }) => [
        R(r.$slots, "default", { headingValue: o }, () => [
          be(se(o), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), i0 = /* @__PURE__ */ $({
  __name: "CalendarNextButton",
  props: {
    nextPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = he(t, "class"), a = et(n);
    return (r, s) => (p(), A(i(Bd), G({
      "data-slot": "calendar-next-button",
      class: i(H)(
        i(en)({ variant: "outline" }),
        "absolute right-1",
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        t.class
      )
    }, i(a)), {
      default: m(() => [
        R(r.$slots, "default", {}, () => [
          b(i(Zn), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), l0 = /* @__PURE__ */ $({
  __name: "CalendarPrevButton",
  props: {
    prevPage: { type: Function },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = he(t, "class"), a = et(n);
    return (r, s) => (p(), A(i(jd), G({
      "data-slot": "calendar-prev-button",
      class: i(H)(
        i(en)({ variant: "outline" }),
        "absolute left-1",
        "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        t.class
      )
    }, i(a)), {
      default: m(() => [
        R(r.$slots, "default", {}, () => [
          b(i(Xs), { class: "size-4" })
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ac = /* @__PURE__ */ $({
  __name: "Popover",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = qe(e, t);
    return (s, o) => (p(), A(i(Ud), G({ "data-slot": "popover" }, i(r)), {
      default: m(() => [
        R(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), rc = /* @__PURE__ */ $({
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
    const n = e, a = t, r = he(n, "class"), s = qe(r, a);
    return (o, l) => (p(), A(i(zd), null, {
      default: m(() => [
        b(i(Wd), G({ "data-slot": "popover-content" }, { ...i(s), ...o.$attrs }, {
          class: i(H)(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border p-4 shadow-md origin-(--reka-popover-content-transform-origin) outline-hidden",
            n.class
          )
        }), {
          default: m(() => [
            R(o.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), sc = /* @__PURE__ */ $({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (p(), A(i(Hd), G({ "data-slot": "popover-trigger" }, t), {
      default: m(() => [
        R(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
let ms = null;
function u0() {
  return ms == null && (ms = new Intl.DateTimeFormat().resolvedOptions().timeZone), ms;
}
let ps = /* @__PURE__ */ new Map();
class c0 {
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
    return m0() && (this.resolvedHourCycle || (this.resolvedHourCycle = p0(t.locale, this.options)), t.hourCycle = this.resolvedHourCycle, t.hour12 = this.resolvedHourCycle === "h11" || this.resolvedHourCycle === "h12"), t.calendar === "ethiopic-amete-alem" && (t.calendar = "ethioaa"), t;
  }
  constructor(t, n = {}) {
    this.formatter = oc(t, n), this.options = n;
  }
}
const d0 = {
  true: {
    // Only Japanese uses the h11 style for 12 hour time. All others use h12.
    ja: "h11"
  },
  false: {}
};
function oc(e, t = {}) {
  if (typeof t.hour12 == "boolean" && f0()) {
    t = {
      ...t
    };
    let r = d0[String(t.hour12)][e.split("-")[0]], s = t.hour12 ? "h12" : "h23";
    t.hourCycle = r ?? s, delete t.hour12;
  }
  let n = e + (t ? Object.entries(t).sort((r, s) => r[0] < s[0] ? -1 : 1).join() : "");
  if (ps.has(n)) return ps.get(n);
  let a = new Intl.DateTimeFormat(e, t);
  return ps.set(n, a), a;
}
let vs = null;
function f0() {
  return vs == null && (vs = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    hour12: !1
  }).format(new Date(2020, 2, 3, 0)) === "24"), vs;
}
let hs = null;
function m0() {
  return hs == null && (hs = new Intl.DateTimeFormat("fr", {
    hour: "numeric",
    hour12: !1
  }).resolvedOptions().hourCycle === "h12"), hs;
}
function p0(e, t) {
  if (!t.timeStyle && !t.hour) return;
  e = e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, ""), e += (e.includes("-u-") ? "" : "-u") + "-nu-latn";
  let n = oc(e, {
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
const v0 = /* @__PURE__ */ $({
  __name: "AutoFormFieldDate",
  props: {
    fieldName: {},
    label: {},
    required: { type: Boolean },
    config: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = new c0("en-US", {
      dateStyle: "long"
    });
    return (n, a) => (p(), A(i(Sa), { name: e.fieldName }, {
      default: m((r) => [
        b(i(Fn), null, {
          default: m(() => [
            e.config?.hideLabel ? ve("", !0) : (p(), A(Bn, {
              key: 0,
              required: e.required
            }, {
              default: m(() => [
                be(se(e.config?.label || i(ln)(e.label ?? e.fieldName)), 1)
              ]),
              _: 1
            }, 8, ["required"])),
            b(i(Ca), null, {
              default: m(() => [
                R(n.$slots, "default", It(Mt(r)), () => [
                  oe("div", null, [
                    b(i(ac), null, {
                      default: m(() => [
                        b(i(sc), {
                          "as-child": "",
                          disabled: i(jr)(e.config?.inputProps?.disabled) ?? e.disabled
                        }, {
                          default: m(() => [
                            b(i(pt), {
                              variant: "outline",
                              class: Ee(i(H)(
                                "w-full justify-start text-left font-normal",
                                !r.componentField.modelValue && "text-muted-foreground"
                              ))
                            }, {
                              default: m(() => [
                                b(i(ef), { class: "mr-2 h-4 w-4" }),
                                be(" " + se(r.componentField.modelValue ? i(t).format(r.componentField.modelValue.toDate(i(u0)())) : "Pick a date"), 1)
                              ]),
                              _: 2
                            }, 1032, ["class"])
                          ]),
                          _: 2
                        }, 1032, ["disabled"]),
                        b(i(rc), { class: "w-auto p-0" }, {
                          default: m(() => [
                            b(i(J_), G({ "initial-focus": "" }, r.componentField), null, 16)
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
            e.config?.description ? (p(), A(i(Ta), { key: 1 }, {
              default: m(() => [
                be(se(e.config.description), 1)
              ]),
              _: 1
            })) : ve("", !0),
            b(i(sa))
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 8, ["name"]));
  }
}), h0 = /* @__PURE__ */ $({
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
    const n = e, a = t, r = he(n, "class"), s = qe(r, a);
    return (o, l) => (p(), A(i(Zd), G({
      "data-slot": "radio-group",
      class: i(H)("grid gap-3", n.class)
    }, i(s)), {
      default: m(() => [
        R(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), g0 = /* @__PURE__ */ $({
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
    const t = e, n = he(t, "class"), a = et(n);
    return (r, s) => (p(), A(i(Gd), G({ "data-slot": "radio-group-item" }, i(a), {
      class: i(H)(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        t.class
      )
    }), {
      default: m(() => [
        b(i(qd), {
          "data-slot": "radio-group-indicator",
          class: "relative flex items-center justify-center"
        }, {
          default: m(() => [
            b(i(af), { class: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 16, ["class"]));
  }
}), Ji = /* @__PURE__ */ $({
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
    return (t, n) => (p(), A(i(Sa), { name: e.fieldName }, {
      default: m((a) => [
        b(i(Fn), null, {
          default: m(() => [
            e.config?.hideLabel ? ve("", !0) : (p(), A(Bn, {
              key: 0,
              required: e.required
            }, {
              default: m(() => [
                be(se(e.config?.label || i(ln)(e.label ?? e.fieldName)), 1)
              ]),
              _: 1
            }, 8, ["required"])),
            b(i(Ca), null, {
              default: m(() => [
                R(t.$slots, "default", It(Mt(a)), () => [
                  e.config?.component === "radio" ? (p(), A(i(h0), G({
                    key: 0,
                    disabled: i(jr)(e.config?.inputProps?.disabled) ?? e.disabled,
                    orientation: "vertical"
                  }, { ...a.componentField }), {
                    default: m(() => [
                      (p(!0), j(Re, null, Ge(e.options, (r, s) => (p(), j("div", {
                        key: r,
                        class: "mb-2 flex items-center gap-3 space-y-0"
                      }, [
                        b(i(g0), {
                          id: `${r}-${s}`,
                          value: r
                        }, null, 8, ["id", "value"]),
                        b(i(Ku), {
                          for: `${r}-${s}`
                        }, {
                          default: m(() => [
                            be(se(i(ln)(r)), 1)
                          ]),
                          _: 2
                        }, 1032, ["for"])
                      ]))), 128))
                    ]),
                    _: 1
                  }, 16, ["disabled"])) : (p(), A(i(iu), G({
                    key: 1,
                    disabled: i(jr)(e.config?.inputProps?.disabled) ?? e.disabled
                  }, { ...a.componentField }), {
                    default: m(() => [
                      b(i(zh), { class: "w-full" }, {
                        default: m(() => [
                          b(i(cu), {
                            placeholder: e.config?.inputProps?.placeholder
                          }, null, 8, ["placeholder"])
                        ]),
                        _: 1
                      }),
                      b(i(lu), null, {
                        default: m(() => [
                          (p(!0), j(Re, null, Ge(e.options, (r) => (p(), A(i(uu), {
                            key: r,
                            value: r
                          }, {
                            default: m(() => [
                              be(se(i(ln)(r)), 1)
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
            e.config?.description ? (p(), A(i(Ta), { key: 1 }, {
              default: m(() => [
                be(se(e.config.description), 1)
              ]),
              _: 1
            })) : ve("", !0),
            b(i(sa))
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 8, ["name"]));
  }
}), y0 = {
  key: 1,
  class: "flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent pl-3 pr-1 py-1 text-sm shadow-sm transition-colors"
}, b0 = /* @__PURE__ */ $({
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
          }, o.onerror = (l) => {
            s(l);
          }, o.readAsDataURL(a);
        }
      });
    }
    return (a, r) => (p(), A(i(Sa), { name: e.fieldName }, {
      default: m((s) => [
        b(i(Fn), It(Mt(a.$attrs)), {
          default: m(() => [
            e.config?.hideLabel ? ve("", !0) : (p(), A(Bn, {
              key: 0,
              required: e.required
            }, {
              default: m(() => [
                be(se(e.config?.label || i(ln)(e.label ?? e.fieldName)), 1)
              ]),
              _: 1
            }, 8, ["required"])),
            b(i(Ca), null, {
              default: m(() => [
                R(a.$slots, "default", It(Mt(s)), () => [
                  t.value ? (p(), j("div", y0, [
                    oe("p", null, se(t.value?.name), 1),
                    b(i(pt), {
                      size: "icon",
                      variant: "ghost",
                      class: "h-[26px] w-[26px]",
                      "aria-label": "Remove file",
                      type: "button",
                      onClick: () => {
                        t.value = void 0, s.componentField.onInput(void 0);
                      }
                    }, {
                      default: m(() => [
                        b(i(pl))
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ])) : (p(), A(i(An), G({
                    key: 0,
                    type: "file"
                  }, { ...e.config?.inputProps }, {
                    disabled: e.config?.inputProps?.disabled ?? e.disabled,
                    onChange: async (o) => {
                      const l = o.target.files?.[0];
                      t.value = l;
                      const u = await n(l);
                      s.componentField.onInput(u);
                    }
                  }), null, 16, ["disabled", "onChange"]))
                ])
              ]),
              _: 2
            }, 1024),
            e.config?.description ? (p(), A(i(Ta), { key: 1 }, {
              default: m(() => [
                be(se(e.config.description), 1)
              ]),
              _: 1
            })) : ve("", !0),
            b(i(sa))
          ]),
          _: 2
        }, 1040)
      ]),
      _: 3
    }, 8, ["name"]));
  }
}), _0 = /* @__PURE__ */ $({
  __name: "Textarea",
  props: {
    class: {},
    defaultValue: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, r = /* @__PURE__ */ no(n, "modelValue", t, {
      passive: !0,
      defaultValue: n.defaultValue
    });
    return (s, o) => Us((p(), j("textarea", {
      "onUpdate:modelValue": o[0] || (o[0] = (l) => sn(r) ? r.value = l : null),
      "data-slot": "textarea",
      class: Ee(i(H)("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", n.class))
    }, null, 2)), [
      [il, i(r)]
    ]);
  }
}), Qi = /* @__PURE__ */ $({
  __name: "AutoFormFieldInput",
  props: {
    fieldName: {},
    label: {},
    required: { type: Boolean },
    config: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, n = U(() => t.config?.component === "textarea" ? _0 : An);
    return (a, r) => (p(), A(i(Sa), { name: e.fieldName }, {
      default: m((s) => [
        b(i(Fn), It(Mt(a.$attrs)), {
          default: m(() => [
            e.config?.hideLabel ? ve("", !0) : (p(), A(Bn, {
              key: 0,
              required: e.required
            }, {
              default: m(() => [
                be(se(e.config?.label || i(ln)(e.label ?? e.fieldName)), 1)
              ]),
              _: 1
            }, 8, ["required"])),
            b(i(Ca), null, {
              default: m(() => [
                R(a.$slots, "default", It(Mt(s)), () => [
                  (p(), A(mt(n.value), G({ type: "text" }, { ...s.componentField, ...e.config?.inputProps }, {
                    disabled: e.config?.inputProps?.disabled ?? e.disabled
                  }), null, 16, ["disabled"]))
                ])
              ]),
              _: 2
            }, 1024),
            e.config?.description ? (p(), A(i(Ta), { key: 1 }, {
              default: m(() => [
                be(se(e.config.description), 1)
              ]),
              _: 1
            })) : ve("", !0),
            b(i(sa))
          ]),
          _: 2
        }, 1040)
      ]),
      _: 3
    }, 8, ["name"]));
  }
}), w0 = /* @__PURE__ */ $({
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
    return (t, n) => (p(), A(i(Sa), { name: e.fieldName }, {
      default: m((a) => [
        b(i(Fn), null, {
          default: m(() => [
            e.config?.hideLabel ? ve("", !0) : (p(), A(Bn, {
              key: 0,
              required: e.required
            }, {
              default: m(() => [
                be(se(e.config?.label || i(ln)(e.label ?? e.fieldName)), 1)
              ]),
              _: 1
            }, 8, ["required"])),
            b(i(Ca), null, {
              default: m(() => [
                R(t.$slots, "default", It(Mt(a)), () => [
                  b(i(An), G({ type: "number" }, { ...a.componentField, ...e.config?.inputProps }, {
                    disabled: e.config?.inputProps?.disabled ?? e.disabled
                  }), null, 16, ["disabled"])
                ])
              ]),
              _: 2
            }, 1024),
            e.config?.description ? (p(), A(i(Ta), { key: 1 }, {
              default: m(() => [
                be(se(e.config.description), 1)
              ]),
              _: 1
            })) : ve("", !0),
            b(i(sa))
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 8, ["name"]));
  }
}), k0 = /* @__PURE__ */ $({
  __name: "AutoFormFieldObject",
  props: {
    fieldName: {},
    required: { type: Boolean },
    config: {},
    schema: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, n = U(() => {
      const r = {};
      if (!t.schema)
        return;
      const s = wa(t.schema)?.shape;
      if (s)
        return Object.keys(s).forEach((o) => {
          const l = s[o], u = wa(l);
          let c = u && "values" in u._def ? u._def.values : void 0;
          !Array.isArray(c) && typeof c == "object" && (c = Object.values(c)), r[o] = {
            type: wo(l),
            default: Br(l),
            options: c,
            required: !["ZodOptional", "ZodNullable"].includes(l._def.typeName),
            schema: l
          };
        }), r;
    }), a = _o(t.fieldName);
    return fa(sr, a), (r, s) => (p(), j("section", null, [
      R(r.$slots, "default", It(Mt(t)), () => [
        b(i(Xu), {
          type: "single",
          "as-child": "",
          class: "w-full",
          collapsible: "",
          disabled: e.disabled
        }, {
          default: m(() => [
            b(i(Fn), null, {
              default: m(() => [
                b(i(Qu), {
                  value: e.fieldName,
                  class: "border-none"
                }, {
                  default: m(() => [
                    b(i(ec), null, {
                      default: m(() => [
                        b(Bn, {
                          class: "text-base",
                          required: e.required
                        }, {
                          default: m(() => [
                            be(se(e.schema?.description || i(ln)(e.fieldName)), 1)
                          ]),
                          _: 1
                        }, 8, ["required"])
                      ]),
                      _: 1
                    }),
                    b(i(Ju), { class: "p-1 space-y-5" }, {
                      default: m(() => [
                        (p(!0), j(Re, null, Ge(n.value, (o, l) => (p(), A(ko, {
                          key: l,
                          config: e.config?.[l],
                          "field-name": `${e.fieldName}.${l.toString()}`,
                          label: l.toString(),
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
}), el = {
  date: v0,
  select: Ji,
  radio: Ji,
  checkbox: Ki,
  switch: Ki,
  textarea: Qi,
  number: w0,
  string: Qi,
  file: b0,
  array: G_,
  object: k0
}, x0 = {
  ZodString: "string",
  ZodBoolean: "checkbox",
  ZodDate: "date",
  ZodEnum: "select",
  ZodNativeEnum: "select",
  ZodNumber: "number",
  ZodArray: "array",
  ZodObject: "object"
};
var Va = /* @__PURE__ */ ((e) => (e[e.DISABLES = 0] = "DISABLES", e[e.REQUIRES = 1] = "REQUIRES", e[e.HIDES = 2] = "HIDES", e[e.SETS_OPTIONS = 3] = "SETS_OPTIONS", e))(Va || {});
const [E0, O0] = Ks("AutoFormDependencies");
function S0(e) {
  const t = P_(), n = e.replace(/\[\d+\]/g, ""), a = I_(e);
  if (!t)
    throw new Error("useDependencies should be used within <AutoForm>");
  const r = E0(), s = pe(!1), o = pe(!1), l = pe(!1), u = pe(), c = U(() => r.value?.filter(
    (y) => y.targetField === n
  ));
  function d(y) {
    const I = y.sourceField, S = j_(e) ?? -1, [P, ...w] = I.split(".").toReversed(), [x, ...O] = y.targetField.split(".").toReversed();
    if (S >= 0 && w.join(",") === O.join(",")) {
      const [E, ...k] = e.split(".").toReversed();
      return Yi(t.value, k.join(".") + P);
    }
    return Yi(t.value, I);
  }
  const f = U(() => c.value?.map((y) => d(y))), v = () => {
    s.value = !1, o.value = !1, l.value = !1, u.value = void 0;
  };
  return Fe([f, r], () => {
    v(), c.value?.forEach((y) => {
      const I = d(y), S = y.when(I, a.value);
      switch (y.type) {
        case Va.DISABLES:
          S && (s.value = !0);
          break;
        case Va.REQUIRES:
          S && (l.value = !0);
          break;
        case Va.HIDES:
          S && (o.value = !0);
          break;
        case Va.SETS_OPTIONS:
          S && (u.value = y.options);
          break;
      }
    });
  }, { immediate: !0, deep: !0 }), {
    isDisabled: s,
    isHidden: o,
    isRequired: l,
    overrideOptions: u
  };
}
const ko = /* @__PURE__ */ $({
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
    const a = U(() => {
      if (["ZodObject", "ZodArray"].includes(t.shape?.type))
        return { schema: t.shape?.schema };
    }), { isDisabled: r, isHidden: s, isRequired: o, overrideOptions: l } = S0(t.fieldName);
    return (u, c) => i(s) ? ve("", !0) : (p(), A(mt(n(e.config) ? typeof e.config.component == "string" ? i(el)[e.config.component] : e.config.component : i(el)[i(x0)[e.shape.type]]), G({
      key: 0,
      "field-name": e.fieldName,
      label: e.shape.schema?.description,
      required: i(o) || e.shape.required,
      options: i(l) || e.shape.options,
      disabled: i(r),
      config: e.config
    }, a.value), {
      default: m(() => [
        R(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["field-name", "label", "required", "options", "disabled", "config"]));
  }
}), C0 = /* @__PURE__ */ $({
  __name: "AutoForm",
  props: {
    schema: {},
    form: {},
    fieldConfig: {},
    dependencies: {}
  },
  emits: ["submit"],
  setup(e, { emit: t }) {
    const n = e, a = t, { dependencies: r } = Or(n);
    O0(r);
    const s = U(() => {
      const c = {}, f = tc(n.schema).shape;
      return Object.keys(f).forEach((v) => {
        const y = f[v], I = wa(y);
        let S = I && "values" in I._def ? I._def.values : void 0;
        !Array.isArray(S) && typeof S == "object" && (S = Object.values(S)), c[v] = {
          type: wo(y),
          default: Br(y),
          options: S,
          required: !["ZodOptional", "ZodNullable"].includes(y._def.typeName),
          schema: I
        };
      }), c;
    }), o = U(() => {
      const c = {};
      for (const d in s.value) {
        const f = s.value[d];
        c[d] = {
          shape: f,
          config: n.fieldConfig?.[d],
          fieldName: d
        };
      }
      return c;
    }), l = U(() => n.form ? "form" : O_), u = U(() => n.form ? {
      onSubmit: n.form.handleSubmit((c) => a("submit", c))
    } : {
      keepValues: !0,
      validationSchema: Hu(n.schema),
      onSubmit: (d) => a("submit", d)
    });
    return (c, d) => (p(), A(mt(l.value), It(Mt(u.value)), {
      default: m(() => [
        R(c.$slots, "customAutoForm", { fields: o.value }, () => [
          (p(!0), j(Re, null, Ge(s.value, (f, v) => R(c.$slots, v.toString(), {
            key: v,
            shape: f,
            fieldName: v.toString(),
            config: e.fieldConfig?.[v]
          }, () => [
            b(ko, {
              config: e.fieldConfig?.[v],
              "field-name": v.toString(),
              shape: f
            }, null, 8, ["config", "field-name", "shape"])
          ])), 128))
        ]),
        R(c.$slots, "default", { shapes: s.value })
      ]),
      _: 3
    }, 16));
  }
}), T0 = /* @__PURE__ */ $({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = qe(e, t);
    return (s, o) => (p(), A(i(Ws), G({ "data-slot": "dialog" }, i(r)), {
      default: m(() => [
        R(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), N0 = /* @__PURE__ */ $({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = he(t, "class"), a = et(n);
    return (r, s) => (p(), A(i(qs), G({ "data-slot": "dialog-description" }, i(a), {
      class: i(H)("text-muted-foreground text-sm", t.class)
    }), {
      default: m(() => [
        R(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), A0 = /* @__PURE__ */ $({
  __name: "DialogHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (p(), j("div", {
      "data-slot": "dialog-header",
      class: Ee(i(H)("flex flex-col gap-2 text-center sm:text-left", t.class))
    }, [
      R(n.$slots, "default")
    ], 2));
  }
}), I0 = /* @__PURE__ */ $({
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
    const n = e, a = t, r = he(n, "class"), s = qe(r, a);
    return (o, l) => (p(), A(i(Zs), null, {
      default: m(() => [
        b(i(Hs), { class: "fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, {
          default: m(() => [
            b(i(Gs), G({
              class: i(H)(
                "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                n.class
              )
            }, i(s), {
              onPointerDownOutside: l[0] || (l[0] = (u) => {
                const c = u.detail.originalEvent, d = c.target;
                (c.offsetX > d.clientWidth || c.offsetY > d.clientHeight) && u.preventDefault();
              })
            }), {
              default: m(() => [
                R(o.$slots, "default"),
                b(i(cl), { class: "absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-secondary" }, {
                  default: m(() => [
                    b(i(ar), { class: "w-4 h-4" }),
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
}), P0 = /* @__PURE__ */ $({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = he(t, "class"), a = et(n);
    return (r, s) => (p(), A(i(Ys), G({ "data-slot": "dialog-title" }, i(a), {
      class: i(H)("text-lg leading-none font-semibold", t.class)
    }), {
      default: m(() => [
        R(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), $0 = ["innerHTML"], xo = /* @__PURE__ */ $({
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
    return (n, a) => (p(), A(i(T0), {
      open: t.value,
      "onUpdate:open": a[0] || (a[0] = (r) => t.value = r)
    }, {
      default: m(() => [
        b(i(I0), { class: "!max-w-max min-w-[435px]" }, {
          default: m(() => [
            b(i(A0), null, {
              default: m(() => [
                b(i(P0), null, {
                  default: m(() => [
                    oe("div", {
                      class: "[&>em]:font-normal [&>em]:!not-italic line-clamp-1",
                      innerHTML: e.title
                    }, null, 8, $0)
                  ]),
                  _: 1
                }),
                e.description ? (p(), A(i(N0), { key: 0 }, {
                  default: m(() => [
                    be(se(e.description), 1)
                  ]),
                  _: 1
                })) : ve("", !0)
              ]),
              _: 1
            }),
            R(n.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), D0 = { class: "mt-1" }, L0 = /* @__PURE__ */ $({
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
    const t = ft(e, "open"), n = pe(!1);
    async function a(s) {
      n.value = !0;
      try {
        await e.formConfig.onSubmit?.(s) && (t.value = !1);
      } catch {
      }
      n.value = !1;
    }
    const r = Uu({
      validationSchema: Hu(Ii(e.formConfig.schema))
    });
    return e.formConfig.initialValues && r.setValues(yc(e.formConfig.initialValues)), (s, o) => (p(), A(xo, G(e.dialogConfig, {
      open: t.value,
      "onUpdate:open": o[1] || (o[1] = (l) => t.value = l)
    }), {
      default: m(() => [
        b(C0, {
          schema: i(Ii)(e.formConfig.schema),
          form: i(r),
          "field-config": e.formConfig.fieldConfig,
          class: "flex flex-col gap-3",
          onSubmit: o[0] || (o[0] = (l) => a(l))
        }, {
          default: m(() => [
            oe("div", D0, [
              b(pt, {
                type: "submit",
                disabled: n.value
              }, {
                default: m(() => [
                  be(se(e.dialogConfig.okButtonText || "Submit"), 1)
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
const V0 = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const R0 = (e) => typeof e < "u";
function M0(e) {
  return JSON.parse(JSON.stringify(e));
}
function tl(e, t, n, a = {}) {
  var r, s, o;
  const {
    clone: l = !1,
    passive: u = !1,
    eventName: c,
    deep: d = !1,
    defaultValue: f,
    shouldEmit: v
  } = a, y = Tt(), I = n || y?.emit || ((r = y?.$emit) == null ? void 0 : r.bind(y)) || ((o = (s = y?.proxy) == null ? void 0 : s.$emit) == null ? void 0 : o.bind(y?.proxy));
  let S = c;
  t || (t = "modelValue"), S = S || `update:${t.toString()}`;
  const P = (O) => l ? typeof l == "function" ? l(O) : M0(O) : O, w = () => R0(e[t]) ? P(e[t]) : f, x = (O) => {
    v ? v(O) && I(S, O) : I(S, O);
  };
  if (u) {
    const O = w(), E = pe(O);
    let k = !1;
    return Fe(
      () => e[t],
      (C) => {
        k || (k = !0, E.value = P(C), St(() => k = !1));
      }
    ), Fe(
      E,
      (C) => {
        !k && (C !== e[t] || d) && x(C);
      },
      { deep: d }
    ), E;
  } else
    return U({
      get() {
        return w();
      },
      set(O) {
        x(O);
      }
    });
}
const [Eo, F0] = Ks("DrawerRoot"), ic = /* @__PURE__ */ new WeakMap();
function ht(e, t, n = !1) {
  if (!e || !(e instanceof HTMLElement) || !t)
    return;
  const a = {};
  Object.entries(t).forEach(([r, s]) => {
    if (r.startsWith("--")) {
      e.style.setProperty(r, s);
      return;
    }
    a[r] = e.style[r], e.style[r] = s;
  }), !n && ic.set(e, a);
}
function B0(e, t) {
  if (!e || !(e instanceof HTMLElement))
    return;
  const n = ic.get(e);
  n && Object.entries(n).forEach(([a, r]) => {
    e.style[a] = r;
  });
}
function br(e, t) {
  const n = window.getComputedStyle(e), a = n.transform || n.webkitTransform || n.mozTransform;
  let r = a.match(/^matrix3d\((.+)\)$/);
  return r ? Number.parseFloat(r[1].split(", ")[ct(t) ? 13 : 12]) : (r = a.match(/^matrix\((.+)\)$/), r ? Number.parseFloat(r[1].split(", ")[ct(t) ? 5 : 4]) : null);
}
function j0(e) {
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
function gs(e, t) {
  if (!e)
    return () => {
    };
  const n = e.style.cssText;
  return Object.assign(e.style, t), () => {
    e.style.cssText = n;
  };
}
function U0(...e) {
  return (...t) => {
    for (const n of e)
      typeof n == "function" && n(...t);
  };
}
const tt = {
  DURATION: 0.5,
  EASE: [0.32, 0.72, 0, 1]
}, lc = 0.4, z0 = 0.25, W0 = 100, uc = 8, _r = 16, cc = 26, nl = "vaul-dragging";
function H0({
  activeSnapPoint: e,
  snapPoints: t,
  drawerRef: n,
  overlayRef: a,
  fadeFromIndex: r,
  onSnapPointChange: s,
  direction: o
}) {
  const l = pe(typeof window < "u" ? {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  } : void 0);
  function u() {
    l.value = {
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight
    };
  }
  Vn(() => {
    typeof window < "u" && window.addEventListener("resize", u);
  }), zs(() => {
    typeof window < "u" && window.removeEventListener("resize", u);
  });
  const c = U(
    () => (t.value && e.value === t.value[t.value.length - 1]) ?? null
  ), d = U(
    () => t.value && t.value.length > 0 && (r?.value || r?.value === 0) && !Number.isNaN(r?.value) && t.value[r?.value ?? -1] === e.value || !t.value
  ), f = U(
    () => {
      var x;
      return ((x = t.value) == null ? void 0 : x.findIndex((O) => O === e.value)) ?? null;
    }
  ), v = U(
    () => {
      var x;
      return ((x = t.value) == null ? void 0 : x.map((O) => {
        const E = typeof O == "string";
        let k = 0;
        if (E && (k = Number.parseInt(O, 10)), ct(o.value)) {
          const _ = E ? k : l.value ? O * l.value.innerHeight : 0;
          return l.value ? o.value === "bottom" ? l.value.innerHeight - _ : -l.value.innerHeight + _ : _;
        }
        const C = E ? k : l.value ? O * l.value.innerWidth : 0;
        return l.value ? o.value === "right" ? l.value.innerWidth - C : -l.value.innerWidth + C : C;
      })) ?? [];
    }
  ), y = U(
    () => {
      var x;
      return f.value !== null ? (x = v.value) == null ? void 0 : x[f.value] : null;
    }
  ), I = (x) => {
    var O, E, k, C;
    const _ = ((O = v.value) == null ? void 0 : O.findIndex((D) => D === x)) ?? null;
    St(() => {
      var D;
      s(_, v.value), ht((D = n.value) == null ? void 0 : D.$el, {
        transition: `transform ${tt.DURATION}s cubic-bezier(${tt.EASE.join(",")})`,
        transform: ct(o.value) ? `translate3d(0, ${x}px, 0)` : `translate3d(${x}px, 0, 0)`
      });
    }), v.value && _ !== v.value.length - 1 && _ !== r?.value ? ht((E = a.value) == null ? void 0 : E.$el, {
      transition: `opacity ${tt.DURATION}s cubic-bezier(${tt.EASE.join(",")})`,
      opacity: "0"
    }) : ht((k = a.value) == null ? void 0 : k.$el, {
      transition: `opacity ${tt.DURATION}s cubic-bezier(${tt.EASE.join(",")})`,
      opacity: "1"
    }), e.value = _ !== null ? ((C = t.value) == null ? void 0 : C[_]) ?? null : null;
  };
  Fe(
    [e, v, t],
    () => {
      var x;
      if (e.value) {
        const O = ((x = t.value) == null ? void 0 : x.findIndex((E) => E === e.value)) ?? -1;
        v.value && O !== -1 && typeof v.value[O] == "number" && I(v.value[O]);
      }
    },
    {
      immediate: !0
      // if you want to run the effect immediately as well
    }
  );
  function S({
    draggedDistance: x,
    closeDrawer: O,
    velocity: E,
    dismissible: k
  }) {
    var C, _, D;
    if (r.value === void 0)
      return;
    const L = o.value === "bottom" || o.value === "right" ? (y.value ?? 0) - x : (y.value ?? 0) + x, J = f.value === r.value - 1, te = f.value === 0, ne = x > 0;
    if (J && ht((C = a.value) == null ? void 0 : C.$el, {
      transition: `opacity ${tt.DURATION}s cubic-bezier(${tt.EASE.join(",")})`
    }), E > 2 && !ne) {
      k ? O() : I(v.value[0]);
      return;
    }
    if (E > 2 && ne && v && t.value) {
      I(v.value[t.value.length - 1]);
      return;
    }
    const fe = (_ = v.value) == null ? void 0 : _.reduce((ae, Y) => typeof ae != "number" || typeof Y != "number" ? ae : Math.abs(Y - L) < Math.abs(ae - L) ? Y : ae), X = ct(o.value) ? window.innerHeight : window.innerWidth;
    if (E > lc && Math.abs(x) < X * 0.4) {
      const ae = ne ? 1 : -1;
      if (ae > 0 && c) {
        I(v.value[(((D = t.value) == null ? void 0 : D.length) ?? 0) - 1]);
        return;
      }
      if (te && ae < 0 && k && O(), f.value === null)
        return;
      I(v.value[f.value + ae]);
      return;
    }
    I(fe);
  }
  function P({ draggedDistance: x }) {
    var O;
    if (y.value === null)
      return;
    const E = o.value === "bottom" || o.value === "right" ? y.value - x : y.value + x;
    (o.value === "bottom" || o.value === "right") && E < v.value[v.value.length - 1] || (o.value === "top" || o.value === "left") && E > v.value[v.value.length - 1] || ht((O = n.value) == null ? void 0 : O.$el, {
      transform: ct(o.value) ? `translate3d(0, ${E}px, 0)` : `translate3d(${E}px, 0, 0)`
    });
  }
  function w(x, O) {
    if (!t.value || typeof f.value != "number" || !v.value || r.value === void 0)
      return null;
    const E = f.value === r.value - 1;
    if (f.value >= r.value && O)
      return 0;
    if (E && !O)
      return 1;
    if (!d.value && !E)
      return null;
    const k = E ? f.value + 1 : f.value - 1, C = E ? v.value[k] - v.value[k - 1] : v.value[k + 1] - v.value[k], _ = x / Math.abs(C);
    return E ? 1 - _ : _;
  }
  return {
    isLastSnapPoint: c,
    shouldFade: d,
    getPercentageDragged: w,
    activeSnapPointIndex: f,
    onRelease: S,
    onDrag: P,
    snapPointsOffset: v
  };
}
function al() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
let Da = null;
function Z0(e) {
  const { isOpen: t, modal: n, nested: a, hasBeenOpened: r, preventScrollRestoration: s, noBodyStyles: o } = e, l = pe(typeof window < "u" ? window.location.href : ""), u = pe(0);
  function c() {
    if (al() && Da === null && t.value && !o.value) {
      Da = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left,
        height: document.body.style.height
      };
      const { scrollX: f, innerHeight: v } = window;
      document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, {
        top: `${-u.value}px`,
        left: `${-f}px`,
        right: "0px",
        height: "auto"
      }), setTimeout(() => {
        requestAnimationFrame(() => {
          const y = v - window.innerHeight;
          y && u.value >= v && (document.body.style.top = `-${u.value + y}px`);
        });
      }, 300);
    }
  }
  function d() {
    if (al() && Da !== null && !o.value) {
      const f = -Number.parseInt(document.body.style.top, 10), v = -Number.parseInt(document.body.style.left, 10);
      Object.assign(document.body.style, Da), window.requestAnimationFrame(() => {
        if (s.value && l.value !== window.location.href) {
          l.value = window.location.href;
          return;
        }
        window.scrollTo(v, f);
      }), Da = null;
    }
  }
  return Vn(() => {
    function f() {
      u.value = window.scrollY;
    }
    f(), window.addEventListener("scroll", f), Ur(() => {
      window.removeEventListener("scroll", f);
    });
  }), Fe([t, r, l], () => {
    a.value || !r.value || (t.value ? (window.matchMedia("(display-mode: standalone)").matches || c(), n.value || setTimeout(() => {
      d();
    }, 500)) : d());
  }), { restorePositionSetting: d };
}
function G0(e, t) {
  return e && e.value ? e : t;
}
function q0(e) {
  const {
    emitDrag: t,
    emitRelease: n,
    emitClose: a,
    emitOpenChange: r,
    open: s,
    dismissible: o,
    nested: l,
    modal: u,
    shouldScaleBackground: c,
    setBackgroundColorOnScale: d,
    scrollLockTimeout: f,
    closeThreshold: v,
    activeSnapPoint: y,
    fadeFromIndex: I,
    direction: S,
    noBodyStyles: P,
    handleOnly: w,
    preventScrollRestoration: x
  } = e, O = pe(s.value ?? !1), E = pe(!1), k = pe(!1), C = pe(!1), _ = pe(null), D = pe(null), L = pe(null), J = pe(null), te = pe(null), ne = pe(!1), fe = pe(null), X = pe(0), ae = pe(!1);
  pe(0);
  const Y = pe(null);
  pe(0);
  const W = U(() => {
    var h;
    return ((h = Y.value) == null ? void 0 : h.$el.getBoundingClientRect().height) || 0;
  }), q = G0(
    e.snapPoints,
    pe(void 0)
  ), Ce = U(() => {
    var h;
    return q && (((h = q.value) == null ? void 0 : h.length) ?? 0) > 0;
  }), Me = pe(null), {
    activeSnapPointIndex: ot,
    onRelease: $t,
    snapPointsOffset: Ye,
    onDrag: Le,
    shouldFade: At,
    getPercentageDragged: le
  } = H0({
    snapPoints: q,
    activeSnapPoint: y,
    drawerRef: Y,
    fadeFromIndex: I,
    overlayRef: _,
    onSnapPointChange: ue,
    direction: S
  });
  function ue(h, g) {
    q.value && h === g.length - 1 && (D.value = /* @__PURE__ */ new Date());
  }
  Z0({
    isOpen: O,
    modal: u,
    nested: l,
    hasBeenOpened: E,
    noBodyStyles: P,
    preventScrollRestoration: x
  });
  function Ie() {
    return (window.innerWidth - cc) / window.innerWidth;
  }
  function Pe(h, g) {
    var M;
    if (!h)
      return !1;
    let K = h;
    const Se = (M = window.getSelection()) == null ? void 0 : M.toString(), Ne = Y.value ? br(Y.value.$el, S.value) : null, xe = /* @__PURE__ */ new Date();
    if (K.hasAttribute("data-vaul-no-drag") || K.closest("[data-vaul-no-drag]"))
      return !1;
    if (S.value === "right" || S.value === "left")
      return !0;
    if (D.value && xe.getTime() - D.value.getTime() < 500)
      return !1;
    if (Ne !== null && (S.value === "bottom" ? Ne > 0 : Ne < 0))
      return !0;
    if (Se && Se.length > 0)
      return !1;
    if (te.value && xe.getTime() - te.value.getTime() < f.value && Ne === 0 || g)
      return te.value = xe, !1;
    for (; K; ) {
      if (K.scrollHeight > K.clientHeight) {
        if (K.scrollTop !== 0)
          return te.value = /* @__PURE__ */ new Date(), !1;
        if (K.getAttribute("role") === "dialog")
          return !0;
      }
      K = K.parentNode;
    }
    return !0;
  }
  function at(h) {
    !o.value && !q.value || Y.value && !Y.value.$el.contains(h.target) || (k.value = !0, L.value = /* @__PURE__ */ new Date(), h.target.setPointerCapture(h.pointerId), X.value = ct(S.value) ? h.clientY : h.clientX);
  }
  function it(h) {
    var g, M, K, Se, Ne, xe;
    if (Y.value && k.value) {
      const V = S.value === "bottom" || S.value === "right" ? 1 : -1, z = (X.value - (ct(S.value) ? h.clientY : h.clientX)) * V, De = z > 0, We = q.value && !o.value && !De;
      if (We && ot.value === 0)
        return;
      const Bt = Math.abs(z), tn = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      let T = Bt / W.value;
      const N = le(Bt, De);
      if (N !== null && (T = N), We && T >= 1 || !ne.value && !Pe(h.target, De))
        return;
      if ((g = Y?.value) == null || g.$el.classList.add(nl), ne.value = !0, ht((M = Y.value) == null ? void 0 : M.$el, {
        transition: "none"
      }), ht((K = _.value) == null ? void 0 : K.$el, {
        transition: "none"
      }), q.value && Le({ draggedDistance: z }), De && !q.value) {
        const Q = j0(z), ge = Math.min(Q * -1, 0) * V;
        ht((Se = Y.value) == null ? void 0 : Se.$el, {
          transform: ct(S.value) ? `translate3d(0, ${ge}px, 0)` : `translate3d(${ge}px, 0, 0)`
        });
        return;
      }
      const B = 1 - T;
      if ((At.value || I.value && ot.value === I.value - 1) && (t(T), ht(
        (Ne = _.value) == null ? void 0 : Ne.$el,
        {
          opacity: `${B}`,
          transition: "none"
        },
        !0
      )), tn && _.value && c.value) {
        const Q = Math.min(Ie() + T * (1 - Ie()), 1), ge = 8 - T * 8, Oe = Math.max(0, 14 - T * 14);
        ht(
          tn,
          {
            borderRadius: `${ge}px`,
            transform: ct(S.value) ? `scale(${Q}) translate3d(0, ${Oe}px, 0)` : `scale(${Q}) translate3d(${Oe}px, 0, 0)`,
            transition: "none"
          },
          !0
        );
      }
      if (!q.value) {
        const Q = Bt * V;
        ht((xe = Y.value) == null ? void 0 : xe.$el, {
          transform: ct(S.value) ? `translate3d(0, ${Q}px, 0)` : `translate3d(${Q}px, 0, 0)`
        });
      }
    }
  }
  function Ke() {
    var h;
    if (!Y.value)
      return;
    const g = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]"), M = br(Y.value.$el, S.value);
    ht(Y.value.$el, {
      transform: "translate3d(0, 0, 0)",
      transition: `transform ${tt.DURATION}s cubic-bezier(${tt.EASE.join(",")})`
    }), ht((h = _.value) == null ? void 0 : h.$el, {
      transition: `opacity ${tt.DURATION}s cubic-bezier(${tt.EASE.join(",")})`,
      opacity: "1"
    }), c.value && M && M > 0 && O.value && ht(
      g,
      {
        borderRadius: `${uc}px`,
        overflow: "hidden",
        ...ct(S.value) ? {
          transform: `scale(${Ie()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
          transformOrigin: "top"
        } : {
          transform: `scale(${Ie()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
          transformOrigin: "left"
        },
        transitionProperty: "transform, border-radius",
        transitionDuration: `${tt.DURATION}s`,
        transitionTimingFunction: `cubic-bezier(${tt.EASE.join(",")})`
      },
      !0
    );
  }
  function Ft(h) {
    Y.value && (a(), h || (O.value = !1), window.setTimeout(() => {
      q.value && (y.value = q.value[0]);
    }, tt.DURATION * 1e3));
  }
  na(() => {
    if (!O.value && c.value && V0) {
      const h = setTimeout(() => {
        B0(document.body);
      }, 200);
      return () => clearTimeout(h);
    }
  }), Fe(s, () => {
    O.value = s.value, s.value || Ft();
  });
  function vn(h) {
    if (!k.value || !Y.value)
      return;
    Y.value.$el.classList.remove(nl), ne.value = !1, k.value = !1, J.value = /* @__PURE__ */ new Date();
    const g = br(Y.value.$el, S.value);
    if (!Pe(h.target, !1) || !g || Number.isNaN(g) || L.value === null)
      return;
    const M = J.value.getTime() - L.value.getTime(), K = X.value - (ct(S.value) ? h.clientY : h.clientX), Se = Math.abs(K) / M;
    if (Se > 0.05 && (C.value = !0, window.setTimeout(() => {
      C.value = !1;
    }, 200)), q.value) {
      const xe = S.value === "bottom" || S.value === "right" ? 1 : -1;
      $t({
        draggedDistance: K * xe,
        closeDrawer: Ft,
        velocity: Se,
        dismissible: o.value
      }), n(!0);
      return;
    }
    if (S.value === "bottom" || S.value === "right" ? K > 0 : K < 0) {
      Ke(), n(!0);
      return;
    }
    if (Se > lc) {
      Ft(), n(!1);
      return;
    }
    const Ne = Math.min(
      Y.value.$el.getBoundingClientRect().height ?? 0,
      window.innerHeight
    );
    if (g >= Ne * v.value) {
      Ft(), n(!1);
      return;
    }
    n(!0), Ke();
  }
  Fe(O, (h) => {
    h && (D.value = /* @__PURE__ */ new Date()), r(h);
  }, { immediate: !0 });
  function qt(h) {
    var g, M;
    const K = h ? (window.innerWidth - _r) / window.innerWidth : 1, Se = h ? -16 : 0;
    fe.value && window.clearTimeout(fe.value), ht((g = Y.value) == null ? void 0 : g.$el, {
      transition: `transform ${tt.DURATION}s cubic-bezier(${tt.EASE.join(",")})`,
      transform: `scale(${K}) translate3d(0, ${Se}px, 0)`
    }), !h && (M = Y.value) != null && M.$el && (fe.value = window.setTimeout(() => {
      var Ne, xe;
      const V = br((Ne = Y.value) == null ? void 0 : Ne.$el, S.value);
      ht((xe = Y.value) == null ? void 0 : xe.$el, {
        transition: "none",
        transform: ct(S.value) ? `translate3d(0, ${V}px, 0)` : `translate3d(${V}px, 0, 0)`
      });
    }, 500));
  }
  function Yt(h) {
    var g;
    if (h < 0)
      return;
    const M = ct(S.value) ? window.innerHeight : window.innerWidth, K = (M - _r) / M, Se = K + h * (1 - K), Ne = -16 + h * _r;
    ht((g = Y.value) == null ? void 0 : g.$el, {
      transform: ct(S.value) ? `scale(${Se}) translate3d(0, ${Ne}px, 0)` : `scale(${Se}) translate3d(${Ne}px, 0, 0)`,
      transition: "none"
    });
  }
  function Sn(h) {
    var g;
    const M = ct(S.value) ? window.innerHeight : window.innerWidth, K = h ? (M - _r) / M : 1, Se = h ? -16 : 0;
    h && ht((g = Y.value) == null ? void 0 : g.$el, {
      transition: `transform ${tt.DURATION}s cubic-bezier(${tt.EASE.join(",")})`,
      transform: ct(S.value) ? `scale(${K}) translate3d(0, ${Se}px, 0)` : `scale(${K}) translate3d(${Se}px, 0, 0)`
    });
  }
  return {
    open: s,
    isOpen: O,
    modal: u,
    keyboardIsOpen: ae,
    hasBeenOpened: E,
    drawerRef: Y,
    drawerHeightRef: W,
    overlayRef: _,
    handleRef: Me,
    isDragging: k,
    dragStartTime: L,
    isAllowedToDrag: ne,
    snapPoints: q,
    activeSnapPoint: y,
    hasSnapPoints: Ce,
    pointerStart: X,
    dismissible: o,
    snapPointsOffset: Ye,
    direction: S,
    shouldFade: At,
    fadeFromIndex: I,
    shouldScaleBackground: c,
    setBackgroundColorOnScale: d,
    onPress: at,
    onDrag: it,
    onRelease: vn,
    closeDrawer: Ft,
    onNestedDrag: Yt,
    onNestedRelease: Sn,
    onNestedOpenChange: qt,
    emitClose: a,
    emitDrag: t,
    emitRelease: n,
    emitOpenChange: r,
    nested: l,
    handleOnly: w,
    noBodyStyles: P
  };
}
const Y0 = /* @__PURE__ */ $({
  __name: "DrawerRoot",
  props: {
    activeSnapPoint: { default: void 0 },
    closeThreshold: { default: z0 },
    shouldScaleBackground: { type: Boolean, default: void 0 },
    setBackgroundColorOnScale: { type: Boolean, default: !0 },
    scrollLockTimeout: { default: W0 },
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
    bc();
    const s = U(() => a.fadeFromIndex ?? (a.snapPoints && a.snapPoints.length - 1)), o = tl(a, "open", r, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), l = tl(a, "activeSnapPoint", r, {
      passive: a.activeSnapPoint === void 0
    }), u = {
      emitDrag: (I) => r("drag", I),
      emitRelease: (I) => r("release", I),
      emitClose: () => r("close"),
      emitOpenChange: (I) => {
        r("update:open", I), setTimeout(() => {
          r("animationEnd", I);
        }, tt.DURATION * 1e3);
      }
    }, { closeDrawer: c, hasBeenOpened: d, modal: f, isOpen: v } = F0(
      q0({
        ...u,
        ...Or(a),
        activeSnapPoint: l,
        fadeFromIndex: s,
        open: o
      })
    );
    function y(I) {
      if (o.value !== void 0) {
        u.emitOpenChange(I);
        return;
      }
      v.value = I, I ? d.value = !0 : c();
    }
    return t({
      open: v
    }), (I, S) => (p(), A(i(Ws), {
      open: i(v),
      modal: i(f),
      "onUpdate:open": y
    }, {
      default: m(() => [
        R(I.$slots, "default", { open: i(v) })
      ]),
      _: 3
    }, 8, ["open", "modal"]));
  }
}), K0 = /* @__PURE__ */ $({
  __name: "DrawerOverlay",
  setup(e) {
    const { overlayRef: t, hasSnapPoints: n, isOpen: a, shouldFade: r } = Eo();
    return (s, o) => (p(), A(i(Hs), {
      ref_key: "overlayRef",
      ref: t,
      "data-vaul-overlay": "",
      "data-vaul-snap-points": i(a) && i(n) ? "true" : "false",
      "data-vaul-snap-points-overlay": i(a) && i(r) ? "true" : "false"
    }, null, 8, ["data-vaul-snap-points", "data-vaul-snap-points-overlay"]));
  }
}), X0 = () => () => {
};
function J0() {
  const { direction: e, isOpen: t, shouldScaleBackground: n, setBackgroundColorOnScale: a, noBodyStyles: r } = Eo(), s = pe(null), o = pe(document.body.style.backgroundColor);
  function l() {
    return (window.innerWidth - cc) / window.innerWidth;
  }
  na((u) => {
    if (t.value && n.value) {
      s.value && clearTimeout(s.value);
      const c = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      if (!c)
        return;
      U0(
        a.value && !r.value ? gs(document.body, { background: "black" }) : X0,
        gs(c, {
          transformOrigin: ct(e.value) ? "top" : "left",
          transitionProperty: "transform, border-radius",
          transitionDuration: `${tt.DURATION}s`,
          transitionTimingFunction: `cubic-bezier(${tt.EASE.join(",")})`
        })
      );
      const d = gs(c, {
        borderRadius: `${uc}px`,
        overflow: "hidden",
        ...ct(e.value) ? {
          transform: `scale(${l()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`
        } : {
          transform: `scale(${l()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`
        }
      });
      u(() => {
        d(), s.value = window.setTimeout(() => {
          o.value ? document.body.style.background = o.value : document.body.style.removeProperty("background");
        }, tt.DURATION * 1e3);
      });
    }
  }, { flush: "pre" });
}
const Q0 = /* @__PURE__ */ $({
  __name: "DrawerContent",
  setup(e) {
    const {
      open: t,
      isOpen: n,
      snapPointsOffset: a,
      hasSnapPoints: r,
      drawerRef: s,
      onPress: o,
      onDrag: l,
      onRelease: u,
      modal: c,
      emitOpenChange: d,
      dismissible: f,
      keyboardIsOpen: v,
      closeDrawer: y,
      direction: I,
      handleOnly: S
    } = Eo();
    J0();
    const P = pe(!1), w = U(() => a.value && a.value.length > 0 ? `${a.value[0]}px` : "0");
    function x(k) {
      if (!c.value || k.defaultPrevented) {
        k.preventDefault();
        return;
      }
      v.value && (v.value = !1), f.value ? d(!1) : k.preventDefault();
    }
    function O(k) {
      S.value || o(k);
    }
    function E(k) {
      S.value || l(k);
    }
    return na(() => {
      r.value && window.requestAnimationFrame(() => {
        P.value = !0;
      });
    }), (k, C) => (p(), A(i(Gs), {
      ref_key: "drawerRef",
      ref: s,
      "data-vaul-drawer": "",
      "data-vaul-drawer-direction": i(I),
      "data-vaul-delayed-snap-points": P.value ? "true" : "false",
      "data-vaul-snap-points": i(n) && i(r) ? "true" : "false",
      style: ol({ "--snap-point-height": w.value }),
      onPointerdown: O,
      onPointermove: E,
      onPointerup: i(u),
      onPointerDownOutside: x,
      onOpenAutoFocus: C[0] || (C[0] = _c(() => {
      }, ["prevent"])),
      onEscapeKeyDown: C[1] || (C[1] = (_) => {
        i(f) || _.preventDefault();
      })
    }, {
      default: m(() => [
        R(k.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-vaul-drawer-direction", "data-vaul-delayed-snap-points", "data-vaul-snap-points", "style", "onPointerup"]));
  }
}), e1 = /* @__PURE__ */ $({
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
    const r = qe(e, t);
    return (s, o) => (p(), A(i(Y0), G({ "data-slot": "drawer" }, i(r)), {
      default: m(() => [
        R(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), t1 = /* @__PURE__ */ $({
  __name: "DrawerOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = he(t, "class");
    return (a, r) => (p(), A(i(K0), G({ "data-slot": "drawer-overlay" }, i(n), {
      class: i(H)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80", t.class)
    }), null, 16, ["class"]));
  }
}), n1 = /* @__PURE__ */ $({
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
    const n = e, r = qe(n, t);
    return (s, o) => (p(), A(i(Zs), null, {
      default: m(() => [
        b(t1),
        b(i(Q0), G({ "data-slot": "drawer-content" }, i(r), {
          class: i(H)(
            "group/drawer-content bg-background fixed z-50 flex h-auto flex-col",
            "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg",
            "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg",
            "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:sm:max-w-sm",
            "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:sm:max-w-sm",
            n.class
          )
        }), {
          default: m(() => [
            o[0] || (o[0] = oe("div", { class: "bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }, null, -1)),
            R(s.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
}), a1 = /* @__PURE__ */ $({
  __name: "DrawerDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = he(t, "class");
    return (a, r) => (p(), A(i(qs), G({ "data-slot": "drawer-description" }, i(n), {
      class: i(H)("text-muted-foreground text-sm", t.class)
    }), {
      default: m(() => [
        R(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), r1 = /* @__PURE__ */ $({
  __name: "DrawerHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (p(), j("div", {
      "data-slot": "drawer-header",
      class: Ee(i(H)("flex flex-col gap-1.5 p-4", t.class))
    }, [
      R(n.$slots, "default")
    ], 2));
  }
}), s1 = /* @__PURE__ */ $({
  __name: "DrawerTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(e) {
    const t = e, n = he(t, "class");
    return (a, r) => (p(), A(i(Ys), G({ "data-slot": "drawer-title" }, i(n), {
      class: i(H)("text-foreground font-semibold", t.class)
    }), {
      default: m(() => [
        R(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), o1 = ["innerHTML"], i1 = { class: "px-4 flex-1 overflow-auto select-text" }, l1 = /* @__PURE__ */ $({
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
    return (n, a) => (p(), A(i(e1), {
      open: t.value,
      "onUpdate:open": a[1] || (a[1] = (r) => t.value = r),
      "handle-only": "",
      direction: "right",
      dismissible: !0,
      "should-scale-background": ""
    }, {
      default: m(() => [
        b(i(n1), { class: "!max-w-[800px]" }, {
          default: m(() => [
            b(i(r1), { class: "!pb-0" }, {
              default: m(() => [
                b(i(s1), { class: "flex items-center gap-2" }, {
                  default: m(() => [
                    oe("div", {
                      class: "[&>em]:font-normal [&>em]:!not-italic line-clamp-1 flex-1",
                      innerHTML: e.title
                    }, null, 8, o1),
                    b(pt, {
                      variant: "ghost",
                      onClick: a[0] || (a[0] = (r) => t.value = !1)
                    }, {
                      default: m(() => [
                        b(i(ar))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                e.description ? (p(), A(i(a1), { key: 0 }, {
                  default: m(() => [
                    be(se(e.description), 1)
                  ]),
                  _: 1
                })) : ve("", !0)
              ]),
              _: 1
            }),
            oe("div", i1, [
              R(n.$slots, "default")
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), u1 = /* @__PURE__ */ $({
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
    const t = ft(e, "open"), n = pe(!1);
    async function a() {
      n.value = !0, (await e.dialogConfig.onOk?.() ?? !0) && (t.value = !1), n.value = !1;
    }
    return (r, s) => (p(), A(mt(e.type === "drawer" ? l1 : xo), G(e.dialogConfig, {
      open: t.value,
      "onUpdate:open": s[0] || (s[0] = (o) => t.value = o)
    }), {
      default: m(() => [
        (p(), A(mt(e.componentConfig.component), G(e.componentConfig.componentProps, { onSubmitSuccess: a }), null, 16))
      ]),
      _: 1
    }, 16, ["open"]));
  }
}), c1 = { class: "mt-1" }, Oo = /* @__PURE__ */ $({
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
    const t = ft(e, "open"), n = pe(e.initialValue), { t: a } = aa(), r = pe(!1);
    async function s() {
      r.value = !0, (await e.dialogConfig.onOk?.(n.value) ?? !0) && (t.value = !1), r.value = !1;
    }
    return (o, l) => (p(), A(xo, G(e.dialogConfig, {
      open: t.value,
      "onUpdate:open": l[1] || (l[1] = (u) => t.value = u)
    }), {
      default: m(() => [
        (p(), A(mt(e.componentConfig.component), G(e.componentConfig.componentProps, {
          modelValue: n.value,
          "onUpdate:modelValue": l[0] || (l[0] = (u) => n.value = u)
        }), null, 16, ["modelValue"])),
        oe("div", c1, [
          b(pt, {
            type: "Submit",
            disabled: r.value,
            size: "sm",
            onClick: s
          }, {
            default: m(() => [
              be(se(e.dialogConfig.okButtonText || i(a)("common.save")), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      _: 1
    }, 16, ["open"]));
  }
}), Na = Tu();
function T1(e, t, n = "dialog") {
  return Na.open({
    component: u1,
    componentProps: {
      componentConfig: t,
      dialogConfig: typeof e == "string" ? { title: e } : e,
      type: n
    }
  });
}
function N1(e, t) {
  return Na.open({
    component: L0,
    componentProps: {
      formConfig: t,
      dialogConfig: typeof e == "string" ? { title: e } : e
    }
  });
}
function A1(e, t = "Achtung", n = "Sind Sie sicher?") {
  return Na.open({
    component: Sb,
    componentProps: {
      title: t,
      description: n,
      onOk: e
    }
  });
}
function I1({ dialogConfig: e, initialValue: t, onOk: n, component: a, componentProps: r }) {
  return Na.open({
    component: Oo,
    componentProps: {
      componentConfig: { component: a, componentProps: r },
      initialValue: t,
      dialogConfig: { ...typeof e == "string" ? { title: e } : e, onOk: n }
    }
  });
}
function P1(e, t, n, a, r) {
  return Na.open({
    component: Oo,
    componentProps: {
      componentConfig: { component: mo, componentProps: { multiple: !0, options: t, ...r } },
      initialValue: n,
      dialogConfig: { ...typeof e == "string" ? { title: e } : e, onOk: a }
    }
  });
}
function $1(e, t, n, a, r) {
  return Na.open({
    component: Oo,
    componentProps: {
      componentConfig: { component: gb, componentProps: { multiple: !0, options: t, ...r } },
      initialValue: n,
      dialogConfig: { ...typeof e == "string" ? { title: e } : e, onOk: a }
    }
  });
}
const D1 = /* @__PURE__ */ $({
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
    const t = e, n = ft(e, "modelValue");
    return (a, r) => (p(), A(mo, {
      modelValue: n.value,
      "onUpdate:modelValue": r[0] || (r[0] = (s) => n.value = s),
      class: Ee(t.class),
      options: [{ value: !0, label: "True" }, { value: !1, label: "False" }]
    }, null, 8, ["modelValue", "class"]));
  }
}), d1 = { key: 0 }, f1 = { class: "text-xs" }, m1 = { class: "text-xs" }, p1 = { class: "flex gap-2" }, L1 = /* @__PURE__ */ $({
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
    function n(u) {
      return {
        "common.from": "From",
        "common.value": "Value",
        "common.add": "Add",
        "common.clear": "Clear All"
      }[u] || u;
    }
    const a = (u) => typeof u == "string", r = ft(e, "modelValue"), s = () => r.value?.push({ from: 0, value: 0 }), o = (u) => r.value.splice(u, 1), l = () => r.value = [];
    return (u, c) => (p(), A(i(ac), null, {
      default: m(() => [
        b(i(sc), { "as-child": "" }, {
          default: m(() => [
            b(Pl, {
              class: Ee(t.class),
              variant: "outline"
            }, {
              default: m(() => [
                r.value.length ? (p(), A($i, {
                  key: 0,
                  value: r.value
                }, null, 8, ["value"])) : e.placeholder ? (p(), j(Re, { key: 1 }, [
                  a(e.placeholder) ? (p(), j("span", d1)) : (p(), A($i, {
                    key: 1,
                    value: e.placeholder,
                    class: "text-muted-foreground"
                  }, null, 8, ["value"]))
                ], 64)) : ve("", !0)
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          _: 1
        }),
        b(i(rc), {
          class: "w-80 flex flex-col gap-2 min-w-[var(--reka-popper-anchor-width)]",
          align: "end"
        }, {
          default: m(() => [
            (p(!0), j(Re, null, Ge(r.value, (d, f) => (p(), j("div", {
              key: f,
              class: "flex gap-2 items-center"
            }, [
              oe("label", f1, se(n("common.from")) + ":", 1),
              b(An, {
                modelValue: r.value[f].from,
                "onUpdate:modelValue": (v) => r.value[f].from = v,
                type: "number"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              oe("label", m1, se(n("common.value")) + ":", 1),
              b(An, {
                modelValue: r.value[f].value,
                "onUpdate:modelValue": (v) => r.value[f].value = v,
                type: "number"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              b(pt, {
                variant: "ghost",
                size: "sm",
                class: "px-1",
                onClick: (v) => o(f)
              }, {
                default: m(() => [
                  b(i(ar))
                ]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128)),
            oe("div", p1, [
              b(pt, {
                size: "sm",
                variant: "ghost",
                class: "!justify-start -mx-2 flex-1",
                onClick: c[0] || (c[0] = (d) => s())
              }, {
                default: m(() => [
                  b(i(Wr)),
                  be(" " + se(n("common.add")), 1)
                ]),
                _: 1
              }),
              r.value.length > 0 ? (p(), A(pt, {
                key: 0,
                size: "sm",
                variant: "ghost",
                class: "!justify-start -mx-2",
                onClick: c[1] || (c[1] = (d) => l())
              }, {
                default: m(() => [
                  b(i(df)),
                  be(" " + se(n("common.clear")), 1)
                ]),
                _: 1
              })) : ve("", !0)
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), V1 = /* @__PURE__ */ $({
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
    const t = e, n = ft(e, "modelValue");
    function a(r, s) {
      n.value || (n.value = [void 0, void 0]), n.value[r] = s, ll(n);
    }
    return (r, s) => (p(), j("div", {
      class: Ee(i(H)("flex items-center gap-0", t.class))
    }, [
      b(i(An), {
        "model-value": n.value?.[0],
        placeholder: e.placeholder?.[0] || "Min",
        disabled: e.disabled,
        type: "number",
        class: "flex-1 rounded-r-none pr-1",
        "onUpdate:modelValue": s[0] || (s[0] = (o) => a(0, o))
      }, null, 8, ["model-value", "placeholder", "disabled"]),
      b(i(An), {
        "model-value": n.value?.[1],
        placeholder: e.placeholder?.[1] || "Max",
        disabled: e.disabled,
        type: "number",
        class: "flex-1 rounded-l-none pr-1",
        "onUpdate:modelValue": s[1] || (s[1] = (o) => a(1, o))
      }, null, 8, ["model-value", "placeholder", "disabled"])
    ], 2));
  }
}), v1 = /* @__PURE__ */ $({
  __name: "InputGroup",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (p(), j("div", {
      "data-slot": "input-group",
      role: "group",
      class: Ee(i(H)(
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
      R(n.$slots, "default")
    ], 2));
  }
}), h1 = ["data-align"], rl = /* @__PURE__ */ $({
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
    return (a, r) => (p(), j("div", {
      role: "group",
      "data-slot": "input-group-addon",
      "data-align": t.align,
      class: Ee(i(H)(i(b1)({ align: t.align }), t.class)),
      onClick: n
    }, [
      R(a.$slots, "default")
    ], 10, h1));
  }
}), g1 = /* @__PURE__ */ $({
  __name: "InputGroupButton",
  props: {
    variant: { default: "ghost" },
    size: { default: "xs" },
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (p(), A(i(pt), {
      "data-size": t.size,
      variant: t.variant,
      class: Ee(i(H)(i(_1)({ size: t.size }), t.class))
    }, {
      default: m(() => [
        R(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-size", "variant", "class"]));
  }
}), y1 = /* @__PURE__ */ $({
  __name: "InputGroupInput",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (p(), A(i(An), {
      "data-slot": "input-group-control",
      class: Ee(i(H)(
        "flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent",
        t.class
      ))
    }, null, 8, ["class"]));
  }
}), b1 = ka(
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
), _1 = ka(
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
), R1 = /* @__PURE__ */ $({
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
    const n = t, a = ft(e, "modelValue"), r = ft(e, "modelSubmit"), s = U(() => !!a.value && a.value.length > 0);
    function o() {
      r.value = a.value || "", n("onSubmit", a.value || "");
    }
    function l() {
      r.value = "", a.value = "", n("onClear", "");
    }
    return (u, c) => (p(), A(i(v1), null, {
      default: m(() => [
        b(i(rl), { align: "inline-start" }, {
          default: m(() => [
            b(i(uf))
          ]),
          _: 1
        }),
        b(i(y1), G({
          modelValue: a.value,
          "onUpdate:modelValue": c[0] || (c[0] = (d) => a.value = d),
          type: "text",
          placeholder: e.placeholder
        }, u.$attrs, {
          onKeydown: wc(o, ["enter"])
        }), null, 16, ["modelValue", "placeholder"]),
        s.value && e.showClearButton ? (p(), A(i(rl), {
          key: 0,
          align: "inline-end"
        }, {
          default: m(() => [
            b(i(g1), {
              variant: "ghost",
              size: "icon-xs",
              onClick: l
            }, {
              default: m(() => [
                b(i(ar))
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : ve("", !0)
      ]),
      _: 1
    }));
  }
}), M1 = /* @__PURE__ */ $({
  __name: "Tag",
  props: {
    variant: {},
    class: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, a) => (p(), j("span", {
      class: Ee(i(H)(i(w1)({ variant: e.variant }), t.class))
    }, [
      R(n.$slots, "default")
    ], 2));
  }
}), w1 = ka(
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
  E1 as AppSidebar,
  pt as Button,
  Pl as ButtonSelect,
  O1 as DataTable,
  hy as DataTableColumnHeader,
  gy as DataTableViewOptions,
  S1 as DateFormat,
  $i as DisplayGraduated,
  Sb as DynamicAlertDialog,
  L0 as DynamicAutoFormDialog,
  u1 as DynamicComponentDialog,
  C1 as DynamicComponentProvider,
  Oo as DynamicConfirmComponentDialog,
  xo as DynamicDialog,
  l1 as DynamicDrawer,
  fb as Empty,
  D1 as InputBoolean,
  L1 as InputGraduated,
  V1 as InputRange,
  R1 as InputSearch,
  gb as SelectListOptions,
  mo as SelectOptions,
  M1 as Tag,
  A1 as alert,
  I1 as confirmGeneric,
  P1 as confirmSelect,
  $1 as confirmSelectList,
  cb as dynamicComponent,
  N1 as openAutoFormDialog,
  T1 as openDynamicDialogComponent,
  Tu as useDynamicComponent,
  Pi as useToggleState
};
