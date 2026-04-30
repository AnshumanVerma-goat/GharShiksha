import { motion } from 'framer-motion';
import { Target, UserCheck, TrendingUp } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Target className="w-8 h-8 text-[#2E6F5E]" />,
      title: 'Focused Attention',
      desc: 'No more hiding in the back of the classroom. 100% focus on your child’s pace and grasping power.'
    },
    {
      icon: <UserCheck className="w-8 h-8 text-[#2E6F5E]" />,
      title: 'Customized Learning',
      desc: 'Teaching methods adapted to how your child learns best—visual, auditory, or practical.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#2E6F5E]" />,
      title: 'Consistent Improvement',
      desc: 'Regular assessments, feedback loops, and doubt-clearing sessions that ensure continuous progress.'
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#F5F1E8]">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-[#0D0F1A] mb-4">Why Personal Coaching?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">The traditional classroom model is broken. Personalized mentoring fixes it.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
            >
              <div className="bg-[#F5F1E8] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="font-serif text-2xl text-[#0D0F1A] mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
