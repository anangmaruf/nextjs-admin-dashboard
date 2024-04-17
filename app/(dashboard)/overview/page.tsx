import React from 'react';
import { IoBarChartOutline } from 'react-icons/io5';
import TitlePage from '@/components/TitlePage';

const Overview: React.FC = () => {
  return (
    <>
      <TitlePage title="Overview" icon={<IoBarChartOutline size={26} />} />
    </>
  )
}

export default Overview;