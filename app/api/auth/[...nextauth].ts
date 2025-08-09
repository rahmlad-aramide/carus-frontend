// [...nextauth].ts or .js
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import AppleProvider from "next-auth/providers/apple";


export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),

// AppleProvider({
//   clientId: process.env.APPLE_CLIENT_ID!,
//   clientSecret: {
//     appleId: process.env.APPLE_CLIENT_ID!,
//     teamId: process.env.APPLE_TEAM_ID!,
//     privateKey: process.env.APPLE_PRIVATE_KEY!,
//     keyId: process.env.APPLE_KEY_ID!,
//   },
// }),

  ],
  pages: {
    signIn: "/login", // Optional: custom login page
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
