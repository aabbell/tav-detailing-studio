"use client" 
import Link from "next/link"
import { useState } from "react"

export default function Navbar(){
    const [isOpen, setisOpen] = useState(false)

    return(
        <nav className="bg-white shadow-2xs fixed w-full z-10">
            <div className="max-w-8xl mx-auto md:px-22 px-10 lg:px-60">
                <div className="flex justify-between h-16 items-center">
                    LOGO
                    <div className="flex-shrink-0 text-2x1 font-bold text-blue-600">
                    </div>
                    {/* Destop Menu */}
                    <div className="hidden md:flex space-x-6">
                        <Link href="#About" className="hover:text-blue-500">About</Link>
                        <Link href="#Services" className="hover:text-blue-500">Services</Link>
                        <Link href="#Prices" className="hover:text-blue-500">Prices</Link>
                        <Link href="#Contact" className="hover:text-blue-500">Contact</Link>
                    </div>

                    {/* mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setisOpen(!isOpen)} className="text-gray-700 focus:outline-none">
                            ☰
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <div className="px-4 py-2 space-y-2">
                        <Link href="/" className="block hover:text-blue-500">Home</Link>
                        <Link href="/about" className="block hover:text-blue-500">About</Link>
                        <Link href="/services" className="block hover:text-blue-500">services</Link>
                        <Link href="contact" className="block hover:text-blue-500">Contact</Link>
                    </div>
                </div>
            )}
        </nav>
    )
}