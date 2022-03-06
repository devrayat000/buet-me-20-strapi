"use strict";

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {
    // const extensionService = strapi.plugin("graphql").service("extension");
    // extensionService.use({
    //   resolvers: {
    //     Query: {
    //       classTests: {
    //         async resolve(obj, options, { context }) {
    //           console.log(obj, options, context);
    //           const cts = await strapi
    //             .controller("api::class-test.class-test")
    //             .find({});
    //           console.log(cts);
    //           return cts;
    //         },
    //       },
    //     },
    //   },
    // });
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {},
};
