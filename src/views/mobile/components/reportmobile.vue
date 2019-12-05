<template>
  <div id="pieReport" style="width: 400px;height: 300px;"></div>
</template>

<script>
import { GetReport } from "@/api/mobile";
export default {
  data() {
    return {
      charts: "",
      optionData: [],
    };
  },
  methods: {
    drawPie(id) {
      this.charts = this.$echarts.init(document.getElementById(id));
      console.log(this.optionData.name)
      this.charts.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a}<br/>{b}:{c} ({d}%)"
        },

        legend: {
          bottom: 10,
          left: "center",
          data: this.optionData.name
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: "65%",
            center: ["50%", "50%"],
            avoidLabelOverlap: false,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              },
              color: function(params) {
                //自定义颜色
                var colorList = ["#1ab394", "#79d2c0"];
                return colorList[params.dataIndex];
              }
            },
            data: this.optionData.number
          }
        ]
      });
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.drawPie("pieReport");
    });
  },
  created() {
    GetReport().then(res => {
      this.optionData = res.data;
    });
  }
};
</script>

<style lang="scss" scoped>
</style>
