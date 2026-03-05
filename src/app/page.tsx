import ThreeBackground from '@/components/ThreeBackground';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-savannah-500 selection:text-black">
      <ThreeBackground />

      <Hero />

      <div className="relative z-10 space-y-20 pb-20">
        <About />
        <Education />
        <Experience />
        <Projects />
        <Gallery />
      </div>

      <Contact />
    </main>
  );
}
