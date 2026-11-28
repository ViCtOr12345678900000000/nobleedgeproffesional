import { useState } from "react";
import { MapPin, Mail, Phone, Send, CheckCircle, Loader2 } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name:"", email:"", company:"", service:"Financial Consulting", message:"" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const update = (k,v) => setForm(f => ({...f, [k]:v}));

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formsubmit.co/ajax/fornoble2@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          service: form.service,
          message: form.message,
          _subject: `New Consultation Request - ${form.service} - ${form.name}`,
          _template: "table",
          _replyto: form.email,
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      setForm({ name:"", email:"", company:"", service:"Financial Consulting", message:"" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="bg-white">
      <div className="bg-[#0A1628] text-white py-16"><div className="max-w-7xl mx-auto px-6"><p className="text-[11px] font-bold tracking-[0.3em] text-[#E9C46A]">CONTACT</p><h1 className="font-serif-luxury text-[42px] sm:text-[56px] font-bold mt-3">Tell us where you are —<br/><span className="italic text-[#E9C46A]">and where you intend to be.</span></h1></div></div>
      <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <div className="border p-5 flex gap-3"><MapPin className="text-[#C5A880]"/><div><h3 className="font-bold">Office</h3><p className="text-[14px] text-slate-600">Lagos Mainland, Nigeria</p></div></div>
          <div className="border p-5 flex gap-3"><Mail className="text-[#C5A880]"/><div><h3 className="font-bold">Email</h3><p className="text-[14px] text-slate-600">fornoble2@gmail.com</p></div></div>
          <div className="border p-5 flex gap-3"><Phone className="text-[#C5A880]"/><div><h3 className="font-bold">Phone</h3><p className="text-[14px] text-slate-600">+234 803 511 6452</p></div></div>
          <div className="bg-[#FFFBF0] p-5"><h3 className="font-bold">What happens next?</h3><p className="text-[13px] text-slate-600 mt-2 leading-relaxed">1. We review your request • 2. Partner responds • 3. Confidential conversation • 4. Engagement Planning Memorandum (EPM) before any fieldwork.</p></div>
        </div>
        <form onSubmit={submit} className="lg:col-span-3 border p-6 space-y-4 rounded-2xl">
          {status === "sent" && <p className="flex items-center gap-2 bg-green-50 border border-green-200 p-3 text-[13px] text-green-800"><CheckCircle size={16}/> Thank you — your request has been sent. A partner will respond shortly.</p>}
          {status === "error" && <p className="bg-red-50 border border-red-200 p-3 text-[13px] text-red-800">Something went wrong. Please email us directly at fornoble2@gmail.com</p>}
          <div className="grid sm:grid-cols-2 gap-4 ">
            <input required placeholder="Full name *" value={form.name} onChange={e=>update("name",e.target.value)} className="border px-3 py-3 text-[14px] outline-none w-full rounded-full border-amber-500/50"/>
            <input required type="email" placeholder="Work email *" value={form.email} onChange={e=>update("email",e.target.value)} className="border px-3 py-3 text-[14px] outline-none w-full rounded-full border-amber-500/50"/>
          </div>
          <input placeholder="Company / Organisation" value={form.company} onChange={e=>update("company",e.target.value)} className="border px-3 py-3 text-[14px] outline-none w-full rounded-full border-amber-500/50"/>
          <select value={form.service} onChange={e=>update("service",e.target.value)} className="border px-3 py-3 text-[14px] w-full bg-white rounded-full border-amber-500/50"><option>Financial Consulting</option><option>Management Consulting</option><option>Human Resource Consulting</option><option>Not sure yet</option></select>
          <textarea required rows={5} placeholder="Tell us about your situation — investment, financing, governance, HR, turnaround..." value={form.message} onChange={e=>update("message",e.target.value)} className="border px-3 py-3 text-[14px] outline-none w-full rounded-2xl border-amber-500/50"/>
          <button disabled={status === "sending"} className="bg-[#0A1628] text-white px-6 py-3 text-[13px] font-semibold flex items-center justify-center gap-2 rounded-full border-2 border-[#0A1628] disabled:opacity-60 disabled:cursor-not-allowed hover:bg-[#E9C46A] hover:text-black hover:border-[#E9C46A] hover:scale-105 hover:cursor-pointer transition-all duration-200">
            {status === "sending" ? <><Loader2 size={15} className="animate-spin"/> Sending...</> : <>Send Request <Send size={15}/></>}
          </button>
          <p className="text-[12px] text-slate-500">Confidential. We sign annual statements of independence, conflict of interest & confidentiality.</p>
        </form>
      </div>
    </div>
  );
}