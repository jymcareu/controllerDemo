import React, {Component} from 'react'
import {Row, Col, Table, Carousel, Icon} from 'antd'
import CommonBoxTitle from '../../components/common/CommonBoxTitle'
import '../mainPage/mainPage.less'
import echarts from 'echarts'
import ReactEcharts from 'echarts-for-react'
import ScrollTable from "./modals/ScrollTable";
import url1 from '../../assets/images/carousel.png'
import red from '../../assets/images/red.png'
import blue from '../../assets/images/blue.png'
import yellow from '../../assets/images/yellow.png'
import yellowAlarm from '../../assets/images/yellowAlarm.png'
import blueAlarm from '../../assets/images/blueAlarm.png'
import smallRed from '../../assets/images/smallRed.png'
import smallBlue from '../../assets/images/smallBlue.png'
import smallYellow from '../../assets/images/smallYellow.png'
import heated from '../../assets/images/heated.png'
import yk from '../../assets/images/yk.png'

class RiskSource extends Component {
  state = {
    options1: {
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
          data: ['油库', '贮煤场', '变压器', '主厂房', '锅炉'],
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
          name: '事件总量',
          type: 'bar',
          barWidth: 28,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  {offset: 0, color: '#4FD0DC'},
                  {offset: 1, color: '#6EEBD0'}
                ]
              ),
              barBorderRadius: [2, 2, 0, 0],
            },
          },
          data: [18, 6, 12, 7, 15]
        }
      ]
    },
    options2: {
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
        data: ['油库跑冒滴漏', '贮煤场库存超上限', '锅炉蒸汽压力超上限', '油库消防器材过期']
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
                  {offset: 0, color: '#EDDC50'},
                  {offset: 1, color: '#FDA953'}
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
    tableData: [
      {source: '贮煤场', level: '一级', status: 1},
      {source: '主厂房', level: '一级', status: 0},
      {source: '变压器', level: '二级', status: 1},
      {source: '油库', level: '一级', status: 0},
      {source: '锅炉', level: '一级', status: 1},
    ],
    //原来以为是要做成轮播，后来需求说并不是，所以改掉了，所以目前的实现方法有点奇怪
    imgData: [
      {
        url: url1,
        go: 1,
        red: {url: red, top: '70%', left: '55%'},
        blue: {url: blue, top: '36%', left: '42%'},
        yellow: {url: yellow, top: '20%', left: '30%'},
        bottomImg:yk
      },
      {
        url: url1,
        go: 2,
        bottomImg:heated
      },
    ],
    carouselCurrent: 0
  };

  //图片切换
  next = () => {
    this.slider.slick.slickNext();
    this.setState({
      carouselCurrent: this.state.carouselCurrent === this.state.imgData.length - 1 ? 0 : this.state.carouselCurrent + 1
    });
  };
  prev = () => {
    this.slider.slick.slickPrev();
    this.setState({
      carouselCurrent: this.state.carouselCurrent === 0 ? this.state.imgData.length - 1 : this.state.carouselCurrent - 1
    });
  };
  goTo = (value) => {
    this.setState({
      carouselCurrent: value
    });
    this.slider.slick.slickGoTo(value)
  };

  //页面跳转
  changePage = (value) => {
    if (value === 1) {
      this.props.history.push({pathname: '/mainPage/riskSourceTwo'});
    } else {
      this.props.history.push({pathname: '/mainPage/riskSourceThree'});
    }
  };


  render() {
    const {options1, options2, tableData, imgData, carouselCurrent} = this.state;
    const columns = [
      {
        title: '序号',
        key: 'num',
        dataIndex: 'num',
        width: '25%',
        render: (value, row, index) => (index + 1)
      },
      {
        title: '风险源',
        key: 'source',
        dataIndex: 'source',
        width: '25%',
      },
      {
        title: '风险源等级',
        key: 'level',
        dataIndex: 'level',
        width: '25%',
      },
      {
        title: '当前状态',
        key: 'status',
        dataIndex: 'status',
        width: '25%',
        render: (value) => (<div>
          {
            value === 1 ?
              <img src={yellowAlarm}/> : <img src={blueAlarm}/>
          }
        </div>)
      }
    ];

    return (
      <div>
        <Row gutter={12}>
          <Col span={16}>
            <div className='commonBox' style={{height: '60vh', position: 'relative'}}>
              <Carousel dots={false} autoplay={false} ref={el => (this.slider = el)}>
                {
                  imgData && imgData.length > 0 && imgData.map((item, index) => {
                    return (
                      <div key={index} style={{position: 'relative'}}>
                        <img src={item.url} style={{width: '100%', height: '59.8vh'}}/>
                      </div>
                    )
                  })
                }
              </Carousel>
              <div style={{
                position: 'absolute',
                right: 10,
                bottom: 140,
                height: 114,
                width: 110,
                borderRadius: 10,
                textAlign: 'center',
                boxShadow: '0px 1px 10px 0px rgba(57, 184, 136, 0.5)',
                backgroundColor: 'rgba(0,0,0,0.35)'
              }}>
                <div style={{marginTop: 12}}><img src={smallRed}/><span
                  style={{color: '#fff', marginLeft: 5}}>一级风险源</span></div>
                <div style={{marginTop: 10}}><img src={smallYellow}/><span
                  style={{color: '#fff', marginLeft: 5}}>二级风险源</span></div>
                <div style={{marginTop: 10}}><img src={smallBlue}/><span
                  style={{color: '#fff', marginLeft: 5}}>三级风险源</span></div>
              </div>
              <div>
                {
                  imgData && imgData.length > 0 && imgData.map((item, index) => {
                    return (
                      index === carouselCurrent &&
                      <div key={index}>
                        <img src={item.red.url}
                             style={{position: 'absolute', top: item.red.top, left: item.red.left, cursor: 'pointer'}}
                        />
                        <img src={item.blue.url}
                             style={{position: 'absolute', top: item.blue.top, left: item.blue.left, cursor: 'pointer'}}
                             onClick={this.changePage.bind(this, 2)}
                        />
                        <img src={item.yellow.url}
                             style={{
                               position: 'absolute',
                               top: item.yellow.top,
                               left: item.yellow.left,
                               cursor: 'pointer'
                             }}
                             onClick={this.changePage.bind(this, 1)}
                        />
                      </div>
                    )
                  })
                }
              </div>
              <div style={{
                width: '100%',
                height: 130,
                backgroundColor: 'rgba(0, 0, 0, 0.35)',
                position: 'absolute',
                bottom: 0,
                zIndex: 99
              }}>
                <div
                  style={{
                    width: 36,
                    height: 40,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    float: 'left',
                    marginTop: 45,
                    marginLeft: 10,
                    borderRadius: 6
                  }}>
                  <Icon type="left"
                        style={{fontSize: 24, color: '#fff', width: '100%', marginTop: 8, cursor: 'pointer'}}
                    // onClick={this.prev}
                  />
                </div>
                <div
                  style={{
                    width: '90%',
                    height: 120,
                    marginTop: 8,
                    float: 'left',
                    overflowX: 'hidden'
                  }}>
                  {
                    imgData && imgData.length > 0 && imgData.map((item, index) => {
                      return (
                        <div
                          key={index}
                          // onClick={this.goTo.bind(this, index)}
                          onClick={this.changePage.bind(this, item.go)}
                          style={
                            {
                              cursor: 'pointer',
                              position: 'relative',
                              display: 'inline-block',
                              marginLeft: 10,
                              border: '1px solid #3988B8'
                            }
                          }>
                          <img src={item.bottomImg} style={{width: 90, height: 110}}/>
                        </div>
                      )
                    })
                  }
                </div>
                <div
                  style={{
                    width: 36,
                    height: 40,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    float: 'right',
                    marginTop: 45,
                    marginRight: 10,
                    borderRadius: 6
                  }}>
                  <Icon type="right"
                        style={{fontSize: 24, color: '#fff', width: '100%', marginTop: 8, cursor: 'pointer'}}
                    // onClick={this.next}
                  />
                </div>
              </div>
            </div>
            <div style={{marginTop: '1vh'}}>
              <Row gutter={12}>
                <Col span={12}>
                  <div className='commonBox' style={{height: '31vh'}}>
                    <CommonBoxTitle title="安全事件统计"/>
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
                    <CommonBoxTitle title="安全事件排行榜"/>
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
            <div className='commonBox' style={{height: '40.5vh'}}>
              <CommonBoxTitle title="重大风险源看板"/>
              <div style={{height: 320, marginTop: 10}} className='commonTable'>
                <div className='tableHeader'>
                  <span style={{width: '25%'}}>序号</span>
                  <span style={{width: '25%'}}>风险源</span>
                  <span style={{width: '25%'}}>风险源等级</span>
                  <span style={{width: '25%'}}>当前状态</span>
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
            <div className='commonBox' style={{height: '50.5vh', marginTop: '1vh'}}>
              <CommonBoxTitle title="安全事件"/>
              <ScrollTable/>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default RiskSource
