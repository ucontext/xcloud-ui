<template>
  <div>
    <el-card class="box-card">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane :label="add" name="first">
          <slot name="add"></slot>
        </el-tab-pane>
        <el-tab-pane :label="cat" name="second">
          <slot name="cat"></slot>
        </el-tab-pane>
        <el-tab-pane :label="inbox" name="third">
          <slot name="inbox"></slot>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first"
    };
  },
  props: ["add", "cat", "inbox"]
};
</script>

<style lang="scss" scoped>

</style>
