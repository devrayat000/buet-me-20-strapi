module.exports = {
  routes: [
    {
      // Path defined with a URL parameter
      method: "GET",
      path: "/class-test/count",
      handler: "count-ct.count",
      config: {
        auth: false,
      },
    },
    {
      // Path defined with a URL parameter
      method: "GET",
      path: "/class-test/count/week",
      handler: "count-ct.countWeek",
      config: {
        auth: false,
      },
    },
    {
      // Path defined with a URL parameter
      method: "GET",
      path: "/class-test/count/month",
      handler: "count-ct.countMonth",
      config: {
        auth: false,
      },
    },
  ],
};
