 import StyledButton from './StyledButton'
 import Button from './Button'

interface Popupcontent { 
    onClick: () => void;
    onClose: () => void;
    onCancel: () => void;
    message: string;
}


const ScreenerPopup: React.FC<Popupcontent> = ({message, onClick, onCancel, onClose}) => {
   
//handleCancel is an onClick for the cancel button and navigates home

    return (
        <main className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
            <section className='relative bg-white p-6 rounded-lg shadow-lg max-w-md w-full'>
                <div className='flex justify-between items-center mb-4my-4'>
                    <p className='ml-6 font-bold '>Disclosure</p>
                    <Button children='X' onClick={onClose} style={'bg-white border-2 text-black text-xs'}/>
                </div>
                <div>
                    <p className='ml-6'>{message}</p>
                </div>
                <div className='flex justify-between mr-6 ml-6 mt-6'>
                    <StyledButton children='Cancel' onClick={onCancel} style={`bg-white border-2 border-lightPurple rounded-lg text-black text-xs md:text-base xl:text-xl font-normal leading-6 py-1.5 px-5 md:py-2 md:px-7`}/>  
                    <StyledButton children='Continue' onClick={onClick} style={`bg-lightPurple border-2 border-lightPurple rounded-lg text-black text-xs md:text-base xl:text-xl font-normal leading-6 p-1.5 px-5 md:py-2 md:px-7`}/>
                </div>
            </section>
        </main>
    )
}

export default ScreenerPopup