"use strict";

/**
 * A set of functions called "actions" for `count-ct`
 */

module.exports = ({ strapi }) => ({
  async count(ctx, next) {
    const result = await strapi.api["class-test"].services["count-ct"].count();
    return result;
  },
  async countWeek(ctx, next) {
    const result = await strapi.api["class-test"].services["count-ct"].count({
      of: "week",
    });
    return result;
  },
  async countMonth(ctx, next) {
    const result = await strapi.api["class-test"].services["count-ct"].count({
      of: "month",
    });
    return result;
  },
});
