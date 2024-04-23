import React from 'react';

interface ITh {
  children: React.ReactNode
}
const Th: React.FC<ITh> = ({ children }) => {
  return <th className="p-3 font-semibold text-xs">{children}</th>
}

export default Th;