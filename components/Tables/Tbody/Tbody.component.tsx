import React from 'react';

export interface ITbodyProps {
  children?: React.ReactNode;
}

const Tbody: React.FC<ITbodyProps> = ({ children }) => {
  return <tbody className="align-bottom">{children}</tbody>;
};

export default Tbody;
