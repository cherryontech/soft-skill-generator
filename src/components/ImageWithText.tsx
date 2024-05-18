import React from 'react';

interface ImageWithTextProps {
    imageUrl: string,
    altText: string,
    header: string,
    paragraph: string,
}

const ImageWithText: React.FC<ImageWithTextProps> = ({ imageUrl, altText, header, paragraph }) => {
  return (
    <div className="md:w-full md:max-w-screen-lg flex flex-col xl:flex-row items-center mb-4">
      {/* Left side: Image */}
      <div className='flex justify-center'>
        <img
          className="w-4/6 rounded-20 "
          src={imageUrl}
          alt={altText}
        />
      </div>
      {/* Right side: Header and Paragraph */}
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-xl font-semibold text-black mb-2 text-center mt-3.5">{header}</h2>
        <p className="text-xs text-black mb-4 text-center md:w-6/12">{paragraph}</p>
      </div>
    </div>
  );
};

export default ImageWithText;
