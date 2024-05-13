import React, { useState } from "react"
import StyledButton from '../components/StyledButton'

type QuestionProps = { 
    question: string;
    answer?: boolean;
}

const ScreenerQuestion = (props: QuestionProps) => {
    const [ step, setStep ] = useState<number>(1) 
    const handelRadioChange =  (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        console.log('Selected answer:', value)
}

const handleNextButton = () => {
    setStep(2)
}
    return (
        <main className="h-screen">
            <section className="flex justify-center items-center flex-col">
                <section>
                    <h4 className="pt-10">Step {step} of 2</h4>
                    <h1 className="border-b-2 pb-3 font-semibold">Let's get to know each other!</h1>
                    <h2>{props.question}</h2>
                    <div>
                        <div>
                            <input 
                                type="radio" 
                                id="yes" 
                                name="answer" 
                                value="Yes"
                                onChange={handelRadioChange}
                            />
                            <label htmlFor="yes">Yes</label>
                        </div>
                        <div>
                            <input 
                                type="radio" 
                                id="no" 
                                name="answer" 
                                value="No"
                                onChange={handelRadioChange}
                            />
                            <label htmlFor="no">No</label>
                        </div>
                    </div>
                </section>
            </section>
                <section className="flex justify-end px-28">
                    <div className="pr-4">
                        <StyledButton children='Cancel' style={`bg-white border-2 border-lightPurple rounded-lg text-black font-semibold leading-6 py-1 px-3`}/>
                    </div>
                    <div>
                        <StyledButton children='Next' onClick={handleNextButton} style={`bg-lightPurple border-2 border-lightPurple rounded-lg text-black font-semibold leading-6 p-1 px-4`}/>
                    </div>
                </section>
        {/* </section> */}
       </main> 
    ) 
}

export default ScreenerQuestion