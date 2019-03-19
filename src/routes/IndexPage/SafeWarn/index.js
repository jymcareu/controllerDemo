import React, { Component }from 'react';
import './index.less';
import request from '../../../utils/request.js';
import VideoPlayerRTMP from '../../../components/common/VideoPlayerRTMP.js';

class SafeWarn extends Component {
    constructor (props) {
        super(props);
        this.state = {
        };
    }

    componentWillMount(){
        this.getVideo();
    }

    componentDidMount () {
    }

    getVideo = () => {
        request({url: '/wcsSafe/pageVideoRelation/getPageVideoByPageCode?pageCode=SafetyControl', method: 'GET'})
        .then((res)=>{
            if(res && res.rc === 0){
                // res.ret && request({url: `/wcsSafe/video/startVideo?streamCode=${res.ret.startUrl}`, method: 'GET'})
                res.ret && request({url: `/wcsSafe/video/startVideo?streamCode=st_dzj`, method: 'GET'})
                .then((data)=>{
                    const item = {};
                    item.path = data && data.ret;
                    this.setState({
                        videoPath: item
                    })
                })
                
            }
        })
    }

    render () {
        const { videoShow, videoPath } = this.state;
        return (
            <div className='realPosition'>
                <img className='animate' src={require('../../../assets/images/safeWarn.gif')} />
                {
                    <div className='videoBox'>
                        {
                            videoPath && <VideoPlayerRTMP
                                width={'100%'}
                                height={'100%'}
                                autoplay={true}
                                controls={true}
                                notSupportedMessage={'您的浏览器没有安装或开启Flash,请检查！'}
                                techOrder={ ["html5", "flash"]}
                                sources={ [{src: videoPath.path, type: 'rtmp/mp4'}]}
                            />
                        }
                    </div>
                }
            </div>
        );
    }
  
}

export default SafeWarn;
