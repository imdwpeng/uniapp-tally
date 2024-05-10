<template>
	<view class="countRow">
		<view class="countItem" v-for="item in [1,2,3,'+']" :key="item" @click="handleClickCount(item)">
			<view class="count">{{item}}</view>
		</view>
	</view>
	<view class="countRow">
		<view class="countItem" v-for="item in [4,5,6,'-']" :key="item" @click="handleClickCount(item)">
			<view class="count">{{item}}</view>
		</view>
	</view>
	<view class="countRow">
		<view class="countItem" v-for="(item,index) in [[7,'清零'],[8,0],[9,'.'],'OK']" :key="item">
			<view v-if="index < 3">
				<view class="count" @click="handleClickCount(item[0])">{{item[0]}}</view>
				<view class="count" @click="handleClickCount(item[1])">{{item[1]}}</view>
			</view>
			<view v-else class="countOk" @click="handleClickCount(item)">{{item}}</view>
		</view>
	</view>
</template>

<script setup>
	const emits = defineEmits(['onOk', 'onChange']);
	const props = defineProps(['price']);
	let countList = [0];
	let total = 0;
	let prevSign = 1;

	// 修改价格
	const handleClickCount = (count) => {
		// 清零
		if (count === '清零') {
			emits('onChange', 0);
			countList = [0];
			total = 0;
			return;
		}

		// 保存
		if (count === 'OK') {
			emits('onOk', total + (countList.length ? (countList.join('') - 0) * prevSign : 0));
			countList = [];
			total = 0;
			return;
		}

		// 加减
		if (['+', '-'].includes(count)) {
			total += (countList.join('') - 0) * prevSign;
			emits('onChange', total);
			countList = [];
			prevSign = count === '-' ? -1 : 1;
			return;
		}

		// 选择数字
		if (typeof count === 'number') {
			const dotIndex = countList.findIndex(item => item === '.');
			// 小数点2位
			if (dotIndex !== -1 && countList.length - dotIndex === 3) return;
			countList.push(count);
		}

		// 小数点
		if (count === '.' && countList[countList.length - 1] !== '.') {
			countList.push(count);
		}

		emits('onChange', countList.join('') - 0);
	}
</script>

<style lang="less" scoped>
	.countRow {
		display: flex;
		flex-direction: row;
		border-top: 1px solid #fff;

		.countItem:not(:nth-of-type(4)) {
			border-right: 1px solid #fff;
		}
	}

	.countItem {
		flex-basis: 25%;

		.count:nth-of-type(even) {
			border-top: 1px solid #fff;
		}
	}

	.count {
		height: 40px;
		line-height: 40px;
		text-align: center;
	}

	.countOk {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}
</style>