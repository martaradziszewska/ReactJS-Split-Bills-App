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


export default class Bill extends React.Component {
		render() {
			return(
				<ul className = "bill">
					<li>{this.props.name} TOTAL: {this.props.total}
						<div>
							<p>paid by</p>
							<div className="paidBy">
								<p>{this.props.paidBy}</p>
							</div>
						</div>
					</li>
				</ul>
			)
		}
	}