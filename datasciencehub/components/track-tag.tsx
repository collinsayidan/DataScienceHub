import { Badge } from './ui/badge'

export function TrackTag({ track }: { track: string }) {
  const color = track === 'SQL' ? 'indigo' : track === 'PYTHON' ? 'blue' : 'slate'
  return <Badge color={color as any}>{track}</Badge>
}
