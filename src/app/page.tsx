import Link from 'next/link'
import { Client } from './Client'
import { Server } from './Server'

export default async function Home() {
    // const user = await currentUser()
    // const { userId } = await auth()
    // console.log(user, userId)

    return (
        <main className='mx-auto p-4 max-w-4xl'>
            <Link className='btn' href='/account'>
                to account
            </Link>
            <Server />
            <Client />
        </main>
    )
}
