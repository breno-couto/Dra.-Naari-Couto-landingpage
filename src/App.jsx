import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Locations from './components/Locations';
import Differentials from './components/Differentials';
import FAQ from './components/FAQ';
import History from './components/History';
import FinalSection from './components/FinalSection';

export default function App() {
  return (
    <>
      <Header />

      <main>

        <Hero />

        <About />

        <Locations />

        <Differentials />

        <FAQ />

        <History />

        <FinalSection />

      </main>
    </>
  );
}