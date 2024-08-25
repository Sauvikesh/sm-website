// TODO: prob should turn the h2 + p tag pairs into a component for reusability as that pattern is used on about us page too

export default function Conclustion() {
  return (
    <article className="flex flex-col pt-0 pb-0 text-black bg-white p-53">
      <h1 className="text-base font-bold leading-[44px]">CONCLUSION</h1>
      <h2 className=" font-dm-sans text-4xl w-fit mb-2 font-semibold leading-[54px]">
        Challenges
      </h2>
      <p className="mb-10 text-lg leading-8 font-dm-sans w-fit h-fit">
        Narrowing down the ideas to implement was a challenge considering the
        time constraint of the project. As it was not possible to utilize all of
        the features ideated, the ones that best addressed users' pain points
        were ultimately executed. Additionally, compromising on design choices
        within the team while simultaneously creating a product that everyone
        was proud of was an important lesson.
      </p>
      <h2 className=" font-dm-sans text-4xl w-fit mb-2 font-semibold leading-[54px]">
        Takeaways
      </h2>
      <p className="mb-10 text-lg leading-8 font-dm-sans w-fit h-fit">
        The primary takeaway from this project was prioritizing intention and
        users' needs. Behind every design choice, whether it be information
        architecture, brand identity or content design, there should be research
        driving the success of all of the moving pieces of the project.
      </p>
      <h2 className=" font-dm-sans text-4xl w-fit mb-2 font-semibold leading-[54px]">
        Next Steps
      </h2>
      <p className="mb-10 text-lg leading-8 font-dm-sans w-fit h-fit">
        If this project were to move forward, I would love to conduct another
        round of usability testing with hi-fis to further assess any additional
        pain points that may come up and fine-tune the visual design. I am also
        interested in learning more about how AI plays a role in the algorithm
        for suggesting practices to users.
      </p>
    </article>
  );
}
