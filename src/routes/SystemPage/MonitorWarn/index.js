import React, { Component }from 'react';
import { Table } from 'antd';
import './index.less';
import request from '../../../utils/request.js';
import MyTable from '../../../components/MyTable/index';

class MonitorWarn extends Component {
    constructor (props) {
        super(props);
        this.state = {
            columns: [
                {
                    title: '序号',
                    dataIndex: 'key',
                    key: 'key',
                    render: (text, record, index) => index + 1
                },
                {
                    title: '预警内容',
                    dataIndex: 'content',
                    key: 'content',
                },{
                    title: '预警时间',
                    dataIndex: 'warnTime',
                    key: 'warnTime',
                },{
                    title: '持续时间',
                    dataIndex: 'duration',
                    key: 'duration',
                },{
                    title: '处理状态',
                    dataIndex: 'status',
                    key: 'status',
                },{
                    title: '处理说明',
                    dataIndex: 'description',
                    key: 'description',
                }
            ],
            dataSource: [
                {
                    id: 1,
                    content: 'SO2小时均值超限预警',
                    warnTime: '20180201 14:34:32',
                    duration: '13min',
                    status: '已处理',
                    description: '提高一次风温度'
                },{
                    id: 2,
                    content: 'SO2小时均值超限预警',
                    warnTime: '20180201 14:34:32',
                    duration: '13min',
                    status: '已处理',
                    description: '提高一次风温度'
                },{
                    id: 3,
                    content: 'SO2小时均值超限预警',
                    warnTime: '20180201 14:34:32',
                    duration: '13min',
                    status: '已处理',
                    description: '提高一次风温度'
                },{
                    id: 4,
                    content: 'SO2小时均值超限预警',
                    warnTime: '20180201 14:34:32',
                    duration: '13min',
                    status: '已处理',
                    description: '提高一次风温度'
                },{
                    id: 5,
                    content: 'SO2小时均值超限预警',
                    warnTime: '20180201 14:34:32',
                    duration: '13min',
                    status: '已处理',
                    description: '提高一次风温度'
                },{
                    id: 6,
                    content: 'SO2小时均值超限预警',
                    warnTime: '20180201 14:34:32',
                    duration: '13min',
                    status: '已处理',
                    description: '提高一次风温度'
                }
            ],
            modalData: [
                {
                    name: 'SO2',
                    value: (Math.random()+18).toFixed(2),
                },{
                    name: 'NOX',
                    value: (Math.random()+34).toFixed(2),
                },{
                    name: 'O2',
                    value: (Math.random()+4).toFixed(2),
                },{
                    name: '温度',
                    value: (Math.random()+11).toFixed(2),
                },{
                    name: '湿度',
                    value: (Math.random()+54).toFixed(2),
                },{
                    name: '压力',
                    value: (-Math.random()).toFixed(2),
                },{
                    name: '流速',
                    value: (Math.random()+13).toFixed(2),
                },{
                    name: '烟尘',
                    value: (Math.random()*3+10).toFixed(2),
                }
            ]
        };
    }

    componentWillMount(){
    }

    componentDidMount () {
        this.count();
    }

    componentWillUnmount() {
        this.timer && clearInterval(this.timer);
    } 

    count = () => {
        this.timer = setInterval(() => {
            const modalData = [
                {name: 'SO2', value: (Math.random()+18).toFixed(2)},
                {name: 'NOX', value: (Math.random()+34).toFixed(2)},
                {name: 'O2', value: (Math.random()+4).toFixed(2)},
                {name: '温度', value: (Math.random()+11).toFixed(2)},
                {name: '湿度', value: (Math.random()+54).toFixed(2)},
                {name: '压力', value: (-Math.random()).toFixed(2)},
                {name: '流速', value: (Math.random()+13).toFixed(2)},
                {name: '烟尘', value: (Math.random()*3+10).toFixed(2)}
            ];
            this.setState({
                modalData
            })
        }, 1000)
    }
    render () {
        const { columns , dataSource, modalData } = this.state;
        return (
            <div className='monitorWarn'>
                <div className='canvasBox'>
                    <img style={{width: 1630, height: 520}} src={require('../../../assets/images/warn-bg.png')} />
                    <div className='dataModal'>
                        <div className='modalTitle'>环保数据看板</div>
                        {
                            modalData.map((item, index)=>{
                                return <div className='dataList' key={index}><span>{`【${item.name}】`}</span><span>{item.value}</span></div>
                            })
                        }
                    </div>
                    <img className='fengji' src={require('../../../assets/images/fengji.png')} />                    
                </div>
                <Table
                    pagination={false}
                    dataSource={dataSource}
                    columns={columns}
                    rowKey='id'
                />
                
            </div>
        );
    }
  
}

export default MonitorWarn;
