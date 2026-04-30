import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Pricing() {
  const [selectedClass, setSelectedClass] = useState('1-5');
  const [addSpokenEnglish, setAddSpokenEnglish] = useState(false);

  const ranges = {
    '1-5': [3000, 4500],
    '6-8': [4000, 5500],
    '9-10': [5000, 6500]
  };

  const getRange = () => {
    const min = ranges[selectedClass][0] + (addSpokenEnglish ? 700 : 0);
    const max = ranges[selectedClass][1] + (addSpokenEnglish ? 700 : 0);
    return `₹${min} – ₹${max}`;
  };

  return (
    <section id="pricing" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-[#0D0F1A] mb-4">Flexible Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Based on class, subjects, and learning needs. Quality education is a long-term asset.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#0D0F1A] p-8 md:p-12 rounded-2xl shadow-2xl text-[#F5F1E8]"
        >
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-400 uppercase tracking-widest mb-4">Select Class Group</label>
            <div className="grid grid-cols-3 gap-3">
              {['1-5', '6-8', '9-10'].map((cls) => (
                <button
                  key={cls}
                  onClick={() => setSelectedClass(cls)}
                  className={`py-3 px-2 rounded-lg font-medium transition-all ${
                    selectedClass === cls 
                      ? 'bg-[#2E6F5E] text-white' 
                      : 'bg-transparent border border-gray-700 text-gray-400 hover:border-gray-500'
                  }`}
                >
                  Class {cls}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6 w-full flex items-center justify-between p-4 border border-gray-700 rounded-lg">
            <div>
              <div className="font-medium">Add Spoken English</div>
              <div className="text-sm text-gray-400">+₹700 / month</div>
            </div>
            <button 
              onClick={() => setAddSpokenEnglish(!addSpokenEnglish)}
              className={`w-14 h-8 rounded-full p-1 transition-colors ${addSpokenEnglish ? 'bg-[#2E6F5E]' : 'bg-gray-700'}`}
            >
              <div className={`w-6 h-6 rounded-full bg-white transition-transform ${addSpokenEnglish ? 'translate-x-6' : 'translate-x-0'}`} />
            </button>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-gray-400 text-sm mb-1 uppercase tracking-wider">Estimated Monthly Range</div>
              <div className="font-serif text-4xl sm:text-5xl flex items-baseline gap-2">
                {getRange()} <span className="text-xl text-gray-500 font-sans font-light">/mo</span>
              </div>
            </div>
            <a 
              href="#contact" 
              className="w-full md:w-auto bg-[#F5F1E8] text-[#0D0F1A] px-8 py-4 rounded-md font-medium text-lg hover:bg-white transition-colors text-center shadow-lg"
            >
              Start Trial Class
            </a>
          </div>
          
          <div className="mt-8 text-center text-sm text-gray-400">
            <p>Final fee depends on subjects and study hours. <span className="text-[#2E6F5E] font-medium">Flexible timings available.</span></p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
