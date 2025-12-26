import { PrismaClient } from '@prisma/client'
import fs from 'fs/promises'
import path from 'path'

const prisma = new PrismaClient()

async function main() {
  const project = await prisma.project.upsert({
    where: { slug: 'beginner-sql-customer-churn' },
    update: {},
    create: {
      slug: 'beginner-sql-customer-churn',
      title: 'Beginner SQL Project: Analyzing Customer Churn',
      summary: 'Learn SQL by analyzing a customer dataset to identify churn signals.',
      track: 'SQL',
      difficulty: 'BEGINNER',
      schemaJson: {
        columns: [
          'customer_id (INTEGER)', 'join_date (DATE)', 'last_activity_date (DATE)',
          'churned (TEXT)', 'subscription_type (TEXT)', 'monthly_spend (DECIMAL)'
        ]
      },
      published: true,
    },
  })

  const mdxPath = path.join(process.cwd(), 'content/blueprints/sql-churn/step-01.mdx')
  const contentMdx = await fs.readFile(mdxPath, 'utf-8')

  await prisma.step.upsert({
    where: { projectId_index: { projectId: project.id, index: 0 } },
    update: { contentMdx },
    create: { projectId: project.id, index: 0, title: 'Set Up Your Database and Load Data', contentMdx },
  })

  console.log('Seeded', project.slug)
}

main().catch((e) => { console.error(e); process.exit(1) }).finally(async () => { await prisma.$disconnect() })
