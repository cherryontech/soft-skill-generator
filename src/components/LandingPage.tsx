import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-4 bg-gray-100">
      {/* Intro Section */}
      <section className="flex justify-between items-center w-full mb-4">
        <div className="flex gap-4">
          <img className="w-12 h-12" src="icon.svg" alt="Icon" />
          <img className="w-32 h-32 rounded-lg" src="unsplash-image.png" alt="Unsplash Image" />
        </div>
        <div className="text-xl font-semibold">
          Have You Ever Struggled to Communicate Your Full Potential?
        </div>
        <p className="text-sm">
          We provide assistance to early-career developers facing imposter syndrome during job applications,
          helping them identify and showcase their skills confidently.
        </p>
      </section>

      {/* Services Section */}
      <section className="flex flex-col gap-4">
        <div className="bg-yellow-300 p-4 rounded-lg">
          <h2 className="text-lg font-semibold">Overcoming Imposter Syndrome</h2>
          <p className="text-sm">
            Our goal is to empower developers by fostering self-assurance during the job application process.
          </p>
        </div>
        <div className="bg-yellow-300 p-4 rounded-lg">
          <h2 className="text-lg font-semibold">Identifying Transferable Skills</h2>
          <p className="text-sm">
            We help in recognizing and showcasing transferable skills essential for career growth.
          </p>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="flex flex-col gap-4">
        <div className="text-xl font-semibold">Who is it for?</div>
        <div className="flex flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-gray-400"></div>
            <p className="text-sm">Early-career developers seeking job opportunities.</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-gray-400"></div>
            <p className="text-sm">Individuals struggling with imposter syndrome.</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-gray-400"></div>
            <p className="text-sm">Anyone looking to enhance their communication skills.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
