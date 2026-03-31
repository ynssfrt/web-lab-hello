import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import ProjectList from "./components/sections/ProjectList";
import ContactSection from "./components/sections/ContactSection";

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
      
      {/* İŞTE UNUTTUĞUMUZ IŞIK ANAHTARI (Tema Değiştirme Butonu) */}
      <button
        onClick={() => document.documentElement.classList.toggle('dark')}
        className="fixed bottom-4 right-4 z-50 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Tema degistir"
      >
        <span className="dark:hidden text-xl">&#9790;</span> {/* Ay ikonu */}
        <span className="hidden dark:inline text-xl text-yellow-400">&#9728;</span> {/* Güneş ikonu */}
      </button>

      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <ProjectList />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}