import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
  providers: [GitHub, Google],
  callbacks: {
    async session({ session, token }) {
      (session as any).user.id = token.sub
      ;(session as any).user.role = (token as any).role || 'MEMBER'
      return session
    }
  }
})
