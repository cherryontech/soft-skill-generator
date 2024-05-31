import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components_true/LandingPage'
import logo from '../src/assets/logo.jpg'
import PageFooter from './components_true/PageFooter';
import Navbar from './components_true/Navbar';
import ScreenerQuestion from './components_true/ScreenerQ1';
import ScreenerQuestion2 from './components_true/ScreenerQ2';
import OnboardingQuestion from './components_true/OnboardingQ1';


function App() {
  
  return (
  <>
    <BrowserRouter>
    <Navbar title={logo}/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/screenerquestion1' element={<ScreenerQuestion question={'Are you transitioning in a new career?'}/>}/>
        <Route path='/screenerquestion2' element={<ScreenerQuestion2 question={'Are you aspiring to pursue a career as a software engineer?'}/>}/>
        <Route path='/onboardingquestion1' element={<OnboardingQuestion question={'What type of role are you pursuing?'}/>}/>
      </Routes>
      <PageFooter />
    </BrowserRouter>
  </>
  );
}

export default App
