import React from 'react';
import { cn } from "@/lib/utils";

export default function StatBox({ 
  label, 
  value, 
  subtext,
  variant = 'default',
  className 
}) {
  const variants = {
    default: 'from-slate-50 to-white border-slate-200',
    primary: 'from-[#1e3a5f]/5 to-[#1e3a5f]/10 border-[#1e3a5f]/20',
    accent: 'from-amber-50 to-orange-50/50 border-[#d4a574]/30',
    success: 'from-emerald-50 to-green-50 border-emerald-200',
    warning: 'from-amber-50 to-yellow-50 border-amber-200',
  };

  return (
    <div className={cn(
      "rounded-xl border bg-gradient-to-br p-5 text-center",
      "transition-all duration-200 hover:shadow-md hover:scale-[1.02]",
      variants[variant],
      className
    )}>
      <p className="text-sm font-semibold text-slate-600 uppercase tracking-wider mb-1">
        {label}
      </p>
      <p className="text-3xl font-extrabold text-[#1e3a5f]">
        {value}
      </p>
      {subtext && (
        <p className="text-sm text-slate-600 mt-1">
          {subtext}
        </p>
      )}
    </div>
  );
}
