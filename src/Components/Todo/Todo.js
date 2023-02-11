import React from 'react'
import {RiTodoFill} from 'react-icons/ri'
import styles from './Todo.module.css'

function Todo({todo}) {
  return (
    <div className={styles.todo}>
        <RiTodoFill className={styles.todoIcon}/>
        <div className={styles.todoText}>{todo}</div>
    </div>
  )
}

export default Todo