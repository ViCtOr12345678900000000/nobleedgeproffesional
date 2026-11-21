// src/pages/Home.jsx
import Body from "../components/Body";
import WhatWeDo from "../components/WhatWeDo";
import WhyUs from "../components/WhyUs";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { clients } from "../data/content";

export default function Home() {
  return (
    <>
      <Body />
      <WhatWeDo />
      <WhyUs />
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[11px] font-bold tracking-[0.3em] text-[#C5A880] text-center">
            TRUSTED IN BOARDROOMS
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-5">
            {clients.map((c) => (
              <span key={c} className="border px-3 py-2 text-[12px] font-medium text-slate-600">
                {c}
              </span>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/team">
              <button className="bg-[#0A1628] text-white px-6 py-3 text-[13px] font-semibold inline-flex items-center gap-2">
                Meet Our Partners <ArrowRight size={15} />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}