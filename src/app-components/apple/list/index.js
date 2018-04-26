import React from 'react';
import { connect } from 'react-redux'
import { Button, Input, Breadcrumb, Tooltip, Table, Spin, Layout } from 'antd'
import { Link } from 'react-router'
import TabList from '../../../base-components/tab'
import MenuList from '../../../base-components/menu-list'
import axios from '../../../net'

const Search = Input.Search
const { Sider } = Layout;
function itemRender(route, params, routes, paths) {
    const last = routes.indexOf(route) === routes.length - 1
    return last ? <span>{route.breadcrumbName}</span> : <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
}
class AppleContainer extends React.Component {

    render() {
        return (
            <Layout style={{ margin: 16 }}>
                <Sider>
                    <MenuList select="apple"></MenuList>
                </Sider>
                <Layout>
                    <Breadcrumb itemRender={itemRender} routes={this.props.routes}></Breadcrumb>
                    {this.props.children}
                </Layout>

            </Layout>
        )

    }
}
function mapStateToProps(state = { searchVal: '', loading: false }) {
    return {
        searchVal: state.searchVal,
        loading: state.loading
    }
}
const hh = ['x', 'y', 'z']
const sourceData = [{
    name: 'haha',
    school: 'bei'
}, {
    name: 'hwiii',
    school: 'hoohoh'
}]
export default connect(mapStateToProps)(class AppleList extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        list: []
    }
    searchCallback = val => {
        this.props.dispatch({ type: 'SEARCH', key: val })
    }
    getList = type => {
        axios.get('/get', {
            params: {
                type
            }
        }).then(list => {
            this.setState({
                list: list.data
            })
        })
    }
    componentDidMount() {
        this.getList('0')
    }
    render() {
        return (
            <div>
                <ul className="app-list">
                    <li>
                        <Button>
                            <Link to={`/apple/detail`}>Detail</Link>
                        </Button>
                        <Button>
                            <Link to={`/apple/edit`}>Edit</Link>
                        </Button>
                    </li>
                </ul>
                <Search placeholder="search something" style={{ width: 300 }} onSearch={this.searchCallback} enterButton defaultValue={this.props.searchVal} ></Search>
                <p>it's application <span style={{ fontWeight: 'bold' }} ><Tooltip title='apple'>apple</Tooltip></span></p>
                <TabList list={hh} loadfun={this.getList}></TabList>
                <Spin spinning={this.props.loading || false} delay={1000} >
                    <Table dataSource={this.state.list}>
                        <Table.Column title="name" dataIndex="name" key="1"></Table.Column>
                        <Table.Column title="school" dataIndex="school" key="2"></Table.Column>
                    </Table>
                </Spin>

                {/* {children} */}
            </div >
        )
    }

})
export { AppleContainer }
