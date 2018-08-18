import React from 'react';
import ReactDOM from 'react-dom';
import "../../../../sass/style.scss";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

export default class PeopleList extends React.Component {
		render() {
			const {clickedGroup} = this.props;
			return(
				<div className="people">
					<ul>{clickedGroup.people.map((name, indx) => <li key={indx}>{name.slice(0,2)}</li>)}</ul>
				</div>
			)
		}
	}