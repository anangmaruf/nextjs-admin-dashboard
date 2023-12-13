import React from 'react';

export interface ITableProps {
  children?: React.ReactNode;
}

const Table: React.FC<ITableProps> = ({ children }) => {
  return (
    <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
      {children}
    </table>
  );
};

export default Table;
