import React from 'react'
import { withRouter } from 'react-router'
import { Modal, Button } from 'antd'
import { Link } from 'react-router-dom'
const confirm = Modal.confirm
function setAsyncRouteLeaveHook(router, route, hook) {
    let withinHook = false
    let finalResult = undefined
    let finalResultSet = false
    router.setRouteLeaveHook(route, nextLocation => {
        withinHook = true
        if (!finalResultSet) {
            hook(nextLocation).then(result => {
                finalResult = result
                finalResultSet = true
                if (!withinHook && nextLocation) {
                    // Re-schedule the navigation
                    router.push(nextLocation)
                }
            })
        }
        let result = finalResultSet ? finalResult : false
        withinHook = false
        finalResult = undefined
        finalResultSet = false
        return result
    })
}
const GoogleEdit = withRouter(class extends React.Component {
    // mixins: [Lifecycle],
    componentDidMount() {
        setAsyncRouteLeaveHook(this.props.router, this.props.route, this.routerWillLeave)
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
    render() {
        return (
            <div>
                <Button>
                    <Link to={`/google/List`} >back to application google</Link>
                </Button>
                <p><strong>Edit</strong> area for google</p>
            </div>)
    }
})
export default GoogleEdit 