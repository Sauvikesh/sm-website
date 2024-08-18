export type CurrentStatusProps = {
  header: string;
  paragraph: string;
};

export default function CurrentStatus(props: CurrentStatusProps) {
  const { header, paragraph } = props;

  return (
    <div>
      <h3 className="text-base text-gray-500 font-dm-sans">{header}</h3>
      <p className="text-lg text-white font-dm-sans">{paragraph}</p>
    </div>
  );
}
