import React, {useState} from 'react'

function TodoForm({addTodo}) {

    const [text, setText] = useState('')

    const onSubmitHandler = (event) => {
        event.preventDefault()
        addTodo(text)
        setText('')
    }

  return (
    <div>
        <form onSubmit={onSubmitHandler}>
            <input type="text" placeholder="Add new todo" value={text} onChange={(e) => setText(e.target.value)}></input>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default TodoForm