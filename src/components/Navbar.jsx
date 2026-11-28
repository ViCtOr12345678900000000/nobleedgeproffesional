// src/components/Navbar.jsx
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Download, BookOpen } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/team", label: "Team" },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="w-[42px] h-[42px] bg-[#0A2342] flex items-center justify-center">
            <div className="w-[18px] h-[18px] bg-[#C5A880] rotate-45 rounded-[2px]"></div>
          </div>
          <div className="leading-none">
            <p className="font-serif-luxury text-[20px] font-bold tracking-[0.15em] text-[#0A2342]">NOBLE EDGE</p>
            <p className="text-[9px] font-bold tracking-[0.35em] text-[#C5A880] mt-1">PROFESSIONAL SERVICES</p>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-7 text-[14px] font-medium text-[#1F2937]">
          {links.map(l => <NavLink key={l.to} to={l.to} className={({isActive}) => isActive ? "text-[#C5A880]" : "hover:text-[#C5A880]"}>{l.label}</NavLink>)}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/insights">
            <button className="border border-mauve-500/50 px-4 py-2.5 text-[13px] font-medium rounded-full  hover:bg-black hover:text-white transition hover:scale-107 hover:cursor-pointer hover:">
              Resource Center
            </button>
          </Link>
          <Link to="/download" onClick={() => setOpen(false)} className="bg-[#C5A880] px-4 py-3 border border-mauve-500/50 shadow-2xl text-center font-medium flex items-center justify-center gap-2 rounded-full hover:bg-white ">
            <Download size={15} /> Downloads
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden">
          {open ? <X size={24}/> : <Menu size={24}/>}
        </button>
      </div>

      {/* MOBILE MENU - FIXED */}
      {open && (
        <div className="lg:hidden flex flex-col gap-4 px-6 pb-6 pt-4 bg-white border-t">
          {links.map(l => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-[15px] font-medium">
              {l.label}
            </Link>
          ))}

          <Link to="/download" onClick={() => setOpen(false)}>
            <button className="w-full bg-[#C5A880] text-black px-4 py-2.5 text-[13px] font-medium flex items-center justify-center gap-2 hover:bg-[#B89A6E] transition">
              <Download size={15} /> Downloads
            </button>
          </Link>
          <Link to="/insights" onClick={() => setOpen(false)} className="border-2 border-black px-4 py-3 text-center text-[14px] font-medium flex items-center justify-center gap-2">
            <BookOpen size={16} /> Resource Centers
          </Link>
        </div>
      )}
    </nav>
  );
}