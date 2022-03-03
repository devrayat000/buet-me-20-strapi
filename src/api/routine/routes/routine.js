"use strict";

/**
 * routine router.
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::routine.routine", {
  only: ["find"],
  config: {
    find: {
      auth: false,
    },
  },
});
