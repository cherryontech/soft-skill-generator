import React, { createContext, useContext, useState, ReactNode } from "react";

//Define the shape of the context state 
type AnswersContextType = {
    answers: Record<string, string>;
    updateAnswers: (question: string, answer: string) => void;
}

//Create a context with a default value 
const AnswerContext = createContext<AnswersContextType | undefined>(undefined)

//Custome hook to  use the context
export const useAnswer = () => {
    const context = useContext(AnswerContext)
    if (!context) {
        throw new Error("userAnswers must be used within an Answer")
    }
    return context
}

//Provider component to wrap around the main app
export const AnswerProvider: React.FC<{children: ReactNode}> = ({ children }) => {
    const [ answers, setAnswer ] = useState<Record<string, string>>({})

    const updateAnswers = (question: string, answer:string) => {
        setAnswer(prev => ({...prev, [question]: answer}))
    }

    return (
        <AnswerContext.Provider value={{answers, updateAnswers}}>
            {children}
        </AnswerContext.Provider>
    )
}

