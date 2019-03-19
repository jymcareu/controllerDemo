import React, {Component} from 'react'
import {Row, Col, Table, Carousel, Icon, message} from 'antd'
import CommonBoxTitle from '../../components/common/CommonBoxTitle'
import '../mainPage/mainPage.less'
import '../riskSource/riskSourceThree.less'
import './equipmentSafety.less'
import ReactEcharts from 'echarts-for-react'
import VideoPlay from '../../components/common/VideoPlay'

import moment from 'moment'
import url1 from '../../assets/images/carousel.png'
import request from "../../utils/request";


class EquipmentSafetyTwo extends Component {
  state = {
    tableData: [
      {num: '01', event: '一次风机故障', eventTime: moment().format('YYYY-MM-DD HH:mm'), status: 1},
      {num: '02', event: '鼓风机温度过高', eventTime: moment().format('YYYY-MM-DD HH:mm'), status: 0},
      {num: '03', event: '一次风机故障', eventTime: moment().format('YYYY-MM-DD HH:mm'), status: 1},
    ],
    demoData1: [
      {title: '设备名称', value: '1#炉一次风机'},
      {title: '规格型号', value: 'YSPKK450.4'},
      {title: '出厂编号', value: 'J1613516'},
      {title: '出厂年月', value: '2016年11月'},
      {title: '制造厂商', value: '湘潭电机股份有限公司', span: 24},
      {title: '技术参数', value: '转速：1488r/min 电机功率：315KW', span: 24},
    ],
    demoData2: [
      {content1: 1200, content2: 600, total: 475.68, totalRate: '79.30%'},
    ],
    demoData3: [
      {jz: '#1', content: 600, status: 0, yg: -0.04, wg: 0, rate: '79.30%'},
      {jz: '#2', content: 600, status: 1, yg: -0.04, wg: 0, rate: '79.30%'},
    ],
    demoData4: [
      {title: '计划电量', value: '30000.00万千瓦时'},
      {title: '累计电量', value: '17000.00万千瓦时'},
      {title: '计划完成率', value: '55.14%'},
      {title: '累计电量', value: '17000.00万千瓦时'},
    ],
    options: {
      grid: {
        top: '16%',
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true
      },
      xAxis: [
        {
          boundaryGap: false,
          type: 'category',
          data: ['0', '100', '200', '300', '400', '500', '600'],
          axisLine: {
            lineStyle: {
              color: '#66D0FF'
            },
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#ffffff'
          }
        }
      ],
      yAxis: [
        {
          name: '',
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#66D0FF'
            },
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitLine: {
            show: false
          }
        }
      ],
      series: [
        {
          name: '设备数量',
          type: 'line',
          symbol: 'circle',
          symbolSize: 0,
          itemStyle: {
            normal: {
              color: '#66D0FF',
            },
          },
          data: [100, 200, 180, 300, 260, 130, 130]
        }
      ]
    },
    videoUrl1: '',
    videoUrl2: '',
    videoUrl3: '',
    video: [1, 2, 3]
  };

  componentDidMount() {
    this.getVideo();
  }

  //获取视频
  getVideo = () => {
    request({
      url: '/wcsSafe/pageVideoRelation/getPageVideoByPageCode',
      method: 'GET',
      params: {
        pageCode: 'DeviceSafety'
      }
    }).then(data => {
      if (data.rc === 0) {
        data.ret && data.ret.length > 0 &&
        data.ret.map((item, index) => {
          request({
            url: `/wcsSafe/video/startVideo`,
            method: 'GET',
            params: {streamCode: item.startUrl}
          })
            .then((data2) => {
              if (data2.rc === 0) {
                this.setState({
                  [`videoUrl${index + 1}`]: data2.ret || ''
                });
              } else {
                message.error(data2.err, 2);
              }
            })

        })
      } else {
        message.error(data.err, 2);
      }
    })
  };


  render() {
    const {tableData, demoData1, demoData2, demoData3, demoData4, options, video} = this.state;
    const columns = [
      {
        title: '序号',
        key: 'num',
        dataIndex: 'num',
        width: '20%',
      },
      {
        title: '事件',
        key: 'event',
        dataIndex: 'event',
        width: '40%',
      },
      {
        title: '事件时间',
        key: 'eventTime',
        dataIndex: 'eventTime',
        width: '40%',
      },
    ];
    const subColumns1 = [
      {
        title: '装机容量',
        key: 'content1',
        dataIndex: 'content1',
        width: '25%',
      },
      {
        title: '运行容量',
        key: 'content2',
        dataIndex: 'content2',
        width: '25%',
      },
      {
        title: '总负荷',
        key: 'total',
        dataIndex: 'total',
        width: '25%',
      },
      {
        title: '负荷率',
        key: 'totalRate',
        dataIndex: 'totalRate',
        width: '25%',
      },
    ];
    const subColumns2 = [
      {
        title: '机组',
        key: 'jz',
        dataIndex: 'jz',
      },
      {
        title: '容量',
        key: 'content',
        dataIndex: 'content',
      },
      {
        title: '状态',
        key: 'status',
        dataIndex: 'status',
      },
      {
        title: '有功',
        key: 'yg',
        dataIndex: 'yg',
      },
      {
        title: '无功',
        key: 'wg',
        dataIndex: 'wg',
      },
      {
        title: '负荷率',
        key: 'rate',
        dataIndex: 'rate',
      },
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
              <div style={{
                position: 'absolute',
                right: 20,
                top: '2vh',
                width: 316,
                paddingBottom: 6,
                color: '#fff',
                borderRadius: 4,
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.7)',
                backgroundColor: 'rgba(1,17,29,0.7)'
              }}>
                <div className='equTable'>
                  <Table
                    rowKey='num'
                    columns={subColumns1}
                    dataSource={demoData2}
                    pagination={false}
                  />
                  <Table
                    rowKey='num'
                    columns={subColumns2}
                    dataSource={demoData3}
                    pagination={false}
                  />
                </div>
                <div className='splitLine'/>
                <div>
                  <ReactEcharts
                    option={options}
                    notMerge={true}
                    lazyUpdate={true}
                    style={{height: '16vh'}}
                  />
                </div>
                <div style={{backgroundColor: '#0F2F43', textAlign: 'left'}}>
                  <span style={{color: '#66D0FF', marginLeft: 10, fontSize: 11, lineHeight: '28px'}}>月度电量</span>
                </div>
                {
                  demoData4.map((item, index) => {
                    return (
                      <Row key={index}>
                        <Col offset={1} span={11}
                             style={{textAlign: 'left', fontSize: 11, marginTop: 2, marginBottom: 2}}>
                          {item.title}
                        </Col>
                        <Col span={11} style={{textAlign: 'right', fontSize: 11, marginTop: 2, marginBottom: 2}}>
                          {item.value}
                        </Col>
                      </Row>
                    )
                  })
                }
                <div style={{backgroundColor: '#0F2F43', textAlign: 'left'}}>
                  <span style={{color: '#66D0FF', marginLeft: 10, fontSize: 11, lineHeight: '28px'}}>年度电量</span>
                </div>
                {
                  demoData4.map((item, index) => {
                    return (
                      <Row key={index}>
                        <Col offset={1} span={11}
                             style={{textAlign: 'left', fontSize: 11, marginTop: 2, marginBottom: 2}}>
                          {item.title}
                        </Col>
                        <Col span={11} style={{textAlign: 'right', fontSize: 11, marginTop: 2, marginBottom: 2}}>
                          {item.value}
                        </Col>
                      </Row>
                    )
                  })
                }
              </div>
            </div>
            <div style={{marginTop: '1vh'}}>
              <Row gutter={12}>
                <Col span={12}>
                  <div className='commonBox' style={{height: '31vh'}}>
                    <CommonBoxTitle title="设备档案"/>
                    <div style={{marginTop: '1vh', marginLeft: 60}}>
                      {
                        demoData1.map((item, index) => {
                          return (
                            <Col span={item.span || 12} key={index} style={{marginTop: '3vh'}}>
                              <span className='commonTitle'>{item.title}：</span>
                              <span className='commonValue' style={{marginLeft: 10}}>{item.value}</span>
                            </Col>
                          )
                        })
                      }
                    </div>
                  </div>
                </Col>
                <Col span={12}>
                  <div className='commonBox' style={{height: '31vh'}}>
                    <CommonBoxTitle title="历史事件"/>
                    <div className='tableHeader'>
                      <span style={{width: '20%'}}>序号</span>
                      <span style={{width: '40%'}}>事件</span>
                      <span style={{width: '40%'}}>事件时间</span>
                    </div>
                    <div className='commonTable'>
                      <Table
                        showHeader={false}
                        rowKey='num'
                        columns={columns}
                        dataSource={tableData}
                        pagination={false}
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col span={8}>
            <div className={'battery'} style={{height: '92vh'}}>
              <CommonBoxTitle title={'实时视频'}/>
              {
                video.map((item, index) => {
                  return (
                    <div key={index} style={{width: '96%', height: '31%', margin: '1% auto 0'}}>
                      {
                        this.state[`videoUrl${index + 1}`] && <VideoPlay
                          ID={`proVideo${index + 1}`}
                          width={'100%'}
                          height={'100%'}
                          file={this.state[`videoUrl${index + 1}`]}
                        />
                      }
                    </div>
                  )
                })
              }
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default EquipmentSafetyTwo
