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


export default class SplitOptions extends React.Component {
		constructor(props){
			super(props);
			this.state = {
				chosedOption: "Add to group",
				checkedGroup: "",
				
			}
		}
		handleChange = e => {
			this.setState({
				chosedOption: e.target.value,
			}, () => {
				this.props.arrayOfGroups.filter(group => {
					if(group.nameOfGroup === this.state.chosedOption) {
						this.setState({
							checkedGroup: group,
						}, () => {
							this.props.checkOption(this.state.checkedGroup);	
						})
					}
				})	
			}			  
			)
		}
		
		isEmpty = () => {
			if(this.props.arrayOfGroups.length !== 0){
				return true;
		}
		}

		render() {
			return(
				<select className ="options" value={this.state.chosedOption} onChange={e=>this.handleChange(e)}>
					<option value="Add to group" disabled> Add to group...</option>
					{this.isEmpty() &&
						this.props.arrayOfGroups.map((group, indx)=><option key={indx} value={group.nameOfGroup}>{group.nameOfGroup}</option>)
						}
				</select>
			)
		}
	}