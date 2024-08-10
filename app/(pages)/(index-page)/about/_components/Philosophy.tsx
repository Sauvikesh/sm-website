export default function Philosophy() {
  return (
    <div className="flex flex-col m-40 mt-0 mb-0">
      <h2 className="text-white font-dm-sans text-4xl w-fit mb-9 font-semibold leading-[54px]">
        My design philosophy
      </h2>
      <div className="flex gap-10">
        <div className="flex flex-col gap-5">
          <h3 className="text-white text-2xl">Empathy is a superpower</h3>
          <p className="text-white font-dm-sans text-lg w-fit h-fit mb-10 leading-8">
            Approaching life with an empathetic mindset paves the way to better
            solutions for more diverse audiences.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-white text-2xl">Learning never stops</h3>
          <p className="text-white font-dm-sans text-lg w-fit h-fit mb-10 leading-8">
            There is so much value in staying curious and being open-minded;
            every project and experience is a learning opportunity.
          </p>
        </div>
      </div>
    </div>
  );
}
