import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import Container from "./Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-800 text-white">
      {({ open }) => (
        <>
          <Container className="flex justify-between items-center py-4">
            <div className="font-bold text-xl">MySite</div>
            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-4">
              <NavLinks />
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden flex items-center">
              <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700 focus:outline-none">
                <span className="sr-only">Open main menu</span>
                <FontAwesomeIcon
                  icon={open ? faTimes : faBars}
                  className="h-6 w-6"
                />
              </Disclosure.Button>
            </div>
          </Container>

          {/* Mobile Panel */}
          <Disclosure.Panel className="md:hidden">
            <Container className="px-2 pb-4 space-y-1">
              <NavLinks mobile />
            </Container>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

function NavLinks({ mobile = false }) {
  const linkClass = mobile
    ? "block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
    : "hover:underline";

  return (
    <>
      <Link href="/" className={linkClass}>
        Home
      </Link>
      <Link href="/about" className={linkClass}>
        About
      </Link>
      <Link href="/products" className={linkClass}>
        Products
      </Link>
      <Link href="/contact" className={linkClass}>
        Contact
      </Link>
    </>
  );
}
