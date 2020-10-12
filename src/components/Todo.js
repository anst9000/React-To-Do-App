import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Todo = ({ todo, deleteTodo }) => {
  return (
    <div className="list">
      {todo.title}
      <span>
        <FontAwesomeIcon
          className="faicons"
          icon="trash"
          onClick={() => deleteTodo(todo.id)}
        />
      </span>
    </div>
  );
};

export default Todo;
