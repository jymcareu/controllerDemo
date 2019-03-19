import React, {Component} from 'react'
import {Row, Col, Table, Carousel, Icon} from 'antd'
import CommonBoxTitle from '../../components/common/CommonBoxTitle'
import '../mainPage/mainPage.less'
import echarts from 'echarts'
import ReactEcharts from 'echarts-for-react'
import moment from 'moment'
import url1 from '../../assets/images/carousel.png'
import qlj from '../../assets/images/qlj.png'
import fj from '../../assets/images/fj2.png'
import beng from '../../assets/images/beng.png'

class EquipmentSafety extends Component {
  value1 = 0;
  value2 = 0;
  state = {
    options1: {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        },
        formatter: '{b0}: {c0}'
      },
      grid: {
        top: '8%',
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: 'rgba(18,50,71,1)'
          },
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          color: '#ffffff'
        }
      },
      yAxis: {
        type: 'category',
        axisLine: {
          lineStyle: {
            color: 'rgba(18,50,71,1)'
          },
        },
        axisLabel: {
          color: '#ffffff'
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(243,206,79,0.3)',
            type: 'dotted'
          },
        },
        data: ['1#炉一次风机', '2#循环水泵', '1#给水泵', '1#电机']
      },
      series: [
        {
          name: '总量',
          type: 'bar',
          label: {
            normal: {
              show: false,
              position: 'insideRight'
            }
          },
          barGap: '-100%',
          z: 2,
          barWidth: 20,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0, 0, 1, 0,
                [
                  {offset: 0, color: '#329796'},
                  {offset: 1, color: '#95FFEF'}
                ]
              ),
              barBorderRadius: [2, 2, 0, 0],
            },
          },
          data: [500, 1000, 900, 800]
        },
        {
          name: '',
          type: 'bar',
          label: {
            normal: {
              show: false,
            }
          },
          z: 1,
          barGap: '-100%',
          barWidth: 20,
          itemStyle: {
            normal: {
              color: '#276888'
            },
          },
          data: [2500, 2500, 2500, 2500]
        },
      ]
    },
    options2: {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        top: '16%',
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['2018-08', '2018-09', '2018-10', '2018-11', '2018-12'],
          axisLine: {
            lineStyle: {
              color: 'rgba(18,50,71,1)'
            },
          },
          axisLabel: {
            color: '#ffffff'
          }
        }
      ],
      yAxis: [
        {
          name: '',
          nameTextStyle: {
            color: '#ffffff'
          },
          type: 'value',
          axisLine: {
            lineStyle: {
              color: 'rgba(18,50,71,1)'
            },
          },
          axisLabel: {
            color: '#ffffff'
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(243,206,79,0.3)',
              type: 'dotted'
            },
          }
        }
      ],
      series: [
        {
          name: '设备数量',
          type: 'line',
          symbol: 'circle',
          symbolSize: 12,
          itemStyle: {
            normal: {
              color: '#FFD96E',
            },
          },
          data: [12, 9, 16, 18, 24]
        }
      ]
    },
    options3: {
      series: [
        {
          name: "",
          type: "gauge",
          radius: '60%',
          clockwise: false,
          max: 100,
          min: 0,
          startAngle: 90,
          endAngle: 449.99,
          splitNumber: 10, //刻度数量
          axisLine: {
            lineStyle: {
              color: [
                [0, '#020916'],
                [1, '#020916']
              ],
              width: 0,
              opacity: 0,
            },
            show: true,
          },
          axisTick: {
            show: true,
            lineStyle: {
              color: 'auto',
              width: 10
            },
            length: 10,
            splitNumber: 5
          },
          pointer: {
            show: false
          },
          axisLabel: {
            show: false,
          },
          splitLine: {
            show: false
          },
          detail: {
            formatter: "{value}%",
            offsetCenter: [0, "5%"],
            textStyle: {
              fontSize: 26,
              color: "#fff"
            }
          },
          title: {
            offsetCenter: [0, "60%"]
          },
          data: [{
            name: "",
            value: 0
          }]
        },
      ]
    },
    options4: {
      series: [
        {
          name: "",
          type: "gauge",
          radius: '60%',
          clockwise: false,
          max: 100,
          min: 0,
          startAngle: 90,
          endAngle: 449.99,
          splitNumber: 10, //刻度数量
          axisLine: {
            lineStyle: {
              color: [
                [0, '#020916'],
                [1, '#020916']
              ],
              width: 0,
              opacity: 0,
            },
            show: true,
          },
          axisTick: {
            show: true,
            lineStyle: {
              color: 'auto',
              width: 10
            },
            length: 10,
            splitNumber: 5
          },
          pointer: {
            show: false
          },
          axisLabel: {
            show: false,
          },
          splitLine: {
            show: false
          },
          detail: {
            formatter: "{value}%",
            offsetCenter: [0, "5%"],
            textStyle: {
              fontSize: 26,
              color: "#fff"
            }
          },
          title: {
            offsetCenter: [0, "60%"]
          },
          data: [{
            name: "",
            value: 0
          }]
        },
      ]
    },
    options5: {
      series: [
        {
          name: "",
          type: "gauge",
          radius: '60%',
          clockwise: false,
          max: 100,
          min: 0,
          startAngle: 90,
          endAngle: 449.99,
          splitNumber: 10, //刻度数量
          axisLine: {
            lineStyle: {
              color: [
                [0, '#020916'],
                [1, '#020916']
              ],
              width: 0,
              opacity: 0,
            },
            show: true,
          },
          axisTick: {
            show: true,
            lineStyle: {
              color: 'auto',
              width: 10
            },
            length: 10,
            splitNumber: 5
          },
          pointer: {
            show: false
          },
          axisLabel: {
            show: false,
          },
          splitLine: {
            show: false
          },
          detail: {
            formatter: "{value}%",
            offsetCenter: [0, "5%"],
            textStyle: {
              fontSize: 26,
              color: "#fff"
            }
          },
          title: {
            offsetCenter: [0, "60%"]
          },
          data: [{
            name: "",
            value: 0
          }]
        },
      ]
    },
    options6: {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        },
        formatter: '{a0}: {c0}<br/>{a1}: {c1}<br/>{a2}: {c2}'
      },
      legend: {
        x: 'center',
        y: '5%',
        itemGap: 20,
        textStyle: {
          color: '#ffffff',
        },
        data: ['正常运行', '停机','故障']
      },
      grid: {
        top: '14%',
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: 'rgba(18,50,71,1)'
          },
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          color: '#ffffff'
        }
      },
      yAxis: {
        type: 'category',
        axisLine: {
          lineStyle: {
            color: 'rgba(18,50,71,1)'
          },
        },
        axisLabel: {
          color: '#ffffff'
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(243,206,79,0.3)',
            type: 'dotted'
          },
        },
        data: ['锅炉车间', '汽机车间', '化水车间', '电气车间', '垃圾吊车间']
      },
      series: [
        {
          name: '正常运行',
          type: 'bar',
          label: {
            normal: {
              show: false,
              position: 'insideRight'
            }
          },
          stack:'总量',
          barGap: '-100%',
          z: 2,
          barWidth: 20,
          itemStyle: {
            normal: {
              color:'#66D0FF'
            },
          },
          data: [60,50, 10, 90, 80]
        },
        {
          name: '停机',
          type: 'bar',
          label: {
            normal: {
              show: false,
              position: 'insideRight'
            }
          },
          stack:'总量',
          z: 2,
          barWidth: 20,
          itemStyle: {
            normal: {
              color:'#FFDE6D'
            },
          },
          data: [20,20, 0, 0, 10]
        },
        {
          name: '故障',
          type: 'bar',
          label: {
            normal: {
              show: false,
              position: 'insideRight'
            }
          },
          stack:'总量',
          z: 2,
          barWidth: 20,
          itemStyle: {
            normal: {
              color:'#EE6666'
            },
          },
          data: [10,0, 20, 10, 10]
        },
        {
          name: '',
          type: 'bar',
          label: {
            normal: {
              show: false,
            }
          },
          z: 1,
          barGap: '-100%',
          barWidth: 20,
          itemStyle: {
            normal: {
              color: '#276888'
            },
          },
          data: [150,150, 150, 150, 150]
        },
      ]
    },

    tableData: [
      {num: '01', event: '一次风机故障', eventTime: moment().format('YYYY-MM-DD HH:mm'), status: 1},
      {num: '02', event: '鼓风机温度过高', eventTime: moment().format('YYYY-MM-DD HH:mm'), status: 0},
      {num: '03', event: '一次风机故障', eventTime: moment().format('YYYY-MM-DD HH:mm'), status: 1},
    ],
    subShow: false,
    carouselCurrent: 0
  };

  componentDidMount() {
    this.renderInstrumentPanel();
  }

  renderInstrumentPanel = () => {
    const {options3, options4, options5} = this.state;
    var interval = setInterval(() => {
      if (this.value1 < 78) {
        this.value1 += 1;
        options4.series[0].data[0].value = this.value1;
        options4.series[0].axisLine.lineStyle.color = [[this.value1 / 100, '#69E2CD'], [1, '#020916']];
        this.setState({
          options4,
        }, function () {
          this.chart4.setOption(this.state.options4, true);
        });
      } else {
        clearInterval(interval);
      }
    }, 10);
    var interval2 = setInterval(() => {
      if (this.value2 < 5) {
        this.value2 += 1;
        options5.series[0].data[0].value = this.value2;
        options5.series[0].axisLine.lineStyle.color = [[this.value2 / 100, '#FFD96E'], [1, '#020916']];
        this.setState({
          options5
        }, function () {
          this.chart5.setOption(this.state.options5, true);
        });
      } else {
        clearInterval(interval2);
      }
    }, 10);
  };

  // 实例初始化
  chartInit = (chart, name) => {
    this[name] = chart;
  };

  //页面跳转
  changePage = () => {
    this.props.history.push({pathname: '/mainPage/equipmentSafetyTwo'});
  };

  //展现小弹框
  showSub = () => {
    this.setState({
      subShow: !this.state.subShow
    });
  };

  render() {
    const {options1, options2, options3, options4, options5, options6, tableData, subShow} = this.state;
    const columns = [
      {
        title: '序号',
        key: 'num',
        dataIndex: 'num',
        width: '15%',
      },
      {
        title: '事件',
        key: 'event',
        dataIndex: 'event',
        width: '25%',
      },
      {
        title: '事件时间',
        key: 'eventTime',
        dataIndex: 'eventTime',
        width: '35%',
      },
      {
        title: '状态',
        key: 'status',
        dataIndex: 'status',
        width: '25%',
        render: (value) => (<div style={value === 1 ? {color: '#FFD96E'} : {}}>{value === 0 ? '未处理' : '已处理'}</div>)
      }
    ];

    return (
      <div>
        <Row gutter={12}>
          <Col span={16}>
            <div className='commonBox' style={{height: '60vh', position: 'relative'}}>
              <img src={url1} style={{width: '100%', height: '59.8vh'}}/>
              <div style={{
                color: '#fff',
                position: 'absolute',
                top: '40%',
                left: '40%',
                cursor: 'pointer',
                fontSize: 20
              }} onClick={this.showSub}
              >锅炉车间
              </div>
              {
                subShow &&
                <div style={{
                  position: 'absolute',
                  right: 10,
                  bottom: 200,
                  height: 200,
                  width: 60,
                  borderRadius: 4,
                  color: '#66D0FF',
                  textAlign: 'center',
                  border: '1px solid #66D0FF',
                  backgroundColor: 'rgba(1,17,29,0.7)'
                }}>
                  <div style={{width: 60, height: 60, marginTop: 16, cursor: 'pointer'}} onClick={this.changePage}>
                    <img src={qlj}/>
                    <div>汽轮机</div>
                  </div>
                  <div style={{width: 60, height: 60, cursor: 'pointer'}} onClick={this.changePage}>
                    <img src={fj}/>
                    <div>风机</div>
                  </div>
                  <div style={{width: 60, height: 60, cursor: 'pointer'}} onClick={this.changePage}>
                    <img src={beng}/>
                    <div>泵</div>
                  </div>
                </div>
              }
            </div>
            <div style={{marginTop: '1vh'}}>
              <Row gutter={12}>
                <Col span={12}>
                  <div className='commonBox' style={{height: '31vh'}}>
                    <CommonBoxTitle title="故障设备排行"/>
                    <div>
                      <ReactEcharts
                        option={options1}
                        notMerge={true}
                        lazyUpdate={true}
                        style={{height: '26vh'}}
                      />
                    </div>
                  </div>
                </Col>
                <Col span={12}>
                  <div className='commonBox' style={{height: '31vh'}}>
                    <CommonBoxTitle title="故障设备数量变化趋势"/>
                    <div>
                      <ReactEcharts
                        option={options2}
                        notMerge={true}
                        lazyUpdate={true}
                        style={{height: '26vh'}}
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col span={8}>
            <div className='commonBox' style={{height: '55.5vh'}}>
              <CommonBoxTitle title="厂区设备"/>
              <div style={{height: '22vh', position: 'relative'}}>
                <Col span={8} style={{textAlign:'center'}}>
                  {/*<ReactEcharts*/}
                    {/*option={options3}*/}
                    {/*notMerge={true}*/}
                    {/*lazyUpdate={true}*/}
                    {/*onChartReady={(chart) => this.chartInit(chart, 'chart3')}*/}
                    {/*style={{height: '21vh'}}*/}
                  {/*/>*/}
                  <div style={{lineHeight:'21vh',color:'#fff',fontSize:36}}>
                    456
                  </div>
                  <div className='threeTitle'>设备总数</div>
                </Col>
                <Col span={8}>
                  <ReactEcharts
                    option={options4}
                    notMerge={true}
                    lazyUpdate={true}
                    onChartReady={(chart) => this.chartInit(chart, 'chart4')}
                    style={{height: '21vh'}}
                  />
                  <div className='threeTitle'>设备运行率</div>
                </Col>
                <Col span={8}>
                  <ReactEcharts
                    option={options5}
                    notMerge={true}
                    lazyUpdate={true}
                    onChartReady={(chart) => this.chartInit(chart, 'chart5')}
                    style={{height: '21vh'}}
                  />
                  <div className='threeTitle'>故障率</div>
                </Col>
              </div>
              <CommonBoxTitle title="设备安全事件"/>
              <div style={{height: '24vh', marginTop: '1vh'}} className='commonTable'>
                <div className='tableHeader'>
                  <span style={{width: '15%'}}>序号</span>
                  <span style={{width: '25%'}}>事件</span>
                  <span style={{width: '35%'}}>事件时间</span>
                  <span style={{width: '25%'}}>状态</span>
                </div>
                <Table
                  showHeader={false}
                  rowKey='num'
                  columns={columns}
                  dataSource={tableData}
                  pagination={false}
                />
              </div>
            </div>
            <div className='commonBox' style={{height: '35.5vh', marginTop: '1vh'}}>
              <CommonBoxTitle title="安全事件"/>
              <ReactEcharts
                option={options6}
                notMerge={true}
                lazyUpdate={true}
                style={{height: '30vh'}}
              />
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default EquipmentSafety
