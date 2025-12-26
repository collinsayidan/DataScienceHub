import { prisma } from '@/lib/prisma'
import { Badge } from '@/components/ui/badge'
import { StepAccordion } from '@/components/step-accordion'
import { DatasetSchemaChips } from '@/components/dataset-schema-chips'
import { TrackTag } from '@/components/track-tag'
import { ProgressBar } from '@/components/progress-bar'

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  let project: any = null
  try {
    project = await prisma.project.findUnique({
      where: { slug: params.slug },
      include: { steps: { orderBy: { index: 'asc' } } }
    })
  } catch (e) {
    // mock fallback
    project = {
      id: 'mock', slug: params.slug, title: 'Beginner SQL: Customer Churn', summary: 'Analyze a dataset to uncover churn patterns.',
      track: 'SQL', difficulty: 'BEGINNER', schemaJson: { columns: ['customer_id (INTEGER)','join_date (DATE)','last_activity_date (DATE)','churned (TEXT)','subscription_type (TEXT)','monthly_spend (DECIMAL)'] },
      steps: [
        { id: 's1', index: 0, title: 'Set Up Your Database and Load Data', contentMdx: '# Create table and import CSV' }
      ]
    }
  }
  if (!project) return <div>Not found</div>
  const totalSteps = project.steps.length

  return (
    <div className="py-8">
      <div className="mb-6 flex items-center gap-2">
        <TrackTag track={project.track} />
        <Badge>{project.difficulty}</Badge>
      </div>

      <h1 className="mb-3 text-3xl font-bold">{project.title}</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <p className="text-white/80">{project.summary}</p>
        <div>
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-white/60">Dataset Schema</h3>
          <DatasetSchemaChips schema={project.schemaJson} />
        </div>
      </div>

      <div className="mt-10">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Step-by-Step Instructions</h2>
          <ProgressBar completed={0} total={totalSteps} />
        </div>
        <StepAccordion steps={project.steps} />
      </div>
    </div>
  )
}
