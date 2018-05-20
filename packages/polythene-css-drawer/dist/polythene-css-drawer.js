(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-theme'), require('polythene-core-css')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-theme', 'polythene-core-css'], factory) :
  (factory((global.polythene = {}),global['polythene-theme'],global['polythene-core-css']));
}(this, (function (exports,polytheneTheme,polytheneCoreCss) { 'use strict';

  var rgba = function rgba(colorStr) {
    var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return "rgba(" + colorStr + ", " + opacity + ")";
  };

  var vars = {
    general_styles: true,

    content_max_width: 5 * polytheneTheme.vars.increment, // 5 * 56
    content_max_width_large: 5 * polytheneTheme.vars.increment_large, // 5 * 64
    content_side_offset: polytheneTheme.vars.grid_unit_component * 7, // 56
    content_side_offset_large: polytheneTheme.vars.grid_unit_component * 8, // 64
    content_width_mini_collapsed: polytheneTheme.vars.increment, // 1 * 56
    permanent_content_width: 240,

    color_light_backdrop_background: "rgba(0, 0, 0, .4)",
    color_dark_backdrop_background: "rgba(0, 0, 0, .5)",

    color_light_background: rgba(polytheneTheme.vars.color_light_background),
    color_dark_background: rgba(polytheneTheme.vars.color_dark_background),

    color_light_border: rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_border_light),
    color_dark_border: rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_border_light)
  };

  var classes = {
    component: "pe-dialog pe-drawer",

    // states
    cover: "pe-drawer--cover",
    push: "pe-drawer--push",
    mini: "pe-drawer--mini",
    permanent: "pe-drawer--permanent",
    border: "pe-drawer--border",
    floating: "pe-drawer--floating",
    fixed: "pe-drawer--fixed",
    anchorEnd: "pe-drawer--anchor-end"
  };

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var SHADOW_WIDTH = 15;

  var alignSide = function alignSide(isRTL) {
    return function () {
      var _peDrawerFixed;

      return {
        // Bordered
        ".pe-drawer--border .pe-dialog__content": {
          borderStyle: isRTL ? "none none none solid" : "none solid none none"
        },

        // Fixed
        ".pe-drawer--fixed": (_peDrawerFixed = {}, _defineProperty(_peDrawerFixed, isRTL ? "right" : "left", 0), _defineProperty(_peDrawerFixed, isRTL ? "left" : "right", "auto"), _peDrawerFixed),

        // Mini
        ".pe-drawer--mini:not(.pe-dialog--visible) .pe-dialog__content": {
          marginLeft: 0,
          marginRight: 0
        }
      };
    };
  };

  var alignLeft = alignSide(false);
  var alignRight = alignSide(true);

  var sel = function sel(selector, o) {
    return _defineProperty({}, selector, o);
  };

  var selectorRTL = function selectorRTL(selector) {
    return "*[dir=rtl] " + selector + ", .pe-rtl " + selector;
  };

  var selectorAnchorEnd = function selectorAnchorEnd(selector) {
    return selector + ".pe-drawer--anchor-end";
  };

  var cover_content_max_width = function cover_content_max_width(selector, vars, isRTL) {
    var _peDrawerCoverP, _peDrawerCoverPe;

    return sel(selector, {
      ".pe-drawer--cover .pe-dialog__content": (_peDrawerCoverP = {}, _defineProperty(_peDrawerCoverP, isRTL ? "right" : "left", -vars.content_max_width - SHADOW_WIDTH + "px"), _defineProperty(_peDrawerCoverP, isRTL ? "left" : "right", "auto"), _peDrawerCoverP),
      ".pe-drawer--cover.pe-dialog--visible .pe-dialog__content": (_peDrawerCoverPe = {}, _defineProperty(_peDrawerCoverPe, isRTL ? "right" : "left", 0), _defineProperty(_peDrawerCoverPe, isRTL ? "left" : "right", "auto"), _peDrawerCoverPe)
    });
  };

  var push_permanent_content_width = function push_permanent_content_width(selector, vars, isRTL) {
    var _peDrawerPushPe, _peDrawerPushPe2;

    return sel(selector, {
      ".pe-drawer--push .pe-dialog__content": (_peDrawerPushPe = {}, _defineProperty(_peDrawerPushPe, isRTL ? "marginRight" : "marginLeft", -vars.permanent_content_width - SHADOW_WIDTH + "px"), _defineProperty(_peDrawerPushPe, isRTL ? "marginLeft" : "marginRight", "auto"), _peDrawerPushPe),
      ".pe-drawer--push.pe-dialog--visible .pe-dialog__content": (_peDrawerPushPe2 = {}, _defineProperty(_peDrawerPushPe2, isRTL ? "marginRight" : "marginLeft", 0), _defineProperty(_peDrawerPushPe2, isRTL ? "marginLeft" : "marginRight", "auto"), _peDrawerPushPe2)
    });
  };

  var varFns = {
    general_styles: function general_styles(selector, vars) {
      return [sel(selector, [alignLeft(vars), {
        justifyContent: "flex-start",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
        height: "100%",
        padding: 0,
        opacity: 1,

        " .pe-dialog__content": [polytheneCoreCss.mixin.defaultTransition("all"), // animation duration is set in component options
        {
          position: "relative",
          borderRadius: 0,
          height: "100%",
          overflow: "visible"
        }],

        " .pe-dialog-pane__content": {
          height: "100%",
          overflowY: "auto",
          overflowX: "hidden"
        },

        " .pe-dialog-pane": {
          height: "100%",
          minWidth: 0 // IE 11 does not accept "none" or "inital" here
        },

        " .pe-dialog-pane__body": {
          overflow: "visible"
        },

        // Fixed
        ".pe-drawer--fixed": {
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: polytheneTheme.vars.z_app_bar
        },

        // Permanent
        ".pe-drawer--permanent:not(.pe-drawer--mini)": {
          position: "static",
          display: "block",
          padding: 0,
          overflow: "initial",

          " .pe-dialog__content": {
            overflow: "visible",
            maxHeight: "initial"
          }
        },

        // Floating
        ".pe-drawer--floating": {
          height: "auto"
        },

        // Bordered
        ".pe-drawer--border": {
          " .pe-dialog__content": {
            borderWidth: "1px"
          }
        },

        // Cover (default)
        ".pe-drawer--cover": {
          " .pe-dialog__content": {
            position: "absolute",
            top: 0
          }
        },

        // Push
        ".pe-drawer--push": {
          position: "static"
        },

        // Backdrop
        " .pe-dialog__backdrop, .pe-dialog__touch": {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        },
        " .pe-dialog__backdrop": [polytheneCoreCss.mixin.defaultTransition("all"), // animation duration is set in component options
        {
          opacity: 0
        }],
        ".pe-dialog--visible .pe-dialog__backdrop": {
          opacity: 1
        }
      }]), [sel(selectorRTL(selector), alignRight(vars))]];
    },
    content_max_width: function content_max_width(selector, vars) {
      return [sel(selector, {
        ".pe-drawer--cover": {
          " .pe-dialog__content": {
            maxWidth: vars.content_max_width + "px"
          }
        }
      }), cover_content_max_width(selector, vars, false), cover_content_max_width(selectorRTL(selector), vars, true), cover_content_max_width(selectorAnchorEnd(selector), vars, true), cover_content_max_width(selectorAnchorEnd(selectorRTL(selector)), vars, false)];
    },
    permanent_content_width: function permanent_content_width(selector, vars) {
      return [sel(selector, {
        ".pe-drawer--permanent:not(.pe-drawer--mini)": {
          " .pe-dialog__content": {
            width: vars.permanent_content_width + "px"
          }
        },
        ".pe-drawer--push": {
          " .pe-dialog__content": {
            width: vars.permanent_content_width + "px"
          }
        }
      }), push_permanent_content_width(selector, vars, false), push_permanent_content_width(selectorRTL(selector), vars, true), push_permanent_content_width(selectorAnchorEnd(selector), vars, true), push_permanent_content_width(selectorAnchorEnd(selectorRTL(selector)), vars, false)];
    },
    content_side_offset: function content_side_offset(selector, vars) {
      return [sel(selector, {
        ".pe-drawer--cover": {
          " .pe-dialog__content": {
            width: "calc(100% - " + vars.content_side_offset + "px)"
          }
        }
      })];
    },
    content_width_mini_collapsed: function content_width_mini_collapsed(selector, vars) {
      return [sel(selector, {
        ".pe-drawer--mini:not(.pe-dialog--visible) .pe-dialog__content": {
          width: vars.content_width_mini_collapsed + "px"
        }
      })];
    },
    content_max_width_large: function content_max_width_large(selector, vars) {
      return _defineProperty({}, "@media (min-width: " + polytheneTheme.vars.breakpoint_for_tablet_portrait_up + "px)", _defineProperty({}, selector, {
        ".pe-drawer--push": {
          " .pe-dialog__content": {
            maxWidth: vars.content_max_width_large + "px"
          }
        },
        " .pe-dialog__content": {
          maxWidth: vars.content_max_width_large + "px"
        }
      }));
    },
    content_side_offset_large: function content_side_offset_large(selector, vars) {
      return _defineProperty({}, "@media (min-width: " + polytheneTheme.vars.breakpoint_for_tablet_portrait_up + "px)", _defineProperty({}, selector, {
        " .pe-dialog__content": {
          width: "calc(100% - " + vars.content_side_offset_large + "px)"
        }
      }));
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
    general_styles: function general_styles() {
      return [{
        " .pe-dialog__content": {
          background: "none"
        }
      }];
    }
  };

  var tintFns = function tintFns(tint) {
    var _ref2;

    return _ref2 = {}, _defineProperty$1(_ref2, "color_" + tint + "_border", function (selector, vars) {
      return [sel$1(selector, {
        " .pe-dialog__content": {
          borderColor: vars["color_" + tint + "_border"]
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_background", function (selector, vars) {
      return [sel$1(selector, {
        " .pe-dialog-pane": {
          backgroundColor: vars["color_" + tint + "_background"]
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_backdrop_background", function (selector, vars) {
      return [sel$1(selector, {
        " .pe-dialog__backdrop": {
          backgroundColor: vars["color_" + tint + "_backdrop_background"]
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
//# sourceMappingURL=polythene-css-drawer.js.map
