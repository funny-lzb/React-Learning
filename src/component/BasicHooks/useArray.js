import { useState, useCallback } from 'react'

export function useArray(initialArr) {
  const [array, setArray] = useState(initialArr)

  const push = useCallback(pushNum => {
    return setArray(currentArray => [...currentArray, pushNum])
  }, [])

  const replace = useCallback((replacedIndex, element) => {
    //找到索引号为replacedIndex的那个元素，把它替换成element
    return setArray(currentArray =>
      currentArray.map(arrEle => {
        if (arrEle === currentArray[replacedIndex]) return element

        return arrEle
      })
    )
  }, [])

  const filter = useCallback(cb => {
    //对数组遍历，如果<3,就进入新数组；否则，过滤掉
    setArray(currentArray => currentArray.filter(cb))
  }, [])

  const remove = useCallback(removeEleIndex => {
    setArray(currentArray => [
      ...currentArray.slice(0, removeEleIndex), //截取索引号0~1之间的元素 [0,1)
      ...currentArray.slice(removeEleIndex + 1), //截取从索引号为2后面的元素[2, +∞)
    ])
  }, [])

  const clear = useCallback(() => {
    setArray([])
  }, [])

  const reset = useCallback(() => {
    setArray(initialArr)
  }, [])

  return { array, set: setArray, push, replace, filter, remove, clear, reset }
}
