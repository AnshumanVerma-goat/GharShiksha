import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section className="bg-[#0D0F1A] border-t border-gray-800 py-10 md:py-20 px-4 md:px-8 lg:px-12 text-center text-[#F5F1E8]">
      <div className="max-w-xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-5xl mb-4 md:mb-6"
        >
          Let’s fix the basics.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-sm md:text-lg mb-6 md:mb-10 font-light"
        >
          Give your child the dedicated attention they deserve. The right mentor can transform their academic journey.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center"
        >
          <a href="#contact" className="w-full sm:w-auto text-center inline-block bg-[#2E6F5E] text-white px-10 py-3.5 rounded-md font-medium text-base md:text-lg hover:bg-white hover:text-[#0D0F1A] hover:scale-[1.03] transition-all duration-300">
            Book Free Demo Class
          </a>
        </motion.div>
      </div>
    </section>
  );
}
