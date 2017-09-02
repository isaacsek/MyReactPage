import React, { Component } from "react";
import {connect} from 'react-redux';
import { slide as Menu } from 'react-burger-menu'
import { Link } from "react-router-dom";

class BurgerMenu extends Component {
  showSettings (event) {
    event.preventDefault();
  }

	render() {
		return (
            <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } >
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
            </Menu>
		);
	}
}

function mapStateToProps(state) {
  return {
    combinedReducer: state.sample
  };
}

export default connect(mapStateToProps)(BurgerMenu);
