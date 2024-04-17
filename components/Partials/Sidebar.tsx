"use client";

import React, { useCallback, useState } from 'react';
import { IoChevronForward, IoBarChartOutline, IoPowerOutline, IoDocumentTextOutline } from 'react-icons/io5';
import { usePathname } from 'next/navigation';
import { MenuItem } from '@/components/Sidebar';

const Sidebar: React.FC = () => {
  const router : string = usePathname();

  const [ showSidebar, setShowsidebar ] = useState(false);

  const toggleOpenSidebar = useCallback(() => {
    setShowsidebar((current) => !current);
  }, []);

  const _MenuWrapper = () => {

    const links = [
      {
        title: "Overview",
        path: "/overview",
        queries: {},
        showSidebar: showSidebar,
        icon: <IoBarChartOutline size={22} />,
      },
      {
        title: "Blog",
        path: "/blog",
        queries: { type: 'home' },
        showSidebar: showSidebar,
        icon: <IoDocumentTextOutline size={22} />
      }
    ]

    return (
      <div className="pt-2 pb-5 md:pt-2 md:h-[70%] mx overflow-auto">
        <div className="relative flex flex-col gap-2 mx-3 md:mx-5">
          { links.map((link, index) => (
              <MenuItem
                key={index}
                title={link.title}
                path={link.path}
                active={router === link.path}
                showSidebar={link.showSidebar}
                icon={link.icon}
              />
            )) }
        </div>
      </div>
    )
  }

  return (
    <aside
      className={`relative bg-[#f9f9f9] md:max-w-xs h-screen  ${showSidebar ? 'w-24' : 'w-full'} duration-700 transition-all ease-linear `}>
      <div className="relative flex items-center justify-center pb-7">
        {/*<Link href={'/'} className="block mt-7">*/}
        {/*  <Image src="/react.png" alt="logo" width={50} height={50} />*/}
        {/*</Link>*/}
        <button
          className={`relative top-4 md:top-3 p-3 rounded-full border-4 border-white z-10 group bg-primary-green transition-all ease-linear duration-150`}
          onClick={toggleOpenSidebar}>
          <IoChevronForward
            size={16}
            className={`group-hover:text-blue-700 text-[#2d2e2e] transition-all ease-linear duration-700 ${ showSidebar ? 'rotate-0' : 'rotate-180'  }`} />
        </button>
      </div>

      {_MenuWrapper()}

      <div className="block mx-3 md:mx-5">
        <div className="my-4 border border-neutral-300 rounded-full"></div>
        <div className="mt-2">
          <button
            type="button"
            className="relative overflow-hidden w-full flex items-center justify-center cursor-pointer text-white rounded-lg bg-rose-500 text-md border border-rose-500 hover:bg-rose-400 transition-all ease-in-out duration-300">
            <IoPowerOutline size={22}/>
            <span className={`text-md ${showSidebar ? 'invisible w-0' : 'visible pl-3 py-3'} transition-all ease-linear duration-300`}>Sign Out</span>
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar;
