/* @ds-bundle: {"format":4,"namespace":"ActuariaDesignSystem_88aa6b","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"InsightCard","sourcePath":"components/data/InsightCard.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"Toggle","sourcePath":"components/forms/Toggle.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"KpiCard","sourcePath":"components/surfaces/KpiCard.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"844d4ba968ff","components/core/Badge.jsx":"27ba7d08f380","components/core/Button.jsx":"8559ac16e420","components/data/InsightCard.jsx":"da903edf9799","components/feedback/Alert.jsx":"17f457f6ca5c","components/forms/Select.jsx":"d08e13f716d2","components/forms/TextField.jsx":"b95149b7737f","components/forms/Toggle.jsx":"6f7c1ff57d1b","components/navigation/Tabs.jsx":"e7baef85755e","components/surfaces/Card.jsx":"db86cec4d774","components/surfaces/KpiCard.jsx":"4f5f03c6da61","ui_kits/actuaria-plus/Dashboard.jsx":"6f9c984d78f8","ui_kits/actuaria-plus/Header.jsx":"97f3eb9ef5eb","ui_kits/actuaria-plus/Login.jsx":"c675059ff8a8","ui_kits/actuaria-plus/Sidebar.jsx":"de6bc420e994"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ActuariaDesignSystem_88aa6b = window.ActuariaDesignSystem_88aa6b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
const SIZES = { xs: 22, sm: 28, md: 36, lg: 48, xl: 64 };
const COLORS = ["var(--ac-navy)", "var(--ac-blue)", "var(--ac-orange)"];
function initials(name = "") {
  return name.trim().split(/\s+/).slice(0, 2).map((w) => w[0] || "").join("").toUpperCase();
}
function Avatar({ name = "", src, size = "md", color, style, ...rest }) {
  const px = SIZES[size] || SIZES.md;
  const bg = color || COLORS[(name.charCodeAt(0) || 0) % COLORS.length];
  return /* @__PURE__ */ React.createElement(
    "span",
    {
      style: {
        width: px,
        height: px,
        flexShrink: 0,
        borderRadius: "50%",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: src ? "transparent" : bg,
        color: "#fff",
        fontFamily: "var(--font-sans)",
        fontWeight: "var(--fw-extra)",
        fontSize: Math.max(9, px * 0.36),
        overflow: "hidden",
        ...style
      },
      ...rest
    },
    src ? /* @__PURE__ */ React.createElement("img", { src, alt: name, style: { width: "100%", height: "100%", objectFit: "cover" } }) : initials(name)
  );
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const TONES = {
  neutral: { bg: "var(--ac-sunken)", fg: "var(--ac-ink-2)", dot: "var(--ac-ink-3)" },
  blue: { bg: "rgba(48,97,170,.10)", fg: "var(--ac-blue)", dot: "var(--ac-blue)" },
  success: { bg: "var(--ac-success-bg)", fg: "var(--ac-success)", dot: "var(--ac-success)" },
  warning: { bg: "var(--ac-warning-bg)", fg: "var(--ac-warning)", dot: "var(--ac-warning)" },
  error: { bg: "var(--ac-error-bg)", fg: "var(--ac-error)", dot: "var(--ac-error)" }
};
const SIZES = {
  sm: { padding: "2px 8px", gap: "5px", fontSize: "var(--fs-2xs)", dot: "6px" },
  md: { padding: "4px 10px", gap: "6px", fontSize: "var(--fs-xs)", dot: "7px" },
  lg: { padding: "6px 14px", gap: "8px", fontSize: "var(--fs-sm)", dot: "9px" }
};
function Badge({ children, tone = "neutral", dot = false, icon, size = "md", style, ...rest }) {
  const t = TONES[tone] || TONES.neutral;
  const s = SIZES[size] || SIZES.md;
  return /* @__PURE__ */ React.createElement(
    "span",
    {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: s.gap,
        padding: s.padding,
        borderRadius: "var(--r-full)",
        background: t.bg,
        color: t.fg,
        fontFamily: "var(--font-sans)",
        fontSize: s.fontSize,
        fontWeight: "var(--fw-extra)",
        lineHeight: 1.2,
        whiteSpace: "nowrap",
        ...style
      },
      ...rest
    },
    dot && /* @__PURE__ */ React.createElement("span", { style: { width: s.dot, height: s.dot, borderRadius: "50%", background: t.dot } }),
    icon && /* @__PURE__ */ React.createElement("i", { className: icon }),
    children
  );
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    fontSize: 'var(--fs-xs)',
    padding: '7px 14px',
    gap: '6px',
    height: '34px'
  },
  md: {
    fontSize: 'var(--fs-sm)',
    padding: '10px 20px',
    gap: '8px',
    height: '42px'
  },
  lg: {
    fontSize: 'var(--fs-body)',
    padding: '13px 26px',
    gap: '10px',
    height: '50px'
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--ac-navy)',
    color: '#fff',
    border: '1px solid transparent',
    shadow: 'var(--shadow-md)'
  },
  accent: {
    background: 'var(--ac-orange)',
    color: '#fff',
    border: '1px solid transparent',
    shadow: 'var(--shadow-md)'
  },
  secondary: {
    background: '#fff',
    color: 'var(--ac-navy)',
    border: '1px solid var(--ac-line-strong)',
    shadow: 'none'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--ac-blue)',
    border: '1px solid transparent',
    shadow: 'none'
  },
  /* Neomorfismo — estilo base de producto (Brandbook §34). No border, never pure white. */
  neu: {
    background: 'var(--neu-surface)',
    color: 'var(--ac-navy)',
    border: 'none',
    shadow: 'var(--neu-raised-sm)'
  }
};

/**
 * Actuaria Button — primary action control.
 * Variants follow the brand: navy = primary hierarchy, orange = energy/CTA,
 * secondary = outline, ghost = low-emphasis.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  // Font Awesome class string e.g. "fa-solid fa-download"
  iconRight = false,
  block = false,
  disabled = false,
  loading = false,
  type = 'button',
  onClick,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const [hover, setHover] = React.useState(false);
  const hoverBg = {
    primary: 'var(--ac-navy-700)',
    accent: 'var(--ac-orange-600)',
    secondary: 'var(--ac-sunken)',
    ghost: 'rgba(48,97,170,0.08)',
    neu: 'var(--neu-surface)'
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled || loading,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: block ? 'flex' : 'inline-flex',
      width: block ? '100%' : 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      flexDirection: iconRight ? 'row-reverse' : 'row',
      fontFamily: 'var(--font-heading)',
      fontWeight: 'var(--fw-bold)',
      fontSize: s.fontSize,
      padding: s.padding,
      minHeight: s.height,
      borderRadius: variant === 'neu' ? 'var(--neu-radius-sm)' : 'var(--r-md)',
      border: v.border,
      background: disabled || loading ? 'var(--ac-line)' : hover ? hoverBg : v.background,
      color: disabled || loading ? 'var(--ac-ink-3)' : v.color,
      boxShadow: disabled || loading ? 'none' : v.shadow,
      cursor: disabled || loading ? 'not-allowed' : 'pointer',
      transition: 'background var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
      transform: hover && !disabled && !loading && variant !== 'neu' ? 'translateY(-1px)' : 'none',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), loading ? /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-circle-notch",
    style: {
      animation: 'ac-spin 0.8s linear infinite'
    }
  }) : icon && /*#__PURE__*/React.createElement("i", {
    className: icon
  }), children, /*#__PURE__*/React.createElement("style", null, `@keyframes ac-spin{to{transform:rotate(360deg)}}`));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/data/InsightCard.jsx
try { (() => {
const TONES = {
  positive: { color: "var(--ac-success)", label: "Positivo" },
  attention: { color: "var(--ac-warning)", label: "Atenci\xF3n" },
  alert: { color: "var(--ac-error)", label: "Alerta" }
};
const SIZES = {
  sm: { padding: "14px", gap: "8px", badge: "var(--fs-2xs)", title: "var(--fs-body)", body: "var(--fs-xs)", action: "var(--fs-xs)" },
  md: { padding: "20px", gap: "10px", badge: "var(--fs-xs)", title: "var(--fs-h4)", body: "var(--fs-sm)", action: "var(--fs-sm)" },
  lg: { padding: "28px", gap: "14px", badge: "var(--fs-sm)", title: "var(--fs-h3)", body: "var(--fs-body)", action: "var(--fs-body)" }
};
function InsightCard({ tone = "positive", badge, title, children, actionLabel, onAction, size = "md", style, ...rest }) {
  const t = TONES[tone] || TONES.positive;
  const s = SIZES[size] || SIZES.md;
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      style: {
        background: "var(--surface-card)",
        borderRadius: "var(--r-lg)",
        boxShadow: "var(--shadow-card)",
        borderTop: `4px solid ${t.color}`,
        padding: s.padding,
        display: "flex",
        flexDirection: "column",
        gap: s.gap,
        fontFamily: "var(--font-sans)",
        ...style
      },
      ...rest
    },
    /* @__PURE__ */ React.createElement("span", { style: { alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "6px", fontSize: s.badge, fontWeight: "var(--fw-extra)", color: t.color, textTransform: "uppercase", letterSpacing: "0.04em" } }, /* @__PURE__ */ React.createElement("span", { style: { width: "8px", height: "8px", borderRadius: "50%", background: t.color } }), badge || t.label),
    /* @__PURE__ */ React.createElement("div", { style: { fontSize: s.title, fontWeight: "var(--fw-extra)", color: "var(--ac-navy)", lineHeight: 1.25 } }, title),
    /* @__PURE__ */ React.createElement("div", { style: { fontSize: s.body, color: "var(--ac-ink-2)", lineHeight: 1.55, flex: 1 } }, children),
    actionLabel && /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: onAction,
        style: { alignSelf: "flex-start", marginTop: "4px", display: "inline-flex", alignItems: "center", gap: "8px", background: "none", border: "none", padding: 0, cursor: "pointer", color: "var(--ac-blue)", fontFamily: "var(--font-sans)", fontSize: s.action, fontWeight: "var(--fw-bold)" }
      },
      /* @__PURE__ */ React.createElement("i", { className: "fa-solid fa-arrow-right" }),
      actionLabel
    )
  );
}
Object.assign(__ds_scope, { InsightCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/InsightCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
const TONES = {
  info: { bar: "var(--ac-info)", bg: "var(--ac-info-bg)", icon: "fa-solid fa-circle-info" },
  success: { bar: "var(--ac-success)", bg: "var(--ac-success-bg)", icon: "fa-solid fa-circle-check" },
  warning: { bar: "var(--ac-warning)", bg: "var(--ac-warning-bg)", icon: "fa-solid fa-triangle-exclamation" },
  error: { bar: "var(--ac-error)", bg: "var(--ac-error-bg)", icon: "fa-solid fa-circle-exclamation" }
};
const SIZES = {
  sm: { padding: "8px 12px", gap: "10px", title: "var(--fs-xs)", body: "var(--fs-xs)", icon: "var(--fs-sm)", iconTop: "1px" },
  md: { padding: "14px 16px", gap: "12px", title: "var(--fs-sm)", body: "var(--fs-sm)", icon: "var(--fs-body)", iconTop: "2px" },
  lg: { padding: "20px 24px", gap: "16px", title: "var(--fs-body)", body: "var(--fs-body)", icon: "var(--fs-h4)", iconTop: "2px" }
};
function Alert({ tone = "info", title, children, icon, onClose, size = "md", style, ...rest }) {
  const t = TONES[tone] || TONES.info;
  const s = SIZES[size] || SIZES.md;
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      role: "alert",
      style: {
        display: "flex",
        gap: s.gap,
        alignItems: "flex-start",
        background: t.bg,
        borderLeft: `4px solid ${t.bar}`,
        borderRadius: "var(--r-md)",
        padding: s.padding,
        fontFamily: "var(--font-sans)",
        ...style
      },
      ...rest
    },
    /* @__PURE__ */ React.createElement("i", { className: icon || t.icon, style: { color: t.bar, fontSize: s.icon, marginTop: s.iconTop } }),
    /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, title && /* @__PURE__ */ React.createElement("div", { style: { fontSize: s.title, fontWeight: "var(--fw-extra)", color: "var(--ac-ink)", marginBottom: children ? "3px" : 0 } }, title), children && /* @__PURE__ */ React.createElement("div", { style: { fontSize: s.body, color: "var(--ac-ink-2)", lineHeight: 1.5 } }, children)),
    onClose && /* @__PURE__ */ React.createElement("button", { onClick: onClose, "aria-label": "Cerrar", style: { background: "none", border: "none", color: "var(--ac-ink-3)", cursor: "pointer", fontSize: s.body, padding: "2px" } }, /* @__PURE__ */ React.createElement("i", { className: "fa-solid fa-xmark" }))
  );
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
const SIZES = {
  sm: { padding: "7px 32px 7px 12px", fontSize: "var(--fs-xs)", label: "var(--fs-2xs)", chevron: "10px", right: "12px" },
  md: { padding: "11px 38px 11px 14px", fontSize: "var(--fs-sm)", label: "var(--fs-xs)", chevron: "12px", right: "14px" },
  lg: { padding: "14px 44px 14px 16px", fontSize: "var(--fs-body)", label: "var(--fs-sm)", chevron: "14px", right: "16px" }
};
function Select({ label, hint, options = [], value, onChange, disabled = false, id, size = "md", style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || React.useId();
  const s = SIZES[size] || SIZES.md;
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "6px", fontFamily: "var(--font-sans)", ...style } }, label && /* @__PURE__ */ React.createElement("label", { htmlFor: fid, style: { fontSize: s.label, fontWeight: "var(--fw-extra)", color: "var(--ac-ink-2)" } }, label), /* @__PURE__ */ React.createElement("div", { style: { position: "relative", display: "flex", alignItems: "center" } }, /* @__PURE__ */ React.createElement(
    "select",
    {
      id: fid,
      value,
      onChange,
      disabled,
      onFocus: () => setFocus(true),
      onBlur: () => setFocus(false),
      style: {
        width: "100%",
        appearance: "none",
        WebkitAppearance: "none",
        fontFamily: "var(--font-sans)",
        fontSize: s.fontSize,
        color: "var(--ac-ink)",
        background: disabled ? "var(--ac-sunken)" : "#fff",
        padding: s.padding,
        border: `1px solid ${focus ? "var(--ac-blue)" : "var(--ac-line-strong)"}`,
        borderRadius: "var(--r-md)",
        outline: "none",
        boxShadow: focus ? "var(--shadow-focus)" : "none",
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "border-color var(--dur-fast), box-shadow var(--dur-fast)",
        boxSizing: "border-box"
      },
      ...rest
    },
    options.map((o) => {
      const opt = typeof o === "string" ? { value: o, label: o } : o;
      return /* @__PURE__ */ React.createElement("option", { key: opt.value, value: opt.value }, opt.label);
    })
  ), /* @__PURE__ */ React.createElement("i", { className: "fa-solid fa-chevron-down", style: { position: "absolute", right: s.right, color: "var(--ac-ink-3)", fontSize: s.chevron, pointerEvents: "none" } })), hint && /* @__PURE__ */ React.createElement("span", { style: { fontSize: s.label, color: "var(--ac-ink-3)" } }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
const SIZES = {
  sm: { padding: "7px 12px", withIcon: "7px 12px 7px 34px", fontSize: "var(--fs-xs)", label: "var(--fs-2xs)", iconLeft: "12px" },
  md: { padding: "11px 14px", withIcon: "11px 14px 11px 40px", fontSize: "var(--fs-sm)", label: "var(--fs-xs)", iconLeft: "14px" },
  lg: { padding: "14px 16px", withIcon: "14px 16px 14px 46px", fontSize: "var(--fs-body)", label: "var(--fs-sm)", iconLeft: "16px" }
};
function TextField({
  label,
  hint,
  error,
  icon,
  type = "text",
  value,
  onChange,
  placeholder,
  disabled = false,
  id,
  size = "md",
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || React.useId();
  const s = SIZES[size] || SIZES.md;
  const borderColor = error ? "var(--ac-error)" : focus ? "var(--ac-blue)" : "var(--ac-line-strong)";
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "6px", fontFamily: "var(--font-sans)", ...style } }, label && /* @__PURE__ */ React.createElement("label", { htmlFor: fid, style: { fontSize: s.label, fontWeight: "var(--fw-extra)", color: "var(--ac-ink-2)", letterSpacing: "0.02em" } }, label), /* @__PURE__ */ React.createElement("div", { style: { position: "relative", display: "flex", alignItems: "center" } }, icon && /* @__PURE__ */ React.createElement("i", { className: icon, style: { position: "absolute", left: s.iconLeft, color: "var(--ac-ink-3)", fontSize: s.fontSize, pointerEvents: "none" } }), /* @__PURE__ */ React.createElement(
    "input",
    {
      id: fid,
      type,
      value,
      onChange,
      placeholder,
      disabled,
      onFocus: () => setFocus(true),
      onBlur: () => setFocus(false),
      style: {
        width: "100%",
        fontFamily: "var(--font-sans)",
        fontSize: s.fontSize,
        color: "var(--ac-ink)",
        background: disabled ? "var(--ac-sunken)" : "#fff",
        padding: icon ? s.withIcon : s.padding,
        border: `1px solid ${borderColor}`,
        borderRadius: "var(--r-md)",
        outline: "none",
        boxShadow: focus ? "var(--shadow-focus)" : "none",
        transition: "border-color var(--dur-fast), box-shadow var(--dur-fast)",
        boxSizing: "border-box"
      },
      ...rest
    }
  )), (hint || error) && /* @__PURE__ */ React.createElement("span", { style: { fontSize: s.label, color: error ? "var(--ac-error)" : "var(--ac-ink-3)" } }, error || hint));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/forms/Toggle.jsx
try { (() => {
const SIZES = {
  sm: { w: 36, h: 20, knob: 14, pad: 3, label: "var(--fs-xs)", gap: "8px" },
  md: { w: 44, h: 24, knob: 18, pad: 3, label: "var(--fs-sm)", gap: "10px" },
  lg: { w: 56, h: 30, knob: 24, pad: 3, label: "var(--fs-body)", gap: "12px" }
};
function Toggle({ checked = false, onChange, label, disabled = false, id, size = "md", style, ...rest }) {
  const fid = id || React.useId();
  const s = SIZES[size] || SIZES.md;
  return /* @__PURE__ */ React.createElement("label", { htmlFor: fid, style: { display: "inline-flex", alignItems: "center", gap: s.gap, cursor: disabled ? "not-allowed" : "pointer", fontFamily: "var(--font-sans)", opacity: disabled ? 0.5 : 1, ...style } }, /* @__PURE__ */ React.createElement("span", { style: { position: "relative", width: s.w + "px", height: s.h + "px", flexShrink: 0 } }, /* @__PURE__ */ React.createElement(
    "input",
    {
      id: fid,
      type: "checkbox",
      checked,
      onChange,
      disabled,
      style: { position: "absolute", opacity: 0, width: 0, height: 0 },
      ...rest
    }
  ), /* @__PURE__ */ React.createElement("span", { style: {
    display: "block",
    width: s.w + "px",
    height: s.h + "px",
    borderRadius: "var(--r-full)",
    background: checked ? "var(--ac-success)" : "var(--ac-line-strong)",
    transition: "background var(--dur-normal) var(--ease-out)"
  } }), /* @__PURE__ */ React.createElement("span", { style: {
    position: "absolute",
    top: s.pad + "px",
    left: s.pad + "px",
    width: s.knob + "px",
    height: s.knob + "px",
    borderRadius: "50%",
    background: "#fff",
    boxShadow: "var(--shadow-sm)",
    transform: checked ? `translateX(${s.w - s.knob - s.pad * 2}px)` : "translateX(0)",
    transition: "transform var(--dur-normal) var(--ease-spring)"
  } })), label && /* @__PURE__ */ React.createElement("span", { style: { fontSize: s.label, fontWeight: "var(--fw-semibold)", color: "var(--ac-ink)" } }, label));
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Toggle.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
const SIZES = {
  sm: { padding: "8px 12px", fontSize: "var(--fs-xs)", gap: "6px", count: "var(--fs-2xs)" },
  md: { padding: "11px 16px", fontSize: "var(--fs-sm)", gap: "8px", count: "var(--fs-2xs)" },
  lg: { padding: "14px 22px", fontSize: "var(--fs-body)", gap: "10px", count: "var(--fs-xs)" }
};
function Tabs({ tabs = [], value, defaultValue, onChange, size = "md", style, ...rest }) {
  const [internal, setInternal] = React.useState(defaultValue ?? (tabs[0] && tabs[0].id));
  const active = value !== void 0 ? value : internal;
  const select = (id) => {
    if (value === void 0) setInternal(id);
    onChange && onChange(id);
  };
  const s = SIZES[size] || SIZES.md;
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "4px", borderBottom: "1px solid var(--ac-line)", fontFamily: "var(--font-sans)", overflowX: "auto", ...style }, ...rest }, tabs.map((t) => {
    const on = t.id === active;
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        key: t.id,
        onClick: () => select(t.id),
        style: {
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          gap: s.gap,
          flexShrink: 0,
          whiteSpace: "nowrap",
          padding: s.padding,
          background: "none",
          border: "none",
          cursor: "pointer",
          fontFamily: "var(--font-sans)",
          fontSize: s.fontSize,
          fontWeight: "var(--fw-bold)",
          color: on ? "var(--ac-navy)" : "var(--ac-ink-3)",
          borderBottom: `2px solid ${on ? "var(--ac-blue)" : "transparent"}`,
          marginBottom: "-1px",
          transition: "color var(--dur-fast)"
        }
      },
      t.icon && /* @__PURE__ */ React.createElement("i", { className: t.icon }),
      t.label,
      t.count != null && /* @__PURE__ */ React.createElement("span", { style: { background: on ? "rgba(48,97,170,.12)" : "var(--ac-sunken)", color: on ? "var(--ac-blue)" : "var(--ac-ink-3)", borderRadius: "var(--r-full)", padding: "1px 8px", fontSize: s.count, fontWeight: "var(--fw-extra)" } }, t.count)
    );
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
const SIZES = {
  sm: { padding: 14, head: "10px 14px", icon: 28, title: "var(--fs-body)" },
  md: { padding: 20, head: "16px 20px", icon: 34, title: "var(--fs-h4)" },
  lg: { padding: 28, head: "20px 28px", icon: 44, title: "var(--fs-h3)" }
};
function Card({ title, icon, action, children, padding, size = "md", surface = "flat", style, ...rest }) {
  const neu = surface === "neu";
  const s = SIZES[size] || SIZES.md;
  const pad = padding === void 0 ? s.padding : padding;
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      style: {
        background: neu ? "var(--neu-surface)" : "var(--surface-card)",
        border: neu ? "none" : "1px solid var(--ac-line)",
        borderRadius: neu ? "var(--neu-radius)" : "var(--r-lg)",
        boxShadow: neu ? "var(--neu-raised)" : "var(--shadow-card)",
        overflow: "hidden",
        fontFamily: "var(--font-body)",
        ...style
      },
      ...rest
    },
    (title || icon || action) && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "12px", padding: s.head, borderBottom: neu ? "none" : "1px solid var(--ac-line)" } }, icon && /* @__PURE__ */ React.createElement("span", { style: { width: s.icon + "px", height: s.icon + "px", borderRadius: "var(--r-md)", background: "rgba(48,97,170,.10)", color: "var(--ac-blue)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 } }, /* @__PURE__ */ React.createElement("i", { className: icon })), title && /* @__PURE__ */ React.createElement("div", { style: { flex: 1, fontFamily: "var(--font-heading)", fontSize: s.title, fontWeight: "var(--fw-extra)", color: "var(--ac-navy)" } }, title), action),
    /* @__PURE__ */ React.createElement("div", { style: { padding: typeof pad === "number" ? `${pad}px` : pad } }, children)
  );
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/KpiCard.jsx
try { (() => {
const SIZES = {
  sm: { padding: "14px", value: "26px", title: "var(--fs-xs)", icon: "var(--fs-sm)", unit: "var(--fs-2xs)", trend: "var(--fs-2xs)", row: "var(--fs-xs)" },
  md: { padding: "20px", value: "38px", title: "var(--fs-sm)", icon: "var(--fs-body)", unit: "var(--fs-xs)", trend: "var(--fs-xs)", row: "var(--fs-sm)" },
  lg: { padding: "28px", value: "56px", title: "var(--fs-body)", icon: "var(--fs-h4)", unit: "var(--fs-sm)", trend: "var(--fs-sm)", row: "var(--fs-body)" }
};
function KpiCard({ title, icon, value, unit, trend, trendDir = "up", rows = [], size = "md", style, ...rest }) {
  const s = SIZES[size] || SIZES.md;
  const trendColor = trendDir === "down" ? "var(--ac-error)" : "var(--ac-success)";
  const trendBg = trendDir === "down" ? "var(--ac-error-bg)" : "var(--ac-success-bg)";
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      style: {
        background: "var(--surface-card)",
        border: "1px solid var(--ac-line)",
        borderRadius: "var(--r-lg)",
        boxShadow: "var(--shadow-card)",
        padding: s.padding,
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        fontFamily: "var(--font-sans)",
        ...style
      },
      ...rest
    },
    /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", marginBottom: "6px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: s.title, fontWeight: "var(--fw-bold)", color: "var(--ac-ink-2)" } }, title), icon && /* @__PURE__ */ React.createElement("i", { className: icon, style: { color: "var(--ac-navy)", fontSize: s.icon } })),
    /* @__PURE__ */ React.createElement("div", { style: { fontSize: s.value, fontWeight: "var(--fw-black)", color: "var(--ac-navy)", lineHeight: 1.05, letterSpacing: "-0.02em" } }, value),
    unit && /* @__PURE__ */ React.createElement("div", { style: { fontSize: s.unit, color: "var(--ac-ink-3)", fontWeight: "var(--fw-semibold)" } }, unit),
    trend && /* @__PURE__ */ React.createElement("div", { style: { alignSelf: "flex-start", marginTop: "8px", display: "inline-flex", alignItems: "center", gap: "5px", padding: "3px 9px", borderRadius: "var(--r-full)", background: trendBg, color: trendColor, fontSize: s.trend, fontWeight: "var(--fw-extra)" } }, /* @__PURE__ */ React.createElement("i", { className: `fa-solid fa-arrow-${trendDir}` }), trend),
    rows.length > 0 && /* @__PURE__ */ React.createElement("div", { style: { marginTop: "14px", paddingTop: "12px", borderTop: "1px solid var(--ac-line)", display: "flex", flexDirection: "column", gap: "8px" } }, rows.map((r, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { display: "flex", justifyContent: "space-between", fontSize: s.row } }, /* @__PURE__ */ React.createElement("span", { style: { color: "var(--ac-ink-2)", fontWeight: "var(--fw-semibold)" } }, r.label), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--ac-navy)", fontWeight: "var(--fw-extra)" } }, r.value))))
  );
}
Object.assign(__ds_scope, { KpiCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/KpiCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/actuaria-plus/Dashboard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Actuaria Plus — Dashboard view (Inicio). Uses DS components from the bundle. */
function PlusDashboard() {
  const {
    KpiCard,
    InsightCard,
    Card,
    Badge,
    Button
  } = window.ActuariaDesignSystem_88aa6b;
  const kpis = [{
    title: 'Provisión acumulada',
    icon: 'fa-solid fa-building-columns',
    value: '$9.3M',
    unit: 'USD · Total acumulado',
    trend: '+4% vs 2023',
    trendDir: 'up',
    rows: [{
      label: 'Jubilación Patronal',
      value: '$6.98M'
    }, {
      label: 'Desahucio',
      value: '$2.35M'
    }]
  }, {
    title: 'Remuneración promedio',
    icon: 'fa-solid fa-coins',
    value: '$856',
    unit: 'USD · Promedio total',
    trend: '+2% vs 2023',
    trendDir: 'up',
    rows: [{
      label: 'Hombres',
      value: '$852'
    }, {
      label: 'Mujeres',
      value: '$886'
    }]
  }, {
    title: 'Partícipes activos',
    icon: 'fa-solid fa-users',
    value: '1,297',
    unit: 'Total al cierre',
    trend: '+4% vs 2023',
    trendDir: 'up',
    rows: [{
      label: 'Hombres',
      value: '1,145 · 88%'
    }, {
      label: 'Mujeres',
      value: '152 · 12%'
    }]
  }, {
    title: 'Partícipes jubilados',
    icon: 'fa-solid fa-user-clock',
    value: '8',
    unit: 'Total jubilados',
    trend: '+2 vs 2023',
    trendDir: 'up',
    rows: [{
      label: 'Hombres',
      value: '7 · 88%'
    }, {
      label: 'Mujeres',
      value: '1 · 12%'
    }]
  }];
  const bars = [{
    l: '0–5',
    a: 38,
    b: 62
  }, {
    l: '5–10',
    a: 55,
    b: 80
  }, {
    l: '10–15',
    a: 72,
    b: 58
  }, {
    l: '15–20',
    a: 90,
    b: 40
  }, {
    l: '20–25',
    a: 64,
    b: 26
  }, {
    l: '25+',
    a: 44,
    b: 14
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 36px',
      maxWidth: 1180,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 32
    }
  }, "Hola, Rodrigo"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ac-ink-3)',
      fontSize: 14,
      marginTop: 4
    }
  }, "\xDAltima conexi\xF3n: hoy a las 3:34 pm")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 16,
      color: 'var(--ac-ink-2)',
      fontWeight: 700
    }
  }, "Datos al 31 de diciembre de 2024"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "NIIF \xB7 ISO 9001"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    icon: "fa-solid fa-share-nodes"
  }, "Compartir"), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "sm",
    icon: "fa-solid fa-download"
  }, "Descargar PDF"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 14,
      marginBottom: 22
    }
  }, kpis.map((k, i) => /*#__PURE__*/React.createElement(KpiCard, _extends({
    key: i
  }, k)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 14,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Provisi\xF3n por tiempo de servicio",
    icon: "fa-solid fa-chart-column",
    action: /*#__PURE__*/React.createElement(Badge, {
      tone: "blue"
    }, "USD")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 18,
      height: 180,
      paddingTop: 8
    }
  }, bars.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 4,
      height: 150,
      width: '100%',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 14,
      height: `${b.a}%`,
      background: 'var(--ac-navy)',
      borderRadius: '4px 4px 0 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 14,
      height: `${b.b}%`,
      background: 'var(--ac-blue)',
      borderRadius: '4px 4px 0 0'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--ac-ink-3)',
      fontWeight: 700
    }
  }, b.l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      marginTop: 14,
      fontSize: 12,
      fontWeight: 700,
      color: 'var(--ac-ink-2)'
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 10,
      height: 10,
      borderRadius: 3,
      background: 'var(--ac-navy)',
      marginRight: 6
    }
  }), "Jubilaci\xF3n patronal"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 10,
      height: 10,
      borderRadius: 3,
      background: 'var(--ac-blue)',
      marginRight: 6
    }
  }), "Desahucio"))), /*#__PURE__*/React.createElement(Card, {
    title: "Composici\xF3n demogr\xE1fica",
    icon: "fa-solid fa-chart-pie"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 130,
      height: 130,
      borderRadius: '50%',
      background: 'conic-gradient(var(--ac-navy) 0 88%, var(--ac-orange) 88% 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 78,
      height: 78,
      borderRadius: '50%',
      background: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      fontWeight: 900,
      color: 'var(--ac-navy)'
    }
  }, "1,297"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: 'var(--ac-ink-3)'
    }
  }, "part\xEDcipes"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ac-ink-2)',
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 10,
      height: 10,
      borderRadius: 3,
      background: 'var(--ac-navy)',
      marginRight: 6
    }
  }), "Hombres"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 900,
      color: 'var(--ac-navy)',
      marginLeft: 16
    }
  }, "88%")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ac-ink-2)',
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 10,
      height: 10,
      borderRadius: 3,
      background: 'var(--ac-orange)',
      marginRight: 6
    }
  }), "Mujeres"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 900,
      color: 'var(--ac-navy)',
      marginLeft: 16
    }
  }, "12%")))))), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 16,
      color: 'var(--ac-ink-2)',
      fontWeight: 700,
      marginBottom: 12
    }
  }, "Sem\xE1foro actuarial"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(InsightCard, {
    tone: "positive",
    title: "Provisi\xF3n en tendencia positiva",
    actionLabel: "Ver proyecciones"
  }, "La reserva total creci\xF3 4.2% vs 2023 y cubre jubilaci\xF3n patronal ($6.98M) y desahucio ($2.35M), alineada con las obligaciones proyectadas."), /*#__PURE__*/React.createElement(InsightCard, {
    tone: "attention",
    title: "Concentraci\xF3n en quinquenios tempranos",
    actionLabel: "Simular escenarios"
  }, "El 69% de los part\xEDcipes lleva menos de 15 a\xF1os de servicio, lo que eleva la rotaci\xF3n esperada y altera las reservas proyectadas."), /*#__PURE__*/React.createElement(InsightCard, {
    tone: "alert",
    title: "Brecha demogr\xE1fica de g\xE9nero",
    actionLabel: "Revisar supuestos"
  }, "Solo el 12% de los part\xEDcipes son mujeres (152 de 1,297); una composici\xF3n tan asim\xE9trica puede invalidar las hip\xF3tesis de mortalidad.")));
}
window.PlusDashboard = PlusDashboard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/actuaria-plus/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/actuaria-plus/Header.jsx
try { (() => {
/* Actuaria Plus — Top header (in-app bar). */
function PlusHeader({
  onToggle
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 64,
      flexShrink: 0,
      background: '#fff',
      borderBottom: '1px solid var(--ac-line)',
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '0 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 800,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--ac-ink-3)'
    }
  }, "Beneficios Laborales"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 800,
      color: 'var(--ac-navy)'
    }
  }, "Estudio Actuarial 2024")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    title: "Notificaciones",
    style: ibtn
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-bell"
  })), /*#__PURE__*/React.createElement("button", {
    title: "Ayuda",
    style: ibtn
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-circle-question"
  })), /*#__PURE__*/React.createElement("button", {
    title: "Salir",
    onClick: onToggle,
    style: {
      ...ibtn,
      color: 'var(--ac-ink-2)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-arrow-right-from-bracket"
  }))));
}
const ibtn = {
  width: 38,
  height: 38,
  borderRadius: 'var(--r-md)',
  border: '1px solid var(--ac-line)',
  background: '#fff',
  color: 'var(--ac-navy)',
  cursor: 'pointer',
  fontSize: 14
};
window.PlusHeader = PlusHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/actuaria-plus/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/actuaria-plus/Login.jsx
try { (() => {
/* Actuaria Plus — Login view. Uses DS TextField + Button. */
function PlusLogin({
  onLogin
}) {
  const {
    TextField,
    Button
  } = window.ActuariaDesignSystem_88aa6b;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: 'linear-gradient(160deg,var(--ac-navy) 0%,var(--ac-navy-900) 100%)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 48,
      color: 'var(--text-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagotipo-white.svg",
    alt: "Actuaria",
    style: {
      height: 30,
      width: 'auto',
      alignSelf: 'flex-start'
    }
  }), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 520 360",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      opacity: .6
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M-20 280 C 140 280 160 120 300 120 S 520 240 560 120",
    fill: "none",
    stroke: "#C7CFE0",
    strokeWidth: "2",
    strokeDasharray: "2 11",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "300",
    cy: "120",
    r: "6",
    fill: "#3061AA"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "470",
    cy: "160",
    r: "6",
    fill: "#DF5E2D"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 30,
      lineHeight: 1.15,
      letterSpacing: '.02em'
    }
  }, "Trazamos el camino", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-on-dark-accent)'
    }
  }, "juntos.")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-on-dark-muted)',
      marginTop: 16,
      maxWidth: 360,
      fontSize: 15
    }
  }, "Tu estudio actuarial, en tiempo real. Reservas, part\xEDcipes y proyecciones con la certeza de 40 a\xF1os de experiencia."))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 420,
      flexShrink: 0,
      background: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '48px 52px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 26,
      marginBottom: 6
    }
  }, "Ingresa a tu cuenta"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ac-ink-3)',
      fontSize: 14,
      marginBottom: 28
    }
  }, "Actuaria Plus \xB7 panel de cliente"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(TextField, {
    label: "Correo corporativo",
    type: "email",
    icon: "fa-solid fa-envelope",
    defaultValue: "rodrigo.velez@constructoraandes.ec"
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "Clave",
    type: "password",
    icon: "fa-solid fa-lock",
    defaultValue: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 13,
      fontWeight: 700
    }
  }, "\xBFOlvidaste tu clave?")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    block: true,
    onClick: onLogin
  }, "Ingresar")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 24,
      fontSize: 12,
      color: 'var(--ac-ink-3)',
      textAlign: 'center'
    }
  }, "Protegido bajo norma ISO 9001:2015")));
}
window.PlusLogin = PlusLogin;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/actuaria-plus/Login.jsx", error: String((e && e.message) || e) }); }

// ui_kits/actuaria-plus/Sidebar.jsx
try { (() => {
/* Actuaria Plus — Sidebar nav.  Exports to window for cross-script use. */
function PlusSidebar({
  active = 'inicio',
  onNavigate
}) {
  const nav = [{
    id: 'inicio',
    label: 'Inicio',
    icon: 'fa-solid fa-house'
  }, {
    id: 'estudio',
    label: 'Estudio actuarial',
    icon: 'fa-solid fa-calculator'
  }, {
    id: 'particimes',
    label: 'Partícipes',
    icon: 'fa-solid fa-users'
  }, {
    id: 'simulador',
    label: 'Simulador de beneficios',
    icon: 'fa-solid fa-sliders'
  }, {
    id: 'actas',
    label: 'Actas de jubilación',
    icon: 'fa-solid fa-file-signature'
  }, {
    id: 'reportes',
    label: 'Reportes',
    icon: 'fa-solid fa-file-lines'
  }];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 264,
      flexShrink: 0,
      background: '#fff',
      borderRight: '1px solid var(--ac-line)',
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 20px 12px',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagotipo.svg",
    alt: "Actuaria",
    style: {
      height: 26
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 13,
      color: 'var(--ac-blue)',
      textTransform: 'uppercase',
      letterSpacing: '.06em'
    }
  }, "Plus")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 14px 12px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-magnifying-glass",
    style: {
      position: 'absolute',
      left: 26,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--ac-ink-3)',
      fontSize: 12
    }
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Buscar\u2026",
    style: {
      width: '100%',
      padding: '9px 12px 9px 34px',
      border: '1px solid var(--ac-line)',
      borderRadius: 'var(--r-sm)',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      outline: 'none',
      boxSizing: 'border-box',
      background: 'var(--ac-sunken)'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '4px 12px'
    }
  }, nav.map(n => {
    const on = n.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: n.id,
      onClick: () => onNavigate && onNavigate(n.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        width: '100%',
        textAlign: 'left',
        padding: '10px 12px',
        marginBottom: 2,
        border: 'none',
        cursor: 'pointer',
        borderRadius: 'var(--r-md)',
        fontFamily: 'var(--font-sans)',
        fontSize: 13.5,
        fontWeight: 600,
        background: on ? 'rgba(48,97,170,.10)' : 'transparent',
        color: on ? 'var(--ac-blue)' : 'var(--ac-ink-2)'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: n.icon,
      style: {
        width: 18,
        textAlign: 'center'
      }
    }), n.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      borderTop: '1px solid var(--ac-line)',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      background: 'var(--ac-navy)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 800,
      fontSize: 13
    }
  }, "RV"), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--ac-navy)'
    }
  }, "Rodrigo V\xE9lez"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ac-ink-3)'
    }
  }, "Constructora Andes"))));
}
window.PlusSidebar = PlusSidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/actuaria-plus/Sidebar.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.InsightCard = __ds_scope.InsightCard;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.Toggle = __ds_scope.Toggle;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.KpiCard = __ds_scope.KpiCard;

})();
