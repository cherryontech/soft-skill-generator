import React, { useState } from "react"

type QuestionProps = { 
    question: string;
    answer?: boolean;
}

const ScreenerQuestion = (props: QuestionProps) => {
    // const [ step, setStep ] = useState<number>(1) 
    const handelRadioChange =  (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        console.log('Selected answer:', value)
}

// const handleNextButton = () => {
//     setStep(2)
// }
    return (
       <div>
            {/* <h4>Step {step} of 2</h4> */}
            <h1>Let's get to know each other!</h1>
            <h2>{props.question}</h2>
            <div>
                <input 
                    type="radio" 
                    id="yes" 
                    name="answer" 
                    value="Yes"
                    onChange={handelRadioChange}
                />
                <label htmlFor="yes">Yes</label>
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
    )
}

export default ScreenerQuestion