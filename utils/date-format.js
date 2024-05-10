Date.prototype.Format = function(fmt = 'yyyy-MM-dd hh:mm:ss') {
	const o = {
		'M+': this.getMonth() + 1, //月份
		'd+': this.getDate(), //日
		'h+': this.getHours(), //小时
		'm+': this.getMinutes(), //分
		's+': this.getSeconds(), //秒
		'q+': Math.floor((this.getMonth() + 3) / 3), //季度
		S: this.getMilliseconds(), //毫秒
	};
	if (/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
	}
	for (const k in o) {
		if (new RegExp('(' + k + ')').test(fmt)) {
			fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
		}
	}
	return fmt;
};
Date.prototype.FormatDateTime = function() {
	return this.Format('yyyy-MM-dd hh:mm:ss');
};
Date.prototype.FormatDate = function() {
	return this.Format('yyyy-MM-dd');
};
Date.prototype.FormatTime = function() {
	return this.Format('hh:mm:ss');
};

//时间简化 转换为 刚刚 今天 昨天 之类
Date.prototype.Short = function() {
	const dateTimeStamp = this.getTime();
	const minute = 1000 * 60; //把分，时，天，周，半个月，一个月用毫秒表示
	const hour = minute * 60;
	const day = hour * 24;
	const week = day * 7;
	const month = day * 30;
	const now = new Date().getTime(); //获取当前时间毫秒
	const diffValue = now - dateTimeStamp; //时间差

	if (diffValue < 0) {
		return;
	}
	const minC = parseInt(diffValue / minute); //计算时间差的分，时，天，周，月
	const hourC = parseInt(diffValue / hour);
	const dayC = parseInt(diffValue / day);
	const weekC = parseInt(diffValue / week);
	const monthC = parseInt(diffValue / month);
	let result;
	if (monthC >= 1 && monthC <= 3) {
		result = ' ' + monthC + '月前';
	} else if (weekC >= 1 && weekC <= 3) {
		result = ' ' + weekC + '周前';
	} else if (dayC >= 1 && dayC <= 6) {
		result = ' ' + dayC + '天前';
	} else if (hourC >= 1 && hourC <= 23) {
		result = ' ' + hourC + '小时前';
	} else if (minC >= 1 && minC <= 59) {
		result = ' ' + minC + '分钟前';
	} else if (diffValue >= 0 && diffValue <= minute) {
		result = '刚刚';
	} else {
		const datetime = new Date();
		datetime.setTime(dateTimeStamp);
		const Nyear = datetime.getFullYear();
		const Nmonth = datetime.getMonth() + 1 < 10 ? '0' + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
		const Ndate = datetime.getDate() < 10 ? '0' + datetime.getDate() : datetime.getDate();
		// var Nhour = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime.getHours();
		// var Nminute = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
		// var Nsecond = datetime.getSeconds() < 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();
		result = Nyear + '-' + Nmonth + '-' + Ndate;
	}
	return result;
};

//某月第一天
Date.prototype.MonthFirstDay = function(date = null, fmt = 'yyyy-MM-dd') {
	let nowdays = new Date()
	if (date) {
		nowdays = new Date(date)
	}
	var year = nowdays.getFullYear()
	var month = nowdays.getMonth() + 1
	if (month == 0) {
		month = 12
		year = year - 1
	}
	if (month < 10) {
		month = '0' + month
	}
	let startDate = year + '-' + month + '-01 00:00:00';
	return new Date(startDate).Format(fmt)
}
//某月最后一天
Date.prototype.MonthLastDay = function(date = null, fmt = 'yyyy-MM-dd') {
	let nowdays = new Date()
	if (date) {
		nowdays = new Date(date)
	}
	var year = nowdays.getFullYear()
	var month = nowdays.getMonth() + 1
	if (month == 0) {
		month = 12
		year = year - 1
	}
	if (month < 10) {
		month = '0' + month
	}
	var myDate = new Date(year, month, 0);
	let endDate = year + '-' + month + '-' + myDate.getDate() + ' 23:59:59'
	return new Date(endDate).Format(fmt)
}

// 时间范围 查询所有时间列表
export const getDateAll = (begin, end) => {
	var arr = [];
	var ab = begin.split("-");
	var ae = end.split("-");
	var db = new Date();
	db.setUTCFullYear(ab[0], ab[1] - 1, ab[2]);
	var de = new Date();
	de.setUTCFullYear(ae[0], ae[1] - 1, ae[2]);
	var unixDb = db.getTime() - 24 * 60 * 60 * 1000;
	var unixDe = de.getTime() - 24 * 60 * 60 * 1000;
	for (var k = unixDb; k <= unixDe;) {
		k = k + 24 * 60 * 60 * 1000;
		arr.push((new Date(parseInt(k))).FormatDate());
	}
	return arr;
}

/**
 * 获取指定天数后的日期
 * @param {Object} todayTimeStamp 开始时间
 * @param {Object} toplimit   时间差天数 
 */
export const getDateByDay = (toplimit, todayTimeStamp) => {
	const endDay = toplimit * 24 * 60 * 60 * 1000;
	todayTimeStamp = new Date(todayTimeStamp.replace(/-/g, '/')).getTime();
	const endTime = new Date(todayTimeStamp + endDay).FormatDate();
	return endTime;
}
// 获取近七天日期（针对预约）
export const getLastSevenDays = newTime => {
	var date = '';
	if (newTime) {
		let fmtTime = newTime.replace(/\-/g, '/')
		date = new Date(fmtTime);
	} else {
		date = new Date();
	}
	var base = Date.parse(date); // 转换为时间戳
	var year = date.getFullYear(); //获取当前年份
	var mon = date.getMonth() + 1; //获取当前月份
	var day = date.getDate(); //获取当前日
	var oneDay = 24 * 3600 * 1000

	var daytimeArr = [{
		year: year,
		month: mon >= 10 ? mon : '0' + mon,
		day: day >= 10 ? day : '0' + day,
		str: "今天",
		ym: [year, mon >= 10 ? mon : '0' + mon].join('.'),
		ymd: [year, mon >= 10 ? mon : '0' + mon, day >= 10 ? day : '0' + day].join('-')
	}]
	for (var i = 1; i < 7; i++) { //后七天的时间
		var now = new Date(base += oneDay);
		var myear = now.getFullYear();
		var month = now.getMonth() + 1;
		var mday = now.getDate()
		daytimeArr.push({
			year: myear,
			month: month >= 10 ? month : '0' + month,
			day: mday >= 10 ? mday : '0' + mday,
			str: "周" + "日一二三四五六".charAt(now.getDay()),
			ym: [myear, month >= 10 ? month : '0' + month].join('.'),
			ymd: [myear, month >= 10 ? month : '0' + month, mday >= 10 ? mday : '0' + mday].join('-')
		})
	}
	return daytimeArr || []
};
// 时间段封装-针对挂号预约
export const timeIntervalFun = (minute = 30, startTime = '08:00', endTime = '18:00') => {
	const tateFmt = n => {
		return n < 10 ? '0' + n : n
	}
	var seconds = minute * 60;
	let len = (60 * 24 * 60) / seconds; //数组长度
	for (var i = 0, total = 0, newArr = []; i < len; i++) {
		var h = parseInt(total / 3600),
			min = parseInt(total % 3600 / 60);
		let t = tateFmt(h) + ':' + tateFmt(min)
		if (t >= startTime && t < endTime) {
			newArr.push(tateFmt(h) + ':' + tateFmt(min));
		}
		total += seconds;
	}
	const intervalTime = newArr.map((t, k) => {
		if (newArr.length >= k + 1) {
			return {
				startTime: newArr[k],
				endTime: newArr[k + 1],
				timeStr: `${newArr[k] + ' ~ ' + newArr[k+1]}`
			}
		}
	})
	// 删除最后一个存在undefined数据
	intervalTime.pop()
	return intervalTime
};