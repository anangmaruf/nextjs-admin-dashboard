import React from 'react';

export interface IThProps {
  children?: React.ReactNode;
}

const Th: React.FC<IThProps> = ({ children }) => {
  return (
    <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-[.65rem] border-b-solid tracking-normal whitespace-nowrap text-slate-500 opacity-70">
      {children}
    </th>
  );
};

export default Th;
