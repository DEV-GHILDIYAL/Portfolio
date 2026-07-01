import { motion } from 'framer-motion';
import ProjectCard from './ui/ProjectCard';

const projects = [
  {
    title: "PipelineX",
    description: "A comprehensive CI/CD dashboard built to monitor and manage deployment pipelines. Orchestrates automated builds and deployments.",
    tags: ["CI/CD", "Docker", "Flask", "GitHub Actions"],
    githubUrl: "https://github.com/DEV-GHILDIYAL/PipelineX",
    featured: false
  },
  {
    title: "WatchTower",
    description: "Full monitoring stack utilizing Prometheus and Grafana. Features a custom Python psutil exporter for system metrics and Telegram alerting integration, containerized via Docker Compose.",
    tags: ["Monitoring", "Prometheus", "Grafana", "Docker Compose", "Alerting"],
    githubUrl: "https://github.com/DEV-GHILDIYAL",
    featured: false
  },
  {
    title: "AWS Infrastructure Automation",
    description: "Terraform-provisioned AWS infrastructure encompassing EC2, S3, IAM, and Security Groups. Implements GitHub Actions CI, an S3 backend, and DynamoDB for state locking.",
    tags: ["Terraform", "AWS", "IaC", "CI/CD"],
    githubUrl: "https://github.com/DEV-GHILDIYAL",
    featured: true
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-bg-dark relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-bold text-text-primary">03. DevOps Core</h2>
            <div className="h-[1px] bg-border-subtle flex-1"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index}
                {...project}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
