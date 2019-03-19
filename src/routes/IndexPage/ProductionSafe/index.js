import React, { Component } from 'react';
import './index.less';
import EquipmentWarn from './EquipmentWarn/index';
import Equipmentanalysis from './Equipmentanalysis/index';
import request from '../../../utils/request.js';
import VideoPlayerRTMP from '../../../components/common/VideoPlayerRTMP.js';

class ProductionSafe extends Component {
    constructor (props) {
        super(props);
        this.state = {
            warnShow: false,
            analysisShow: false,
            data: [
                {x: 5, y: 144, name: '煤仓料位', value: (Math.random()+8).toFixed(2), unit: 'm'},
                {x: 240, y: 87, name: '气包蒸气压A', value: (Math.random()+13).toFixed(2), unit: 'MPa'},
                {x: 240, y: 107, name: '气包蒸气压B', value: (Math.random()+13).toFixed(2), unit: 'MPa'},
                {x: 443, y: 75, name: '汽轮机上汽缸壁温度', value: (Math.random()*30+400).toFixed(2), unit: '℃'},
                {x: 443, y: 97, name: '汽轮机下汽缸壁温度', value: (Math.random()*20+400).toFixed(2), unit: '℃'},
                {x: 443, y: 120, name: '前轴承振动', value: (Math.random()+32).toFixed(2), unit: 'um'},
                {x: 443, y: 144, name: '后径向轴承温度', value: (Math.random()*30+300).toFixed(2), unit: '℃'},
                {x: 443, y: 167, name: '后轴承振动', value: (Math.random()+44).toFixed(2), unit: 'um'},
                {x: 656, y: 273, name: '发电机有效功率', value: (Math.random()+14).toFixed(2), unit: 'MW'},
                {x: 656, y: 298, name: '发电机无功功率', value: (Math.random()+3).toFixed(2), unit: 'MVAR'},
                {x: 656, y: 318, name: '发电机频率', value: (Math.random()+50).toFixed(2), unit: 'HZ'},
                {x: 656, y: 338, name: '发电机出风温度', value: (Math.random()+40).toFixed(2), unit: '℃'},
                {x: 694, y: 423, name: '吸收塔湿电出口烟温', value: (Math.random()+54).toFixed(2), unit: '℃'},
                {x: 694, y: 443, name: '吸收塔湿电出口压力', value: (Math.random()*5+160).toFixed(2), unit: 'K'},
                {x: 1002, y: 412, name: 'SO2', value: (Math.random()+18).toFixed(2)},
                {x: 1002, y: 433, name: 'NOX', value: (Math.random()*4+32).toFixed(2)},
                {x: 1002, y: 455, name: 'O2', value: (Math.random()+4).toFixed(2)},
                {x: 1002, y: 478, name: '湿度', value: (Math.random()*3+10).toFixed(2)},
                {x: 1002, y: 500, name: '温度', value: (Math.random()*5+50).toFixed(2)},
                {x: 1002, y: 522, name: '压力', value: (Math.random()).toFixed(2)},
                {x: 1002, y: 545, name: '流速', value: (Math.random()+13).toFixed(2)},
                {x: 1002, y: 567, name: '烟尘', value: (Math.random()*3+10).toFixed(2)},
                {x: 97, y: 612, name: '炉膛上部烟温', value: (Math.random()*5+765).toFixed(2), unit: '℃', isWarn: true},
                {x: 97, y: 635, name: '炉膛上部压力', value: (-(Math.random()*5+155)).toFixed(2), unit: 'Pa'},
                {x: 97, y: 661, name: '炉膛下部烟温', value: (Math.random()*5+760).toFixed(2), unit: '℃'},
                {x: 97, y: 688, name: '炉膛下部压力', value: (Math.random()+1).toFixed(2), unit: 'KPa'},
                {x: 97, y: 716, name: '锅炉床温', value: (Math.random()+790).toFixed(2), unit: '℃'},
            ]
        };
    }

    componentWillMount(){
        this.getVideo();
    }
    

    componentDidMount () {
        this.initializeCanvas(this.state.data);
    }

    componentWillUnmount() {
        this.timer && clearInterval(this.timer);
    }    
    /* 初始化canvas */
    initializeCanvas = (data) => {
        //初始化canvas以及canvas全局设置
        let t = this;
        let canvas = new fabric.Canvas('main', {
            selection: false,
        });
        canvas.on({
        'object:moving': (e) => {
            e.target.opacity = 0.5;
        },
        'object:modified': (e) => {
            e.target.opacity = 1;
        }
        });
        this.setState({
            canvas: canvas,
        }, () => {
            fabric.Image.fromURL(require('../../../assets/images/productionSafe-bg.png'), (oImg) => {
                oImg.hasControls = false;
                oImg.width = 1260;
                oImg.height = 862;
                oImg.hasBorders = false;
                oImg.selectable = false;
                oImg.hoverCursor = 'default';
                oImg.canvasType = "backgroundImage";
                t.state.canvas.setBackgroundImage(oImg, t.state.canvas.renderAll.bind(t.state.canvas));
                data.forEach((item)=>{
                    this.addText(item.x, item.y, item);
                });
                t.count();
            })
        })
    }

    count = () => {
        this.timer = setInterval(() => {
            const data = [
                {x: 5, y: 144, name: '煤仓料位', value: (Math.random()+8).toFixed(2), unit: 'm'},
                {x: 240, y: 87, name: '气包蒸气压A', value: (Math.random()+13).toFixed(2), unit: 'MPa'},
                {x: 240, y: 107, name: '气包蒸气压B', value: (Math.random()+13).toFixed(2), unit: 'MPa'},
                {x: 443, y: 75, name: '汽轮机上汽缸壁温度', value: (Math.random()*30+400).toFixed(2), unit: '℃'},
                {x: 443, y: 97, name: '汽轮机下汽缸壁温度', value: (Math.random()*20+400).toFixed(2), unit: '℃'},
                {x: 443, y: 120, name: '前轴承振动', value: (Math.random()+32).toFixed(2), unit: 'um'},
                {x: 443, y: 144, name: '后径向轴承温度', value: (Math.random()*30+300).toFixed(2), unit: '℃'},
                {x: 443, y: 167, name: '后轴承振动', value: (Math.random()+44).toFixed(2), unit: 'um'},
                {x: 656, y: 273, name: '发电机有效功率', value: (Math.random()+14).toFixed(2), unit: 'MW'},
                {x: 656, y: 298, name: '发电机无功功率', value: (Math.random()+3).toFixed(2), unit: 'MVAR'},
                {x: 656, y: 318, name: '发电机频率', value: (Math.random()+50).toFixed(2), unit: 'HZ'},
                {x: 656, y: 338, name: '发电机出风温度', value: (Math.random()+40).toFixed(2), unit: '℃'},
                {x: 694, y: 423, name: '吸收塔湿电出口烟温', value: (Math.random()+54).toFixed(2), unit: '℃'},
                {x: 694, y: 443, name: '吸收塔湿电出口压力', value: (Math.random()*5+160).toFixed(2), unit: 'K'},
                {x: 1002, y: 412, name: 'SO2', value: (Math.random()+18).toFixed(2)},
                {x: 1002, y: 433, name: 'NOX', value: (Math.random()*4+32).toFixed(2)},
                {x: 1002, y: 455, name: 'O2', value: (Math.random()+4).toFixed(2)},
                {x: 1002, y: 478, name: '湿度', value: (Math.random()*3+10).toFixed(2)},
                {x: 1002, y: 500, name: '温度', value: (Math.random()*5+50).toFixed(2)},
                {x: 1002, y: 522, name: '压力', value: (Math.random()).toFixed(2)},
                {x: 1002, y: 545, name: '流速', value: (Math.random()+13).toFixed(2)},
                {x: 1002, y: 567, name: '烟尘', value: (Math.random()*3+10).toFixed(2)},
                {x: 97, y: 612, name: '炉膛上部烟温', value: (Math.random()*5+765).toFixed(2), unit: '℃', isWarn: true},
                {x: 97, y: 635, name: '炉膛上部压力', value: (-(Math.random()*5+155)).toFixed(2), unit: 'Pa'},
                {x: 97, y: 661, name: '炉膛下部烟温', value: (Math.random()*5+760).toFixed(2), unit: '℃'},
                {x: 97, y: 688, name: '炉膛下部压力', value: (Math.random()+1).toFixed(2), unit: 'KPa'},
                {x: 97, y: 716, name: '锅炉床温', value: (Math.random()+790).toFixed(2), unit: '℃'},
            ];
            let len = this.state.canvas._objects.length;
            for (let i = 0; i < len; i++) {
                if (this.state.canvas._objects[0]) this.state.canvas.remove(this.state.canvas._objects[0]);
            }
            data.forEach((item)=>{
                this.addText(item.x, item.y, item);
            })
        }, 1000)
    }

    addText = (mouseX = 50, mouseY = 50, data) => {
        const t = this;
        const left = mouseX;
        const top = mouseY;
        const text = new fabric.Text(`${data.name}: ${data.value}${data.unit || ''}`, {
            top: top,
            left: left,
            fontSize: 14,
            fill: data.isWarn ? 'red' : '#009bf5',
            fontWeight: 'bold',
            fontFamily: 'STXihei',
            hasRotatingPoint: false,
            selectable: false,
            hoverCursor: data.isWarn ? 'pointer' : 'default',
        });
        text.data = data;
        data.isWarn && text.on('mousedown', (e)=>{
            t.setState({
                warnShow: true
            })
        })
        this.state.canvas.add(text);
    }

    getVideo = () => {
        request({url: '/wcsSafe/pageVideoRelation/getPageVideoByPageCode?pageCode=ProductionSafety', method: 'GET'})
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

    showWarn = () => {
        this.setState({
            warnShow: true
        })
    }

    showAnalysis = () => {
        this.setState({
            analysisShow: true
        })
    }

    render () {
        const { pathList, warnShow, analysisShow } = this.state;
        return (
            <div className='factorySafe productionSafe'>
                <div className='canvasBox'>
                    <canvas id='main' width={1260} height={862} />
                    {
                        warnShow && <div className='warnBox'>
                            <EquipmentWarn showAnalysis={this.showAnalysis} />
                        </div>
                    }
                    {
                        analysisShow && <div className='analysisBox'>
                            <Equipmentanalysis />
                        </div>
                    }
                </div>
                <div className='videoBox'>
                    {
                        pathList && pathList.length > 0 && pathList.map((item, index)=>{
                            return <div key={index} className='videoLists'>
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

export default ProductionSafe;
