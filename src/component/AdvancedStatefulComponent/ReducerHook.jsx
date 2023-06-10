import { useReducer } from 'react'

// useReducer其实是把状态收集起来，对应不同情况去setState

const ACTIONS = {
  DECREMENT: 'DECREMENT',
  INCREMENT: 'INCREMENT',
  RESET: 'RESET',
}

function reducer(count, action) {
  switch (action.type) {
    case ACTIONS.DECREMENT:
      return count - 1
    case ACTIONS.INCREMENT:
      return count + 1
    case ACTIONS.RESET:
      return action.payload.value
    default:
      return count
  }
}

export default function ReducerHook({ initialValue = 0 }) {
  const [count, dispatch] = useReducer(reducer, initialValue)

  return (
    <>
      <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>-</button>
      {count}
      <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>+</button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.RESET, payload: { value: initialValue } })
        }
      >
        Reset
      </button>
    </>
  )
}
