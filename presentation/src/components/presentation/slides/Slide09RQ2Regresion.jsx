import React from 'react';
import SlideLayout from '../SlideLayout';
import ContentCard from '../ContentCard';
import DataTable from '../DataTable';
import PlaceholderChart from '../PlaceholderChart';
import { LineChart, TrendingUp, Layers } from 'lucide-react';

export default function Slide09RQ2Regresion({ totalSlides, slideNumber }) {
  const modelsHeaders = ['Modelo', 'Variables', 'R²', 'Δ R²'];
  const modelsRows = [
    ['M0', 'RemoteWork', '0.017', '—'],
    ['M1', '+ YearsCodePro_num', '0.123', '+0.106'],
    ['M2', '+ EdLevel + DevType', '0.153', '+0.030'],
    ['M3', '+ Country', '0.464', '+0.311'],
  ];

  const coefficientsHeaders = ['Variable', 'β (M3)', 'exp(β) − 1', 'IC 95%', 'p-value'];
  const coefficientsRows = [
    ['Hybrid (ref: In-person)', '0.20616', '+22.90%', '[+18.36%, +27.61%]', '6.40e−27'],
    ['Remote (ref: In-person)', '0.29780', '+34.69%', '[+29.08%, +40.54%]', '7.13e−43'],
  ];

  return (
    <SlideLayout
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      title="RQ2 — Regresión Incremental y Control de Confusión"
      subtitle="Modelos anidados con errores robustos (HC3)"
      technicalNote="El ajuste por Country (M3) produce el mayor incremento en R² (+0.311), revelando la heterogeneidad salarial por país como principal confusor. Los coeficientes de Remote/Hybrid disminuyen respecto a M0 pero permanecen significativos, confirmando un efecto ajustado real."
    >
      <div className="space-y-6">
        {/* Objective */}
        <ContentCard title="Objetivo" icon={TrendingUp} variant="primary">
          <p className="text-base">
            Estimar el efecto <strong>ajustado</strong> de RemoteWork sobre log_salary, 
            controlando secuencialmente por potenciales confusores: experiencia, educación, 
            tipo de desarrollador y país.
          </p>
        </ContentCard>

        {/* Models Table */}
        <ContentCard title="Modelos Incrementales" icon={Layers}>
          <DataTable
            headers={modelsHeaders}
            rows={modelsRows}
            caption="Todos los modelos usan errores robustos HC3 para corregir heterocedasticidad"
          />
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { model: 'M0', r2: '1.7%', label: 'Solo RemoteWork' },
              { model: 'M1', r2: '12.3%', label: '+ Experiencia' },
              { model: 'M2', r2: '15.3%', label: '+ Ed. + DevType' },
              { model: 'M3', r2: '46.4%', label: '+ Country' },
            ].map((m) => (
              <div key={m.model} className="p-3 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg border border-slate-200 text-center">
                <p className="text-sm text-slate-600">{m.model}</p>
                <p className="text-2xl font-bold text-[#1e3a5f]">{m.r2}</p>
                <p className="text-sm text-slate-700">{m.label}</p>
              </div>
            ))}
          </div>
        </ContentCard>

        {/* Gráfico + Tabla */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <figure className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <img
              src="/coefplot_modelos.png"
              alt="Coefplot de Remote y Hybrid por modelo"
              className="w-full h-full object-contain bg-slate-50"
            />
            <figcaption className="px-4 py-3 text-sm text-slate-700 bg-slate-50 border-t">
              Coefplot β(Remote/Hybrid) por modelo con IC95% y efecto del ajuste secuencial.
            </figcaption>
          </figure>
          <ContentCard title="Coeficientes del Modelo Final (M3)" icon={LineChart} variant="accent">
            <DataTable
              headers={coefficientsHeaders}
              rows={coefficientsRows}
              caption="La interpretación porcentual se obtiene como exp(β) − 1. Ejemplo: β = 0.298 → exp(0.298) − 1 ≈ 34.69%"
            />
          </ContentCard>
        </div>

        {/* Celdas resumen */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl border border-emerald-200">
            <p className="font-semibold text-emerald-800 mb-2">Remote (vs In-person)</p>
            <p className="text-3xl font-bold text-emerald-700">+34.7%</p>
            <p className="text-base text-slate-700 mt-1">β ≈ 0.298, ajustado por confusores</p>
          </div>
          <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
            <p className="font-semibold text-blue-800 mb-2">Hybrid (vs In-person)</p>
            <p className="text-3xl font-bold text-blue-700">+22.9%</p>
            <p className="text-base text-slate-700 mt-1">β ≈ 0.206, ajustado por confusores</p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
