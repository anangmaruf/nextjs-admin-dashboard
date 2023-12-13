import React from 'react';

export interface ITdProps {
  className?: string;
  children?: React.ReactNode;
}

const Td: React.FC<ITdProps> = ({ children, className }) => {
  return (
    <td
      className={`p-4 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent text-sm ${className}`}
    >
      {children}
    </td>
  );
};

export default Td;
