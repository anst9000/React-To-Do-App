import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

library.add(faTrash);

class App extends Component {
  state = {
    todoList: [
      {
        title: "Wash the rabbit",
        isDone: false,
        id: uuid(),
      },
      {
        title: "Go shopping",
        isDone: true,
        id: uuid(),
      },
    ],
  };

  addTodo = ({ title }) => {
    let newTodo = {
      title: title,
      isDone: false,
      id: uuid(),
    };
    let todoList = [...this.state.todoList, newTodo];

    this.setState({
      todoList: todoList,
    });
  };

  deleteTodo = (id) => {
    console.log("the id is", id);
    let todoList = this.state.todoList.filter((todo) => {
      return todo.id !== id;
    });

    this.setState({
      todoList: todoList,
    });
  };

  render() {
    return (
      <div className="app">
        <CreateTodo addTodo={this.addTodo} />
        <TodoList todoList={this.state.todoList} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
