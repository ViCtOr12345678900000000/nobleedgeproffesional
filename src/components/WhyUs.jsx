// src/components/WhyUs.jsx
import { ShieldCheck, Eye, Scale, Lock } from "lucide-react";
import { values } from "../data/content";

export default function WhyUs() {
  const icons = [ShieldCheck, Eye, Scale, Lock];

  return (
    <section className="bg-[#FFFBF0] py-16">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">

        {/* Left - Text */}
        <div>
          <p className="text-[11px] font-bold tracking-[0.3em] text-[#C5A880]">OUR CULTURE</p>
          <h2 className="font-serif-luxury text-[36px] sm:text-[42px] font-bold leading-tight mt-3 text-[#0A1628]">
            Integrity. Independence.<br />
            Objectivity. Confidentiality.
          </h2>
          <p className="text-slate-600 mt-4 leading-relaxed text-[15px]">
            We take personal &amp; collective responsibility. We respect one another&apos;s work,
            encourage peer review, and adhere to ICAN, NIM (Chartered), CITN &amp; codes of best practice.
          </p>
          <p className="text-slate-600 mt-3 leading-relaxed text-[15px]">
            Our service philosophy: understand the business &amp; industry you operate in — so we add value, not just reports.
          </p>

          <div className="mt-6 bg-[#0A1628] text-white p-5">
            <p className="font-serif-luxury text-[18px] font-bold">Every little difference counts.</p>
            <p className="text-[13px] text-slate-300 mt-1 leading-relaxed">
              We deliver change by integrating small changes — new systems, policies, processes — that show up in your accounting figures.
            </p>
          </div>
        </div>

        {/* Right - 4 Value Cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          {values.map((v, i) => {
            const Icon = icons[i];
            return (
              <div key={v.title} className="bg-white border border-slate-200 p-5 hover:-translate-y-1 transition">
                <div className="w-[38px] h-[38px] bg-[#E9C46A] flex items-center justify-center">
                  <Icon size={20} className="text-black" />
                </div>
                <h3 className="font-bold text-[16px] mt-3 text-[#0A1628]">{v.title}</h3>
                <p className="text-[13px] text-slate-600 mt-1 leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}