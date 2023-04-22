import { useState } from 'react'

export default function UseState() {
  const [age, setAge] = useState(20)
  // const [name, setName] = useState('lzb')

  function increase() {
    setAge(preAge => preAge + 1)
    setAge(preAge => preAge + 1)
  }

  return (
    <>
      <span>{age}</span>
      <button onClick={increase}>+</button>
      <input value={age} onChange={e => setAge(e.target.value)} />
    </>
  )
}
