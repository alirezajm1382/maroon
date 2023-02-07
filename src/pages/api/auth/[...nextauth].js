import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export default NextAuth({
  providers: [
    // OAuth authentication providers
    Google({
      clientId:
        "377670931214-rhqkn4f6vjvui6nsqhc9bc4uthek83u4.apps.googleusercontent.com",
      clientSecret: "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",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    Github({
      clientId: "",
      clientSecret: "",
    }),
  ],
});
