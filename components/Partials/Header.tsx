import React from 'react';
import {FaCircleUser} from 'react-icons/fa6';

const Header = () => {
  return (
    <div className="relative flex items-center justify-end bg-neutral-100 w-full md:p-4">
      <div className="relative">
        <FaCircleUser size={20} class="cursor-pointer hover:text-blue-700 transition duration-150"/>
        <div className="bg-neutral-100 absolute w-full md:top-11 md:right-0 md:w-52 rounded">
          <div className="m-2">
            <button className="bg-gray-200 p-2 w-full">Logout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
