'use client';

import { signIn } from 'next-auth/react';
import { FormEvent } from 'react';

export default function Form() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await signIn('credentials', {
      password: formData.get('password'),
      redirect: true,
    });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center bg-inherit h-[100vh] gap-4"
    >
      <h1 className="text-white">
        please login with password to access this page :O
      </h1>
      <input name="password" type="password" />
      <button className="p-4 text-white border" type="submit">
        Enter
      </button>
    </form>
  );
}
