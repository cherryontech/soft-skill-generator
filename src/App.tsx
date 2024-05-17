import './App.css'
import LandingPage from './components/LandingPage'
import Footer from '../src/components/Footer'
import logo from '../src/assets/logo.jpg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
      </Routes>
      <Footer title={logo} />
    </BrowserRouter>
  );
}

export default App
