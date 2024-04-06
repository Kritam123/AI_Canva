'use client'
import { navLinks } from '@/constant'
import { cn } from '@/lib/utils'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Button } from '../ui/button'

const SideBar = () => {
    const pathname = usePathname();
    return (
        <aside className='sidebar'>
            <div className="flex size-full flex-col gap-4">
                <Link className='sidebar-logo' href={"/"}>
                    <Image src="/assets/images/logo-text.svg" alt='logo' width={150} height={28} />
                </Link>
                <nav className='sidebar-nav'>
                    <SignedIn>
                        <ul className='sidebar-nav_elements justify-start'>
                            {
                                navLinks.slice(0, 6).map((link) => {
                                    const isActive = link.route === pathname
                                    return (
                                        <li key={link.route} className={cn(`sidebar-nav_element group`, isActive ? "bg-purple-gradient text-white" : "text-gray-700")}>
                                            <Link href={link.route} className='sidebar-link'>
                                                <Image className={cn(isActive && "brightness-200")} src={link.icon} alt={link.label} width={30} height={30} />
                                                {link.label}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <ul className='sidebar-nav_elements justify-start'>
                            {navLinks.slice(6).map((link) => {
                                const isActive = link.route === pathname
                                return (
                                    <li key={link.route} className={cn(`sidebar-nav_element group`, isActive ? "bg-purple-gradient text-white" : "text-gray-700")}>
                                        <Link href={link.route} className='sidebar-link'>
                                            <Image className={cn(isActive && "brightness-200")} src={link.icon} alt={link.label} width={30} height={30} />
                                            {link.label}
                                        </Link>
                                    </li>
                                )
                            })}
                            <li className='flex-center cursor-pointer gap-2 p-4'>
                                <UserButton afterSignOutUrl='/' showName />
                            </li>
                        </ul>
                    </SignedIn>
                    <SignedOut>
                        <Button variant={"outline"} asChild className='bg-purple-gradient button bg-cover' >
                            <Link className='text-white' href={"/sign-in"}>Sign-In</Link>
                        </Button>
                    </SignedOut>
                </nav>
            </div>
        </aside>
    )
}

export default SideBar