      {/* Container A: What do we do? */}
      <div className="text-center mb-4">
        <h2 className="text-lg font-bold text-black-800">What do we do?</h2>
      </div>

      {/* Container B: Images & paragraphs */}
      <div className="flex flex-col md:flex-row bg-200 p-4 mb-4 items-center">

        {/* Section 1: Overcoming Imposter Syndrome*/}
        {/* 1.1: Image - left side */}

        {/* "md:w-1/3": Sets width to 1/3 of parent width on medium screens & larger
            "flex justify-center": Uses flexbox to horizontally center the child elements within this container
            "pl-12": Adds a left padding of 48px (12 units on the Tailwind CSS scale)
            "mb-4 md:mb-0": Adds bottom margin of 16px (4 units) to all screen sizes. On medium screens & larger, bottom margin is set to 0 (no margin).
        */}
        <div className="md:w-1/3 flex justify-center pl-12 mb-4 md:mb-0">
          <img
            className="w-48 h-32 rounded-lg"
            src="src\assets\overcoming_imposter_syndrome.png"
            alt="Placeholder Image"
          />
        {/* 1.2: Header and Paragraph - right side */}
        <div className="md:w-2/3 md:pl-4">
            <br></br>
            <h3 className="pl-12 text-md font-semibold text-black-700 mb-2 text-left">Overcoming Imposter Syndrome</h3>
            <p className="pl-12 text-sm text-black-600 text-left">
              We help early-career developers facing imposter syndrome during the job application process. We foster self-assurance by helping users to identify and showcase their skills.
            </p>
          </div>
        </div>

        {/* Section 2: Identifying Transferable Skills */}
        {/* 2.1: Image - left side */}
        <div className="md:w-1/3 flex justify-center pl-12 mb-4 md:mb-0">
          <img
            className="w-48 h-32 rounded-lg"
            src="src\assets\identify_transferable_skills.png"
            alt="Placeholder Image"
          />
        {/* Subsection 2.2: Header and Paragraph - right side */}
        <div className="md:w-2/3 md:pl-4">
            <br></br>
            <h3 className="pl-12 text-md font-semibold text-black-700 mb-2 text-left">Identifying Transferable Skills</h3>
            <p className="pl-12 text-sm text-black-600 text-left">
              more inforLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>
        </div>
      </div>