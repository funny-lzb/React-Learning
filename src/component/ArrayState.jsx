import { useState } from 'react'

export default function ArrayState() {
  const initialArr = ['A', 'B', 'C']
  const [arr, setArr] = useState(initialArr)
  const [value, setValue] = useState('')

  function deleteFirst() {
    setArr(currentArr => currentArr.slice(1))
  }

  function deleteSpecific(ele) {
    setArr(currentArr => currentArr.filter(c => c !== ele))
  }

  function addToFirst(ele) {
    setArr(currentArr => [ele, ...currentArr])
  }

  function addToLast(ele) {
    setArr(currentArr => [...currentArr, ele])
  }

  function clearArr() {
    setArr([])
  }

  function resetArr() {
    setArr(initialArr)
  }

  function replaceAByH(ele) {
    // 找到A的索引号，并将其替换成H
    setArr(
      arr.map(string => {
        if (string === 'A') return 'H'

        return string
      })
    )
  }

  function handleInputChange(e) {
    const inputValue = e.target.value
    setValue(inputValue)

    setArr(currentArr => [...currentArr, inputValue])
  }

  function addLetterAtIndex(letter, index) {
    setArr(currentArr => [
      currentArr.slice(0, index),
      letter,
      currentArr.slice(index),
    ])
  }

  return (
    <>
      <button onClick={deleteFirst}>Delete 1st element</button>

      <br />
      <br />
      <button onClick={() => deleteSpecific('B')}>
        Delete spesific 'B' element
      </button>

      <br />
      <br />
      <button onClick={() => addToFirst('D')}>
        add new element 'D' to the 1st
      </button>

      <br />
      <br />
      <button onClick={() => addToLast('D')}>
        add new element 'D' to the last
      </button>

      <br />
      <br />
      <button onClick={clearArr}>clear Arr</button>

      <br />
      <br />
      <button onClick={resetArr}>reset Arr</button>

      <br />
      <br />
      <button onClick={() => replaceAByH('H')}>replace A by H</button>

      <br />
      <br />
      <input value={value} onChange={handleInputChange} placeholder='Search' />

      <br />
      <br />
      <button onClick={() => addLetterAtIndex('M', 2)}>addLetterAtIndex</button>

      <h1>{arr.join(',')}</h1>
    </>
  )
}
