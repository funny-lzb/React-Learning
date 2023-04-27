import { useState, useEffect } from 'react'
import User from './User'

export default function UserListProject() {
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])

  useEffect(() => {
    setLoading(true)

    const controller = new AbortController()
    fetch('https://jsonplaceholder.typicode.com/users', {
      signal: controller.signal,
    })
      .then(res => res.json())
      .then(setUsers)
      .finally(() => setLoading(false))

    return () => controller.abort()
  }, [])

  return (
    <>
      <h1>User List</h1>
      <ul>
        {loading ? (
          <h2>Loading</h2>
        ) : (
          users.map(user => <User name={user.name} key={user.id} />)
        )}
      </ul>
    </>
  )
}
