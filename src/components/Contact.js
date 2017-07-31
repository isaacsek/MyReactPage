import React, { Component } from "react";
import {connect} from 'react-redux';

class Contact extends Component {
	render() {
		return (
			<div className="center-align">
				<h3>Contact</h3>
			</div>
		);
	}
}

function mapStateToProps(state) {
  return {
    combinedReducer: state.sample
  };
}

export default connect(mapStateToProps)(Contact);
