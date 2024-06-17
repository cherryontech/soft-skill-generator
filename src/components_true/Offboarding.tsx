import offboarding from '../assets/AO project .png'
import StyledButton from './StyledButton'
import { useNavigate } from 'react-router-dom'
 
type props = { quote: string }

const Offboarding = ({quote}: props) => {
    const navigate = useNavigate()

    const handleButton = () => {
        navigate('/')
    }

    return (
        <div className='px-6 pt-36 md:px-10 xl:px-36'>
        <section className='flex flex-col items-center md:flex-row'>
            <img src={offboarding} alt='offboarding image' className='w-1/5 xl:mr-4'/>
            <h3 className='font-semibold text-darkPurple text-lg md:text-2xl xl:text-3xl md:leading-48 xl:leading-64'>{quote}</h3>
        </section>
        <div className='flex items-center flex-col md:items-end' >
            <StyledButton 
                children='Go back to home' 
                onClick={handleButton}
                style={`mt-6 bg-lightPurple border-2 border-lightPurple rounded-lg text-black text-xs md:text-base xl:text-xl font-semibold leading-6 p-1.5 px-5 md:py-2 md:px-7`}    
            />
        </div>
        </div>

    )
}

export default Offboarding