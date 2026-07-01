import { motion } from 'framer-motion';
import { Mail, ArrowUpRight } from 'lucide-react';
import { WhatsappIcon } from './ui/Icons';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-bg-dark relative overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-green/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-green/30 bg-brand-green/10 text-brand-green text-sm font-mono mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
            </span>
            SYSTEM.CONNECTION_OPEN
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-4 tracking-tight">
            Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-blue-500">crazy.</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            Whether it's scaling infrastructure, automating pipelines, or just talking tech — my lines are open. 
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* WhatsApp Card */}
          <motion.a
            href="https://wa.me/918450927956"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group relative p-8 rounded-2xl bg-bg-card border border-border-subtle hover:border-[#25D366]/50 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#25D366]/0 group-hover:bg-[#25D366]/5 transition-colors duration-500" />
            <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 transition-opacity duration-500 text-[#25D366]">
              <WhatsappIcon size={160} />
            </div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-14 h-14 rounded-xl bg-bg-dark border border-border-subtle flex items-center justify-center mb-6 group-hover:border-[#25D366]/30 group-hover:shadow-[0_0_20px_rgba(37,211,102,0.2)] transition-all">
                <WhatsappIcon size={28} className="text-[#25D366]" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-2">WhatsApp</h3>
              <p className="text-text-secondary mb-8 flex-grow">
                Fastest way to reach me. Drop a message anytime.
              </p>
              <div className="flex items-center gap-2 text-[#25D366] font-mono text-sm font-medium">
                <span>[ initiate_chat ]</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </motion.a>

          {/* Email Card */}
          <motion.a
            href="mailto:ghildiyaldev1325@gmail.com"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group relative p-8 rounded-2xl bg-bg-card border border-border-subtle hover:border-blue-500/50 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-colors duration-500" />
            <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 transition-opacity duration-500 text-blue-500">
              <Mail size={160} />
            </div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-14 h-14 rounded-xl bg-bg-dark border border-border-subtle flex items-center justify-center mb-6 group-hover:border-blue-500/30 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all">
                <Mail size={28} className="text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-2">Email</h3>
              <p className="text-text-secondary mb-8 flex-grow">
                For detailed inquiries, opportunities, or formal requests.
              </p>
              <div className="flex items-center gap-2 text-blue-500 font-mono text-sm font-medium">
                <span>[ send_email ]</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
