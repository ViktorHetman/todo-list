import React from 'react'
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import Button from '../Button/Button'

function TodoActions({resetTodos, deleteCompletedTodos}) {
  return (
    <>
        <Button onClick={resetTodos}><RiRefreshLine /></Button>
        <Button onClick={deleteCompletedTodos}><RiDeleteBin2Line /></Button>
    </> 
  )
}

export default TodoActions