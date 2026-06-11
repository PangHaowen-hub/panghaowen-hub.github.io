import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Awards />
      </main>
      <Footer />
    </div>
  );
}

export default App;
