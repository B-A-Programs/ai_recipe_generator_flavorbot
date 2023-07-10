'use client'

import Image from "next/image"
import Link from "next/link"
import { getProviders, signIn, signOut, useSession } from "next-auth/react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

const Nav = () => {
    const { data: session, status } = useSession()
    const [providers, setProviders] = useState()
    const Router = useRouter()

    useEffect(() => {
        const initProviders = async () => {
            const prov = await getProviders()

            setProviders(prov)
        }

        initProviders()
    }, [])

    return (
        <nav className="flex-between lg:px-48 px-20 pt-2 font-inter">
            
            <Link href="/">
                <div className="flex-center flex-row gap-4">
                    <Image src="/flavorbot-logo.webp" height={50} width={270} alt="flavorbot logo" />
                </div>
            </Link>

            {session?.user ?
            <div className="flex-center flex-row gap-6">
                <div className="sm:flex items-center gap-3 hidden"> 
                    <Link href={`/recipes`} className="orange_gradient font-bold px-4 transition-all hover:text-orange-500">View saved recipes</Link>
                    <Image src={session.user.image} width={40} height={40} className="rounded-full" alt="user img" />
                </div>
                <button className="sign_out_btn" onClick={signOut}>Sign Out</button>
            </div>
            : 
            <>
                {providers &&
                Object.values(providers).map((provider) => (
                    <button className="sign_in_btn" key={provider.id} onClick={() => signIn(provider.id)}><Image src="Google__G__Logo.svg" alt="google logo" width={20} height={20} />Sign In</button>
                ))}
            </>
            }
        </nav>
    )
}

export default Nav