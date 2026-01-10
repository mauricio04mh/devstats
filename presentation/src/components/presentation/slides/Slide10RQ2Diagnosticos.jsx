import React from 'react';
import SlideLayout from '../SlideLayout';
import ContentCard from '../ContentCard';
import BulletList from '../BulletList';
import { Search, AlertTriangle, Shield, Info } from 'lucide-react';

export default function Slide10RQ2Diagnosticos({ totalSlides, slideNumber }) {
  return (
    <SlideLayout
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      title="RQ2 — Diagnósticos del Modelo Final"
      subtitle="Verificación de supuestos y limitaciones causales"
      technicalNote="Los diagnósticos revelan desviaciones de normalidad en residuos (esperado con N grande) y cierta heterocedasticidad residual. El uso de log_salary mitiga la heterocedasticidad original, y los errores robustos HC3 proporcionan inferencia válida bajo violaciones moderadas. Crucialmente, asociación ≠ causalidad."
    >
      <div className="space-y-6">
        {/* Diagnostics Overview */}
        <ContentCard title="Panel de Diagnósticos" icon={Search} variant="primary">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
            <div className="p-4 bg-white rounded-lg border border-slate-200">
              <p className="font-semibold text-slate-800 mb-2">Histograma de Residuos</p>
              <p className="text-base text-slate-700">
                Evalúa aproximación a normalidad. Con N grande, desviaciones leves son tolerables.
              </p>
              <div className="mt-2 px-3 py-1.5 bg-amber-50 rounded text-sm text-amber-800 font-semibold">
                ⚠️ Colas ligeramente pesadas
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg border border-slate-200">
              <p className="font-semibold text-slate-800 mb-2">Residuos vs Ajustados</p>
              <p className="text-base text-slate-700">
                Detecta patrones de heterocedasticidad y no linealidad.
              </p>
              <div className="mt-2 px-3 py-1.5 bg-amber-50 rounded text-sm text-amber-800 font-semibold">
                ⚠️ Leve patrón de embudo
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg border border-slate-200">
              <p className="font-semibold text-slate-800 mb-2">QQ-Plot</p>
              <p className="text-base text-slate-700">
                Compara cuantiles observados vs teóricos normales.
              </p>
              <div className="mt-2 px-3 py-1.5 bg-amber-50 rounded text-sm text-amber-800 font-semibold">
                ⚠️ Desviación en colas
              </div>
            </div>
          </div>
        </ContentCard>

        {/* Decisions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ContentCard title="Decisiones de Modelado" icon={Shield} variant="success">
            <BulletList
              items={[
                <span><strong>Transformación log:</strong> Reduce asimetría y heterocedasticidad original</span>,
                <span><strong>Errores HC3:</strong> Inferencia robusta bajo heterocedasticidad residual</span>,
                <span><strong>N grande:</strong> Teorema Central del Límite justifica inferencia asintótica</span>,
                <span><strong>Convergencia:</strong> Resultados consistentes entre métodos</span>,
              ]}
            />
          </ContentCard>
          
          <ContentCard title="Limitación Causal" icon={AlertTriangle} variant="warning">
            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-base text-amber-900 font-semibold mb-2">
                ⚠️ Asociación ≠ Causalidad
              </p>
              <p className="text-base text-slate-800">
                Este es un estudio <strong>observacional</strong>. Aunque controlamos por confusores observados, 
                pueden existir confusores no medidos (autoselección, habilidades, sector, etc.).
              </p>
              <p className="text-sm text-slate-600 mt-2">
                Los coeficientes representan <strong>asociaciones ajustadas</strong>, no efectos causales.
              </p>
            </div>
          </ContentCard>
        </div>

        {/* Interpretation Guide */}
        <ContentCard title="Guía de Interpretación" icon={Info}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-3 bg-slate-50 rounded-lg">
              <p className="text-sm font-semibold text-slate-600 uppercase mb-1">Residuos Normales</p>
              <p className="text-base text-slate-800">
                Ideal: campana simétrica. Aceptable: desviaciones leves con N &gt; 1000.
              </p>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg">
              <p className="text-sm font-semibold text-slate-600 uppercase mb-1">Residuos vs Fitted</p>
              <p className="text-base text-slate-800">
                Ideal: nube aleatoria. Problema: patrones de embudo o curvatura.
              </p>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg">
              <p className="text-sm font-semibold text-slate-600 uppercase mb-1">QQ-Plot</p>
              <p className="text-base text-slate-800">
                Ideal: puntos sobre diagonal. Problema: desviaciones en colas.
              </p>
            </div>
          </div>
        </ContentCard>

        {/* Panel de gráficos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <figure className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <img
              src="/residuals_distribution.png"
              alt="Histograma de residuos estandarizados"
              className="w-full h-full object-contain bg-slate-50"
            />
            <figcaption className="px-4 py-3 text-sm text-slate-700 bg-slate-50 border-t">
              Histograma de residuos estandarizados.
            </figcaption>
          </figure>
          <figure className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <img
              src="/residuals_vs_fitted.png"
              alt="Residuos vs valores ajustados"
              className="w-full h-full object-contain bg-slate-50"
            />
            <figcaption className="px-4 py-3 text-sm text-slate-700 bg-slate-50 border-t">
              Residuos vs valores ajustados.
            </figcaption>
          </figure>
          <figure className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <img
              src="/residuals_qq_plot.png"
              alt="QQ-plot de residuos"
              className="w-full h-full object-contain bg-slate-50"
            />
            <figcaption className="px-4 py-3 text-sm text-slate-700 bg-slate-50 border-t">
              QQ-plot de residuos.
            </figcaption>
          </figure>
        </div>
      </div>
    </SlideLayout>
  );
}
