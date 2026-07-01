import { motion } from 'framer-motion';

const skillCategories = [
  {
    category: "Cloud",
    skills: ["AWS", "EC2", "S3", "IAM", "VPC", "DynamoDB"]
  },
  {
    category: "Infrastructure as Code",
    skills: ["Terraform"]
  },
  {
    category: "Containers",
    skills: ["Docker", "Docker Compose", "Kubernetes"]
  },
  {
    category: "CI/CD & VCS",
    skills: ["GitHub Actions", "Git", "GitHub"]
  },
  {
    category: "Monitoring & Web Ops",
    skills: ["Prometheus", "Grafana", "Linux", "Nginx"]
  },
  {
    category: "Development",
    skills: ["Python", "TypeScript", "Bash", "React", "Next.js", "Supabase"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-bg-dark relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-bold text-text-primary">06. Technical Arsenal</h2>
            <div className="h-[1px] bg-border-subtle flex-1"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {skillCategories.map((group, index) => (
              <motion.div 
                key={group.category}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex flex-col"
              >
                <h3 className="text-lg font-bold text-text-primary mb-4 font-mono">
                  <span className="text-brand-green mr-2">&gt;</span>{group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map(skill => (
                    <span 
                      key={skill}
                      className="px-3 py-1.5 bg-bg-card border border-border-subtle rounded text-sm text-text-secondary hover:text-brand-green hover:border-brand-green/50 transition-colors"
                    >
                      {skill}
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
