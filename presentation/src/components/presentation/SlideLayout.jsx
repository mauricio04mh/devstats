import React from 'react';
import { cn } from "@/lib/utils";

export default function SlideLayout({ 
  slideNumber, 
  totalSlides, 
  title, 
  subtitle,
  children,
  technicalNote,
  className 
}) {
  return (
    <div className={cn(
      "min-h-[calc(100vh-120px)] bg-gradient-to-br from-slate-50 via-white to-blue-50/30",
      "rounded-2xl border border-slate-200/60 shadow-xl overflow-hidden",
      "flex flex-col text-[17px] md:text-[18px] leading-relaxed",
      className
    )}>
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1e3a5f] via-[#2d4a6f] to-[#1e3a5f] px-8 py-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-blue-50/90 mt-3 text-base md:text-lg font-light">
                {subtitle}
              </p>
            )}
          </div>
          <div className="flex items-center gap-2 ml-4">
            <span className="text-sm text-blue-100/80 font-mono">
              {String(slideNumber).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-7 md:p-9 overflow-y-auto">
        {children}
      </div>

      {/* Technical Note Footer */}
      {technicalNote && (
        <div className="border-t border-slate-200/60 bg-gradient-to-r from-amber-50/50 to-orange-50/30 px-8 py-4">
          <div className="flex items-start gap-3">
            <div className="w-1 h-full min-h-[40px] bg-gradient-to-b from-[#d4a574] to-[#b8956a] rounded-full" />
            <div>
              <p className="text-sm font-semibold text-[#8b6914] uppercase tracking-wider mb-1">
                Nota Técnica
              </p>
              <p className="text-base text-slate-700 leading-relaxed">
                {technicalNote}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
