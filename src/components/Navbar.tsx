"use client"

import { useState } from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type LinksType = {
    home: string
    journals: string
    about: string
}

const links: LinksType = {
    home: '/',
    journals: '/journals',
    about: '#'
}

const style: { active: string, inactive: string } = {
    active: 'bg-primary-darker px-5 py-3 rounded-3xl lg:py-2',
    // active: 'text-xl font-teachers font-bold text-tertiary flex flex-col gap-y-10 lg:flex-row lg:gap-x-10 lg:text-lg lg:py-3',
    inactive: 'transition duration-700 transform hover:bg-primary-darker px-5 py-3 rounded-3xl lg:py-2'
}

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const pathname = usePathname()

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <>
            <div onClick={handleNav} className="absolute right-0 text-secondary m-10 text-3xl lg:hidden z-30">{nav ? '❌' : '🌸'}</div>
            <nav className={`flex absolute ${nav ? 'left-[0%]' : 'left-[-100%]'} lg:left-0 w-full bg-primary justify-center items-center text-center text-xl h-screen ease-in duration-300 lg:h-auto z-20`}>
                <div className="text-xl font-teachers font-bold text-tertiary flex flex-col gap-y-10 lg:flex-row lg:gap-x-10 lg:text-lg lg:py-3">
                    {Object.entries(links).map(([key, value]) => (
                        <Link key={key} href={value} className={pathname === value ? style.active : style.inactive} onClick={handleNav}>{key}</Link>
                    ))}
                </div>
            </nav >
        </>
    )
}

export default Navbar