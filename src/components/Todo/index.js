import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import './Todo.css'



function Todo ({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
      className="todo">
      {todo.text}
      <div className="todo-action">
        <FontAwesomeIcon title="Mark as complete" size="2x" onClick={() => completeTodo(index)} icon={faCheck}></FontAwesomeIcon>
        <FontAwesomeIcon title="Remove todo" size="2x" onClick={() => removeTodo(index)} icon={faTimes}></FontAwesomeIcon>
      </div>
    </div>
  )
}

export default Todo




