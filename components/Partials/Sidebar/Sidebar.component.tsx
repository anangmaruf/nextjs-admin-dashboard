import Link from 'next/link';
import React from 'react';

import { FaHome, FaPagelines } from 'react-icons/fa';

export interface ISidebarProps {
  label: string;
  url: string;
  icon?: React.ReactNode;
  active?: boolean;
}

const SidebarLink: React.FC<ISidebarProps> = ({ url, label, icon }) => {
  return (
    <li className="w-full pr-4">
      <Link
        href={url}
        className="flex items-center w-full px-4 text-base text-gray-500 gap-3 py-3 my-1 bg-white hover:bg-gray-300 transition-all duration-200 ease-linear hover:text-white hover:drop-shadow-md rounded"
      >
        {icon}
        {label}
      </Link>
    </li>
  );
};

const Sidebar = () => {
  return (
    <aside className="fixed max-w-xs w-full h-screen p-3 pr-0">
      <div className="bg-white flex-wrap block w-full h-full z-10 rounded-md">
        <div className="text-center py-5 px-3 bg-blue-500 rounded-md drop-shadow-md">
          <h1 className="text-lg text-white">Admin</h1>
        </div>
        <div className="relative w-full overflow-y-auto py-4">
          <span className="text-sm font-bold pl-6 pt-3">Dashboard</span>
          <ul className="flex flex-col pl-5 pt-2">
            <SidebarLink
              label="Dashboard"
              url="/dashboard"
              icon={<FaHome size={20} />}
            />
            <SidebarLink
              label="Blog"
              url="/dashboard/blog"
              icon={<FaPagelines size={20} />}
            />
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
