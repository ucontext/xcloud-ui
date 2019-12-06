export const optionData = {
    title: {
        text: '终端事件汇总',
        subtext: '2019年度',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        bottom: 'left',
        data: []
    },
    series: [
        {
            name: '事件数',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
