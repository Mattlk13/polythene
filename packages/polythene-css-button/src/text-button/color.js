// @ts-check

/**
 * @typedef {"light" | "dark"} tint
 */

import { sel, createColor } from "polythene-core-css";

const border = (selector, vars, tint) =>
  sel(selector, {
    ":not(.pe-button--disabled)": {
      " .pe-button__content": {
        borderColor: vars["color_" + tint + "_border"],
      },
    }
  });

const generalFns = ({
  general_styles: () => []
});

/**
 * @param {tint} tint 
 */
const tintFns = tint => ({

  // Text

  ["color_" + tint + "_text"]: (selector, vars) => [
    sel(selector, {
      ":not(.pe-button--disabled)": {
        "&, &:link, &:visited": {
          color: vars["color_" + tint + "_text"]
        },
      }
    })
  ],
  ["color_" + tint + "_disabled_text"]: (selector, vars) => [
    sel(selector, {
      ".pe-button--disabled": {
        color: vars["color_" + tint + "_disabled_text"],
      },
    })
  ],

  // Background

  ["color_" + tint + "_background"]: (selector, vars) => [
    sel(selector, {
      ":not(.pe-button--disabled):not(.pe-button--selected)": {
        " .pe-button__content": {
          backgroundColor: vars["color_" + tint + "_background"],
        },
      }
    })
  ],
  ["color_" + tint + "_active_background"]: (selector, vars) => [
    sel(selector, {
      ":not(.pe-button--disabled)": {
        ".pe-button--selected": {
          " .pe-button__content": {
            backgroundColor: vars["color_" + tint + "_active_background"]
          }
        },
      }
    })
  ],
  ["color_" + tint + "_disabled_background"]: (selector, vars) => [
    sel(selector, {
      ".pe-button--disabled": {
        " .pe-button__content": {
          backgroundColor: vars["color_" + tint + "_disabled_background"],
        }
      },
    })
  ],
  ["color_" + tint + "_wash_background"]: (selector, vars) => [
    sel(selector, {
      " .pe-button__wash-color": {
        backgroundColor: vars["color_" + tint + "_wash_background"]
      },
    })
  ],
  ["color_" + tint + "_wash_opacity"]: (selector, vars) => [
    sel(selector, {
      " .pe-button__wash-color": {
        opacity: vars["color_" + tint + "_wash_opacity"]
      },
    })
  ],

  // Borders

  ["color_" + tint + "_border"]: (selector, vars) => [
    border(`${selector}.pe-button--border`, vars, tint)
  ],
  border: (selector, vars) => [
    border(selector, vars, tint)
  ],

  ["color_" + tint + "_active_border"]: (selector, vars) => [
    sel(selector, {
      ".pe-button--border.pe-button--selected": {
        " .pe-button__content": {
          borderColor: vars["color_" + tint + "_active_border"],
        }
      },
    })
  ],
  ["color_" + tint + "_disabled_border"]: (selector, vars) => [
    sel(selector, {
      ".pe-button--border.pe-button--disabled": {
        " .pe-button__content": {
          borderColor: vars["color_" + tint + "_disabled_border"],
        }
      },
    })
  ],

  // Icon

  ["color_" + tint + "_icon"]: (selector, vars) => [
    sel(selector, {
      " .pe-button__dropdown": {
        color: vars["color_" + tint + "_icon"]
      },
    })
  ],

  // Separator

  ["color_" + tint + "_separator"]: (selector, vars) => [
    sel(selector, {
      ".pe-button--separator-start": {
        " .pe-button__content": {
          borderColor: vars["color_" + tint + "_separator"]
        }
      }
    })
  ]

});

/**
 * @param {tint} tint 
 */
const hoverTintFns = tint => ({

  ["color_" + tint + "_hover"]: (selector, vars) => [
    sel(selector, {
      ":not(.pe-button--disabled):not(.pe-button--selected)": {
        color: vars["color_" + tint + "_hover"],
      }
    })
  ],

  ["color_" + tint + "_hover_border"]: (selector, vars) => [
    sel(selector, {
      ":not(.pe-button--disabled):not(.pe-button--selected)": {
        " .pe-button__content": {
          borderColor: vars["color_" + tint + "_hover_border"],
        },
      }
    })
  ],

  ["color_" + tint + "_hover_background"]: (selector, vars) => [
    sel(selector, {
      ":not(.pe-button--disabled):not(.pe-button--selected)": {
        " .pe-button__content": {
          backgroundColor: vars["color_" + tint + "_hover_background"]
        },
      }
    })
  ],

  ["color_" + tint + "_hover_icon"]: (selector, vars) => [
    sel(selector, {
      " .pe-button__dropdown": {
        color: vars["color_" + tint + "_hover_icon"],
      }
    })
  ],

});

const lightTintFns = {
  ...generalFns,
  ...tintFns("light")
};
const darkTintFns = {
  ...generalFns,
  ...tintFns("dark")
};

const lightTintHoverFns = hoverTintFns("light");
const darkTintHoverFns = hoverTintFns("dark");

export default createColor({
  varFns: { lightTintFns, darkTintFns, lightTintHoverFns, darkTintHoverFns }
});
