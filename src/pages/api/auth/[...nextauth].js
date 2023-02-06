import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export default NextAuth({
  providers: [
    // OAuth authentication providers
    Google({
      clientId: "",
      clientSecret: "",
    }),
    Github({
      clientId: "",
      clientSecret: "",
    }),
  ],
});
