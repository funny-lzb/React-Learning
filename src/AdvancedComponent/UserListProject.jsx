import { useState, useEffect } from 'react'
import User from './User'

export default function UserListProject() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()

  useEffect(() => {
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (res.status === 200) {
          return res.json()
        } else {
          return Promise.reject(res) //如果状态码不是200，手动抛出错误(或者叫返回一个失败的Promise对象)
        }
      })
      .then(users => setUsers(users))
      .catch(err => setError(err)) //发生了错误，对错误进行捕捉
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      <h1>User List</h1>
      <ul>
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>Error</h2>
        ) : (
          users.map(user => <User key={user.id} {...user} />)
        )}
      </ul>
    </>
  )
}
