<template>
	<el-container>
		<el-aside width="230px">
			<myaside></myaside>
		</el-aside>

		<el-container class='is-vertical'>
			<myheader></myheader>
			<el-main>Main</el-main>
		</el-container>
	</el-container>
</template>

<script>
	import myaside from '@/components/layout/myaside.vue'
	import myheader from '@/components/layout/myheader.vue'

	export default {
		components: {
			myaside,
			myheader
		}
	}
</script>

<style lang="scss">
	.el-container {
		height: 100%;
	}

	.el-header {
		background-color: #B3C0D1;
		color: #333;
		text-align: center;
		line-height: 60px;
	}

	.el-aside {
		background-color: #545c64;
		color: #333;
		text-align: center;
		// line-height: 200px;
	}

	.el-main {
		background-color: #E9EEF3;
		color: #333;
		text-align: center;
		line-height: 160px;
	}

	.el-menu {
		border-right: solid 0px #e6e6e6;
		list-style: none;
		position: relative;
		margin: 0;
		padding-left: 0;
		background-color: #FFF;
	}

	.el-container .is-vertical {
		-webkit-box-orient: vertical;
		-ms-flex-direction: column;
		flex-direction: column;
	}

	.el-container:nth-child(5) .el-aside,
	.el-container:nth-child(6) .el-aside {
		line-height: 260px;
	}

	.el-container:nth-child(7) .el-aside {
		line-height: 320px;
	}
</style>
