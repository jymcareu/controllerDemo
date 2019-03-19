import React, { Component }from 'react';
import { Carousel } from 'antd';
import './index.less';
import request from '../../../utils/request.js';
import VideoPlayerRTMP from '../../../components/common/VideoPlayerRTMP.js';
import MyTable from '../../../components/MyTable/index';

class FactorySafe extends Component {
    constructor (props) {
        super(props);
        this.state = {
            videoCircle: [
                {x: 810, y: 805, code: 1},
                {x: 455, y: 545, code: 2},
                {x: 514, y: 385, code: 3},
                {x: 740, y: 320, code: 4},
                {x: 705, y: 580, code: 5},
                {x: 550, y: 340, code: 6}
            ],
            columns1: [
                {
                    title: '车辆',
                    dataIndex: 'name',
                    key: 'name',
                },
                {
                    title: '进厂时间',
                    dataIndex: 'time',
                    key: 'time',
                }, {
                    title: '运输类型',
                    dataIndex: 'type',
                    key: 'type',
                }, {
                    title: '重量',
                    dataIndex: 'weight',
                    key: 'weight',
                }
            ],
            dataSource1: [
                {
                    id: 1,
                    name: '浙A38N034',
                    time: '2019/1/23 14:12:54',
                    type: '活性炭',
                    weight: '5t'
                },{
                    id: 2,
                    name: '浙AO9023N',
                    time: '2019/1/23 14:12:54',
                    type: '煤',
                    weight: '15t'
                },{
                    id: 3,
                    name: '浙A38N034',
                    time: '2019/1/23 14:12:54',
                    type: '活性炭',
                    weight: '5t'
                },{
                    id: 4,
                    name: '浙AO9023N',
                    time: '2019/1/23 14:12:54',
                    type: '煤',
                    weight: '15t'
                },{
                    id: 5,
                    name: '浙A38N034',
                    time: '2019/1/23 14:12:54',
                    type: '活性炭',
                    weight: '5t'
                },{
                    id: 6,
                    name: '浙AO9023N',
                    time: '2019/1/23 14:12:54',
                    type: '煤',
                    weight: '15t'
                },
            ],
            columns2: [
                {
                    title: '机组',
                    dataIndex: 'name',
                    key: 'name',
                },
                {
                    title: 'PH',
                    dataIndex: 'ph',
                    key: 'ph',
                }, {
                    title: 'PO4',
                    dataIndex: 'po',
                    key: 'po',
                }, {
                    title: '导电度',
                    dataIndex: 'conductivity',
                    key: 'conductivity',
                }
            ],
            dataSource2: [
                {
                    id: 1,
                    name: '1#',
                    ph: (Math.random()+5).toFixed(2),
                    po: (Math.random()*0.5+0.5).toFixed(2),
                    conductivity: (Math.random()*0.5+5).toFixed(2)
                },{
                    id: 2,
                    name: '2#',
                    ph: (Math.random()+5).toFixed(2),
                    po: (Math.random()*0.5+0.5).toFixed(2),
                    conductivity: (Math.random()*0.5+5).toFixed(2)
                },{
                    id: 3,
                    name: '3#',
                    ph: (Math.random()+5).toFixed(2),
                    po: (Math.random()*0.5+0.5).toFixed(2),
                    conductivity: (Math.random()*0.5+5).toFixed(2)
                },{
                    id: 4,
                    name: '4#',
                    ph: (Math.random()+5).toFixed(2),
                    po: (Math.random()*0.5+0.5).toFixed(2),
                    conductivity: (Math.random()*0.5+5).toFixed(2)
                },{
                    id: 5,
                    name: '5#',
                    ph: (Math.random()+5).toFixed(2),
                    po: (Math.random()*0.5+0.5).toFixed(2),
                    conductivity: (Math.random()*0.5+5).toFixed(2)
                },{
                    id: 6,
                    name: '6#',
                    ph: (Math.random()+5).toFixed(2),
                    po: (Math.random()*0.5+0.5).toFixed(2),
                    conductivity: (Math.random()*0.5+5).toFixed(2)
                },
            ]
        };
    }

    componentWillMount(){
    }

    componentDidMount () {
        this.initializeCanvas(this.state.videoCircle);
        this.getVideo();
    }
    getVideo = () => {
        request({url: '/wcsSafe/pageVideoRelation/getPageVideoByPageCode?pageCode=SafetyControl', method: 'GET'})
        .then((res)=>{
            if(res && res.rc === 0){
                let pathList = [];
                const codeLength = res.ret && res.ret.length;
                res.ret && res.ret.forEach((item, index)=>{
                    request({url: `/wcsSafe/video/startVideo?streamCode=${item.startUrl}`, method: 'GET'})
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
            fabric.Image.fromURL(require('../../../assets/images/canvas-bg2.png'), (oImg) => {
                oImg.hasControls = false;
                oImg.hasBorders = false;
                oImg.selectable = false;
                oImg.hoverCursor = 'default';
                oImg.canvasType = "backgroundImage";
                t.state.canvas.setBackgroundImage(oImg, t.state.canvas.renderAll.bind(t.state.canvas));
                data.map((item)=>{
                    this.addVideo(item.x, item.y, item);
                })
            })
        })
    }
    goBack = () =>{
        const t = this;
        const data = this.state.videoCircle;
        fabric.Image.fromURL(require('../../../assets/images/canvas-bg2.png'), (oImg) => {
            oImg.hasControls = false;
            oImg.hasBorders = false;
            oImg.selectable = false;
            oImg.hoverCursor = 'default';
            oImg.canvasType = "backgroundImage";
            t.state.canvas.setBackgroundImage(oImg, t.state.canvas.renderAll.bind(t.state.canvas));
            data.map((item)=>{
                this.addVideo(item.x, item.y, item);
            })
        })
        this.timer && clearInterval(this.timer);
        this.setState({
            currentCode: null
        })
    }

    addVideo = (mouseX = 50, mouseY = 50, data) => {
        let t = this;
        let left = mouseX;
        let top = mouseY;
        let circle = new fabric.Circle({
            radius: 7,
            fill: 'transparent',
            stroke: '#F00',
            strokeWidth: 2,
            left: left,
            top: top,
            hasRotatingPoint: false,
            selectable: false,
            hoverCursor: 'pointer',
        });
        circle.data = data;
        circle.on('mousedown', (e)=>{
            if(data.code != this.state.currentCode){
                const currentPath = this.state.pathList && this.state.pathList.filter((item)=>item.subCode == data.code);
                if(data.code == 1 || data.code == 2 || data.code == 5){
                    fabric.Image.fromURL(require(`../../../assets/images/project-detail${data.code}.png`), (oImg) => {
                        oImg.hasControls = false;
                        oImg.hasBorders = false;
                        oImg.selectable = false;
                        oImg.hoverCursor = 'default';
                        oImg.canvasType = "backgroundImage";
                        t.state.canvas.setBackgroundImage(oImg, t.state.canvas.renderAll.bind(t.state.canvas));
                    });
                    let len = t.state.canvas._objects.length;
                    for (let i = 0; i < len; i++) {
                        if (t.state.canvas._objects[0]) t.state.canvas.remove(t.state.canvas._objects[0]);
                    }
                    data.code == 2 && this.count();
                }
                
                this.setState({
                    currentCode: data.code,
                    currentPath,
                })
            }else{
                this.setState({
                    currentCode: null,
                    currentPath: null
                })
            }
            
        })
        this.state.canvas.add(circle);
    }

    count = () => {
        this.timer = setInterval(() => {
            const dataSource2 = [
                {
                    id: 1,
                    name: '1#',
                    ph: (Math.random()+5).toFixed(2),
                    po: (Math.random()*0.5+0.5).toFixed(2),
                    conductivity: (Math.random()*0.5+5).toFixed(2)
                },{
                    id: 2,
                    name: '2#',
                    ph: (Math.random()+5).toFixed(2),
                    po: (Math.random()*0.5+0.5).toFixed(2),
                    conductivity: (Math.random()*0.5+5).toFixed(2)
                },{
                    id: 3,
                    name: '3#',
                    ph: (Math.random()+5).toFixed(2),
                    po: (Math.random()*0.5+0.5).toFixed(2),
                    conductivity: (Math.random()*0.5+5).toFixed(2)
                },{
                    id: 4,
                    name: '4#',
                    ph: (Math.random()+5).toFixed(2),
                    po: (Math.random()*0.5+0.5).toFixed(2),
                    conductivity: (Math.random()*0.5+5).toFixed(2)
                },{
                    id: 5,
                    name: '5#',
                    ph: (Math.random()+5).toFixed(2),
                    po: (Math.random()*0.5+0.5).toFixed(2),
                    conductivity: (Math.random()*0.5+5).toFixed(2)
                },{
                    id: 6,
                    name: '6#',
                    ph: (Math.random()+5).toFixed(2),
                    po: (Math.random()*0.5+0.5).toFixed(2),
                    conductivity: (Math.random()*0.5+5).toFixed(2)
                },
            ]

            this.setState({
                dataSource2,
            })
        }, 1000)
    }

    render () {
        const { pathList, currentCode, currentPath, dataSource1, columns1, dataSource2, columns2 } = this.state;
        return (
            <div className='factorySafe'>
                <div className='canvasBox'>
                    <canvas id='main' width={1260} height={862} />
                    {
                        (currentCode == 1 || currentCode == 2 || currentCode == 5) && <div className='comeBack' onClick={this.goBack}><i className='iconfont icon-fanhui' />&nbsp;返回</div>
                    }
                    {
                        (currentCode == 1 || currentCode == 2) && <div className='tableBox2' style={{width: currentCode == 2 ? 300 : 400}}>
                            <MyTable
                                pagination={false}
                                dataSource={currentCode == 1 ? dataSource1 : dataSource2}
                                columns={currentCode == 1 ? columns1 : columns2}
                                rowKey='id'
                            />
                        </div>
                    }
                </div>
                <div className='videoBox'>
                    {
                        pathList &&  pathList.length > 0 && pathList.map((item, index)=>{
                            return index >2 ?
                            null
                            :
                            currentCode && currentPath ?
                                <div key={index} className='videoList'>
                                    <div className='videoName'>{currentPath[0].remark}</div>
                                
                                    <VideoPlayerRTMP
                                        width={'100%'}
                                        height={'240px'}
                                        autoplay={true}
                                        controls={true}
                                        notSupportedMessage={'您的浏览器没有安装或开启Flash,请检查！'}
                                        techOrder={ ["html5", "flash"]}
                                        sources={ [{src: currentPath[0].path, type: 'rtmp/mp4'}]}
                                    />
                                </div>
                                :
                                <div key={index} className='videoList'>
                                    <div className='videoName'>{item.remark}</div>
                                
                                    <VideoPlayerRTMP
                                        width={'100%'}
                                        height={'240px'}
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

export default FactorySafe;
