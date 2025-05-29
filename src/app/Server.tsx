import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'

export const Server = () => (
    <div className='p-4 rounded border'>
        <div>Server Component</div>
        <SignedOut>
            <SignInButton />
            <SignUpButton />
        </SignedOut>
        <SignedIn>
            <UserButton />
        </SignedIn>
    </div>
)
