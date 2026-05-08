    import react from "react";
    import Link from "next/link";

    type NavbarProps = {
        setActive: (value: string) => void;
      };

    export default function Navbar({setActive}: NavbarProps) {
        return (
            <>
                <nav className="fixed left-0 right-0 z-50 flex py-4 px-8 bg-gradient-to-r from-zinc-800 to-olive-950 shadow-xl shadow-neutral-900/90">
                    <div className="flex-1 italic font-bold text-lg">Jake Russel's Portfolio</div>

                    <div className="flex-1 text-center flex justify-end md:gap-10 lg:gap-12 md:text-[13.91px] lg:text-[16px] font-bold">

                        <button onClick={() => setActive("home")} className="hover:border-b-2 hover:text-zinc-400 transition duration-100 ease-in-out">Home</button>  

                        <button onClick={() => setActive("about")} className="hover:border-b-2 hover:text-zinc-400 duration-100">About Me</button>

                        <button onClick={() => setActive("project")} className="hover:border-b-2 hover:text-zinc-400 duration-100">My Projects</button>

                        <button onClick={() => setActive("contact")} className="hover:border-b-2 hover:text-zinc-400 duration-100">Contact</button>
                    </div>


                </nav>
            </>
        )
    }