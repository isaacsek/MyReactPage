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
            <Menu pageWrapId={ "menu-page-wrap" } outerContainerId={ "menu-outer-container" } noOverlay isOpen={ true }>
                <div className="center-align">
                    <img src={process.env.PUBLIC_URL + "/images/pic2.jpg"} style = {{maxWidth:'65%', height:'auto', borderRadius:'50%'}}  alt="alternative"></img>
                </div>

                <div className="center-align">
                    <i className="fa fa-linkedin" aria-hidden="true" title="LinkedIn" style={{color:"black", fontSize:'4rem', display:'inline-block'}}></i>
                    <i className="fa fa-github ml-2" aria-hidden="true" title="LinkedIn" style={{color:"black", fontSize:'4rem', display:'inline-block'}}></i>
                    <i className="fa fa-stack-overflow ml-2" aria-hidden="true" title="LinkedIn" style={{color:"black", fontSize:'4rem', display:'inline-block'}}></i>
                    <i className="fa fa-quora ml-2" aria-hidden="true" title="LinkedIn" style={{color:"black", fontSize:'4rem', display:'inline-block'}}></i>
                </div>

                <div className="ml-2">
                    <div><Link to="/">Home</Link></div>
                    <div><Link to="/projects">Projects</Link></div>
                    <div><Link to="/about">About</Link></div>
                    <div><Link to="/contact">Contact</Link></div>
                </div>
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
