import React from 'react';
import SlideLayout from '../SlideLayout';
import ContentCard from '../ContentCard';
import { NestedBulletList } from '../BulletList';
import PlaceholderChart from '../PlaceholderChart';
import { Code, Layers, BarChart3 } from 'lucide-react';

export default function Slide11RQ3Features({ totalSlides, slideNumber }) {
  const pipelineSteps = [
    {
      title: '1. One-Hot Encoding',
      children: [
        'Multi-select → variables binarias',
        'Cada tecnología = 1 columna (0/1)',
      ],
    },
    {
      title: '2. Filtrado de Rarezas',
      children: [
        'Eliminar tecnologías con < 1% de uso',
        'Reduce ruido y dimensionalidad',
      ],
    },
    {
      title: '3. Normalización/Escala',
      children: [
        'StandardScaler o similar',
        'Necesario para distancias euclidianas',
      ],
    },
    {
      title: '4. Selección de k',
      children: [
        'Método del codo (Elbow)',
        'Coeficiente Silhouette',
      ],
    },
  ];

  return (
    <SlideLayout
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      title="RQ3 — Features por Stack y Selección de k"
      subtitle="Pipeline de clustering K-Means sobre tecnologías"
      technicalNote="El coeficiente Silhouette bajo (~0.059) es esperado en datos binarios y esparsos de alta dimensión. En este contexto, el objetivo no es maximizar la separación geométrica sino obtener perfiles interpretables y accionables. Se elige k=5 priorizando la interpretabilidad de los clusters resultantes."
    >
      <div className="space-y-6">
        {/* Input Variables */}
        <ContentCard title="Variables de Entrada" icon={Code} variant="primary">
          <p className="text-base mb-3">
            Variables de tipo <strong>multi-select</strong> que indican qué tecnologías ha usado cada desarrollador:
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              'LanguageHaveWorkedWith',
              'DatabaseHaveWorkedWith',
              'WebframeHaveWorkedWith',
              'PlatformHaveWorkedWith',
              'ToolsTechHaveWorkedWith',
            ].map((v, i) => (
              <span 
                key={i} 
                className="px-3.5 py-2 bg-[#1e3a5f]/10 text-[#1e3a5f] font-mono text-sm rounded-lg border border-[#1e3a5f]/20"
              >
                {v}
              </span>
            ))}
          </div>
        </ContentCard>

        {/* Pipeline */}
        <ContentCard title="Pipeline de Preprocesamiento" icon={Layers}>
          <NestedBulletList items={pipelineSteps} />
        </ContentCard>

        {/* k Selection Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ContentCard title="Métricas de Selección" icon={BarChart3} variant="accent">
            <div className="space-y-3">
              <div className="p-3 bg-white rounded-lg border border-slate-200">
                <div className="flex justify-between items-center">
                  <span className="text-base text-slate-700">Silhouette Score</span>
                  <span className="font-mono font-semibold text-[#1e3a5f]">~0.059</span>
                </div>
                <p className="text-sm text-slate-600 mt-1">
                  Bajo, pero esperado en binario esparso
                </p>
              </div>
              <div className="p-3 bg-white rounded-lg border border-slate-200">
                <div className="flex justify-between items-center">
                  <span className="text-base text-slate-700">k seleccionado</span>
                  <span className="font-mono font-bold text-emerald-600 text-xl">5</span>
                </div>
                <p className="text-sm text-slate-600 mt-1">
                  Balance entre granularidad e interpretabilidad
                </p>
              </div>
            </div>
          </ContentCard>
          
          <ContentCard title="Justificación de k=5">
            <ul className="space-y-3 text-base text-slate-800">
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold text-lg">✓</span>
                <span>Codo visible en curva de inercia</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold text-lg">✓</span>
                <span>Clusters de tamaño suficiente para inferencia</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold text-lg">✓</span>
                <span>Perfiles diferenciados e interpretables</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold text-lg">✓</span>
                <span>Alineado con stacks tecnológicos conocidos</span>
              </li>
            </ul>
          </ContentCard>
        </div>

        {/* Placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <PlaceholderChart
            label="Elbow: Inercia vs k"
            description="Curva de inercia (WCSS) para k=2 hasta k=15, buscando el punto de inflexión."
            type="line"
            variables={['k', 'Inertia']}
            size="medium"
          />
          <PlaceholderChart
            label="Silhouette vs k"
            description="Coeficiente Silhouette promedio para cada valor de k."
            type="line"
            variables={['k', 'Silhouette']}
            size="medium"
          />
          <PlaceholderChart
            label="Mini Diagrama One-Hot"
            description="Esquema visual del proceso de one-hot encoding para variables multi-select."
            type="flow"
            variables={['MultiSelect', 'Binary Columns']}
            size="medium"
          />
        </div>
      </div>
    </SlideLayout>
  );
}
