/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker, Button, From, Layout, Icon, Menu } from 'antd'
import moment from 'moment'
import './index.css';
import axios from 'axios'
// import 'antd/dist/antd.less';
const { RangePicker } = DatePicker
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
class Chat extends React.Component {
    render() {
        return (
            <Layout>
                <Sider>
                    <Menu theme='dark' mode='inline'>
                        <Menu.Item key='1'>
                        <Icon type="pie-chart" />
                            <span>学生2</span>
                        </Menu.Item>
                        
                        <SubMenu title='hehe'>
                            <Menu.Item>
                                haha
                            </Menu.Item>
                        </SubMenu>
                            
                        <Menu.Item key="2">
                            <Icon type="desktop" />
                            <span>考勤2</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 ,color:'pink'}}>
                        chat online
                </Header>
                    <Content>
                        <div style={{ padding: 24, background: '#ffd', minHeight: 360 }}>
                            Bill is a cat.
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        SIS
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}

// ========================================

ReactDOM.render(
    <Chat />,
    document.getElementById('root')
);
if(module.hot){
    module.hot.accept()
}
