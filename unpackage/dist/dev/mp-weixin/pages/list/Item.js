"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  _easycom_uni_dateformat2();
}
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
if (!Math) {
  (_easycom_uni_dateformat + Icon)();
}
const Icon = () => "../../components/icon/icon.js";
const _sfc_main = /* @__PURE__ */ Object.assign({
  inheritAttrs: false
}, {
  __name: "Item",
  props: ["data"],
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          date: __props.data.date,
          format: "dd日"
        }),
        b: common_vendor.t((__props.data.price / 100).toFixed(2)),
        c: common_vendor.f(__props.data.children, (item, index, i0) => {
          return common_vendor.e({
            a: "1356bf13-1-" + i0,
            b: common_vendor.p({
              fontSize: "26",
              background: "#fff",
              type: item.classify.ico,
              color: item.classify.background
            }),
            c: common_vendor.t(item.title),
            d: common_vendor.t((item.price / 100).toFixed(2)),
            e: !!item.desc
          }, !!item.desc ? {
            f: common_vendor.t(item.desc)
          } : {}, {
            g: index === 0 ? 1 : "",
            h: !!item.desc ? 1 : "",
            i: item.id
          });
        })
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1356bf13"], ["__file", "/Users/dwp/Documents/HBuilderProjects/ddd/pages/list/Item.nvue"]]);
wx.createComponent(Component);
