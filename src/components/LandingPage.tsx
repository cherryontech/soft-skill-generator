import React from 'react';

const LandingPage: React.FC = () => {
  return (
    // body div
    <div className="flex flex-col h-screen justify-center items-center bg-white-100">

      {/* Section 1: What do we do? */}
      <div className="text-center mb-4">
        <h2 className="text-lg font-bold text-black-800">What do we do?</h2>
      </div>

      {/* Subsections stacked vertically */}

       {/* Subsection 1 */}
      <div className="flex flex-col md:flex-row bg-gray-200 p-4 mb-4 items-center">
        {/* Placeholder Image - left side of subsection 1 */}
        <div className="md:w-1/3 flex justify-center mb-4 md:mb-0">
          <img
            className="w-48 h-32 rounded-lg"
            src="https://via.placeholder.com/300x200"
            alt="Placeholder Image"
          />
        </div>

        {/* Header and Paragraph - right side of subsection 1 */}
        <div className="md:w-2/3 md:pl-4">
          <h3 className="text-md font-semibold text-black-700 mb-2">Overcoming Imposter Syndrome</h3>
          <p className="text-sm text-black-600">
            We help early-career developers facing imposter syndrome during the job application process. We foster self-assurance by helping users to identify and showcase their skills.
          </p>
        </div>

        {/* Subsection 2 */}
        <div className="bg-gray-200 p-4">
          <h3 className="text-md font-semibold text-gray-700">Service 2</h3>
          <p className="text-sm text-gray-600">
            This is the second service we offer.
          </p>
        </div>
      </div>


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
