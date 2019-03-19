import React, {Component} from 'react'
import '../riskSource/rickSourceTwo.less';
import CommonBoxTitle from "../../components/common/CommonBoxTitle";
import ReactEchart from 'echarts-for-react';
import './productionSafe.less';
import Configuration from "./modals/Configuration";
import VideoPlay from "../../components/common/VideoPlay";
import request from "../../utils/request";

class ProductionSafety extends Component {
  state = {
    show: false,
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
        pageCode: 'ProductionSafety'
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

  setWarnOption = () => {
    const option = {
      tooltip: {
        trigger: 'axis'
      },
      grid: {
        left: '11%',
        right: '3%',
        top: '15%'
      },
      xAxis: {
        type: 'category',
        data: ['2018-07', '2018-08', '2018-09', '2018-10', '2018-11', '2018-12'],
        axisLabel: {
          color: '#fff'
        },
        axisLine: {
          lineStyle: {
            color: '#123247',
            width: 2
          }
        }
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          color: '#fff'
        },
        axisLine: {
          lineStyle: {
            color: '#123247',
            width: 2
          }
        },
        splitLine: {
          lineStyle: {
            color: ['#DCDCDC'],
            type: 'dashed',
            opacity: 0.3
          }
        }
      },
      series: [{
        name: '告警总量',
        data: [56, 150, 44, 240, 33, 98, 160],
        type: 'line',
        symbolSize: 8,
      }],
      color: ['#38B5FF']
    };
    return option;
  };

  setRankOption = () => {
    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: '11%',
        right: '3%',
        top: '15%'
      },
      xAxis: [
        {
          type: 'category',
          data: ['SO2', '颗粒物', 'NOx', 'CO', '主汽温度'],
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            lineStyle: {
              color: '#123247',
              width: 2
            }
          },
          axisLabel: {
            color: '#fff'
          },
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#123247',
              width: 2
            }
          },
          axisLabel: {
            color: '#fff'
          },
          splitLine: {
            lineStyle: {
              color: ['#DCDCDC'],
              type: 'dashed',
              opacity: 0.3
            }
          }
        }
      ],
      series: [
        {
          name: '',
          type: 'bar',
          barWidth: '40%',
          data: [52, 200, 334, 390, 220],
          itemStyle: {
            normal: {
              barBorderRadius: [4, 4, 4, 4],
            }
          }
        }
      ],
      color: ['#C7AE69'],
    };
    return option;
  };

  setComparedOption = () => {
    const option = {
      tooltip: {
        trigger: 'axis',
        formatter: '{b0}<br />{a0}:{c0}<br />{a1}: {c1}'
      },
      legend: {
        data: ['本月', '去年本月'],
        textStyle: {
          color: 'white'
        },
        right: 20,
        top: 10
      },
      grid: {
        left: '11%',
        right: '3%',
        top: '15%'
      },
      xAxis: {
        type: 'category',
        data: ['2018-07', '2018-08', '2018-09', '2018-10'],
        axisLabel: {
          color: '#fff'
        },
        axisLine: {
          lineStyle: {
            color: '#123247',
            width: 2
          }
        }
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          color: '#fff'
        },
        axisLine: {
          lineStyle: {
            color: '#123247',
            width: 2
          }
        },
        splitLine: {
          lineStyle: {
            color: ['#DCDCDC'],
            type: 'dashed',
            opacity: 0.3
          }
        }
      },
      series: [
        {
          type: 'line',
          name: '本月',
          data: [20, 40, 33, 40],
          symbolSize: 8,
        },
        {
          type: 'line',
          name: '去年本月',
          data: [30, 35, 38, 40],
          symbolSize: 8,
          /* lineStyle:{
             normal: {
               type:'dashed'
             }
           }*/
        },
        {
          type: 'candlestick',
          data: [
            [20, 30, 20, 30],
            [40, 35, 40, 35],
            [33, 38, 33, 38],
            [40, 40, 40, 40]
          ],
          barWidth: 6,
          itemStyle: {
            color: '#88EAF5',
            color0: '#88EAF5',
            borderWidth: 0,
          },
          legendHoverLink: false,
          hoverAnimation: false,
          silent: true,
          emphasis: {
            itemStyle: {
              borderWidth: 0,
            },
          }
        },
      ],
      color: ['#66D0FF', '#FE767C']
    };
    return option;
  };


  showVideo = (show) => {
    this.setState({
      show
    });
  };

  render() {
    const {show, video} = this.state;
    return (
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div className={'left'} style={{width: '67%'}}>
          <div className={'images'}>
            <Configuration showVideo={this.showVideo}/>
          </div>
          <div className={'videos'}>
            <div className={'charts'}>
              <CommonBoxTitle title={'告警总量变化趋势图'}/>
              <ReactEchart
                option={this.setWarnOption()}
                notMerge={true}
                lazyUpdate={true}
                style={{height: '88%', width: '98%'}}
              />
            </div>
            <div className={'charts'}>
              <CommonBoxTitle title={'参数排名趋势图'}/>
              <ReactEchart
                option={this.setRankOption()}
                notMerge={true}
                lazyUpdate={true}
                style={{height: '88%', width: '98%'}}
              />
            </div>
          </div>
        </div>
        <div className={'right'} style={{width: '32%'}}>
          {
            show ?
              <div className={'battery'} style={{height: '100%'}}>
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
              </div> :
              <div style={{width: '100%'}}>
                <div className={'battery'} style={{height: '45vh'}}>
                  <CommonBoxTitle title={'参数同比变化趋势图'}/>
                  <ReactEchart
                    option={this.setComparedOption()}
                    notMerge={true}
                    lazyUpdate={true}
                    style={{height: '90%', width: '98%'}}
                  />
                </div>
                <div className={'battery'} style={{marginTop: 20, height: '45vh'}}>
                  <CommonBoxTitle title={'参数环比变化趋势图'}/>
                  <ReactEchart
                    option={this.setComparedOption()}
                    notMerge={true}
                    lazyUpdate={true}
                    style={{height: '90%', width: '98%'}}
                  />
                </div>
              </div>
          }
        </div>
      </div>
    )
  }
}

export default ProductionSafety;
