'use client';
import { BOutline, BSecondary } from '@/components/Buttons';
import { Table, Tbody, Td, Th, Thead, Tr } from '@/components/Tables';
import React from 'react';
import { FaEdit, FaPlusCircle, FaTrash } from 'react-icons/fa';

const _GroupButtons = () => {
  return (
    <div className="flex items-center gap-2">
      <BOutline
        id="adddata"
        type="button"
        onClick={() => alert('add data')}
        label="Add Data"
        className="flex items-center gap-2 text-xs border-[1px]"
      >
        <FaPlusCircle size={15} className="text-blue" />
      </BOutline>
      <BSecondary
        id="trash"
        type="button"
        onClick={() => alert('add data')}
        label="Trash"
        className="flex items-center gap-2 text-xs hover:bg-rose-700"
      >
        <FaTrash size={15} />
      </BSecondary>
    </div>
  );
};

const _ActionButtons = () => {
  return (
    <div className="inline-flex items-center gap-2 w-fit">
      <BSecondary
        id="edit"
        type="button"
        onClick={() => alert('Edit data')}
        label="Edit"
        className="flex items-center gap-2 text-xs bg-amber-300 hover:bg-amber-500"
      >
        <FaEdit size={15} />
      </BSecondary>
      <BSecondary
        id="trash"
        type="button"
        onClick={() => alert('Delete data')}
        label="Delete"
        className="flex items-center gap-2 text-xs !bg-rose-500 hover:bg-rose-700"
      >
        <FaTrash size={15} />
      </BSecondary>
    </div>
  );
};

const _TableContainer = () => {
  return (
    <Table>
      <Thead>
        <Th>No</Th>
        <Th>Name</Th>
        <Th>Created At</Th>
        <Th>Action</Th>
      </Thead>
      <Tbody>
        <Tr>
          <Td>1</Td>
          <Td>Jhon Doe</Td>
          <Td>22/12/23</Td>
          <Td className="w-8">{_ActionButtons()}</Td>
        </Tr>
        <Tr>
          <Td>1</Td>
          <Td>Jhon Doe</Td>
          <Td>22/12/23</Td>
          <Td className="w-8">{_ActionButtons()}</Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

const Blog = () => {
  return (
    <section className="my-4">
      <div className="relative bg-white w-full rounded-md drop-shadow-md">
        <div className="flex items-center justify-between p-3">
          <h4 className="text-lg">Blog Data</h4>
          {_GroupButtons()}
        </div>
        <div className="pt-5">{_TableContainer()}</div>
      </div>
    </section>
  );
};

export default Blog;
