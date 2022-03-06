"use strict";

/**
 * count-ct service.
 */

module.exports = ({ strapi }) => ({
  async count({ of } = {}) {
    /**
     * @type {Map<string, object>}
     */
    const meta = strapi.db.metadata;
    const knex = strapi.db.connection;

    const ctTable = meta.get("api::class-test.class-test").tableName;

    let query = knex(ctTable).count("id");

    if (of === "week" || of === "month") {
      query = query.whereBetween("occurring", [
        knex.fn.now(),
        knex.raw(
          `date_trunc('${of}', current_date + interval '1 ${of}' + interval '2 day')`
        ),
      ]);
    }

    const [data] = await query;

    return { result: data };
  },
});
