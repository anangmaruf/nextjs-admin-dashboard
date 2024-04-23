import React from 'react';

interface ITable {
  children: React.ReactNode

}
const Table: React.FC<ITable> = ({ children }) => {
  return (
    <table className="table-auto rounded-lg w-full border border-neutral-200 text-left overflow-hidden">
      {children}
    </table>
  )
}

export default Table