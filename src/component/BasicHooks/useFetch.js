import { useState, useEffect } from 'react'

export default function useFetch(url, options = {}) {
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState()

  useEffect(() => {
    setData(undefined)
    setIsError(false)
    setIsLoading(true)

    const controller = new AbortController()
    fetch(url, { signal: controller.signal, ...options })
      .then(res => {
        if (res.status === 200 || 201) {
          return res.json()
        }
        return Promise.reject(res)
      })
      .then(setData)
      .catch(err => {
        if (err.name === 'AbortError') return

        console.error(err)
        setIsError(true)
      })
      .finally(() => {
        if (controller.signal.aborted) return
        setIsLoading(false)
      })

    return () => controller.abort()
  }, [url])

  return { data, isLoading, isError }
}
