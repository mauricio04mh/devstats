import React from 'react';
import SlideLayout from '../SlideLayout';
import ContentCard from '../ContentCard';
import { Database, HelpCircle, DollarSign, Code } from 'lucide-react';

export default function Slide02Dataset({ totalSlides, slideNumber }) {
  const researchQuestions = [
    {
      id: 'RQ1',
      title: '¿Difiere el salario según modalidad de trabajo?',
      method: 'Contraste de grupos (ANOVA, Welch, Kruskal-Wallis)',
      variables: ['RemoteWork', 'log_salary'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 'RQ2',
      title: '¿Persiste el efecto ajustando por confusores?',
      method: 'Regresión lineal incremental con errores robustos (HC3)',
      variables: ['Country', 'YearsCodePro', 'DevType', 'EdLevel'],
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      id: 'RQ3',
      title: '¿Existen perfiles tecnológicos con salarios distintos?',
      method: 'K-Means Clustering + Kruskal-Wallis post-hoc',
      variables: ['*HaveWorkedWith'],
      color: 'from-amber-500 to-orange-500',
    },
  ];

  return (
    <SlideLayout
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      title="Dataset y Preguntas de Investigación"
      subtitle="Fuente de datos, alcance y las tres Research Questions (RQ1–RQ3)"
      technicalNote="Cada RQ está vinculada con un método estadístico específico: contraste de grupos para RQ1, regresión con control de confusión para RQ2, y clustering no supervisado para RQ3. Esta triangulación metodológica fortalece la robustez del análisis."
    >
      <div className="space-y-6">
        {/* Dataset Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ContentCard title="Fuente de Datos" icon={Database} variant="primary">
            <p className="font-semibold text-[#1e3a5f]">Stack Overflow Annual Developer Survey 2024</p>
            <p className="text-slate-500 mt-1">Encuesta anual a desarrolladores</p>
          </ContentCard>
          
          <ContentCard title="Datos Crudos" icon={Code} variant="default">
            <div className="space-y-1">
              <p><span className="font-semibold">N =</span> 65,437 observaciones</p>
              <p><span className="font-semibold">P =</span> 114 variables</p>
            </div>
          </ContentCard>
          
          <ContentCard title="Variable Principal" icon={DollarSign} variant="accent">
            <p className="font-mono text-sm bg-slate-100 px-2 py-1 rounded inline-block">ConvertedCompYearly</p>
            <p className="text-slate-500 mt-1">Compensación anual convertida a USD</p>
          </ContentCard>
        </div>

        {/* Research Questions */}
        <div>
          <h3 className="text-base font-semibold text-slate-600 uppercase tracking-wider mb-4 flex items-center gap-2">
            <HelpCircle className="w-5 h-5" />
            Preguntas de Investigación
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {researchQuestions.map((rq) => (
              <div
                key={rq.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className={`bg-gradient-to-r ${rq.color} px-5 py-3.5`}>
                  <span className="text-white font-extrabold text-xl">{rq.id}</span>
                </div>
                <div className="p-4 space-y-3">
                  <p className="text-base text-slate-800 font-semibold leading-relaxed">
                    {rq.title}
                  </p>
                  <div className="border-t border-slate-100 pt-3">
                    <p className="text-sm text-slate-500 uppercase tracking-wider mb-1">Método</p>
                    <p className="text-sm text-slate-700">{rq.method}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 uppercase tracking-wider mb-1">Variables Clave</p>
                    <div className="flex flex-wrap gap-1">
                      {rq.variables.map((v, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-mono rounded">
                          {v}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </SlideLayout>
  );
}
