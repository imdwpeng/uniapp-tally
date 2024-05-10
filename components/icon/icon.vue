<template>
	<uni-icons fontFamily="iconfont" :size="fontSize" :color="color">{{ types[type] || type }}</uni-icons>
</template>

<script setup>
defineProps(['type', 'color', 'fontSize', 'background']);
const emits = defineEmits(['onClick']);

const handleClick = () => {
	emits('onClick');
};

const types = {
	editor: '\ue629',
	delete: '\ue60f',
	editor2: '\ue67f',
	calendar: '\ue89e'
};
</script>

<style>
/* 在线链接服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
@font-face {
	font-family: 'iconfont'; /* Project id 4526742 */
	src: url('//at.alicdn.com/t/c/font_4526742_m8dyi9stoa.woff2?t=1715328107669') format('woff2'),
		url('//at.alicdn.com/t/c/font_4526742_m8dyi9stoa.woff?t=1715328107669') format('woff'),
		url('//at.alicdn.com/t/c/font_4526742_m8dyi9stoa.ttf?t=1715328107669') format('truetype');
}
</style>
