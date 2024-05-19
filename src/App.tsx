import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage'
import logo from '../src/assets/logo.jpg'
import PageFooter from './Components/PageFooter';
import Navbar from './Components/Navbar';
import ScreenerQuestion from './Components/ScreenerQ1';

function App() {
  return (
  <>
    <BrowserRouter>
    <Navbar title={logo}/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/screenerquestion1' element={<ScreenerQuestion question={'Are you transitioning in a new career?'}/>}/>
        <Route path='/screenerquestion2' element={<ScreenerQuestion question={'Are you aspiring to pursue a career as a software engineer?'}/>}/>
      </Routes>
      <PageFooter />
    </BrowserRouter>
  </>
  );
}

export default App
