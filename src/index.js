/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { HashRouter, Route, Switch, Link, withRouter } from 'react-router-dom'
import { browserHistory, Router, IndexRoute } from 'react-router'
import { DatePicker, Button, From, Layout, Icon, Menu, Breadcrumb } from 'antd'
import store from './redux/index'
import moment from 'moment'
import './index.css';
// import 'antd/dist/antd.less';
const { RangePicker } = DatePicker
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
import AppleList, { AppleContainer } from './app-components/apple/list'
import AppleDetail from './app-components/apple/detail'
import AppleEdit from './app-components/apple/edit'
import GoogleList, { GoogleContainer } from './app-components/google/list'
import GoogleDetail from './app-components/google/detail'
import GoogleEdit from './app-components/google/edit'
import { List, DefaultList, Edit, Home } from './base-components/bread-crumb'
import MenuList from './base-components/menu-list'
// import Home from './bread/bread'
import Welcome from './base-components/welcome'
var a = 0;
setInterval(function () {
    a++
}, 1000)
class Basic extends React.Component {
    render() {
        return (
            <Layout>
                <Sider>
                    <MenuList en={a}></MenuList>
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
    render() {
        return (
            <Router history={browserHistory}>
                <Route path='/' component={Basic}>
                    <IndexRoute component={Welcome}></IndexRoute>
                    <Route path='home' component={Welcome}></Route>
                    <Route path="apple" breadcrumbName="apple" component={AppleContainer} >
                        <IndexRoute breadcrumbName="List" component={AppleList}></IndexRoute>
                        <Route path="List" breadcrumbName="List" component={AppleList}></Route>
                        <Route path='Detail' breadcrumbName="Detail" component={AppleDetail}></Route>
                        <Route path='Edit' breadcrumbName="Edit" component={AppleEdit}></Route>
                    </Route>
                    <Route path="google" breadcrumbName="google" component={Home} >
                        <IndexRoute breadcrumbName="List" component={GoogleList}></IndexRoute>
                        <Route path="List" breadcrumbName="List" component={GoogleList}></Route>
                        <Route path='Detail' breadcrumbName="Detail" component={GoogleDetail}></Route>
                        <Route path='Edit' breadcrumbName="Edit" component={GoogleEdit}></Route>
                    </Route>

                    {/* <Route path=':name/List' component={List}></Route> */}
                    {/* 用:name来指代apple和google */}
                    {/* <Route path="google" component={List}></Route> */}
                    {/* </Route> */}
                </Route>
            </Router>
        )
    }
}


// ========================================

ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>
    ,
    document.getElementById('root')
);
if (module.hot) {
    module.hot.accept()
}
export { store }
