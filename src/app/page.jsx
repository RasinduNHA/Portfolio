import Hero from '../components/sections/Hero';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Credentials from '../components/sections/Credentials';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <Projects />
      <Credentials />
      <Contact />
    </main>
  );
}
