import Link from "next/link";
import Container from "./Container";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer({ links = [] }) {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <Container className="flex flex-col gap-5 md:gap-4 md:flex-col justify-between items-center text-center">
        {/* Logo/Tagline */}
        <div>
          <h2 className="text-xl font-semibold">Brew Hez ☕</h2>
          <p className="text-sm mt-2 max-w-xs">
            Crafted with love for every coffee enthusiast. Join us in the brew journey!
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm hover:underline hover:text-primary transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-white">
          <a href="#" aria-label="Facebook" className="hover:text-primary transition">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-primary transition">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-primary transition">
            <FaTwitter />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-primary transition">
            <FaLinkedinIn />
          </a>
        </div>
      </Container>

      {/* Bottom copyright */}
      <div className="text-center text-xs text-gray-400 mt-6">
        &copy; {new Date().getFullYear()} Brew Hez. All rights reserved.
      </div>
    </footer>
  );
}
