// TODO: prob should turn the h2 + p tag pairs into a component for reusability as that pattern is used on about us page too

export default function Conclustion() {
  return (
    <article className="flex flex-col pl-[11%] pr-[11%] bg-white">
      <div className="flex flex-col gap-4">
        <h3>Challenges</h3>
        <p className="pb-10 text-lg leading-8">
          Narrowing down the ideas to implement was a challenge considering the
          time constraint of the project. As it was not possible to utilize all
          of the features ideated, the ones that best addressed users' pain
          points were ultimately executed. Additionally, compromising on design
          choices within the team while simultaneously creating a product that
          everyone was proud of was an important lesson.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="pb-2">Takeaways</h3>
        <p className="pb-10">
          The primary takeaway from this project was prioritizing intention and
          users' needs. Behind every design choice, whether it be information
          architecture, brand identity or content design, there should be
          research driving the success of all of the moving pieces of the
          project.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="pb-2">Next Steps</h3>
        <p className="pb-10">
          If this project were to move forward, I would love to conduct another
          round of usability testing with hi-fis to further assess any
          additional pain points that may come up and fine-tune the visual
          design. I am also interested in learning more about how AI plays a
          role in the algorithm for suggesting practices to users.
        </p>
      </div>
    </article>
  );
}
