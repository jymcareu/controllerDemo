import React, {Component} from 'react'
import {} from 'antd'
import './commonBoxTitle.less'


class commonBoxTitle extends Component {
  state = {};


  render() {
    const {} = this.state;
    const {title} = this.props;
    return (
      <div style={{height: 42,position:'relative'}}>
        <div className='subItem'/>
        <span className='subText'>{title}</span>
        <div className='subLine'/>

      </div>
    )
  }
}

export default commonBoxTitle
