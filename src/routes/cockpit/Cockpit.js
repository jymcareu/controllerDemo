import React, {Component} from 'react'
import {connect} from 'dva'
import './Cockpit.less'
import {Row, Col, Table} from 'antd'
import echarts from 'echarts'
import 'echarts/map/js/china.js';
import ReactEcharts from 'echarts-for-react'
import shield1 from '../../assets/images/shield1.png'
import shield2 from '../../assets/images/shield2.png'
import toRight from '../../assets/images/toRight.png'

const geoCoordMap = {
  '济南旺能': [117.121225, 36.66466],
  '淄博旺能': [118.121225, 37.66466],
  '沁阳旺能': [110.121225, 35.66466],
  '许昌旺能': [118.241225, 35.12466],
  '临沂旺能': [116.241225, 32.36466],
  '淮北宇能': [112.241225, 30.36466],
  '荆州旺能': [117.241225, 26.36466],
  '泉州旺能': [102.241225, 24.36466],
  '攀枝花旺能': [108.241225, 26.36466],
  '渠县旺能': [110.241225, 24.36466],
  '河池旺能': [111.241225, 25.36466],
};
const data = [
  {name: '济南旺能', value: 390},
  {name: '淄博旺能', value: 280},
  {name: '沁阳旺能', value: 500},
  {name: '许昌旺能', value: 340},
  {name: '临沂旺能', value: 360},
  {name: '淮北宇能', value: 510},
  {name: '荆州旺能', value: 600},
  {name: '泉州旺能', value: 300},
  {name: '攀枝花旺能', value: 380},
  {name: '渠县旺能', value: 370},
  {name: '河池旺能', value: 310},
];

class Cockpit extends Component {
  value = 0;
  state = {
    leftBox1Data: [
      {title: '安吉旺能', safeLevel: 4},
      {title: '德清旺能', safeLevel: 4},
      {title: '南太湖环保', safeLevel: 4},
      {title: '汕头旺能', safeLevel: 3},
    ],
    shield: [1, 2, 3, 4, 5],
    options1: {
      color: ['#66D0FF', '#F1C14F', '#E5495B'],
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        x: 'center',
        y: '15%',
        itemGap: 40,
        textStyle: {
          color: '#ffffff',
        },
      },
      series: [
        {
          name: '告警数量',
          type: 'pie',
          radius: [30, 110],
          center: ['50%', '60%'],
          roseType: 'area',
          data: [
            {value: 50, name: '一般告警'},
            {value: 30, name: '重要告警'},
            {value: 20, name: '严重告警'},
          ],
          label: {
            normal: {show: true, textStyle: {color: '#ffffff', fontSize: 14}, formatter: "{b}\n\n{d}%"},
            emphasis: {show: true}
          },
          labelLine: {
            normal: {
              show: true, lineStyle: {type: 'dotted'}
            }, emphasis: {show: true}
          },
        }
      ]
    },
    options2: {
      color: ['#3398DB'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        top: '20%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['2018-08', '2018-09', '2018-10', '2018-11', '2018-12', '2019-01'],
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
          name: '单位/个',
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
          name: '告警总量',
          type: 'bar',
          barWidth: 13,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  {offset: 0, color: '#66D0FF'},
                  {offset: 1, color: '#1D5775'}
                ]
              ),
              barBorderRadius: [2, 2, 0, 0],
            },
          },
          data: [10, 20, 35, 28, 12, 8]
        }
      ]
    },
    options3: {
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        top: '20%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['丽水旺能', '沁阳旺能', '南太湖环保', '许昌旺能', '汕头洁源', '临沂旺能', '舟山能源'],
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
          name: '单位/个',
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
          name: '告警总量',
          type: 'bar',
          barWidth: 13,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  {offset: 0, color: '#66D0FF'},
                  {offset: 1, color: '#1D5775'}
                ]
              ),
              barBorderRadius: [2, 2, 0, 0],
            },
          },
          data: [10, 20, 35, 28, 12, 8, 10]
        }
      ]
    },
    options4: {
      color: ['#66D0FF', '#F1C14F', '#E5495B'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        x: '40%',
        y: '6%',
        itemGap: 20,
        textStyle: {
          color: '#66CEFD',
        },
      },
      grid: {
        top: '20%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['丽水旺能', '沁阳旺能', '南太湖环保', '许昌旺能', '汕头洁源', '临沂旺能', '舟山能源'],
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
          name: '单位/个',
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
          name: '一般警告',
          type: 'bar',
          stack: '警告总和',
          barWidth: 27,
          itemStyle: {
            barBorderRadius: [0, 0, 2, 2]
          },
          data: [6, 14, 20, 24, 12, 8, 10]
        },
        {
          name: '重要警告',
          type: 'bar',
          stack: '警告总和',
          barWidth: 27,
          itemStyle: {
            barBorderRadius: [2, 2, 0, 0]
          },
          data: [3, 4, 5, 0, 5, 0, 0]
        },
        {
          name: '严重警告',
          type: 'bar',
          stack: '警告总和',
          barWidth: 27,
          itemStyle: {
            barBorderRadius: [2, 2, 0, 0]
          },
          data: [4, 0, 0, 0, 0, 0, 0]
        }
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
          splitNumber: 4, //刻度数量
          axisLine: {
            lineStyle: {
              color: [
                [0, '#0C2233'],
                [1, '#0C2233']
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
              fontSize: 32,
              color: "#4BBEFF"
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
        {
          type: 'pie',
          zlevel: 2,
          silent: true,
          radius: ['79%', '80%'],
          startAngle: 90,
          label: {
            normal: {
              show: false
            },
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: []
        },
        {
          type: 'pie',
          zlevel: 2,
          silent: true,
          radius: ['64%', '66%'],
          startAngle: 90,
          label: {
            normal: {
              show: false
            },
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: []
        },
        {
          type: 'pie',
          zlevel: 2,
          silent: true,
          radius: ['45%', '46%'],
          startAngle: 90,
          label: {
            normal: {
              show: false
            },
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: []
        },
      ]
    },
    tableData: [
      {num: '01', company: '南太湖环保', time: '2018-10-9 13:18', name: '锅炉', status: '未解除'},
      {num: '02', company: '安吉旺能', time: '2018-10-9 15:18', name: '灰库', status: '已解除'},
      {num: '03', company: '德清旺能', time: '2018-10-9 17:18', name: '锅炉', status: '未解除'},
    ]
  };

  componentDidMount() {
    this.renderInstrumentPanel();
    this.generateChart();
  }

  generateChart = (data) => {
    let chartsOptionMain = {
      backgroundColor: 'transparent',
      tooltip: {
        trigger: 'item',
        formatter: function (params) {
          return params.name + ' : ' + params.value[2];
        }
      },
      geo: {
        map: 'china',
        scaleLimit: {
          min: 0.7,
        },
        label: {
          emphasis: {
            show: false
          }
        },
        roam: true,
        layoutCenter: ["50%", '53%'],
        layoutSize: "120%",
        itemStyle: {
          normal: {
            areaColor: "#01070C",
            borderColor: "#66D0FF",
            borderWidth: 2,
          },
          emphasis: {
            color: 'rgba(7, 16, 24, 8)'
          }
        }
      },
      series: [
        {
          name: '测试点',
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: this.convertData(),
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false
            }
          },
          showEffectOn: 'render',
          rippleEffect: {
            brushType: 'stroke'
          },
          symbolSize: function (val) {
            return val[2] / 20;
          },
          hoverAnimation: true,
          itemStyle: {
            normal: {
              color: '#F1C14F',
              shadowBlur: 10,
              shadowColor: '#F1C14F'
            }
          },
        },
      ]
    };
    let chart = echarts.init(document.getElementById('cockpit-map'));
    chart.on('click', (marker) => {
      if (marker.seriesType === 'effectScatter') {
        this.props.history.push({pathname: 'mainPage/riskSource'});
      }
    });
    chart.setOption(chartsOptionMain);
  };

  convertData = () => {
    let res = [];
    for (let i = 0; i < data.length; i++) {
      let geoCoord = geoCoordMap[data[i].name];
      if (geoCoord) {
        res.push({
          name: data[i].name,
          value: geoCoord.concat(data[i].value)
        });
      }
    }
    return res;
  };

  // 实例初始化
  chartInit = (chart, name) => {
    this[name] = chart;
  };

  //渲染仪表盘
  renderInstrumentPanel = () => {
    const {options5} = this.state;
    options5.series[1].data = this.pie1();
    options5.series[2].data = [{
      value: 25,
      itemStyle: {
        normal: {
          color: "rgba(88,142,197,0.5)",
          borderWidth: 0,
          borderColor: "rgba(0,0,0,0)"
        }
      }
    }];
    options5.series[3].data = this.pie2();
    this.setState({
      options5
    }, function () {
      this.chart5.setOption(this.state.options5, true);
    });
    var interval = setInterval(() => {
      if (this.value < 85) {
        this.value += 1;
        options5.series[0].data[0].value = this.value;
        if (this.value / 100 <= 0.5) {
          options5.series[0].axisLine.lineStyle.color = [[this.value / 100, '#4BBEFF'], [1, '#0C2233']];
        } else if (this.value / 100 > 0.5 && this.value / 100 <= 0.8) {
          options5.series[0].axisLine.lineStyle.color = [
            [0.5, '#4BBEFF'],
            [this.value / 100, '#296DB9'],
            [1, '#0C2233']];
        } else if (this.value / 100 > 0.8 && this.value / 100 <= 1) {
          options5.series[0].axisLine.lineStyle.color = [
            [0.5, '#4BBEFF'],
            [0.8, '#296DB9'],
            [this.value / 100, '#B3943F'],
            [1, '#0C2233']];
        }
        this.setState({
          options5
        }, function () {
          this.chart5.setOption(this.state.options5, true);
        });
      } else {
        clearInterval(interval);
      }
    }, 10);
  };

  pie1 = () => {
    let dataArr = [];
    for (let i = 0; i < 100; i++) {
      if (i > 25 && i <= 50 || i > 75 && i < 100) {
        if (i % 2 === 0) {
          dataArr.push({
            name: (i + 1).toString(),
            value: 25,
            itemStyle: {
              normal: {
                color: "rgba(88,142,197,0.5)",
                borderWidth: 0,
                borderColor: "rgba(0,0,0,0)"
              }
            }
          })
        } else {
          dataArr.push({
            name: (i + 1).toString(),
            value: 20,
            itemStyle: {
              normal: {
                color: "#FFA267",
                borderWidth: 0,
                borderColor: "rgba(0,0,0,0)"
              }
            }
          })
        }
      } else {
        if (i % 2 === 0) {
          dataArr.push({
            name: (i + 1).toString(),
            value: 25,
            itemStyle: {
              normal: {
                color: "rgba(88,142,197,0.5)",
                borderWidth: 0,
                borderColor: "rgba(0,0,0,0)"
              }
            }
          })
        } else {
          dataArr.push({
            name: (i + 1).toString(),
            value: 20,
            itemStyle: {
              normal: {
                color: "rgba(0,0,0,0)",
                borderWidth: 0,
                borderColor: "rgba(0,0,0,0)"
              }
            }
          })
        }
      }
    }
    return dataArr
  };

  pie2 = () => {
    let dataArr = [];
    for (let i = 0; i < 100; i++) {
      if (i % 4 === 0) {
        dataArr.push({
          name: (i + 1).toString(),
          value: 25,
          itemStyle: {
            normal: {
              color: "rgba(88,142,197,0.5)",
              borderWidth: 0,
              borderColor: "rgba(0,0,0,0)"
            }
          }
        })
      } else {
        dataArr.push({
          name: (i + 1).toString(),
          value: 20,
          itemStyle: {
            normal: {
              color: "rgba(0,0,0,0)",
              borderWidth: 0,
              borderColor: "rgba(0,0,0,0)"
            }
          }
        })
      }
    }
    return dataArr
  };


  render() {
    let t = this;
    const {leftBox1Data, shield, options1, options2, options3, options4, options5, tableData} = this.state;
    const columns = [
      {
        title: '序号',
        key: 'num',
        dataIndex: 'num'
      },
      {
        title: '项目公司',
        key: 'company',
        dataIndex: 'company'
      },
      {
        title: '报警时间',
        key: 'time',
        dataIndex: 'time'
      },
      {
        title: '点位名称',
        key: 'name',
        dataIndex: 'name'
      },
      {
        title: '报警状态',
        key: 'status',
        dataIndex: 'status',
        render: (value) => (<div style={value === '未解除' ? {color: '#D0C047'} : {}}>{value}</div>)
      }
    ];
    return (
      <div className='outSideBox'>
        <div className='outSideTitle'/>
        <div className='leftBox1'>
          <div className='boxSubTitle'>项目安全指数</div>
          <div style={{marginLeft: 50, marginTop: 40}}>
            {
              leftBox1Data.map((item, index) => {
                return (
                  <div className='leftBox1-subItem' style={index === 0 ? {} : {marginTop: 32}} key={index}>
                    <div style={{width: 120, display: 'inline-block'}}>{item.title}：</div>
                    <div style={{display: 'inline-block', marginLeft: 16}}>
                      {
                        shield.map((shieldItem, shieldIndex) => {
                          return (
                            <img key={shieldIndex} src={shieldIndex + 1 <= item.safeLevel ? shield1 : shield2}
                                 style={shieldIndex === 0 ? {} : {marginLeft: 32}}/>
                          )
                        })
                      }
                    </div>
                    {
                      index !== leftBox1Data.length - 1 &&
                      <div className='subItem-bottomLine'/>
                    }
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className='leftBox2'>
          <div className='boxSubTitle'>告警类型分布</div>
          <div>
            <ReactEcharts
              option={options1}
              notMerge={true}
              lazyUpdate={true}
              style={{height: 400}}
            />
          </div>
        </div>
        <div className='mapBox'>
          <div className='subTop'>
            <Row style={{textAlign: 'center'}}>
              <Col span={8}>
                <div className='subTitle'>安全管控项目</div>
                <div className='subNumber'>12个</div>
              </Col>
              <Col span={8}>
                <div className='subTitle'>当月总警报</div>
                <div className='subNumber'>12次</div>
              </Col>
              <Col span={8}>
                <div className='subTitle'>连续安全运行</div>
                <div className='subNumber'>350天</div>
              </Col>
            </Row>
          </div>
          <div className='cockpit-map' id="cockpit-map"></div>
        </div>
        <div className='bottomBox'>
          <Col>
            <Col span={12}>
              <div className='boxSubTitle' style={{marginTop: 15}}>告警总量趋势</div>
              <div>
                <ReactEcharts
                  option={options2}
                  notMerge={true}
                  lazyUpdate={true}
                  style={{height: 260}}
                />
              </div>
            </Col>
            <Col span={12}>
              <div className='boxSubTitle' style={{marginTop: 15}}>告警排名</div>
              <div>
                <ReactEcharts
                  option={options3}
                  notMerge={true}
                  lazyUpdate={true}
                  style={{height: 260}}
                />
              </div>
            </Col>
          </Col>
        </div>
        <div className='rightBox1'>
          <div className='boxSubTitle' style={{marginTop: 24}}>项目公司告警类型排名</div>
          <div>
            <ReactEcharts
              option={options4}
              notMerge={true}
              lazyUpdate={true}
              style={{height: 240}}
            />
          </div>
        </div>
        <div className='rightBox2'>
          <div className='boxSubTitle'>安全事件管理</div>
          <div className='boxSubTitle2'>
            更多
            <img src={toRight} style={{marginLeft: 4, marginTop: -3}}/>
          </div>
          <div style={{height: 240, marginTop: 40}}>
            <Row>
              <Col span={14}>
                <div>
                  <ReactEcharts
                    option={options5}
                    onChartReady={(chart) => this.chartInit(chart, 'chart5')}
                    notMerge={true}
                    lazyUpdate={true}
                    style={{height: 240}}
                  />
                </div>
              </Col>
              <Col span={10} style={{fontSize: 22, marginTop: 50}}>
                <div>
                  <span style={{color: '#fff'}}>85</span>
                  <span> / 100条</span>
                </div>
                <div style={{fontSize: 16}}>报警处理率</div>
                <div className='rightBox2Line'></div>
                <div style={{fontSize: 16, marginTop: 10}}>处理情况</div>
                <div style={{color: '#fff'}}>较好</div>
              </Col>
            </Row>
          </div>
          <div style={{height: 240, marginTop: 30}} className='cockpitTable'>
            <Table
              rowKey='num'
              columns={columns}
              dataSource={tableData}
              pagination={false}
            />
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(Cockpit)








