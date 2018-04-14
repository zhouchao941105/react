import React from 'react';
import { Tabs } from 'antd'
const TabPane = Tabs.TabPane;
class TabList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Tabs>
                {this.props.list.map((item, idx) => {
                    return (
                        <TabPane tab={`tab${item}`} key={idx}>{item}</TabPane>
                    )
                })}
            </Tabs>
        )
    }
}
export { TabList }