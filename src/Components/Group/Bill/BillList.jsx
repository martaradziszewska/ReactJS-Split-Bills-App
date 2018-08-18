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
import Bill from './Bill.jsx'

export default class BillList extends React.Component {
		render() {
			const {clickedGroupBills} = this.props;
			return(
				<div className = "billList">
					<h2>All bills</h2>
					{clickedGroupBills.map((bill, indx) => <Bill key={indx} name={bill.name} total={bill.total} paidBy={bill.paidBy} /> )}
	
				</div>
			)
		}
	}