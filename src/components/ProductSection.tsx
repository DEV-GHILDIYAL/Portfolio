import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function ProductSection() {
  return (
    <section className="py-24 px-6 bg-bg-dark relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-bold text-text-primary">04. Production SaaS</h2>
            <div className="h-[1px] bg-border-subtle flex-1"></div>
          </div>
          
          <div className="relative group bg-bg-card rounded-2xl border border-brand-green/20 hover:border-brand-green/50 p-8 md:p-10 transition-all duration-300 overflow-hidden">
            {/* Highlight Glow Effect */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-green/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-brand-green/20 transition-colors duration-500" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-green/30 bg-brand-green/10 text-brand-green text-xs font-mono mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
                  </span>
                  Live Product
                </div>
                
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl font-bold text-text-primary">ReplyDesk</h3>
                  <a 
                    href="https://replydesk.in" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hidden md:flex items-center gap-2 px-4 py-2 bg-brand-green text-bg-dark font-medium rounded hover:bg-brand-green/90 transition-colors"
                  >
                    View Live <ExternalLink size={16} />
                  </a>
                </div>

                <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                  An AI-powered review management SaaS designed for local businesses. It aggregates and syncs reviews across Google, Meta, Yelp, Trustpilot, and G2, generating intelligent draft responses using Groq/Llama models. Features robust sentiment analytics and seamless Razorpay billing integration.
                </p>

                <div className="flex flex-wrap gap-3 mb-8 md:mb-0">
                  {['Next.js', 'TypeScript', 'Supabase', 'Groq AI', 'Razorpay'].map(tag => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 text-sm font-mono rounded bg-bg-dark border border-border-subtle text-text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a 
                  href="https://replydesk.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="md:hidden inline-flex items-center gap-2 px-4 py-2 mt-4 bg-brand-green text-bg-dark font-medium rounded hover:bg-brand-green/90 transition-colors"
                >
                  View Live <ExternalLink size={16} />
                </a>
              </div>
              
              <div className="rounded-xl overflow-hidden border border-border-subtle hover:border-brand-green/30 transition-colors shadow-xl group/image relative">
                <img src="/assets/ReplyDesk/MainImage.png" alt="ReplyDesk Dashboard" className="w-full h-auto object-cover group-hover/image:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-brand-green/10 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
