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
  __name: "index",
  props: ["visible"],
  emits: ["onCancel"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const handleCancel = () => {
      emit("onCancel");
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.visible
      }, __props.visible ? {
        b: common_vendor.o(handleCancel),
        c: common_vendor.p({
          type: "closeempty",
          color: "#999"
        })
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-67708857"], ["__file", "/Users/dwp/Documents/HBuilderProjects/ddd/components/modal/index.nvue"]]);
wx.createComponent(Component);
