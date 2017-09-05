import React, { Component } from "react";
import { connect } from "react-redux";

class Welcome extends Component {
	render() {
		//console.log(this.props.combinedReducer);
		return (
			<div style={{height:'100vh', textAlign:'center'}}>
				<div className="verticalContent" style={{display:"inline-block", textAlign:'left'}}>
					<h1>Isaac Sek</h1>
					<div className="ml-2">
						<h5>(360)213-8953</h5>
						<h5>Isaacsek@uw.edu</h5>
						<h5>Seattle, WA</h5>
					</div>
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
