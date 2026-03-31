import ContactForm from "../forms/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Iletisim
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 text-center max-w-xl">
          Benimle iletisime gecmek isterseniz asagidaki formu doldurabilirsiniz.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}