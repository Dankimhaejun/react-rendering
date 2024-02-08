import { createContext, useContext, useEffect, useState } from 'react'

type ParentProps = {
  children: React.ReactNode
  lastChild: React.ReactNode
}

const ReferenceContext = createContext({}) // array, object ...
const PrimitiveContext = createContext('') // number, string, boolean, null, undefined ...

export default function Example2() {
  return (
    <Parent lastChild={<ChildC />}>
      <ChildB />
    </Parent>
  )
}

function Parent({ children, lastChild }: ParentProps) {
  useForceRender(5000)
  console.log('Parent is rendered')

  const referenceValue = {}
  const primitiveValue = 'changed'

  return (
    <div className="parent">
      <ReferenceContext.Provider value={referenceValue}>
        <PrimitiveContext.Provider value={primitiveValue}>
          <ChildA />
          {children}
          {lastChild}
        </PrimitiveContext.Provider>
      </ReferenceContext.Provider>
    </div>
  )
}

function ChildA() {
  console.log('ChildA is rendered')
  return <div className="childA">A</div>
}

function ChildB() {
  console.log('ChildB is rendered')
  return <div className="childB">B</div>
}

function ChildC() {
  console.log('ChildC is rendered')
  const primitiveContext = useContext(PrimitiveContext)
  console.log('primitiveContext', primitiveContext)
  const referenceContextValue = useContext(ReferenceContext)
  console.log('referenceContextValue', referenceContextValue)
  return <div className="childC">C</div>
}

function useForceRender(interval: number) {
  const [tick, setTick] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setTick((tick) => tick + 1), interval)
    return () => clearInterval(id)
  }, [interval])

  return tick
}
