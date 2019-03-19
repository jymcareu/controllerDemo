import React, {Component} from 'react';
import zutai from '../../../assets/images/productionSafe-bg.png';
import warning from '../../../assets/icons/warning.png';
import close from '../../../assets/icons/close.png';
import './configuration.less';

class Configuration extends Component {
  state = {
    dataSource: [],
    top: 0,
    modalShow: false,
    data: [
      {x: '0.5%', y: '15%', name: '煤仓料位', value: (Math.random() + 8).toFixed(2), unit: 'm'},
      {x: '20%', y: '8%', name: '气包蒸气压A', value: (Math.random() + 13).toFixed(2), unit: 'MPa'},
      {x: '20%', y: '10.5%', name: '气包蒸气压B', value: (Math.random() + 13).toFixed(2), unit: 'MPa'},
      {x: '35%', y: '7%', name: '汽轮机上汽缸壁温度', value: (Math.random() * 30 + 400).toFixed(2), unit: '℃'},
      {x: '35%', y: '9.5%', name: '汽轮机下汽缸壁温度', value: (Math.random() * 20 + 400).toFixed(2), unit: '℃'},
      {x: '35%', y: '12%', name: '前轴承振动', value: (Math.random() + 32).toFixed(2), unit: 'um'},
      {x: '35%', y: '14.5%', name: '后径向轴承温度', value: (Math.random() * 30 + 300).toFixed(2), unit: '℃'},
      {x: '35%', y: '17%', name: '后轴承振动', value: (Math.random() + 44).toFixed(2), unit: 'um'},
      {x: '52%', y: '31%', name: '发电机有效功率', value: (Math.random() + 14).toFixed(2), unit: 'MW'},
      {x: '52%', y: '34%', name: '发电机无功功率', value: (Math.random() + 3).toFixed(2), unit: 'MVAR'},
      {x: '52%', y: '36.5%', name: '发电机频率', value: (Math.random() + 50).toFixed(2), unit: 'HZ'},
      {x: '52%', y: '39%', name: '发电机出风温度', value: (Math.random() + 40).toFixed(2), unit: '℃'},
      {x: '56%', y: '48%', name: '吸收塔湿电出口烟温', value: (Math.random() + 54).toFixed(2), unit: '℃'},
      {x: '56%', y: '50.5%', name: '吸收塔湿电出口压力', value: (Math.random() * 5 + 160).toFixed(2), unit: 'K'},
      {x: '80%', y: '45%', name: 'SO2', value: (Math.random() + 18).toFixed(2)},
      {x: '80%', y: '47.5%', name: 'NOX', value: (Math.random() * 4 + 32).toFixed(2)},
      {x: '80%', y: '50%', name: 'O2', value: (Math.random() + 4).toFixed(2)},
      {x: '80%', y: '52.5%', name: '湿度', value: (Math.random() * 3 + 10).toFixed(2)},
      {x: '80%', y: '55%', name: '温度', value: (Math.random() * 5 + 50).toFixed(2)},
      {x: '80%', y: '57.5%', name: '压力', value: (Math.random()).toFixed(2)},
      {x: '80%', y: '60%', name: '流速', value: (Math.random() + 13).toFixed(2)},
      {x: '80%', y: '62.5%', name: '烟尘', value: (Math.random() * 3 + 10).toFixed(2)},
      {x: '7%', y: '70%', name: '炉膛上部烟温', value: (Math.random() * 5 + 765).toFixed(2), unit: '℃', isWarn: true},
      {x: '7%', y: '72.5%', name: '炉膛上部压力', value: (-(Math.random() * 5 + 155)).toFixed(2), unit: 'Pa'},
      {x: '7%', y: '75%', name: '炉膛下部烟温', value: (Math.random() * 5 + 760).toFixed(2), unit: '℃'},
      {x: '7%', y: '77.5%', name: '炉膛下部压力', value: (Math.random() + 1).toFixed(2), unit: 'KPa'},
      {x: '7%', y: '80%', name: '锅炉床温', value: (Math.random() + 790).toFixed(2), unit: '℃'},
    ]
  };

  componentDidMount() {
    this.count();
  }

  //组态图随机数据
  count = () => {
    this.timer = setInterval(() => {
      const data = [
        {x: '0.5%', y: '15%', name: '煤仓料位', value: (Math.random() + 8).toFixed(2), unit: 'm'},
        {x: '20%', y: '8%', name: '气包蒸气压A', value: (Math.random() + 13).toFixed(2), unit: 'MPa'},
        {x: '20%', y: '10.5%', name: '气包蒸气压B', value: (Math.random() + 13).toFixed(2), unit: 'MPa'},
        {x: '35%', y: '7%', name: '汽轮机上汽缸壁温度', value: (Math.random() * 30 + 400).toFixed(2), unit: '℃'},
        {x: '35%', y: '9.5%', name: '汽轮机下汽缸壁温度', value: (Math.random() * 20 + 400).toFixed(2), unit: '℃'},
        {x: '35%', y: '12%', name: '前轴承振动', value: (Math.random() + 32).toFixed(2), unit: 'um'},
        {x: '35%', y: '14.5%', name: '后径向轴承温度', value: (Math.random() * 30 + 300).toFixed(2), unit: '℃'},
        {x: '35%', y: '17%', name: '后轴承振动', value: (Math.random() + 44).toFixed(2), unit: 'um'},
        {x: '52%', y: '31%', name: '发电机有效功率', value: (Math.random() + 14).toFixed(2), unit: 'MW'},
        {x: '52%', y: '34%', name: '发电机无功功率', value: (Math.random() + 3).toFixed(2), unit: 'MVAR'},
        {x: '52%', y: '36.5%', name: '发电机频率', value: (Math.random() + 50).toFixed(2), unit: 'HZ'},
        {x: '52%', y: '39%', name: '发电机出风温度', value: (Math.random() + 40).toFixed(2), unit: '℃'},
        {x: '56%', y: '48%', name: '吸收塔湿电出口烟温', value: (Math.random() + 54).toFixed(2), unit: '℃'},
        {x: '56%', y: '50.5%', name: '吸收塔湿电出口压力', value: (Math.random() * 5 + 160).toFixed(2), unit: 'K'},
        {x: '80%', y: '45%', name: 'SO2', value: (Math.random() + 18).toFixed(2)},
        {x: '80%', y: '47.5%', name: 'NOX', value: (Math.random() * 4 + 32).toFixed(2)},
        {x: '80%', y: '50%', name: 'O2', value: (Math.random() + 4).toFixed(2)},
        {x: '80%', y: '52.5%', name: '湿度', value: (Math.random() * 3 + 10).toFixed(2)},
        {x: '80%', y: '55%', name: '温度', value: (Math.random() * 5 + 50).toFixed(2)},
        {x: '80%', y: '57.5%', name: '压力', value: (Math.random()).toFixed(2)},
        {x: '80%', y: '60%', name: '流速', value: (Math.random() + 13).toFixed(2)},
        {x: '80%', y: '62.5%', name: '烟尘', value: (Math.random() * 3 + 10).toFixed(2)},
        {x: '7%', y: '70%', name: '炉膛上部烟温', value: (Math.random() * 5 + 765).toFixed(2), unit: '℃', isWarn: true},
        {x: '7%', y: '72.5%', name: '炉膛上部压力', value: (-(Math.random() * 5 + 155)).toFixed(2), unit: 'Pa'},
        {x: '7%', y: '75%', name: '炉膛下部烟温', value: (Math.random() * 5 + 760).toFixed(2), unit: '℃'},
        {x: '7%', y: '77.5%', name: '炉膛下部压力', value: (Math.random() + 1).toFixed(2), unit: 'KPa'},
        {x: '7%', y: '80%', name: '锅炉床温', value: (Math.random() + 790).toFixed(2), unit: '℃'},
      ];
      this.setState({
        data
      });
    }, 1000)
  };

  showDiagnosis = (index) => {
    const modal1 = document.getElementById('modal1');
    this.setState({
      top: modal1.scrollHeight + modal1.offsetTop + 10
    }, () => {
      this.props.showVideo(true)
    });
  };

  closeWindow = () => {
    this.setState({
      top: 0,
      modalShow: false
    }, () => {
      this.props.showVideo(false)
    });
  };

  showModal = () => {
    this.setState({
      modalShow: true
    });
  };

  render() {
    let {dataSource, top, modalShow, data} = this.state;
    dataSource = [
      {
        num: 1,
        deviceName: '锅炉',
        siteName: '炉膛上部烟温',
        code: 'code_1897',
        state: '超下限'
      }
    ];
    const dot = [
      {
        left: '1.5%',
        top: '23.5%'
      },
      {
        left: '9.5%',
        top: '23.5%'
      },
      {
        left: '24%',
        top: '18%'
      },
      {
        left: '41.5%',
        top: '27%'
      },
      {
        left: '52%',
        top: '25%'
      },
      {
        left: '22.5%',
        top: '49.5%'
      },
      {
        left: '49%',
        top: '50.5%'
      },
    ];
    return <div style={{width: '100%', height: '100%', position: 'relative'}}>
      <img src={zutai} alt="" style={{width: '100%', height: '100%'}}/>
      {/*{*/}
      {/*dot.map((val, index) => {*/}
      {/*return <div key={index} style={{*/}
      {/*position: 'absolute',*/}
      {/*border: '1px solid red',*/}
      {/*width: 60,*/}
      {/*height: 20,*/}
      {/*left: val.left,*/}
      {/*top: val.top*/}
      {/*}} onClick={this.showModal}/>*/}
      {/*})*/}
      {/*}*/}
      {
        data.map((item, index) => {
          return (
            <div key={index}
                 style={{
                   position: 'absolute',
                   left: item.x,
                   top: item.y,
                   color: item.isWarn ? 'red' : '#fff',
                   fontSize: 12,
                   fontWeight: 'bold',
                   cursor: item.isWarn ? 'pointer' : '',
                 }} onClick={item.isWarn ? this.showModal : null}
            >
              {item.name}：{item.value} {item.unit || ""}
            </div>)
        })
      }
      {
        modalShow &&
        <div className={'ModalBorder'} id={'modal1'}>
          <div className={'warningContent'}>
            <img src={close} alt="" className={'close'} onClick={this.closeWindow} style={{cursor: 'pointer'}}/>
            <p><img src={warning} alt=""/>设备报警</p>
            <div className={'modal-table'}>
              <p className={'table-header'}>
                <b/>
                <b/>
                <b/>
                <b/>
                <span style={{width: '15%'}}>序号</span>
                <span style={{width: '20%'}}>设备名称</span>
                <span style={{width: '25%'}}>测点名称</span>
                <span style={{width: '25%'}}>测点编码</span>
                <span style={{width: '20%'}}>状态</span>
              </p>
              <ul>
                {
                  dataSource.map((val, index) => {
                    return <li key={index} onClick={this.showDiagnosis.bind(this, index)} style={{cursor: 'pointer'}}>
                      <span style={{width: '15%'}}>{val.num}</span>
                      <span style={{width: '20%'}}>{val.deviceName}</span>
                      <span style={{width: '25%'}}>{val.siteName}</span>
                      <span style={{width: '25%'}}>{val.code}</span>
                      <span style={{width: '20%'}}>{val.state}</span>
                    </li>
                  })
                }
              </ul>

            </div>
          </div>
        </div>
      }
      {
        top &&
        <div className={'ModalBorder'} id={'modal2'} style={{top: top}}>
          <div className={'warningContent'}>
            <div className={'title'}>设备报警诊断</div>
            <ol>
              <li>判断水冷壁有无泄漏，影响了出口温度。</li>
              <li>合理调整返料水量，提高小颗粒的回收率，可有效降低床温，提高出口温度</li>
              <li>可以适当提高一次风量，降低床温，提高出口温度。</li>
            </ol>
          </div>

        </div>
      }

    </div>
  }
}

export default Configuration;
