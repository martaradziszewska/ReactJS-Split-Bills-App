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


export default class AddGroupCounter extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				counter: 1,
				array: [0],
				names: [""],
			}
		}
		
		
		handleSpan = e => {
			let tempArr = this.state.array;
			if(e.currentTarget.innerText === "+") {
				this.setState({
					counter: this.state.counter + 1,
				}, () => { 
					tempArr = Array.from({length: this.state.counter}, (v, k) => k); this.setState({
						array: tempArr
					})
				})
			} if (e.currentTarget.innerText === "-" && this.state.counter !== 1 ){
				this.setState({
					counter: this.state.counter - 1,
				}, () => {
					tempArr = Array.from({length: this.state.counter}, (v, k) => k); this.setState({
						array: tempArr
					})
				})
			}
		}
		
		updateMembersNames = (e, indx) => {
			let updatedNames = [...this.state.names];
			updatedNames[indx] = e.target.value;
			this.setState({
				names: updatedNames,			
			}, () => this.props.updateMembersNames(this.state.names)
			);

		}
		
		render() {
			return(
				<div>
					<div className="counter"><span onClick={e=>this.handleSpan(e)}>-</span>{this.state.counter}<span onClick={e=>this.handleSpan(e)}>+</span></div>
					{this.state.array.map(indx => (
						<div key={indx} className = "listOfMembers">
							<input id="names" type="text" placeholder="Name..." onChange={e=>this.updateMembersNames(e, indx)}/>					
						</div>
					))}
				</div>
			)
		}
	}
	