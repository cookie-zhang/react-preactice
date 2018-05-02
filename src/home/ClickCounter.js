import React, { Component } from 'react';
class ClickCounter extends Component{
	constructor(props){
		super(props);
		this.onClickButton = this.onClickButton.bind(this);
		this.state = {count:0};
	}
	render(){
		const counterStyle = {
			color: "red"
		}
		return(
			<div style={counterStyle}>
				<button onClick={this.onClickButton}>Click me</button>
				<div>
					Click Count : {this.state.count}
				</div>
			</div>
		)
	}
	onClickButton(){
		this.setState({count: this.state.count + 1})
	}
}

export default ClickCounter;