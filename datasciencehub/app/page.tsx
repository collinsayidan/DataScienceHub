import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold">Build data skills by shipping real projects</h1>
        <p className="mt-3 text-white/80">DataScienceHub is a community where you learn SQL, Python, and ML through curated blueprints and guided evaluations.</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Button asChild><Link href="/blueprints">Browse Blueprints</Link></Button>
          <Button variant="outline" asChild><Link href="/dashboard">Go to Dashboard</Link></Button>
        </div>
      </div>
    </section>
  )
}
