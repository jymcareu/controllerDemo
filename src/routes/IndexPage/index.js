import React, { Component }from 'react';
import { Link } from 'dva/router';
import { Menu, Dropdown } from 'antd';
import './index.less';
import { Route } from 'dva/router';
import FactorySafe from './FactorySafe/index';
import EquipmentSafe from './EquipmentSafe/index';
import RealPosition from './RealPosition/index';
import EleControl from './EleControl/index';
import SafeWarn from './SafeWarn/index';
import ProductionSafe from './ProductionSafe/index';

class IndexPage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            headerTabs: [
                {
                    icon: 'icon-anquan-copy',
                    name: '厂区安全管控图',
                    path: '/index/factorySafe'
                },{
                    icon: 'icon-shebei',
                    name: '设备安全',
                    path: '/index/equipmentSafe'
                },{
                    icon: 'icon-renyuan',
                    name: '人员安全',
                },{
                    icon: 'icon-shengchan',
                    name: '生产安全',
                    path: '/index/productionSafe'
                },
            ],
        };
    }

    componentWillMount(){
    }

    componentDidMount () {

    }

    onMenuClick = (e) => {
        this.props.history.push({ pathname: e.key });
    }

    render () {
        const { headerTabs } = this.state;
        const menu = (
            <Menu onClick={this.onMenuClick}>
              <Menu.Item key="/index/realPosition">人员实时位置</Menu.Item>
              <Menu.Item key="/index/eleControl">电子围栏管控</Menu.Item>
              <Menu.Item key="/index/safeWarn">人员安全报警</Menu.Item>
            </Menu>
        );
        return (
            <div className='index-page'>
                <div className='index-header'>
                    <img className='index-title' src={require('../../assets/images/icon.png')} />
                    <div className='header-tabs'>
                        {
                            headerTabs.map((item, index)=>{
                                return index === 2 ? 
                                    <Dropdown overlayClassName='toolDrop' overlay={menu} key={index}>
                                        <div className={`index-list ${this.props.location.pathname === '/realPosition' || this.props.location.pathname === '/eleControl' || this.props.location.pathname === '/safeWarn' ? 'index-list-active' : ''}`}><i className={`iconfont ${item.icon}`} /><span>{item.name}&nbsp;&nbsp;<i className='iconfont icon-xiangxia' /></span></div>
                                    </Dropdown>
                                    :
                                    <Link key={index} to={item.path}><div className={`index-list ${this.props.location.pathname === item.path ? 'index-list-active' : ''}`}><i className={`iconfont ${item.icon}`} /><span>{item.name}</span></div></Link>
                                    
                            })
                        }
                    </div>
                    
                </div>
                <div className='clear'></div>
                <div>
                    {/* this.props.children */}
                    <Route path="/index/factorySafe" exact component={FactorySafe} />
                    <Route path="/index/equipmentSafe" exact component={EquipmentSafe} />
                    <Route path="/index/realPosition" exact component={RealPosition} />
                    <Route path="/index/eleControl" exact component={EleControl} />
                    <Route path="/index/safeWarn" exact component={SafeWarn} />
                    <Route path="/index/productionSafe" exact component={ProductionSafe} />
                </div>
            </div>
        );
    }
  
}

export default IndexPage;
