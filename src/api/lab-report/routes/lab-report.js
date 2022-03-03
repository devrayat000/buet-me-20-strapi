"use strict";

/**
 * lab-report router.
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::lab-report.lab-report", {
  only: ["find"],
  config: {
    find: {
      auth: false,
    },
  },
});
