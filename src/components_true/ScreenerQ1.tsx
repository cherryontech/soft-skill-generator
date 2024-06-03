import React, { useState }from "react"
import { useNavigate } from "react-router-dom"
import StyledButton from "./StyledButton";
import ScreenerPopup from "./ScreenerPopUp";


type QuestionProps = { 
    question: string;
}

const ScreenerQuestion = (props: QuestionProps) => {
    const [showPopup, setShowPopup] = useState(false);
    const [ selectedAnswer, setSelectedAnswer ] = useState<string | null>(null)
    const navigate = useNavigate()

    const handelRadioChange =  (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        console.log('Selected answer:', value)
        setSelectedAnswer(value)
    }

const handleNextButton = () => {
    if(selectedAnswer === "No") {
        setShowPopup(true);
        console.log('next clicked')
    } else {
        navigate('/screenerquestion2')
    }
}

const handleCancelButton = () => {
    navigate('/')
}

const closePopup = () => {
    setShowPopup(false);
};

const handlePopupContinue = () => {
    setShowPopup(false);
    navigate('/screenerquestion2')
}
//handleContinue is an onClick for the 'continue' button and moves on to next section, currently sends home
//until next section is ready

const handlePopupCancel = () => {
    setShowPopup(false)
    navigate('/')
}
    return (
        <main className="h-screen mx-7 md:mx-36 xl:mx-marginXl">
            <section className="flex flex-col justify-center md:items-start">
                    <p className="pt-10 md:pt-16 xl:pt-84 xl:pb-3.5">Step 1 of 2</p>
                    <div className="w-56 border-b-2 md:w-full">
                        <h3 className=" pb-3 font-semibold leading-9 text-base md:pb-4 md:text-3xl xl:text-txt32 xl:pb-23">Let's get to know each other!</h3>
                    </div>
                    <h4 className="pt-5 leading-9 text-base md:text-txt28 font-normal md:pt-7 xl:pt-42">{props.question}</h4>
                    <div>
                        <div className="pt-5px md:pt-3 xl:pt-22">
                            <input 
                                type="radio" 
                                id="yes" 
                                name="answer" 
                                value="Yes"
                                onChange={handelRadioChange}
                            />
                            <label className="pl-3.5 text-xs font-normal md:text-base xl:text-xl" htmlFor="yes">Yes</label>
                        </div>
                        <div className="pt-1 xl:pt-11px pb-10">
                            <input 
                                className="text-xs font-normal xl:text-xl"
                                type="radio" 
                                id="no" 
                                name="answer" 
                                value="No"
                                onChange={handelRadioChange}
                            />
                            <label className="pl-3.5 text-xs font-normal md:text-base xl:text-xl" htmlFor="no">No</label>
                        </div>
                    </div>
            </section>
            <section className="flex justify-end">
                <div className="pr-6">
                    <StyledButton children='Cancel' onClick={handleCancelButton} style={`bg-white border-2 border-lightPurple rounded-lg text-black text-xs md:text-base xl:text-xl font-normal leading-6 py-1.5 px-5 md:py-2 md:px-7`}/>
                </div>
                <div>
                    <StyledButton children='Next' onClick={handleNextButton} style={`bg-lightPurple border-2 border-lightPurple rounded-lg text-black text-xs md:text-base xl:text-xl font-normal leading-6 p-1.5 px-5 md:py-2 md:px-7`}/>
                </div>
            </section>
                {showPopup && (
                    <ScreenerPopup message="Hello! While our assessment is tailored for career changers, feel free to explore it anyway- you might find some valuable insights!"
                        onClose={closePopup}
                        onClick={handlePopupContinue}
                        onCancel={handlePopupCancel}
                    />
                )}
       </main> 
    ) 
}

export default ScreenerQuestion