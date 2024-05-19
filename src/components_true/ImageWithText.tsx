import React from 'react';

interface ImageWithTextProps {
    imageUrl: string,
    altText: string,
    header: string,
    paragraph: string,
}

const ImageWithText: React.FC<ImageWithTextProps> = ({ imageUrl, altText, header, paragraph }) => {
  return (
    <div className="md:w-full md:max-w-screen-lg flex flex-col xl:flex-row xl:justify-center items-center mb-4 ">
      {/* Left side: Image */}
      <div className='flex justify-center'>
        <img
          className="rounded-20 flex-1 max-w-xs h-28 md:h-32 xl:h-52 object-cover"
          src={imageUrl}
          alt={altText}
        />
      </div>
      {/* Right side: Header and Paragraph */}
      <div className="flex flex-col justify-center items-center xl:items-start xl:pl-12">
        <h2 className="text-xl font-semibold text-black mb-2 text-center mt-3.5 xl:text-left xl:text-txt32 xl:pb-6">{header}</h2>
        <p className="text-xs text-black mb-4 text-center md:w-6/12 xl:text-left xl:text-xl xl:w-full">{paragraph}</p>
      </div>
    </div>
  );
};

export default ImageWithText;
