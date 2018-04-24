import React from 'react';
import { connect } from 'react-redux'
import { Button, Input, Breadcrumb, Tooltip, Table } from 'antd'
import { Link } from 'react-router'
import TabList from '../../../base-components/tab'

const Search = Input.Search

class AppleContainer extends React.Component {
    render() {
        return (
            <div style={{ margin: 16 }}>
                <Breadcrumb routes={this.props.routes}></Breadcrumb>
                {this.props.children}
            </div>
        )

    }
}
function mapStateToProps(state = { searchVal: '' }) {
    return {
        searchVal: state.searchVal
    }
}
const hh = ['x', 'y', 'z']
const sourceData = [{
    name: 'haha'
}, {
    name: 'hwiii'
}]
export default connect(mapStateToProps)(class AppleList extends React.Component {
    constructor(props) {
        super(props)
    }
    searchCallback = val => {
        this.props.dispatch({ type: 'SEARCH', key: val })
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
                <TabList list={hh}></TabList>
                <Table dataSource={sourceData}>
                    <Table.Column title="name" dataIndex="name"></Table.Column>
                </Table>
                {/* {children} */}
            </div >
        )
    }

})
export { AppleContainer }
