import React from 'react';
import { connect } from 'react-redux'
import { Tabs, Spin, Tooltip } from 'antd'
import axios from '../../net'
const TabPane = Tabs.TabPane;
class TabList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            loading: false
        }
    }
    // getList = (key) => {
    //     // this.props.dispatch({ type: 'LOADING' })
    //     axios.get('/get', {
    //         params: {
    //             type: key
    //         }
    //     }).then(data => {
    //         // this.props.dispatch({ type: 'STOPLOADING' })

    //         this.setState({
    //             data: data.data.map(item => item.name),
    //         })
    //     }).catch(err => {
    //         // this.props.dispatch({ type: 'STOPLOADING' })
    //     })
    // }
    render() {
        return (
            <div>
                <Tabs onChange={this.props.loadfun}>
                    {this.props.list.map((item, idx) => {
                        return (
                            <TabPane tab={`tab${item}`} key={idx}></TabPane>
                        )
                    })}
                </Tabs>

            </div>
        )
    }
}
function mapStateToProps(state = { loading: false }) {
    return {
        loading: state.loading
    }
}
export default connect(mapStateToProps)(TabList)    