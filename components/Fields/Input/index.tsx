import React, { InputHTMLAttributes } from 'react';

interface IInput extends InputHTMLAttributes<HTMLInputElement>{
  label: string
  errorMessage?: string
}

const Input: React.FC<IInput> = ({ label, errorMessage, ...rest }) => {

  const _errorMessageInput = () => {
    if (errorMessage) {
      return <span className="text-rose-600 pl-1 text-sm">*{errorMessage}</span>;
    } else {
      return
    }
  }

  return (
    <div className="relative flex flex-col mb-3">
      <label className="pb-1 font-semibold">{ label }</label>
      <input
        className="border border-neutral-300 w-full rounded-lg h-9 px-3 mb-1"
        { ...rest} />
      { _errorMessageInput() }

    </div>
  )
}

export default Input