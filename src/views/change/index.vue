<template>
	<div>
		
		<el-tabs :tab-position="tabPosition" style="height: 200px;">
			<el-tab-pane label="新增变更">新增变更</el-tab-pane>
			<el-tab-pane label="查看变更">查看变更</el-tab-pane>
			<el-tab-pane label="角色管理">角色管理</el-tab-pane>
			<el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tabPosition: 'left'
			};
		}
	};
</script>
