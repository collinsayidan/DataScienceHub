export function DatasetSchemaChips({ schema }: { schema: any }) {
  const cols: string[] = schema?.columns ?? []
  return (
    <div className="flex flex-wrap gap-2">
      {cols.map((c, i) => (
        <span key={i} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/80">{c}</span>
      ))}
    </div>
  )
}
