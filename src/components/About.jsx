import { motion } from 'framer-motion';
import photo from '../assets/photo.jpeg';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#F5F1E8]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 aspect-square md:aspect-[4/5] bg-gray-300 rounded-2xl overflow-hidden shadow-xl"
        >
          <img 
            src={photo} 
            alt="Anshuman Verma" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <span className="text-[#2E6F5E] font-medium tracking-wide uppercase text-sm">Meet Your Mentor</span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#0D0F1A] mt-3 mb-6">Hi, I'm Anshuman Verma.</h2>
          
          <div className="space-y-4 text-lg text-gray-700 font-light leading-relaxed">
            <p>
              I'm a <span className="font-medium text-[#0D0F1A]">Computer Science B.Tech student with a strong analytical and problem-solving foundation.</span> I believe education shouldn't be about memorizing facts just to pass an exam. It should be about triggering curiosity, understanding the 'why' behind concepts, and building confidence.
            </p>
            <p>
              With over 5 years of experience mentoring students across various boards, I have developed a psychological approach to teaching. I don't just teach the syllabus; I study the student's mindset, identify their friction points, and tailor my methodology to them.
            </p>
            <p className="font-medium text-[#2E6F5E]">
              I’m not running a mass tuition institute. I work with limited students so I can give my full attention and ensure clear communication with parents.
            </p>
            <p>
              I believe <span className="font-medium text-[#0D0F1A]">strong basics and clarity matter more than just completing the syllabus.</span> My goal is to make my students independent learners, equipped with the critical thinking skills required not just for school, but for life.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
