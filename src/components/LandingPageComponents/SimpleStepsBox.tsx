import React from 'react';

interface SimpleStepsBoxProps {
  header: string;
  paragraph: string;
  imageUrl: string;
  altText: string;
  circleText: string; // single character to be displayed inside the circle
}

const SimpleStepsBox: React.FC<SimpleStepsBoxProps> = ({
  header,
  paragraph,
  imageUrl,
  altText,
  circleText,
}) => {
  return (
    <div className="relative flex flex-col items-center bg-darkPurple p-5 m-5 rounded-lg h-full w-full">
      {/* Small Yellow Circle in the Upper Left Corner */}
      <div
        className="absolute top-1 left-1 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          width: '2rem',
          height: '2rem',
          borderRadius: '50%',
          backgroundColor: 'yellow',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <span className="text-black text-sm font-bold">{circleText}</span>
      </div>

      {/* Image */}
      <div className="flex justify-center items-center h-20 w-20 rounded-full overflow-hidden ring-1 ring-white bg-darkPurple">
        <img src={imageUrl} alt={altText} className="rounded-full object-cover" />
      </div>

      {/* Content */}
      <div className="text-white mt-5 mb-2">
        <h1>{header}</h1>
      </div>
      <div className="flex justify-center items-center text-white">
        <p className="flex justify-center">{paragraph}</p>
      </div>
    </div>
  );
};

export default SimpleStepsBox;
