import React, { Component }from 'react';
import './index.less';
import MyTable from '../../../components/MyTable/index';
import MyChart from './MyChart/index';
import DataBox from './DataBox/index';
import request from '../../../utils/request.js';
import VideoPlayerRTMP from '../../../components/common/VideoPlayerRTMP.js';

class EquipmentSafe extends Component {
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
        request({url: '/wcsSafe/pageVideoRelation/getPageVideoByPageCode?pageCode=DeviceSafety', method: 'GET'})
        .then((res)=>{
            if(res && res.rc === 0){
                let pathList = [];
                const codeLength = res.ret && res.ret.length;
                res.ret && res.ret.forEach((item, index)=>{
                    request({url: `/wcsSafe/video/startVideo?streamCode=${item.startUrl}`, method: 'GET'})
                    // request({url: `/wcsSafe/video/startVideo?streamCode=st_dzj`, method: 'GET'})
                    .then((data)=>{
                        item.path = data && data.ret;
                        pathList.push(item);
                        codeLength - 1 ===  index ?
                        this.setState({
                            pathList
                        })
                        :
                        ''
                    })
                })
                
            }
        })
    }

    render () {
        const { columns, dataSource, columns2, dataSource2, pathList } = this.state;
        return (
            <div className='factorySafe equipmentSafe'>
                <div className='canvasBox'>
                    <img src={require('../../../assets/images/equipmentSafe2.png')} />
                    <DataBox />
                </div>
                <div className='videoBox'>
                    {
                        pathList && pathList.length > 0 && pathList.map((item, index)=>{
                            return <div key={index} className='videoList'>
                                    <VideoPlayerRTMP
                                        width={'100%'}
                                        height={'100%'}
                                        autoplay={true}
                                        controls={true}
                                        notSupportedMessage={'您的浏览器没有安装或开启Flash,请检查！'}
                                        techOrder={ ["html5", "flash"]}
                                        sources={ [{src: item.path, type: 'rtmp/mp4'}]}
                                    />
                            </div>
                        })
                    }
                </div>
            </div>
        );
    }
  
}

export default EquipmentSafe;
