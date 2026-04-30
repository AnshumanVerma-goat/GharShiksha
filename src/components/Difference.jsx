import { motion } from 'framer-motion';
import { XCircle, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function Difference() {
  const [showMe, setShowMe] = useState(true);
  const differences = [
    { bad: '1 teacher for 40+ students', good: '1 teacher for 1 student' },
    { bad: 'Rote-memorization encouraged', good: 'Conceptual clarity prioritized' },
    { bad: 'Fear to ask questions', good: 'Safe space to ask anything' },
    { bad: 'Standardized generic pace', good: 'Pace adapted to the child' },
  ];

  return (
    <section className="py-10 md:py-24 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-[#0D0F1A] mb-4">The Real Difference</h2>
        </div>
        
        {/* Mobile Toggle */}
        <div className="flex md:hidden bg-gray-100 rounded-lg p-1 mb-6">
          <button 
            className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${!showMe ? 'bg-white shadow-sm text-gray-800' : 'text-gray-500'}`}
            onClick={() => setShowMe(false)}
          >
            Coaching Classes
          </button>
          <button 
            className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${showMe ? 'bg-[#0D0F1A] text-white shadow-sm' : 'text-gray-500'}`}
            onClick={() => setShowMe(true)}
          >
            With Me
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-0 overflow-hidden rounded-2xl shadow-lg border border-gray-200">
          <div className={`bg-gray-50 p-8 md:p-12 border-b md:border-b-0 md:border-r border-gray-200 ${showMe ? 'hidden md:block' : 'block'}`}>
            <h3 className="font-serif text-2xl text-gray-800 mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-sm font-bold">VS</span>
              Coaching Classes
            </h3>
            <ul className="space-y-6">
              {differences.map((item, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <XCircle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                  <span className="text-gray-600">{item.bad}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className={`bg-[#0D0F1A] p-8 md:p-12 ${!showMe ? 'hidden md:block' : 'block'}`}>
            <h3 className="font-serif text-2xl text-[#F5F1E8] mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#2E6F5E] flex items-center justify-center text-white text-sm font-bold">ME</span>
              With Me
            </h3>
            <ul className="space-y-6">
              {differences.map((item, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#2E6F5E] shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item.good}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
