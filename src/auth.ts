import NextAuth from "next-auth";
import Facebook from "next-auth/providers/facebook";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, profile }) {
      const usuarioFacebook = {
        username:
          user.name?.toLowerCase().replace(/\s+/g, "") || "usuariofacebook",
        email: user.email,
        phoneNumber: null,
        password: "123456",
        fullName: user.name,
        bio: null,
        profilePicture: user.image || profile?.picture?.data?.url || null,
      };

      try {
        const response = await fetch(
          "http://localhost:8080/users/login/facebook",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(usuarioFacebook),
          }
        );

        if (!response.ok) return false;

        const data = await response.json();

        if (typeof window !== "undefined" && data.status === true) {
          localStorage.setItem("usuario", JSON.stringify(data));
          window.location.href = "/vistas";
        }

        return true;
      } catch (error) {
        console.error("Error al conectar con backend:", error);
        return false;
      }
    },

    async redirect() {
      return "/vistas";
    },
  },
});
