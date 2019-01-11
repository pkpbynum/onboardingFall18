import React from "react";
import Task from './subcomponents/Task';
import { Title, List, OList } from './style'

const TodoContainer = props => (
    <List>
      <Title>Todos:</Title>
      { props.todos.allTodos.length ? (!props.todos.filteredTodos.length && <p>no results found</p>) : <p>no todos to complete</p> }
      <OList>
      { props.todos.filteredTodos.map((el, ind) => <Task delFun={props.delFun} key={ind} id={el.id} text={el.text} />) }
      </OList>
    </List>
)

export default TodoContainer;
