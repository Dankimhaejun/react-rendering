import React, {
  useState,
  ChangeEvent,
  useTransition,
  useDeferredValue,
} from 'react'

const App = () => {
  const [keyword, setKeyword] = useState<string>('')
  console.log('keyword', keyword)
  const length = useDeferredValue(keyword.length)
  console.log('length', length)
  // const [results, setResults] = useState<Array<ItemType>>([])
  const results = Array.from(Array(length), (_, index) => {
    return { id: index, keyword }
  })
  // useTransition 훅을 이용해 startTransition 함수를 받아냄
  const [isPending, startTransition] = useTransition()
  isPending
  startTransition
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }

  // results 상태를 이용해 div 대량 생성
  const divRows = results.map((item) => (
    <div key={item.id}>
      id: {item.id}
      <br />
      keyword: {item.keyword}
      <hr />
    </div>
  ))

  // 사용자가 입력 필드에 타이핑하면 handleChange 함수를 실행하여 상태 변경
  // onChange 이벤트에 의해 바뀐 값을 렌더링 하는 것은 긴급한 업데이트가 요구됨

  return (
    <div style={{ margin: 10 }}>
      <div className="SearchInput">
        Keyword: <input type="text" value={keyword} onChange={handleChange} />
      </div>
      <hr />
      <div>{divRows}</div>
    </div>
  )
}

export default App
