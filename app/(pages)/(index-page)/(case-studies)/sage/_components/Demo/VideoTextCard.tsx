import Heading from '../Headings/Heading';

export type VideoTextCardProps = {
  pageName: string;
  heading: string;
  bulletPoints: string[];
  vidSrc: string;
  flipElements?: boolean;
};

export default function VideoTextCard(props: VideoTextCardProps) {
  const { pageName, heading, bulletPoints, vidSrc, flipElements } = props;

  const rowReverse = flipElements ? 'flex-row-reverse' : '';

  return (
    <div
      className={`flex h-[100vh] gap-7 justify-around items-center ${rowReverse}`}
    >
      <div className="flex flex-col justify-center w-[50%] gap-6">
        <Heading h1={pageName} p={heading} />
        <ul className="pl-5 list-disc">
          {bulletPoints.map((bullet, index) => (
            <li className="text-lg" key={index}>
              {bullet}
            </li>
          ))}
        </ul>
      </div>

      <video className="w-2/5 h-4/5" controls>
        <source src={vidSrc} type="video/mp4" />
        <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
