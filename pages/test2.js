import React, { useReducer } from 'react'

const initialState = { count: 0 }

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      throw new Error()
  }
}

const Test2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>[+]</button>
      <button onClick={() => dispatch({ type: 'decrement' })} style={{ marginLeft: '10px' }}>
        [-]
      </button>
    </>
  )
}
export default Test2
