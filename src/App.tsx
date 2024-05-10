import './App.css'
import Footer from '../src/components/Footer'
import logo from '../src/assets/logo.jpg'
import ScreenerQuestion from './components/ScreenerQ1'

function App() {

  return (
    <>
    <Footer title={logo}/>
    <ScreenerQuestion question='Are you transitioning in a new career?'/>
    </>
  )
}

export default App
