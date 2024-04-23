import React from 'react';

interface ITr {
  children: React.ReactNode
}
const Tr: React.FC<ITr> = ({ children }) => {
  return <tr className="relative border-b border-neutral-200 bg-white cursor-pointer">{children}</tr>
}

export default Tr;