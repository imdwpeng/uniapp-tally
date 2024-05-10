"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_index = require("../../utils/index.js");
if (!Array) {
  const _easycom_uni_fab2 = common_vendor.resolveComponent("uni-fab");
  _easycom_uni_fab2();
}
const _easycom_uni_fab = () => "../../uni_modules/uni-fab/components/uni-fab/uni-fab.js";
if (!Math) {
  (common_vendor.unref(statusBar) + common_vendor.unref(Item) + _easycom_uni_fab + FormModal)();
}
const statusBar = () => "../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-status-bar.js";
const Item = () => "./Item.js";
const FormModal = () => "./FormModal.js";
const _sfc_main = {
  __name: "list",
  setup(__props) {
    const db = common_vendor.Ws.database();
    const dbCmd = db.command;
    common_vendor.ref(null);
    const selectedDate = common_vendor.ref(/* @__PURE__ */ new Date());
    const dataSource = common_vendor.ref([]);
    const classifyList = common_vendor.ref([]);
    const detail = common_vendor.ref({});
    const visible = common_vendor.ref(false);
    const pushClassify = (item) => {
      if (!classifyList.value[classifyList.value.length - 1] || classifyList.value[classifyList.value.length - 1].length % 24 === 0) {
        classifyList.value.push([]);
      }
      classifyList.value[classifyList.value.length - 1].push({
        ...item
      });
    };
    const getData = async () => {
      const firstDay = utils_index.getFirstDayOfMonth(selectedDate.value);
      const lastDay = utils_index.getLastDayOfMonth(selectedDate.value);
      const bills = db.collection("db-bills").where({
        create_date: dbCmd.gte(firstDay).and(dbCmd.lte(lastDay))
      }).getTemp();
      const {
        result: {
          data
        }
      } = await db.collection(bills, "db-bill-classifies").get();
      dataSource.value = [];
      data.sort((a, b) => b.create_date - a.create_date).forEach((item) => {
        const {
          create_date,
          price
        } = item;
        let len = dataSource.value.length - 1;
        const lastDateString = len !== -1 ? new Date(dataSource.value[len].date).toLocaleDateString() : "";
        const thisDateString = new Date(create_date).toLocaleDateString();
        if (len === -1 || lastDateString !== thisDateString) {
          dataSource.value.push({
            date: new Date(create_date).toLocaleDateString(),
            price: 0,
            children: []
          });
          len++;
        }
        dataSource.value[len].children.push({
          ...item,
          classify: item.classify_id[0] || {}
        });
        dataSource.value[len].price += price;
      });
    };
    const getClassifyList = async ({
      billType
    }) => {
      const {
        result: {
          data: classifies
        }
      } = await db.collection("db-bill-classifies").where(`billType=="${billType || "expense"}"`).get();
      classifyList.value = [];
      classifies.forEach((item) => {
        pushClassify({
          ...item
        });
      });
      if (JSON.stringify(detail.value) === "{}") {
        detail.value.classify = classifyList.value && classifyList.value.length > 0 ? classifyList.value[0][0] : {};
      }
    };
    const showPopup = () => {
      visible.value = true;
      common_vendor.index.hideTabBar();
    };
    const hidePopup = () => {
      visible.value = false;
      common_vendor.index.showTabBar();
    };
    common_vendor.onLoad(() => {
      getData();
      getClassifyList({
        billType: "expense"
      });
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(dataSource.value, (item, k0, i0) => {
          return {
            a: item.date,
            b: "96c6bf44-1-" + i0,
            c: common_vendor.p({
              data: item
            })
          };
        }),
        b: common_vendor.o(showPopup),
        c: visible.value
      }, visible.value ? {
        d: visible.value,
        e: common_vendor.o(hidePopup),
        f: common_vendor.o(getClassifyList),
        g: common_vendor.p({
          visible: visible.value,
          detail: detail.value,
          dataSource: classifyList.value
        })
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-96c6bf44"], ["__file", "/Users/dwp/Documents/HBuilderProjects/ddd/pages/list/list.nvue"]]);
wx.createPage(MiniProgramPage);
