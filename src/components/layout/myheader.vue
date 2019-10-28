<template>
	<div class="app-header-userinfo">
		<el-dropdown trigger="hover" :hide-on-click="false">
			<span class="el-dropdown-link">
				<i class="el-icon-arrow-down el-icon--right"></i>
			</span>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item icon="el-icon-user">个人中心</el-dropdown-item>
				<el-dropdown-item icon="el-icon-setting">设置</el-dropdown-item>
				<el-dropdown-item icon="el-icon-d-arrow-right" divided @click.native="logout">退出登录</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
	</div>
</template>

<script>
	export default {
		name: "myheader"
	}
</script>

<style>
	.el-header {
		background-color: #fafbfc;
		color: #333;
		text-align: center;
		line-height: 60px;
	}
</style>
