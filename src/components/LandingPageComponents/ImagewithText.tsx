import React from 'react';

interface ImageWithTextProps {
    imageUrl: string,
    altText: string,
    header: string,
    paragraph: string,
}

const ImageWithText: React.FC<ImageWithTextProps> = ({ imageUrl, altText, header, paragraph }) => {
  return (
    <div className="md:w-full md:max-w-screen-lg flex flex-row items-start md:items-center">
      {/* Left side: Image */}
      <div className="pr-12">
        <img
          className="w-auto h-auto rounded-lg"
          src={imageUrl}
          alt={altText}
        />
      </div>
      {/* Right side: Header and Paragraph */}
      <div className="flex flex-col">
        <h3 className="text-md font-semibold text-black mb-2 text-left">{header}</h3>
        <p className="text-sm text-black mb-4 text-left">{paragraph}</p>
      </div>
    </div>
  );
};

export default ImageWithText;
