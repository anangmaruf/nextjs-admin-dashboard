import React from 'react';
import TitlePage from '@/components/TitlePage';
import { IoNewspaperOutline } from 'react-icons/io5';

const BlogForm: React.FC = () => {
  return (
    <div className="relative md:max-w-5xl mx-auto px-4 py-5 w-full h-full bg-[#f9f9f9]/100 rounded-lg overflow-auto">
      <TitlePage title="Blog Form" icon={<IoNewspaperOutline size={28} />}/>
      <div className="relative grid grid-cols-1 md:grid-cols-2">
        <div className="relative my-2 flex flex-col">
          <label className="pb-2 font-semibold">Title</label>
          <input className="border border-neutral-300 w-full rounded-lg h-9 px-3 mb-1" placeholder="Input your title"/>
          <span className="text-rose-600 pl-1 text-sm">*This field required</span>
        </div>
      </div>
    </div>
  )
}

export default BlogForm