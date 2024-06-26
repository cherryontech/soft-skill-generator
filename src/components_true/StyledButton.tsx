import React from 'react';

interface ButtonProps {
    onClick?: () => void; // Optional onClick event handler
    children: React.ReactNode; // Required children (button label)
    style: string; // Optional className for additional styling
  }
  
  const Button: React.FC<ButtonProps> = ({ onClick, children, style }) => {
    return (
      <button
        // className={`bg-lightPurple rounded-lg px-4 py-2.5 text-black text-lg font-semibold leading-6 ${className}`}
        onClick={onClick}
        className={style}
      >
        {children}
      </button>
    );
  };
  
  export default Button;