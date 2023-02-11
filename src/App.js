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

  const deleteTodoHandler = (id) => {
    return setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleTodoHandler = (id) => {
    setTodos(todos.map((todo) => {
      return todo.id === id
      ? {...todo, isComplited: !todo.isComplited}
      : {...todo}
    }))
  }

  const resetTodosHandler = () => {
    setTodos([])
  }
  
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoActions resetTodos={resetTodosHandler}/>
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} toggleTodo={toggleTodoHandler}/>
    </div>
  )
}

export default App
