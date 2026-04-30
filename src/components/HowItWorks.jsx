import { motion } from 'framer-motion';
import { useState } from 'react';

export default function HowItWorks() {
  const [showAll, setShowAll] = useState(false);
  const steps = [
    { num: '01', title: 'Book a Demo', desc: 'Fill out the form or reach out via WhatsApp to schedule a free trial class.' },
    { num: '02', title: 'Understand Student', desc: 'In the trial, I assess the student\'s level, learning style, and specific needs.' },
    { num: '03', title: 'Start Journey', desc: 'We fix a schedule and begin structured, customized learning sessions.' }
  ];

  return (
    <section className="py-10 md:py-16 px-4 md:px-8 lg:px-12 bg-[#F5F1E8]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-[#0D0F1A] mb-4">How It Works</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative p-8 ${idx >= 2 && !showAll ? 'hidden md:block' : 'block'}`}
            >
              <div className="font-serif text-6xl md:text-7xl text-[#2E6F5E] opacity-20 absolute top-4 left-4 z-0">
                {step.num}
              </div>
              <div className="relative z-10 mt-8">
                <h3 className="font-serif text-2xl text-[#0D0F1A] mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {!showAll && (
          <div className="mt-8 text-center md:hidden">
            <button 
              onClick={() => setShowAll(true)}
              className="px-6 py-3 border border-[#2E6F5E] text-[#2E6F5E] rounded-md font-medium text-sm hover:bg-[#2E6F5E] hover:text-white transition-colors"
            >
              See Full Process
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
