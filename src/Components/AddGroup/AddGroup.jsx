import React from 'react';
import ReactDOM from 'react-dom';
import "../../../sass/style.scss";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';
import AddGroupCounter from './AddGroupCounter.jsx'

export default class AddGroup extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				names: [""],
				nameOfGroup: "",
			}
		}
		updateGroupName = e => {
			this.setState({
				nameOfGroup: e.target.value
			})
		}
		
		updateGroupInfo = (e) => {
			e.stopPropagation();
			this.props.onUpdateGroupInfo(this.state.nameOfGroup, this.state.names);		
		}
		updateMembersNames = (names) => {
			this.setState({
				names: names,
			})
		}	
		render() {
			return(
				<div className="addGroup">
					<div className ="menu">
						<h1>Add group</h1>
						<Link className ="exitBtn" to="/dashboard"></Link>
					</div>
					<div className="addGroupBox">
						<form>
							<input id="nameOfGroup" type="text" placeholder="Name of the group" value={this.state.nameOfGroup} onChange={e=>this.updateGroupName(e)}/>
							<AddGroupCounter updateMembersNames={this.updateMembersNames}/>
							<Link className="addGroupBtn" to="/dashboard" onClick={e=>this.updateGroupInfo(e)}></Link>
			
						</form>
						
					</div>
				</div>)
		}
	}