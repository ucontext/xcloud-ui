<template>
	<div>
		<el-row class="tac">
			<el-col :span="6">
				<h5>故障管理</h5>
				<el-menu :router="true" default-active="1" class="el-menu-vertical-demo" 
				@open="handleOpen" @close="handleClose" 
				background-color="#FFF"
				text-color="#515A6E" 
				active-text-color="#2d8cf0">
					<el-menu-item index="/add">
						<span slot="title">新增故障</span>
					</el-menu-item>
					<el-menu-item index="/cat">
						<span slot="title">查看故障</span>
					</el-menu-item>
					<el-menu-item index="3">
						<span slot="title">故障统计</span>
					</el-menu-item>
				</el-menu>
			</el-col>
			<el-col :span="10" class="margin-right:30px">
				<router-view></router-view>
			</el-col>
		</el-row>
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
