import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const projects = await prisma.project.findMany({ where: { published: true }, orderBy: { createdAt: 'desc' } })
    return NextResponse.json({ projects })
  } catch (e) {
    return NextResponse.json({ projects: [] })
  }
}
