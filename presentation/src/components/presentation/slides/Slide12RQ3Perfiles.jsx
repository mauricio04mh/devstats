import React from 'react';
import SlideLayout from '../SlideLayout';
import ContentCard from '../ContentCard';
import DataTable from '../DataTable';
import { Users, DollarSign, BarChart3 } from 'lucide-react';

export default function Slide12RQ3Perfiles({ totalSlides, slideNumber }) {
  const clustersData = [
    { 
      id: 0, 
      name: 'Modern JS Fullstack', 
      n: 7531, 
      color: 'from-blue-500 to-blue-600',
      techs: 'JavaScript, TypeScript, React, Node.js',
      medianSalary: '~$56,000',
    },
    { 
      id: 1, 
      name: 'Python Backend/Data + Cloud', 
      n: 4845, 
      color: 'from-emerald-500 to-emerald-600',
      techs: 'Python, AWS, Docker, PostgreSQL',
      medianSalary: '~$75,600',
    },
    { 
      id: 2, 
      name: '.NET Enterprise', 
      n: 4360, 
      color: 'from-purple-500 to-purple-600',
      techs: 'C#, .NET, SQL Server, Azure',
      medianSalary: '~$69,800',
    },
    { 
      id: 3, 
      name: 'Java/Spring', 
      n: 3769, 
      color: 'from-orange-500 to-orange-600',
      techs: 'Java, Spring, Maven, MySQL',
      medianSalary: '~$69,400',
    },
    { 
      id: 4, 
      name: 'Systems/Low-level + Python', 
      n: 2882, 
      color: 'from-rose-500 to-rose-600',
      techs: 'C, C++, Rust, Python, Linux',
      medianSalary: '~$63,700',
    },
  ];

  const inferenceHeaders = ['Prueba', 'Estadístico', 'p-value'];
  const inferenceRows = [
    ['Kruskal–Wallis', 'H ≈ 440.10', '5.99e−94'],
  ];

  const salaryHeaders = ['Cluster', 'Mediana (USD)', 'Media (USD)', 'n'];
  const salaryRows = [
    ['Python Backend/Data + Cloud', '~$75,600', 'Editable', '4,845'],
    ['.NET Enterprise', '~$69,800', 'Editable', '4,360'],
    ['Java/Spring', '~$69,400', 'Editable', '3,769'],
    ['Systems/Low-level + Python', '~$63,700', 'Editable', '2,882'],
    ['Modern JS Fullstack', '~$56,000', 'Editable', '7,531'],
  ];

  return (
    <SlideLayout
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      title="RQ3 — Perfiles Tecnológicos y Diferencias Salariales"
      subtitle="Caracterización de clusters y comparación de salarios"
      technicalNote="Los clusters agrupan stacks tecnológicos y no reflejan seniority ni sector. Interpretamos diferencias salariales condicionadas al perfil tecnológico y a los desarrolladores que reportan salario."
    >
      <div className="space-y-6">
        {/* Clusters Overview */}
        <ContentCard title="Perfiles Identificados (k=5)" icon={Users} variant="primary">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mt-2">
            {clustersData.map((cluster) => (
              <div 
                key={cluster.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all"
              >
                <div className={`bg-gradient-to-r ${cluster.color} px-4 py-2`}>
                  <p className="text-white font-semibold text-sm truncate">{cluster.name}</p>
                </div>
                <div className="p-3">
                  <p className="text-3xl font-bold text-[#1e3a5f]">{cluster.n.toLocaleString()}</p>
                  <p className="text-sm text-slate-600 mt-2 leading-snug">{cluster.techs}</p>
                </div>
              </div>
            ))}
          </div>
        </ContentCard>

        {/* Inference */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ContentCard title="Inferencia Estadística" icon={BarChart3}>
            <DataTable
              headers={inferenceHeaders}
              rows={inferenceRows}
              caption="Prueba no paramétrica para comparar distribuciones de log_salary entre clusters"
              compact
            />
            <div className="mt-3 p-3 bg-emerald-50 rounded-lg border border-emerald-200">
              <p className="text-base text-slate-800">
                <strong>Post-hoc:</strong> Casi todos los pares difieren significativamente. 
                Excepción: .NET vs Systems (p_corr ≈ 0.606).
              </p>
            </div>
          </ContentCard>
          
          <ContentCard title="Conversión a USD" icon={DollarSign} variant="accent">
            <div className="p-4 bg-white/70 rounded-lg border border-amber-200">
              <p className="text-base text-slate-800 mb-2">
                <strong>Fórmula:</strong>
              </p>
              <p className="font-mono text-base bg-slate-100 px-3 py-2 rounded">
                salary_est = exp(log_salary) − 1
              </p>
              <p className="text-sm text-slate-600 mt-2">
                Recupera la escala original en dólares para interpretación directa.
              </p>
            </div>
          </ContentCard>
        </div>
      </div>
    </SlideLayout>
  );
}
