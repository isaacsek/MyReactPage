import React, { Component } from "react";
import { connect } from "react-redux";

class Welcome extends Component {
	render() {
		//console.log(this.props.combinedReducer);
		return (
			<div style={{height:'100vh', textAlign:'center', color:'white'}}>
				<div className="verticalContent" style={{display:"inline-block"}}>
					<h1>Isaac Sek</h1>
					<h4>Software Development Engineer</h4>
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

export default connect(mapStateToProps)(Welcome);
