import React from 'react';
import { IoAddOutline } from 'react-icons/io5';

interface IModalForm {
  form: React.ReactNode
}
const ModalForm: React.FC<IModalForm> = ({ form }) => {
  return (
    <div className="relative">
      <button className="bg-primary-green p-2 md:p-2 rounded-full border-2 border-[#9eeea7] hover:rotate-180 hover:bg-transparent transition-all ease-in-out duration-300">
        <IoAddOutline size={30} />
      </button>
      <div className="bg-black/70 fixed left-0 top-0 w-full h-full z-10 p-2 md:p-7">
        { form }
      </div>
    </div>
  )
}

export default ModalForm