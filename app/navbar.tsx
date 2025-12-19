// Nexus Navbar component with blue and white theme
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full bg-transparent shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo (not in blue background) */}
        <div className="flex items-center justify-start">
          <Link href="/">
            <Image src="/nexus_logo.jpg" alt="Nexus Logo" width={100} height={100} className="rounded hover:opacity-80 transition" />
          </Link>
        </div>
        {/* Navbar content in blue background, right-aligned */}
        <div className="flex-1 flex justify-end">
          <div className="flex items-center space-x-8 bg-blue-700 px-8 py-2 rounded-l-full text-white text-lg font-medium shadow">
            <Link href="/" className="font-bold">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/team">Team</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
