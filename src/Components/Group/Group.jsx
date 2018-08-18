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
import PeopleList from './PeopleList/PeopleList.jsx';
import OwesBox from './OwesBox/OwesBox.jsx';
import BillList from './Bill/BillList.jsx';


export default class Group extends React.Component {
		constructor(props){
			super(props);
		}

		render() {
			const {clickedGroup} = this.props;
			return(
				<div>
					<div className ="menu" >
						 <h1>{clickedGroup.nameOfGroup}</h1>
						<Link className ="exitBtn" to="/dashboard"></Link>
					</div>
					<div className="groupDashboard">
						<PeopleList clickedGroup = {clickedGroup}/>
						<OwesBox clickedGroup = {clickedGroup} />
						<BillList clickedGroupBills = {clickedGroup.bills}/>
					</div>
				</div>
			)
		}
	}