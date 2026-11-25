import { useState } from "react";
import { MapPin, Mail, Phone, Send, CheckCircle } from "lucide-react";
export default function Contact() {
  const [form, setForm] = useState({ name:"", email:"", company:"", service:"Financial Consulting", message:"" });
  const [sent, setSent] = useState(false);
  const update = (k,v) => setForm(f => ({...f, [k]:v}));
  const submit = (e) => { e.preventDefault(); setSent(true); window.location.href = `mailto:hello@nobleedge.ng?subject=Consultation - ${form.service} - ${form.name}&body=${encodeURIComponent(`Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nService: ${form.service}\n\n${form.message}`)}`; };
  return (
    <div className="bg-white">
      <div className="bg-[#0A1628] text-white py-16"><div className="max-w-7xl mx-auto px-6"><p className="text-[11px] font-bold tracking-[0.3em] text-[#E9C46A]">CONTACT</p><h1 className="font-serif-luxury text-[42px] sm:text-[56px] font-bold mt-3">Tell us where you are —<br/><span className="italic text-[#E9C46A]">and where you intend to be.</span></h1></div></div>
      <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <div className="border p-5 flex gap-3"><MapPin className="text-[#C5A880]"/><div><h3 className="font-bold">Office</h3><p className="text-[14px] text-slate-600">Victoria Island, Lagos, Nigeria</p></div></div>
          <div className="border p-5 flex gap-3"><Mail className="text-[#C5A880]"/><div><h3 className="font-bold">Email</h3><p className="text-[14px] text-slate-600">fornoble2@gmail.com</p></div></div>
          <div className="border p-5 flex gap-3"><Phone className="text-[#C5A880]"/><div><h3 className="font-bold">Phone</h3><p className="text-[14px] text-slate-600">+234 803 511 6452</p></div></div>
          <div className="bg-[#FFFBF0] p-5"><h3 className="font-bold">What happens next?</h3><p className="text-[13px] text-slate-600 mt-2 leading-relaxed">1. We review your request • 2. Partner responds • 3. Confidential conversation • 4. Engagement Planning Memorandum (EPM) before any fieldwork.</p></div>
        </div>
        <form onSubmit={submit} className="lg:col-span-3 border p-6 space-y-4">
          {sent && <p className="flex items-center gap-2 bg-green-50 border border-green-200 p-3 text-[13px] text-green-800"><CheckCircle size={16}/> Opening your email app — your message is ready to send.</p>}
          <div className="grid sm:grid-cols-2 gap-4">
            <input required placeholder="Full name *" value={form.name} onChange={e=>update("name",e.target.value)} className="border px-3 py-3 text-[14px] outline-none w-full"/>
            <input required type="email" placeholder="Work email *" value={form.email} onChange={e=>update("email",e.target.value)} className="border px-3 py-3 text-[14px] outline-none w-full"/>
          </div>
          <input placeholder="Company / Organisation" value={form.company} onChange={e=>update("company",e.target.value)} className="border px-3 py-3 text-[14px] outline-none w-full"/>
          <select value={form.service} onChange={e=>update("service",e.target.value)} className="border px-3 py-3 text-[14px] w-full bg-white"><option>Financial Consulting</option><option>Management Consulting</option><option>Human Resource Consulting</option><option>Not sure yet</option></select>
          <textarea required rows={5} placeholder="Tell us about your situation — investment, financing, governance, HR, turnaround..." value={form.message} onChange={e=>update("message",e.target.value)} className="border px-3 py-3 text-[14px] outline-none w-full"/>
          <button className="bg-[#0A1628] text-white px-6 py-3 text-[13px] font-semibold flex items-center gap-2">Send Request <Send size={15}/></button>
          <p className="text-[12px] text-slate-500">Confidential. We sign annual statements of independence, conflict of interest & confidentiality.</p>
        </form>
      </div>
    </div>
  );
}