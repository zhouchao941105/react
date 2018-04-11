import React from 'react'
import { Menu, Icon } from 'antd';
import { Link } from 'react-router'

export class MenuList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 'home'
        }
    }
    componentDidMount() {
        window.addEventListener('hashchange', () => {
            let oldHash, newHash = window.location.hash.split('/')[1]
            if (newHash !== oldHash) {
                this.setState({
                    current: newHash
                })
                oldHash = newHash
            }
            // if (window.location.hash.split('/').length < 2) {
            //     this.setState({
            //         current: '0'
            //     })
            // }
        })
    }
    handleClick = e => {
        this.refs.menu && this.setState({
            current: e.key
        })
    }
    render() {
        return (
            <Menu mode='inline' style={{ height: '600px' }} selectedKeys={[this.state.current]} onClick={this.handleClick} ref='menu'>
                <Menu.Item key='home'>
                    <Icon type="home" />
                    <Link to='/home' style={{ display: 'inline-block' }}>Home</Link>
                </Menu.Item>
                <Menu.Item key='apple'>
                    <Icon type="apple" />
                    <Link to="/apple/List" style={{ display: 'inline-block' }}>Apple</Link>
                </Menu.Item>
                {/* <Menu.Item>
                            <Icon type="desktop" />
                            <Router>
                                <Route>
                                    <Link to="/apps/1/detail" style={{ display: 'inline-block' }}>Detail</Link>
                                </Route>
                            </Router>
                        </Menu.Item> */}
                <Menu.Item key="google">
                    <Icon type="google" />
                    <Link to="/google/List" style={{ display: 'inline-block' }}>Google</Link>
                </Menu.Item>
            </Menu>

        )
    }
}