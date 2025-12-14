// app/data/resume.ts
import { FileText, ShieldCheck, User } from 'lucide-react';

export const resumeData = {
  personal: {
    name: "Tomás Rodrigo Raúl Chacana Cuadra",
    role: "Ingeniero Civil Telemática | Sistemas Críticos & Full-Stack",
    location: "Valparaíso / Santiago",
    email: "tomaschacana123@gmail.com",
    github: "https://github.com/tomaschacana",
    linkedin: "https://linkedin.com/in/tomas-chacana",
    about: "7° semestre Ingeniería Civil Telemática (USM). Stack técnico en Linux, redes TCP/IP y desarrollo full-stack. Experiencia práctica en administración de sistemas en producción y arquitectura de software. Busco prácticas profesionales donde pueda aportar en operaciones, infraestructura o desarrollo de software crítico.",
  },
  education: [
    {
      institution: "Universidad Técnica Federico Santa María (UTFSM)",
      degree: "Ingeniería Civil Telemática",
      status: "7° semestre — Egreso estimado Diciembre 2028",
      period: "2023 - 2028",
      focus: "Redes de Computadores, Sistemas Operativos, Ingeniería de Software, Estructuras de Datos, Bases de Datos, Sistemas de Telecomunicaciones",
      gpa: "73/100 (Escala USM)",
    },
  ],
  skills: {
    sistemas: ["Linux (administración, scripting, servicios)"],
    redes: ["TCP/IP", "VLANs", "Configuración básica Cisco/Huawei", "Servidores locales"],
    programacion: ["Python", "Java", "C/C++ (estructuras de datos, POO)", "SQL (modelado relacional, consultas)"],
    tools: ["Git/GitLab", "OpenGL", "LaTeX", "Moodle LMS"],
    devops: ["Monitoreo de servicios", "Resolución de incidentes", "Documentación técnica"],
    languages: ["Español (Nativo)", "Inglés (Avanzado - Nivel 5 USM)"],
  },
  experience: [
    {
      company: "Portal Agora SpA (Consultoría y Capacitación)",
      role: "Soporte en Administración de Plataformas",
      period: "Nov 2024 - Feb 2025",
      description: [
        "Administré plataforma Moodle en producción, asegurando disponibilidad operativa para procesos de capacitación.",
        "Configuré y mantuve componentes de e-commerce (precios, checkout, pasarela de pago).",
        "Diagnostiqué y resolví incidencias técnicas de primer nivel, coordinando escalamiento con equipo de desarrollo.",
        "Gestioné contenido y estructura del LMS, aplicando buenas prácticas operativas.",
      ],
    },
  ],
  projects: [
    {
      title: "NDAssistant — Sistema IoT de Apoyo a la Neurodiversidad",
      tech: ["IoT", "Microcontroladores", "Git"],
      desc: "Diseñé e implementé un sistema de adquisición de datos y control electrónico, integrando hardware y software. Programé firmware de bajo nivel para microcontroladores y módulos electrónicos.",
      url: "https://gitlab.com/tomaschacana/ndassistant",
      impact: "Proyecto académico (Mar-Jun 2023) aplicando ingeniería de sistemas embebidos.",
    },
    {
      title: "Sistema de Gestión de Inventario",
      tech: ["Java", "SQL", "Git"],
      desc: "Diseñé un modelo relacional en SQL para gestión de inventario y seguimiento de KPIs. Implementé lógica de negocio en Java, aplicando principios de programación orientada a objetos.",
      url: "https://github.com/tomaschacana/inventario",
      impact: "Proyecto académico (Mar-Jun 2025) demostrando diseño de bases de datos y arquitectura de software.",
    },
    {
      title: "Integraph TFKV",
      tech: ["C++", "OpenGL"],
      desc: "Desarrollé software gráfico en C++ utilizando OpenGL. Implementé algoritmos enfocados en rendimiento y eficiencia computacional.",
      url: "https://gitlab.com/tomaschacana/integraph-tfkv",
      impact: "Proyecto académico (Ago-Dic 2023) demostrando dominio en programación de bajo nivel.",
    },
  ],
  documents: [
    {
      name: "Resumen Académico",
      type: "Certificado",
      description: "Historial oficial de cursos y avance curricular (USM).",
      url: "/docs/resumen-academico.pdf",
      icon: "FileText",
    },
    {
      name: "Seguro Escolar Vigente",
      type: "Legal",
      description: "Decreto Supremo Nº 313 - Cobertura de accidentes estudiantiles.",
      url: "/docs/seguro-escolar.pdf",
      icon: "ShieldCheck",
    },
    {
      name: "CV Completo",
      type: "PDF",
      description: "Curriculum Vitae detallado en formato profesional.",
      url: "/docs/cv-tomas-chacana.pdf",
      icon: "User",
    },
  ],
};