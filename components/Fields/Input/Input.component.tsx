import React from 'react';

export interface IInputProps {
  id: string;
  value: string;
  placeholder: string;
  onChange: any;
  type?: string;
}

const Input: React.FC<IInputProps> = ({
  value,
  onChange,
  placeholder,
  type,
}) => {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      className="
        my-3
        focus:shadow-primary-outline 
        text-sm 
        leading-5.6 
        ease 
        block 
        w-full 
        appearance-none 
        rounded-lg 
        border 
        border-solid 
        border-gray-300 
        bg-white 
        bg-clip-padding
        p-3 
        font-normal 
        text-gray-700 
        outline-none 
        transition-all 
        placeholder:text-gray-500 
        focus:border-blue-600 
        focus:outline-none"
    />
  );
};

export default Input;
