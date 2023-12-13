import React from 'react';

export interface ITrProps {
  children?: React.ReactNode;
}

const Tr: React.FC<ITrProps> = ({ children }) => {
  return (
    <tr className="p-4 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent text-sm hover:bg-gray-200">
      {children}
    </tr>
  );
};

export default Tr;
