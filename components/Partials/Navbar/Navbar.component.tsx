'use client';
import { BOutline } from '@/components/Buttons';
import React from 'react';
import { FaPowerOff } from 'react-icons/fa';

const _MenuBar = () => {
  return (
    <ul>
      <li>
        <BOutline
          label="Sign Out"
          id="signout"
          type="submit"
          onClick={() => alert('test')}
          className="flex items-center gap-4 font-semibold text-sm hover:bg-rose-700 hover:border-rose-700 border-rose-700 text-rose-700"
        >
          <FaPowerOff size={15} />
        </BOutline>
      </li>
    </ul>
  );
};

const Navbar = () => {
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-0 transition-all drop-shadow-md lg:flex-nowrap lg:justify-start">
      <div className="bg-white py-3 px-5 relative w-full rounded-md flex items-center justify-between">
        <div className="py-2"></div>
        {_MenuBar()}
      </div>
    </nav>
  );
};
export default Navbar;
