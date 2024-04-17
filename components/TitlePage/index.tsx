import React from 'react';

interface ITitlePage {
  title: string,
  icon: React.ReactNode
}

const TitlePage: React.FC<ITitlePage> = ({ title, icon }) => {
  return (
    <div className="flex items-start gap-3">
      {icon}
      <h1 className="text-2xl font-semibold">{title}</h1>
    </div>
  )
}

export default TitlePage