import React from 'react';
import { connect } from 'react-redux'
import { Button, Input, Breadcrumb, Layout, Tooltip } from 'antd'
import { Link } from 'react-router-dom'
import TabList from '../../../base-components/tab'
import MenuList from '../../../base-components/menu-list'
import Lazyload from '../../../base-components/lazy-load'
import axios from '../../../net'
import Title from '../../../base-components/document-title'
const Search = Input.Search
const { Sider } = Layout

function itemRender(route, params, routes, paths) {
    const last = routes.indexOf(route) === routes.length - 1
    return last ? <span>{route.breadcrumbName}</span> : <Link to={paths.join('/')} key={routes.indexOf(route)}>{route.breadcrumbName}</Link>
}
class GoogleContainer extends React.Component {
    render() {
        return (
            <Title title="google">
                <Layout style={{ margin: 16 }}>
                    <Sider>
                        <MenuList select="google"></MenuList>
                    </Sider>
                    <Layout>
                        <Breadcrumb itemRender={itemRender} routes={this.props.routes}></Breadcrumb>
                        {this.props.children}
                    </Layout>

                </Layout>
            </Title>

        )

    }
}
function mapStateToProps(state = { searchVal: '' }) {
    return {
        searchVal: state.searchVal
    }
}
const hh = ['d', 'e', 'f']
export default connect(mapStateToProps)(class GoogleList extends React.Component {
    constructor(props) {
        super(props)
    }
    // searchCallback = val => {
    //     this.props.dispatch({ type: 'SEARCH', key: val })
    // }
    getList = type => {
        axios.get('/get', {
            params: {
                type
            }
        }).then(list => {
            this.setState({
                list: list
            })
            this.initList = list;
        })
    }
    haha = () => {
        // console.log('works');
        this.setState({
            list: this.state.list.concat(this.initList)
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
                            <Link to={`/google/detail`}>Detail</Link>
                        </Button>
                        <Button>
                            <Link to={`/google/edit`}>Edit</Link>
                        </Button>
                    </li>
                </ul>
                {/* <Search placeholder="search something" onSearch={this.searchCallback} enterButton={true} defaultValue={this.props.searchVal} ></Search> */}
                <p>it's application <span style={{ fontWeight: 'bold' }} ><Tooltip title='google'>google</Tooltip></span></p>
                <TabList list={hh}></TabList>
                <Lazyload cb={this.haha}>
                    <div>
                        <ul>
                            {this.state && this.state.list.map((item, idx) =>
                                <li key={idx}>{item.name}</li>
                            )}
                        </ul>
                    </div>
                </Lazyload>
                {/* {children} */}
            </div >
        )
    }

})
export { GoogleContainer }
