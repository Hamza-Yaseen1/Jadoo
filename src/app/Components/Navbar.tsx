'use client'
import { useEffect, useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  // Add shadow & slight blur on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus when resizing up from mobile
  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <>
      <nav
        className={[
          "fixed inset-x-0 top-0 z-50",
          "backdrop-blur-sm transition-shadow p-3",
          scrolled ? "shadow-md bg-white/80" : "bg-white/60",
        ].join(" ")}
        aria-label="Primary"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 font-bold text-xl">
              <img
                src="/Images/Logo.png"
                alt="Logo"
                className="h-8 w-auto"
                draggable="false"
              />
            </a>

            {/* Desktop nav */}
            <ul className="hidden items-center gap-10 font-medium text-gray-700 lg:flex">
              <li>
                <a className="hover:text-gray-900 transition-colors" href="/Destination">
                  Destinations
                </a>
              </li>
              <li>
                <a className="hover:text-gray-900 transition-colors" href="#">
                  Hotels
                </a>
              </li>
              <li>
                <a className="hover:text-gray-900 transition-colors" href="#">
                  Flights
                </a>
              </li>
              <li>
                <a className="hover:text-gray-900 transition-colors" href="#">
                  Bookings
                </a>
              </li>
              <li>
                <a className="hover:text-gray-900 transition-colors" href="#">
                  Login
                </a>
              </li>
              <li>
                <button className="rounded-full border px-4 py-2 text-sm transition hover:bg-gray-900 hover:text-white">
                  Sign Up
                </button>
              </li>

              {/* Language dropdown */}
              <li className="relative">
                <button
                  className="flex items-center gap-1 rounded-full border px-3 py-2 text-sm transition hover:bg-gray-100"
                  onClick={() => setLangOpen((v) => !v)}
                  onBlur={() => setTimeout(() => setLangOpen(false), 150)}
                  aria-haspopup="listbox"
                  aria-expanded={langOpen}
                >
                  EN
                  <svg
                    className={`h-4 w-4 transition-transform ${
                      langOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {langOpen && (
                  <ul
                    className="absolute right-0 mt-2 w-32 overflow-hidden rounded-xl border bg-white shadow-md"
                    role="listbox"
                    tabIndex={-1}
                  >
                    {["EN", "ES", "FR"].map((l) => (
                      <li key={l}>
                        <button
                          className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-50"
                          role="option"
                          onMouseDown={(e) => e.preventDefault()}
                          onClick={() => {
                            // replace with your language switcher
                            setLangOpen(false);
                          }}
                        >
                          {l}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>

            {/* Mobile hamburger */}
            <button
              className="relative h-10 w-10 rounded-lg lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {/* Hamburger / X animation */}
              <span
                className={`absolute left-1/2 top-1/2 block h-0.5 w-6 -translate-x-1/2 -translate-y-2 rounded bg-gray-900 transition-transform ${
                  open ? "translate-y-0 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-1/2 top-1/2 block h-0.5 w-6 -translate-x-1/2 rounded bg-gray-900 transition-all ${
                  open ? "opacity-0" : "-translate-y-0"
                }`}
              />
              <span
                className={`absolute left-1/2 top-1/2 block h-0.5 w-6 -translate-x-1/2 translate-y-2 rounded bg-gray-900 transition-transform ${
                  open ? "-translate-y-0 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile menu (animated height) */}
        <div
          className={[
            "lg:hidden overflow-hidden transition-[max-height,opacity] duration-300",
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          ].join(" ")}
          aria-hidden={!open}
        >
          <div className="mx-auto max-w-7xl px-6 pb-4">
            <ul className="space-y-2 py-2 text-gray-700">
              {["Destinations", "Hotels", "Flights", "Bookings"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="block rounded-lg px-3 py-2 font-medium hover:bg-gray-100"
                    onClick={() => setOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3 px-1 pt-2">
                <a
                  href="#"
                  className="rounded-lg px-3 py-2 font-medium hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  Login
                </a>
                <button className="rounded-full border px-4 py-2 text-sm transition hover:bg-gray-900 hover:text-white">
                  Sign Up
                </button>
              </li>
              <li className="px-1">
                <div className="mt-2 inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm">
                  <span>EN</span>
                  <span className="text-gray-400">/</span>
                  <button className="hover:underline">ES</button>
                  <span className="text-gray-400">/</span>
                  <button className="hover:underline">FR</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Spacer so content isn't hidden behind fixed nav */}
      <div className="h-16" />
    </>
  );
};

export default Navbar;
