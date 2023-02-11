import React from 'react'
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import Button from '../Button/Button'
import styles from './TodoActions.module.css'

function TodoActions({ resetTodos, deleteCompletedTodos }) {
  return (
    <div className={styles.todosActionContainer}>
      <Button onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button onClick={deleteCompletedTodos}>
        <RiDeleteBin2Line />
      </Button>
    </div>
  )
}

export default TodoActions
