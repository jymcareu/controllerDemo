import React, {Component} from 'react';
import {connect} from 'dva';
import './mainPage.less'
import {Layout, Form, LocaleProvider, Icon} from 'antd';
import {Router, Route, Switch} from 'dva/router';
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import leftNavIcon1 from '../../assets/images/leftNavIcon1.png'
import leftNavIcon2 from '../../assets/images/leftNavIcon2.png'
import leftNavIcon3 from '../../assets/images/leftNavIcon3.png'
import leftNavIcon4 from '../../assets/images/leftNavIcon4.png'
import leftNavIcon5 from '../../assets/images/leftNavIcon5.png'
import leftNavIcon6 from '../../assets/images/leftNavIcon6.png'
import leftNavIcon7 from '../../assets/images/leftNavIcon7.png'
import leftNavIcon8 from '../../assets/images/leftNavIcon8.png'
import moment from 'moment';
import RiskSource from '../riskSource/RiskSource'
import ProductionSafety from '../productionSafe/ProductionSafety'
import EquipmentSafety from '../equipmentSafety/EquipmentSafety'
import EquipmentSafetyTwo from '../equipmentSafety/EquipmentSafetyTwo'
import PersonnelSafety from '../personnelSafety/PersonnelSafety'
import RiskSourceTwo from "../riskSource/RickSourceTwo";
import RiskSourceThree from "../riskSource/RiskSourceThree";
import systemChange from '../../assets/icons/systemChange.png'

const {Header, Sider, Content} = Layout;

class App extends Component {

  state = {
    collapsed: false,
    leftNav: [
      {
        title: '重大风险源',
        src: leftNavIcon1,
        src2: leftNavIcon2,
        current: true,
        url: '/mainPage/riskSource',
      },
      {
        title: '生产安全',
        src: leftNavIcon3,
        src2: leftNavIcon4,
        current: false,
        url: '/mainPage/productionSafety'
      },
      {
        title: '设备安全',
        src: leftNavIcon5,
        src2: leftNavIcon6,
        current: false,
        url: '/mainPage/equipmentSafety'
      },
      {
        title: '人员安全',
        src: leftNavIcon7,
        src2: leftNavIcon8,
        current: false,
        url: '/mainPage/personnelSafety'
      }
    ],
  };

  componentDidMount() {

  }

  componentWillReceiveProps(newParams, oldParams) {
    const {leftNav} = this.state;
    if (newParams.location) {
      if (newParams.location.pathname.match(new RegExp('riskSource'))) {
        leftNav.map((item, index) => {
          item.current = index === 0
        })
      } else if (newParams.location.pathname.match(new RegExp('productionSafety'))) {
        leftNav.map((item, index) => {
          item.current = index === 1
        })
      } else if (newParams.location.pathname.match(new RegExp('equipmentSafety'))) {
        leftNav.map((item, index) => {
          item.current = index === 2
        })
      } else if (newParams.location.pathname.match(new RegExp('personnelSafety'))) {
        leftNav.map((item, index) => {
          item.current = index === 3
        })
      }
    }
    this.setState({
      leftNav
    });
  }


  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  //导航栏切换
  changeLeftNav = (current) => {
    let leftNav = this.state.leftNav;
    let oldCurrent = 0;
    leftNav.map((item, index) => {
      if (item.current) oldCurrent = index
    });
    if (current !== oldCurrent) {
      leftNav.map((item, index) => {
        item.current = (index === current)
      })
    }
    this.setState({
      leftNav
    }, function () {
      this.props.history.push({pathname: this.state.leftNav.filter(item => item.current)[0].url});
    });
  };

  //跳转到驾驶舱
  toCockpit=()=>{
    this.props.history.push({pathname: '/cockpit'});
  };

  //返回上一页
  goHistory = () => {
    this.props.history.go(-1);
  };


  render() {
    let t = this;
    const {collapsed, leftNav} = this.state;
    return (
      <LocaleProvider locale={zh_CN}>
        <Layout style={{backgroundColor: '#000000'}}>
          <Header className='header'>
            <span className='headerTitle'>美欣达安全监管平台</span>
            <div style={{float: 'right', cursor: 'pointer', color: 'rgba(71, 201, 255, 1)',marginLeft:20}} onClick={this.goHistory}>
              <Icon type="rollback"
                    style={{fontSize: 16, color: 'rgba(71, 201, 255, 1)'}}/>返回
            </div>
            <div style={{float: 'right', cursor: 'pointer', color: 'rgba(71, 201, 255, 1)'}} onClick={this.toCockpit}>
              <img src={systemChange}/>系统切换
            </div>
          </Header>
          <Layout style={{backgroundColor: '#000000'}}>
            <Sider
              className='sider'
              collapsed={collapsed}
              collapsible
              collapsedWidth={0}
              trigger={null}
            >
              <div style={{marginTop: 30}}>
                {
                  leftNav.map((item, index) => {
                    return (
                      <div key={index} className='leftNav' onClick={this.changeLeftNav.bind(this, index)}>
                        <img src={item.current ? item.src : item.src2}/>
                        <div className='leftNavTitle'
                             style={item.current ? {} : {color: '#FFFFFF', opacity: 0.7}}>{item.title}</div>
                        {
                          index !== leftNav.length - 1 &&
                          <div className='leftNavBottomLine'>
                          </div>
                        }
                      </div>
                    )
                  })
                }
              </div>
              {
                !collapsed &&
                <div className='leftNavToggle' onClick={this.toggle}>
                  <Icon
                    style={{color: '#4BBEFF', fontSize: 18}}
                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  />
                </div>
              }
            </Sider>
            <Content style={collapsed ? {} : {marginLeft: 12}}>
              <div className='content'>
                <Route path="/mainPage/riskSource" exact component={RiskSource}/>
                <Route path="/mainPage/riskSourceTwo" exact component={RiskSourceTwo}/>
                <Route path="/mainPage/riskSourceThree" exact component={RiskSourceThree}/>
                <Route path="/mainPage/productionSafety" exact component={ProductionSafety}/>
                <Route path="/mainPage/equipmentSafety" exact component={EquipmentSafety}/>
                <Route path="/mainPage/equipmentSafetyTwo" exact component={EquipmentSafetyTwo}/>
                <Route path="/mainPage/personnelSafety" exact component={PersonnelSafety}/>
              </div>
            </Content>
            {
              collapsed &&
              <div style={{position: 'absolute', bottom: 10, left: 10}} onClick={this.toggle}>
                <Icon
                  style={{color: '#4BBEFF', fontSize: 18}}
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                />
              </div>
            }
          </Layout>
        </Layout>
      </LocaleProvider>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Form.create()(App));
