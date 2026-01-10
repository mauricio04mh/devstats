import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, Menu, X } from 'lucide-react';
import { cn } from "@/lib/utils";

// Import all slides
import Slide01Portada from '@/components/presentation/slides/Slide01Portada';
import Slide02Dataset from '@/components/presentation/slides/Slide02Dataset';
import Slide03DatasetProcesado from '@/components/presentation/slides/Slide03DatasetProcesado';
import Slide04CalidadDatos from '@/components/presentation/slides/Slide04CalidadDatos';
import Slide05EDA1 from '@/components/presentation/slides/Slide05EDA1';
import Slide06EDA2 from '@/components/presentation/slides/Slide06EDA2';
import Slide07RQ1Descriptivos from '@/components/presentation/slides/Slide07RQ1Descriptivos';
import Slide08RQ1Inferencia from '@/components/presentation/slides/Slide08RQ1Inferencia';
import Slide09RQ2Regresion from '@/components/presentation/slides/Slide09RQ2Regresion';
import Slide10RQ2Diagnosticos from '@/components/presentation/slides/Slide10RQ2Diagnosticos';
import Slide11RQ3Features from '@/components/presentation/slides/Slide11RQ3Features';
import Slide12RQ3Perfiles from '@/components/presentation/slides/Slide12RQ3Perfiles';
import Slide13RQ3Salarios from '@/components/presentation/slides/Slide13RQ3Salarios';
import Slide13Conclusiones from '@/components/presentation/slides/Slide13Conclusiones';

const slides = [
  { id: 1, component: Slide01Portada, title: 'Portada' },
  { id: 2, component: Slide02Dataset, title: 'Dataset y RQs' },
  { id: 3, component: Slide03DatasetProcesado, title: 'Dataset Procesado' },
  { id: 4, component: Slide04CalidadDatos, title: 'Calidad de Datos' },
  { id: 5, component: Slide05EDA1, title: 'EDA - Salario' },
  { id: 6, component: Slide06EDA2, title: 'EDA - Experiencia' },
  { id: 7, component: Slide07RQ1Descriptivos, title: 'RQ1 - Descriptivos' },
  { id: 8, component: Slide08RQ1Inferencia, title: 'RQ1 - Inferencia' },
  { id: 9, component: Slide09RQ2Regresion, title: 'RQ2 - Regresión' },
  { id: 10, component: Slide10RQ2Diagnosticos, title: 'RQ2 - Diagnósticos' },
  { id: 11, component: Slide11RQ3Features, title: 'RQ3 - Features' },
  { id: 12, component: Slide12RQ3Perfiles, title: 'RQ3 - Perfiles' },
  { id: 13, component: Slide13RQ3Salarios, title: 'RQ3 - Ranking Salarial' },
  { id: 14, component: Slide13Conclusiones, title: 'Conclusiones' },
];

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const totalSlides = slides.length;

  const goToSlide = (index) => {
    setCurrentSlide(Math.max(0, Math.min(index, totalSlides - 1)));
    setShowSidebar(false);
  };

  const nextSlide = () => goToSlide(currentSlide + 1);
  const prevSlide = () => goToSlide(currentSlide - 1);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Escape') {
        setShowSidebar(false);
      } else if (e.key === 'f') {
        toggleFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  // Fullscreen change listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50">
      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out",
        showSidebar ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex items-center justify-between p-4 border-b border-slate-200">
          <h2 className="font-bold text-slate-800">Navegación</h2>
          <Button variant="ghost" size="icon" onClick={() => setShowSidebar(false)}>
            <X className="w-5 h-5" />
          </Button>
        </div>
        <div className="p-4 space-y-1 overflow-y-auto max-h-[calc(100vh-80px)]">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-full text-left px-4 py-3 rounded-lg transition-all text-sm",
                currentSlide === index
                  ? "bg-[#1e3a5f] text-white"
                  : "hover:bg-slate-100 text-slate-700"
              )}
            >
              <span className="font-mono text-xs opacity-60 mr-2">
                {String(index + 1).padStart(2, '0')}
              </span>
              {slide.title}
            </button>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {showSidebar && (
        <div 
          className="fixed inset-0 bg-black/20 z-40"
          onClick={() => setShowSidebar(false)}
        />
      )}

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-30 bg-white/80 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setShowSidebar(true)}
            >
              <Menu className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-sm font-semibold text-slate-800 hidden md:block">
                Análisis Estadístico - Stack Overflow Survey 2024
              </h1>
              <p className="text-xs text-slate-500">
                Diapositiva {currentSlide + 1} de {totalSlides}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <div className="hidden md:flex items-center gap-1 px-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    currentSlide === index
                      ? "bg-[#1e3a5f] w-6"
                      : "bg-slate-300 hover:bg-slate-400"
                  )}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              onClick={toggleFullscreen}
              className="hidden md:flex"
            >
              {isFullscreen ? (
                <Minimize2 className="w-5 h-5" />
              ) : (
                <Maximize2 className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20 pb-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <CurrentSlideComponent slideNumber={currentSlide + 1} totalSlides={totalSlides} />
        </div>
      </main>

      {/* Footer with keyboard hints */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-t border-slate-200 py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-6 text-xs text-slate-500">
          <span><kbd className="px-1.5 py-0.5 bg-slate-100 rounded text-[10px]">←</kbd> <kbd className="px-1.5 py-0.5 bg-slate-100 rounded text-[10px]">→</kbd> Navegar</span>
          <span><kbd className="px-1.5 py-0.5 bg-slate-100 rounded text-[10px]">F</kbd> Pantalla completa</span>
          <span><kbd className="px-1.5 py-0.5 bg-slate-100 rounded text-[10px]">Espacio</kbd> Siguiente</span>
        </div>
      </footer>
    </div>
  );
}
