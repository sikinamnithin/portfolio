import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import PersonalProjects from '@/components/PersonalProjects';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <PersonalProjects />
      <Skills />
      <Footer />
    </div>
  );
}
