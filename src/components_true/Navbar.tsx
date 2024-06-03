import { Link, useLocation } from 'react-router-dom';
type NavbarProps = { title: string }

function Navbar({ title }: NavbarProps) {

    const location = useLocation()

    
    // Hide button on screener question pages
    const hideButtonPaths = ['/screenerquestion1', '/screenerquestion2'];

    return(
    <>
        <div className='bg-yellow flex justify-between items-center row'>
        {/* Logo as a clickable Link */}
            <Link to="/">
                <img src={title} alt="logo" />
            </Link>
            {!hideButtonPaths.includes(location.pathname)}
        </div>
     
      </>
    )
}

export default Navbar