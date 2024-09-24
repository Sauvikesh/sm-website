export type HeadingProps = {
  h1: string;
  p: string;
};

// TODO: double check the styling as it doesn't look right
export default function Heading(props: HeadingProps) {
  const { h1, p } = props;
  return (
    <div className="flex flex-col gap-2">
      <h4 className="opacity-50">{h1}</h4>
      <h3>{p}</h3>
    </div>
  );
}
