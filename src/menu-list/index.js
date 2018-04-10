import React from 'react'
import { Menu, Icon } from 'antd';
import { Link } from 'react-router'

export class MenuList extends React.Component {
    render() {
        return (
            <Menu mode='inline' style={{ height: '600px' }} selectedKeys={['1']}>
                <Menu.Item key='0'>
                    <Icon type="home" />
                    <Link to={{
                        pathname: 'apps',
                        state: 'haha'
                    }} style={{ display: 'inline-block' }}>Application List</Link>
                </Menu.Item>
                <Menu.Item key='1'>
                    <Icon type="apple" />
                    <Link to="/apps/1" style={{ display: 'inline-block' }}>Application1</Link>
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
                    <Link to="/apps/2" style={{ display: 'inline-block' }}>Application2</Link>
                </Menu.Item>
            </Menu>

        )
    }
}