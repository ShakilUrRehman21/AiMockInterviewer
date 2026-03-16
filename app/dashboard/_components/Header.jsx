"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import Link from 'next/link'

function Header() {

    const path = usePathname();
    useEffect(() => {
        console.log(path);
    }, [path]);

    return (
        <div className='flex p-4 items-center justify-between bg-gray-900 text-white shadow-sm'>
            <Image src={'/logo.svg'} width={40} height={30} alt='logo'/>
            <ul className='hidden md:flex gap-6'>
                <li className={`hover:text-blue-700 hover:font-bold transition-all cursor-pointer ${path === '/dashboard' && 'text-blue-700 font-bold'}`}>
                    <Link href="/dashboard">Dashboard</Link>
                </li>
                {/* <li className={`hover:text-blue-700 hover:font-bold transition-all cursor-pointer ${path === '/dashboard/question' && 'text-blue-700 font-bold'}`}>
                    <Link href="/dashboard/question">Questions</Link>
                </li>
                <li className={`hover:text-blue-700 hover:font-bold transition-all cursor-pointer ${path === '/dashboard/upgrade' && 'text-blue-700 font-bold'}`}>
                    <Link href="/dashboard/upgrade">Upgrade</Link>
                </li> */}
                <li className={`hover:text-blue-700 hover:font-bold transition-all cursor-pointer ${path === '/dashboard/instruction' && 'text-blue-700 font-bold'}`}>
                    <Link href="/dashboard/instruction">Instructions</Link>
                </li>
            </ul>
            <UserButton/>
        </div>
    )
}

export default Header
