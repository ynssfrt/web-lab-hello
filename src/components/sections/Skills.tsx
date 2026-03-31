export default function Skills() {
  const skills = ["React", "TypeScript", "Tailwind CSS", "JavaScript", "HTML", "CSS"];

  return (
    <section id="skills" className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Yetenekler</h2>
        <ul className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <li key={skill} className="bg-blue-800 text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}