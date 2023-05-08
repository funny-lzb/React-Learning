import { useState, useEffect } from 'react'

/* TodoList:
    
   
*/
export function useLocalStorage(key, initialValue) {
  // 2.组件初次渲染时，表单的value是从本地存储中拿出来的.
  const [value, setValue] = useState(() => {
    const localValue = localStorage.getItem(key)
    if (localValue == null) {
      if (typeof initialValue === 'function') {
        return initialValue()
      } else {
        return initialValue
      }
    } else {
      return JSON.parse(localValue)
    }
  })

  // 1.每当我value改变时，我都要把它放到本地存储里
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value])

  return [value, setValue]
}
