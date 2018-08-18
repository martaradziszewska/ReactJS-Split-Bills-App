import React from 'react';
import ReactDOM from 'react-dom';
import "../../sass/style.scss";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';
import Groups from './Group/Groups.jsx';
import Group from './Group/Group.jsx';


export default class Dashboard extends React.Component {
		constructor(props){
			super(props);
			this.state = {
				clickedGroup: "",
				clickedIndx: 0,	
			}
		}
		onHandleClickedGroup = (clickedGroup, clickedIndx) => {
			this.setState({
				clickedGroup: clickedGroup,
				clickedIndx: clickedIndx,
			})		
		}
		render() {
			let url = this.props.match.url;
			return(
				<div>
					<Route exact path={url} render ={(props) => <Groups {...props} arrayOfGroups = {this.props.arrayOfGroups} onHandleClickedGroup = {this.onHandleClickedGroup}/>}></Route>
					<Route path={`${url}/:${this.state.clickedIndx}`} render ={(props) => <Group {...props} clickedGroup = {this.state.clickedGroup} clickedIndx = {this.state.clickedIndx}/>}></Route>
					<div className="footer">
						<Link className="addBillBtn" to="/split"></Link>
					</div>
					
				</div>
			)
		}
	}