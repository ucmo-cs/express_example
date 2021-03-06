import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListComponent from "./components/ListComponent";
import AddComponent from "./components/AddComponent";
import EditComponent from "./components/EditComponent";
const ReactDOM = require('react-dom');

function App() {
	return (
		<div className="container">
			<Router>
				<div className="col-md-6">
					<h1 className="text-center" style={style}>React Car Application</h1>
					<Switch>
						<Route path="/" exact component={ListComponent} />
						<Route path="/list" component={ListComponent} />
						<Route path="/add" component={AddComponent} />
						<Route path="/edit" component={EditComponent} />
					</Switch>
				</div>
			</Router>
		</div>
	);
}

const style = {
	color: 'red',
	margin: '10px'
}

export default App;
