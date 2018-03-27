/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker, Button, From, Layout, Icon, Menu } from 'antd'
import moment from 'moment'
import './index.css';
// import 'antd/dist/antd.less';
const { RangePicker } = DatePicker
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
//单元格
class Square extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         value: null
    //     }
    // }
    render() {
        return (
            <button className="square" onClick={() => this.props.cb()}>
                {this.props.value}
            </button>
        );
    }
}
//区域
class Board extends React.Component {
    constructor() {
        super();
        this.state = {
            squares: Array(9).fill(null),
            Xnext: true
        }
    }
    handleClick(i) {
        console.log(DatePicker);
        const squares = this.state.squares.slice();
        squares[i] = this.state.Xnext ? 'x' : 'o';
        this.setState({ squares: squares, Xnext: !this.state.Xnext })
    }
    renderSquare(i) {
        return <Square value={this.state.squares[i]} cb={() => this.handleClick(i)} />;
    }
    render() {
        const status = `Next player: ${this.state.Xnext ? 'x' : 'o'}`;

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
                <span>开始时间</span>
                <DatePicker defaultValue={moment('2017-12-19', 'YYYY-MM-DD')} />
                <span>结束时间</span>
                <DatePicker defaultValue={moment('2017-12-29', 'YYYY-MM-DD')} />
                <RangePicker />
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                    <Button >submit?</Button>
                </div>
            </div>
        );
    }
}
class Chat extends React.Component {
    render() {
        return (
            <Layout>
                <Sider>
                    <Menu theme='dark' mode='inline'>
                        <Menu.Item key='1'>
                            <Icon type="pie-chart" />
                            <span>Option 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="desktop" />
                            <span>Option 2</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        chat online
                </Header>
                    <Content>
                        <div style={{ padding: 24, background: '#ffd', minHeight: 360 }}>
                            Bill is a cat.
            </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design 的啊
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
