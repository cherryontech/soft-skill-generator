import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage'
import logo from '../src/assets/logo.jpg'
import PageFooter from './components/PageFooter';
import Navbar from './components/Navbar';
import ScreenerQuestion from './components/ScreenerQ1';

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
