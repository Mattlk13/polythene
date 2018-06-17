import classes from "polythene-css-classes/shadow";
import layout from "./layout";
import vars from "./vars";
import { styler } from "polythene-core-css";

const fns = [layout];
const selector = `.${classes.component}`;

const addStyle = styler.createAddStyle(selector, fns, vars);

const getStyle = styler.createGetStyle(selector, fns, vars);

styler.addStyle({
  selectors: [selector],
  fns,
  vars
});

export {
  addStyle,
  getStyle,
  layout,
  vars,
};
