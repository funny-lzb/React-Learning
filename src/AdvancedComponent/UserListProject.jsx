import { useState, useEffect } from 'react'
import User from './User'

export default function UserListProject() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => setUsers(users))
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      <h1>User List</h1>
      <ul>
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          users.map(user => <User key={user.id} name={user.name} />)
        )}
      </ul>
    </>
  )
}
