interface TagProps {
  children: string
  color?: 'orange' | 'teal' | 'health' | 'life' | 'motor' | 'travel'
  centered?: boolean
  noBar?: boolean
}

const colorMap = {
  orange: 'text-orange',
  teal: 'text-teal',
  health: 'text-health',
  life: 'text-life',
  motor: 'text-motor',
  travel: 'text-travel',
}

export default function Tag({ children, color = 'orange', centered = false, noBar = false }: TagProps) {
  return (
    <div
      className={`inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[2px] uppercase mb-2.5 ${colorMap[color]} ${centered ? 'justify-center' : ''}`}
    >
      {!centered && !noBar && <span className="w-4 h-0.5 bg-current rounded-sm" />}
      {children}
    </div>
  )
}
