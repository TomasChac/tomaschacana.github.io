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
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                {resumeData.personal.name}
              </h1>
              <p className="text-lg text-blue-600 font-semibold mt-2 flex items-center gap-2">
                <Terminal className="w-5 h-5" />
                {resumeData.personal.role}
              </p>
              <div className="flex flex-wrap gap-4 mt-4 text-sm text-slate-600">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 flex-shrink-0" /> {resumeData.personal.location}
                </span>
                <a
                  href={mailTo}
                  className="flex items-center gap-1 hover:text-blue-600 transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" /> {resumeData.personal.email}
                </a>
              </div>
            </div>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href={resumeData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 bg-slate-100 hover:bg-blue-100 hover:text-blue-600 rounded-lg transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={resumeData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 bg-slate-100 hover:bg-blue-100 hover:text-blue-600 rounded-lg transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={mailTo}
                aria-label="Contactar"
                className="px-4 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
              >
                Contáctame
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
        {/* ABOUT */}
        <section>
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-500 pb-2">
            Sobre mí
          </h2>
          <p className="text-slate-700 leading-relaxed text-lg">
            {resumeData.personal.about}
          </p>
        </section>

        {/* EDUCATION */}
        <section>
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-blue-500 pb-2">
            Educación
          </h2>
          <div className="space-y-6">
            {resumeData.education.map((edu, idx) => (
              <article
                key={idx}
                className="relative pl-6 border-l-2 border-blue-500 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                  <h3 className="font-bold text-lg text-slate-900">
                    {edu.institution}
                  </h3>
                  <span className="text-sm font-mono text-slate-600 bg-slate-100 px-3 py-1 rounded mt-2 sm:mt-0 w-fit">
                    {edu.period}
                  </span>
                </div>
                <p className="text-blue-600 font-semibold mb-1">{edu.degree}</p>
                <p className="text-slate-600 text-sm mb-2">{edu.status}</p>
                <p className="text-slate-600">
                  <span className="font-medium">Enfoque:</span> {edu.focus}
                </p>
                {edu.gpa && (
                  <p className="text-slate-600 mt-1">
                    <span className="font-medium">Promedio:</span> {edu.gpa}
                  </p>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section>
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-blue-500 pb-2">
            Competencias Técnicas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Sistemas */}
            <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <Cpu className="w-5 h-5 text-blue-600" />
                <h3 className="font-bold text-slate-900">Sistemas</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.sistemas.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Redes */}
            <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-green-600" />
                <h3 className="font-bold text-slate-900">Redes & Telecom</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.redes.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Programación */}
            <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <Code2 className="w-5 h-5 text-purple-600" />
                <h3 className="font-bold text-slate-900">Programación</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.programacion.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <Terminal className="w-5 h-5 text-orange-600" />
                <h3 className="font-bold text-slate-900">Herramientas & DevOps</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.tools.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="mt-6">
            <h3 className="font-bold text-slate-900 mb-3">Idiomas</h3>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.languages.map((lang, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-sm font-medium"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section>
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-blue-500 pb-2">
            Experiencia Profesional
          </h2>
          <div className="space-y-6">
            {resumeData.experience.map((job, idx) => (
              <article
                key={idx}
                className="relative pl-6 border-l-2 border-slate-300 hover:border-blue-500 transition-colors bg-white p-4 rounded-lg shadow-sm hover:shadow-md"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                  <h3 className="font-bold text-lg text-slate-900">
                    {job.company}
                  </h3>
                  <span className="text-sm font-mono text-slate-600 bg-slate-100 px-3 py-1 rounded mt-2 sm:mt-0 w-fit">
                    {job.period}
                  </span>
                </div>
                <p className="text-blue-600 font-semibold mb-3">{job.role}</p>
                <ul className="list-disc list-inside text-slate-600 space-y-2 text-sm">
                  {job.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section>
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-blue-500 pb-2">
            Proyectos Destacados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resumeData.projects.map((project, idx) => (
              <a
                key={idx}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col bg-white border border-slate-200 rounded-lg p-5 hover:border-blue-500 hover:shadow-lg transition-all h-full"
              >
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                  {project.title}
                  <ExternalLink className="w-4 h-4 inline ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-slate-600 text-sm mb-3">{project.desc}</p>
                {project.impact && (
                  <p className="text-xs text-slate-500 italic mb-3 flex-grow">
                    {project.impact}
                  </p>
                )}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium"
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
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-blue-500 pb-2">
            Documentación Pública
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resumeData.documents.map((doc, idx) => {
              const Icon = iconMap[doc.icon] || FileText;
              return (
                <a
                  key={idx}
                  href={doc.url}
                  download
                  rel="noopener noreferrer"
                  className="group flex items-start p-4 bg-white border border-slate-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
                >
                  <div className="p-2.5 bg-slate-100 rounded group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="ml-3 flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-700">
                        {doc.name}
                      </h3>
                      <Download className="w-4 h-4 text-slate-400 group-hover:text-blue-500 flex-shrink-0" />
                    </div>
                    <p className="text-xs text-slate-500 mt-1">{doc.description}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            ¿Interesado en colaborar?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Estoy disponible para prácticas profesionales en sistemas, redes o
            desarrollo full-stack. Contáctame para conversar sobre cómo puedo
            aportar en tu equipo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={mailTo}
              className="px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-slate-100 transition-colors"
            >
              Enviar Email
            </a>
            <a
              href={resumeData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={resumeData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              GitHub
            </a>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-300 text-center py-6 mt-16">
        <p className="text-sm">
          © 2024 Tomás Chacana. Construido con Next.js, React y Tailwind CSS.
        </p>
      </footer>
    </main>
  );
}
