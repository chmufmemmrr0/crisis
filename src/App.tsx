import { HashRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Quiz from './pages/Quiz'
import Tune from './pages/Tune'
import './App.css'

function App() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/Tune" element={<Tune />} />
      </Routes>
    </HashRouter>
  )
}

export default App
