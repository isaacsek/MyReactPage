import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
	render() {
		console.log(this.props.combinedReducer);
		return (
			<nav>
				<div className="nav-wrapper  blue darken-2">
					<Link to="/" className="brand-logo ml-2">Home</Link>
					<ul className="right">
						<li>
							<Link to="/projects">Projects</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

function mapStateToProps(state) {
	return {
		combinedReducer: state.sample
	};
}

export default connect(mapStateToProps)(Header);
