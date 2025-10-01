import { About } from '../../Components/About/About';
import { Blog } from '../../Components/Blog/Blog';
import { Counter } from '../../Components/Counter/Counter';
import { Hero } from '../../Components/Hero/Hero';
import { Newsletter } from '../../Components/Newsletter/Newsletter';
import { Services } from '../../Components/Services/Services';
import { Partners } from '../../Components/Partners/Partners';
import { Testimonial } from '../../Components/Testimonial/Testimonial';

interface Props {
  theme: string;
}

export const Home = ({ theme }: Props) => {
  return (
    <>
      <Hero theme={theme} />
      <Counter />
      <Services />
      <About />
      <Partners />
      <Blog />
      <Testimonial />
      <Newsletter />
    </>
  );
};
