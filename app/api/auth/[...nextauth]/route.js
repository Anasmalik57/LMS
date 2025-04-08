import connectDB from "@/db/connectDB";
import User from "@/models/User";
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

// Pehle DB connect kar lo
connectDB(); // Assuming connectDB ek baar connection establish karta hai

const authoptions = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) { // email, credentials ki zarurat nahi yaha
      try {
        if (account.provider === "github") {
          const currentUser = await User.findOne({ email: user.email });
          if (!currentUser) {
            const newUser = new User({
              email: user.email,
              username: user.email.split("@")[0],
              profilepic: profile.avatar_url || profile.image, // GitHub se image yaha se milti hai
              role: "student",
            });
            await newUser.save();
            user.name = newUser.username;
          } else {
            user.name = currentUser.username;
          }
          return true;
        }
        return false; // Agar provider github nahi hai toh fail
      } catch (error) {
        console.log("SignIn Error:", error);
        return false; // Error case mein fail return karo
      }
    },
  },
});

export { authoptions as GET, authoptions as POST };