# CSS Mimari ve Düzen Kararları

### 1. Design Tokens Kullanımı
* Renk, boşluk ve yazı tipi gibi değerleri `tokens.css` içinde merkezi hale getirerek tasarımda tutarlılık sağladık.
* Değişken kullanımı sayesinde ileride yapılacak tasarım güncellemelerini tek bir noktadan yönetilebilir kıldık.

### 2. Akışkan Tipografi (Fluid Typography)
* Sabit değerler yerine `clamp()` fonksiyonu tercih edilerek yazı boyutlarının ekran genişliğine göre pürüzsüzce ölçeklenmesi sağlandı.
* Bu yöntem, farklı cihazlarda manuel müdahaleye gerek kalmadan ideal okunabilirliği sunar.

### 3. Layout (Düzen) Tercihleri: Flexbox vs. Grid
* **Flexbox:** Navigasyon çubuğu gibi tek eksenli yerleşimlerde, elemanları hizalamak ve aralarındaki boşluğu (gap) yönetmek için kullanıldı.
* **Grid:** Proje galerisi gibi iki boyutlu ızgara yapılarında tercih edildi. `repeat(auto-fit, minmax(280px, 1fr))` yapısı ile medya sorgusu yazmadan responsive bir galeri oluşturuldu.

### 4. Mobile-First Yaklaşımı
* Tasarım önce en küçük ekranlar için kurgulandı ve `min-width` kuralları ile büyük ekranlara doğru genişletildi.
* Bu strateji, kodun sadeleşmesini ve mobil cihazlarda performans artışını sağladı.