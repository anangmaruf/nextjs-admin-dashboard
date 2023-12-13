import Navbar from '@/components/Partials/Navbar/Navbar.component';
import Sidebar from '@/components/Partials/Sidebar/Sidebar.component';
import React from 'react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar />
      <main className="relative h-full max-h-screen xl:ml-80 p-3">
        <Navbar />
        {children}
      </main>
    </>
  );
}
