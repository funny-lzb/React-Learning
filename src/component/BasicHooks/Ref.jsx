/* 
useRef:
    1.ref和state一样，可以在渲染之间持续存在，但区别在于：
    state的改变会导致组件Re-render
    但ref的改变，并不会导致组件重新渲染

    作用：ref可以用来存储数据，即使数据改变时，并不会重新渲染

    2.引用DOM节点
*/
import { useRef, useEffect, useState } from 'react'

export default function Ref() {
  const rerenderCount = useRef(0)
  const [state, setState] = useState(0)

  useEffect(() => {
    console.log('Re-render')
  })

  function handleState() {
    setState(preState => preState + 1)
  }

  function handleRef() {
    rerenderCount.current = rerenderCount.current + 1
    console.log(rerenderCount)
  }

  return (
    <>
      <button onClick={handleState}>Change State</button>
      <div>State: {state}</div>

      <br />
      <br />
      <button onClick={handleRef}>Change Ref</button>
      <div>Ref: {rerenderCount.current}</div>
    </>
  )
}
