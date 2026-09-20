import { LuNotebookPen } from "react-icons/lu";
const Header = () => {
  return (
    <header className="bg-[#F1F2EB]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 text-2xl font-bold text-[#2563EB]"
        >
          <LuNotebookPen className="h-7 w-7" />
          StudyFlow
        </a>

        {/* Navigation */}
        <ul className="hidden items-center gap-7 text-[#64748B] md:flex">
          <li>
            <a href="#features" className="transition hover:text-[#2563EB]">
              Features
            </a>
          </li>

          <li>
            <a href="#how-it-works" className="transition hover:text-[#2563EB]">
              How It Works
            </a>
          </li>

          <li>
            <a href="#pricing" className="transition hover:text-[#2563EB]">
              Pricing
            </a>
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button className="rounded-md px-4 py-2 font-semibold text-[#475569] transition hover:text-[#2563EB]">
            Login
          </button>

          <button className="rounded-md bg-[#2563EB] px-5 py-2 font-semibold text-white transition hover:bg-[#1D4ED8]">
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
