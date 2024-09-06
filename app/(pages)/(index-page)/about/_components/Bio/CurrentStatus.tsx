export type CurrentStatusProps = {
  header: string;
  paragraph: string;
  intro?: boolean;
};

export default function CurrentStatus(props: CurrentStatusProps) {
  const { header, paragraph, intro } = props;

  return (
    <div className="font-dm-sans">
      {intro ? (
        <h2 className="text-4xl font-semibold">{header}</h2>
      ) : (
        <h3 className="text-base text-gray-500">{header}</h3>
      )}
      <p className="text-lg">{paragraph}</p>
    </div>
  );
}
