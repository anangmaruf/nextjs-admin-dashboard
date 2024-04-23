import React from 'react';

interface ITd {
  children: React.ReactNode
}
const Td: React.FC<ITd> = ({ children }) => {
  return <td className="px-3 py-2 border-b text-sm">{children}</td>
}

export default Td;