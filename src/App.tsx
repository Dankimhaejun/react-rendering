import './styles.css'

function App() {
  return (
    <>
      <div>React - Rendering</div>
      <div>수동적인 렌더링</div>
      <nav>
        <ol>
          <li>
            <a href={`/example0`}>
              앱 전체를 새로 갱신하는 것이 아닌, 변경된 부분만 업데이트
            </a>
          </li>
          <li>
            <a href={`/example1`}>
              모든 자식 컴포넌트가 동일하게 만들어지지 않을 때
            </a>
          </li>
          <li>
            <a href={`/example2`}>
              Context consumer는 provider가 렌더링 될 때마다 렌더링 됨
            </a>
          </li>
          <li>
            <a href={`/example3`}>
              렌더링 제외 기준은 각 컴포넌트 레벨에서 적용됨
            </a>
          </li>
          <li>
            <a href={`/example4`}>example4</a>
          </li>
          <li>
            <a href={`/solution2`}>solution2</a>
          </li>
        </ol>
      </nav>
    </>
  )
}

export default App
