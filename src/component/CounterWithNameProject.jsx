import { useState } from 'react'

export default function CounterWithNameProject() {
  const [name, setName] = useState('')
  const [age, setAge] = useState(22)

  return (
    <>
      <input value={name} onChange={e => setName(e.target.value)} />

      <br />
      <br />

      {/* 匿名回调函数也可以，不一定非要写有名字的回调函数进去 */}
      <button onClick={() => setAge(currentAge => currentAge - 1)}>-</button>
      <span>{age}</span>
      <button onClick={() => setAge(currentAge => currentAge + 1)}>+</button>

      <br />
      <br />
      <div>
        My name is {name} and I am {age} years old
      </div>
    </>
  )
}
