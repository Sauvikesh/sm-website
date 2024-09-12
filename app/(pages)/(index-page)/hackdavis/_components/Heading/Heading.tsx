export type HeadingProps = {
  h3: string;
  p: string;
};

export default function Heading({ h3, p }: HeadingProps) {
  return (
    <div className="flex flex-col gap-4">
      <h3>{h3}</h3>
      <p>{p}</p>
    </div>
  );
}
