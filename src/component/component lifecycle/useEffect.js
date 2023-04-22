/* 
PS:回调函数不一定是异步的，你把它作为参数传给异步API，那它就是异步的；同理，你传给同步API，就是同步的

1.不管你是什么useEffect，组件挂载的时候都会触发一次

2. useEffect(() => console.log('name or age change'), [name,age])
    第二个参数age/name变量，改变时，触发回调

3.下面代码中当age变量发生改变时，useEffect回调也会触发，为什么？
    因为每次age改变时，组件Child就会重新渲染，即Child函数就会reRun一遍，都会有个新的person产生，
    对于引用类型的值，只有define和redefine时才会改变
    在React中，这是define了，所以值不一样

*/
import { useState, useEffect } from ' react'

export default function Child() {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const person = { name }

  useEffect(() => console.log(person), [person])

  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} />
      <br />
      <br />
      <button onClick={() => setAge(currentAge => currentAge - 1)}>-</button>
      {age}
      <button onClick={() => setAge(currentAge => currentAge + 1)}>+</button>
      <br />
      <br />
      My name is {name} and I am {age} years old.
    </div>
  )
}
