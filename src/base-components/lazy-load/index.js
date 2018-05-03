import React from 'react'
import { Divider } from 'antd';
class LazyloadContainer extends React.Component {
    componentDidMount() {
        //获取dom，判断是否符合条件
        //考虑引入防抖和节流
    }
    render() {
        <div>
            {this.props.children}
        </div>
    }
}