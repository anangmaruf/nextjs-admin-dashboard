import React from 'react';

export interface ITheadProps {
  children?: React.ReactNode;
}

const Thead: React.FC<ITheadProps> = ({ children }) => {
  return (
    <thead className="align-bottom">
      <tr>{children}</tr>
    </thead>
  );
};

export default Thead;
