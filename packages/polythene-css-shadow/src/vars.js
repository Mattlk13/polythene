// @ts-check

import { vars } from "polythene-theme";

export const sharedVars = {
  shadow_top_depth_0:      "none",
  shadow_bottom_depth_0:   "none",

  shadow_top_depth_1:      "none",
  shadow_bottom_depth_1:   "0 1px 4px 0 rgba(0, 0, 0, 0.37)",

  shadow_top_depth_2:      "0 2px 2px 0 rgba(0, 0, 0, 0.2)",
  shadow_bottom_depth_2:   "0 6px 10px 0 rgba(0, 0, 0, 0.3)",

  shadow_top_depth_3:      "0 11px 7px 0 rgba(0, 0, 0, 0.19)",
  shadow_bottom_depth_3:   "0 13px 25px 0 rgba(0, 0, 0, 0.3)",

  shadow_top_depth_4:      "0 14px 12px 0 rgba(0, 0, 0, 0.17)",
  shadow_bottom_depth_4:   "0 20px 40px 0 rgba(0, 0, 0, 0.3)",

  shadow_top_depth_5:      "0 17px 17px 0 rgba(0, 0, 0, 0.15)",
  shadow_bottom_depth_5:   "0 27px 55px 0 rgba(0, 0, 0, 0.3)",   

  // theme vars
  shadow_depth:            undefined,
};

export default {
  /**
   * Generate general styles, not defined by variables
   */
  general_styles:          true,

  transition:              `box-shadow ${vars.animation_duration} ease-out`,
  ...sharedVars
};
