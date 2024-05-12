import React from 'react';

interface SimpleStepsBoxProps {
    header: string;
    paragraph: string;
    imageUrl: string;
    altText: string;

}

const SimpleStepsBox: React.FC<SimpleStepsBoxProps> = ({ header, paragraph, imageUrl, altText }) => {
  return (
    <div className="bg-darkPurple p-4 m-4 rounded-lg h-auto w-auto">
      <div className="flex justify-center items-center h-20 w-20 rounded-full overflow-hidden ring-1 ring-white bg-darkPurple">
        <img src={imageUrl} alt={altText} className="rounded-full object-cover" />
      </div>
      <div className="text-white mt-4">
        <h1>{header}</h1>
      </div>
      <div className="flex justify-center items-center text-white">
        <p className="flex justify-center">{paragraph}</p>
      </div>
    </div>
  );
};

export default SimpleStepsBox;

