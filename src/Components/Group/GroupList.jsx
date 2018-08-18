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





export default class GroupList extends React.Component {
		
		handleClickedGroup = (e, indx, group) => {
		e.preventDefault();
		this.props.onHandleClickedGroup(group, indx);
		}
		render() {
			return(
					<ul className="listOfGroups">
						<li>Amsterdam Trip
							<i className="far fa-trash-alt"></i>
						</li>
						{this.props.arrayOfGroups.map((group, indx) => 
						<li key={group.nameOfGroup} onClick={e=>this.handleClickedGroup(e,indx, group)}>
							<Link className = "linkStyle" to={`dashboard/${indx}`}>{group.nameOfGroup}</Link>
							<i className="far fa-trash-alt"></i>
						</li>
					)}
						<Link className="addGroupBtn" to="/add"></Link>
					</ul>
			)
		}
	}
	