export type HeadingProps = {
  h1: string;
  p: string;
};

// TODO: double check the styling as it doesn't look right
export default function Heading(props: HeadingProps) {
  const { h1, p } = props;
  return (
    <>
      <h4>{p}</h4>
      <h2>{h1}</h2>
    </>
  );
}
