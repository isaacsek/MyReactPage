import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Welcome from "./Welcome";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<div>
				<BrowserRouter>
					<div>
						<Header />
						<Route exact={true} path="/" component={Welcome} />
						<Route exact={true} path="/projects" component={Projects} />
						<Route exact={true} path="/about" component={About} />
						<Route exact={true} path="/contact" component={Contact} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(null, actions)(App);
