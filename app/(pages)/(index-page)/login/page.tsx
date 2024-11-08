import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Form from './Form';

export default async function LoginPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const session = await getServerSession();
  const callbackUrl = Array.isArray(searchParams?.callbackUrl)
    ? searchParams.callbackUrl[0]
    : searchParams?.callbackUrl || '/';

  const password = Array.isArray(searchParams?.password)
    ? searchParams.password[0]
    : searchParams?.password || '';

  if (session) {
    redirect(callbackUrl);
  }
  return (
    <div className="bg-dark-bg">
      <Form callBackURL={callbackUrl} password={password} />
    </div>
  );
}
