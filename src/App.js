import React, {useState} from 'react';
import TodoForm from './Components/TodoForm/TodoForm';
import TodoList from './Components/TodoList/TodoList';
import TodoActions from './Components/TodoActions/TodoActions';
import './App.css';

function App() {

  const [todos, setTodos] = useState([])

  const addTodoHandler = (text) => {
    setTodos([...todos, text])
  } 

  return (
    <div className="App">
     <h1>Todo App</h1>
     <TodoForm addTodo={addTodoHandler}/>
     <TodoList todos={todos}/>
    </div>
  );
}

export default App;
