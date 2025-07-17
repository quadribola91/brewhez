import Link from "next/link";
import Container from "./Container";

export default function Footer({ links = [] }) {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <Container className="flex flex-col md:flex-row justify-between items-center text-center gap-4">
        <div>
          &copy; {new Date().getFullYear()} MySite. All rights reserved.
        </div>
        <div className="flex space-x-4">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:underline">
              {link.label}
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
}
