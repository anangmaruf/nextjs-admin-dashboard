import React from 'react';

interface ITbody {
  children: React.ReactNode
}
const Tbody: React.FC<ITbody> = ({ children }) => {
  return <tbody>{children}</tbody>
}

export default Tbody