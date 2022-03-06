"use strict";

/**
 * class-test router.
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::class-test.class-test");
