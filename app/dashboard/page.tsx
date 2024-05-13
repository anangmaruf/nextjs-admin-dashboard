"use client"
import React, { useEffect } from 'react';
import { IoBarChartOutline } from 'react-icons/io5';
import TitlePage from '@/components/TitlePage';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Overview: React.FC = () => {
  const { data: session, status } : {data:any, status: string} = useSession();
  const router = useRouter();
  console.log("session", session);
  useEffect(() => {
    if (status === 'unauthenticated')
      router.push('/login');
  },[router, session?.user.role, status])
  return (
    <>
      <TitlePage title="Overview" icon={<IoBarChartOutline size={26} />} />
    </>
  )
}

export default Overview;