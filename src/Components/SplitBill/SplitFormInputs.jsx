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


	
export default class SplitFormInputs extends React.Component {
		constructor(props){
			super(props);
			this.state = {
				nameBill: "",
				total: "",
			}
		}
		handleFormInputs = e => {
			this.setState({
				[e.target.name]: e.target.type === "number" ? Math.round(e.target.value*100)/100 : e.target.value,
			}, () => {
				this.props.onHandleFormInputs(this.state.nameBill, this.state.total);
			})
		}
		
		render() {
			const checkedOption = this.props.checkedOption === "Create a group";
			return(
				<div>
					{checkedOption && <input placeholder="Name of group"></input>}
					<input name="nameBill" value={this.state.nameBill} placeholder="Name of the bill" onChange={e=>this.handleFormInputs(e)}/>

					<input type="number" step="0.01"  min="0" name="total" value={this.state.total} required placeholder="Total sum" onChange={e=>this.handleFormInputs(e)}/>
				</div>
			)
		}
	}