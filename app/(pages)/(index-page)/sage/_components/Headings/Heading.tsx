export type HeadingProps = {
  h1: string;
  p: string;
};

export default function Heading(props: HeadingProps) {
  const { h1, p } = props;
  return (
    <>
      <h1 className="text-base font-bold">{h1}</h1>
      <p className="text-4xl leading-[54px] font-bold">{p}</p>
    </>
  );
}
