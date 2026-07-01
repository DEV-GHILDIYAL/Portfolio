import { motion } from 'framer-motion';

const skills = [
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'GitHub Actions', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', invert: true },
  { name: 'Prometheus', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg' },
  { name: 'Grafana', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-bg-dark relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-text-primary">01. About Me</h2>
            <div className="h-[1px] bg-border-subtle flex-1"></div>
          </div>
          
          <div className="text-text-secondary text-lg leading-relaxed mb-12 space-y-4">
            <p>
              I'm a CS graduate and currently a Web Ops Analyst at eClerx, transitioning into a DevOps / Cloud Engineering role. I specialize in building, automating, and scaling infrastructure.
            </p>
            <p>
              My approach is hands-on: I don't just follow tutorials. I build and deploy real-world projects, from full CI/CD pipelines to robust monitoring stacks and cloud infrastructure.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 items-center justify-center md:justify-start">
            {skills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group relative flex flex-col items-center justify-center w-16 h-16 rounded-xl bg-bg-card border border-border-subtle hover:border-brand-green/50 transition-colors"
                title={skill.name}
              >
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className={`w-8 h-8 ${skill.invert ? 'filter invert brightness-0' : ''} group-hover:scale-110 transition-transform duration-300`} 
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
