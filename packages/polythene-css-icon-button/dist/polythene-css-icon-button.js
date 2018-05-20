(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-theme'), require('polythene-core-css'), require('polythene-css-button')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-theme', 'polythene-core-css', 'polythene-css-button'], factory) :
  (factory((global.polythene = {}),global['polythene-theme'],global['polythene-core-css'],global['polythene-css-button']));
}(this, (function (exports,polytheneTheme,polytheneCoreCss,polytheneCssButton) { 'use strict';

  var rgba = function rgba(colorStr) {
    var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return "rgba(" + colorStr + ", " + opacity + ")";
  };

  var vars = {
    general_styles: true,

    animation_duration: polytheneTheme.vars.animation_duration,
    label_font_size: 16,
    label_font_weight: 400,
    label_line_height: 20,
    label_padding_after: 0,
    label_padding_before: polytheneTheme.vars.grid_unit * 1, // 4
    label_text_transform: "initial",
    label_top_margin_factor: 1 / 12, // align with icon
    padding: (polytheneTheme.vars.grid_unit_icon_button - polytheneTheme.vars.unit_icon_size) / 2, // 12
    padding_compact: (polytheneTheme.vars.grid_unit_icon_button - polytheneTheme.vars.unit_icon_size) / 3, // 8

    color_background: "transparent", // only specify this variable to get all 2 states
    // theme specific background colors may be set in theme; disabled by default
    // color_light_background:    "none",
    // color_dark_background:     "none",
    // color_light_hover:         "inherit",
    // color_dark_hover:          "inherit",
    // color_light_label_hover:   "inherit",
    // color_dark_label_hover:    "inherit",

    color_light: rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_secondary),
    color_light_label: rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_secondary),
    color_light_disabled: rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_disabled),
    color_light_focus_opacity: polytheneTheme.vars.blend_light_background_hover_medium,
    color_light_wash_background: rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_background_hover),

    color_dark: rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_secondary),
    color_dark_label: rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_secondary),
    color_dark_disabled: rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_disabled),
    color_dark_focus_opacity: polytheneTheme.vars.blend_dark_background_hover_medium,
    color_dark_wash_background: rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_background_hover)

    // hover colors may be set in theme; disabled by default

    // color_light_hover_background:         "currentColor",
    // color_dark_hover_background:          "currentColor",
  };

  var classes = {
    component: "pe-button pe-icon-button",

    // elements
    content: "pe-icon-button__content",
    label: "pe-icon-button__label",

    // states
    compact: "pe-icon-button--compact"
  };

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var alignSide = function alignSide(isRTL) {
    return function (vars) {
      return {};
    };
  }; // eslint-disable-line no-unused-vars
  var alignLeft = alignSide(false);
  var alignRight = alignSide(true);

  var sel = function sel(selector, o) {
    return _defineProperty({}, selector, o);
  };

  var _label_padding_before = function _label_padding_before(selector, vars, isRTL) {
    return sel(selector, {
      " .pe-icon-button__label": _defineProperty({}, isRTL ? "paddingRight" : "paddingLeft", vars.label_padding_before + "px")
    });
  };

  var _label_padding_after = function _label_padding_after(selector, vars, isRTL) {
    return sel(selector, {
      " .pe-icon-button__label": _defineProperty({}, isRTL ? "paddingLeft" : "paddingRight", vars.label_padding_after + "px")
    });
  };

  var selectorRTL = function selectorRTL(selector) {
    return "*[dir=rtl] " + selector + ", .pe-rtl " + selector;
  };

  var varFns = {
    general_styles: function general_styles(selector, vars) {
      return [sel(selector, [alignLeft(vars), {
        // don't set button size to facilitate different icon sizes
        display: "inline-flex",
        alignItems: "center",
        cursor: "pointer",
        border: "none",

        " .pe-button__content": {
          display: "flex",
          alignItems: "center",
          fontSize: "1rem",
          borderRadius: "50%",
          position: "relative"
        },

        " .pe-icon-button__content": {
          lineHeight: 1,
          borderRadius: "50%",
          pointerEvents: "none"
        }
      }, _defineProperty({}, "*[dir=rtl] " + selector + ", .pe-rtl " + selector, [alignRight(vars)])])];
    },
    padding: function padding(selector, vars) {
      return [sel(selector, {
        " .pe-icon-button__content": {
          padding: vars.padding + "px"
        }
      })];
    },
    padding_compact: function padding_compact(selector, vars) {
      return [sel(selector, {
        ".pe-icon-button--compact": {
          " .pe-icon-button__content": {
            padding: vars.padding_compact + "px"
          }
        }
      })];
    },
    animation_duration: function animation_duration(selector, vars) {
      return [sel(selector, {
        " .pe-button__content, .pe-button__wash": [polytheneCoreCss.mixin.defaultTransition("all", vars.animation_duration)]
      })];
    },
    label_font_size: function label_font_size(selector, vars) {
      return [sel(selector, {
        " .pe-icon-button__label": {
          fontSize: vars.label_font_size + "px"
        }
      })];
    },
    label_line_height: function label_line_height(selector, vars) {
      return [sel(selector, {
        " .pe-icon-button__label": {
          lineHeight: vars.label_line_height + "px"
        }
      })];
    },
    label_font_weight: function label_font_weight(selector, vars) {
      return [sel(selector, {
        " .pe-icon-button__label": {
          fontWeight: vars.label_font_weight
        }
      })];
    },
    label_text_transform: function label_text_transform(selector, vars) {
      return [sel(selector, {
        " .pe-icon-button__label": {
          textTransform: vars.label_text_transform
        }
      })];
    },
    label_padding_after: function label_padding_after(selector, vars) {
      return [sel(selector, {}), _label_padding_after(selector, vars, false), _label_padding_after(selectorRTL(selector), vars, true)];
    },
    label_padding_before: function label_padding_before(selector, vars) {
      return [sel(selector, {}), _label_padding_before(selector, vars, false), _label_padding_before(selectorRTL(selector), vars, true)];
    }
  };

  var layout = (function (selector, componentVars, customVars) {
    var allVars = _extends({}, componentVars, customVars);
    var currentVars = customVars ? customVars : allVars;
    return Object.keys(currentVars).map(function (v) {
      return varFns[v] !== undefined ? varFns[v](selector, allVars) : null;
    }).filter(function (s) {
      return s;
    });
  });

  var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var sel$1 = function sel(selector, o) {
    return _defineProperty$1({}, selector, o);
  };

  var generalFns = {
    general_styles: function general_styles(selector) {
      return [sel$1(selector, {
        ".pe-button--focus, &.pe-button--selected": {
          " .pe-button__focus": {
            backgroundColor: "currentcolor"
          }
        }
      })];
    }
  };

  var tintFns = function tintFns(tint) {
    var _ref2;

    return _ref2 = {}, _defineProperty$1(_ref2, "color_" + tint, function (selector, vars) {
      return [sel$1(selector, {
        "&, .pe-icon-button__label": {
          color: vars["color_" + tint]
        }
      })];
    }), _defineProperty$1(_ref2, "color_background", function color_background(selector, vars) {
      return [sel$1(selector, {
        " .pe-icon-button__content": {
          backgroundColor: vars["color_background"]
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_background", function (selector, vars) {
      return [sel$1(selector, {
        " .pe-icon-button__content": {
          backgroundColor: vars["color_" + tint + "_background"]
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_wash_opacity", function (selector, vars) {
      return [sel$1(selector, {
        opacity: vars["color_" + tint + "_wash_opacity"]
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_focus_opacity", function (selector, vars) {
      return [sel$1(selector, {
        ".pe-button--focus, &.pe-button--selected": {
          " .pe-button__focus": {
            opacity: vars["color_" + tint + "_focus_opacity"]
          }
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_disabled", function (selector, vars) {
      return [sel$1(selector, {
        ".pe-button--disabled": {
          " .pe-button__content, .pe-icon-button__label": {
            color: vars["color_" + tint + "_disabled"]
          }
        }
      })];
    }), _ref2;
  };

  var hoverTintFns = function hoverTintFns(tint) {
    return _defineProperty$1({}, "color_" + tint + "_label_hover", function (selector, vars) {
      return [sel$1(selector, {
        " .pe-icon-button__label": {
          color: vars["color_" + tint + "_label_hover"]
        }
      })];
    });
  };

  var lightTintFns = _extends$1({}, generalFns, tintFns("light"));
  var darkTintFns = _extends$1({}, generalFns, tintFns("dark"));

  var lightTintHoverFns = hoverTintFns("light");
  var darkTintHoverFns = hoverTintFns("dark");

  var createStyle = function createStyle(selector, componentVars, customVars, tint, hover) {
    var allVars = _extends$1({}, componentVars, customVars);
    var currentVars = customVars ? customVars : allVars;
    return Object.keys(currentVars).map(function (v) {
      var varFns = tint === "light" ? hover ? lightTintHoverFns : lightTintFns : hover ? darkTintHoverFns : darkTintFns;
      return varFns[v] !== undefined ? varFns[v](selector, allVars) : null;
    }).filter(function (s) {
      return s;
    });
  };

  var style = function style(scopes, selector, componentVars, customVars, tint) {
    var selectors = scopes.map(function (s) {
      return s + selector;
    }).join(",");
    return createStyle(selectors, componentVars, customVars, tint);
  };

  var noTouchStyle = function noTouchStyle(scopes, selector, componentVars, customVars, tint) {
    var selectors = [].concat(scopes.map(function (s) {
      return s + selector + ":hover";
    }).join(",")).concat(scopes.map(function (s) {
      return s + selector + ":active";
    }).join(","));
    return createStyle(selectors, componentVars, customVars, tint, true);
  };

  var color = (function (selector, componentVars, customVars) {
    return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, customVars, "dark"), // has/inside dark tone
    style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, customVars, "light"), // normal, has/inside light tone
    polytheneCssButton.noTouchStyle(["html.pe-no-touch .pe-dark-tone "], selector, componentVars, customVars, "dark"), // inside dark tone
    noTouchStyle(["html.pe-no-touch .pe-dark-tone "], selector, componentVars, customVars, "dark"), // inside dark tone
    polytheneCssButton.noTouchStyle(["html.pe-no-touch ", "html.pe-no-touch .pe-light-tone "], selector, componentVars, customVars, "light"), noTouchStyle(["html.pe-no-touch ", "html.pe-no-touch .pe-light-tone "], selector, componentVars, customVars, "light")];
  });

  var fns = [layout, color];
  var selector = "." + classes.component.replace(/ /g, ".");

  var addStyle = function addStyle(customSelector, customVars) {
    return polytheneCoreCss.styler.generateCustomStyles([customSelector, selector], vars, customVars, fns);
  };

  var getStyle = function getStyle(customSelector, customVars) {
    return customSelector ? polytheneCoreCss.styler.createCustomStyleSheets([customSelector, selector], vars, customVars, fns) : polytheneCoreCss.styler.createStyleSheets([selector], vars, fns);
  };

  polytheneCoreCss.styler.generateStyles([selector], vars, fns);

  exports.addStyle = addStyle;
  exports.getStyle = getStyle;
  exports.vars = vars;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-icon-button.js.map
