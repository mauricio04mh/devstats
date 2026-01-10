import React from 'react';
import { cn } from "@/lib/utils";
import { ChevronRight, Circle } from 'lucide-react';

export default function BulletList({ 
  items, 
  variant = 'default',
  className 
}) {
  const bulletStyles = {
    default: 'text-[#1e3a5f]',
    accent: 'text-[#d4a574]',
    muted: 'text-slate-400',
  };

  return (
    <ul className={cn("space-y-3", className)}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-2">
          <ChevronRight className={cn(
            "w-5 h-5 mt-0.5 flex-shrink-0",
            bulletStyles[variant]
          )} />
          <span className="text-base text-slate-800 leading-relaxed">
            {typeof item === 'string' ? item : item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function NestedBulletList({ items, className }) {
  return (
    <ul className={cn("space-y-3", className)}>
      {items.map((item, index) => (
        <li key={index} className="space-y-1">
          <div className="flex items-start gap-2">
            <ChevronRight className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#1e3a5f]" />
            <span className="text-base text-slate-800 font-semibold">
              {item.title}
            </span>
          </div>
          {item.children && (
            <ul className="ml-6 space-y-2">
              {item.children.map((child, childIndex) => (
                <li key={childIndex} className="flex items-start gap-2">
                  <Circle className="w-2.5 h-2.5 mt-1.5 flex-shrink-0 text-slate-400 fill-slate-400" />
                  <span className="text-base text-slate-700">
                    {child}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}
