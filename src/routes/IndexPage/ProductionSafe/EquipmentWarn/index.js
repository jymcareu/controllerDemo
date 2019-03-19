import React, { Component } from 'react';
import './index.less';
import MyTable from '../../../../components/MyTable/index';

class EquipmentWarn extends Component {
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
            <div className='equipmentWarn'>
                <div className='title'><i className='iconfont icon-baojing' /> 设备报警</div>
                <MyTable
                    pagination={false}
                    dataSource={dataSource}
                    columns={columns}
                    rowKey='id'
                    onRow={(record) => {
                        return {
                            onClick: () => {this.props.showAnalysis(record.id)},// 点击行
                        };
                    }}
                />
            </div>
        );
    }
  
}

export default EquipmentWarn;
