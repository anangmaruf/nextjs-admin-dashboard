import React from 'react';

export interface IBPrimaryProps {
  id?: string;
  label: string;
  onClick: () => void;
  type: 'button' | 'submit' | 'reset';
  className?: string;
  children?: React.ReactNode;
}

const BPrimary: React.FC<IBPrimaryProps> = ({
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
      className={`font-semibold text-white bg-primary py-2 px-8 rounded active:bg-blue-600 text-base outline-none focus:outline-none hover:shadow-lg ease-linear transitio-all duration-150 ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
      {label}
    </button>
  );
};

export default BPrimary;
