import { Link, useLocation } from 'react-router-dom';
type NavbarProps = { title: string }
// import StyledButton from './StyledButton'

function Navbar({ title }: NavbarProps) {

    // const navigate = useNavigate()
    const location = useLocation()

    // const handleAssessmentButton = () => {
    //     navigate('/screenerquestion1')
    // }

    //Hide button on screener question pages
    // const hideButtonPaths = ['/screenerquestion1', '/screenerquestion2'];

    return(
    <>
        <div className='bg-yellow flex justify-between items-center row'>
        {/* Logo as a clickable Link */}
            <Link to="/">
                <img src={title} alt="logo" />
            </Link>
            {/* {!hideButtonPaths.includes(location.pathname) &&  (
                // <StyledButton 
                //     onClick={handleAssessmentButton}
                //     style={`bg-lightPurple rounded-lg h-12 px-4 py-2.5 text-black text-lg mr-8 md:mr-20 xl:mr-24 font-semibold leading-6`}>
                //     Start Assessment
                // </StyledButton>
            )} */}
        </div>
     
      </>
    )
}

export default Navbar