import React, { Component } from "react";
import TodoContainer from "./subcomponents/TodoContainer";
import AddInput from "./subcomponents/AddInput";
import SearchInput from "./subcomponents/SearchInput";
import uuid from 'uuid/v4';
import { PageWrap, Content, Buttons } from './style'

class Todos extends Component {
  constructor() {
    super()
    this.state = {
      allTodos: [],
      filteredTodos: [],
      query:''
    }

    this.addTodo = this.addTodo.bind(this)
    this.updateFiltered = this.updateFiltered.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
    this.setQuery = this.setQuery.bind(this)
  }

  addTodo(todo) {
    if (todo) {
      this.setState({ allTodos:[...this.state.allTodos, {text:todo, id: uuid()}] }, () => {
        this.updateFiltered()})
    }
  }

  updateFiltered() {
    this.setState({ filteredTodos:this.state.allTodos.filter((el) => el.text.includes(this.state.query)) })
  }

  setQuery(e) {
    this.setState({ query:e.target.value },
      () => {this.updateFiltered()})
  } 

  deleteTodo(id) {
    const arr = this.state.allTodos
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id === id) {
        arr.splice(i,1)
        break;
      }
    }
    this.setState({ allTodos:arr }, () => this.updateFiltered())
  }

  render() {
    return (
        <PageWrap>
          <Content> 
            <TodoContainer delFun={this.deleteTodo} todos={this.state} />
            <Buttons>
              <AddInput addFun={this.addTodo} />
              <SearchInput setQuery={this.setQuery} />
            </Buttons>
          </Content>
        </PageWrap>
    )
  }
}

export default Todos;
