import React from 'react';
import SlideLayout from '../SlideLayout';
import ContentCard from '../ContentCard';
import BulletList from '../BulletList';
import DataTable from '../DataTable';
import { Filter, Database, Code2, Sparkles } from 'lucide-react';

export default function Slide03DatasetProcesado({ totalSlides, slideNumber }) {
  const tableHeaders = ['Variable', 'Tipo', 'Uso (RQ)'];
  const tableRows = [
    ['Country', 'Categórica', 'RQ2 (control)'],
    ['RemoteWork', 'Categórica', 'RQ1, RQ2'],
    ['YearsCodePro', 'Numérica', 'RQ2 (control)'],
    ['DevType', 'Categórica', 'RQ2 (control)'],
    ['EdLevel', 'Categórica', 'RQ2 (control)'],
    ['*HaveWorkedWith', 'Multi-select', 'RQ3 (clustering)'],
    ['ConvertedCompYearly', 'Numérica', 'RQ1, RQ2, RQ3'],
    ['has_salary', 'Binaria (derivada)', 'Filtrado'],
    ['YearsCodePro_num', 'Numérica (derivada)', 'RQ2'],
    ['log_salary', 'Numérica (derivada)', 'RQ1, RQ2, RQ3'],
  ];

  return (
    <SlideLayout
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      title="Dataset Procesado"
      subtitle="Selección de variables y creación de variables derivadas"
      technicalNote="Las covariables (Country, YearsCodePro, DevType, EdLevel) son críticas para el control de confusión en RQ2. Sin ellas, el efecto de RemoteWork estaría sesgado por diferencias estructurales entre grupos. La transformación log_salary reduce la asimetría positiva y estabiliza la varianza."
    >
      <div className="space-y-6">
        {/* Criteria and Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ContentCard title="Criterios de Selección" icon={Filter} variant="primary">
            <BulletList
              items={[
                'Relevancia directa para RQ1, RQ2 y RQ3',
                'Control de potenciales confusores',
                'Interpretabilidad de resultados',
                'Reproducibilidad del análisis',
              ]}
            />
          </ContentCard>
          
          <ContentCard title="Dataset Resultante" icon={Database} variant="default">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-2 bg-slate-50 rounded-lg">
                <span className="text-base text-slate-700">Total columnas</span>
                <span className="font-bold text-lg text-[#1e3a5f]">20</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-slate-50 rounded-lg">
                <span className="text-base text-slate-700">Variables base</span>
                <span className="font-bold text-lg text-[#1e3a5f]">17</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-slate-50 rounded-lg">
                <span className="text-base text-slate-700">Variables derivadas</span>
                <span className="font-bold text-lg text-amber-600">3</span>
              </div>
            </div>
          </ContentCard>
        </div>

        {/* Core Variables */}
        <ContentCard title="Variables Núcleo" icon={Code2}>
          <div className="flex flex-wrap gap-2">
            {['Country', 'RemoteWork', 'YearsCodePro', 'DevType', 'EdLevel', '*HaveWorkedWith'].map((v, i) => (
              <span 
                key={i} 
                className="px-3.5 py-2 bg-[#1e3a5f]/10 text-[#1e3a5f] font-mono text-base rounded-lg border border-[#1e3a5f]/20"
              >
                {v}
              </span>
            ))}
          </div>
        </ContentCard>

        {/* Derived Variables */}
        <ContentCard title="Variables Derivadas" icon={Sparkles} variant="accent">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-3 bg-white/70 rounded-lg border border-amber-200">
              <p className="font-mono text-base font-semibold text-slate-800 mb-1">has_salary</p>
              <p className="text-sm text-slate-700">I(ConvertedCompYearly ≠ NaN)</p>
              <p className="text-sm text-slate-600 mt-1">Indicador de reporte salarial</p>
            </div>
            <div className="p-3 bg-white/70 rounded-lg border border-amber-200">
              <p className="font-mono text-base font-semibold text-slate-800 mb-1">YearsCodePro_num</p>
              <p className="text-sm text-slate-700">Conversión numérica</p>
              <p className="text-sm text-slate-600 mt-1">Años de experiencia profesional</p>
            </div>
            <div className="p-3 bg-white/70 rounded-lg border border-amber-200">
              <p className="font-mono text-base font-semibold text-slate-800 mb-1">log_salary</p>
              <p className="text-sm text-slate-700">log(1 + ConvertedCompYearly)</p>
              <p className="text-sm text-slate-600 mt-1">Transformación logarítmica</p>
            </div>
          </div>
        </ContentCard>

        {/* Table */}
        <div>
          <DataTable
            headers={tableHeaders}
            rows={tableRows}
            caption="Resumen de variables seleccionadas y su uso en las preguntas de investigación"
          />
        </div>
      </div>
    </SlideLayout>
  );
}
