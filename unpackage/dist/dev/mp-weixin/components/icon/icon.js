"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "icon",
  props: ["type", "color", "fontSize", "background"],
  emits: ["onClick"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(__props.type),
        b: common_vendor.p({
          fontFamily: "iconfont",
          size: 26,
          color: __props.color
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/dwp/Documents/HBuilderProjects/ddd/components/icon/icon.vue"]]);
wx.createComponent(Component);
