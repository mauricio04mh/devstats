import React from 'react';
import SlideLayout from '../SlideLayout';
import ContentCard from '../ContentCard';
import StatBox from '../StatBox';
import PlaceholderChart from '../PlaceholderChart';
import { TrendingUp, DollarSign } from 'lucide-react';

export default function Slide05EDA1({ totalSlides, slideNumber }) {
  return (
    <SlideLayout
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      title="EDA — Distribución Salarial"
      subtitle="Análisis exploratorio de salario y justificación de la transformación logarítmica"
      technicalNote="La distribución salarial presenta colas largas típicas de datos de ingresos. La transformación logarítmica log(1 + salary) reduce la asimetría, estabiliza la varianza y facilita la interpretación multiplicativa de los coeficientes de regresión."
    >
      <div className="space-y-6">
        {/* Salary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatBox
            label="Mediana"
            value="$65,000"
            subtext="Salario anual (USD)"
            variant="primary"
          />
          <StatBox
            label="Percentil 25"
            value="$32,712"
            subtext="Cuartil inferior"
            variant="default"
          />
          <StatBox
            label="Percentil 75"
            value="$107,972"
            subtext="Cuartil superior"
            variant="default"
          />
          <StatBox
            label="IQR"
            value="$75,260"
            subtext="Rango intercuartílico"
            variant="accent"
          />
        </div>

        {/* Distribution Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ContentCard title="Características de la Distribución" icon={TrendingUp} variant="primary">
            <ul className="space-y-3 text-base">
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold text-lg">→</span>
                <span><strong>Asimetría positiva:</strong> cola derecha extendida</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold text-lg">→</span>
                <span><strong>Outliers:</strong> salarios extremadamente altos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold text-lg">→</span>
                <span><strong>Heterocedasticidad:</strong> varianza no constante</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold text-lg">→</span>
                <span><strong>Rango:</strong> desde ~$1 hasta &gt;$16,000,000</span>
              </li>
            </ul>
          </ContentCard>

          <ContentCard title="Justificación de log_salary" icon={DollarSign} variant="accent">
            <ul className="space-y-3 text-base">
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold text-lg">✓</span>
                <span>Reduce asimetría y normaliza la distribución</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold text-lg">✓</span>
                <span>Estabiliza la varianza (homocedasticidad)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold text-lg">✓</span>
                <span>Permite interpretación multiplicativa</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold text-lg">✓</span>
                <span>Práctica estándar en economía laboral</span>
              </li>
            </ul>
          </ContentCard>
        </div>

        {/* Histogramas reales */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <figure className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <img
              src="/histograma_salario_original.png"
              alt="Histograma de la variable ConvertedCompYearly"
              className="w-full h-full object-contain bg-slate-50"
            />
            <figcaption className="px-4 py-3 text-sm text-slate-700 bg-slate-50 border-t">
              Histograma salario original (ConvertedCompYearly) — se observan colas largas y asimetría positiva.
            </figcaption>
          </figure>

          <figure className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <img
              src="/histograma_log_salary.png"
              alt="Histograma de la variable log_salary"
              className="w-full h-full object-contain bg-slate-50"
            />
            <figcaption className="px-4 py-3 text-sm text-slate-700 bg-slate-50 border-t">
              Histograma log_salary — aproximación a normalidad tras la transformación log(1 + salary).
            </figcaption>
          </figure>
        </div>
      </div>
    </SlideLayout>
  );
}
