const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/web-framework/demo-build/", //https://router.vuejs.org/guide/essentials/history-mode.html#Example-Server-Configurations
});
