"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
require("./common/appInit.js");
require("./common/openApp.js");
require("./uni_modules/uni-id-pages/init.js");
const lang_i18n = require("./lang/i18n.js");
if (!Math) {
  "./pages/list/list.js";
  "./pages/grid/grid.js";
  "./pages/list/search/search.js";
  "./pages/list/detail.js";
  "./pages/ucenter/ucenter.js";
  "./pages/uni-agree/uni-agree.js";
  "./pages/ucenter/settings/settings.js";
  "./pages/ucenter/read-news-log/read-news-log.js";
  "./uni_modules/uni-feedback/pages/opendb-feedback/opendb-feedback.js";
  "./uni_modules/uni-id-pages/pages/userinfo/userinfo.js";
  "./uni_modules/uni-id-pages/pages/userinfo/realname-verify/realname-verify.js";
  "./uni_modules/uni-id-pages/pages/login/login-withoutpwd.js";
  "./uni_modules/uni-id-pages/pages/login/login-withpwd.js";
  "./uni_modules/uni-id-pages/pages/userinfo/deactivate/deactivate.js";
  "./uni_modules/uni-id-pages/pages/userinfo/bind-mobile/bind-mobile.js";
  "./uni_modules/uni-id-pages/pages/login/login-smscode.js";
  "./uni_modules/uni-id-pages/pages/register/register.js";
  "./uni_modules/uni-id-pages/pages/retrieve/retrieve.js";
  "./uni_modules/uni-id-pages/pages/common/webview/webview.js";
  "./uni_modules/uni-id-pages/pages/userinfo/change_pwd/change_pwd.js";
  "./uni_modules/uni-id-pages/pages/register/register-by-email.js";
  "./uni_modules/uni-id-pages/pages/retrieve/retrieve-by-email.js";
  "./uni_modules/uni-id-pages/pages/userinfo/set-pwd/set-pwd.js";
}
const _sfc_main = {
  globalData: {
    searchText: "",
    appVersion: {},
    config: {},
    $i18n: {},
    $t: {}
  },
  onLaunch: function() {
    console.log("App Launch");
    this.globalData.$i18n = this.$i18n;
    this.globalData.$t = (str) => this.$t(str);
    common_vendor.index.login({
      provider: "weixin",
      onlyAuthorize: true,
      success: (res) => {
        common_vendor.index.getUserInfo({
          desc: "aaaa",
          provider: "weixin",
          success: (info) => {
            console.log("info", info);
          }
        });
        common_vendor.index.request({
          url: `https://api.weixin.qq.com/sns/jscode2session`,
          data: {
            js_code: res.code,
            appid: "wx7764a20442e33655",
            secret: "f80237a67cd001a7584af0453a909cf4",
            grant_type: "authorization_code"
          },
          success: (res2) => {
            common_vendor.index.setStorageSync("openid", res2.data.openid);
          }
        });
      }
    });
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/dwp/Documents/HBuilderProjects/ddd/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(lang_i18n.i18n);
  return { app };
}
createApp().app.mount("#app");
exports.createApp = createApp;
