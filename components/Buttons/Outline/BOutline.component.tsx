import React from 'react';

export interface IBOutlineProps {
  id?: string;
  label: string;
  onClick: () => void;
  type: 'button' | 'submit' | 'reset';
  className?: string;
  children?: React.ReactNode;
}

const BOutline: React.FC<IBOutlineProps> = ({
  id,
  label,
  onClick,
  type,
  className,
  children,
}) => {
  return (
    <button
      id={id}
      className={`font-semibold text-blue-500 bg-transparent py-2 px-8 rounded active:bg-blue-600 text-base outline-none border-2 border-blue-500 focus:outline-none hover:shadow-lg hover:text-white hover:bg-blue-500 ease-linear transitio-all duration-150 ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
      {label}
    </button>
  );
};

export default BOutline;
