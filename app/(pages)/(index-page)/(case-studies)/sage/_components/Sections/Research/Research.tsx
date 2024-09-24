import Header from './Sections/Header';
import Market from './Sections/Market';
import Responses from './Sections/Responses';

export default function Research() {
  return (
    <section className="pl-[15%] pr-[15%]">
      <Header />
      <Responses />
      <Market />
    </section>
  );
}
