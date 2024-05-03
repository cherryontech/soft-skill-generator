import './App.css'
import LandingHeader from './Components/HeaderComp';
import { BrowserRouter } from 'react-router-dom';

function App() {
/*Browserroute should encompass all elements of this return statement*/
/*Logo will have a path back to landing page that is everpresent*/
  return (
    <>
    
    <BrowserRouter>
    
    {/* <h1 className="text-3xl font-bold underline">
      Hello world! Test deploy!
    </h1> */}
    < LandingHeader />
    </BrowserRouter>
    </>
  )
}

export default App
