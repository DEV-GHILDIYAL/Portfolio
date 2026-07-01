import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  imageUrl?: string;
}

export default function ProjectCard({ 
  title, 
  description, 
  tags, 
  githubUrl, 
  liveUrl,
  featured = false,
  imageUrl
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={`relative group bg-bg-card rounded-xl border border-border-subtle hover:border-brand-green/50 p-6 flex flex-col h-full transition-all duration-300 ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      {/* Subtle hover glow */}
      <div className="absolute inset-0 rounded-xl bg-brand-green/0 group-hover:bg-brand-green/5 transition-colors duration-300 pointer-events-none" />
      
      {imageUrl && (
        <div className="w-full h-48 mb-6 overflow-hidden rounded-lg relative z-10 border border-border-subtle group-hover:border-brand-green/30 transition-colors">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
      )}

      <div className="flex justify-between items-start mb-4 relative z-10">
        <h3 className="text-xl font-bold text-text-primary group-hover:text-brand-green transition-colors">
          {title}
        </h3>
        <div className="flex gap-3 text-text-secondary">
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-brand-green transition-colors"
              aria-label={`GitHub repository for ${title}`}
            >
              <GithubIcon size={20} />
            </a>
          )}
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-brand-green transition-colors"
              aria-label={`Live demo for ${title}`}
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      <p className="text-text-secondary mb-6 flex-grow relative z-10">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto relative z-10">
        {tags.map(tag => (
          <span 
            key={tag} 
            className="px-2.5 py-1 text-xs font-mono rounded bg-bg-dark border border-border-subtle text-text-secondary"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
