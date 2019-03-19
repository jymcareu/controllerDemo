import React, { Component }from 'react';
import './index.less';
import request from '../../../utils/request.js';
import VideoPlayerRTMP from '../../../components/common/VideoPlayerRTMP.js';

class EleControl extends Component {
    constructor (props) {
        super(props);
        this.state = {
            videoShow: false
        };
    }

    componentWillMount(){
        this.count();
    }

    componentDidMount () {
    }

    componentWillUnmount () {
        // this.time && clearInterval(this.time);
        this.timeout && clearTimeout(this.timeout);
        // this.timeout2 && clearTimeout(this.timeout2);
    }

    count = () => {
        const t = this;
        // t.timeout2 = setTimeout(()=>{
        //     this.setState({
        //         videoShow: false,
        //       });
        // }, 4800)
        t.timeout = setTimeout(()=>{
            this.getVideo();
            this.setState({
                videoShow: true,
              });
        }, 3000)
        // this.time = setInterval(()=>{
        //     t.timeout && clearTimeout(t.timeout);
        //     t.timeout2 && clearTimeout(t.timeout2);
        //     t.timeout2 = setTimeout(()=>{
        //         this.setState({
        //             videoShow: false,
        //           });
        //     }, 4800)
        //     t.timeout = setTimeout(()=>{
        //         this.setState({
        //             videoShow: true,
        //           });
        //     }, 3000)
        // }, 4900);
    }

    getVideo = () => {
        request({url: '/wcsSafe/pageVideoRelation/getPageVideoByPageCode?pageCode=SafetyControl', method: 'GET'})
        .then((res)=>{
            if(res && res.rc === 0){
                // res.ret && request({url: `/wcs/video/startVideo?streamCode=${res.ret.startUrl}`, method: 'GET'})
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
                <img className='animate' src={require('../../../assets/images/eleControl.gif')} />
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

export default EleControl;
