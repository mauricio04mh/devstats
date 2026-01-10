import React from 'react';
import SlideLayout from '../SlideLayout';
import ContentCard from '../ContentCard';
import StatBox from '../StatBox';
import BulletList from '../BulletList';
import DataTable from '../DataTable';
import PlaceholderChart from '../PlaceholderChart';
import { AlertTriangle, Shield, BarChart3 } from 'lucide-react';

export default function Slide04CalidadDatos({ totalSlides, slideNumber }) {
  const chiSquareHeaders = ['Variable', 'χ²', 'p-value', "Cramér's V", 'Interpretación'];
  const chiSquareRows = [
    ['RemoteWork', '—', '< 0.001', '≈ 0.074', 'Efecto pequeño'],
    ['Country', '—', '< 0.001', '≈ 0.147', 'Pequeño–moderado'],
    ['DevType', '—', '< 0.001', 'Editable', 'Por determinar'],
    ['EdLevel', '—', '< 0.001', 'Editable', 'Por determinar'],
  ];

  return (
    <SlideLayout
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      title="Calidad de Datos"
      subtitle="Análisis de missingness y potencial sesgo de reporte salarial"
      technicalNote="Con muestras grandes (N > 60,000), el p-value tiende a ser significativo incluso para asociaciones triviales. Por ello, el tamaño de efecto (Cramér's V) es el indicador clave para evaluar la relevancia práctica del sesgo. V < 0.1 indica efecto pequeño; 0.1–0.3 moderado."
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ContentCard title="Implicación del Missingness" icon={AlertTriangle} variant="warning">
            <p className="mb-3">
              La inferencia salarial está <strong>condicionada a los reportantes</strong>. 
              Los resultados aplican solo a quienes declaran su salario.
            </p>
            <div className="p-3 bg-amber-100 rounded-lg border border-amber-200">
              <p className="text-sm text-amber-900 font-semibold">
                ⚠️ Potencial sesgo de autoselección: ¿quiénes eligen reportar?
              </p>
            </div>
          </ContentCard>
          
          <ContentCard title="Análisis de Sesgo" icon={BarChart3} variant="primary">
            <BulletList
              items={[
                'Prueba χ² de independencia con has_salary',
                "Tamaño de efecto: Cramér's V",
                'RemoteWork: V ≈ 0.074 (pequeño)',
                'Country: V ≈ 0.147 (pequeño–moderado)',
              ]}
            />
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

        {/* Chi-Square Table */}
        <DataTable
          headers={chiSquareHeaders}
          rows={chiSquareRows}
          caption="Tabla χ² + Cramér's V para evaluar asociación con has_salary"
          compact
        />

        {/* Placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PlaceholderChart
            label="Barplot % Missing por Variable (Top-5)"
            description="Gráfico de barras mostrando el porcentaje de valores faltantes para las 5 variables con mayor missingness"
            type="bar"
            variables={['Variable', '% Missing']}
            size="medium"
          />
          <PlaceholderChart
            label="Tabla χ² + Cramér's V"
            description="Resultados completos del test de independencia χ² entre cada variable y has_salary"
            type="table"
            variables={['RemoteWork', 'Country', 'DevType', 'V']}
            size="medium"
          />
        </div>
      </div>
    </SlideLayout>
  );
}
