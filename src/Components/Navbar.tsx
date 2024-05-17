import { Link } from 'react-router-dom';
import logo from '/src/assets/logo.jpeg'

function Navbar() {
    return(
    <>
        <div className='bg-yellow flex row'>
        {/* Logo as a clickable Link */}
            <Link to="/">
            <img src={logo} alt="Logo" />
            </Link>
        </div>
      </>
    )
}

export default Navbar