export default function Philosophy() {
  return (
    <article className="pl-[15%] pr-[15%]">
      <h2 className="text-4xl mb-9 font-semibold leading-[54px]">
        My design philosophy
      </h2>

      <div className="grid grid-rows-3 grid-cols-2 gap-x-12">
        <h3 className="text-2xl row-span-1">Empathy is a superpower</h3>
        <h3 className="text-2xl row-span-1">Learning never stops</h3>

        <p className="text-lg leading-8 row-span-2">
          Approaching life with an empathetic mindset paves the way to better
          solutions for more diverse audiences.
        </p>

        <p className="text-lg leading-8 row-span-2">
          There is so much value in staying curious and being open-minded; every
          project and experience is a learning opportunity.
        </p>
      </div>
    </article>
  );
}
