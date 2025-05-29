'use client'

import { SignedIn, SignedOut, SignInButton, SignUpButton, useAuth, UserButton } from '@clerk/nextjs'

export const Client = () => {
    const { isLoaded, isSignedIn, userId, sessionId } = useAuth()

    return (
        <div className='border rounded-md p-4'>
            <div>Client Component</div>
            <div>{isLoaded ? 'loaded' : 'not loaded'}</div>
            <div>{isSignedIn ? 'signed in' : 'nod signed in'}</div>
            <div>{userId}</div>
            <div>{sessionId}</div>
            <SignedIn>
                <UserButton />
            </SignedIn>
            <SignedOut>
                <SignInButton />
                <SignUpButton />
            </SignedOut>
        </div>
    )
}
