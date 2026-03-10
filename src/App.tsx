import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      
      {/* Tema Degistirme Butonu */}
      <button
        onClick={() => document.documentElement.classList.toggle('dark')}
        className="fixed bottom-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Tema degistir"
      >
        <span className="dark:hidden text-xl">&#9790;</span>
        <span className="hidden dark:inline text-xl text-yellow-400">&#9728;</span>
      </button>

      {/* Header ve Navigasyon [cite: 892-969] */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-800 text-white p-2 z-50">
        Ana icerige atla
      </a>
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
        {/* Hakkimda Bolumu [cite: 982-1029] */}
        <section id="hakkimda" className="py-16 px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
            <figure className="shrink-0">
              <img src="/profil.jpg" alt="Yunus vesikalik fotografi" className="w-40 h-40 rounded-full object-cover shadow-lg" />
            </figure>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left">
                Hakkimda
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Yazılım Mühendisliği 3. sınıf öğrencisi olarak modern web teknolojileriyle kullanıcı dostu arayüzler oluşturuyorum. Temiz kod ve erişilebilirlik üzerine çalışmalar yapıyorum.
              </p>
              <ul className="flex flex-wrap gap-2">
                <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">React</li>
                <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">TypeScript</li>
                <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">Tailwind CSS</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projelerim Bolumu [cite: 1030-1057] */}
        <section id="projeler" className="py-16 px-4 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
              Projelerim
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card variant="elevated" image="/proje1.jpg" title="E-Ticaret" imageAlt="E-Ticaret anasayfa gorunumu">
                <p>React ve Node.js ile tam kapsamli uygulama.</p>
              </Card>
              <Card variant="elevated" image="/proje2.jpg" title="Hava Durumu Portali" imageAlt="Hava durumu uygulamasi arayuz">
                <p>TypeScript ile tip güvenliği sağlanmış dinamik portal.</p>
              </Card>
              <Card variant="outlined" title="Gelecek Proje">
                <p>Yeni teknolojilerle geliştirilecek harika bir fikir.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Iletisim Formu [cite: 1058-1118] */}
        <section id="iletisim" className="py-16 px-4">
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Iletisim
            </h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <Input id="name" label="Ad Soyad" required />
              <Input id="email" label="E-posta" type="email" required />
              <div className="space-y-1">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Mesajiniz
                </label>
                <textarea id="message" rows={5} required className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"></textarea>
              </div>
              <Button variant="primary" size="lg" type="submit" className="w-full">
                Gonder
              </Button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer [cite: 1119-1131] */}
      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-center py-6 px-4 text-gray-500 dark:text-gray-400 text-sm">
        <p>&copy; 2026 Yunus. Tum haklari saklidir.</p>
      </footer>
    </div>
  );
}

export default App;