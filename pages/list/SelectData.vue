<template>
	<view class="container">
		<uni-icons type="left" size="30" color="#fff" class="icon-arrows" @click="changeDate(-1)"></uni-icons>
		<view class="date-box">
			<uni-dateformat class="month" :date="date" format="M月"></uni-dateformat>
			<uni-dateformat :date="date" format="yyyy年"></uni-dateformat>
		</view>
		<uni-icons type="right" size="30" color="#fff" class="icon-arrows" @click="changeDate(1)"></uni-icons>
	</view>
</template>

<script setup>
import Icon from '@/components/icon/icon.vue';
defineProps(['date']);
const emits = defineEmits(['onChange']);

const changeDate = (space) => {
	emits('onChange', space);
};
</script>

<style lang="less" scoped>
.container {
	flex-direction: row;
	justify-content: center;
	align-items: center;
	height: 160px;
	background: url('@/static/bg.jpg');
}

.icon-arrows {
	width: 35px;
	height: 35px;
	border: 1px solid #fff;
	border-radius: 50%;
}

.date-box {
	margin: 0 40px;
	width: 70px;
	align-items: center;
	color: #fff;
}

.month {
	font-size: 30px;
}
</style>
