import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';

const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: 'Username', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                try {
                    const res = await axios.post('http://127.0.0.1:8000/api/token/', {
                        username: credentials.username,
                        password: credentials.password,
                    });

                    if (res.data) {
                        return {
                            accessToken: res.data.access,
                            refreshToken: res.data.refresh,
                        };
                    }
                    return null;
                } catch (error) {
                    throw new Error('Invalid credentials');
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.accessToken = user.accessToken;
                token.refreshToken = user.refreshToken;
            }
            return token;
        },
        async session({ session, token }) {
            session.accessToken = token.accessToken;
            session.refreshToken = token.refreshToken;
            return session;
        },
    },
    secret:  process.env.NEXTAUTH_SECRET, // Ensure this is set
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
