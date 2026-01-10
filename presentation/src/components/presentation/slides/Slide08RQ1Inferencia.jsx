import React from 'react';
import SlideLayout from '../SlideLayout';
import ContentCard from '../ContentCard';
import DataTable from '../DataTable';
import PlaceholderChart from '../PlaceholderChart';
import { BarChart3, CheckCircle, AlertCircle } from 'lucide-react';

export default function Slide08RQ1Inferencia({ totalSlides, slideNumber }) {
  const testsHeaders = ['Prueba', 'Estadístico', 'p-value', 'Efecto', 'Supuestos'];
  const testsRows = [
    ['ANOVA clásico', 'F ≈ 228.98', '3.28e−99', '—', 'Homocedasticidad, normalidad'],
    ['Welch ANOVA', 'F ≈ 202.71', '4.48e−87', 'ηp² ≈ 0.019', 'No requiere homocedasticidad'],
    ['Kruskal–Wallis', 'H ≈ 771.46', '3.01e−168', '—', 'No paramétrico'],
  ];

  const postHocHeaders = ['Comparación', 'Δ log_salary', 'IC 95%', '% Cambio', 'Significativo'];
  const postHocRows = [
    ['Remote vs In-person', '≈ +0.510', 'Editable', '~+66.6%', '✓ Sí'],
    ['Hybrid vs In-person', '≈ +0.528', 'Editable', '~+69.5%', '✓ Sí'],
    ['Hybrid vs Remote', '≈ +0.018', 'Editable', '~+1.8%', '✗ No sig.'],
  ];
  const diagnosticsHeaders = ['Test', 'Statistic', 'p-value', 'Decision'];
  const diagnosticsRows = [
    ['Shapiro-Wilk (residuos)', '0.819535', '1.157828e-59', 'Rechazar H0'],
    ['Levene/Brown-Forsythe (median)', '125.783335', '4.615799e-55', 'Rechazar H0'],
    ['ANOVA clásico', '228.977542', '3.280390e-99', 'Rechazar H0'],
    ['Welch ANOVA', '202.713616', '4.482265e-87', 'Rechazar H0'],
    ['Kruskal-Wallis', '771.462409', '3.013467e-168', 'Rechazar H0'],
  ];

  return (
    <SlideLayout
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      title="RQ1 — Inferencia Estadística y Post-hoc"
      subtitle="ANOVA, Welch, Kruskal-Wallis y comparaciones múltiples"
      technicalNote="La triangulación de métodos (paramétricos y no paramétricos) proporciona robustez al análisis. El tamaño de efecto ηp² ≈ 0.019 es pequeño pero estadísticamente significativo. La interpretación porcentual se obtiene mediante exp(Δlog) − 1, p.ej. exp(0.510) − 1 ≈ 0.666."
    >
      <div className="space-y-6">
        {/* Main Tests */}
        <ContentCard title="Pruebas de Diferencia Global" icon={BarChart3} variant="primary">
          <DataTable
            headers={testsHeaders}
            rows={testsRows}
            caption="Todas las pruebas rechazan H₀ con p < 0.001, indicando diferencias significativas entre al menos dos grupos"
            compact
          />
        </ContentCard>

        {/* Effect Size */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ContentCard title="Tamaño de Efecto (Welch)" variant="accent">
            <div className="text-center py-4">
              <p className="text-4xl font-bold text-[#1e3a5f]">ηp² ≈ 0.019</p>
              <p className="text-base text-slate-700 mt-2">Efecto pequeño (η² &lt; 0.06)</p>
              <p className="text-sm text-slate-600 mt-1">
                ~1.9% de la varianza en log_salary explicada por RemoteWork
              </p>
            </div>
          </ContentCard>
          
          <ContentCard title="Verificación de Supuestos">
            <ul className="space-y-3 text-base">
              <li className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span><strong>Levene:</strong> Homocedasticidad violada → usar Welch</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span><strong>Normalidad:</strong> Desviaciones con N grande → Kruskal</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span><strong>Convergencia:</strong> Los tres tests coinciden en conclusión</span>
              </li>
            </ul>
          </ContentCard>
        </div>

        {/* Post-hoc Comparisons */}
        <ContentCard title="Comparaciones Post-hoc (Interpretación %)" icon={BarChart3}>
          <DataTable
            headers={postHocHeaders}
            rows={postHocRows}
            caption="La conversión a % se calcula como: exp(Δlog) − 1. Por ejemplo, +0.510 en log → exp(0.510) − 1 ≈ 66.6%"
          />
          <div className="mt-4 p-4 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-lg border border-emerald-200">
            <p className="text-base text-slate-800">
              <strong>Conclusión RQ1:</strong> Remote e Hybrid tienen salarios ~65-70% mayores que In-person 
              (en términos de mediana). Remote y Hybrid no difieren significativamente entre sí.
            </p>
          </div>
        </ContentCard>

        {/* Placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ContentCard title="Tabla: Pruebas + Supuestos" icon={BarChart3} variant="primary">
            <DataTable
              headers={diagnosticsHeaders}
              rows={diagnosticsRows}
              caption="Resumen de pruebas de supuestos y contraste global."
              compact
            />
          </ContentCard>
          <figure className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <img
              src="/forest_plot_salary_differences.png"
              alt="Forest plot de diferencias salariales entre modalidades"
              className="w-full h-full object-contain bg-slate-50"
            />
            <figcaption className="px-4 py-3 text-sm text-slate-700 bg-slate-50 border-t">
              Forest plot de diferencias en log_salary con IC95% entre modalidades.
            </figcaption>
          </figure>
        </div>
      </div>
    </SlideLayout>
  );
}
