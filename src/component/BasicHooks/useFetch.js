import { useState, useEffect, useReducer } from 'react'

const ACTIONS = {
  FETCH_START: ' FETCH_START',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_ERROR: 'FETCH_ERROR',
}

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.FETCH_START:
      return {
        isLoading: true,
        isError: false,
      }
    case ACTIONS.FETCH_SUCCESS:
      return { data: payload.data, isLoading: false, isError: false }
    case ACTIONS.FETCH_ERROR:
      return {
        isLoading: false,
        isError: true,
      }
    default:
      return state
  }
}

export default function useFetch(url, options = {}) {
  const [state, dispatch] = useReducer(reducer, {
    isLoading: true,
    isError: false,
  })

  useEffect(() => {
    // 重置状态
    dispatch({ type: ACTIONS.FETCH_START })
    const controller = new AbortController()

    fetch(url, { signal: controller.signal, ...options })
      .then(res => {
        if (res.status === 200 || 201) return res.json()

        return Promise.reject(res)
      })
      .then(
        data => dispatch({ type: ACTIONS.FETCH_SUCCESS, payload: { data } }) //更新数据状态
      )
      .catch(err => {
        if (err.name === 'AbortError') return

        dispatch({ type: ACTIONS.FETCH_ERROR })
      }) //更新错误状态

    return () => controller.abort()
  }, [url])

  return state
}
