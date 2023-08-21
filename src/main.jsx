import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [name, setName] = React.useState('sabeur')
  React.useEffect(() => {
    setName('Mustafa')
  }, [])
  return <h1 style={{ background: 'pink' }}>Hello {name}</h1>
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
