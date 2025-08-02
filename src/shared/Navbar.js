import Link from "next/link";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import Container from "./Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-800 text-white">
      {({ open }) => (
        <>
          <Container className="flex justify-between items-center py-4">
            {/* Logo + Brand */}
            <div className="flex items-center space-x-2">
              {/* <Image
                src="/images/logo" // ✅ Replace with your logo path
                alt="Company Logo"
                width={40}
                height={40}
                className="rounded-full"
              /> */}
              <Link href="/">
              <span className="font-semibold text-xl">Brew Hez ☕</span>
              </Link>
              
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="hover:text-gray-300 transition duration-150"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700 focus:outline-none">
                <span className="sr-only">Open menu</span>
                <FontAwesomeIcon icon={open ? faTimes : faBars} className="h-6 w-6" />
              </Disclosure.Button>
            </div>
          </Container>

          {/* Mobile Nav Links */}
          <Disclosure.Panel className="md:hidden bg-gray-700">
            <Container className="px-4 pb-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-600"
                >
                  {item.name}
                </Link>
              ))}
            </Container>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
