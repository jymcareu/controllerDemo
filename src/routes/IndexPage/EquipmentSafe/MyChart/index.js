import React from 'react';
import Chart from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/tooltip';
import moment from 'moment';

class MyChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    shouldComponentUpdate() {
        const currentTime = new Date().getSeconds();
        if (currentTime === 0) {
            return true
        } else {
            return false
        }
    }
    render() {
        const { chartData, dataTime } = this.props;
        const currentTime = new Date().getHours();
        const option = {
            grid: {
                top: 30,
                left: 40,
                right: 15,
                bottom: 30
            },
            tooltip: {
                trigger: 'axis',
                formatter: (params) => {
                    const time = moment(Number(params[0].axisValue)).format('HH:mm');
                    return `${time}<br />温度：${params[0].data}°C`
                }
            },
            xAxis: {
                // type: 'time',
                boundaryGap: false,
                data: dataTime,
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#C9C9C9',
                    }
                },
                axisLabel: {
                    show: true,
                    interval: currentTime > 12 ? 7 : 3,
                    formatter: function (val) {
                        return moment(Number(val)).format('HH:mm');
                    }
                }
            },
            yAxis: {
                type: 'value',
                name: '温度(°C)',
                max: 80,
                nameGap: 10,
                splitNumber: 4,
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#C9C9C9',
                    }
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(201, 201, 201, 0.4)',
                        // type: 'dotted'
                    }
                }
            },
            series: [{
                data: chartData,
                name: '温度(°C)',
                type: 'line',
                // symbolSize: 8,
                symbol: 'none',
                lineStyle: {
                    color: '#40D8FE'
                },
                itemStyle: {
                    color: '#40D8FE',
                },
                areaStyle: {
                    color: '#40D8FE',
                    opacity: 0.2,
                }
            }]
        };
        return (
            <div style={{ width: '100%', height: '100%' }}>
                <Chart
                    echarts={echarts}
                    option={option}
                    notMerge
                    lazyUpdate
                    style={{ height: '100%' }}
                />
            </div>
        )

    }
}

export default MyChart





