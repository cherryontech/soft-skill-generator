import './App.css'
import LandingPage from './components/LandingPage'
// import Footer from '../src/components/Footer'
// import logo from '../src/assets/logo.jpg'
import PageFooter from './components/PageFooter'
import ScreenerQuestion from './components/ScreenerQ1'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/screenerquestion1' element={<ScreenerQuestion question={'Are you transistion in new career?'}/>}/>
        <Route path='/screenerquestion2' element={<ScreenerQuestion question={'Are you aspiring to pursue a career as software enginnering?'}/>}/>
      </Routes>
    <PageFooter />
  </BrowserRouter>
  );
}

export default App
