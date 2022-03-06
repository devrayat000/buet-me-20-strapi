"use strict";

/**
 *  lab-report controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::lab-report.lab-report",
  ({ strapi }) => ({
    async count(ctx, next) {
      const result = await strapi.api["lab-report"].services[
        "lab-report"
      ].count();
      return result;
    },
    async countWeek(ctx, next) {
      const result = await strapi.api["lab-report"].services[
        "lab-report"
      ].count({
        of: "week",
      });
      return result;
    },
    async countMonth(ctx, next) {
      const result = await strapi.api["lab-report"].services[
        "lab-report"
      ].count({
        of: "month",
      });
      return result;
    },
  })
);
