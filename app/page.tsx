import Navbar from '@/components/mkh/Navbar';
import Hero from '@/components/mkh/Hero';
import Statement from '@/components/mkh/Statement';
import Services from '@/components/mkh/Services';
import Approach from '@/components/mkh/Approach';
import HaliteTeaser from '@/components/mkh/HaliteTeaser';
import Contact from '@/components/mkh/Contact';
import Footer from '@/components/mkh/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Statement />
        <Services />
        <Approach />
        <HaliteTeaser />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
