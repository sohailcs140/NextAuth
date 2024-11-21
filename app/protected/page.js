'use client';

import { useSession, signOut } from 'next-auth/react';
import { useEffect } from 'react';

export default function ProtectedPage() {
    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === 'unauthenticated') {
            window.location.href = '/auth/login';
        }
    }, [status]);

    if (status === 'loading') {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Protected Page</h1>
            <p>Welcome, your access token is: {session?.accessToken}</p>
            <button onClick={() => signOut({ callbackUrl: '/auth/login' })}>
                Logout
            </button>
        </div>
    );
}
