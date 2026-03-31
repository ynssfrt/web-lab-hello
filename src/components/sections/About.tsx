export default function About() {
  return (
    <section id="about" className="py-16 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
        <figure className="shrink-0">
          <img src="/profil.jpg" alt="Yunus" className="w-40 h-40 rounded-full object-cover shadow-lg" />
        </figure>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left">
            Hakkimda
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            Yazılım Mühendisliği 3. sınıf öğrencisi olarak modern web teknolojileriyle kullanıcı dostu arayüzler oluşturuyorum. Temiz kod ve erişilebilirlik üzerine çalışmalar yapıyorum.
          </p>
        </div>
      </div>
    </section>
  );
}