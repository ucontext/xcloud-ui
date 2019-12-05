<template>
  <div id="pieReport" style="width: 400px;height: 300px;"></div>
</template>

<script>
import { GetReport } from "@/api/mobile";

export default {
  data() {
    return {
      charts: "",
      // chartData: [{
      //     name: "",
      //     value: 0
      // }]
      chartData:""
    };
  },
  methods: {
    drawPie(id) {
      this.charts = this.$echarts.init(document.getElementById(id));
      console.log(this.chartData);
      this.charts.setOption({
        title: {
          text: "终端事件统计",
          subtext: "纯属虚构",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "horizontal",
          bottom: "left",
          data: ["王亚运", "高杰", "金圣礼"]
        },

        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: this.chartData,
            // {"name":"王亚运","value":"7"},
            // {"name":"高杰","value":349},
            // {"name":"金圣礼","value":356},

            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      });
    }
  },
  created() {
    GetReport().then(result => {
      this.chartData = result.data;
    });
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
