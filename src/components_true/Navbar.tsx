import { Link } from 'react-router-dom';
type NavbarProps = { title: string }

function Navbar({ title }: NavbarProps) {

    return(
    <>
        <div className='bg-yellow flex justify-between items-center row'>
        {/* Logo as a clickable Link */}
            <Link to="/">
                <img src={title} alt="logo" />
            </Link>
        </div>
      </>
    )
}

export default Navbar