"use client";

import React from 'react';
import dynamic from 'next/dynamic';
export default function AuthLayout({ children, } : {
  children: React.ReactNode
}) {
  return (
    <SessionProvider>
      <div className="relative flex h-full">
        <Sidebar />
        <div className="relative h-full w-full px-3 md:px-8 pt-7 pb-5 overflow-y-auto">
          {children}
        </div>
      </div>
    </SessionProvider>
)
}

import { SessionProvider } from 'next-auth/react';

const Sidebar = dynamic(() => import('@/components/Partials/Sidebar'));
