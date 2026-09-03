export function LeafSprig({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 200" className={className} fill="none">
      <path
        d="M60 190 C60 140 60 90 60 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {[30, 55, 80, 105, 130].map((y, i) => (
        <path
          key={y}
          d={
            i % 2 === 0
              ? `M60 ${y} C40 ${y - 8} 22 ${y - 4} 14 ${y + 8} C28 ${
                  y + 14
                } 46 ${y + 12} 60 ${y}`
              : `M60 ${y} C80 ${y - 8} 98 ${y - 4} 106 ${y + 8} C92 ${
                  y + 14
                } 74 ${y + 12} 60 ${y}`
          }
          fill="currentColor"
          opacity="0.85"
        />
      ))}
    </svg>
  );
}

export function CherryTomatoes({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 100" className={className} fill="none">
      <circle cx="35" cy="55" r="26" fill="currentColor" />
      <circle cx="95" cy="45" r="30" fill="currentColor" opacity="0.85" />
      <path
        d="M30 30 Q35 18 44 24 Q40 12 52 16"
        stroke="#16241c"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M88 16 Q95 4 106 10 Q102 -2 114 2"
        stroke="#16241c"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function CitrusSlice({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none">
      <circle cx="60" cy="60" r="56" fill="currentColor" opacity="0.15" />
      <circle
        cx="60"
        cy="60"
        r="56"
        stroke="currentColor"
        strokeWidth="4"
      />
      {Array.from({ length: 10 }).map((_, i) => {
        const angle = (i / 10) * Math.PI * 2;
        const x = 60 + Math.cos(angle) * 44;
        const y = 60 + Math.sin(angle) * 44;
        return (
          <line
            key={i}
            x1="60"
            y1="60"
            x2={x}
            y2={y}
            stroke="currentColor"
            strokeWidth="2.5"
            opacity="0.6"
          />
        );
      })}
      <circle cx="60" cy="60" r="10" fill="currentColor" />
    </svg>
  );
}

export function CarrotBunch({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 160" className={className} fill="none">
      <path d="M50 60 L38 150 Q50 158 62 150 Z" fill="currentColor" />
      <path
        d="M50 60 C45 30 55 15 50 0"
        stroke="#16241c"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M46 55 C40 28 48 10 42 -4"
        stroke="#16241c"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M54 55 C60 28 52 10 60 -4"
        stroke="#16241c"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
