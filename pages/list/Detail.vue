<template>
	<Modal class="modal" :visible="visible" @onCancel="handleCancel">
		<view class="popupHeader">
			<uni-segmented-control
				class="popupTabs"
				styleType="text"
				:current="activeTab"
				:values="['收入', '支出']"
				@clickItem="handleChangeTab"
			/>
		</view>
		<swiper class="popupContent" indicator-dots="true">
			<view class="content" :style="{ background: data.classify ? data.classify.background : '' }">
				<view class="contentLeft">
					<Icon
						:type="data.classify ? data.classify.ico : ''"
						color="#fff"
						fontSize="30"
						class="contentIcon"
					></Icon>
					<text @click="handleShowTitlePopup">
						{{ data.title || (data.classify ? data.classify.name : '') }}
					</text>
				</view>
				<text class="contentRight">￥{{ data.price.toFixed(2) }}</text>
			</view>
			<swiper-item v-for="(items, index) in dataSource" :index="index" :key="index">
				<uni-grid :column="6" :show-border="false">
					<uni-grid-item v-for="(item, i) in items" :index="i" :key="i">
						<view class="popupGridItem" @click="handleClickClassify(item)">
							<Icon :type="item.ico" :color="item.background" fontSize="26"></Icon>
							<text class="calssifyTitle">{{ item.name }}</text>
						</view>
					</uni-grid-item>
				</uni-grid>
			</swiper-item>
		</swiper>
		<view class="popupFooter">
			<view class="footerTop">
				<picker mode="date" :value="date" @change="handleChangeDate">
					<view class="uni-input">{{ date }}</view>
				</picker>
				<Icon type="editor2" class="editIcon" fontSize="26" @click="handleShowDescPopup"></Icon>
			</view>
			<Calculator :price="data.price" @onOk="handleOk" @onChange="handleChangePrice"></Calculator>
		</view>
		<uni-popup ref="titleRef" type="dialog">
			<uni-popup-dialog
				mode="input"
				:maxlength="6"
				:title="data.classify ? data.classify.name : ''"
				v-model="data.title"
				:placeholder="data.classify ? data.classify.name : ''"
				@confirm="handleChangeTitle"
			></uni-popup-dialog>
		</uni-popup>
		<uni-popup ref="descRef" type="dialog">
			<uni-popup-dialog
				mode="input"
				maxlength="255"
				title="备注"
				v-model="data.desc"
				placeholder="记录美好生活"
				@confirm="handleChangeDesc"
			></uni-popup-dialog>
		</uni-popup>
	</Modal>
</template>

<script setup>
import { computed, ref, watch, onMounted } from 'vue';
import Modal from '@/components/modal/index.nvue';
import Icon from '@/components/icon/icon.vue';
import Calculator from '@/components/calculator/calculator.vue';
import '@/utils/date-format.js';

const emits = defineEmits(['onOk', 'onCancel', 'onGetClassifyList']);
const props = defineProps(['visible', 'detail', 'dataSource']);

const db = uniCloud.database();
const titleRef = ref(null);
const descRef = ref(null);

const data = ref({
	classify: props.detail.classify
		? props.detail.classify
		: props.dataSource && props.dataSource.length > 0
		? props.dataSource[0][0]
		: {},
	price: 0,
	billType: 'expense',
	create_date: new Date().getTime(),
	...props.detail
});
const activeTab = computed(() => {
	return data.value.billType === 'income' ? 0 : 1;
});
const date = computed(() => {
	return new Date(data.value.create_date).FormatDate('yyyy/MM/dd');
});

// 切换tab
const handleChangeTab = (e) => {
	data.value.billType = e.currentIndex === 0 ? 'income' : 'expense';
	emits('onGetClassifyList', {
		billType: data.value.billType
	});
};

// 选择分类
const handleClickClassify = (item) => {
	data.value.classify = item;
};

// 修改金额
const handleChangePrice = (price) => {
	data.value.price = price;
};

// 显示标题输入框
const handleShowTitlePopup = () => {
	titleRef.value.open();
};

// 修改标题
const handleChangeTitle = (value) => {
	data.value.title = value;
};

// 修改时间
const handleChangeDate = (e) => {
	const {
		detail: { value }
	} = e;
	data.value.create_date = new Date(value).getTime();
};

// 显示标题输入框
const handleShowDescPopup = () => {
	descRef.value.open();
};

// 修改备注
const handleChangeDesc = (value) => {
	data.value.desc = value;
};

// 确认修改
const handleOk = (price) => {
	data.value.price = price;
	if (!data.value.title) {
		data.value.title = data.classify.name || '';
	}
	emits('onOk', data.value);
};

const handleCancel = () => {
	emits('onCancel');
};
</script>

<style lang="less" scoped>
.modal {
	display: flex;
	flex-direction: column;
}

.popupHeader {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;

	.popupTabs {
		width: 100px;
	}
}

.popupContent {
	flex-grow: 1;

	.content {
		padding: 0 10px;
		margin-bottom: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: row;
		height: 50px;
		color: #fff;
	}

	.contentLeft {
		flex-grow: 1;
		flex-direction: row;
		align-items: center;
	}

	.contentIcon {
		margin-right: 10px;
	}

	.popupGridItem {
		width: 100%;
		height: 100%;
		align-items: center;
		justify-content: center;
	}

	.calssifyTitle {
		font-size: 12px;
	}
}

.popupFooter {
	background-color: #e5e5e5;

	.footerTop {
		padding: 0 20px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		height: 38px;

		.editIcon {
			border: 0;
		}
	}
}
</style>
