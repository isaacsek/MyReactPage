import React, { Component } from "react";
import {connect} from 'react-redux';
import { push as Menu } from 'react-burger-menu'
import { Link } from "react-router-dom";

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#FFFFFF'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#373a47',
    //padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMenuWrap: {
      //background:'green'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    background:'#212121',
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

class BurgerMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpen:false};
    }

    handleMenuClick(event) {
        //event.preventDefault();
        this.setState({isOpen:false});
    }

	render() {
		return (
            <Menu pageWrapId={ "menu-page-wrap" } outerContainerId={ "menu-outer-container" } isOpen={ this.state.isOpen } styles={ styles }>
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

                <div className="" style={{marginTop:'30px', width:'100%', textAlign:'center'}}>
                    <div style={{display:'inline-block', textAlign:'left'}}>
                        <Link to="/" onClick={ (event) => this.handleMenuClick(event) } >
                            <div className="hvr-fade" style={{width:'100%'}}>
                            <i className="material-icons" style={{fontSize:'32px', display:'inline', position:'relative', top:'5px', color:'white'}}>home</i>
                            <p className="ml-2" style={{fontSize:'32px', display:'inline'}}><strong>Home</strong></p>
                        </div>
                        </Link>

                        <Link to="/projects" onClick={ (event) => this.handleMenuClick(event) }>
                        <div className="hvr-fade" style={{width:'100%'}}>
                            <i className="material-icons" style={{fontSize:'32px', display:'inline', position:'relative', top:'5px', color:'white'}}>android</i>
                            <p className="ml-2" style={{fontSize:'32px', display:'inline'}}><strong>Projects</strong></p>
                        </div>
                        </Link>

                        <Link to="/about" onClick={ (event) => this.handleMenuClick(event) }>
                        <div className="hvr-fade" style={{width:'100%'}}>
                            <i className="material-icons" style={{fontSize:'32px', display:'inline', position:'relative', top:'5px', color:'white'}}>face</i>
                            <p className="ml-2" style={{fontSize:'32px', display:'inline'}}><strong>About</strong></p>
                        </div>
                        </Link>

                        <Link to="/contact" onClick={ (event) => this.handleMenuClick(event) }>
                        <div className="hvr-fade" style={{width:'100%'}}>
                            <i className="material-icons" style={{fontSize:'32px', display:'inline', position:'relative', top:'5px', color:'white'}}>send</i>
                            <p className="ml-2" style={{fontSize:'32px', display:'inline'}}><strong>Contact</strong></p>
                        </div>
                        </Link>

                        <Link to="/skills" onClick={ (event) => this.handleMenuClick(event) }>
                        <div className="hvr-fade" style={{width:'100%'}}>
                            <i className="material-icons" style={{fontSize:'32px', display:'inline', position:'relative', top:'5px', color:'white'}}>insert_chart</i>
                            <p className="ml-2" style={{fontSize:'32px', display:'inline'}}><strong>Resume</strong></p>
                        </div>
                        </Link>
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
