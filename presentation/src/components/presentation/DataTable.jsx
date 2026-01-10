import React from 'react';
import { cn } from "@/lib/utils";

export default function DataTable({ 
  headers, 
  rows, 
  caption,
  compact = false,
  className 
}) {
  return (
    <div className={cn("overflow-x-auto", className)}>
      <table className="w-full text-base">
        <thead>
          <tr className="bg-gradient-to-r from-[#1e3a5f] to-[#2d4a6f]">
            {headers.map((header, index) => (
              <th 
                key={index}
                className={cn(
                  "text-left text-white font-semibold text-lg",
                  compact ? "px-4 py-3" : "px-5 py-3.5",
                  "first:rounded-tl-lg last:rounded-tr-lg"
                )}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr 
              key={rowIndex}
              className={cn(
                "border-b border-slate-100",
                rowIndex % 2 === 0 ? "bg-white" : "bg-slate-50/50",
                "hover:bg-blue-50/30 transition-colors"
              )}
            >
              {row.map((cell, cellIndex) => (
                <td 
                  key={cellIndex}
                  className={cn(
                    "text-slate-800",
                    compact ? "px-4 py-3" : "px-5 py-3.5",
                    cellIndex === 0 && "font-semibold text-slate-900"
                  )}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {caption && (
        <p className="text-sm text-slate-600 mt-3 italic text-center">
          {caption}
        </p>
      )}
    </div>
  );
}
