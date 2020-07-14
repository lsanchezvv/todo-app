import React from 'react'
import './Todo.css'



function Todo ({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
      className="todo">
      {todo.text}
      <div className="todo-action">
        <span onClick={() => completeTodo(index)} className="todo-icons">
          <i title="Mark as complete" size="2x" class="fas fa-check"></i>
        </span>
        <span onClick={() => removeTodo(index)} className="todo-icons">
          <i title="Mark as complete" size="2x" class="fas fa-times"></i>
        </span>
      </div>
    </div>
  )
}

export default Todo




