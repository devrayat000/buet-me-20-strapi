module.exports = {
  routes: [
    {
      // Path defined with a URL parameter
      method: "GET",
      path: "/lab-report/count",
      handler: "lab-report.count",
      config: {
        auth: false,
      },
    },
    {
      // Path defined with a URL parameter
      method: "GET",
      path: "/lab-report/count/week",
      handler: "lab-report.countWeek",
      config: {
        auth: false,
      },
    },
    {
      // Path defined with a URL parameter
      method: "GET",
      path: "/lab-report/count/month",
      handler: "lab-report.countMonth",
      config: {
        auth: false,
      },
    },
  ],
};
