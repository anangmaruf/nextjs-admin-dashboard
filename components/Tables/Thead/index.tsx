import React from 'react';

interface IThead {
  children: React.ReactNode
}
const Thead: React.FC<IThead> = ({ children }) => {
  return (
    <thead>
      <tr className="bg-[#eee] border-b border-neutral-200">
        { children }
      </tr>
    </thead>
  )
}

export default Thead