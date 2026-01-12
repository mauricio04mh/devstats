import React from 'react';
import SlideLayout from '../SlideLayout';
import ContentCard from '../ContentCard';
import DataTable from '../DataTable';
import { BarChart3, Trophy, ArrowUpRight } from 'lucide-react';

export default function Slide13RQ3Salarios({ totalSlides, slideNumber }) {
  const salaryHeaders = ['Cluster', 'Mediana (USD)', 'Media (USD)', 'n'];
  const salaryRows = [
    ['Python Backend/Data + Cloud', '~$75,600', 'Editable', '4,845'],
    ['.NET Enterprise', '~$69,800', 'Editable', '4,360'],
    ['Java/Spring', '~$69,400', 'Editable', '3,769'],
    ['Systems/Low-level + Python', '~$63,700', 'Editable', '2,882'],
    ['Modern JS Fullstack', '~$56,000', 'Editable', '7,531'],
  ];

  return (
    <SlideLayout
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      title="RQ3 — Ranking Salarial y Visualizaciones"
      subtitle="Salario estimado por cluster y piezas gráficas sugeridas"
      technicalNote="El ranking salarial (Python/Cloud > .NET ≈ Java > Systems > JS Fullstack) refleja patrones del mercado pero requiere cautela: los clusters agrupan por stack, no por seniority o especialización. La excepción .NET vs Systems (p_corr ≈ 0.606) sugiere solapamiento entre estos perfiles."
    >
      <div className="space-y-6">
        <ContentCard title="Ranking Salarial por Cluster (Mediana USD)" icon={BarChart3} variant="accent">
          <DataTable
            headers={salaryHeaders}
            rows={salaryRows}
            caption="Ordenado de mayor a menor mediana salarial estimada"
          />
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl border border-emerald-200">
              <div className="flex items-center gap-2 mb-1">
                <Trophy className="w-5 h-5 text-emerald-700" />
                <p className="text-sm uppercase tracking-wider text-emerald-700 font-semibold">Top cluster</p>
              </div>
              <p className="text-2xl font-bold text-emerald-800">Python Backend/Data + Cloud</p>
              <p className="text-base text-slate-700 mt-1">Mediana ~ $75,600 | n = 4,845</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2 mb-1">
                <ArrowUpRight className="w-5 h-5 text-blue-700" />
                <p className="text-sm uppercase tracking-wider text-blue-700 font-semibold">Brecha salarial</p>
              </div>
              <p className="text-2xl font-bold text-blue-800">~$19.6K de diferencia</p>
              <p className="text-base text-slate-700 mt-1">Entre el top y Modern JS Fullstack (mediana más baja)</p>
            </div>
          </div>
        </ContentCard>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <figure className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <img
              src="/barplot_cluster_sizes.svg"
              alt="Barplot de tamaños por cluster"
              className="w-full h-full object-contain bg-slate-50"
            />
            <figcaption className="px-4 py-3 text-sm text-slate-700 bg-slate-50 border-t">
              Barplot tamaños por cluster — frecuencia absoluta de desarrolladores.
            </figcaption>
          </figure>
          <figure className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <img
              src="/boxplot_log_salary_cluster.png"
              alt="Boxplot de log_salary por cluster"
              className="w-full h-full object-contain bg-slate-50"
            />
            <figcaption className="px-4 py-3 text-sm text-slate-700 bg-slate-50 border-t">
              Boxplot log_salary por cluster — mediana, IQR y outliers.
            </figcaption>
          </figure>
          <figure className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <img
              src="/tabla_salary_est.svg"
              alt="Tabla de medianas y medias de salary_est por cluster"
              className="w-full h-full object-contain bg-slate-50"
            />
            <figcaption className="px-4 py-3 text-sm text-slate-700 bg-slate-50 border-t">
              Tabla Median/Mean salary_est — estadísticos descriptivos por cluster (USD).
            </figcaption>
          </figure>
        </div>
      </div>
    </SlideLayout>
  );
}
