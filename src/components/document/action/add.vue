<template>
	<div>
		<el-steps :active="active" finish-status="success" align-center style="margin-bottom: 30px;margin-top: 20px;">
			<el-step title="填写基础信息"></el-step>
			<el-step title="填写操作信息"></el-step>
			<el-step title="确认信息" description=""></el-step>
			<el-step title="完成" description=""></el-step>
		</el-steps>

		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<div v-if="active===1" style="margin: 0 auto;align-content: center;">
				<el-row :gutter="20">
					<el-col :span="12">
						<el-form-item label="日期" prop="date" required>
							<div class="block">
								<el-date-picker v-model="ruleForm.date" type="date" placeholder="选择日期" format="yyyy-MM-dd" value-format="yyyy-MM-dd"
								 style="width: 94%;">
								</el-date-picker>
							</div>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="时间" prop="time" required>
							<el-time-picker v-model="ruleForm.time" :picker-options="{
									      selectableRange: '07:00:00 - 20:59:59'
									    }"
							 placeholder="选择时间" style="width: 94%;">
							</el-time-picker>
						</el-form-item>
					</el-col>
				</el-row>

				<el-row :gutter="20">
					<el-col :span="12">
						<el-form-item label="位置" prop="location_name">
							<el-select v-model="ruleForm.location_name" placeholder="请选择办公楼" style="width: 94%;">
								<el-option v-for="item in region" :key="item" :label="item.name" :value="item.name"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="房间" prop="room">
							<el-input v-model="ruleForm.room" placeholder="请输入办公室" style="width: 94%;"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row :gutter="15">
					<el-col :span="12">
						<el-form-item label="类型" prop="type_name">
							<el-select v-model="ruleForm.type_name" placeholder="请选择类型" style="width: 94%;">
								<el-option v-for="item in pctype" :key="item" :label="item.name" :value="item.name"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="时长" prop="process_time">
							<el-input v-model="ruleForm.process_time" placeholder="请输入处理时长" style="width: 94%;"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
			</div>

			<div v-if="active===2">
				<el-form-item label="操作系统" prop="os">
					<el-radio-group v-model="ruleForm.os">
						<el-radio label="Windows 7"></el-radio>
						<el-radio label="Windows 10"></el-radio>
						<el-radio label="中标麒麟"></el-radio>
						<el-radio label="银河麒麟"></el-radio>
						<el-radio label="其它"></el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="事件内容" prop="content">
					<el-input type="textarea" v-model="ruleForm.content"></el-input>
				</el-form-item>
				<el-form-item label="处理过程" prop="solution">
					<el-input type="textarea" v-model="ruleForm.solution"></el-input>
				</el-form-item>
			</div>
			<div v-if="active===3">
				<el-card shadow="never">
					{{ruleForm.date1}}
				</el-card>
			</div>
			<div v-if="active===4">
				<el-card shadow="never">
					{{ruleForm.date1}}
				</el-card>
			</div>
			<div style="margin-left: 100px;">
				<el-button size="medium" @click="prev" v-if="active==2||active==3||active==4">上一步</el-button>
				<el-button size="medium" @click="next()" v-if="active==1||active==2||active==3">下一步</el-button>
				<el-button type="primary" @click="checkForm('ruleForm');" size="medium" v-if="active==4">提交</el-button>
			</div>
		</el-form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				active: 1,
				region: "",
				pctype: "",
				ruleForm: {
					room: '',
					location_name: '',
					date: '',
					time: '',
					type_name: '',
					process_time: '',
					os: '',
					content: "",
					solution: ""
				},
				rules: {
					room: [{
							required: true,
							message: '请输入房间信息',
							trigger: 'blur'
						},
						{
							min: 3,
							max: 5,
							message: '长度在 3 到 5 个字符',
							trigger: 'blur'
						}
					],
					location_name: [{
						required: true,
						message: '请选择位置',
						trigger: 'change'
					}],
					date: [{
						type: 'date',
						required: true,
						message: '请选择日期',
						trigger: 'change'
					}],
					time: [{
						type: 'date',
						required: true,
						message: '请选择时间',
						trigger: 'change'
					}],
					type_name: [{
						required: true,
						message: '请选择事件类型',
						trigger: 'change'
					}],
					process_time: [{
						required: true,
						message: '请输入处理时长',
						trigger: 'change'
					}],
					os: [{
						// required: true,
						message: '请选择操作系统',
						trigger: 'blur'
					}]
				}
			};
		},
		methods: {
			checkForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						// this.next()
						console.log(this.$refs[formName])
					} else {
						console.log('error submit!!');
						return false;
					}
				});
				this.$axios({
					method: "post",
					url: "/event/add",
					headers: {
						'Content-type': 'application/x-www-form-urlencoded'
					},
					data: {
						room: this.room,
						location_name: this.location_name,
						date: this.date,
						time: this.time,
						type_name: this.type_name,
						process_time: this.process_time,
						os: '',
						content: this.content,
						solution: this.solution
					},
					transformRequest: [function(data) {
						let ret = ''
						for (let it in data) {
							ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
						}
						return ret
					}],
				}).then((res) => {
					console.log(res.data);
				})
			},
			prev() {
				--this.active;
				if (this.active < 1) this.active = 1
			},
			next() {
				if (this.active++ > 3) this.active = 1
			}

		},
		created() {
			// 组件中使用get方法
			this.$axios.get('/basic/build').then(res => {

				this.region = res.data
			}).catch(err => {
				console.log("调用错误", err)
			});
			this.$axios.get('/basic/pctype').then(res => {

				this.pctype = res.data
			}).catch(err => {
				console.log("调用错误", err)
			});
			
		}
	}
</script>

<style scoped>
	.el-col .el-col-12 {
		height: 50px;
		padding: 0 10px;
	}

	.el-form-item__label {
		text-align: center;
		float: left;
		font-size: 14px;
		color: #606266;
		line-height: 40px;
		padding: 0 0 0 0;
	}
</style>
