export type SketchesGridBlocksProps = {
  h1: string;
  p: string;
};

export default function SketchesGridBlocks(props: SketchesGridBlocksProps) {
  const { h1, p } = props;

  return (
    <div className="col-span-1 row-span-1">
      <h1 className="text-2xl leading-[44px]">{h1}</h1>
      <p className="text-[18px] leading-8">{p}</p>
    </div>
  );
}
