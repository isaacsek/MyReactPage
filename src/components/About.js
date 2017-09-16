import React, { Component } from "react";
import {connect} from 'react-redux';
import { Link } from "react-router-dom";

class About extends Component {
	render() {
		return (
			<div style={{height:'100vh', textAlign:'center', color:'white'}}>
				<div className="verticalContent" style={{display:"inline-block"}}>
					<h1 className="center-align">About Me</h1>
					<div className="" style={{fontSize:'18px', textAlign:'left'}}>
						<div>A software engineer intern at <a href="https://www.eagleview.com/" style={{color:'#FDD835', textDecoration:'underline'}}>EagleView Technologies</a> seeking to obtain a professional position in the industry</div>
						<div>utilizing my relevant experience, technical expertise, and problem solving skills. A personable, communicative</div>
						<div>team player who specializes in object-oriented programming languages and front-end development. A 2018 Applied</div>
						<div>Computing graduate of the University of Washington. </div>
					</div>
					<div className="ml-2" style={{marginTop:"60px"}}><Link to="/contact" className="waves-effect wave-yellow btn-large ">Hire me!</Link></div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
  return {
    combinedReducer: state.sample
  };
}

export default connect(mapStateToProps)(About);
