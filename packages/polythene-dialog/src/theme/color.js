
const style = (scope, selector, componentVars, tint) => [{
  [scope + selector]: {
    "&.pe-dialog--backdrop": {
      "background-color": componentVars["color_" + tint + "_backdrop_background"]
    },
    " .pe-dialog__content": {
      "background-color": componentVars["color_" + tint + "_content_background"]
    },
    " .pe-dialog__header .pe-dialog__title": {
      "color": componentVars["color_" + tint + "_title_text"]
    },
    " .pe-dialog__body": {
      "color": componentVars["color_" + tint + "_body_text"]
    },
    "&.pe-dialog--overflow-top .pe-dialog__body": {
      "border-top-color": componentVars["color_" + tint + "_body_border"]
    },
    "&.pe-dialog--overflow-bottom .pe-dialog__body": {
      "border-bottom-color": componentVars["color_" + tint + "_body_border"]
    }
  }
}];

export default (selector, componentVars) => [
  style("",                selector, componentVars, "light"),
  style(".pe-dark-theme",  selector, componentVars, "dark" ), // has dark theme
  style(".pe-dark-theme ", selector, componentVars, "dark" ), // inside dark theme
];