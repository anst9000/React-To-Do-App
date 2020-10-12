import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  render() {
    let { todoList, deleteTodo } = this.props;

    return (
      <div>
        {todoList.length ? (
          todoList.map((todo) => {
            return <Todo todo={todo} key={todo.id} deleteTodo={deleteTodo} />;
          })
        ) : (
          <div className="empty">
            Nothing on the Todo-list. Hello free time.
          </div>
        )}
      </div>
    );
  }
}

export default TodoList;
