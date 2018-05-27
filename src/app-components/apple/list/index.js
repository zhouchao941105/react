import React from 'react';
import { connect } from 'react-redux'
import { Button, Input, Breadcrumb, Tooltip, Table, Spin, Layout } from 'antd'
import { Link, Route, Switch, Redirect } from 'react-router-dom'
import TabList from '../../../base-components/tab'
import MenuList from '../../../base-components/menu-list'
import axios from '../../../net'
import Title from '../../../base-components/document-title'

import AppleEdit from '../edit/index'
import AppleDetail from "../detail/index";

const Search = Input.Search
const { Sider } = Layout;
// function itemRender(route, params, routes, paths) {
//     const last = routes.indexOf(route) === routes.length - 1
//     return last ? <span>{route.breadcrumbName}</span> : <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
// }
const nameMap = {
    '/apple': 'apple',
    '/apple/list': 'list',
    '/apple/edit': 'edit',
    '/apple/detail': 'detail'
}
class AppleContainer extends React.Component {
    render() {
        const routeList = this.props.location.pathname.split('/').filter(i => i)
        const breadList = routeList.map((item, idx, arr) => {
            let url = `/${routeList.slice(0, idx + 1).join('/')}`
            return (
                idx == arr.length - 1 ? <Breadcrumb.Item key={url}><span>{nameMap[url]}</span></Breadcrumb.Item> : <Breadcrumb.Item key={url}>
                    <Link to={url}>
                        {nameMap[url]}
                    </Link>
                </Breadcrumb.Item>
            )
        })
        return (
            <Title title="apple">
                <Layout style={{ margin: 0 }}>
                    <Sider>
                        <MenuList select="apple"></MenuList>
                    </Sider>
                    <Layout>
                        <Breadcrumb  >
                            {breadList}
                        </Breadcrumb>
                        <Switch>
                            <Redirect exact from={this.props.match.url} to={`${this.props.match.url}/list`}></Redirect>
                            <Route path={`${this.props.match.url}/list`} component={AppleList}></Route>
                            <Route path={`${this.props.match.url}/edit`} component={AppleEdit}></Route>
                            <Route path={`${this.props.match.url}/detail`} component={AppleDetail}></Route>
                        </Switch>
                    </Layout>

                </Layout>
            </Title>
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
const AppleList = connect(mapStateToProps)(class List extends React.Component {
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
                list: list
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
                        <Button>
                            <Link to={`/apple/edit`}>New</Link>
                        </Button>
                    </li>
                </ul>
                <Search placeholder="search something" style={{ width: 300 }} onSearch={this.searchCallback} enterButton defaultValue={this.props.searchVal} ></Search>
                <p>it's application <span style={{ fontWeight: 'bold' }} ><Tooltip title='apple'>apple</Tooltip></span></p>
                <TabList list={hh} loadfun={this.getList}></TabList>
                <Spin spinning={this.props.loading || false} delay={1000} >
                    <Table rowKey='_id' dataSource={this.state.list} pagination={{ pageSize: 10 }} >
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
