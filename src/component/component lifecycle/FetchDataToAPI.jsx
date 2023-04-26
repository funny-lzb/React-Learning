import { useState, useEffect } from 'react'
// 1.如果data为undefined，则显示Loading

export default function FetchDataToAPI() {
  const [users, setUsers] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .finally(() => setLoading(false))
  }, [])

  let jsx
  if (loading) {
    jsx = <h2>Loading</h2>
  } else {
    jsx = JSON.stringify(users)
  }

  return (
    <>
      <h1>Users</h1>
      {jsx}
    </>
  )
}
