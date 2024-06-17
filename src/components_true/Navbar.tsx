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
                <img src={title} alt="logo" className='h-20 md:h-24 xl:h-28 pl-4 pt-2 md:pl-10 md:pt-4'/>
            </Link>
            {!hideButtonPaths.includes(location.pathname)}
        </div>
     
      </>
    )
}

export default Navbar