// eslint-disable-next-line
import React from 'react'
import { connect } from 'react-redux'
import { Router, Route, Link, hashHistory, withRouter } from 'react-router';
import { Breadcrumb, Button, Modal, Input } from 'antd';
import TabList from '../tab'
import './index.css'
const confirm = Modal.confirm;
const Search = Input.Search;
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
// const List = ({ params, children, props }) => {
// class Nist extends React.Component {
//     constructor(props) {
//         super(props)
//     }
//     searchCallback = val => {
//         this.props.dispatch({ type: 'SEARCH', key: val })
//     }
//     render() {
//         return (
//             <div>
//                 <ul className="app-list">
//                     <li>
//                         <Button>
//                             <Link to={`/${this.props.params.name}/detail`}>Detail</Link>
//                         </Button>
//                         <Button>
//                             <Link to={`/${this.props.params.name}/edit`}>Edit</Link>
//                         </Button>
//                     </li>
//                 </ul>
//                 <Search placeholder="search something" onSearch={this.searchCallback} enterButton={true} defaultValue={this.props.searchVal} ></Search>
//                 <p>it's application <span style={{ fontWeight: 'bold' }} >{this.props.params.name}</span></p>
//                 <TabList list={hh}></TabList>
//                 {/* {children} */}
//             </div >
//         )
//     }

// }
// function stp(state = { searchVal: '' }) {
//     return {
//         searchVal: state.searchVal
//     }
// }
// const List = connect(stp)(Nist);
// const DefaultList = () => {
//     return (
//         <div>It's list area</div>
//     )
// }

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
// const Edit = withRouter(class extends React.Component {
//     // mixins: [Lifecycle],
//     componentDidMount() {
//         // setAsyncRouteLeaveHook(this.props.router, this.props.route, this.routerWillLeave)
//         this.props.router.setRouteLeaveHook(
//             this.props.route, this.routerWillLeave
//         )
//     }
//     routerWillLeave() {
//         //todo: hash
//         // return '确定离开？'
//         return new Promise((res, rej) => {
//             confirm({
//                 title: '确定离开？',
//                 onOk: () => {
//                     console.log('leave')
//                     return new Promise((resolve) => {
//                         setTimeout(() => {
//                             resolve();
//                             res();
//                         }, 3000)
//                     });
//                     // res()
//                 },
//                 onCancel: () => {
//                     console.log('stay')
//                     // return false
//                     rej()
//                 },
//                 okText: '确定',
//                 cancelText: '取消'
//             })
//         })

//     }
//     render() {
//         return (
//             <div>
//                 <Button>
//                     <Link to={`/${this.props.params.name}/List`} >back to application {this.props.params.name}</Link>
//                 </Button>
//                 <p><strong>Edit</strong> area for {this.props.params.name}</p>
//             </div>)
//     }
// })
const Home = ({ routes, params, children }) => {
    routes.shift()
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
// class Output extends React.Component {
//     // leave = (a, b) => {
//     //     return confirm({
//     //         title: '确定离开？',
//     //         onOk: () => {
//     //             console.log('leave')
//     //         },
//     //         onCancel: () => {
//     //             console.log('stay')
//     //         },
//     //         okText: '确定',
//     //         cancelText: '取消'
//     //     })
//     // }
//     render() {
//         return (
//             {/* <Route name="apps" breadcrumbName="Application List" path="apps" component={Apps}> */ }
//         )
//     }
// }
export { Home }
// ReactDOM.render(

//     , mountNode);