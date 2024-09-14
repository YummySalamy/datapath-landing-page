import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './views/LandingPage'
import Blog from './views/Blog'
import './App.css'

function App() {

  return (
    <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
      </Router>
  )
}

export default App
