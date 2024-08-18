'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';

export default function Form() {
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await signIn('credentials', {
      password: formData.get('password'),
      redirect: false,
    });

    console.log({ response });
    if (!response?.error) {
      router.push('/');
      router.refresh();
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center bg-zinc-400 h-[100vh] gap-4"
    >
      <h1>please login with password :O</h1>
      <input name="password" type="password" />
      <button className="border" type="submit">
        Enter
      </button>
    </form>
  );
}
