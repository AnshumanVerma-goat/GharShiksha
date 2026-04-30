import { motion } from 'framer-motion';

export default function TrustStrip() {
  const stats = [
    { value: '5+', label: 'Years Teaching Experience' },
    { value: '50+', label: 'Students Mentored' },
    { value: '100%', label: 'Personal Attention' },
    { value: 'CBSE, ICSE, State', label: 'Multiple Boards Covered' },
    { value: 'Custom', label: 'Personalized Learning Plans' }
  ];

  return (
    <div className="bg-[#2E6F5E] py-10 md:py-16 w-full overflow-hidden shadow-lg relative z-20">
      <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 divide-x divide-[#F5F1E8]/20">
          {stats.map((stat, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              key={idx} 
              className={`text-center text-[#F5F1E8] px-2 ${idx >= 2 ? 'hidden md:block' : ''}`}
            >
              <div className="font-serif text-3xl md:text-4xl lg:text-5xl mb-2">{stat.value}</div>
              <div className="text-sm md:text-base font-medium opacity-90 tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
