<template>
  <el-row :gutter="20">
    <el-col :span="7">
      <div class="grid-content bg-purple">
        <cardleft :message="msg"></cardleft>
      </div>
    </el-col>
    <el-col :span="17">
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
import cardleft from "@/components/document/cardleft.vue";

import addmobile from "@/views/mobile/components/addmobile.vue";
import catmobile from "@/views/mobile/components/catmobile.vue";

export default {
  data() {
    return {
      activeName: "first",
      msg: "hhh",
      add: "新增事件",
      cat: "查看事件",
      inbox: "终端报告"
    };
  },
  components: {
    cardbody,
    cardleft,
    addmobile,
    catmobile
  }
};
</script>

<style></style>
