import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodoForm from './Components/TodoForm/TodoForm'
import TodoList from './Components/TodoList/TodoList'
import TodoActions from './Components/TodoActions/TodoActions'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      isComplited: false,
      id: uuidv4()
    }
    setTodos([...todos, newTodo])
  }


  
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} />
    </div>
  )
}

export default App
