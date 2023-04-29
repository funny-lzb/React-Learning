import './simpletodolist.css'
import { useState } from 'react'
import TodoItem from './TodoItem'
/* 
Todo:

*/
export default function SimpleTodoList() {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([])

  // 1.点击按钮，可以把输入框的东西添加到ul下
  function handleClick() {
    if (value === '') return

    setTodos(todos => [
      ...todos,
      { value: value, id: crypto.randomUUID(), completed: false },
    ])
    setValue('')
  }

  // 2.点击Delete，可以删除这个元素
  function handleDelete(todoId) {
    setTodos(currentTodos => currentTodos.filter(todo => todo.id !== todoId))
  }

  function toggleComplete(todoId, completed) {
    setTodos(currentTodos =>
      currentTodos.map(todo => {
        if (todo.id === todoId) return { ...todo, completed }

        return todo
      })
    )
  }

  return (
    <>
      <ul id='list'>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            {...todo}
            toggleComplete={toggleComplete}
            handleDelete={handleDelete}
          />
        ))}
      </ul>

      <div id='new-todo-form'>
        <label htmlFor='todo-input'>New Todo</label>
        <input
          type='text'
          id='todo-input'
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button onClick={handleClick}>Add Todo</button>
      </div>
    </>
  )
}
