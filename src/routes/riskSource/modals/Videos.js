import React, {Component} from 'react'
import VideoPlayer from '../../../components/common/VideoPlayerRTMP';
import './video.less';
import VideoPlay from "../../../components/common/VideoPlay";
import CommonBoxTitle from '../../../components/common/CommonBoxTitle';

class RiskSourceTwo extends Component {
  state = {};


  render() {
    const {activeKey} = this.state;
    const {headName, width, videoId, videoUrl} = this.props;
    return (
      <div className={'videoContainer'} style={{border: ' 1px solid #66CEFD', width: width || '49%', height: '30vh'}}>
        <CommonBoxTitle title={headName || '油库视频'}/>
        <div style={{width: '96%', height: '83%', margin: '0.5vh auto'}}>
          {
            videoUrl &&
            <VideoPlay
              ID={videoId}
              width={'100%'}
              height={'100%'}
              isLive={true}
              file={videoUrl}
            />
          }
        </div>
      </div>
    )
  }
}

export default RiskSourceTwo
