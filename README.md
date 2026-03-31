# 🚀 Yunus'un Portfolyosu (Web Tasarımı ve Programlama LAB)

Bu proje, modern web teknolojileri (React, TypeScript, Tailwind CSS) kullanılarak geliştirilmiş kişisel bir portfolyo uygulamasıdır. Proje, laboratuvar dersleri kapsamında adım adım inşa edilmiş olup **Checkpoint #1** gereksinimlerini tam olarak karşılamaktadır.

## 👤 Geliştirici Bilgileri
- **Ad Soyad:** Yunus Fırat
- **Öğrenci No:** 230541007
- **Bölüm:** Yazılım Mühendisliği

## 🌟 Özellikler
* **Modern UI/UX:** Tailwind CSS ile tasarlanmış responsive (mobil uyumlu) arayüz.
* **Karanlık Tema (Dark Mode):** Kullanıcı tercihine göre anlık değişebilen tema desteği.
* **Dinamik Proje Listesi:** JSON dosyasından asenkron (Fetch API) olarak çekilen veriler.
* **Filtreleme & Sıralama:** Projeler arasında metin, kategori bazlı arama ve yıla/başlığa göre sıralama (React `useState` ve `useMemo` optimizasyonu ile).
* **Kontrollü Form:** Anlık doğrulama (validation) yapan iletişim formu.
* **Tip Güvenliği:** Sıfır `any` prensibiyle yazılmış katı TypeScript mimarisi.

## 🛠️ Kullanılan Teknolojiler
* React (Functional Components, Hooks)
* TypeScript
* Tailwind CSS
* HTML5 / CSS3 (Semantik ve Erişilebilir)
* Vite (Build aracı)

## 📦 Kurulum ve Çalıştırma
Projeyi yerel bilgisayarınızda çalıştırmak için:

1. Depoyu klonlayın: `git clone https://github.com/ynssfrt/web-lab-hello.git`
2. Bağımlılıkları yükleyin: `npm install`
3. Geliştirme sunucusunu başlatın: `npm run dev`