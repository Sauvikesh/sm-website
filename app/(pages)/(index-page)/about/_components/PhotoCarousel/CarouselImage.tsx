import Image from 'next/image';

type CarouselImageProps = {
  src: string;
  alt: string;
};

export default function CarouselImage(props: CarouselImageProps) {
  const { src, alt } = props;

  return (
    <Image
      src={src}
      alt={alt}
      height={1000}
      width={1000}
      className="w-auto h-[550px] shrink-0"
    ></Image>
  );
}
