import React from 'react';

interface CareerSwitcherProps {
  label: string;
}

const CareerSwitcher: React.FC<CareerSwitcherProps> = ({label}) => {
  return (
    <div className="flex items-center p-2 mt-4 md:mt-6 border border-gray-300 rounded-md p-10">
      <div className="h-5 w-5">
        <img 
          className="bg-yellow p-1 rounded-md"
          src="src/assets/checkmark.png"
          alt="a checkmark in a small yellow box"
        />
      </div>
      <div className="text-lg pl-4">{label}</div>
    </div>
  );
};

export default CareerSwitcher;
