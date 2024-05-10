"use strict";
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
