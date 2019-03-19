import React, {Component} from 'react';
import './scrollTable.less';
import moment from 'moment';

class ScrollTable extends Component {
  value = 1;

  componentDidMount() {
    this.update = setInterval(this.getScroll, 5000);
    this.getScroll();
  }

  componentWillUnmount() {
    clearInterval(this.update);
  }

  getScroll = () => {
    const oUl = document.getElementsByTagName('ul')[0];
    oUl.style.top = -50;
    if (this.value % 2 === 0) {
      oUl.innerHTML = '<li>' +
        `<span style="width:10%">${this.value}</span>` +
        '<span style="width:30%">消防器材过期</span>' +
        `<span style="width:40%">${moment().format('YYYY-MM-DD HH:mm')}</span>` +
        '<span style="width:20%">已处理</span>' +
        '</li>'
        + oUl.innerHTML;
    } else {
      oUl.innerHTML = '<li>' +
        `<span style="width:10%">${this.value}</span>` +
        '<span style="width:30%">发生跑冒滴漏</span>' +
        `<span style="width:40%">${moment().format('YYYY-MM-DD HH:mm')}</span>` +
        '<span style="width:20%;color: #FFCB66;">未处理</span>' +
        '</li>'
        + oUl.innerHTML;
    }

    this.value++;
    this.moveList(oUl, -50, 0);
  };

  setLeft = (index, oUl) => {
    /*this.timer2 = setInterval(()=>{
      this.moveList(oUl,(index-2)*40,index*40);
      if(index===1){
        clearInterval(this.timer2);
      }else{
        index++;
      }
    },1200);*/
  };

  moveList = (obj, old, iTarget) => {
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      var iSpeed = (iTarget - old) / 10;
      // 整除
      iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
      if (iTarget <= old) {
        clearInterval(this.timer)
      } else {
        old += iSpeed;
        obj.style.top = old + 'px';
      }
    }, 30)
  };

  render() {
    return <div>
      <p className={'tableHeader'}><span style={{width: '10%'}}>序号</span><span style={{width: '30%'}}>事件</span><span
        style={{width: '40%'}}>事件时间</span><span style={{width: '20%'}}>状态</span></p>
      <div className={'outBox'}>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  }
}

export default ScrollTable;
