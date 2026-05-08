import react from "react";
import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <nav className="flex py-4 px-8 bg-gradient-to-r from-zinc-700 to-mist-950 shadow-xl shadow-red-500/50">
                <div className="flex-1 italic font-bold">Jake Russel's Portfolio</div>


                <div className="flex-1 text-center flex justify-end gap-10 font-bold">

                    <Link href="/">Home</Link>

                    <Link href="/about">About Me</Link>

                    <Link href="/projects">My Projects</Link>

                    <Link href="/contact">Contact</Link>
                </div>


            </nav>
        </>
    )
}