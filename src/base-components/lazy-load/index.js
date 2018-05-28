import React from 'react'
import { findDOMNode } from 'react-dom'
// //获取顶部超过视口的高度
// function getScrollTop() {
//     return document.body.scrollTop || document.documentElement.scrollTop;
// }
// //获取总高度
// function getScrollHeight() {
//     return document.body.scrollHeight || document.documentElement.scrollHeight;
// }
// //获取视口高度
// function getClientHeight() {
//     return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
// }
class LazyloadContainer extends React.Component {
    state = {
        height: 700
    }
    componentDidMount() {
        //获取dom，判断是否符合条件
        //考虑引入防抖和节流
        var el = findDOMNode(this)
        var scrollel = findDOMNode(this.refs.scroll)
        el.addEventListener('scroll', () => {
            if (el.scrollTop + el.clientHeight + 0.1 > scrollel.clientHeight) {
                // console.log('trigger');
                // this.setState({
                //     height: this.state.height + 300
                // })
                this.props.cb && this.props.cb()
            }
            // console.log(el.scrollTop);
            // console.log('ss' + scrollel.clientHeight, scrollel.scrollHeight);
        })
        // console.log(scrollel);
    }

    render() {
        return (
            <div style={{ height: '300px', backgroundColor: 'rgba(189,199,33,.13)', overflow: 'auto' }}>
                <div ref='scroll'>
                    {/* <div style={{ height: this.state.height }}></div> */}
                    {this.props.children}
                </div>
                {/* {this.props.Component} */}
            </div>)
    }
}
export default LazyloadContainer