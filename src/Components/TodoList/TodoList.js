import Todo from '../Todo/Todo'
import React from 'react'

function TodoList({todos}) {
  return (
    <div>
       {todos.map((todo, index) => {
        return <Todo key={index} todo={todo}/>
       })}
    </div>
  )
}

export default TodoList