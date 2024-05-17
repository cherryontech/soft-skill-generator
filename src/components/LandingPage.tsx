import React from 'react';
import StyledButton from './StyledButton';
import CareerSwitcher from './CareerSwitcher';
import SimpleStepsBox from './SimpleStepsBox';
import ImageWithText from './ImageWithText';
import Header from './Header';

// Order of applying Tailwind CSS Classes:
// Layout Properties -> Typography -> Background/Borders -> Flexbox & Grid -> Spacing -> Utility Classes

const LandingPage: React.FC = () => {
  return (
    // body div
    <>
    {/* <Header /> */}
    <div className="flex flex-col h-full justify-center bg-white">
      <div className='flex justify-center items-center'>
        <h1 className="text-2xl font-bold text-black my-26 mx-2 block text-center">Unlock Your Potential with <br/>
        <span className="block text-center">EmpowerMe</span>
        </h1>
      </div>
      {/* Container A: Images & paragraphs */}
      <div className="flex flex-col justify-center items-center bg-white px-6 pb-6 mb-4">

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
        <div className="text-center">
          <h1 className="text-lg font-bold text-black">Who is it for?</h1>
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
      <div className="hidden md:flex md:justify-center md:items-center">
        <StyledButton style={`bg-lightPurple rounded-lg px-4 py-2.5 text-black text-lg font-semibold leading-6`}>
          Start Assessment
        </StyledButton>
      </div>

      {/* Container C: Quote */}
      <div className="w-full h-full bg-white flex justify-center items-center mt-10">
        <div className="flex flex-row w-4/5 mx-6 border border-gray-300 rounded-md p-4">
          <div className="flex justify-left text-lg text-black mr-4">
            {/* Quotation mark image */}
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
      <div className="flex flex-col w-full h-full justify-center items-center mt-10 mb-12 bg-white">
        <div className="text-center mb-1.5">
          <h1 className="text-lg font-bold text-black">Complete in 3 simple steps</h1>
        </div>

        <div className="flex flex-col md:flex-row w-9/12 justify-between">
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

        <div className="hidden md:flex md:justify-center md:items-center md:mb-20">
          <StyledButton style={`bg-lightPurple rounded-lg px-4 py-2.5 text-black text-lg font-semibold leading-6`}>
            Start Assessment
          </StyledButton>
        </div>

      </div>

    </div>
    </>
  );
};

export default LandingPage;
