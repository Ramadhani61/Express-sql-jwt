import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import "@mdi/font/css/materialdesignicons.css";
import "@fontsource/work-sans";
Vue.use(Vuetify);

const requireComponent = require.context("@/assets/icons", false, /.+\.vue$/);
const customIcons = {};
requireComponent.keys().forEach((fileName) => {
  const iconComponentConfig = requireComponent(fileName);
  const iconName = fileName.replace(/^\.\/(.*)\.\w+$/, "$1");
  customIcons[iconName] = {
    component: iconComponentConfig.default || iconComponentConfig,
  };
});
export default new Vuetify({
  icons: {
    values: customIcons,
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
