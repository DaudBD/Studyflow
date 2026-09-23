import { LuNotebookPen } from "react-icons/lu";
import { Link } from "react-router";

const footerGroups = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "How it works", href: "/how-it-works" },
      { label: "Pricing", href: "/pricing" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Help center", href: "/help-center" },
      { label: "Study tips", href: "/study-tips" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-[#D9DDD2] bg-white px-5 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xl font-bold text-[#071E2B]"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#2563EB] text-white">
                <LuNotebookPen className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                Study<span className="text-[#2563EB]">Flow</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs leading-6 text-[#64748B]">
              A study dashboard for turning goals into daily progress.
            </p>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <h2 className="font-semibold text-[#071E2B]">{group.title}</h2>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={typeof link === "string" ? link : link.label}>
                    <Link
                        to={link.href}
                        className="text-[#64748B] transition-colors hover:text-[#2563EB]"
                      >
                        {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[#D9DDD2] pt-6 text-sm text-[#64748B] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} StudyFlow. All rights reserved.</p>
          <p>
            Designed by{" "}
            <a
              href="https://daudbd.com"
              className="font-semibold text-[#2563EB] hover:text-[#1D4ED8]"
            >
              DaudBD.Com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
