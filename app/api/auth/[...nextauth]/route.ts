import NextAuth from 'next-auth';
import { NextAuthOptions } from 'next-auth';
import  CredentialsProvider  from 'next-auth/providers/credentials';
import { compare } from 'bcrypt';
import { prisma } from '@/lib/prismadb';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      type: 'credentials',
      name: 'credentials',
      credentials: {
        email: {label: "Email", type: "email"},
        password: {label: "Password", type: "password"},
      },
      async authorize(credentials): Promise<void> {
        const {email, password} = credentials as {
          email: string;
          password: string;
        };
        if (!email || !password) throw new Error('Email and password is required');

        const user = await prisma.user.findUnique({ where: { email: email } });
        if  (!user || !user.password) throw new Error('Incorrect Email or Password');

        const isCorrectPassword: boolean = await compare(password, user.password);
        if  (!isCorrectPassword) throw new Error('Incorrect Email or Password');

        return user
      }
    }),
  ],
  callbacks: {
    async jwt({token, account, profile, user}: any) {
      if (account?.provider === 'credentials') {
        token.email = user.email;
        token.name = user.name;
        token.role = user.role;
      }
      return token;
    },

    async session({ session, token }: any) {
      if ("email" in token) {
         session.user.email = token.email;
      }
      if ("name" in token) {
        session.user.name = token.name;
      }
      if ("role" in token) {
        session.user.role = token.role;
      }
      return session;
    }
  }
}
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };