import React from 'react'
import { Router, Route, Link, hashHistory } from 'react-router';
import { Breadcrumb, Button } from 'antd';
import './inde.css'
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
const Edit = ({ params }) => (
    <div>
        <Button>
            <Link to={`/apps/${params.id}`} >back to application {params.id}</Link>
        </Button>
        <p>edit area for {params.id}</p>
    </div>
)
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