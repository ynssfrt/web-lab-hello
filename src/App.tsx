import { useState, useEffect } from "react";
// Tip tanimlarimizi ve servislerimizi import ediyoruz [cite: 1144-1148]
import type { 
  Project, Category, SortField, SortOrder 
} from "./types/project";
import { fetchProjects } from "./services/projectService";
import { applyFilters } from "./utils/projectHelpers";
import Card from "./components/Card";
import Input from "./components/Input";
import Button from "./components/Button";
import Alert from "./components/Alert";

export default function App() {
  // --- DURUM (STATE) TANIMLARI [cite: 1152-1172] ---
  const [projects, setProjects] = useState<Project[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category | "all">("all");
  const [sortField, setSortField] = useState<SortField>("year");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // --- VERI CEKME (EFFECT) [cite: 1196-1221] ---
  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProjects();
        setProjects(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Bilinmeyen hata");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  // --- TURETILMIS VERI (DERIVED STATE) [cite: 1225-1233] ---
  const filtered = applyFilters(
    projects, search, category, sortField, sortOrder
  );

  const categories: (Category | "all")[] = ["all", "frontend", "fullstack", "backend"];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      
      {/* Tema Degistirme Butonu */}
      <button
        onClick={() => document.documentElement.classList.toggle('dark')}
        className="fixed bottom-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Tema degistir"
      >
        <span className="dark:hidden text-xl">&#9790;</span>
        <span className="hidden dark:inline text-xl text-yellow-400">&#9728;</span>
      </button>

      {/* Header ve Navigasyon */}
      <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
          <h1 className="text-xl font-bold text-blue-800 dark:text-blue-300">
            Yunus'un Portfolyosu
          </h1>
          <nav aria-label="Ana navigasyon">
            <ul className="flex flex-wrap gap-2">
              <li><a href="#hakkimda" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">Hakkimda</a></li>
              <li><a href="#projeler" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">Projeler</a></li>
              <li><a href="#iletisim" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">Iletisim</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content">
        {/* Hakkimda Bolumu (Statik kalabilir) */}
        <section id="hakkimda" className="py-12 px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
            <figure className="shrink-0">
              <img src="/profil.jpg" alt="Yunus" className="w-40 h-40 rounded-full object-cover shadow-lg" />
            </figure>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Hakkimda</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Yazılım Mühendisliği 3. sınıf öğrencisiyim. Modern web teknolojileriyle dinamik ve erişilebilir arayüzler geliştiriyorum.
              </p>
            </div>
          </div>
        </section>

        {/* Projelerim Bolumu (Dinamik Filtreleme ve Liste) [cite: 1256-1460] */}
        <section id="projeler" className="py-16 px-4 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">Projelerim</h2>
            
            {/* HATA VE YUKLENIYOR DURUMLARI  */}
            {error && <Alert variant="error" title="Hata" className="mb-6">{error}</Alert>}
            {loading && <p className="text-center text-gray-500 py-10">Veriler yukleniyor...</p>}

            {/* FILTRELER PANELİ [cite: 1272-1343] */}
            <div className="flex flex-col md:flex-row gap-4 mb-8 items-end">
              <div className="flex-1 w-full">
                <Input 
                  id="search" 
                  placeholder="Proje veya teknoloji ara..." 
                  value={search} 
                  onChange={e => setSearch(e.target.value)} 
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map(cat => (
                  <Button 
                    key={cat} 
                    variant={category === cat ? "primary" : "ghost"} 
                    size="sm" 
                    onClick={() => setCategory(cat)}
                  >
                    {cat === "all" ? "Tumu" : cat}
                  </Button>
                ))}
              </div>
              <div className="flex gap-2">
                <select 
                  value={sortField} 
                  onChange={e => setSortField(e.target.value as SortField)}
                  className="border rounded-lg px-3 py-2 dark:bg-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="year">Yil</option>
                  <option value="title">Baslik</option>
                </select>
                <Button variant="ghost" size="sm" onClick={() => setSortOrder(prev => prev === "asc" ? "desc" : "asc")}>
                  {sortOrder === "asc" ? "A-Z" : "Z-A"}
                </Button>
              </div>
            </div>

            {/* PROJE LISTESI [cite: 1417-1453] */}
            {!loading && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map(project => (
                  <Card 
                    key={project.id} 
                    variant="elevated" 
                    title={project.title} 
                    image={project.image}
                  >
                    <p className="text-sm mb-3 text-gray-600 dark:text-gray-400">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map(t => (
                        <span key={t} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-0.5 rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            )}
            
            <p className="text-sm text-gray-500 mt-6 text-center">
              {filtered.length} / {projects.length} proje gosteriliyor [cite: 1457]
            </p>
          </div>
        </section>

        {/* Iletisim Formu */}
        <section id="iletisim" className="py-16 px-4">
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Iletisim</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <Input id="name" label="Ad Soyad" required />
              <Input id="email" label="E-posta" type="email" required />
              <div className="space-y-1">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Mesajiniz</label>
                <textarea id="message" rows={5} required className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
              </div>
              <Button variant="primary" size="lg" type="submit" className="w-full">Gonder</Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-center py-6 px-4 text-gray-500 dark:text-gray-400 text-sm">
        <p>&copy; 2026 Yunus. Tum haklari saklidir.</p>
      </footer>
    </div>
  );
}