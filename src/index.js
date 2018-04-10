/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Link, withRouter } from 'react-router-dom'
import { hashHistory, Router } from 'react-router'
import { DatePicker, Button, From, Layout, Icon, Menu, Breadcrumb } from 'antd'
import moment from 'moment'
import './index.css';
// import 'antd/dist/antd.less';
const { RangePicker } = DatePicker
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
import { Output } from './bread-crumb'
import { MenuList } from './menu-list'
// import Home from './bread/bread'
class another extends React.Component {
    render() {
        return (
            <Layout>
                <Sider>
                    <MenuList></MenuList>
                </Sider>
                <Layout>
                    {this.props.children}
                    {/* <Output></Output> */}
                </Layout>
            </Layout>
        )
    }
}
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            current: window.location.hash.split('/')[2] || '0'
        }
    }
    // componentDidMount() {
    //     window.addEventListener('hashchange', () => {
    //         let oldHash, newHash = window.location.hash.split('/')[2]
    //         if (newHash !== oldHash) {
    //             this.setState({
    //                 current: newHash
    //             })
    //             oldHash = newHash
    //         }
    //         if (window.location.hash.split('/').length < 3) {
    //             this.setState({
    //                 current: '0'
    //             })
    //         }
    //     })
    // }
    handleClick = (e) => {
        this.setState({ current: e.key })
    }
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={another}>
                    <Route path='apps' component={Output}>
                        {/* <Route path=":id" component={}></Route> */}
                    </Route>
                </Route>
            </Router>
        )
    }
}

// ========================================

ReactDOM.render(
    <App></App>
    ,
    document.getElementById('root')
);
if (module.hot) {
    module.hot.accept()
}
