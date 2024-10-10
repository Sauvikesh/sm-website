export type HeadingWithBodyProps = {
  header: string;
  body: string;
};

export default function HeadingWithBody({
  header,
  body,
}: HeadingWithBodyProps) {
  return (
    <div className="flex flex-col gap-2">
      <h3>{header}</h3>
      <p>{body}</p>
    </div>
  );
}
