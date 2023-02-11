import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";

export default NextAuth({
  providers: [
    // OAuth authentication providers
    Github({
      clientId: "735d97d1401205fd1681",
      clientSecret: "1f684823496f1af3eff040b36f5d657a4a2e6044",
    }),
    Credentials({
      credentials: {
        username: { label: "Username", type: "text", placeholder: "berlin." },
        password: {
          label: "Password",
          type: "password",
          placeholder: "*******",
        },
        async authorize(credentials, req) {
          const res = await fetch("/api/hello", {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" },
          });
          const user = await res.json();
          if (user && res.ok) {
            return user;
          }
          return false;
        },
      },
    }),
  ],
  secret: "04a3da97880fcedeb087378f29c3a102",
  url: "https://maroon-alir3za.vercel.app/",
});
