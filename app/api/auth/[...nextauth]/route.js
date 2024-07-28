import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDB } from "@/utils/db";
import User from "@/model/user";
import bcrypt from "bcrypt";
import Admin from "@/model/admin";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      checks: ["none"],
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      checks: ["none"],
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          const { email, password } = credentials;
          await connectToDB();

          const user = await User.findOne({ email });

          if (user) {
            const passwordsMatch = await bcrypt.compare(
              password,
              user.password
            );

            if (!passwordsMatch) {
              return null;
            }

            return { user, type: "business" };
          } else {
            const admin = await Admin.findOne({ email });

            if (admin) {
              const passwordsMatch = await bcrypt.compare(
                password,
                admin.password
              );

              if (!passwordsMatch) {
                return null;
              }

              return { user: admin, type: "admin" };
            }
          }
        } catch (err) {
          console.log(err);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      if (url.includes("/signin")) {
        return "/products";
      } else {
        return "/";
      }
      // return "/checkRedirect";
    },
    async signIn({ user, account, profile, email, credentials }) {
      try {
        if (user) {
          if (user.type === "admin") return true;

          await connectToDB();

          let res = await User.findOne({ email: credentials.email });

          if (res) {
            return true;
          } else {
            let res = await User.create({
              email: credentials.email,
              username: credentials.name,
            });

            if (res) {
              return true;
            } else {
              return false;
            }
          }
        }
        return true;
      } catch (err) {
        console.log(`Error occured: ${err}`);
      }
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
