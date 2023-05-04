import { useState, useEffect } from 'react'

export default function useFetch(url, options = {}) {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    setData(undefined)
    setIsLoading(true)
    setIsError(false)

    const controller = new AbortController()
    fetch(url, { ...options, signal: controller.signal })
      .then(res => {
        if (res.status === 200 || 201) return res.json()

        return Promise.reject(res)
      })
      .then(setData)
      .catch(err => {
        console.error(err)
        setIsError(true)
      })
      .finally(() => setIsLoading(false))

    return () => controller.abort()
  }, [url])

  return { data, isLoading, isError }
}
