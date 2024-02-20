import { createContext, useContext, useEffect, useRef, useState } from 'react'

type ParentProps = {
  children: React.ReactNode
  lastChild: React.ReactNode
}

const Context = createContext({}) // array, object ...

export default function Solution2() {
  return (
    <Parent lastChild={<ChildC />}>
      <ChildB />
    </Parent>
  )
}

function Parent({ children, lastChild }: ParentProps) {
  const ref = useRef<number | null>(null)
  const [s, set] = useState(0) // useForceRender(5000)
  console.log('Parent is rendered')

  useEffect(() => {
    console.log('ref', ref)
  }, [ref])

  // const contextValue = { test: 'test' }
  const [contextValue] = useState('init') // 상태로 만들기
  return (
    <div className="parent">
      <Context.Provider value={contextValue}>
        <button
          onClick={() => {
            ref.current = 1
          }}
        >
          click
        </button>
        <button
          onClick={() => {
            set((p) => p + 1)
          }}
        >
          {s}
        </button>
        <ChildA n={1} />
        {children}
        {lastChild}
      </Context.Provider>
    </div>
  )
}

function ChildA({ n }: { n: number }) {
  console.log('ChildA is rendered')
  return <div className="childA">{n}</div>
}

function ChildB() {
  console.log('ChildB is rendered')
  const contextValue = useContext(Context)
  console.log('contextValue', contextValue)
  return <div className="childB"></div>
}

function ChildC() {
  console.log('ChildC is rendered')
  const contextValue = useContext(Context)
  console.log('contextValue', contextValue)
  return <div className="childC"></div>
}

// function useForceRender(interval: number) {
//   const [tick, setTick] = useState(0)
//   useEffect(() => {
//     const id = setInterval(() => setTick((tick) => tick + 1), interval)
//     return () => clearInterval(id)
//   }, [interval])

//   return tick
// }
