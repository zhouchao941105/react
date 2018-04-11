import React from 'react'
import { Router, Route, Link, hashHistory, withRouter } from 'react-router';
import { Breadcrumb, Button, Modal } from 'antd';
import './inde.css'
const confirm = Modal.confirm;
const Apps = ({ children }) => (
    <div>
        {/* <Button><Link to="/apps/1">go to app1</Link></Button> */}
        {/* <Button><Link to="/apps/2">go to app2</Link></Button> */}
        <div>{children || 'haha'}</div>
    </div>

);
// const path = {
//     pathname: '/apps/1',
//     state: {
//         current: 0
//     }
// }
const List = ({ params, children }) => {
    return (
        <div>
            <ul className="app-list">
                <li>
                    <Button>
                        <Link to={`/${params.name}/detail`}>Detail</Link>
                    </Button>
                    <Button>
                        <Link to={`/${params.name}/edit`}>Edit</Link>
                    </Button>
                </li>
            </ul>
            <p>it's application <span style={{ 'fontWeight': 'bold' }}>{params.name}</span></p>

            {/* {children} */}
        </div >
    )
}
const DefaultList = () => {
    return (
        <div>It's list area</div>
    )
}
const Detail = ({ params }) => {
    return (
        <div>
            <Button>
                <Link to={`/${params.name}/List`} >back to application {params.name}</Link>
            </Button>
            <Button>
                <Link to={`/google/List`} >back to application google</Link>
            </Button>
            <p>it's detail for {params.name}</p>
        </div>
    )
}
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
const Edit = withRouter(class extends React.Component {
    // mixins: [Lifecycle],
    componentDidMount() {
        setAsyncRouteLeaveHook(this.props.router, this.props.route, this.routerWillLeave)
        // this.props.router.setRouteLeaveHook(
        // this.props.route, this.routerWillLeave
        // )
    }
    routerWillLeave() {
        // return '确定离开？'
        return new Promise((res, rej) => {
            confirm({
                title: '确定离开？',
                onOk: () => {
                    console.log('leave')
                    // return new Promise((res) => {
                    //     setTimeout(() => { res() }, 3000)
                    // });
                    res()
                },
                onCancel: () => {
                    console.log('stay')
                    // return false
                    rej()
                },
                okText: '确定',
                cancelText: '取消'
            })
        }).then()

    }
    render() {
        return (
            <div>
                <Button>
                    <Link to={`/${this.props.params.name}/List`} >back to application {this.props.params.name}</Link>
                </Button>
                <p>edit area for {this.props.params.name}</p>
            </div>)
    }
})
const Home = ({ routes, params, children }) => {
    return (
        <div className="demo">
            {/* <div className="demo-nav">
            <Link to="/">Home</Link>
            <Link to="/apps">Application List</Link>
        </div> */}
            <Breadcrumb routes={routes} params={params} />
            {children || 'Home Page'}
            {/* <App></App> */}
            {/* <Alert style={{ margin: '16px 0' }} message="Click the navigation above to switch:" /> */}
        </div>
    )
};
class Output extends React.Component {
    // leave = (a, b) => {
    //     return confirm({
    //         title: '确定离开？',
    //         onOk: () => {
    //             console.log('leave')
    //         },
    //         onCancel: () => {
    //             console.log('stay')
    //         },
    //         okText: '确定',
    //         cancelText: '取消'
    //     })
    // }
    render() {
        return (
            {/* <Route name="apps" breadcrumbName="Application List" path="apps" component={Apps}> */ }
        )
    }
}
export { List, DefaultList, Detail, Edit, Home }
// ReactDOM.render(

//     , mountNode);