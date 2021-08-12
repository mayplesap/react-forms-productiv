import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import TodoForm from "./TodoForm";

import TopTodo from "./TopTodo";
import EditableTodoList from "./EditableTodoList";
import Todo from "./Todo";

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp({initialTodos}) {
  const [todos, setTodos] = useState([...initialTodos]);
  /** add a new todo to list */
  function create(newTodo) {
    newTodo.id = uuid();
    setTodos(todos => ([
      ...todos,
      newTodo
    ]));
  }

  /** update a todo with updatedTodo */
  function update(updatedTodo) {
    setTodos(todos => (todos.map(todo => {
      if(todo.id === updatedTodo.id) {
        return updatedTodo;
      } else {
        return todo;
      }
    })));
  }


  /** delete a todo by id */
  function remove(id) {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }

  /**TODO: handleSave: will update or create todo */
  function handleSave(todo){
    if(todo.id) {
      update(todo);
    } else {
      create(todo);
    }
  }

  console.log("APP TODOS", todos)
  return (
    <main className="TodoApp">
      <div className="row">
        <div className="col-md-6">
          <EditableTodoList todos={todos} update={update} remove={remove}/> OR
          <span className="text-muted">You have no todos.</span>
        </div>

        <div className="col-md-6">
          (if no top todo, omit this whole section)
          <section className="mb-4">
            <h3>Top Todo</h3>
            <TopTodo todos={todos}/>
          </section>
          <section>
            <h3 className="mb-3">Add Nü</h3>
            <TodoForm handleSave={handleSave}/>
          </section>
        </div>
      </div>
    </main>
  );
}

export default TodoApp;
