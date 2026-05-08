
type NavbarProps = {
    active: string;
    setActive: (value: string) => void;
  };

export default function Navbar({ active, setActive }: NavbarProps) {
    const linkClass = (name: string) =>
      `transition duration-200 ease-in-out ${
        active === name
          ? "border-b-2 text-zinc-400"
          : "hover:border-b-2 hover:text-zinc-400"
      }`;
  
    return (
      <nav className="fixed left-0 right-0 z-50 flex py-4 px-8 bg-gradient-to-r from-zinc-800 to-olive-950 shadow-xl shadow-neutral-900/90">
        
        <div className="flex-1 italic font-bold text-lg">
          Jake Russel's Portfolio
        </div>
  
        <div className="flex-1 text-center flex justify-end md:gap-10 lg:gap-12 md:text-[13.91px] lg:text-[16px] font-bold">
  
          <button onClick={() => setActive("home")} className={linkClass("home")}>
            Home
          </button>
  
          <button onClick={() => setActive("about")} className={linkClass("about")}>
            About Me
          </button>
  
          <button onClick={() => setActive("project")} className={linkClass("project")}>
            My Projects
          </button>
  
          <button onClick={() => setActive("contact")} className={linkClass("contact")}>
            Contact
          </button>
  
        </div>
      </nav>
    );
  }