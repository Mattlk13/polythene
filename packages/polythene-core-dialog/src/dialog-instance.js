import { filterSupportedAttributes, subscribe, unsubscribe, show, hide } from "polythene-core";
import { customTheme } from "./theme";
import classes from "./classes";

export const getElement = vnode =>
  vnode.attrs.element || "div";

export const theme = customTheme;

const DEFAULT_Z = 3;

export const getInitialState = (vnode, createStream) => {
  const transitioning = createStream(false);
  return {
    cleanUp: undefined,
    el:      undefined,
    transitioning
  };
};

const showDialog = (state, attrs) => {
  if (state.transitioning()) {
    return Promise.resolve();
  }
  const id = state.instanceId;
  state.transitioning(true);
  const transitions = attrs.transitions;
  return show(Object.assign({},
    attrs,
    transitions.show(state.el, attrs)
  )).then(() => {
    state.transitioning(false);
    if (attrs.multipleDidShow) {
      attrs.multipleDidShow(id); // this will call attrs.didShow
    }
  });
};

const hideDialog = (state, attrs) => {
  if (state.transitioning()) {
    return Promise.resolve();
  }
  const id = state.instanceId;
  state.transitioning(true);
  const transitions = attrs.transitions;
  return hide(Object.assign({},
    attrs,
    transitions.hide(state.el, attrs)
  )).then(() => {
    state.transitioning(false);
    if (attrs.multipleDidHide) {
      attrs.multipleDidHide(id); // this will call attrs.didHide
    }
  });
};

export const onMount = vnode => {
  if (!vnode.dom) {
    return;
  }
  const state = vnode.state;
  const attrs = vnode.attrs;
  state.el = vnode.dom;
 
  const handleEscape = e => {
    if (attrs.fullscreen || attrs.modal) return;
    if (e.which === 27) {
      hideDialog(state, Object.assign({}, attrs, {
        hideDelay: 0
      }));
    }
  };
  
  state.cleanUp = () => (
    unsubscribe("keydown", handleEscape)
  );

  subscribe("keydown", handleEscape);

  if (attrs.show) {
    showDialog(state, attrs);
  }
};

export const onUnMount = vnode => (
  vnode.state.cleanUp()
);

export const createProps = (vnode, { keys: k }) => {
  const state = vnode.state;
  const attrs = vnode.attrs;
  return Object.assign(
    {},
    filterSupportedAttributes(attrs, { remove: ["style"] }), // style set in content, and set by show/hide transition
    {
      className: [
        classes.component,
        attrs.fullscreen ? classes.fullscreen : null,
        attrs.backdrop ? classes.backdrop : null,
        attrs.tone === "dark" ? "pe-dark-tone" : null,
        attrs.tone === "light" ? "pe-light-tone" : null,
        attrs.className || attrs[k.class],
      ].join(" "),
      // click backdrop: close dialog
      [k.onclick]: e => {
        if (e.target !== state.el) {
          return;
        }
        if (attrs.modal) {
          // not allowed
          return;
        }
        hideDialog(state, Object.assign({}, attrs, {
          hideDelay: 0
        }));
      }
    },
    attrs.formOptions ? attrs.formOptions : null
  );
};

export const createContent = (vnode, { renderer: h, Shadow, DialogPane }) => {
  const state = vnode.state;
  const attrs = vnode.attrs;
  if (attrs.hide) {
    hideDialog(state, attrs);
  }
  const pane = attrs.panes && attrs.panes.length
    ? attrs.panes[0]
    : h(DialogPane, {
      title: attrs.title,
      body: attrs.content || attrs.body || attrs.menu,
      footer: attrs.footer,
      className: attrs.className,
      style: attrs.style
    });
  return h("div",
    {
      className: [
        classes.content,
        attrs.menu ? classes.menuContent : null
      ].join(" "),
      style: attrs.style
    },
    [
      attrs.fullscreen
        ? null
        : h(Shadow, {
          z: attrs.z !== undefined ? attrs.z : DEFAULT_Z,
          animated: true
        }),
      pane
    ]
  );
};
