'use client';
import BPrimary from '@/components/Buttons/Primary/BPrimary.component';
import Input from '@/components/Fields/Input/Input.component';
import { useState } from 'react';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <section className="container mx-auto px-4 h-screen">
      <div className="relative flex content-center justify-center items-center h-full">
        <div className="border-2 border-grey-400 rounded-lg p-5 max-w-xl w-full">
          <Input
            id="email"
            type="email"
            value={email}
            placeholder="Enter your email"
            onChange={(ev: any) => setEmail(ev.target.value)}
          />
          <Input
            id="password"
            type="password"
            value={password}
            placeholder="Enter your password"
            onChange={(ev: any) => setPassword(ev.target.value)}
          />
          <BPrimary
            label="Login"
            type="submit"
            className="w-full mt-3"
            onClick={() => alert('login')}
          />
        </div>
      </div>
    </section>
  );
};

export default Auth;
