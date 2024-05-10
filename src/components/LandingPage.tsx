import React from 'react';

// Order of applying Tailwind CSS Classes:
// Layout Properties -> Typography -> Background/Borders -> Flexbox & Grid -> Spacing -> Utility Classes

const LandingPage: React.FC = () => {
  return (
    // body div
    <div className="flex flex-col h-screen justify-center items-center bg-white-100">

      {/* 'What do we do?' Header */}
      <div className="text-center mb-4">
        <h2 className="text-lg font-bold text-black-800">Unlock Your Potential with EmpowerMe</h2>

            {/* Container A: Images & paragraphs */}
            <div className="flex flex-col bg-200 p-4 mb-4 items-start">

              {/* Section 1: Identify Your Transferable Skills */}
              <div className="md:w-full md:max-w-screen-lg flex items-start md:items-center mb-12">
                {/* 1.1: Image - left side */}
                <div className="pr-12">
                  <img
                    className="w-auto h-auto rounded-lg"
                    src="src\assets\overcoming_imposter_syndrome.png"
                    alt="Identify Your Transferable Skills"
                  />
                </div>
                {/* 1.2: Header and Paragraph - right side */}
                <div className="flex flex-col">
                  <h3 className="text-md font-semibold text-black-700 mb-2">Identify Your Transferable Skills</h3>
                  <p className="text-sm text-black-600 mb-4">
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
                    src="src\assets\identify_transferable_skills.png"
                    alt="Identifying Transferable Skills"
                  />
                </div>
                {/* 2.2: Header and Paragraph - right side */}
                <div className="flex flex-col">
                  <h3 className="text-md font-semibold text-black-700 mb-2">Confidently Communicate Your Skills</h3>
                  <p className="text-sm text-black-600 mb-4">
                  Overcome self-doubt and insecurity by learning how to effectively communicate your achievements and capabilities. EmpowerMe helps you articulate your value with clarity and confidence.
                  </p>
                </div>
              </div>
              </div>
            </div>


{/* TODO BELOW: */}
      {/* Container B: Who is it for? */}
      <div className="w-full h-1/4 bg-white-200 flex justify-center items-center">
        <div className="text-center mb-4">
          <h2 className="text-lg font-bold text-black-800">Who is it for?</h2>
        </div>
      </div>

      {/* Container C: Quote */}
      <div className="w-full h-1/4 bg-yellow-200 flex justify-center items-center">
        <div className="">
          <p className="text-sm text-black-600 mb-4">
            EmpowerMe is completely free because we believe everyone deserves a fair chance in this field. 
            Let's level the playing field together and make it effortless to harness and showcase your transferable skills in the tech industry.
          </p>
        </div>
      </div>

      {/* Container 4: Complete in 3 simple steps */}
      <div className="flex flex-col h-screen w-full h-1/4 justify-center items-center bg-white-200">
        <div className="text-center mb-4">
          <h2 className="text-lg font-bold text-black-800">Complete in 3 simple steps</h2>
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
