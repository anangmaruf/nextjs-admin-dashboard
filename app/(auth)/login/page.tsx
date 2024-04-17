"use client"
import React, { useCallback, useState } from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Card } from 'antd';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false)

  const showPassword = useCallback(() => {
    setPasswordVisible((current: boolean) => !current )
  }, []);

  return (
    <div className="justify-center">
      <Card style={{ width: 400 }}>
        <form action="">
          <div className="block">
            <input type="text" className="border-gray-300 border-[1px] rounded-md p-2 w-full" placeholder="Input your email"/>
          </div>
          <div className="block mt-3">
            <div className="relative flex items-center">
              <input type={passwordVisible ? 'text' : 'password'} className="border-gray-300 border-[1px] rounded-md p-2 pr-7 w-full" placeholder="Input your password"/>
              <div className="absolute right-4 bg-white pl-3 p-1">
                {
                  passwordVisible ?
                  <EyeTwoTone onClick={showPassword} className="hover:text-blue-700 transition delay-150 md:text-lg" />
                  :
                  <EyeInvisibleOutlined onClick={showPassword} className="hover:text-blue-700 transition delay-150 md:text-lg" />
                }
              </div>
            </div>
          </div>
          <div className="block mt-3">
            <button
              type="submit"
              className="p-3 w-full border-[1px] border-gray-400
                  bg-blue-800 text-white hover:bg-transparent
                  hover:text-black rounded-md transition delay-150 ease-in">
              Sign In
            </button>
          </div>
        </form>
      </Card>
    </div>
  )
}

export default Login;