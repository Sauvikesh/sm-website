export type HeadingBodyProps = {
  h: string;
  p: string;
};

export default function HeadingBody(props: HeadingBodyProps) {
  const { h, p } = props;
  return (
    <div className="flex flex-col gap-2">
      <h3>{h}</h3>
      <p>{p}</p>
    </div>
  );
}
