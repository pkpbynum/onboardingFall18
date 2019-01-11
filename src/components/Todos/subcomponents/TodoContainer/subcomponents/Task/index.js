import React, { Component } from "react";
import { Item } from './style';
import { Button } from '../../../style';

class Task extends Component {

  render() {
    return (
      <Item>
        { this.props.text }
        <Button onClick={ () => this.props.delFun(this.props.id) }>Del</Button>
      </Item>
    );
  }
}

export default Task;