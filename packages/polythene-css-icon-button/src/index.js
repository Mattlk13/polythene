import { styler } from "polythene-core-css";
import vars from "./vars";
import classes from "polythene-css-classes/icon-button";
import layout from "./layout";
import color from "./color";

const fns = [layout, color];
const selector = `.${classes.component.replace(/ /g, ".")}`;

const addStyle = (customSelector, customVars) => 
  styler.generateCustomStyles([customSelector, selector], vars, customVars, fns);

const getStyle = (customSelector, customVars) => 
  customSelector
    ? styler.createCustomStyleSheets([customSelector, selector], vars, customVars, fns)
    : styler.createStyleSheets([selector], vars, fns);

styler.generateStyles([selector], vars, fns);

export { addStyle, getStyle, vars };
