import { useState } from 'react'

export default function RenderingLIst() {
  const users = [
    { id: crypto.randomUUID(), name: 'item1' },
    { id: crypto.randomUUID(), name: 'item2' },
  ]
  const [items, setItems] = useState(users)

  function addItem() {
    setItems(items => [{ id: crypto.randomUUID(), name: 'New item' }, ...items])
  }
  //如果你不给key，那么React会把input框的值永远都是默认给第一个索引号的那个input
  //key就是让React知道谁是谁，给每个人贴上一个身份证ID
  return (
    <>
      <button onClick={addItem}>Add Item</button>
      {items.map(item => {
        return (
          <div key={item.id}>
            {item.name}
            <input type='text' />
          </div>
        )
      })}
    </>
  )
}
