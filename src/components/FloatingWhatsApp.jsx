import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a 
      href="https://wa.me/917869055374" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center cursor-pointer"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle strokeWidth={2.5} className="w-7 h-7" />
    </a>
  );
}
