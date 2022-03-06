module.exports = {
  "* /20 * * * *": async ({ strapi }) => {
    const { results } = await strapi
      .service("api::class-test.class-test")
      .find({
        fields: ["id"],
        filters: {
          $and: [
            {
              occurring: {
                $lt: new Date().toISOString(),
              },
            },
            {
              published_at: {
                $notNull: true,
              },
            },
          ],
        },
      });

    await Promise.all(
      results.map((r) => {
        console.log("unpublishing ct id: %s", r.id);
        return strapi.service("api::class-test.class-test").update(r.id, {
          published_at: null,
        });
      })
    );
  },
};
