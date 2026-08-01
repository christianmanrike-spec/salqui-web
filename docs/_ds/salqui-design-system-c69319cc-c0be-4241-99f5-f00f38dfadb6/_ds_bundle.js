/* @ds-bundle: {"format":4,"namespace":"SalquiDesignSystem_c69319","components":[{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/content/Eyebrow.jsx"},{"name":"FeatureItem","sourcePath":"components/content/FeatureItem.jsx"},{"name":"Logo","sourcePath":"components/content/Logo.jsx"},{"name":"ProductCard","sourcePath":"components/content/ProductCard.jsx"},{"name":"SpecList","sourcePath":"components/content/SpecList.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"}],"sourceHashes":{"components/content/Card.jsx":"b0e95478dec0","components/content/Eyebrow.jsx":"6181d1960cf8","components/content/FeatureItem.jsx":"7798830eedcc","components/content/Logo.jsx":"2e69b1b9a12b","components/content/ProductCard.jsx":"731cb1d490bc","components/content/SpecList.jsx":"bfdf8288ddb1","components/core/Badge.jsx":"e73fc5ac838f","components/core/Button.jsx":"6f6fdc3f441c","components/core/IconButton.jsx":"31ac05ba84d5","components/forms/Checkbox.jsx":"828c085296b7","components/forms/Input.jsx":"2050e5f41568","components/forms/Select.jsx":"186401541005","ui_kits/website/Chrome.jsx":"62984b8287d7","ui_kits/website/Contact.jsx":"3d0030c0e6e1","ui_kits/website/Home.jsx":"9b81316d6190","ui_kits/website/Products.jsx":"c365b66ceac5","ui_kits/website/Why.jsx":"19097460c9f1"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SalquiDesignSystem_c69319 = window.SalquiDesignSystem_c69319 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Salqui Card — the base surface. White, hairline border, near-square,
 * clinical soft shadow. Use for panels, product tiles, form containers.
 */
function Card({
  children,
  interactive = false,
  padding = "28px",
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: "var(--white)",
      border: "1px solid " + (hover ? "var(--border-strong)" : "var(--border)"),
      borderRadius: "var(--radius-lg)",
      boxShadow: hover ? "var(--shadow-md)" : "var(--shadow-sm)",
      padding,
      transition: "box-shadow var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)",
      transform: hover ? "translateY(-2px)" : "none",
      cursor: interactive ? "pointer" : "default",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Salqui Eyebrow — the signature tracked-caps label used above headings
 * and as the "PRECISIÓN QUE SE VE" tagline treatment.
 */
function Eyebrow({
  children,
  tone = "brand",
  as = "div",
  style = {},
  ...rest
}) {
  const Tag = as;
  const color = tone === "muted" ? "var(--text-muted)" : tone === "navy" ? "var(--salqui-navy)" : tone === "onDark" ? "var(--text-oninverse)" : "var(--brand)";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      fontFamily: "var(--font-sans)",
      fontSize: "12px",
      fontWeight: 600,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/content/FeatureItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Salqui FeatureItem — icon + title + description block used for the
 * technical differentiators (asférico, baja reflexión, mayor nitidez).
 * `icon` may be a brand recurso PNG src (string) or a node.
 */
function FeatureItem({
  icon,
  title,
  children,
  layout = "vertical",
  style = {},
  ...rest
}) {
  const iconNode = typeof icon === "string" ? /*#__PURE__*/React.createElement("img", {
    src: icon,
    alt: "",
    style: {
      width: layout === "row" ? "40px" : "52px",
      height: layout === "row" ? "40px" : "52px",
      objectFit: "contain"
    }
  }) : icon;
  const isRow = layout === "row";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: isRow ? "row" : "column",
      alignItems: isRow ? "flex-start" : "flex-start",
      gap: isRow ? "16px" : "18px",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "none",
      width: isRow ? "56px" : "64px",
      height: isRow ? "56px" : "64px",
      borderRadius: "var(--radius-md)",
      border: "1.5px solid var(--border-line)",
      background: "var(--blueprint-tint)"
    }
  }, iconNode), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "17px",
      fontWeight: 700,
      color: "var(--salqui-navy)",
      letterSpacing: "-0.01em",
      margin: "0 0 6px"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "14px",
      lineHeight: 1.55,
      color: "var(--text-body)",
      margin: 0,
      textWrap: "pretty"
    }
  }, children)));
}
Object.assign(__ds_scope, { FeatureItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FeatureItem.jsx", error: String((e && e.message) || e) }); }

// components/content/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Salqui Logo — renders a brand lockup from the packaged PNG assets.
 * Assets must be copied into the consuming project; point `assetBase`
 * at their folder (default "assets/"). Never redraw the mark.
 */
function Logo({
  variant = "horizontal",
  color = "color",
  negative = false,
  height,
  assetBase = "assets/",
  alt = "Salqui",
  style = {},
  ...rest
}) {
  const kind = variant === "symbol" ? "symbol" : "logo-" + variant;
  const scheme = color === "mono" ? "mono" : "color";
  const neg = negative ? "-negative" : "";
  const file = variant === "symbol" ? `symbol-${scheme}${neg}.png` : `logo-${variant}-${scheme}${neg}.png`;
  const defaultH = variant === "symbol" ? 40 : variant === "vertical" ? 96 : 32;
  return /*#__PURE__*/React.createElement("img", _extends({
    src: assetBase.replace(/\/?$/, "/") + file,
    alt: alt,
    style: {
      height: (height || defaultH) + "px",
      width: "auto",
      display: "block",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Logo.jsx", error: String((e && e.message) || e) }); }

// components/content/SpecList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Salqui SpecList — technical data table. Mono values, hairline rows.
 * The clinical detail treatment for product ficha técnica.
 */
function SpecList({
  items = [],
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("dl", _extends({
    style: {
      margin: 0,
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: "16px",
      padding: "13px 0",
      borderBottom: i === items.length - 1 ? "none" : "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "13px",
      fontWeight: 500,
      color: "var(--text-muted)",
      letterSpacing: "0.01em"
    }
  }, it.label), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      fontFamily: "var(--font-mono)",
      fontSize: "13px",
      fontWeight: 500,
      color: "var(--salqui-navy)",
      textAlign: "right"
    }
  }, it.value))));
}
Object.assign(__ds_scope, { SpecList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SpecList.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Salqui Badge — small status / category marker. Restrained, clinical.
 */
function Badge({
  children,
  tone = "brand",
  variant = "soft",
  style = {},
  ...rest
}) {
  const tones = {
    brand: {
      soft: ["var(--blueprint-tint)", "var(--brand-active)"],
      solid: ["var(--brand)", "#fff"],
      outline: ["transparent", "var(--brand)"]
    },
    neutral: {
      soft: ["var(--neutral-100)", "var(--neutral-700)"],
      solid: ["var(--salqui-navy)", "#fff"],
      outline: ["transparent", "var(--neutral-600)"]
    },
    success: {
      soft: ["#e4f4ec", "var(--success)"],
      solid: ["var(--success)", "#fff"],
      outline: ["transparent", "var(--success)"]
    }
  };
  const [bg, fg] = tones[tone][variant];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      padding: "3px 10px",
      fontFamily: "var(--font-sans)",
      fontSize: "12px",
      fontWeight: 600,
      letterSpacing: "0.02em",
      lineHeight: 1.4,
      borderRadius: "var(--radius-sm)",
      background: bg,
      color: fg,
      border: variant === "outline" ? "1.5px solid currentColor" : "1.5px solid transparent",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/ProductCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Salqui ProductCard — lens line tile: clinical product image on a neutral
 * field, name, short descriptor and an optional technical badge.
 */
function ProductCard({
  image,
  name,
  descriptor,
  badge,
  footer,
  onClick,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    interactive: !!onClick,
    padding: "0",
    onClick: onClick,
    style: {
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "4 / 3",
      background: "var(--neutral-50)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderBottom: "1px solid var(--border)"
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "12px",
      color: "var(--neutral-400)"
    }
  }, "imagen de producto"), badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "14px",
      left: "14px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "brand",
    variant: "solid"
  }, badge))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 22px",
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "19px",
      fontWeight: 700,
      color: "var(--salqui-navy)",
      letterSpacing: "-0.015em",
      margin: 0
    }
  }, name), descriptor && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "14px",
      color: "var(--text-muted)",
      margin: 0,
      lineHeight: 1.5,
      textWrap: "pretty"
    }
  }, descriptor), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: "14px"
    }
  }, footer)));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Salqui Button — the primary call-to-action primitive.
 * Sober, near-square, generous horizontal padding. No gradients.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  iconLeft = null,
  iconRight = null,
  disabled = false,
  type = "button",
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "8px 16px",
      fontSize: "13px",
      height: "36px"
    },
    md: {
      padding: "11px 22px",
      fontSize: "14px",
      height: "44px"
    },
    lg: {
      padding: "15px 30px",
      fontSize: "16px",
      height: "54px"
    }
  };
  const variants = {
    primary: {
      background: "var(--brand)",
      color: "var(--on-brand)",
      border: "1.5px solid var(--brand)"
    },
    secondary: {
      background: "var(--white)",
      color: "var(--salqui-navy)",
      border: "1.5px solid var(--border-strong)"
    },
    ghost: {
      background: "transparent",
      color: "var(--brand)",
      border: "1.5px solid transparent"
    },
    inverse: {
      background: "var(--white)",
      color: "var(--salqui-navy)",
      border: "1.5px solid var(--white)"
    }
  };
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const hoverStyle = !disabled && hover ? {
    primary: {
      background: "var(--brand-hover)",
      borderColor: "var(--brand-hover)"
    },
    secondary: {
      borderColor: "var(--salqui-navy)",
      color: "var(--salqui-navy)"
    },
    ghost: {
      background: "var(--blueprint-tint)"
    },
    inverse: {
      background: "var(--neutral-100)"
    }
  }[variant] : {};
  const activeStyle = !disabled && active && variant === "primary" ? {
    background: "var(--brand-active)",
    borderColor: "var(--brand-active)"
  } : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    onClick: onClick,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "9px",
      width: fullWidth ? "100%" : "auto",
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      letterSpacing: "0.01em",
      borderRadius: "var(--radius-sm)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transition: "all var(--dur-fast) var(--ease-standard)",
      whiteSpace: "nowrap",
      ...sizes[size],
      ...variants[variant],
      ...hoverStyle,
      ...activeStyle,
      ...style
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex"
    }
  }, iconLeft), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex"
    }
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Salqui IconButton — square, minimal action for toolbars & inline controls.
 */
function IconButton({
  children,
  variant = "ghost",
  size = "md",
  disabled = false,
  ariaLabel,
  onClick,
  style = {},
  ...rest
}) {
  const dims = {
    sm: 34,
    md: 42,
    lg: 50
  }[size];
  const [hover, setHover] = React.useState(false);
  const variants = {
    ghost: {
      background: "transparent",
      color: "var(--salqui-navy)",
      border: "1.5px solid transparent"
    },
    outline: {
      background: "var(--white)",
      color: "var(--salqui-navy)",
      border: "1.5px solid var(--border-strong)"
    },
    solid: {
      background: "var(--brand)",
      color: "#fff",
      border: "1.5px solid var(--brand)"
    }
  };
  const hoverStyle = !disabled && hover ? {
    ghost: {
      background: "var(--blueprint-tint)"
    },
    outline: {
      borderColor: "var(--salqui-navy)"
    },
    solid: {
      background: "var(--brand-hover)",
      borderColor: "var(--brand-hover)"
    }
  }[variant] : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": ariaLabel,
    onClick: onClick,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: dims + "px",
      height: dims + "px",
      borderRadius: "var(--radius-sm)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transition: "all var(--dur-fast) var(--ease-standard)",
      ...variants[variant],
      ...hoverStyle,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Salqui Checkbox — square, precise, blue when checked.
 */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const cbId = id || rest.name || undefined;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cbId,
    style: {
      display: "inline-flex",
      alignItems: "flex-start",
      gap: "10px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontFamily: "var(--font-sans)",
      fontSize: "14px",
      color: "var(--text-body)",
      lineHeight: 1.4,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      flex: "none",
      width: "20px",
      height: "20px",
      marginTop: "1px"
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: cbId,
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: "100%",
      height: "100%",
      margin: 0,
      cursor: "inherit"
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "20px",
      height: "20px",
      borderRadius: "var(--radius-xs)",
      border: "1.5px solid " + (checked ?? defaultChecked ? "var(--brand)" : "var(--border-strong)"),
      background: checked ?? defaultChecked ? "var(--brand)" : "var(--white)",
      transition: "all var(--dur-fast) var(--ease-standard)"
    }
  }, (checked ?? defaultChecked) && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12l5 5L20 6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Salqui Input — clean single-line field. Underline-free box, precise border,
 * blue focus ring. Pair with a <label> or the Field wrapper.
 */
function Input({
  label,
  hint,
  error,
  id,
  type = "text",
  disabled = false,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || rest.name || undefined;
  const borderColor = error ? "var(--danger)" : focus ? "var(--brand)" : "var(--border-strong)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "7px",
      width: "100%"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "13px",
      fontWeight: 600,
      color: "var(--salqui-navy)",
      letterSpacing: "0.01em"
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "15px",
      color: "var(--text-strong)",
      background: disabled ? "var(--neutral-100)" : "var(--white)",
      height: "46px",
      padding: "0 14px",
      border: "1.5px solid " + borderColor,
      borderRadius: "var(--radius-sm)",
      outline: "none",
      boxShadow: focus && !error ? "0 0 0 3px var(--focus-ring)" : "none",
      transition: "border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)",
      ...style
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "12px",
      color: error ? "var(--danger)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Salqui Select — native select styled to match Input, with chevron.
 */
function Select({
  label,
  hint,
  id,
  options = [],
  disabled = false,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const selId = id || rest.name || undefined;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "7px",
      width: "100%"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "13px",
      fontWeight: 600,
      color: "var(--salqui-navy)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: "none",
      WebkitAppearance: "none",
      fontFamily: "var(--font-sans)",
      fontSize: "15px",
      color: "var(--text-strong)",
      background: disabled ? "var(--neutral-100)" : "var(--white)",
      width: "100%",
      height: "46px",
      padding: "0 40px 0 14px",
      border: "1.5px solid " + (focus ? "var(--brand)" : "var(--border-strong)"),
      borderRadius: "var(--radius-sm)",
      outline: "none",
      boxShadow: focus ? "0 0 0 3px var(--focus-ring)" : "none",
      transition: "border-color var(--dur-fast), box-shadow var(--dur-fast)",
      cursor: disabled ? "not-allowed" : "pointer",
      ...style
    }
  }, rest), options.map(o => {
    const val = typeof o === "string" ? o : o.value;
    const lbl = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lbl);
  })), /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--neutral-500)",
    strokeWidth: "2.2",
    style: {
      position: "absolute",
      right: "14px",
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "12px",
      color: "var(--text-muted)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
// Shared chrome: top navigation + footer + WhatsApp float for the Salqui B2B site.
const {
  Button,
  Logo,
  Eyebrow
} = window.SalquiDesignSystem_c69319;
function TopNav({
  current,
  onNav
}) {
  const [scrolled, setScrolled] = React.useState(false);
  const links = [{
    id: "home",
    label: "Inicio"
  }, {
    id: "products",
    label: "Productos"
  }, {
    id: "why",
    label: "Por qué Salqui"
  }, {
    id: "contact",
    label: "Contacto"
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "rgba(255,255,255,0.86)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 40px",
      height: "76px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav("home");
    },
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "horizontal",
    height: 26,
    assetBase: "../../assets/"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "36px"
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav(l.id);
    },
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "14px",
      fontWeight: 600,
      letterSpacing: "0.01em",
      color: current === l.id ? "var(--brand)" : "var(--salqui-navy)",
      textDecoration: "none"
    }
  }, l.label)), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => onNav("contact")
  }, "Ser distribuidor"))));
}
function SiteFooter({
  onNav
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--salqui-navy)",
      color: "var(--text-oninverse)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "72px 40px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.6fr 1fr 1fr 1fr",
      gap: "40px",
      paddingBottom: "48px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    variant: "horizontal",
    height: 26,
    color: "color",
    negative: true,
    assetBase: "../../assets/"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "14px",
      lineHeight: 1.6,
      color: "var(--text-oninverse)",
      maxWidth: "280px",
      marginTop: "18px",
      opacity: 0.8
    }
  }, "Tecnolog\xEDa \xF3ptica avanzada, accesible y rentable para el canal. Precisi\xF3n que se ve.")), [{
    h: "Producto",
    items: ["Líneas de lente", "Tratamientos", "Ficha técnica", "Catálogo PDF"]
  }, {
    h: "Marca",
    items: ["Por qué Salqui", "Garantía", "Calidad", "Grabado láser"]
  }, {
    h: "Contacto",
    items: ["Ser distribuidor", "WhatsApp", "Solicitar muestra", "Asesor comercial"]
  }].map(col => /*#__PURE__*/React.createElement("div", {
    key: col.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "12px",
      fontWeight: 600,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "#fff",
      marginBottom: "16px"
    }
  }, col.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: "11px"
    }
  }, col.items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav && onNav("contact");
    },
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "14px",
      color: "var(--text-oninverse)",
      opacity: 0.78,
      textDecoration: "none"
    }
  }, it))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid rgba(255,255,255,0.12)",
      paddingTop: "26px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "12px",
      opacity: 0.6
    }
  }, "\xA9 2026 Salqui \xB7 Lentes oft\xE1lmicos"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "12px",
      fontWeight: 600,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--halo)"
    }
  }, "Precisi\xF3n que se ve"))));
}
function WhatsAppFloat() {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": "WhatsApp",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "fixed",
      right: "28px",
      bottom: "28px",
      zIndex: 60,
      width: "56px",
      height: "56px",
      borderRadius: "50%",
      background: hover ? "var(--brand-hover)" : "var(--brand)",
      border: "none",
      cursor: "pointer",
      boxShadow: "var(--shadow-lg)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all var(--dur-fast) var(--ease-standard)",
      transform: hover ? "translateY(-2px)" : "none"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "28",
    height: "28",
    viewBox: "0 0 24 24",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.9-4.44 9.9-9.9S17.5 2 12.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 01-1.26-4.39c0-4.54 3.7-8.23 8.24-8.23 4.54 0 8.23 3.69 8.23 8.23 0 4.54-3.69 8.24-8.23 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.16.25-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.42.06-.64.31-.22.25-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.65.58.25 1.02.4 1.37.51.58.18 1.1.16 1.52.1.46-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z"
  })));
}
window.SalquiSiteChrome = {
  TopNav,
  SiteFooter,
  WhatsAppFloat
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
// Salqui B2B — Contact / distributor form.
const {
  Eyebrow,
  Button,
  Input,
  Select,
  Checkbox,
  Card
} = window.SalquiDesignSystem_c69319;
function Contact() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--neutral-50)",
      minHeight: "70vh"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1080px",
      margin: "0 auto",
      padding: "72px 40px 96px",
      display: "grid",
      gridTemplateColumns: "1fr 1.1fr",
      gap: "64px",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Contacto comercial"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "46px",
      letterSpacing: "-0.03em",
      color: "var(--salqui-navy)",
      margin: "16px 0 0",
      lineHeight: 1.03
    }
  }, "Hablemos de tu portafolio"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "17px",
      lineHeight: 1.6,
      color: "var(--text-body)",
      marginTop: "20px",
      maxWidth: "380px"
    }
  }, "Cu\xE9ntanos sobre tu \xF3ptica y un asesor te contactar\xE1 con precios de canal, cat\xE1logo y muestras."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "40px",
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    }
  }, [{
    h: "WhatsApp Business",
    v: "Respuesta el mismo día"
  }, {
    h: "Catálogo técnico",
    v: "PDF para tu equipo de ventas"
  }, {
    h: "Muestra de producto",
    v: "Prueba antes de decidir"
  }].map(it => /*#__PURE__*/React.createElement("div", {
    key: it.h,
    style: {
      display: "flex",
      gap: "14px",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      background: "var(--brand)",
      marginTop: "7px",
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "15px",
      fontWeight: 600,
      color: "var(--salqui-navy)"
    }
  }, it.h), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "14px",
      color: "var(--text-muted)"
    }
  }, it.v)))))), /*#__PURE__*/React.createElement(Card, {
    padding: "36px"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "40px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "56px",
      height: "56px",
      borderRadius: "50%",
      background: "var(--blueprint-tint)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 20px"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "28",
    height: "28",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--brand)",
    strokeWidth: "2.4"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12l5 5L20 6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "24px",
      color: "var(--salqui-navy)",
      margin: "0 0 10px"
    }
  }, "Solicitud enviada"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "15px",
      color: "var(--text-body)",
      margin: "0 0 24px"
    }
  }, "Un asesor de Salqui te contactar\xE1 muy pronto."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setSent(false)
  }, "Enviar otra")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "18px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "18px"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nombre",
    name: "nombre",
    placeholder: "Tu nombre",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\xD3ptica",
    name: "optica",
    placeholder: "Nombre de la \xF3ptica",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "18px"
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Ciudad",
    name: "ciudad",
    options: ["Bogotá", "Medellín", "Cali", "Barranquilla", "Otra"]
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Tel\xE9fono",
    name: "tel",
    type: "tel",
    placeholder: "+57",
    required: true
  })), /*#__PURE__*/React.createElement(Select, {
    label: "Inter\xE9s",
    name: "interes",
    options: [{
      value: "dist",
      label: "Ser distribuidor"
    }, {
      value: "cat",
      label: "Solicitar catálogo"
    }, {
      value: "muestra",
      label: "Solicitar muestra"
    }, {
      value: "asesor",
      label: "Hablar con un asesor"
    }]
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Acepto que Salqui me contacte con informaci\xF3n comercial.",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg",
    fullWidth: true
  }, "Enviar solicitud")))));
}
window.SalquiContact = Contact;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
// Salqui B2B — Home screen.
const {
  Button,
  Eyebrow,
  FeatureItem,
  Badge,
  ProductCard
} = window.SalquiDesignSystem_c69319;
function Home({
  onNav
}) {
  const features = [{
    icon: "../../assets/icon-aspheric.png",
    title: "Diseño asférico",
    body: "Mayor campo visual y menor distorsión periférica. Lentes más delgados, planos y livianos."
  }, {
    icon: "../../assets/icon-antireflective.png",
    title: "Baja reflexión",
    body: "Menor deslumbramiento y mayor nitidez. El lente desaparece visualmente."
  }, {
    icon: "../../assets/icon-focus-eye.png",
    title: "Mayor nitidez",
    body: "Reducción de fatiga en uso digital prolongado y mejor conducción nocturna."
  }, {
    icon: "../../assets/icon-target.png",
    title: "Calidad 9/10",
    body: "Tecnología validada, equivalente a los referentes del mercado, mejor acceso."
  }];
  const products = [{
    name: "Salqui Clarity 1.60",
    descriptor: "Asférico · AR baja reflexión",
    badge: "Premium"
  }, {
    name: "Salqui Drive 1.67",
    descriptor: "Antirreflejo nocturno · alto índice",
    badge: "Nuevo"
  }, {
    name: "Salqui Digital 1.56",
    descriptor: "Uso digital · filtro luz azul",
    badge: null
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      background: "var(--white)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 40px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      alignItems: "center",
      minHeight: "620px",
      gap: "40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "80px 0"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Precisi\xF3n que se ve"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "76px",
      lineHeight: 0.98,
      letterSpacing: "-0.035em",
      margin: "22px 0 0",
      color: "var(--salqui-navy)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand)"
    }
  }, "Claridad"), /*#__PURE__*/React.createElement("br", null), "dise\xF1ada"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "19px",
      lineHeight: 1.55,
      color: "var(--text-body)",
      maxWidth: "440px",
      margin: "28px 0 0"
    }
  }, "Tecnolog\xEDa \xF3ptica avanzada, accesible y rentable para tu \xF3ptica. Calidad premium sin sacrificar el margen."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "14px",
      marginTop: "38px"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => onNav("contact")
  }, "Quiero ser distribuidor"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => onNav("products")
  }, "Ver cat\xE1logo"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/keyvisual.jpg",
    alt: "Lente Salqui",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "right center"
    }
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--neutral-50)",
      borderTop: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "88px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "620px",
      marginBottom: "56px"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Diferencial t\xE9cnico"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "40px",
      letterSpacing: "-0.02em",
      color: "var(--salqui-navy)",
      margin: "16px 0 0"
    }
  }, "Ingenier\xEDa \xF3ptica, no promesas")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "40px"
    }
  }, features.map(f => /*#__PURE__*/React.createElement(FeatureItem, {
    key: f.title,
    icon: f.icon,
    title: f.title
  }, f.body))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--white)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "88px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: "44px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Portafolio"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "40px",
      letterSpacing: "-0.02em",
      color: "var(--salqui-navy)",
      margin: "16px 0 0"
    }
  }, "L\xEDneas de lente")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => onNav("products")
  }, "Ver todo el cat\xE1logo \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "28px"
    }
  }, products.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.name,
    image: "../../assets/keyvisual.jpg",
    name: p.name,
    descriptor: p.descriptor,
    badge: p.badge,
    onClick: () => onNav("products"),
    footer: /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "13px",
        color: "var(--brand)",
        fontWeight: 500
      }
    }, "Ver ficha t\xE9cnica \u2192")
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--salqui-navy)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "80px 40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "40px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "onDark"
  }, "La calidad se nota antes de usarla"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "44px",
      letterSpacing: "-0.02em",
      color: "#fff",
      margin: "16px 0 0",
      maxWidth: "620px"
    }
  }, "Ofrece calidad alta que tu cliente s\xED puede pagar")), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "inverse",
    onClick: () => onNav("contact")
  }, "Hablar con un asesor"))));
}
window.SalquiHome = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Products.jsx
try { (() => {
// Salqui B2B — Products catalog + ficha técnica.
const {
  Eyebrow,
  Badge,
  Button,
  SpecList,
  ProductCard,
  Card
} = window.SalquiDesignSystem_c69319;
function Products({
  onNav
}) {
  const lines = [{
    name: "Salqui Clarity 1.60",
    descriptor: "Uso general premium",
    badge: "Premium",
    specs: [{
      label: "Material",
      value: "1.60 MR-8"
    }, {
      label: "Diseño",
      value: "Asférico"
    }, {
      label: "Tratamiento",
      value: "AR baja reflexión"
    }, {
      label: "Índice",
      value: "1.60"
    }]
  }, {
    name: "Salqui Drive 1.67",
    descriptor: "Conducción nocturna",
    badge: "Nuevo",
    specs: [{
      label: "Material",
      value: "1.67 alto índice"
    }, {
      label: "Diseño",
      value: "Asférico"
    }, {
      label: "Tratamiento",
      value: "AR nocturno"
    }, {
      label: "Índice",
      value: "1.67"
    }]
  }, {
    name: "Salqui Digital 1.56",
    descriptor: "Pantallas y luz azul",
    badge: null,
    specs: [{
      label: "Material",
      value: "1.56"
    }, {
      label: "Diseño",
      value: "Asférico"
    }, {
      label: "Tratamiento",
      value: "Filtro luz azul"
    }, {
      label: "Índice",
      value: "1.56"
    }]
  }];
  const [active, setActive] = React.useState(0);
  const filters = ["Todos", "Premium", "Alto índice", "Digital"];
  const [filter, setFilter] = React.useState("Todos");
  const p = lines[active];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--white)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--neutral-50)",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "64px 40px 56px"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Cat\xE1logo t\xE9cnico"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "52px",
      letterSpacing: "-0.03em",
      color: "var(--salqui-navy)",
      margin: "16px 0 0"
    }
  }, "Portafolio de lentes"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "17px",
      color: "var(--text-body)",
      maxWidth: "520px",
      marginTop: "16px"
    }
  }, "Fichas t\xE9cnicas por l\xEDnea. Descarga el cat\xE1logo completo para tu equipo de ventas."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "10px",
      marginTop: "28px"
    }
  }, filters.map(f => /*#__PURE__*/React.createElement("button", {
    key: f,
    onClick: () => setFilter(f),
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "13px",
      fontWeight: 600,
      padding: "8px 16px",
      borderRadius: "var(--radius-sm)",
      cursor: "pointer",
      border: "1.5px solid " + (filter === f ? "var(--brand)" : "var(--border-strong)"),
      background: filter === f ? "var(--brand)" : "var(--white)",
      color: filter === f ? "#fff" : "var(--salqui-navy)",
      transition: "all var(--dur-fast) var(--ease-standard)"
    }
  }, f))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "56px 40px 88px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "48px",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: "18px"
    }
  }, lines.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: l.name,
    onClick: () => setActive(i),
    style: {
      display: "flex",
      gap: "18px",
      padding: "16px",
      cursor: "pointer",
      border: "1.5px solid " + (active === i ? "var(--brand)" : "var(--border)"),
      borderRadius: "var(--radius-lg)",
      background: active === i ? "var(--blueprint-tint)" : "var(--white)",
      transition: "all var(--dur-base) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "96px",
      height: "96px",
      flex: "none",
      borderRadius: "var(--radius-md)",
      overflow: "hidden",
      background: "var(--neutral-100)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/keyvisual.jpg",
    alt: l.name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "19px",
      fontWeight: 700,
      color: "var(--salqui-navy)",
      margin: 0,
      letterSpacing: "-0.01em"
    }
  }, l.name), l.badge && /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, l.badge)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "14px",
      color: "var(--text-muted)",
      marginTop: "4px"
    }
  }, l.descriptor))))), /*#__PURE__*/React.createElement(Card, {
    padding: "0",
    style: {
      position: "sticky",
      top: "100px",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "16 / 10",
      background: "var(--neutral-50)",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/keyvisual.jpg",
    alt: p.name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "28px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "26px",
      fontWeight: 700,
      color: "var(--salqui-navy)",
      margin: 0,
      letterSpacing: "-0.02em"
    }
  }, p.name), p.badge && /*#__PURE__*/React.createElement(Badge, {
    tone: "brand",
    variant: "solid"
  }, p.badge)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "15px",
      color: "var(--text-body)",
      margin: "10px 0 22px"
    }
  }, p.descriptor), /*#__PURE__*/React.createElement(SpecList, {
    items: p.specs
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "12px",
      marginTop: "26px"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => onNav("contact")
  }, "Solicitar muestra"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Descargar PDF"))))));
}
window.SalquiProducts = Products;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Products.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Why.jsx
try { (() => {
// Salqui B2B — "Por qué Salqui" value / trust screen.
const {
  Eyebrow,
  Button,
  FeatureItem,
  Card
} = window.SalquiDesignSystem_c69319;
function Why({
  onNav
}) {
  const rows = [{
    k: "Calidad",
    salqui: "9/10 vs. referentes",
    other: "Alta, pero inaccesible"
  }, {
    k: "Precio para el canal",
    salqui: "Estructuralmente mejor",
    other: "Premium cerrado"
  }, {
    k: "Margen para la óptica",
    salqui: "Real y sostenible",
    other: "Comprimido"
  }, {
    k: "Disponibilidad",
    salqui: "Ágil y constante",
    other: "Variable"
  }, {
    k: "Estética del material",
    salqui: "Premium silenciosa",
    other: "Genérica"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--white)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "72px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "680px"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Por qu\xE9 Salqui"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "52px",
      letterSpacing: "-0.03em",
      color: "var(--salqui-navy)",
      margin: "16px 0 0",
      lineHeight: 1.02
    }
  }, "Misma tecnolog\xEDa.", /*#__PURE__*/React.createElement("br", null), "Mejor acceso."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "18px",
      lineHeight: 1.6,
      color: "var(--text-body)",
      marginTop: "22px"
    }
  }, "No competimos desde la innovaci\xF3n radical, sino desde la optimizaci\xF3n inteligente: adoptamos tecnolog\xEDa \xF3ptica validada por la industria y la hacemos accesible y rentable para tu \xF3ptica.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "64px",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr",
      background: "var(--neutral-50)",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 24px",
      fontFamily: "var(--font-mono)",
      fontSize: "12px",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, "Criterio"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 24px",
      fontFamily: "var(--font-display)",
      fontSize: "15px",
      fontWeight: 700,
      color: "var(--brand)"
    }
  }, "Salqui"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 24px",
      fontFamily: "var(--font-sans)",
      fontSize: "14px",
      fontWeight: 600,
      color: "var(--text-muted)"
    }
  }, "Marca premium tradicional")), rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r.k,
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr",
      borderBottom: i === rows.length - 1 ? "none" : "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 24px",
      fontFamily: "var(--font-sans)",
      fontSize: "15px",
      fontWeight: 600,
      color: "var(--salqui-navy)"
    }
  }, r.k), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 24px",
      fontFamily: "var(--font-sans)",
      fontSize: "15px",
      color: "var(--salqui-navy)",
      background: "var(--blueprint-tint)"
    }
  }, r.salqui), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 24px",
      fontFamily: "var(--font-sans)",
      fontSize: "15px",
      color: "var(--text-muted)"
    }
  }, r.other)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "64px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "40px",
      alignItems: "center",
      background: "var(--salqui-navy)",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "56px 48px"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "onDark"
  }, "Sello de autenticidad"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "34px",
      letterSpacing: "-0.02em",
      color: "#fff",
      margin: "16px 0 0"
    }
  }, "Grabado l\xE1ser en cada lente"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "16px",
      lineHeight: 1.6,
      color: "var(--text-oninverse)",
      marginTop: "16px",
      opacity: 0.85
    }
  }, "El s\xEDmbolo Salqui se graba de forma extremadamente fina sobre el lente f\xEDsico. Verifica que el lente es genuino: precisi\xF3n que se ve, incluso a simple vista."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "32px"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    onClick: () => onNav("contact")
  }, "Solicitar informaci\xF3n"))), /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: "stretch",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "48px",
      background: "radial-gradient(circle at 50% 50%, rgba(47,77,255,0.25), transparent 70%)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/symbol-color-negative.png",
    alt: "S\xEDmbolo Salqui",
    style: {
      width: "180px",
      filter: "drop-shadow(0 0 40px rgba(127,160,255,0.5))"
    }
  })))));
}
window.SalquiWhy = Why;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Why.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.FeatureItem = __ds_scope.FeatureItem;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.SpecList = __ds_scope.SpecList;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

})();
