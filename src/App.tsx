import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer'
import logo from '../src/assets/logo.jpg';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Navbar title={logo}/> }/>
        <Route path='/' element={<LandingPage/>}/>
      </Routes>
      <LandingPage></LandingPage>

      <Footer title={logo} />
    </BrowserRouter>
    </>
  )
}

export default App
