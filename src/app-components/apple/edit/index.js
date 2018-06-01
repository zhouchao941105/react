import React from 'react'
import { Modal, Button, Input } from 'antd'
import { Link } from 'react-router-dom'
import axios from 'axios'
const confirm = Modal.confirm
// function setAsyncRouteLeaveHook(router, route, hook) {
//     let withinHook = false
//     let finalResult = undefined
//     let finalResultSet = false
//     router.setRouteLeaveHook(route, nextLocation => {
//         withinHook = true
//         if (!finalResultSet) {
//             hook(nextLocation).then(result => {
//                 finalResult = result
//                 finalResultSet = true
//                 if (!withinHook && nextLocation) {
//                     // Re-schedule the navigation
//                     router.push(nextLocation)
//                 }
//             })
//         }
//         let result = finalResultSet ? finalResult : false
//         withinHook = false
//         finalResult = undefined
//         finalResultSet = false
//         return result
//     })
// }
class AppleEdit extends React.Component {
    // mixins: [Lifecycle],
    constructor(props) {
        super(props)
        this.state = {
            value: props.name || ''
        }
    }
    componentDidMount() {
        // console.log(this);
        // setAsyncRouteLeaveHook(this.props.router, this.props.route, this.routerWillLeave)
        // this.props.router.setRouteLeaveHook(
        //     this.props.route, this.routerWillLeave
        // )
    }
    routerWillLeave() {
        //todo: hash
        // return '确定离开？'
        return new Promise((res, rej) => {
            confirm({
                title: '确定离开？',
                onOk: () => {
                    console.log('leave')
                    return new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            res();
                        }, 3000)
                    });
                    // res()
                },
                onCancel: () => {
                    console.log('stay')
                    // return false
                    rej()
                },
                okText: '确定',
                cancelText: '取消'
            })
        })

    }
    save() {
        return axios.post('/create', {
            name: this.state.name || 'zhouchao',
            school: this.state.school || 'beijing'
        }).then(() => {
            window.location.href = '/apple/list'
        })
    }
    change(event, d) {
        this.setState({
            name: event.target.value
        })
    }
    changeSchool(event) {
        this.setState({
            school: event.target.value
        })
    }
    render() {
        return (
            <div>
                <Button>
                    <Link to={`/apple/list`} >back to application apple</Link>
                </Button>
                <p><strong>Edit</strong> area for apple</p>
                <div>
                    <span>Name</span>
                    <Input style={{ width: '200px' }} onChange={this.change.bind(this)} defaultValue={this.state.name} />
                </div>
                <div>
                    <span>School</span>
                    <Input style={{ width: '200px' }} onChange={this.changeSchool.bind(this)} defaultValue={this.state.school} />
                </div>
                <div>
                    <Button onClick={() => {
                        this.save()
                    }}>保存</Button>
                </div>
            </div>)
    }
}
export default AppleEdit 