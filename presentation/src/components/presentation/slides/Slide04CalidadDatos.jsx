import React from 'react';
import SlideLayout from '../SlideLayout';
import ContentCard from '../ContentCard';
import StatBox from '../StatBox';
import { AlertTriangle, Shield } from 'lucide-react';

export default function Slide04CalidadDatos({ totalSlides, slideNumber }) {
  return (
    <SlideLayout
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      title="Calidad de Datos"
      subtitle="Análisis de missingness en el reporte salarial"
    >
      <div className="space-y-6">
        {/* Missingness Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatBox
            label="Missing en Salario"
            value="64.19%"
            subtext="ConvertedCompYearly ≈ NaN"
            variant="warning"
          />
          <StatBox
            label="log_salary Missing"
            value="64.19%"
            subtext="Hereda el missingness"
            variant="warning"
          />
          <StatBox
            label="Submuestra Válida"
            value="~23,400"
            subtext="has_salary = True"
            variant="success"
          />
        </div>

        {/* Implications */}
        <div className="grid grid-cols-1 gap-4">
          <ContentCard title="Implicación del Missingness" icon={AlertTriangle} variant="warning">
            <p className="mb-3">
              La inferencia salarial está <strong>condicionada a los reportantes</strong>. 
              Los resultados aplican solo a quienes declaran su salario.
            </p>
          </ContentCard>
        </div>

        {/* Mitigation */}
        <ContentCard title="Estrategia de Mitigación" icon={Shield} variant="success">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
              <p className="font-semibold text-emerald-800 text-base mb-1">Submuestra</p>
              <p className="text-sm text-slate-700">Análisis restringido a has_salary = True</p>
            </div>
            <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
              <p className="font-semibold text-emerald-800 text-base mb-1">Control por País</p>
              <p className="text-sm text-slate-700">Country como covariable en regresión</p>
            </div>
            <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
              <p className="font-semibold text-emerald-800 text-base mb-1">Transformación</p>
              <p className="text-sm text-slate-700">Uso de log_salary para normalizar</p>
            </div>
          </div>
        </ContentCard>

        {/* Gráfico Missingness */}
        <div className="grid grid-cols-1 gap-4">
          <figure className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <img
              src="/barplot%25missing_variables.png"
              alt="Barplot de porcentaje de missing por variable (Top-5)"
              className="w-full h-full object-contain bg-slate-50"
            />
            <figcaption className="px-4 py-3 text-sm text-slate-700 bg-slate-50 border-t">
              Barplot % Missing por Variable (Top-5) — variables con mayor proporción de valores faltantes.
            </figcaption>
          </figure>
        </div>
      </div>
    </SlideLayout>
  );
}
