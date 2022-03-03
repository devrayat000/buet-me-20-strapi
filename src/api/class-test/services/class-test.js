'use strict';

/**
 * class-test service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::class-test.class-test');
