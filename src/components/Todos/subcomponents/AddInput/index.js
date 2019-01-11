import React, { Component } from "react";
import { Button } from '../style';

class AddInput extends Component {
    constructor() {
        super()
        this.state = {
            value: ''
        }
        this.updateText = this.updateText.bind(this)
    }
    
    updateText(e) {
        this.setState({ value:e.target.value })
    }

    render() {
    return (
        <React.Fragment>
            <input type='text' onChange={this.updateText} placeholder='New Todo'></input>
            <Button onClick={() => {this.props.addFun(this.state.value)}}>Add</Button><br/>
        </React.Fragment>
    );
  }
}

export default AddInput;