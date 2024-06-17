import React, { useState }from "react"
import { useNavigate } from "react-router-dom"
import StyledButton from "./StyledButton";
import { useAnswer } from "./AnswerContext";


type QuestionProps = { 
    question: string;
}

const OnboardingQuestion: React.FC<QuestionProps> = ({question}) => {
    const [ selectedAnswer, setSelectedAnswer ] = useState<string | null>(null)
    const navigate = useNavigate()
    const [error, setError] = useState<string | null>(null)
    const { updateAnswers } = useAnswer()

    const handleRadioChange =  (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        console.log('Selected answer:', value)
        setSelectedAnswer(value)
        setError(null);
    }

const handleNextButton = () => {
    if(!selectedAnswer) {
        setError('Please select an option before proceeding.')
    } else {
        updateAnswers(question, selectedAnswer)
        navigate('/onboardingquestion2')
    }
    }

const handleBackButton = () => {
    navigate('/screenerquestion2')
}


    return (
        <main className="h-screen mx-7 md:mx-36 xl:mx-marginXl">
            <section className="flex flex-col justify-center md:items-start">
                    <p className="pt-10 md:pt-16 xl:pt-84 xl:pb-3.5">Question 1 of 3</p>
                    <div className="border-b-2 w-full">
                        <h3 className=" pb-3 font-semibold leading-8 text-base md:pb-4 md:text-3xl md:leading-48 xl:text-txt32 xl:pb-23">Last set of questions! We want to make sure our solution aligns with your expectations.</h3>
                    </div>
                    <h4 className="pt-5 leading-9 text-base md:text-txt28 font-normal md:pt-7 xl:pt-42">{question}</h4>
                    <div>
                        <div className="pt-5px md:pt-3 xl:pt-22">
                            <input 
                                type="radio" 
                                id="FE-Dev" 
                                name="answer" 
                                value="Front-end Developer"
                                onChange={handleRadioChange}
                            />
                            <label className="pl-3.5 text-xs font-normal md:text-base xl:text-xl" htmlFor="Front-End Developer">Front-End Developer</label>
                        </div>
                        <div className="pt-5px md:pt-3 xl:pt-22">
                            <input 
                                className="text-xs font-normal xl:text-xl"
                                type="radio" 
                                id="BE-Dev" 
                                name="answer" 
                                value="Back-end Developer"
                                onChange={handleRadioChange}
                            />
                            <label className="pl-3.5 text-xs font-normal md:text-base xl:text-xl" htmlFor="Back-end Developer">Back-end Developer</label>
                        </div>
                        <div className="pt-5px md:pt-3 xl:pt-22">
                            <input 
                                type="radio" 
                                id="FS-Dev" 
                                name="answer" 
                                value="Full-stack Developer"
                                onChange={handleRadioChange}
                            />
                            <label className="pl-3.5 text-xs font-normal md:text-base xl:text-xl" htmlFor="Full-stack Developer">Fullstack Developer</label>
                        </div>
                        <div className="pt-5px md:pt-3 xl:pt-22">
                            <input 
                                type="radio" 
                                id="DevOpsEng" 
                                name="answer" 
                                value="DevOps Engineer"
                                onChange={handleRadioChange}
                            />
                            <label className="pl-3.5 text-xs font-normal md:text-base xl:text-xl" htmlFor="DevOps Engineer">DevOps Engineer</label>
                        </div>
                        <div className="pt-3 xl:pt-22 pb-6 md:pb-8">
                            <input 
                                type="radio" 
                                id="Engineer" 
                                name="answer" 
                                value="Engineer"
                                onChange={handleRadioChange}
                            />
                            <label className="pl-3.5 text-xs font-normal md:text-base xl:text-xl" htmlFor="Engineer">Engineer</label>
                        </div>
                    </div>
                    {error && <p style={{ color: 'red' }} className="mb-4 text-xs md:text-base">{error}</p>}
            </section>
            <section className="flex justify-between">
                <div className="pr-6">
                    <StyledButton children='Back' onClick={handleBackButton} style={`bg-white border-2 border-lightPurple rounded-lg text-black text-xs md:text-base xl:text-xl font-normal leading-6 py-0.5 px-5 pr-100 md:py-2 md:px-7`}/>
                </div>
                <div className="justify-end">
                    <StyledButton children='Next' onClick={handleNextButton} style={`bg-lightPurple border-2 border-lightPurple rounded-lg text-black text-xs md:text-base xl:text-xl font-normal p-1.5 px-5 md:py-2 md:px-7`}/>
                </div>
            </section>
       </main> 
    ) 
}

export default OnboardingQuestion