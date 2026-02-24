function App() {
  return (
    <> {/* Tüm elemanları saran kapsayıcı tag */}
  <a href="#main -content" className="skip -link">
  Ana icerige atla
  </a>

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
          { 
 <form action="#" method="POST" noValidate> {/* novalidate -> noValidate oldu */}
  <fieldset>
    <legend>Iletisim Formu</legend>
    
    <div className="form-group"> {/* class -> className oldu */}
      <label htmlFor="name">Ad Soyad: </label> {/* for -> htmlFor oldu */}
      <input type="text" id="name" name="name" required minLength={2} aria-describedby="name-error" />
      <small id="name-error" className="error-msg" role="alert"></small>
    </div>

    <div className="form-group">
      <label htmlFor="email">E-posta: </label>
      <input type="email" id="email" name="email" required aria-describedby="email-error" />
      <small id="email-error" className="error-msg" role="alert"></small>
    </div>

    <div className="form-group">
      <label htmlFor="subject">Konu: </label>
      <select id="subject" name="subject" required aria-describedby="subject-error">
        <option value="">-- Seciniz --</option>
        <option value="is">Is Teklifi</option>
        <option value="soru">Soru</option>
        <option value="oneri">Oneri</option>
      </select>
      <small id="subject-error" className="error-msg" role="alert"></small>
    </div>

    <div className="form-group">
      <label htmlFor="message">Mesajiniz:</label>
      <textarea id="message" name="message" rows={5} required minLength={10} aria-describedby="message-error"></textarea> {/* rows="5" -> rows={5} oldu */}
      <small id="message-error" className="error-msg" role="alert"></small>
    </div>

    <button type="submit">Gonder</button>
  </fieldset>
</form>
}
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Yunus. Tum haklari saklidir.</p>
      </footer>
    </>
  );
}

export default App;