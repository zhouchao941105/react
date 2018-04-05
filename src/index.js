/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom'
import { DatePicker, Button, From, Layout, Icon, Menu, Breadcrumb } from 'antd'
import moment from 'moment'
import './index.css';
// import 'antd/dist/antd.less';
const { RangePicker } = DatePicker
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
import Home, { Apps } from './bread/bread'
class App extends React.Component {
    // App = () => (
    //     <ul>
    //         <li>
    //             <Link to="">x</Link>
    //             <Link to="">y</Link>
    //         </li>
    //         <li>
    //             <Link to="">z</Link>
    //             <Link to="">r</Link>
    //         </li>
    //     </ul>
    // )
    render() {
        return (
            <Layout>
                <Sider>

                    <Router>
                        <Apps></Apps>
                    </Router>
                    {/* <Menu theme='dark' mode='inline'>
                        <Menu.Item key='1'>
                            <Icon type="pie-chart" />
                            <Router>
                                <Link to="/" style={{ display: 'inline-block' }}>Home</Link>
                            </Router>
                        </Menu.Item>*/}

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
                    <Router>
                        <Route>
                            <Home></Home>
                        </Route>
                    </Router>
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
            </Layout>
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
