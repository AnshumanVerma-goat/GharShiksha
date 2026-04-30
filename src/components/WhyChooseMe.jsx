import { motion } from 'framer-motion';
import { Brain, Sparkles, BookOpen } from 'lucide-react';

export default function WhyChooseMe() {
  const points = [
    {
      icon: <Brain className="w-6 h-6 text-[#2E6F5E]" />,
      title: 'Psychological Approach',
      desc: 'Understanding the student\'s mental blocks toward studying and carefully dismantling them.'
    },
    {
      icon: <BookOpen className="w-6 h-6 text-[#2E6F5E]" />,
      title: 'No Rote Learning',
      desc: 'Focus on first principles. If they understand the root concept, they can solve any problem.'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#2E6F5E]" />,
      title: 'Confidence Building',
      desc: 'Creating an environment where making mistakes is celebrated as a step toward learning.'
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#0D0F1A] text-[#F5F1E8]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">My Philosophy</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {points.map((pt, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center md:text-left flex flex-col items-center md:items-start"
            >
              <div className="w-14 h-14 rounded-full bg-[#1A1E30] flex items-center justify-center mb-6 border border-gray-700">
                {pt.icon}
              </div>
              <h3 className="font-serif text-2xl mb-3">{pt.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed">{pt.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
