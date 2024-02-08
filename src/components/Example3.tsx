import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

const Context = createContext({})

export default function Example3() {
  return (
    <Parent>
      <ChildA />
    </Parent>
  )
}

function Parent({ children }: { children: ReactNode }) {
  useForceRender(5000)
  const contextValue = {}
  console.log('Parent is rendered')
  return (
    <div className="parent">
      <Context.Provider value={contextValue}>{children}</Context.Provider>
    </div>
  )
}

function ChildA() {
  console.log('ChildA is rendered')
  return (
    <div className="childA">
      <ChildB />
    </div>
  )
}

function ChildB() {
  console.log('ChildB is rendered')
  return (
    <div className="childB">
      <ChildC />
    </div>
  )
}

function ChildC() {
  console.log('ChildC is rendered')
  const value = useContext(Context)
  console.log('value', value)
  return <div className="childC"></div>
}

function useForceRender(interval: number) {
  const [tick, setTick] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setTick((tick) => tick + 1), interval)
    return () => clearInterval(id)
  }, [interval])

  return tick
}
