import React from 'react';
import skillsData from '../skill_data.json'; // Import JSON data
import { useAnswer } from './AnswerContext';
import academicCap from '../assets/academic-cap.svg';
import { useNavigate } from 'react-router-dom';
import StyledButton from './StyledButton';

interface Skill {
  name: string;
  description: string;
}

interface RoleAnswerOption {
  role: string;
  skills: Skill[];
}

interface SizeAnswerOption {
  size: string;
  skills: Skill[];
}

interface SectorAnswerOption {
  sector: string;
  skills: Skill[]
}

type AnswerOption = RoleAnswerOption | SizeAnswerOption | SectorAnswerOption

const isRoleAnswerOption = (option: AnswerOption): option is RoleAnswerOption =>{
  return (option as RoleAnswerOption).role !== undefined
}

const isSizeAnswerOption = (option: AnswerOption): option is SizeAnswerOption => {
  return (option as SizeAnswerOption).size !== undefined
}

const isSectorAnswerOption = (option: AnswerOption): option is SectorAnswerOption => {
  return (option as SectorAnswerOption).sector !== undefined
}


const SkillBoard: React.FC = () => {
  const { answers } = useAnswer()
  const navigate = useNavigate()

  const collectSkills = () => {
    const collectedSkills: Skill [] = []
    for (const question of skillsData.questions) {
      console.log('Answers:', answers);
      console.log('Current question:', question.question);

      // Ensure the key for the question matches exactly with the key in answers
      const answer = answers[question.question];
      console.log('Answer for the question:', answer);

      const answerOption = question.answerOptions.find((opt: AnswerOption) => {
        if (isRoleAnswerOption(opt)) {
          return opt.role === answer
        } else if (isSizeAnswerOption(opt)) {
          return opt.size === answer
        } else if (isSectorAnswerOption(opt)) {
          return opt.sector === answer
        }
      })
      
      if (answerOption) {
        console.log('Found matching answer option:', answerOption);
        collectedSkills.push(...answerOption.skills)
      } else {
        console.log('No matching answer option:', question.question)
      }
    }
    return collectedSkills
  }

  const skills = collectSkills()

  const handleNextButton = () => {
        navigate('/offboarding')
    }

  return (
    <div>
      <div className='px-6 pt-8 md:px-20 md:pt-16 md:mb-8'>
        <h3 className='font-semibold text-xl md:text-3xl md:leading-36'>Your Skills Leaderboard:</h3>
        <p className='font-semibold text-xl md:text-3xl'>Check out the top 5 skills needed in your field</p>
      </div>
      <ul className='md:grid md:grid-cols-2 md:px-20 xl:grid-cols-3 md:gap-4'>
        {skills.map(skill => (
          <li key={skill.name} className='border-2 m-6 p-6 rounded-10 md:m-2 md:h-48 xl:p-8'>
            <div className='flex items-center mb-2 gap-x-2'>
              <img src={academicCap} alt='academic cap'/>
              <h3 className='font-semibold text-base md:text-lg'>{skill.name}</h3>
            </div>
            <p className='text-sm md:text-base'>{skill.description}</p>
          </li>
        ))}
        <div className='flex justify-end m-20'>
        <StyledButton children='Next' onClick={handleNextButton} style={`bg-lightPurple border-2 border-lightPurple rounded-lg text-black text-xs md:text-base xl:text-xl font-normal hp-1.5 px-5 md:py-2 md:px-7`}/>
        </div>
      </ul>
    </div>

  )
}

export default SkillBoard;
