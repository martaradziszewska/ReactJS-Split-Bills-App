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
import GroupList from './GroupList.jsx';

	
export default class Groups extends React.Component {		
		onHandleClickedGroup = (clickedGroup, clickedIndx) => {
			this.props.onHandleClickedGroup(clickedGroup, clickedIndx)
		}

		render() {
			return(
				<div>
					<div className="menu">
						<h1>All groups</h1>
					</div>
					<GroupList arrayOfGroups = {this.props.arrayOfGroups} onHandleClickedGroup = {this.onHandleClickedGroup}/>
				</div>
			)
		}
	}