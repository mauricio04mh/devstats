import React from 'react';
import { cn } from "@/lib/utils";
import { BarChart3, PieChart, LineChart, Table2, GitBranch, Layers } from 'lucide-react';

const iconMap = {
  bar: BarChart3,
  pie: PieChart,
  line: LineChart,
  table: Table2,
  flow: GitBranch,
  panel: Layers,
};

export default function PlaceholderChart({ 
  label, 
  description,
  type = 'bar',
  variables,
  size = 'large',
  className 
}) {
  const Icon = iconMap[type] || BarChart3;
  
  const sizeClasses = {
    small: 'min-h-[150px]',
    medium: 'min-h-[200px]',
    large: 'min-h-[280px]',
    xlarge: 'min-h-[350px]',
  };

  return (
    <div className={cn(
      "relative border-2 border-dashed border-slate-300 rounded-xl",
      "bg-gradient-to-br from-slate-100/80 via-white to-blue-50/40",
      "flex flex-col items-center justify-center p-7",
      "transition-all duration-300 hover:border-[#1e3a5f]/40 hover:shadow-lg",
      "group cursor-pointer",
      sizeClasses[size],
      className
    )}>
      {/* Decorative corners */}
      <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-[#1e3a5f]/30 rounded-tl" />
      <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-[#1e3a5f]/30 rounded-tr" />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-[#1e3a5f]/30 rounded-bl" />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-[#1e3a5f]/30 rounded-br" />

      {/* Icon */}
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1e3a5f]/10 to-[#1e3a5f]/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <Icon className="w-9 h-9 text-[#1e3a5f]/60" strokeWidth={1.5} />
      </div>

      {/* Label */}
      <div className="text-center max-w-md">
        <p className="text-lg font-semibold text-[#1e3a5f] mb-2">
          {label}
        </p>
        {description && (
          <p className="text-sm text-slate-600 leading-relaxed">
            {description}
          </p>
        )}
        {variables && (
          <div className="mt-3 flex flex-wrap gap-2 justify-center">
            {variables.map((v, i) => (
              <span 
                key={i}
                className="px-3 py-1 bg-[#1e3a5f]/10 text-[#1e3a5f] text-sm font-mono rounded"
              >
                {v}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Badge */}
      <div className="absolute top-3 right-3">
        <span className="px-2.5 py-0.5 bg-amber-100 text-amber-700 text-[11px] font-semibold rounded uppercase tracking-wider">
          Editable
        </span>
      </div>
    </div>
  );
}
