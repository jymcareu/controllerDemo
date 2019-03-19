import React, { Component } from 'react';
import './index.less';

class Equipmentanalysis extends Component {
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
                    title: '设备名称',
                    dataIndex: 'deviceName',
                    key: 'deviceName',
                },{
                    title: '测点名称',
                    dataIndex: 'name',
                    key: 'name',
                },{
                    title: '测点编码',
                    dataIndex: 'code',
                    key: 'code',
                },{
                    title: '状态',
                    dataIndex: 'status',
                    key: 'status',
                }
            ],
            dataSource: [
                {
                    id: 1,
                    deviceName: '锅炉',
                    name: '炉膛上部烟温',
                    code: 'code_1897',
                    status: '超下限',
                }
            ]
        };
    }

    componentWillMount(){
    }
    

    componentDidMount () {
    }

    render () {
        const { dataSource, columns } = this.state;
        return (
            <div className='equipmentAnalysis'>
                <div className='title'>设备报警诊断</div>
                <p>
                    1.判断冷水壁有无泄漏，影响出口温度。
                </p>
                <p>
                    2.合理调整返料风量，提高小颗粒的回收率可有效降低床温，提高出口温度。
                </p>
                <p>
                    3.可以适当提高一次风量，降低床温，提高出口温度。
                </p>
            </div>
        );
    }
  
}

export default Equipmentanalysis;
