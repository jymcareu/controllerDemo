import React, { Component }from 'react';
import './index.less';
import request from '../../../utils/request.js';
import VideoPlayerRTMP from '../../../components/common/VideoPlayerRTMP.js';

class RealPosition extends Component {
    constructor (props) {
        super(props);
        this.state = {
            videoShow: false
        };
    }

    componentWillMount(){
        this.count();
    }

    getVideo = () => {
        request({url: '/wcsSafe/pedestrianTracking/getDemoVideoUrl', method: 'GET'})
        .then((res)=>{
            const item = {};
            item.path = res && res.ret;
            this.setState({
                videoPath: item
            })
            
        })
    }

    count = () => {
        const t = this;
        // t.timeout2 = setTimeout(()=>{
        //     this.setState({
        //         videoShow: false,
        //       });
        // }, 6700)
        t.timeout = setTimeout(()=>{
            this.getVideo();
            this.setState({
                videoShow: true,
              });
        }, 1700)
        // this.time = setInterval(()=>{
        //     t.timeout && clearTimeout(t.timeout);
        //     t.timeout2 && clearTimeout(t.timeout2);
        //     t.timeout2 = setTimeout(()=>{
        //         this.setState({
        //             videoShow: false,
        //           });
        //     }, 6500)
        //     t.timeout = setTimeout(()=>{
        //         this.setState({
        //             videoShow: true,
        //           });
        //     }, 1700)
        // }, 6700);
    }
    

    componentDidMount () {
    }
    componentWillUnmount () {
        // this.time && clearInterval(this.time);
        this.timeout && clearTimeout(this.timeout);
        // this.timeout2 && clearTimeout(this.timeout2);
    }

    render () {
        const { videoShow, videoPath } = this.state;
        return (
            <div className='realPosition'>
                <img className='animate' src={require('../../../assets/images/realPosition.gif')} />
                {
                    videoShow && <div className='videoBox'>
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

export default RealPosition;
