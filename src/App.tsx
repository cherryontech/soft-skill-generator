import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Navbar from './Components/Navbar';


function App() {
/*Browserroute should encompass all elements of this return statement*/
/*Logo will have a path back to landing page that is everpresent*/
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Navbar/> }/>
      </Routes>
      < Header/>
    </BrowserRouter>
    </>
  )
}

export default App
