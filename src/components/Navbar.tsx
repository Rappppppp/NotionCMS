"use client"

import React from 'react'
import { usePathname } from 'next/navigation';

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
    const pathname = usePathname();

    return (
        <>
            <div className="absolute right-0 text-secondary m-10 text-3xl lg:hidden">🌸</div>
            <nav className="z-10 flex absolute left-[-100%] lg:left-0 w-full bg-primary justify-center items-center text-center text-xl h-screen ease-in duration-300 lg:h-auto">
                <div className="text-xl font-teachers font-bold text-tertiary flex flex-col gap-y-10 lg:flex-row lg:gap-x-10 lg:text-lg lg:py-3">
                    {Object.entries(links).map(([key, value]) => (
                        <a
                            key={key}
                            href={value}
                            className={pathname === value ? style.active : style.inactive}>{key}</a>
                    ))}
                </div>
            </nav >
        </>
    )
}

export default Navbar