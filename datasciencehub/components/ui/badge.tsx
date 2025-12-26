import * as React from 'react'

export function Badge({ children, color = 'slate' }: { children: React.ReactNode, color?: 'slate'|'green'|'blue'|'yellow'|'indigo' }) {
  const map:any = {
    slate: 'border-white/20 text-white/90',
    green: 'border-emerald-400/30 text-emerald-300',
    blue: 'border-sky-400/30 text-sky-300',
    yellow: 'border-yellow-400/30 text-yellow-300',
    indigo: 'border-indigo-400/30 text-indigo-300'
  }
  return <span className={`rounded-full border px-2 py-0.5 text-xs ${map[color]}`}>{children}</span>
}
