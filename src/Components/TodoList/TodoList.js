import React from 'react'
import Todo from '../Todo/Todo'
import styles from './TodoList.module.css'

function TodoList({ todos, deleteTodo }) {
  return (
    <div className={styles.todoListContainer}>
        {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo}/>
      })}
    </div>
  )
}

export default TodoList
