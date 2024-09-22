export type SketchesGridBlocksProps = {
  h1: string;
  p: string;
};

export default function SketchesGridBlocks(props: SketchesGridBlocksProps) {
  const { h1, p } = props;

  return (
    <div className="col-span-1 row-span-1">
      <h3>{h1}</h3>
      <p className="pt-4">{p}</p>
    </div>
  );
}
