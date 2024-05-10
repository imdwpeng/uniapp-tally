import { r as resolveEasycom, _ as __easycom_0$2, a as requireNativePlugin, f as formatAppLog, i as initVueI18n, W as Ws } from "../../uni-i18n.es.js";
import { resolveDynamicComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, createCommentVNode, Fragment, renderList, toDisplayString, createVNode, createBlock, withCtx, renderSlot, ref, computed, resolveComponent, unref, onMounted } from "vue";
import { _ as _export_sfc } from "../../_plugin-vue_export-helper.js";
const _style_0$e = { "uni-fab": { "": { "position": "fixed", "justifyContent": "center", "alignItems": "center", "zIndex": 10, "borderRadius": 45, "boxShadow": "0 1px 5px 2px rgba(0, 0, 0, 0.3)" } }, "uni-fab--active": { "": { "opacity": 1 } }, "uni-fab--leftBottom": { "": { "left": 15, "bottom": 30 } }, "uni-fab--leftTop": { "": { "left": 15, "top": 30 } }, "uni-fab--rightBottom": { "": { "right": 15, "bottom": 30 } }, "uni-fab--rightTop": { "": { "right": 15, "top": 30 } }, "uni-fab__circle": { "": { "position": "fixed", "justifyContent": "center", "alignItems": "center", "width": 55, "height": 55, "backgroundColor": "#3c3e49", "borderRadius": 45, "zIndex": 11 } }, "uni-fab__circle--leftBottom": { "": { "left": 15, "bottom": 30 } }, "uni-fab__circle--leftTop": { "": { "left": 15, "top": 30 } }, "uni-fab__circle--rightBottom": { "": { "right": 15, "bottom": 30 } }, "uni-fab__circle--rightTop": { "": { "right": 15, "top": 30 } }, "uni-fab__circle--left": { "": { "left": 0 } }, "uni-fab__circle--right": { "": { "right": 0 } }, "uni-fab__circle--top": { "": { "top": 0 } }, "uni-fab__circle--bottom": { "": { "bottom": 0 } }, "uni-fab__plus": { "": { "fontWeight": "bold" } }, "fab-circle-icon": { "": { "transform": "rotate(0deg)", "transitionProperty": "transform", "transitionDuration": 300, "fontWeight": "200" } }, "uni-fab__plus--active": { "": { "transform": "rotate(135deg)" } }, "uni-fab__content": { "": { "flexDirection": "row", "borderRadius": 55, "overflow": "hidden", "transitionProperty": "width,height", "transitionDuration": 200, "width": 55, "borderColor": "#DDDDDD", "borderWidth": "1rpx", "borderStyle": "solid" } }, "uni-fab__content--other-platform": { "": { "borderWidth": 0, "boxShadow": "0 1px 5px 2px rgba(0, 0, 0, 0.3)" } }, "uni-fab__content--left": { "": { "justifyContent": "flex-start" } }, "uni-fab__content--right": { "": { "justifyContent": "flex-end" } }, "uni-fab__content--flexDirection": { "": { "flexDirection": "column", "justifyContent": "flex-end" } }, "uni-fab__content--flexDirectionStart": { "": { "flexDirection": "column", "justifyContent": "flex-start" } }, "uni-fab__content--flexDirectionEnd": { "": { "flexDirection": "column", "justifyContent": "flex-end" } }, "uni-fab__item": { "": { "flexDirection": "column", "justifyContent": "center", "alignItems": "center", "width": 55, "height": 55, "opacity": 0, "transitionProperty": "opacity", "transitionDuration": 200 } }, "uni-fab__item--active": { "": { "opacity": 1 } }, "uni-fab__item-image": { "": { "width": 20, "height": 20, "marginBottom": 4 } }, "uni-fab__item-text": { "": { "color": "#FFFFFF", "fontSize": 12, "lineHeight": 12, "marginTop": 2 } }, "uni-fab__item--first": { "": { "width": 55 } }, "@TRANSITION": { "fab-circle-icon": { "property": "transform", "duration": 300 }, "uni-fab__content": { "property": "width,height", "duration": 200 }, "uni-fab__item": { "property": "opacity", "duration": 200 } } };
let platform = "other";
platform = uni.getSystemInfoSync().platform;
const _sfc_main$g = {
  name: "UniFab",
  emits: ["fabClick", "trigger"],
  props: {
    pattern: {
      type: Object,
      default() {
        return {};
      }
    },
    horizontal: {
      type: String,
      default: "left"
    },
    vertical: {
      type: String,
      default: "bottom"
    },
    direction: {
      type: String,
      default: "horizontal"
    },
    content: {
      type: Array,
      default() {
        return [];
      }
    },
    show: {
      type: Boolean,
      default: false
    },
    popMenu: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      fabShow: false,
      isShow: false,
      isAndroidNvue: platform === "android",
      styles: {
        color: "#3c3e49",
        selectedColor: "#007AFF",
        backgroundColor: "#fff",
        buttonColor: "#007AFF",
        iconColor: "#fff",
        icon: "plusempty"
      }
    };
  },
  computed: {
    contentWidth(e) {
      return (this.content.length + 1) * 55 + 15 + "px";
    },
    contentWidthMin() {
      return "55px";
    },
    // 动态计算宽度
    boxWidth() {
      return this.getPosition(3, "horizontal");
    },
    // 动态计算高度
    boxHeight() {
      return this.getPosition(3, "vertical");
    },
    // 计算左下位置
    leftBottom() {
      return this.getPosition(0, "left", "bottom");
    },
    // 计算右下位置
    rightBottom() {
      return this.getPosition(0, "right", "bottom");
    },
    // 计算左上位置
    leftTop() {
      return this.getPosition(0, "left", "top");
    },
    rightTop() {
      return this.getPosition(0, "right", "top");
    },
    flexDirectionStart() {
      return this.getPosition(1, "vertical", "top");
    },
    flexDirectionEnd() {
      return this.getPosition(1, "vertical", "bottom");
    },
    horizontalLeft() {
      return this.getPosition(2, "horizontal", "left");
    },
    horizontalRight() {
      return this.getPosition(2, "horizontal", "right");
    },
    // 计算 nvue bottom
    nvueBottom() {
      const safeBottom = uni.getSystemInfoSync().windowBottom;
      return 30 + safeBottom;
    }
  },
  watch: {
    pattern: {
      handler(val, oldVal) {
        this.styles = Object.assign({}, this.styles, val);
      },
      deep: true
    }
  },
  created() {
    this.isShow = this.show;
    if (this.top === 0) {
      this.fabShow = true;
    }
    this.styles = Object.assign({}, this.styles, this.pattern);
  },
  methods: {
    _onClick() {
      this.$emit("fabClick");
      if (!this.popMenu) {
        return;
      }
      this.isShow = !this.isShow;
    },
    open() {
      this.isShow = true;
    },
    close() {
      this.isShow = false;
    },
    /**
     * 按钮点击事件
     */
    _onItemClick(index, item) {
      if (!this.isShow) {
        return;
      }
      this.$emit("trigger", {
        index,
        item
      });
    },
    /**
     * 获取 位置信息
     */
    getPosition(types, paramA, paramB) {
      if (types === 0) {
        return this.horizontal === paramA && this.vertical === paramB;
      } else if (types === 1) {
        return this.direction === paramA && this.vertical === paramB;
      } else if (types === 2) {
        return this.direction === paramA && this.horizontal === paramB;
      } else {
        return this.isShow && this.direction === paramA ? this.contentWidth : this.contentWidthMin;
      }
    }
  }
};
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_icons = resolveEasycom(resolveDynamicComponent("uni-icons"), __easycom_0$2);
  return openBlock(), createElementBlock("view", {
    class: "uni-cursor-point",
    renderWhole: true
  }, [
    $props.popMenu && ($options.leftBottom || $options.rightBottom || $options.leftTop || $options.rightTop) && $props.content.length > 0 ? (openBlock(), createElementBlock("view", {
      key: 0,
      class: normalizeClass([{
        "uni-fab--leftBottom": $options.leftBottom,
        "uni-fab--rightBottom": $options.rightBottom,
        "uni-fab--leftTop": $options.leftTop,
        "uni-fab--rightTop": $options.rightTop
      }, "uni-fab"]),
      style: normalizeStyle($options.nvueBottom)
    }, [
      createElementVNode("view", {
        class: normalizeClass([{
          "uni-fab__content--left": $props.horizontal === "left",
          "uni-fab__content--right": $props.horizontal === "right",
          "uni-fab__content--flexDirection": $props.direction === "vertical",
          "uni-fab__content--flexDirectionStart": $options.flexDirectionStart,
          "uni-fab__content--flexDirectionEnd": $options.flexDirectionEnd,
          "uni-fab__content--other-platform": !$data.isAndroidNvue
        }, "uni-fab__content"]),
        style: normalizeStyle({ width: $options.boxWidth, height: $options.boxHeight, backgroundColor: $data.styles.backgroundColor }),
        elevation: "5"
      }, [
        $options.flexDirectionStart || $options.horizontalLeft ? (openBlock(), createElementBlock("view", {
          key: 0,
          class: "uni-fab__item uni-fab__item--first"
        })) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList($props.content, (item, index) => {
          return openBlock(), createElementBlock("view", {
            key: index,
            class: normalizeClass([{ "uni-fab__item--active": $data.isShow }, "uni-fab__item"]),
            onClick: ($event) => $options._onItemClick(index, item)
          }, [
            createElementVNode("u-image", {
              src: item.active ? item.selectedIconPath : item.iconPath,
              class: "uni-fab__item-image",
              mode: "aspectFit"
            }, null, 8, ["src"]),
            createElementVNode("u-text", {
              class: "uni-fab__item-text",
              style: normalizeStyle({ color: item.active ? $data.styles.selectedColor : $data.styles.color })
            }, toDisplayString(item.text), 5)
          ], 10, ["onClick"]);
        }), 128)),
        $options.flexDirectionEnd || $options.horizontalRight ? (openBlock(), createElementBlock("view", {
          key: 1,
          class: "uni-fab__item uni-fab__item--first"
        })) : createCommentVNode("", true)
      ], 6)
    ], 6)) : createCommentVNode("", true),
    createElementVNode("view", {
      class: normalizeClass([{
        "uni-fab__circle--leftBottom": $options.leftBottom,
        "uni-fab__circle--rightBottom": $options.rightBottom,
        "uni-fab__circle--leftTop": $options.leftTop,
        "uni-fab__circle--rightTop": $options.rightTop,
        "uni-fab__content--other-platform": !$data.isAndroidNvue
      }, "uni-fab__circle uni-fab__plus"]),
      style: normalizeStyle({ "background-color": $data.styles.buttonColor, "bottom": $options.nvueBottom }),
      onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
    }, [
      createVNode(_component_uni_icons, {
        class: normalizeClass(["fab-circle-icon", { "uni-fab__plus--active": $data.isShow && $props.content.length > 0 }]),
        type: $data.styles.icon,
        color: $data.styles.iconColor,
        size: "32"
      }, null, 8, ["type", "color", "class"])
    ], 6)
  ]);
}
const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$8], ["styles", [_style_0$e]]]);
const _style_0$d = { "@FONT-FACE": [{ "fontFamily": "iconfont", "src": "url('//at.alicdn.com/t/c/font_4526742_m8dyi9stoa.woff2?t=1715328107669') format('woff2'),\n		url('//at.alicdn.com/t/c/font_4526742_m8dyi9stoa.woff?t=1715328107669') format('woff'),\n		url('//at.alicdn.com/t/c/font_4526742_m8dyi9stoa.ttf?t=1715328107669') format('truetype')" }] };
const _sfc_main$f = {
  __name: "icon",
  props: ["type", "color", "fontSize", "background"],
  emits: ["onClick"],
  setup(__props, { emit: __emit }) {
    const types = {
      editor: "",
      delete: "",
      editor2: "",
      calendar: ""
    };
    return (_ctx, _cache) => {
      const _component_uni_icons = resolveEasycom(resolveDynamicComponent("uni-icons"), __easycom_0$2);
      return openBlock(), createBlock(_component_uni_icons, {
        fontFamily: "iconfont",
        size: __props.fontSize,
        color: __props.color
      }, {
        default: withCtx(() => [
          createElementVNode("u-text", null, toDisplayString(types[__props.type] || __props.type), 1)
        ]),
        _: 1
      }, 8, ["size", "color"]);
    };
  }
};
const Icon = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["styles", [_style_0$d]]]);
const _style_0$c = { "uni-status-bar": { "": { "height": 20 } } };
const _sfc_main$e = {
  name: "UniStatusBar",
  data() {
    return {
      statusBarHeight: uni.getSystemInfoSync().statusBarHeight + "px"
    };
  }
};
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    style: normalizeStyle({ height: $data.statusBarHeight }),
    class: "uni-status-bar",
    renderWhole: true
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 4);
}
const statusBar = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$7], ["styles", [_style_0$c]]]);
function pad(str, length = 2) {
  str += "";
  while (str.length < length) {
    str = "0" + str;
  }
  return str.slice(-length);
}
const parser = {
  yyyy: (dateObj) => {
    return pad(dateObj.year, 4);
  },
  yy: (dateObj) => {
    return pad(dateObj.year);
  },
  MM: (dateObj) => {
    return pad(dateObj.month);
  },
  M: (dateObj) => {
    return dateObj.month;
  },
  dd: (dateObj) => {
    return pad(dateObj.day);
  },
  d: (dateObj) => {
    return dateObj.day;
  },
  hh: (dateObj) => {
    return pad(dateObj.hour);
  },
  h: (dateObj) => {
    return dateObj.hour;
  },
  mm: (dateObj) => {
    return pad(dateObj.minute);
  },
  m: (dateObj) => {
    return dateObj.minute;
  },
  ss: (dateObj) => {
    return pad(dateObj.second);
  },
  s: (dateObj) => {
    return dateObj.second;
  },
  SSS: (dateObj) => {
    return pad(dateObj.millisecond, 3);
  },
  S: (dateObj) => {
    return dateObj.millisecond;
  }
};
function getDate(time) {
  if (time instanceof Date) {
    return time;
  }
  switch (typeof time) {
    case "string": {
      if (time.indexOf("T") > -1) {
        return new Date(time);
      }
      return new Date(time.replace(/-/g, "/"));
    }
    default:
      return new Date(time);
  }
}
function formatDate(date, format = "yyyy/MM/dd hh:mm:ss") {
  if (!date && date !== 0) {
    return "";
  }
  date = getDate(date);
  const dateObj = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
    millisecond: date.getMilliseconds()
  };
  const tokenRegExp = /yyyy|yy|MM|M|dd|d|hh|h|mm|m|ss|s|SSS|SS|S/;
  let flag = true;
  let result = format;
  while (flag) {
    flag = false;
    result = result.replace(tokenRegExp, function(matched) {
      flag = true;
      return parser[matched](dateObj);
    });
  }
  return result;
}
function friendlyDate(time, {
  locale = "zh",
  threshold = [6e4, 36e5],
  format = "yyyy/MM/dd hh:mm:ss"
}) {
  if (time === "-") {
    return time;
  }
  if (!time && time !== 0) {
    return "";
  }
  const localeText = {
    zh: {
      year: "年",
      month: "月",
      day: "天",
      hour: "小时",
      minute: "分钟",
      second: "秒",
      ago: "前",
      later: "后",
      justNow: "刚刚",
      soon: "马上",
      template: "{num}{unit}{suffix}"
    },
    en: {
      year: "year",
      month: "month",
      day: "day",
      hour: "hour",
      minute: "minute",
      second: "second",
      ago: "ago",
      later: "later",
      justNow: "just now",
      soon: "soon",
      template: "{num} {unit} {suffix}"
    }
  };
  const text = localeText[locale] || localeText.zh;
  let date = getDate(time);
  let ms = date.getTime() - Date.now();
  let absMs = Math.abs(ms);
  if (absMs < threshold[0]) {
    return ms < 0 ? text.justNow : text.soon;
  }
  if (absMs >= threshold[1]) {
    return formatDate(date, format);
  }
  let num;
  let unit;
  let suffix = text.later;
  if (ms < 0) {
    suffix = text.ago;
    ms = -ms;
  }
  const seconds = Math.floor(ms / 1e3);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);
  switch (true) {
    case years > 0:
      num = years;
      unit = text.year;
      break;
    case months > 0:
      num = months;
      unit = text.month;
      break;
    case days > 0:
      num = days;
      unit = text.day;
      break;
    case hours > 0:
      num = hours;
      unit = text.hour;
      break;
    case minutes > 0:
      num = minutes;
      unit = text.minute;
      break;
    default:
      num = seconds;
      unit = text.second;
      break;
  }
  if (locale === "en") {
    if (num === 1) {
      num = "a";
    } else {
      unit += "s";
    }
  }
  return text.template.replace(/{\s*num\s*}/g, num + "").replace(/{\s*unit\s*}/g, unit).replace(
    /{\s*suffix\s*}/g,
    suffix
  );
}
const _sfc_main$d = {
  name: "uniDateformat",
  props: {
    date: {
      type: [Object, String, Number],
      default() {
        return "-";
      }
    },
    locale: {
      type: String,
      default: "zh"
    },
    threshold: {
      type: Array,
      default() {
        return [0, 0];
      }
    },
    format: {
      type: String,
      default: "yyyy/MM/dd hh:mm:ss"
    },
    // refreshRate使用不当可能导致性能问题，谨慎使用
    refreshRate: {
      type: [Number, String],
      default: 0
    }
  },
  data() {
    return {
      refreshMark: 0
    };
  },
  computed: {
    dateShow() {
      this.refreshMark;
      return friendlyDate(this.date, {
        locale: this.locale,
        threshold: this.threshold,
        format: this.format
      });
    }
  },
  watch: {
    refreshRate: {
      handler() {
        this.setAutoRefresh();
      },
      immediate: true
    }
  },
  methods: {
    refresh() {
      this.refreshMark++;
    },
    setAutoRefresh() {
      clearInterval(this.refreshInterval);
      if (this.refreshRate) {
        this.refreshInterval = setInterval(() => {
          this.refresh();
        }, parseInt(this.refreshRate));
      }
    }
  }
};
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("u-text", null, toDisplayString($options.dateShow), 1);
}
const __easycom_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$6]]);
const nvueAnimation = requireNativePlugin("animation");
class MPAnimation {
  constructor(options, _this) {
    this.options = options;
    this.animation = uni.createAnimation({
      ...options
    });
    this.currentStepAnimates = {};
    this.next = 0;
    this.$ = _this;
  }
  _nvuePushAnimates(type, args) {
    let aniObj = this.currentStepAnimates[this.next];
    let styles = {};
    if (!aniObj) {
      styles = {
        styles: {},
        config: {}
      };
    } else {
      styles = aniObj;
    }
    if (animateTypes1.includes(type)) {
      if (!styles.styles.transform) {
        styles.styles.transform = "";
      }
      let unit = "";
      if (type === "rotate") {
        unit = "deg";
      }
      styles.styles.transform += `${type}(${args + unit}) `;
    } else {
      styles.styles[type] = `${args}`;
    }
    this.currentStepAnimates[this.next] = styles;
  }
  _animateRun(styles = {}, config = {}) {
    let ref2 = this.$.$refs["ani"].ref;
    if (!ref2)
      return;
    return new Promise((resolve, reject) => {
      nvueAnimation.transition(ref2, {
        styles,
        ...config
      }, (res) => {
        resolve();
      });
    });
  }
  _nvueNextAnimate(animates, step = 0, fn) {
    let obj = animates[step];
    if (obj) {
      let {
        styles,
        config
      } = obj;
      this._animateRun(styles, config).then(() => {
        step += 1;
        this._nvueNextAnimate(animates, step, fn);
      });
    } else {
      this.currentStepAnimates = {};
      typeof fn === "function" && fn();
      this.isEnd = true;
    }
  }
  step(config = {}) {
    this.currentStepAnimates[this.next].config = Object.assign({}, this.options, config);
    this.currentStepAnimates[this.next].styles.transformOrigin = this.currentStepAnimates[this.next].config.transformOrigin;
    this.next++;
    return this;
  }
  run(fn) {
    this.isEnd = false;
    let ref2 = this.$.$refs["ani"] && this.$.$refs["ani"].ref;
    if (!ref2)
      return;
    this._nvueNextAnimate(this.currentStepAnimates, 0, fn);
    this.next = 0;
  }
}
const animateTypes1 = [
  "matrix",
  "matrix3d",
  "rotate",
  "rotate3d",
  "rotateX",
  "rotateY",
  "rotateZ",
  "scale",
  "scale3d",
  "scaleX",
  "scaleY",
  "scaleZ",
  "skew",
  "skewX",
  "skewY",
  "translate",
  "translate3d",
  "translateX",
  "translateY",
  "translateZ"
];
const animateTypes2 = ["opacity", "backgroundColor"];
const animateTypes3 = ["width", "height", "left", "right", "top", "bottom"];
animateTypes1.concat(animateTypes2, animateTypes3).forEach((type) => {
  MPAnimation.prototype[type] = function(...args) {
    this._nvuePushAnimates(type, args);
    return this;
  };
});
function createAnimation(option, _this) {
  if (!_this)
    return;
  clearTimeout(_this.timer);
  return new MPAnimation(option, _this);
}
const _sfc_main$c = {
  name: "uniTransition",
  emits: ["click", "change"],
  props: {
    show: {
      type: Boolean,
      default: false
    },
    modeClass: {
      type: [Array, String],
      default() {
        return "fade";
      }
    },
    duration: {
      type: Number,
      default: 300
    },
    styles: {
      type: Object,
      default() {
        return {};
      }
    },
    customClass: {
      type: String,
      default: ""
    },
    onceRender: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isShow: false,
      transform: "",
      opacity: 1,
      animationData: {},
      durationTime: 300,
      config: {}
    };
  },
  watch: {
    show: {
      handler(newVal) {
        if (newVal) {
          this.open();
        } else {
          if (this.isShow) {
            this.close();
          }
        }
      },
      immediate: true
    }
  },
  computed: {
    // 生成样式数据
    stylesObject() {
      let styles = {
        ...this.styles,
        "transition-duration": this.duration / 1e3 + "s"
      };
      let transform = "";
      for (let i in styles) {
        let line = this.toLine(i);
        transform += line + ":" + styles[i] + ";";
      }
      return transform;
    },
    // 初始化动画条件
    transformStyles() {
      return "transform:" + this.transform + ";opacity:" + this.opacity + ";" + this.stylesObject;
    }
  },
  created() {
    this.config = {
      duration: this.duration,
      timingFunction: "ease",
      transformOrigin: "50% 50%",
      delay: 0
    };
    this.durationTime = this.duration;
  },
  methods: {
    /**
     *  ref 触发 初始化动画
     */
    init(obj = {}) {
      if (obj.duration) {
        this.durationTime = obj.duration;
      }
      this.animation = createAnimation(Object.assign(this.config, obj), this);
    },
    /**
     * 点击组件触发回调
     */
    onClick() {
      this.$emit("click", {
        detail: this.isShow
      });
    },
    /**
     * ref 触发 动画分组
     * @param {Object} obj
     */
    step(obj, config = {}) {
      if (!this.animation)
        return;
      for (let i in obj) {
        try {
          if (typeof obj[i] === "object") {
            this.animation[i](...obj[i]);
          } else {
            this.animation[i](obj[i]);
          }
        } catch (e) {
          formatAppLog("error", "at uni_modules/uni-transition/components/uni-transition/uni-transition.vue:148", `方法 ${i} 不存在`);
        }
      }
      this.animation.step(config);
      return this;
    },
    /**
     *  ref 触发 执行动画
     */
    run(fn) {
      if (!this.animation)
        return;
      this.animation.run(fn);
    },
    // 开始过度动画
    open() {
      clearTimeout(this.timer);
      this.transform = "";
      this.isShow = true;
      let { opacity, transform } = this.styleInit(false);
      if (typeof opacity !== "undefined") {
        this.opacity = opacity;
      }
      this.transform = transform;
      this.$nextTick(() => {
        this.timer = setTimeout(() => {
          this.animation = createAnimation(this.config, this);
          this.tranfromInit(false).step();
          this.animation.run();
          this.$emit("change", {
            detail: this.isShow
          });
        }, 20);
      });
    },
    // 关闭过度动画
    close(type) {
      if (!this.animation)
        return;
      this.tranfromInit(true).step().run(() => {
        this.isShow = false;
        this.animationData = null;
        this.animation = null;
        let { opacity, transform } = this.styleInit(false);
        this.opacity = opacity || 1;
        this.transform = transform;
        this.$emit("change", {
          detail: this.isShow
        });
      });
    },
    // 处理动画开始前的默认样式
    styleInit(type) {
      let styles = {
        transform: ""
      };
      let buildStyle = (type2, mode) => {
        if (mode === "fade") {
          styles.opacity = this.animationType(type2)[mode];
        } else {
          styles.transform += this.animationType(type2)[mode] + " ";
        }
      };
      if (typeof this.modeClass === "string") {
        buildStyle(type, this.modeClass);
      } else {
        this.modeClass.forEach((mode) => {
          buildStyle(type, mode);
        });
      }
      return styles;
    },
    // 处理内置组合动画
    tranfromInit(type) {
      let buildTranfrom = (type2, mode) => {
        let aniNum = null;
        if (mode === "fade") {
          aniNum = type2 ? 0 : 1;
        } else {
          aniNum = type2 ? "-100%" : "0";
          if (mode === "zoom-in") {
            aniNum = type2 ? 0.8 : 1;
          }
          if (mode === "zoom-out") {
            aniNum = type2 ? 1.2 : 1;
          }
          if (mode === "slide-right") {
            aniNum = type2 ? "100%" : "0";
          }
          if (mode === "slide-bottom") {
            aniNum = type2 ? "100%" : "0";
          }
        }
        this.animation[this.animationMode()[mode]](aniNum);
      };
      if (typeof this.modeClass === "string") {
        buildTranfrom(type, this.modeClass);
      } else {
        this.modeClass.forEach((mode) => {
          buildTranfrom(type, mode);
        });
      }
      return this.animation;
    },
    animationType(type) {
      return {
        fade: type ? 0 : 1,
        "slide-top": `translateY(${type ? "0" : "-100%"})`,
        "slide-right": `translateX(${type ? "0" : "100%"})`,
        "slide-bottom": `translateY(${type ? "0" : "100%"})`,
        "slide-left": `translateX(${type ? "0" : "-100%"})`,
        "zoom-in": `scaleX(${type ? 1 : 0.8}) scaleY(${type ? 1 : 0.8})`,
        "zoom-out": `scaleX(${type ? 1 : 1.2}) scaleY(${type ? 1 : 1.2})`
      };
    },
    // 内置动画类型与实际动画对应字典
    animationMode() {
      return {
        fade: "opacity",
        "slide-top": "translateY",
        "slide-right": "translateX",
        "slide-bottom": "translateY",
        "slide-left": "translateX",
        "zoom-in": "scale",
        "zoom-out": "scale"
      };
    },
    // 驼峰转中横线
    toLine(name) {
      return name.replace(/([A-Z])/g, "-$1").toLowerCase();
    }
  }
};
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return $data.isShow ? (openBlock(), createElementBlock("view", {
    key: 0,
    ref: "ani",
    animation: $data.animationData,
    class: normalizeClass($props.customClass),
    style: normalizeStyle($options.transformStyles),
    onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args)),
    renderWhole: true
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 14, ["animation"])) : createCommentVNode("", true);
}
const __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$5]]);
const popup = {
  data() {
    return {};
  },
  created() {
    this.popup = this.getParent();
  },
  methods: {
    /**
     * 获取父元素实例
     */
    getParent(name = "uniPopup") {
      let parent = this.$parent;
      let parentName = parent.$options.name;
      while (parentName !== name) {
        parent = parent.$parent;
        if (!parent)
          return false;
        parentName = parent.$options.name;
      }
      return parent;
    }
  }
};
const en = {
  "uni-popup.cancel": "cancel",
  "uni-popup.ok": "ok",
  "uni-popup.placeholder": "pleace enter",
  "uni-popup.title": "Hint",
  "uni-popup.shareTitle": "Share to"
};
const zhHans = {
  "uni-popup.cancel": "取消",
  "uni-popup.ok": "确定",
  "uni-popup.placeholder": "请输入",
  "uni-popup.title": "提示",
  "uni-popup.shareTitle": "分享到"
};
const zhHant = {
  "uni-popup.cancel": "取消",
  "uni-popup.ok": "確定",
  "uni-popup.placeholder": "請輸入",
  "uni-popup.title": "提示",
  "uni-popup.shareTitle": "分享到"
};
const messages = {
  en,
  "zh-Hans": zhHans,
  "zh-Hant": zhHant
};
const _style_0$b = { "uni-popup-dialog": { "": { "width": 300, "borderRadius": 11, "backgroundColor": "#ffffff" } }, "uni-dialog-title": { "": { "flexDirection": "row", "justifyContent": "center", "paddingTop": 25 } }, "uni-dialog-title-text": { "": { "fontSize": 16, "fontWeight": "500" } }, "uni-dialog-content": { "": { "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "paddingTop": 20, "paddingRight": 20, "paddingBottom": 20, "paddingLeft": 20 } }, "uni-dialog-content-text": { "": { "fontSize": 14, "color": "#6C6C6C" } }, "uni-dialog-button-group": { "": { "flexDirection": "row", "borderTopColor": "#f5f5f5", "borderTopStyle": "solid", "borderTopWidth": 1 } }, "uni-dialog-button": { "": { "flex": 1, "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "height": 45 } }, "uni-border-left": { "": { "borderLeftColor": "#f0f0f0", "borderLeftStyle": "solid", "borderLeftWidth": 1 } }, "uni-dialog-button-text": { "": { "fontSize": 16, "color": "#333333" } }, "uni-button-color": { "": { "color": "#007aff" } }, "uni-dialog-input": { "": { "flex": 1, "fontSize": 14, "borderWidth": 1, "borderStyle": "solid", "borderColor": "#eeeeee", "height": 40, "paddingTop": 0, "paddingRight": 10, "paddingBottom": 0, "paddingLeft": 10, "borderRadius": 5, "color": "#555555" } }, "uni-popup__success": { "": { "color": "#4cd964" } }, "uni-popup__warn": { "": { "color": "#f0ad4e" } }, "uni-popup__error": { "": { "color": "#dd524d" } }, "uni-popup__info": { "": { "color": "#909399" } } };
const {
  t
} = initVueI18n(messages);
const _sfc_main$b = {
  name: "uniPopupDialog",
  mixins: [popup],
  emits: ["confirm", "close", "update:modelValue", "input"],
  props: {
    inputType: {
      type: String,
      default: "text"
    },
    showClose: {
      type: Boolean,
      default: true
    },
    modelValue: {
      type: [Number, String],
      default: ""
    },
    placeholder: {
      type: [String, Number],
      default: ""
    },
    type: {
      type: String,
      default: "error"
    },
    mode: {
      type: String,
      default: "base"
    },
    title: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    },
    beforeClose: {
      type: Boolean,
      default: false
    },
    cancelText: {
      type: String,
      default: ""
    },
    confirmText: {
      type: String,
      default: ""
    },
    maxlength: {
      type: Number,
      default: -1
    },
    focus: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      dialogType: "error",
      val: ""
    };
  },
  computed: {
    okText() {
      return this.confirmText || t("uni-popup.ok");
    },
    closeText() {
      return this.cancelText || t("uni-popup.cancel");
    },
    placeholderText() {
      return this.placeholder || t("uni-popup.placeholder");
    },
    titleText() {
      return this.title || t("uni-popup.title");
    }
  },
  watch: {
    type(val) {
      this.dialogType = val;
    },
    mode(val) {
      if (val === "input") {
        this.dialogType = "info";
      }
    },
    value(val) {
      if (this.maxlength != -1 && this.mode === "input") {
        this.val = val.slice(0, this.maxlength);
      } else {
        this.val = val;
      }
    },
    val(val) {
      this.$emit("update:modelValue", val);
    }
  },
  created() {
    this.popup.disableMask();
    if (this.mode === "input") {
      this.dialogType = "info";
      this.val = this.value;
      this.val = this.modelValue;
    } else {
      this.dialogType = this.type;
    }
  },
  methods: {
    /**
     * 点击确认按钮
     */
    onOk() {
      if (this.mode === "input") {
        this.$emit("confirm", this.val);
      } else {
        this.$emit("confirm");
      }
      if (this.beforeClose)
        return;
      this.popup.close();
    },
    /**
     * 点击取消按钮
     */
    closeDialog() {
      this.$emit("close");
      if (this.beforeClose)
        return;
      this.popup.close();
    },
    close() {
      this.popup.close();
    }
  }
};
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: "uni-popup-dialog",
    renderWhole: true
  }, [
    createElementVNode("view", { class: "uni-dialog-title" }, [
      createElementVNode("u-text", {
        class: normalizeClass(["uni-dialog-title-text", ["uni-popup__" + $data.dialogType]])
      }, toDisplayString($options.titleText), 3)
    ]),
    $props.mode === "base" ? (openBlock(), createElementBlock("view", {
      key: 0,
      class: "uni-dialog-content"
    }, [
      renderSlot(_ctx.$slots, "default", {}, () => [
        createElementVNode("u-text", { class: "uni-dialog-content-text" }, toDisplayString($props.content), 1)
      ])
    ])) : (openBlock(), createElementBlock("view", {
      key: 1,
      class: "uni-dialog-content"
    }, [
      renderSlot(_ctx.$slots, "default", {}, () => [
        createElementVNode("u-input", {
          class: "uni-dialog-input",
          maxlength: $props.maxlength,
          modelValue: $data.val,
          onInput: _cache[0] || (_cache[0] = ($event) => $data.val = $event.detail.value),
          type: $props.inputType,
          placeholder: $options.placeholderText,
          focus: $props.focus
        }, null, 40, ["maxlength", "modelValue", "type", "placeholder", "focus"])
      ])
    ])),
    createElementVNode("view", { class: "uni-dialog-button-group" }, [
      $props.showClose ? (openBlock(), createElementBlock("view", {
        key: 0,
        class: "uni-dialog-button",
        onClick: _cache[1] || (_cache[1] = (...args) => $options.closeDialog && $options.closeDialog(...args))
      }, [
        createElementVNode("u-text", { class: "uni-dialog-button-text" }, toDisplayString($options.closeText), 1)
      ])) : createCommentVNode("", true),
      createElementVNode("view", {
        class: normalizeClass(["uni-dialog-button", $props.showClose ? "uni-border-left" : ""]),
        onClick: _cache[2] || (_cache[2] = (...args) => $options.onOk && $options.onOk(...args))
      }, [
        createElementVNode("u-text", { class: "uni-dialog-button-text uni-button-color" }, toDisplayString($options.okText), 1)
      ], 2)
    ])
  ]);
}
const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$4], ["styles", [_style_0$b]]]);
const _style_0$a = { "uni-popup": { "": { "position": "fixed" }, ".top": { "top": 0 }, ".left": { "top": 0 }, ".right": { "top": 0 } }, "uni-popup__wrapper": { ".uni-popup ": { "position": "relative" }, ".uni-popup .left": { "paddingTop": 0, "flex": 1 }, ".uni-popup .right": { "paddingTop": 0, "flex": 1 } }, "fixforpc-top": { "": { "top": 0 } } };
const _sfc_main$a = {
  name: "uniPopup",
  components: {},
  emits: ["change", "maskClick"],
  props: {
    // 开启动画
    animation: {
      type: Boolean,
      default: true
    },
    // 弹出层类型，可选值，top: 顶部弹出层；bottom：底部弹出层；center：全屏弹出层
    // message: 消息提示 ; dialog : 对话框
    type: {
      type: String,
      default: "center"
    },
    // maskClick
    isMaskClick: {
      type: Boolean,
      default: null
    },
    // TODO 2 个版本后废弃属性 ，使用 isMaskClick
    maskClick: {
      type: Boolean,
      default: null
    },
    backgroundColor: {
      type: String,
      default: "none"
    },
    safeArea: {
      type: Boolean,
      default: true
    },
    maskBackgroundColor: {
      type: String,
      default: "rgba(0, 0, 0, 0.4)"
    },
    borderRadius: {
      type: String
    }
  },
  watch: {
    /**
     * 监听type类型
     */
    type: {
      handler: function(type) {
        if (!this.config[type])
          return;
        this[this.config[type]](true);
      },
      immediate: true
    },
    isDesktop: {
      handler: function(newVal) {
        if (!this.config[newVal])
          return;
        this[this.config[this.type]](true);
      },
      immediate: true
    },
    /**
     * 监听遮罩是否可点击
     * @param {Object} val
     */
    maskClick: {
      handler: function(val) {
        this.mkclick = val;
      },
      immediate: true
    },
    isMaskClick: {
      handler: function(val) {
        this.mkclick = val;
      },
      immediate: true
    },
    // H5 下禁止底部滚动
    showPopup(show) {
    }
  },
  data() {
    return {
      duration: 300,
      ani: [],
      showPopup: false,
      showTrans: false,
      popupWidth: 0,
      popupHeight: 0,
      config: {
        top: "top",
        bottom: "bottom",
        center: "center",
        left: "left",
        right: "right",
        message: "top",
        dialog: "center",
        share: "bottom"
      },
      maskClass: {
        position: "fixed",
        bottom: 0,
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgba(0, 0, 0, 0.4)"
      },
      transClass: {
        backgroundColor: "transparent",
        borderRadius: this.borderRadius || "0",
        position: "fixed",
        left: 0,
        right: 0
      },
      maskShow: true,
      mkclick: true,
      popupstyle: "top"
    };
  },
  computed: {
    getStyles() {
      let res = { backgroundColor: this.bg };
      if (this.borderRadius || "0") {
        res = Object.assign(res, { borderRadius: this.borderRadius });
      }
      return res;
    },
    isDesktop() {
      return this.popupWidth >= 500 && this.popupHeight >= 500;
    },
    bg() {
      if (this.backgroundColor === "" || this.backgroundColor === "none") {
        return "transparent";
      }
      return this.backgroundColor;
    }
  },
  mounted() {
    const fixSize = () => {
      const {
        windowWidth,
        windowHeight,
        windowTop,
        safeArea,
        screenHeight,
        safeAreaInsets
      } = uni.getSystemInfoSync();
      this.popupWidth = windowWidth;
      this.popupHeight = windowHeight + (windowTop || 0);
      if (safeArea && this.safeArea) {
        this.safeAreaInsets = safeAreaInsets.bottom;
      } else {
        this.safeAreaInsets = 0;
      }
    };
    fixSize();
  },
  // TODO vue3
  unmounted() {
    this.setH5Visible();
  },
  activated() {
    this.setH5Visible(!this.showPopup);
  },
  deactivated() {
    this.setH5Visible(true);
  },
  created() {
    if (this.isMaskClick === null && this.maskClick === null) {
      this.mkclick = true;
    } else {
      this.mkclick = this.isMaskClick !== null ? this.isMaskClick : this.maskClick;
    }
    if (this.animation) {
      this.duration = 300;
    } else {
      this.duration = 0;
    }
    this.messageChild = null;
    this.clearPropagation = false;
    this.maskClass.backgroundColor = this.maskBackgroundColor;
  },
  methods: {
    setH5Visible(visible = true) {
    },
    /**
     * 公用方法，不显示遮罩层
     */
    closeMask() {
      this.maskShow = false;
    },
    /**
     * 公用方法，遮罩层禁止点击
     */
    disableMask() {
      this.mkclick = false;
    },
    // TODO nvue 取消冒泡
    clear(e) {
      this.clearPropagation = true;
    },
    open(direction) {
      if (this.showPopup) {
        return;
      }
      let innerType = ["top", "center", "bottom", "left", "right", "message", "dialog", "share"];
      if (!(direction && innerType.indexOf(direction) !== -1)) {
        direction = this.type;
      }
      if (!this.config[direction]) {
        formatAppLog("error", "at uni_modules/uni-popup/components/uni-popup/uni-popup.vue:298", "缺少类型：", direction);
        return;
      }
      this[this.config[direction]]();
      this.$emit("change", {
        show: true,
        type: direction
      });
    },
    close(type) {
      this.showTrans = false;
      this.$emit("change", {
        show: false,
        type: this.type
      });
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.showPopup = false;
      }, 300);
    },
    // TODO 处理冒泡事件，头条的冒泡事件有问题 ，先这样兼容
    touchstart() {
      this.clearPropagation = false;
    },
    onTap() {
      if (this.clearPropagation) {
        this.clearPropagation = false;
        return;
      }
      this.$emit("maskClick");
      if (!this.mkclick)
        return;
      this.close();
    },
    /**
     * 顶部弹出样式处理
     */
    top(type) {
      this.popupstyle = this.isDesktop ? "fixforpc-top" : "top";
      this.ani = ["slide-top"];
      this.transClass = {
        position: "fixed",
        left: 0,
        right: 0,
        backgroundColor: this.bg,
        borderRadius: this.borderRadius || "0"
      };
      if (type)
        return;
      this.showPopup = true;
      this.showTrans = true;
      this.$nextTick(() => {
        if (this.messageChild && this.type === "message") {
          this.messageChild.timerClose();
        }
      });
    },
    /**
     * 底部弹出样式处理
     */
    bottom(type) {
      this.popupstyle = "bottom";
      this.ani = ["slide-bottom"];
      this.transClass = {
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        paddingBottom: this.safeAreaInsets + "px",
        backgroundColor: this.bg,
        borderRadius: this.borderRadius || "0"
      };
      if (type)
        return;
      this.showPopup = true;
      this.showTrans = true;
    },
    /**
     * 中间弹出样式处理
     */
    center(type) {
      this.popupstyle = "center";
      this.ani = ["zoom-out", "fade"];
      this.transClass = {
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: this.borderRadius || "0"
      };
      if (type)
        return;
      this.showPopup = true;
      this.showTrans = true;
    },
    left(type) {
      this.popupstyle = "left";
      this.ani = ["slide-left"];
      this.transClass = {
        position: "fixed",
        left: 0,
        bottom: 0,
        top: 0,
        backgroundColor: this.bg,
        borderRadius: this.borderRadius || "0"
      };
      if (type)
        return;
      this.showPopup = true;
      this.showTrans = true;
    },
    right(type) {
      this.popupstyle = "right";
      this.ani = ["slide-right"];
      this.transClass = {
        position: "fixed",
        bottom: 0,
        right: 0,
        top: 0,
        backgroundColor: this.bg,
        borderRadius: this.borderRadius || "0"
      };
      if (type)
        return;
      this.showPopup = true;
      this.showTrans = true;
    }
  }
};
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uni_transition = resolveEasycom(resolveDynamicComponent("uni-transition"), __easycom_1$1);
  return $data.showPopup ? (openBlock(), createElementBlock("view", {
    key: 0,
    class: normalizeClass(["uni-popup", [$data.popupstyle, $options.isDesktop ? "fixforpc-z-index" : ""]]),
    renderWhole: true
  }, [
    createElementVNode("view", {
      onTouchstart: _cache[1] || (_cache[1] = (...args) => $options.touchstart && $options.touchstart(...args))
    }, [
      $data.maskShow ? (openBlock(), createBlock(_component_uni_transition, {
        key: "1",
        name: "mask",
        "mode-class": "fade",
        styles: $data.maskClass,
        duration: $data.duration,
        show: $data.showTrans,
        onClick: $options.onTap
      }, null, 8, ["styles", "duration", "show", "onClick"])) : createCommentVNode("", true),
      createVNode(_component_uni_transition, {
        key: "2",
        "mode-class": $data.ani,
        name: "content",
        styles: $data.transClass,
        duration: $data.duration,
        show: $data.showTrans,
        onClick: $options.onTap
      }, {
        default: withCtx(() => [
          createElementVNode("view", {
            class: normalizeClass(["uni-popup__wrapper", [$data.popupstyle]]),
            style: normalizeStyle($options.getStyles),
            onClick: _cache[0] || (_cache[0] = (...args) => $options.clear && $options.clear(...args))
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 6)
        ]),
        _: 3
      }, 8, ["mode-class", "styles", "duration", "show", "onClick"])
    ], 32)
  ], 2)) : createCommentVNode("", true);
}
const __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$3], ["styles", [_style_0$a]]]);
const _style_0$9 = { "time-line-container": { "": { "position": "relative", "fontSize": 14 } }, "time-line-header": { "": { "display": "flex", "alignItems": "center", "flexDirection": "row", "marginTop": 20, "justifyContent": "center", "color": "#6e6c6c", "fontSize": 12 } }, "time-line-item": { "": { "display": "flex", "alignItems": "center", "flexDirection": "row", "position": "relative", "justifyContent": "flex-end", "marginTop": 20, "marginBottom": 10, "height": 20 }, ".time-line-first-item": { "marginTop": 15 } }, "time-line-date": { ".time-line-header ": { "width": 100, "textAlign": "right" } }, "time-line-circle": { ".time-line-header ": { "marginTop": 0, "marginRight": 10, "marginBottom": 0, "marginLeft": 10, "width": 8, "height": 8, "borderRadius": 50, "backgroundColor": "#999999" } }, "time-line-total-price": { ".time-line-header ": { "width": 100 } }, "time-line-ico": { ".time-line-item ": { "position": "absolute", "top": 50, "left": 50, "transform": "translate(-50%, -50%)", "backgroundColor": "#ffffff" } }, "time-line-title": { ".time-line-item ": { "marginTop": 0, "marginRight": 10, "marginBottom": 0, "marginLeft": 10 } }, "time-line-price": { ".time-line-item ": { "color": "#6e6c6c" } }, "time-line-item-content": { "": { "flexDirection": "row" }, ".time-line-item-income ": { "flexDirection": "row-reverse" } }, "time-line-item-desc": { "": { "marginLeft": 10, "color": "#6e6c6c" } }, "time-line-item-income": { "": { "justifyContent": "flex-start" } } };
const _sfc_main$9 = /* @__PURE__ */ Object.assign({
  inheritAttrs: false
}, {
  __name: "Item",
  props: ["data"],
  emits: ["onEdit", "onDelete"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const deleteRef = ref(null);
    const showIndex = ref();
    const deleteId = ref();
    const toggleVisibleIcons = (index) => {
      showIndex.value = index === showIndex.value ? "" : index;
    };
    const toggleVisibleDelete = (id) => {
      showIndex.value = "";
      if (!id) {
        deleteRef.value.close();
        deleteId.value = "";
        return;
      }
      deleteRef.value.open();
      deleteId.value = id;
    };
    const handleDelete = () => {
      if (!deleteId.value)
        return;
      toggleVisibleDelete();
      emits("onDelete", deleteId.value);
    };
    const handleEdit = (params) => {
      emits("onEdit", params);
      showIndex.value = "";
    };
    return (_ctx, _cache) => {
      const _component_uni_dateformat = resolveEasycom(resolveDynamicComponent("uni-dateformat"), __easycom_1$2);
      const _component_uni_transition = resolveEasycom(resolveDynamicComponent("uni-transition"), __easycom_1$1);
      const _component_uni_popup_dialog = resolveEasycom(resolveDynamicComponent("uni-popup-dialog"), __easycom_3);
      const _component_uni_popup = resolveEasycom(resolveDynamicComponent("uni-popup"), __easycom_4);
      return openBlock(), createElementBlock(Fragment, null, [
        createElementVNode("view", { class: "time-line-container" }, [
          createElementVNode("view", { class: "time-line-header" }, [
            createVNode(_component_uni_dateformat, {
              class: "time-line-date",
              date: __props.data.date,
              format: "dd日"
            }, null, 8, ["date"]),
            createElementVNode("view", { class: "time-line-circle" }),
            createElementVNode("u-text", { class: "time-line-total-price" }, toDisplayString(__props.data.price.toFixed(2)), 1)
          ]),
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.data.children, (item, index) => {
            return openBlock(), createElementBlock("view", {
              class: normalizeClass(["time-line-item", {
                "time-line-first-item": index === 0,
                "time-line-has-desc": !!item.desc,
                "time-line-item-income": item.classify.billType === "income"
              }]),
              key: item._id
            }, [
              createVNode(Icon, {
                class: "time-line-ico",
                fontSize: "20",
                type: item.classify.ico,
                color: item.classify.background,
                onClick: ($event) => toggleVisibleIcons(index)
              }, null, 8, ["type", "color", "onClick"]),
              createVNode(_component_uni_transition, {
                "mode-class": ["fade", "slide-left"],
                show: showIndex.value === index,
                style: { position: "absolute", right: "36%", width: "24px", height: "24px" }
              }, {
                default: withCtx(() => [
                  createVNode(Icon, {
                    class: "time-line-ico",
                    fontSize: "24",
                    type: "editor",
                    color: "#0070ff",
                    onClick: ($event) => handleEdit(item)
                  }, null, 8, ["onClick"])
                ]),
                _: 2
              }, 1032, ["show"]),
              createVNode(_component_uni_transition, {
                "mode-class": ["fade", "slide-right"],
                show: showIndex.value === index,
                style: { position: "absolute", left: "34%", width: "24px", height: "24px" }
              }, {
                default: withCtx(() => [
                  createVNode(Icon, {
                    class: "time-line-ico",
                    fontSize: "24",
                    type: "delete",
                    color: "#ef0505",
                    onClick: ($event) => toggleVisibleDelete(item._id)
                  }, null, 8, ["onClick"])
                ]),
                _: 2
              }, 1032, ["show"]),
              createElementVNode("view", {
                class: "time-line-inner",
                onClick: ($event) => handleEdit(item)
              }, [
                showIndex.value !== index ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  createElementVNode("view", { class: "time-line-item-content" }, [
                    createElementVNode("u-text", { class: "time-line-title" }, toDisplayString(item.title), 1),
                    createElementVNode("u-text", { class: "time-line-price" }, toDisplayString(item.price.toFixed(2)), 1)
                  ]),
                  !!item.desc ? (openBlock(), createElementBlock("u-text", {
                    key: 0,
                    class: "time-line-item-desc"
                  }, toDisplayString(item.desc), 1)) : createCommentVNode("", true)
                ], 64)) : createCommentVNode("", true)
              ], 8, ["onClick"])
            ], 2);
          }), 128))
        ]),
        createVNode(_component_uni_popup, {
          ref_key: "deleteRef",
          ref: deleteRef,
          type: "dialog"
        }, {
          default: withCtx(() => [
            createVNode(_component_uni_popup_dialog, {
              type: "info",
              title: "提示",
              content: "确认删除？",
              cancelText: "取消",
              confirmText: "确定",
              onConfirm: handleDelete
            })
          ]),
          _: 1
        }, 512)
      ], 64);
    };
  }
});
const Item = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["styles", [_style_0$9]]]);
const _style_0$8 = { "container": { "": { "paddingTop": 10, "paddingRight": 10, "paddingBottom": 10, "paddingLeft": 10, "flexDirection": "row", "justifyContent": "space-between", "fontSize": 14, "borderBottomWidth": 1, "borderBottomStyle": "solid", "borderBottomColor": "#999999" } }, "title": { "": { "color": "#999999" }, ".balance-profit ": { "color": "#0070ff" }, ".balance-deficit ": { "color": "#ef0505" } }, "balance": { "": { "textAlign": "center" } }, "expense": { "": { "textAlign": "right" } }, "price": { "": { "fontWeight": "700" } }, "balance-profit": { "": { "color": "#0070ff" } }, "balance-deficit": { "": { "color": "#ef0505" } } };
const _sfc_main$8 = {
  __name: "Total",
  props: ["income", "expense"],
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("view", {
        class: "container",
        renderWhole: true
      }, [
        createElementVNode("view", { class: "income" }, [
          createElementVNode("u-text", { class: "title" }, "月收入"),
          createElementVNode("u-text", { class: "price" }, toDisplayString(__props.income.toFixed(2)), 1)
        ]),
        createElementVNode("view", {
          class: normalizeClass(["balance", __props.income - __props.expense > 0 ? "balance-profit" : "balance-deficit"])
        }, [
          createElementVNode("u-text", { class: "title" }, "月结余"),
          createElementVNode("u-text", { class: "price" }, toDisplayString((__props.income - __props.expense).toFixed(2)), 1)
        ], 2),
        createElementVNode("view", { class: "expense" }, [
          createElementVNode("u-text", { class: "title" }, "月支出"),
          createElementVNode("u-text", { class: "price" }, toDisplayString(__props.expense.toFixed(2)), 1)
        ])
      ]);
    };
  }
};
const Total = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["styles", [_style_0$8]]]);
const _style_0$7 = { "container": { "": { "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "height": 160 } }, "icon-arrows": { "": { "width": 35, "height": 35, "borderWidth": 1, "borderStyle": "solid", "borderColor": "#ffffff", "borderRadius": 50 } }, "date-box": { "": { "marginTop": 0, "marginRight": 40, "marginBottom": 0, "marginLeft": 40, "width": 70, "alignItems": "center", "color": "#ffffff" } }, "month": { "": { "fontSize": 30 } } };
const _sfc_main$7 = {
  __name: "SelectData",
  props: ["date"],
  emits: ["onChange"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const changeDate = (space) => {
      emits("onChange", space);
    };
    return (_ctx, _cache) => {
      const _component_uni_icons = resolveEasycom(resolveDynamicComponent("uni-icons"), __easycom_0$2);
      const _component_uni_dateformat = resolveEasycom(resolveDynamicComponent("uni-dateformat"), __easycom_1$2);
      return openBlock(), createElementBlock("view", {
        class: "container",
        renderWhole: true
      }, [
        createVNode(_component_uni_icons, {
          type: "left",
          size: "30",
          color: "#fff",
          class: "icon-arrows",
          onClick: _cache[0] || (_cache[0] = ($event) => changeDate(-1))
        }),
        createElementVNode("view", { class: "date-box" }, [
          createVNode(_component_uni_dateformat, {
            class: "month",
            date: __props.date,
            format: "M月"
          }, null, 8, ["date"]),
          createVNode(_component_uni_dateformat, {
            date: __props.date,
            format: "yyyy年"
          }, null, 8, ["date"])
        ]),
        createVNode(_component_uni_icons, {
          type: "right",
          size: "30",
          color: "#fff",
          class: "icon-arrows",
          onClick: _cache[1] || (_cache[1] = ($event) => changeDate(1))
        })
      ]);
    };
  }
};
const SelectData = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["styles", [_style_0$7]]]);
const _style_0$6 = { "segmented-control": { "": { "flexDirection": "row", "height": 36, "overflow": "hidden" } }, "segmented-control__item": { "": { "position": "relative", "flex": 1, "justifyContent": "center", "alignItems": "center" } }, "segmented-control__item--button": { "": { "borderStyle": "solid", "borderTopWidth": 1, "borderBottomWidth": 1, "borderRightWidth": 1, "borderLeftWidth": 0 } }, "segmented-control__item--button--first": { "": { "borderLeftWidth": 1, "borderTopLeftRadius": 5, "borderBottomLeftRadius": 5 } }, "segmented-control__item--button--last": { "": { "borderTopRightRadius": 5, "borderBottomRightRadius": 5 } }, "segmented-control__item--text": { "": { "borderBottomStyle": "solid", "borderBottomWidth": 2, "paddingTop": 6, "paddingRight": 0, "paddingBottom": 6, "paddingLeft": 0 } }, "segmented-control__text": { "": { "fontSize": 14, "lineHeight": 20, "textAlign": "center" } } };
const _sfc_main$6 = {
  name: "UniSegmentedControl",
  emits: ["clickItem"],
  props: {
    current: {
      type: Number,
      default: 0
    },
    values: {
      type: Array,
      default() {
        return [];
      }
    },
    activeColor: {
      type: String,
      default: "#2979FF"
    },
    styleType: {
      type: String,
      default: "button"
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  watch: {
    current(val) {
      if (val !== this.currentIndex) {
        this.currentIndex = val;
      }
    }
  },
  created() {
    this.currentIndex = this.current;
  },
  methods: {
    _onClick(index) {
      if (this.currentIndex !== index) {
        this.currentIndex = index;
        this.$emit("clickItem", {
          currentIndex: index
        });
      }
    }
  }
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: normalizeClass([[$props.styleType === "text" ? "segmented-control--text" : "segmented-control--button"], "segmented-control"]),
    style: normalizeStyle({ borderColor: $props.styleType === "text" ? "" : $props.activeColor }),
    renderWhole: true
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($props.values, (item, index) => {
      return openBlock(), createElementBlock("view", {
        class: normalizeClass([[
          $props.styleType === "text" ? "" : "segmented-control__item--button",
          index === $data.currentIndex && $props.styleType === "button" ? "segmented-control__item--button--active" : "",
          index === 0 && $props.styleType === "button" ? "segmented-control__item--button--first" : "",
          index === $props.values.length - 1 && $props.styleType === "button" ? "segmented-control__item--button--last" : ""
        ], "segmented-control__item"]),
        key: index,
        style: normalizeStyle({ backgroundColor: index === $data.currentIndex && $props.styleType === "button" ? $props.activeColor : "", borderColor: index === $data.currentIndex && $props.styleType === "text" || $props.styleType === "button" ? $props.activeColor : "transparent" }),
        onClick: ($event) => $options._onClick(index)
      }, [
        createElementVNode("view", null, [
          createElementVNode("u-text", {
            style: normalizeStyle({ color: index === $data.currentIndex ? $props.styleType === "text" ? $props.activeColor : "#fff" : $props.styleType === "text" ? "#000" : $props.activeColor }),
            class: normalizeClass(["segmented-control__text", $props.styleType === "text" && index === $data.currentIndex ? "segmented-control__item--text" : ""])
          }, toDisplayString(item), 7)
        ])
      ], 14, ["onClick"]);
    }), 128))
  ], 6);
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$2], ["styles", [_style_0$6]]]);
const _style_0$5 = { "uni-grid-item__box": { "": { "position": "relative", "flex": 1, "flexDirection": "column" } }, "uni-grid-item--border": { "": { "position": "relative", "borderBottomColor": "#D2D2D2", "borderBottomStyle": "solid", "borderBottomWidth": 0.5, "borderRightColor": "#D2D2D2", "borderRightStyle": "solid", "borderRightWidth": 0.5 } }, "uni-grid-item--border-top": { "": { "position": "relative", "borderTopColor": "#D2D2D2", "borderTopStyle": "solid", "borderTopWidth": 0.5 } }, "uni-highlight": { "": { "backgroundColor:active": "#f1f1f1" } } };
const _sfc_main$5 = {
  name: "UniGridItem",
  inject: ["grid"],
  props: {
    index: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      column: 0,
      showBorder: true,
      square: true,
      highlight: true,
      left: 0,
      top: 0,
      openNum: 2,
      width: 0,
      borderColor: "#e5e5e5"
    };
  },
  created() {
    this.column = this.grid.column;
    this.showBorder = this.grid.showBorder;
    this.square = this.grid.square;
    this.highlight = this.grid.highlight;
    this.top = this.hor === 0 ? this.grid.hor : this.hor;
    this.left = this.ver === 0 ? this.grid.ver : this.ver;
    this.borderColor = this.grid.borderColor;
    this.grid.children.push(this);
    this.width = this.grid.width;
  },
  beforeDestroy() {
    this.grid.children.forEach((item, index) => {
      if (item === this) {
        this.grid.children.splice(index, 1);
      }
    });
  },
  methods: {
    _onClick() {
      this.grid.change({
        detail: {
          index: this.index
        }
      });
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return $data.width ? (openBlock(), createElementBlock("view", {
    key: 0,
    style: normalizeStyle("width:" + $data.width + ";" + ($data.square ? "height:" + $data.width : "")),
    class: "uni-grid-item",
    renderWhole: true
  }, [
    createElementVNode("view", {
      class: normalizeClass([{ "uni-grid-item--border": $data.showBorder, "uni-grid-item--border-top": $data.showBorder && $props.index < $data.column, "uni-highlight": $data.highlight }, "uni-grid-item__box"]),
      style: normalizeStyle({ "border-right-color": $data.borderColor, "border-bottom-color": $data.borderColor, "border-top-color": $data.borderColor }),
      onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 6)
  ], 4)) : createCommentVNode("", true);
}
const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$1], ["styles", [_style_0$5]]]);
const _style_0$4 = { "uni-grid-wrap": { "": { "flex": 1, "flexDirection": "column" } }, "uni-grid": { "": { "flexDirection": "row", "flexWrap": "wrap" } }, "uni-grid--border": { "": { "position": "relative", "borderLeftColor": "#D2D2D2", "borderLeftStyle": "solid", "borderLeftWidth": 0.5 } } };
const dom = requireNativePlugin("dom");
const _sfc_main$4 = {
  name: "UniGrid",
  emits: ["change"],
  props: {
    // 每列显示个数
    column: {
      type: Number,
      default: 3
    },
    // 是否显示边框
    showBorder: {
      type: Boolean,
      default: true
    },
    // 边框颜色
    borderColor: {
      type: String,
      default: "#D2D2D2"
    },
    // 是否正方形显示,默认为 true
    square: {
      type: Boolean,
      default: true
    },
    highlight: {
      type: Boolean,
      default: true
    }
  },
  provide() {
    return {
      grid: this
    };
  },
  data() {
    const elId = `Uni_${Math.ceil(Math.random() * 1e6).toString(36)}`;
    return {
      elId,
      width: 0
    };
  },
  created() {
    this.children = [];
  },
  mounted() {
    this.$nextTick(() => {
      this.init();
    });
  },
  methods: {
    init() {
      setTimeout(() => {
        this._getSize((width) => {
          this.children.forEach((item, index) => {
            item.width = width;
          });
        });
      }, 50);
    },
    change(e) {
      this.$emit("change", e);
    },
    _getSize(fn) {
      dom.getComponentRect(this.$refs["uni-grid"], (ret) => {
        this.width = parseInt((ret.size.width - 1) / this.column) + "px";
        fn(this.width);
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("view", {
    class: "uni-grid-wrap",
    renderWhole: true
  }, [
    createElementVNode("view", {
      id: $data.elId,
      ref: "uni-grid",
      class: normalizeClass(["uni-grid", { "uni-grid--border": $props.showBorder }]),
      style: normalizeStyle({ "border-left-color": $props.borderColor })
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 14, ["id"])
  ]);
}
const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render], ["styles", [_style_0$4]]]);
const _style_0$3 = { "container": { "": { "position": "fixed", "top": 0, "left": 0, "width": 100, "height": 100, "backgroundColor": "#ffffff", "zIndex": 99 } }, "deleteIcon": { ".container ": { "position": "absolute", "top": 4, "left": 4, "zIndex": 99 } } };
const _sfc_main$3 = {
  __name: "index",
  props: ["visible"],
  emits: ["onCancel"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const handleCancel = () => {
      emit("onCancel");
    };
    return (_ctx, _cache) => {
      const _component_uni_icons = resolveEasycom(resolveDynamicComponent("uni-icons"), __easycom_0$2);
      return __props.visible ? (openBlock(), createElementBlock("view", {
        key: 0,
        class: "container",
        renderWhole: true
      }, [
        createVNode(_component_uni_icons, {
          type: "closeempty",
          class: "deleteIcon",
          color: "#999",
          onClick: handleCancel
        }),
        renderSlot(_ctx.$slots, "default")
      ])) : createCommentVNode("", true);
    };
  }
};
const Modal = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["styles", [_style_0$3]]]);
const _style_0$2 = { "countRow": { "": { "display": "flex", "flexDirection": "row", "borderTopWidth": 1, "borderTopStyle": "solid", "borderTopColor": "#ffffff" } }, "countItem": { "": { "flexBasis": 25 } }, "count": { "": { "height": 40, "lineHeight": 40, "textAlign": "center" } }, "countOk": { "": { "display": "flex", "alignItems": "center", "justifyContent": "center", "height": 100 } } };
const _sfc_main$2 = {
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
      return openBlock(), createElementBlock(Fragment, null, [
        createElementVNode("view", { class: "countRow" }, [
          (openBlock(), createElementBlock(Fragment, null, renderList([1, 2, 3, "+"], (item) => {
            return createElementVNode("view", {
              class: "countItem",
              key: item,
              onClick: ($event) => handleClickCount(item)
            }, [
              createElementVNode("view", { class: "count" }, [
                createElementVNode("u-text", null, toDisplayString(item), 1)
              ])
            ], 8, ["onClick"]);
          }), 64))
        ]),
        createElementVNode("view", { class: "countRow" }, [
          (openBlock(), createElementBlock(Fragment, null, renderList([4, 5, 6, "-"], (item) => {
            return createElementVNode("view", {
              class: "countItem",
              key: item,
              onClick: ($event) => handleClickCount(item)
            }, [
              createElementVNode("view", { class: "count" }, [
                createElementVNode("u-text", null, toDisplayString(item), 1)
              ])
            ], 8, ["onClick"]);
          }), 64))
        ]),
        createElementVNode("view", { class: "countRow" }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList([[7, "清零"], [8, 0], [9, "."], "OK"], (item, index) => {
            return openBlock(), createElementBlock("view", {
              class: "countItem",
              key: item
            }, [
              index < 3 ? (openBlock(), createElementBlock("view", { key: 0 }, [
                createElementVNode("view", {
                  class: "count",
                  onClick: ($event) => handleClickCount(item[0])
                }, [
                  createElementVNode("u-text", null, toDisplayString(item[0]), 1)
                ], 8, ["onClick"]),
                createElementVNode("view", {
                  class: "count",
                  onClick: ($event) => handleClickCount(item[1])
                }, [
                  createElementVNode("u-text", null, toDisplayString(item[1]), 1)
                ], 8, ["onClick"])
              ])) : (openBlock(), createElementBlock("view", {
                key: 1,
                class: "countOk",
                onClick: ($event) => handleClickCount(item)
              }, [
                createElementVNode("u-text", null, toDisplayString(item), 1)
              ], 8, ["onClick"]))
            ]);
          }), 128))
        ])
      ], 64);
    };
  }
};
const Calculator = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["styles", [_style_0$2]]]);
Date.prototype.Format = function(fmt = "yyyy-MM-dd hh:mm:ss") {
  const o = {
    "M+": this.getMonth() + 1,
    //月份
    "d+": this.getDate(),
    //日
    "h+": this.getHours(),
    //小时
    "m+": this.getMinutes(),
    //分
    "s+": this.getSeconds(),
    //秒
    "q+": Math.floor((this.getMonth() + 3) / 3),
    //季度
    S: this.getMilliseconds()
    //毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (const k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }
  }
  return fmt;
};
Date.prototype.FormatDateTime = function() {
  return this.Format("yyyy-MM-dd hh:mm:ss");
};
Date.prototype.FormatDate = function() {
  return this.Format("yyyy-MM-dd");
};
Date.prototype.FormatTime = function() {
  return this.Format("hh:mm:ss");
};
Date.prototype.Short = function() {
  const dateTimeStamp = this.getTime();
  const minute = 1e3 * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;
  const month = day * 30;
  const now = (/* @__PURE__ */ new Date()).getTime();
  const diffValue = now - dateTimeStamp;
  if (diffValue < 0) {
    return;
  }
  const minC = parseInt(diffValue / minute);
  const hourC = parseInt(diffValue / hour);
  const dayC = parseInt(diffValue / day);
  const weekC = parseInt(diffValue / week);
  const monthC = parseInt(diffValue / month);
  let result;
  if (monthC >= 1 && monthC <= 3) {
    result = " " + monthC + "月前";
  } else if (weekC >= 1 && weekC <= 3) {
    result = " " + weekC + "周前";
  } else if (dayC >= 1 && dayC <= 6) {
    result = " " + dayC + "天前";
  } else if (hourC >= 1 && hourC <= 23) {
    result = " " + hourC + "小时前";
  } else if (minC >= 1 && minC <= 59) {
    result = " " + minC + "分钟前";
  } else if (diffValue >= 0 && diffValue <= minute) {
    result = "刚刚";
  } else {
    const datetime = /* @__PURE__ */ new Date();
    datetime.setTime(dateTimeStamp);
    const Nyear = datetime.getFullYear();
    const Nmonth = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
    const Ndate = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
    result = Nyear + "-" + Nmonth + "-" + Ndate;
  }
  return result;
};
Date.prototype.MonthFirstDay = function(date = null, fmt = "yyyy-MM-dd") {
  let nowdays = /* @__PURE__ */ new Date();
  if (date) {
    nowdays = new Date(date);
  }
  var year = nowdays.getFullYear();
  var month = nowdays.getMonth() + 1;
  if (month == 0) {
    month = 12;
    year = year - 1;
  }
  if (month < 10) {
    month = "0" + month;
  }
  let startDate = year + "-" + month + "-01 00:00:00";
  return new Date(startDate).Format(fmt);
};
Date.prototype.MonthLastDay = function(date = null, fmt = "yyyy-MM-dd") {
  let nowdays = /* @__PURE__ */ new Date();
  if (date) {
    nowdays = new Date(date);
  }
  var year = nowdays.getFullYear();
  var month = nowdays.getMonth() + 1;
  if (month == 0) {
    month = 12;
    year = year - 1;
  }
  if (month < 10) {
    month = "0" + month;
  }
  var myDate = new Date(year, month, 0);
  let endDate = year + "-" + month + "-" + myDate.getDate() + " 23:59:59";
  return new Date(endDate).Format(fmt);
};
const _style_0$1 = { "modal": { "": { "display": "flex", "flexDirection": "column" } }, "popupHeader": { "": { "position": "relative", "display": "flex", "alignItems": "center", "justifyContent": "center" } }, "popupTabs": { ".popupHeader ": { "width": 100 } }, "popupContent": { "": { "flexGrow": 1 } }, "content": { ".popupContent ": { "paddingTop": 0, "paddingRight": 10, "paddingBottom": 0, "paddingLeft": 10, "marginBottom": 10, "display": "flex", "alignItems": "center", "justifyContent": "center", "flexDirection": "row", "height": 50, "color": "#ffffff" } }, "contentLeft": { ".popupContent ": { "flexGrow": 1, "flexDirection": "row", "alignItems": "center" } }, "contentIcon": { ".popupContent ": { "marginRight": 10 } }, "popupGridItem": { ".popupContent ": { "width": 100, "height": 100, "alignItems": "center", "justifyContent": "center" } }, "calssifyTitle": { ".popupContent ": { "fontSize": 12 } }, "popupFooter": { "": { "backgroundColor": "#e5e5e5" } }, "footerTop": { ".popupFooter ": { "paddingTop": 0, "paddingRight": 20, "paddingBottom": 0, "paddingLeft": 20, "display": "flex", "flexDirection": "row", "alignItems": "center", "justifyContent": "space-between", "height": 38 } }, "editIcon": { ".popupFooter .footerTop ": { "borderWidth": 0, "borderStyle": "solid", "borderColor": "#000000" } } };
const _sfc_main$1 = {
  __name: "FormModal",
  props: ["visible", "detail", "dataSource"],
  emits: ["onOk", "onCancel", "onGetClassifyList"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const props = __props;
    Ws.database();
    const titleRef = ref(null);
    const descRef = ref(null);
    const data = ref({
      classify: props.detail.classify ? props.detail.classify : props.dataSource && props.dataSource.length > 0 ? props.dataSource[0][0] : {},
      price: 0,
      billType: "expense",
      create_date: (/* @__PURE__ */ new Date()).getTime(),
      ...props.detail
    });
    const activeTab = computed(() => {
      return data.value.billType === "income" ? 0 : 1;
    });
    const date = computed(() => {
      return new Date(data.value.create_date).FormatDate();
    });
    const handleChangeTab = (e) => {
      data.value.billType = e.currentIndex === 0 ? "income" : "expense";
      emits("onGetClassifyList", {
        billType: data.value.billType
      });
    };
    const handleClickClassify = (item) => {
      data.value.classify = item;
    };
    const handleChangePrice = (price) => {
      data.value.price = price;
    };
    const handleShowTitlePopup = () => {
      titleRef.value.open();
    };
    const handleChangeTitle = (value) => {
      data.value.title = value;
    };
    const handleChangeDate = (e) => {
      const {
        detail: { value }
      } = e;
      data.value.create_date = new Date(value).getTime();
    };
    const handleShowDescPopup = () => {
      descRef.value.open();
    };
    const handleChangeDesc = (value) => {
      data.value.desc = value;
    };
    const handleOk = (price) => {
      data.value.price = price;
      if (!data.value.title) {
        data.value.title = data.classify.name || "";
      }
      emits("onOk", data.value);
    };
    const handleCancel = () => {
      emits("onCancel");
    };
    return (_ctx, _cache) => {
      const _component_uni_segmented_control = resolveEasycom(resolveDynamicComponent("uni-segmented-control"), __easycom_0);
      const _component_uni_grid_item = resolveEasycom(resolveDynamicComponent("uni-grid-item"), __easycom_1);
      const _component_uni_grid = resolveEasycom(resolveDynamicComponent("uni-grid"), __easycom_2);
      const _component_swiper_item = resolveComponent("swiper-item");
      const _component_swiper = resolveComponent("swiper");
      const _component_picker = resolveComponent("picker");
      const _component_uni_popup_dialog = resolveEasycom(resolveDynamicComponent("uni-popup-dialog"), __easycom_3);
      const _component_uni_popup = resolveEasycom(resolveDynamicComponent("uni-popup"), __easycom_4);
      return openBlock(), createBlock(unref(Modal), {
        class: "modal",
        visible: __props.visible,
        onOnCancel: handleCancel
      }, {
        default: withCtx(() => [
          createElementVNode("view", { class: "popupHeader" }, [
            createVNode(_component_uni_segmented_control, {
              class: "popupTabs",
              styleType: "text",
              current: activeTab.value,
              values: ["收入", "支出"],
              onClickItem: handleChangeTab
            }, null, 8, ["current"])
          ]),
          createVNode(_component_swiper, {
            class: "popupContent",
            "indicator-dots": "true"
          }, {
            default: withCtx(() => [
              createElementVNode("view", {
                class: "content",
                style: normalizeStyle({ background: data.value.classify ? data.value.classify.background : "" })
              }, [
                createElementVNode("view", { class: "contentLeft" }, [
                  createVNode(Icon, {
                    type: data.value.classify ? data.value.classify.ico : "",
                    color: "#fff",
                    fontSize: "30",
                    class: "contentIcon"
                  }, null, 8, ["type"]),
                  createElementVNode("u-text", { onClick: handleShowTitlePopup }, toDisplayString(data.value.title || (data.value.classify ? data.value.classify.name : "")), 1)
                ]),
                createElementVNode("u-text", { class: "contentRight" }, "￥" + toDisplayString(data.value.price.toFixed(2)), 1)
              ], 4),
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.dataSource, (items, index) => {
                return openBlock(), createBlock(_component_swiper_item, {
                  index,
                  key: index
                }, {
                  default: withCtx(() => [
                    createVNode(_component_uni_grid, {
                      column: 6,
                      "show-border": false
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(items, (item, i) => {
                          return openBlock(), createBlock(_component_uni_grid_item, {
                            index: i,
                            key: i
                          }, {
                            default: withCtx(() => [
                              createElementVNode("view", {
                                class: "popupGridItem",
                                onClick: ($event) => handleClickClassify(item)
                              }, [
                                createVNode(Icon, {
                                  type: item.ico,
                                  color: item.background,
                                  fontSize: "26"
                                }, null, 8, ["type", "color"]),
                                createElementVNode("u-text", { class: "calssifyTitle" }, toDisplayString(item.name), 1)
                              ], 8, ["onClick"])
                            ]),
                            _: 2
                          }, 1032, ["index"]);
                        }), 128))
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["index"]);
              }), 128))
            ]),
            _: 1
          }),
          createElementVNode("view", { class: "popupFooter" }, [
            createElementVNode("view", { class: "footerTop" }, [
              createVNode(_component_picker, {
                mode: "date",
                value: date.value,
                onChange: handleChangeDate
              }, {
                default: withCtx(() => [
                  createElementVNode("view", { class: "uni-input" }, [
                    createElementVNode("u-text", null, toDisplayString(date.value), 1)
                  ])
                ]),
                _: 1
              }, 8, ["value"]),
              createVNode(Icon, {
                type: "editor2",
                class: "editIcon",
                fontSize: "26",
                onClick: handleShowDescPopup
              })
            ]),
            createVNode(Calculator, {
              price: data.value.price,
              onOnOk: handleOk,
              onOnChange: handleChangePrice
            }, null, 8, ["price"])
          ]),
          createVNode(_component_uni_popup, {
            ref_key: "titleRef",
            ref: titleRef,
            type: "dialog"
          }, {
            default: withCtx(() => [
              createVNode(_component_uni_popup_dialog, {
                mode: "input",
                maxlength: 6,
                title: data.value.classify ? data.value.classify.name : "",
                modelValue: data.value.title,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => data.value.title = $event),
                placeholder: data.value.classify ? data.value.classify.name : "",
                onConfirm: handleChangeTitle
              }, null, 8, ["title", "modelValue", "placeholder"])
            ]),
            _: 1
          }, 512),
          createVNode(_component_uni_popup, {
            ref_key: "descRef",
            ref: descRef,
            type: "dialog"
          }, {
            default: withCtx(() => [
              createVNode(_component_uni_popup_dialog, {
                mode: "input",
                maxlength: "255",
                title: "备注",
                modelValue: data.value.desc,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => data.value.desc = $event),
                placeholder: "记录美好生活",
                onConfirm: handleChangeDesc
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }, 512)
        ]),
        _: 1
      }, 8, ["visible"]);
    };
  }
};
const FormModal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["styles", [_style_0$1]]]);
const getFirstDayOfMonth = (date) => {
  const current = date || /* @__PURE__ */ new Date();
  const year = current.getFullYear();
  const month = current.getMonth() + 1;
  return (/* @__PURE__ */ new Date(`${year}-${month}-01 00:00:00`)).getTime();
};
const getLastDayOfMonth = (date) => {
  const current = date || /* @__PURE__ */ new Date();
  let year = current.getFullYear();
  let month = current.getMonth() + 2;
  if (month === 13) {
    year += 1;
    month = "01";
  }
  let firstDay = "01";
  const firstDayOfNextMonth = (/* @__PURE__ */ new Date(`${year}-${month}-${firstDay} 00:00:00`)).getTime();
  return new Date(firstDayOfNextMonth - 1).getTime();
};
const _style_0 = { "pages": { "": { "height": 100, "backgroundColor": "#ffffff" } }, "content": { "": { "flexGrow": 1, "flexShrink": 1, "overflow": "hidden", "content:before": "''", "position:before": "absolute", "top:before": 0, "left:before": 0, "right:before": 0, "marginTop:before": 0, "marginBottom:before": 0, "width:before": 1, "height:before": 100, "backgroundColor:before": "#999999" } } };
const _sfc_main = {
  __name: "list",
  setup(__props) {
    const db = Ws.database();
    const dbCmd = db.command;
    ref(null);
    const selectedDate = ref(/* @__PURE__ */ new Date());
    const dataSource = ref([]);
    const classifyList = ref([]);
    const detail = ref({});
    const total = ref({ income: 0, expense: 0 });
    const visible = ref(false);
    onMounted(() => {
      getData();
      getClassifyList({
        billType: "expense"
      });
    });
    const pushClassify = (item) => {
      if (!classifyList.value[classifyList.value.length - 1] || classifyList.value[classifyList.value.length - 1].length % 24 === 0) {
        classifyList.value.push([]);
      }
      classifyList.value[classifyList.value.length - 1].push({
        ...item
      });
    };
    const getData = async () => {
      const firstDay = getFirstDayOfMonth(selectedDate.value);
      const lastDay = getLastDayOfMonth(selectedDate.value);
      const bills = db.collection("db-bills").where({
        create_date: dbCmd.gte(firstDay).and(dbCmd.lte(lastDay)),
        user_id: uni.getStorageSync("uni-id-pages-userInfo")._id
      }).getTemp();
      const {
        result: { data }
      } = await db.collection(bills, "db-bill-classifies").get();
      dataSource.value = [];
      total.value = { income: 0, expense: 0 };
      data.sort((a, b) => b.create_date - a.create_date).forEach((item) => {
        const { create_date, price } = item;
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
        total.value[item.classify_id[0].billType] += price;
      });
    };
    const getClassifyList = async ({ billType }) => {
      const {
        result: { data: classifies }
      } = await db.collection("db-bill-classifies").where({
        billType: billType || "expense",
        user_id: dbCmd.eq(uni.getStorageSync("uni-id-pages-userInfo")._id).or(dbCmd.eq(null))
      }).get();
      classifyList.value = [];
      classifies.forEach((item) => {
        pushClassify({
          ...item
        });
      });
    };
    const handleChangeDate = (space) => {
      const thisDate = new Date(selectedDate.value);
      let year = thisDate.getFullYear();
      let month = thisDate.getMonth() + 1;
      if (month === 1 && space === -1) {
        year -= 1;
        month = 12;
      } else if (month === 12 && space === 1) {
        year += 1;
        month = 1;
      } else {
        month += space;
      }
      selectedDate.value = /* @__PURE__ */ new Date(`${year}-${month}-1`);
      getData();
    };
    const showPopup = (params) => {
      visible.value = true;
      uni.hideTabBar();
      detail.value = params ? params : {};
    };
    const hidePopup = () => {
      uni.showTabBar();
      visible.value = false;
      detail.value = {};
    };
    const handleOk = (params) => {
      if (JSON.stringify(detail.value) === "{}") {
        db.collection("db-bills").add({
          price: params.price,
          title: params.title,
          desc: params.desc,
          billType: params.billType,
          create_date: params.create_date,
          classify_id: params.classify._id
        }).then(() => {
          hidePopup();
          getData();
        });
        return;
      }
      db.collection("db-bills").doc(params._id).update({
        price: params.price,
        title: params.title,
        desc: params.desc,
        billType: params.billType,
        create_date: params.create_date,
        classify_id: params.classify._id
      }).then(() => {
        hidePopup();
        getData();
      });
    };
    const handleDelete = (id) => {
      db.collection("db-bills").doc(id).remove().then(() => {
        getData();
      });
    };
    return (_ctx, _cache) => {
      const _component_uni_fab = resolveEasycom(resolveDynamicComponent("uni-fab"), __easycom_0$1);
      return openBlock(), createElementBlock("scroll-view", {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true",
        style: { flexDirection: "column" }
      }, [
        createElementVNode("view", { class: "pages" }, [
          createVNode(unref(statusBar)),
          createVNode(SelectData, {
            date: selectedDate.value,
            onOnChange: handleChangeDate
          }, null, 8, ["date"]),
          createVNode(Total, {
            income: total.value.income,
            expense: total.value.expense
          }, null, 8, ["income", "expense"]),
          createElementVNode("scroll-view", {
            scrollY: "true",
            class: "content"
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(dataSource.value, (item) => {
              return openBlock(), createBlock(unref(Item), {
                data: item,
                key: item.date,
                onOnDelete: handleDelete,
                onOnEdit: showPopup
              }, null, 8, ["data"]);
            }), 128))
          ]),
          createVNode(_component_uni_fab, { onFabClick: showPopup })
        ]),
        visible.value ? (openBlock(), createBlock(FormModal, {
          key: 0,
          visible: visible.value,
          detail: detail.value,
          dataSource: classifyList.value,
          onOnOk: handleOk,
          onOnCancel: hidePopup,
          onOnGetClassifyList: getClassifyList
        }, null, 8, ["visible", "detail", "dataSource"])) : createCommentVNode("", true)
      ]);
    };
  }
};
const list = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
export {
  list as default
};
