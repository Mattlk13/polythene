(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-css'), require('polythene-theme')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-css', 'polythene-theme'], factory) :
  (factory((global.polythene = {}),global['polythene-core-css'],global['polythene-theme']));
}(this, (function (exports,polytheneCoreCss,polytheneTheme) { 'use strict';

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var alignSide = function alignSide(isRTL) {
    return function (vars) {
      return {};
    };
  }; // eslint-disable-line no-unused-vars
  var alignLeft = alignSide(false);
  var alignRight = alignSide(true);

  var makeSize = function makeSize(vars, height) {
    var iconSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : polytheneTheme.vars.unit_icon_size;

    var labelSize = iconSize + vars.label_height;
    var iconOffset = (labelSize - iconSize) / 2;
    return {
      " .pe-control__form-label": {
        height: height + "px"
      },
      " .pe-control__box": {
        width: iconSize + "px",
        height: iconSize + "px"
      },
      " .pe-button__content": {
        width: labelSize + "px",
        height: labelSize + "px",

        " .pe-icon": [polytheneCoreCss.mixin.fit(iconOffset)]
      }
    };
  };

  var activeButton = function activeButton() {
    return {
      opacity: 1,
      zIndex: 1
    };
  };

  var inactiveButton = function inactiveButton() {
    return {
      opacity: 0,
      zIndex: 0
    };
  };

  var sel = function sel(selector, o) {
    return _defineProperty({}, selector, o);
  };

  var button_size_icon_size = function button_size_icon_size(selector, vars, isRTL) {
    var _peButtonPeContr;

    return sel(selector, {
      " .pe-button.pe-control__button": (_peButtonPeContr = {
        top: -((vars.button_size - vars.icon_size) / 2) + "px"
      }, _defineProperty(_peButtonPeContr, isRTL ? "right" : "left", -((vars.button_size - vars.icon_size) / 2) + "px"), _defineProperty(_peButtonPeContr, isRTL ? "left" : "right", "auto"), _peButtonPeContr)
    });
  };

  var _label_padding_before = function _label_padding_before(selector, vars, isRTL) {
    return sel(selector, {
      " .pe-control__label": _defineProperty({}, isRTL ? "paddingRight" : "paddingLeft", vars.label_padding_before + "px")
    });
  };

  var _label_padding_after = function _label_padding_after(selector, vars, isRTL) {
    return sel(selector, {
      " .pe-control__label": _defineProperty({}, isRTL ? "paddingLeft" : "paddingRight", vars.label_padding_after + "px")
    });
  };

  var selectorRTL = function selectorRTL(selector) {
    return "*[dir=rtl] " + selector + ", .pe-rtl " + selector;
  };

  var varFns = {
    general_styles: function general_styles(selector, vars, type) {
      var _ref2;

      return [sel(selector, [alignLeft(vars), (_ref2 = {
        display: "inline-block",
        boxSizing: "border-box",
        margin: 0,
        padding: 0

      }, _defineProperty(_ref2, " input[type=" + type + "]", {
        display: "none"
      }), _defineProperty(_ref2, " .pe-control__form-label", [polytheneCoreCss.flex.layoutHorizontal, polytheneCoreCss.flex.layoutCenter, {
        position: "relative",
        cursor: "pointer",
        margin: 0,
        color: "inherit",

        ":focus": {
          outline: 0
        }
      }]), _defineProperty(_ref2, ".pe-control--inactive", {
        " .pe-control__form-label": {
          cursor: "default"
        }
      }), _defineProperty(_ref2, " .pe-control__box", {
        position: "relative",
        display: "inline-block",
        boxSizing: "border-box",
        color: "inherit",
        flexShrink: 0,

        ":focus": {
          outline: 0
        }
      }), _defineProperty(_ref2, " .pe-button.pe-control__button", {
        position: "absolute",
        zIndex: 1
      }), _defineProperty(_ref2, ".pe-control--off", {
        " .pe-control__button--on": inactiveButton(),
        " .pe-control__button--off": activeButton()
      }), _defineProperty(_ref2, ".pe-control--on", {
        " .pe-control__button--on": activeButton(),
        " .pe-control__button--off": inactiveButton()
      }), _defineProperty(_ref2, " .pe-control__label", {
        // padding: RTL
        alignSelf: "center"
      }), _defineProperty(_ref2, ".pe-control--disabled", {
        " .pe-control__form-label": {
          cursor: "auto"
        },
        " .pe-control__button": {
          pointerEvents: "none"
        }
      }), _defineProperty(_ref2, " .pe-button__content", {
        " .pe-icon": {
          position: "absolute"
        }
      }), _ref2), _defineProperty({}, "*[dir=rtl] " + selector + ", .pe-rtl " + selector, [alignRight(vars)])])];
    },
    label_font_size: function label_font_size(selector, vars) {
      return [sel(selector, {
        " .pe-control__form-label": {
          fontSize: vars.label_font_size + "px"
        }
      })];
    },
    label_height: function label_height(selector, vars) {
      return [sel(selector, {
        " .pe-control__box": {
          width: vars.label_height + "px",
          height: vars.label_height + "px"
        },
        ".pe-control--small": makeSize(vars, polytheneTheme.vars.unit_icon_size_small, polytheneTheme.vars.unit_icon_size_small),
        ".pe-control--regular": makeSize(vars, vars.label_height, polytheneTheme.vars.unit_icon_size),
        ".pe-control--medium": makeSize(vars, polytheneTheme.vars.unit_icon_size_medium, polytheneTheme.vars.unit_icon_size_medium),
        ".pe-control--large": makeSize(vars, polytheneTheme.vars.unit_icon_size_large, polytheneTheme.vars.unit_icon_size_large)
      })];
    },
    animation_duration: function animation_duration(selector, vars) {
      return [sel(selector, {
        " .pe-button.pe-control__button": [polytheneCoreCss.mixin.defaultTransition("opacity", vars.animation_duration)],
        " .pe-control__label": [polytheneCoreCss.mixin.defaultTransition("all", vars.animation_duration)]
      })];
    },
    button_size: function button_size(selector, vars) {
      return [sel(selector, {}), button_size_icon_size(selector, vars, false), button_size_icon_size(selectorRTL(selector), vars, true)];
    },
    icon_size: function icon_size(selector, vars) {
      return [sel(selector, {}), button_size_icon_size(selector, vars, false), button_size_icon_size(selectorRTL(selector), vars, true)];
    },
    label_padding_after: function label_padding_after(selector, vars) {
      return [sel(selector, {}), _label_padding_after(selector, vars, false), _label_padding_after(selectorRTL(selector), vars, true)];
    },
    label_padding_before: function label_padding_before(selector, vars) {
      return [sel(selector, {}), _label_padding_before(selector, vars, false), _label_padding_before(selectorRTL(selector), vars, false)];
    }
  };

  var layout = (function (selector, componentVars, customVars, type) {
    var allVars = _extends({}, componentVars, customVars);
    var currentVars = customVars ? customVars : allVars;
    return Object.keys(currentVars).map(function (v) {
      return varFns[v] !== undefined ? varFns[v](selector, allVars, type) : null;
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
        " .pe-control__box": {
          " .pe-control__button": {
            color: "inherit"
          },
          " .pe-control__button--on": {
            color: "inherit"
          }
        }
      })];
    }
  };

  var tintFns = function tintFns(tint) {
    var _ref2;

    return _ref2 = {}, _defineProperty$1(_ref2, "color_" + tint + "_on", function (selector, vars) {
      return [sel$1(selector, {
        color: vars["color_" + tint + "_on"] // override by specifying "color"
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_off", function (selector, vars) {
      return [sel$1(selector, {
        " .pe-control__button--off": {
          color: vars["color_" + tint + "_off"]
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_disabled", function (selector, vars) {
      return [sel$1(selector, {
        ".pe-control--disabled": {
          " .pe-control__label": {
            color: vars["color_" + tint + "_disabled"]
          },
          " .pe-control__box": {
            " .pe-control__button--on, .pe-control__button--off": {
              color: vars["color_" + tint + "_disabled"]
            }
          }
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_label", function (selector, vars) {
      return [sel$1(selector, {
        " .pe-control__label": {
          color: vars["color_" + tint + "_label"]
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_on_icon", function (selector, vars) {
      return [sel$1(selector, {
        " .pe-control__box": {
          " .pe-control__button--on": {
            color: vars["color_" + tint + "_on_icon"]
          }
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_off_icon", function (selector, vars) {
      return [sel$1(selector, {
        " .pe-control__box": {
          " .pe-control__button--off": {
            color: vars["color_" + tint + "_off_icon"]
          }
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_focus_on", function (selector, vars) {
      return [sel$1(selector, {
        ".pe-control--on": {
          " .pe-button--focus .pe-button__focus": {
            backgroundColor: vars["color_" + tint + "_focus_on"]
          }
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_focus_off", function (selector, vars) {
      return [sel$1(selector, {
        ".pe-control--off": {
          " .pe-button--focus .pe-button__focus": {
            backgroundColor: vars["color_" + tint + "_focus_off"]
          }
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_focus_on_opacity", function (selector, vars) {
      return [sel$1(selector, {
        ".pe-control--on": {
          " .pe-button--focus .pe-button__focus": {
            opacity: vars["color_" + tint + "_focus_on_opacity"]
          }
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_focus_off_opacity", function (selector, vars) {
      return [sel$1(selector, {
        ".pe-control--off": {
          " .pe-button--focus .pe-button__focus": {
            opacity: vars["color_" + tint + "_focus_off_opacity"]
          }
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_on_label", function (selector, vars) {
      return [sel$1(selector, {
        ".pe-control--on": {
          " .pe-control__label": {
            color: vars["color_" + tint + "_on_label"]
          }
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_off_label", function (selector, vars) {
      return [sel$1(selector, {
        ".pe-control--off": {
          " .pe-control__label": {
            color: vars["color_" + tint + "_off_label"]
          }
        }
      })];
    }), _ref2;
  };

  var lightTintFns = _extends$1({}, generalFns, tintFns("light"));
  var darkTintFns = _extends$1({}, generalFns, tintFns("dark"));

  var createStyle = function createStyle(selector, componentVars, customVars, tint) {
    var allVars = _extends$1({}, componentVars, customVars);
    var currentVars = customVars ? customVars : allVars;
    return Object.keys(currentVars).map(function (v) {
      var varFns = tint === "light" ? lightTintFns : darkTintFns;
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

  var color = (function (selector, componentVars, customVars) {
    return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, customVars, "dark"), // has/inside dark tone
    style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, customVars, "light")];
  });

  var rgba = function rgba(colorStr) {
    var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return "rgba(" + colorStr + ", " + opacity + ")";
  };

  var vars = {
    general_styles: true,

    animation_duration: polytheneTheme.vars.animation_duration,
    button_size: 6 * polytheneTheme.vars.grid_unit_component,
    icon_size: 3 * polytheneTheme.vars.grid_unit_component,
    label_font_size: 2 * polytheneTheme.vars.grid_unit_component, // 16
    label_height: 3 * polytheneTheme.vars.grid_unit_component, // 24
    label_padding_after: 0,
    label_padding_before: polytheneTheme.vars.grid_unit * 4, // 16

    color_light_on: rgba(polytheneTheme.vars.color_primary),
    color_light_off: rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_secondary),
    color_light_label: rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_secondary),
    color_light_disabled: rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_disabled),
    color_light_thumb_off_focus_opacity: .08,
    color_light_thumb_on_focus_opacity: .11,

    // icon colors may be set in theme; set to "inherit" by default
    // color_light_on_icon
    // color_light_off_icon

    // label on/off colors may be set in theme; set to color_light_label by default
    // color_light_on_label
    // color_light_off_label

    color_light_focus_on: rgba(polytheneTheme.vars.color_primary),
    color_light_focus_on_opacity: .11,
    color_light_focus_off: rgba(polytheneTheme.vars.color_light_foreground),
    color_light_focus_off_opacity: .07,

    color_dark_on: rgba(polytheneTheme.vars.color_primary),
    color_dark_off: rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_secondary),
    color_dark_label: rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_secondary),
    color_dark_disabled: rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_disabled),
    color_dark_thumb_off_focus_opacity: .08,
    color_dark_thumb_on_focus_opacity: .11,

    // icon color may be set in theme; set to "inherit" by default
    // color_dark_on_icon
    // color_dark_off_icon

    // label on/off colors may be set in theme; set to color_dark_label by default
    // color_dark_on_label
    // color_dark_off_label

    color_dark_focus_on: rgba(polytheneTheme.vars.color_primary), // or '#80cbc4'
    color_dark_focus_on_opacity: .14,
    color_dark_focus_off: rgba(polytheneTheme.vars.color_dark_foreground),
    color_dark_focus_off_opacity: .09
  };

  var getStyle = function getStyle() {
    return null;
  };

  exports.getStyle = getStyle;
  exports.layout = layout;
  exports.color = color;
  exports.vars = vars;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-selection-control.js.map
