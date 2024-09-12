export type TextCardProps = {
  number?: string;
  header: string;
  body: string;
};

export default function TextCard(props: TextCardProps) {
  const { number, header, body } = props;
  const contentGap = number ? '4' : '2';

  return (
    <div
      className={`flex flex-col bg-[#F1F1F1] p-6 rounded-2xl gap-${contentGap} border border-[#D2D2D2]`}
    >
      {number && (
        <h3 className="text-4xl text-[#B5B5B5] font-bold tracking-[0.72px] leading-[54px]">
          {number}
        </h3>
      )}
      <h3>{header}</h3>
      <p>{body}</p>
    </div>
  );
}
