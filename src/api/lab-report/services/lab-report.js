'use strict';

/**
 * lab-report service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lab-report.lab-report');
