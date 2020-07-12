import React from 'react'
import { Button } from '@material-ui/core'

function Todo ({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
      className="todo">
      {todo.text}
      <div>
        <Button color="primary" variant="outlined" onClick={() => completeTodo(index)}>Complete</Button>
        <Button color="primary" variant="outlined" onClick={() => removeTodo(index)}>x</Button>
      </div>
    </div>
  )
}

export default Todo




