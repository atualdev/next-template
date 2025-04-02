// import { JWT } from 'next-auth/jwt';
// import { DefaultSession } from 'next-auth';

// declare module 'next-auth' {
//   interface Session extends DefaultSession {
//     user: UserSession;
//   }

//   interface User {
//     role: string;
//   }
// }

// export type UserSession = {
//   id: string;
//   role: string;
// } & DefaultSession['user'];


// declare module 'next-auth/jwt' {
//   interface JWT {
//     id?: string;
//     role?: string;
//   }
// }