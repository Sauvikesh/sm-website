'use client';

import { signIn } from 'next-auth/react';
import { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export type FormProps = {
  callBackURL: string;
  password?: string;
};
// TODO: look up how to password placeholder moves up when you start typing
export default function Form({ callBackURL, password }: FormProps) {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const checkPassword = async () => {
      if (password) {
        const result = await signIn('credentials', {
          password: password,
          redirect: false,
        });

        if (!result?.ok) {
          setErrorMessage('Sorry, but that url is incorrect.');
        } else {
          router.push('/');
          router.refresh();
        }
      }
    };
    checkPassword();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const result = await signIn('credentials', {
      password: formData.get('password'),
      redirect: false,
    });

    if (!result?.ok) {
      setErrorMessage('Sorry, but that password is incorrect.');
    } else {
      router.push(callBackURL);
      router.refresh();
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center bg-[#F7F7F8] text-black h-[100vh] gap-6 pl-[11%] pr-[11%]"
      style={{
        backgroundImage: "url('/paperIndex.png')",
        backgroundSize: 'cover',
      }}
    >
      <Image
        src="/blob.svg"
        width={1000}
        height={1000}
        alt="blob"
        className="w-[75px] h-auto pb-4"
      />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-6"
      >
        <h1 className="text-2xl text-center leading-9 font-dm-sans font-medium">
          Enter the magic code <br></br>to access this page
        </h1>
        <div className="relative w-full">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            placeholder=""
            className="peer w-full h-10 p-[10px] border rounded-lg focus:ring-0 focus:outline-none border-black"
          />
          <label
            htmlFor="password"
            className="absolute left-[10px] top-2 text-gray-500 pointer-events-none transform scale-75 origin-[0] transition-all duration-200 ease-in-out peer-placeholder-shown:top-[50%] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-500 -translate-y-1/2"
          >
            Password
          </label>
        </div>
        {errorMessage && (
          <div className="flex flex-row items-center w-full gap-1">
            <Image
              src="/error.svg"
              width={1000}
              height={1000}
              alt="blob"
              className="w-[14px] h-auto"
            />
            <p className="text-red-500 leading-[14px] ">{errorMessage}</p>
          </div>
        )}
        <button
          className="flex items-center justify-center w-full h-10 p-2 bg-[#1E46CC] rounded-lg text-white"
          type="submit"
        >
          Continue
        </button>
        <p className="font-sans text-sm">
          Can't find it? Reach out to{' '}
          <a href="mailto: stmah@ucdavis.edu">stmah@ucdavis.edu</a>
        </p>
      </form>
    </div>
  );
}
