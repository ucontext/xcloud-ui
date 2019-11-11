<template>
  <el-row :gutter="20">
    <el-col :span="7">
      <div class="grid-content bg-purple">
        <cardleft :message="msg"></cardleft>
      </div>
    </el-col>
    <el-col :span="17">
      <div class="grid-content bg-purple">
        <cardbody :add="add" :cat="cat" :inbox="inbox"></cardbody>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import cardbody from "@/components/document/cardbody.vue";
import cardleft from "@/components/document/cardleft.vue";
export default {
  data() {
    return {
      activeName: "first",
      msg: "hhh",
      add: "新增变更",
      cat: "查看变更",
      inbox: "归档变更"
    };
  },
  components: {
    cardleft,
    cardbody
  }
};
</script>

<style lang="scss" scoped>
</style>
