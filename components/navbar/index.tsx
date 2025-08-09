import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="w-full">
      <div className="flex justify-between items-center px-10 mt-5 max-w-screen-xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-30">
          <Image
            aria-hidden
            src="/logo.png"
            alt="Carus Logo"
            width={117}
            height={32}
            className="w-[117px] h-[32px]"
          />

          {/* nav links */}
          <nav className="hidden md:flex items-center gap-10">
            <Link href="/" className="text-primary font-bold">
              Home
            </Link>
            <Link href="/service">Service</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>

        {/* Right side: auth buttons */}
        <div className="flex items-center gap-4">
          <Link href="/login" className="px-3 py-1">
            Log In
          </Link>
          <Link
            href="/register"
            className="px-4 py-2 bg-primary text-white rounded"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
