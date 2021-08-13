import React from "react";
import EditableTodo from "./EditableTodo";

/** Show list of editable todos.
 *
 * Props:
 * - todos: array of [ todo, ... ]
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * TodoApp -> EditableTodoList -> [ EditableTodo, ... ]
 */

function EditableTodoList({ todos, update, remove }) {
  return (
    <div>
      {todos.map((todo) => (
        <EditableTodo
          todo={todo}
          update={update}
          key={todo.id}
          remove={remove}
        />
      ))}
    </div>
  );
}

export default EditableTodoList;
