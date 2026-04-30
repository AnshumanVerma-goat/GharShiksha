import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section className="bg-[#0D0F1A] border-t border-gray-800 py-24 px-6 text-center text-[#F5F1E8]">
      <div className="max-w-3xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-5xl md:text-6xl mb-6"
        >
          Let’s fix the basics.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-lg md:text-xl mb-10 font-light"
        >
          Give your child the dedicated attention they deserve. The right mentor can transform their academic journey.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a href="#contact" className="inline-block bg-[#2E6F5E] text-white px-10 py-4 rounded-md font-medium text-lg hover:bg-white hover:text-[#0D0F1A] transition-colors">
            Book Demo Class
          </a>
        </motion.div>
      </div>
    </section>
  );
}
