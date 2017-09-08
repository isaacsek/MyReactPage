import React, { Component } from "react";
import { connect } from "react-redux";

class Welcome extends Component {
	render() {
		//console.log(this.props.combinedReducer);
		return (
			<div style={{height:'100vh', textAlign:'center'}}>
				<div className="verticalContent" style={{display:"inline-block", textAlign:'left'}}>
					<h1>Isaac Sek</h1>
					<div className="ml-2" style={{marginLeft:'30px'}}>
						<div className="">
                            <i className="material-icons" style={{fontSize:'32px', display:'inline', position:'relative', top:'5px', color:'black'}}>call</i>
                            <p className="ml-2" style={{fontSize:'32px', display:'inline'}}>(360)213-8953</p>
                        </div>
						<div className="">
                            <i className="material-icons" style={{fontSize:'32px', display:'inline', position:'relative', top:'5px', color:'black'}}>email</i>
                            <p className="ml-2" style={{fontSize:'32px', display:'inline'}}>Isaacsek@uw.edu</p>
                        </div>
						<div className="">
                            <i className="material-icons" style={{fontSize:'32px', display:'inline', position:'relative', top:'5px', color:'black'}}>add_location</i>
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

export default connect(mapStateToProps)(Welcome);
