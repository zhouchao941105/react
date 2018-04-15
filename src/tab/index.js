import React from 'react';
import { Tabs } from 'antd'
import axios from 'axios'
const TabPane = Tabs.TabPane;
class TabList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }
    getList = (key) => {
        axios.get('http://127.0.0.1:9090/get', {
            params: {
                type: key
            }
        }).then(data => {
            this.setState({
                data: data.data.map(item => item.name)
            })
        })
    }
    render() {
        return (
            <Tabs onChange={this.getList}>
                {this.props.list.map((item, idx) => {
                    return (
                        <TabPane tab={`tab${item}`} key={idx}>{this.state.data || item}</TabPane>
                    )
                })}
            </Tabs>
        )
    }
}
export { TabList }