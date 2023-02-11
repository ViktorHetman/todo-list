import React from 'react'
import {RiTodoFill, RiDeleteBin2Line, RiTaskFill} from 'react-icons/ri'

import styles from './Todo.module.css'

function Todo({todo, deleteTodo}) {
  return (
    <div className={styles.todo}>
        <RiTodoFill className={styles.todoIcon}/>
        <div className={styles.todoText}>{todo.text}</div>
        <RiDeleteBin2Line className={styles.deleteIcon} onClick={() => deleteTodo(todo.id)}/>
        <RiTaskFill className={styles.checkIcon}/>
    </div>
  )
}

export default Todo