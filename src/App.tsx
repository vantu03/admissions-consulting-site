import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import Home from './pages/Home.tsx'
import Results from './pages/Results.tsx'
import Testimonials from './pages/Testimonials.tsx'
import Apply from './pages/Apply.tsx'

import { useRef } from 'react'
import { Toaster } from 'react-hot-toast'

function App() {

  const homeRef = useRef<HTMLElement | null>(null);
  const resultsRef = useRef<HTMLElement | null>(null);
  const testimonialsRef = useRef<HTMLElement | null>(null);
  const applyRef = useRef<HTMLElement | null>(null);

  const navItems = [
    { name: "Home", handleScroll: () => homeRef.current?.scrollIntoView({ behavior: "smooth" }) },
    { name: "Results", handleScroll: () => resultsRef.current?.scrollIntoView({ behavior: "smooth" }) },
    { name: "Testimonials", handleScroll: () => testimonialsRef.current?.scrollIntoView({ behavior: "smooth" }) },
    { name: "Apply Now", handleScroll: () => applyRef.current?.scrollIntoView({ behavior: "smooth" }) },
  ];

  return (
    <>
      <Header navItems={navItems} />

      <section ref={homeRef}>
        <Home navItems={navItems} />
      </section>

      <section ref={resultsRef}>
        <Results />
      </section>

      <section ref={testimonialsRef}>
        <Testimonials />
      </section>

      <section ref={applyRef}>
        <Apply />
      </section>
      <Footer navItems={navItems} />

      <Toaster />
    </>
  )
}

export default App;