import React from 'react';
import { useNavigate } from 'react-router-dom';


const FloatingButton: React.FC = () => {
    const navigate= useNavigate();

  const handleFloatingButton = () => {
    navigate('/screenerquestion1');
}
  return (
    <button
      className='fixed top-4 right-4 md:top-8 md:right-8 bg-lightPurple rounded-lg px-4 py-2.5 text-black text-lg font-semibold leading-6'
      aria-label="Floating Action Button"
      onClick={handleFloatingButton}

    >Start Assessment
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4v16m8-8H4"
        />
    </button>
  );
};

export default FloatingButton;
