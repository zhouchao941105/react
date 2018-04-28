import React from 'react'
import { connect } from 'react-redux'
import { Menu, Icon } from 'antd';
import { Link } from 'react-router'
function mapStateToProps(state = { current: 'home' }) {
    return {
        current: state.current
    }
}
export default connect(mapStateToProps)(class MenuList extends React.Component {
    constructor(props) {
        super(props)
    }
    handleClick = e => {
        // this.refs.menu && this.setState({
        //     current: e.key
        // })
        // this.props.dispatch({ type: 'NAVCHANGE', current: e.key })
    }
    render() {
        console.log(this.props);
        return (
            // selectedKeys={[this.props.current]}
            <Menu mode='inline' style={{ height: '900px' }} selectedKeys={[this.props.select]} onClick={this.handleClick} ref='menu'>
                {/* <Menu.Item key='home'>
                    <Icon type="home" />
                    <Link to='/home' style={{ display: 'inline-block' }}>Home</Link>
                </Menu.Item> */}
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
) 