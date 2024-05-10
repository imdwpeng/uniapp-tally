"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../utils/date-format.js");
if (!Array) {
  const _easycom_uni_segmented_control2 = common_vendor.resolveComponent("uni-segmented-control");
  const _easycom_uni_grid_item2 = common_vendor.resolveComponent("uni-grid-item");
  const _easycom_uni_grid2 = common_vendor.resolveComponent("uni-grid");
  const _easycom_uni_popup_dialog2 = common_vendor.resolveComponent("uni-popup-dialog");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_segmented_control2 + _easycom_uni_grid_item2 + _easycom_uni_grid2 + _easycom_uni_popup_dialog2 + _easycom_uni_popup2)();
}
const _easycom_uni_segmented_control = () => "../../uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.js";
const _easycom_uni_grid_item = () => "../../uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.js";
const _easycom_uni_grid = () => "../../uni_modules/uni-grid/components/uni-grid/uni-grid.js";
const _easycom_uni_popup_dialog = () => "../../uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_segmented_control + Icon + _easycom_uni_grid_item + _easycom_uni_grid + Calculator + _easycom_uni_popup_dialog + _easycom_uni_popup + common_vendor.unref(Modal))();
}
const Modal = () => "../../components/modal/index.js";
const Icon = () => "../../components/icon/icon.js";
const Calculator = () => "../../components/calculator/calculator.js";
const _sfc_main = {
  __name: "FormModal",
  props: ["visible", "detail", "dataSource"],
  emits: ["onCancel", "onGetClassifyList"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const props = __props;
    const db = common_vendor.Ws.database();
    const titleRef = common_vendor.ref(null);
    const descRef = common_vendor.ref(null);
    const editIcon = common_vendor.ref("");
    const data = common_vendor.reactive({
      classify: {},
      price: 0,
      billType: "expense",
      create_date: (/* @__PURE__ */ new Date()).getTime(),
      ...props.detail
    });
    const activeTab = common_vendor.computed(() => {
      return data.billType === "income" ? 0 : 1;
    });
    const date = common_vendor.computed(() => {
      return new Date(data.create_date).FormatDate();
    });
    const handleChangeTab = (e) => {
      data.billType = e.currentIndex === 0 ? "income" : "expense";
      emits("onGetClassifyList", {
        billType: data.billType
      });
    };
    const handleClickClassify = (item) => {
      data.classify = item;
    };
    const handleChangePrice = (price) => {
      data.price = price;
    };
    const handleShowTitlePopup = () => {
      titleRef.value.open();
    };
    const handleChangeTitle = (value) => {
      data.title = value;
    };
    const handleChangeDate = (e) => {
      const {
        detail: {
          value
        }
      } = e;
      data.create_date = new Date(value).getTime();
    };
    const handleShowDescPopup = () => {
      descRef.value.open();
    };
    const handleChangeDesc = (value) => {
      data.desc = value;
    };
    const handleOk = (price) => {
      data.price = price;
      db.collection("db-bills").add({
        "user_id": "首页",
        "price": data.price,
        "title": data.title,
        "desc": data.desc,
        "billType": data.billType,
        "create_date": data.create_date,
        "classify_id": data.classify._id
      });
    };
    const handleCancel = () => {
      emits("onCancel");
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(handleChangeTab),
        b: common_vendor.p({
          styleType: "text",
          current: activeTab.value,
          values: ["收入", "支出"]
        }),
        c: common_vendor.p({
          type: data.classify ? data.classify.ico : "",
          color: "#fff",
          fontSize: "30"
        }),
        d: common_vendor.t(data.title || (data.classify ? data.classify.name : "")),
        e: common_vendor.o(handleShowTitlePopup),
        f: common_vendor.t(data.price.toFixed(2)),
        g: data.classify ? data.classify.background : "",
        h: common_vendor.f(__props.dataSource, (items, index, i0) => {
          return {
            a: common_vendor.f(items, (item, k1, i1) => {
              return {
                a: "a01c3c94-5-" + i0 + "-" + i1 + "," + ("a01c3c94-4-" + i0 + "-" + i1),
                b: common_vendor.p({
                  type: item.ico,
                  color: item.background,
                  fontSize: "26"
                }),
                c: common_vendor.t(item.name),
                d: common_vendor.o(($event) => handleClickClassify(item), index),
                e: "a01c3c94-4-" + i0 + "-" + i1 + "," + ("a01c3c94-3-" + i0)
              };
            }),
            b: index,
            c: common_vendor.p({
              index
            }),
            d: "a01c3c94-3-" + i0 + ",a01c3c94-0",
            e: index,
            f: index
          };
        }),
        i: common_vendor.p({
          column: 6,
          ["show-border"]: false
        }),
        j: common_vendor.t(date.value),
        k: date.value,
        l: common_vendor.o(handleChangeDate),
        m: common_vendor.o(handleShowDescPopup),
        n: common_vendor.p({
          type: editIcon.value,
          fontSize: "26"
        }),
        o: common_vendor.o(handleOk),
        p: common_vendor.o(handleChangePrice),
        q: common_vendor.p({
          price: data.price
        }),
        r: common_vendor.o(handleChangeTitle),
        s: common_vendor.p({
          mode: "input",
          maxlength: "6",
          title: data.classify ? data.classify.name : "",
          value: data.title || (data.classify ? data.classify.name : ""),
          placeholder: data.classify ? data.classify.name : ""
        }),
        t: common_vendor.sr(titleRef, "a01c3c94-8,a01c3c94-0", {
          "k": "titleRef"
        }),
        v: common_vendor.p({
          type: "dialog"
        }),
        w: common_vendor.o(handleChangeDesc),
        x: common_vendor.p({
          mode: "input",
          maxlength: "255",
          title: "备注",
          value: data.desc,
          placeholder: "记录美好生活"
        }),
        y: common_vendor.sr(descRef, "a01c3c94-10,a01c3c94-0", {
          "k": "descRef"
        }),
        z: common_vendor.p({
          type: "dialog"
        }),
        A: common_vendor.o(handleCancel),
        B: common_vendor.p({
          visible: __props.visible
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a01c3c94"], ["__file", "/Users/dwp/Documents/HBuilderProjects/ddd/pages/list/FormModal.vue"]]);
wx.createComponent(Component);
