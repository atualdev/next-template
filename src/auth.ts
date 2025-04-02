import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { UserValidation } from './server/auth/validation';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: 'email' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          const { email, password } = credentials as { email: string; password: string };

          if (!email || !password) {
            return null;
          }

          const user = await UserValidation({ email, password });

          if (!user) return null;

          return {
            id: user.id.toString(),
            name: user.name,
            email: user.email,
          };
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: '/',
    signOut: '/',
  },
  session: {
    strategy: 'jwt',
  },
});
