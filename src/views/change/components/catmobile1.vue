<template>
  <div>
    <el-form
      :label-position="labelPosition"
      label-width="80px"
      :model="formLabelAlign"
    >
      <h4>基础信息</h4>
      <el-divider></el-divider>
      <el-row :gutter="28">
        <el-col :span="12">
          <el-form-item label="日期">
            <div class="block">
              <el-date-picker
                v-model="value3"
                type="date"
                placeholder="选择日期"
                format="yyyy 年 MM 月 dd 日"
                value-format="timestamp"
              >
              </el-date-picker>
            </div>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="时间">
            <el-time-picker
              v-model="value1"
              :picker-options="{
                selectableRange: '07:00:00 - 20:59:59'
              }"
              placeholder="任意时间点"
            >
            </el-time-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="28">
        <el-col :span="12">
          <el-form-item label="位置">
            <el-input v-model="formLabelAlign.type"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="房间">
            <el-input v-model="formLabelAlign.type"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <h4>操作信息</h4>
      <el-divider></el-divider>
      <el-row :gutter="28">
        <el-col :span="12">
          <el-form-item label="事件类型">
            <el-input v-model="formLabelAlign.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="处理时长">
            <el-input v-model="formLabelAlign.region"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="28">
        <el-col :span="12">
          <el-form-item label="事件内容">
            <el-input v-model="formLabelAlign.type"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="处理过程">
            <el-input v-model="formLabelAlign.type"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: "top",
      formLabelAlign: {
        name: "",
        region: "",
        type: ""
      },
      value3: "",
      value1: new Date(2019, 6, 1, 23, 59)
    };
  }
};
</script>

<style lang="scss" scoped>
.el-form-item__label {
  padding: 0 0 5px;
}
.el-form-item {
  margin-bottom: 5px;
}
.el-divider--horizontal {
  display: block;
  height: 1px;
  width: 100%;
  margin: 10px 0;
}
.el-input__inner {
  height: 30px;
  line-height: 30px;
  outline: 0;
  padding: 0 10px;
}
</style>
