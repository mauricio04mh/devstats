import React from 'react';
import SlideLayout from '../SlideLayout';
import ContentCard from '../ContentCard';
import StatBox from '../StatBox';
import { Clock, Building2 } from 'lucide-react';

export default function Slide06EDA2({ totalSlides, slideNumber }) {
  return (
    <SlideLayout
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      title="EDA — Experiencia y Modalidad de Trabajo"
      subtitle="Distribución de años de experiencia profesional y composición por modalidad"
      technicalNote="La experiencia profesional (YearsCodePro_num) es un potencial confusor importante: podría correlacionar tanto con la modalidad de trabajo como con el salario. Su inclusión como covariable es esencial para aislar el efecto de RemoteWork en RQ2."
    >
      <div className="space-y-6">
        {/* Experience Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatBox
            label="Mediana Experiencia"
            value="7 años"
            subtext="YearsCodePro_num"
            variant="primary"
          />
          <StatBox
            label="Percentil 25"
            value="3 años"
            subtext="Cuartil inferior"
            variant="default"
          />
          <StatBox
            label="Percentil 75"
            value="15 años"
            subtext="Cuartil superior"
            variant="default"
          />
          <StatBox
            label="Máximo"
            value="50+ años"
            subtext="Desarrolladores senior"
            variant="accent"
          />
        </div>

        {/* Remote Work Distribution */}
        <ContentCard title="Distribución por Modalidad de Trabajo (RemoteWork)" icon={Building2} variant="primary">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl border border-blue-200 text-center">
              <p className="text-3xl font-bold text-blue-700">~35%</p>
              <p className="text-base font-semibold text-blue-800 mt-1">Hybrid</p>
              <p className="text-sm text-blue-700 mt-1">Modalidad más frecuente</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-xl border border-emerald-200 text-center">
              <p className="text-3xl font-bold text-emerald-700">~33%</p>
              <p className="text-base font-semibold text-emerald-800 mt-1">Remote</p>
              <p className="text-sm text-emerald-700 mt-1">Trabajo 100% remoto</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-xl border border-amber-200 text-center">
              <p className="text-3xl font-bold text-amber-700">~17%</p>
              <p className="text-base font-semibold text-amber-800 mt-1">In-person</p>
              <p className="text-sm text-amber-700 mt-1">100% presencial</p>
            </div>
          </div>
        </ContentCard>

        {/* Experience Info */}
        <ContentCard title="Características de YearsCodePro" icon={Clock}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-base font-semibold text-slate-800 mb-2">Distribución:</p>
              <ul className="space-y-2 text-base text-slate-700">
                <li>• Asimetría positiva moderada</li>
                <li>• Concentración entre 2-15 años</li>
                <li>• Cola derecha con seniors (&gt;25 años)</li>
              </ul>
            </div>
            <div>
              <p className="text-base font-semibold text-slate-800 mb-2">Rol en el Análisis:</p>
              <ul className="space-y-2 text-base text-slate-700">
                <li>• Control de confusión en RQ2</li>
                <li>• Covariable numérica</li>
                <li>• Relación esperada: + años → + salario</li>
              </ul>
            </div>
          </div>
        </ContentCard>

        {/* Gráficos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <figure className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <img
              src="/hist_yearscodepro.png"
              alt="Histograma de YearsCodePro_num"
              className="w-full h-full object-contain bg-slate-50"
            />
            <figcaption className="px-4 py-3 text-sm text-slate-700 bg-slate-50 border-t">
              Histograma YearsCodePro_num — distribución de años de experiencia profesional.
            </figcaption>
          </figure>

          <figure className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <img
              src="/barplot_remotework_n.png"
              alt="Frecuencia absoluta por modalidad de trabajo"
              className="w-full h-full object-contain bg-slate-50"
            />
            <figcaption className="px-4 py-3 text-sm text-slate-700 bg-slate-50 border-t">
              Frecuencia absoluta RemoteWork — recuento de Remote, Hybrid e In-person.
            </figcaption>
          </figure>
        </div>
      </div>
    </SlideLayout>
  );
}
