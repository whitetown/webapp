import Link from 'next/link'

export default function Home() {
    return (
        <main>
            account
            <Link href='/' className='btn'>
                Go back to home
            </Link>
        </main>
    )
}
