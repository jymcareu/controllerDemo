import React, { Component }from 'react';
import { Checkbox } from 'antd';
import './index.less';
import Chart from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/tooltip';

const CheckboxGroup = Checkbox.Group;
class IntelligentAnalysis extends Component {
    constructor (props) {
        super(props);
        this.state = {
            options: [ '机组负荷', '煤燃量', '增压风机', '原烟气SO2浓度', '吸收塔PH值', '净烟气SO2浓度', '净烟气流量'],
            series: [
                {
                    name: '机组负荷',
                    showSymbol: false,
                    itemStyle: {
                        color: '#FFE400'
                    },
                    data: [24.8, 24.6, 25, 26, 27, 26.5, 27.3, 25.6, 24.6, 24.3, 24, 28, 25],
                    type: 'line',
                    smooth: true
                },{
                    name: '煤燃量',
                    showSymbol: false,
                    itemStyle: {
                        color: '#00DEFF'
                    },
                    data: [37.5, 34, 32, 31, 30.5, 29, 34, 32, 34, 26, 27, 28, 30],
                    type: 'line',
                    smooth: true
                },{
                    name: '增压风机',
                    showSymbol: false,
                    itemStyle: {
                        color: '#00FF60'
                    },
                    data: [10, 15, 12.5, 11, 12, 12.5, 13, 14, 13.5, 12, 11, 14, 13],
                    type: 'line',
                    smooth: true
                },{
                    name: '原烟气SO2浓度',
                    showSymbol: false,
                    itemStyle: {
                        color: '#64A4F7'
                    },
                    data: [12, 15, 10, 9, 13, 15, 16, 12, 15.5, 11, 13.5, 15.5, 12],
                    type: 'line',
                    smooth: true
                }
            ]
        };
    }

    componentWillMount(){
    }

    componentDidMount () {
    }

    onChange = (e, op) => {
        const color = ['#FFE400', '#00DEFF', '#00FF60', '#64A4F7', '#3d358b', '#ff8b3d', '#ff6970' ];
        const data = [
            {
                name: '机组负荷',
                data: [24.8, 24.6, 25, 26, 27, 26.5, 27.3, 25.6, 24.6, 24.3, 24, 28, 25],
            },{
                name: '煤燃量',
                data: [37.5, 34, 32, 31, 30.5, 29, 34, 32, 34, 26, 27, 28, 30],
            },{
                name: '增压风机',
                data: [10, 15, 12.5, 11, 12, 12.5, 13, 14, 13.5, 12, 11, 14, 13],
            },{
                name: '原烟气SO2浓度',
                data: [12, 15, 10, 9, 13, 15, 16, 12, 15.5, 11, 13.5, 15.5, 12],
            },{
                name: '吸收塔PH值',
                data: [7, 7.1, 7.2, 7, 7, 6.9, 7, 6.8, 7, 7, 7.1, 7.1, 7],
            },{
                name: '净烟气SO2浓度',
                data: [12.5, 14.5, 11, 15, 10.5, 13, 16, 17, 15.5, 15, 14, 10, 13],
            },{
                name: '净烟气流量',
                data: [10, 7, 7.5, 11, 10.5, 11.5, 11, 9, 12, 12.5, 10, 10.5, 10.5],
            }
        ];
        const series = e.length > 0 && e.map((item, index)=>{
            const chartData = data.filter((v)=>v.name == item);
            return {
                name: item,
                showSymbol: false,
                itemStyle: {
                    color: color[index]
                },
                data: chartData[0].data,
                type: 'line',
                smooth: true
            }
        });
        this.setState({
            series: series ? series : []
        })
    }

    getOption = () => {
        const t = this;
        return {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                top: 20,
                left: 180,
                textStyle: {
                    color: 'rgba(255,255,255,0.7)',
                },
            },
            xAxis: {
                type: 'category',
                axisLabel: {
                    interval: 5,
                    color: '#FFF'
                },
                axisTick: {
                    show: false,
                    
                },
                axisLine: {
                    lineStyle: {
                        color: '#054477'
                    }
                },
                data: ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00',
                        '15:00', '16:00', '17:00', '18:00', '19:00', '20:00']
            },
            yAxis: {
                type: 'value',
                max: 50,
                splitNumber: 8,
                axisLabel: {
                    formatter: (value, index)=>index == 5 || index == 10 ? value : '',
                    color: '#FFF',
                },
                axisTick: {
                    show: false,
                    
                },
                axisLine: {
                    lineStyle: {
                        color: '#054477'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                }
            },
            series: t.state.series
        }
    }

    render () {
        const { options } = this.state;
        return (
            <div className='intelligentAnalysis'>
                <div className='title'><i className='iconfont icon-shuangyou' /> 工况数据关联烟气分析</div>
                <div className='selectBox'>
                    <span className='myLabel'>参数</span>
                    <div className='myCheck'>
                        <CheckboxGroup defaultValue={['机组负荷', '煤燃量', '增压风机', '原烟气SO2浓度']} options={options} onChange={this.onChange} />
                    </div>
                </div>
                <div className='chartBox'>
                    {
                        <Chart
                            ref='myChart'
                            echarts={echarts}
                            option={this.getOption()}
                            notMerge
                            lazyUpdate
                            style={{ height: '100%' }}
                        />
                    }
                    
                </div>
            </div>
        );
    }
  
}

export default IntelligentAnalysis;
