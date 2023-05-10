import { useEffect, useState } from 'react'

/* TodoList:


*/
export function useLocalStorage(key, initialValue) {
  // 2.当你初次渲染页面时，你表单的value是由上一次本地存储决定的
  // 如果上一次本地存储的值存在，我们把它作为表单的value
  // 如果上一次本地存储的值不存在，我们就用初始值作为表单的value
  const [value, setValue] = useState(() => {
    const localValue = localStorage.getItem(key)
    if (localValue == null) {
      if (typeof initialValue === 'function') return initialValue()

      return initialValue
    } else {
      return JSON.parse(localValue)
    }
  })

  //   1.每当你改变value时，都要把它同步进本地存储中
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value, key])
  return [value, setValue]
}
