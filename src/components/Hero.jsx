import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="bg-[#0D0F1A] text-[#F5F1E8] min-h-[90vh] flex items-center pt-20 pb-16 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#2E6F5E] font-medium tracking-widest uppercase mb-4 text-sm sm:text-base"
        >
          Classes 1 to 10 • CBSE, ICSE, State Board
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl leading-tight mb-4"
        >
          Personalized Home Tuition <br className="hidden sm:block"/> in Raipur.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-serif text-2xl sm:text-3xl text-gray-300 mb-6"
        >
          Transforming confusion into clarity.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-400 mb-4 max-w-2xl mx-auto font-light leading-relaxed"
        >
          1-on-1 personalized mentoring designed to build strong fundamentals, confident thinking, and lifelong learning habits.
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-base sm:text-lg text-[#2E6F5E] font-medium mb-10 max-w-2xl mx-auto"
        >
          Because every child deserves personal attention. <span className="opacity-80 text-gray-400 text-sm font-normal block mt-1">(Limited students only. No unnecessary pressure.)</span>
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#contact" className="bg-[#2E6F5E] text-white px-8 py-4 rounded-md font-medium text-lg hover:bg-[#235848] transition-colors shadow-lg hover:shadow-xl">
            [ Book Free Demo ]
          </a>
          <a href="#pricing" className="bg-transparent border border-gray-600 text-[#F5F1E8] px-8 py-4 rounded-md font-medium text-lg hover:bg-gray-800 transition-colors">
            [ Calculate Fee ]
          </a>
        </motion.div>
      </div>
    </section>
  );
}
