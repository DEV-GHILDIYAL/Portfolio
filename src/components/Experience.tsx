import { motion } from 'framer-motion';

const experiences = [
  {
    title: "Web Ops Analyst",
    company: "eClerx",
    date: "November 2025 - Present",
    description: "Managing and optimizing web operations. Actively applying DevOps principles by exploring CI/CD workflows, automating infrastructure tasks, and improving system reliability.",
    tech: ["Web Operations", "Linux", "Automation"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-bg-dark relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-bold text-text-primary">02. Experience</h2>
            <div className="h-[1px] bg-border-subtle flex-1"></div>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative pl-8 border-l border-border-subtle hover:border-brand-green/50 transition-colors"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-brand-green shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-text-primary">
                    {exp.title} <span className="text-brand-green">@ {exp.company}</span>
                  </h3>
                  <span className="font-mono text-sm text-text-secondary mt-1 sm:mt-0">
                    {exp.date}
                  </span>
                </div>
                
                <p className="text-text-secondary leading-relaxed mb-4">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map(t => (
                    <span 
                      key={t}
                      className="text-xs font-mono px-2.5 py-1 bg-bg-card border border-border-subtle rounded text-text-secondary hover:text-brand-green transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
