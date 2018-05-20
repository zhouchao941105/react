/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link, withRouter, Switch } from 'react-router-dom'
// import { IndexRoute } from 'react-router'
import { Layout, Menu, Breadcrumb } from 'antd'
import store from './redux/index'
import moment from 'moment'
import './index.css';
// import 'antd/dist/antd.less';
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
import Title from './base-components/document-title'
// const { RangePicker } = DatePicker
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
class Basic extends React.Component {
    render() {
        return (
            <Layout>
                {/* <Sider>
                    <MenuList en={a}></MenuList>
                </Sider> */}
                {this.props.children}
                {/* <Output></Output> */}
            </Layout>
        )
    }
}
class App extends React.Component {
    render() {
        return (
            <Router>
                {/* <Basic> */}
                {/* <IndexRoute component={AppleContainer}></IndexRoute> */}
                <Switch>
                    {/* <Route exact path="/" component={AppleContainer} /> */}
                    {/* <Route path="apple" breadcrumbName="apple" component={AppleContainer} /> */}
                    {/* <IndexRoute breadcrumbName="List" component={AppleList}></IndexRoute> */}
                    <Route exact path="/" breadcrumbName="List" component={Basic} />
                    <Route path="/apple/List" breadcrumbName="List" component={AppleList}></Route>
                    <Route path='/apple/Detail' breadcrumbName="Detail" component={AppleDetail}></Route>
                    <Route path='/apple/Edit' breadcrumbName="Edit" component={AppleEdit}></Route>


                    {/* <Route path="google" breadcrumbName="google" component={GoogleContainer} /> */}
                    {/* <IndexRoute breadcrumbName="List" component={GoogleList}></IndexRoute> */}
                    {/* <Route exact path="/" breadcrumbName="List" component={GoogleList} /> */}

                    <Route path="google/List" breadcrumbName="List" component={GoogleList}></Route>
                    <Route path='google/Detail' breadcrumbName="Detail" component={GoogleDetail}></Route>
                    <Route path='google/Edit' breadcrumbName="Edit" component={GoogleEdit}></Route>
                </Switch>
                {/* <Route path=':name/List' component={List}></Route> */}
                {/* 用:name来指代apple和google */}
                {/* <Route path="google" component={List}></Route> */}
                {/* </Route> */}
                {/* </Route> */}
                {/* </Basic> */}
            </Router >
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
