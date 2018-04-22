/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { HashRouter, Route, Switch, Link, withRouter } from 'react-router-dom'
import { hashHistory, Router, IndexRoute } from 'react-router'
import { DatePicker, Button, From, Layout, Icon, Menu, Breadcrumb } from 'antd'
import moment from 'moment'
import './index.css';
// import 'antd/dist/antd.less';
const { RangePicker } = DatePicker
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
import { List, DefaultList, Edit, Detail, Home } from './bread-crumb'
import { MenuList } from './menu-list'
// import Home from './bread/bread'
import Welcome from './welcome'
class Basic extends React.Component {
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
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={Basic}>
                    <IndexRoute component={Welcome}></IndexRoute>
                    <Route path='home' component={Welcome}></Route>
                    <Route path=":name" breadcrumbName=":name" component={Home} >
                        <IndexRoute breadcrumbName="List" component={List}></IndexRoute>
                        <Route path="List" breadcrumbName="List" component={List}></Route>
                        <Route path='Detail' breadcrumbName="Detail" component={Detail}></Route>
                        <Route path='Edit' breadcrumbName="Edit" component={Edit}></Route>
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
function reducer(state, action) {
    switch (action.type) {
        case 'LOADING':
            return {
                loading: true
            }
        case 'STOPLOADING':
            return {
                loading: false
            }
        case 'SEARCH':
            return {
                key: action.key,
            }
        default: return state
    }
}
const store = createStore(reducer)

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
