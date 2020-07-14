import React, { useState } from 'react'
import './App.css'
import Todo from './components/Todo/index'
import TodoForm from './components/TodoForm/index'

function App () {
  const [todos, setTodos] = useState([
    {
      text: 'Learn about react',
      isCompleted: false
    },
    {
      text: 'To meet friend for lunch',
      isCompleted: false
    },
    {
      text: 'Groceries list',
      isCompleted: false
    }
  ])

  const completeTodo = index => {
    const newTodos = [...todos]
    const isCompleted = newTodos[index].isCompleted
    newTodos[index].isCompleted = !isCompleted
    setTodos(newTodos)
  }

  const addTodo = text => {
    const newTodos = [...todos, { text }]
    setTodos(newTodos)
  }

  const removeTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <div className="app">
      <h1 className="app-header">Todo list app</h1>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}

export default App
