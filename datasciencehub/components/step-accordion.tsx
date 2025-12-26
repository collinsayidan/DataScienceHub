'use client'
import React from 'react'
import ReactMarkdown from 'react-markdown'

export function StepAccordion({ steps }: { steps: { id: string, index: number, title: string, contentMdx: string }[] }) {
  const [open, setOpen] = React.useState<number | null>(0)
  return (
    <div className="divide-y divide-white/5 rounded-md border border-white/10 bg-white/5">
      {steps.map((s, i) => (
        <div key={s.id}>
          <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between px-4 py-3 text-left">
            <span className="text-white/90">Step {i+1}: {s.title}</span>
            <span className="text-white/50">{open === i ? '–' : '+'}</span>
          </button>
          {open === i && (
            <div className="prose prose-invert max-w-none border-t border-white/10 px-4 py-4">
              <ReactMarkdown>{s.contentMdx}</ReactMarkdown>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
