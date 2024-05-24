import React from "react";

interface Props {
    onClick: () => void;
    children: string;
    style: string;
}

const Button: React.FC<Props> = ({
    onClick,
    children, 
  }) => {
    return (
        <button 
            onClick={onClick}
        >
        {children}
        </button>
    )
}

export default Button