import React from 'react'
import { Menu, Icon } from 'antd';
import { Link, Router, Route, hashHistory } from 'react-router'
class menu extends React.Component {
    render() {
        console.log(this);
        return (


            <Menu mode='inline' style={{ height: '600px' }} selectedKeys={['2']}>
                <Menu.Item key='0'>
                    <Icon type="home" />
                    <Router history={hashHistory}>
                        <Route>
                            <Link to={{
                                pathname: 'apps/1',
                                state: 'haha'
                            }} style={{ display: 'inline-block' }}>Application List</Link>
                        </Route>
                    </Router>
                </Menu.Item>
                <Menu.Item key='1'>
                    <Icon type="apple" />
                    Application1
                </Menu.Item>
                {/* <Menu.Item>
                            <Icon type="desktop" />

                            <Router>
                                <Route>
                                    <Link to="/apps/1/detail" style={{ display: 'inline-block' }}>Detail</Link>
                                </Route>
                            </Router>
                        </Menu.Item> */}
                <Menu.Item key="2">
                    <Icon type="google" />
                    Application2
                </Menu.Item>
            </Menu>
        )
    }
}
export { menu }