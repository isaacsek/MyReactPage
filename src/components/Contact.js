import React, { Component } from "react";
import {connect} from 'react-redux';
import { Link } from "react-router-dom";

class Contact extends Component {
	render() {
		return (
			<div style={{height:'100vh', textAlign:'center'}}>
				<div className="verticalContent" style={{display:"inline-block", textAlign:'left', color:'white'}}>
					<h1>Isaac Sek</h1>
					<div className="" style={{}}>
						<div className="">
                            <i className="material-icons" style={{fontSize:'32px', display:'inline', position:'relative', top:'5px', color:'white'}}>call</i>
                            <p className="ml-2" style={{fontSize:'32px', display:'inline'}}>(360)213-8953</p>
                        </div>
						<div className="">
                            <i className="material-icons" style={{fontSize:'32px', display:'inline', position:'relative', top:'5px', color:'white'}}>email</i>
                            <p className="ml-2" style={{fontSize:'32px', display:'inline'}}>Isaacsek@uw.edu</p>
                        </div>
						<div className="">
                            <i className="material-icons" style={{fontSize:'32px', display:'inline', position:'relative', top:'5px', color:'white'}}>add_location</i>
                            <p className="ml-2" style={{fontSize:'32px', display:'inline'}}>Seattle, WA</p>
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

export default connect(mapStateToProps)(Contact);
