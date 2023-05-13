/* 
对于表单：
    1.是受控表单时，useState会导致每次状态变化组件都会Re-render(用防抖来处理)
    2.当是非受控表单时，用useRef来拿表单的value
*/
import { useEffect, useRef } from 'react'

export default function useStateVsuseRef() {
  const nameRef = useRef()

  useEffect(() => {
    console.log('Re-render')
  })

  function handleSubmit(e) {
    e.preventDefault()
    const name = nameRef.current.value
    if (name === '') return

    alert(`Name:${name}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Name</label>
      <br />
      <input type='text' id='name' ref={nameRef} />
      <br />
      <button>Alert Name</button>
    </form>
  )
}
