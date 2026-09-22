import { LuNotebookPen, LuMenu, LuX } from "react-icons/lu";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header id="top" className="sticky top-0 z-50 w-full border-b border-[#E5E7EB] bg-[#F1F2EB]/95 backdrop-blur-md">
      <nav className="mx-auto flex min-h-16 max-w-6xl items-center justify-between px-4 py-3 sm:px-5">
        {/* Logo */}
        <a
          href="#top"
          className="flex shrink-0 items-center gap-2 text-xl font-bold text-[#2563EB] sm:text-2xl"
        >
          <LuNotebookPen className="h-6 w-6 sm:h-7 sm:w-7" />
          <span>StudyFlow</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-6 font-semibold text-[#64748B] md:flex lg:gap-8">
          <li>
            <a
              href="#features"
              className="transition-colors hover:text-[#2563EB]"
            >
              Features
            </a>
          </li>

          <li>
            <a
              href="#how-it-works"
              className="transition-colors hover:text-[#2563EB]"
            >
              How It Works
            </a>
          </li>

          <li>
            <a
              href="#pricing"
              className="transition-colors hover:text-[#2563EB]"
            >
              Pricing
            </a>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-2 md:flex">
          <button className="rounded-md px-3 py-2 font-semibold text-[#475569] transition hover:text-[#2563EB] lg:px-4">
            Login
          </button>

          <button className="rounded-md bg-[#2563EB] px-4 py-2 font-semibold text-white transition hover:bg-[#1D4ED8] lg:px-5">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-md p-2 text-[#475569] transition hover:bg-[#E5E7EB] md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <LuX className="h-6 w-6" />
          ) : (
            <LuMenu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-[#E5E7EB] bg-[#F1F2EB] px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-1 font-semibold text-[#64748B]">
            <li>
              <a
                href="#features"
                onClick={() => setMenuOpen(false)}
                className="block rounded-md px-3 py-3 hover:bg-white hover:text-[#2563EB]"
              >
                Features
              </a>
            </li>

            <li>
              <a
                href="#how-it-works"
                onClick={() => setMenuOpen(false)}
                className="block rounded-md px-3 py-3 hover:bg-white hover:text-[#2563EB]"
              >
                How It Works
              </a>
            </li>

            <li>
              <a
                href="#pricing"
                onClick={() => setMenuOpen(false)}
                className="block rounded-md px-3 py-3 hover:bg-white hover:text-[#2563EB]"
              >
                Pricing
              </a>
            </li>
          </ul>

          {/* Mobile Buttons */}
          <div className="mt-3 flex gap-2 border-t border-[#E5E7EB] pt-4">
            <button className="flex-1 rounded-md px-4 py-2 font-semibold text-[#475569] hover:bg-white">
              Login
            </button>

            <button className="flex-1 rounded-md bg-[#2563EB] px-4 py-2 font-semibold text-white hover:bg-[#1D4ED8]">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
