import React from 'react';
import { connect } from 'react-redux'
import { Tabs, Spin } from 'antd'
import axios from '../net'
const TabPane = Tabs.TabPane;
class TabList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            loading: false
        }
    }
    getList = (key) => {
        // this.props.dispatch({ type: 'LOADING' })
        axios.get('/get', {
            params: {
                type: key
            }
        }).then(data => {
            // this.props.dispatch({ type: 'STOPLOADING' })

            this.setState({
                data: data.data.map(item => item.name),
            })
        }).catch(err => {
            // this.props.dispatch({ type: 'STOPLOADING' })
        })
    }
    render() {
        return (
            <div>
                <Spin spinning={this.props.loading || false} delay={1000}>
                    <Tabs onChange={this.getList}>
                        {this.props.list.map((item, idx) => {
                            return (
                                <TabPane tab={`tab${item}`} key={idx}>{this.state.data || item}</TabPane>
                            )
                        })}
                    </Tabs>
                </Spin>

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