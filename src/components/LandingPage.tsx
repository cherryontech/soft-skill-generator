import React from 'react';

// Order of applying Tailwind CSS Classes:
// Layout Properties -> Typography -> Background/Borders -> Flexbox & Grid -> Spacing -> Utility Classes

const LandingPage: React.FC = () => {
  return (
    // body div
    <div className="flex flex-col h-screen justify-center items-center bg-white-100">

      {/* Container A: What do we do? */}
      <div className="text-center mb-4">
        <h2 className="text-lg font-bold text-black-800">What do we do?</h2>
      </div>

    {/* Container B: Images & paragraphs */}
    <div className="flex flex-col md:flex-row bg-200 p-4 mb-4 items-start">

      {/* Section 1: Overcoming Imposter Syndrome */}
      <div className="md:w-full md:max-w-screen-lg flex items-start md:items-center mb-12">
        {/* 1.1: Image - left side */}
        <div className="pr-12">
          <img
            className="w-full h-auto rounded-lg"
            src="src\assets\overcoming_imposter_syndrome.png"
            alt="Overcoming Imposter Syndrome"
          />
        </div>
        {/* 1.2: Header and Paragraph - right side */}
        <div className="flex flex-col">
          <h3 className="text-md font-semibold text-black-700 mb-2">Overcoming Imposter Syndrome</h3>
          <p className="text-sm text-black-600 mb-4">
            We help early-career developers facing imposter syndrome during the job application process. We foster self-assurance by helping users to identify and showcase their skills.
          </p>
        </div>
      </div>

      {/* Section 2: Identifying Transferable Skills */}
      <div className="md:w-full md:max-w-screen-lg flex items-start md:items-center">
        {/* 2.1: Image - left side */}
        <div className="pr-12">
          <img
            className="w-full h-auto rounded-lg"
            src="src\assets\identify_transferable_skills.png"
            alt="Identifying Transferable Skills"
          />
        </div>
        {/* 2.2: Header and Paragraph - right side */}
        <div className="flex flex-col">
          <h3 className="text-md font-semibold text-black-700 mb-2">Identifying Transferable Skills</h3>
          <p className="text-sm text-black-600 mb-4">
            More information about identifying transferable skills goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
        </div>
      </div>
    </div>





{/* TODO BELOW: */}
      {/* Section 2 */}
      <div className="w-full h-1/4 bg-green-200 flex justify-center items-center">
        Section 2
      </div>

      {/* Section 3 */}
      <div className="w-full h-1/4 bg-yellow-200 flex justify-center items-center">
        Section 3
      </div>

      {/* Section 4 */}
      <div className="w-full h-1/4 bg-pink-200 flex justify-center items-center">
        Section 4
      </div>
    </div>
  );
};

export default LandingPage;
