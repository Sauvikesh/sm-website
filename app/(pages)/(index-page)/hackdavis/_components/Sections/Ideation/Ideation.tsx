import Image from 'next/image';

export default function Ideation() {
  return (
    <div className="pl-[11%] pr-[11%]">
      <div className="flex flex-col gap-4">
        <h1 className="text-[40px] font-bold tracking-[0.8px]">
          Ideations, Explorations & Iterations
        </h1>
        <h2 className="text-2xl font-medium leading-6">
          Displaying prizes in a more visually prominent way
        </h2>
        <p>
          In an earnest honesty, 2 out of the 5 interviewees admitted that the
          prizes highly motivated them to participate. I comprehensively
          displayed each prize using cards. Configuring the metadata on mobile
          was a challenge because of the limited horizontal space, and I
          iterated several times. Incorporating imagery made the prizes more
          visually enticing, and placing the text underneath accommodated longer
          strings of text, therefore preventing awkward truncation.{' '}
        </p>
      </div>

      <div className="flex gap-6 pt-10 pb-[100px]">
        <Image
          src="hackdavis/prize1.svg"
          alt="prize 1"
          width={1000}
          height={1000}
          className="w-[28%]"
        />
        <Image
          src="hackdavis/Arrow.svg"
          alt="prize 1"
          width={1000}
          height={1000}
          className="w-10"
        />
        <Image
          src="hackdavis/prize2.svg"
          alt="prize 1"
          width={1000}
          height={1000}
          className="w-[28%]"
        />
        <Image
          src="hackdavis/Arrow.svg"
          alt="prize 1"
          width={1000}
          height={1000}
          className="w-10"
        />
        <Image
          src="hackdavis/prize3.svg"
          alt="prize 1"
          width={1000}
          height={1000}
          className="w-[28%]"
        />
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-medium leading-6">
          Increasing personability on the about page
        </h2>
        <p>
          Seeing the faces behind the magic helps potential participants and
          sponsors feel more connected to HackDavis and increases our
          credibility. In my initial iterations, the user was required to click
          on a thumbnail to view details on an individual. However, this
          triggered unfamiliar scrolling behavior if the thumbnail and larger
          image were not in the viewport simultaneously. To solve this problem,
          I grouped individuals by their teams and implemented filters, which
          also reduced cognitive load by showcasing one person at a time.
        </p>
      </div>

      <div className="flex gap-2 pt-10 pb-[100px] justify-center pl-[15%] pr-[15%] ">
        <Image
          src="hackdavis/teamBefore.svg"
          alt="prize 1"
          width={1000}
          height={1000}
        />
        <Image
          src="hackdavis/Arrow.svg"
          alt="prize 1"
          width={50}
          height={1000}
          className="w-10"
        />
        <Image
          src="hackdavis/teamAfter.svg"
          alt="prize 1"
          width={1000}
          height={1000}
          className="translate-x-7"
        />
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-medium leading-6">
          Showcasing our values and integrity
        </h2>
        <p>
          Exhibiting our values further builds trust and reassures potential
          sponsors that their investment is going towards a good cause.
          Reconfiguring the information in the cards allowed me to maximize
          screen real estate and reduced the lockup by 458 pixels. Additionally,
          smaller cards with a lighter opacity reinforce more meaningful color
          associations with CTAs.
        </p>
      </div>

      <div className="flex gap-2 pt-10 pb-[100px] justify-center pl-[15%] pr-[15%] ">
        <Image
          src="hackdavis/mbBefore.svg"
          alt="prize 1"
          width={1000}
          height={1000}
        />
        <Image
          src="hackdavis/Arrow.svg"
          alt="prize 1"
          width={50}
          height={1000}
          className="w-10"
        />
        <Image
          src="hackdavis/mbAfter.svg"
          alt="prize 1"
          width={1000}
          height={1000}
        />
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-medium leading-6">
          Uh oh... PNGs take forever to load
        </h2>
        <p>
          After completing design handoff and documentation, engineering
          notified me that the loading time for the landing page was slower than
          anticipated due to the size of the illustration files. In order to
          achieve the parallax scrolling effect, we used PNGs, which are
          significantly heavier than other file types. After reading about the
          various options for loading screens, I implemented a skeleton loader
          because of its ability to give users a prediction of where content
          will appear.
        </p>
      </div>

      <div className="flex gap-2 pt-10 justify-center">
        <Image
          src="hackdavis/winMessage.svg"
          alt="prize 1"
          width={1000}
          height={1000}
          className="w-[50%]"
        />
        <Image
          src="hackdavis/loader.svg"
          alt="prize 1"
          width={1000}
          height={1000}
          className="w-[50%]"
        />
      </div>
    </div>
  );
}