import React from 'react';

interface SimpleStepsBoxProps {
  header: string;
  paragraph: string;
  imageUrl: string;
  altText: string;
  circleText: string; // single character to be displayed inside the circle
  className?: string;
}

const SimpleStepsBox: React.FC<SimpleStepsBoxProps> = ({
  header,
  paragraph,
  imageUrl,
  altText,
  circleText,
  className = ''
}) => {
  return (
    <div className={`relative flex flex-col items-center bg-darkPurple mt-5 md:mt-30 p-30 rounded-lg h-auto w-full ${className}`}>
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
        <h4 className='text-base md:text-xl xl:text-txt28'>{header}</h4>
      </div>
      <div className="flex justify-center items-center text-white">
        <p className="flex justify-center text-xs md:text-base xl:text-lg">{paragraph}</p>
      </div>
    </div>
  );
};

export default SimpleStepsBox;
