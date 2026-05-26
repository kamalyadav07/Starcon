import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { ChevronDown, Menu, X } from "lucide-react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "Know Us" },
  { to: "/she-policy", label: "S.H.E Policy" },
  { to: "/clients", label: "Clients" },
  { to: "/finance-partners", label: "Our Finance Partners" },
  { to: "/our-strength", label: "Our Strength" },
  { to: "/contact", label: "Contact Us" },
];

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { pathname } = useLocation();
  const isActive = (path) => pathname === path;
  const linkClass = (path) =>
    `whitespace-nowrap rounded-[3px] px-[11px] py-[9px] transition hover:bg-[#4b4a4d] hover:text-white ${
      isActive(path) ? "bg-[#4b4a4d] text-white" : "text-black"
    }`;

  return (
    <header className="relative z-50 w-full bg-[#cdb7d0]/88">
      <div className="mx-auto max-w-[1180px] px-2">
        <div className="flex h-[50px] items-center justify-between">
          <Link to="/" className="shrink-0">
            <div className="leading-none">
              <div className="font-serif text-[31px] font-bold tracking-[1px] text-[#16457b]">
                ST<span className="relative inline-block px-[2px] text-[#d71920]">A</span>RCON
              </div>
              <div className="mt-[-4px] text-[10px] font-semibold tracking-[.4px] text-[#353548]">
                INFRA PROJECTS INDIA PVT. LTD.
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-[7px] text-[10px] font-bold uppercase lg:flex">
            <Link to="/" className={linkClass("/")}>
              Home
            </Link>
            <Link to="/about" className={linkClass("/about")}>
              Know Us
            </Link>
            <div className="relative group">
              <div className="flex cursor-pointer items-center gap-1 whitespace-nowrap rounded-[3px] px-[11px] py-[9px] text-black transition hover:bg-[#4b4a4d] hover:text-white">
                Services
                <ChevronDown size={12} strokeWidth={2.2} />
              </div>

              <div className="invisible absolute left-0 top-full z-50 pt-5 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                <div className="w-[310px] border border-gray-200 bg-white shadow-xl">
                  <div className="flex flex-col py-2">
                    <Link
                      to="/hydropower"
                      className="px-5 py-3 hover:bg-gray-100 text-[13px]"
                    >
                      Hydropower Dams & Tunnelling
                    </Link>

                    <Link
                      to="/roadworks"
                      className="px-5 py-3 hover:bg-gray-100 text-[13px]"
                    >
                      Roadworks
                    </Link>

                    <Link
                      to="/township-development"
                      className="px-5 py-3 hover:bg-gray-100 text-[13px]"
                    >
                      Township Development
                    </Link>

                    <Link
                      to="/ground-engineering"
                      className="px-5 py-3 hover:bg-gray-100 text-[13px]"
                    >
                      Ground Engineering
                    </Link>

                    <Link
                      to="/warehouse-construction"
                      className="px-5 py-3 hover:bg-gray-100 text-[13px]"
                    >
                      Warehouse Construction
                    </Link>

                    <Link
                      to="/public-health-engineering"
                      className="px-5 py-3 hover:bg-gray-100 text-[13px]"
                    >
                      Public Health Engineering
                    </Link>

                    <Link
                      to="/metros"
                      className="px-5 py-3 hover:bg-gray-100 text-[13px]"
                    >
                      Metros
                    </Link>

                    <Link
                      to="/earthworks"
                      className="px-5 py-3 hover:bg-gray-100 text-[13px]"
                    >
                      Earthworks
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {navItems.slice(2).map((item) => (
              <Link key={item.to} to={item.to} className={linkClass(item.to)}>
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenu ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>

        </div>
      </div>

      {mobileMenu && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col p-5 text-[14px] uppercase font-semibold">
            <Link className="py-3" to="/">
              Home
            </Link>

            <Link className="py-3" to="/about">
              Know Us
            </Link>

            <Link className="py-3" to="/hydropower">
              Hydropower
            </Link>

            <Link className="py-3" to="/roadworks">
              Roadworks
            </Link>

            <Link className="py-3" to="/township-development">
              Township Development
            </Link>

            <Link className="py-3" to="/clients">
              Clients
            </Link>

            <Link className="py-3" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
