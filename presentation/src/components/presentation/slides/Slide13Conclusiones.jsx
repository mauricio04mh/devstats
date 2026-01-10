import React from 'react';
import SlideLayout from '../SlideLayout';
import ContentCard from '../ContentCard';
import { NestedBulletList } from '../BulletList';
import PlaceholderChart from '../PlaceholderChart';
import { CheckCircle, AlertTriangle, Lightbulb, Target } from 'lucide-react';

export default function Slide13Conclusiones({ totalSlides, slideNumber }) {
  const conclusiones = [
    {
      title: 'RQ1: Diferencias por Modalidad',
      children: [
        'In-person presenta salarios significativamente menores',
        'Remote ≈ Hybrid (sin diferencia significativa entre ambas)',
        'Δ ~65-70% en favor de trabajo flexible vs presencial',
      ],
    },
    {
      title: 'RQ2: Efecto Ajustado Persiste',
      children: [
        'Remote: +33.6% vs In-person (controlando confusores)',
        'Hybrid: +21.8% vs In-person (controlando confusores)',
        'País es el principal confusor (ΔR² = +0.313)',
      ],
    },
    {
      title: 'RQ3: Perfiles con Salarios Distintos',
      children: [
        'Python/Cloud lidera el ranking salarial',
        'Casi todos los pares difieren significativamente',
        'Excepción: .NET ≈ Systems tras corrección',
      ],
    },
  ];

  const limitaciones = [
    {
      title: 'Sesgo de No Respuesta',
      children: [
        'Missing salarial alto (~64%)',
        'Resultados condicionados a reportantes',
      ],
    },
    {
      title: 'Diseño Observacional',
      children: [
        'Asociación ≠ Causalidad',
        'Posibles confusores no medidos',
      ],
    },
    {
      title: 'Clustering de Alta Dimensión',
      children: [
        'Silhouette bajo (~0.059)',
        'Solapamiento entre perfiles',
      ],
    },
  ];

  const extensiones = [
    {
      title: 'Modelado Avanzado',
      children: [
        'Regresión multinivel por país',
        'Regresión cuantílica (percentiles)',
      ],
    },
    {
      title: 'Corrección de Sesgo',
      children: [
        'IPW (Inverse Probability Weighting)',
        'Reponderación por propensión a reportar',
      ],
    },
    {
      title: 'Clustering Mejorado',
      children: [
        'HDBSCAN para densidad variable',
        'Embeddings + validación externa',
      ],
    },
  ];

  return (
    <SlideLayout
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      title="Conclusiones, Limitaciones y Próximos Pasos"
      subtitle="Síntesis del análisis y direcciones futuras"
      technicalNote="Este análisis proporciona evidencia robusta de asociaciones salariales con modalidad de trabajo y perfil tecnológico. Sin embargo, las limitaciones inherentes al diseño observacional y el alto missingness requieren cautela en la interpretación. Las extensiones propuestas buscan mejorar la validez interna y externa del estudio."
    >
      <div className="space-y-6">
        {/* Conclusions */}
        <ContentCard title="Conclusiones Principales" icon={CheckCircle} variant="success">
          <NestedBulletList items={conclusiones} />
        </ContentCard>

        {/* Limitations and Extensions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ContentCard title="Limitaciones" icon={AlertTriangle} variant="warning">
            <NestedBulletList items={limitaciones} />
          </ContentCard>
          
          <ContentCard title="Extensiones Futuras" icon={Lightbulb} variant="primary">
            <NestedBulletList items={extensiones} />
          </ContentCard>
        </div>

        {/* Key Takeaways */}
        <ContentCard title="Mensajes Clave" icon={Target}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
            <div className="p-4 bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl border border-emerald-200 text-center">
              <p className="text-base text-slate-700 mb-2">Modalidad</p>
              <p className="text-xl font-bold text-emerald-700">
                Trabajo flexible asociado a +20-35% salario
              </p>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 text-center">
              <p className="text-base text-slate-700 mb-2">Confusores</p>
              <p className="text-xl font-bold text-blue-700">
                País explica 31% adicional de varianza
              </p>
            </div>
            <div className="p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border border-amber-200 text-center">
              <p className="text-base text-slate-700 mb-2">Stacks</p>
              <p className="text-xl font-bold text-amber-700">
                Python/Cloud lidera, JS Fullstack rezagado
              </p>
            </div>
          </div>
        </ContentCard>

        {/* Placeholder */}
        <PlaceholderChart
          label="Diagrama Final: RQ1/RQ2/RQ3 + Limitaciones + Next Steps"
          description="Diagrama visual de síntesis mostrando las tres preguntas de investigación con sus hallazgos principales, las limitaciones del estudio, y las direcciones futuras de mejora metodológica."
          type="flow"
          variables={['RQ1', 'RQ2', 'RQ3', 'Limitaciones', 'Extensiones']}
          size="large"
        />
      </div>
    </SlideLayout>
  );
}
