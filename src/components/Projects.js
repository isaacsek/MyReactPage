import React, { Component } from "react";
import {connect} from 'react-redux';

class Projects extends Component {
	render() {
		return (
			<div style={{height:'100vh', textAlign:'center'}}>
				<div className="verticalContent" style={{display:"inline-block", textAlign:'left'}}>
					<h1>Projects</h1>
					<div className="ml-2" style={{marginLeft:'30px'}}>
						<div className="">
							<a href="https://github.com/isek27">
	                            <i className="fa fa-github ml-2" aria-hidden="true" title="MyGitHub" style={{color:"black", fontSize:'64px', display:'inline-block'}}></i>
								<p className="ml-2" style={{fontSize:'48px', display:'inline'}}>Github.com/isek27</p>
	                        </a>
                        </div>
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

export default connect(mapStateToProps)(Projects);
