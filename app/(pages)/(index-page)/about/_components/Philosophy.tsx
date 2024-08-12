export default function Philosophy() {
  return (
    <div className="flex flex-col mt-0 mb-0 m-53">
      <h2 className="text-white font-dm-sans text-4xl w-fit mb-9 font-semibold leading-[54px]">
        My design philosophy
      </h2>
      <div className="flex gap-10">
        <div className="flex flex-col gap-5">
          <h3 className="text-2xl text-white">Empathy is a superpower</h3>
          <p className="mb-10 text-lg leading-8 text-white font-dm-sans w-fit h-fit">
            Approaching life with an empathetic mindset paves the way to better
            solutions for more diverse audiences.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-2xl text-white">Learning never stops</h3>
          <p className="mb-10 text-lg leading-8 text-white font-dm-sans w-fit h-fit">
            There is so much value in staying curious and being open-minded;
            every project and experience is a learning opportunity.
          </p>
        </div>
      </div>
    </div>
  );
}
