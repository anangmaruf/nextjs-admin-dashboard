"use client"
import React, { useCallback, useState } from 'react';
import TitlePage from '@/components/TitlePage';
import { IoDocumentTextOutline, IoEllipsisVerticalCircle, IoPencilOutline, IoEyeOutline, IoTrashBinOutline } from 'react-icons/io5';
import Link from 'next/link';
import { Pagination, Popover } from 'antd';

const Blog: React.FC = () => {

  const [showActionButton, setShowActionButton] = useState(false);

  const toggleShowActionButton = useCallback(() => {
    setShowActionButton((current) => !current );
  }, []);

  const _ActionButtons = () => {
    return (
      <div className="">
        <Link href={'/'}
              className="text-xs flex items-center gap-2 w-full px-3 py-2 hover:bg-neutral-300 ransition-all ease-in-out duration-300 rounded-lg"><IoPencilOutline
          size={15} />Edit</Link>
        <Link href={'/'}
              className="text-xs flex items-center gap-2 w-full px-3 py-2 hover:bg-neutral-300 ransition-all ease-in-out duration-300 rounded-lg"><IoEyeOutline
          size={15} />Show</Link>
        <Link href={'/'}
              className="text-xs flex items-center gap-2 w-full px-3 py-2 hover:bg-neutral-300 ransition-all ease-in-out duration-300 rounded-lg"><IoTrashBinOutline
          size={15} />Erase</Link>
      </div>
    )
  }
  return (
    <>
      <TitlePage title="Blog List" icon={<IoDocumentTextOutline size={26} />} />
      <div className="relative mt-7 p-3 w-full bg-[#f9f9f9] rounded-lg ">
        <table className="table-auto rounded-lg w-full border border-neutral-200 text-left overflow-hidden">
          <thead>
            <tr className="bg-[#eee] border-b border-neutral-200">
              <th className="p-3 font-semibold text-xs ">No</th>
              <th className="p-3 font-semibold text-xs ">Name</th>
              <th className="p-3 font-semibold text-xs ">Created At</th>
              <th className="p-3 font-semibold text-xs ">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="relative border-b border-neutral-200 bg-white cursor-pointer">
              <td className="p-3 border-b text-sm">1</td>
              <td className="p-3 border-b text-sm">Jhone</td>
              <td className="p-3 border-b text-sm">24/02/2024</td>
              <td className="p-3 border-b text-sm">
                <div className="block">
                  <Popover content={ _ActionButtons } trigger="click">
                    <button>
                      <IoEllipsisVerticalCircle size={30} className="hover:bg-[#eee] transition-all ease-in-out duration-300 rounded-full"/>
                    </button>
                  </Popover>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="w-full py-4 flex justify-end">
          <Pagination defaultCurrent={1} total={1000} />
        </div>
      </div>
    </>
  )
}

export default Blog