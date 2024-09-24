export type StatCardProps = {
  number: string;
  description: string;
};

export default function StatCard({ number, description }: StatCardProps) {
  return (
    <div className="bg-[#F1F1F1] w-full h-[124px] flex flex-col items-center justify-center border border-[#CCCCCC] rounded-lg">
      <h3>{number}</h3>
      <p>{description}</p>
    </div>
  );
}
