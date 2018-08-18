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


export default class Home extends React.Component {
		render() {
			return(
				<div className = "mainBox">
					<img src="./images/logo-split-01.png"/>
					<h1>Easy split bills <br/> with your friends</h1>
					<Link className="navigation"  to="/add">Add group</Link>
					<Link className="navigation" to="/dashboard">Choose group</Link>
					<Link className="navigation splitButton" to="/split">Split bill</Link>
				</div>
			)
		}
	}


	

