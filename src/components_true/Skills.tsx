import skill_data from './skill_data.json';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import StyledButton from './StyledButton'
import Skill1 from '/src/assets/Skill1.jpg'
import Skill2 from '/src/assets/Skill2.jpg'
import Skill3 from '/src/assets/Skill3.jpg'
import Skill4 from '/src/assets/Skill4.jpg'
import Skill5 from '/src/assets/Skill5.jpg'

// create an array of skills images, map over array and populate with the index of the array
const Skills: React.FC = ({selectedAnswer}) => {
    const navigate = useNavigate()

    const handleNextButton = () => {
        navigate('/finalscreen')
    }
  return (
    <div className="p-8">
      {/* Heading and Subheading */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-left">Your skills leader board:</h1>
        <h2 className="text-xl font-semibold text-left mt-2">Check out the top 5 skills needed in your field</h2>
      </header>

{/* //return 1 box populated with the image index and skill*/}
      {/* Boxes Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Box 1 */}
        <div className="border border-gray-200 p-4 flex flex-col items-start">
          <div className="flex items-center mb-2">
            <img src={Skill1} alt="Icon 1" className="h-8 w-15 mr-2"/>
            <h2>{skill_data.Q1Questions.selectedAnswer.skill[0].name}</h2>
            {/* We need to be able to check if selectedAnswer == anything from inside Q1Questiond 
            then, print that as a variable and the skills can be printed */}
            
            <p>{skill_data.description}</p>
        </div>
        {/* Box 2 */}
        <div className="border border-gray-200 p-4 flex flex-col items-start">
          <div className="flex items-center mb-2">
            <img src={Skill2} alt="Icon 2" className="h-6 w-6 mr-2"/>
            <h2>{skill_data.name}</h2>
            <p>{skill_data.description}</p>
            <h3 className="text-lg font-semibold">Box Heading 2</h3>
          </div>
          <p className="text-sm">This is the paragraph text for box 2. It provides more detail about the content.</p>
        </div>
        {/* Box 3 */}
        <div className="border border-gray-200 p-4 flex flex-col items-start">
          <div className="flex items-center mb-2">
            <img src={Skill3} alt="Icon 3" className="h-6 w-6 mr-2"/>
            <h2>{skill_data.name}</h2>
            <p>{skill_data.description}</p>
            <h3 className="text-lg font-semibold">Box Heading 3</h3>
          </div>
          <p className="text-sm">This is the paragraph text for box 3. It provides more detail about the content.</p>
        </div>
        {/* Box 4 */}
        <div className="border border-gray-200 p-4 flex flex-col items-start">
          <div className="flex items-center mb-2">
            <img src={Skill4} alt="Icon 4" className="h-6 w-6 mr-2"/>
            <h2>{skill_data.name}</h2>
            <p>{skill_data.description}</p>
            <h3 className="text-lg font-semibold">Box Heading 4</h3>
          </div>
          <p className="text-sm">This is the paragraph text for box 4. It provides more detail about the content.</p>
        </div>
        {/* Box 5 */}
        <div className="border border-gray-200 p-4 flex flex-col items-start">
          <div className="flex items-center mb-2">
            <img src={Skill5} alt="Icon 5" className="h-6 w-6 mr-2"/>
            <h2>{skill_data.name}</h2>
            <p>{skill_data.description}</p>
            <h3 className="text-lg font-semibold">Box Heading 5</h3>
          </div>
          <p className="text-sm">This is the paragraph text for box 5. It provides more detail about the content.</p>
        </div>
      </div>
    </div>

      {/* Button */}
      <div className="flex justify-end mt-6">
      <StyledButton children='Next' onClick={handleNextButton} style={`bg-lightPurple border-2 border-lightPurple rounded-lg text-black text-xs md:text-base xl:text-xl font-normal p-1.5 px-5 md:py-2 md:px-7`}/>
      </div>
    </div>
  );
}

export default Skills