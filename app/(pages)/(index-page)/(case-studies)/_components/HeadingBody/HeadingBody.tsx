import FormattedP from '@/app/(pages)/_components/FormattedP/FormattedP';

export type HeadingBodyProps = {
  h: string | undefined;
  p: string | undefined;
};

export default function HeadingBody(props: HeadingBodyProps) {
  const { h = '', p = '' } = props;
  return (
    <div className="flex flex-col gap-2">
      <h3>{h}</h3>
      <FormattedP text={p} />
    </div>
  );
}
