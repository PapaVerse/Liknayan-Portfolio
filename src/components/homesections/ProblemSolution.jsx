import React from 'react';

export default function ProblemSolution() {
  const problems = [
    { title: "Manual Processes", desc: "Wasting time on repetitive, error-prone manual tasks." },
    { title: "Legacy Systems", desc: "Struggling with outdated tech that slows you down." },
    { title: "Outdated Presence", desc: "Losing customers to a brand that doesn't stand out." }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Pain Point Strip */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {problems.map((p, i) => (
            <div key={i} className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-[#071A4A] mb-3">{p.title}</h3>
              <p className="text-gray-600">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* The Liknayan Difference */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#071A4A] mb-6">
            The Liknayan Difference
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We don't just build software; we engineer growth. By replacing manual bottlenecks 
            with intelligent automation and transforming legacy systems into scalable digital 
            assets, we ensure your technology works as hard as you do.
          </p>
        </div>
      </div>
    </section>
  );
}