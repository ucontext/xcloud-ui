<template>
	<el-container>
		<el-aside width="280px">
			<myaside></myaside>
		</el-aside>

		<el-container class='is-vertical'>
			<el-header>
				<myheader></myheader>
			</el-header>

			<el-main>
				<router-view></router-view>
			</el-main>
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



	.el-main {
		background-color: #E9EEF3;
	}

	// .el-container .is-vertical {
	// 	-webkit-box-orient: vertical;
	// 	-ms-flex-direction: column;
	// 	flex-direction: column;
	// }

	// .el-container:nth-child(5) .el-aside,
	// .el-container:nth-child(6) .el-aside {
	// 	line-height: 260px;
	// }

	// .el-container:nth-child(7) .el-aside {
	// 	line-height: 320px;
	// }
</style>
