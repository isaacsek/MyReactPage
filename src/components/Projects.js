import React, { Component } from "react";
import {connect} from 'react-redux';

class Projects extends Component {
	render() {
		return (
			<div style={{height:'100vh', textAlign:'center'}}>
				<div className="verticalContent" style={{display:"inline-block", color:'white'}}>

					<div style={{textAlign:'left'}}>
						<h1>Projects</h1>
						<div>
							<a href="https://github.com/isek27">
		                        <i className="fa fa-github ml-2" aria-hidden="true" title="MyGitHub" style={{color:"#FDD835", fontSize:'64px', display:'inline-block'}}></i>
								<p className="ml-2" style={{fontSize:'32px', display:'inline', color:"#FDD835", textDecoration:'underline'}}><strong>Github.com/isek27</strong></p>
		                    </a>
						</div>
						<div style={{marginLeft:'25px'}}><div>
							<a href="http://localization-client.herokuapp.com/">
		                        <i className="fa fa-deaf ml-2" aria-hidden="true" title="iLocalize" style={{color:"#FDD835", fontSize:'64px', display:'inline-block'}}></i>
								<p className="ml-2" style={{fontSize:'32px', display:'inline', color:'#FDD835', textDecoration:'underline'}}>iLocalize</p>
	            			</a>
						</div>
						<div>
							<a href="https://github.com/isek27/MyReactionTester">
		                        <i className="fa fa-clock-o ml-2" aria-hidden="true" title="ReactionTester" style={{color:"#FDD835", fontSize:'64px', display:'inline-block'}}></i>
								<p className="ml-2" style={{fontSize:'32px', display:'inline', color:'#FDD835', textDecoration:'underline'}}>Reaction Tester</p>
	            			</a>
						</div>
						<div>
							<a href="https://github.com/isek27/MyReactPage">
		                        <i className="fa fa-user-circle ml-2" aria-hidden="true" title="Portfolio" style={{color:"#FDD835", fontSize:'64px', display:'inline-block'}}></i>
								<p className="ml-2" style={{fontSize:'32px', display:'inline', color:'#FDD835', textDecoration:'underline'}}>Portfolio Page</p>
	            			</a>
						</div>
						<div>
							<a href="https://drive.google.com/open?id=0B43Gn7Srj9obQTIxbUtrc3ZOYk0">
		                        <i className="fa fa-code ml-2" aria-hidden="true" title="CefOgreOSR" style={{color:"#FDD835", fontSize:'64px', display:'inline-block'}}></i>
								<p className="ml-2" style={{fontSize:'32px', display:'inline', color:'#FDD835', textDecoration:'underline'}}>CefOgreOSR Example</p>
	            			</a>
						</div></div>
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
