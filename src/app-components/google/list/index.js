import React from 'react';
import { connect } from 'react-redux'
import { Button, Input, Breadcrumb } from 'antd'
import { Link } from 'react-router'
import TabList from '../../../base-components/tab'

const Search = Input.Search
class GoogleContainer extends React.Component {
    render() {
        return (
            <div>
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
const hh = ['d', 'e', 'f']
export default connect(mapStateToProps)(class GoogleList extends React.Component {
    constructor(props) {
        super(props)
    }
    // searchCallback = val => {
    //     this.props.dispatch({ type: 'SEARCH', key: val })
    // }
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
                <p>it's application <span style={{ fontWeight: 'bold' }} >google</span></p>
                <TabList list={hh}></TabList>
                {/* {children} */}
            </div >
        )
    }

})
export { GoogleContainer }
