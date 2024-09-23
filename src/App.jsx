import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import './index.css'
import LoginPage from './pages/LoginPage'
import MainTablePage from './pages/MainTablePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    < >
      <div className=''> <MainTablePage/>  </div>
    </>
  )
}

export default App
