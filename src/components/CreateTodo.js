import React, { Component } from "react";

class CreateTodo extends Component {
  state = {
    title: "",
  };

  handleChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  addTodo = (e) => {
    e.preventDefault();

    this.props.addTodo(this.state);
    this.setState({
      title: "",
    });
  };

  render() {
    return (
      <header>
        <form id="to-do-form" onSubmit={this.addTodo}>
          <input
            type="text"
            placeholder="Have to do..."
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input type="submit" value="Add" />
        </form>
      </header>
    );
  }
}

export default CreateTodo;
