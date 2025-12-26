export function ProgressBar({ completed, total }: { completed: number, total: number }) {
  const pct = total > 0 ? Math.min(100, Math.round((completed/total)*100)) : 0
  return (
    <div className="w-56">
      <div className="h-2 w-full rounded bg-white/10">
        <div className="h-2 rounded bg-brand-green" style={{ width: `${pct}%` }} />
      </div>
      <div className="mt-1 text-xs text-white/60">{completed}/{total} completed</div>
    </div>
  )
}
