import { useState } from 'react'

export default function Example0() {
  console.log('Example0 is called')
  // const [count, setCount] = useState(0)

  // return (
  //   <div>
  //     count: {count}
  //     <div>
  //       <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
  //       <button onClick={() => setCount((prev) => prev - 1)}>-1</button>
  //     </div>
  //   </div>
  // )
  return <Counter />
}

function Counter() {
  const [count, setCount] = useState(0)
  console.log('Counter is called')

  return (
    <div>
      count: {count}
      <div>
        <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
        <button onClick={() => setCount((prev) => prev - 1)}>-1</button>
      </div>
    </div>
  )
}

Counter
