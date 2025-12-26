'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'

export function Header() {
  const trialDays = 5
  return (
    <div className="sticky top-0 z-40 border-b border-white/5 bg-bg-900/80 backdrop-blur">
      <div className="container flex items-center justify-between py-3">
        <div className="flex items-center gap-3">
          <Image src="/brand/dsh-logo.png" alt="DataScienceHub" width={28} height={28} />
          <Link href="/" className="text-lg font-semibold">DataScienceHub</Link>
          <nav className="ml-8 hidden gap-5 md:flex">
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/leaderboard">Leaderboard</Link>
            <Link href="/blueprints">Blueprint</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/ai-tutor">AI Tutor</Link>
            <Link href="/create">Create Content</Link>
            <Link href="/paths/sql-beginner">Learning Path</Link>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden md:inline rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-sm text-yellow-300">Trial: {trialDays} days left</span>
          <Button size="sm" variant="outline" asChild>
            <Link href="/api/auth/signin">Sign in</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
