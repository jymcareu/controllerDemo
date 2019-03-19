import React, {Component} from 'react'
import './rickSourceTwo.less';
import Videos from "./modals/Videos";
import CommonBoxTitle from "../../components/common/CommonBoxTitle";
import echarts from 'echarts';
import ScrollTable from "./modals/ScrollTable";
import yk from '../../assets/images/yk.png'
import request from "../../utils/request";

require('echarts-liquidfill');

class RiskSourceTwo extends Component {
  state = {
    videoUrl: ''
  };

  componentDidMount() {
    this.setWaterChart();
    this.getVideo();
  }

  //获取视频
  getVideo = () => {
    request({
      url: '/wcsSafe/pageVideoRelation/getPageVideoByPageCode',
      method: 'GET',
      params: {
        pageCode: 'SafetyControlOil'
      }
    }).then(data => {
      if (data.rc === 0) {
        data.ret && data.ret.length > 0 && request({
          url: `/wcsSafe/video/startVideo`,
          method: 'GET',
          params: {streamCode: data.ret.filter(val => val.remark === '油库')[0].startUrl}
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

  setWaterChart = () => {
    let chart1 = echarts.init(document.getElementById('batter1'));
    let chart2 = echarts.init(document.getElementById('batter2'));
    chart1.setOption(this.setOption(1));
    chart2.setOption(this.setOption(2));
  };
  setOption = (num) => {
    let option = {
      backgroundColor: '#59748B',
      series: [{
        color: num === 1 ? ['#0FD6CA', '#00F9FF'] : ['#41A6DF'],
        type: 'liquidFill',
        radius: '100%',
        shape: 'container',
        data: [0.5, 0.5],
        outline: {
          show: false
        },
        period: 2000,
        animationDuration: 2000,
        animationDurationUpdate: 1000,
        animationEasingUpdate: 'quarticInOut',
        amplitude: '3%',
        backgroundStyle: {
          borderWidth: 5,
          color: '#040B16',
          shadowBlur: 10, //阴影模糊
          shadowColor: '#00FCED'
        },
        emphasis: {
          itemStyle: {
            opacity: 0
          }
        },
        label: {
          show: true,
          color: '#fff',
          insideColor: '#fff',
          fontSize: 20,
          fontWeight: 'lighter',
          align: 'center',
          baseline: 'middle',
          position: 'inside'
        },
      }]
    };
    return option;
  };

  render() {
    const {videoUrl} = this.state;
    return (
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div className={'left'} style={{width: '67%'}}>
          <div className={'images'}>
            <img src={yk} style={{width: '100%', height: '60vh'}}/>
          </div>
          <div className={'videos'}>
            <Videos videoId={'ykVideo1'} videoUrl={videoUrl}/>
            <Videos videoId={'ykVideo2'} videoUrl={videoUrl}/>
          </div>
        </div>
        <div className={'right'} style={{width: '32%'}}>
          <div className={'battery'}>
            <CommonBoxTitle title={'油库'}/>
            <div style={{display: 'flex', width: '65%', margin: '6vh auto'}}>
              <div>
                <div className={'box'} style={{background: '#0FD6CA'}}/>
                <div className={'batterBox1'}>
                  <div id="batter1" style={{width: '100%', height: '100%'}}/>
                </div>
                <div className={'oil'}>重油：1000t</div>
              </div>
              <div style={{height: 40, border: '1px dashed #999', margin: '50px auto'}}/>
              <div>
                <div className={'box'}/>
                <div className={'batterBox2'}>
                  <div id="batter2" style={{width: '100%', height: '100%'}}/>
                </div>
                <div className={'oil'}>柴油：1000t</div>
              </div>

            </div>

          </div>
          <div className={'table'}>
            <CommonBoxTitle title={'安全事件'}/>
            <ScrollTable/>
          </div>
        </div>
      </div>
    )
  }
}

export default RiskSourceTwo
