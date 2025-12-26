import Link from 'next/link'
import { prisma } from '@/lib/prisma'

export default async function BlueprintsPage() {
  let projects: any[] = []
  try {
    projects = await prisma.project.findMany({ where: { published: true }, orderBy: { createdAt: 'desc' } })
  } catch (e) {
    // fallback mock if DB not ready
    projects = [
      { slug: 'beginner-sql-customer-churn', title: 'Beginner SQL: Customer Churn', summary: 'Analyze churn with SQL', track: 'SQL', difficulty: 'BEGINNER' }
    ]
  }

  return (
    <div className="py-10">
      <h1 className="mb-6 text-2xl font-semibold">Blueprints</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Link key={p.slug} href={`/blueprints/${p.slug}`} className="rounded-lg border border-white/10 bg-white/5 p-4 hover:bg-white/10">
            <div className="text-sm text-white/60">{p.track} · {p.difficulty}</div>
            <div className="mt-1 text-lg font-semibold">{p.title}</div>
            <p className="mt-1 text-white/70">{p.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
