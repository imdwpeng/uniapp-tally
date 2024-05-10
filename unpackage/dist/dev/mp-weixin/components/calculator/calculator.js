"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "calculator",
  props: ["price"],
  emits: ["onOk", "onChange"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    let countList = [0];
    let total = 0;
    let prevSign = 1;
    const handleClickCount = (count) => {
      if (count === "清零") {
        emits("onChange", 0);
        countList = [0];
        total = 0;
        return;
      }
      if (count === "OK") {
        emits("onOk", total + (countList.length ? (countList.join("") - 0) * prevSign : 0));
        countList = [];
        total = 0;
        return;
      }
      if (["+", "-"].includes(count)) {
        total += (countList.join("") - 0) * prevSign;
        emits("onChange", total);
        countList = [];
        prevSign = count === "-" ? -1 : 1;
        return;
      }
      if (typeof count === "number") {
        const dotIndex = countList.findIndex((item) => item === ".");
        if (dotIndex !== -1 && countList.length - dotIndex === 3)
          return;
        countList.push(count);
      }
      if (count === "." && countList[countList.length - 1] !== ".") {
        countList.push(count);
      }
      emits("onChange", countList.join("") - 0);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f([1, 2, 3, "+"], (item, k0, i0) => {
          return {
            a: common_vendor.t(item),
            b: item,
            c: common_vendor.o(($event) => handleClickCount(item), item)
          };
        }),
        b: common_vendor.f([4, 5, 6, "-"], (item, k0, i0) => {
          return {
            a: common_vendor.t(item),
            b: item,
            c: common_vendor.o(($event) => handleClickCount(item), item)
          };
        }),
        c: common_vendor.f([[7, "清零"], [8, 0], [9, "."], "OK"], (item, index, i0) => {
          return common_vendor.e({
            a: index < 3
          }, index < 3 ? {
            b: common_vendor.t(item[0]),
            c: common_vendor.o(($event) => handleClickCount(item[0]), item),
            d: common_vendor.t(item[1]),
            e: common_vendor.o(($event) => handleClickCount(item[1]), item)
          } : {
            f: common_vendor.t(item),
            g: common_vendor.o(($event) => handleClickCount(item), item)
          }, {
            h: item
          });
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e13909a5"], ["__file", "/Users/dwp/Documents/HBuilderProjects/ddd/components/calculator/calculator.vue"]]);
wx.createComponent(Component);
