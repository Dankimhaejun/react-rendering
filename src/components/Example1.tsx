import { useEffect, useState } from 'react'
import '../styles.css'

type ParentProps = {
  children: React.ReactNode
  lastChild: React.ReactNode
}

export default function Example1() {
  return (
    <Parent lastChild={<ChildC />}>
      <ChildB />
    </Parent>
  )
}

function Parent({ children, lastChild }: ParentProps) {
  useForceRender(5000)
  console.log('Parent is rendered')

  return (
    <div className="parent">
      <ChildA />
      {children}
      {lastChild}
    </div>
  )
}

function ChildA() {
  console.log('ChildA is rendered')
  return <div className="childA"></div>
}

function ChildB() {
  console.log('ChildB is rendered')
  return <div className="childB"></div>
}

function ChildC() {
  console.log('ChildC is rendered')
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
