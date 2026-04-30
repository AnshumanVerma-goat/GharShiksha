import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="bg-[#0D0F1A] text-[#F5F1E8] min-h-[90vh] flex items-center py-10 md:py-24 px-4 md:px-12 lg:px-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10 text-center md:text-left">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#2E6F5E] font-medium tracking-widest uppercase mb-4 text-sm md:text-base text-center"
        >
          Classes 1 to 10 • CBSE, ICSE, State Board
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-serif text-3xl md:text-5xl lg:text-6xl leading-tight mb-4 text-center md:text-left"
        >
          Personalized Home Tuition <br className="hidden md:block"/> in Raipur.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-serif text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-6 text-center md:text-left"
        >
          Transforming confusion into clarity.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base md:text-lg text-gray-400 mb-4 max-w-2xl mx-auto font-light leading-relaxed text-center md:text-left md:mx-0 hidden md:block"
        >
          1-on-1 personalized mentoring designed to build strong fundamentals, confident thinking, and lifelong learning habits.
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-base md:text-lg text-[#2E6F5E] font-medium mb-10 max-w-2xl mx-auto text-center md:text-left md:mx-0"
        >
          Because every child deserves personal attention. <span className="opacity-80 text-gray-400 text-sm font-normal block mt-1">(Limited students only. No unnecessary pressure.)</span>
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center md:items-start"
        >
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto justify-center md:justify-start">
            <a href="#contact" className="w-full md:w-auto bg-[#2E6F5E] text-white px-8 py-4 rounded-md font-medium text-base md:text-lg hover:bg-[#235848] hover:scale-[1.03] transition-all duration-300 shadow-lg hover:shadow-xl text-center">
              [ Book Free Demo Class ]
            </a>
            <a href="#pricing" className="hidden md:block w-full md:w-auto bg-transparent border border-gray-600 text-[#F5F1E8] px-8 py-4 rounded-md font-medium text-base md:text-lg hover:bg-gray-800 hover:scale-[1.03] transition-all duration-300 text-center">
              [ Calculate Fee ]
            </a>
          </div>
          
          <div className="mt-4 flex flex-col items-center md:items-start gap-1">
            <p className="text-sm text-[#2E6F5E] font-medium tracking-wide">Limited slots available this month</p>
            <div className="flex flex-col md:flex-row items-center gap-2 mt-1">
              <p className="text-xs text-gray-500 opacity-80">Trusted by 50+ students in Raipur</p>
              <span className="hidden md:block text-gray-600">•</span>
              <a href="https://wa.me/917869055374" className="text-xs text-gray-400 underline hover:text-white transition-colors">Or chat directly on WhatsApp</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
