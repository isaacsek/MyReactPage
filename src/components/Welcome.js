import React, { Component } from "react";
import {connect} from 'react-redux';

class Welcome extends Component {
	render() {
    console.log(this.props.combinedReducer);
		return (
			<div className="center-align">
				<h3>Isaac Sek</h3>
				<img src={process.env.PUBLIC_URL + "/images/pic.jpg"} style = {{maxWidth:'100%', height:'500px'}}></img>
			</div>
		);
	}
}

function mapStateToProps(state) {
  return {
    combinedReducer: state.sample
  };
}

export default connect(mapStateToProps)(Welcome);
