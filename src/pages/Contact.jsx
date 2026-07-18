import { Mail, Phone, MapPin, Clock, Globe } from "lucide-react";

export default function Contact() {
  return (
    <section className="pt-32 pb-20 bg-white relative overflow-hidden">
      
      {/* VIBRANT FLOATING BACKGROUND EFFECTS */}
      <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-blue-300 rounded-full filter blur-[120px] opacity-40 animate-float"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-indigo-300 rounded-full filter blur-[120px] opacity-40 animate-float2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h1 className="text-5xl font-bold text-[#071A4A] mb-16 text-center animate-fadeLeft">
          Contact Us
        </h1>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <form className="space-y-6 bg-white/80 backdrop-blur-md p-8 rounded-2xl border border-gray-100 shadow-xl">
            <div>
              <label className="block text-sm font-bold text-[#071A4A] mb-2">Name</label>
              <input 
                type="text" 
                className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#071A4A] transition" 
                placeholder="Your name" 
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-[#071A4A] mb-2">Email</label>
              <input 
                type="email" 
                className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#071A4A] transition" 
                placeholder="your@email.com" 
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-[#071A4A] mb-2">Message</label>
              <textarea 
                rows="4" 
                className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#071A4A] transition" 
                placeholder="How can we help?"
                required
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-[#071A4A] text-white py-4 rounded-xl font-bold hover:bg-[#0c2a75] transition transform hover:scale-[1.02]"
            >
              Send Message
            </button>
          </form>

          {/* Contact Details */}
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-bold text-[#071A4A] mb-6">Get In Touch</h3>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-center gap-4"><Mail className="text-[#071A4A]" /> info@liknayan.tech</div>
                <div className="flex items-center gap-4"><Phone className="text-[#071A4A]" /> +63 999-470-2919</div>
                <div className="flex items-center gap-4"><MapPin className="text-[#071A4A]" /> Philippines</div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#071A4A] mb-6">Availability</h3>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-center gap-4"><Clock className="text-[#071A4A]" /> Office Hours: 8:00 AM - 5:00 PM</div>
                <div className="flex items-center gap-4"><Globe className="text-[#071A4A]" /> Online Hours: 24/7</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}