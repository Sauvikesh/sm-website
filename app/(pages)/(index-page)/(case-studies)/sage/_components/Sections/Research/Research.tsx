import Header from './Sections/Header';
import Market from './Sections/Market';
import Responses from './Sections/Responses';

export default function Research() {
  return (
    <section className="flex flex-col gap-20">
      <Header />
      <Responses />
      <Market />
    </section>
  );
}
