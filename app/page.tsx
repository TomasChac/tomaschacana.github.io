import { resumeData } from "./data/resume";
import {
  Download,
  MapPin,
  Mail,
  Terminal,
  FileText,
  ShieldCheck,
  User,
  Github,
  Linkedin,
  ExternalLink,
  Code2,
  Zap,
  Cpu,
} from "lucide-react";

const iconMap: any = { FileText, ShieldCheck, User };

export default function Home() {
  const mailTo = `mailto:${resumeData.personal.email}`;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
      {/* HERO SECTION */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6">
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 break-words">
                {resumeData.personal.name}
              </h1>
              <p className="text-base sm:text-lg text-blue-600 font-semibold mt-2 flex items-center gap-2">
                <Terminal className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="break-words">{resumeData.personal.role}</span>
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4 mt-3 sm:mt-4 text-xs sm:text-sm text-slate-600">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" /> {resumeData.personal.location}
                </span>
                <a
                  href={mailTo}
                  className="flex items-center gap-1 hover:text-blue-600 transition-colors active:text-blue-700 break-all"
                >
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" /> 
                  <span className="hidden sm:inline">{resumeData.personal.email}</span>
                  <span className="sm:hidden">Email</span>
                </a>
              </div>
            </div>
            {/* Social Links */}
            <div className="flex gap-2 sm:gap-3 flex-wrap">
              <a
                href={resumeData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 sm:p-3 bg-slate-100 hover:bg-blue-100 active:bg-blue-200 hover:text-blue-600 rounded-lg transition-all touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href={resumeData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 sm:p-3 bg-slate-100 hover:bg-blue-100 active:bg-blue-200 hover:text-blue-600 rounded-lg transition-all touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href={mailTo}
                aria-label="Contactar"
                className="px-4 sm:px-6 py-2.5 sm:py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-all touch-manipulation min-h-[44px] flex items-center justify-center text-sm sm:text-base"
              >
                Contáctame
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-12 sm:space-y-16">
        {/* ABOUT */}
        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 border-b-2 border-blue-500 pb-2">
            Sobre mí
          </h2>
          <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
            {resumeData.personal.about}
          </p>
        </section>

        {/* EDUCATION */}
        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 border-b-2 border-blue-500 pb-2">
            Educación
          </h2>
          <div className="space-y-4 sm:space-y-6">
            {resumeData.education.map((edu, idx) => (
              <article
                key={idx}
                className="relative pl-4 sm:pl-6 border-l-2 border-blue-500 bg-white p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                  <h3 className="font-bold text-base sm:text-lg text-slate-900 break-words">
                    {edu.institution}
                  </h3>
                  <span className="text-xs sm:text-sm font-mono text-slate-600 bg-slate-100 px-2 sm:px-3 py-1 rounded mt-2 sm:mt-0 w-fit">
                    {edu.period}
                  </span>
                </div>
                <p className="text-blue-600 font-semibold mb-1 text-sm sm:text-base">{edu.degree}</p>
                <p className="text-slate-600 text-xs sm:text-sm mb-2">{edu.status}</p>
                <p className="text-slate-600 text-sm sm:text-base">
                  <span className="font-medium">Enfoque:</span> {edu.focus}
                </p>
                {edu.gpa && (
                  <p className="text-slate-600 mt-1 text-sm sm:text-base">
                    <span className="font-medium">Promedio:</span> {edu.gpa}
                  </p>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 border-b-2 border-blue-500 pb-2">
            Competencias Técnicas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Sistemas */}
            <div className="bg-white p-4 sm:p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">Sistemas</h3>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {resumeData.skills.sistemas.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2 sm:px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs sm:text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Redes */}
            <div className="bg-white p-4 sm:p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">Redes & Telecom</h3>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {resumeData.skills.redes.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2 sm:px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs sm:text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Programación */}
            <div className="bg-white p-4 sm:p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 flex-shrink-0" />
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">Programación</h3>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {resumeData.skills.programacion.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2 sm:px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs sm:text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-white p-4 sm:p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600 flex-shrink-0" />
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">Herramientas & DevOps</h3>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {resumeData.skills.tools.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2 sm:px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-xs sm:text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="mt-4 sm:mt-6">
            <h3 className="font-bold text-slate-900 mb-3 text-sm sm:text-base">Idiomas</h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {resumeData.skills.languages.map((lang, i) => (
                <span
                  key={i}
                  className="px-2 sm:px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-xs sm:text-sm font-medium"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 border-b-2 border-blue-500 pb-2">
            Experiencia Profesional
          </h2>
          <div className="space-y-4 sm:space-y-6">
            {resumeData.experience.map((job, idx) => (
              <article
                key={idx}
                className="relative pl-4 sm:pl-6 border-l-2 border-slate-300 hover:border-blue-500 transition-colors bg-white p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                  <h3 className="font-bold text-base sm:text-lg text-slate-900 break-words">
                    {job.company}
                  </h3>
                  <span className="text-xs sm:text-sm font-mono text-slate-600 bg-slate-100 px-2 sm:px-3 py-1 rounded mt-2 sm:mt-0 w-fit">
                    {job.period}
                  </span>
                </div>
                <p className="text-blue-600 font-semibold mb-3 text-sm sm:text-base">{job.role}</p>
                <ul className="list-disc list-inside text-slate-600 space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                  {job.description.map((point, i) => (
                    <li key={i} className="leading-relaxed">{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 border-b-2 border-blue-500 pb-2">
            Proyectos Destacados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {resumeData.projects.map((project, idx) => (
              <a
                key={idx}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col bg-white border border-slate-200 rounded-lg p-4 sm:p-5 hover:border-blue-500 hover:shadow-lg active:shadow-xl transition-all h-full touch-manipulation"
              >
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2 break-words">
                  {project.title}
                  <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 inline ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm mb-3 leading-relaxed">{project.desc}</p>
                {project.impact && (
                  <p className="text-xs text-slate-500 italic mb-3 flex-grow leading-relaxed">
                    {project.impact}
                  </p>
                )}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* DOCUMENTS */}
        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 border-b-2 border-blue-500 pb-2">
            Documentación Pública
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {resumeData.documents.map((doc, idx) => {
              const Icon = iconMap[doc.icon] || FileText;
              return (
                <a
                  key={idx}
                  href={doc.url}
                  download
                  rel="noopener noreferrer"
                  className="group flex items-start p-3 sm:p-4 bg-white border border-slate-200 rounded-lg hover:border-blue-500 hover:shadow-md active:shadow-lg transition-all touch-manipulation min-h-[64px]"
                >
                  <div className="p-2 sm:p-2.5 bg-slate-100 rounded group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors flex-shrink-0">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="ml-2 sm:ml-3 flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-700 break-words">
                        {doc.name}
                      </h3>
                      <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 group-hover:text-blue-500 flex-shrink-0" />
                    </div>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">{doc.description}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-6 sm:p-8 md:p-12 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
            ¿Interesado en colaborar?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Estoy disponible para prácticas profesionales en sistemas, redes o
            desarrollo full-stack. Contáctame para conversar sobre cómo puedo
            aportar en tu equipo.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href={mailTo}
              className="px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-slate-100 active:bg-slate-200 transition-colors touch-manipulation min-h-[44px] flex items-center justify-center text-sm sm:text-base"
            >
              Enviar Email
            </a>
            <a
              href={resumeData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 sm:px-6 py-2.5 sm:py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 active:bg-slate-100 transition-colors touch-manipulation min-h-[44px] flex items-center justify-center text-sm sm:text-base"
            >
              LinkedIn
            </a>
            <a
              href={resumeData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 sm:px-6 py-2.5 sm:py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 active:bg-slate-100 transition-colors touch-manipulation min-h-[44px] flex items-center justify-center text-sm sm:text-base"
            >
              GitHub
            </a>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-300 text-center py-6 sm:py-8 mt-12 sm:mt-16">
        <p className="text-xs sm:text-sm px-4">
          © 2025 Tomás Chacana. Construido con Next.js, React y Tailwind CSS.
        </p>
      </footer>
    </main>
  );
}
