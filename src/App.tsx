function App() {
  return (
    <> {/* Tüm elemanları saran kapsayıcı tag */}
      <header>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkimda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">Iletisim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <section id="hakkimda">
          <h2>Hakkimda</h2>
          {/* icerik buraya */}
          <figure>
             <img src="/profil.jpg" alt="Yunus'un vesikalik fotografi" />
             <figcaption>Yunus</figcaption>
          </figure>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          {/* icerik buraya */}
          <article>
            <h3>E-Ticaret Projesi</h3>
            <p>React ile geliştirilmiş semantik yapı.</p>
          </article>
        </section>

        <section id="iletisim">
          <h2>Iletisim</h2>
          {/* Form Uygulama-4 kodları buraya gelecek */}
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Yunus. Tum haklari saklidir.</p>
      </footer>
    </>
  );
}

export default App;