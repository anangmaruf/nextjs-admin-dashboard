import React from 'react';
import dynamic from 'next/dynamic';

const Sidebar = dynamic(() => import('@/components/Partials/Sidebar'));

export default function AuthLayout({ children, } : {
  children: React.ReactNode
}) {
  return (
      <div className="relative flex h-full">
        <Sidebar />
        <div className="relative h-full w-full px-3 md:px-8 pt-7 pb-5 overflow-y-auto">
          {children}
        </div>
      </div>
  )
}