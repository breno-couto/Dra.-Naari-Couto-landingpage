import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Specialties from './components/Specialties'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Specialties />
      </main>

      <Footer />
    </>
  )
}

export default App
