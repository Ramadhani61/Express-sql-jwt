const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  devServer: {
    host: "localhost",
    // allowedHosts: "all",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    },
    proxy: {
      "/avi-api": {
        target: "http://localhost:5000/",
        secure: false,
        logLevel: "debug",
        pathRewrite: {
          "^/avi-api": "",
        },
        // docs: "http://192.168.205.134:2114/management/swagger-ui/index.html#/",
      },
    },
  },
});
