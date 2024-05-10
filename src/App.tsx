import React from 'react'
import './App.css'
import LandingPage from './components/LandingPage'
import Footer from '../src/components/Footer'
import logo from '../src/assets/logo.jpg'

function App() {
  return (
    <>
    <div className="App">
      <LandingPage />
    </div>

    <Footer title={logo}/>
    </>
  )
}

export default App
