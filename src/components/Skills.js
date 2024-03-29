import React, { Component } from "react";
import {connect} from 'react-redux';
import { Link } from "react-router-dom";

class Skills extends Component {
	render() {
		return (
			<div style={{height:'100vh', textAlign:'center'}}>
				<div className="verticalContent" style={{display:"inline-block"}}>
					<a href={process.env.PUBLIC_URL + "/images/IsaacSekResume.pdf"}>
					<p className="ml-2" style={{fontSize:'16px', display:'inline', color:'#FDD835', textDecoration:'underline'}}><h1>Isaac Sek Resume</h1></p></a>
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

export default connect(mapStateToProps)(Skills);
