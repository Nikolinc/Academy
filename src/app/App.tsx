import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from '../pages/home/home'
import LeftBar from '../component/leftBar/leftBar'
import Header from '../component/header/header'
import Sound from '../pages/sound/sound'
function App() {

  return (
    <div className="App">
      <LeftBar />
      <div className='page'>
        <Header />
        <Routes>
          <Route path="/sound/:id" element={<Sound />} />
          <Route path="/home" element={<Home />} />
          <Route index element={<Home />} />
        </Routes>
      </div>

    </div>
  )
}

export default App
