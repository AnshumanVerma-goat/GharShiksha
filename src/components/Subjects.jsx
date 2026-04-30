import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Subjects() {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const groups = [
    {
      level: 'Classes 1 to 5',
      focus: 'Foundation Building',
      subjects: ['Mathematics', 'Science (EVS)', 'English', 'Hindi']
    },
    {
      level: 'Classes 6 to 8',
      focus: 'Concept Deepening',
      subjects: ['Mathematics', 'Science', 'English', 'Social Science']
    },
    {
      level: 'Classes 9 to 10',
      focus: 'Board Prep & Critical Thinking',
      subjects: ['Mathematics', 'Science (Physics, Chemistry, Biology)', 'English']
    }
  ];

  return (
    <section className="py-10 md:py-16 px-4 md:px-8 lg:px-12 bg-[#F5F1E8]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-[#0D0F1A] mb-4">Classes & Subjects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto pb-4">Comprehensive coverage following CBSE, ICSE, and State Board curriculum.</p>
          <span className="inline-block bg-[#2E6F5E]/10 text-[#2E6F5E] px-4 py-2 rounded-full text-sm font-medium">All subjects covered based on class and board</span>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-8">
          {groups.map((group, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white md:p-8 rounded-xl shadow-card hover-card flex flex-col overflow-hidden"
            >
              {/* Mobile Accordion Header */}
              <button 
                className="w-full text-left p-6 md:hidden flex justify-between items-center"
                onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)}
              >
                <div>
                  <span className="text-[#2E6F5E] text-xs font-medium uppercase tracking-wider mb-1 block">{group.focus}</span>
                  <h3 className="font-serif text-2xl text-[#0D0F1A]">{group.level}</h3>
                </div>
                <span className="text-[#2E6F5E] text-xl font-medium">{activeAccordion === idx ? '−' : '+'}</span>
              </button>
              
              {/* Desktop Header & Content */}
              <div className={`p-6 pt-0 md:p-0 ${activeAccordion === idx ? 'block' : 'hidden md:block'}`}>
                <div className="hidden md:block">
                  <span className="text-[#2E6F5E] text-sm font-medium uppercase tracking-wider mb-2 block">{group.focus}</span>
                  <h3 className="font-serif text-3xl text-[#0D0F1A] mb-6 border-b border-gray-100 pb-4">{group.level}</h3>
                </div>
                <ul className="space-y-3 flex-grow md:mt-0 border-t border-gray-100 md:border-t-0 pt-4 md:pt-0">
                  {group.subjects.map((sub, sidx) => (
                    <li key={sidx} className="flex items-center text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2E6F5E] mr-3"></span>
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
