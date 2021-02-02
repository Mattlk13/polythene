const { writej2c } = require("write-j2c");
const { CardCSS, ButtonCSS, IconCSS, DialogCSS, MenuCSS, DrawerCSS, ListTileCSS } = require("polythene-css");

const breakPointSmall = 480;
const breakPointDrawerSmall = 650;
const breakPointDrawerMedium = 900;

const styles = [
  CardCSS.getStyle(
    ".themed-card",
    {
      color_dark_main_background: "#B89E58",
      color_dark_title_text:      "#fff",
      color_dark_subtitle_text:   "#fff"
    }
  ),
  CardCSS.getStyle(
    ".small-image-card",
    {
      image_size_medium: 90
    },
    {
      mediaQuery: `@media all and (max-width: ${breakPointSmall}px)`
    }
  ),
  ButtonCSS.getStyle(
    ".themed-button",
    {
      color_light_background: "#2196F3",
      color_light_text:       "#fff",
      contained:              true,
    },
    {
      mediaQuery: `@media all and (max-width: ${breakPointSmall}px)`
    }
  ),
  IconCSS.getStyle(
    ".themed-icon",
    {
      size_regular: 50,
      color_light:  "purple",
    },
    {
      mediaQuery: `@media all and (max-width: ${breakPointSmall}px)`
    }
  ),
  DialogCSS.getStyle(
    ".small-screen-full-screen",
    {
      full_screen: true,
    },
    {
      mediaQuery: `@media all and (max-width: ${breakPointSmall}px)`
    }
  ),
  MenuCSS.getStyle(
    ".small-screen-top-menu",
    {
      top_menu: true,
      backdrop: true,
      animation_hide_origin_effect_css: "transform: scale(1);",
      height: "50vh !important",
    },
    {
      mediaQuery: `@media all and (max-width: ${breakPointSmall}px)`
    }
  ),
  DrawerCSS.getStyle(
    ".small-screen-cover-drawer",
    {
      cover: true,
      backdrop: true,
      border: false,
    },
    {
      mediaQuery: `@media all and (max-width: ${breakPointDrawerSmall}px)`
    }
  ),
  DrawerCSS.getStyle(
    ".medium-screen-mini-drawer",
    {
      mini: true,
      border: true,
    },
    {
      mediaQuery: `@media all and (min-width: ${breakPointDrawerSmall + 1}px) and (max-width: ${breakPointDrawerMedium}px)`
    }
  ),
  DrawerCSS.getStyle(
    ".large-screen-floating-drawer",
    {
      permanent: true,
      floating: true,
      border_radius: 4
    },
    {
      mediaQuery: `@media all and (min-width: ${breakPointDrawerMedium + 1}px)`
    }
  ),
  ListTileCSS.getStyle(
    ".tests-drawer-navigation-list",
    {
      color_light_hover:       "#e01d5f",
      color_light_hover_front: "#e01d5f" 
    }
  )
];

writej2c({
  styles,
  path: "./dist/css/theme.css",
  autoPrefix: true,
  gzip: true,
  beautify: true
});
