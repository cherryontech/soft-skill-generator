import React from 'react';
import StyledButton from '../components/StyledButton'

// Order of applying Tailwind CSS Classes:
// Layout Properties -> Typography -> Background/Borders -> Flexbox & Grid -> Spacing -> Utility Classes

const LandingPage: React.FC = () => {
  return (
    // body div
    <div className="flex flex-col h-screen justify-center bg-white">

      {/* 'What do we do?' Header */}
      <div className="text-center mb-4">
        <h2 className="text-lg font-bold text-black">Unlock Your Potential with EmpowerMe</h2>

            {/* Container A: Images & paragraphs */}
            <div className="flex flex-col bg-white p-4 mb-4 items-start">

              {/* Section 1: Identify Your Transferable Skills */}
              <div className="md:w-full flex items-start items-center mb-12">
                {/* 1.1: Image - left side */}
                <div className="pr-12">
                  <img
                    className="w-auto h-auto rounded-lg"
                    src="src/assets/overcoming_imposter_syndrome.png"
                    alt="Identify Your Transferable Skills"
                  />
                </div>
                {/* 1.2: Header and Paragraph - right side */}
                <div className="flex flex-col">
                  <h3 className="text-md font-semibold text-black mb-2 text-left">Identify Your Transferable Skills</h3>
                  <p className="text-sm text-black mb-4 text-left">
                  Discover the skills that bridge the gap between your current role and your desired career path. Transferable skills are the key to transitioning successfully into a new field.
                  </p>
                </div>
              </div>

              {/* Section 2: Confidently Communicate Your Skills */}
              <div className="md:w-full md:max-w-screen-lg flex items-start md:items-center">
                {/* 2.1: Image - left side */}
                <div className="pr-12">
                  <img
                    className="w-auto h-auto rounded-lg"
                    src="src/assets/identify_transferable_skills.png"
                    alt="Identifying Transferable Skills"
                  />
                </div>
                {/* 2.2: Header and Paragraph - right side */}
                <div className="flex flex-col">
                  <h3 className="text-md font-semibold text-black mb-2 text-left">Confidently Communicate Your Skills</h3>
                  <p className="text-sm text-black mb-4 text-left">
                  Overcome self-doubt and insecurity by learning how to effectively communicate your achievements and capabilities. EmpowerMe helps you articulate your value with clarity and confidence.
                  </p>
                </div>
              </div>
              </div>
            </div>


{/* TODO BELOW: */}
      {/* Container B: Who is it for? */}
      <div className="w-full h-full bg-white flex flex-col">
        <div className="text-center mb-4">
          <h2 className="text-lg font-bold text-black">Who is it for?</h2>
        </div>

        {/* Column of check marks & career switchers */}
        <div className="flex flex-col mt-6 ml-10 items-start">
          {/* checkmark row 1 */}
          <div className="flex items-center p-2 mb-2">
            <div className="h-5 w-5">
              <img 
                className="bg-yellow p-1 rounded-md"
                src="src/assets/checkmark.png"
                alt="a checkmark in a small yellow box"
              />
            </div>
            <div className="text-lg pl-4">Career Switcher</div>
          </div>

          {/* checkmark row 2 */}
          <div className="flex items-center p-2 mb-2">
            <div className="h-5 w-5">
              <img 
                className="bg-yellow p-1 rounded-md"
                src="src/assets/checkmark.png"
                alt="a checkmark in a small yellow box"
              />
            </div>
            <div className="text-lg pl-4">Career Switcher</div>
          </div>

          {/* checkmark row 3 */}
          <div className="flex items-center p-2 mb-2">
            <div className="h-5 w-5">
              <img 
                className="bg-yellow p-1 rounded-md"
                src="src/assets/checkmark.png"
                alt="a checkmark in a small yellow box"
              />
            </div>
            <div className="text-lg pl-4">Career Switcher</div>
          </div>
        </div>
      </div>

      {/* Container B.5 - Start Assessment Button  */}
      <div className="flex justify-center items-center h-screen">
        <StyledButton>
          Start Assessment
        </StyledButton>
      </div>

      {/* Container C: Quote */}
      <div className="w-full h-full bg-white flex justify-center items-center">
        <div className="flex flex-row w-4/5 m-10">
          <div className="flex justify-left text-lg text-black m-4">
            <img
              className="h-5 w-10 mr-5"
              src="src/assets/quotation_mark.png"
              alt="the first part of a set of light purple quoation marks"
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
      <div className="flex flex-col h-screen w-full h-full justify-center items-center bg-white">
        <div className="text-center mb-4">
          <h2 className="text-lg font-bold text-black">Complete in 3 simple steps</h2>
        </div>

        <div className="flex flex-row m-4 justify-between">

          <div className="bg-darkPurple p-4 m-4 rounded-lg h-auto w-auto">
            <div className="flex justify-center items-center h-20 w-20 rounded-full overflow-hidden ring-1 ring-white bg-darkPurple">
              <img src="path_to_your_image.jpg" alt="Placeholder" 
              className="rounded-full object-cover" />
            </div>
            <div className="text-white mt-4">
              <h1>Answer Our Questions</h1>
            </div>
            <div className="flex justify-center items-center text-white">
              <p className="flex justify-center">
                Answer a series of questions to help us gain a deeper understanding of your background and career goals.
              </p>
            </div>
          </div>

          <div className="bg-darkPurple p-4 m-4 rounded-lg h-auto w-auto">
            <div className="flex justify-center items-center h-20 w-20 rounded-full overflow-hidden ring-1 ring-white bg-darkPurple">
              <img src="path_to_your_image.jpg" alt="Placeholder" 
              className="rounded-full object-cover" />
            </div>
            <div className="text-white mt-4">
              <h1>Share Your Experience</h1>
            </div>
            <div className="flex justify-center items-center text-white">
              <p className="flex justify-center">
                Share your professional experiences and achievements with us to uncover valuable transferable skills.
              </p>
            </div>
          </div>

          <div className="bg-darkPurple p-4 m-4 rounded-lg h-auto w-auto">
            <div className="flex justify-center items-center h-20 w-20 rounded-full overflow-hidden ring-1 ring-white bg-darkPurple">
              <img src="path_to_your_image.jpg" alt="Placeholder" 
              className="rounded-full object-cover" />
            </div>
            <div className="text-white mt-4">
              <h1>Get Personalized Results</h1>
            </div>
            <div className="flex justify-center items-center text-white">
              <p className="flex justify-center">
                Receive personalized insights and recommendations tailored to empower your unique career journey.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default LandingPage;
