import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components_true/LandingPage'
import logo from '../src/assets/logo.jpg'
import PageFooter from './components_true/PageFooter';
import Navbar from './components_true/Navbar';
import ScreenerQuestion from './components_true/ScreenerQ1';
import ScreenerQuestion2 from './components_true/ScreenerQ2';
import OnboardingQuestion from './components_true/OnboardingQ1';
import OnboardingQuestion2 from './components_true/OnboardingQ2';
import OnboardingQuestion3 from './components_true/OnboardingQ3';
import Skills from './components_true/Skills';


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
        <Route path='/onboardingquestion2' element={<OnboardingQuestion2 question={'What size of organization are you interested in joining?'}/>}/>
        <Route path='/onboardingquestion3' element={<OnboardingQuestion3 question={'In which sector are you most intersted in working?'}/>}/>
        <Route path='/topskills' element={<Skills heading={'Your Skills Leader Board: '}/>}/>
      </Routes>
      <PageFooter />
    </BrowserRouter>
  </>
  );
}

export default App
