import React from 'react';
import SlideLayout from '../SlideLayout';
import ContentCard from '../ContentCard';
import DataTable from '../DataTable';
import { Users, TrendingUp } from 'lucide-react';

export default function Slide07RQ1Descriptivos({ totalSlides, slideNumber }) {
  const tableHeaders = ['Modalidad', 'n', 'Media (log_salary)', 'Mediana', 'SD'];
  const tableRows = [
    ['Hybrid', '9,899', '10.88', '11.11', '1.20'],
    ['Remote', '9,591', '10.86', '11.22', '1.51'],
    ['In-person', '3,937', '10.35', '10.71', '1.51'],
  ];

  return (
    <SlideLayout
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      title="RQ1 — Estadísticos Descriptivos por Modalidad"
      subtitle="Comparación de log_salary entre Remote, Hybrid e In-person"
      technicalNote="Se observa un desplazamiento de medianas: In-person presenta valores notablemente más bajos que Remote y Hybrid, mientras que estas últimas dos modalidades muestran considerable solapamiento en sus distribuciones. La diferencia en log_salary puede interpretarse en términos porcentuales mediante exp(Δlog) − 1."
    >
      <div className="space-y-6">
        {/* Population Filter */}
        <ContentCard title="Población de Análisis" icon={Users} variant="primary">
          <div className="flex flex-wrap gap-3">
            <div className="px-4 py-2 bg-white rounded-lg border border-slate-200">
              <span className="text-base text-slate-700">Filtro: </span>
              <span className="font-mono text-base font-semibold text-[#1e3a5f]">has_salary = True</span>
            </div>
            <div className="px-4 py-2 bg-white rounded-lg border border-slate-200">
              <span className="text-base text-slate-700">RemoteWork ∈ </span>
              <span className="font-mono text-base font-semibold text-[#1e3a5f]">{'{Remote, Hybrid, In-person}'}</span>
            </div>
            <div className="px-4 py-2 bg-emerald-50 rounded-lg border border-emerald-200">
              <span className="text-base text-slate-700">N total: </span>
              <span className="font-semibold text-lg text-emerald-700">23,427</span>
            </div>
          </div>
        </ContentCard>

        {/* Summary Table */}
        <DataTable
          headers={tableHeaders}
          rows={tableRows}
          caption="Estadísticos descriptivos de log_salary por modalidad de trabajo"
        />

        {/* Visual Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl border border-blue-200 p-5">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-blue-500" />
              <p className="font-semibold text-blue-800">Hybrid</p>
            </div>
            <p className="text-3xl font-bold text-blue-700">10.88</p>
            <p className="text-base text-blue-700 mt-1">Media log_salary</p>
            <p className="text-sm text-slate-600 mt-2">n = 9,899 | Más frecuente</p>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-xl border border-emerald-200 p-5">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <p className="font-semibold text-emerald-800">Remote</p>
            </div>
            <p className="text-3xl font-bold text-emerald-700">10.86</p>
            <p className="text-base text-emerald-700 mt-1">Media log_salary</p>
            <p className="text-sm text-slate-600 mt-2">n = 9,591 | ~Igual a Hybrid</p>
          </div>
          
          <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-xl border border-amber-200 p-5">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <p className="font-semibold text-amber-800">In-person</p>
            </div>
            <p className="text-3xl font-bold text-amber-700">10.35</p>
            <p className="text-base text-amber-700 mt-1">Media log_salary</p>
            <p className="text-sm text-slate-600 mt-2">n = 3,937 | Más bajo</p>
          </div>
        </div>

        {/* Key Observation */}
        <ContentCard title="Observación Preliminar" icon={TrendingUp} variant="accent">
          <p className="text-base">
            <strong>In-person</strong> muestra log_salary significativamente más bajo (~0.5 unidades log menos).
            <br />
            <strong>Remote</strong> y <strong>Hybrid</strong> presentan medias muy similares (Δ ≈ 0.018), 
            sugiriendo distribuciones solapadas que requieren contraste formal.
          </p>
        </ContentCard>

        {/* Boxplot y Violin */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <figure className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <img
              src="/boxplot_logsalary_remotework.png"
              alt="Boxplot de log_salary por modalidad de trabajo"
              className="w-full h-full object-contain bg-slate-50"
            />
            <figcaption className="px-4 py-3 text-sm text-slate-700 bg-slate-50 border-t">
              Boxplot log_salary por RemoteWork — mediana, IQR y outliers por modalidad.
            </figcaption>
          </figure>

          <figure className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <img
              src="/violin_logsalary_remotework.png"
              alt="Violin plot de log_salary por modalidad de trabajo"
              className="w-full h-full object-contain bg-slate-50"
            />
            <figcaption className="px-4 py-3 text-sm text-slate-700 bg-slate-50 border-t">
              Violin plot log_salary por RemoteWork — densidad y forma de la distribución.
            </figcaption>
          </figure>
        </div>
      </div>
    </SlideLayout>
  );
}
