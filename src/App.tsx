import './App.css'
import Footer from '../src/components/Footer'
import logo from '../src/assets/logo.jpg'
import StyleCheck from './components/StyleCheck'

function App() {

  return (
    <>
    <StyleCheck />
    <Footer title={logo}/>
    </>
  )
}

export default App
