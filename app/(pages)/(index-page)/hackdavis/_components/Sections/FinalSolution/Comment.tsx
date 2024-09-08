export type CommentProps = {
  text: string;
  x: string;
  y: string;
};

export default function Comment(props: CommentProps) {
  const { text, x, y } = props;

  return (
    <div className={`flex items-center absolute`} style={{ right: `${x}`, top: `${y}` }}>
      <div className=" bg-[#005271] w-2 h-2 rounded-full"></div>
      <div className="border-t-2 border-dashed border-[#005271] w-5"></div>
      <p className="bg-white p-4 rounded-[4px] text-[14px] w-[192px]">{text}</p>
    </div>
  );
}
