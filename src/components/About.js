import React, { Component } from "react";
import {connect} from 'react-redux';

class About extends Component {
	render() {
		return (
			<div style={{height:'100vh', textAlign:'center'}}>
				<div className="verticalContent" style={{display:"inline-block", textAlign:'left'}}>
					<h1 className="center-align">About</h1>
					<div className="ml-2" style={{fontSize:'18px', marginLeft:'50px'}}>
						<div>A software engineer intern at <a href="https://www.eagleview.com/">EagleView Technologies</a> seeking to obtain a professional position in the industry</div>
						<div>utilizing my relevant experience, technical expertise, and problem solving skills. A personable, communicative</div>
						<div>team player who specializes in object-oriented programming languages and front-end development. A 2018 Applied</div>
						<div>Computing graduate of the University of Washington. <a href={process.env.PUBLIC_URL + "/images/IsaacSekResume.pdf"}>Hire me!</a></div>
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

export default connect(mapStateToProps)(About);
