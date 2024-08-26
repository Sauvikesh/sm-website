export type GridContentBlockProps = {
  header: string;
  paragraph: string;
  colSpan: number;
  transparent?: boolean;
};

export default function GridContentBlock(props: GridContentBlockProps) {
  const { header, paragraph, colSpan, transparent } = props;

  const transparentClass = transparent ? 'text-transparent' : '';

  return (
    <div className={`col-span-${colSpan} row-span-1 p-4`}>
      <h1 className={`text-base font-bold leading-[44px] ${transparentClass}`}>
        {header}
      </h1>
      <p className="text-lg leading-8">{paragraph}</p>
    </div>
  );
}
