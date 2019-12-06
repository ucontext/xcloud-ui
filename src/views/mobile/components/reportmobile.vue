<template>
  <div id="pieReport" style="width: 400px;height: 300px;"></div>
</template>

<script>
import { GetReport } from "@/api/mobile";
import { optionData } from "@/charts/mobile";
export default {
  data() {
    return {
      charts: "",
      chartData: [],
      chartName: []
    };
  },
  methods: {
    drawPie(id) {
      this.charts = this.$echarts.init(document.getElementById(id));
      this.charts.setOption(optionData);

      this.charts.hideLoading(); //没有加载出来隐藏加载动画

      GetReport().then(result => {
        this.chartData = result.data;
        for (var i = 0; i < this.chartData.length; i++) {
          this.chartName.push(this.chartData[i].name);
        }
        this.charts.setOption({
          //动画的配置
          legend: {
            data: this.chartName
          },
          series: [
            {
              data: this.chartData //这里数据是一个数组的形似
            }
          ]
        });
      });
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.drawPie("pieReport");
    });
  }
};
</script>

<style lang="scss" scoped>
</style>
