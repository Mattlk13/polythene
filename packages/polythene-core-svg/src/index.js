import { filterSupportedAttributes } from "polythene-core";
import classes from "polythene-css-classes/svg";

export const _SVG = ({ h, a, useEffect, useState, getDom, ...props }) => {
  const [domElement, setDomElement] = useState();

  useEffect(
    () => {
      if (!domElement) return;
      // Prevent that SVG gets keyboard focus
      const elem = domElement.querySelector("svg");
      if (elem) {
        elem.setAttribute("focusable", "false");
      }
    },
    [domElement]
  );
  
  const componentProps = Object.assign({},
    filterSupportedAttributes(props),
    getDom(dom => dom && !domElement && (
      setDomElement(dom),
      props.getDom && props.getDom(dom)
    )),
    props.testId && { "data-test-id": props.testId },
    {
      className: [
        classes.component,
        props.tone === "dark" ? "pe-dark-tone" : null,
        props.tone === "light" ? "pe-light-tone" : null,
        props.className || props[a.class],
      ].join(" "),
    }
  );

  const content = props.content
    ? props.content
    : props.children;

  return h(props.element || "div",
    componentProps,
    content
  );
};
