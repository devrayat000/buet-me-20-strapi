import MenuLogo from "./extensions/logo.png";

export default {
  config: {
    menu: {
      logo: MenuLogo,
    },
    // Disable video tutorials
    tutorials: false,
    // Disable notifications about new Strapi releases
    notifications: { release: false },
    // theme: {
    //   colors: {
    //     neutral0: "#1f1f1f",
    //     neutral100: "#f6f6f9",
    //     neutral1000: "#181826",
    //     neutral150: "#eaeaef",
    //     neutral200: "#dcdce4",
    //     neutral300: "#c0c0cf",
    //     neutral400: "#a5a5ba",
    //     neutral500: "#8e8ea9",
    //     neutral600: "#666687",
    //     neutral700: "#4a4a6a",
    //     neutral800: "#32324d",
    //     neutral900: "#212134",
    //   },
    // },
  },
  bootstrap(app) {
    console.log(app);
  },
};
