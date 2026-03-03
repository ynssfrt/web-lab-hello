import './App.css';
function App() {
  return (
    <> 
      {/* Uygulama-3: Skip Navigation */}
      <a href="#main-content" className="skip-link">Ana icerige atla</a>

      <header>
        {/* Uygulama-4: Site basligina .site-title sinifi eklendi */}
        <h1 className="site-title">Yunus'un Kisisel Portfolyosu</h1> 
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkimda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">Iletisim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        
        {/* Uygulama-7: Responsive duzen icin .about-content kapsayicisi eklendi */}
        <section id="hakkimda">
          <h2>Hakkimda</h2>
          <div className="about-content">
            <figure>
               <img src="/profil.jpg" alt="Yunus'un vesikalik fotografi" />
               <figcaption>Yunus - Yazilim Muhendisi Adayi</figcaption>
            </figure>
            <div>
              <p>Firat Universitesi Yazilim Muhendisligi 3. sinif ogrencisiyim. Web teknolojileri ve erisilebilirlik uzerine calismalar yapiyorum.</p>
              
              {/* Uygulama-5: Liste .skill-tags sinifi ile etiketlere donusturuldu */}
              <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
                <li>HTML5 & CSS3</li>
                <li>React & TypeScript</li>
                <li>Git & GitHub</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Uygulama-6: Projeler .project-grid kapsayicisi ve .project-card etiketleri ile duzenlendi */}
        <section id="projeler">
          <h2>Projelerim</h2>
          <div className="project-grid">
            
            <article className="project-card">
              <img src="/proje1.jpg" alt="E-Ticaret sitesi ekran goruntusu" />
              <h3>E-Ticaret Projesi</h3>
              <p>React ile geliştirilmiş semantik yapıya sahip bir web uygulaması.</p>
              <ul className="skill-tags">
                <li>React</li>
                <li>CSS Modules</li>
              </ul>
            </article>
            
            <article className="project-card">
              <img src="/proje2.jpg" alt="Hava durumu uygulamasi arayuzu" />
              <h3>Hava Durumu Portali</h3>
              <p>TypeScript kullanılarak tip güvenliği sağlanmış dinamik bir portal.</p>
              <ul className="skill-tags">
                <li>TypeScript</li>
                <li>API</li>
              </ul>
            </article>

          </div>
        </section>

        <section id="iletisim">
          <h2>Iletisim</h2>
          <form action="#" method="POST" noValidate>
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

      <footer>
        <p>&copy; 2026 Yunus. Tum haklari saklidir.</p>
      </footer>
    </>
  );
}

export default App;