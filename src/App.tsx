import './styles.css'

function App() {
  return (
    <>
      <div>React - Rendering</div>
      <div>수동적인 렌더링</div>
      <nav>
        <ol>
          <li>
            <a href={`/example1`}>
              모든 자식 컴포넌트가 동일하게 만들어지지 않을 때
            </a>
          </li>
          <li>
            <a href={`/contacts/2`}>
              Context consumer는 provider가 렌더링 될 때마다 렌더링 됨
            </a>
          </li>
        </ol>
      </nav>
    </>
  )
}

export default App
