import { contentProps } from '../../../page';
import LoadingImage from '@/app/(pages)/_components/LoadingImage/LoadingImage';

export default function CouchImage(content: contentProps) {
  return (
    <section className="-mx-[40%]">
      <LoadingImage
        src={content.images?.at(0)?.url}
        alt=""
        width={1000}
        height={1000}
        className="w-full"
      />
    </section>
  );
}
