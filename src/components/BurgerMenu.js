import React, { Component } from "react";
import {connect} from 'react-redux';
import { slide as Menu } from 'react-burger-menu'
import { Link } from "react-router-dom";

import IconButton from 'material-ui/IconButton';
import SvgIcon from 'material-ui/SvgIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class BurgerMenu extends Component {
  showSettings (event) {
    event.preventDefault();
  }

	render() {
		return (
            <Menu pageWrapId={ "menu-page-wrap" } outerContainerId={ "menu-outer-container" } noOverlay isOpen={ true }>
                <div className="center-align">
                    <img src={process.env.PUBLIC_URL + "/images/pic2.jpg"} style = {{maxWidth:'65%', height:'auto', borderRadius:'50%'}}  alt="alternative"></img>

                    <div>
                        <i className="fa fa-linkedin" aria-hidden="true" title="LinkedIn" style={{color:"black", fontSize:'3rem', display:'inline-block'}}></i>
                        <i className="fa fa-github ml-2" aria-hidden="true" title="LinkedIn" style={{color:"black", fontSize:'3rem', display:'inline-block'}}></i>
                        <i className="fa fa-stack-overflow ml-2" aria-hidden="true" title="LinkedIn" style={{color:"black", fontSize:'3rem', display:'inline-block'}}></i>
                        <i className="fa fa-quora ml-2" aria-hidden="true" title="LinkedIn" style={{color:"black", fontSize:'3rem', display:'inline-block'}}></i>
                    </div>

                    <div>
                        <div>
                            <i className="material-icons" style={{fontSize:'32px', display:'inline', position:'relative', top:'5px'}}>home</i>
                            <p style={{fontSize:'32px', display:'inline'}}><strong><Link to="/">Home</Link></strong></p>
                            <h5><strong><Link to="/">Home</Link></strong></h5>
                        </div>
                        <div className="left-align" style={{display:'inline-block'}}>
                            <div ><Link to="/projects">Projects</Link></div>
                            <div><Link to="/about">About</Link></div>
                            <div><Link to="/contact">Contact</Link></div>
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


const iconStyles = {
    marginRight: 24,
    height:'64px',
    width:'64px'
};

const styles = {
  smallIcon: {
    width: 36,
    height: 36,
  },
  mediumIcon: {
    width: 48,
    height: 48,
  },
  largeIcon: {
    width: 60,
    height: 60,
  },
  small: {
    width: 72,
    height: 72,
    padding: 16,
  },
  medium: {
    width: 96,
    height: 96,
    display: 'inline-block'
    // padding: 24,
  },
  large: {
    width: 120,
    height: 120,
    padding: 30,
  },
};

const GithubIcon= (props) => (
    <SvgIcon {...props}>
        <path d="M12 0.296c-6.627 0-12 5.372-12 12 0 5.302 3.438 9.8 8.206 11.387 0.6 0.111 0.82-0.26 0.82-0.577 0-0.286-0.011-1.231-0.016-2.234-3.339 0.726-4.043-1.416-4.043-1.416-0.546-1.387-1.332-1.756-1.332-1.756-1.089-0.745 0.082-0.729 0.082-0.729 1.205 0.085 1.839 1.237 1.839 1.237 1.070 1.834 2.807 1.304 3.492 0.997 0.108-0.775 0.418-1.305 0.762-1.605-2.666-0.303-5.467-1.332-5.467-5.93 0-1.31 0.469-2.381 1.237-3.221-0.125-0.302-0.536-1.523 0.116-3.176 0 0 1.008-0.322 3.301 1.23 0.957-0.266 1.984-0.399 3.004-0.404 1.020 0.005 2.047 0.138 3.006 0.404 2.291-1.553 3.297-1.23 3.297-1.23 0.653 1.653 0.243 2.873 0.118 3.176 0.769 0.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921 0.43 0.372 0.814 1.103 0.814 2.222 0 1.606-0.014 2.898-0.014 3.293 0 0.319 0.216 0.694 0.824 0.576 4.765-1.588 8.199-6.085 8.199-11.385 0-6.628-5.373-12-12-12z"></path>
    </SvgIcon>
);

const LinkedInIcon = (props) => (
    <SvgIcon {...props}>
        <path d="M9 9h4.151v2.128h0.059c0.577-1.036 1.991-2.128 4.098-2.128 4.382 0 5.192 2.728 5.192 6.275v7.225h-4.327v-6.405c0-1.528-0.031-3.493-2.251-3.493-2.253 0-2.597 1.664-2.597 3.382v6.516h-4.325v-13.5z"></path>
        <path d="M1.5 9h4.5v13.5h-4.5v-13.5z"></path>
        <path d="M6 5.25c0 1.243-1.007 2.25-2.25 2.25s-2.25-1.007-2.25-2.25c0-1.243 1.007-2.25 2.25-2.25s2.25 1.007 2.25 2.25z"></path>
    </SvgIcon>
);

{/* <IconButton tooltip = "LinkedIn" touch = { true } tooltipPosition = "bottom-right" iconStyle={styles.mediumIcon} style={styles.medium}>
    <LinkedInIcon/>
</IconButton>
<IconButton tooltip = "LinkedIn" touch = { true } tooltipPosition = "bottom-right" iconStyle={styles.mediumIcon} style={styles.medium}>
    <GithubIcon/>
</IconButton> */}
