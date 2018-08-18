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


export default class OwesBox extends React.Component {
		constructor(props){
			super(props);
			const {clickedGroup} = this.props;
			this.state = {
				lenders: [],
				owners: [],
				totalAmount: 0,
				average: 0,
			}
		}
		
		updatingBalanceDebts = () => {
			let bills = this.props.clickedGroup.bills;
			let tempObject = {};
				bills.forEach(elem => {
  					elem.debts.forEach(el => {
    				let nameKey = el.name.replace(" ", "");
						if (!tempObject.hasOwnProperty(el.name)) {
							tempObject[nameKey] = {};
      						tempObject[nameKey].name = el.name;
							tempObject[nameKey].debt = el.debt;

    					} else {
      					tempObject[nameKey].debt += el.debt;
    					}
  					});
				});
			console.log(tempObject);
			let owners = [];
			let lenders = [];
			
			for(let elem in tempObject){
				console.log(elem);
				console.log(tempObject[elem])
				console.log(this.state.average);
				let newDebt = tempObject[elem].debt - this.state.average;
				tempObject[elem].debt = newDebt;
				tempObject[elem].debt < 0 && owners.push({name: tempObject[elem].name, debt: Math.round(tempObject[elem].debt * 100) / 100});
				tempObject[elem].debt > 0 && lenders.push({name: tempObject[elem].name, debt: Math.round(tempObject[elem].debt * 100) / 100});
				}
			
			this.setState({
				owners: owners,
				lenders: lenders,
			})
			
			console.log(owners, lenders)
			
			
		}
		summaryOfBills = () => {
			console.log(this.props.clickedGroup.bills);
			if(this.props.clickedGroup.bills.length !== 0){
					let bills = this.props.clickedGroup.bills;
			
				let totalAmount;
				if(bills.length === 1){
					totalAmount = bills[0].total;
				} else{
					totalAmount = bills.reduce((a,b) => {
					return (a + b.total);
				}, 0)
				}
				let average = totalAmount / parseFloat(this.props.clickedGroup.people.length);
	
				this.setState({
				average: parseFloat(average),
				totalAmount: parseFloat(totalAmount),
				}, () => {
				this.updatingBalanceDebts();
				})
				console.log(average, totalAmount)
			
			}
		}
		componentDidMount() {
			this.props.clickedGroup.bills.length > 0 && this.summaryOfBills(); 
		}
		
		render() {
			const {group} = this.props;

			return(
				<div className="owesBox">
					<h2>who owes who</h2>
					<div className="balanceBox">
						<ul className="owners">
							{this.state.owners.map((elem, index) => <li key={index}>{elem.name}<span>{elem.debt}</span></li>)}
						</ul>
							
						<ul className="lenders">
							{this.state.lenders.map((elem, index) => <li key={index}>{elem.name}<span>{elem.debt}</span></li>)}
						</ul>
					</div>
				</div>
			)
		}
	}