<template>
  <el-row :gutter="20">
    <el-col :span="24">
      <div class="grid-content bg-purple">
        <cardbody :add="add" :cat="cat" :inbox="inbox">
          <template slot="add">
            <addmobile></addmobile>
          </template>
          <template slot="cat">
            <catmobile></catmobile>
          </template>
        </cardbody>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import cardbody from "@/components/document/cardbody.vue";

import addmobile from "@/views/mobile/components/addmobile.vue";
import catmobile from "@/views/mobile/components/catmobile.vue";

export default {
  data() {
    return {
      activeName: "first",
      add: "新增事件",
      cat: "查看事件",
      inbox: "终端报告"
    };
  },
  components: {
    cardbody,
    addmobile,
    catmobile
  }
};
</script>
<style lang="scss" scoped>
.bg-purple {
    background:#fff;
}
</style>
