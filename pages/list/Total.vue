<template>
	<view class="container">
		<view class="income">
			<text class="title">月收入</text>
			<text class="price">{{ income.toFixed(2) }}</text>
		</view>
		<view class="balance" :class="income - expense > 0 ? 'balance-profit' : 'balance-deficit'">
			<text class="title">月结余</text>
			<text class="price">{{ (income - expense).toFixed(2) }}</text>
		</view>
		<view class="expense">
			<text class="title">月支出</text>
			<text class="price">{{ expense.toFixed(2) }}</text>
		</view>
	</view>
</template>

<script setup>
defineProps(['income', 'expense']);
</script>

<style lang="less" scoped>
.container {
	padding: 10px;
	flex-direction: row;
	justify-content: space-between;
	font-size: 14px;
	border-bottom: 1px solid #999;
}

.title {
	color: #999;
}

.balance {
	text-align: center;
}

.expense {
	text-align: right;
}

.price {
	font-weight: 700;
}

.balance-profit {
	color: #0070ff;
	.title {
		color: #0070ff;
	}
}

.balance-deficit {
	color: #ef0505;
	.title {
		color: #ef0505;
	}
}
</style>
