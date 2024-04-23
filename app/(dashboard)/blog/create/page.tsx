"use client"
import React, { useState } from 'react';
import TitlePage from '@/components/TitlePage';
import { IoAddOutline, IoDocumentTextOutline } from 'react-icons/io5';
import { Input, EditorTextarea } from '@/components/Fields';
import { Button } from 'antd';

const BlogCreate: React.FC = () => {
  const [loadings, setLoadings] = useState<boolean[]>([]);

  const enterLoading = (index: number) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });

    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };
  return (
    <>
      <div className="relative flex flex-col md:flex-row items-center justify-between pb-3">
        <TitlePage title="Blog Create Form" icon={<IoDocumentTextOutline size={26} />} />
        <button
          className="bg-primary-green p-2 md:p-2 rounded-full border-2 border-[#9eeea7] hover:rotate-180 hover:bg-transparent transition-all ease-in-out duration-300">
          <IoAddOutline size={30} />
        </button>
        {/*<ModalForm*/}
        {/*  form={ <BlogForm /> }*/}
        {/*/>*/}
      </div>

      <div className="block">
        <div className="relative flex gap-3">
          <div className="w-6/12">
            <div className="mt-7 p-5 w-full bg-[#f9f9f9] rounded-lg">
              <Input label="Title" placeholder="Input your title..." />
              <EditorTextarea />
            </div>
          </div>
          <div className="w-6/12">
            <div className="mt-7 p-5 w-full bg-[#f9f9f9] rounded-lg">
              <Input label="Title" placeholder="Input your title..." />
              <Input label="Title" placeholder="Input your title..." />
              <Input label="Title" placeholder="Input your title..." />
              <Input label="Title" placeholder="Input your title..." />
              <Input label="Title" placeholder="Input your title..." />
              <Input label="Title" placeholder="Input your title..." />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <Button
              type="primary"
              className="w-full"
              ghost={true} size="large" loading={loadings[0]} onClick={() => enterLoading(0)}>
            Submit
          </Button>
        </div>
      </div>
    </>
  )
}

export default BlogCreate