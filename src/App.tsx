import './App.css'
import LandingPage from './components/LandingPage'
import Footer from '../src/components/Footer'
import logo from '../src/assets/logo.jpg'

function App() {
  return (
    <div className="App">
      <LandingPage />
      <Footer title={logo} />
    </div>
  );
}

export default App
