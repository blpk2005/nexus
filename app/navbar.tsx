// Nexus Navbar component with blue and white theme
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full bg-transparent shadow-md top-0 left-0 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo (not in blue background) */}
        <div className="flex items-center justify-start">
            <Link href="/"><Image src="/nexus_logo.jpg" alt="Nexus Logo" width={100} height={100} className="rounded hover:opacity-80 transition" /></Link>
        </div>
        {/* Navbar content in blue background, right-aligned */}
        <div className="flex-1 flex justify-center items-center">
          <div className="flex items-center space-x-15 bg-white-500 px-10 py-2  text-white text-lg font-medium shadow">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/team">Team</Link>
            <Link href="/Contact">Contact Us</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
