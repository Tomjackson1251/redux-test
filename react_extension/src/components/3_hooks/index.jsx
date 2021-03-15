import React from 'react'
import ReactDOM from 'react-dom'

export default function Demo() {
  const [count, setCount] = React.useState(0)
  const myRef = React.useRef()

  React.useEffect(() => {
    let timer = setInterval(() => {
      setCount((count) => count + 1)
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  //   console.log(count, setCount)
  function add() {
    setCount(count + 1)
  }

  function unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }

  function show() {
    alert(myRef.current.value)
  }

  return (
    <div>
      <input type="text" ref={myRef} />
      <h2>当前求和为：{count}</h2>
      <button onClick={add}>点我+1</button>
      <button onClick={unmount}>点我死妈</button>
      <button onClick={show}>点我提示</button>
    </div>
  )
}
