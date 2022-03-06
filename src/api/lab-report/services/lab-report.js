"use strict";

/**
 * lab-report service.
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService(
  "api::lab-report.lab-report",
  ({ strapi }) => ({
    async count({ of } = {}) {
      /**
       * @type {Map<string, object>}
       */
      const meta = strapi.db.metadata;
      const knex = strapi.db.connection;

      const ctTable = meta.get("api::lab-report.lab-report").tableName;

      let query = knex(ctTable).count("id");

      if (of === "week" || of === "month") {
        query = query.whereBetween("due", [
          knex.fn.now(),
          knex.raw(`date_trunc('${of}', current_date + interval '1 ${of}')`),
        ]);
      }

      const [data] = await query;

      return { result: data };
    },
  })
);
