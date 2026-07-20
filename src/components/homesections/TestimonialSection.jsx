import React from 'react';

export default function TestimonialSection() {
  const testimonials = [
    {
      company: "Macro Wiring Technologies Co. Inc.",
      quote: "Liknayan Tech Solutions transformed our static presence into a powerful, dynamic business platform. Their expertise and dedication are unmatched.",
      status: "Completed Project",
      // Path relative to the public folder
      image: "/images/macrocompleted.jpg" 
    },
    {
      company: "Cavite West Point College",
      quote: "Collaborating with Liknayan on our new system has been a seamless experience. They truly understand our vision for digital transformation.",
      status: "Ongoing Partnership",
      // Path relative to the public folder
      image: "/images/cwpcproposal.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#071A4A] text-center mb-16">
          Trusted Partnerships
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              {/* Image Container */}
              <div className="h-48 w-full overflow-hidden">
                <img 
                  src={t.image} 
                  alt={t.company} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content Container */}
              <div className="p-8">
                <p className="text-gray-600 italic mb-6">"{t.quote}"</p>
                <div className="font-bold text-[#071A4A]">{t.company}</div>
                <span className="text-sm text-blue-600 font-medium">{t.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}