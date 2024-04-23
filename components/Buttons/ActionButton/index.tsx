import React from 'react';
import { Popover } from 'antd';
import { IoEllipsisVerticalCircleOutline, IoEyeOutline, IoPencilOutline, IoTrashBinOutline } from 'react-icons/io5';
import Link from 'next/link';

const ActionButton: React.FC = () => {
  const _GroupButtons = () => {
    return (
      <div className="">
        <Link
          href={'/'}
          className="text-xs text-[#373b41] flex items-center gap-2 w-full px-3 py-2 hover:bg-neutral-300 ransition-all ease-in-out duration-300 rounded-lg">
          <IoPencilOutline size={15} />
          Edit</Link>
        <Link
          href={'/'}
          className="text-xs text-[#373b41] flex items-center gap-2 w-full px-3 py-2 hover:bg-neutral-300 ransition-all ease-in-out duration-300 rounded-lg"><IoEyeOutline
          size={15} />Show</Link>
        <Link
          href={'/'}
          className="text-xs text-[#373b41] flex items-center gap-2 w-full px-3 py-2 hover:bg-neutral-300 ransition-all ease-in-out duration-300 rounded-lg"><IoTrashBinOutline
          size={15} />Erase</Link>
      </div>
    )
  }

  return (
    <div className="block">
      <Popover content={_GroupButtons} trigger="click">
        <button>
          <IoEllipsisVerticalCircleOutline
            size={30}
            className="hover:bg-[#eee] transition-all ease-in-out duration-300 rounded-full" />
        </button>
      </Popover>
    </div>
  )
}

export default ActionButton