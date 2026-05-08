
import Wallpaper from "./components/Wallpaper";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
     <main className="relative h-screen overflow-hidden bg-[#121212]">
        <Navbar />
     <Wallpaper />
     </main>
    </>
  )
}