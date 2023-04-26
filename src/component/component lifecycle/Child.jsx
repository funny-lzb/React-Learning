import { useState, useEffect } from 'react'

export function Child() {
  const [age, setAge] = useState(0)
  const [name, setName] = useState('')

  //   useEffect(() => {
  //     console.log('Re-Render')
  //   }) // 1.

  //   useEffect(() => {
  //     console.log('Hi')

  //     return () => console.log('Bye')
  //   }, []) // 2.

  useEffect(() => {
    const text = `My name is ${name} `
    const timeout = setTimeout(() => console.log(text), 1000)

    return () => clearTimeout(timeout)
  }, [name, age]) // 3.

  //   useEffect(() => {
  //     document.title = name
  //   }, [name]) // 4.

  return (
    <div>
      <input type='text' value={name} onChange={e => setName(e.target.value)} />
      <br />
      <br />
      <button onClick={() => setAge(a => a - 1)}>-</button>
      {age}
      <button onClick={() => setAge(a => a + 1)}>+</button>
      <br />
      <br />
      My name is {name} and I am {age} years old.
    </div>
  )
}
