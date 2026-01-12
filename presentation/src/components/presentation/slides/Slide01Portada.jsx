import React from 'react';
import { Users, Database, BarChart3, GitBranch, ArrowRight } from 'lucide-react';

export default function Slide01Portada({ totalSlides, slideNumber }) {
  const agendaItems = [
    { label: 'Datos', icon: Database },
    { label: 'Procesamiento', icon: GitBranch },
    { label: 'RQ1', icon: BarChart3 },
    { label: 'RQ2', icon: BarChart3 },
    { label: 'RQ3', icon: BarChart3 },
    { label: 'Conclusiones', icon: Users },
  ];

  return (
    <div className="min-h-[calc(100vh-120px)] bg-gradient-to-br from-[#1e3a5f] via-[#2d4a6f] to-[#1a2d4a] rounded-2xl overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-blue-300 blur-3xl" />
      </div>

      {/* Slide Number */}
      <div className="absolute top-6 right-8 text-blue-200/50 text-sm font-mono">
        {String(slideNumber).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-[calc(100vh-120px)] px-8 py-12 pb-28 text-center">
        {/* Logo/Badge */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20">
            <Database className="w-4 h-4 text-amber-300" />
            <span className="text-sm text-blue-100 font-medium">Stack Overflow Developer Survey 2024</span>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-5xl mb-6">
          Análisis Estadístico del{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-300">
            Stack Overflow
          </span>{' '}
          Developer Survey 2024
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-blue-200/90 max-w-3xl mb-8 font-light leading-relaxed">
          Salarios, modalidad de trabajo y perfiles tecnológicos
        </p>

        {/* Technical Focus */}
        <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-3 mb-10">
          <p className="text-sm md:text-base text-blue-100 font-mono">
            Comparación salarial (log), regresión con control de confusión y clustering por stack
          </p>
        </div>

        {/* Authors */}
        <div className="mb-10">
          <p className="text-blue-200/70 text-sm uppercase tracking-wider mb-3">Autores</p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-4 py-2 bg-white/10 rounded-lg">
              <p className="text-white font-medium">Guillermo Hugues Cardona</p>
            </div>
            <div className="px-4 py-2 bg-white/10 rounded-lg">
              <p className="text-white font-medium">Camilo Perez Fleita</p>
            </div>
            <div className="px-4 py-2 bg-white/10 rounded-lg">
              <p className="text-white font-medium">Mauricio Medina Hernández</p>
            </div>
          </div>
          <p className="text-blue-200/60 text-sm mt-4">Curso: C-3</p>
        </div>

        {/* Agenda */}
        <div className="w-full max-w-4xl">
          <p className="text-blue-200/70 text-sm uppercase tracking-wider mb-4">Agenda</p>
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3">
            {agendaItems.map((item, index) => (
              <React.Fragment key={item.label}>
                <div className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors">
                  <item.icon className="w-4 h-4 text-amber-300" />
                  <span className="text-sm text-white">{item.label}</span>
                </div>
                {index < agendaItems.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-blue-300/50 hidden md:block" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Technical Note Footer */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-amber-900/20 to-orange-900/20 border-t border-amber-500/20 px-8 py-4">
        <div className="flex items-start gap-3 max-w-4xl mx-auto">
          <div className="w-1 h-12 bg-gradient-to-b from-amber-400 to-orange-400 rounded-full flex-shrink-0" />
          <div>
            <p className="text-xs font-semibold text-amber-300 uppercase tracking-wider mb-1">
              Nota Técnica
            </p>
            <p className="text-sm text-blue-100/80 leading-relaxed">
              Este trabajo cubre el ciclo completo de análisis: preparación de datos, análisis exploratorio (EDA), 
              inferencia estadística robusta y segmentación mediante técnicas de clustering.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
