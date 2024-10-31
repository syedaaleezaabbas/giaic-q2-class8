import React from 'react'
import Link from "next/link"
import { Menu } from 'lucide-react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


const Header = () => {
    return (
        <header className='flex justify-between px-5 py-5 bg-purple-300 text-white max-w-screen-2xl mx-auto'>
            {/* logo */}
            <div className="text-2xl">
                <h2>A.</h2>
            </div>
            {/* nav buttons */}
            <ul className='hidden md:block'>
                <li className='text-1xl space-x-5'>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>

            <Sheet>
                <SheetTrigger className='md:hidden'><Menu /></SheetTrigger>
                <SheetContent>
                    <ul>
                        <li className='space-x-5'>
                            <Link href="/">Home</Link>
                            <Link href="/">About</Link>
                            <Link href="/">Contact</Link>
                        </li>
                    </ul>
                </SheetContent>
            </Sheet>

        </header>
    )
}

export default Header
