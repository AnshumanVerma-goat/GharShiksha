import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    studentClass: '',
    subjects: '',
    location: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hello Anshuman,\n\nI am interested in home tuition.\n\nName: ${formData.parentName}\nClass: ${formData.studentClass}\nSubjects: ${formData.subjects}\nLocation: ${formData.location}\n\nPlease share details.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/917869055374?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-[#0D0F1A] mb-4">Book Your Free Demo</h2>
          <p className="text-gray-600">Let's discuss how I can help your child excel. <span className="block mt-2 font-medium text-[#2E6F5E]">Limited students only.</span></p>
        </div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6 bg-[#F5F1E8] p-8 md:p-10 rounded-2xl shadow-card"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Parent's Name</label>
              <input required type="text" name="parentName" onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2E6F5E] bg-white transition-all shadow-sm hover:border-[#2E6F5E]" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <input required type="tel" name="phone" onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2E6F5E] bg-white transition-all shadow-sm hover:border-[#2E6F5E]" placeholder="+91 XXXXX XXXXX" />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Student's Class</label>
              <input required type="text" name="studentClass" onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2E6F5E] bg-white transition-all shadow-sm hover:border-[#2E6F5E]" placeholder="e.g. Class 8" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location in Raipur</label>
              <input required type="text" name="location" onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2E6F5E] bg-white transition-all shadow-sm hover:border-[#2E6F5E]" placeholder="e.g. Shankar Nagar" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Subjects Required</label>
            <input required type="text" name="subjects" onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2E6F5E] bg-white transition-all shadow-sm hover:border-[#2E6F5E]" placeholder="Maths, Science, English..." />
          </div>

          <button type="submit" className="w-full bg-[#0D0F1A] text-white py-4 rounded-lg font-medium text-lg hover:bg-[#2E6F5E] transition-colors mt-4 shadow-md">
            Start Your Child’s Improvement
          </button>
        </motion.form>
      </div>
    </section>
  );
}
