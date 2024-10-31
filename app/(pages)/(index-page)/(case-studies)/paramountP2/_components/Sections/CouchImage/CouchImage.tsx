import { contentProps } from '../../../page';
import Image from 'next/image';

export default function CouchImage(content: contentProps) {
  return (
    <section className="pt-20 pb-20 -mx-[40%]">
      <Image
        src={content.images?.at(0)?.url}
        alt=""
        width={1000}
        height={1000}
        className="w-full"
      />
    </section>
  );
}
