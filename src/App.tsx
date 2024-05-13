import './App.css'
// import LandingPage from './components/LandingPage'
import Footer from '../src/components/Footer'
import logo from '../src/assets/logo.jpg'
import ScreenerQuestion from './components/ScreenerQ1'

function App() {
  return (
    <div className="App">
      {/* <LandingPage /> */}
      <ScreenerQuestion question={'Are you transistion in new career?'}/>
      <ScreenerQuestion question={'Areyou aspiring to pursue a career as software enginnering?'}/>
      <Footer title={logo} />
      
    </div>
  );
}

export default App
