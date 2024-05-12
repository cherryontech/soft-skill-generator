import React from 'react';
import StyledButton from '../components/StyledButton'
import CareerSwitcher from './LandingPageComponents/CareerSwitcher';
import SimpleStepsBox from './LandingPageComponents/SimpleStepsBox';
import ImageWithText from './LandingPageComponents/ImagewithText';

// Order of applying Tailwind CSS Classes:
// Layout Properties -> Typography -> Background/Borders -> Flexbox & Grid -> Spacing -> Utility Classes

const LandingPage: React.FC = () => {
  return (
    // body div
    <div className="flex flex-col h-full justify-center bg-white">
      <h2 className="flex justify-center text-lg font-bold text-black">Unlock Your Potential with EmpowerMe</h2>

      {/* Container A: Images & paragraphs */}
      <div className="flex flex-col bg-white p-4 mb-4 items-start">

        {/* Section 1: Identify Your Transferable Skills */}
        <ImageWithText
          imageUrl="src/assets/overcoming_imposter_syndrome.png"
          altText="The silhouette of a person standing between two mountains in near dark as the sun begins to peek over the horizon behind them."
          header="Identify Your Transferable Skills"
          paragraph="Discover the skills that bridge the gap between your current role and your desired career path. Transferable skills are the key to transitioning successfully into a new field."
        />
        {/* Section 2: Confidently Communicate Your Skills */}
        <ImageWithText
          imageUrl="src/assets/identify_transferable_skills.png"
          altText="A person in orange headphones sits in a chair with chin resting in hand, scrawling in a notebook & concentrating."
          header="Confidently Communicate Your Skills"
          paragraph="Overcome self-doubt and insecurity by learning how to effectively communicate your achievements and capabilities. EmpowerMe helps you articulate your value with clarity and confidence."
        />

      </div>

      {/* Container B: Who is it for? */}
      <div className="w-full h-full bg-white flex flex-col">
        <div className="text-center mb-4">
          <h2 className="text-lg font-bold text-black">Who is it for?</h2>
        </div>

        {/* Column of check marks & career switcher texts */}
        <div className="flex flex-col mt-6 ml-10 mr-10">
          {/* checkmark row 1 */}
          <CareerSwitcher label="Career Switcher" />
          {/* checkmark row 2 */}
          <CareerSwitcher label="Career Switcher" />
          {/* checkmark row 3 */}
          <CareerSwitcher label="Career Switcher" />

        </div>
      </div>

      {/* Container B.5 - Start Assessment Button  */}
      <div className="flex justify-center items-center">
        <StyledButton>
          Start Assessment
        </StyledButton>
      </div>

      {/* Container C: Quote */}
      <div className="w-full h-full bg-white flex justify-center items-center">
        <div className="flex flex-row w-4/5 m-10 border border-gray-300 rounded-md p-4">
          <div className="flex justify-left text-lg text-black m-4">
            <img
              className="h-5 w-10 mr-5"
              src="src/assets/quotation_mark.png"
              alt="the first part of a set of light purple quotation marks"
              />
            </div>
            <div className="flex text-lg text-black mb-4 mt-6">
              <p>
                EmpowerMe is completely free because we believe everyone deserves a fair chance in this field. 
                Let's level the playing field together and make it effortless to harness and showcase your transferable skills in the tech industry.
              </p>
          </div>
        </div>
      </div>

      {/* Container 4: Complete in 3 simple steps */}
      <div className="flex flex-col w-full h-full justify-center items-center bg-white">
        <div className="text-center mb-4">
          <h2 className="text-lg font-bold text-black">Complete in 3 simple steps</h2>
        </div>

        <div className="flex flex-row m-4 justify-between">
          {/* Purple Container 1 */}
          <SimpleStepsBox 
              header="Answer Our Questions"
              paragraph="Answer a series of questions to help us gain a deeper understanding of your background and career goals."
              imageUrl="path_to_your_image.jpg"
              altText="Placeholder image."
              circleText='1'
            />
          {/* Purple Container 2 */}
          <SimpleStepsBox
            header="Share Your Experience"
            paragraph="Share your professional experiences and achievements with us to uncover valuable transferable skills."
            imageUrl="path_to_your_image.jpg"
            altText="Placeholder image."
            circleText='2'
            />
          {/* Purple Container 3 */}
          <SimpleStepsBox
            header="Get Personalized Results"
            paragraph="Receive personalized insights and recommendations tailored to empower your unique career journey."
            imageUrl="path_to_your_image.jpg"
            altText="Placeholder image."
            circleText='3'
            />
        </div>

      </div>

    </div>
  );
};

export default LandingPage;
