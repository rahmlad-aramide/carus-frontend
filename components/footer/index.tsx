import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="">
      {/* flex form and bg image */}
      <div className="w-full flex flex-col md:flex-row md:px-10 lg:px-15 md:gap-20 lg:gap-40 mt-15 md:mt-30">
        {/* Logo + text */}
        <div className="md:w-3/5 mb-10 md:mb-0 px-7 md:px-0">
          <Image
            aria-hidden={false}
            src="/logo.png"
            alt="Carus Logo"
            width={117}
            height={32}
            className="w-[117px] h-[32px]"
          />
          <p className="mt-4 text-grey-90 w-full text-justify">
            We specialize in waste collection, recycling, and disposal services.
            Our state-of-the-art facilities and advanced technologies ensure
            efficient and environmentally responsible waste management
            practices.
          </p>
        </div>

        <div className="flex px-7 md:px-0 gap-x-30 md:gap-x-30 lg:gap-x-50">
          <div className="space-y-4 md:w-1/5">
            <p className="text-grey-30 text-xl font-bold">Product</p>
            <p className="text-grey-90">Recycle</p>
            <p className="text-grey-90">Business</p>
            <p className="text-grey-90">Donations</p>
          </div>

          <div className="flex flex-col space-y-4 md:w-1/5">
            <p className="text-grey-30 text-xl font-bold">Company</p>
            <Link href="/contact" className="text-grey-90">
              Contact
            </Link>
            <Link href="/about" className="text-grey-90">
              About
            </Link>
            <Link href="/blog" className="text-grey-90">
              Blog
            </Link>
          </div>
        </div>
      </div>

      <div className="px-7 md:px-10 lg:px-15 pt-10 pb-10">
        <p className="text-grey-30 text-xl font-bold">Contact Us</p>
        {/* Social Icons */}
        <div className="flex justify-start flex-1 space-x-4 pt-5">
          <Link
            href=""
            className="text-white bg-primary-60 p-2 rounded-[6px] text-base"
          >
            <FaWhatsapp />
          </Link>

          <Link
            href=""
            className="text-white bg-primary-60 p-2 rounded-[6px] text-base"
          >
            <FaLinkedin />
          </Link>

          <Link
            href=""
            className="text-white bg-primary-60 p-2 rounded-[6px] text-base"
          >
            <FaTwitter />
          </Link>

          <Link
            href=""
            className="text-white bg-primary-60 p-2 rounded-[6px] text-base"
          >
            <FaInstagram />
          </Link>
        </div>
      </div>

      <p className="mt-7 mb-15 text-primary-60 px-7 md:px-10 lg:px-15">
        Copyright © Carus. 2025.
      </p>
    </div>
  );
}
