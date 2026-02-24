function App() {
  return (
    <> 
      {/* Uygulama-3: Skip Navigation - Boşluklar temizlendi [cite: 330-335, 525] */}
      <a href="#main-content" className="skip-link">Ana icerige atla</a>

      <header>
        {/* h1: Sayfanın ana başlığı her sayfada bir tane olmalıdır [cite: 192, 203, 523] */}
        <h1>Yunus'un Kisisel Portfolyosu</h1> 
        <nav aria-label="Ana navigasyon"> {/* [cite: 317, 524] */}
          <ul>
            <li><a href="#hakkimda">Hakkimda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">Iletisim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content"> {/* [cite: 83, 341] */}
        
        {/* Uygulama-5 Madde 2: Hakkımda Bölümü [cite: 526-530] */}
        <section id="hakkimda">
          <h2>Hakkimda</h2>
          <figure> {/* [cite: 255-261, 528] */}
             <img src="/profil.jpg" alt="Yunus'un vesikalik fotografi" />
             <figcaption>Yunus - Yazilim Muhendisi Adayi</figcaption>
          </figure>
          {/* Tanıtım paragrafı ve teknoloji listesi eklendi  */}
          <p>Firat Universitesi Yazilim Muhendisligi 3. sinif ogrencisiyim. Web teknolojileri ve erisilebilirlik uzerine calismalar yapiyorum.</p>
          <ul>
            <li>HTML5 & CSS3</li>
            <li>React & TypeScript</li>
            <li>Git & GitHub</li>
          </ul>
        </section>

        {/* Uygulama-5 Madde 3: Projelerim Bölümü (En az 2 kart) [cite: 531-534] */}
        <section id="projeler">
          <h2>Projelerim</h2>
          <article> {/* 1. Proje Kartı [cite: 532, 533] */}
            <h3>E-Ticaret Projesi</h3>
            <p>React ile geliştirilmiş semantik yapıya sahip bir web uygulaması.</p>
            <p><strong>Teknolojiler:</strong> React, CSS Modules</p>
          </article>
          
          <article> {/* 2. Proje Kartı - Eklendi [cite: 532, 533] */}
            <h3>Hava Durumu Portali</h3>
            <p>TypeScript kullanılarak tip güvenliği sağlanmış dinamik bir portal.</p>
            <p><strong>Teknolojiler:</strong> TypeScript, API Integration</p>
          </article>
        </section>

        {/* Uygulama-5 Madde 4: İletişim Bölümü [cite: 535-538] */}
        <section id="iletisim">
          <h2>Iletisim</h2>
          <form action="#" method="POST" noValidate> {/* [cite: 426, 503] */}
            <fieldset>
              <legend>Iletisim Formu</legend>
              
              <div className="form-group">
                <label htmlFor="name">Ad Soyad: </label>
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
                <textarea id="message" name="message" rows={5} required minLength={10} aria-describedby="message-error"></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Gonder</button>
            </fieldset>
          </form>
        </section>
      </main>

      {/* Uygulama-5 Madde 5: Footer [cite: 539-540] */}
      <footer>
        <p>&copy; 2026 Yunus. Tum haklari saklidir.</p>
      </footer>
    </>
  );
}

export default App;