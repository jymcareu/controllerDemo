import React, {Component} from 'react'
import './personal.less';
import map from '../../assets/images/map.png';
import alarm from '../../assets/icons/alarm.png';
import {Badge, Input, Icon} from 'antd';
import '../productionSafe/modals/configuration.less';
import CommonBoxTitle from "../../components/common/CommonBoxTitle";
import VideoPlay from "../../components/common/VideoPlay";
import position from '../../assets/icons/map.png';
import close from "../../assets/icons/close.png";
import request from "../../utils/request";

class PersonnelSafety extends Component {
  state = {
    dataSource: [],
    eventShow: false,
    detailShow:false,
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
      url: '/wcsSafe/pedestrianTracking/getDemoVideoUrl',
      method: 'GET',
    }).then(data => {
      if (data.rc === 0) {
        this.setState({
          videoUrl1: data.ret || '',
          videoUrl2: data.ret || '',
          videoUrl3: data.ret || ''
        });
      } else {
        message.error(data.err, 2);
      }
    })
  };

  showOrHide = () => {
    const {eventShow} = this.state;
    this.setState({
      eventShow: !eventShow
    });
  };

  closeWindow=()=>{
    this.setState({
      detailShow:false
    });
  };

  showDetail=()=>{
    this.setState({
      detailShow:true
    });
  };

  render() {
    let {dataSource, eventShow,detailShow,video} = this.state;
    dataSource = [
      {
        thing: '李明伟进入氨站违禁区域'
      },
      {
        thing: '李明伟进入氨站违禁区域'
      },
      {
        thing: '李明伟进入氨站违禁区域'
      },
      {
        thing: '李明伟进入氨站违禁区域'
      },
    ];

    const detailList = [
      {
        type: '电子围栏闯入',
        person: '李明伟',
        id: '561420',
        time: '2018-12-12 12:22:22',
        note: '触发围栏'
      },
      {
        type: '电子围栏闯入',
        person: '李明伟',
        id: '561420',
        time: '2018-12-12 12:22:22',
        note: '触发围栏'
      }
    ];

    return (
      <div style={{display: 'flex', height: '100%', justifyContent: 'space-between'}}>

        <div className={'map'}>
          <Input
            className={'name-input'}
            prefix={<Icon type="search" style={{color: '#fff', fontSize: 21}}/>}
            placeholder={'请输入人员名称'}
          />
          <img src={map} alt="" style={{width:'100%',height:'95%'}}/>
          {
            !detailShow &&
            <div className="alarm" onClick={this.showOrHide.bind(this, 'eventShow')}>
              <Badge count={5} offset={[-5, 8]}>
                <img src={alarm} alt=""/>
              </Badge>
            </div>
          }

          {
            eventShow && !detailShow &&
            <div className={'safe-modal-header'}>
              <p><span style={{width: '20%'}}>序号</span><span style={{width: '80%'}}>安全事件</span></p>
            </div>
          }
          {
            eventShow && !detailShow &&
            <div className={'ModalBorder safe-modal'}>
              <div className={'warningContent'}>
                <p><span style={{width: '20%'}}>序号</span><span style={{width: '80%'}}>安全事件</span></p>
                <ul>
                  {
                    dataSource.map((val, index) => {
                      return <li key={index} onClick={this.showDetail}>
                        <span style={{width: '20%'}}>{index + 1}</span> <span style={{width: '80%'}}>{val.thing}</span>
                      </li>
                    })
                  }
                </ul>
              </div>
            </div>
          }
          {
            detailShow&&
            <p className={'detail-modal-header'}>
              <b/>
              <b/>
              <b/>
              <b/>
              <span style={{width: '20%'}}>报警类型</span>
              <span style={{width: '10%'}}>人员</span>
              <span style={{width: '10%'}}>ID</span>
              <span style={{width: '30%'}}>报警时间</span>
              <span style={{width: '20%'}}>报警详情</span>
              <span style={{width: '10%'}}>轨道</span>
            </p>
          }
          {
            detailShow &&
            <div className={'ModalBorder detail-modal'}>
              <div className={'warningContent'}>
                <img src={close} alt="" className={'close'} onClick={this.closeWindow}/>
                <div style={{width:120,margin:'0 auto',textAlign:'center',height:60,color:'#66D0FF',fontSize:16,padding:'20px 0'}}>氧站电子围栏禁止所有人入内</div>
                <div style={{width:240,height:1,border:'1px dashed #356EAE',position:'absolute',left:0,top:50}}/>
                <div style={{width:240,height:1,border:'1px dashed #356EAE',position:'absolute',right:0,top:50}}/>
                <p style={{marginTop:40}}>
                  <span style={{width: '20%'}}>报警类型</span>
                  <span style={{width: '10%'}}>人员</span>
                  <span style={{width: '10%'}}>ID</span>
                  <span style={{width: '30%'}}>报警时间</span>
                  <span style={{width: '20%'}}>报警详情</span>
                  <span style={{width: '10%'}}>轨道</span>
                </p>
                <ul>
                  {
                    detailList.map((val, index) => {
                      return <li key={index}>
                        <span style={{width: '20%'}}>{val.type}</span>
                        <span style={{width: '10%'}}>{val.person}</span>
                        <span style={{width: '10%'}}>{val.id}</span>
                        <span style={{width: '30%'}}>{val.time}</span>
                        <span style={{width: '20%'}}>{val.note}</span>
                        <span style={{width: '10%'}}><img src={position} alt=""/></span>
                      </li>
                    })
                  }
                </ul>
              </div>
            </div>
          }
          <div className={'personDot'}/>
          <div className={'path1'}/>
          <div className={'path2'}/>
        </div>
        <div className={'battery'} style={{height: '100%', width: '32%'}}>
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
      </div>

    )
  }
}

export default PersonnelSafety
