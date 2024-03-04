import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import "@mdi/font/css/materialdesignicons.css";
Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi", // default - only for display purposes
  },
  theme: {
    options: { customProperties: true },
    themes: {
      light: {
        accentlightgrey: "#E6EDFF",
        primary: "#063e76",
        secondary: "#2c98e5",
        background: "#f4f8ff",
        twitter: "#1DA1F2",
        ig: "#F77737",
        fb: "#3b5998",
      },
      dark: {},
    },
  },
});
