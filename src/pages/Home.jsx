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
          
          <div className="text-center mt-8">
            <Link to="/team">
              <button className="bg-[#0A1628] text-white px-6 py-3 text-[13px] font-semibold inline-flex items-center gap-2 border border-amber-500/50 shadow-2xl rounded-full hover:scale-102 hover:cursor-pointer duration-200 hover:bg-white hover:text-black">
                Our Founder <ArrowRight size={15} />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}