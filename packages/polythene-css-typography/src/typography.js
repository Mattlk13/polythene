// @ts-check

import { vars } from "polythene-style";

const fontSize = 14;

export default () => [
  {
    " h1, h2, h3, h4, h5, h6, p": {
      margin: 0,
      padding: 0
    }
  },
  {
    " h1, h2, h3, h4, h5, h6": {
      " small": {
        "font-weight": vars.font_weight_normal,
        "line-height": vars.line_height,
        "letter-spacing": "-0.02em",
        "font-size": "0.6em"
      }
    }
  },
  {
    " h1": {
      "font-size": "56px",
      "font-weight": vars.font_weight_normal,
      "line-height": vars.line_height,
      "margin-top": "24px",
      "margin-bottom": "24px"
    }
  },
  {
    " h2": {
      "font-size": "45px",
      "font-weight": vars.font_weight_normal,
      "line-height": vars.line_height,
      "margin-top": "24px",
      "margin-bottom": "24px"
    }
  },
  {
    " h3": {
      "font-size": "34px",
      "font-weight": vars.font_weight_normal,
      "line-height": vars.line_height,
      "margin-top": "24px",
      "margin-bottom": "24px"
    }
  },
  {
    " h4": {
      "font-size": "24px",
      "font-weight": vars.font_weight_normal,
      "line-height": vars.line_height,
      "-moz-osx-font-smoothing": "grayscale",
      "margin-top": "24px",
      "margin-bottom": "16px"
    }
  },
  {
    " h5": {
      "font-size": "20px",
      "font-weight": vars.font_weight_medium,
      "line-height": vars.line_height,
      "letter-spacing": "-0.02em",
      "margin-top": "24px",
      "margin-bottom": "16px"
    }
  },
  {
    " h6": {
      "font-size": "16px",
      "font-weight": vars.font_weight_normal,
      "line-height": vars.line_height,
      "letter-spacing": "0.04em",
      "margin-top": "24px",
      "margin-bottom": "16px"
    }
  },
  {
    " html, body": {
      "font-size": fontSize + "px",
      "line-height": vars.line_height,
      "font-weight": vars.font_weight_normal,
    },
    " p": {
      "font-size": fontSize + "px",
      "font-weight": vars.font_weight_normal,
      "line-height": vars.line_height,
      "letter-spacing": "0",
      "margin-bottom": "16px"
    },
    " blockquote": {
      "position": "relative",
      "font-size": "24px",
      "font-weight": vars.font_weight_normal,
      "font-style": "italic",
      "line-height": vars.line_height,
      "letter-spacing": "0.08em",
      "margin-top": "24px",
      "margin-bottom": "16px"
    },
    " ul, ol": {
      "font-size": fontSize + "px",
      "font-weight": vars.font_weight_normal,
      "line-height": vars.line_height,
      "letter-spacing": 0
    },
    " b, strong": {
      "font-weight": vars.font_weight_medium
    }
  }
];
