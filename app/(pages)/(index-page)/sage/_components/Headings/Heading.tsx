export type HeadingProps = {
  h1: string;
  p: string;
};

export default function Heading(props: HeadingProps) {
  const { h1, p } = props;
  return (
    <>
      <h2>{h1}</h2>
      <h3>{p}</h3>
    </>
  );
}
