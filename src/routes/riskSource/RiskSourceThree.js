import React, {Component} from 'react'
import {Row, Col, Table, Icon, InputNumber} from 'antd'
import Videos from "./modals/Videos";
import CommonBoxTitle from '../../components/common/CommonBoxTitle'
import '../mainPage/mainPage.less'
import '../riskSource/rickSourceTwo.less'
import '../riskSource/riskSourceThree.less'
import heated from '../../assets/images/heated.png'
import moment from 'moment'
import echarts from 'echarts'
import ReactEcharts from 'echarts-for-react'
import request from "../../utils/request";

class RiskSourceThree extends Component {
  autoFlag = true;
  state = {
    demoData1: [
      {title: '一级过热器', value: 36},
      {title: '二级过热器', value: 24},
      {title: '三级过热器', value: 12}
    ],
    demoData2: [
      {title: '实时温度值', value: 539, unit: '℃'},
      {title: '温度调整速率', value: 3.25},
      {title: '实时压力值', value: 16.43, unit: 'MPa'},
      {title: '压力调整速率', value: 0.26},
      {title: '实时负荷值', value: 239, unit: 't/h'},
      {title: '负荷调整速率', value: 3.14}
    ],
    tableData: [
      {time: moment().format('YYYY-MM-DD HH:mm'), type: 1},
      {time: moment().format('YYYY-MM-DD HH:mm'), type: 2},
      {time: moment().format('YYYY-MM-DD HH:mm'), type: 3},
      {time: moment().format('YYYY-MM-DD HH:mm'), type: 4},
      {time: moment().format('YYYY-MM-DD HH:mm'), type: 1},
      {time: moment().format('YYYY-MM-DD HH:mm'), type: 2},
      {time: moment().format('YYYY-MM-DD HH:mm'), type: 3},
    ],
    options: {
      color: [new echarts.graphic.LinearGradient(
        0, 0, 0, 1,
        [
          {offset: 0, color: '#FFC066'},
          {offset: 1, color: '#755D1D'}
        ]
      ), new echarts.graphic.LinearGradient(
        0, 0, 0, 1,
        [
          {offset: 0, color: '#66D0FF'},
          {offset: 1, color: '#1D5775'}
        ]
      )],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true
      },
      legend: {
        x: 'right',
        y: '5%',
        itemGap: 20,
        textStyle: {
          color: '#ffffff',
        },
        data: ['测量值', '预测值']
      },
      xAxis: [
        {
          type: 'category',
          axisTick: {show: false},
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
          },
          data: ['一月', '二月', '三月', '四月', '五月']
        }
      ],
      yAxis: [
        {
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
          },
        }
      ],
      series: [
        {
          name: '测量值',
          type: 'bar',
          barWidth: 18,
          itemStyle: {
            barBorderRadius: 4
          },
          data: [100, 200, 300, 400, 500]
        },
        {
          name: '预测值',
          type: 'bar',
          barGap: '10%',
          barWidth: 18,
          itemStyle: {
            barBorderRadius: 4
          },
          data: [120, 220, 330, 440, 550]
        },
      ]
    },
    videoUrl: ''
  };

  componentDidMount() {
    const {demoData2} = this.state;
    this.getVideo();
    setInterval(() => {
      demoData2.map((item) => {
        if (this.autoFlag) {
          item.value = Math.floor((item.value + 1) * 100) / 100;
        } else {
          item.value = Math.floor((item.value - 1) * 100) / 100;
        }
      });
      this.setState({
        demoData2,
      });
      this.autoFlag = !this.autoFlag
    }, 2000)
  }

  //改变InputNumber的值
  changeInputNumber = (index, value) => {
    const {demoData2} = this.state;
    demoData2[index].value = value;
    this.setState({
      demoData2
    });
  };

  //获取视频
  getVideo = () => {
    request({
      url: '/wcsSafe/pageVideoRelation/getPageVideoByPageCode',
      method: 'GET',
      params: {
        pageCode: 'SafetyControlBoiler'
      }
    }).then(data => {
      if (data.rc === 0) {
        data.ret && data.ret.length > 0 && request({
          url: `/wcsSafe/video/startVideo`,
          method: 'GET',
          params: {streamCode: data.ret.filter(val => val.remark === '锅炉房北')[0].startUrl}
        })
          .then((data2) => {
            if (data2.rc === 0) {
              this.setState({
                videoUrl: data2.ret || ''
              });
            } else {
              message.error(data2.err, 2);
            }
          })
      } else {
        message.error(data.err, 2);
      }
    })
  };


  render() {
    const {demoData1, demoData2, tableData, options, videoUrl} = this.state;
    const columns = [
      {
        title: '时间',
        key: 'time',
        dataIndex: 'time',
        width: '30%'
      },
      {
        title: '类型',
        key: 'type',
        dataIndex: 'type',
        width: '30%',
        render: (value) => {
          switch (value) {
            case 1:
              return (
                <div style={{color: '#66D0FF'}}>减薄告警</div>
              );
            case 2:
              return (
                <div style={{color: '#66FFEF'}}>化水异常</div>
              );
            case 3:
              return (
                <div style={{color: '#FFC766'}}>吹灰卡顿</div>
              );
            case 4:
              return (
                <div style={{color: '#FF6363'}}>温度偏差</div>
              );
            default:
              break;
          }
        }
      },
      {
        title: '内容',
        key: 'content',
        dataIndex: 'content',
        width: '40%',
        render: (value,row) => {
          switch (row.type) {
            case 1:
              return (
                <div style={{color: '#66D0FF'}}>三级过热器最大减薄值42%,危险点占比13%</div>
              );
            case 2:
              return (
                <div style={{color: '#66FFEF'}}>3项指标出现异常</div>
              );
            case 3:
              return (
                <div style={{color: '#FFC766'}}>hl12吹灰器卡顿报警</div>
              );
            case 4:
              return (
                <div style={{color: '#FF6363'}}>水冷壁3根管道温度明显高于临近管排</div>
              );
            default:
              break;
          }
        }
      }
    ];

    return (
      <div>
        <Row gutter={12}>
          <Col span={8}>
            <div className='commonBox' style={{height: '61vh', overflowY: 'hidden'}}>
              <CommonBoxTitle title="受热面超温时长"/>
              <img src={heated} style={{width: '100%', height: '56vh', marginTop: 10}}/>
            </div>
          </Col>
          <Col span={8}>
            <div className='commonBox' style={{height: '30vh'}}>
              <CommonBoxTitle title="实时超温监控"/>
              <div className='tableHeader'>
                <span style={{width: '50%'}}>受热面名称</span>
                <span style={{width: '50%'}}>超温测点占比</span>
              </div>
              <div style={{textAlign: 'center'}}>
                {
                  demoData1.map((item, index) => {
                    return (
                      <Row key={index}>
                        <Col span={12} style={{marginTop: 30}}>
                          <span className='commonTitle'>{item.title}</span>
                        </Col>
                        <Col span={12} style={{marginTop: 30}}>
                          <span style={{color: '#FFEA54'}}>{item.value}</span>
                          <span style={{color: '#fff'}}>/50</span>
                          <div className='progressBox'>
                            <div className='progressShadow'/>
                            <div className='progressCurrent' style={{width: item.value * 2}}/>
                          </div>
                        </Col>
                      </Row>
                    )
                  })
                }
              </div>
            </div>
            <div className='commonBox' style={{height: '30vh', marginTop: '1vh'}}>
              <CommonBoxTitle title="实时调整速率"/>
              <div style={{textAlign: 'left'}} className='rate'>
                {
                  demoData2.map((item, index) => {
                    return (
                      <Col key={index} offset={2} span={10} style={{marginTop: 40}}>
                        <span className='commonTitle'>{item.title}</span>
                        {/*可修改改为不可修改动态变化*/}
                        <InputNumber value={item.value} style={{marginLeft: 5}}
                                     readOnly={true}
                                     onChange={this.changeInputNumber.bind(this, index)}/>
                        <span className='commonTitle' style={{marginLeft: 5}}>{item.unit || ''}</span>
                      </Col>
                    )
                  })
                }
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div className='commonBox' style={{height: '61vh'}}>
              <CommonBoxTitle title="异常报警"/>
              <div className='tableHeader'>
                <span style={{width: '30%'}}>时间</span>
                <span style={{width: '30%'}}>类型</span>
                <span style={{width: '40%'}}>内容</span>
              </div>
              <div className='commonTable'>
                <Table
                  showHeader={false}
                  columns={columns}
                  dataSource={tableData}
                  pagination={false}
                />
              </div>
            </div>
          </Col>
        </Row>
        <Row gutter={12} style={{marginTop: 12}}>
          <Col span={8}>
            <Videos videoId={'glVideo1'} width={'100%'} headName='锅炉视频' videoUrl={videoUrl}/>
          </Col>
          <Col span={8}>
            <Videos videoId={'glVideo2'} width={'100%'} headName='锅炉视频' videoUrl={videoUrl}/>
          </Col>
          <Col span={8}>
            <div className='commonBox' style={{height: '30vh'}}>
              <CommonBoxTitle title="锅炉整体减薄比"/>
              <div>
                <ReactEcharts
                  option={options}
                  notMerge={true}
                  lazyUpdate={true}
                  style={{height: '26vh'}}
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default RiskSourceThree
