import './App.css'
import Footer from '../src/components/Footer'
import logo from '../src/assets/logo.jpg'

function App() {

  return (
    <>
    <h1 className="text-3xl font-bold underline">
      Hello world! Test deploy!
    </h1>
    <Footer title={logo}/>
    </>
  )
}

export default App
