import React from 'react'
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import './bread.css'
class Appsa extends React.Component {
	render() {
		return (
			<div>
				<ul className="app-list">
					<li>
						<Route path="/apps/1">
							<Link to="/apps/1/detail">Detail</Link>
						</Route>
					</li>

				</ul>
				<div>
					{/* {this.props.children} */}
					<Route path="/apps/1/detail" render={() => <span>it's detail1</span>} />

				</div>
			</div>)
	}
}
// const Appsa = React.createClass({

// }
// );
const Appsb = () => (
	<div>
		<ul className="app-list">

			<li>
				<Link to="/apps/2/detail">Detail</Link>
			</li>
		</ul>
		<div>
			{/* {this.props.children} */}
			<Route path="/apps/2/detail" render={() => <span>it's detail2</span>} />

		</div>
	</div>
);

const breadcrumbNameMap = {
	'/apps': 'Application List',
	'/apps/1': '1',
	'/apps/2': '2',
	'/apps/1/detail': 'Detail',
	'/apps/2/detail': 'Detail',
};
const Home = withRouter((props) => {
	const { location } = props;
	const pathSnippets = location.pathname.split('/').filter(i => i);
	const extraBreadcrumbItems = pathSnippets.map((_, index, arr) => {
		const url = `/${arr.slice(0, index + 1).join('/')}`;
		return (
			<Breadcrumb.Item key={url}>
				<Link to={url}>
					{breadcrumbNameMap[url]}
				</Link>
			</Breadcrumb.Item>
		);
	});
	const breadcrumbItems = [(
		<Breadcrumb.Item key="home">
			<Link to="/">Home</Link>
		</Breadcrumb.Item>
	)].concat(extraBreadcrumbItems);
	return (
		<div className="demo">
			{/* <div className="demo-nav">
        <Link to="/">Home</Link>
        <Link to="/apps">Application List</Link>
	  </div> */}
			<Breadcrumb>
				{breadcrumbItems}
			</Breadcrumb>
			<Switch>
				<Route path="/apps/1" component={Appsa} >
				</Route>
				<Route path="/apps/2" component={Appsb} />
				<Route render={() => <span>Home Page Content</span>} />
			</Switch>

		</div>
	);
});
export default Home
// export let Apps = () => (
// 	<ul className="app-list">
// 		<li>
// 			<Link to="/apps/1">Application1</Link>：<Link to="/apps/1/detail">Detail</Link>
// 		</li>
// 		<li>
// 			<Link to="/apps/2">Application2</Link>：<Link to="/apps/2/detail">Detail</Link>
// 		</li>
// 	</ul>
// )