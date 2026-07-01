import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './ui/Icons';

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border-subtle bg-bg-dark text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <div className="flex items-center gap-6 mb-6">
          <a 
            href="https://github.com/DEV-GHILDIYAL" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-brand-green transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={24} />
          </a>
          <a 
            href="https://hub.docker.com/u/aixerdev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-brand-green transition-colors font-bold text-xl tracking-tighter"
            title="Docker Hub (aixerdev)"
          >
            {/* Custom Docker icon text fallback or just plain text */}
            DH.
          </a>
          <a 
            href="https://www.linkedin.com/in/dev-ghildiyal/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-brand-green transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={24} />
          </a>
          <a 
            href="mailto:ghildiyaldev1325@gmail.com" 
            className="text-text-secondary hover:text-brand-green transition-colors"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>
        
        <p className="text-text-secondary font-mono text-sm">
          Designed & Built by Ghildiyal <span className="text-brand-green">© {new Date().getFullYear()}</span>
        </p>
      </div>
    </footer>
  );
}
