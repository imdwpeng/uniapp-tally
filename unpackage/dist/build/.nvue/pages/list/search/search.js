import { i as initVueI18n, r as resolveEasycom, _ as __easycom_0, s as shallowSsrRef, b as ssrRef, W as Ws, f as formatAppLog } from "../../../uni-i18n.es.js";
import { resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, normalizeStyle, renderSlot, createVNode, toDisplayString, createCommentVNode, getCurrentInstance, onMounted, normalizeClass, resolveComponent, createBlock, Fragment, renderList, withCtx } from "vue";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
const en$1 = {
  "uni-search-bar.cancel": "cancel",
  "uni-search-bar.placeholder": "Search enter content"
};
const zhHans$1 = {
  "uni-search-bar.cancel": "取消",
  "uni-search-bar.placeholder": "请输入搜索内容"
};
const zhHant$1 = {
  "uni-search-bar.cancel": "取消",
  "uni-search-bar.placeholder": "請輸入搜索內容"
};
const messages$1 = {
  en: en$1,
  "zh-Hans": zhHans$1,
  "zh-Hant": zhHant$1
};
const _style_0$4 = { "uni-searchbar": { "": { "flexDirection": "row", "position": "relative", "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10 } }, "uni-searchbar__box": { "": { "overflow": "hidden", "position": "relative", "flex": 1, "justifyContent": "center", "flexDirection": "row", "alignItems": "center", "height": 36, "paddingTop": 5, "paddingRight": 8, "paddingBottom": 5, "paddingLeft": 0 } }, "uni-searchbar__box-icon-search": { "": { "flexDirection": "row", "paddingTop": 0, "paddingRight": 8, "paddingBottom": 0, "paddingLeft": 8, "justifyContent": "center", "alignItems": "center", "color": "#B3B3B3" } }, "uni-searchbar__box-search-input": { "": { "flex": 1, "fontSize": 14, "color": "#333333" } }, "uni-searchbar__box-icon-clear": { "": { "alignItems": "center", "lineHeight": 24, "paddingLeft": 8 } }, "uni-searchbar__text-placeholder": { "": { "fontSize": 14, "color": "#B3B3B3", "marginLeft": 5 } }, "uni-searchbar__cancel": { "": { "paddingLeft": 10, "lineHeight": 36, "fontSize": 14, "color": "#333333" } } };
const {
  t: t$1
} = initVueI18n(messages$1);
const _sfc_main$5 = {
  name: "UniSearchBar",
  emits: ["input", "update:modelValue", "clear", "cancel", "confirm", "blur", "focus"],
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    radius: {
      type: [Number, String],
      default: 5
    },
    clearButton: {
      type: String,
      default: "auto"
    },
    cancelButton: {
      type: String,
      default: "auto"
    },
    cancelText: {
      type: String,
      default: ""
    },
    bgColor: {
      type: String,
      default: "#F8F8F8"
    },
    maxlength: {
      type: [Number, String],
      default: 100
    },
    value: {
      type: [Number, String],
      default: ""
    },
    modelValue: {
      type: [Number, String],
      default: ""
    },
    focus: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      show: false,
      showSync: false,
      searchVal: ""
    };
  },
  computed: {
    cancelTextI18n() {
      return this.cancelText || t$1("uni-search-bar.cancel");
    },
    placeholderText() {
      return this.placeholder || t$1("uni-search-bar.placeholder");
    }
  },
  watch: {
    modelValue: {
      immediate: true,
      handler(newVal) {
        this.searchVal = newVal;
        if (newVal) {
          this.show = true;
        }
      }
    },
    focus: {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          if (this.readonly)
            return;
          this.show = true;
          this.$nextTick(() => {
            this.showSync = true;
          });
        }
      }
    },
    searchVal(newVal, oldVal) {
      this.$emit("input", newVal);
      this.$emit("update:modelValue", newVal);
    }
  },
  methods: {
    searchClick() {
      if (this.readonly)
        return;
      if (this.show) {
        return;
      }
      this.show = true;
      this.$nextTick(() => {
        this.showSync = true;
      });
    },
    clear() {
      this.$emit("clear", {
        value: this.searchVal
      });
      this.searchVal = "";
    },
    cancel() {
      if (this.readonly)
        return;
      this.$emit("cancel", {
        value: this.searchVal
      });
      this.searchVal = "";
      this.show = false;
      this.showSync = false;
      plus.key.hideSoftKeybord();
    },
    confirm() {
      plus.key.hideSoftKeybord();
      this.$emit("confirm", {
        value: this.searchVal
      });
    },
    blur() {
      plus.key.hideSoftKeybord();
      this.$emit("blur", {
        value: this.searchVal
      });
    },
    emitFocus(e) {
      this.$emit("focus", e.detail);
    }
  }
};
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_icons = resolveEasycom(resolveDynamicComponent("uni-icons"), __easycom_0);
  return openBlock(), createElementBlock("view", {
    class: "uni-searchbar",
    renderWhole: true
  }, [
    createElementVNode("view", {
      style: normalizeStyle({ borderRadius: $props.radius + "px", backgroundColor: $props.bgColor }),
      class: "uni-searchbar__box",
      onClick: _cache[5] || (_cache[5] = (...args) => $options.searchClick && $options.searchClick(...args))
    }, [
      createElementVNode("view", { class: "uni-searchbar__box-icon-search" }, [
        renderSlot(_ctx.$slots, "searchIcon", {}, () => [
          createVNode(_component_uni_icons, {
            color: "#c0c4cc",
            size: "18",
            type: "search"
          })
        ])
      ]),
      $data.show || $data.searchVal ? (openBlock(), createElementBlock("u-input", {
        key: 0,
        focus: $data.showSync,
        disabled: $props.readonly,
        placeholder: $options.placeholderText,
        maxlength: $props.maxlength,
        class: "uni-searchbar__box-search-input",
        confirmType: "search",
        type: "text",
        modelValue: $data.searchVal,
        onInput: _cache[0] || (_cache[0] = ($event) => $data.searchVal = $event.detail.value),
        onConfirm: _cache[1] || (_cache[1] = (...args) => $options.confirm && $options.confirm(...args)),
        onBlur: _cache[2] || (_cache[2] = (...args) => $options.blur && $options.blur(...args)),
        onFocus: _cache[3] || (_cache[3] = (...args) => $options.emitFocus && $options.emitFocus(...args))
      }, null, 40, ["focus", "disabled", "placeholder", "maxlength", "modelValue"])) : (openBlock(), createElementBlock("u-text", {
        key: 1,
        class: "uni-searchbar__text-placeholder"
      }, toDisplayString($props.placeholder), 1)),
      $data.show && ($props.clearButton === "always" || $props.clearButton === "auto" && $data.searchVal !== "") && !$props.readonly ? (openBlock(), createElementBlock("view", {
        key: 2,
        class: "uni-searchbar__box-icon-clear",
        onClick: _cache[4] || (_cache[4] = (...args) => $options.clear && $options.clear(...args))
      }, [
        renderSlot(_ctx.$slots, "clearIcon", {}, () => [
          createVNode(_component_uni_icons, {
            color: "#c0c4cc",
            size: "20",
            type: "clear"
          })
        ])
      ])) : createCommentVNode("", true)
    ], 4),
    $props.cancelButton === "always" || $data.show && $props.cancelButton === "auto" ? (openBlock(), createElementBlock("u-text", {
      key: 0,
      onClick: _cache[6] || (_cache[6] = (...args) => $options.cancel && $options.cancel(...args)),
      class: "uni-searchbar__cancel"
    }, toDisplayString($options.cancelTextI18n), 1)) : createCommentVNode("", true)
  ]);
}
const __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["styles", [_style_0$4]]]);
const en = {
  "uniCloud.component.add.success": "Success",
  "uniCloud.component.update.success": "Success",
  "uniCloud.component.remove.showModal.title": "Tips",
  "uniCloud.component.remove.showModal.content": "是否删除该数据"
};
const es = {
  "uniCloud.component.add.success": "新增成功",
  "uniCloud.component.update.success": "修改成功",
  "uniCloud.component.remove.showModal.title": "提示",
  "uniCloud.component.remove.showModal.content": "是否删除该数据"
};
const fr = {
  "uniCloud.component.add.success": "新增成功",
  "uniCloud.component.update.success": "修改成功",
  "uniCloud.component.remove.showModal.title": "提示",
  "uniCloud.component.remove.showModal.content": "是否删除该数据"
};
const zhHans = {
  "uniCloud.component.add.success": "新增成功",
  "uniCloud.component.update.success": "修改成功",
  "uniCloud.component.remove.showModal.title": "提示",
  "uniCloud.component.remove.showModal.content": "是否删除该数据"
};
const zhHant = {
  "uniCloud.component.add.success": "新增成功",
  "uniCloud.component.update.success": "修改成功",
  "uniCloud.component.remove.showModal.title": "提示",
  "uniCloud.component.remove.showModal.content": "是否刪除數據"
};
const messages = {
  en,
  es,
  fr,
  "zh-Hans": zhHans,
  "zh-Hant": zhHant
};
const isArray = Array.isArray;
const { t } = initVueI18n(messages);
const events = {
  load: "load",
  error: "error"
};
const pageMode = {
  add: "add",
  replace: "replace"
};
const loadMode = {
  auto: "auto",
  onready: "onready",
  manual: "manual"
};
const attrs = [
  "pageCurrent",
  "pageSize",
  "collection",
  "action",
  "field",
  "getcount",
  "orderby",
  "where",
  "groupby",
  "groupField",
  "distinct"
];
const _sfc_main$4 = {
  name: "UniClouddb",
  setup(props) {
    const dataListRef = props.ssrKey ? props.getone ? shallowSsrRef(void 0, props.ssrKey) : ssrRef([], props.ssrKey) : props.getone ? shallowSsrRef(void 0, "SNC0FF6AnOrJdtlrVS1w1g==") : ssrRef([], "yxuWH3IPe0ZDuJvZ41qVcw==");
    const instance = getCurrentInstance();
    onMounted(() => {
      if ((!dataListRef.value || dataListRef.value.length === 0) && !props.manual && props.loadtime === loadMode.auto) {
        instance.proxy.loadData();
      }
    });
    return { dataList: dataListRef };
  },
  // 服务端serverPrefetch生命周期，用于服务端加载数据，等将来全端支持Suspense时，可以采用 Suspense + async setup 来实现一版
  async serverPrefetch() {
    if (!this.manual && this.loadtime === loadMode.auto) {
      return this.loadData();
    }
  },
  props: {
    options: {
      type: [Object, Array],
      default() {
        return {};
      }
    },
    spaceInfo: {
      type: Object,
      default() {
        return {};
      }
    },
    collection: {
      type: [String, Array],
      default: ""
    },
    action: {
      type: String,
      default: ""
    },
    field: {
      type: String,
      default: ""
    },
    orderby: {
      type: String,
      default: ""
    },
    where: {
      type: [String, Object],
      default: ""
    },
    pageData: {
      type: String,
      default: "add"
    },
    pageCurrent: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 20
    },
    getcount: {
      type: [Boolean, String],
      default: false
    },
    getone: {
      type: [Boolean, String],
      default: false
    },
    gettree: {
      type: [Boolean, String, Object],
      default: false
    },
    gettreepath: {
      type: [Boolean, String],
      default: false
    },
    startwith: {
      type: String,
      default: ""
    },
    limitlevel: {
      type: Number,
      default: 10
    },
    groupby: {
      type: String,
      default: ""
    },
    groupField: {
      type: String,
      default: ""
    },
    distinct: {
      type: [Boolean, String],
      default: false
    },
    pageIndistinct: {
      type: [Boolean, String],
      default: false
    },
    foreignKey: {
      type: String,
      default: ""
    },
    loadtime: {
      type: String,
      default: "auto"
    },
    manual: {
      type: Boolean,
      default: false
    },
    ssrKey: {
      type: [String, Number],
      default: ""
    }
  },
  data() {
    return {
      loading: false,
      hasMore: false,
      paginationInternal: {},
      errorMessage: ""
    };
  },
  computed: {
    collectionArgs() {
      return isArray(this.collection) ? this.collection : [this.collection];
    },
    isLookup() {
      return isArray(this.collection) && this.collection.length > 1 || typeof this.collection === "string" && this.collection.indexOf(",") > -1;
    },
    mainCollection() {
      if (typeof this.collection === "string") {
        return this.collection.split(",")[0];
      }
      const mainQuery = JSON.parse(JSON.stringify(this.collection[0]));
      return mainQuery.$db[0].$param[0];
    }
  },
  created() {
    this._isEnded = false;
    this.paginationInternal = {
      current: this.pageCurrent,
      size: this.pageSize,
      count: 0
    };
    this.$watch(() => {
      var al = [];
      attrs.forEach((key) => {
        al.push(this[key]);
      });
      return al;
    }, (newValue, oldValue) => {
      this.paginationInternal.size = this.pageSize;
      if (newValue[0] !== oldValue[0]) {
        this.paginationInternal.current = this.pageCurrent;
      }
      if (this.loadtime === loadMode.manual) {
        return;
      }
      let needReset = false;
      for (let i = 2; i < newValue.length; i++) {
        if (newValue[i] !== oldValue[i]) {
          needReset = true;
          break;
        }
      }
      if (needReset) {
        this.clear();
        this.reset();
      }
      this._execLoadData();
    });
  },
  methods: {
    loadData(args1, args2) {
      let callback = null;
      let clear = false;
      if (typeof args1 === "object") {
        if (args1.clear) {
          if (this.pageData === pageMode.replace) {
            this.clear();
          } else {
            clear = args1.clear;
          }
          this.reset();
        }
        if (args1.current !== void 0) {
          this.paginationInternal.current = args1.current;
        }
        if (typeof args2 === "function") {
          callback = args2;
        }
      } else if (typeof args1 === "function") {
        callback = args1;
      }
      return this._execLoadData(callback, clear);
    },
    loadMore() {
      if (this._isEnded || this.loading) {
        return;
      }
      if (this.pageData === pageMode.add) {
        this.paginationInternal.current++;
      }
      this._execLoadData();
    },
    refresh() {
      this.clear();
      this._execLoadData();
    },
    clear() {
      this._isEnded = false;
      this.dataList = [];
    },
    reset() {
      this.paginationInternal.current = 1;
    },
    add(value, {
      action,
      showToast = true,
      toastTitle,
      success,
      fail,
      complete,
      needConfirm = true,
      needLoading = true,
      loadingTitle = ""
    } = {}) {
      if (needLoading) {
        uni.showLoading({
          title: loadingTitle
        });
      }
      let db = Ws.database(this.spaceInfo);
      if (action) {
        db = db.action(action);
      }
      db.collection(this.mainCollection).add(value).then((res) => {
        success && success(res);
        if (showToast) {
          uni.showToast({
            title: toastTitle || t("uniCloud.component.add.success")
          });
        }
      }).catch((err) => {
        fail && fail(err);
        if (needConfirm) {
          uni.showModal({
            content: err.message,
            showCancel: false
          });
        }
      }).finally(() => {
        if (needLoading) {
          uni.hideLoading();
        }
        complete && complete();
      });
    },
    remove(id, {
      action,
      success,
      fail,
      complete,
      confirmTitle,
      confirmContent,
      needConfirm = true,
      needLoading = true,
      loadingTitle = ""
    } = {}) {
      if (!id || !id.length) {
        return;
      }
      if (!needConfirm) {
        this._execRemove(id, action, success, fail, complete, needConfirm, needLoading, loadingTitle);
        return;
      }
      uni.showModal({
        title: confirmTitle || t("uniCloud.component.remove.showModal.title"),
        content: confirmContent || t("uniCloud.component.remove.showModal.content"),
        showCancel: true,
        success: (res) => {
          if (!res.confirm) {
            return;
          }
          this._execRemove(id, action, success, fail, complete, needConfirm, needLoading, loadingTitle);
        }
      });
    },
    update(id, value, {
      action,
      showToast = true,
      toastTitle,
      success,
      fail,
      complete,
      needConfirm = true,
      needLoading = true,
      loadingTitle = ""
    } = {}) {
      if (needLoading) {
        uni.showLoading({
          title: loadingTitle
        });
      }
      let db = Ws.database(this.spaceInfo);
      if (action) {
        db = db.action(action);
      }
      return db.collection(this.mainCollection).doc(id).update(value).then((res) => {
        success && success(res);
        if (showToast) {
          uni.showToast({
            title: toastTitle || t("uniCloud.component.update.success")
          });
        }
      }).catch((err) => {
        fail && fail(err);
        if (needConfirm) {
          uni.showModal({
            content: err.message,
            showCancel: false
          });
        }
      }).finally(() => {
        if (needLoading) {
          uni.hideLoading();
        }
        complete && complete();
      });
    },
    getTemp(isTemp = true) {
      let db = Ws.database(this.spaceInfo);
      if (this.action) {
        db = db.action(this.action);
      }
      db = db.collection(...this.collectionArgs);
      if (this.foreignKey) {
        db = db.foreignKey(this.foreignKey);
      }
      if (!(!this.where || !Object.keys(this.where).length)) {
        db = db.where(this.where);
      }
      if (this.field) {
        db = db.field(this.field);
      }
      if (this.groupby) {
        db = db.groupBy(this.groupby);
      }
      if (this.groupField) {
        db = db.groupField(this.groupField);
      }
      if (this.distinct === true) {
        db = db.distinct();
      }
      if (this.orderby) {
        db = db.orderBy(this.orderby);
      }
      const {
        current,
        size
      } = this.paginationInternal;
      const getOptions = {};
      if (this.getcount) {
        getOptions.getCount = this.getcount;
      }
      const treeOptions = {
        limitLevel: this.limitlevel,
        startWith: this.startwith
      };
      if (this.gettree) {
        getOptions.getTree = treeOptions;
      }
      if (this.gettreepath) {
        getOptions.getTreePath = treeOptions;
      }
      db = db.skip(size * (current - 1)).limit(size);
      if (isTemp) {
        db = db.getTemp(getOptions);
        db.udb = this;
      } else {
        db = db.get(getOptions);
      }
      return db;
    },
    setResult(result) {
      if (result.code === 0) {
        this._execLoadDataSuccess(result);
      } else {
        this._execLoadDataFail(new Error(result.message));
      }
    },
    _execLoadData(callback, clear) {
      if (this.loading) {
        return;
      }
      this.loading = true;
      this.errorMessage = "";
      return this._getExec().then((res) => {
        this.loading = false;
        this._execLoadDataSuccess(res.result, callback, clear);
      }).catch((err) => {
        this.loading = false;
        this._execLoadDataFail(err, callback);
      });
    },
    _execLoadDataSuccess(result, callback, clear) {
      const {
        data,
        count
      } = result;
      this._isEnded = count !== void 0 ? this.paginationInternal.current * this.paginationInternal.size >= count : data.length < this.pageSize;
      this.hasMore = !this._isEnded;
      const data2 = this.getone ? data.length ? data[0] : void 0 : data;
      if (this.getcount) {
        this.paginationInternal.count = count;
      }
      callback && callback(data2, this._isEnded, this.paginationInternal);
      this._dispatchEvent(events.load, data2);
      if (this.getone || this.pageData === pageMode.replace) {
        this.dataList = data2;
      } else {
        if (clear) {
          this.dataList = data2;
        } else {
          this.dataList.push(...data2);
        }
      }
    },
    _execLoadDataFail(err, callback) {
      this.errorMessage = err;
      callback && callback();
      this.$emit(events.error, err);
    },
    _getExec() {
      return this.getTemp(false);
    },
    _execRemove(id, action, success, fail, complete, needConfirm, needLoading, loadingTitle) {
      if (!this.collection || !id) {
        return;
      }
      const ids = isArray(id) ? id : [id];
      if (!ids.length) {
        return;
      }
      if (needLoading) {
        uni.showLoading({
          mask: true,
          title: loadingTitle
        });
      }
      const db = Ws.database(this.spaceInfo);
      const dbCmd = db.command;
      let exec = db;
      if (action) {
        exec = exec.action(action);
      }
      exec.collection(this.mainCollection).where({
        _id: dbCmd.in(ids)
      }).remove().then((res) => {
        success && success(res.result);
        if (this.pageData === pageMode.replace) {
          this.refresh();
        } else {
          this.removeData(ids);
        }
      }).catch((err) => {
        fail && fail(err);
        if (needConfirm) {
          uni.showModal({
            content: err.message,
            showCancel: false
          });
        }
      }).finally(() => {
        if (needLoading) {
          uni.hideLoading();
        }
        complete && complete();
      });
    },
    removeData(ids) {
      const il = ids.slice(0);
      const dl = this.dataList;
      for (let i = dl.length - 1; i >= 0; i--) {
        const index = il.indexOf(dl[i]._id);
        if (index >= 0) {
          dl.splice(i, 1);
          il.splice(index, 1);
        }
      }
    },
    _dispatchEvent(type, data) {
      if (this._changeDataFunction) {
        this._changeDataFunction(data, this._isEnded, this.paginationInternal);
      } else {
        this.$emit(type, data, this._isEnded, this.paginationInternal);
      }
    }
  }
};
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", { renderWhole: true }, [
    renderSlot(_ctx.$slots, "default", {
      options: $props.options,
      data: $setup.dataList,
      pagination: $data.paginationInternal,
      loading: $data.loading,
      hasMore: $data.hasMore,
      error: $data.errorMessage
    })
  ]);
}
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
const _style_0$3 = { "uni-badge--x": { "": { "position": "relative" } }, "uni-badge--absolute": { "": { "position": "absolute" } }, "uni-badge--small": { "": { "transform": "scale(0.8)", "transformOrigin": "center center" } }, "uni-badge": { "": { "justifyContent": "center", "flexDirection": "row", "height": 20, "paddingTop": 0, "paddingRight": 4, "paddingBottom": 0, "paddingLeft": 4, "lineHeight": 18, "color": "#ffffff", "borderRadius": 100, "backgroundColor": "rgba(0,0,0,0)", "borderWidth": 1, "borderStyle": "solid", "borderColor": "#ffffff", "textAlign": "center", "fontFamily": '"Helvetica Neue", Helvetica, sans-serif', "fontSize": 12 } }, "uni-badge--info": { "": { "color": "#ffffff", "backgroundColor": "#909399" } }, "uni-badge--primary": { "": { "backgroundColor": "#2979ff" } }, "uni-badge--success": { "": { "backgroundColor": "#4cd964" } }, "uni-badge--warning": { "": { "backgroundColor": "#f0ad4e" } }, "uni-badge--error": { "": { "backgroundColor": "#dd524d" } }, "uni-badge--inverted": { "": { "paddingTop": 0, "paddingRight": 5, "paddingBottom": 0, "paddingLeft": 0, "color": "#909399" } }, "uni-badge--info-inverted": { "": { "color": "#909399", "backgroundColor": "rgba(0,0,0,0)" } }, "uni-badge--primary-inverted": { "": { "color": "#2979ff", "backgroundColor": "rgba(0,0,0,0)" } }, "uni-badge--success-inverted": { "": { "color": "#4cd964", "backgroundColor": "rgba(0,0,0,0)" } }, "uni-badge--warning-inverted": { "": { "color": "#f0ad4e", "backgroundColor": "rgba(0,0,0,0)" } }, "uni-badge--error-inverted": { "": { "color": "#dd524d", "backgroundColor": "rgba(0,0,0,0)" } } };
const _sfc_main$3 = {
  name: "UniBadge",
  emits: ["click"],
  props: {
    type: {
      type: String,
      default: "error"
    },
    inverted: {
      type: Boolean,
      default: false
    },
    isDot: {
      type: Boolean,
      default: false
    },
    maxNum: {
      type: Number,
      default: 99
    },
    absolute: {
      type: String,
      default: ""
    },
    offset: {
      type: Array,
      default() {
        return [0, 0];
      }
    },
    text: {
      type: [String, Number],
      default: ""
    },
    size: {
      type: String,
      default: "small"
    },
    customStyle: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    width() {
      return String(this.text).length * 8 + 12;
    },
    classNames() {
      const {
        inverted,
        type,
        size,
        absolute
      } = this;
      return [
        inverted ? "uni-badge--" + type + "-inverted" : "",
        "uni-badge--" + type,
        "uni-badge--" + size,
        absolute ? "uni-badge--absolute" : ""
      ].join(" ");
    },
    positionStyle() {
      if (!this.absolute)
        return {};
      let w = this.width / 2, h = 10;
      if (this.isDot) {
        w = 5;
        h = 5;
      }
      const x = `${-w + this.offset[0]}px`;
      const y = `${-h + this.offset[1]}px`;
      const whiteList = {
        rightTop: {
          right: x,
          top: y
        },
        rightBottom: {
          right: x,
          bottom: y
        },
        leftBottom: {
          left: x,
          bottom: y
        },
        leftTop: {
          left: x,
          top: y
        }
      };
      const match = whiteList[this.absolute];
      return match ? match : whiteList["rightTop"];
    },
    dotStyle() {
      if (!this.isDot)
        return {};
      return {
        width: "10px",
        minWidth: "0",
        height: "10px",
        padding: "0",
        borderRadius: "10px"
      };
    },
    displayValue() {
      const {
        isDot,
        text,
        maxNum
      } = this;
      return isDot ? "" : Number(text) > maxNum ? `${maxNum}+` : text;
    }
  },
  methods: {
    onClick() {
      this.$emit("click");
    }
  }
};
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: "uni-badge--x",
    renderWhole: true
  }, [
    renderSlot(_ctx.$slots, "default"),
    $props.text ? (openBlock(), createElementBlock("u-text", {
      key: 0,
      class: normalizeClass([$options.classNames, "uni-badge"]),
      style: normalizeStyle([$options.positionStyle, $props.customStyle, $options.dotStyle]),
      onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick())
    }, toDisplayString($options.displayValue), 7)) : createCommentVNode("", true)
  ]);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["styles", [_style_0$3]]]);
const _style_0$2 = { "uni-list-item": { "": { "fontSize": 16, "position": "relative", "justifyContent": "space-between", "alignItems": "center", "backgroundColor": "#ffffff", "flexDirection": "row" } }, "uni-list-item--disabled": { "": { "opacity": 0.3 } }, "uni-list-item--hover": { "": { "!backgroundColor": "#f1f1f1" } }, "uni-list-item__container": { "": { "position": "relative", "flexDirection": "row", "paddingTop": 12, "paddingRight": 15, "paddingBottom": 12, "paddingLeft": 15, "flex": 1, "overflow": "hidden" } }, "container--right": { "": { "paddingRight": 0 } }, "uni-list--border": { "": { "position": "absolute", "top": 0, "right": 0, "left": 0, "borderTopColor": "#e5e5e5", "borderTopStyle": "solid", "borderTopWidth": 0.5 } }, "uni-list-item__content": { "": { "paddingRight": 8, "flex": 1, "color": "#3b4144", "flexDirection": "column", "justifyContent": "space-between", "overflow": "hidden" } }, "uni-list-item__content--center": { "": { "justifyContent": "center" } }, "uni-list-item__content-title": { "": { "fontSize": 14, "color": "#3b4144", "overflow": "hidden" } }, "uni-list-item__content-note": { "": { "marginTop": "6rpx", "color": "#999999", "fontSize": 12, "overflow": "hidden" } }, "uni-list-item__extra": { "": { "flexDirection": "row", "justifyContent": "flex-end", "alignItems": "center" } }, "uni-list-item__header": { "": { "flexDirection": "row", "alignItems": "center" } }, "uni-list-item__icon": { "": { "marginRight": "18rpx", "flexDirection": "row", "justifyContent": "center", "alignItems": "center" } }, "uni-list-item__icon-img": { "": { "height": 26, "width": 26, "marginRight": 10 } }, "uni-icon-wrapper": { "": { "alignItems": "center", "paddingTop": 0, "paddingRight": 10, "paddingBottom": 0, "paddingLeft": 10 } }, "flex--direction": { "": { "flexDirection": "column" } }, "uni-list--lg": { "": { "height": 40, "width": 40 } }, "uni-list--base": { "": { "height": 26, "width": 26 } }, "uni-list--sm": { "": { "height": 20, "width": 20 } }, "uni-list-item__extra-text": { "": { "color": "#999999", "fontSize": 12 } }, "uni-ellipsis-1": { "": { "lines": 1, "textOverflow": "ellipsis" } }, "uni-ellipsis-2": { "": { "lines": 2, "textOverflow": "ellipsis" } } };
const _sfc_main$2 = {
  name: "UniListItem",
  emits: ["click", "switchChange"],
  props: {
    direction: {
      type: String,
      default: "row"
    },
    title: {
      type: String,
      default: ""
    },
    note: {
      type: String,
      default: ""
    },
    ellipsis: {
      type: [Number, String],
      default: 0
    },
    disabled: {
      type: [Boolean, String],
      default: false
    },
    clickable: {
      type: Boolean,
      default: false
    },
    showArrow: {
      type: [Boolean, String],
      default: false
    },
    link: {
      type: [Boolean, String],
      default: false
    },
    to: {
      type: String,
      default: ""
    },
    showBadge: {
      type: [Boolean, String],
      default: false
    },
    showSwitch: {
      type: [Boolean, String],
      default: false
    },
    switchChecked: {
      type: [Boolean, String],
      default: false
    },
    badgeText: {
      type: String,
      default: ""
    },
    badgeType: {
      type: String,
      default: "success"
    },
    badgeStyle: {
      type: Object,
      default() {
        return {};
      }
    },
    rightText: {
      type: String,
      default: ""
    },
    thumb: {
      type: String,
      default: ""
    },
    thumbSize: {
      type: String,
      default: "base"
    },
    showExtraIcon: {
      type: [Boolean, String],
      default: false
    },
    extraIcon: {
      type: Object,
      default() {
        return {
          type: "",
          color: "#000000",
          size: 20,
          customPrefix: ""
        };
      }
    },
    border: {
      type: Boolean,
      default: true
    },
    customStyle: {
      type: Object,
      default() {
        return {
          padding: "",
          backgroundColor: "#FFFFFF"
        };
      }
    },
    keepScrollPosition: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    "customStyle.padding": {
      handler(padding) {
        if (typeof padding == "number") {
          padding += "";
        }
        let paddingArr = padding.split(" ");
        if (paddingArr.length === 1) {
          const allPadding = paddingArr[0];
          this.padding = {
            "top": allPadding,
            "right": allPadding,
            "bottom": allPadding,
            "left": allPadding
          };
        } else if (paddingArr.length === 2) {
          const [verticalPadding, horizontalPadding] = paddingArr;
          this.padding = {
            "top": verticalPadding,
            "right": horizontalPadding,
            "bottom": verticalPadding,
            "left": horizontalPadding
          };
        } else if (paddingArr.length === 4) {
          const [topPadding, rightPadding, bottomPadding, leftPadding] = paddingArr;
          this.padding = {
            "top": topPadding,
            "right": rightPadding,
            "bottom": bottomPadding,
            "left": leftPadding
          };
        }
      },
      immediate: true
    }
  },
  // inject: ['list'],
  data() {
    return {
      isFirstChild: false,
      padding: {
        top: "",
        right: "",
        bottom: "",
        left: ""
      }
    };
  },
  mounted() {
    this.list = this.getForm();
    if (this.list) {
      if (!this.list.firstChildAppend) {
        this.list.firstChildAppend = true;
        this.isFirstChild = true;
      }
    }
  },
  methods: {
    /**
     * 获取父元素实例
     */
    getForm(name = "uniList") {
      let parent = this.$parent;
      let parentName = parent.$options.name;
      while (parentName !== name) {
        parent = parent.$parent;
        if (!parent)
          return false;
        parentName = parent.$options.name;
      }
      return parent;
    },
    onClick() {
      if (this.to !== "") {
        this.openPage();
        return;
      }
      if (this.clickable || this.link) {
        this.$emit("click", {
          data: {}
        });
      }
    },
    onSwitchChange(e) {
      this.$emit("switchChange", e.detail);
    },
    openPage() {
      if (["navigateTo", "redirectTo", "reLaunch", "switchTab"].indexOf(this.link) !== -1) {
        this.pageApi(this.link);
      } else {
        this.pageApi("navigateTo");
      }
    },
    pageApi(api) {
      let callback = {
        url: this.to,
        success: (res) => {
          this.$emit("click", {
            data: res
          });
        },
        fail: (err) => {
          this.$emit("click", {
            data: err
          });
        }
      };
      switch (api) {
        case "navigateTo":
          uni.navigateTo(callback);
          break;
        case "redirectTo":
          uni.redirectTo(callback);
          break;
        case "reLaunch":
          uni.reLaunch(callback);
          break;
        case "switchTab":
          uni.switchTab(callback);
          break;
        default:
          uni.navigateTo(callback);
      }
    }
  }
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_icons = resolveEasycom(resolveDynamicComponent("uni-icons"), __easycom_0);
  const _component_uni_badge = resolveEasycom(resolveDynamicComponent("uni-badge"), __easycom_1);
  const _component_switch = resolveComponent("switch");
  return openBlock(), createElementBlock("cell", { keepScrollPosition: $props.keepScrollPosition }, [
    createElementVNode("view", {
      class: normalizeClass([{ "uni-list-item--disabled": $props.disabled }, "uni-list-item"]),
      style: normalizeStyle({ "background-color": $props.customStyle.backgroundColor }),
      hoverClass: !$props.clickable && !$props.link || $props.disabled || $props.showSwitch ? "" : "uni-list-item--hover",
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      !$data.isFirstChild ? (openBlock(), createElementBlock("view", {
        key: 0,
        class: normalizeClass(["border--left", { "uni-list--border": $props.border }])
      }, null, 2)) : createCommentVNode("", true),
      createElementVNode("view", {
        class: normalizeClass(["uni-list-item__container", { "container--right": $props.showArrow || $props.link, "flex--direction": $props.direction === "column" }]),
        style: normalizeStyle({ paddingTop: $data.padding.top, paddingLeft: $data.padding.left, paddingRight: $data.padding.right, paddingBottom: $data.padding.bottom })
      }, [
        renderSlot(_ctx.$slots, "header", {}, () => [
          createElementVNode("view", { class: "uni-list-item__header" }, [
            $props.thumb ? (openBlock(), createElementBlock("view", {
              key: 0,
              class: "uni-list-item__icon"
            }, [
              createElementVNode("u-image", {
                src: $props.thumb,
                class: normalizeClass(["uni-list-item__icon-img", ["uni-list--" + $props.thumbSize]])
              }, null, 10, ["src"])
            ])) : $props.showExtraIcon ? (openBlock(), createElementBlock("view", {
              key: 1,
              class: "uni-list-item__icon"
            }, [
              createVNode(_component_uni_icons, {
                customPrefix: $props.extraIcon.customPrefix,
                color: $props.extraIcon.color,
                size: $props.extraIcon.size,
                type: $props.extraIcon.type
              }, null, 8, ["customPrefix", "color", "size", "type"])
            ])) : createCommentVNode("", true)
          ])
        ]),
        renderSlot(_ctx.$slots, "body", {}, () => [
          createElementVNode("view", {
            class: normalizeClass(["uni-list-item__content", { "uni-list-item__content--center": $props.thumb || $props.showExtraIcon || $props.showBadge || $props.showSwitch }])
          }, [
            $props.title ? (openBlock(), createElementBlock("u-text", {
              key: 0,
              class: normalizeClass(["uni-list-item__content-title", [$props.ellipsis !== 0 && $props.ellipsis <= 2 ? "uni-ellipsis-" + $props.ellipsis : ""]])
            }, toDisplayString($props.title), 3)) : createCommentVNode("", true),
            $props.note ? (openBlock(), createElementBlock("u-text", {
              key: 1,
              class: "uni-list-item__content-note"
            }, toDisplayString($props.note), 1)) : createCommentVNode("", true)
          ], 2)
        ]),
        renderSlot(_ctx.$slots, "footer", {}, () => [
          $props.rightText || $props.showBadge || $props.showSwitch ? (openBlock(), createElementBlock("view", {
            key: 0,
            class: normalizeClass(["uni-list-item__extra", { "flex--justify": $props.direction === "column" }])
          }, [
            $props.rightText ? (openBlock(), createElementBlock("u-text", {
              key: 0,
              class: "uni-list-item__extra-text"
            }, toDisplayString($props.rightText), 1)) : createCommentVNode("", true),
            $props.showBadge ? (openBlock(), createBlock(_component_uni_badge, {
              key: 1,
              type: $props.badgeType,
              text: $props.badgeText,
              "custom-style": $props.badgeStyle
            }, null, 8, ["type", "text", "custom-style"])) : createCommentVNode("", true),
            $props.showSwitch ? (openBlock(), createBlock(_component_switch, {
              key: 2,
              disabled: $props.disabled,
              checked: $props.switchChecked,
              onChange: $options.onSwitchChange
            }, null, 8, ["disabled", "checked", "onChange"])) : createCommentVNode("", true)
          ], 2)) : createCommentVNode("", true)
        ])
      ], 6),
      $props.showArrow || $props.link ? (openBlock(), createBlock(_component_uni_icons, {
        key: 1,
        size: 16,
        class: "uni-icon-wrapper",
        color: "#bbb",
        type: "arrowright"
      })) : createCommentVNode("", true)
    ], 14, ["hoverClass"])
  ], 8, ["keepScrollPosition"]);
}
const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["styles", [_style_0$2]]]);
const _style_0$1 = { "uni-list": { "": { "backgroundColor": "#ffffff", "position": "relative", "flexDirection": "column" } }, "uni-list--border": { "": { "position": "relative", "borderTopColor": "#e5e5e5", "borderTopStyle": "solid", "borderTopWidth": 0.5, "borderBottomColor": "#e5e5e5", "borderBottomStyle": "solid", "borderBottomWidth": 0.5, "zIndex": -1 } } };
const _sfc_main$1 = {
  name: "uniList",
  "mp-weixin": {
    options: {
      multipleSlots: false
    }
  },
  props: {
    stackFromEnd: {
      type: Boolean,
      default: false
    },
    enableBackToTop: {
      type: [Boolean, String],
      default: false
    },
    scrollY: {
      type: [Boolean, String],
      default: false
    },
    border: {
      type: Boolean,
      default: true
    },
    renderReverse: {
      type: Boolean,
      default: false
    }
  },
  // provide() {
  // 	return {
  // 		list: this
  // 	};
  // },
  created() {
    this.firstChildAppend = false;
  },
  methods: {
    loadMore(e) {
      this.$emit("scrolltolower");
    },
    scroll(e) {
      this.$emit("scroll", e);
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("list", {
    bounce: false,
    scrollable: true,
    showScrollbar: "",
    renderReverse: $props.renderReverse,
    onScroll: _cache[0] || (_cache[0] = (...args) => $options.scroll && $options.scroll(...args)),
    class: normalizeClass(["uni-list", { "uni-list--border": $props.border }]),
    enableBackToTop: $props.enableBackToTop,
    loadmoreoffset: "15"
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 42, ["renderReverse", "enableBackToTop"]);
}
const __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]]]);
const _style_0 = { "status-bar": { "": { "backgroundColor": "#ffffff" } }, "container": { "": { "flex": 1, "backgroundColor": "#f7f7f7" } }, "search-body": { "": { "backgroundColor": "#ffffff", "borderBottomRightRadius": 10, "borderBottomLeftRadius": 10 } }, "flex-center": { "": { "justifyContent": "center", "alignItems": "center" } }, "flex-row": { "": { "flexDirection": "row" } }, "uni-searchbar": { "": { "paddingLeft": 0 } }, "uni-searchbar__box": { "": { "borderWidth": 0 } }, "uni-input-placeholder": { "": { "fontSize": "28rpx" } }, "search-container": { "": { "height": 52, "flexDirection": "column", "justifyContent": "center", "alignItems": "center", "position": "relative", "backgroundColor": "#ffffff" } }, "search-container-bar": { "": { "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "position": "absolute", "top": 0, "left": 0, "right": 0 } }, "search-associative": { "": { "position": "absolute", "top": 52, "left": 0, "right": 0, "bottom": 0, "backgroundColor": "#ffffff", "marginTop": "10rpx", "paddingLeft": "10rpx", "paddingRight": "10rpx" } }, "search-icons": { "": { "paddingTop": "16rpx", "paddingRight": "16rpx", "paddingBottom": "16rpx", "paddingLeft": "16rpx" } }, "word-display": { "": { "fontSize": "26rpx", "color": "#666666" } }, "word-container": { "": { "paddingTop": "20rpx", "paddingRight": "20rpx", "paddingBottom": "20rpx", "paddingLeft": "20rpx" } }, "word-container_header": { "": { "height": "72rpx", "lineHeight": "72rpx", "flexDirection": "row", "justifyContent": "space-between", "alignItems": "center" } }, "word-container_header-text": { "": { "color": "#3e3e3e", "fontSize": "30rpx", "fontWeight": "bold" } }, "word-container_body": { "": { "flexWrap": "wrap", "flexDirection": "row" } }, "word-container_body-text": { "": { "fontSize": "26rpx", "color": "#666666", "justifyContent": "center", "alignItems": "center", "backgroundColor": "#f6f6f6", "paddingTop": "10rpx", "paddingRight": "20rpx", "paddingBottom": "10rpx", "paddingLeft": "20rpx", "marginTop": "20rpx", "marginRight": "30rpx", "marginBottom": 0, "marginLeft": 0, "borderRadius": "30rpx", "textAlign": "center" } }, "word-container_body-info": { "": { "flex": 1, "textAlign": "center", "fontSize": "26rpx", "color": "#808080", "marginTop": "20rpx" } } };
const searchLogDbName = "opendb-search-log";
const mallGoodsDbName = "opendb-news-articles";
const associativeSearchField = "title";
const associativeField = "_id,title";
const localSearchListKey = "__local_search_history";
const arrUnique = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    const curIndex = arr.indexOf(arr[i]);
    const lastIndex = arr.lastIndexOf(arr[i]);
    curIndex != lastIndex && arr.splice(lastIndex, 1);
  }
  return arr;
};
function debounce(fn, interval, isFirstAutoRun) {
  var _self = fn;
  var timer = null;
  var first = true;
  if (isFirstAutoRun) {
    _self();
  }
  return function() {
    var args = arguments;
    var _me = this;
    if (first) {
      first = false;
      _self.apply(_me, args);
    }
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function() {
      clearTimeout(timer);
      timer = null;
      _self.apply(_me, args);
    }, interval || 200);
  };
}
const _sfc_main = {
  data() {
    return {
      mallGoodsDbName,
      searchLogDbName,
      statusBarHeight: "0px",
      localSearchList: uni.getStorageSync(localSearchListKey),
      localSearchListDel: false,
      netHotListIsHide: false,
      searchText: "",
      iconColor: "#999999",
      associativeList: [],
      keyBoardPopup: false,
      hotWorld: "DCloud",
      //	搜索热词，如果没有输入即回车，则搜索热词，但是不会加入搜索记录
      focus: true,
      //	是否自动聚焦
      speechEngine: "iFly"
      //	语音识别引擎 iFly 讯飞 baidu 百度
    };
  },
  created() {
    this.db = Ws.database();
    this.searchLogDb = this.db.collection(this.searchLogDbName);
    this.mallGoodsDb = this.db.collection(this.mallGoodsDbName);
    uni.onKeyboardHeightChange((res) => {
      this.keyBoardPopup = res.height !== 0;
    });
    this.searchText = getApp().globalData.searchText;
  },
  computed: {
    associativeShow() {
      return this.searchText && this.associativeList.length;
    }
  },
  onLoad() {
    this.statusBarHeight = `${uni.getSystemInfoSync().statusBarHeight}px`;
  },
  methods: {
    clear(res) {
      formatAppLog("log", "at pages/list/search/search.nvue:172", "res: ", res);
    },
    confirm(res) {
      this.search(res.value);
    },
    cancel(res) {
      uni.hideKeyboard();
      this.searchText = "";
      this.loadList();
    },
    search(value) {
      if (!value && !this.hotWorld) {
        return;
      }
      if (value) {
        if (this.searchText !== value) {
          this.searchText = value;
        }
        this.localSearchListManage(value);
        this.searchLogDbAdd(value);
      } else if (this.hotWorld) {
        this.searchText = this.hotWorld;
      }
      uni.hideKeyboard();
      this.loadList(this.searchText);
    },
    localSearchListManage(word) {
      let list = uni.getStorageSync(localSearchListKey);
      if (list.length) {
        this.localSearchList.unshift(word);
        arrUnique(this.localSearchList);
        if (this.localSearchList.length > 10) {
          this.localSearchList.pop();
        }
      } else {
        this.localSearchList = [word];
      }
      uni.setStorageSync(localSearchListKey, this.localSearchList);
    },
    LocalSearchListClear() {
      uni.showModal({
        content: "确认清空搜索历史吗",
        confirmText: "删除",
        confirmColor: "red",
        cancelColor: "#808080",
        success: (res) => {
          if (res.confirm) {
            this.localSearchListDel = false;
            this.localSearchList = [];
            uni.removeStorageSync(localSearchListKey);
          }
        }
      });
    },
    LocalSearchlistItemClick(word, index) {
      if (this.localSearchListDel) {
        this.localSearchList.splice(index, 1);
        uni.setStorageSync(localSearchListKey, this.localSearchList);
        if (!this.localSearchList.length) {
          this.localSearchListDel = false;
        }
        return;
      }
      this.search(word);
    },
    searchHotRefresh() {
      this.$refs.udb.refresh();
    },
    speech() {
      plus.speech.startRecognize({
        engine: this.speechEngine,
        punctuation: false,
        // 标点符号 
        timeout: 1e4
      }, (word) => {
        word = word instanceof Array ? word[0] : word;
        this.search(word);
      }, (err) => {
        formatAppLog("error", "at pages/list/search/search.nvue:254", "语音识别错误: ", err);
      });
    },
    searchLogDbAdd(value) {
      this.getDeviceId().then((device_id) => {
        this.searchLogDb.add({
          // user_id: device_id,
          device_id,
          content: value,
          create_date: Date.now()
        });
      });
    },
    getDeviceId() {
      return new Promise((resolve, reject) => {
        const uniId = uni.getStorageSync("uni_id");
        if (!uniId) {
          plus.device.getInfo({
            success: (deviceInfo) => {
              resolve(deviceInfo.uuid);
            },
            fail: () => {
              resolve(uni.getSystemInfoSync().system + "_" + Math.random().toString(36).substr(2));
            }
          });
        } else {
          resolve(uniId);
        }
      });
    },
    associativeClick(item) {
      formatAppLog("log", "at pages/list/search/search.nvue:297", "associativeClick: ", item);
      this.loadList(item.title);
    },
    loadList(text = "") {
      getApp().globalData.searchText = text;
      uni.switchTab({
        url: "/pages/list/list"
      });
    },
    backPage() {
      uni.navigateBack();
    }
  },
  watch: {
    searchText: debounce(function(value) {
      if (value) {
        this.mallGoodsDb.where({
          [associativeSearchField]: new RegExp(value, "gi")
        }).field(associativeField).get().then((res) => {
          this.associativeList = res.result.data;
        });
      } else {
        this.associativeList.length = 0;
        getApp().globalData.searchText = "";
      }
    }, 100)
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_icons = resolveEasycom(resolveDynamicComponent("uni-icons"), __easycom_0);
  const _component_uni_search_bar = resolveEasycom(resolveDynamicComponent("uni-search-bar"), __easycom_1$1);
  const _component_unicloud_db = resolveEasycom(resolveDynamicComponent("unicloud-db"), __easycom_2);
  const _component_uni_list_item = resolveEasycom(resolveDynamicComponent("uni-list-item"), __easycom_3);
  const _component_uni_list = resolveEasycom(resolveDynamicComponent("uni-list"), __easycom_4);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "container" }, [
      createElementVNode("view", { class: "search-container" }, [
        createElementVNode("view", { class: "search-container-bar" }, [
          createVNode(_component_uni_icons, {
            class: "search-icons",
            color: $data.iconColor,
            size: "22",
            type: "mic-filled",
            onClick: $options.speech
          }, null, 8, ["color", "onClick"]),
          createVNode(_component_uni_search_bar, {
            ref: "searchBar",
            style: { "flex": "1" },
            radius: "100",
            modelValue: $data.searchText,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.searchText = $event),
            focus: $data.focus,
            placeholder: $data.hotWorld,
            clearButton: "auto",
            cancelButton: "always",
            onClear: $options.clear,
            onConfirm: $options.confirm,
            onCancel: $options.cancel
          }, null, 8, ["modelValue", "focus", "placeholder", "onClear", "onConfirm", "onCancel"])
        ])
      ]),
      createElementVNode("view", { class: "search-body" }, [
        $data.localSearchList.length ? (openBlock(), createElementBlock("view", {
          key: 0,
          class: "word-container"
        }, [
          createElementVNode("view", { class: "word-container_header" }, [
            createElementVNode("u-text", { class: "word-container_header-text" }, "搜索历史"),
            !$data.localSearchListDel ? (openBlock(), createBlock(_component_uni_icons, {
              key: 0,
              onClick: _cache[1] || (_cache[1] = ($event) => $data.localSearchListDel = true),
              class: "search-icons",
              style: { "padding-right": "0" },
              color: $data.iconColor,
              size: "18",
              type: "trash"
            }, null, 8, ["color"])) : (openBlock(), createElementBlock("view", {
              key: 1,
              class: "flex-center flex-row",
              style: { "font-weight": "500", "justify-content": "space-between" }
            }, [
              createElementVNode("u-text", {
                style: { "font-size": "22rpx", "color": "#666", "padding-top": "4rpx", "padding-bottom": "4rpx", "padding-right": "20rpx" },
                onClick: _cache[2] || (_cache[2] = (...args) => $options.LocalSearchListClear && $options.LocalSearchListClear(...args))
              }, "全部删除"),
              createElementVNode("u-text", {
                style: { "font-size": "22rpx", "color": "#c0402b", "padding-top": "4rpx", "padding-bottom": "4rpx", "padding-left": "20rpx" },
                onClick: _cache[3] || (_cache[3] = ($event) => $data.localSearchListDel = false)
              }, "完成")
            ]))
          ]),
          createElementVNode("view", { class: "word-container_body" }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($data.localSearchList, (word, index) => {
              return openBlock(), createElementBlock("view", {
                class: "flex-center flex-row word-container_body-text",
                key: index,
                onClick: ($event) => $options.LocalSearchlistItemClick(word, index)
              }, [
                (openBlock(), createElementBlock("u-text", {
                  class: "word-display",
                  key: word
                }, toDisplayString(word), 1)),
                $data.localSearchListDel ? (openBlock(), createBlock(_component_uni_icons, {
                  key: 0,
                  size: "12",
                  type: "closeempty"
                })) : createCommentVNode("", true)
              ], 8, ["onClick"]);
            }), 128))
          ])
        ])) : createCommentVNode("", true),
        createElementVNode("view", { class: "word-container" }, [
          createElementVNode("view", { class: "word-container_header" }, [
            createElementVNode("view", { class: "flex-center flex-row" }, [
              createElementVNode("u-text", { class: "word-container_header-text" }, "搜索发现"),
              !$data.netHotListIsHide ? (openBlock(), createBlock(_component_uni_icons, {
                key: 0,
                class: "search-icons",
                color: $data.iconColor,
                size: "14",
                type: "reload",
                onClick: $options.searchHotRefresh
              }, null, 8, ["color", "onClick"])) : createCommentVNode("", true)
            ]),
            createVNode(_component_uni_icons, {
              class: "search-icons",
              style: { "padding-right": "0" },
              color: $data.iconColor,
              size: "18",
              type: $data.netHotListIsHide ? "eye-slash" : "eye",
              onClick: _cache[4] || (_cache[4] = ($event) => $data.netHotListIsHide = !$data.netHotListIsHide)
            }, null, 8, ["color", "type"])
          ]),
          createVNode(_component_unicloud_db, {
            ref: "udb",
            field: "content",
            collection: "opendb-search-hot",
            orderby: "create_date desc,count desc",
            "page-data": "replace",
            "page-size": 10
          }, {
            default: withCtx(({ data, loading, error, options }) => [
              loading && !$data.netHotListIsHide ? (openBlock(), createElementBlock("u-text", {
                key: 0,
                class: "word-container_body-info"
              }, "正在加载...")) : (openBlock(), createElementBlock("view", {
                key: 1,
                class: "word-container_body"
              }, [
                !$data.netHotListIsHide ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  error ? (openBlock(), createElementBlock("u-text", {
                    key: 0,
                    class: "word-container_body-info"
                  }, toDisplayString(error.message), 1)) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(data, (word, index) => {
                    return openBlock(), createElementBlock("u-text", {
                      class: "word-container_body-text",
                      key: index,
                      onClick: ($event) => $options.search(word.content)
                    }, toDisplayString(word.content), 9, ["onClick"]);
                  }), 128))
                ], 64)) : (openBlock(), createElementBlock("view", {
                  key: 1,
                  style: { "flex": "1" }
                }, [
                  createElementVNode("u-text", { class: "word-container_body-info" }, "当前搜索发现已隐藏")
                ]))
              ]))
            ]),
            _: 1
          }, 512)
        ])
      ]),
      $options.associativeShow ? (openBlock(), createElementBlock("view", {
        key: 0,
        class: "search-associative"
      }, [
        createVNode(_component_uni_list, null, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList($data.associativeList, (item, index) => {
              return openBlock(), createBlock(_component_uni_list_item, {
                key: item._id,
                ellipsis: 1,
                title: item.name,
                onClick: ($event) => $options.associativeClick(item),
                "show-extra-icon": "",
                clickable: "",
                "extra-icon": { size: 18, color: $data.iconColor, type: "search" }
              }, null, 8, ["title", "onClick", "extra-icon"]);
            }), 128))
          ]),
          _: 1
        })
      ])) : createCommentVNode("", true)
    ])
  ]);
}
const search = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export {
  search as default
};
