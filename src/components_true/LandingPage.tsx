import React from 'react';
import CareerSwitcher from './CareerSwitcher';
import SimpleStepsBox from './SimpleStepsBox';
import ImageWithText from './ImageWithText';
import Header from './Header';
import FloatingButton from './FloatingButton';

import identify_transferable_skills from '../assets/identify_transferable_skills.png';
import communicate_your_skills_with_confidence from '../assets/communicate_your_skills_with_confidence.png';

import answer_our_questions from '../assets/answer_our_questions.png';
import share_your_experience from '../assets/share_your_experience.png'
import get_personalized_results from '../assets/get_personalized_results.png'

import quotation_mark from '../assets/quotation_mark.png';
import Footer from './Footer';
import logo from '../assets/logo.jpg';


// Order of applying Tailwind CSS Classes:
// Layout Properties -> Typography -> Background/Borders -> Flexbox & Grid -> Spacing -> Utility Classes

const LandingPage: React.FC = () => {
  return (
    // body div
    <>
    <FloatingButton />
    <Header />
    <div className="flex flex-col h-full justify-center bg-white">
      <div className='flex justify-center items-center'>
        <h1 className="text-xl font-semibold text-black my-26 mx-2 md:mt-70 md:text-3xl block text-center xl:text-5xl">Unlock your potential with EmpowerMe</h1>
      </div>
      {/* Container A: Images & paragraphs */}
      <div className="flex flex-col justify-center items-center bg-white px-6 pb-6 mb-4">

        {/* Section 1: Identify Your Transferable Skills */}
        <ImageWithText
          imageUrl={identify_transferable_skills}
          altText="The silhouette of a person standing between two mountains in near dark as the sun begins to peek over the horizon behind them."
          header="Identify your transferable skills"
          paragraph="Transitioning to a new industry can be challenging, especially when your experience doesn't directly align with the new field. EmpowerMe helps you identify your transferable skills and bridge the gap between your current role and your desired career path."
        />
        {/* Section 2: Confidently Communicate Your Skills */}
        <ImageWithText
          imageUrl={communicate_your_skills_with_confidence}
          altText="A person in orange headphones sits in a chair with chin resting in hand, scrawling in a notebook & concentrating."
          header="Communicate your skills with confidence"
          paragraph="Overcome self-doubt and insecurity by learning how to effectively communicate your achievements and capabilities. EmpowerMe helps you articulate your value with clarity and confidence."
        />

      </div>

      {/* Container B: Who is it for? */}
      <div className="w-full h-full bg-white flex flex-col">
        <div className="text-center">
          <h1 className="text-xl font-bold text-black md:text-2xl xl:text-5xl xl:pt-10">Who is it for?</h1>
        </div>

        {/* Column of check marks & career switcher texts */}
        <div className="flex flex-col mt-6 mx-10 md:mx-20">
          {/* checkmark row 1 */}
          <CareerSwitcher label="Career Changers" />
          {/* checkmark row 2 */}
          <CareerSwitcher label="Recent Graduates" />
          {/* checkmark row 3 */}
          <CareerSwitcher label="Boot Camp Alumni" />

        </div>
      </div>

      {/* Container C: Quote */}
      <div className="w-full h-full bg-white flex justify-center items-center mt-10 md:mt-24">
        <div className="flex flex-row w-4/5 mx-6 md:mx-0 border border-gray-300 rounded-md p-4 xl:px-36 xl:py-8 xl:justify-center">
          <div className="flex justify-left text-lg text-black mr-2 md:mr-0 xl:mr-6">
            {/* Quotation mark image */}
            <img
              className="h-5 w-10 mr-5"
              src={quotation_mark}
              alt="the first part of a set of light purple quotation marks"
              />
          </div>
            <div className="flex text-lg text-black mb-4 mt-6">
              <p className='text-center text-txt13 md:text-txt17 xl:text-xl'>
                EmpowerMe is completely free because we believe everyone deserves a fair chance in this field. 
                Let's level the playing field together and make it effortless to harness and showcase your transferable skills in the tech industry.
              </p>
            </div>
          </div>
        </div>

      {/* Container 4: Complete in 3 simple steps */}
      <div className="flex flex-col w-full h-full justify-center items-center mt-10 md:mt-24 mb-50 md:mb-70 xl:mb-100 bg-white">
        <div className="text-center mb-1.5">
          <h2 className="text-xl md:text-3xl font-semibold text-black xl:text-5xl">Complete in 3 simple steps</h2>
        </div>

        <div className="flex flex-col xl:flex-row w-60 md:w-72 xl:w-11/12 justify-evenly items-center">
          {/* Purple Container 1 */}
          <SimpleStepsBox 
              header="Answer our questions"
              paragraph="Answer a series of questions to help us gain a deeper understanding of your background and career goals."
              imageUrl={answer_our_questions}
              altText="An image cropped in a circle that shows table covered in papers with arms reaching in to write notes."
              circleText='1'
            /> 
          {/* Purple Container 2 */}
          <SimpleStepsBox
            className="xl:mx-6"
            header="Share your experience"
            paragraph="Share your professional experiences and achievements with us to uncover valuable transferable skills."
            imageUrl={share_your_experience}
            altText="An image cropped in a cirlce that shows hands being raised."
            circleText='2'
            />
          {/* Purple Container 3 */}
          <SimpleStepsBox
            header="Get personalized results"
            paragraph="Receive personalized insights and recommendations tailored to empower your unique career journey."
            imageUrl={get_personalized_results}
            altText="An image cropped in a circle that shows sticky notes on a wall."
            circleText='3'
            />
        </div>

      </div>

    </div>
    <Footer title={logo}/>
    </>
  );
};

export default LandingPage;
