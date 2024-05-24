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
        <section className="flex justify-end">
                <div className="pr-6">
                <p>{message}</p>
                    <Button children='X' onClick={onClose} style={'bg-white border-2 text-black text-xs'}/>
                    <StyledButton children='Cancel' onClick={onCancel} style={`bg-white border-2 border-lightPurple rounded-lg text-black text-xs md:text-base xl:text-xl font-normal leading-6 py-1.5 px-5 md:py-2 md:px-7`}/>
                </div>
                <div>
                    <StyledButton children='Continue' onClick={onClick} style={`bg-lightPurple border-2 border-lightPurple rounded-lg text-black text-xs md:text-base xl:text-xl font-normal leading-6 p-1.5 px-5 md:py-2 md:px-7`}/>
                </div>
        
        </section>
    )
}

export default ScreenerPopup