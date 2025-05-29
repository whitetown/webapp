import Link from 'next/link'
import { Client } from '../Client'
import { Server } from '../Server'

export default function Home() {
    return (
        <main className='mx-auto p-4 max-w-4xl'>
            <div>account</div>
            <Link href='/' className='btn'>
                Go back to home
            </Link>
            <Server />
            <Client />
        </main>
    )
}
