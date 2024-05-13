import React from "react"
import { useNavigate } from "react-router-dom"
import StyledButton from '../components/StyledButton'

type QuestionProps = { 
    question: string;
}

const ScreenerQuestion = (props: QuestionProps) => {
    const navigate = useNavigate()
    const handelRadioChange =  (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        console.log('Selected answer:', value)
    }

const handleNextButton = () => {
    navigate('/screenerquestion2')
}

const handleCancelButton = () => {
    navigate('/')
}
    return (
        <main className="h-screen">
            <section className="flex justify-center items-center flex-col">
                <section>
                    <h4 className="pt-10">Step 1 of 2</h4>
                    <h1 className="border-b-2 pb-3 font-semibold">Let's get to know each other!</h1>
                    <h2 className="pt-5">{props.question}</h2>
                    <div>
                        <div className="pt-6">
                            <input 
                                type="radio" 
                                id="yes" 
                                name="answer" 
                                value="Yes"
                                onChange={handelRadioChange}
                            />
                            <label className="pl-2" htmlFor="yes">Yes</label>
                        </div>
                        <div className="pt-1 pb-10">
                            <input 
                                type="radio" 
                                id="no" 
                                name="answer" 
                                value="No"
                                onChange={handelRadioChange}
                            />
                            <label className="pl-2" htmlFor="no">No</label>
                        </div>
                    </div>
                </section>
            {/* </section> */}
                <section className="flex justify-end pl-20">
                    <div className="pr-4">
                        <StyledButton children='Cancel' onClick={handleCancelButton} style={`bg-white border-2 border-lightPurple rounded-lg text-black font-semibold leading-6 py-1 px-3`}/>
                    </div>
                    <div>
                        <StyledButton children='Next' onClick={handleNextButton} style={`bg-lightPurple border-2 border-lightPurple rounded-lg text-black font-semibold leading-6 p-1 px-4`}/>
                    </div>
                </section>
        </section>
       </main> 
    ) 
}

export default ScreenerQuestion