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


export default class SplitPeople extends React.Component {
	constructor(props) {
		super(props);
		this.state ={
			selectedRadio: "",
			debts: this.props.debts,
			paidBy: "",
			
		}
	}

	handleRadioBtn = e => {
		this.setState({
			selectedRadio: e.target.value,
		}, () => {
			if(this.state.selectedRadio === 'equally'){
				this.handlePaidBy = e => {
					this.setState ({
					paidBy: e.target.value,
				}
			, () => {	
				let debts = this.state.debts;
				console.log(debts);
				for(let i=0; i<debts.length; i++) {
					if(debts[i].name === this.state.paidBy){
						debts[i].debt = this.props.total
					}else {
						debts[i].debt = 0;
					}
				}
				this.setState({
					debts: debts,
					paidBy: this.state.paidBy,
				}, () => this.props.updateNewDebts(this.state.debts, this.state.paidBy) )		
			})}
			} else if (this.state.selectedRadio === 'unequally'){
				this.handleDebts = (e,indx) => {
					let thisContribution = e.target.dataset.indx;
					let newDebts = [...this.state.debts];
					newDebts[thisContribution].debt = Math.round(e.target.value*100)/100
					this.setState({
						debts: newDebts,
						paidBy: "Shared",
					}, () => this.props.updateNewDebts(this.state.debts, this.state.paidBy))
				}
//				this.setState ({
//					paidBy: "Shared"
//				})	
		}
//		this.props.updateNewDebts(this.state.debts, this.state.paidBy);
//			console.log(this.state.debts, this.state.paidBy);
	}
	
 )}
	
	componentWillReceiveProps(nextProps){
		this.setState({
			debts: nextProps.debts,
		})
	}
	
	render() {

		return(
			<div className = "splitBox">
			<p>How do you want to split?</p>
				<div className="splitInputs">
					
					<input id="equally" type="radio" value="equally" onChange={e=>{this.handleRadioBtn(e)}} checked={this.state.selectedRadio === 'equally'} />
					<label htmlFor="equally">Equally</label>
					<input id="unequally" type="radio" value="unequally" onChange={e=>{this.handleRadioBtn(e)}} checked={this.state.selectedRadio==='unequally'} />
					<label htmlFor="unequally">Unequally</label>
				</div>
				<p>Paid by:</p>
				{this.state.selectedRadio === "equally" && <select value={this.state.paidBy} onChange={e=>this.handlePaidBy(e)}>{this.props.checkedGroup.people.map((name, indx)=><option key={indx} value={name}>{name}</option>)}</select>}
				<ul className = "unequallyInputs">{this.props.checkedGroup.people.map((name, indx)=>
						<li key={indx}>{name}{this.state.selectedRadio === "unequally" && <input type="number" value={this.state.debts.debt} data-indx = {indx} onChange={e=>this.handleDebts(e, indx)}></input>}</li>)}
				</ul>
			</div>
		)
	}
}