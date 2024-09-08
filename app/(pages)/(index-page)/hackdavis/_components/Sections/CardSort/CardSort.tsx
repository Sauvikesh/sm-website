import Image from 'next/image';
export default function CardSort() {
  return (
    <div className="pl-[11%] pr-[11%]">
      <h2 className="text-2xl font-medium leading-6 pb-4">
        Three different pages, three different use cases
      </h2>
      <p className="pb-8">
        After gathering a comprehensive list of the content, I set out to
        understand if there was a more intuitive way to organize everything. I
        conducted card sorting (for the first time!) with five individuals, and
        built a site map consisting of three distinct pages.
      </p>

      <div className="flex gap-8 pb-[100px]">
        <div className="flex flex-col bg-[#F1F1F1] p-6 rounded-2xl gap-4 border border-[#D2D2D2]">
          <h2 className="text-4xl text-[#B5B5B5] font-bold tracking-[0.72px] leading-[54px]">
            01
          </h2>
          <h2 className="text-2xl font-medium leading-6 pb-4">Registration</h2>
          <p>
            Serves as the first point-of-contact where potential participants
            begin their journey. Encourages participant registration and
            provides information about what a hackathon is.
          </p>
        </div>
        <div className="flex flex-col bg-[#F1F1F1] p-6 rounded-2xl gap-4 border border-[#D2D2D2]">
          <h2 className="text-4xl text-[#B5B5B5] font-bold tracking-[0.72px] leading-[54px]">
            02
          </h2>
          <h2 className="text-2xl font-medium leading-6 pb-4">About</h2>
          <p>
            Caters to potential sponsors and includes KPIs such as participants
            headcount and projects submitted. Delves into our key values and
            showcases our successful track record.
          </p>
        </div>
        <div className="flex flex-col bg-[#F1F1F1] p-6 rounded-2xl gap-4 border border-[#D2D2D2]">
          <h2 className="text-4xl text-[#B5B5B5] font-bold tracking-[0.72px] leading-[54px]">
            03
          </h2>
          <h2 className="text-2xl font-medium leading-6 pb-4">Day-of-Event</h2>
          <p>
            One-stop shop for important resources; facilitates processes such as
            getting started with our educational starter pack, project
            submission, and requesting help.
          </p>
        </div>
      </div>

      <Image
        src="/hackdavis/cardSort.svg"
        alt="card sort"
        width={2000}
        height={1000}
      />
    </div>
  );
}
