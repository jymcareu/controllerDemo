import React, { Component }from 'react';
import { Link } from 'dva/router';
import { Menu, Dropdown } from 'antd';
import './index.less';
import { Route } from 'dva/router';
import MonitorWarn from './MonitorWarn/index';
import IntelligentAnalysis from './IntelligentAnalysis/index';


class SystemPage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            headerTabs: [
                {
                    name: '监控预警',
                    path: '/system/monitorWarn'
                },{
                    name: '智能分析',
                    path: '/system/intelligentAnalysis'
                }
            ],
        };
    }

    componentWillMount(){
    }

    componentDidMount () {

    }

    render () {
        const { headerTabs } = this.state;
        return (
            <div className='system-page'>
                <div className='system-header'>
                    <div className='system-title'>环保预警平台</div>
                    <div className='header-tabs'>
                        {
                            headerTabs.map((item, index)=>{
                                return <Link key={index} to={item.path}><div className={`system-list ${this.props.location.pathname === item.path ? 'system-list-active' : ''}`}>{item.name}</div></Link>
                                    
                            })
                        }
                    </div>
                    
                </div>
                <div className='clear'></div>
                <div>
                    {/* this.props.children */}
                    <Route path="/system/monitorWarn" exact component={MonitorWarn} />   
                    <Route path="/system/intelligentAnalysis" exact component={IntelligentAnalysis} />   
                </div>
            </div>
        );
    }
  
}

export default SystemPage;
