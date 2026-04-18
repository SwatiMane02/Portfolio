import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    try {
      const response = await fetch('https://formspree.io/f/xjgjrveb', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        setStatus('success');
        e.target.reset();
        setTimeout(() => setStatus('idle'), 5000); // Reset button state after 5 seconds
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section className="py-32 px-6 w-full bg-[#0b0b0b] relative pb-48">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-[#00f0ff] opacity-[0.05] blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 glow-text text-white">
            Let's Talk
          </h2>
          <p className="text-xl text-gray-400 font-light">
            Have an idea or just want to say hi?
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass p-8 md:p-12 rounded-[2.5rem] flex flex-col gap-6 relative overflow-hidden"
          onSubmit={handleSubmit}
          action="https://formspree.io/f/xjgjrveb"
          method="POST"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00f0ff] to-[#8b5cf6]" />
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full relative">
              <label className="text-sm font-medium text-gray-400 mb-2 block uppercase tracking-wider">Name</label>
              <input 
                name="name"
                required
                type="text" 
                placeholder="John Doe"
                className="w-full bg-black/30 border border-white/10 rounded-2xl p-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#00f0ff]/50 focus:ring-1 focus:ring-[#00f0ff]/50 transition-all font-light"
              />
            </div>
            <div className="w-full relative">
              <label className="text-sm font-medium text-gray-400 mb-2 block uppercase tracking-wider">Email</label>
              <input 
                name="email"
                required
                type="email" 
                placeholder="john@example.com"
                className="w-full bg-black/30 border border-white/10 rounded-2xl p-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#8b5cf6]/50 focus:ring-1 focus:ring-[#8b5cf6]/50 transition-all font-light"
              />
            </div>
          </div>

          <div className="relative">
            <label className="text-sm font-medium text-gray-400 mb-2 block uppercase tracking-wider">Message</label>
            <textarea 
              name="message"
              required
              rows="4"
              placeholder="Tell me about your project..."
              className="w-full bg-black/30 border border-white/10 rounded-2xl p-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#00f0ff]/50 focus:ring-1 focus:ring-[#00f0ff]/50 transition-all font-light resize-none"
            />
          </div>

          <div className="mt-4 flex flex-col sm:flex-row items-center gap-6">
            <motion.button
              whileHover={status !== 'loading' && status !== 'success' ? { scale: 1.02 } : {}}
              whileTap={status !== 'loading' && status !== 'success' ? { scale: 0.98 } : {}}
              disabled={status === 'loading'}
              type="submit"
              className={`relative group overflow-hidden rounded-full w-full sm:w-auto ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00f0ff] to-[#8b5cf6] opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="relative px-8 py-4 font-semibold text-white tracking-wide z-10 flex items-center justify-center gap-2">
                {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent ✓' : 'Send Message'}
                {status === 'idle' && (
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                )}
              </div>
            </motion.button>
            
            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="text-emerald-400 text-sm font-medium max-w-xs"
                >
                  🚀 Thanks! Your message has been sent.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="text-red-400 text-sm font-medium max-w-xs"
                >
                  ⚠️ Something went wrong. Please try again.
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.form>
      </div>
      
      {/* Footer minimal */}
      <div className="absolute bottom-6 left-0 w-full text-center text-gray-600 text-sm font-light">
        © {new Date().getFullYear()} Swati Mane. All rights reserved.
      </div>
    </section>
  );
};

export default Contact;
