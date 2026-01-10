import React from 'react';
import { cn } from "@/lib/utils";

export default function ContentCard({ 
  title, 
  children, 
  variant = 'default',
  icon: Icon,
  className 
}) {
  const variants = {
    default: 'bg-white border-slate-200',
    primary: 'bg-gradient-to-br from-[#1e3a5f]/5 to-[#1e3a5f]/10 border-[#1e3a5f]/20',
    accent: 'bg-gradient-to-br from-amber-50 to-orange-50/50 border-[#d4a574]/30',
    success: 'bg-gradient-to-br from-emerald-50 to-green-50/50 border-emerald-200',
    warning: 'bg-gradient-to-br from-amber-50 to-yellow-50/50 border-amber-200',
  };

  return (
    <div className={cn(
      "rounded-xl border shadow-sm p-6",
      "transition-all duration-200 hover:shadow-md",
      variants[variant],
      className
    )}>
      {(title || Icon) && (
        <div className="flex items-center gap-2 mb-3">
          {Icon && (
            <div className="w-8 h-8 rounded-lg bg-[#1e3a5f]/10 flex items-center justify-center">
              <Icon className="w-5 h-5 text-[#1e3a5f]" />
            </div>
          )}
          {title && (
            <h3 className="font-semibold text-slate-800 text-lg">
              {title}
            </h3>
          )}
        </div>
      )}
      <div className="text-base text-slate-700 leading-relaxed">
        {children}
      </div>
    </div>
  );
}
