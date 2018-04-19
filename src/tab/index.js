import React from 'react';
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
        this.setState({
            loading: true
        })
        axios.get('/get', {
            params: {
                type: key
            }
        }).then(data => {
            this.setState({
                data: data.data.map(item => item.name),
                loading: false
            })
        }).catch(err => {
            this.setState({
                loading: false
            })
        })
    }
    render() {
        return (
            <div>
                <Spin spinning={this.state.loading} delay={1000} >
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
export { TabList }