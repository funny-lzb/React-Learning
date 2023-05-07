import { useState } from 'react'
import useFetch from './useFetch'

const URLS = {
  USERS: 'https://jsonplaceholder.typicode.com/users',
  POSTS: 'https://jsonplaceholder.typicode.com/posts',
  COMMENTS: 'https://jsonplaceholder.typicode.com/comments',
}

const OPTIONS = {
  method: 'POST',
  body: JSON.stringify({ name: 'Kyle' }),
  headers: {
    'Content-type': 'application/json',
  },
}

/*
TodoList:
  1.如果数据还在加载，就显示Loading...
  2.如果数据回来了，就显示数据
  3.如果获取API出错了，就显示Error

  BONUS：
  1.如果网速很慢，避免用户在点击下一个数据时，上一个数据显示在页面上

 */

function FetchProject() {
  const [url, setUrl] = useState(URLS.USERS)

  const { data, isLoading, isError } = useFetch(url, OPTIONS)

  return (
    <>
      <div>
        <label>
          <input
            type='radio'
            checked={url === URLS.USERS}
            onChange={() => setUrl(URLS.USERS)}
          />
          Users
        </label>
        <label>
          <input
            type='radio'
            checked={url === URLS.POSTS}
            onChange={() => setUrl(URLS.POSTS)}
          />
          Posts
        </label>
        <label>
          <input
            type='radio'
            checked={url === URLS.COMMENTS}
            onChange={() => setUrl(URLS.COMMENTS)}
          />
          Comments
        </label>
      </div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : isError ? (
        <h1>Error</h1>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </>
  )
}

export default FetchProject
