import React, { Component } from 'react';
import MyTable from '../../../../components/MyTable/index';
import MyChart from '../MyChart/index';
class DataBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            columns: [
                {
                    title: '装机容量',
                    dataIndex: 'installed',
                    key: 'installed',
                },
                {
                    title: '运行容量',
                    dataIndex: 'operate',
                    key: 'operate',
                }, {
                    title: '总负荷(%)',
                    dataIndex: 'totalLoad',
                    key: 'totalLoad',
                }, {
                    title: '负荷率(%)',
                    dataIndex: 'loadFactor',
                    key: 'loadFactor',
                }
            ],
            columns2: [
                {
                    title: '机组',
                    dataIndex: 'flightCrew',
                    key: 'flightCrew',
                    render: (text, record) => record.warn ? <div style={{color: 'red'}}>{text}</div> : text
                },
                {
                    title: '容量',
                    dataIndex: 'capacity',
                    key: 'capacity',
                    render: (text, record) => record.warn ? <div style={{color: 'red'}}>{text}</div> : text
                }, {
                    title: '状态',
                    dataIndex: 'status',
                    key: 'status',
                    render: (text, record) => record.warn ? <div style={{color: 'red'}}>{text}</div> : text
                }, {
                    title: '有功',
                    dataIndex: 'use',
                    key: 'use',
                    render: (text, record) => record.warn ? <div style={{color: 'red'}}>{text}</div> : text
                }, {
                    title: '无功',
                    dataIndex: 'nouse',
                    key: 'nouse',
                    render: (text, record) => record.warn ? <div style={{color: 'red'}}>{text}</div> : text
                }, {
                    title: '负荷率(%)',
                    dataIndex: 'loadFactor',
                    key: 'loadFactor',
                    render: (text, record) => record.warn ? <div style={{color: 'red'}}>{text}</div> : text
                }
            ],
            columns3: [
                {
                    title: 'name',
                    dataIndex: 'name',
                    key: 'name',
                },
                {
                    title: 'value',
                    dataIndex: 'value',
                    key: 'value',
                    render: (text, record) => `${text} ${record.unit}`
                }
            ],
            dataSource2: [
                {
                    id: 1,
                    flightCrew: '#1',
                    capacity: 600,
                    status: '正常',
                    use: (Math.random() * 5 + 470).toFixed(2),
                    nouse: (Math.random() * 5 + 470).toFixed(2),
                    loadFactor: 79,
                }, {
                    id: 2,
                    flightCrew: '#2',
                    capacity: 600,
                    status: '报警',
                    use: (Math.random() * 5 + 475).toFixed(2),
                    nouse: (Math.random() * 5 + 475).toFixed(2),
                    loadFactor: 79,
                    warn: true,
                },
            ],
            dataSource: [
                {
                    id: 11,
                    installed: 1200,
                    operate: 600,
                    totalLoad: 475,
                    loadFactor: 79,
                }
            ],
            dataSource3: [
                {
                    id: 1,
                    name: '计划用量',
                    value: 37000.00,
                    unit: '万千瓦时'
                }, {
                    id: 2,
                    name: '累计用量',
                    value: 17092.02,
                    unit: '万千瓦时'
                }, {
                    id: 3,
                    name: '计划完成率',
                    value: 55.14,
                    unit: '%'
                }
            ],
            dataSource4: [
                {
                    id: 1,
                    name: '计划用量',
                    value: 504000.00,
                    unit: '万千瓦时'
                }, {
                    id: 2,
                    name: '累计用量',
                    value: 17092.02,
                    unit: '万千瓦时'
                }, {
                    id: 3,
                    name: '计划完成率',
                    value: 3.39,
                    unit: '%'
                }
            ]

        };
    }

    componentWillMount() {
        let dataTime = [];
        let chartData = [];
        const dataLength =  new Date().getMinutes < 30 ? new Date().getHours() * 2 : new Date().getHours() * 2 + 1;
        const startTime = new Date(new Date().toLocaleDateString()).getTime();
        for (var i = 0; i < dataLength; i++) {
            chartData.push(parseFloat((Math.random() * 10 + 35).toFixed(2)))
            dataTime.push(startTime + i * 1800000)
        }
        this.setState({
            chartData,
            dataTime
        })
    }

    componentDidMount() {
        this.count();
    }

    componentWillUnmount() {
        this.timer && clearInterval(this.timer);
    }

    count = () => {
        this.timer = setInterval(() => {
            const dataSource2 = [
                {
                    id: 1,
                    flightCrew: '#1',
                    capacity: 600,
                    status: '正常',
                    use: (Math.random() * 5 + 470).toFixed(2),
                    nouse: (Math.random() * 5 + 470).toFixed(2),
                    loadFactor: 79,
                }, {
                    id: 2,
                    flightCrew: '#2',
                    capacity: 600,
                    status: '报警',
                    use: (Math.random() * 5 + 475).toFixed(2),
                    nouse: (Math.random() * 5 + 475).toFixed(2),
                    loadFactor: 79,
                    warn: true,
                },
            ];
            const dataSource3 = [
                {
                    id: 1,
                    name: '计划用量',
                    value: 37000.00,
                    unit: '万千瓦时'
                }, {
                    id: 2,
                    name: '累计用量',
                    value: 17092.02 + this.state.count,
                    unit: '万千瓦时'
                }, {
                    id: 3,
                    name: '计划完成率',
                    value: 55.14,
                    unit: '%'
                }
            ];
            const dataSource4 = [
                {
                    id: 1,
                    name: '计划用量',
                    value: 504000.00,
                    unit: '万千瓦时'
                }, {
                    id: 2,
                    name: '累计用量',
                    value: 17092.02 + this.state.count,
                    unit: '万千瓦时'
                }, {
                    id: 3,
                    name: '计划完成率',
                    value: 3.39,
                    unit: '%'
                }
            ];
            const currentTime = new Date().getMinutes();
            if (currentTime === 30 || currentTime === 0) {
                const dataTime = [];
                const chartData = [];
                const dataLength = currentTime === 0 ? new Date().getHours() * 2 : new Date().getHours() * 2 + 1;
                const startTime = new Date(new Date().toLocaleDateString()).getTime();
                for (var i = 0; i < dataLength; i++) {
                    chartData.push(parseFloat((Math.random() * 10 + 35).toFixed(2)))
                    dataTime.push(startTime + i * 1800000)
                }
                this.setState({
                    chartData,
                    dataTime
                })
            }

            this.setState({
                dataSource2,
                dataSource3,
                dataSource4,
                count: ++this.state.count,
            })
        }, 1000)
    }

    render() {
        const { columns, dataSource, columns2, dataSource2, columns3, dataSource3, dataSource4, chartData, dataTime } = this.state;
        return (
            <div className='dataBox'>
                <div className='tableBox'>
                    <MyTable
                        pagination={false}
                        dataSource={dataSource}
                        columns={columns}
                        rowKey='id'
                    />
                </div>
                <div className='tableBox'>
                    <MyTable
                        pagination={false}
                        dataSource={dataSource2}
                        columns={columns2}
                        rowKey='id'
                    />
                </div>
                <div className='chartBox'>
                    <MyChart
                        chartData={chartData}
                        dataTime={dataTime}
                    />
                </div>
                <div className='vertableBox'>
                    <div className='title'>月度用量</div>
                    <MyTable
                        pagination={false}
                        dataSource={dataSource3}
                        columns={columns3}
                        rowKey='id'
                    />
                </div>
                <div className='vertableBox'>
                    <div className='title'>年度用量</div>
                    <MyTable
                        pagination={false}
                        dataSource={dataSource4}
                        columns={columns3}
                        rowKey='id'
                    />
                </div>
            </div>
        );
    }

}

export default DataBox;
