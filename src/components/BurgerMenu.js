import React, { Component } from "react";
import {connect} from 'react-redux';
import { slide as Menu } from 'react-burger-menu'
import { Link } from "react-router-dom";

var styles = {
  bmMenu: {
    background: '#373a47'
  }
}

class BurgerMenu extends Component {
  showSettings (event) {
    event.preventDefault();
  }

	render() {
		return (
            <Menu pageWrapId={ "menu-page-wrap" } outerContainerId={ "menu-outer-container" } noOverlay isOpen={ true } styles={styles}>
                <div className="center-align">
                    <img src={process.env.PUBLIC_URL + "/images/pic2.jpg"} style = {{maxWidth:'75%', height:'auto', borderRadius:'50%'}}  alt="alternative"></img>
                    <div>
                        <a href="https://www.linkedin.com/in/isaacsek/">
                            <i className="fa fa-linkedin" aria-hidden="true" title="LinkedIn"></i>
                        </a>
                        <a href="https://github.com/isek27">
                            <i className="fa fa-github ml-2" aria-hidden="true" title="Github"></i>
                        </a>
                        <a href="https://stackoverflow.com/users/7124598/isek27">
                            <i className="fa fa-stack-overflow ml-2" aria-hidden="true" title="StackOverflow"></i>
                        </a>
                        <a href="https://www.quora.com/profile/Isaac-Sek-1">
                            <i className="fa fa-quora ml-2" aria-hidden="true" title="Quora"></i>
                        </a>
                    </div>
                </div>

                <div className="ml=2" style={{marginTop:'40px', width:'100%'}}>
                    <div style={{display:'inline-block'}}>
                        <div className="hvr-fade" style={{width:'100%'}}>
                            <i className="material-icons" style={{fontSize:'32px', display:'inline', position:'relative', top:'5px', color:'white'}}>home</i>
                            <p className="ml-2" style={{fontSize:'32px', display:'inline'}}><strong><Link to="/">Home</Link></strong></p>
                        </div>
                        <div className="hvr-fade" style={{width:'100%'}}>
                            <i className="material-icons" style={{fontSize:'32px', display:'inline', position:'relative', top:'5px', color:'white'}}>android</i>
                            <p className="ml-2" style={{fontSize:'32px', display:'inline'}}><strong><Link to="/projects">Projects</Link></strong></p>
                        </div>
                        <div className="hvr-fade" style={{width:'100%'}}>
                            <i className="material-icons" style={{fontSize:'32px', display:'inline', position:'relative', top:'5px', color:'white'}}>face</i>
                            <p className="ml-2" style={{fontSize:'32px', display:'inline'}}><strong><Link to="/about">About</Link></strong></p>
                        </div>
                        <div className="hvr-fade" style={{width:'100%'}}>
                            <i className="material-icons" style={{fontSize:'32px', display:'inline', position:'relative', top:'5px', color:'white'}}>send</i>
                            <p className="ml-2" style={{fontSize:'32px', display:'inline'}}><strong><Link to="/contact">Contact</Link></strong></p>
                        </div>
                        <div className="hvr-fade" style={{width:'100%'}}>
                            <i className="material-icons" style={{fontSize:'32px', display:'inline', position:'relative', top:'5px', color:'white'}}>insert_chart</i>
                            <p className="ml-2" style={{fontSize:'32px', display:'inline'}}><strong><Link to="/skills">Resume</Link></strong></p>
                        </div>
                    </div>
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
