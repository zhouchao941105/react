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
import { menu } from './menu-list'
// import Home from './bread/bread'
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            current: window.location.hash.split('/')[2] || '0'
        }
    }
    componentDidMount() {
        window.addEventListener('hashchange', () => {
            let oldHash, newHash = window.location.hash.split('/')[2]
            if (newHash !== oldHash) {
                this.setState({
                    current: newHash
                })
                oldHash = newHash
            }
            if (window.location.hash.split('/').length < 3) {
                this.setState({
                    current: '0'
                })
            }
        })
    }
    handleClick = (e) => {
        this.setState({ current: e.key })
    }
    render() {
        return (
            <Layout>
                <Sider>
                    <Router history={hashHistory}>
                        <Switch>
                            <Route path="/" component={menu}>

                            </Route>
                            <Route path="/apps/1" component={menu} >
                            </Route>
                        </Switch>

                    </Router>
                    {/* <menu current=></menu> */}
                    {/* <Router>
                        <ul className="app-list">
                            <li>
                                <Link to="/apps/1">Application1</Link>：<Link to="/apps/1/detail">Detail</Link>
                            </li>
                            <li>
                                <Link to="/apps/2">Application2</Link>：<Link to="/apps/2/detail">Detail</Link>
                            </li>
                        </ul>
                    </Router> */}
                    {/* <Menu mode='inline' onClick={this.handleClick} selectedKeys={[this.state.current]} style={{ height: '600px' }}>
                        <Menu.Item key='0'>
                            <Icon type="home" />
                            <Router>
                                <Route>
                                    <Link to="/apps" style={{ display: 'inline-block' }}>Application List</Link>
                                </Route>
                            </Router>
                        </Menu.Item>
                        <Menu.Item key='1'>
                            <Icon type="apple" />
                            <Router>
                                <Route>
                                    <Link to="/apps/1" style={{ display: 'inline-block' }}>Application1</Link>
                                </Route>
                            </Router>
                        </Menu.Item> */}
                    {/* <Menu.Item>
                            <Icon type="desktop" />

                            <Router>
                                <Route>
                                    <Link to="/apps/1/detail" style={{ display: 'inline-block' }}>Detail</Link>
                                </Route>
                            </Router>
                        </Menu.Item> */}
                    {/* <Menu.Item key="2">
                            <Icon type="google" />
                            <Router>
                                <Route>
                                    <Link to="/apps/2" style={{ display: 'inline-block' }}>Application2</Link>
                                </Route>
                            </Router>
                        </Menu.Item> */}

                    {/* <Menu.Item>
                            <Icon type="desktop" />

                            <Router>
                                <Route>
                                    <Link to="/apps/2/detail" style={{ display: 'inline-block' }}>Detail</Link>
                                </Route>
                            </Router>
                        </Menu.Item> */}
                    {/* </Menu> */}

                    {/* <SubMenu title='hehe'>
                            <Menu.Item>
                                haha
                            </Menu.Item>
                        </SubMenu> */}
                    {/* <Menu.Item key="2">
                            <Icon type="desktop" />
                            <Router>
                                <Link to="/apps" style={{ display: 'inline-block' }}>Apps</Link>
                            </Router>
                        </Menu.Item>
                    </Menu> */}
                </Sider>
                <Layout>
                    <Output></Output>
                    {/* <Router>
                        <Route>
                            <Home></Home>
                        </Route>
                    </Router> */}
                    {/* <Header style={{ background: '#fff', padding: 0, color: 'pink' }}>
                        App online
                    </Header>
                    <Content>
                        <div style={{ padding: 24, background: '#ffd', minHeight: 360 }}>
                            Bill is a cat.
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        SIS
                    </Footer> */}
                </Layout>
            </Layout >
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
