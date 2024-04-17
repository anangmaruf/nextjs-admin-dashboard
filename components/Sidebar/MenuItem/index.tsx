import React from 'react';
import Link from 'next/link';

interface IMenuItemProps {
  title: string,
  path: string,
  active: boolean
  showSidebar: boolean
  icon: React.ReactNode
}

const MenuItem: React.FC<IMenuItemProps> = (
  { title, path, active, showSidebar, icon}
) => {
  return (
    <Link href={path}
          className={`
              relative flex p-3
              ${showSidebar ? 'justify-start' : 'overflow-hidden'} 
              ${active ? 'bg-primary-green' : ''}
              items-center w-full
              rounded-lg hover:bg-[#9eeea7]
              transition-all ease-linear duration-400`}>
      {icon}
      <span
        className={`
          ${showSidebar ? 'invisible w-0' : 'visible w-full ml-3'} 
          text-md transition-all ease-in-out duration-700`}>
        {title}
      </span>
    </Link>
  )
}

export default MenuItem;