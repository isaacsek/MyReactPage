import React, { Component } from "react";
import {connect} from 'react-redux';

class Projects extends Component {
	render() {
		return (
			<div style={{height:'100vh', textAlign:'center'}}>
				<div className="verticalContent" style={{display:"inline-block", color:'white'}}>
					<h1>Projects</h1>
					<a href="https://github.com/isek27">
                        <i className="fa fa-github ml-2" aria-hidden="true" title="MyGitHub" style={{color:"#FDD835", fontSize:'64px', display:'inline-block'}}></i>
						<p className="ml-2" style={{fontSize:'48px', display:'inline', color:'#FDD835', textDecoration:'underline'}}>Github.com/isek27</p>
                    </a>
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

export default connect(mapStateToProps)(Projects);
