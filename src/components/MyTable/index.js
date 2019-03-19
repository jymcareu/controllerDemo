/***
 * table组件 定制了样式
 */
import React, { Component }from 'react';
import { Table } from 'antd';
import './index.less';
class MyTable extends Component {

    render () {
        return (
            <div className="myTable">
                {/* <div className='headerbg-left'></div> */}
                {/* <div className='headerbg-right'></div> */}
                <Table {...this.props} className='cockpitTB' />
            </div>
        )
    }
}

export default MyTable;
