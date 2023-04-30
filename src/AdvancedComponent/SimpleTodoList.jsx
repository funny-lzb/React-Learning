import './simpletodolist.css'
import { useState, useRef } from 'react'
import TodoItem from './TodoItem'
/* 
Todo:
  

  3.点击某个Todo的删除按钮，就可以删除这个Todo
*/
export default function SimpleTodoList() {
  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState([])
  const inputRef = useRef()

  // 1.点击按钮，可以拿到表单value的值，并追加到ul下
  // => 通过设一个state拿到表单的value，再设一个数组，对它映射出UI
  function handleClick() {
    if (inputValue === '') return

    setTodos(todos => [
      ...todos,
      { value: inputValue, id: crypto.randomUUID(), completed: false },
    ])

    setInputValue('')
    inputRef.current.focus()
  }

  // 2.点击Todo勾选，可以通过状态让这个Todo变成checked
  // => 通过completed来控制DOM是否checked ,怎么知道是哪一个todo => 通过id
  // => 拿设在这个DOM上的id去数组里找，找到匹配的那个，并把它的completed改成DOM的checked
  function toggleChecked(todoId, isChecked) {
    setTodos(currentTodos =>
      currentTodos.map(todo => {
        if (todo.id === todoId) return { ...todo, completed: isChecked } //对每个对象遍历，返回的应该是这个对象

        return todo
      })
    )
  }

  function deleteTodo(todoId) {
    setTodos(currentTodos => currentTodos.filter(todo => todo.id !== todoId))
  }

  return (
    <>
      <ul id='list'>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            {...todo}
            toggleChecked={toggleChecked}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>

      <div id='new-todo-form'>
        <label htmlFor='todo-input'> New Todo</label>
        <input
          type='text'
          id='todo-input'
          ref={inputRef}
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <button onClick={handleClick}>Add Todo</button>
      </div>
    </>
  )
}
