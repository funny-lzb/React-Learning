import { useState, useEffect } from 'react'
// 1.如果data为undefined，则显示Loading

export default function FetchDataToAPI() {
  const [users, setUsers] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()

  useEffect(() => {
    setLoading(true)
    setError(undefined)
    const controller = new AbortController()
    fetch('https://jsonplaceholder.typicode.com/users', {
      signal: controller.signal,
    })
      .then(res => {
        if (res.status === 200) {
          return res.json()
        } else {
          return Promise.reject(res)
        }
      })
      .then(data => {
        console.log('Here')
        setUsers(data)
      })
      .catch(e => setError(e))
      .finally(() => setLoading(false))

    return () => controller.abort() //中止上一次的请求
  }, [])

  let jsx
  if (loading) {
    jsx = <h2>Loading</h2>
  } else if (error != null) {
    jsx = <h2>Error</h2>
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
