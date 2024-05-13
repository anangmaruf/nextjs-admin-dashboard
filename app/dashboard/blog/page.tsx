"use client"
import React from 'react';
import TitlePage from '@/components/TitlePage';
import { IoAddOutline, IoDocumentTextOutline } from 'react-icons/io5';
import { Pagination, Input } from 'antd';
import ActionButton from '@/components/Buttons/ActionButton';
import { Table, Tbody, Td, Th, Thead, Tr } from '@/components/Tables';
import ModalForm from '@/components/ModalForm';
import BlogForm from '@/components/Forms/BlogForm';
import Link from 'next/link';

const { Search } = Input;
const Blog: React.FC = () => {
  return (
    <>
      <div className="relative flex flex-col md:flex-row items-center justify-between pb-3">
        <TitlePage title="Blog List" icon={<IoDocumentTextOutline size={26} />} />
        <Link
          href="/blog/create"
          className="bg-primary-green p-2 md:p-2 rounded-full border-2 border-[#9eeea7] hover:rotate-180 hover:bg-transparent transition-all ease-in-out duration-300">
          <IoAddOutline size={30} />
        </Link>
        {/*<ModalForm*/}
        {/*  form={ <BlogForm /> }*/}
        {/*/>*/}
      </div>
      <div className="relative mt-7 p-3 w-full bg-[#f9f9f9] rounded-lg">
        <div className="my-2">
          <Search placeholder="Search name and press enter or click button search" loading={false} enterButton />
        </div>
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
              <Td>Jhone</Td>
              <Td>24/02/2024</Td>
              <Td><ActionButton /></Td>
            </Tr>
          </Tbody>
        </Table>
        <div className="w-full py-4 flex justify-end">
          <Pagination defaultCurrent={1} total={1000} />
        </div>
      </div>
    </>
  )
}

export default Blog