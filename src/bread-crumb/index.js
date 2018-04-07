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
const App = ({ params, children }) => {
    return (
        <div>
            <ul className="app-list">
                <li>
                    <Button>
                        <Link to={`/apps/${params.id}/detail`}>Detail</Link>
                    </Button>
                    <Button>
                        <Link to={`/apps/${params.id}/edit`}>Edit</Link>
                    </Button>
                </li>
                {/* <li>
                    <Button>
                        <Link to="/apps/2/detail">Detail for Application2</Link>
                    </Button>
                    <Button>
                        <Link to="/apps/2/edit">Edit Application2</Link>
                    </Button>
                </li> */}
            </ul>
            <p>it's application{params.id}</p>

            {/* {children} */}
        </div>
    )
}
const Detail = ({ params }) => {
    return (
        <div>
            <Button>
                <Link to={`/apps/${params.id}`} >back to application {params.id}</Link>
            </Button>
            <p>it's detail for {params.id}</p>
        </div>
    )
}
const Edit = withRouter(class extends React.Component {
    constructor(props) {
        super(props)
    }
    // mixins: [Lifecycle],
    componentDidMount() {
        this.props.router.setRouteLeaveHook(
            this.props.route, this.routerWillLeave
        )
    }
    routerWillLeave() {
        let key = confirm({
            title: '确定离开？',
            onOk: () => {
                console.log('leave')
                return true;
            },
            onCancel: () => {
                console.log('stay')
                return false
            },
            okText: '确定',
            cancelText: '取消'
        })

    }
    render() {
        return (
            <div>
                <Button>
                    <Link to={`/apps/${this.props.params.id}`} >back to application {this.props.params.id}</Link>
                </Button>
                <p>edit area for {this.props.params.id}</p>
            </div>)
    }
})
const Home = ({ routes, params, children }) => (
    <div className="demo">
        {/* <div className="demo-nav">
            <Link to="/">Home</Link>
            <Link to="/apps">Application List</Link>
        </div> */}
        <Breadcrumb routes={routes} params={params} />
        {children || 'Home Page'}
        {/* <Alert style={{ margin: '16px 0' }} message="Click the navigation above to switch:" /> */}
    </div>
);
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
            <Router history={hashHistory} >
                <Route name="home" breadcrumbName="Home" path="/" component={Home}>
                    <Route name="apps" breadcrumbName="Application List" path="apps" component={Apps}>
                        <Route name="app" breadcrumbName="Application:id" path=":id" component={App} />
                        <Route name="detail" breadcrumbName="Detail" path=":id/detail" component={Detail} />
                        <Route name='edit' breadcrumbName='Edit' path=":id/edit" component={Edit} />
                    </Route>
                </Route>
            </Router>
        )
    }
}
export { Output }
// ReactDOM.render(

//     , mountNode);