// src/components/Footer.jsx
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Download,
  ArrowRight,
  Send,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="w-full">
      {/* TOP GOLD CTA */}
      <div className="bg-[#E9C46A]  text-black">
        <div className="w-full mx-auto px-6 py-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <h2 className="font-serif-luxury text-[36px] sm:text-[44px] font-bold leading-tight">
              Ready to get your edge?
            </h2>
            <p className="text-[14px] sm:text-[15px] mt-1 max-w-[480px] leading-relaxed">
              Start with a confidential consultation. Tell us where you are — and where you intend to be.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link to="/contact">
              <button className="bg-[#0A1628] text-white text-[13px] font-semibold px-5 py-3 flex items-center gap-2 hover:bg-black transition">
                Book a Consultation <ArrowRight size={15} />
              </button>
            </Link>
            <a href="https://drive.google.com/uc?export=download&id=YOUR_ID_HERE">
              <button className="border border-black text-black text-[13px] font-semibold px-5 py-3 flex items-center gap-2 hover:bg-black hover:text-white transition">
                <Download size={15} /> Download Brochure
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM NAVY FOOTER */}
      <div className="bg-[#0A1628]  text-white">
        <div className="w-full mx-auto px-6 py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="w-[38px] h-[38px] bg-[#E9C46A] flex items-center justify-center">
                <div className="w-[14px] h-[14px] bg-[#0A1628] rotate-45 rounded-[2px]"></div>
              </div>
              <div className="leading-none">
                <p className="font-serif-luxury text-[17px] font-bold tracking-[0.12em]">NOBLE EDGE</p>
                <p className="text-[8px] font-bold tracking-[0.3em] text-[#E9C46A] mt-1">PROFESSIONAL SERVICES</p>
              </div>
            </div>
            <p className="text-[13px] text-slate-400 leading-relaxed mt-4">
              Clarity. Strategy. Growth. Independent financial and management counsel for businesses that want an edge.
            </p>
            <div className="space-y-2.5 mt-5 text-[13px] text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin size={15} className="text-[#E9C46A] mt-0.5 shrink-0" />
                Victoria Island, Lagos, Nigeria
              </p>
              <p className="flex items-center gap-2">
                <Mail size={15} className="text-[#E9C46A] shrink-0" />
                hello@nobleedge.ng
              </p>
              <p className="flex items-center gap-2">
                <Phone size={15} className="text-[#E9C46A] shrink-0" />
                +234 (0) 800 000 0000
              </p>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-[14px] mb-4">Company</h4>
            <ul className="space-y-2.5 text-[13px] text-slate-400">
              <li><Link to="/services" className="hover:text-[#E9C46A]">Services</Link></li>
              <li><Link to="/about" className="hover:text-[#E9C46A]">About</Link></li>
              <li><Link to="/resources" className="hover:text-[#E9C46A]">Insights</Link></li>
              <li><Link to="/contact" className="hover:text-[#E9C46A]">Careers</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-[14px] mb-4">Services</h4>
            <ul className="space-y-2.5 text-[13px] text-slate-400">
              <li><Link to="/services" className="hover:text-[#E9C46A]">Financial Advisory</Link></li>
              <li><Link to="/services" className="hover:text-[#E9C46A]">Management Consulting</Link></li>
              <li><Link to="/services" className="hover:text-[#E9C46A]">Tax & Compliance</Link></li>
              <li><Link to="/services" className="hover:text-[#E9C46A]">Audit & Assurance</Link></li>
              <li><Link to="/services" className="hover:text-[#E9C46A]">Business Strategy</Link></li>
            </ul>
          </div>

          {/* Noble Insights - Newsletter */}
          <div>
            <h4 className="font-bold text-[14px] mb-4">Noble Insights</h4>
            <p className="text-[13px] text-slate-400 leading-relaxed">
              Monthly thinking on finance, strategy and disciplined growth.
            </p>
            <form
              className="flex mt-4"
              onSubmit={(e) => { e.preventDefault(); alert(`Thanks! We'll email ${email}`); setEmail(""); }}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="flex-1 min-w-0 bg-transparent border border-slate-600 px-3 py-2.5 text-[13px] placeholder:text-slate-500 outline-none focus:border-[#E9C46A]"
              />
              <button type="submit" className="bg-[#E9C46A] text-black text-[13px] font-bold px-4 flex items-center gap-1.5 hover:bg-[#D4AF4A] shrink-0">
                Join <Send size={13} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between gap-2 text-[12px] text-slate-500">
            <p>© 2026 Noble Edge Professional Services. All rights reserved.</p>
            <p className="flex gap-2">
              <Link to="/privacy" className="hover:text-white">Privacy</Link> ·
              <Link to="/terms" className="hover:text-white">Terms</Link> ·
              <Link to="/cookies" className="hover:text-white">Cookies</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}