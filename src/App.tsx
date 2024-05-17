import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import Footer from './Components/Footer';
import logo from '../src/assets/logo.jpg';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Navbar title={logo}/> }/>
        <Route path='/' element={<LandingPage/>}/>
      </Routes>

      <Footer title={logo} />
    </BrowserRouter>
    </>
  )
}

export default App
