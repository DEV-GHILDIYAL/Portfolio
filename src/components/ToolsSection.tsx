import { motion } from 'framer-motion';
import ProjectCard from './ui/ProjectCard';

const tools = [
  {
    title: "OpsKnowledge",
    description: "Personal DevOps mastery platform featuring 197 structured learning topics, 985 pre-written interview Q&As, daily AI-generated practice questions (Groq/Llama 3.3 70B via Supabase Edge Functions), and a Leitner spaced-repetition flashcard system with progress analytics.",
    tags: ["React", "Supabase", "Groq AI", "Spaced Repetition", "Edge Functions"],
    githubUrl: "https://github.com/DEV-GHILDIYAL",
    imageUrl: "/assets/OpsKnowledge/MainImage.png"
  },
  {
    title: "SiteLens",
    description: "A comprehensive Chrome side panel extension designed for web accessibility, SEO analysis, and design auditing directly in the browser.",
    tags: ["Chrome Extension", "Manifest V3", "Accessibility", "SEO", "Vanilla JS"],
    githubUrl: "https://github.com/DEV-GHILDIYAL",
    imageUrl: "/assets/SIteLense/Screenshot%202026-07-02%20020541.png"
  }
];

export default function ToolsSection() {
  return (
    <section id="tools" className="py-24 px-6 bg-bg-dark relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-bold text-text-primary">05. Tools & Extensions</h2>
            <div className="h-[1px] bg-border-subtle flex-1"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tools.map((tool, index) => (
              <ProjectCard 
                key={index}
                {...tool}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
