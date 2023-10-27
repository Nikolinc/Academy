import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from '../pages/home/home'
import LeftBar from '../component/leftBar/leftBar'

function App() {


  return (
    <div className="App">
      <LeftBar />
      <Routes>
        <Route path="/tasks/:id" element={<></>} />
        <Route path="/home" element={<Home />} />
        <Route index element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
